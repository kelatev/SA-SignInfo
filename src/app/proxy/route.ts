import type { NextRequest } from 'next/server';

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

function isKhownHost(urlValue: string): boolean {
  try {
    if (urlValue.length > URL_MAX_LENGTH || !URL_REG_EX.test(urlValue)) {
      return false;
    }

    var uri = new URL(urlValue);
    if (uri.protocol != "http:" && uri.protocol != "https:") {
      return false;
    }
    var hostname = uri.hostname;

    if (hostname == null || hostname == "") hostname = urlValue;
    for (var i = 0; i < knownHosts.length; i++) {
      if (hostname == knownHosts[i]) return true;
    }
  } catch (e) { }

  return false;
}

function getContentType(urlValue: string): string {
  try {
    var sserverPathes = [
      "/cloud/api/back/",
      "/ss/",
      "/api/EDG/Sign",
      "/smartid/iit/",
      "/hogsmeade/striga/v1",
      "/iit-signer/api/v1",
    ];

    var uri = new URL(urlValue);

    for (var i = 0; i < sserverPathes.length; i++)
      if (uri.pathname.startsWith(sserverPathes[i])) return "application/json";

    switch (uri.pathname) {
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

async function handleRequest(method: string, path: string, data: string | null): Promise<string> {
  if (method !== "POST" && method !== "GET") {
    throw new Error('Invalid method');
  }

  let parsedPath: URL;
  try {
    parsedPath = new URL(path);
  } catch {
    throw new Error('Invalid path');
  }

  let address = parsedPath.searchParams.get(HTTP_REQUEST_PARAMETER_ADDRESS);
  if (!address) {
    throw new Error('Missing address parameter');
  }

  if (!address.includes('://')) {
    address = 'http://' + address;
  }

  if (!isKhownHost(address)) {
    throw new Error('Forbidden host');
  }

  let targetURL: URL;
  try {
    targetURL = new URL(address);
  } catch {
    throw new Error('Invalid address');
  }

  // Готовим body, если POST
  let body: Buffer | undefined;
  if (method === 'POST' && data !== null) {
    try {
      body = Buffer.from(data, 'base64');
      if (!body.length) throw new Error();
    } catch {
      throw new Error('Invalid base64 payload');
    }
  }

  const response = await fetch(targetURL.href, {
    method,
    headers: body
      ? {
        'Content-Type': getContentType(address),
        'Content-Length': String(body.length),
      }
      : undefined,
    body: body ? body : undefined,
  });

  if (!response.ok) {
    throw new Error(`Upstream error: ${response.status}`);
  }

  const responseBuffer = Buffer.from(await response.arrayBuffer());
  return responseBuffer.toString('base64');
}

async function processRequest(method: 'GET' | 'POST', request: NextRequest): Promise<Response> {
  try {
    const url = request.url;
    const body = method === 'POST' ? await request.text() : null;

    const resultBase64 = await handleRequest(method, url, body);

    return new Response(resultBase64, {
      status: 200,
      headers: {
        'Content-Type': 'X-user/base64-data; charset=utf-8'
      }
    });
  } catch (error: any) {
    console.error(`Error during ${method} request:`, error);
    return new Response(error?.message || 'Internal error', { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  return processRequest('GET', request);
}

export async function POST(request: NextRequest) {
  return processRequest('POST', request);
}