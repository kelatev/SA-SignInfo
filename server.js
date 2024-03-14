const express = require("express");
const router = express.Router();

var url = require("url");
var http = require("http");
var https = require("https");

const HTTP_REQUEST_PARAMETER_ADDRESS = "address";

const URL_MAX_LENGTH = 255;
const URL_REG_EX = /^(https?:\/\/)?([a-zA-Z0-9.\-]+)(:[0-9]{1,5})?(\/(.*))?$/;

var knownHosts = [
    "czo.gov.ua",
    "zc.bank.gov.ua",
    "acskidd.gov.ua",
    "ca.informjust.ua",
    "csk.uz.gov.ua",
    "masterkey.ua",
    "ocsp.masterkey.ua",
    "tsp.masterkey.ua",
    "csk.uss.gov.ua",
    "csk.ukrsibbank.com",
    "acsk.privatbank.ua",
    "ca.mil.gov.ua",
    "acsk.dpsu.gov.ua",
    "acsk.er.gov.ua",
    "ca.mvs.gov.ua",
    "canbu.bank.gov.ua",
    "uakey.com.ua",
    "altersign.com.ua",
    "ca.altersign.com.ua",
    "ocsp.altersign.com.ua",
    "acsk.treasury.gov.ua",
    "ocsp.treasury.gov.ua",
    "ca.oschadbank.ua",
    "ca.gp.gov.ua",
    "acsk.oree.com.ua",
    "ca.treasury.gov.ua",
    "ca.depositsign.com",
    "ca.alfabank.kiev.ua",
    "cesaris.itsway.kiev.ua",
    "ca.credit-agricole.ua",
    "ca.e-life.com.ua",
    "ocsp.e-life.com.ua",
    "tsp.e-life.com.ua",
    "cmp.e-life.com.ua",
    "ca.bankalliance.ua",
    "ca.vchasno.ua",
    "qca.ukrgasbank.com",
    "ca.tax.gov.ua",
    "ca.diia.gov.ua",
    "ca.sensebank.com.ua",
    "ca.tascombank.com.ua",
    "ca.tascombank.ua",
    "va1-knedp.ssu.gov.ua",
    "root-test.czo.gov.ua",
    "ca-test.czo.gov.ua",
    "ca.iit.com.ua",
];

function isKhownHost(urlValue) {
    try {
        if (urlValue.length > URL_MAX_LENGTH || !URL_REG_EX.test(urlValue)) {
            return false;
        }

        var uri = url.parse(urlValue);
        if (uri.protocol != "http:" && uri.protocol != "https:") {
            return false;
        }
        var hostname = uri.hostname;

        if (hostname == null || hostname == "") hostname = urlValue;
        for (var i = 0; i < knownHosts.length; i++) {
            if (hostname == knownHosts[i]) return true;
        }
    } catch (e) {}

    return false;
}

function getContentType(urlValue) {
    try {
        var sserverPathes = [
            "/cloud/api/back/",
            "/ss/",
            "/api/EDG/Sign",
            "/smartid/iit/",
            "/hogsmeade/striga/v1",
            "/iit-signer/api/v1",
        ];

        var uri = url.parse(urlValue);

        for (var i = 0; i < sserverPathes.length; i++)
            if (uri.path.startsWith(sserverPathes[i])) return "application/json";

        switch (uri.path) {
            case "/services/cmp":
            case "/public/x509/cmp":
            case "/cmp":
            case "/api/PKI/CMP":
                return "";

            case "/services/ocsp":
            case "/services/ocsp/":
            case "/public/ocsp":
            case "/ocsp":
            case "/ocsp-rsa":
            case "/ocsp-ecdsa":
            case "/OCSPsrv/ocsp":
            case "/queries/ocsp/":
                return "application/ocsp-request";

            case "/services/tsp":
            case "/services/tsp/":
            case "/services/tsp/dstu":
            case "/services/tsp/dstu/":
            case "/services/tsp/rsa":
            case "/services/tsp/rsa/":
            case "/services/tsp/ecdsa":
            case "/services/tsp/ecdsa/":
            case "/public/tsa":
            case "/public/tsp":
            case "/tsp":
            case "/tsp-rsa":
            case "/tsp-ecdsa":
            case "/TspHTTPServer/tsp":
                return "application/timestamp-query";

            default:
                return "";
        }
    } catch (e) {
        return "";
    }
}

function handleRequest(method, path, data, resolve, reject) {
    try {
        if (method !== "POST" && method !== "GET") {
            reject(400);
            return;
        }
        if (method === "POST") {
            data = Buffer.from(data + "", "base64");
            if (!data) {
                reject(400);
                return;
            }
        }

        var pathURL = url.parse(path, true);
        var address = pathURL.query[HTTP_REQUEST_PARAMETER_ADDRESS];
        if (!address || address == "") {
            reject(400);
            return;
        }

        if (address.indexOf("://") === -1) address = "http://" + address;

        if (!isKhownHost(address)) {
            reject(403);
            return;
        }

        var addressURL = url.parse(address, false);
        var protocol = addressURL.protocol;
        var hostname = addressURL.hostname;
        var path = addressURL.path;
        var port = addressURL.port;
        var connector = protocol === "http:" ? http : https;

        var options = {
            hostname: hostname,
            port: port,
            path: path,
            method: method,
        };

        if (method === "POST") {
            options.headers = {};
            options.headers["Content-Type"] = getContentType(address);
            options.headers["Content-Length"] = data.length;
        }

        var request = connector.request(options, response => {
            var data = [];
            response.on("data", chunk => {
                data.push(chunk);
            });

            response.on("end", () => {
                data = Buffer.concat(data);
                data = new Buffer(data).toString("base64");
                resolve(data);
            });
        });

        request.on("error", e => {
            console.error(e);
            reject(500);
        });

        if (method === "POST") {
            data = Buffer.from(data, "base64");
            request.write(data);
            request.end();
        } else {
            request.end();
        }
    } catch (e) {
        console.error(e);
        reject(500);
    }
}

router.get("/proxy", (_req, res) => {
    return res.status(400).send("Виникла помилка при обробці запиту");
});

router.post("/proxy", (req, res) => {
    var _onData = function (data) {
        return new Promise(function (resolve, reject) {
            handleRequest(req.method, req.url, data, resolve, reject);
        })
            .then(function (data) {
                res.status(200).contentType("X-user/base64-data; charset=utf-8").send(data);
            })
            .catch(function (status) {
                res.status(status).send("Виникла помилка при обробці запиту");
            });
    };

    if (req.method === "GET") {
        return _onData(null);
    } else {
        return _onData(req.body);
    }
});

module.exports = router;
