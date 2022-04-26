!function(c) {
    var e = {};
    function a(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return c[r].call(i.exports, i, i.exports, a),
            i.l = !0,
            i.exports
    }
    a.m = c,
        a.c = e,
        a.d = function(c, e, r) {
            a.o(c, e) || Object.defineProperty(c, e, {
                enumerable: !0,
                get: r
            })
        }
        ,
        a.r = function(c) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(c, "__esModule", {
                    value: !0
                })
        }
        ,
        a.t = function(c, e) {
            if (1 & e && (c = a(c)),
            8 & e)
                return c;
            if (4 & e && "object" == typeof c && c && c.__esModule)
                return c;
            var r = Object.create(null);
            if (a.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: c
                }),
            2 & e && "string" != typeof c)
                for (var i in c)
                    a.d(r, i, function(e) {
                        return c[e]
                    }
                        .bind(null, i));
            return r
        }
        ,
        a.n = function(c) {
            var e = c && c.__esModule ? function() {
                        return c.default
                    }
                    : function() {
                        return c
                    }
            ;
            return a.d(e, "a", e),
                e
        }
        ,
        a.o = function(c, e) {
            return Object.prototype.hasOwnProperty.call(c, e)
        }
        ,
        a.p = "",
        a(a.s = 1)
}([function(c, e, a) {
    c.exports = function(c) {
        var e = {};
        function a(r) {
            if (e[r])
                return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return c[r].call(i.exports, i, i.exports, a),
                i.l = !0,
                i.exports
        }
        return a.m = c,
            a.c = e,
            a.d = function(c, e, r) {
                a.o(c, e) || Object.defineProperty(c, e, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            a.r = function(c) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(c, "__esModule", {
                        value: !0
                    })
            }
            ,
            a.t = function(c, e) {
                if (1 & e && (c = a(c)),
                8 & e)
                    return c;
                if (4 & e && "object" == typeof c && c && c.__esModule)
                    return c;
                var r = Object.create(null);
                if (a.r(r),
                    Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: c
                    }),
                2 & e && "string" != typeof c)
                    for (var i in c)
                        a.d(r, i, function(e) {
                            return c[e]
                        }
                            .bind(null, i));
                return r
            }
            ,
            a.n = function(c) {
                var e = c && c.__esModule ? function() {
                            return c.default
                        }
                        : function() {
                            return c
                        }
                ;
                return a.d(e, "a", e),
                    e
            }
            ,
            a.o = function(c, e) {
                return Object.prototype.hasOwnProperty.call(c, e)
            }
            ,
            a.p = "",
            a(a.s = 4)
    }([function(c, e, a) {
        "use strict";
        a.r(e),
            a.d(e, "EU_ERROR_NONE", (function() {
                    return r
                }
            )),
            a.d(e, "EU_ERROR_UNKNOWN", (function() {
                    return i
                }
            )),
            a.d(e, "EU_ERROR_NOT_SUPPORTED", (function() {
                    return t
                }
            )),
            a.d(e, "EU_ERROR_NOT_INITIALIZED", (function() {
                    return n
                }
            )),
            a.d(e, "EU_ERROR_BAD_PARAMETER", (function() {
                    return b
                }
            )),
            a.d(e, "EU_ERROR_LIBRARY_LOAD", (function() {
                    return f
                }
            )),
            a.d(e, "EU_ERROR_READ_SETTINGS", (function() {
                    return d
                }
            )),
            a.d(e, "EU_ERROR_TRANSMIT_REQUEST", (function() {
                    return u
                }
            )),
            a.d(e, "EU_ERROR_MEMORY_ALLOCATION", (function() {
                    return o
                }
            )),
            a.d(e, "EU_WARNING_END_OF_ENUM", (function() {
                    return l
                }
            )),
            a.d(e, "EU_ERROR_PROXY_NOT_AUTHORIZED", (function() {
                    return s
                }
            )),
            a.d(e, "EU_ERROR_NO_GUI_DIALOGS", (function() {
                    return h
                }
            )),
            a.d(e, "EU_ERROR_DOWNLOAD_FILE", (function() {
                    return g
                }
            )),
            a.d(e, "EU_ERROR_WRITE_SETTINGS", (function() {
                    return k
                }
            )),
            a.d(e, "EU_ERROR_CANCELED_BY_GUI", (function() {
                    return m
                }
            )),
            a.d(e, "EU_ERROR_OFFLINE_MODE", (function() {
                    return j
                }
            )),
            a.d(e, "EU_ERROR_KEY_MEDIAS_FAILED", (function() {
                    return p
                }
            )),
            a.d(e, "EU_ERROR_KEY_MEDIAS_ACCESS_FAILED", (function() {
                    return v
                }
            )),
            a.d(e, "EU_ERROR_KEY_MEDIAS_READ_FAILED", (function() {
                    return E
                }
            )),
            a.d(e, "EU_ERROR_KEY_MEDIAS_WRITE_FAILED", (function() {
                    return _
                }
            )),
            a.d(e, "EU_WARNING_KEY_MEDIAS_READ_ONLY", (function() {
                    return K
                }
            )),
            a.d(e, "EU_ERROR_KEY_MEDIAS_DELETE", (function() {
                    return w
                }
            )),
            a.d(e, "EU_ERROR_KEY_MEDIAS_CLEAR", (function() {
                    return y
                }
            )),
            a.d(e, "EU_ERROR_BAD_PRIVATE_KEY", (function() {
                    return P
                }
            )),
            a.d(e, "EU_ERROR_PKI_FORMATS_FAILED", (function() {
                    return S
                }
            )),
            a.d(e, "EU_ERROR_CSP_FAILED", (function() {
                    return N
                }
            )),
            a.d(e, "EU_ERROR_BAD_SIGNATURE", (function() {
                    return A
                }
            )),
            a.d(e, "EU_ERROR_AUTH_FAILED", (function() {
                    return C
                }
            )),
            a.d(e, "EU_ERROR_NOT_RECEIVER", (function() {
                    return R
                }
            )),
            a.d(e, "EU_ERROR_STORAGE_FAILED", (function() {
                    return q
                }
            )),
            a.d(e, "EU_ERROR_BAD_CERT", (function() {
                    return I
                }
            )),
            a.d(e, "EU_ERROR_CERT_NOT_FOUND", (function() {
                    return x
                }
            )),
            a.d(e, "EU_ERROR_INVALID_CERT_TIME", (function() {
                    return T
                }
            )),
            a.d(e, "EU_ERROR_CERT_IN_CRL", (function() {
                    return U
                }
            )),
            a.d(e, "EU_ERROR_BAD_CRL", (function() {
                    return M
                }
            )),
            a.d(e, "EU_ERROR_NO_VALID_CRLS", (function() {
                    return O
                }
            )),
            a.d(e, "EU_ERROR_GET_TIME_STAMP", (function() {
                    return D
                }
            )),
            a.d(e, "EU_ERROR_BAD_TSP_RESPONSE", (function() {
                    return F
                }
            )),
            a.d(e, "EU_ERROR_TSP_SERVER_CERT_NOT_FOUND", (function() {
                    return B
                }
            )),
            a.d(e, "EU_ERROR_TSP_SERVER_CERT_INVALID", (function() {
                    return L
                }
            )),
            a.d(e, "EU_ERROR_GET_OCSP_STATUS", (function() {
                    return z
                }
            )),
            a.d(e, "EU_ERROR_BAD_OCSP_RESPONSE", (function() {
                    return G
                }
            )),
            a.d(e, "EU_ERROR_CERT_BAD_BY_OCSP", (function() {
                    return H
                }
            )),
            a.d(e, "EU_ERROR_OCSP_SERVER_CERT_NOT_FOUND", (function() {
                    return V
                }
            )),
            a.d(e, "EU_ERROR_OCSP_SERVER_CERT_INVALID", (function() {
                    return W
                }
            )),
            a.d(e, "EU_ERROR_LDAP_ERROR", (function() {
                    return J
                }
            )),
            a.d(e, "EndUserError", (function() {
                    return Y
                }
            ));
        var r = 0
            , i = 65535
            , t = 65534
            , n = 1
            , b = 2
            , f = 3
            , d = 4
            , u = 5
            , o = 6
            , l = 7
            , s = 8
            , h = 9
            , g = 10
            , k = 11
            , m = 12
            , j = 13
            , p = 17
            , v = 18
            , E = 19
            , _ = 20
            , K = 21
            , w = 22
            , y = 23
            , P = 24
            , S = 33
            , N = 34
            , A = 35
            , C = 36
            , R = 37
            , q = 49
            , I = 50
            , x = 51
            , T = 52
            , U = 53
            , M = 54
            , O = 55
            , D = 65
            , F = 66
            , B = 67
            , L = 68
            , z = 81
            , G = 82
            , H = 83
            , V = 84
            , W = 85
            , J = 97
            , Y = function() {}
    }
        , function(c, e, a) {
            "use strict";
            a.r(e),
                a.d(e, "EU_LIBRARY_TYPE_JS", (function() {
                        return i
                    }
                )),
                a.d(e, "EU_LIBRARY_TYPE_SW", (function() {
                        return t
                    }
                )),
                a.d(e, "EU_LIBRARY_TYPE_MS", (function() {
                        return n
                    }
                )),
                a.d(e, "EndUserLibraryType", (function() {
                        return r
                    }
                )),
                a.d(e, "EU_SUBJECT_TYPE_UNDIFFERENCED", (function() {
                        return f
                    }
                )),
                a.d(e, "EU_SUBJECT_TYPE_CA", (function() {
                        return d
                    }
                )),
                a.d(e, "EU_SUBJECT_TYPE_CA_SERVER", (function() {
                        return u
                    }
                )),
                a.d(e, "EU_SUBJECT_TYPE_RA_ADMINISTRATOR", (function() {
                        return o
                    }
                )),
                a.d(e, "EU_SUBJECT_TYPE_END_USER", (function() {
                        return l
                    }
                )),
                a.d(e, "EndUserSubjectType", (function() {
                        return b
                    }
                )),
                a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED", (function() {
                        return h
                    }
                )),
                a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP", (function() {
                        return g
                    }
                )),
                a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP", (function() {
                        return k
                    }
                )),
                a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP", (function() {
                        return m
                    }
                )),
                a.d(e, "EndUserSubjectCAServerSubType", (function() {
                        return s
                    }
                )),
                a.d(e, "EU_CERT_KEY_TYPE_UNKNOWN", (function() {
                        return p
                    }
                )),
                a.d(e, "EU_CERT_KEY_TYPE_DSTU4145", (function() {
                        return v
                    }
                )),
                a.d(e, "EU_CERT_KEY_TYPE_RSA", (function() {
                        return E
                    }
                )),
                a.d(e, "EU_CERT_KEY_TYPE_ECDSA", (function() {
                        return _
                    }
                )),
                a.d(e, "EndUserCertKeyType", (function() {
                        return j
                    }
                )),
                a.d(e, "EU_KEY_USAGE_UNKNOWN", (function() {
                        return w
                    }
                )),
                a.d(e, "EU_KEY_USAGE_DIGITAL_SIGNATURE", (function() {
                        return y
                    }
                )),
                a.d(e, "EU_KEY_USAGE_KEY_AGREEMENT", (function() {
                        return P
                    }
                )),
                a.d(e, "EndUserKeyUsage", (function() {
                        return K
                    }
                )),
                a.d(e, "EU_CCS_TYPE_REVOKE", (function() {
                        return N
                    }
                )),
                a.d(e, "EU_CCS_TYPE_HOLD", (function() {
                        return A
                    }
                )),
                a.d(e, "EndUserCCSType", (function() {
                        return S
                    }
                )),
                a.d(e, "EU_REVOCATION_REASON_UNKNOWN", (function() {
                        return R
                    }
                )),
                a.d(e, "EU_REVOCATION_REASON_KEY_COMPROMISE", (function() {
                        return q
                    }
                )),
                a.d(e, "EU_REVOCATION_REASON_NEW_ISSUED", (function() {
                        return I
                    }
                )),
                a.d(e, "EndUserRevocationReason", (function() {
                        return C
                    }
                )),
                a.d(e, "EU_KEYS_TYPE_NONE", (function() {
                        return T
                    }
                )),
                a.d(e, "EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST", (function() {
                        return U
                    }
                )),
                a.d(e, "EU_KEYS_TYPE_RSA_WITH_SHA", (function() {
                        return M
                    }
                )),
                a.d(e, "EndUserKeysType", (function() {
                        return x
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_UA_191", (function() {
                        return D
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_UA_257", (function() {
                        return F
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_UA_307", (function() {
                        return B
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_UA_FILE", (function() {
                        return L
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_UA_CERT", (function() {
                        return z
                    }
                )),
                a.d(e, "EndUserKeysLengthDSUA", (function() {
                        return O
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_KEP_UA_257", (function() {
                        return H
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_KEP_UA_431", (function() {
                        return V
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_KEP_UA_571", (function() {
                        return W
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_KEP_UA_FILE", (function() {
                        return J
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_KEP_UA_CERT", (function() {
                        return Y
                    }
                )),
                a.d(e, "EndUserKeysLengthKEPUA", (function() {
                        return G
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_RSA_1024", (function() {
                        return $
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_RSA_2048", (function() {
                        return Z
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_RSA_3072", (function() {
                        return X
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_RSA_4096", (function() {
                        return cc
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_RSA_FILE", (function() {
                        return ec
                    }
                )),
                a.d(e, "EU_KEYS_LENGTH_DS_RSA_CERT", (function() {
                        return ac
                    }
                )),
                a.d(e, "EndUserKeysLengthDSRSA", (function() {
                        return Q
                    }
                )),
                a.d(e, "EU_KEYS_REQUEST_TYPE_UA_DS", (function() {
                        return ic
                    }
                )),
                a.d(e, "EU_KEYS_REQUEST_TYPE_UA_KEP", (function() {
                        return tc
                    }
                )),
                a.d(e, "EU_KEYS_REQUEST_TYPE_INT_RSA", (function() {
                        return nc
                    }
                )),
                a.d(e, "EndUserRequestTypes", (function() {
                        return rc
                    }
                )),
                a.d(e, "EU_MOBILE_OPERATOR_ID_KYIVSTAR", (function() {
                        return fc
                    }
                )),
                a.d(e, "EU_MOBILE_OPERATOR_ID_VODAFONE", (function() {
                        return dc
                    }
                )),
                a.d(e, "EU_MOBILE_OPERATOR_ID_LIFECELL", (function() {
                        return uc
                    }
                )),
                a.d(e, "EndUserMobileOperatorID", (function() {
                        return bc
                    }
                )),
                a.d(e, "EU_KSP_IIT", (function() {
                        return lc
                    }
                )),
                a.d(e, "EU_KSP_UKEY", (function() {
                        return sc
                    }
                )),
                a.d(e, "EU_KSP_PB", (function() {
                        return hc
                    }
                )),
                a.d(e, "EndUserKSP", (function() {
                        return oc
                    }
                )),
                a.d(e, "EU_SIGN_TYPE_UNKNOWN", (function() {
                        return kc
                    }
                )),
                a.d(e, "EU_SIGN_TYPE_CADES_BES", (function() {
                        return mc
                    }
                )),
                a.d(e, "EU_SIGN_TYPE_CADES_T", (function() {
                        return jc
                    }
                )),
                a.d(e, "EU_SIGN_TYPE_CADES_C", (function() {
                        return pc
                    }
                )),
                a.d(e, "EU_SIGN_TYPE_CADES_X_LONG", (function() {
                        return vc
                    }
                )),
                a.d(e, "EndUserSignType", (function() {
                        return gc
                    }
                )),
                a.d(e, "EU_CTX_SIGN_UNKNOWN", (function() {
                        return _c
                    }
                )),
                a.d(e, "EU_CTX_SIGN_DSTU4145_WITH_GOST34311", (function() {
                        return Kc
                    }
                )),
                a.d(e, "EU_CTX_SIGN_RSA_WITH_SHA", (function() {
                        return wc
                    }
                )),
                a.d(e, "EU_CTX_SIGN_ECDSA_WITH_SHA", (function() {
                        return yc
                    }
                )),
                a.d(e, "EndUserSignAlgo", (function() {
                        return Ec
                    }
                )),
                a.d(e, "EU_SIGN_TYPE_PARAMETER", (function() {
                        return Sc
                    }
                )),
                a.d(e, "EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER", (function() {
                        return Nc
                    }
                )),
                a.d(e, "EU_UA_OID_EXT_KEY_USAGE_STAMP", (function() {
                        return Ac
                    }
                )),
                a.d(e, "EU_USER_INFO_VERSION", (function() {
                        return Cc
                    }
                )),
                a.d(e, "EndUserCMPCompatibility", (function() {
                        return Pc
                    }
                )),
                a.d(e, "EU_CTX_HASH_ALGO_UNKNOWN", (function() {
                        return Ic
                    }
                )),
                a.d(e, "EU_CTX_HASH_ALGO_GOST34311", (function() {
                        return xc
                    }
                )),
                a.d(e, "EU_CTX_HASH_ALGO_SHA160", (function() {
                        return Tc
                    }
                )),
                a.d(e, "EU_CTX_HASH_ALGO_SHA224", (function() {
                        return Uc
                    }
                )),
                a.d(e, "EU_CTX_HASH_ALGO_SHA256", (function() {
                        return Mc
                    }
                )),
                a.d(e, "EndUserHashAlgo", (function() {
                        return Rc
                    }
                )),
                a.d(e, "EndUserEventType", (function() {
                        return qc
                    }
                ));
            var r, i = 1, t = 2, n = 3;
            !function(c) {
                c[c.JS = i] = "JS",
                    c[c.SW = t] = "SW",
                    c[c.MS = n] = "MS"
            }(r || (r = {}));
            var b, f = 0, d = 1, u = 2, o = 3, l = 4;
            !function(c) {
                c[c.Undifferenced = f] = "Undifferenced",
                    c[c.CA = d] = "CA",
                    c[c.CAServer = u] = "CAServer",
                    c[c.RAAdministrator = o] = "RAAdministrator",
                    c[c.EndUser = l] = "EndUser"
            }(b || (b = {}));
            var s, h = 0, g = 1, k = 2, m = 3;
            !function(c) {
                c[c.Undifferenced = h] = "Undifferenced",
                    c[c.CMP = g] = "CMP",
                    c[c.TSP = k] = "TSP",
                    c[c.OCSP = m] = "OCSP"
            }(s || (s = {}));
            var j, p = 0, v = 1, E = 2, _ = 4;
            !function(c) {
                c[c.Unknown = p] = "Unknown",
                    c[c.DSTU4145 = v] = "DSTU4145",
                    c[c.RSA = E] = "RSA",
                    c[c.ECDSA = _] = "ECDSA"
            }(j || (j = {}));
            var K, w = 0, y = 1, P = 16;
            !function(c) {
                c[c.Unknown = p] = "Unknown",
                    c[c.DigitalSignature = y] = "DigitalSignature",
                    c[c.KeyAgreement = P] = "KeyAgreement"
            }(K || (K = {}));
            var S, N = 1, A = 2;
            !function(c) {
                c[c.Revoke = N] = "Revoke",
                    c[c.Hold = A] = "Hold"
            }(S || (S = {}));
            var C, R = 0, q = 1, I = 2;
            !function(c) {
                c[c.Unknown = R] = "Unknown",
                    c[c.KeyCompromise = q] = "KeyCompromise",
                    c[c.NewIssued = I] = "NewIssued"
            }(C || (C = {}));
            var x, T = 0, U = 1, M = 2;
            !function(c) {
                c[c.None = T] = "None",
                    c[c.DSTUAndECDHWithGOST = U] = "DSTUAndECDHWithGOST",
                    c[c.RSAWithSHA = M] = "RSAWithSHA"
            }(x || (x = {}));
            var O, D = 1, F = 2, B = 3, L = 4, z = 5;
            !function(c) {
                c[c.EC_191 = D] = "EC_191",
                    c[c.EC_257 = F] = "EC_257",
                    c[c.EC_307 = B] = "EC_307",
                    c[c.File = L] = "File",
                    c[c.Cert = z] = "Cert"
            }(O || (O = {}));
            var G, H = 1, V = 2, W = 3, J = 4, Y = 5;
            !function(c) {
                c[c.EC_257 = H] = "EC_257",
                    c[c.EC_431 = V] = "EC_431",
                    c[c.EC_571 = W] = "EC_571",
                    c[c.File = L] = "File",
                    c[c.Cert = z] = "Cert"
            }(G || (G = {}));
            var Q, $ = 1, Z = 2, X = 3, cc = 4, ec = 5, ac = 6;
            !function(c) {
                c[c.N_1024 = $] = "N_1024",
                    c[c.N_2048 = Z] = "N_2048",
                    c[c.N_3072 = X] = "N_3072",
                    c[c.N_4096 = cc] = "N_4096",
                    c[c.File = L] = "File",
                    c[c.Cert = z] = "Cert"
            }(Q || (Q = {}));
            var rc, ic = 1, tc = 2, nc = 3;
            !function(c) {
                c[c.uaDS = ic] = "uaDS",
                    c[c.uaKEP = tc] = "uaKEP",
                    c[c.intRSA = nc] = "intRSA"
            }(rc || (rc = {}));
            var bc, fc = 1, dc = 2, uc = 3;
            !function(c) {
                c[c.Kyivstar = fc] = "Kyivstar",
                    c[c.Vodafone = dc] = "Vodafone",
                    c[c.Lifecell = uc] = "Lifecell"
            }(bc || (bc = {}));
            var oc, lc = 4, sc = 5, hc = 6;
            !function(c) {
                c[c.Kyivstar = fc] = "Kyivstar",
                    c[c.Vodafone = dc] = "Vodafone",
                    c[c.Lifecell = uc] = "Lifecell",
                    c[c.IIT = lc] = "IIT",
                    c[c.UKey = sc] = "UKey",
                    c[c.PB = hc] = "PB"
            }(oc || (oc = {}));
            var gc, kc = 0, mc = 1, jc = 4, pc = 8, vc = 16;
            !function(c) {
                c[c.Unknown = kc] = "Unknown",
                    c[c.CAdES_BES = mc] = "CAdES_BES",
                    c[c.CAdES_T = jc] = "CAdES_T",
                    c[c.CAdES_C = pc] = "CAdES_C",
                    c[c.CAdES_X_Long = vc] = "CAdES_X_Long"
            }(gc || (gc = {}));
            var Ec, _c = 0, Kc = 1, wc = 2, yc = 3;
            !function(c) {
                c[c.Unknown = _c] = "Unknown",
                    c[c.DSTU4145WithGOST34311 = Kc] = "DSTU4145WithGOST34311",
                    c[c.RSAWithSHA = wc] = "RSAWithSHA",
                    c[c.ECDSAWithSHA = yc] = "ECDSAWithSHA"
            }(Ec || (Ec = {}));
            var Pc, Sc = "SignType", Nc = "CheckPrivateKey", Ac = "1.2.804.2.1.1.1.3.9", Cc = 3;
            !function(c) {
                c[c.None = 0] = "None",
                    c[c.DownloadEUCerts = 1] = "DownloadEUCerts",
                    c[c.SearchEUCerts = 2] = "SearchEUCerts"
            }(Pc || (Pc = {}));
            var Rc, qc, Ic = 0, xc = 1, Tc = 2, Uc = 3, Mc = 4;
            !function(c) {
                c[c.Unknown = Ic] = "Unknown",
                    c[c.GOST34311 = xc] = "GOST34311",
                    c[c.SHA160 = Tc] = "SHA160",
                    c[c.SHA224 = Uc] = "SHA224",
                    c[c.SHA256 = Mc] = "SHA256"
            }(Rc || (Rc = {})),
                function(c) {
                    c[c.None = 0] = "None",
                        c[c.All = 1] = "All",
                        c[c.ConfirmKSPOperation = 2] = "ConfirmKSPOperation"
                }(qc || (qc = {}))
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return n
                }
            ));
            var r = a(5)
                , i = a(7)
                , t = a(4)
                , n = function() {
                function c() {}
                return c.MapFromKeyMedia = function(c, e) {
                    return e.SetTypeIndex(c.typeIndex),
                        e.SetDevIndex(c.devIndex),
                        e.SetPassword(c.user ? "##" + c.user + "##" + c.password : c.password),
                        e
                }
                    ,
                    c.MapToProxySettings = function(c, e) {
                        return e.useProxy = c.GetUseProxy(),
                            e.address = c.GetAddress(),
                            e.port = c.GetPort(),
                            e.anonymous = c.GetAnonymous(),
                            e.user = c.GetUser(),
                            e.password = c.GetPassword(),
                            e.savePassword = c.GetSavePassword(),
                            e
                    }
                    ,
                    c.MapFromProxySettings = function(c, e) {
                        return e.SetUseProxy(c.useProxy),
                            e.SetAddress(c.address),
                            e.SetPort(c.port),
                            e.SetAnonymous(c.anonymous),
                            e.SetUser(c.user),
                            e.SetPassword(c.password),
                            e.SetSavePassword(c.savePassword),
                            e
                    }
                    ,
                    c.MapEndUserOwnerInfo = function(c, e) {
                        return e.isFilled = c.IsFilled(),
                            e.issuer = c.GetIssuer(),
                            e.issuerCN = c.GetIssuerCN(),
                            e.serial = c.GetSerial(),
                            e.subject = c.GetSubject(),
                            e.subjCN = c.GetSubjCN(),
                            e.subjOrg = c.GetSubjOrg(),
                            e.subjOrgUnit = c.GetSubjOrgUnit(),
                            e.subjTitle = c.GetSubjTitle(),
                            e.subjState = c.GetSubjState(),
                            e.subjLocality = c.GetSubjLocality(),
                            e.subjFullName = c.GetSubjFullName(),
                            e.subjAddress = c.GetSubjAddress(),
                            e.subjPhone = c.GetSubjPhone(),
                            e.subjEMail = c.GetSubjEMail(),
                            e.subjDNS = c.GetSubjDNS(),
                            e.subjEDRPOUCode = c.GetSubjEDRPOUCode(),
                            e.subjDRFOCode = c.GetSubjDRFOCode(),
                            e
                    }
                    ,
                    c.MapToEndUserCertificateInfoEx = function(c, e) {
                        return e.isFilled = c.IsFilled(),
                            e.version = c.GetVersion(),
                            e.issuer = c.GetIssuer(),
                            e.issuerCN = c.GetIssuerCN(),
                            e.serial = c.GetSerial(),
                            e.subject = c.GetSubject(),
                            e.subjCN = c.GetSubjCN(),
                            e.subjOrg = c.GetSubjOrg(),
                            e.subjOrgUnit = c.GetSubjOrgUnit(),
                            e.subjTitle = c.GetSubjTitle(),
                            e.subjState = c.GetSubjState(),
                            e.subjLocality = c.GetSubjLocality(),
                            e.subjFullName = c.GetSubjFullName(),
                            e.subjAddress = c.GetSubjAddress(),
                            e.subjPhone = c.GetSubjPhone(),
                            e.subjEMail = c.GetSubjEMail(),
                            e.subjDNS = c.GetSubjDNS(),
                            e.subjEDRPOUCode = c.GetSubjEDRPOUCode(),
                            e.subjDRFOCode = c.GetSubjDRFOCode(),
                            e.subjNBUCode = c.GetSubjNBUCode(),
                            e.subjSPFMCode = c.GetSubjSPFMCode(),
                            e.subjOCode = c.GetSubjOCode(),
                            e.subjOUCode = c.GetSubjOUCode(),
                            e.subjUserCode = c.GetSubjUserCode(),
                            e.certBeginTime = c.GetCertBeginTime(),
                            e.certEndTime = c.GetCertEndTime(),
                            e.isPrivKeyTimesAvail = c.IsPrivKeyTimesAvail(),
                            e.privKeyBeginTime = c.GetPrivKeyBeginTime(),
                            e.privKeyEndTime = c.GetPrivKeyEndTime(),
                            e.publicKeyBits = c.GetPublicKeyBits(),
                            e.publicKey = c.GetPublicKey(),
                            e.publicKeyID = c.GetPublicKeyID(),
                            e.issuerPublicKeyID = c.GetIssuerPublicKeyID(),
                            e.keyUsage = c.GetKeyUsage(),
                            e.extKeyUsages = c.GetExtKeyUsages(),
                            e.policies = c.GetPolicies(),
                            e.crlDistribPoint1 = c.GetCRLDistribPoint1(),
                            e.crlDistribPoint2 = c.GetCRLDistribPoint2(),
                            e.isPowerCert = c.IsPowerCert(),
                            e.isSubjTypeAvail = c.IsSubjTypeAvail(),
                            e.isSubjCA = c.IsSubjCA(),
                            e.chainLength = c.GetChainLength(),
                            e.UPN = c.GetUPN(),
                            e.publicKeyType = c.GetPublicKeyType(),
                            e.keyUsageType = c.GetKeyUsageType(),
                            e.RSAModul = c.GetRSAModul(),
                            e.RSAExponent = c.GetRSAExponent(),
                            e.OCSPAccessInfo = c.GetOCSPAccessInfo(),
                            e.issuerAccessInfo = c.GetIssuerAccessInfo(),
                            e.TSPAccessInfo = c.GetTSPAccessInfo(),
                            e.isLimitValueAvailable = c.IsLimitValueAvail(),
                            e.limitValue = c.GetLimitValue(),
                            e.limitValueCurrency = c.GetLimitValueCurrency(),
                            e.subjType = c.GetSubjType(),
                            e.subjSubType = c.GetSubjSubType(),
                            e.subjUNZR = c.GetSubjUNZR(),
                            e.subjCountry = c.GetSubjCountry(),
                            e.isQSCD = c.IsQSCD(),
                            e.subjUserID = c.GetSubjUserID(),
                            e
                    }
                    ,
                    c.MapToEndUserParams = function(c, e) {
                        return e.SN = c.GetSN(),
                            e.commonName = c.GetCommonName(),
                            e.locality = c.GetLocality(),
                            e.state = c.GetState(),
                            e.organization = c.GetOrganization(),
                            e.orgUnit = c.GetOrgUnit(),
                            e.title = c.GetTitle(),
                            e.street = c.GetStreet(),
                            e.phone = c.GetPhone(),
                            e.surname = c.GetSurname(),
                            e.givenname = c.GetGivenname(),
                            e.EMail = c.GetEMail(),
                            e.DNS = c.GetDNS(),
                            e.EDRPOUCode = c.GetEDRPOUCode(),
                            e.DRFOCode = c.GetDRFOCode(),
                            e.NBUCode = c.GetNBUCode(),
                            e.SPFMCode = c.GetSPFMCode(),
                            e.information = c.GetInformation(),
                            e.passPhrase = c.GetPassPhrase(),
                            e.isPublishCertificate = c.GetIsPublishCertificate(),
                            e.RAAdminSN = c.GetRAAdminSN(),
                            e
                    }
                    ,
                    c.MapToEndUserTimeInfo = function(c, e) {
                        return e.version = c.GetVersion(),
                            e.isTimeAvail = c.IsTimeAvail(),
                            e.isTimeStamp = c.IsTimeStamp(),
                            e.time = c.GetTime(),
                            e.isSignTimeStampAvail = c.IsSignTimeStampAvail(),
                            e.signTimeStamp = c.GetSignTimeStamp(),
                            e
                    }
                    ,
                    c.MapToEndUserSignInfo = function(e, a) {
                        return a.ownerInfo = c.MapEndUserOwnerInfo(e.GetOwnerInfo(), new i.a),
                            a.timeInfo = c.MapToEndUserTimeInfo(e.GetTimeInfo(), new t.EndUserTimeInfo),
                            a.data = e.GetData(),
                            a
                    }
                    ,
                    c.MapToEndUserSenderInfo = function(e, a) {
                        return a.ownerInfo = c.MapEndUserOwnerInfo(e.GetOwnerInfo(), new i.a),
                            a.timeInfo = c.MapToEndUserTimeInfo(e.GetTimeInfo(), new t.EndUserTimeInfo),
                            a.data = e.GetData(),
                            a
                    }
                    ,
                    c.MapToEndUserCertificate = function(e, a) {
                        return a.data = e.GetData(),
                            a.infoEx = c.MapToEndUserCertificateInfoEx(e.GetInfoEx(), new r.a),
                            a
                    }
                    ,
                    c.MapFromEndUserInfo = function(c, e) {
                        return e.SetCommonName(c.commonName),
                            e.SetLocality(c.locality),
                            e.SetState(c.state),
                            e.SetOrganization(c.organization),
                            e.SetOrgUnit(c.orgUnit),
                            e.SetTitle(c.title),
                            e.SetStreet(c.street),
                            e.SetPhone(c.phone),
                            e.SetSurname(c.surname),
                            e.SetGivenname(c.givenname),
                            e.SetEMail(c.EMail),
                            e.SetDNS(c.DNS),
                            e.SetEDRPOUCode(c.EDRPOUCode),
                            e.SetDRFOCode(c.DRFOCode),
                            e.SetNBUCode(c.NBUCode),
                            e.SetSPFMCode(c.SPFMCode),
                            e.SetOCode(c.OCode),
                            e.SetOUCode(c.OUCode),
                            e.SetUserCode(c.userCode),
                            e.SetUPN(c.UPN),
                            e.SetUNZR(c.UNZR),
                            e.SetCountry(c.country),
                            e
                    }
                    ,
                    c.MapToEndUserRequestInfo = function(c, e) {
                        return e.isFilled = !0,
                            e.data = c.GetRequest(),
                            e.type = c.GetRequestType(),
                            e.fileName = c.GetDefaultRequestFileName(),
                            e.isSimple = c.IsSimple(),
                            e.subject = c.GetSubject(),
                            e.subjCN = c.GetSubjCN(),
                            e.subjOrg = c.GetSubjOrg(),
                            e.subjOrgUnit = c.GetSubjOrgUnit(),
                            e.subjTitle = c.GetSubjTitle(),
                            e.subjState = c.GetSubjState(),
                            e.subjLocality = c.GetSubjLocality(),
                            e.subjFullName = c.GetSubjFullName(),
                            e.subjAddress = c.GetSubjAddress(),
                            e.subjPhone = c.GetSubjPhone(),
                            e.subjEMail = c.GetSubjEMail(),
                            e.subjDNS = c.GetSubjDNS(),
                            e.subjEDRPOUCode = c.GetSubjEDRPOUCode(),
                            e.subjDRFOCode = c.GetSubjDRFOCode(),
                            e.subjNBUCode = c.GetSubjNBUCode(),
                            e.subjSPFMCode = c.GetSubjSPFMCode(),
                            e.subjOCode = c.GetSubjOCode(),
                            e.subjOUCode = c.GetSubjOUCode(),
                            e.subjUserCode = c.GetSubjUserCode(),
                            e.certBeginTime = c.GetCertBeginTime(),
                            e.certEndTime = c.GetCertEndTime(),
                            e.isPrivKeyTimesAvail = c.IsPrivKeyTimesAvail(),
                            e.privKeyBeginTime = c.GetPrivKeyBeginTime(),
                            e.privKeyEndTime = c.GetPrivKeyEndTime(),
                            e.publicKeyType = c.GetPublicKeyType(),
                            e.publicKeyBits = c.GetPublicKeyBits(),
                            e.RSAModul = c.GetRSAModul(),
                            e.RSAExponent = c.GetRSAExponent(),
                            e.publicKey = c.GetPublicKey(),
                            e.publicKeyID = c.GetPublicKeyID(),
                            e.extKeyUsages = c.GetExtKeyUsages(),
                            e.crlDistribPoint1 = c.GetCRLDistribPoint1(),
                            e.crlDistribPoint2 = c.GetCRLDistribPoint2(),
                            e.isSubjTypeAvail = c.IsSubjTypeAvail(),
                            e.subjType = c.GetSubjType(),
                            e.subjSubType = c.GetSubjSubType(),
                            e.isSelfSigned = c.IsSelfSigned(),
                            e.signIssuer = c.GetSignIssuer(),
                            e.signSerial = c.GetSignSerial(),
                            e.subjUNZR = c.GetSubjUNZR(),
                            e.subjCountry = c.GetSubjCountry(),
                            e.isQSCD = c.IsQSCD(),
                            e
                    }
                    ,
                    c
            }()
        }
        , function(c, e, a) {
            "use strict";
            a.r(e),
                a.d(e, "CASettings", (function() {
                        return n.a
                    }
                )),
                a.d(e, "KSPSettings", (function() {
                        return n.d
                    }
                )),
                a.d(e, "EndUserError", (function() {
                        return i
                    }
                )),
                a.d(e, "EndUserConstants", (function() {
                        return h
                    }
                )),
                a.d(e, "EndUserEvents", (function() {
                        return r
                    }
                )),
                a.d(e, "EndUserLibraryInfoJS", (function() {
                        return t.a
                    }
                )),
                a.d(e, "EndUserLibraryInfoSW", (function() {
                        return t.b
                    }
                )),
                a.d(e, "EndUserSettings", (function() {
                        return n.c
                    }
                )),
                a.d(e, "EndUserProxySettings", (function() {
                        return n.b
                    }
                )),
                a.d(e, "EndUserOwnerInfo", (function() {
                        return b.a
                    }
                )),
                a.d(e, "EndUserCertificateInfoEx", (function() {
                        return f.a
                    }
                )),
                a.d(e, "EndUserCertificate", (function() {
                        return d
                    }
                )),
                a.d(e, "EndUserKeyMedia", (function() {
                        return u
                    }
                )),
                a.d(e, "EndUserJKSPrivateKeyInfo", (function() {
                        return o.a
                    }
                )),
                a.d(e, "EndUserContext", (function() {
                        return l
                    }
                )),
                a.d(e, "EndUserPrivateKeyContext", (function() {
                        return s
                    }
                )),
                a.d(e, "EndUserTimeInfo", (function() {
                        return k.a
                    }
                )),
                a.d(e, "EndUserSignInfo", (function() {
                        return m.a
                    }
                )),
                a.d(e, "EndUserSenderInfo", (function() {
                        return j.a
                    }
                )),
                a.d(e, "EndUserParams", (function() {
                        return p.a
                    }
                )),
                a.d(e, "EndUserInfo", (function() {
                        return v
                    }
                )),
                a.d(e, "EndUserRequestInfo", (function() {
                        return E.a
                    }
                )),
                a.d(e, "EndUserTaxReport", (function() {
                        return g.b
                    }
                )),
                a.d(e, "EndUserTaxReceipt", (function() {
                        return g.a
                    }
                )),
                a.d(e, "EndUser", (function() {
                        return S
                    }
                ));
            var r = {};
            a.r(r),
                a.d(r, "EndUserConfirmKSPOperationEvent", (function() {
                        return _
                    }
                ));
            var i = a(0)
                , t = a(12)
                , n = a(6)
                , b = a(7)
                , f = a(5)
                , d = function() {}
                , u = function(c) {
                this.type = c ? c.type : "",
                    this.device = c ? c.device : "",
                    this.visibleName = c ? c.visibleName : "",
                    this.typeIndex = c ? c.typeIndex : -1,
                    this.devIndex = c ? c.devIndex : -1,
                    this.password = c ? c.password : "",
                    this.user = c ? c.user : ""
            }
                , o = a(13)
                , l = function() {}
                , s = function() {}
                , h = a(1)
                , g = a(9)
                , k = a(10)
                , m = a(8)
                , j = a(11)
                , p = a(14)
                , v = function() {
                this.version = h.EU_USER_INFO_VERSION,
                    this.commonName = "",
                    this.locality = "",
                    this.state = "",
                    this.organization = "",
                    this.orgUnit = "",
                    this.title = "",
                    this.street = "",
                    this.phone = "",
                    this.surname = "",
                    this.givenname = "",
                    this.EMail = "",
                    this.DNS = "",
                    this.EDRPOUCode = "",
                    this.DRFOCode = "",
                    this.NBUCode = "",
                    this.SPFMCode = "",
                    this.OCode = "",
                    this.OUCode = "",
                    this.userCode = "",
                    this.UPN = "",
                    this.UNZR = "",
                    this.country = "UA"
            }
                , E = a(15)
                , _ = function() {
                this.type = h.EndUserEventType.ConfirmKSPOperation
            }
                , K = a(17)
                , w = a(18)
                , y = function() {
                function c(c) {
                    var e = this;
                    this.m_worker = new K.a(w,c,(function(c) {
                            e.OnEvent(c)
                        }
                    )),
                        this.m_eventListeners = new Array
                }
                return c.prototype.OnEvent = function(c) {
                    try {
                        var e = this.m_eventListeners[c.type] || this.m_eventListeners[h.EndUserEventType.All];
                        e && e(c)
                    } catch (c) {}
                }
                    ,
                    c.prototype.AddEventListener = function(c, e) {
                        switch (c) {
                            case h.EndUserEventType.None:
                                this.m_eventListeners = [];
                                break;
                            case h.EndUserEventType.All:
                                this.m_eventListeners = [],
                                    this.m_eventListeners[c] = e;
                                break;
                            default:
                                this.m_eventListeners[c] = e
                        }
                        return this.m_worker.postMessage("AddEventListener", [c])
                    }
                    ,
                    c.prototype.GetLibraryInfo = function(c) {
                        return this.m_worker.postMessage("GetLibraryInfo", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.IsInitialized = function() {
                        return this.m_worker.postMessage("IsInitialized", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.Initialize = function(c) {
                        return this.m_worker.postMessage("Initialize", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.SetRuntimeParameter = function(c, e) {
                        return this.m_worker.postMessage("SetRuntimeParameter", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetStorageParameter = function(c, e) {
                        return this.m_worker.postMessage("GetStorageParameter", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.SetStorageParameter = function(c, e, a) {
                        return this.m_worker.postMessage("SetStorageParameter", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetCAs = function() {
                        return this.m_worker.postMessage("GetCAs", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetProxySettings = function() {
                        return this.m_worker.postMessage("GetProxySettings", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.SetProxySettings = function(c) {
                        return this.m_worker.postMessage("SetProxySettings", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetKeyMedias = function() {
                        return this.m_worker.postMessage("GetKeyMedias", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetJKSPrivateKeys = function(c) {
                        return this.m_worker.postMessage("GetJKSPrivateKeys", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.IsPrivateKeyReaded = function() {
                        return this.m_worker.postMessage("IsPrivateKeyReaded", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ResetPrivateKey = function() {
                        return this.m_worker.postMessage("ResetPrivateKey", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ReadPrivateKey = function(c, e, a) {
                        return this.m_worker.postMessage("ReadPrivateKey", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ReadPrivateKeyBinary = function(c, e, a, r) {
                        return this.m_worker.postMessage("ReadPrivateKeyBinary", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ReadPrivateKeySIM = function(c, e, a, r) {
                        return this.m_worker.postMessage("ReadPrivateKeySIM", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ReadPrivateKeyKSP = function(c, e, a, r) {
                        return this.m_worker.postMessage("ReadPrivateKeyKSP", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetOwnCertificates = function() {
                        return this.m_worker.postMessage("GetOwnCertificates", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetOwnEUserParams = function() {
                        return this.m_worker.postMessage("GetOwnEUserParams", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ChangeOwnCertificatesStatus = function(c, e) {
                        return this.m_worker.postMessage("ChangeOwnCertificatesStatus", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.MakeNewCertificate = function(c, e, a, r, i, t, n, b, f, d, u, o, l, s, h, g) {
                        return void 0 === g && (g = !1),
                            this.m_worker.postMessage("MakeNewCertificate", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.MakeDeviceCertificate = function(c, e, a, r, i) {
                        return this.m_worker.postMessage("MakeDeviceCertificate", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ChangePrivateKeyPassword = function(c, e) {
                        return this.m_worker.postMessage("ChangePrivateKeyPassword", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GeneratePrivateKey = function(c, e, a, r, i, t, n, b, f, d, u, o) {
                        return this.m_worker.postMessage("GeneratePrivateKey", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GeneratePrivateKeyBinary = function(c, e, a, r, i, t, n, b, f, d, u) {
                        return this.m_worker.postMessage("GeneratePrivateKeyBinary", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.HashData = function(c, e, a) {
                        return this.m_worker.postMessage("HashData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetSigner = function(c, e, a) {
                        return void 0 === e && (e = -1),
                        void 0 === a && (a = !1),
                            this.m_worker.postMessage("GetSigner", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.SignData = function(c, e) {
                        return void 0 === e && (e = !1),
                            this.m_worker.postMessage("SignData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.SignDataInternal = function(c, e, a) {
                        return void 0 === a && (a = !1),
                            this.m_worker.postMessage("SignDataInternal", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.SignHash = function(c, e, a, r) {
                        return this.m_worker.postMessage("SignHash", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.SignDataEx = function(c, e, a, r, i) {
                        return this.m_worker.postMessage("SignDataEx", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.AppendSign = function(c, e, a, r, i) {
                        return this.m_worker.postMessage("AppendSign", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.AppendSignHash = function(c, e, a, r, i) {
                        return this.m_worker.postMessage("AppendSignHash", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.VerifyHash = function(c, e, a) {
                        return void 0 === a && (a = -1),
                            this.m_worker.postMessage("VerifyHash", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.VerifyData = function(c, e, a) {
                        return void 0 === a && (a = -1),
                            this.m_worker.postMessage("VerifyData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.VerifyDataInternal = function(c, e) {
                        return void 0 === e && (e = -1),
                            this.m_worker.postMessage("VerifyDataInternal", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.EnvelopData = function(c, e, a, r, i, t) {
                        return void 0 === t && (t = !1),
                            this.m_worker.postMessage("EnvelopData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.DevelopData = function(c, e) {
                        return this.m_worker.postMessage("DevelopData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CreateAuthData = function(c, e, a) {
                        return this.m_worker.postMessage("CreateAuthData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ProtectDataByPassword = function(c, e, a) {
                        return this.m_worker.postMessage("ProtectDataByPassword", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.UnprotectDataByPassword = function(c, e, a) {
                        return this.m_worker.postMessage("UnprotectDataByPassword", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.GetTSPByAccessInfo = function(c, e, a, r, i) {
                        return this.m_worker.postMessage("GetTSPByAccessInfo", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CheckTSP = function(c, e, a) {
                        return this.m_worker.postMessage("CheckTSP", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxCreate = function() {
                        return this.m_worker.postMessage("CtxCreate", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxFree = function(c) {
                        return this.m_worker.postMessage("CtxFree", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxSetParameter = function(c, e, a) {
                        return this.m_worker.postMessage("CtxSetParameter", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxReadPrivateKey = function(c, e, a, r) {
                        return this.m_worker.postMessage("CtxReadPrivateKey", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxReadPrivateKeyBinary = function(c, e, a, r, i) {
                        return this.m_worker.postMessage("CtxReadPrivateKeyBinary", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxFreePrivateKey = function(c) {
                        return this.m_worker.postMessage("CtxFreePrivateKey", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxGetOwnCertificates = function(c) {
                        return this.m_worker.postMessage("CtxGetOwnCertificates", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxSignHash = function(c, e, a, r, i) {
                        return this.m_worker.postMessage("CtxSignHash", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxSignData = function(c, e, a, r, i, t) {
                        return this.m_worker.postMessage("CtxSignData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxAppendSignHash = function(c, e, a, r, i, t) {
                        return this.m_worker.postMessage("CtxAppendSignHash", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxAppendSign = function(c, e, a, r, i, t) {
                        return this.m_worker.postMessage("CtxAppendSign", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxEnvelopData = function(c, e, a, r, i, t, n) {
                        return this.m_worker.postMessage("CtxEnvelopData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.CtxDevelopData = function(c, e, a) {
                        return this.m_worker.postMessage("CtxDevelopData", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.ProtectTaxReports = function(c, e, a, r, i, t, n) {
                        return void 0 === c && (c = null),
                        void 0 === e && (e = null),
                        void 0 === a && (a = null),
                        void 0 === n && (n = !1),
                            this.m_worker.postMessage("ProtectTaxReports", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c.prototype.UnprotectTaxReceipts = function(c, e) {
                        return this.m_worker.postMessage("UnprotectTaxReceipts", Array.prototype.slice.call(arguments))
                    }
                    ,
                    c
            }()
                , P = a(19)
                , S = function() {
                function c(c, e) {
                    switch (void 0 === e && (e = h.EndUserLibraryType.JS),
                        e) {
                        case h.EndUserLibraryType.SW:
                            this.m_library = new P.a;
                            break;
                        case h.EndUserLibraryType.JS:
                        case h.EndUserLibraryType.MS:
                        default:
                            this.m_library = new y(c)
                    }
                }
                return c.prototype.AddEventListener = function(c, e) {
                    return this.m_library.AddEventListener(c, e)
                }
                    ,
                    c.prototype.GetLibraryInfo = function(c) {
                        return this.m_library.GetLibraryInfo(c)
                    }
                    ,
                    c.prototype.IsInitialized = function() {
                        return this.m_library.IsInitialized()
                    }
                    ,
                    c.prototype.Initialize = function(c) {
                        return this.m_library.Initialize(c)
                    }
                    ,
                    c.prototype.SetRuntimeParameter = function(c, e) {
                        return this.m_library.SetRuntimeParameter(c, e)
                    }
                    ,
                    c.prototype.GetStorageParameter = function(c, e) {
                        return void 0 === e && (e = !1),
                            this.m_library.GetStorageParameter(c, e)
                    }
                    ,
                    c.prototype.SetStorageParameter = function(c, e, a) {
                        return void 0 === a && (a = !1),
                            this.m_library.SetStorageParameter(c, e, a)
                    }
                    ,
                    c.prototype.GetCAs = function() {
                        return this.m_library.GetCAs()
                    }
                    ,
                    c.prototype.GetProxySettings = function() {
                        return this.m_library.GetProxySettings()
                    }
                    ,
                    c.prototype.SetProxySettings = function(c) {
                        return this.m_library.SetProxySettings(c)
                    }
                    ,
                    c.prototype.GetKeyMedias = function() {
                        return this.m_library.GetKeyMedias()
                    }
                    ,
                    c.prototype.GetJKSPrivateKeys = function(c) {
                        return this.m_library.GetJKSPrivateKeys(c)
                    }
                    ,
                    c.prototype.IsPrivateKeyReaded = function() {
                        return this.m_library.IsPrivateKeyReaded()
                    }
                    ,
                    c.prototype.ResetPrivateKey = function() {
                        return this.m_library.ResetPrivateKey()
                    }
                    ,
                    c.prototype.ReadPrivateKey = function(c, e, a) {
                        return this.m_library.ReadPrivateKey(c, e, a)
                    }
                    ,
                    c.prototype.ReadPrivateKeyBinary = function(c, e, a, r) {
                        return this.m_library.ReadPrivateKeyBinary(c, e, a, r)
                    }
                    ,
                    c.prototype.ReadPrivateKeySIM = function(c, e, a, r) {
                        return void 0 === a && (a = !0),
                        void 0 === r && (r = 0),
                            this.m_library.ReadPrivateKeySIM(c, e, a, r)
                    }
                    ,
                    c.prototype.ReadPrivateKeyKSP = function(c, e, a, r) {
                        return void 0 === a && (a = !0),
                        void 0 === r && (r = 0),
                            this.m_library.ReadPrivateKeyKSP(c, e, a, r)
                    }
                    ,
                    c.prototype.GetOwnCertificates = function() {
                        return this.m_library.GetOwnCertificates()
                    }
                    ,
                    c.prototype.GetOwnEUserParams = function() {
                        return this.m_library.GetOwnEUserParams()
                    }
                    ,
                    c.prototype.ChangeOwnCertificatesStatus = function(c, e) {
                        return this.m_library.ChangeOwnCertificatesStatus(c, e)
                    }
                    ,
                    c.prototype.MakeNewCertificate = function(c, e, a, r, i, t, n, b, f, d, u, o, l, s, h, g) {
                        return void 0 === g && (g = !1),
                            this.m_library.MakeNewCertificate(c, e, a, r, i, t, n, b, f, d, u, o, l, s, h, g)
                    }
                    ,
                    c.prototype.MakeDeviceCertificate = function(c, e, a, r, i) {
                        return this.m_library.MakeDeviceCertificate(c, e, a, r, i)
                    }
                    ,
                    c.prototype.ChangePrivateKeyPassword = function(c, e) {
                        return this.m_library.ChangePrivateKeyPassword(c, e)
                    }
                    ,
                    c.prototype.GeneratePrivateKey = function(c, e, a, r, i, t, n, b, f, d, u, o) {
                        return this.m_library.GeneratePrivateKey(c, e, a, r, i, t, n, b, f, d, u, o)
                    }
                    ,
                    c.prototype.GeneratePrivateKeyBinary = function(c, e, a, r, i, t, n, b, f, d, u) {
                        return this.m_library.GeneratePrivateKeyBinary(c, e, a, r, i, t, n, b, f, d, u)
                    }
                    ,
                    c.prototype.HashData = function(c, e, a) {
                        return this.m_library.HashData(c, e, a)
                    }
                    ,
                    c.prototype.GetSigner = function(c, e, a) {
                        return this.m_library.GetSigner(c, e, a)
                    }
                    ,
                    c.prototype.SignData = function(c, e) {
                        return void 0 === e && (e = !1),
                            this.m_library.SignData(c, e)
                    }
                    ,
                    c.prototype.SignDataInternal = function(c, e, a) {
                        return void 0 === a && (a = !1),
                            this.m_library.SignDataInternal(c, e, a)
                    }
                    ,
                    c.prototype.SignHash = function(c, e, a, r) {
                        return void 0 === r && (r = !1),
                            this.m_library.SignHash(c, e, a, r)
                    }
                    ,
                    c.prototype.SignDataEx = function(c, e, a, r, i) {
                        return void 0 === i && (i = !1),
                            this.m_library.SignDataEx(c, e, a, r, i)
                    }
                    ,
                    c.prototype.AppendSign = function(c, e, a, r, i) {
                        return void 0 === i && (i = !1),
                            this.m_library.AppendSign(c, e, a, r, i)
                    }
                    ,
                    c.prototype.AppendSignHash = function(c, e, a, r, i) {
                        return this.m_library.AppendSignHash(c, e, a, r, i)
                    }
                    ,
                    c.prototype.VerifyHash = function(c, e, a) {
                        return void 0 === a && (a = -1),
                            this.m_library.VerifyHash(c, e, a)
                    }
                    ,
                    c.prototype.VerifyData = function(c, e, a) {
                        return void 0 === a && (a = -1),
                            this.m_library.VerifyData(c, e, a)
                    }
                    ,
                    c.prototype.VerifyDataInternal = function(c, e) {
                        return void 0 === e && (e = -1),
                            this.m_library.VerifyDataInternal(c, e)
                    }
                    ,
                    c.prototype.EnvelopData = function(c, e, a, r, i, t) {
                        return void 0 === t && (t = !1),
                            this.m_library.EnvelopData(c, e, a, r, i, t)
                    }
                    ,
                    c.prototype.DevelopData = function(c, e) {
                        return this.m_library.DevelopData(c, e)
                    }
                    ,
                    c.prototype.ProtectDataByPassword = function(c, e, a) {
                        return this.m_library.ProtectDataByPassword(c, e, a)
                    }
                    ,
                    c.prototype.UnprotectDataByPassword = function(c, e, a) {
                        return this.m_library.UnprotectDataByPassword(c, e, a)
                    }
                    ,
                    c.prototype.CreateAuthData = function(c, e, a) {
                        return this.m_library.CreateAuthData(c, e, a)
                    }
                    ,
                    c.prototype.GetTSPByAccessInfo = function(c, e, a, r, i) {
                        return this.m_library.GetTSPByAccessInfo(c, e, a, r, i)
                    }
                    ,
                    c.prototype.CheckTSP = function(c, e, a) {
                        return this.m_library.CheckTSP(c, e, a)
                    }
                    ,
                    c.prototype.CtxCreate = function() {
                        return this.m_library.CtxCreate()
                    }
                    ,
                    c.prototype.CtxFree = function(c) {
                        return this.m_library.CtxFree(c)
                    }
                    ,
                    c.prototype.CtxSetParameter = function(c, e, a) {
                        return this.m_library.CtxSetParameter(c, e, a)
                    }
                    ,
                    c.prototype.CtxReadPrivateKey = function(c, e, a, r) {
                        return void 0 === c && (c = null),
                            this.m_library.CtxReadPrivateKey(c, e, a, r)
                    }
                    ,
                    c.prototype.CtxReadPrivateKeyBinary = function(c, e, a, r, i) {
                        return void 0 === c && (c = null),
                            this.m_library.CtxReadPrivateKeyBinary(c, e, a, r, i)
                    }
                    ,
                    c.prototype.CtxFreePrivateKey = function(c) {
                        return this.m_library.CtxFreePrivateKey(c)
                    }
                    ,
                    c.prototype.CtxGetOwnCertificates = function(c) {
                        return this.m_library.CtxGetOwnCertificates(c)
                    }
                    ,
                    c.prototype.CtxSignHash = function(c, e, a, r, i) {
                        return this.m_library.CtxSignHash(c, e, a, r, i)
                    }
                    ,
                    c.prototype.CtxSignData = function(c, e, a, r, i, t) {
                        return this.m_library.CtxSignData(c, e, a, r, i, t)
                    }
                    ,
                    c.prototype.CtxAppendSignHash = function(c, e, a, r, i, t) {
                        return this.m_library.CtxAppendSignHash(c, e, a, r, i, t)
                    }
                    ,
                    c.prototype.CtxAppendSign = function(c, e, a, r, i, t) {
                        return this.m_library.CtxAppendSign(c, e, a, r, i, t)
                    }
                    ,
                    c.prototype.CtxEnvelopData = function(c, e, a, r, i, t, n) {
                        return this.m_library.CtxEnvelopData(c, e, a, r, i, t, n)
                    }
                    ,
                    c.prototype.CtxDevelopData = function(c, e, a) {
                        return this.m_library.CtxDevelopData(c, e, a)
                    }
                    ,
                    c.prototype.ProtectTaxReports = function(c, e, a, r, i, t, n) {
                        return void 0 === c && (c = null),
                        void 0 === e && (e = null),
                        void 0 === a && (a = null),
                            this.m_library.ProtectTaxReports(c, e, a, r, i, t, n)
                    }
                    ,
                    c.prototype.UnprotectTaxReceipts = function(c, e) {
                        return this.m_library.UnprotectTaxReceipts(c, e)
                    }
                    ,
                    c
            }()
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            )),
                a.d(e, "d", (function() {
                        return i
                    }
                )),
                a.d(e, "c", (function() {
                        return t
                    }
                )),
                a.d(e, "b", (function() {
                        return n
                    }
                ));
            var r = function() {}
                , i = function() {}
                , t = function() {}
                , n = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                    return r
                }
            )),
                a.d(e, "a", (function() {
                        return i
                    }
                ));
            var r = function() {}
                , i = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            )),
                a.d(e, "b", (function() {
                        return i
                    }
                ));
            var r = function() {
                this.version = null,
                    this.supported = !1,
                    this.loaded = !1
            }
                , i = function() {
                this.version = null,
                    this.supported = !1,
                    this.loaded = !1,
                    this.isSignAgentSupported = !1,
                    this.isWebExtensionSupported = !1,
                    this.isNPAPISupported = !1,
                    this.isActiveXSupported = !1,
                    this.isWebExtensionInstalled = !1,
                    this.isNativeLibraryNeedUpdate = !1,
                    this.nativeLibraryInstallURL = null,
                    this.nativeLibraryUpdateURL = null,
                    this.webExtensionInstallURL = null,
                    this.helpURL = null
            }
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                    return r
                }
            ));
            var r = function() {}
        }
        , function(c, e, a) {
            "use strict";
            (function(c) {
                    var a = function(c, e, a) {
                        this.id = c,
                            this.cmd = e,
                            this.params = a,
                            this.origin = window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
                            this.pathname = window.location.pathname
                    }
                        , r = function(c, e, a, r) {
                        this.id = c,
                            this.cmd = e,
                            this.result = a,
                            this.error = r
                    }
                        , i = function() {
                        function e(c, e, a) {
                            var r = this;
                            this.m_worker = this.loadWorker(c, e),
                                this.m_worker.onmessage = function(c) {
                                    var e = c.data;
                                    if (-2 != e.id) {
                                        var i = r.m_promises[e.id - 1];
                                        i && (delete r.m_promises[e.id - 1],
                                            e.error ? i.reject(e.error) : i.resolve(e.result))
                                    } else
                                        a(e.result)
                                }
                                ,
                                this.m_worker.onerror = function(c) {
                                    r.m_promises.forEach((function(e) {
                                            e.reject(c.error)
                                        }
                                    )),
                                        r.m_promises = new Array
                                }
                                ,
                                this.m_promises = new Array
                        }
                        return e.prototype.loadWorker = function(c, e) {
                            try {
                                if (!c)
                                    throw "No worker content";
                                try {
                                    var a, r = window, i = r.URL || r.webkitURL;
                                    try {
                                        (a = new (r.BlobBuilder || r.WebKitBlobBuilder || r.MozBlobBuilder || r.MSBlobBuilder)).append(c),
                                            a = a.getBlob()
                                    } catch (e) {
                                        a = new Blob([c])
                                    }
                                    return new Worker(i.createObjectURL(a))
                                } catch (e) {
                                    return new Worker("data:application/javascript," + encodeURIComponent(c))
                                }
                            } catch (c) {
                                if (!e)
                                    throw Error("Inline worker is not supported");
                                return new Worker(e)
                            }
                        }
                            ,
                            e.prototype.postMessage = function(e, r) {
                                var i = this
                                    , t = new a(-1,e,r)
                                    , n = new c((function(c, e) {
                                        t.id = i.m_promises.push({
                                            resolve: c,
                                            reject: e
                                        })
                                    }
                                ));
                                return this.m_worker.postMessage(t),
                                    n
                            }
                            ,
                            e
                    }();
                    e.a = i,
                        function() {
                            function c(c) {
                                this.m_context = c,
                                    this.m_initialized = !1;
                                var e = this;
                                self.onmessage = function(c) {
                                    e.onMessage(c.data)
                                }
                            }
                            c.prototype.postMessage = function(c, e, a, i) {
                                var t = new r(c,e,a,i);
                                self.postMessage(t)
                            }
                                ,
                                c.prototype.onMessage = function(c) {
                                    var e = this;
                                    this.m_initialized ? this.m_context[c.cmd].apply(this.m_context, c.params).then((function(a) {
                                            e.postMessage(c.id, c.cmd, a)
                                        }
                                    ), (function(a) {
                                            e.postMessage(c.id, c.cmd, null, a)
                                        }
                                    )) : setTimeout((function() {
                                            e.onMessage(c)
                                        }
                                    ), 50)
                                }
                                ,
                                c.prototype.initialize = function() {
                                    this.m_initialized = !0
                                }
                        }()
                }
            ).call(this, a(16).Promise)
        }
        , function(c, e, a) {
            "use strict";
            (function(c) {
                    var r = a(0)
                        , i = a(6)
                        , t = a(7)
                        , n = a(13)
                        , b = a(20)
                        , f = a(4)
                        , d = a(12)
                        , u = a(2)
                        , o = a(5)
                        , l = a(1)
                        , s = a(9)
                        , h = a(14)
                        , g = a(15)
                        , k = a(8)
                        , m = a(11)
                        , j = a(10)
                        , p = function() {}
                        , v = function() {
                        function e() {
                            this.m_library = new b.a,
                                this.m_settings = null,
                                this.m_initialized = !1,
                                this.m_kmTypes = null,
                                this.m_kmActiveOperation = !1,
                                this.m_context = null,
                                this.m_pkContext = null,
                                this.m_eventListeners = new Array
                        }
                        return e.prototype.MapError = function(c) {
                            var e = new r.EndUserError;
                            return void 0 !== c.GetErrorCode && void 0 !== c.GetMessage ? (e.code = c.GetErrorCode(),
                                e.message = c.GetMessage()) : void 0 !== c.code && void 0 !== c.message ? (e.code = c.code,
                                e.message = c.message) : (e.code = r.EU_ERROR_UNKNOWN,
                                e.message = c.toString()),
                                e
                        }
                            ,
                            e.prototype.ProcessArray = function(e, a) {
                                var r = this;
                                return new c((function(c, i) {
                                        var t = Array()
                                            , n = 0
                                            , b = function() {
                                            n >= e.length ? c(t) : (a(e[n]).then((function(c) {
                                                    t.push(c),
                                                        b()
                                                }
                                            )).catch((function(c) {
                                                    return i(r.MapError(c))
                                                }
                                            )),
                                                n++)
                                        };
                                        b()
                                    }
                                ))
                            }
                            ,
                            e.prototype.OnEvent = function(c) {
                                try {
                                    var e = this.m_eventListeners[c.type] || this.m_eventListeners[l.EndUserEventType.All];
                                    e && e(c)
                                } catch (c) {}
                            }
                            ,
                            e.prototype.CheckInitialize = function() {
                                var e = this
                                    , a = e.m_library;
                                return new c((function(c, i) {
                                        e.m_initialized ? c() : a.Load().then((function() {
                                                throw a.MakeError(r.EU_ERROR_NOT_INITIALIZED, "")
                                            }
                                        )).catch((function(c) {
                                                return i(e.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.BeginKMOperation = function() {
                                var e = this;
                                return new c((function(c, a) {
                                        var r = function() {
                                            e.m_kmActiveOperation ? setTimeout(r, 10) : (e.m_kmActiveOperation = !0,
                                                c())
                                        };
                                        r()
                                    }
                                ))
                            }
                            ,
                            e.prototype.EndKMOperation = function() {
                                this.m_kmActiveOperation = !1
                            }
                            ,
                            e.prototype.GetCASettings = function(c) {
                                if (!c)
                                    return null;
                                for (var e = this.m_settings.CAs, a = 0; a < e.length; a++)
                                    for (var r = e[a].issuerCNs, i = 0; i < r.length; i++)
                                        if (r[i] == c)
                                            return e[a];
                                return null
                            }
                            ,
                            e.prototype.IsCMPCompatible = function(c, e) {
                                return !!c.cmpAddress && (void 0 === c.cmpCompatibility || (c.cmpCompatibility & e) == e)
                            }
                            ,
                            e.prototype.SetSettings = function(e) {
                                var a = this
                                    , i = a.m_library
                                    , t = a.m_settings.CAs
                                    , n = this.GetCASettings(e)
                                    , b = t && t.length > 0 ? t[0] : null;
                                return new c((function(c, t) {
                                        if (e && null == n)
                                            throw i.MakeError(r.EU_ERROR_WRITE_SETTINGS, "");
                                        var f = n && n.tspAddress ? n : b
                                            , d = i.CreateTSPSettings();
                                        d.SetGetStamps(!0),
                                            d.SetAddress(f ? f.tspAddress : ""),
                                            d.SetPort(f ? f.tspAddressPort : "80"),
                                            i.SetTSPSettings(d).then((function() {
                                                    var c = !n || !(!n || !n.ocspAccessPointAddress)
                                                        , e = i.CreateOCSPSettings();
                                                    return e.SetUseOCSP(c),
                                                    c && (e.SetBeforeStore(!0),
                                                        e.SetAddress(n ? n.ocspAccessPointAddress : "czo.gov.ua"),
                                                        e.SetPort(n ? n.ocspAccessPointPort : "80")),
                                                        i.SetOCSPSettings(e)
                                                }
                                            )).then((function() {
                                                    var c;
                                                    c = !(!n || !n.cmpAddress);
                                                    var e = i.CreateCMPSettings();
                                                    return e.SetUseCMP(c),
                                                    c && (e.SetAddress(n.cmpAddress),
                                                        e.SetPort("80")),
                                                        i.SetCMPSettings(e)
                                                }
                                            )).then((function() {
                                                    c()
                                                }
                                            )).catch((function(c) {
                                                    t(a.MapError(c))
                                                }
                                            ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetJKSPrivateKey = function(e, a) {
                                var r = this
                                    , i = r.m_library;
                                return new c((function(c, t) {
                                        var b = {
                                            alias: null,
                                            info: null
                                        };
                                        i.EnumJKSPrivateKeys(e, a).then((function(a) {
                                                if (null != a)
                                                    return b.alias = a,
                                                        i.GetJKSPrivateKey(e, a);
                                                c(null)
                                            }
                                        )).then((function(c) {
                                                b.info = c;
                                                for (var e = new Array, a = 0; a < c.GetCertificatesCount(); a++)
                                                    e.push(c.GetCertificate(a));
                                                return r.ProcessArray(e, (function(c) {
                                                        return i.ParseCertificateEx(c)
                                                    }
                                                ))
                                            }
                                        )).then((function(e) {
                                                var a = new n.a;
                                                a.alias = b.alias,
                                                    a.privateKey = b.info.GetPrivateKey(),
                                                    a.certificates = new Array,
                                                    a.digitalStamp = !1;
                                                for (var r = 0; r < e.length; r++) {
                                                    var t = e[r];
                                                    if (t.GetSubjType() == i.EU_SUBJECT_TYPE_END_USER) {
                                                        t.GetPublicKeyType() == i.EU_CERT_KEY_TYPE_DSTU4145 && (t.GetKeyUsageType() & i.EU_KEY_USAGE_DIGITAL_SIGNATURE) == i.EU_KEY_USAGE_DIGITAL_SIGNATURE && (a.digitalStamp = t.GetExtKeyUsages().indexOf(i.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1);
                                                        var d = new f.EndUserCertificate;
                                                        d.data = b.info.GetCertificate(r),
                                                            d.infoEx = u.a.MapToEndUserCertificateInfoEx(t, new o.a),
                                                            a.certificates.push(d)
                                                    }
                                                }
                                                a.digitalStamp = !1,
                                                    c(a)
                                            }
                                        )).catch((function(c) {
                                                return t(r.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.SaveCertificatesInternal = function(e) {
                                var a = this
                                    , r = this.m_library;
                                return new c((function(c, i) {
                                        e ? Array.isArray(e) ? a.ProcessArray(e, (function(c) {
                                                return r.SaveCertificate(c)
                                            }
                                        )).then((function() {
                                                return c()
                                            }
                                        )).catch((function(c) {
                                                return i(c)
                                            }
                                        )) : r.SaveCertificates(e).then((function() {
                                                return c()
                                            }
                                        )).catch((function(c) {
                                                return i(c)
                                            }
                                        )) : c()
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxReadPrivateKeyInternal = function(e, a, i, t, n, b) {
                                var f = this
                                    , d = this.m_library
                                    , u = {
                                    pkContext: null
                                };
                                return e || (e = f.m_context),
                                    new c((function(c, o) {
                                            f.SaveCertificatesInternal(n).then((function() {
                                                    return f.SetSettings(b)
                                                }
                                            )).then((function() {
                                                    return null != a && null != i ? d.CtxReadPrivateKeyBinary(e, a, i) : d.CtxReadPrivateKey(e, t)
                                                }
                                            )).then((function(c) {
                                                    u.pkContext = c;
                                                    var e = c.GetOwnerInfo();
                                                    if (!b)
                                                        return f.SetSettings(e.GetIssuerCN());
                                                    var a = f.GetCASettings(e.GetIssuerCN());
                                                    if (!a || -1 == a.issuerCNs.indexOf(b))
                                                        throw d.MakeError(r.EU_ERROR_CERT_NOT_FOUND, "")
                                                }
                                            )).then((function() {
                                                    c(u.pkContext)
                                                }
                                            )).catch((function(n) {
                                                    null == u.pkContext ? f.MapError(n).code != r.EU_ERROR_CERT_NOT_FOUND || b ? o(f.MapError(n)) : f.SearchPrivateKeyCertificatesWithCMP(a, i, t).then((function(c) {
                                                            return f.CtxReadPrivateKeyInternal(e, a, i, t, c.certs, c.CACommonName)
                                                        }
                                                    )).then((function(e) {
                                                            c(e)
                                                        }
                                                    )).catch((function(c) {
                                                            return o(f.MapError(c))
                                                        }
                                                    )) : d.CtxFreePrivateKey(u.pkContext).then((function() {
                                                            o(f.MapError(n))
                                                        }
                                                    )).catch((function() {
                                                            o(f.MapError(n))
                                                        }
                                                    ))
                                                }
                                            ))
                                        }
                                    ))
                            }
                            ,
                            e.prototype.ReadPrivateKeyInternal = function(e, a, r, i, n) {
                                var b = this;
                                return new c((function(c, f) {
                                        b.ResetPrivateKeyInternal().then((function() {
                                                return b.CtxReadPrivateKeyInternal(b.m_context, e, a, r, i, n)
                                            }
                                        )).then((function(e) {
                                                b.m_pkContext = e;
                                                var a = u.a.MapEndUserOwnerInfo(e.GetOwnerInfo(), new t.a);
                                                c(a)
                                            }
                                        )).catch((function(c) {
                                                f(b.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ResetPrivateKeyInternal = function() {
                                var e = this
                                    , a = this.m_library;
                                return new c((function(c, r) {
                                        null != e.m_pkContext ? a.CtxFreePrivateKey(e.m_pkContext).then((function() {
                                                e.m_pkContext = null,
                                                    c()
                                            }
                                        )).catch((function(c) {
                                                return r(e.MapError(c))
                                            }
                                        )) : c()
                                    }
                                ))
                            }
                            ,
                            e.prototype.SearchPrivateKeyCertificatesWithCMP = function(e, a, i, t) {
                                var n = this
                                    , b = n.m_library
                                    , f = n.m_settings.CAs;
                                return new c((function(c, d) {
                                        (null != e && null != a ? b.GetKeyInfoBinary(e, a) : b.GetKeyInfo(i)).then((function(e) {
                                                var a = function(i, u) {
                                                    if (i >= f.length) {
                                                        var o = b.MakeError(u ? r.EU_ERROR_CERT_NOT_FOUND : r.EU_ERROR_TRANSMIT_REQUEST, "");
                                                        d(n.MapError(o))
                                                    } else {
                                                        var s = t ? l.EndUserCMPCompatibility.DownloadEUCerts : l.EndUserCMPCompatibility.SearchEUCerts;
                                                        n.IsCMPCompatible(f[i], s) ? t && -1 == f[i].issuerCNs.indexOf(t) ? a(i + 1, u) : b.GetCertificatesByKeyInfo(e, [f[i].cmpAddress], ["80"]).then((function(e) {
                                                                c({
                                                                    certs: e,
                                                                    CACommonName: f[i].issuerCNs[0]
                                                                })
                                                            }
                                                        )).catch((function(c) {
                                                                var e = c.GetErrorCode();
                                                                if (e == r.EU_ERROR_CERT_NOT_FOUND || e == r.EU_ERROR_TRANSMIT_REQUEST)
                                                                    return u = u || e == r.EU_ERROR_CERT_NOT_FOUND,
                                                                        void a(i + 1, u);
                                                                d(n.MapError(c))
                                                            }
                                                        )) : a(i + 1, u)
                                                    }
                                                };
                                                a(0, !1)
                                            }
                                        )).catch((function(c) {
                                                return d(n.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetUserCertificatesFromCertificates = function(e) {
                                var a = this
                                    , r = a.m_library;
                                return new c((function(c, i) {
                                        var t = new Array
                                            , n = function(b) {
                                            r.GetCertificateFromSignedData(b, e).then((function(e) {
                                                    if (null != e) {
                                                        var a = new f.EndUserCertificate;
                                                        return a.data = e,
                                                            t.push(a),
                                                            r.ParseCertificateEx(e)
                                                    }
                                                    for (var i = new Array, n = 0; n < t.length; n++)
                                                        t[n].infoEx.subjType == r.EU_SUBJECT_TYPE_END_USER && i.push(t[n]);
                                                    c(i)
                                                }
                                            )).then((function(c) {
                                                    t[b].infoEx = u.a.MapToEndUserCertificateInfoEx(c, new o.a),
                                                        n(b + 1)
                                                }
                                            )).catch((function(c) {
                                                    return i(a.MapError(c))
                                                }
                                            ))
                                        };
                                        n(0)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GeneratePrivateKeyInternal = function(e, a, r, i, t, n, b, f, d, o, l, s, h) {
                                var k = this
                                    , m = this.m_library;
                                return new c((function(c, j) {
                                        var p = null == e && null == r
                                            , v = null != r
                                            , E = m.CreatePrivateKeyInfo()
                                            , _ = null;
                                        null != s && (_ = u.a.MapFromEndUserInfo(s, m.CreateEndUserInfo())),
                                            m.GeneratePrivateKeyEx(p, e ? e.GetTypeIndex() : -1, e ? e.GetDevIndex() : -1, e ? e.GetPassword() : r, a, i, t, n, b, f, d, o, l, _, h, E, null != r).then((function(e) {
                                                    for (var a = new Array, r = 0; r < e.size(); r++) {
                                                        var i = e.get(r);
                                                        i = u.a.MapToEndUserRequestInfo(i, new g.a),
                                                            a.push(i)
                                                    }
                                                    var t = {
                                                        key: v ? E.GetPrivateKey() : null,
                                                        requests: a
                                                    };
                                                    c(t)
                                                }
                                            )).catch((function(c) {
                                                    return j(k.MapError(c))
                                                }
                                            ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetHashAlgoBySignAlgo = function(c) {
                                var e = this.m_library;
                                switch (c) {
                                    case l.EndUserSignAlgo.DSTU4145WithGOST34311:
                                        return l.EndUserHashAlgo.GOST34311;
                                    case l.EndUserSignAlgo.RSAWithSHA:
                                    case l.EndUserSignAlgo.ECDSAWithSHA:
                                        return l.EndUserHashAlgo.SHA256;
                                    default:
                                        throw e.MakeError(r.EU_ERROR_BAD_PARAMETER, "")
                                }
                            }
                            ,
                            e.prototype.CtxSignHashInternal = function(e, a, i, t, n, b) {
                                var f = this
                                    , d = this.m_library
                                    , u = null != t
                                    , o = !Array.isArray(i) || null != t && !Array.isArray(t)
                                    , l = Array.isArray(i) ? i : [i]
                                    , s = null != t ? Array.isArray(t) ? t : [t] : [];
                                return new c((function(i, t) {
                                        f.CheckInitialize().then((function() {
                                                if (null == e)
                                                    throw d.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                if (u && l.length != s.length)
                                                    throw d.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                                                for (var i = new Array, t = 0; t < l.length; t++)
                                                    i.push({
                                                        hash: l[t],
                                                        previousSign: u ? s[t] : null
                                                    });
                                                return f.ProcessArray(i, (function(r) {
                                                        return new c((function(c, i) {
                                                                (u ? d.CtxAppendSignHash(e, a, r.hash, r.previousSign, n) : d.CtxSignHash(e, a, r.hash, n)).then((function(c) {
                                                                        return b ? c : d.BASE64Decode(c)
                                                                    }
                                                                )).then((function(e) {
                                                                        c(e)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return i(c)
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                i(o ? c[0] : c)
                                            }
                                        )).catch((function(c) {
                                                return t(f.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxSignDataInternal = function(e, a, i, t, n, b, f) {
                                var d = this
                                    , u = this.m_library
                                    , o = null != t
                                    , l = null != i && !Array.isArray(i) || null != t && !Array.isArray(t)
                                    , s = null != i ? Array.isArray(i) ? i : [i] : []
                                    , h = null != t ? Array.isArray(t) ? t : [t] : [];
                                return new c((function(i, t) {
                                        d.CheckInitialize().then((function() {
                                                if (null == e)
                                                    throw u.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                if (o && n && s.length != h.length)
                                                    throw u.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                                                if (!n)
                                                    return s;
                                                var c = d.GetHashAlgoBySignAlgo(a);
                                                return d.HashData(c, s, !0)
                                            }
                                        )).then((function(r) {
                                                for (var i = new Array, t = o ? h.length : r.length, l = 0; l < t; l++)
                                                    i.push({
                                                        dataOrHash: null != r ? r[l] : null,
                                                        previousSign: o ? h[l] : null
                                                    });
                                                return d.ProcessArray(i, (function(r) {
                                                        return new c((function(c, i) {
                                                                (o ? n ? u.CtxAppendSignHash(e, a, r.dataOrHash, r.previousSign, b) : u.CtxAppendSign(e, a, r.dataOrHash, r.previousSign, b) : n ? u.CtxSignHash(e, a, r.dataOrHash, b) : u.CtxSign(e, a, r.dataOrHash, !1, b)).then((function(c) {
                                                                        return f ? c : u.BASE64Decode(c)
                                                                    }
                                                                )).then((function(e) {
                                                                        c(e)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return i(c)
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                i(l ? c[0] : c)
                                            }
                                        )).catch((function(c) {
                                                return t(d.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.LoadTaxReportPKey = function(e, a, i) {
                                var t = this
                                    , n = this.m_library;
                                return new c((function(c, b) {
                                        var f = new p;
                                        if (Array.isArray(e) || (e = [e]),
                                        e.length > 2)
                                            b(t.MapError(n.MakeError(r.EU_ERROR_BAD_PARAMETER, "")));
                                        else {
                                            var d = function(u, o) {
                                                var s = a[u]
                                                    , h = e[o];
                                                n.CtxGetOwnCertificate(h, l.EndUserCertKeyType.DSTU4145, s).then((function(e) {
                                                        if (i && s & l.EndUserKeyUsage.DigitalSignature && !(e.GetInfoEx().GetExtKeyUsages().indexOf(n.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1))
                                                            throw n.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                                                        if (s & l.EndUserKeyUsage.DigitalSignature)
                                                            f.signPKCtx = h,
                                                                f.signCert = e;
                                                        else {
                                                            if (!(s & l.EndUserKeyUsage.KeyAgreement))
                                                                throw n.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                                                            f.envelopPKCtx = h,
                                                                f.envelopCert = e
                                                        }
                                                        u + 1 < a.length ? d(u + 1, 0) : c(f)
                                                    }
                                                )).catch((function(c) {
                                                        if (c.GetErrorCode() == r.EU_ERROR_CERT_NOT_FOUND) {
                                                            if (o + 1 < e.length)
                                                                return void d(u, o + 1);
                                                            c = n.MakeError(r.EU_ERROR_BAD_PARAMETER, "")
                                                        }
                                                        b(t.MapError(c))
                                                    }
                                                ))
                                            };
                                            d(0, 0)
                                        }
                                    }
                                ))
                            }
                            ,
                            e.prototype.ProtectTaxReport = function(e, a, i, t, n, b, f) {
                                var d = this
                                    , u = this.m_library
                                    , o = new s.b;
                                o.name = b.name;
                                var l = function(e, a) {
                                    return new c((function(c, r) {
                                            return u.CtxSign(e.signPKCtx, u.EU_CTX_SIGN_DSTU4145_WITH_GOST34311, a, !1, !0).then((function(c) {
                                                    return u.BASE64Decode(c)
                                                }
                                            )).then((function(c) {
                                                    return u.AppendCryptoHeader(u.EU_HEADER_CA_TYPE, u.EU_HEADER_PART_TYPE_SIGNED, c)
                                                }
                                            )).then((function(e) {
                                                    c(e)
                                                }
                                            )).catch((function(c) {
                                                    return r(d.MapError(c))
                                                }
                                            ))
                                        }
                                    ))
                                }
                                    , h = function(e, a) {
                                    return new c((function(r, i) {
                                            return u.CtxEnvelop(e.envelopPKCtx, [n], u.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL, !1, !1, a).then((function(c) {
                                                    return u.BASE64Decode(c)
                                                }
                                            )).then((function(c) {
                                                    return u.AppendCryptoHeader(u.EU_HEADER_CA_TYPE, u.EU_HEADER_PART_TYPE_ENCRYPTED, c)
                                                }
                                            )).then((function(a) {
                                                    var r = e.envelopCert
                                                        , i = u.EU_KEY_USAGE_DIGITAL_SIGNATURE | u.EU_KEY_USAGE_KEY_AGREEMENT;
                                                    return i == (r.GetInfoEx().GetKeyUsageType() & i) ? a : function(e, a) {
                                                        return new c((function(c, r) {
                                                                return u.AppendCryptoHeader(u.EU_HEADER_CA_TYPE, u.EU_HEADER_PART_TYPE_CERTCRYPT, e).then((function(e) {
                                                                        var r = new Uint8Array(e.byteLength + a.byteLength);
                                                                        r.set(new Uint8Array(e), 0),
                                                                            r.set(new Uint8Array(a), e.byteLength),
                                                                            c(r)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return r(d.MapError(c))
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }(r.GetData(), a)
                                                }
                                            )).then((function(c) {
                                                    return l(e, c)
                                                }
                                            )).then((function(c) {
                                                    r({
                                                        reportData: c,
                                                        ownCert: e.envelopCert.GetData()
                                                    })
                                                }
                                            )).catch((function(c) {
                                                    return i(d.MapError(c))
                                                }
                                            ))
                                        }
                                    ))
                                };
                                return new c((function(n, s) {
                                        new c((function(c, e) {
                                                c(b.data)
                                            }
                                        )).then((function(c) {
                                                return null != e ? l(e, c) : c
                                            }
                                        )).then((function(c) {
                                                return null != a ? l(a, c) : c
                                            }
                                        )).then((function(c) {
                                                return null != i ? l(i, c) : c
                                            }
                                        )).then((function(c) {
                                                return f && (o.signedData = c),
                                                    null != a || null != i ? h(null != i ? i : a, c) : {
                                                        reportData: c,
                                                        ownCert: e.signCert.GetData()
                                                    }
                                            }
                                        )).then((function(c) {
                                                return u.AppendTransportHeader(u.EU_HEADER_CA_TYPE, b.name, t, c.ownCert, c.reportData)
                                            }
                                        )).then((function(c) {
                                                o.data = c,
                                                    o.error = d.MapError(u.MakeError(r.EU_ERROR_NONE, "")),
                                                    n(o)
                                            }
                                        )).catch((function(c) {
                                                o.error = d.MapError(c),
                                                    n(o)
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.UnprotectTaxReceipt = function(e, a) {
                                var i = this
                                    , t = this.m_library
                                    , n = new s.a;
                                return n.data = null,
                                    n.receiptNumber = 0,
                                    n.initiators = [],
                                    n.error = null,
                                    new c((function(b, f) {
                                            var d;
                                            (d = a.data,
                                                new c((function(c, e) {
                                                        t.ParseTransportHeader(d).then((function(e) {
                                                                n.receiptNumber = e.GetReceiptNumber(),
                                                                    c(e.GetCryptoData())
                                                            }
                                                        )).catch((function(a) {
                                                                a.GetErrorCode() == r.EU_ERROR_PKI_FORMATS_FAILED ? c(d) : e(i.MapError(a))
                                                            }
                                                        ))
                                                    }
                                                ))).then((function(a) {
                                                    var d = function(a) {
                                                        (function(a) {
                                                                var b = {
                                                                    headerInfo: null
                                                                };
                                                                return new c((function(c, f) {
                                                                        t.ParseCryptoHeader(a).then((function(c) {
                                                                                b.headerInfo = c;
                                                                                var a = c.GetCryptoData();
                                                                                switch (c.GetHeaderType()) {
                                                                                    case t.EU_HEADER_PART_TYPE_SIGNED:
                                                                                        return t.VerifyDataInternalOnTimeEx(a, 0, null, !1, !1);
                                                                                    case t.EU_HEADER_PART_TYPE_ENCRYPTED:
                                                                                        return t.CtxDevelop(e, a);
                                                                                    case t.EU_HEADER_PART_TYPE_STAMPED:
                                                                                    case t.EU_HEADER_PART_TYPE_CERTCRYPT:
                                                                                        return null;
                                                                                    default:
                                                                                        throw t.MakeError(r.EU_ERROR_PKI_FORMATS_FAILED, "")
                                                                                }
                                                                            }
                                                                        )).then((function(e) {
                                                                                if (null != e) {
                                                                                    var r = b.headerInfo.GetHeaderType() == t.EU_HEADER_PART_TYPE_SIGNED ? u.a.MapToEndUserSignInfo(e, new k.a) : u.a.MapToEndUserSenderInfo(e, new m.a);
                                                                                    n.initiators.push(r),
                                                                                        a = e.GetData()
                                                                                } else
                                                                                    a = a.slice(b.headerInfo.GetHeaderSize() + b.headerInfo.GetCryptoData().length, a.length);
                                                                                c(a)
                                                                            }
                                                                        )).catch((function(e) {
                                                                                e.GetErrorCode() == r.EU_ERROR_BAD_PARAMETER ? c(null) : f(i.MapError(e))
                                                                            }
                                                                        ))
                                                                    }
                                                                ))
                                                            }
                                                        )(a).then((function(c) {
                                                                if (null == c)
                                                                    return n.data = a,
                                                                        n.error = i.MapError(t.MakeError(r.EU_ERROR_NONE, "")),
                                                                        void b(n);
                                                                d(c)
                                                            }
                                                        )).catch((function(c) {
                                                                return f(i.MapError(c))
                                                            }
                                                        ))
                                                    };
                                                    d(a)
                                                }
                                            )).catch((function(c) {
                                                    return f(i.MapError(c))
                                                }
                                            ))
                                        }
                                    ))
                            }
                            ,
                            e.prototype.AddEventListener = function(e, a) {
                                var i = this
                                    , t = i.m_library;
                                return new c((function(c, n) {
                                        if ([l.EndUserEventType.None, l.EndUserEventType.All, l.EndUserEventType.ConfirmKSPOperation].indexOf(e) < 0)
                                            n(i.MapError(t.MakeError(r.EU_ERROR_BAD_PARAMETER, "")));
                                        else {
                                            switch (e) {
                                                case l.EndUserEventType.None:
                                                    i.m_eventListeners = [];
                                                    break;
                                                case l.EndUserEventType.All:
                                                    i.m_eventListeners = [],
                                                        i.m_eventListeners[e] = a;
                                                    break;
                                                default:
                                                    i.m_eventListeners[e] = a
                                            }
                                            c()
                                        }
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetLibraryInfo = function(e) {
                                var a = this
                                    , r = this.m_library;
                                return new c((function(c, i) {
                                        var t = new d.b;
                                        t.supported = r.IsSupported(),
                                            t.isSignAgentSupported = r.IsSignAgentSupported(),
                                            t.isWebExtensionSupported = r.IsWebExtensionSupported(),
                                            t.isNPAPISupported = r.IsNPAPISupported(),
                                            t.isActiveXSupported = r.IsActiveXSupported(),
                                            t.isWebExtensionInstalled = r.IsWebExtensionInstalled(),
                                            t.nativeLibraryInstallURLs = r.GetInstallURL(!0, e),
                                            t.nativeLibraryInstallURL = t.nativeLibraryInstallURLs ? t.nativeLibraryInstallURLs[0] : null,
                                            t.nativeLibraryUpdateURLs = r.GetUpdateURL(!0, e),
                                            t.nativeLibraryUpdateURL = t.nativeLibraryUpdateURLs ? t.nativeLibraryUpdateURLs[0] : null,
                                            t.webExtensionInstallURL = r.GetWebExtensionInstallURL(),
                                            t.helpURL = r.GetHelpURL(e),
                                            t.supported ? r.Load().then((function() {
                                                    t.loaded = !0,
                                                        r.GetVersion().then((function(e) {
                                                                t.version = e,
                                                                    c(t)
                                                            }
                                                        )).catch((function(c) {
                                                                return i(a.MapError(c))
                                                            }
                                                        ))
                                                }
                                            )).catch((function(e) {
                                                    var i = a.MapError(e);
                                                    t.loaded = !1,
                                                        t.isNativeLibraryNeedUpdate = r.IsLibraryVersionNotSupportedError(i.code),
                                                        c(t)
                                                }
                                            )) : c(t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.IsInitialized = function() {
                                var e = this;
                                return new c((function(c, a) {
                                        c(e.m_initialized)
                                    }
                                ))
                            }
                            ,
                            e.prototype.Initialize = function(e) {
                                var a = this
                                    , r = a.m_library;
                                return a.m_settings = e,
                                    new c((function(c, i) {
                                            r.Load().then((function() {
                                                    return r.SetRuntimeParameter(r.EU_SAVE_SETTINGS_PARAMETER, r.EU_SETTINGS_ID_PROXY)
                                                }
                                            )).then((function() {
                                                    return r.SetUIMode(!1)
                                                }
                                            )).then((function() {
                                                    return r.Initialize()
                                                }
                                            )).then((function() {
                                                    return r.SetUIMode(!1)
                                                }
                                            )).then((function() {
                                                    return r.SetCharset(a.m_settings.encoding)
                                                }
                                            )).then((function() {
                                                    return r.SetLanguage(a.m_settings.language)
                                                }
                                            )).then((function() {
                                                    return r.InitializeMandatorySettings()
                                                }
                                            )).then((function() {
                                                    var c = r.CreateFileStoreSettings();
                                                    return c.SetPath(""),
                                                        c.SetSaveLoadedCerts(!0),
                                                        r.SetFileStoreSettings(c)
                                                }
                                            )).then((function() {
                                                    return null != a.m_settings.CAs && "string" == typeof a.m_settings.CAs ? r.DownloadData(a.m_settings.CAs, "json") : a.m_settings.CAs
                                                }
                                            )).then((function(c) {
                                                    a.m_settings.CAs = c;
                                                    var e = r.CreateOCSPAccessInfoModeSettings();
                                                    return e.SetEnabled(!0),
                                                        r.SetOCSPAccessInfoModeSettings(e)
                                                }
                                            )).then((function() {
                                                    for (var c = new Array, e = a.m_settings.CAs, i = 0; i < e.length; i++)
                                                        for (var t = 0; t < e[i].issuerCNs.length; t++) {
                                                            var n = r.CreateOCSPAccessInfoSettings();
                                                            n.SetAddress(e[i].ocspAccessPointAddress),
                                                                n.SetPort(e[i].ocspAccessPointPort),
                                                                n.SetIssuerCN(e[i].issuerCNs[t]),
                                                                c.push(n)
                                                        }
                                                    return r.SetOCSPAccessInfoSettings(c)
                                                }
                                            )).then((function() {
                                                    var c = r.CreateModeSettings();
                                                    return r.SetModeSettings(c)
                                                }
                                            )).then((function() {
                                                    return null != e.CACertificates && "string" == typeof e.CACertificates ? r.DownloadData(e.CACertificates, "binary") : e.CACertificates
                                                }
                                            )).then((function(c) {
                                                    if (null != e.CACertificates)
                                                        return r.SaveCertificates(c)
                                                }
                                            )).then((function() {
                                                    return r.SetRuntimeParameter(r.EU_RESOLVE_OIDS_PARAMETER, !1)
                                                }
                                            )).then((function() {
                                                    return r.CtxCreate()
                                                }
                                            )).then((function(c) {
                                                    return a.m_context = c,
                                                        r.CtxSetParameter(c, r.EU_RESOLVE_OIDS_CONTEXT_PARAMETER, !1)
                                                }
                                            )).then((function() {
                                                    a.m_initialized = !0,
                                                        c()
                                                }
                                            )).catch((function(c) {
                                                    return i(a.MapError(c))
                                                }
                                            ))
                                        }
                                    ))
                            }
                            ,
                            e.prototype.SetRuntimeParameter = function(e, a) {
                                var r = this
                                    , i = r.m_library;
                                return new c((function(c, t) {
                                        r.CheckInitialize().then((function() {
                                                return i.SetRuntimeParameter(e, a)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return t(r.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetStorageParameter = function(e, a) {
                                var r = this
                                    , i = r.m_library;
                                return new c((function(c, t) {
                                        r.CheckInitialize().then((function() {
                                                return i.GetStorageParameter(a, e)
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return t(r.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetStorageParameter = function(e, a, r) {
                                var i = this
                                    , t = i.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                return t.SetStorageParameter(r, e, a)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetCAs = function() {
                                var e = this;
                                return new c((function(c, a) {
                                        e.CheckInitialize().then((function() {
                                                c(e.m_settings.CAs)
                                            }
                                        )).catch((function(c) {
                                                return a(e.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetProxySettings = function() {
                                var e = this
                                    , a = e.m_library;
                                return new c((function(c, r) {
                                        e.CheckInitialize().then((function() {
                                                return a.GetProxySettings()
                                            }
                                        )).then((function(e) {
                                                var a = u.a.MapToProxySettings(e, new i.b);
                                                c(a)
                                            }
                                        )).catch((function(c) {
                                                return r(e.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetProxySettings = function(e) {
                                var a = this
                                    , r = a.m_library;
                                return new c((function(c, i) {
                                        a.CheckInitialize().then((function() {
                                                var c = u.a.MapFromProxySettings(e, r.CreateProxySettings());
                                                return r.SetProxySettings(c)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return i(a.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetKeyMedias = function() {
                                var e = this
                                    , a = e.m_library
                                    , r = new Array
                                    , i = null;
                                return e.m_settings.allowedKeyMediaDevices && (i = {},
                                    e.m_settings.allowedKeyMediaDevices.forEach((function(c) {
                                            i[c.type] = c.devices
                                        }
                                    ))),
                                    new c((function(c, t) {
                                            e.CheckInitialize().then((function() {
                                                    return e.BeginKMOperation()
                                                }
                                            )).then((function() {
                                                    return e.m_kmTypes ? e.m_kmTypes : a.GetKeyMediaTypes()
                                                }
                                            )).then((function(c) {
                                                    e.m_kmTypes = c;
                                                    var i = e.m_settings.allowedKeyMediaTypes;
                                                    r = new Array;
                                                    for (var t = 0; t < c.length; t++) {
                                                        var n = c[t];
                                                        (!i || i.indexOf(n) >= 0) && r.push(t)
                                                    }
                                                    return a.GetKeyMediaDevices(r)
                                                }
                                            )).then((function(a) {
                                                    for (var t = new Array, n = 0; n < a.length; n++)
                                                        for (var b = r[n], d = e.m_kmTypes[b], u = a[n], o = i && i[d] ? i[d] : null, l = 0; l < u.length; l++)
                                                            if (!o || -1 != o.indexOf(u[l])) {
                                                                var s = new f.EndUserKeyMedia;
                                                                s.typeIndex = b,
                                                                    s.devIndex = l,
                                                                    s.password = null,
                                                                    s.type = d,
                                                                    s.device = u[l],
                                                                    s.visibleName = s.device + "(" + s.type + ")",
                                                                    t.push(s)
                                                            }
                                                    e.EndKMOperation(),
                                                        c(t)
                                                }
                                            )).catch((function(c) {
                                                    e.EndKMOperation(),
                                                        t(e.MapError(c))
                                                }
                                            ))
                                        }
                                    ))
                            }
                            ,
                            e.prototype.GetJKSPrivateKeys = function(e) {
                                var a = this;
                                return new c((function(c, r) {
                                        a.CheckInitialize().then((function() {
                                                var i = new Array
                                                    , t = function(n) {
                                                    a.GetJKSPrivateKey(e, n).then((function(e) {
                                                            e ? (i.push(e),
                                                                t(n + 1)) : c(i)
                                                        }
                                                    )).catch((function(c) {
                                                            return r(a.MapError(c))
                                                        }
                                                    ))
                                                };
                                                t(0)
                                            }
                                        )).catch((function(c) {
                                                return r(a.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.IsPrivateKeyReaded = function() {
                                var e = this;
                                return new c((function(c, a) {
                                        e.CheckInitialize().then((function() {
                                                c(null != e.m_pkContext)
                                            }
                                        )).catch((function(c) {
                                                return a(e.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ResetPrivateKey = function() {
                                var e = this;
                                return new c((function(c, a) {
                                        e.CheckInitialize().then((function() {
                                                return e.ResetPrivateKeyInternal()
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return a(e.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKey = function(e, a, r) {
                                var i = this
                                    , t = this.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                i.BeginKMOperation()
                                            }
                                        )).then((function() {
                                                var c = u.a.MapFromKeyMedia(e, t.CreateKeyMedia());
                                                return i.ReadPrivateKeyInternal(null, null, c, a, r)
                                            }
                                        )).then((function(e) {
                                                i.EndKMOperation(),
                                                    c(e)
                                            }
                                        )).catch((function(c) {
                                                i.EndKMOperation(),
                                                    n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKeyBinary = function(e, a, r, i) {
                                var t = this;
                                return new c((function(c, n) {
                                        t.CheckInitialize().then((function() {
                                                return t.ReadPrivateKeyInternal(e, a, null, r, i)
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return n(t.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKeySIM = function(e, a, i, t) {
                                var n = this
                                    , b = this.m_library;
                                return new c((function(c, e) {
                                        n.CheckInitialize().then((function() {
                                                throw b.MakeError(r.EU_ERROR_NOT_SUPPORTED, "")
                                            }
                                        )).catch((function(c) {
                                                return e(n.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKeyKSP = function(e, a, i, t) {
                                var n = this
                                    , b = this.m_library;
                                return new c((function(c, e) {
                                        n.CheckInitialize().then((function() {
                                                throw b.MakeError(r.EU_ERROR_NOT_SUPPORTED, "")
                                            }
                                        )).catch((function(c) {
                                                return e(n.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetOwnCertificates = function() {
                                return this.CtxGetOwnCertificates(this.m_pkContext)
                            }
                            ,
                            e.prototype.GetOwnEUserParams = function() {
                                var e = this
                                    , a = e.m_library;
                                return new c((function(c, i) {
                                        e.CheckInitialize().then((function() {
                                                if (null == e.m_pkContext)
                                                    throw a.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                return a.CtxGetOwnEUserParams(e.m_pkContext)
                                            }
                                        )).then((function(e) {
                                                var a = u.a.MapToEndUserParams(e, new h.a);
                                                c(a)
                                            }
                                        )).catch((function(c) {
                                                return i(e.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ChangeOwnCertificatesStatus = function(e, a) {
                                var i = this
                                    , t = i.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                if (null == i.m_pkContext)
                                                    throw t.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                return t.CtxChangeOwnCertificatesStatus(i.m_pkContext, e, a)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.MakeNewCertificate = function(e, a, r, i, t, n, b, f, d, o, l, s, h, g, k, m) {
                                void 0 === m && (m = !1);
                                var j = this
                                    , p = j.m_library
                                    , v = {
                                    key: null,
                                    certs: null
                                };
                                return new c((function(E, _) {
                                        j.CheckInitialize().then((function() {
                                                return j.BeginKMOperation()
                                            }
                                        )).then((function() {
                                                var c = null;
                                                return null != e && (c = u.a.MapFromKeyMedia(e, p.CreateKeyMedia())),
                                                    m ? null : j.ReadPrivateKeyInternal(a, r, c, null, g)
                                            }
                                        )).then((function(c) {
                                                return k && !m ? p.CtxGetOwnEUserParams(j.m_pkContext) : null
                                            }
                                        )).then((function(c) {
                                                return k ? p.CtxModifyOwnEUserParams(j.m_pkContext, k.phone, k.EMail) : null
                                            }
                                        )).then((function() {
                                                return m ? null : j.ResetPrivateKeyInternal()
                                            }
                                        )).then((function() {
                                                if (m)
                                                    return new c((function(c, a) {
                                                            p.CtxMakeNewOwnCertificate(j.m_pkContext, i, t, n, b, f, d, o, l).then((function() {
                                                                    return j.ResetPrivateKeyInternal()
                                                                }
                                                            )).then((function() {
                                                                    var c = u.a.MapFromKeyMedia(e, p.CreateKeyMedia());
                                                                    return s && s.password != e.password ? p.ChangePrivateKeyPassword(c, s.password) : null
                                                                }
                                                            )).then((function() {
                                                                    c(null)
                                                                }
                                                            )).catch((function(c) {
                                                                    a(j.MapError(c))
                                                                }
                                                            ))
                                                        }
                                                    ));
                                                var g = null
                                                    , k = null;
                                                return e && (g = u.a.MapFromKeyMedia(e, p.CreateKeyMedia())),
                                                s && (k = u.a.MapFromKeyMedia(s, p.CreateKeyMedia())),
                                                    p.MakeNewCertificate(g, a, r, i, t, n, b, f, d, o, l, k, h)
                                            }
                                        )).then((function(c) {
                                                v.key = c;
                                                var a = null;
                                                return (m && e || s) && (a = u.a.MapFromKeyMedia(s || e, p.CreateKeyMedia())),
                                                    j.SearchPrivateKeyCertificatesWithCMP(c, h, a, g)
                                            }
                                        )).then((function(c) {
                                                return j.GetUserCertificatesFromCertificates(c.certs)
                                            }
                                        )).then((function(c) {
                                                j.EndKMOperation(),
                                                    v.certs = c,
                                                    E(v)
                                            }
                                        )).catch((function(c) {
                                                j.EndKMOperation(),
                                                    _(j.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.MakeDeviceCertificate = function(e, a, i, t, n) {
                                var b = this
                                    , d = b.m_library;
                                return new c((function(l, s) {
                                        b.CheckInitialize().then((function() {
                                                if (null == b.m_pkContext)
                                                    throw d.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                var c = b.m_pkContext.GetOwnerInfo()
                                                    , f = b.GetCASettings(c.GetIssuerCN());
                                                if (!f || !f.cmpAddress || "" == f.cmpAddress)
                                                    throw d.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                                                return d.CtxMakeDeviceCertificate(b.m_pkContext, e, a, i, t, n, f.cmpAddress, "80")
                                            }
                                        )).then((function(e) {
                                                return b.ProcessArray(e, (function(e) {
                                                        return new c((function(c, a) {
                                                                d.ParseCertificateEx(e).then((function(a) {
                                                                        var r = new f.EndUserCertificate;
                                                                        r.data = e,
                                                                            r.infoEx = u.a.MapToEndUserCertificateInfoEx(a, new o.a),
                                                                            c(r)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return a(c)
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                l(c)
                                            }
                                        )).catch((function(c) {
                                                b.EndKMOperation(),
                                                    s(b.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ChangePrivateKeyPassword = function(e, a) {
                                var r = this
                                    , i = r.m_library;
                                return new c((function(c, t) {
                                        r.CheckInitialize().then((function() {
                                                return r.BeginKMOperation()
                                            }
                                        )).then((function() {
                                                var c = u.a.MapFromKeyMedia(e, i.CreateKeyMedia());
                                                return r.m_library.ChangePrivateKeyPassword(c, a)
                                            }
                                        )).then((function() {
                                                r.EndKMOperation(),
                                                    c()
                                            }
                                        )).catch((function(c) {
                                                r.EndKMOperation(),
                                                    t(r.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GeneratePrivateKey = function(e, a, r, i, t, n, b, f, d, o, l, s) {
                                var h = this
                                    , g = h.m_library;
                                return new c((function(c, k) {
                                        h.CheckInitialize().then((function() {
                                                return h.BeginKMOperation()
                                            }
                                        )).then((function() {
                                                var c = null;
                                                return e && (c = u.a.MapFromKeyMedia(e, g.CreateKeyMedia())),
                                                    h.GeneratePrivateKeyInternal(c, a, null, r, i, t, n, b, f, d, o, l, s)
                                            }
                                        )).then((function(e) {
                                                h.EndKMOperation(),
                                                    c(e)
                                            }
                                        )).catch((function(c) {
                                                h.EndKMOperation(),
                                                    k(h.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GeneratePrivateKeyBinary = function(e, a, r, i, t, n, b, f, d, u, o) {
                                var l = this;
                                return new c((function(c, s) {
                                        l.CheckInitialize().then((function() {
                                                return l.BeginKMOperation()
                                            }
                                        )).then((function() {
                                                return l.GeneratePrivateKeyInternal(null, !1, e, a, r, i, t, n, b, f, d, u, o)
                                            }
                                        )).then((function(e) {
                                                l.EndKMOperation(),
                                                    c(e)
                                            }
                                        )).catch((function(c) {
                                                l.EndKMOperation(),
                                                    s(l.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.HashData = function(e, a, r) {
                                var i = this
                                    , t = this.m_library
                                    , n = !Array.isArray(a)
                                    , b = n ? [a] : a;
                                return new c((function(a, f) {
                                        i.CheckInitialize().then((function() {
                                                return i.ProcessArray(b, (function(a) {
                                                        return new c((function(c, n) {
                                                                t.CtxHash(i.m_context, e, null, a).then((function(c) {
                                                                        return r ? c : t.BASE64Decode(c)
                                                                    }
                                                                )).then((function(e) {
                                                                        c(e)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return n(c)
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                a(n ? c[0] : c)
                                            }
                                        )).catch((function(c) {
                                                f(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetSigner = function(e, a, r) {
                                void 0 === a && (a = -1),
                                void 0 === r && (r = !1);
                                var i = this
                                    , t = this.m_library
                                    , n = {
                                    context: null,
                                    signersInfo: null
                                };
                                return new c((function(b, d) {
                                        i.CheckInitialize().then((function() {
                                                return t.CtxCreate()
                                            }
                                        )).then((function(c) {
                                                return n.context = c,
                                                    t.CtxSetParameter(c, t.EU_RESOLVE_OIDS_CONTEXT_PARAMETER, r)
                                            }
                                        )).then((function() {
                                                return -1 == a ? t.GetSignsCount(e) : 1
                                            }
                                        )).then((function(r) {
                                                var b = new Array;
                                                if (-1 != a)
                                                    b.push(a);
                                                else
                                                    for (var d = 0; d < r; d++)
                                                        b.push(d);
                                                return i.ProcessArray(b, (function(a) {
                                                        return new c((function(c, r) {
                                                                var b = new f.EndUserCertificate;
                                                                t.CtxGetSignerInfo(n.context, a, e).then((function(e) {
                                                                        u.a.MapToEndUserCertificate(e, b),
                                                                            c(b)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return r(i.MapError(c))
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                return n.signersInfo = c,
                                                    t.CtxFree(n.context)
                                            }
                                        )).then((function() {
                                                n.context = null,
                                                    b(-1 != a ? n.signersInfo[0] : n.signersInfo)
                                            }
                                        )).catch((function(c) {
                                                n.context ? t.CtxFree(n.context).then((function() {
                                                        d(i.MapError(c))
                                                    }
                                                )).catch((function() {
                                                        d(i.MapError(c))
                                                    }
                                                )) : d(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.SignData = function(c, e) {
                                return void 0 === e && (e = !1),
                                    this.SignDataEx(l.EndUserSignAlgo.DSTU4145WithGOST34311, c, !0, !0, e)
                            }
                            ,
                            e.prototype.SignDataInternal = function(c, e, a) {
                                return void 0 === a && (a = !1),
                                    this.SignDataEx(l.EndUserSignAlgo.DSTU4145WithGOST34311, e, !1, c, a)
                            }
                            ,
                            e.prototype.SignHash = function(c, e, a, r) {
                                return this.CtxSignHashInternal(this.m_pkContext, c, e, null, a, r)
                            }
                            ,
                            e.prototype.SignDataEx = function(c, e, a, r, i) {
                                return this.CtxSignDataInternal(this.m_pkContext, c, e, null, a, r, i)
                            }
                            ,
                            e.prototype.AppendSign = function(c, e, a, r, i) {
                                return this.CtxSignDataInternal(this.m_pkContext, c, e, a, null != e, r, i)
                            }
                            ,
                            e.prototype.AppendSignHash = function(c, e, a, r, i) {
                                return this.CtxSignHashInternal(this.m_pkContext, c, e, a, r, i)
                            }
                            ,
                            e.prototype.VerifyHash = function(e, a, r) {
                                void 0 === r && (r = -1);
                                var i = this
                                    , t = this.m_library;
                                return new c((function(n, b) {
                                        i.CheckInitialize().then((function() {
                                                return -1 == r ? t.GetSignsCount(a) : 1
                                            }
                                        )).then((function(n) {
                                                var b = new Array;
                                                if (-1 != r)
                                                    b.push(r);
                                                else
                                                    for (var f = 0; f < n; f++)
                                                        b.push(f);
                                                return i.ProcessArray(b, (function(r) {
                                                        return new c((function(c, n) {
                                                                var b = new k.a;
                                                                t.VerifyHashOnTimeEx(e, r, a, null, !1, !1).then((function(c) {
                                                                        return u.a.MapToEndUserSignInfo(c, b),
                                                                            t.GetSignTimeInfo(r, a)
                                                                    }
                                                                )).then((function(e) {
                                                                        b.timeInfo = u.a.MapToEndUserTimeInfo(e, new j.a),
                                                                            c(b)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return n(i.MapError(c))
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                n(-1 != r ? c[0] : c)
                                            }
                                        )).catch((function(c) {
                                                return b(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.VerifyData = function(e, a, r) {
                                void 0 === r && (r = -1);
                                var i = this
                                    , t = this.m_library;
                                return new c((function(n, b) {
                                        i.CheckInitialize().then((function() {
                                                return -1 == r ? t.GetSignsCount(a) : 1
                                            }
                                        )).then((function(n) {
                                                var b = new Array;
                                                if (-1 != r)
                                                    b.push(r);
                                                else
                                                    for (var f = 0; f < n; f++)
                                                        b.push(f);
                                                return i.ProcessArray(b, (function(r) {
                                                        return new c((function(c, n) {
                                                                var b = new k.a;
                                                                t.VerifyDataOnTimeEx(e, r, a, null, !1, !1).then((function(c) {
                                                                        return u.a.MapToEndUserSignInfo(c, b),
                                                                            t.GetSignTimeInfo(r, a)
                                                                    }
                                                                )).then((function(e) {
                                                                        b.timeInfo = u.a.MapToEndUserTimeInfo(e, new j.a),
                                                                            c(b)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return n(i.MapError(c))
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                n(-1 != r ? c[0] : c)
                                            }
                                        )).catch((function(c) {
                                                return b(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.VerifyDataInternal = function(e, a) {
                                void 0 === a && (a = -1);
                                var r = this
                                    , i = this.m_library;
                                return new c((function(t, n) {
                                        r.CheckInitialize().then((function() {
                                                return -1 == a ? i.GetSignsCount(e) : 1
                                            }
                                        )).then((function(t) {
                                                var n = new Array;
                                                if (-1 != a)
                                                    n.push(a);
                                                else
                                                    for (var b = 0; b < t; b++)
                                                        n.push(b);
                                                return r.ProcessArray(n, (function(a) {
                                                        return new c((function(c, t) {
                                                                var n = new k.a;
                                                                i.VerifyDataInternalOnTimeEx(e, a, null, !1, !1).then((function(c) {
                                                                        return u.a.MapToEndUserSignInfo(c, n),
                                                                            i.GetSignTimeInfo(a, e)
                                                                    }
                                                                )).then((function(e) {
                                                                        n.timeInfo = u.a.MapToEndUserTimeInfo(e, new j.a),
                                                                            c(n)
                                                                    }
                                                                )).catch((function(c) {
                                                                        return t(r.MapError(c))
                                                                    }
                                                                ))
                                                            }
                                                        ))
                                                    }
                                                ))
                                            }
                                        )).then((function(c) {
                                                t(-1 != a ? c[0] : c)
                                            }
                                        )).catch((function(c) {
                                                return n(r.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.EnvelopData = function(e, a, i, t, n, b) {
                                void 0 === b && (b = !1);
                                var f = this
                                    , d = this.m_library;
                                return new c((function(c, u) {
                                        f.CheckInitialize().then((function() {
                                                if (null == f.m_pkContext && (!b || i))
                                                    throw d.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                var c = d.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
                                                return b ? i ? d.CtxEnvelopWithDynamicKey(f.m_pkContext, e, c, i, t, a) : d.EnvelopToRecipientsWithDynamicKey(e, i, t, a) : d.CtxEnvelop(f.m_pkContext, e, c, i, t, a)
                                            }
                                        )).then((function(c) {
                                                return n ? c : d.BASE64Decode(c)
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return u(f.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.DevelopData = function(e, a) {
                                var i = this
                                    , t = this.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                if (null == i.m_pkContext)
                                                    throw t.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                return t.CtxDevelop(i.m_pkContext, e, a)
                                            }
                                        )).then((function(e) {
                                                var a = u.a.MapToEndUserSenderInfo(e, new m.a);
                                                c(a)
                                            }
                                        )).catch((function(c) {
                                                return n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ProtectDataByPassword = function(e, a, r) {
                                var i = this
                                    , t = this.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                return t.ProtectDataByPassword(e, a)
                                            }
                                        )).then((function(c) {
                                                return r ? c : t.BASE64Decode(c)
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.UnprotectDataByPassword = function(e, a, r) {
                                var i = this
                                    , t = this.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                return t.UnprotectDataByPassword(e, a)
                                            }
                                        )).then((function(c) {
                                                return r ? t.BytesToString(c) : c
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateAuthData = function(e, a, i) {
                                var t = this
                                    , n = this.m_library;
                                return new c((function(c, b) {
                                        t.CheckInitialize().then((function() {
                                                if (null == t.m_pkContext)
                                                    throw n.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                return n.CtxCreateAuthData(t.m_pkContext, e, a)
                                            }
                                        )).then((function(c) {
                                                return i ? c : n.BASE64Decode(c)
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return b(t.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetTSPByAccessInfo = function(e, a, r, i, t) {
                                var n = this
                                    , b = this.m_library;
                                return new c((function(c, f) {
                                        n.CheckInitialize().then((function() {
                                                return b.GetTSPByAccessInfo(e, a, r, i)
                                            }
                                        )).then((function(c) {
                                                return t ? b.BASE64Encode(c) : c
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return f(n.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CheckTSP = function(e, a, r) {
                                var i = this
                                    , t = this.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                return t.CheckTSP(e, a, r)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxCreate = function() {
                                var e = this
                                    , a = this.m_library
                                    , r = {
                                    context: null
                                };
                                return new c((function(c, i) {
                                        e.CheckInitialize().then((function() {
                                                return a.CtxCreate()
                                            }
                                        )).then((function(c) {
                                                return r.context = c,
                                                    a.CtxSetParameter(c, a.EU_RESOLVE_OIDS_CONTEXT_PARAMETER, !1)
                                            }
                                        )).then((function() {
                                                c(r.context)
                                            }
                                        )).catch((function(c) {
                                                return i(e.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxFree = function(e) {
                                var a = this
                                    , r = this.m_library;
                                return new c((function(c, i) {
                                        a.CheckInitialize().then((function() {
                                                r.CtxFree(e)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return i(a.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxSetParameter = function(e, a, r) {
                                var i = this
                                    , t = i.m_library;
                                return new c((function(c, n) {
                                        i.CheckInitialize().then((function() {
                                                return null == e && (e = i.m_context),
                                                    t.CtxSetParameter(e, a, r)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                i.EndKMOperation(),
                                                    n(i.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxReadPrivateKey = function(e, a, r, i) {
                                var t = this
                                    , n = t.m_library;
                                return new c((function(c, b) {
                                        t.CheckInitialize().then((function() {
                                                return t.BeginKMOperation()
                                            }
                                        )).then((function() {
                                                var c = u.a.MapFromKeyMedia(a, n.CreateKeyMedia());
                                                return t.CtxReadPrivateKeyInternal(e, null, null, c, r, i)
                                            }
                                        )).then((function(e) {
                                                t.EndKMOperation(),
                                                    c(e)
                                            }
                                        )).catch((function(c) {
                                                t.EndKMOperation(),
                                                    b(t.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxReadPrivateKeyBinary = function(e, a, r, i, t) {
                                var n = this;
                                return new c((function(c, b) {
                                        n.CheckInitialize().then((function() {
                                                return n.CtxReadPrivateKeyInternal(e, a, r, null, i, t)
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return b(n.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxFreePrivateKey = function(e) {
                                var a = this
                                    , r = this.m_library;
                                return new c((function(c, i) {
                                        a.CheckInitialize().then((function() {
                                                return r.CtxFreePrivateKey(e)
                                            }
                                        )).then((function() {
                                                c()
                                            }
                                        )).catch((function(c) {
                                                return i(a.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxGetOwnCertificates = function(e) {
                                var a = this
                                    , i = this.m_library;
                                return new c((function(c, t) {
                                        a.CheckInitialize().then((function() {
                                                if (null == e)
                                                    throw i.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                var n = new Array
                                                    , b = function(r) {
                                                    i.CtxEnumOwnCertificates(e, r).then((function(e) {
                                                            if (e) {
                                                                var a = u.a.MapToEndUserCertificate(e, new f.EndUserCertificate);
                                                                n.push(a),
                                                                    b(r + 1)
                                                            } else
                                                                c(n)
                                                        }
                                                    )).catch((function(c) {
                                                            return t(a.MapError(c))
                                                        }
                                                    ))
                                                };
                                                b(0)
                                            }
                                        )).catch((function(c) {
                                                return t(a.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxSignHash = function(c, e, a, r, i) {
                                return this.CtxSignHashInternal(c, e, a, null, r, i)
                            }
                            ,
                            e.prototype.CtxSignData = function(c, e, a, r, i, t) {
                                return this.CtxSignDataInternal(c, e, a, null, r, i, t)
                            }
                            ,
                            e.prototype.CtxAppendSignHash = function(c, e, a, r, i, t) {
                                return this.CtxSignHashInternal(c, e, a, r, i, t)
                            }
                            ,
                            e.prototype.CtxAppendSign = function(c, e, a, r, i, t) {
                                return this.CtxSignDataInternal(c, e, a, r, null != a, i, t)
                            }
                            ,
                            e.prototype.CtxEnvelopData = function(e, a, i, t, n, b, f) {
                                var d = this
                                    , u = this.m_library;
                                return new c((function(c, o) {
                                        d.CheckInitialize().then((function() {
                                                if (null == e && (!f || t))
                                                    throw u.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                var c = u.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
                                                return f ? t ? u.CtxEnvelopWithDynamicKey(e, a, c, t, n, i) : u.EnvelopToRecipientsWithDynamicKey(a, t, n, i) : u.CtxEnvelop(e, a, c, t, n, i)
                                            }
                                        )).then((function(c) {
                                                return b ? c : u.BASE64Decode(c)
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return o(d.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxDevelopData = function(e, a, i) {
                                var t = this
                                    , n = this.m_library;
                                return new c((function(c, b) {
                                        t.CheckInitialize().then((function() {
                                                if (null == e)
                                                    throw n.MakeError(r.EU_ERROR_BAD_CERT, "");
                                                return n.CtxDevelop(e, a, i)
                                            }
                                        )).then((function(e) {
                                                var a = u.a.MapToEndUserSenderInfo(e, new m.a);
                                                c(a)
                                            }
                                        )).catch((function(c) {
                                                return b(t.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.ProtectTaxReports = function(e, a, r, i, t, n, b) {
                                void 0 === e && (e = null),
                                void 0 === a && (a = null),
                                void 0 === r && (r = null),
                                void 0 === b && (b = !1);
                                var f = this;
                                return new c((function(c, d) {
                                        var u = {
                                            accountant: null,
                                            director: null,
                                            stamp: null
                                        };
                                        f.CheckInitialize().then((function() {
                                                var c = [l.EndUserKeyUsage.DigitalSignature];
                                                return null != e ? f.LoadTaxReportPKey(e, c, !1) : null
                                            }
                                        )).then((function(c) {
                                                u.accountant = c;
                                                var e = [l.EndUserKeyUsage.DigitalSignature];
                                                return r || e.push(l.EndUserKeyUsage.KeyAgreement),
                                                    null != a ? f.LoadTaxReportPKey(a, e, !1) : null
                                            }
                                        )).then((function(c) {
                                                u.director = c;
                                                var e = [l.EndUserKeyUsage.DigitalSignature, l.EndUserKeyUsage.KeyAgreement];
                                                return null != r ? f.LoadTaxReportPKey(r, e, !0) : null
                                            }
                                        )).then((function(c) {
                                                return u.stamp = c,
                                                    f.ProcessArray(n, (function(c) {
                                                            return f.ProtectTaxReport(u.accountant, u.director, u.stamp, i, t, c, b)
                                                        }
                                                    ))
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return d(f.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e.prototype.UnprotectTaxReceipts = function(e, a) {
                                var r = this;
                                return new c((function(c, i) {
                                        r.CheckInitialize().then((function() {
                                                return r.ProcessArray(a, (function(c) {
                                                        return r.UnprotectTaxReceipt(e, c)
                                                    }
                                                ))
                                            }
                                        )).then((function(e) {
                                                c(e)
                                            }
                                        )).catch((function(c) {
                                                return i(r.MapError(c))
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            e
                    }();
                    e.a = v
                }
            ).call(this, a(16).Promise)
        }
        , function(c, e, a) {
            "use strict";
            (function(c) {
                    var r = a(3)
                        , i = function() {
                        function e() {
                            this.EU_SUBJECT_TYPE_UNDIFFERENCED = 0,
                                this.EU_SUBJECT_TYPE_CA = 1,
                                this.EU_SUBJECT_TYPE_CA_SERVER = 2,
                                this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR = 3,
                                this.EU_SUBJECT_TYPE_END_USER = 4,
                                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0,
                                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1,
                                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2,
                                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3,
                                this.EU_CERT_KEY_TYPE_UNKNOWN = 0,
                                this.EU_CERT_KEY_TYPE_DSTU4145 = 1,
                                this.EU_CERT_KEY_TYPE_RSA = 2,
                                this.EU_CERT_KEY_TYPE_ECDSA = 4,
                                this.EU_KEY_USAGE_UNKNOWN = 0,
                                this.EU_KEY_USAGE_DIGITAL_SIGNATURE = 1,
                                this.EU_KEY_USAGE_KEY_AGREEMENT = 16,
                                this.EU_KEYS_REQUEST_TYPE_UA_DS = 1,
                                this.EU_KEYS_REQUEST_TYPE_UA_KEP = 2,
                                this.EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3,
                                this.EU_KEYS_TYPE_NONE = 0,
                                this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS = 1,
                                this.EU_KEYS_TYPE_RSA_WITH_SHA = 2,
                                this.EU_KEYS_LENGTH_DS_UA_191 = 1,
                                this.EU_KEYS_LENGTH_DS_UA_257 = 2,
                                this.EU_KEYS_LENGTH_DS_UA_307 = 3,
                                this.EU_KEYS_LENGTH_DS_UA_FILE = 4,
                                this.EU_KEYS_LENGTH_DS_UA_CERT = 5,
                                this.EU_KEYS_LENGTH_KEP_UA_257 = 1,
                                this.EU_KEYS_LENGTH_KEP_UA_431 = 2,
                                this.EU_KEYS_LENGTH_KEP_UA_571 = 3,
                                this.EU_KEYS_LENGTH_KEP_UA_FILE = 4,
                                this.EU_KEYS_LENGTH_KEP_UA_CERT = 5,
                                this.EU_KEYS_LENGTH_DS_RSA_1024 = 1,
                                this.EU_KEYS_LENGTH_DS_RSA_2048 = 2,
                                this.EU_KEYS_LENGTH_DS_RSA_3072 = 3,
                                this.EU_KEYS_LENGTH_DS_RSA_4096 = 4,
                                this.EU_KEYS_LENGTH_DS_RSA_FILE = 5,
                                this.EU_KEYS_LENGTH_DS_RSA_CERT = 6,
                                this.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL = 1,
                                this.EU_RECIPIENT_APPEND_KEY_ID = 2,
                                this.EU_RECIPIENT_APPEND_KEY_ID_USC_COMPAT = 3,
                                this.EU_SAVE_SETTINGS_PARAMETER = "SaveSettings",
                                this.EU_RESOLVE_OIDS_PARAMETER = "ResolveOIDs",
                                this.EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER = "MakePKeyPFXContainer",
                                this.EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER = "SignIncludeContentTimeStamp",
                                this.EU_SIGN_TYPE_PARAMETER = "SignType",
                                this.EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER = "SignIncludeCACertificates",
                                this.EU_FS_CALCULATE_FINGERPRINT = "FSCalculateFingerprint",
                                this.EU_SETTINGS_ID_NONE = 0,
                                this.EU_SETTINGS_ID_MANDATORY = 31,
                                this.EU_SETTINGS_ID_ALL = 1023,
                                this.EU_SETTINGS_ID_FSTORE = 1,
                                this.EU_SETTINGS_ID_PROXY = 2,
                                this.EU_SETTINGS_ID_TSP = 4,
                                this.EU_SETTINGS_ID_OCSP = 8,
                                this.EU_SETTINGS_ID_LDAP = 16,
                                this.EU_SETTINGS_ID_MODE = 32,
                                this.EU_SETTINGS_ID_CMP = 64,
                                this.EU_SETTINGS_ID_KM = 128,
                                this.EU_SETTINGS_ID_OCSP_ACCESS_INFO_MODE = 256,
                                this.EU_SETTINGS_ID_OCSP_ACCESS_INFO = 512,
                                this.EU_HEADER_CA_TYPE = "UA1",
                                this.EU_HEADER_PART_TYPE_SIGNED = 1,
                                this.EU_HEADER_PART_TYPE_ENCRYPTED = 2,
                                this.EU_HEADER_PART_TYPE_STAMPED = 3,
                                this.EU_HEADER_PART_TYPE_CERTCRYPT = 4,
                                this.EU_HEADER_MAX_CA_TYPE_SIZE = 3,
                                this.EU_SIGNED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_SIGNED,
                                this.EU_ENCRYPTED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_ENCRYPTED,
                                this.EU_TIMESTAMPED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_STAMPED,
                                this.EU_CERTCRYPT_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_CERTCRYPT,
                                this.EU_DEFAULT_LANG = 0,
                                this.EU_UA_LANG = 1,
                                this.EU_RU_LANG = 2,
                                this.EU_EN_LANG = 3,
                                this.EU_CONTENT_ENC_ALGO_TDES_CBC = 4,
                                this.EU_CONTENT_ENC_ALGO_AES_128_CBC = 5,
                                this.EU_CONTENT_ENC_ALGO_AES_192_CBC = 6,
                                this.EU_CONTENT_ENC_ALGO_AES_256_CBC = 7,
                                this.EU_DEV_CTX_MIN_PUBLIC_DATA_ID = 16,
                                this.EU_DEV_CTX_MAX_PRIVATE_DATA_ID = 175,
                                this.EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9",
                                this.EU_CCS_TYPE_REVOKE = 1,
                                this.EU_CCS_TYPE_HOLD = 2,
                                this.EU_REVOCATION_REASON_UNKNOWN = 0,
                                this.EU_REVOCATION_REASON_KEY_COMPROMISE = 1,
                                this.EU_REVOCATION_REASON_NEW_ISSURED = 2,
                                this.EU_SIGN_TYPE_UNKNOWN = 0,
                                this.EU_SIGN_TYPE_CADES_BES = 1,
                                this.EU_SIGN_TYPE_CADES_T = 4,
                                this.EU_SIGN_TYPE_CADES_C = 8,
                                this.EU_SIGN_TYPE_CADES_X_LONG = 16,
                                this.EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER = "CheckPrivateKey",
                                this.EU_RESOLVE_OIDS_CONTEXT_PARAMETER = "ResolveOIDs",
                                this.EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER = "ExportableContext",
                                this.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1,
                                this.EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2,
                                this.EU_CTX_HASH_ALGO_UNKNOWN = 0,
                                this.EU_CTX_HASH_ALGO_GOST34311 = 1,
                                this.EU_CTX_HASH_ALGO_SHA160 = 2,
                                this.EU_CTX_HASH_ALGO_SHA224 = 3,
                            this.EU_CTX_HASH_ALGO_SHA256 = 4,
                            this.EU_CTX_SIGN_UNKNOWN = 0,
                            this.EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1,
                            this.EU_CTX_SIGN_RSA_WITH_SHA = 2,
                            this.EU_FILE_PROCESS_CHUNK_SIZE = 1048576,
                            this.EnvelopToRecipientsEx = function(e, a, r, i) {
                                var t = this.m_library;
                                return new c((function(c, n) {
                                        t.EnvelopToRecipientsEx(e, a, r, i, c, n)
                                    }
                                ))
                            }
                            ,
                            this.EnvelopToRecipientsWithDynamicKey = function(e, a, r, i) {
                                var t = this.m_library;
                                return new c((function(c, n) {
                                        t.EnvelopToRecipientsWithDynamicKey(e, a, r, i, c, n)
                                    }
                                ))
                            }
                            ,
                            this.EnvelopToRecipientsWithSettings = function(e, a, r, i, t, n, b) {
                                var f = this.m_library;
                                return new c((function(c, d) {
                                        f.EnvelopToRecipientsWithSettings(e, a, r, i, t, n, b, c, d)
                                    }
                                ))
                            }
                            ,
                            this.CtxEnvelop = function(e, a, r, i, t, n) {
                                var b = this.m_library;
                                return new c((function(c, f) {
                                        b.CtxEnvelop(e, a, r, i, t, n, c, f)
                                    }
                                ))
                            }
                            ,
                            this.CtxEnvelopWithDynamicKey = function(e, a, r, i, t, n) {
                                var b = this.m_library;
                                return new c((function(c, f) {
                                        b.CtxEnvelopWithDynamicKey(e, a, r, i, t, n, c, f)
                                    }
                                ))
                            }
                            ,
                            this.DevelopEx = function(e, a) {
                                void 0 === a && (a = null);
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.DevelopEx(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            this.CtxDevelop = function(e, a, r) {
                                void 0 === r && (r = null);
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxDevelop(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            this.CtxCreateAuthData = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxCreateAuthData(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            this.ProtectDataByPassword = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.ProtectDataByPassword(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            this.UnprotectDataByPassword = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.UnprotectDataByPassword(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            this.AppendTransportHeader = function(e, a, r, i, t) {
                                var n = this.m_library;
                                return new c((function(c, b) {
                                        n.AppendTransportHeader(e, a, r, i, t, c, b)
                                    }
                                ))
                            }
                            ,
                            this.ParseTransportHeader = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.ParseTransportHeader(e, c, r)
                                    }
                                ))
                            }
                            ,
                            this.AppendCryptoHeader = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.AppendCryptoHeader(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            this.ParseCryptoHeader = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.ParseCryptoHeader(e, c, r)
                                    }
                                ))
                            }
                            ,
                            this.CtxCreate = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.CtxCreate(c, a)
                                    }
                                ))
                            }
                            ,
                            this.CtxFree = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.CtxFree(e, c, r)
                                    }
                                ))
                            }
                            ,
                            this.CtxSetParameter = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxSetParameter(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            this.m_language = 0,
                            this.m_library = null
                        }
                        return e.prototype.MakeURL = function(c) {
                            var e = location.origin
                                , a = location.pathname;
                            return 0 == c.indexOf("http://") || 0 == c.indexOf("https://") ? c : 0 == c.indexOf("/") && e ? e + c : e && a ? e + a.substr(0, a.lastIndexOf("/")) + "/" + c : c
                        }
                            ,
                            e.prototype.MakeError = function(c, e) {
                                return this.m_library.MakeError(c, e)
                            }
                            ,
                            e.prototype.IsLibraryLoadError = function(c) {
                                return c == r.EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED
                            }
                            ,
                            e.prototype.IsLibraryVersionNotSupportedError = function(c) {
                                return c == r.EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED
                            }
                            ,
                            e.prototype.Load = function() {
                                var e = this;
                                return new c((function(c, a) {
                                        if (null == e.m_library) {
                                            var i = new r.EndUserLibraryLoader(r.EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT,"euSign",e.m_language,!0,!0);
                                            i.onload = function(a) {
                                                e.m_library = a,
                                                    c()
                                            }
                                                ,
                                                i.onerror = function(c, e, i) {
                                                    null == i && (i = new r.EUSignCP("","")),
                                                        a(i.MakeError(e, ""))
                                                }
                                                ,
                                                i.load()
                                        } else
                                            c()
                                    }
                                ))
                            }
                            ,
                            e.prototype.IsSupported = function() {
                                return r.EndUserLibraryLoader.isWebExtensionSupported() || r.EndUserLibraryLoader.isSignAgentSupported() || r.EndUserLibraryLoader.isNPAPISupported() || r.EndUserLibraryLoader.isActiveXSupported()
                            }
                            ,
                            e.prototype.IsSignAgentSupported = function() {
                                return r.EndUserLibraryLoader.isSignAgentSupported()
                            }
                            ,
                            e.prototype.IsWebExtensionSupported = function() {
                                return r.EndUserLibraryLoader.isWebExtensionSupported()
                            }
                            ,
                            e.prototype.IsNPAPISupported = function() {
                                return r.EndUserLibraryLoader.isNPAPISupported()
                            }
                            ,
                            e.prototype.IsActiveXSupported = function() {
                                return r.EndUserLibraryLoader.isActiveXSupported()
                            }
                            ,
                            e.prototype.IsWebExtensionInstalled = function() {
                                return r.EndUserLibraryLoader.isWebExtensionInstalled()
                            }
                            ,
                            e.prototype.GetInstallURL = function(c, e) {
                                return void 0 === c && (c = !1),
                                    new r.EUSignCP("","").GetInstallURL(c, e)
                            }
                            ,
                            e.prototype.GetUpdateURL = function(c, e) {
                                return void 0 === c && (c = !1),
                                    new r.EUSignCP("","").GetUpdateURL(c, e)
                            }
                            ,
                            e.prototype.GetHelpURL = function(c) {
                                return new r.EUSignCP("","").GetHelpURL(c)
                            }
                            ,
                            e.prototype.GetWebExtensionInstallURL = function() {
                                return new r.EUSignCP("","").GetWebExtensionInstallURL()
                            }
                            ,
                            e.prototype.SetUIMode = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetUIMode(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetLanguage = function(e) {
                                var a = this.m_library;
                                if ("string" == typeof e)
                                    switch (e = e.toLocaleLowerCase()) {
                                        case "en":
                                            e = this.EU_EN_LANG;
                                            break;
                                        case "ru":
                                            e = this.EU_RU_LANG;
                                            break;
                                        case "uk":
                                        case "ua":
                                        default:
                                            e = this.EU_UA_LANG
                                    }
                                return this.m_language = e,
                                    new c((function(c, r) {
                                            a.SetLanguage(e, c, r)
                                        }
                                    ))
                            }
                            ,
                            e.prototype.SetCharset = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetCharset(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetRuntimeParameter = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.SetRuntimeParameter(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetStorageParameter = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.GetStorageParameter(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetStorageParameter = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.SetStorageParameter(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.BASE64Encode = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.BASE64Encode(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.BASE64Decode = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.BASE64Decode(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.StringToBytes = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.StringToBytes(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.BytesToString = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.BytesToString(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.DoesNeedSetSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.DoesNeedSetSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.InitializeMandatorySettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.InitializeMandatorySettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateModeSettings = function() {
                                return this.m_library.CreateModeSettings()
                            }
                            ,
                            e.prototype.GetModeSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetModeSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetModeSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetModeSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateKeyMediaSettings = function() {
                                return this.m_library.CreateKeyMediaSettings()
                            }
                            ,
                            e.prototype.GetKeyMediaSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetKeyMediaSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetKeyMediaSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetKeyMediaSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateFileStoreSettings = function() {
                                return this.m_library.CreateFileStoreSettings()
                            }
                            ,
                            e.prototype.GetFileStoreSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetFileStoreSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetFileStoreSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetFileStoreSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateProxySettings = function() {
                                return this.m_library.CreateProxySettings()
                            }
                            ,
                            e.prototype.GetProxySettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetProxySettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetProxySettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetProxySettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateOCSPSettings = function() {
                                return this.m_library.CreateOCSPSettings()
                            }
                            ,
                            e.prototype.GetOCSPSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetOCSPSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetOCSPSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetOCSPSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateOCSPAccessInfoModeSettings = function() {
                                return this.m_library.CreateOCSPAccessInfoModeSettings()
                            }
                            ,
                            e.prototype.GetOCSPAccessInfoModeSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetOCSPAccessInfoModeSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetOCSPAccessInfoModeSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetOCSPAccessInfoModeSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateOCSPAccessInfoSettings = function() {
                                return this.m_library.CreateOCSPAccessInfoSettings()
                            }
                            ,
                            e.prototype.EnumOCSPAccessInfoSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.EnumOCSPAccessInfoSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetOCSPAccessInfoSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetOCSPAccessInfoSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetOCSPAccessInfoSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetOCSPAccessInfoSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.DeleteOCSPAccessInfoSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.DeleteOCSPAccessInfoSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateTSPSettings = function() {
                                return this.m_library.CreateTSPSettings()
                            }
                            ,
                            e.prototype.GetTSPSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetTSPSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetTSPSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetTSPSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateLDAPSettings = function() {
                                return this.m_library.CreateLDAPSettings()
                            }
                            ,
                            e.prototype.GetLDAPSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetLDAPSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetLDAPSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetLDAPSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateCMPSettings = function() {
                                return this.m_library.CreateCMPSettings()
                            }
                            ,
                            e.prototype.GetCMPSettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetCMPSettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SetCMPSettings = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SetCMPSettings(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetSystemProxySettings = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetSystemProxySettings(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetCertificate = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.GetCertificate(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ParseCertificateEx = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.ParseCertificateEx(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SaveCertificate = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SaveCertificate(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SaveCertificates = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SaveCertificates(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetTSPByAccessInfo = function(e, a, r, i) {
                                var t = this.m_library;
                                return new c((function(c, n) {
                                        t.GetTSPByAccessInfo(e, a, r, i, c, n)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CheckTSP = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CheckTSP(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.DownloadData = function(e, a) {
                                var i = this;
                                return new c((function(c, t) {
                                        try {
                                            var n = new XMLHttpRequest;
                                            n.onload = function() {
                                                if (4 == n.readyState) {
                                                    var b = null;
                                                    try {
                                                        if (200 != n.status)
                                                            throw "Download data error. URL - " + e + ", status - " + n.status;
                                                        switch (a) {
                                                            case "binary":
                                                                b = new Uint8Array(n.response);
                                                                break;
                                                            case "json":
                                                                b = JSON.parse(n.responseText.replace(/\\'/g, "'"));
                                                                break;
                                                            default:
                                                                b = n.responseText
                                                        }
                                                    } catch (c) {
                                                        return console.log("EndUser.DowloadData error: " + c),
                                                            void t(i.MakeError(r.EndUserError.ERROR_DOWNLOAD_FILE, ""))
                                                    }
                                                    c(b)
                                                }
                                            }
                                                ,
                                                n.onerror = function() {
                                                    t(i.MakeError(r.EndUserError.ERROR_DOWNLOAD_FILE, ""))
                                                }
                                                ,
                                                e = i.MakeURL(e),
                                                n.open("GET", e, !0),
                                            "binary" == a && (n.responseType = "arraybuffer"),
                                                n.send()
                                        } catch (c) {
                                            t(i.MakeError(r.EndUserError.ERROR_DOWNLOAD_FILE, ""))
                                        }
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreateKeyMedia = function() {
                                return this.m_library.CreateKeyMedia()
                            }
                            ,
                            e.prototype.GetPrivateKeyMedia = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.GetPrivateKeyMedia(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.EnumKeyMediaTypes = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.EnumKeyMediaTypes(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.EnumKeyMediaDevices = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.EnumKeyMediaDevices(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetKeyMediaTypes = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetKeyMediaTypes(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetKeyMediaDevices = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.GetKeyMediaDevices(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.IsPrivateKeyReaded = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.IsPrivateKeyReaded(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKey = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.ReadPrivateKey(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKeySilently = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        "number" == typeof e ? i.ReadPrivateKeySilently(e, a, r, c, t) : i.ReadPrivateKeySilently(e, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKeyBinary = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.ReadPrivateKeyBinary(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ReadPrivateKeyFile = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.ReadPrivateKeyFile(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ResetPrivateKey = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.ResetPrivateKey(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxReadPrivateKey = function(e, a, r, i) {
                                var t = this.m_library;
                                return new c((function(c, n) {
                                        "number" == typeof a ? t.CtxReadPrivateKey(e, a, r, i, c, n) : t.CtxReadPrivateKey(e, a, c, n)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxReadPrivateKeyBinary = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxReadPrivateKeyBinary(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxFreePrivateKey = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.CtxFreePrivateKey(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ShowOwnCertificate = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.ShowOwnCertificate(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetOwnCertificate = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        "number" == typeof e || "number" == typeof a ? r.GetOwnCertificate(e, a, c, i) : r.GetOwnCertificate(c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetOwnEUserParams = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetOwnEUserParams(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxGetOwnEUserParams = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.CtxGetOwnEUserParams(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ModifyOwnEUserParams = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.ModifyOwnEUserParams(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxModifyOwnEUserParams = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxModifyOwnEUserParams(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.EnumOwnCertificates = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.EnumOwnCertificates(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetPrivateKeyOwnerInfo = function() {
                                var e = this.m_library;
                                return new c((function(c, a) {
                                        e.GetPrivateKeyOwnerInfo(c, a)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxEnumOwnCertificates = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.CtxEnumOwnCertificates(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxGetOwnCertificate = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxGetOwnCertificate(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetKeyInfo = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.GetKeyInfo(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetKeyInfoBinary = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.GetKeyInfoBinary(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetKeyInfoFile = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.GetKeyInfoFile(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetCertificatesByKeyInfo = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.GetCertificatesByKeyInfo(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.EnumJKSPrivateKeys = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.EnumJKSPrivateKeys(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetJKSPrivateKey = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.GetJKSPrivateKey(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CreatePrivateKeyInfo = function() {
                                return this.m_library.CreatePrivateKeyInfo()
                            }
                            ,
                            e.prototype.CreateEndUserInfo = function() {
                                return this.m_library.CreateEndUserInfo()
                            }
                            ,
                            e.prototype.GeneratePrivateKeyEx = function(e, a, r, i, t, n, b, f, d, u, o, l, s, h, g, k, m) {
                                var j = this.m_library;
                                return new c((function(c, p) {
                                        j.GeneratePrivateKeyEx(e, a, r, i, t, n, b, f, d, u, o, l, s, h, g, k, m, c, p)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ChangePrivateKeyPassword = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        null != e ? r.ChangePrivateKeyPassword(e.GetTypeIndex(), e.GetDevIndex(), e.GetPassword(), a, c, i) : r.ChangePrivateKeyPassword(c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.ChangeOwnCertificatesStatus = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.ChangeOwnCertificatesStatus(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxChangeOwnCertificatesStatus = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxChangeOwnCertificatesStatus(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.MakeNewCertificate = function(e, a, r, i, t, n, b, f, d, u, o, l, s) {
                                var h = this.m_library;
                                return new c((function(c, g) {
                                        h.MakeNewCertificate(e, a, r, i, t, n, b, f, d, u, o, l, s, c, g)
                                    }
                                ))
                            }
                            ,
                            e.prototype.MakeNewOwnCertificate = function(e, a, r, i, t, n, b, f) {
                                var d = this.m_library;
                                return new c((function(c, u) {
                                        d.MakeNewOwnCertificate(e, a, r, i, t, n, b, f, c, u)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxMakeNewOwnCertificate = function(e, a, r, i, t, n, b, f, d) {
                                var u = this.m_library;
                                return new c((function(c, o) {
                                        u.CtxMakeNewOwnCertificate(e, a, r, i, t, n, b, f, d, c, o)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxMakeDeviceCertificate = function(e, a, r, i, t, n, b, f) {
                                var d = this.m_library;
                                return new c((function(c, u) {
                                        d.CtxMakeDeviceCertificate(e, a, r, i, t, n, b, f, c, u)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxHash = function(e, a, r, i) {
                                var t = this.m_library;
                                return new c((function(c, n) {
                                        t.CtxHash(e, a, r, i, c, n)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxHashBegin = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxHashBegin(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxHashContinue = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.CtxHashContinue(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxHashEnd = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.CtxHashEnd(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxHashFree = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.CtxHashFree(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxGetSignerInfo = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.CtxGetSignerInfo(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SignHash = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SignHash(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.Sign = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.Sign(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SignInternal = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.SignInternal(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SignHashRSA = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.SignHashRSA(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.SignRSA = function(e, a, r) {
                                var i = this.m_library;
                                return new c((function(c, t) {
                                        i.SignRSA(e, a, r, c, t)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxSignHash = function(e, a, r, i) {
                                var t = this.m_library;
                                return new c((function(c, n) {
                                        t.CtxSignHash(e, a, r, i, c, n)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxSign = function(e, a, r, i, t) {
                                var n = this.m_library;
                                return new c((function(c, b) {
                                        n.CtxSign(e, a, r, i, t, c, b)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxSignFile = function(e, a, r, i, t, n) {
                                var b = this.m_library;
                                return new c((function(c, f) {
                                        b.CtxSignFile(e, a, r, i, t, n, c, f)
                                    }
                                ))
                            }
                            ,
                            e.prototype.AppendSignHash = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.AppendSignHash(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.AppendSign = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.AppendSign(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.AppendSignInternal = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.AppendSignInternal(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxAppendSignHash = function(e, a, r, i, t) {
                                var n = this.m_library;
                                return new c((function(c, b) {
                                        n.CtxAppendSignHash(e, a, r, i, t, c, b)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxAppendSign = function(e, a, r, i, t) {
                                var n = this.m_library;
                                return new c((function(c, b) {
                                        n.CtxAppendSign(e, a, r, i, t, c, b)
                                    }
                                ))
                            }
                            ,
                            e.prototype.CtxAppendSignFile = function(e, a, r, i, t, n) {
                                var b = this.m_library;
                                return new c((function(c, f) {
                                        b.CtxAppendSignFile(e, a, r, i, t, n, c, f)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetCertificateFromSignedData = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.GetCertificateFromSignedData(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetSignsCount = function(e) {
                                var a = this.m_library;
                                return new c((function(c, r) {
                                        a.GetSignsCount(e, c, r)
                                    }
                                ))
                            }
                            ,
                            e.prototype.GetSignTimeInfo = function(e, a) {
                                var r = this.m_library;
                                return new c((function(c, i) {
                                        r.GetSignTimeInfo(e, a, c, i)
                                    }
                                ))
                            }
                            ,
                            e.prototype.VerifyHashOnTimeEx = function(e, a, r, i, t, n) {
                                var b = this.m_library;
                                return new c((function(c, f) {
                                        b.VerifyHashOnTimeEx(e, a, r, i, t, n, c, f)
                                    }
                                ))
                            }
                            ,
                            e.prototype.VerifyDataOnTimeEx = function(e, a, r, i, t, n) {
                                var b = this.m_library;
                                return new c((function(c, f) {
                                        b.VerifyDataOnTimeEx(e, a, r, i, t, n, c, f)
                                    }
                                ))
                            }
                            ,
                            e.prototype.VerifyDataInternalOnTimeEx = function(e, a, r, i, t) {
                                var n = this.m_library;
                                return new c((function(c, b) {
                                        n.VerifyDataInternalOnTimeEx(e, a, r, i, t, c, b)
                                    }
                                ))
                            }
                            ,
                            e
                    }();
                    e.a = i
                }
            ).call(this, a(16).Promise)
        }
        , function(c, e) {
            var a, r, i = c.exports = {};
            function t() {
                throw new Error("setTimeout has not been defined")
            }
            function n() {
                throw new Error("clearTimeout has not been defined")
            }
            function b(c) {
                if (a === setTimeout)
                    return setTimeout(c, 0);
                if ((a === t || !a) && setTimeout)
                    return a = setTimeout,
                        setTimeout(c, 0);
                try {
                    return a(c, 0)
                } catch (e) {
                    try {
                        return a.call(null, c, 0)
                    } catch (e) {
                        return a.call(this, c, 0)
                    }
                }
            }
            !function() {
                try {
                    a = "function" == typeof setTimeout ? setTimeout : t
                } catch (c) {
                    a = t
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : n
                } catch (c) {
                    r = n
                }
            }();
            var f, d = [], u = !1, o = -1;
            function l() {
                u && f && (u = !1,
                    f.length ? d = f.concat(d) : o = -1,
                d.length && s())
            }
            function s() {
                if (!u) {
                    var c = b(l);
                    u = !0;
                    for (var e = d.length; e; ) {
                        for (f = d,
                                 d = []; ++o < e; )
                            f && f[o].run();
                        o = -1,
                            e = d.length
                    }
                    f = null,
                        u = !1,
                        function(c) {
                            if (r === clearTimeout)
                                return clearTimeout(c);
                            if ((r === n || !r) && clearTimeout)
                                return r = clearTimeout,
                                    clearTimeout(c);
                            try {
                                r(c)
                            } catch (e) {
                                try {
                                    return r.call(null, c)
                                } catch (e) {
                                    return r.call(this, c)
                                }
                            }
                        }(c)
                }
            }
            function h(c, e) {
                this.fun = c,
                    this.array = e
            }
            function g() {}
            i.nextTick = function(c) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var a = 1; a < arguments.length; a++)
                        e[a - 1] = arguments[a];
                d.push(new h(c,e)),
                1 !== d.length || u || b(s)
            }
                ,
                h.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                i.title = "browser",
                i.browser = !0,
                i.env = {},
                i.argv = [],
                i.version = "",
                i.versions = {},
                i.on = g,
                i.addListener = g,
                i.once = g,
                i.off = g,
                i.removeListener = g,
                i.removeAllListeners = g,
                i.emit = g,
                i.prependListener = g,
                i.prependOnceListener = g,
                i.listeners = function(c) {
                    return []
                }
                ,
                i.binding = function(c) {
                    throw new Error("process.binding is not supported")
                }
                ,
                i.cwd = function() {
                    return "/"
                }
                ,
                i.chdir = function(c) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                i.umask = function() {
                    return 0
                }
        }
        , function(c, e) {
            var a;
            a = function() {
                return this
            }();
            try {
                a = a || new Function("return this")()
            } catch (c) {
                "object" == typeof window && (a = window)
            }
            c.exports = a
        }
        , function(c, e) {}
    ])
}
    , function(c, e, a) {
        c.exports = a(2)
    }
    , function(c, e, a) {
        "use strict";
        a.r(e);
        var r = a(0)
            , i = function() {
            function c() {}
            return c.PK_READ_FORM_TITLE = "pk_read_form_title",
                c.PK_READ_FORM_SUB_TITLE = "pk_read_form_sub_title",
                c.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE = "pk_make_new_certificates_form_title",
                c.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE = "pk_make_new_certificates_old_key_form_sub_title",
                c.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE = "pk_make_new_certificates_new_key_form_sub_title",
                c.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE = "pk_make_new_certificates_new_key_file_form_sub_title",
                c.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE = "pk_make_new_certificates_new_key_km_form_sub_title",
                c.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE = "pk_make_new_certificates_result_form_sub_title",
                c.PK_SET_PROXY_FORM_TITLE = "pk_set_proxy_form_title",
                c.PK_SET_PROXY_FORM_SUB_TITLE = "pk_set_proxy_form_sub_title",
                c.PK_INFO_FORM_SUB_TITLE = "pkey_info_form_sub_title",
                c.SIGN_FILE_FORM_TITLE = "sign_file_form_title",
                c.SIGN_FILE_FORM_SUB_TITLE = "sign_file_form_sub_title",
                c.SIGN_FILE_RESULT_FORM_SUB_TITLE = "sign_file_result_form_sub_title",
                c.VIEW_PKEY_CERTIFICATES_FORM_TITLE = "view_pkey_certificates_form_title",
                c.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE = "view_pkey_certificates_result_form_sub_title",
                c.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE = "make_technical_certificates_form_title",
                c.MAKE_TECHNICAL_CERTIFICATES_PK_READ_FORM_SUB_TITLE = "make_technical_certificates_pk_read_form_sub_title",
                c.MAKE_TECHNICAL_CERTIFICATES_FORM_SUB_TITLE = "make_technical_certificates_form_sub_title",
                c.MAKE_TECHNICAL_CERTIFICATES_RESULT_FORM_SUB_TITLE = "make_technical_certificates_result_form_sub_title",
                c.PROCESS_STATUS_LOAD_LIBRARY = "process_status_load_library",
                c.PROCESS_STATUS_INSTALL_LIBRARY = "process_status_install_library",
                c.PROCESS_STATUS_SAVE_PROXY_SETTINGS = "process_status_save_proxy_settings",
                c.PROCESS_STATUS_READ_PRIVATE_KEY = "process_status_read_private_key",
                c.PROCESS_STATUS_MAKE_NEW_CERTIFICATE = "process_status_make_new_certificate",
                c.PROCESS_STATUS_SIGN_FILE = "process_status_sign_file",
                c.PROCESS_STATUS_SIGN_DATA = "process_status_sign_data",
                c.PROCESS_STATUS_MAKE_TECHNICAL_CERTS = "process_status_make_technical_certs",
                c.TEXT_ERROR_DESCRIPTION = "text_error_description",
                c.TEXT_LIBRARY_NEED_INSTALL = "text_library_need_install",
                c.TEXT_LIBRARY_NEED_UPDATE = "text_library_need_update",
                c.TEXT_LIBRARY_INSTALL = "text_library_install",
                c.TEXT_LIBRARY_UPDATE = "text_library_update",
                c.TEXT_LIBRARY_WEB_EXTENSION_INSTALL = "text_library_web_extension_install",
                c.TEXT_LIBRARY_USER_MANUAL = "text_library_user_manual",
                c.TEXT_DOWLOAD_NEW_CERTIFICATES = "text_dowload_new_certificates",
                c.TEXT_SAVE_NEW_PRIVATE_KEY = "text_save_new_private_key",
                c.TEXT_SAVE_SIGN_FILE = "text_save_sign_file",
                c.TEXT_CA_AUTO_DETECT = "text_ca_auto_detect",
                c.TEXT_SET_PROXY_SETTINGS = "text_set_proxy_settings",
                c.TEXT_SIGN_ALGO_DSTU4145 = "text_sign_algo_dstu4145",
                c.TEXT_SIGN_ALGO_RSA = "text_sign_algo_rsa",
                c.TEXT_SIGN_ALGO_ECDSA = "text_sign_algo_ecdsa",
                c.TEXT_SIGN_RESULT_TITLE = "text_sign_result_title",
                c.TEXT_SIGN_RESULT_SUCCESS = "text_sign_result_success",
                c.TEXT_SIGN_FILE_NAME_TITLE = "text_sign_file_name_title",
                c.TEXT_SIGNER_TITLE = "text_signer_title",
                c.TEXT_SUBJECT_CN_TITLE = "text_subject_cn_title",
                c.TEXT_ORGANIZATION_TITLE = "text_organization_title",
                c.TEXT_TITLE_TITLE = "text_title_title",
                c.TEXT_DRFO_CODE_TITLE = "text_drfo_code_title",
                c.TEXT_EDRPOU_CODE_TITLE = "text_edrpou_code_title",
                c.TEXT_DIGITAL_STAMP_TITLE = "text_digital_stamp_title",
                c.TEXT_KEY_TYPE = "text_key_type",
                c.TEXT_KEY_TYPE_DSTU4145 = "text_key_type_dstu4145",
                c.TEXT_KEY_TYPE_RSA = "text_key_type_rsa",
                c.TEXT_KEY_TYPE_ECDSA = "text_key_type_ecdsa",
                c.TEXT_KEY_USAGE_TITLE = "text_key_usage_title",
                c.TEXT_KEY_USAGE_SIGN = "text_key_usage_sign",
                c.TEXT_KEY_USAGE_ENVELOP = "text_key_usage_envelop",
                c.TEXT_ISSUER_CN_TITLE = "text_issuer_cn_title",
                c.TEXT_SN_TITLE = "text_sn_title",
                c.TEXT_CERTIFICATE_VALID_TITLE = "text_certificate_valid_title",
                c.TEXT_CERTIFICATE_TITLE = "text_certificate_title",
                c.TEXT_CERTIFICATES_INFO_TITLE = "text_certificates_info_title",
                c.TEXT_SIGN_TIME_TITLE = "text_sign_time_title",
                c.TEXT_SIGN_TIME_SIGN_TIMESTAMP_TITLE = "text_sign_time_sign_timestamp_title",
                c.TEXT_SIGN_TIME_DATA_TIMESTAMP_TITLE = "text_sign_time_data_timestamp_title",
                c.TEXT_SIGN_TIME_TIME_TITLE = "text_sign_time_time_title",
                c.TEXT_NO_VALUE = "text_no_value",
                c.TEXT_PRIVATE_KEY_MEDIA_INFO = "text_private_key_media_info",
                c.TEXT_DOWLOAD_CERTIFICATES = "text_dowload_certificates",
                c.TEXT_FROM = "text_from",
                c.TEXT_TO = "text_to",
                c.TEXT_NAME = "text_name",
                c.TEXT_KEY_MEDIA_TYPE_TITLE = "text_key_media_type_title",
                c.TEXT_KEY_MEDIA_TYPE_QSCD = "text_key_media_type_qscd",
                c.TEXT_KEY_MEDIA_TYPE_NOT_QSCD = "text_key_media_type_not_qscd",
                c.TEXT_KEY_MEDIA_SN_TITLE = "text_key_media_sn",
                c.TEXT_NOT_DEFINED = "text_not_defined",
                c.TEXT_KSP_OPERATION_CONFIRMATION = "text_ksp_operation_confirmation",
                c.LABEL_PK = "label_pk",
                c.LABEL_PK_SUPPORTED_FILES = "label_pk_supported_files",
                c.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES = "label_pk_make_new_certificates_supported_files",
                c.LABEL_PK_TYPE_FILE = "label_pk_type_file",
                c.LABEL_PK_TYPE_KM = "label_pk_type_km",
                c.LABEL_PK_TYPE_SIM = "label_pk_type_sim",
                c.LABEL_MAKE_TECHNICAL_CERT_DEVICE_NAME_TITLE = "label_make_technical_cert_device_name_title",
                c.BUTTON_READ = "button_read",
                c.BUTTON_CLEAR = "button_clear",
                c.BUTTON_MAKE = "button_make",
                c.BUTTON_CHOOSE_ANOTHER = "button_choose_another",
                c.BUTTON_BACK = "button_back",
                c.BUTTON_SAVE = "button_save",
                c.BUTTON_DOWNLOAD = "button_dowload",
                c.STATUS_PRIVATE_KEY_READED = "status_private_key_readed",
                c.STATUS_NEW_CERTIFICATE_MADE = "status_new_certificate_made",
                c.STATUS_FILE_SIGNED = "status_file_signed",
                c.STATUS_RESULT_SAVED_TO_DOWNLOADS = "status_result_saved_to_downloads",
                c.ERROR_PROXY_ADDRESS_NOT_SET = "error_proxy_address_not_set",
                c.ERROR_PROXY_PORT_NOT_SET = "error_proxy_port_not_set",
                c.ERROR_PROXY_USER_NOT_SET = "error_proxy_user_not_set",
                c.ERROR_NEW_PK_FILE_NAME_NOT_SET = "error_new_pk_file_name_not_set",
                c.ERROR_MSISDN_NOT_SET_OR_INVALID = "error_msisdn_not_set_or_invalid",
                c.ERROR_USER_ID_NOT_SET_OR_INVALID = "error_user_id_not_set_or_invalid",
                c.ERROR_PASSWORD_NOT_SET = "error_password_not_set",
                c.ERROR_USER_NOT_SET = "error_user_not_set",
                c.ERROR_NEW_PASSWORD_NOT_SET = "error_new_password_not_set",
                c.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET = "error_confirm_new_password_not_set",
                c.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL = "error_new_password_and_confirm_not_equal",
                c.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS = "error_new_password_not_match_requirements",
                c.ERROR_CERTIFICATES_NOT_SELECTED = "error_certificates_not_selected",
                c.ERROR_GET_JKS_PRIVATE_KEY_INFO = "error_get_jks_private_key_info",
                c.ERROR_KM_UPDATE_LIST = "error_km_update_list",
                c.ERROR_LIBRARY_NOT_SUPPORTED = "error_library_not_supported",
                c.ERROR_LIBRARY_NOT_LOADED = "error_library_not_loaded",
                c.ERROR_LIBRARY_LOAD = "error_library_load",
                c.ERROR_LIBRARY_INITIALIZE = "error_library_initialize",
                c.ERROR_GET_PROXY_SETTINGS = "error_get_proxy_settings",
                c.ERROR_SET_PROXY_SETTINGS = "error_set_proxy_settings",
                c.ERROR_PRIVATE_KEY_NOT_READED = "error_private_key_not_readed",
                c.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO = "error_private_key_invalid_type_or_algo",
                c.ERROR_READ_PRIVATE_KEY = "error_read_private_key",
                c.ERROR_READ_PRIVATE_KEY_INVALID_CA = "error_read_private_key_invalid_ca",
                c.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT = "error_read_private_key_ca_auto_detect",
                c.ERROR_READ_PRIVATE_NEED_CERTIFICATE = "error_read_private_need_certificate",
                c.ERROR_MAKE_NEW_CERTIFICATE = "error_make_new_certificate",
                c.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA = "error_make_new_certificate_invalid_ca",
                c.ERROR_FILE_TO_SIGN_NOT_SET = "error_file_to_sign_not_set",
                c.ERROR_FILE_TO_SIGN_RESULT_NOT_SET = "error_file_to_sign_result_not_set",
                c.ERROR_FILE_TO_BIG = "error_file_to_big",
                c.ERROR_SIGN_FILE = "error_sign_file",
                c.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_NOT_SET = "error_technical_eu_certs_device_name_not_set",
                c.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_INVALID = "error_technical_eu_certs_device_name_invalid",
                c.ERROR_TECHNICAL_EU_CERTS_REQUEST_FILE_NOT_SET = "error_technical_eu_certs_request_file_not_set",
                c.ERROR_TECHNICAL_EU_KEP_CERTS_REQUEST_FILE_NOT_SET = "error_technical_eu_kep_certs_request_file_not_set",
                c.ERROR_MAKE_TECHNICAL_CERTS = "error_make_technical_certs",
                c.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED = "error_use_advanced_certs_unsupported",
                c.CONFIRM_CONTINUE_WITHOUT_PKEY_READED = "confirm_continue_without_pkey_readed",
                c
        }()
            , t = function() {
            function c() {}
            return c.format = function(c) {
                for (var e = [], a = 1; a < arguments.length; a++)
                    e[a - 1] = arguments[a];
                var r = Array.apply(null, arguments);
                return r = r.slice(1),
                    c.replace(/{(\d+)}/g, (function(c, e) {
                            return void 0 !== r[e] ? r[e] : c
                        }
                    ))
            }
                ,
                c
        }()
            , n = {};
        n[i.PK_READ_FORM_TITLE] = "Зчитування особистого ключа",
            n[i.PK_READ_FORM_SUB_TITLE] = 'Оберіть тип носія особистого ключа, особистий ключ, введіть пароль захисту ключа та натисніть "Зчитати"',
            n[i.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE] = "Формування нового сертифіката",
            n[i.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE] = 'Оберіть тип носія діючого особистого ключа, діючий особистий ключ, введіть пароль захисту ключа та натисніть "Зчитати"',
            n[i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE] = 'Оберіть тип носія для нового особистого ключа, новий особистий ключ, введіть пароль захисту ключа та натисніть "Сформувати"',
            n[i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE] = 'Введіть новий пароль захисту ключа, його підтвердження та натисніть "Сформувати"',
            n[i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE] = 'Введіть новий пароль захисту ключа, його підтвердження та натисніть "Сформувати"',
            n[i.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE] = "Завантажити нові сертифікати особистого ключа можна за посиланнями",
            n[i.PK_SET_PROXY_FORM_TITLE] = "Встановлення налаштувань proxy-сервера",
            n[i.PK_SET_PROXY_FORM_SUB_TITLE] = 'Встановіть налаштування proxy-сервера та натисніть "Зберегти"',
            n[i.PK_INFO_FORM_SUB_TITLE] = 'Перевірте інформацію про зчитаний особистий ключ та натисніть "Далі"',
            n[i.SIGN_FILE_FORM_TITLE] = "Створення електронного підпису",
            n[i.SIGN_FILE_FORM_SUB_TITLE] = 'Оберіть файл для підпису та натисніть "Підписати"',
            n[i.SIGN_FILE_RESULT_FORM_SUB_TITLE] = 'Для збереження підпису до папки "Завантаження" натисніть "Зберегти"',
            n[i.VIEW_PKEY_CERTIFICATES_FORM_TITLE] = "Перегляд інформації про сертифікати особистого ключа",
            n[i.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE] = 'Для збереження сертифікатів особистого ключа до папки "Завантаження" натисніть "Зберегти"',
            n[i.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE] = "Формування технологічних сертифікатів",
            n[i.MAKE_TECHNICAL_CERTIFICATES_PK_READ_FORM_SUB_TITLE] = 'Оберіть тип носія особистого ключа, особистий ключ, введіть пароль захисту ключа відповідальної особи та натисніть "Зчитати"',
            n[i.MAKE_TECHNICAL_CERTIFICATES_FORM_SUB_TITLE] = 'Введіть назву технічного пристрою, оберіть файл із запитом ЕЦП (EU.p10) та протоколу розподілу ключів (EU-KEP.p10), та натисніть "Сформувати"',
            n[i.MAKE_TECHNICAL_CERTIFICATES_RESULT_FORM_SUB_TITLE] = "Завантажити технологічні сертифікати можна за посиланнями",
            n[i.PROCESS_STATUS_LOAD_LIBRARY] = "Завантаження криптографічної бібліотеки",
            n[i.PROCESS_STATUS_INSTALL_LIBRARY] = "Ініціалізація криптографічної бібліотеки",
            n[i.PROCESS_STATUS_SAVE_PROXY_SETTINGS] = "Збереження налаштувань proxy-серверу",
            n[i.PROCESS_STATUS_READ_PRIVATE_KEY] = "Зчитування особистого ключа",
            n[i.PROCESS_STATUS_MAKE_NEW_CERTIFICATE] = "Формування нових сертифікатів особистого ключа",
            n[i.PROCESS_STATUS_SIGN_FILE] = "Накладання підпису на файл",
            n[i.PROCESS_STATUS_SIGN_DATA] = "Накладання підпису на дані",
            n[i.PROCESS_STATUS_MAKE_TECHNICAL_CERTS] = "Формування технологічного сертифікату пристрою",
            n[i.TEXT_ERROR_DESCRIPTION] = "Опис помилки",
            n[i.TEXT_LIBRARY_NEED_INSTALL] = 'Для роботи з криптографічною бібліотекою необхідно встановити додаткове програмне забезпечення (web-бібліотеку підпису) після чого натиснути "Оновити сторінку"',
            n[i.TEXT_LIBRARY_NEED_UPDATE] = 'Для роботи з криптографічною бібліотекою необхідно оновити додаткове програмне забезпечення (web-бібліотеку підпису) після чого натиснути "Оновити сторінку"',
            n[i.TEXT_LIBRARY_INSTALL] = "Інсталяційний пакет web-бібліотеки підпису",
            n[i.TEXT_LIBRARY_UPDATE] = "Оновлення web-бібліотеки підпису",
            n[i.TEXT_LIBRARY_WEB_EXTENSION_INSTALL] = "Інсталяційний пакет бібліотеки підпису (web-розширення)",
            n[i.TEXT_LIBRARY_USER_MANUAL] = "Настанова користувача",
            n[i.TEXT_DOWLOAD_NEW_CERTIFICATES] = "Завантажити нові сертифікати",
            n[i.TEXT_SAVE_NEW_PRIVATE_KEY] = "Зберегти новий особистий ключ",
            n[i.TEXT_SAVE_SIGN_FILE] = "Зберегти підписаний файл",
            n[i.TEXT_CA_AUTO_DETECT] = "Визначити автоматично",
            n[i.TEXT_SET_PROXY_SETTINGS] = "Перевірте та встановіть налаштування proxy-сервера",
            n[i.TEXT_SIGN_ALGO_DSTU4145] = "ДСТУ 4145",
            n[i.TEXT_SIGN_ALGO_RSA] = "RSA",
            n[i.TEXT_SIGN_ALGO_ECDSA] = "ECDSA",
            n[i.TEXT_SIGN_RESULT_TITLE] = "Результат накладання підпису",
            n[i.TEXT_SIGN_RESULT_SUCCESS] = "Підпис накладено успішно. Цілісність даних підтверджено",
            n[i.TEXT_SIGN_FILE_NAME_TITLE] = "Назва файлу, що підписувався",
            n[i.TEXT_SIGNER_TITLE] = "Підписувач",
            n[i.TEXT_SUBJECT_CN_TITLE] = "Власник",
            n[i.TEXT_ORGANIZATION_TITLE] = "Організація",
            n[i.TEXT_TITLE_TITLE] = "Посада",
            n[i.TEXT_DRFO_CODE_TITLE] = "РНОКПП",
            n[i.TEXT_EDRPOU_CODE_TITLE] = "Код ЄДРПОУ",
            n[i.TEXT_DIGITAL_STAMP_TITLE] = "Є цифровою печаткою",
            n[i.TEXT_KEY_TYPE] = "Тип ключа",
            n[i.TEXT_KEY_TYPE_DSTU4145] = "ДСТУ 4145",
            n[i.TEXT_KEY_TYPE_RSA] = "RSA",
            n[i.TEXT_KEY_TYPE_ECDSA] = "ECDSA",
            n[i.TEXT_KEY_USAGE_TITLE] = "Використання ключів",
            n[i.TEXT_KEY_USAGE_SIGN] = "ЕЦП",
            n[i.TEXT_KEY_USAGE_ENVELOP] = "Протоколи розподілу ключів",
            n[i.TEXT_ISSUER_CN_TITLE] = "Сертифікат виданий",
            n[i.TEXT_SN_TITLE] = "Серійний номер",
            n[i.TEXT_CERTIFICATE_VALID_TITLE] = "Cертифікат чинний",
            n[i.TEXT_CERTIFICATE_TITLE] = "Cертифікат",
            n[i.TEXT_CERTIFICATES_INFO_TITLE] = "Cертифікати",
            n[i.TEXT_SIGN_TIME_TITLE] = "Час підпису",
            n[i.TEXT_SIGN_TIME_SIGN_TIMESTAMP_TITLE] = "Час підпису (підтверджено кваліфікованою позначкою часу для підпису від Надавача)",
            n[i.TEXT_SIGN_TIME_DATA_TIMESTAMP_TITLE] = "Час підпису (кваліфікованою позначкою часу для даних від Надавача)",
            n[i.TEXT_SIGN_TIME_TIME_TITLE] = "Час підпису (не підтверджено кваліфікованою позначкою часу для підпису від Надавача)",
            n[i.TEXT_NO_VALUE] = "відсутній",
            n[i.TEXT_PRIVATE_KEY_MEDIA_INFO] = "Носій ос. ключа",
            n[i.TEXT_DOWLOAD_CERTIFICATES] = "Завантажити сертифікати",
            n[i.TEXT_FROM] = "з",
            n[i.TEXT_TO] = "до",
            n[i.TEXT_NAME] = "Ім'я",
            n[i.TEXT_KEY_MEDIA_TYPE_TITLE] = "Тип носія особистого ключа",
            n[i.TEXT_KEY_MEDIA_TYPE_QSCD] = "Захищений",
            n[i.TEXT_KEY_MEDIA_TYPE_NOT_QSCD] = "Незахищений",
            n[i.TEXT_KEY_MEDIA_SN_TITLE] = "Серійний номер носія особистого ключа",
            n[i.TEXT_NOT_DEFINED] = "Не визначено",
            n[i.TEXT_KSP_OPERATION_CONFIRMATION] = "Для підтвердження операції відскануйте QR-код в мобільному додатку",
            n[i.LABEL_PK] = "Особистий ключ",
            n[i.LABEL_PK_SUPPORTED_FILES] = "Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks",
            n[i.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES] = "Key-6.dat або *.pfx",
            n[i.LABEL_PK_TYPE_FILE] = "Файловий носій (flash-диск, CD-диск, SD-картка тощо)",
            n[i.LABEL_PK_TYPE_KM] = "Захищений носій (е.ключ Алмаз-1К, Кристал-1, Гряда-301, ID-картка тощо)",
            n[i.LABEL_PK_TYPE_SIM] = "SIM-картка",
            n[i.LABEL_MAKE_TECHNICAL_CERT_DEVICE_NAME_TITLE] = "Назва технічного пристрою:",
            n[i.BUTTON_READ] = "Зчитати",
            n[i.BUTTON_CLEAR] = "Cтерти",
            n[i.BUTTON_MAKE] = "Сформувати",
            n[i.BUTTON_CHOOSE_ANOTHER] = "Обрати інший",
            n[i.BUTTON_BACK] = "Назад",
            n[i.BUTTON_SAVE] = "Зберегти",
            n[i.BUTTON_DOWNLOAD] = "Завантажити",
            n[i.STATUS_PRIVATE_KEY_READED] = "Особистий ключ зчитано",
            n[i.STATUS_NEW_CERTIFICATE_MADE] = "Особистий ключ створено",
            n[i.STATUS_FILE_SIGNED] = "Підпис накладено успішно",
            n[i.STATUS_RESULT_SAVED_TO_DOWNLOADS] = 'Результат збережено до папки "Завантаження" з ім\'ям {0}',
            n[i.ERROR_PROXY_ADDRESS_NOT_SET] = "Не вказана адреса proxy-сервера",
            n[i.ERROR_PROXY_PORT_NOT_SET] = "Не вказаний порт proxy-сервера",
        n[i.ERROR_PROXY_USER_NOT_SET] = "Не вказане ім'я користувача proxy-сервера",
        n[i.ERROR_NEW_PK_FILE_NAME_NOT_SET] = "Не вказане ім'я файлу нового ключа",
        n[i.ERROR_MSISDN_NOT_SET_OR_INVALID] = "Не вказано номер мобільного телефону або він має невірний формат",
        n[i.ERROR_USER_ID_NOT_SET_OR_INVALID] = "Не вказано ідентифікатор користувача або він має невірний формат",
        n[i.ERROR_PASSWORD_NOT_SET] = "Не вказано пароль до особистого ключа",
        n[i.ERROR_USER_NOT_SET] = "Не вказано користувача носія ключової інформації",
        n[i.ERROR_NEW_PASSWORD_NOT_SET] = "Не вказано новий пароль до особистого ключа",
        n[i.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET] = "Не вказано підтвердження нового паролю до особистого ключа",
        n[i.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL] = "Новий пароль та його підтвердження не співпадають",
        n[i.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS] = "Новий пароль не відповідає вимогам",
        n[i.ERROR_CERTIFICATES_NOT_SELECTED] = "Не обрано сертифікати особистого ключа",
        n[i.ERROR_GET_JKS_PRIVATE_KEY_INFO] = "Виникла помилка при отриманні інформації про особистий ключ",
        n[i.ERROR_KM_UPDATE_LIST] = "Виникла помилка при оновленні списку носіїв ключової інформації",
        n[i.ERROR_LIBRARY_NOT_SUPPORTED] = "Криптографічна бібліотека не підтримується",
        n[i.ERROR_LIBRARY_NOT_LOADED] = "Криптографічна бібліотека не завантажена",
        n[i.ERROR_LIBRARY_LOAD] = "Виникла помилка при завантаженні бібліотеки",
        n[i.ERROR_LIBRARY_INITIALIZE] = "Виникла помилка при ініціалізації криптографічної бібліотеки",
        n[i.ERROR_GET_PROXY_SETTINGS] = "Виникла помилка при отриманні налаштувань proxy-серверу",
        n[i.ERROR_SET_PROXY_SETTINGS] = "Виникла помилка при збереженні налаштувань proxy-серверу",
        n[i.ERROR_PRIVATE_KEY_NOT_READED] = "Особистий ключ не зчитано",
        n[i.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO] = "Зчитаний особистий ключ не підтримує {0}. Необхідно зчитати інший особистий ключ",
        n[i.ERROR_READ_PRIVATE_KEY] = "Виникла помилка при зчитуванні особистого ключа",
        n[i.ERROR_READ_PRIVATE_KEY_INVALID_CA] = "Ваш сертифікат виданий іншим надавачем та не обслуговується в {0}. Необхідно обрати надавача Вашого сертифіката",
        n[i.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT] = "Надавач не підтримує автоматичний пошук сертифіката за ос. ключем. Необхідно обрати надавача самостійно",
        n[i.ERROR_READ_PRIVATE_NEED_CERTIFICATE] = "Надавач {0} не підтримує автоматичний пошук сертифіката за ос. ключем. Необхідно обрати сертифікат(и) ос. ключа",
        n[i.ERROR_MAKE_NEW_CERTIFICATE] = "Виникла помилка при формуванні нових сертифікатів особистого ключа",
        n[i.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA] = "Формування нового сертифіката можливе лише для користувачів {0}! Ваш сертифікат виданий іншим надавачем!",
        n[i.ERROR_FILE_TO_SIGN_NOT_SET] = "Не обрано файл для підпису",
        n[i.ERROR_FILE_TO_SIGN_RESULT_NOT_SET] = "Не вказане ім'я файлу з підписом",
        n[i.ERROR_FILE_TO_BIG] = 'Занадто великий розмір файлу. Оберіть файл меншого розміру або оберіть тип підпису "Дані та підпис окремими файлами (формат CAdES)"',
        n[i.ERROR_SIGN_FILE] = "Виникла помилка при підписі файла",
        n[i.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_NOT_SET] = "Не вказано назву технічного пристрою",
        n[i.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_INVALID] = "Назва технічного пристрою має невірний формат",
        n[i.ERROR_TECHNICAL_EU_CERTS_REQUEST_FILE_NOT_SET] = "Не обрано файл із запитом ЕЦП",
        n[i.ERROR_TECHNICAL_EU_KEP_CERTS_REQUEST_FILE_NOT_SET] = "Не обрано файл із запитом протоколу розподілу ключів",
        n[i.ERROR_MAKE_TECHNICAL_CERTS] = "Виникла помилка при формуванні технологічних сертифікатів пристрою",
        n[i.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED] = "Використання удосконаленого сертифіката відкритого ключа не дозволено. Зверніться до надавача Вашого сертифіката ({0}) для отримання квалфікованого сертифіката відкритого ключа",
        n[i.CONFIRM_CONTINUE_WITHOUT_PKEY_READED] = "Ви відмовилися надавати ідентифікаційні дані ос. ключа. Продовжити?";
        var b, f = n;
        !function(c) {
            c[c.UNKNOWN = -1] = "UNKNOWN",
                c[c.DEFAULT = 0] = "DEFAULT",
                c[c.UA = 1] = "UA",
                c[c.RU = 2] = "RU",
                c[c.EN = 3] = "EN"
        }(b || (b = {}));
        var d = function() {
            function c() {
                c.s_instance = this,
                    this.m_Locale = b.UA,
                    this.m_Translations = new Array,
                    this.m_Translations[b.UA] = {},
                    this.m_Translations[b.EN] = {},
                    this.m_Translations[b.RU] = {}
            }
            return c.getInstance = function() {
                return c.s_instance
            }
                ,
                c.getLocaleTypeById = function(c) {
                    switch (c = c.toLowerCase()) {
                        case "uk":
                        case "ua":
                            return b.UA;
                        case "ru":
                            return b.RU;
                        case "en":
                            return b.EN;
                        default:
                            return b.UNKNOWN
                    }
                }
                ,
                c.prototype.setLocale = function(c) {
                    c == b.UNKNOWN && (c = b.DEFAULT),
                        this.m_Locale = c
                }
                ,
                c.prototype.getLocale = function() {
                    return this.m_Locale
                }
                ,
                c.translate = function(e) {
                    try {
                        var a = c.getInstance()
                            , r = a.m_Translations[a.m_Locale];
                        return r.hasOwnProperty(e) ? r[e] : e
                    } catch (c) {
                        return e
                    }
                }
                ,
                c.prototype.addTranlation = function(c, e) {
                    var a = this.m_Translations[c];
                    for (var r in e)
                        a[r] = e[r]
                }
                ,
                c.s_instance = new c,
                c
        }()
            , u = d.translate
            , o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            , l = [12, 33, 34, 35, 36, 37, 38, 39, 40, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]
            , s = /^\+380\d{9}$/
            , h = ["криптомод. ІІТ Гряда-301"]
            , g = null;
        var k, m, j, p = function(c, e) {
            this.file = c,
                this.data = e
        }, v = function() {
            function c(c, e, a, r) {
                this.ksp = c,
                    this.kspName = e,
                    this.userId = a,
                    this.keyId = r
            }
            return c.prototype.GetKSPId = function() {
                return this.ksp == r.EndUserConstants.EndUserKSP.IIT || this.ksp == r.EndUserConstants.EndUserKSP.PB ? this.kspName : this.ksp
            }
                ,
                c
        }(), E = function() {
            this.keyMedia = null,
                this.file = null,
                this.alias = null,
                this.password = null,
                this.certificates = null,
                this.kspKey = null
        }, _ = function() {
            this.use = !1,
                this.name = "",
                this.sn = ""
        };
        !function(c) {
            c[c.ReadPrivateKey = 1] = "ReadPrivateKey",
                c[c.MakeNewCertificate = 2] = "MakeNewCertificate",
                c[c.SignFile = 3] = "SignFile",
                c[c.ViewPKeyCertificates = 4] = "ViewPKeyCertificates",
                c[c.MakeDeviceCertificate = 5] = "MakeDeviceCertificate"
        }(k || (k = {})),
            function(c) {
                c[c.Internal = 1] = "Internal",
                    c[c.External = 2] = "External",
                    c[c.ASiCS = 3] = "ASiCS"
            }(m || (m = {})),
            function(c) {
                c[c.File = 1] = "File",
                    c[c.Hardware = 2] = "Hardware",
                    c[c.Mobile = 3] = "Mobile",
                    c[c.KSP = 4] = "KSP"
            }(j || (j = {}));
        var w = function() {
            function c() {
                this.m_mainPageOrigin = this.GetURLParameter(window.location.href, "address", null),
                    this.m_debug = "true" == this.GetURLParameter(window.location.href, "debug", "false"),
                    this.m_formType = parseInt(this.GetURLParameter(window.location.href, "formType", k.ReadPrivateKey + "")),
                    this.m_ownCAOnly = "true" == this.GetURLParameter(window.location.href, "ownCAOnly", "false"),
                    this.m_showPKInfo = "true" == this.GetURLParameter(window.location.href, "showPKInfo", "true"),
                    this.m_keyMediaType = parseInt(this.GetStorageItem("KeyMediaType", j.File)),
                    this.m_libraries = new Array,
                    this.m_libraries[r.EndUserConstants.EU_LIBRARY_TYPE_JS] = new K(r.EndUserConstants.EU_LIBRARY_TYPE_JS),
                    this.m_libraries[r.EndUserConstants.EU_LIBRARY_TYPE_SW] = new K(r.EndUserConstants.EU_LIBRARY_TYPE_SW),
                    this.SetFormTitle(null),
                    this.SetFormSubTitle(null),
                    this.SetFormsLabels(),
                    this.SetFormsFileInputs(),
                    this.ConfigureKeyMediaTypes(),
                    this.m_isPKActionDone = !1,
                    this.m_KM = null,
                    this.m_updateKM = !1,
                    this.m_updatingKM = !1,
                    this.m_readedPKey = null,
                    this.m_KMs = new Array,
                    this.m_noNewKMOnMakeNewCertificate = !LIBRARY_SETTINGS.allowMakeNewCertOnNewKeyMedia,
                    this.m_noNewFileKMOnMakeNewCertificate = !LIBRARY_SETTINGS.allowMakeNewCertOnFileKeyMedia,
                    this.m_euParams = null,
                    this.m_listeners = []
            }
            return c.prototype.SetFormTitle = function(c) {
                var e = null;
                switch (c) {
                    case "#proxySettingsBlock":
                        e = u(i.PK_SET_PROXY_FORM_TITLE);
                        break;
                    case "#pkReadFileBlock":
                    case "#pkReadKMBlock":
                    case "#pkWriteFileBlock":
                    case "#pkWriteKMBlock":
                    case "#pkInfoBlock":
                    case "#installBlock":
                    case "#signBlock":
                    case "#makeTechnicalCertBlock":
                    default:
                        switch (this.m_formType) {
                            case k.MakeNewCertificate:
                                e = u(i.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE);
                                break;
                            case k.SignFile:
                                e = u(i.SIGN_FILE_FORM_TITLE);
                                break;
                            case k.ViewPKeyCertificates:
                                e = u(i.VIEW_PKEY_CERTIFICATES_FORM_TITLE);
                                break;
                            case k.MakeDeviceCertificate:
                                e = u(i.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE);
                                break;
                            case k.ReadPrivateKey:
                            default:
                                e = u(i.PK_READ_FORM_TITLE)
                        }
                }
                $("#titleLabel").text(e)
            }
                ,
                c.prototype.SetFormSubTitle = function(c) {
                    var e = null;
                    switch (c) {
                        case "#proxySettingsBlock":
                            e = u(i.PK_SET_PROXY_FORM_SUB_TITLE);
                            break;
                        case "#pkReadFileBlock":
                        case "#pkReadKMBlock":
                            switch (this.m_formType) {
                                case k.MakeNewCertificate:
                                    e = u(i.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE);
                                    break;
                                case k.MakeDeviceCertificate:
                                    e = u(i.MAKE_TECHNICAL_CERTIFICATES_PK_READ_FORM_SUB_TITLE);
                                    break;
                                case k.SignFile:
                                case k.ReadPrivateKey:
                                case k.ViewPKeyCertificates:
                                default:
                                    e = u(i.PK_READ_FORM_SUB_TITLE)
                            }
                            break;
                        case "#pkWriteFileBlock":
                        case "#pkWriteKMBlock":
                            switch (this.m_formType) {
                                case k.MakeNewCertificate:
                                    e = this.m_noNewKMOnMakeNewCertificate ? this.m_readedPKey.keyMedia ? u(i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE) : this.m_noNewFileKMOnMakeNewCertificate ? u(i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE) : u(i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE) : u(i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE)
                            }
                            break;
                        case "#pkInfoBlock":
                            switch (this.m_formType) {
                                case k.ViewPKeyCertificates:
                                    e = u(i.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                                    break;
                                default:
                                    e = u(i.PK_INFO_FORM_SUB_TITLE)
                            }
                            break;
                        case "#signBlock":
                            e = u(i.SIGN_FILE_FORM_SUB_TITLE);
                            break;
                        case "#makeTechnicalCertBlock":
                            e = u(i.MAKE_TECHNICAL_CERTIFICATES_FORM_SUB_TITLE);
                            break;
                        case "#resultBlock":
                            switch (this.m_formType) {
                                case k.SignFile:
                                    e = u(i.SIGN_FILE_RESULT_FORM_SUB_TITLE);
                                    break;
                                case k.MakeNewCertificate:
                                    e = u(i.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                                    break;
                                case k.ViewPKeyCertificates:
                                    e = u(i.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                                    break;
                                case k.MakeDeviceCertificate:
                                    e = u(i.MAKE_TECHNICAL_CERTIFICATES_RESULT_FORM_SUB_TITLE)
                            }
                    }
                    null != e && $("#subTitleLabel").text(e)
                }
                ,
                c.prototype.SetFormsLabels = function() {
                    var c = "";
                    switch (this.m_formType) {
                        case k.MakeNewCertificate:
                            c = u(i.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES);
                            break;
                        case k.SignFile:
                        case k.ReadPrivateKey:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                        default:
                            c = u(i.LABEL_PK_SUPPORTED_FILES)
                    }
                    $("#pkReadFileTitleLabel").text(u(i.LABEL_PK) + " (" + c + "):"),
                        $("#pkTypeFileTitle").text(u(i.LABEL_PK_TYPE_FILE)),
                        $("#pkTypeKMTitle").text(u(i.LABEL_PK_TYPE_KM)),
                        $("#pkTypeSIMTitle").text(u(i.LABEL_PK_TYPE_SIM)),
                        $("#makeTechnicalCertDeviceNameTitleLabel").text(u(i.LABEL_MAKE_TECHNICAL_CERT_DEVICE_NAME_TITLE))
                }
                ,
                c.prototype.SetFormsFileInputs = function() {
                    (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream && ($("#pkReadFileCertsInput").removeAttr("accept"),
                        $("#pkReadFileInput").removeAttr("accept"),
                        $("#pkReadKMCertsInput").removeAttr("accept"))
                }
                ,
                c.prototype.SetKeyMediaType = function(c) {
                    $("[name=pkTypesRadio]").val([c + ""]),
                        $("[name=pkTypesRadio]").change()
                }
                ,
                c.prototype.ConfigureKeyMediaTypes = function() {
                    var c = !1
                        , e = !1;
                    switch (this.m_formType) {
                        case k.MakeNewCertificate:
                        case k.MakeDeviceCertificate:
                            c = !1,
                                e = !1;
                            break;
                        case k.SignFile:
                        case k.ReadPrivateKey:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                        default:
                            c = null != LIBRARY_SETTINGS.mssServiceURL && "" != LIBRARY_SETTINGS.mssServiceURL,
                                e = null != LIBRARY_SETTINGS.KSPs
                    }
                    c ? $("#pkTypeSIMRadioButton").show() : $("#pkTypeSIMRadioButton").hide(),
                        e ? $("#pkTypeKSPRadioButton").show() : $("#pkTypeKSPRadioButton").hide(),
                    (!c && this.m_keyMediaType == j.Mobile || !e && this.m_keyMediaType == j.KSP) && (this.m_keyMediaType = j.File),
                    e && this.SetKSPs(LIBRARY_SETTINGS.KSPs),
                        this.SetKeyMediaType(this.m_keyMediaType)
                }
                ,
                c.prototype.SetStorageItem = function(c, e) {
                    try {
                        localStorage.setItem(c, e)
                    } catch (c) {}
                }
                ,
                c.prototype.GetStorageItem = function(c, e) {
                    try {
                        var a = localStorage.getItem(c);
                        a && "string" == typeof a || (a = e)
                    } catch (c) {
                        a = e
                    }
                    return a
                }
                ,
                c.prototype.MakeUserId = function() {
                    return "undefined" != typeof crypto ? ("" + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(c) {
                            var e = Number(c);
                            return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
                        }
                    )) : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                            var e = 16 * Math.random() | 0;
                            return ("x" == c ? e : 3 & e | 8).toString(16)
                        }
                    ))
                }
                ,
                c.prototype.GetCurrentLibrary = function() {
                    return this.m_libraries[this.m_keyMediaType == j.Hardware || this.m_formType == k.MakeNewCertificate && this.m_noNewFileKMOnMakeNewCertificate ? r.EndUserConstants.EndUserLibraryType.SW : r.EndUserConstants.EndUserLibraryType.JS]
                }
                ,
                c.prototype.GetKMSelect = function() {
                    switch (this.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            return $("#pkReadKMSelect");
                        case k.MakeNewCertificate:
                            return null == this.m_readedPKey ? $("#pkReadKMSelect") : $("#pkWriteKMSelect")
                    }
                }
                ,
                c.prototype.GetKMUserTextField = function() {
                    switch (this.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            return $("#pkReadKMUserTextField");
                        case k.MakeNewCertificate:
                            return null == this.m_readedPKey ? $("#pkReadKMUserTextField") : $("#pkWriteKMUserTextField")
                    }
                }
                ,
                c.prototype.GetKMPasswordTextField = function() {
                    switch (this.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            return $("#pkReadKMPasswordTextField");
                        case k.MakeNewCertificate:
                            return null == this.m_readedPKey ? $("#pkReadKMPasswordTextField") : $("#pkWriteKMPasswordTextField")
                    }
                }
                ,
                c.prototype.GetKMPasswordConfirmTextField = function() {
                    switch (this.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            return null;
                        case k.MakeNewCertificate:
                            return null == this.m_readedPKey ? null : $("#pkWriteKMPasswordConfirmTextField")
                    }
                }
                ,
                c.prototype.GetKMCertsTextField = function() {
                    switch (this.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            return $("#pkReadKMCertsTextField");
                        case k.MakeNewCertificate:
                            return null == this.m_readedPKey ? $("#pkReadKMCertsTextField") : null
                    }
                }
                ,
                c.prototype.GetKMCertsSelectButton = function() {
                    switch (this.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            return $("#pkReadKMCertsFileSelectButton");
                        case k.MakeNewCertificate:
                            return null == this.m_readedPKey ? $("#pkReadKMCertsFileSelectButton") : null
                    }
                }
                ,
                c.prototype.GetKMButton = function() {
                    switch (this.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            return $("#pkReadKMButton");
                        case k.MakeNewCertificate:
                            return null == this.m_readedPKey ? $("#pkReadKMButton") : $("#pkWriteKMButton")
                    }
                }
                ,
                c.prototype.MakeRowEl = function(c, e, a, r) {
                    if (void 0 === e && (e = null),
                    void 0 === a && (a = !0),
                    void 0 === r && (r = !0),
                    !e && a)
                        return "";
                    var i = $("<label><b>" + c + (e ? ": " : "") + "</b></label>");
                    return e && ("string" == typeof e && (e = "<label>" + e + "</label>"),
                        i.append(e)),
                    r && i.append("<br>"),
                        i
                }
                ,
                c.prototype.MakeRowEl1 = function(c, e, a) {
                    if (void 0 === e && (e = null),
                    void 0 === a && (a = !0),
                    !e && a)
                        return "";
                    var r = $('<div class="Block">');
                    return r.append("<h6>" + c + "</h6>"),
                    e && ("string" == typeof e && (e = "<label>" + e + "</label>"),
                        r.append(e)),
                        r
                }
                ,
                c.prototype.MakeInfoBlock = function(c, e, a) {
                    void 0 === a && (a = !0);
                    var r = $('<div class="Block">')
                        , i = $("<div><label>" + c + '<i class="Arrow" direction="' + (a ? "down" : "up") + '"></i></label></div>')
                        , t = $('<div class="Block InfoContentBlock"' + (a ? "style=display:none" : "") + ">");
                    return t.append(e),
                        r.append(i),
                        r.append(t),
                        i.on("click", (function() {
                                t.is(":visible") ? (t.slideUp(200),
                                    i.find("i").attr("direction", "down")) : (t.slideDown(200),
                                    i.find("i").attr("direction", "up"))
                            }
                        )),
                        r
                }
                ,
                c.prototype.MakeSaveFileEl = function(c, e, a, r) {
                    var i = this;
                    void 0 === r && (r = !1);
                    var t = $("<a " + (r ? 'style="text-decoration: underline;"' : "") + ">" + c + "</a>");
                    return t.attr("title", e),
                        $(t).on("click", (function(c) {
                                i.SaveFile(e, a)
                            }
                        )),
                        t
                }
                ,
                c.prototype.DateToLocalString = function(c) {
                    var e = ("0" + c.getDate()).slice(-2) + "." + ("0" + (c.getMonth() + 1)).slice(-2) + "." + c.getFullYear();
                    return e += " " + ("0" + c.getHours()).slice(-2) + ":" + ("0" + c.getMinutes()).slice(-2) + ":" + ("0" + c.getSeconds()).slice(-2)
                }
                ,
                c.prototype.IsQualifiedCertificates = function(c) {
                    for (var e = 0; e < c.length; e++)
                        if (!c[e].infoEx.isPowerCert)
                            return !1;
                    return !0
                }
                ,
                c.prototype.SetViewPKeyInfo = function(c) {
                    var e = this;
                    if (!e.m_showPKInfo || c.certificatesInfo.length < 1)
                        e.OnPKeyReaded(c);
                    else {
                        var a = $('<div class="Block">')
                            , r = c.certificatesInfo
                            , i = r[0]
                            , t = function(c, e) {
                            $(c).text(e),
                                e ? $(c).parent("div").show() : $(c).parent("div").hide()
                        };
                        $("#pkInfoSubjCN").text(i.infoEx.subjCN),
                            t("#pkInfoSubjOrg", i.infoEx.subjOrg),
                            t("#pkInfoSubjOrgUnit", i.infoEx.subjOrgUnit),
                            t("#pkInfoSubjTitle", i.infoEx.subjTitle),
                            t("#pkInfoSubjDRFOCode", i.infoEx.subjDRFOCode),
                            t("#pkInfoSubjUNZR", i.infoEx.subjUNZR),
                            t("#pkInfoSubjEDRPOUCode", i.infoEx.subjEDRPOUCode),
                            i.infoEx.subjDRFOCode || i.infoEx.subjUNZR || i.infoEx.subjEDRPOUCode ? $("#pkInfoSubjCodesBlock").show() : $("#pkInfoSubjCodesBlock").hide();
                        for (var n = [], b = 0; b < r.length; b++) {
                            var f = e.MakeKeyUsageWithPublicKeyType(r[b].infoEx.keyUsageType, r[b].infoEx.publicKeyType);
                            n = n.concat(f)
                        }
                        var d = $("<ul>");
                        for (b = 0; b < r.length; b++) {
                            var u = $("<li>");
                            u.append(e.MakeCertificateInfoEl(b + 1, r[b])),
                                d.append(u)
                        }
                        a.append(d),
                            $("#pkInfoContentBlock").empty(),
                            $("#pkInfoContentBlock").append(a),
                            $("#pkInfoNextButton").off("click"),
                            $("#pkInfoNextButton").on("click", (function() {
                                    e.OnPKeyReaded(c)
                                }
                            )),
                            $("#pkInfoBackButton").off("click"),
                            $("#pkInfoBackButton").on("click", (function() {
                                    e.OnResetPKey()
                                }
                            )),
                            e.ShowForm("#pkInfoBlock", !1)
                    }
                }
                ,
                c.prototype.SetPKMakeNewCertificatesResult = function(c, e, a) {
                    var r = $('<div class="Block StatusBlock">');
                    if (e) {
                        r.append("<label>" + u(i.TEXT_SAVE_NEW_PRIVATE_KEY) + ":</label><br>");
                        var t = this.MakeSaveFileEl(c, c, e);
                        r.append(t),
                            r.append("<br><br>")
                    }
                    r.append("<label>" + u(i.TEXT_DOWLOAD_NEW_CERTIFICATES) + ":</label><br>");
                    for (var n = 0; n < a.length; n++) {
                        var b = a[n]
                            , f = "EU-" + b.infoEx.serial + ".cer"
                            , d = n + 1 + ". " + f;
                        t = this.MakeSaveFileEl(d, f, b.data);
                        r.append(t),
                            r.append("<br>")
                    }
                    this.SetResult(r)
                }
                ,
                c.prototype.SetMakeDeviceCertificateResult = function(c) {
                    var e = $('<div class="Block StatusBlock">');
                    e.append("<label>" + u(i.TEXT_DOWLOAD_NEW_CERTIFICATES) + ":</label><br>");
                    for (var a = 0; a < c.length; a++) {
                        var r = c[a]
                            , t = "EU-" + r.infoEx.serial + ".cer"
                            , n = a + 1 + ". " + t
                            , b = this.MakeSaveFileEl(n, t, r.data);
                        e.append(b),
                            e.append("<br>")
                    }
                    this.SetResult(e)
                }
                ,
                c.prototype.IsQSCDSNInCert = function(c) {
                    for (var e = 0; e < this.m_CAs.length; e++) {
                        var a = this.m_CAs[e];
                        if (a.qscdSNInCert && a.issuerCNs.indexOf(c) > -1)
                            return !0
                    }
                    return !1
                }
                ,
                c.prototype.GetQSCD = function(c) {
                    var e = new _;
                    if (e.use = c.isQSCD,
                        e.use) {
                        for (var a = c.extKeyUsages.split(";"), i = 0; i < a.length; i++)
                            if (a[i].indexOf("ЗНКІ") > -1) {
                                e.name = a[i];
                                break
                            }
                        e.name && this.IsQSCDSNInCert(c.issuerCN) && (e.sn = c.subjUserCode)
                    } else
                        (c.publicKeyType == r.EndUserConstants.EndUserCertKeyType.ECDSA || c.publicKeyType == r.EndUserConstants.EndUserCertKeyType.RSA) && this.IsQSCDSNInCert(c.issuerCN) && c.subjUserID && 20 == c.subjUserID.length && (e.use = !0,
                            e.name = "ЗНКІ SIM-карта Київстар (MobileID)",
                            e.sn = c.subjUserID.substr(0, 19));
                    return e
                }
                ,
                c.prototype.SetSignFileResult = function(c, e, a, r) {
                    var t = this
                        , n = $('<div class="SignResult">')
                        , b = a.timeInfo
                        , f = a.ownerInfo
                        , d = t.GetQSCD(r.infoEx)
                        , o = ""
                        , l = "";
                    b.isTimeAvail ? b.isSignTimeStampAvail ? (o = u(i.TEXT_SIGN_TIME_SIGN_TIMESTAMP_TITLE),
                        l = t.DateToLocalString(b.signTimeStamp)) : (o = b.isTimeStamp ? u(i.TEXT_SIGN_TIME_DATA_TIMESTAMP_TITLE) : u(i.TEXT_SIGN_TIME_TIME_TITLE),
                        l = t.DateToLocalString(b.time)) : (o = u(i.TEXT_SIGN_TIME_TITLE),
                        l = u(i.TEXT_NO_VALUE));
                    var s = d.use ? u(i.TEXT_KEY_MEDIA_TYPE_QSCD) + (d.name ? "(" + d.name + ")" : "") : u(i.TEXT_KEY_MEDIA_TYPE_NOT_QSCD)
                        , h = d.sn ? d.sn : u(i.TEXT_NOT_DEFINED)
                        , g = [{
                        title: u(i.TEXT_SIGN_RESULT_TITLE),
                        value: u(i.TEXT_SIGN_RESULT_SUCCESS)
                    }, {
                        title: u(i.TEXT_SIGN_FILE_NAME_TITLE),
                        value: c
                    }, {
                        title: u(i.TEXT_SIGNER_TITLE),
                        value: f.subjCN
                    }, {
                        title: u(i.TEXT_ORGANIZATION_TITLE),
                        value: f.subjOrg
                    }, {
                        title: u(i.TEXT_TITLE_TITLE),
                        value: f.subjTitle
                    }, {
                        title: o,
                        value: l
                    }, {
                        title: u(i.TEXT_ISSUER_CN_TITLE),
                        value: f.issuerCN
                    }, {
                        title: u(i.TEXT_SN_TITLE),
                        value: f.serial
                    }, {
                        title: u(i.TEXT_KEY_MEDIA_TYPE_TITLE),
                        value: s
                    }];
                    d.use && g.push({
                        title: u(i.TEXT_KEY_MEDIA_SN_TITLE),
                        value: h
                    });
                    for (var k = 0; k < g.length; k++)
                        n.append(t.MakeRowEl(g[k].title, g[k].value));
                    var m = [{
                        title: u(i.BUTTON_SAVE),
                        handle: function() {
                            t.SaveFile(c, e)
                        }
                    }, {
                        title: u(i.BUTTON_BACK),
                        handle: function() {
                            t.ShowForm("#signBlock", !1)
                        }
                    }];
                    t.SetResult(n, m)
                }
                ,
                c.prototype.MakeCertificateInfoEl = function(c, e) {
                    for (var a = "EU-" + e.infoEx.serial + ".cer", r = $("<div>"), t = this.MakeKeyUsageWithPublicKeyType(e.infoEx.keyUsageType, e.infoEx.publicKeyType), n = u(i.TEXT_FROM) + " " + this.DateToLocalString(e.infoEx.certBeginTime) + " " + u(i.TEXT_TO) + " " + this.DateToLocalString(e.infoEx.certEndTime), b = [{
                        title: u(i.TEXT_ISSUER_CN_TITLE),
                        value: e.infoEx.issuerCN
                    }, {
                        title: u(i.TEXT_SN_TITLE),
                        value: e.infoEx.serial
                    }, {
                        title: u(i.TEXT_CERTIFICATE_VALID_TITLE),
                        value: n
                    }, {
                        title: u(i.BUTTON_DOWNLOAD),
                        value: this.MakeSaveFileEl(a, a, e.data, !0)
                    }], f = 0; f < b.length; f++)
                        r.append(this.MakeRowEl1(b[f].title, b[f].value));
                    return this.MakeInfoBlock(t.join(", "), r)
                }
                ,
                c.prototype.ClearForm = function(c) {
                    switch (c) {
                        case "#pkReadFileBlock":
                            $("#pkReadFileTextField").val(""),
                                $("#pkReadFileInput").val(""),
                                $("#pkReadFileAliasSelect").empty(),
                                $("#pkReadFilePasswordTextField").val(""),
                                $("#pkReadFileCertsTextField").val(""),
                                $("#pkReadFileCertsInput").val(""),
                                $("#pkReadFilePasswordTextField").prop("disabled", !0),
                                $("#pkReadFileCertsBlock").hide(),
                                $("#pkReadFileButton").attr("disabled", !0),
                                $("#pkReadFileSelectAliasBlock").hide();
                            break;
                        case "#pkReadKMBlock":
                            $("#pkReadKMUserTextField").val(""),
                                $("#pkReadKMPasswordTextField").val(""),
                                $("#pkReadKMCertsTextField").val(""),
                                $("#pkReadKMCertsInput").val(""),
                                $("#pkReadKMUserBlock").hide(),
                                $("#pkReadKMCertsBlock").hide(),
                                this.m_KMs ? this.SetKMs(this.m_KMs) : ($("#pkReadKMUserTextField").prop("disabled", !0),
                                    $("#pkReadKMPasswordTextField").prop("disabled", !0),
                                    $("#pkReadKMButton").attr("disabled", !0));
                            break;
                        case "#pkReadSIMBlock":
                            $("#pkReadSIMMSISDNTextField").val(""),
                                $("#pkReadSIMButton").attr("disabled", !0);
                            break;
                        case "#pkReadKSPBlock":
                            $("#pkReadKSPSelect").val($("#pkReadKSPSelect option:first").val()),
                                $("#pkReadKSPUserIdTextField").val(""),
                                $("#pkReadKSPButton").attr("disabled", !0),
                                this.OnReadKSPSelectChange();
                            break;
                        case "#pkWriteFileBlock":
                            $("#pkWriteFileTextField").val("Key-6.dat"),
                                $("#pkWriteFilePasswordTextField").val(""),
                                $("#pkWriteFilePasswordConfirmTextField").val(""),
                                $("#pkWriteFilePasswordTextField").prop("disabled", !1),
                                $("#pkWriteFilePasswordConfirmTextField").prop("disabled", !1),
                                $("#pkWriteFileButton").attr("disabled", !0);
                            break;
                        case "#pkWriteKMBlock":
                            $("#pkWriteKMUserTextField").val(""),
                                $("#pkWriteKMPasswordTextField").val(""),
                                $("#pkWriteKMPasswordConfirmTextField").val(""),
                                this.m_KMs ? this.SetKMs(this.m_KMs) : ($("#pkWriteKMUserTextField").prop("disabled", !0),
                                    $("#pkWriteKMPasswordTextField").prop("disabled", !0),
                                    $("#pkWriteKMPasswordConfirmTextField").prop("disabled", !0),
                                    $("#pkReadKMButton").attr("disabled", !0));
                            break;
                        case "#signBlock":
                            $("[name=signTypesRadio][value=1]").attr("checked", "checked"),
                                $("#signFormatSelect").val("16"),
                                $("#signInFileTextField").val(""),
                                $("#signInFileInput").val(""),
                                $("#signOutFileTextField").val(""),
                                $("#signOutFileTextField").prop("disabled", !0),
                                $("#signButton").attr("disabled", !0);
                            break;
                        case "#makeTechnicalCertBlock":
                            $("#makeTechnicalCertDeviceNameTextField").val(""),
                                $("#makeTechnicalCertEUFileTextField").val(""),
                                $("#makeTechnicalCertEUFileInput").val(""),
                                $("#makeTechnicalCertEUKEPFileTextField").val(""),
                                $("#makeTechnicalCertEUKEPFileInput").val("");
                            break;
                        case "#proxySettingsBlock":
                        case "#installBlock":
                            break;
                        case "#resultBlock":
                            $("#resultBlock").empty()
                    }
                }
                ,
                c.prototype.GetVisibleFormId = function() {
                    return "#" + $(".VisibleBlock").attr("id")
                }
                ,
                c.prototype.ShowForm = function(c, e) {
                    var a = this.GetVisibleFormId();
                    if (null != c && a != c) {
                        this.HideForm(null);
                        var r = $(c);
                        r.show(),
                            r.addClass("VisibleBlock")
                    }
                    switch ("#proxySettingsBlock" != a && !e && this.ClearForm(null != c ? c : a),
                        this.SetFormTitle(c),
                        this.SetFormSubTitle(c),
                        this.SetStatus(),
                        this.ChangeFormState(null != c ? c : a, e),
                        c) {
                        case "#pkReadFileBlock":
                            $("#titleBlock").show(),
                                $("#pkTypesBlock").show(),
                                $("#pkBlock").show(),
                                $("#pkCABloсk").show(),
                                this.m_isPKActionDone = !1,
                                this.m_formType == k.MakeNewCertificate && this.m_noNewFileKMOnMakeNewCertificate ? $("#proxyButtonBlock").show() : $("#proxyButtonBlock").hide();
                            break;
                        case "#pkReadKMBlock":
                            $("#titleBlock").show(),
                                $("#pkTypesBlock").show(),
                                $("#pkBlock").show(),
                                $("#pkCABloсk").show(),
                                this.m_isPKActionDone = !1,
                                $("#proxyButtonBlock").show();
                            break;
                        case "#pkReadSIMBlock":
                        case "#pkReadKSPBlock":
                            $("#titleBlock").show(),
                                $("#pkTypesBlock").show(),
                                $("#pkBlock").show(),
                                $("#pkCABloсk").hide(),
                                this.m_isPKActionDone = !1,
                                $("#proxyButtonBlock").hide();
                            break;
                        case "#pkWriteFileBlock":
                            $("#titleBlock").show(),
                                this.m_noNewKMOnMakeNewCertificate ? $("#pkTypesBlock").hide() : $("#pkTypesBlock").show(),
                                $("#pkBlock").show(),
                                $("#pkCABloсk").hide(),
                            this.m_noNewKMOnMakeNewCertificate && $("#pkWriteFileSelectFileBlock").hide(),
                                this.m_isPKActionDone = !1,
                                $("#proxyButtonBlock").hide();
                            break;
                        case "#pkWriteKMBlock":
                            $("#titleBlock").show();
                            var i = this.m_formType != k.MakeNewCertificate || !this.m_noNewKMOnMakeNewCertificate || null == this.m_readedPKey.keyMedia;
                            i && !this.m_noNewFileKMOnMakeNewCertificate ? $("#pkTypesBlock").show() : $("#pkTypesBlock").hide(),
                                $("#pkBlock").show(),
                                $("#pkCABloсk").hide(),
                            i || ($("#pkWriteKMUserBlock").hide(),
                                $("#pkWriteKMSelectBlock").hide()),
                                this.m_isPKActionDone = !1,
                                this.m_formType != k.MakeNewCertificate ? $("#proxyButtonBlock").show() : $("#proxyButtonBlock").hide();
                            break;
                        case "#pkInfoBlock":
                            this.m_formType != k.ViewPKeyCertificates ? $("#pkInfoNextButton").show() : $("#pkInfoNextButton").hide(),
                                $("#titleBlock").show(),
                                $("#pkTypesBlock").hide(),
                                $("#pkBlock").hide();
                            break;
                        case "#signBlock":
                        case "#proxySettingsBlock":
                            $("#titleBlock").show(),
                                $("#pkTypesBlock").hide(),
                                $("#pkBlock").hide();
                            break;
                        case "#installBlock":
                            $("#titleBlock").show(),
                                $("#pkBlock").hide();
                            break;
                        case "#resultBlock":
                            $("#titleLabel").is(":visible") ? $("#titleBlock").show() : $("#titleBlock").hide(),
                                $("#pkTypesBlock").hide(),
                                $("#pkBlock").hide()
                    }
                }
                ,
                c.prototype.HideForm = function(c) {
                    null == c && (c = this.GetVisibleFormId());
                    var e = $(c);
                    e.hide(),
                        e.removeClass("VisibleBlock")
                }
                ,
                c.prototype.ChangeFormState = function(c, e) {
                    switch (c) {
                        case "#pkReadFileBlock":
                            $("#pkTypesBlock").find(":radio").prop("disabled", e),
                                $("#pkCASelect").prop("disabled", e),
                                $("#proxyButton").attr("disabled", e);
                            var a = "" != $("#pkReadFileTextField").val();
                            $("#pkReadFileTextField").prop("disabled", e),
                                $("#pkReadFileAliasSelect").prop("disabled", e || !a),
                                $("#pkReadFilePasswordTextField").prop("disabled", e || !a),
                                $("#pkReadFileSelectButton").attr("disabled", e),
                                $("#pkReadFileCertsTextField").prop("disabled", e || !a),
                                $("#pkReadFileCertsFileSelectButton").attr("disabled", e || !a),
                                $("#pkReadFileButton").attr("disabled", !a),
                                $("#pkReadFileButton").text(u(e ? i.BUTTON_CLEAR : i.BUTTON_READ)),
                            this.m_formType == k.MakeNewCertificate && (e ? $("#pkReadFileButton").hide() : $("#pkReadFileButton").show());
                            break;
                        case "#pkReadKMBlock":
                            $("#pkTypesBlock").find(":radio").prop("disabled", e),
                                $("#pkCASelect").prop("disabled", e);
                            a = "" != $("#pkReadKMSelect").find(":selected").text();
                            $("#proxyButton").attr("disabled", e),
                                $("#pkReadKMSelect").prop("disabled", e),
                                $("#pkReadKMUserTextField").prop("disabled", e || !a),
                                $("#pkReadKMPasswordTextField").prop("disabled", e || !a),
                                $("#pkReadKMCertsTextField").prop("disabled", e || !a),
                                $("#pkReadKMCertsFileSelectButton").attr("disabled", e || !a),
                                $("#pkReadKMButton").attr("disabled", !a),
                                $("#pkReadKMButton").text(u(e ? i.BUTTON_CLEAR : i.BUTTON_READ)),
                            this.m_formType == k.MakeNewCertificate && (e ? $("#pkReadKMButton").hide() : $("#pkReadKMButton").show());
                            break;
                        case "#pkReadSIMBlock":
                            $("#pkTypesBlock").find(":radio").prop("disabled", e),
                                $("#pkReadSIMSelect").prop("disabled", e),
                                $("#pkReadSIMKeyIdSelect").prop("disabled", e),
                                $("#pkReadSIMMSISDNTextField").prop("disabled", e);
                            a = !!("+380" + $("#pkReadSIMMSISDNTextField").val()).match(s);
                            $("#pkReadSIMButton").text(u(e ? i.BUTTON_CLEAR : i.BUTTON_READ));
                            break;
                        case "#pkReadKSPBlock":
                            $("#pkTypesBlock").find(":radio").prop("disabled", e),
                                $("#pkReadKSPSelect").prop("disabled", e),
                                $("#pkReadKSPUserIdTextField").prop("disabled", e);
                            a = "" != $("#pkReadKSPUserIdTextField").val();
                            $("#pkReadKSPButton").text(u(e ? i.BUTTON_CLEAR : i.BUTTON_READ));
                            break;
                        case "#pkWriteFileBlock":
                            $("#pkTypesBlock").find(":radio").prop("disabled", e),
                                $("#pkCASelect").prop("disabled", e);
                            a = "" != $("#pkWriteFileTextField").val();
                            $("#pkWriteFileTextField").prop("disabled", e),
                                $("#pkWriteFilePasswordTextField").prop("disabled", e || !a),
                                $("#pkWriteFilePasswordConfirmTextField").prop("disabled", e || !a),
                                $("#pkWriteFileButton").attr("disabled", e || !a);
                            break;
                        case "#pkWriteKMBlock":
                            $("#pkTypesBlock").find(":radio").prop("disabled", e),
                                $("#pkCASelect").prop("disabled", e);
                            a = "" != $("#pkWriteKMSelect").find(":selected").text() || this.m_formType == k.MakeNewCertificate && this.m_noNewKMOnMakeNewCertificate && !this.m_noNewFileKMOnMakeNewCertificate && null == this.m_readedPKey.keyMedia;
                            $("#proxyButton").attr("disabled", e),
                                $("#pkWriteKMSelect").prop("disabled", e),
                                $("#pkWriteKMUserTextField").prop("disabled", e || !a),
                                $("#pkWriteKMPasswordTextField").prop("disabled", e || !a),
                                $("#pkWriteKMPasswordConfirmTextField").prop("disabled", e || !a),
                                $("#pkWriteKMButton").attr("disabled", e || !a);
                            break;
                        case "#pkInfoBlock":
                            $("#pkInfoNextButton").attr("disabled", e)
                    }
                }
                ,
                c.prototype.SetStatus = function(c, e) {
                    void 0 === c && (c = ""),
                    void 0 === e && (e = !1),
                        $("#statusLabel").text(c),
                        "" == c ? $("#statusBlock").hide() : $("#statusBlock").show(),
                        e ? ($("#statusBlock").addClass("ErrorBlock"),
                            $("#statusBlock").removeClass("StatusBlock")) : ($("#statusBlock").removeClass("ErrorBlock"),
                            $("#statusBlock").addClass("StatusBlock"))
                }
                ,
                c.prototype.GetLibraryErrorDetailedDescription = function(c) {
                    var e = c.message + "(" + c.code + ")";
                    switch (c.code) {
                        case r.EndUserError.EU_ERROR_TRANSMIT_REQUEST:
                            this.GetCurrentLibrary().GetType() == r.EndUserConstants.EU_LIBRARY_TYPE_SW && (e += ". " + u(i.TEXT_SET_PROXY_SETTINGS))
                    }
                    return e
                }
                ,
                c.prototype.SetError = function(c, e) {
                    void 0 === e && (e = null);
                    var a = "";
                    c && (a += c),
                    e && (a += ". " + u(i.TEXT_ERROR_DESCRIPTION) + ": ",
                        a += "string" == typeof e ? e : this.GetLibraryErrorDetailedDescription(e)),
                        this.SetStatus(a, !0)
                }
                ,
                c.prototype.SetResult = function(c, e) {
                    if (void 0 === c && (c = null),
                    void 0 === e && (e = null),
                        $("#resultContentBlock").empty(),
                        $("#resultContentBlock").append(c),
                    null != e) {
                        for (var a = [$("#resultLeftButton"), $("#resultRightButton")], r = 0; r < e.length; r++)
                            a[r].off(),
                                a[r].on("click", e[r].handle),
                                a[r].text(e[r].title);
                        $("#resultButtonsBlock").show()
                    } else
                        $("#resultButtonsBlock").hide()
                }
                ,
                c.prototype.GetURLParameter = function(c, e, a) {
                    if (!c)
                        return a;
                    if (-1 == c.indexOf("?"))
                        return a;
                    for (var r = a, i = c.substring(c.indexOf("?") + 1, c.length).split("&"), t = 0; t < i.length; t++)
                        if (0 == i[t].indexOf(e + "=")) {
                            r = i[t].substring((e + "=").length, i[t].length);
                            break
                        }
                    return r
                }
                ,
                c.prototype.WriteLog = function(c) {
                    this.m_debug && console.log("SignWidget: " + c)
                }
                ,
                c.prototype.GetProxySettings = function() {
                    var c = new r.EndUserProxySettings;
                    return c.useProxy = $("#proxyUseCheckbox").prop("checked"),
                        c.address = c.useProxy ? $("#proxyAddressTextField").val() : "",
                        c.port = c.useProxy ? $("#proxyPortTextField").val() : "3128",
                        c.anonymous = !c.useProxy || !$("#proxyAuthCheckbox").prop("checked"),
                        c.user = c.anonymous ? "" : $("#proxyUserTextField").val(),
                        c.password = c.anonymous ? "" : $("#proxyPasswordTextField").val(),
                        c.savePassword = !0,
                        c.useProxy ? "" == c.address ? (this.SetError(u(i.ERROR_PROXY_ADDRESS_NOT_SET)),
                            $("#proxyAddressTextField").focus(),
                            null) : isNaN(parseInt(c.port)) || parseInt(c.port) < 1 || parseInt(c.port) > 65535 ? (this.SetError(u(i.ERROR_PROXY_PORT_NOT_SET)),
                            $("#proxyPortTextField").focus(),
                            null) : c.anonymous ? c : "" == c.user ? (this.SetError(u(i.ERROR_PROXY_USER_NOT_SET)),
                            $("#proxyUserTextField").focus(),
                            null) : c : c
                }
                ,
                c.prototype.ReadFile = function(c) {
                    return new Promise((function(e, a) {
                            var r = new FileReader;
                            r.onloadend = function(a) {
                                if (a.target.readyState == FileReader.DONE) {
                                    var r = new p(c,new Uint8Array(a.target.result));
                                    e(r)
                                }
                            }
                                ,
                                r.readAsArrayBuffer(c)
                        }
                    ))
                }
                ,
                c.prototype.ReadFiles = function(c) {
                    var e = this;
                    return new Promise((function(a, r) {
                            var i = Array()
                                , t = 0
                                , n = function() {
                                t >= c.length ? a(i) : (e.ReadFile(c[t]).then((function(c) {
                                        i.push(c),
                                            n()
                                    }
                                )).catch((function(c) {
                                        return r(c)
                                    }
                                )),
                                    t++)
                            };
                            n()
                        }
                    ))
                }
                ,
                c.prototype.SaveFile = function(c, e) {
                    var a = new Blob([e],{
                        type: "application/octet-stream"
                    });
                    saveAs(a, c)
                }
                ,
                c.prototype.SetKSPs = function(c) {
                    var e = $("#pkReadKSPSelect");
                    e.empty(),
                        $.each(c, (function(c, a) {
                                e.append($("<option/>", {
                                    value: a.ksp,
                                    text: a.name
                                }))
                            }
                        ))
                }
                ,
                c.prototype.SetCAs = function(c) {
                    this.m_CAs = c;
                    var e = $("#pkCASelect")
                        , a = [];
                    if (null == this.m_CAs || this.m_CAs.length < 2 || this.m_keyMediaType == j.Mobile || this.m_keyMediaType == j.KSP || this.m_formType == k.MakeNewCertificate || this.m_formType == k.MakeDeviceCertificate || this.m_ownCAOnly)
                        $("#pkCABloсk").hide();
                    else {
                        a.push(u(i.TEXT_CA_AUTO_DETECT));
                        for (var r = 0; r < this.m_CAs.length; r++)
                            a.push(this.m_CAs[r].issuerCNs[0]);
                        e.empty(),
                            $.each(a, (function(c, a) {
                                    e.append($("<option/>", {
                                        value: c,
                                        text: a
                                    }))
                                }
                            )),
                            $("#pkCABloсk").show()
                    }
                }
                ,
                c.prototype.GetSelectedCA = function() {
                    if (null == this.m_CAs || 0 == this.m_CAs.length)
                        return null;
                    if (1 == this.m_CAs.length || this.m_formType == k.MakeNewCertificate || this.m_formType == k.MakeDeviceCertificate || this.m_ownCAOnly)
                        return this.m_CAs[0];
                    var c = parseInt($("#pkCASelect").val());
                    return 0 != c ? this.m_CAs[c - 1] : null
                }
                ,
                c.prototype.SetSelectedCA = function(c) {
                    for (var e = 0; e < this.m_CAs.length; e++)
                        for (var a = 0; a < this.m_CAs[e].issuerCNs.length; a++)
                            if (c == this.m_CAs[e].issuerCNs[a])
                                return void $("#pkCASelect").val(e + 1)
                }
                ,
                c.prototype.GetFileExtension = function(c) {
                    return c.substring(c.lastIndexOf(".") + 1, c.length)
                }
                ,
                c.prototype.FilterUserCertificates = function(c) {
                    for (var e = new Array, a = 0; a < c.length; a++)
                        c[a].infoEx.subjType == r.EndUserConstants.EndUserSubjectType.EndUser && e.push(c[a]);
                    return e
                }
                ,
                c.prototype.GetKMsVisibleNames = function(c) {
                    var e = new Array;
                    return null != c && c.forEach((function(c) {
                            e.push(c.visibleName)
                        }
                    )),
                        e
                }
                ,
                c.prototype.IsKMMultiKeyDevice = function(c) {
                    return h.indexOf(c.type) > -1
                }
                ,
                c.prototype.IsKMConnected = function(c, e) {
                    for (var a = 0; a < e.length; a++) {
                        var r = e[a];
                        if (c.typeIndex == r.typeIndex && c.devIndex == r.devIndex && c.visibleName == r.visibleName)
                            return !0
                    }
                    return !1
                }
                ,
                c.prototype.IsKMsUpdated = function(c, e) {
                    var a = this.GetKMsVisibleNames(c)
                        , r = this.GetKMsVisibleNames(e);
                    if (a.length != r.length)
                        return !0;
                    for (var i = 0; i < a.length; i++)
                        if (a[i] != r[i])
                            return !0;
                    return !1
                }
                ,
                c.prototype.BeginUpdateKMs = function() {
                    var c = this
                        , e = c.GetCurrentLibrary();
                    c.WriteLog("BeginUpdateKMs"),
                        e.GetType() == r.EndUserConstants.EU_LIBRARY_TYPE_SW ? c.m_updatingKM ? c.m_updateKM = !0 : (c.m_updateKM = !0,
                            c.m_updatingKM = !0,
                            e.GetLibrary().GetKeyMedias().then((function(e) {
                                    (c.WriteLog("KeyMedias: " + e),
                                        c.m_updatingKM = !1,
                                        c.m_updateKM) && (c.m_formType == k.MakeNewCertificate && null != c.m_readedPKey && null != c.m_readedPKey.keyMedia && c.m_noNewKMOnMakeNewCertificate && (c.IsKMConnected(c.m_readedPKey.keyMedia, e) || (e = [])),
                                    c.IsKMsUpdated(e, c.m_KMs) && c.SetKMs(e),
                                        setTimeout((function() {
                                                c.m_updateKM && c.BeginUpdateKMs()
                                            }
                                        ), 1e3))
                                }
                            )).catch((function(e) {
                                    c.m_updatingKM = !1,
                                    c.m_updateKM && c.SetError(u(i.ERROR_KM_UPDATE_LIST), e),
                                        c.StopUpdateKMs()
                                }
                            ))) : c.StopUpdateKMs()
                }
                ,
                c.prototype.StopUpdateKMs = function() {
                    this.WriteLog("StopUpdateKMs"),
                        this.m_updateKM = !1
                }
                ,
                c.prototype.SetKMs = function(c) {
                    this.m_KMs = c;
                    var e = null;
                    if (this.m_KM)
                        for (var a = 0; a < c.length; a++)
                            if (c[a].type == this.m_KM.type && c[a].device == this.m_KM.device) {
                                e = c[a];
                                break
                            }
                    var r = this.GetKMSelect()
                        , i = this.GetKMUserTextField()
                        , t = this.GetKMPasswordTextField()
                        , n = this.GetKMPasswordConfirmTextField()
                        , b = this.GetKMCertsTextField()
                        , f = this.GetKMCertsSelectButton()
                        , d = this.GetKMButton()
                        , u = this.GetKMsVisibleNames(c);
                    r.empty(),
                        $.each(u, (function(c, e) {
                                r.append($("<option/>", {
                                    value: e,
                                    text: e
                                }))
                            }
                        )),
                    e && r.val(e.visibleName),
                        this.OnKMSelectChange(),
                        i.prop("disabled", 0 == u.length),
                        t.prop("disabled", 0 == u.length),
                    n && n.prop("disabled", 0 == u.length),
                        d.attr("disabled", 0 == u.length),
                    b && b.prop("disabled", 0 == u.length),
                    f && f.attr("disabled", 0 == u.length),
                    0 == u.length && (i.val(""),
                        t.val(""),
                    n && n.val(""),
                    b && b.val(""))
                }
                ,
                c.prototype.GetSelectedKM = function() {
                    if (null == this.m_KMs)
                        return null;
                    for (var c = this.GetKMSelect(), e = this.GetKMUserTextField(), a = this.GetKMPasswordTextField(), i = c.find(":selected").text(), t = 0; t < this.m_KMs.length; t++) {
                        var n = this.m_KMs[t];
                        if (n.visibleName == i) {
                            var b = new r.EndUserKeyMedia(n);
                            return b.password = a.val(),
                            e.is(":visible") && (b.user = e.val()),
                                b
                        }
                    }
                    return null
                }
                ,
                c.prototype.GetSelectedSIM = function() {
                    return parseInt($("#pkReadSIMSelect").find(":selected").val())
                }
                ,
                c.prototype.GetSelectedSIMKeyId = function() {
                    var c = this.GetSelectedSIM();
                    return c != r.EndUserConstants.EndUserKSP.Vodafone && c != r.EndUserConstants.EndUserKSP.Lifecell ? 0 : parseInt($("#pkReadSIMKeyIdSelect").find(":selected").val())
                }
                ,
                c.prototype.OnEvent = function(c) {
                    switch (c.type) {
                        case r.EndUserConstants.EndUserEventType.ConfirmKSPOperation:
                            var e = c;
                            this.BeginOperationConfirmation(e.url, e.qrCode, e.mobileAppName)
                    }
                    (this.m_listeners[c.type] || this.m_listeners[r.EndUserConstants.EndUserEventType.All]) && this.PostMessage(null, -2, null, c)
                }
                ,
                c.prototype.BeginOperationConfirmation = function(c, e, a) {
                    var r = $("<div>");
                    r.css("padding", "10px");
                    var t = $("<a>");
                    t.attr("href", c),
                        t.attr("target", "_blank");
                    var n = new Image;
                    n.src = "data:image/bmp;base64," + e,
                        $(n).css("padding", "10px"),
                        $(n).css("background", "white"),
                        t.append(n),
                        r.append(t),
                        $("#dimmerViewQRCodeBlock").empty(),
                        $("#dimmerViewQRCodeBlock").append(r),
                        $("#dimmerViewQRCodeBlock").append("<div><label>" + u(i.TEXT_KSP_OPERATION_CONFIRMATION) + ' <a href="' + encodeURI(c) + '" target="blank" style="color:white">' + a + "</a></label></div>"),
                        $("#dimmerViewQRCodeBlock").show()
                }
                ,
                c.prototype.StopOperationConfirmation = function() {
                    $("#dimmerViewQRCodeBlock").empty(),
                        $("#dimmerViewQRCodeBlock").hide()
                }
                ,
                c.prototype.IsDigitalStamp = function(c) {
                    for (var e = 0; e < c.length; e++) {
                        var a = c[e].infoEx;
                        if (a.publicKeyType == r.EndUserConstants.EndUserCertKeyType.DSTU4145 && (a.keyUsageType & r.EndUserConstants.EndUserKeyUsage.DigitalSignature) == r.EndUserConstants.EndUserKeyUsage.DigitalSignature)
                            return !(a.extKeyUsages.indexOf(r.EndUserConstants.EU_UA_OID_EXT_KEY_USAGE_STAMP) < 0 && a.extKeyUsages.indexOf("Цифрова печатка") < 0)
                    }
                }
                ,
                c.prototype.SignAlgoToPublicKeyType = function(c) {
                    switch (c) {
                        case r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311:
                            return r.EndUserConstants.EndUserCertKeyType.DSTU4145;
                        case r.EndUserConstants.EndUserSignAlgo.RSAWithSHA:
                            return r.EndUserConstants.EndUserCertKeyType.RSA;
                        case r.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA:
                            return r.EndUserConstants.EndUserCertKeyType.ECDSA;
                        default:
                            return r.EndUserConstants.EndUserCertKeyType.Unknown
                    }
                }
                ,
                c.prototype.SignAlgoToHashAlgo = function(c) {
                    switch (c) {
                        case r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311:
                            return r.EndUserConstants.EndUserHashAlgo.GOST34311;
                        case r.EndUserConstants.EndUserSignAlgo.RSAWithSHA:
                        case r.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA:
                            return r.EndUserConstants.EndUserHashAlgo.SHA256;
                        default:
                            return r.EndUserConstants.EndUserHashAlgo.Unknown
                    }
                }
                ,
                c.prototype.MakeKeyUsageWithPublicKeyType = function(c, e) {
                    var a = ""
                        , t = [];
                    switch (e) {
                        case r.EndUserConstants.EndUserCertKeyType.DSTU4145:
                            a = u(i.TEXT_KEY_TYPE_DSTU4145);
                            break;
                        case r.EndUserConstants.EndUserCertKeyType.RSA:
                            a = u(i.TEXT_KEY_TYPE_RSA);
                            break;
                        case r.EndUserConstants.EndUserCertKeyType.ECDSA:
                            a = u(i.TEXT_KEY_TYPE_ECDSA)
                    }
                    return a = "" != a ? " (" + a + ")" : "",
                    c & r.EndUserConstants.EndUserKeyUsage.DigitalSignature && t.push(u(i.TEXT_KEY_USAGE_SIGN) + a),
                    c & r.EndUserConstants.EndUserKeyUsage.KeyAgreement && t.push(u(i.TEXT_KEY_USAGE_ENVELOP) + a),
                        t
                }
                ,
                c.prototype.CheckPrivateKey = function(c, e, a) {
                    void 0 === a && (a = !1);
                    var n = this;
                    return new Promise((function(b, f) {
                            if (a)
                                b();
                            else if (n.m_readedPKey) {
                                for (var d = n.m_readedPKey.certificatesInfo, o = r.EndUserConstants.EndUserKeyUsage.Unknown, l = 0; l < d.length; l++) {
                                    var s = d[l].infoEx;
                                    if ((c == r.EndUserConstants.EndUserCertKeyType.Unknown || s.publicKeyType == c) && (o |= s.keyUsageType,
                                    (e & o) == e))
                                        break
                                }
                                if ((e & o) == e)
                                    b();
                                else {
                                    var h = n.MakeKeyUsageWithPublicKeyType(e, c);
                                    f(t.format(u(i.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO), h.join(", ")))
                                }
                            } else
                                f(u(i.ERROR_PRIVATE_KEY_NOT_READED))
                        }
                    ))
                }
                ,
                c.prototype.GetSupportedSignAlgosByKSP = function(c) {
                    var e = [];
                    switch (c) {
                        case r.EndUserConstants.EndUserKSP.Kyivstar:
                            e.push({
                                value: r.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
                                text: u(i.TEXT_SIGN_ALGO_ECDSA)
                            }, {
                                value: r.EndUserConstants.EndUserSignAlgo.RSAWithSHA,
                                text: u(i.TEXT_SIGN_ALGO_RSA)
                            });
                            break;
                        default:
                            e.push({
                                value: r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311,
                                text: u(i.TEXT_SIGN_ALGO_DSTU4145)
                            })
                    }
                    return e
                }
                ,
                c.prototype.GetSupportedSignAlgos = function(c) {
                    for (var e = [], a = 0; a < c.length; a++) {
                        var t = c[a].infoEx;
                        if ((t.keyUsageType & r.EndUserConstants.EndUserKeyUsage.DigitalSignature) == r.EndUserConstants.EndUserKeyUsage.DigitalSignature)
                            switch (t.publicKeyType) {
                                case r.EndUserConstants.EndUserCertKeyType.DSTU4145:
                                    e.push({
                                        value: r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311,
                                        text: u(i.TEXT_SIGN_ALGO_DSTU4145)
                                    });
                                    break;
                                case r.EndUserConstants.EndUserCertKeyType.RSA:
                                    e.push({
                                        value: r.EndUserConstants.EndUserSignAlgo.RSAWithSHA,
                                        text: u(i.TEXT_SIGN_ALGO_RSA)
                                    });
                                    break;
                                case r.EndUserConstants.EndUserCertKeyType.ECDSA:
                                    e.push({
                                        value: r.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
                                        text: u(i.TEXT_SIGN_ALGO_ECDSA)
                                    })
                            }
                    }
                    if (0 == e.length && (this.m_keyMediaType == j.Mobile || this.m_keyMediaType == j.KSP)) {
                        var n = parseInt(this.m_keyMediaType == j.Mobile ? this.GetSelectedSIM() : $("#pkReadKSPSelect").find(":selected").val());
                        e = this.GetSupportedSignAlgosByKSP(n)
                    }
                    return e
                }
                ,
                c.prototype.OnPKeyReaded = function(c) {
                    switch (this.m_readedPKey = c,
                        this.ShowForm(null, !0),
                        this.SetStatus(u(i.STATUS_PRIVATE_KEY_READED)),
                        this.m_formType) {
                        case k.MakeNewCertificate:
                            this.m_isPKActionDone = !1,
                                this.BeginUpdateKMs();
                            break;
                        case k.ReadPrivateKey:
                            this.m_isPKActionDone = !0;
                            break;
                        case k.ViewPKeyCertificates:
                            this.m_isPKActionDone = !0,
                                this.SetViewPKeyInfo(c);
                            break;
                        case k.SignFile:
                            this.m_isPKActionDone = !0;
                            var e = this.GetSupportedSignAlgos(c.certificatesInfo);
                            if (0 == e.length) {
                                var a = t.format(u(i.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO), u(i.TEXT_KEY_USAGE_SIGN), "");
                                return void this.SetError(a)
                            }
                            var r = $("#signAlgoSelect");
                            r.empty(),
                                $.each(e, (function(c, a) {
                                        r.append($("<option/>", {
                                            value: e[c].value,
                                            text: e[c].text
                                        }))
                                    }
                                )),
                                this.ShowForm("#signBlock", !1);
                            break;
                        case k.MakeDeviceCertificate:
                            this.m_isPKActionDone = !1
                    }
                }
                ,
                c.prototype.PostMessage = function(c, e, a, i) {
                    var t = null;
                    a && (t = a,
                    void 0 !== a.code && void 0 !== a.message || (t = {
                        code: r.EndUserError.EU_ERROR_UNKNOWN,
                        message: a.toString()
                    }));
                    var n = {
                        sender: "EndUserSignWidget",
                        reciever: "EndUserSignWidgetConnector",
                        id: e,
                        error: t,
                        result: i
                    };
                    null == c && (c = parent),
                        c.postMessage(n, this.m_mainPageOrigin)
                }
                ,
                c.prototype.OnValidateInput = function(c, e, a, r, i, t) {
                    if (e || a || r)
                        return !1;
                    return [8, 46, 37, 39].indexOf(c) > -1 || (t.indexOf(c) > -1 || i.indexOf(String.fromCharCode(c)) > -1)
                }
                ,
                c.prototype.OnReceiveMessage = function(c) {
                    var e = this;
                    if (e.WriteLog("Recieve event:"),
                        e.WriteLog("event:" + c),
                        e.WriteLog("origin:" + c.origin),
                    c.origin == e.m_mainPageOrigin && void 0 !== c.data.id && void 0 !== c.data.cmd && "EndUserSignWidgetConnector" == c.data.sender && "EndUserSignWidget" == c.data.reciever) {
                        e.WriteLog("Event data"),
                            e.WriteLog("id:" + c.data.id),
                            e.WriteLog("cmd:" + c.data.cmd),
                            e.WriteLog("params:" + c.data.params);
                        try {
                            e[c.data.cmd].apply(e, c.data.params).then((function(a) {
                                    e.PostMessage(c.source, c.data.id, null, a)
                                }
                            )).catch((function(a) {
                                    e.PostMessage(c.source, c.data.id, a, null)
                                }
                            ))
                        } catch (a) {
                            e.PostMessage(c.source, c.data.id, a, null),
                                e.WriteLog("Error: " + a)
                        }
                    }
                }
                ,
                c.prototype.OnChangeLibraryType = function() {
                    for (var c = this, e = $("[name = pkTypesRadio]"), a = c.m_keyMediaType, t = 0; t < e.length; t++)
                        if ($(e[t]).prop("checked")) {
                            a = parseInt(e[t].value);
                            break
                        }
                    c.m_keyMediaType = a,
                        c.SetStorageItem("KeyMediaType", a);
                    var n = null;
                    switch (c.m_formType) {
                        case k.ReadPrivateKey:
                        case k.SignFile:
                        case k.ViewPKeyCertificates:
                        case k.MakeDeviceCertificate:
                            switch (a) {
                                case j.File:
                                    n = "#pkReadFileBlock";
                                    break;
                                case j.Hardware:
                                    n = "#pkReadKMBlock";
                                    break;
                                case j.Mobile:
                                    n = "#pkReadSIMBlock";
                                    break;
                                case j.KSP:
                                    n = "#pkReadKSPBlock"
                            }
                            break;
                        case k.MakeNewCertificate:
                            n = a == j.Hardware ? null == c.m_readedPKey ? "#pkReadKMBlock" : "#pkWriteKMBlock" : null == c.m_readedPKey ? "#pkReadFileBlock" : "#pkWriteFileBlock"
                    }
                    c.ShowForm(n, !1);
                    var b = c.GetCurrentLibrary();
                    if (null == b.GetInfo())
                        return c.ShowDimmerView(u(i.PROCESS_STATUS_LOAD_LIBRARY)),
                            void c.LoadLibrary();
                    if (c.CloseDimmerView(),
                        !b.IsSupported())
                        return c.HideForm("#pkBlock"),
                            void c.SetError(u(i.ERROR_LIBRARY_NOT_SUPPORTED));
                    if (!b.IsLoaded()) {
                        if (b.GetType() != r.EndUserConstants.EU_LIBRARY_TYPE_SW)
                            return c.HideForm("#pkBlock"),
                                void c.SetError(u(i.ERROR_LIBRARY_NOT_LOADED));
                        var f = b.GetInfo();
                        $("#installLabel").text(f.isNativeLibraryNeedUpdate ? u(i.TEXT_LIBRARY_NEED_UPDATE) : u(i.TEXT_LIBRARY_NEED_INSTALL));
                        var d = f.isNativeLibraryNeedUpdate ? u(i.TEXT_LIBRARY_UPDATE) : u(i.TEXT_LIBRARY_INSTALL)
                            , o = f.nativeLibraryInstallURL;
                        return !f.isWebExtensionSupported || f.isWebExtensionInstalled || f.isNativeLibraryNeedUpdate || (d = u(i.TEXT_LIBRARY_WEB_EXTENSION_INSTALL),
                            o = f.webExtensionInstallURL),
                            $("#installURL").text(d),
                            $("#installURL").attr("href", o),
                            $("#installHelpURL").text(u(i.TEXT_LIBRARY_USER_MANUAL)),
                            $("#installHelpURL").attr("href", f.helpURL),
                            c.ShowForm("#installBlock", !1),
                            void setTimeout((function() {
                                    c.LoadLibrary()
                                }
                            ), 500)
                    }
                    c.ShowDimmerView(u(i.PROCESS_STATUS_INSTALL_LIBRARY)),
                        b.GetLibrary().IsInitialized().then((function(c) {
                                return c ? null : b.GetLibrary().Initialize(LIBRARY_SETTINGS)
                            }
                        )).then((function() {
                                return b.GetLibrary().GetCAs()
                            }
                        )).then((function(e) {
                                c.SetCAs(e),
                                    c.CloseDimmerView(),
                                    c.BeginUpdateKMs()
                            }
                        )).catch((function(e) {
                                c.CloseDimmerView(),
                                    c.HideForm("#pkTypesBlock"),
                                    c.HideForm("#pkBlock"),
                                    c.SetError(u(i.ERROR_LIBRARY_INITIALIZE), e)
                            }
                        ))
                }
                ,
                c.prototype.OnSelectCA = function() {
                    var c = this.GetSelectedCA()
                        , e = this.m_keyMediaType == j.Hardware ? $("#pkReadKMCertsBlock") : $("#pkReadFileCertsBlock");
                    !c || c.cmpAddress || c.certsInKey ? e.hide() : e.show()
                }
                ,
                c.prototype.OnSelectPKeyFile = function(c) {
                    var e = this
                        , a = c && 1 == c.length
                        , r = a ? c[0].name : ""
                        , t = e.GetFileExtension(r);
                    if ($("#pkReadFilePasswordTextField").prop("disabled", !a),
                        $("#pkReadFileButton").attr("disabled", !a),
                        $("#pkReadFileCertsTextField").prop("disabled", !a),
                        $("#pkReadFileCertsFileSelectButton").attr("disabled", !a),
                        $("#pkReadFileButton").attr("disabled", !a),
                    a || $("#pkReadFilePasswordTextField").val(""),
                        $("#pkReadFileTextField").val(r),
                    a && "jks" == t) {
                        var n = $("#pkReadFileAliasSelect");
                        n.empty(),
                            e.ReadFile(c[0]).then((function(c) {
                                    return e.GetCurrentLibrary().GetLibrary().GetJKSPrivateKeys(c.data)
                                }
                            )).then((function(c) {
                                    0 != c.length && ($.each(c, (function(a, r) {
                                            var i = e.FilterUserCertificates(c[a].certificates);
                                            n.append($("<option/>", {
                                                value: c[a].alias,
                                                text: c[a].alias + "(" + i[0].infoEx.subjCN + ")"
                                            }))
                                        }
                                    )),
                                        n.prop("disabled", !1),
                                        $("#pkReadFileSelectAliasBlock").show())
                                }
                            )).catch((function(c) {
                                    e.SetError(u(i.ERROR_GET_JKS_PRIVATE_KEY_INFO), c)
                                }
                            ))
                    } else
                        $("#pkReadFileSelectAliasBlock").hide(),
                            $("#pkReadFileAliasSelect").empty()
                }
                ,
                c.prototype.OnKMSelectChange = function() {
                    var c = this.GetSelectedKM()
                        , e = this.GetKMUserTextField();
                    null != c && this.IsKMMultiKeyDevice(c) ? (e.parent("div").show(),
                        e.prop("disabled", !1)) : (e.val(""),
                        e.parent("div").hide())
                }
                ,
                c.prototype.OnSelectPKeyCertificates = function(c, e) {
                    var a = "";
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            a += e[r].name + ";";
                    $(c).val(a)
                }
                ,
                c.prototype.OnSelectTechnicalCertRequest = function(c, e) {
                    var a = "";
                    e && e.length > 0 && (a = e[0].name),
                        $(c).val(a)
                }
                ,
                c.prototype.OnSIMSelectChange = function() {
                    var c = this.GetSelectedSIM();
                    c != r.EndUserConstants.EndUserKSP.Vodafone && c != r.EndUserConstants.EndUserKSP.Lifecell ? $("#pkReadSIMKeyIdBlock").hide() : $("#pkReadSIMKeyIdBlock").show()
                }
                ,
                c.prototype.OnReadSIMMSISDNTextFieldChange = function() {
                    var c = !("+380" + $("#pkReadSIMMSISDNTextField").val()).match(s);
                    $("#pkReadSIMButton").attr("disabled", c)
                }
                ,
                c.prototype.OnReadKSPSelectChange = function() {
                    var c = parseInt($("#pkReadKSPSelect").find(":selected").val())
                        , e = c == r.EndUserConstants.EndUserKSP.IIT ? "uppercase" : "none";
                    switch ($("#pkReadKSPUserIdTextField").css("text-transform", e),
                        c) {
                        case r.EndUserConstants.EndUserKSP.PB:
                            $("#pkReadKSPUserIdBlock").hide(),
                                $("#pkReadKSPUserIdTextField").val(this.MakeUserId());
                            break;
                        default:
                            $("#pkReadKSPUserIdBlock").show(),
                                $("#pkReadKSPUserIdTextField").val("")
                    }
                    this.OnReadKSPUserIdTextFieldChange()
                }
                ,
                c.prototype.OnReadKSPUserIdTextFieldChange = function() {
                    var c = "" == $("#pkReadKSPUserIdTextField").val();
                    $("#pkReadKSPButton").attr("disabled", c)
                }
                ,
                c.prototype.OnWriteFileTextFieldChange = function() {
                    var c = "" == $("#pkWriteFileTextField").val();
                    $("#pkWriteFilePasswordTextField").prop("disabled", c),
                        $("#pkWriteFilePasswordConfirmTextField").prop("disabled", c),
                        $("#pkWriteFileButton").attr("disabled", c),
                    c && ($("#pkWriteFilePasswordTextField").val(""),
                        $("#pkWriteFilePasswordConfirmTextField").val(""))
                }
                ,
                c.prototype.OnChangeSignType = function() {
                    var c = parseInt($("input[type='radio'][name=signTypesRadio]:checked").val())
                        , e = $("#signInFileInput").prop("files")[0]
                        , a = $("#signInFileTextField").val()
                        , r = "";
                    "" != a && (r = a,
                        r += c == m.ASiCS ? ".zip" : ".p7s",
                        c == m.Internal && e.size >= 5242880 ? this.SetError(u(i.ERROR_FILE_TO_BIG)) : this.SetError(null)),
                        $("#signOutFileTextField").val(r)
                }
                ,
                c.prototype.OnSelectSignFile = function(c) {
                    var e = c && 1 == c.length
                        , a = e ? c[0].name : "";
                    this.SetError(null),
                        $("#signInFileTextField").val(a),
                        this.OnChangeSignType(),
                        $("#signOutFileTextField").prop("disabled", !e),
                        $("#signButton").attr("disabled", !e)
                }
                ,
                c.prototype.OnSetProxy = function() {
                    var c = this;
                    c.GetCurrentLibrary().GetLibrary().GetProxySettings().then((function(e) {
                            $("#proxyUseCheckbox").prop("checked", e.useProxy),
                                $("#proxyAddressTextField").val(e.address),
                                $("#proxyPortTextField").val(e.port),
                                $("#proxyAuthCheckbox").prop("checked", !e.anonymous),
                                $("#proxyUserTextField").val(e.user),
                                $("#proxyPasswordTextField").val(e.password),
                                c.ShowForm("#proxySettingsBlock", !1),
                                c.OnUseProxy()
                        }
                    )).catch((function(e) {
                            c.SetError(u(i.ERROR_GET_PROXY_SETTINGS), e)
                        }
                    ))
                }
                ,
                c.prototype.OnUseProxy = function() {
                    var c = $("#proxyUseCheckbox").prop("checked");
                    $("#proxyAddressTextField").prop("disabled", !c),
                        $("#proxyPortTextField").prop("disabled", !c),
                        $("#proxyAuthCheckbox").prop("disabled", !c),
                        this.OnAuthProxy()
                }
                ,
                c.prototype.OnAuthProxy = function() {
                    var c = $("#proxyAuthCheckbox").prop("checked") && !$("#proxyAuthCheckbox").prop("disabled");
                    $("#proxyUserTextField").prop("disabled", !c),
                        $("#proxyPasswordTextField").prop("disabled", !c)
                }
                ,
                c.prototype.OnSaveProxy = function() {
                    var c = this
                        , e = c.GetProxySettings();
                    null != e && (c.SetError(""),
                        c.ShowDimmerView(u(i.PROCESS_STATUS_SAVE_PROXY_SETTINGS)),
                        c.GetCurrentLibrary().GetLibrary().SetProxySettings(e).then((function() {
                                c.OnHideProxy(),
                                    c.CloseDimmerView()
                            }
                        )).catch((function(e) {
                                c.CloseDimmerView(),
                                    c.SetError(u(i.ERROR_SET_PROXY_SETTINGS), e)
                            }
                        )))
                }
                ,
                c.prototype.OnHideProxy = function() {
                    this.OnChangeLibraryType()
                }
                ,
                c.prototype.OnResetPKey = function() {
                    var c = this
                        , e = c.GetCurrentLibrary();
                    c.m_readedPKey = null,
                        e.GetLibrary().ResetPrivateKey().then((function() {
                                c.OnChangeLibraryType()
                            }
                        )).catch((function() {
                                c.OnChangeLibraryType()
                            }
                        ))
                }
                ,
                c.prototype.OnReadPKey = function(c) {
                    var e = this
                        , a = e.GetCurrentLibrary();
                    if (e.SetError(""),
                    e.m_isPKActionDone || null != e.m_readedPKey)
                        e.OnResetPKey();
                    else {
                        var n = c ? $("#pkReadFileAliasSelect") : null
                            , b = c ? $("#pkReadFilePasswordTextField") : $("#pkReadKMPasswordTextField")
                            , f = c ? null : $("#pkReadKMUserTextField")
                            , d = c ? $("#pkReadFileCertsInput") : $("#pkReadKMCertsInput")
                            , o = c ? $("#pkReadFileCertsTextField") : $("#pkReadKMCertsTextField")
                            , l = c ? null : e.GetSelectedKM()
                            , s = c ? $("#pkReadFileInput").prop("files")[0] : null
                            , h = c && "jks" == e.GetFileExtension(s.name)
                            , g = h ? n.val() : null
                            , m = new Array
                            , j = b.val()
                            , p = e.GetSelectedCA()
                            , v = null != p ? p.issuerCNs[0] : null;
                        if (f && f.is(":visible") && "" == f.val())
                            return f.focus(),
                                void e.SetError(u(i.ERROR_USER_NOT_SET));
                        if ("" == j)
                            return b.focus(),
                                void e.SetError(u(i.ERROR_PASSWORD_NOT_SET));
                        if (o.is(":visible") && 0 == (m = d.prop("files")).length)
                            e.SetError(u(i.ERROR_CERTIFICATES_NOT_SELECTED));
                        else {
                            e.ShowDimmerView(u(i.PROCESS_STATUS_READ_PRIVATE_KEY)),
                                e.StopUpdateKMs();
                            var _ = new E;
                            _.keyMedia = l,
                                _.alias = g,
                                _.password = j,
                                e.ReadFiles(m).then((function(c) {
                                        var a = Array();
                                        if (c)
                                            for (var r = 0; r < c.length; r++)
                                                a.push(c[r].data);
                                        return _.certificates = a,
                                            s ? e.ReadFile(s) : null
                                    }
                                )).then((function(c) {
                                        return _.file = c,
                                            h ? a.GetLibrary().GetJKSPrivateKeys(c.data) : null
                                    }
                                )).then((function(r) {
                                        var i = c ? _.file.data : null;
                                        if (h && c && 0 != r.length)
                                            for (var t = 0; t < r.length; t++)
                                                if (r[t].alias == g) {
                                                    i = r[t].privateKey;
                                                    for (var n = e.FilterUserCertificates(r[t].certificates), b = 0; b < n.length; b++)
                                                        _.certificates.push(n[b].data);
                                                    break
                                                }
                                        return c ? a.GetLibrary().ReadPrivateKeyBinary(i, _.password, _.certificates, v) : a.GetLibrary().ReadPrivateKey(_.keyMedia, _.certificates, v)
                                    }
                                )).then((function(c) {
                                        return e.SetSelectedCA(c.issuerCN),
                                            a.GetLibrary().GetOwnCertificates()
                                    }
                                )).then((function(c) {
                                        e.IsQualifiedCertificates(c) || LIBRARY_SETTINGS.supportAdvancedCertificates ? (_.certificatesInfo = c,
                                            e.SetViewPKeyInfo(_),
                                            e.CloseDimmerView()) : a.GetLibrary().ResetPrivateKey().then((function() {
                                                e.BeginUpdateKMs(),
                                                    e.CloseDimmerView();
                                                var a = t.format(u(i.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED), c[0].infoEx.issuerCN);
                                                e.SetError(a)
                                            }
                                        )).catch((function(c) {
                                                throw c
                                            }
                                        ))
                                    }
                                )).catch((function(a) {
                                        var n = u(i.ERROR_READ_PRIVATE_KEY);
                                        if (a.code == r.EndUserError.EU_ERROR_CERT_NOT_FOUND) {
                                            var b = c ? "#pkReadFileCertsBlock" : "#pkReadKMCertsBlock";
                                            e.m_formType == k.MakeNewCertificate ? (n = u(i.ERROR_MAKE_NEW_CERTIFICATE),
                                                a = t.format(u(i.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA), v)) : (a = null == p ? u(i.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT) : t.format(p.cmpAddress ? u(i.ERROR_READ_PRIVATE_KEY_INVALID_CA) : u(i.ERROR_READ_PRIVATE_NEED_CERTIFICATE), v),
                                            null == p || p.cmpAddress || $(b).show())
                                        }
                                        e.BeginUpdateKMs(),
                                            e.CloseDimmerView(),
                                            e.SetError(n, a)
                                    }
                                ))
                        }
                    }
                }
                ,
                c.prototype.OnReadPKeyKSP = function() {
                    var c = this
                        , e = c.GetCurrentLibrary();
                    if (c.SetError(""),
                    c.m_isPKActionDone || null != c.m_readedPKey)
                        c.OnResetPKey();
                    else {
                        var a = 0
                            , r = null
                            , n = null
                            , b = 0;
                        switch (c.m_keyMediaType) {
                            case j.Mobile:
                                if (a = c.GetSelectedSIM(),
                                    n = "+380" + $("#pkReadSIMMSISDNTextField").val(),
                                    b = c.GetSelectedSIMKeyId(),
                                    !n.match(s))
                                    return $("#pkReadSIMMSISDNTextField").focus(),
                                        void c.SetError(u(i.ERROR_MSISDN_NOT_SET_OR_INVALID));
                                break;
                            case j.KSP:
                                if (a = parseInt($("#pkReadKSPSelect").find(":selected").val()),
                                    r = $("#pkReadKSPSelect").find(":selected").text(),
                                    !(n = $("#pkReadKSPUserIdTextField").val()))
                                    return $("#pkReadKSPUserIdTextField").focus(),
                                        void c.SetError(u(i.ERROR_USER_ID_NOT_SET_OR_INVALID));
                                break;
                            default:
                                return
                        }
                        c.ShowDimmerView(u(i.PROCESS_STATUS_READ_PRIVATE_KEY)),
                            c.StopUpdateKMs();
                        var f = new E;
                        f.keyMedia = null,
                            f.password = null,
                            f.kspKey = new v(a,r,n,b),
                            e.GetLibrary().ReadPrivateKeyKSP(f.kspKey.userId, f.kspKey.GetKSPId(), !0, f.kspKey.keyId).then((function(c) {
                                    return null != c || confirm(u(i.CONFIRM_CONTINUE_WITHOUT_PKEY_READED)) ? e.GetLibrary().GetOwnCertificates() : null
                                }
                            )).then((function(a) {
                                    if (!a)
                                        return c.BeginUpdateKMs(),
                                            e.GetLibrary().ResetPrivateKey();
                                    c.IsQualifiedCertificates(a) || LIBRARY_SETTINGS.supportAdvancedCertificates ? (f.certificatesInfo = a,
                                        c.SetViewPKeyInfo(f)) : e.GetLibrary().ResetPrivateKey().then((function() {
                                            c.BeginUpdateKMs(),
                                                c.CloseDimmerView(),
                                                c.StopOperationConfirmation();
                                            var e = t.format(u(i.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED), a[0].infoEx.issuerCN);
                                            c.SetError(e)
                                        }
                                    )).catch((function(c) {
                                            throw c
                                        }
                                    ))
                                }
                            )).then((function() {
                                    c.CloseDimmerView(),
                                        c.StopOperationConfirmation()
                                }
                            )).catch((function(e) {
                                    c.BeginUpdateKMs(),
                                        c.CloseDimmerView(),
                                        c.StopOperationConfirmation(),
                                        c.SetError(u(i.ERROR_READ_PRIVATE_KEY), e)
                                }
                            ))
                    }
                }
                ,
                c.prototype.OnWritePKey = function(c) {
                    var e = this
                        , a = e.GetCurrentLibrary();
                    if (e.SetError(""),
                        e.m_isPKActionDone)
                        e.OnResetPKey();
                    else {
                        var n = c ? null : $("#pkWriteKMUserTextField")
                            , b = c ? $("#pkWriteFilePasswordTextField") : $("#pkWriteKMPasswordTextField")
                            , f = c ? $("#pkWriteFilePasswordConfirmTextField") : $("#pkWriteKMPasswordConfirmTextField")
                            , d = c ? $("#pkWriteFileTextField").val() : null
                            , o = b.val()
                            , l = f.val()
                            , s = null
                            , h = e.GetSelectedCA()
                            , g = null != h ? h.issuerCNs[0] : null
                            , k = LIBRARY_SETTINGS.passwordRequirements ? new RegExp(LIBRARY_SETTINGS.passwordRequirements,"g") : null;
                        if (c || (e.m_noNewKMOnMakeNewCertificate && null != e.m_readedPKey.keyMedia ? (s = new r.EndUserKeyMedia(e.m_readedPKey.keyMedia)).password = o : s = e.GetSelectedKM()),
                        c && "" == d)
                            return $("#pkWriteFileTextField").focus(),
                                void e.SetError(u(i.ERROR_NEW_PK_FILE_NAME_NOT_SET));
                        if (n && n.is(":visible") && "" == n.val())
                            return n.focus(),
                                void e.SetError(u(i.ERROR_USER_NOT_SET));
                        if ("" == o)
                            return $(b).focus(),
                                void e.SetError(u(i.ERROR_NEW_PASSWORD_NOT_SET));
                        if ("" == l)
                            return $(f).focus(),
                                void e.SetError(u(i.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET));
                        if (o != l)
                            return $(f).focus(),
                                void e.SetError(u(i.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL));
                        var m = null != e.m_readedPKey.keyMedia
                            , p = e.m_keyMediaType == j.Hardware
                            , v = m ? e.m_readedPKey.keyMedia.password : e.m_readedPKey.password;
                        !k || o != v && k.test(o) ? (e.ShowDimmerView(u(i.PROCESS_STATUS_MAKE_NEW_CERTIFICATE)),
                            e.StopUpdateKMs(),
                        (m || p) && (a = this.m_libraries[r.EndUserConstants.EU_LIBRARY_TYPE_SW]),
                            a.GetLibrary().IsInitialized().then((function() {
                                    return e.m_euParams && e.m_noNewKMOnMakeNewCertificate ? a.GetLibrary().GetOwnEUserParams() : null
                                }
                            )).then((function(c) {
                                    return c ? (c.EMail = e.m_euParams.EMail,
                                        c.phone = e.m_euParams.phone) : c = e.m_euParams ? e.m_euParams : null,
                                        a.GetLibrary().MakeNewCertificate(m ? e.m_readedPKey.keyMedia : null, m ? null : e.m_readedPKey.file.data, m ? null : e.m_readedPKey.password, r.EndUserConstants.EndUserKeysType.DSTUAndECDHWithGOST, r.EndUserConstants.EU_KEYS_LENGTH_DS_UA_CERT, !1, r.EndUserConstants.EU_KEYS_LENGTH_KEP_UA_CERT, null, r.EndUserConstants.EU_KEYS_TYPE_NONE, 0, null, p ? s : null, p ? null : o, g, c, e.m_noNewKMOnMakeNewCertificate && m)
                                }
                            )).then((function(c) {
                                    null != c.key && e.SaveFile(d, c.key);
                                    var a = u(i.STATUS_NEW_CERTIFICATE_MADE);
                                    p || (a += ". " + t.format(u(i.STATUS_RESULT_SAVED_TO_DOWNLOADS), d)),
                                        e.m_isPKActionDone = !0,
                                        e.m_readedPKey = null,
                                        e.ShowForm("#resultBlock", !0),
                                        e.SetStatus(a, !1),
                                        e.SetPKMakeNewCertificatesResult(d, c.key, c.certs),
                                        e.CloseDimmerView()
                                }
                            )).catch((function(c) {
                                    e.BeginUpdateKMs(),
                                        e.SetError(u(i.ERROR_MAKE_NEW_CERTIFICATE), c),
                                        e.CloseDimmerView()
                                }
                            ))) : e.SetError(u(i.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS))
                    }
                }
                ,
                c.prototype.OnMakeDeviceCert = function() {
                    var c = this
                        , e = c.GetCurrentLibrary();
                    c.SetError("");
                    var a = $("#makeTechnicalCertDeviceNameTextField").val()
                        , r = $("#makeTechnicalCertEUFileInput").prop("files")[0]
                        , t = $("#makeTechnicalCertEUFileTextField").val()
                        , n = $("#makeTechnicalCertEUKEPFileInput").prop("files")[0]
                        , b = $("#makeTechnicalCertEUKEPFileTextField").val();
                    if ("" == a)
                        return $("#makeTechnicalCertDeviceNameTextField").focus(),
                            void c.SetError(u(i.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_NOT_SET));
                    if (c.m_deviceCertParams && c.m_deviceCertParams.subjCN) {
                        var f = c.m_deviceCertParams.subjCN
                            , d = f.template
                            , o = f.requirement;
                        if (d && (a = d.replace("%s", a)),
                            o)
                            if (o = d ? d.replace("%s", o) : o,
                                !new RegExp(o,"g").test(a))
                                return $("#makeTechnicalCertDeviceNameTextField").focus(),
                                    void c.SetError(u(i.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_INVALID))
                    }
                    if ("" == t)
                        return $("#makeTechnicalCertEUFileTextField").focus(),
                            void c.SetError(u(i.ERROR_TECHNICAL_EU_CERTS_REQUEST_FILE_NOT_SET));
                    if ("" == b)
                        return $("#makeTechnicalCertEUKEPFileInput").focus(),
                            void c.SetError(u(i.ERROR_TECHNICAL_EU_KEP_CERTS_REQUEST_FILE_NOT_SET));
                    c.ShowDimmerView(u(i.PROCESS_STATUS_MAKE_TECHNICAL_CERTS));
                    var l = {
                        euRequest: null,
                        euKEPRequest: null
                    };
                    c.ReadFile(r).then((function(e) {
                            return l.euRequest = e.data,
                                c.ReadFile(n)
                        }
                    )).then((function(c) {
                            return l.euKEPRequest = c.data,
                                e.GetLibrary().MakeDeviceCertificate(a, l.euRequest, l.euKEPRequest, null, null)
                        }
                    )).then((function(e) {
                            c.SetMakeDeviceCertificateResult(e),
                                c.ShowForm("#resultBlock", !0),
                                c.CloseDimmerView(),
                                c.StopOperationConfirmation(),
                                c.m_isPKActionDone = !0
                        }
                    )).catch((function(e) {
                            c.CloseDimmerView(),
                                c.StopOperationConfirmation(),
                                c.SetError(u(i.ERROR_MAKE_TECHNICAL_CERTS), e)
                        }
                    ))
                }
                ,
                c.prototype.OnMakeDeviceCertCancel = function() {
                    this.m_showPKInfo && this.m_readedPKey.certificatesInfo.length > 0 ? this.ShowForm("#pkInfoBlock", !1) : this.OnResetPKey()
                }
                ,
                c.prototype.OnSignFile = function() {
                    var c = this
                        , e = c.GetCurrentLibrary();
                    c.SetError("");
                    var a = parseInt($("input[type='radio'][name=signTypesRadio]:checked").val())
                        , t = parseInt($("#signAlgoSelect").val())
                        , n = parseInt($("#signFormatSelect").val())
                        , b = c.SignAlgoToHashAlgo(t)
                        , f = a != m.Internal
                        , d = $("#signInFileInput").prop("files")[0]
                        , o = $("#signInFileTextField").val()
                        , l = $("#signOutFileTextField").val()
                        , s = new JSZip
                        , h = {
                        data: null,
                        hash: null,
                        sign: null,
                        signInfo: null,
                        signerInfo: null
                    };
                    return "" == o ? ($("#signInFileTextField").focus(),
                        void c.SetError(u(i.ERROR_FILE_TO_SIGN_NOT_SET))) : "" == l ? ($("#signOutFileTextField").focus(),
                        void c.SetError(u(i.ERROR_FILE_TO_SIGN_RESULT_NOT_SET))) : void (a == m.Internal && d.size >= 5242880 ? c.SetError(u(i.ERROR_FILE_TO_BIG)) : (c.ShowDimmerView(u(i.PROCESS_STATUS_SIGN_FILE)),
                        e.GetLibrary().SetRuntimeParameter(r.EndUserConstants.EU_SIGN_TYPE_PARAMETER, n).then((function() {
                                return c.ReadFile(d)
                            }
                        )).then((function(c) {
                                return h.data = c.data,
                                    f ? e.GetLibrary().HashData(b, c.data, !1) : null
                            }
                        )).then((function(c) {
                                return h.hash = c,
                                    f ? e.GetLibrary().SignHash(t, h.hash, !0, !1) : e.GetLibrary().SignDataEx(t, h.data, !1, !0, !1)
                            }
                        )).then((function(c) {
                                return h.sign = c,
                                    f ? e.GetLibrary().VerifyHash(h.hash, h.sign, 0) : e.GetLibrary().VerifyDataInternal(h.sign, 0)
                            }
                        )).then((function(c) {
                                return h.signInfo = c,
                                    e.GetLibrary().GetSigner(h.sign, 0, !0)
                            }
                        )).then((function(c) {
                                switch (h.signerInfo = c,
                                    a) {
                                    case m.ASiCS:
                                        return s.file("mimetype", "application/vnd.etsi.asic-s+zip"),
                                            s.file(o, h.data),
                                            s.folder("META-INF").file("signature.p7s", h.sign),
                                            s.generateAsync({
                                                type: "blob"
                                            });
                                    case m.Internal:
                                    case m.External:
                                    default:
                                        return h.sign
                                }
                            }
                        )).then((function(e) {
                                c.SetSignFileResult(l, e, h.signInfo, h.signerInfo),
                                    c.ShowForm("#resultBlock", !0),
                                    c.CloseDimmerView(),
                                    c.StopOperationConfirmation()
                            }
                        )).catch((function(e) {
                                c.CloseDimmerView(),
                                    c.StopOperationConfirmation(),
                                    c.SetError(u(i.ERROR_SIGN_FILE), e)
                            }
                        ))))
                }
                ,
                c.prototype.OnSignFileCancel = function() {
                    this.m_showPKInfo && this.m_readedPKey.certificatesInfo.length > 0 ? this.ShowForm("#pkInfoBlock", !1) : this.OnResetPKey()
                }
                ,
                c.prototype.ShowDimmerView = function(c) {
                    $("#dimmerViewMessageLabel").text(c + "..."),
                        $("#mainBlock").block({
                            message: $("#dimmerViewBlock"),
                            css: {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                color: "#fff",
                                border: "none",
                                borderColor: "#000",
                                width: "100%",
                                height: "100%"
                            },
                            overlayCSS: {
                                backgroundColor: "#0C234B"
                            }
                        })
                }
                ,
                c.prototype.CloseDimmerView = function() {
                    $("#mainBlock").unblock()
                }
                ,
                c.prototype.LoadLibrary = function() {
                    var c = this
                        , e = c.GetCurrentLibrary();
                    e.IsLoading() || e.Load((function(e) {
                            c.OnEvent(e)
                        }
                    )).then((function() {
                            e == c.GetCurrentLibrary() && c.OnChangeLibraryType()
                        }
                    )).catch((function(a) {
                            e == c.GetCurrentLibrary() && (c.SetError(u(i.ERROR_LIBRARY_LOAD), a),
                                c.CloseDimmerView())
                        }
                    ))
                }
                ,
                c.prototype.AddEventListener = function(c) {
                    var e = this;
                    return new Promise((function(a, r) {
                            e.m_listeners[c] = function(c) {
                                e.OnEvent(c)
                            }
                                ,
                                a()
                        }
                    ))
                }
                ,
                c.prototype.ResetPrivateKey = function() {
                    var c = this;
                    return new Promise((function(e, a) {
                            c.OnResetPKey(),
                                e()
                        }
                    ))
                }
                ,
                c.prototype.ReadPrivateKey = function() {
                    var c = this;
                    return new Promise((function(e, a) {
                            var r = function() {
                                c.m_readedPKey ? e(c.m_readedPKey.certificatesInfo) : ("#installBlock" != c.GetVisibleFormId() && "#proxySettingsBlock" != c.GetVisibleFormId() && "#pkReadFileBlock" != c.GetVisibleFormId() && "#pkReadKMBlock" != c.GetVisibleFormId() && "#pkReadSIMBlock" != c.GetVisibleFormId() && "#pkReadKSPBlock" != c.GetVisibleFormId() && "#pkInfoBlock" != c.GetVisibleFormId() && c.OnChangeLibraryType(),
                                    setTimeout((function() {
                                            r()
                                        }
                                    ), 500))
                            };
                            r()
                        }
                    ))
                }
                ,
                c.prototype.MakeNewCertificate = function(c) {
                    void 0 === c && (c = null);
                    var e = this;
                    return e.m_euParams = c,
                        new Promise((function(c, a) {
                                var r = function() {
                                    if (e.m_isPKActionDone)
                                        c();
                                    else {
                                        if (null != e.m_readedPKey && "#installBlock" != e.GetVisibleFormId() && "#proxySettingsBlock" != e.GetVisibleFormId() && "#pkWriteFileBlock" != e.GetVisibleFormId() && "#pkWriteKMBlock" != e.GetVisibleFormId()) {
                                            var a = null == e.m_readedPKey.keyMedia && !e.m_noNewFileKMOnMakeNewCertificate;
                                            e.SetKeyMediaType(a ? j.File : j.Hardware)
                                        }
                                        setTimeout((function() {
                                                r()
                                            }
                                        ), 500)
                                    }
                                };
                                r()
                            }
                        ))
                }
                ,
                c.prototype.MakeDeviceCertificate = function(c) {
                    var e = this;
                    return new Promise((function(a, r) {
                            var i = function() {
                                if (e.m_isPKActionDone)
                                    return e.m_isPKActionDone = !1,
                                        void a();
                                null != e.m_readedPKey && "#installBlock" != e.GetVisibleFormId() && "#proxySettingsBlock" != e.GetVisibleFormId() && "#makeTechnicalCertBlock" != e.GetVisibleFormId() && (e.m_deviceCertParams = c,
                                    e.ShowForm("#makeTechnicalCertBlock", !1)),
                                    setTimeout((function() {
                                            i()
                                        }
                                    ), 500)
                            };
                            i()
                        }
                    ))
                }
                ,
                c.prototype.ChangeOwnCertificatesStatus = function(c, e) {
                    var a = this
                        , i = a.GetCurrentLibrary().GetLibrary();
                    return new Promise((function(t, n) {
                            a.CheckPrivateKey(r.EndUserConstants.EndUserCertKeyType.Unknown, r.EndUserConstants.EndUserKeyUsage.Unknown).then((function() {
                                    return i.ChangeOwnCertificatesStatus(c, e)
                                }
                            )).then((function() {
                                    return t()
                                }
                            )).catch((function(c) {
                                    return n(c)
                                }
                            ))
                        }
                    ))
                }
                ,
                c.prototype.SignHash = function(c, e, a, t, n) {
                    void 0 === e && (e = !1),
                    void 0 === a && (a = r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
                    void 0 === t && (t = r.EndUserConstants.EndUserSignType.CAdES_BES),
                    void 0 === n && (n = null);
                    var b = this
                        , f = b.GetCurrentLibrary().GetLibrary();
                    return b.ShowDimmerView(u(i.PROCESS_STATUS_SIGN_DATA)),
                        new Promise((function(i, d) {
                                b.CheckPrivateKey(b.SignAlgoToPublicKeyType(a), r.EndUserConstants.EndUserKeyUsage.DigitalSignature).then((function() {
                                        return f.SetRuntimeParameter(r.EndUserConstants.EU_SIGN_TYPE_PARAMETER, t)
                                    }
                                )).then((function() {
                                        return null == n ? f.SignHash(a, c, !0, e) : f.AppendSignHash(a, c, n, !0, e)
                                    }
                                )).then((function(c) {
                                        b.CloseDimmerView(),
                                            b.StopOperationConfirmation(),
                                            i(c)
                                    }
                                )).catch((function(c) {
                                        b.CloseDimmerView(),
                                            b.StopOperationConfirmation(),
                                            d(c)
                                    }
                                ))
                            }
                        ))
                }
                ,
                c.prototype.SignData = function(c, e, a, t, n, b) {
                    void 0 === e && (e = !0),
                    void 0 === a && (a = !1),
                    void 0 === t && (t = r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
                    void 0 === n && (n = null),
                    void 0 === b && (b = r.EndUserConstants.EndUserSignType.CAdES_BES);
                    var f = this
                        , d = f.GetCurrentLibrary().GetLibrary();
                    return f.ShowDimmerView(u(i.PROCESS_STATUS_SIGN_DATA)),
                        new Promise((function(i, u) {
                                f.CheckPrivateKey(f.SignAlgoToPublicKeyType(t), r.EndUserConstants.EndUserKeyUsage.DigitalSignature).then((function() {
                                        return d.SetRuntimeParameter(r.EndUserConstants.EU_SIGN_TYPE_PARAMETER, b)
                                    }
                                )).then((function() {
                                        return null == n ? d.SignDataEx(t, c, e, !0, a) : d.AppendSign(t, e ? c : null, n, !0, a)
                                    }
                                )).then((function(c) {
                                        f.CloseDimmerView(),
                                            f.StopOperationConfirmation(),
                                            i(c)
                                    }
                                )).catch((function(c) {
                                        f.CloseDimmerView(),
                                            f.StopOperationConfirmation(),
                                            u(c)
                                    }
                                ))
                            }
                        ))
                }
                ,
                c.prototype.EnvelopData = function(c, e, a, i, t) {
                    void 0 === a && (a = !1),
                    void 0 === i && (i = !1),
                    void 0 === t && (t = !1);
                    var n = this
                        , b = n.GetCurrentLibrary().GetLibrary();
                    return new Promise((function(f, d) {
                            n.CheckPrivateKey(r.EndUserConstants.EndUserCertKeyType.DSTU4145, (a ? r.EndUserConstants.EndUserKeyUsage.DigitalSignature : 0) | (t ? 0 : r.EndUserConstants.EndUserKeyUsage.KeyAgreement), !a && t).then((function() {
                                    return b.EnvelopData(c, e, a, !0, i, t)
                                }
                            )).then((function(c) {
                                    return f(c)
                                }
                            )).catch((function(c) {
                                    return d(c)
                                }
                            ))
                        }
                    ))
                }
                ,
                c.prototype.DevelopData = function(c, e) {
                    void 0 === e && (e = null);
                    var a = this
                        , i = a.GetCurrentLibrary().GetLibrary();
                    return new Promise((function(t, n) {
                            a.CheckPrivateKey(r.EndUserConstants.EndUserCertKeyType.DSTU4145, r.EndUserConstants.EndUserKeyUsage.KeyAgreement).then((function() {
                                    return i.DevelopData(c, e)
                                }
                            )).then((function(c) {
                                    return t(c)
                                }
                            )).catch((function(c) {
                                    return n(c)
                                }
                            ))
                        }
                    ))
                }
                ,
                c
        }();
        window.onload = function() {
            if (d.getInstance().addTranlation(b.UA, f),
                LOCALIZATION)
                for (var c in LOCALIZATION)
                    d.getInstance().addTranlation(d.getLocaleTypeById(c), LOCALIZATION[c]);
            g = new w,
                $(window).on("message", (function(c) {
                        g.OnReceiveMessage(c.originalEvent)
                    }
                ));
            for (var e = $("[name = pkTypesRadio]"), a = 0; a < e.length; a++)
                $(e[a]).on("change", (function() {
                        g.OnChangeLibraryType()
                    }
                ));
            var r = $("[name = signTypesRadio]");
            for (a = 0; a < r.length; a++)
                $(r[a]).on("change", (function() {
                        g.OnChangeSignType()
                    }
                ));
            $("#pkCASelect").on("change", (function() {
                    g.OnSelectCA()
                }
            )),
                $("#proxyButton").on("click", (function() {
                        g.OnSetProxy()
                    }
                )),
                $("#proxyUseCheckbox").on("click", (function() {
                        g.OnUseProxy()
                    }
                )),
                $("#proxyAuthCheckbox").on("click", (function() {
                        g.OnAuthProxy()
                    }
                )),
                $("#proxySaveButton").on("click", (function() {
                        g.OnSaveProxy()
                    }
                )),
                $("#proxyCancelButton").on("click", (function() {
                        g.OnHideProxy()
                    }
                )),
                $("#pkReadFileInput").on("change", (function(c) {
                        g.OnSelectPKeyFile(c.target.files)
                    }
                )),
                $("#pkReadFileCertsInput").on("change", (function(c) {
                        g.OnSelectPKeyCertificates("#pkReadFileCertsTextField", c.target.files)
                    }
                )),
                $("#pkReadFileButton").on("click", (function(c) {
                        g.OnReadPKey(!0)
                    }
                )),
                $("#pkReadKMSelect").on("change", (function(c) {
                        g.OnKMSelectChange()
                    }
                )),
                $("#pkReadKMCertsInput").on("change", (function(c) {
                        g.OnSelectPKeyCertificates("#pkReadKMCertsTextField", c.target.files)
                    }
                )),
                $("#pkReadKMButton").on("click", (function(c) {
                        g.OnReadPKey(!1)
                    }
                )),
                $("#pkReadSIMSelect").on("change", (function() {
                        g.OnSIMSelectChange()
                    }
                )),
                $("#pkReadSIMMSISDNTextField").on("keydown", (function(c) {
                        g.OnValidateInput(c.keyCode, c.ctrlKey, c.metaKey, c.shiftKey, o, l) || c.preventDefault()
                    }
                )),
                $("#pkReadSIMMSISDNTextField").on("input", (function(c) {
                        g.OnReadSIMMSISDNTextFieldChange()
                    }
                )),
                $("#pkReadSIMButton").on("click", (function(c) {
                        g.OnReadPKeyKSP()
                    }
                )),
                $("#pkReadKSPSelect").on("change", (function(c) {
                        g.OnReadKSPSelectChange()
                    }
                )),
                $("#pkReadKSPUserIdTextField").on("input", (function(c) {
                        g.OnReadKSPUserIdTextFieldChange()
                    }
                )),
                $("#pkReadKSPButton").on("click", (function(c) {
                        g.OnReadPKeyKSP()
                    }
                )),
                $("#pkWriteFileTextField").on("input", (function(c) {
                        g.OnWriteFileTextFieldChange()
                    }
                )),
                $("#pkWriteFileButton").on("click", (function(c) {
                        g.OnWritePKey(!0)
                    }
                )),
                $("#pkWriteKMSelect").on("change", (function(c) {
                        g.OnKMSelectChange()
                    }
                )),
                $("#pkWriteKMButton").on("click", (function(c) {
                        g.OnWritePKey(!1)
                    }
                )),
                $("#makeTechnicalCertDeviceNameTextField").on("keydown", (function(c) {
                        g.OnValidateInput(c.keyCode, c.ctrlKey, c.metaKey, c.shiftKey, o, l) || c.preventDefault()
                    }
                )),
                $("#makeTechnicalCertEUFileInput").on("change", (function(c) {
                        g.OnSelectTechnicalCertRequest("#makeTechnicalCertEUFileTextField", c.target.files)
                    }
                )),
                $("#makeTechnicalCertEUKEPFileInput").on("change", (function(c) {
                        g.OnSelectTechnicalCertRequest("#makeTechnicalCertEUKEPFileTextField", c.target.files)
                    }
                )),
                $("#makeTechnicalCertNextButton").on("click", (function(c) {
                        g.OnMakeDeviceCert()
                    }
                )),
                $("#makeTechnicalCertBackButton").on("click", (function(c) {
                        g.OnMakeDeviceCertCancel()
                    }
                )),
                $("#signInFileInput").on("change", (function(c) {
                        g.OnSelectSignFile(c.target.files)
                    }
                )),
                $("#signButton").on("click", (function(c) {
                        g.OnSignFile()
                    }
                )),
                $("#signCancelButton").on("click", (function(c) {
                        g.OnSignFileCancel()
                    }
                )),
                g.OnChangeLibraryType(),
                g.OnReadKSPSelectChange(),
                g.PostMessage(null, -1, null, null)
        }
    }
]);
