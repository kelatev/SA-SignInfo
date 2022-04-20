!function(c) {
    function e(r) {
        if (a[r])
            return a[r].exports;
        var i = a[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return c[r].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    var a = {};
    e.m = c,
    e.c = a,
    e.d = function(c, a, r) {
        e.o(c, a) || Object.defineProperty(c, a, {
            enumerable: !0,
            get: r
        })
    }
    ,
    e.r = function(c) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(c, "__esModule", {
            value: !0
        })
    }
    ,
    e.t = function(c, a) {
        if (1 & a && (c = e(c)),
        8 & a)
            return c;
        if (4 & a && "object" == typeof c && c && c.__esModule)
            return c;
        var r = Object.create(null);
        if (e.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: c
        }),
        2 & a && "string" != typeof c)
            for (var i in c)
                e.d(r, i, function(e) {
                    return c[e]
                }
                .bind(null, i));
        return r
    }
    ,
    e.n = function(c) {
        var a = c && c.__esModule ? function() {
            return c.default
        }
        : function() {
            return c
        }
        ;
        return e.d(a, "a", a),
        a
    }
    ,
    e.o = function(c, e) {
        return Object.prototype.hasOwnProperty.call(c, e)
    }
    ,
    e.p = "",
    e(e.s = 1)
}([function(c, e, a) {
    c.exports = function(c) {
        function e(r) {
            if (a[r])
                return a[r].exports;
            var i = a[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return c[r].call(i.exports, i, i.exports, e),
            i.l = !0,
            i.exports
        }
        var a = {};
        return e.m = c,
        e.c = a,
        e.d = function(c, a, r) {
            e.o(c, a) || Object.defineProperty(c, a, {
                enumerable: !0,
                get: r
            })
        }
        ,
        e.r = function(c) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(c, "__esModule", {
                value: !0
            })
        }
        ,
        e.t = function(c, a) {
            if (1 & a && (c = e(c)),
            8 & a)
                return c;
            if (4 & a && "object" == typeof c && c && c.__esModule)
                return c;
            var r = Object.create(null);
            if (e.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: c
            }),
            2 & a && "string" != typeof c)
                for (var i in c)
                    e.d(r, i, function(e) {
                        return c[e]
                    }
                    .bind(null, i));
            return r
        }
        ,
        e.n = function(c) {
            var a = c && c.__esModule ? function() {
                return c.default
            }
            : function() {
                return c
            }
            ;
            return e.d(a, "a", a),
            a
        }
        ,
        e.o = function(c, e) {
            return Object.prototype.hasOwnProperty.call(c, e)
        }
        ,
        e.p = "",
        e(e.s = 4)
    }([function(c, e, a) {
        "use strict";
        a.r(e),
        a.d(e, "EU_ERROR_NONE", function() {
            return r
        }),
        a.d(e, "EU_ERROR_UNKNOWN", function() {
            return i
        }),
        a.d(e, "EU_ERROR_NOT_SUPPORTED", function() {
            return t
        }),
        a.d(e, "EU_ERROR_NOT_INITIALIZED", function() {
            return n
        }),
        a.d(e, "EU_ERROR_BAD_PARAMETER", function() {
            return b
        }),
        a.d(e, "EU_ERROR_LIBRARY_LOAD", function() {
            return f
        }),
        a.d(e, "EU_ERROR_READ_SETTINGS", function() {
            return d
        }),
        a.d(e, "EU_ERROR_TRANSMIT_REQUEST", function() {
            return u
        }),
        a.d(e, "EU_ERROR_MEMORY_ALLOCATION", function() {
            return o
        }),
        a.d(e, "EU_WARNING_END_OF_ENUM", function() {
            return l
        }),
        a.d(e, "EU_ERROR_PROXY_NOT_AUTHORIZED", function() {
            return h
        }),
        a.d(e, "EU_ERROR_NO_GUI_DIALOGS", function() {
            return s
        }),
        a.d(e, "EU_ERROR_DOWNLOAD_FILE", function() {
            return g
        }),
        a.d(e, "EU_ERROR_WRITE_SETTINGS", function() {
            return k
        }),
        a.d(e, "EU_ERROR_CANCELED_BY_GUI", function() {
            return j
        }),
        a.d(e, "EU_ERROR_OFFLINE_MODE", function() {
            return p
        }),
        a.d(e, "EU_ERROR_KEY_MEDIAS_FAILED", function() {
            return m
        }),
        a.d(e, "EU_ERROR_KEY_MEDIAS_ACCESS_FAILED", function() {
            return v
        }),
        a.d(e, "EU_ERROR_KEY_MEDIAS_READ_FAILED", function() {
            return E
        }),
        a.d(e, "EU_ERROR_KEY_MEDIAS_WRITE_FAILED", function() {
            return _
        }),
        a.d(e, "EU_WARNING_KEY_MEDIAS_READ_ONLY", function() {
            return w
        }),
        a.d(e, "EU_ERROR_KEY_MEDIAS_DELETE", function() {
            return y
        }),
        a.d(e, "EU_ERROR_KEY_MEDIAS_CLEAR", function() {
            return L
        }),
        a.d(e, "EU_ERROR_BAD_PRIVATE_KEY", function() {
            return S
        }),
        a.d(e, "EU_ERROR_PKI_FORMATS_FAILED", function() {
            return A
        }),
        a.d(e, "EU_ERROR_CSP_FAILED", function() {
            return O
        }),
        a.d(e, "EU_ERROR_BAD_SIGNATURE", function() {
            return C
        }),
        a.d(e, "EU_ERROR_AUTH_FAILED", function() {
            return R
        }),
        a.d(e, "EU_ERROR_NOT_RECEIVER", function() {
            return q
        }),
        a.d(e, "EU_ERROR_STORAGE_FAILED", function() {
            return I
        }),
        a.d(e, "EU_ERROR_BAD_CERT", function() {
            return P
        }),
        a.d(e, "EU_ERROR_CERT_NOT_FOUND", function() {
            return T
        }),
        a.d(e, "EU_ERROR_INVALID_CERT_TIME", function() {
            return x
        }),
        a.d(e, "EU_ERROR_CERT_IN_CRL", function() {
            return U
        }),
        a.d(e, "EU_ERROR_BAD_CRL", function() {
            return N
        }),
        a.d(e, "EU_ERROR_NO_VALID_CRLS", function() {
            return D
        }),
        a.d(e, "EU_ERROR_GET_TIME_STAMP", function() {
            return B
        }),
        a.d(e, "EU_ERROR_BAD_TSP_RESPONSE", function() {
            return F
        }),
        a.d(e, "EU_ERROR_TSP_SERVER_CERT_NOT_FOUND", function() {
            return G
        }),
        a.d(e, "EU_ERROR_TSP_SERVER_CERT_INVALID", function() {
            return M
        }),
        a.d(e, "EU_ERROR_GET_OCSP_STATUS", function() {
            return Q
        }),
        a.d(e, "EU_ERROR_BAD_OCSP_RESPONSE", function() {
            return J
        }),
        a.d(e, "EU_ERROR_CERT_BAD_BY_OCSP", function() {
            return z
        }),
        a.d(e, "EU_ERROR_OCSP_SERVER_CERT_NOT_FOUND", function() {
            return K
        }),
        a.d(e, "EU_ERROR_OCSP_SERVER_CERT_INVALID", function() {
            return H
        }),
        a.d(e, "EU_ERROR_LDAP_ERROR", function() {
            return V
        }),
        a.d(e, "EndUserError", function() {
            return Y
        });
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
          , h = 8
          , s = 9
          , g = 10
          , k = 11
          , j = 12
          , p = 13
          , m = 17
          , v = 18
          , E = 19
          , _ = 20
          , w = 21
          , y = 22
          , L = 23
          , S = 24
          , A = 33
          , O = 34
          , C = 35
          , R = 36
          , q = 37
          , I = 49
          , P = 50
          , T = 51
          , x = 52
          , U = 53
          , N = 54
          , D = 55
          , B = 65
          , F = 66
          , G = 67
          , M = 68
          , Q = 81
          , J = 82
          , z = 83
          , K = 84
          , H = 85
          , V = 97
          , Y = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return n
        });
        var r = a(7)
          , i = a(6)
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
        a.d(e, "EU_LIBRARY_TYPE_JS", function() {
            return i
        }),
        a.d(e, "EU_LIBRARY_TYPE_SW", function() {
            return t
        }),
        a.d(e, "EU_LIBRARY_TYPE_MS", function() {
            return n
        }),
        a.d(e, "EndUserLibraryType", function() {
            return r
        }),
        a.d(e, "EU_SUBJECT_TYPE_UNDIFFERENCED", function() {
            return f
        }),
        a.d(e, "EU_SUBJECT_TYPE_CA", function() {
            return d
        }),
        a.d(e, "EU_SUBJECT_TYPE_CA_SERVER", function() {
            return u
        }),
        a.d(e, "EU_SUBJECT_TYPE_RA_ADMINISTRATOR", function() {
            return o
        }),
        a.d(e, "EU_SUBJECT_TYPE_END_USER", function() {
            return l
        }),
        a.d(e, "EndUserSubjectType", function() {
            return b
        }),
        a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED", function() {
            return s
        }),
        a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP", function() {
            return g
        }),
        a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP", function() {
            return k
        }),
        a.d(e, "EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP", function() {
            return j
        }),
        a.d(e, "EndUserSubjectCAServerSubType", function() {
            return h
        }),
        a.d(e, "EU_CERT_KEY_TYPE_UNKNOWN", function() {
            return m
        }),
        a.d(e, "EU_CERT_KEY_TYPE_DSTU4145", function() {
            return v
        }),
        a.d(e, "EU_CERT_KEY_TYPE_RSA", function() {
            return E
        }),
        a.d(e, "EU_CERT_KEY_TYPE_ECDSA", function() {
            return _
        }),
        a.d(e, "EndUserCertKeyType", function() {
            return p
        }),
        a.d(e, "EU_KEY_USAGE_UNKNOWN", function() {
            return y
        }),
        a.d(e, "EU_KEY_USAGE_DIGITAL_SIGNATURE", function() {
            return L
        }),
        a.d(e, "EU_KEY_USAGE_KEY_AGREEMENT", function() {
            return S
        }),
        a.d(e, "EndUserKeyUsage", function() {
            return w
        }),
        a.d(e, "EU_CCS_TYPE_REVOKE", function() {
            return O
        }),
        a.d(e, "EU_CCS_TYPE_HOLD", function() {
            return C
        }),
        a.d(e, "EndUserCCSType", function() {
            return A
        }),
        a.d(e, "EU_REVOCATION_REASON_UNKNOWN", function() {
            return q
        }),
        a.d(e, "EU_REVOCATION_REASON_KEY_COMPROMISE", function() {
            return I
        }),
        a.d(e, "EU_REVOCATION_REASON_NEW_ISSUED", function() {
            return P
        }),
        a.d(e, "EndUserRevocationReason", function() {
            return R
        }),
        a.d(e, "EU_KEYS_TYPE_NONE", function() {
            return x
        }),
        a.d(e, "EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST", function() {
            return U
        }),
        a.d(e, "EU_KEYS_TYPE_RSA_WITH_SHA", function() {
            return N
        }),
        a.d(e, "EndUserKeysType", function() {
            return T
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_UA_191", function() {
            return B
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_UA_257", function() {
            return F
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_UA_307", function() {
            return G
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_UA_FILE", function() {
            return M
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_UA_CERT", function() {
            return Q
        }),
        a.d(e, "EndUserKeysLengthDSUA", function() {
            return D
        }),
        a.d(e, "EU_KEYS_LENGTH_KEP_UA_257", function() {
            return z
        }),
        a.d(e, "EU_KEYS_LENGTH_KEP_UA_431", function() {
            return K
        }),
        a.d(e, "EU_KEYS_LENGTH_KEP_UA_571", function() {
            return H
        }),
        a.d(e, "EU_KEYS_LENGTH_KEP_UA_FILE", function() {
            return V
        }),
        a.d(e, "EU_KEYS_LENGTH_KEP_UA_CERT", function() {
            return Y
        }),
        a.d(e, "EndUserKeysLengthKEPUA", function() {
            return J
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_RSA_1024", function() {
            return X
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_RSA_2048", function() {
            return $
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_RSA_3072", function() {
            return Z
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_RSA_4096", function() {
            return cc
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_RSA_FILE", function() {
            return ec
        }),
        a.d(e, "EU_KEYS_LENGTH_DS_RSA_CERT", function() {
            return ac
        }),
        a.d(e, "EndUserKeysLengthDSRSA", function() {
            return W
        }),
        a.d(e, "EU_KEYS_REQUEST_TYPE_UA_DS", function() {
            return ic
        }),
        a.d(e, "EU_KEYS_REQUEST_TYPE_UA_KEP", function() {
            return tc
        }),
        a.d(e, "EU_KEYS_REQUEST_TYPE_INT_RSA", function() {
            return nc
        }),
        a.d(e, "EndUserRequestTypes", function() {
            return rc
        }),
        a.d(e, "EU_MOBILE_OPERATOR_ID_KYIVSTAR", function() {
            return fc
        }),
        a.d(e, "EU_MOBILE_OPERATOR_ID_VODAFONE", function() {
            return dc
        }),
        a.d(e, "EU_MOBILE_OPERATOR_ID_LIFECELL", function() {
            return uc
        }),
        a.d(e, "EndUserMobileOperatorID", function() {
            return bc
        }),
        a.d(e, "EU_KSP_IIT", function() {
            return lc
        }),
        a.d(e, "EU_KSP_UKEY", function() {
            return hc
        }),
        a.d(e, "EndUserKSP", function() {
            return oc
        }),
        a.d(e, "EU_SIGN_TYPE_UNKNOWN", function() {
            return gc
        }),
        a.d(e, "EU_SIGN_TYPE_CADES_BES", function() {
            return kc
        }),
        a.d(e, "EU_SIGN_TYPE_CADES_T", function() {
            return jc
        }),
        a.d(e, "EU_SIGN_TYPE_CADES_C", function() {
            return pc
        }),
        a.d(e, "EU_SIGN_TYPE_CADES_X_LONG", function() {
            return mc
        }),
        a.d(e, "EndUserSignType", function() {
            return sc
        }),
        a.d(e, "EU_CTX_SIGN_UNKNOWN", function() {
            return Ec
        }),
        a.d(e, "EU_CTX_SIGN_DSTU4145_WITH_GOST34311", function() {
            return _c
        }),
        a.d(e, "EU_CTX_SIGN_RSA_WITH_SHA", function() {
            return wc
        }),
        a.d(e, "EU_CTX_SIGN_ECDSA_WITH_SHA", function() {
            return yc
        }),
        a.d(e, "EndUserSignAlgo", function() {
            return vc
        }),
        a.d(e, "EU_SIGN_TYPE_PARAMETER", function() {
            return Sc
        }),
        a.d(e, "EU_UA_OID_EXT_KEY_USAGE_STAMP", function() {
            return Ac
        }),
        a.d(e, "EU_USER_INFO_VERSION", function() {
            return Oc
        }),
        a.d(e, "EndUserCMPCompatibility", function() {
            return Lc
        }),
        a.d(e, "EU_CTX_HASH_ALGO_UNKNOWN", function() {
            return Rc
        }),
        a.d(e, "EU_CTX_HASH_ALGO_GOST34311", function() {
            return qc
        }),
        a.d(e, "EU_CTX_HASH_ALGO_SHA160", function() {
            return Ic
        }),
        a.d(e, "EU_CTX_HASH_ALGO_SHA224", function() {
            return Pc
        }),
        a.d(e, "EU_CTX_HASH_ALGO_SHA256", function() {
            return Tc
        }),
        a.d(e, "EndUserHashAlgo", function() {
            return Cc
        });
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
        var h, s = 0, g = 1, k = 2, j = 3;
        !function(c) {
            c[c.Undifferenced = s] = "Undifferenced",
            c[c.CMP = g] = "CMP",
            c[c.TSP = k] = "TSP",
            c[c.OCSP = j] = "OCSP"
        }(h || (h = {}));
        var p, m = 0, v = 1, E = 2, _ = 4;
        !function(c) {
            c[c.Unknown = m] = "Unknown",
            c[c.DSTU4145 = v] = "DSTU4145",
            c[c.RSA = E] = "RSA",
            c[c.ECDSA = _] = "ECDSA"
        }(p || (p = {}));
        var w, y = 0, L = 1, S = 16;
        !function(c) {
            c[c.Unknown = m] = "Unknown",
            c[c.DigitalSignature = L] = "DigitalSignature",
            c[c.KeyAgreement = S] = "KeyAgreement"
        }(w || (w = {}));
        var A, O = 1, C = 2;
        !function(c) {
            c[c.Revoke = O] = "Revoke",
            c[c.Hold = C] = "Hold"
        }(A || (A = {}));
        var R, q = 0, I = 1, P = 2;
        !function(c) {
            c[c.Unknown = q] = "Unknown",
            c[c.KeyCompromise = I] = "KeyCompromise",
            c[c.NewIssued = P] = "NewIssued"
        }(R || (R = {}));
        var T, x = 0, U = 1, N = 2;
        !function(c) {
            c[c.None = x] = "None",
            c[c.DSTUAndECDHWithGOST = U] = "DSTUAndECDHWithGOST",
            c[c.RSAWithSHA = N] = "RSAWithSHA"
        }(T || (T = {}));
        var D, B = 1, F = 2, G = 3, M = 4, Q = 5;
        !function(c) {
            c[c.EC_191 = B] = "EC_191",
            c[c.EC_257 = F] = "EC_257",
            c[c.EC_307 = G] = "EC_307",
            c[c.File = M] = "File",
            c[c.Cert = Q] = "Cert"
        }(D || (D = {}));
        var J, z = 1, K = 2, H = 3, V = 4, Y = 5;
        !function(c) {
            c[c.EC_257 = z] = "EC_257",
            c[c.EC_431 = K] = "EC_431",
            c[c.EC_571 = H] = "EC_571",
            c[c.File = M] = "File",
            c[c.Cert = Q] = "Cert"
        }(J || (J = {}));
        var W, X = 1, $ = 2, Z = 3, cc = 4, ec = 5, ac = 6;
        !function(c) {
            c[c.N_1024 = X] = "N_1024",
            c[c.N_2048 = $] = "N_2048",
            c[c.N_3072 = Z] = "N_3072",
            c[c.N_4096 = cc] = "N_4096",
            c[c.File = M] = "File",
            c[c.Cert = Q] = "Cert"
        }(W || (W = {}));
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
        var oc, lc = 4, hc = 5;
        !function(c) {
            c[c.Kyivstar = fc] = "Kyivstar",
            c[c.Vodafone = dc] = "Vodafone",
            c[c.Lifecell = uc] = "Lifecell",
            c[c.IIT = lc] = "IIT",
            c[c.UKey = hc] = "UKey"
        }(oc || (oc = {}));
        var sc, gc = 0, kc = 1, jc = 4, pc = 8, mc = 16;
        !function(c) {
            c[c.Unknown = gc] = "Unknown",
            c[c.CAdES_BES = kc] = "CAdES_BES",
            c[c.CAdES_T = jc] = "CAdES_T",
            c[c.CAdES_C = pc] = "CAdES_C",
            c[c.CAdES_X_Long = mc] = "CAdES_X_Long"
        }(sc || (sc = {}));
        var vc, Ec = 0, _c = 1, wc = 2, yc = 3;
        !function(c) {
            c[c.Unknown = Ec] = "Unknown",
            c[c.DSTU4145WithGOST34311 = _c] = "DSTU4145WithGOST34311",
            c[c.RSAWithSHA = wc] = "RSAWithSHA",
            c[c.ECDSAWithSHA = yc] = "ECDSAWithSHA"
        }(vc || (vc = {}));
        var Lc, Sc = "SignType", Ac = "1.2.804.2.1.1.1.3.9", Oc = 3;
        !function(c) {
            c[c.None = 0] = "None",
            c[c.DownloadEUCerts = 1] = "DownloadEUCerts",
            c[c.SearchEUCerts = 2] = "SearchEUCerts"
        }(Lc || (Lc = {}));
        var Cc, Rc = 0, qc = 1, Ic = 2, Pc = 3, Tc = 4;
        !function(c) {
            c[c.Unknown = Rc] = "Unknown",
            c[c.GOST34311 = qc] = "GOST34311",
            c[c.SHA160 = Ic] = "SHA160",
            c[c.SHA224 = Pc] = "SHA224",
            c[c.SHA256 = Tc] = "SHA256"
        }(Cc || (Cc = {}))
    }
    , function(c, e, a) {
        var r, i;
        void 0 === (i = "function" == typeof (r = function() {
            function c(c) {
                return null != c && "object" == typeof c && ("EndUserTransferableObject" == c.className || "EndUserTransferableObject" == c.parentClassName)
            }
            function e(c, e) {
                this.errorCode = c,
                this.message = e,
                this.toString = function() {
                    return this.message + " (" + this.errorCode + ")"
                }
                ,
                this.GetErrorCode = function() {
                    return this.errorCode
                }
                ,
                this.GetMessage = function() {
                    return this.message
                }
            }
            var a = function() {
                this.vendor = "JSC IIT",
                this.classVersion = 1,
                this.className = "EndUserUTF8Coder"
            };
            a.prototype.encode = function(c) {
                for (var e = [], a = 0, r = 0; r < c.length; r++) {
                    var i = c.charCodeAt(r);
                    i < 128 ? e[a++] = i : i < 2048 ? (e[a++] = i >> 6 | 192,
                    e[a++] = 63 & i | 128) : (e[a++] = i >> 12 | 224,
                    e[a++] = i >> 6 & 63 | 128,
                    e[a++] = 63 & i | 128)
                }
                return e
            }
            ,
            a.prototype.decode = function(c) {
                for (var e, a, r, i = [], t = 0, n = 0; t < c.length; )
                    (e = c[t++]) < 128 ? i[n++] = String.fromCharCode(e) : e > 191 && e < 224 ? (a = c[t++],
                    i[n++] = String.fromCharCode((31 & e) << 6 | 63 & a)) : (a = c[t++],
                    r = c[t++],
                    i[n++] = String.fromCharCode((15 & e) << 12 | (63 & a) << 6 | 63 & r));
                return i.join("")
            }
            ;
            var r = function() {
                this.vendor = "JSC IIT",
                this.classVersion = 1,
                this.className = "EndUserUTF16LECoder"
            };
            r.prototype.encode = function(c) {
                for (var e, a = [], r = 0; r < c.length; r++)
                    e = c.charCodeAt(r),
                    a.push(255 & e),
                    a.push((65280 & e) >> 8);
                return a
            }
            ,
            r.prototype.decode = function(c) {
                var e, a = 0, r = "";
                if (c.length % 2 != 0)
                    return null;
                for ((e = c.length) > 0 && 0 == c[e - 2] && 0 == c[e - 1] && (e -= 2); a < e; )
                    r += String.fromCharCode(c[a] | c[a + 1] << 8),
                    a += 2;
                return r
            }
            ;
            var i = function() {
                this.vendor = "JSC IIT",
                this.classVersion = 1,
                this.className = "EndUserCP1251Coder",
                this.m_cp1251_table = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    10: 10,
                    11: 11,
                    12: 12,
                    13: 13,
                    14: 14,
                    15: 15,
                    16: 16,
                    17: 17,
                    18: 18,
                    19: 19,
                    20: 20,
                    21: 21,
                    22: 22,
                    23: 23,
                    24: 24,
                    25: 25,
                    26: 26,
                    27: 27,
                    28: 28,
                    29: 29,
                    30: 30,
                    31: 31,
                    32: 32,
                    33: 33,
                    34: 34,
                    35: 35,
                    36: 36,
                    37: 37,
                    38: 38,
                    39: 39,
                    40: 40,
                    41: 41,
                    42: 42,
                    43: 43,
                    44: 44,
                    45: 45,
                    46: 46,
                    47: 47,
                    48: 48,
                    49: 49,
                    50: 50,
                    51: 51,
                    52: 52,
                    53: 53,
                    54: 54,
                    55: 55,
                    56: 56,
                    57: 57,
                    58: 58,
                    59: 59,
                    60: 60,
                    61: 61,
                    62: 62,
                    63: 63,
                    64: 64,
                    65: 65,
                    66: 66,
                    67: 67,
                    68: 68,
                    69: 69,
                    70: 70,
                    71: 71,
                    72: 72,
                    73: 73,
                    74: 74,
                    75: 75,
                    76: 76,
                    77: 77,
                    78: 78,
                    79: 79,
                    80: 80,
                    81: 81,
                    82: 82,
                    83: 83,
                    84: 84,
                    85: 85,
                    86: 86,
                    87: 87,
                    88: 88,
                    89: 89,
                    90: 90,
                    91: 91,
                    92: 92,
                    93: 93,
                    94: 94,
                    95: 95,
                    96: 96,
                    97: 97,
                    98: 98,
                    99: 99,
                    100: 100,
                    101: 101,
                    102: 102,
                    103: 103,
                    104: 104,
                    105: 105,
                    106: 106,
                    107: 107,
                    108: 108,
                    109: 109,
                    110: 110,
                    111: 111,
                    112: 112,
                    113: 113,
                    114: 114,
                    115: 115,
                    116: 116,
                    117: 117,
                    118: 118,
                    119: 119,
                    120: 120,
                    121: 121,
                    122: 122,
                    123: 123,
                    124: 124,
                    125: 125,
                    126: 126,
                    127: 127,
                    1027: 129,
                    8225: 135,
                    1046: 198,
                    8222: 132,
                    1047: 199,
                    1168: 165,
                    1048: 200,
                    1113: 154,
                    1049: 201,
                    1045: 197,
                    1050: 202,
                    1028: 170,
                    160: 160,
                    1040: 192,
                    1051: 203,
                    164: 164,
                    166: 166,
                    167: 167,
                    169: 169,
                    171: 171,
                    172: 172,
                    173: 173,
                    174: 174,
                    1053: 205,
                    176: 176,
                    177: 177,
                    1114: 156,
                    181: 181,
                    182: 182,
                    183: 183,
                    8221: 148,
                    187: 187,
                    1029: 189,
                    1056: 208,
                    1057: 209,
                    1058: 210,
                    8364: 136,
                    1112: 188,
                    1115: 158,
                    1059: 211,
                    1060: 212,
                    1030: 178,
                    1061: 213,
                    1062: 214,
                    1063: 215,
                    1116: 157,
                    1064: 216,
                    1065: 217,
                    1031: 175,
                    1066: 218,
                    1067: 219,
                    1068: 220,
                    1069: 221,
                    1070: 222,
                    1032: 163,
                    8226: 149,
                    1071: 223,
                    1072: 224,
                    8482: 153,
                    1073: 225,
                    8240: 137,
                    1118: 162,
                    1074: 226,
                    1110: 179,
                    8230: 133,
                    1075: 227,
                    1033: 138,
                    1076: 228,
                    1077: 229,
                    8211: 150,
                    1078: 230,
                    1119: 159,
                    1079: 231,
                    1042: 194,
                    1080: 232,
                    1034: 140,
                    1025: 168,
                    1081: 233,
                    1082: 234,
                    8212: 151,
                    1083: 235,
                    1169: 180,
                    1084: 236,
                    1052: 204,
                    1085: 237,
                    1035: 142,
                    1086: 238,
                    1087: 239,
                    1088: 240,
                    1089: 241,
                    1090: 242,
                    1036: 141,
                    1041: 193,
                    1091: 243,
                    1092: 244,
                    8224: 134,
                    1093: 245,
                    8470: 185,
                    1094: 246,
                    1054: 206,
                    1095: 247,
                    1096: 248,
                    8249: 139,
                    1097: 249,
                    1098: 250,
                    1044: 196,
                    1099: 251,
                    1111: 191,
                    1055: 207,
                    1100: 252,
                    1038: 161,
                    8220: 147,
                    1101: 253,
                    8250: 155,
                    1102: 254,
                    8216: 145,
                    1103: 255,
                    1043: 195,
                    1105: 184,
                    1039: 143,
                    1026: 128,
                    1106: 144,
                    8218: 130,
                    1107: 131,
                    8217: 146,
                    1108: 186,
                    1109: 190
                },
                this.m_ut8_table = unescape("%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457")
            };
            i.prototype.encode = function(c) {
                for (var e = [], a = 0; a < c.length; a++) {
                    var r = c.charCodeAt(a);
                    if (!(r in this.m_cp1251_table))
                        throw "Character " + c.charAt(a) + " isn't supported by win1251!";
                    e.push(this.m_cp1251_table[r])
                }
                return e
            }
            ,
            i.prototype.decode = function(c) {
                for (var e, a = "", r = 0; r < c.length; r++)
                    a += (e = c[r]) >= 192 && e <= 255 ? String.fromCharCode(e - 192 + 1040) : e >= 128 && e <= 191 ? this.m_ut8_table.charAt(e - 128) : String.fromCharCode(e);
                return a
            }
            ;
            var t = {
                GetCoder: function(c) {
                    switch (c = c.toUpperCase()) {
                    case "UTF-8":
                        return new a;
                    case "UTF-16LE":
                        return new r;
                    case "windows-1251":
                        return new i;
                    default:
                        return null
                    }
                },
                ArrayToString: function(c, a) {
                    var r, i;
                    if (void 0 === c && (c = "UTF-8"),
                    null == (r = t.GetCoder(c)))
                        throw new e(i = X.ERROR_BAD_PARAMETER,X.getErrorDescriptionEx(i, 0));
                    return r.decode(a)
                }
            }
              , n = function() {
                this.vendor = "JSC IIT",
                this.classVersion = 1,
                this.className = "EndUserDateCoder",
                this.dateDelimeter = ".",
                this.timeDelimeter = ":",
                this.dateTimeDelimeter = " ",
                this.format = "dd.MM.yyyy HH:mm:ss"
            };
            n.prototype.encode = function(c) {
                var e = c.getDate()
                  , a = c.getMonth() + 1
                  , r = c.getFullYear()
                  , i = c.getHours()
                  , t = c.getMinutes()
                  , n = c.getSeconds();
                return e + this.dateDelimeter + a + this.dateDelimeter + r + this.dateTimeDelimeter + i + this.timeDelimeter + t + this.timeDelimeter + n
            }
            ,
            n.prototype.decode = function(c) {
                try {
                    var e = c.split(this.dateTimeDelimeter)
                      , a = e[0].split(this.dateDelimeter)
                      , r = e[1].split(this.timeDelimeter)
                      , i = parseInt(a[0])
                      , t = parseInt(a[1]) - 1
                      , n = parseInt(a[2]);
                    if (i < 0 || i > 31 || t < 0 || t > 12 || n < 0)
                        return null;
                    var b = parseInt(r[0])
                      , f = parseInt(r[1])
                      , d = parseInt(r[2]);
                    if (b < 0 || b > 23 || f < 0 || f > 59 || d < 0 || d > 59)
                        return null;
                    var u = new Date;
                    return u.setDate(i),
                    u.setMonth(t),
                    u.setFullYear(n),
                    u.setHours(b),
                    u.setMinutes(f),
                    u.setSeconds(d),
                    u
                } catch (c) {
                    return null
                }
            }
            ;
            var b = function() {
                this.vendor = "JSC IIT",
                this.classVersion = 1,
                this.className = "EndUserBase64Coder",
                this.m_map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                this.m_codes = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]
            };
            b.prototype._getTextDecoder = function() {
                try {
                    if ("undefined" == typeof TextDecoder)
                        return null;
                    var c = new TextDecoder("utf-8");
                    return "utf-8" != c.encoding ? null : c
                } catch (c) {
                    return null
                }
            }
            ,
            b.prototype._encodePart = function(c, e, a) {
                for (var r, i, t = [], n = e; n < a; n += 3)
                    r = c[n] << 16 | c[n + 1] << 8 | c[n + 2],
                    i = this.m_map[r >> 18 & 63] + this.m_map[r >> 12 & 63] + this.m_map[r >> 6 & 63] + this.m_map[63 & r],
                    t.push(i);
                return t.join("")
            }
            ,
            b.prototype.encode = function(c) {
                var e, a, r, i, t, n, b = "";
                if (0 == (t = (e = "undefined" == typeof Uint8Array ? void 0 === s ? c.slice(0) : new s(c) : new Uint8Array(c)).length))
                    return "";
                var f = this._getTextDecoder();
                if (null != f) {
                    for (n = new Uint8Array(4 * parseInt((t + 2) / 3)),
                    a = 0,
                    r = 0; a < t - t % 3; a += 3,
                    r += 4)
                        i = e[a] << 16 | e[a + 1] << 8 | e[a + 2],
                        n[r] = this.m_codes[i >> 18 & 63],
                        n[r + 1] = this.m_codes[i >> 12 & 63],
                        n[r + 2] = this.m_codes[i >> 6 & 63],
                        n[r + 3] = this.m_codes[63 & i];
                    switch (t % 3) {
                    case 1:
                        i = e[a] << 16,
                        n[r] = this.m_codes[i >> 18 & 63],
                        n[r + 1] = this.m_codes[i >> 12 & 63],
                        n[r + 2] = 61,
                        n[r + 3] = 61;
                        break;
                    case 2:
                        i = e[a] << 16 | e[a + 1] << 8,
                        n[r] = this.m_codes[i >> 18 & 63],
                        n[r + 1] = this.m_codes[i >> 12 & 63],
                        n[r + 2] = this.m_codes[i >> 6 & 63],
                        n[r + 3] = 61
                    }
                    b = f.decode(n)
                } else {
                    var d, u = null, o = t - t % 3, l = parseInt(o / 15360);
                    for (n = [],
                    a = 0; a < l; a++)
                        u = this._encodePart(e, 15360 * a, 15360 * a + 15360),
                        n.push(u);
                    switch (15360 * l < o && (u = this._encodePart(e, 15360 * a, o),
                    n.push(u)),
                    t % 3) {
                    case 1:
                        i = e[t - 1] << 16,
                        d = this.m_map[i >> 18 & 63],
                        d += this.m_map[i >> 12 & 63],
                        d += "=",
                        d += "=",
                        n.push(d);
                        break;
                    case 2:
                        i = e[t - 2] << 16 | e[t - 1] << 8,
                        d = this.m_map[i >> 18 & 63],
                        d += this.m_map[i >> 12 & 63],
                        d += this.m_map[i >> 6 & 63],
                        d += "=",
                        n.push(d)
                    }
                    b = n.join("")
                }
                return b
            }
            ,
            b.prototype.decode = function(c) {
                var e, a, r, i, t, n, b, f, d, u, o;
                if ("" == c || (3 & c.length) > 0)
                    return "undefined" == typeof Uint8Array ? void 0 === s ? [] : new s(0) : new Uint8Array(0);
                for (a = (n = c.length) / 4 * 3 - (b = "=" == c[n - 1] ? "=" == c[n - 2] ? 2 : 1 : 0),
                e = "undefined" == typeof Uint8Array ? void 0 === s ? [] : new s(a) : new Uint8Array(a),
                r = 0,
                i = 0,
                t = 0; r < Math.floor((n - b) / 4); r++)
                    f = this.m_map.indexOf(c[i++]),
                    d = this.m_map.indexOf(c[i++]),
                    u = this.m_map.indexOf(c[i++]),
                    o = this.m_map.indexOf(c[i++]),
                    e[t++] = f << 2 | d >> 4,
                    e[t++] = (15 & d) << 4 | u >> 2,
                    e[t++] = (3 & u) << 6 | 63 & o;
                switch (b) {
                case 2:
                    f = this.m_map.indexOf(c[i]),
                    d = this.m_map.indexOf(c[i + 1]),
                    e[t++] = f << 2 | d >> 4;
                    break;
                case 1:
                    f = this.m_map.indexOf(c[i]),
                    d = this.m_map.indexOf(c[i + 1]),
                    u = this.m_map.indexOf(c[i + 2]),
                    e[t++] = f << 2 | d >> 4,
                    e[t++] = (15 & d) << 4 | u >> 2
                }
                return e
            }
            ;
            var f = function() {
                var c = this._getBrowserInfo();
                this.m_name = c.name,
                this.m_version = c.version,
                this.m_arch = this._getArch(),
                this.m_os_name = this._getOSName()
            };
            f.BROWSER_NAME_IE = "IE",
            f.BROWSER_NAME_OPERA = "Opera",
            f.BROWSER_NAME_CHROME = "Chrome",
            f.BROWSER_NAME_FIREFOX = "Firefox",
            f.BROWSER_NAME_SAFARI = "Safari",
            f.BROWSER_NAME_EDGE = "Edge",
            f.BROWSER_NAME_UNKNOWN = "Unknown",
            f.OS_NAME_WINDOWS = "Windows",
            f.OS_NAME_LINUX = "Linux",
            f.OS_NAME_UNIX = "Unix",
            f.OS_NAME_MAC = "Mac OS X",
            f.OS_NAME_ANDROID = "Android",
            f.OS_NAME_UNKNOWN = "Unknown",
            f.BROWSER_ARCH_NAME_X86 = "x86",
            f.BROWSER_ARCH_NAME_X64 = "x64",
            f.BROWSER_ARCH_NAME_ARM = "arm",
            f.BROWSER_ARCH_NAME_UNKNOWN = "Unknown",
            f.prototype._getBrowserInfo = function() {
                var c, e = {
                    name: f.BROWSER_NAME_UNKNOWN,
                    version: ""
                }, a = navigator.userAgent, r = a.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                return /msie/i.test(r[1]) || /trident/i.test(r[1]) ? (e.name = f.BROWSER_NAME_IE,
                /msie/i.test(r[1]) ? e.version = parseInt(r[2]) : (c = /\brv[ :]+(\d+)/g.exec(a) || [],
                e.version = parseInt(c[1])),
                e) : "Chrome" === r[1] && null != (c = a.match(/\b(OPR|Edge)\/(\d+)/)) ? (e.name = c[1].replace("OPR", f.BROWSER_NAME_OPERA),
                e.version = parseInt(c[2]),
                e) : (r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"],
                null != (c = a.match(/version\/(\d+)/i)) && r.splice(1, 1, c[1]),
                e.name = r[0],
                e.version = parseInt(r[1]),
                e)
            }
            ,
            f.prototype._getOSName = function() {
                var c = navigator.platform || ""
                  , e = (navigator.userAgent || "").toLowerCase();
                return -1 != c.indexOf("Win") ? f.OS_NAME_WINDOWS : -1 != c.indexOf("Mac") ? f.OS_NAME_MAC : -1 != c.indexOf("Android") || -1 != e.indexOf("android") ? f.OS_NAME_ANDROID : -1 != c.indexOf("Linux") ? f.OS_NAME_LINUX : -1 != c.indexOf("FreeBSD") ? f.OS_NAME_UNIX : f.OS_NAME_UNKNOWN
            }
            ,
            f.prototype._getArch = function() {
                var c, e = navigator.platform || "";
                switch (this._getOSName()) {
                case f.OS_NAME_WINDOWS:
                    c = -1 != e.indexOf("Win32") ? f.BROWSER_ARCH_NAME_X86 : f.BROWSER_ARCH_NAME_X64;
                    break;
                case f.OS_NAME_MAC:
                    c = -1 != e.indexOf("MacIntel") ? f.BROWSER_ARCH_NAME_X86 : f.BROWSER_ARCH_NAME_X64;
                    break;
                case f.OS_NAME_UNIX:
                case f.OS_NAME_LINUX:
                case f.OS_NAME_ANDROID:
                    c = -1 != e.indexOf("armv") ? f.BROWSER_ARCH_NAME_ARM : -1 != e.indexOf("x86_64") ? f.BROWSER_ARCH_NAME_X64 : f.BROWSER_ARCH_NAME_X32;
                    break;
                default:
                    c = f.BROWSER_ARCH_NAME_UNKNOWN
                }
                return c
            }
            ,
            f.prototype.GetName = function() {
                return this.m_name
            }
            ,
            f.prototype.GetVersion = function() {
                return this.m_version
            }
            ,
            f.prototype.GetArch = function() {
                return this.m_arch
            }
            ,
            f.prototype.GetOSName = function() {
                return this.m_os_name
            }
            ;
            var d = [];
            d[0] = "Executed successfully",
            d[-1] = "Unknown error",
            d[-32300] = "Transport error",
            d[-32400] = "System error",
            d[-32500] = "Application error",
            d[-32510] = "Application error. Invalid session",
            d[-32600] = "Server error. Invalid rpc. Not conforming to spec",
            d[-32601] = "Server error. Requested method not found",
            d[-32602] = "Server error. Invalid method parameters",
            d[-32603] = "Server error. Internal rpc error",
            d[-32700] = "Parse error. Not well formed",
            d[-32701] = "Parse error. Unsupported encoding",
            d[-32702] = "Parse error. Invalid character for encoding";
            var u = function(c, e, a, r) {
                switch (this.Vendor = "JSC IIT",
                this.ClassVersion = "1.0.2",
                this.ClassName = "JSONRPCClient",
                this.m_type = c,
                this.m_log = !1,
                this._logFunction("Initialize", arguments, ["type", "address", "port", "useHttps"]),
                c) {
                case 2:
                    this.m_uri = e,
                    this.m_callbacks = [],
                    this._registerOnExtensionRecieveEventHandler();
                    break;
                case 3:
                case 4:
                    this.m_uri = e,
                    this.m_callbacks = [];
                    break;
                case 1:
                default:
                    this.m_uri = "",
                    r && e.indexOf("https://") ? this.m_uri += "https://" : 0 != e.indexOf("http://") && (this.m_uri += "http://"),
                    this.m_uri += e + ":" + a
                }
                this.m_requests = 0,
                this.m_session_id = this._loadSessionId()
            };
            u.prototype._logFunction = function(c, e, a) {
                if (this.m_log) {
                    for (var r = "(", i = 0; i < e.length; i++)
                        r += a[i] + ": " + e[i].toString(),
                        i != e.length - 1 && (r += ", ");
                    r += ")",
                    this._log(c, r)
                }
            }
            ,
            u.prototype._log = function(c, e) {
                this.m_log && console.log(c + ": " + e)
            }
            ,
            u.prototype._loadSessionId = function() {
                try {
                    var c = sessionStorage.getItem(this.ClassName + "session_id");
                    return void 0 === c || null == c || "" == c ? null : c
                } catch (c) {
                    return null
                }
            }
            ,
            u.prototype._saveSessionId = function(c) {
                try {
                    sessionStorage.setItem(this.ClassName + "session_id", c)
                } catch (c) {}
            }
            ,
            u.prototype._removeSessionId = function() {
                try {
                    sessionStorage.removeItem(this.ClassName + "session_id")
                } catch (c) {}
            }
            ,
            u.prototype.createXMLHttpRequest = function() {
                return "undefined" == typeof XMLHttpRequest && (XMLHttpRequest = function() {
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (c) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (c) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (c) {}
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (c) {}
                    throw d[-32300]
                }
                ),
                new XMLHttpRequest
            }
            ,
            u.prototype.makeRequest = function(c, e, a) {
                var r = null;
                try {
                    (r = {}).jsonrpc = "2.0",
                    r.id = a,
                    r.method = c,
                    r.params = e,
                    r.session_id = this.m_session_id,
                    r = JSON.stringify(r)
                } catch (c) {}
                return r
            }
            ,
            u.prototype.verifyResponse = function(c, e) {
                try {
                    if ("2.0" != e.jsonrpc)
                        return !1;
                    var a = e.error;
                    if (void 0 === a) {
                        if (e.id != c || void 0 === e.result)
                            return !1
                    } else {
                        if (void 0 === a.code || void 0 === a.message)
                            return !1;
                        if (0 != a.code)
                            return !1
                    }
                    if (void 0 !== e.session_id)
                        if (null != this.m_session_id && null != e.session_id) {
                            if (this.m_session_id != e.session_id)
                                return !1
                        } else
                            this.m_session_id = e.session_id,
                            this._saveSessionId(this.m_session_id);
                    return !0
                } catch (c) {
                    return !1
                }
            }
            ,
            u.prototype.handleResponse = function(c, e) {
                try {
                    return e = JSON.parse(e),
                    this.verifyResponse(c, e) ? e : (this.m_session_id = null,
                    this._removeSessionId(),
                    null)
                } catch (c) {
                    return null
                }
            }
            ,
            u.prototype._sendHttp = function(c, e, a) {
                var r, i, t = this;
                try {
                    if ((r = this.createXMLHttpRequest()).open("POST", this.m_uri, null != a),
                    r.setRequestHeader("Content-Type", "application/json-rpc"),
                    null != a && (r.onload = function() {
                        200 == r.status ? (i = t.handleResponse(e, r.response),
                        a(null != i ? i.result : null)) : a(null)
                    }
                    ,
                    r.onerror = function() {
                        a(null)
                    }
                    ),
                    r.send(c),
                    null != a)
                        return;
                    return 200 != r.status || null == (i = this.handleResponse(e, r.response)) ? null : i.result
                } catch (c) {
                    if (null == a)
                        return null;
                    a(null)
                }
            }
            ,
            u.prototype._registerOnExtensionRecieveEventHandler = function() {
                var c = this;
                window.addEventListener("message", function(e) {
                    if (e.data.sender == c.m_uri)
                        try {
                            var a = e.data.callback_id
                              , r = c.m_callbacks[a - 1];
                            delete c.m_callbacks[a - 1],
                            c._logFunction("_registerOnExtensionRecieveEventHandler", [r.request_id, e.data.data], ["request_id", "data"]);
                            var i = c.handleResponse(r.request_id, e.data.data);
                            if (null == i)
                                return void r.callback(null);
                            r.callback(i.result)
                        } catch (c) {}
                }, !1)
            }
            ,
            u.prototype._sendExtension = function(c, e, a) {
                var r = this;
                if (r._logFunction("_sendExtension", [arguments[0], arguments[1]], ["request", "request_id"]),
                !a)
                    throw "Synchronous calls for web extensions not supported";
                if (1 == document.getElementsByClassName(r.m_uri).length)
                    try {
                        var i = {
                            request_id: e,
                            callback: a
                        }
                          , t = r.m_callbacks.push(i)
                          , n = {
                            sender: r.ClassName,
                            request: c,
                            callback_id: t
                        };
                        window.postMessage(n, "*")
                    } catch (c) {
                        a(null)
                    }
                else
                    a(null)
            }
            ,
            u.prototype._getPluginObject = function() {
                try {
                    for (var c = document.getElementsByTagName("object"), e = 0; e < c.length; e++) {
                        var a = c[e].classid;
                        if (!a && c[e].attributes && c[e].attributes.classid && (a = c[e].attributes.classid.value),
                        a === this.m_uri)
                            return c[e]
                    }
                    return null
                } catch (c) {
                    return null
                }
            }
            ,
            u.prototype._sendPlugin = function(c, e, a) {
                var r, i = this;
                i._logFunction("_sendPlugin", [arguments[0], arguments[1]], ["request", "request_id"]);
                var n = i._getPluginObject();
                if (null == n)
                    return null != a && a(null),
                    null;
                var f = function(c) {
                    try {
                        for (var e = new b, a = new s(0); ; ) {
                            var r = n.ProcessData(c)
                              , i = r.slice(0, 5)
                              , f = r.slice(5, r.length - 1);
                            if (null != f || "" != f) {
                                var d = e.decode(f)
                                  , u = new s(a.length + d.length);
                                u.set(a),
                                u.set(d, a.length),
                                a = u
                            }
                            switch (i) {
                            case '"part':
                                c = '"next"';
                                continue;
                            case '"last':
                                return t.ArrayToString("UTF-8", a);
                            default:
                                return null
                            }
                        }
                    } catch (c) {
                        return null
                    }
                };
                try {
                    return null != a ? void setTimeout(function() {
                        r = f(c),
                        i._logFunction("_sendPlugin", [e, r], ["request_id", "response"]),
                        a(null != (r = i.handleResponse(e, r)) ? r.result : null)
                    }, 1) : (r = f(c),
                    null == (r = i.handleResponse(e, r)) ? null : r.result)
                } catch (c) {
                    a(null)
                }
            }
            ,
            u.prototype.send = function(c, e, a) {
                switch (this.m_type) {
                case 1:
                    return this._sendHttp(c, e, a);
                case 2:
                    return this._sendExtension(c, e, a);
                case 3:
                case 4:
                    return this._sendPlugin(c, e, a)
                }
            }
            ,
            u.prototype.execute = function(c, e, a) {
                var r, i;
                return r = this.m_requests,
                this.m_requests++,
                null == (i = this.makeRequest(c, e, r)) ? null != a ? void a(null) : null : null == a ? this.send(i, r, a) : void this.send(i, r, a)
            }
            ;
            var o = function() {};
            o.WEB_LIBRARY_OS_NOT_SUPPORTED = 131072,
            o.WEB_LIBRARY_NOT_INSTALLED_OR_RUN = 131073,
            o.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED = 131074,
            o.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED = 131075,
            o.WEB_LIBRARY_INSTALL_PACKAGE = 131076,
            o.WEB_LIBRARY_UPDATE_PACKAGE = 131077,
            o.WEB_LIBRARY_USER_MANUAL = 131078,
            o.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE = 131079,
            o.WEB_LIBRARY_CHECK_JRE_VERSION = 131080,
            (o.DESCRIPTIONS = [])[o.WEB_LIBRARY_OS_NOT_SUPPORTED] = ["Інсталяційний пакет web-бібліотеки підпису для вашої системи відсутній", "Инсталяционный  пакет web-библиотеки подписи для вашей системы отсутствует", "The installation package of the library for the web signature for your system is absent"],
            o.DESCRIPTIONS[o.WEB_LIBRARY_NOT_INSTALLED_OR_RUN] = ["Бібліотеку web-підпису не запущено або не інстальовано у системі. Для продовження необхідно запустити або інсталювати бібліотеку web-підпису.", "Библиотеку web-подписи не запущено или не установлено в системе. Для продолжения необходимо запустить или установить библиотеку web-подписи.", "The library for the web signature isn't started or not installed in system. To continue, it is necessary to start or install library for the web signature."],
            o.DESCRIPTIONS[o.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED] = ["Інстальована версія web-бібліотеки підпису більше не підтримується. Для продовження необхідно інсталювати оновлену версію web-бібліотеки підпису.", "Инсталированная версия web-библиотеки подписи больше не поддерживается. Для продолжения необходимо установить обновленную версию web-библиотеки подписи.", "The installed version of library for the web signature isn't supported any more. To continue, it is necessary to install the updated version of the library for the web signature."],
            o.DESCRIPTIONS[o.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED] = ["Java-апплет не завантажено. Необхідно перевірити версію JRE", "Java-апплет не загружен. Необходимо проверить версию JRE", "Java applet isn't loaded. It is necessary to check the version of JRE"],
            o.DESCRIPTIONS[o.WEB_LIBRARY_INSTALL_PACKAGE] = ["Інсталяційний пакет web-бібліотеки підпису", "Инсталяционный пакет web-библиотеки подписи", "Install package of library for the web signature"],
            o.DESCRIPTIONS[o.WEB_LIBRARY_UPDATE_PACKAGE] = ["Оновлення web-бібліотеки підпису", "Обновление web-библиотеки подписи", "Update of library for the web signature"],
            o.DESCRIPTIONS[o.WEB_LIBRARY_USER_MANUAL] = ["Настанова користувача", "Руководство пользователя", "User manual"],
            o.DESCRIPTIONS[o.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE] = ["Інсталяційний пакет бібліотеки підпису (web-розширення)", "Инсталяционный пакет библиотеки подписи (web-расширение)", "Install package of library for the web signature (web-extension)"],
            o.DESCRIPTIONS[o.WEB_LIBRARY_CHECK_JRE_VERSION] = ["Перевірити версію JRE", "Проверить версию JRE", "Check JRE version"],
            o.getString = function(c, e) {
                var a, r;
                return void 0 === (a = o.DESCRIPTIONS[c]) && (a = ""),
                void 0 === (r = a[e - 1]) ? a[0] : r
            }
            ;
            var l = function(c, e, a, r, i) {
                switch (this.m_id = e,
                this.m_library = null,
                this.m_language = a,
                this.m_supportedLibraryTypes = [],
                this.m_supportedLibraryTypesIndex = 0,
                this.m_noJavaApplet = !1 | r,
                this.m_webExtensionFirst = !1 | i,
                this.m_errorResult = null,
                c) {
                case l.LIBRARY_TYPE_JAVA_APPLET:
                case l.LIBRARY_TYPE_SIGN_AGENT:
                case l.LIBRARY_TYPE_WEB_EXTENSION:
                case l.LIBRARY_TYPE_NPAPI:
                case l.LIBRARY_TYPE_ACTIVE_X:
                    this.m_libraryType = c;
                    break;
                default:
                    this.m_libraryType = l.LIBRARY_TYPE_DEFAULT
                }
                this.m_libraryType == l.LIBRARY_TYPE_DEFAULT ? (this.m_webExtensionFirst && l.isWebExtensionSupported() && this.m_supportedLibraryTypes.push(l.LIBRARY_TYPE_WEB_EXTENSION),
                l.isSignAgentSupported() && this.m_supportedLibraryTypes.push(l.LIBRARY_TYPE_SIGN_AGENT),
                !this.m_webExtensionFirst && l.isWebExtensionSupported() && this.m_supportedLibraryTypes.push(l.LIBRARY_TYPE_WEB_EXTENSION),
                l.isNPAPISupported() && this.m_supportedLibraryTypes.push(l.LIBRARY_TYPE_NPAPI),
                l.isActiveXSupported() && this.m_supportedLibraryTypes.push(l.LIBRARY_TYPE_ACTIVE_X),
                !this.m_noJavaApplet && l.isJavaAppletSupported() && this.m_supportedLibraryTypes.push(l.LIBRARY_TYPE_JAVA_APPLET)) : this.m_supportedLibraryTypes.push(this.m_libraryType),
                this.onload = function(c) {}
                ,
                this.onerror = function(c, e, a) {}
                ,
                this.getLibraryType = function() {
                    return this.m_libraryType
                }
            };
            l.LIBRARY_TYPE_DEFAULT = 0,
            l.LIBRARY_TYPE_JAVA_APPLET = 1,
            l.LIBRARY_TYPE_SIGN_AGENT = 2,
            l.LIBRARY_TYPE_WEB_EXTENSION = 3,
            l.LIBRARY_TYPE_NPAPI = 4,
            l.LIBRARY_TYPE_ACTIVE_X = 5,
            l.EU_DEFAULT_LANG = 0,
            l.EU_UA_LANG = 1,
            l.EU_RU_LANG = 2,
            l.EU_EN_LANG = 3,
            l.isJavaAppletSupported = function() {
                var c = new f;
                if (this.m_noJavaApplet)
                    return !1;
                switch (c.GetName()) {
                case f.BROWSER_NAME_FIREFOX:
                case f.BROWSER_NAME_CHROME:
                    return !(c.GetVersion() > 44);
                case f.BROWSER_NAME_OPERA:
                    return !(c.GetVersion() > 30);
                case f.BROWSER_NAME_EDGE:
                case f.BROWSER_NAME_UNKNOWN:
                    return !1;
                default:
                    return !0
                }
            }
            ,
            l.isSignAgentSupported = function() {
                var c = new f;
                switch (c.GetName()) {
                case f.BROWSER_NAME_IE:
                    if (c.GetVersion() < 10)
                        return !1;
                    break;
                case f.BROWSER_NAME_SAFARI:
                    if (c.GetVersion() < 7)
                        return !1;
                    break;
                case f.BROWSER_NAME_UNKNOWN:
                    return !1
                }
                switch (c.GetOSName()) {
                case f.OS_NAME_WINDOWS:
                case f.OS_NAME_MAC:
                case f.OS_NAME_ANDROID:
                    break;
                case f.OS_NAME_UNKNOWN:
                default:
                    return !1
                }
                return !0
            }
            ,
            l.isWebExtensionSupported = function() {
                var c = new f;
                switch (c.GetName()) {
                case f.BROWSER_NAME_CHROME:
                    break;
                case f.BROWSER_NAME_OPERA:
                    if (c.GetVersion() < 35)
                        return !1;
                    break;
                case f.BROWSER_NAME_FIREFOX:
                    if (c.GetVersion() < 50)
                        return !1;
                    break;
                case f.BROWSER_NAME_UNKNOWN:
                default:
                    return !1
                }
                switch (c.GetOSName()) {
                case f.OS_NAME_ANDROID:
                case f.OS_NAME_UNKNOWN:
                    return !1
                }
                return !0
            }
            ,
            l.isNPAPISupported = function() {
                var c = new f;
                switch (c.GetName()) {
                case f.BROWSER_NAME_FIREFOX:
                    if (c.GetVersion() > 51)
                        return !1;
                    break;
                default:
                    return !1
                }
                return !0
            }
            ,
            l.isActiveXSupported = function() {
                var c = new f;
                switch (c.GetName()) {
                case f.BROWSER_NAME_IE:
                    if (c.GetVersion() < 9 || c.GetArch() == f.BROWSER_ARCH_NAME_X64)
                        return !1;
                    break;
                default:
                    return !1
                }
                return !0
            }
            ,
            l.isWebExtensionInstalled = function() {
                var c = (new f).GetName() == f.BROWSER_NAME_FIREFOX ? "eusw@iit.com.ua" : "chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/";
                return 1 == document.getElementsByClassName(c).length
            }
            ,
            l.prototype.getLibraryType = function() {
                return this.m_libraryType
            }
            ,
            l.prototype.load = function() {
                var c = this;
                setTimeout(function() {
                    c._load(c.m_supportedLibraryTypes[c.m_supportedLibraryTypesIndex])
                }, 1)
            }
            ,
            l.prototype.unload = function() {
                var c = document.getElementById(this.m_id);
                c && c.parentNode && c.parentNode.removeChild(c)
            }
            ,
            l.prototype._load = function(c) {
                switch (c) {
                case l.LIBRARY_TYPE_JAVA_APPLET:
                    return void this._loadSignApplet();
                case l.LIBRARY_TYPE_SIGN_AGENT:
                    return void this._loadSignAgent();
                case l.LIBRARY_TYPE_WEB_EXTENSION:
                    return void this._loadWebExtension();
                case l.LIBRARY_TYPE_NPAPI:
                    return void this._loadNPAPI();
                case l.LIBRARY_TYPE_ACTIVE_X:
                    return void this._loadActiveX()
                }
            }
            ,
            l.prototype._onLoad = function() {
                this.m_libraryType = this.m_supportedLibraryTypes[this.m_supportedLibraryTypesIndex];
                try {
                    this.onload(this.m_library)
                } catch (c) {
                    console.log(c)
                }
            }
            ,
            l.prototype._onLoadError = function(c, e, a, r) {
                null == this.m_errorResult && (this.m_errorResult = {
                    msg: e,
                    code: a,
                    library: r
                });
                var i = document.getElementById(this.m_id);
                if (i && i.parentNode && i.parentNode.removeChild(i),
                c)
                    if (this.m_supportedLibraryTypesIndex++,
                    this.m_supportedLibraryTypesIndex >= this.m_supportedLibraryTypes.length)
                        try {
                            this.onerror(this.m_errorResult.msg, this.m_errorResult.code, this.m_errorResult.library)
                        } catch (c) {
                            console.log(c)
                        }
                    else
                        this.load();
                else
                    try {
                        this.onerror(this.m_errorResult.msg, this.m_errorResult.code, this.m_errorResult.library)
                    } catch (c) {
                        console.log(c)
                    }
            }
            ,
            l.prototype._loadSignApplet = function() {
                var c = document.createElement("applet");
                c.setAttribute("codebase", "http://sign.eu.iit.com.ua"),
                c.setAttribute("code", "com.iit.certificateAuthority.endUser.libraries.signJava.EndUser.class"),
                c.setAttribute("archive", "EUSignJava.jar"),
                c.setAttribute("cache_archive", "EUSignJava.jar"),
                c.setAttribute("cache_version", "1.3.102"),
                c.setAttribute("separate_jvm", !0),
                c.setAttribute("id", this.m_id),
                c.setAttribute("width", "100%"),
                c.setAttribute("height", "1"),
                document.body.appendChild(c),
                this.m_library = document.getElementById(this.m_id),
                this._waitForSignAppletLoad(this, 100, 1200)
            }
            ,
            l.prototype._waitForSignAppletLoad = function(c, e, a) {
                try {
                    c.m_library.SetUIMode(!1)
                } catch (i) {
                    if (0 != a)
                        return void setTimeout(function() {
                            c._waitForSignAppletLoad(c, e, a - 1)
                        }, e, a);
                    var r = "";
                    return r = X.getErrorDescriptionEx(X.ERROR_LIBRARY_COMUNICATION_FAILED, c.m_language) + ". ",
                    r += o.getString(o.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED, c.m_language),
                    r += "<br><br>",
                    r += '<a style="text-indent:18px" href="https://www.java.com/ru/download/installed.jsp">' + o.getString(o.WEB_LIBRARY_CHECK_JRE_VERSION, c.m_language) + "</a>",
                    void c._onLoadError(!0, r, X.ERROR_LIBRARY_COMUNICATION_FAILED, null)
                }
                c._onLoad(c.m_library)
            }
            ,
            l.prototype._appendWebWrapperObject = function(c, e, a, r) {
                try {
                    var i = new $(c,e)
                      , t = document.createElement("object");
                    for (var n in t.setAttribute("id", this.m_id),
                    a ? r ? (t.setAttribute("classid", c),
                    t.setAttribute("height", "1px")) : (t.type = c,
                    t.classid = c,
                    t.height = "1px") : (t.classid = "EUSignCP.class",
                    t.style = "display:none",
                    t.style.visibility = "hidden"),
                    document.body.appendChild(t),
                    i)
                        t[n] = i[n];
                    return this.m_library = document.getElementById(this.m_id),
                    !0
                } catch (c) {
                    return !1
                }
            }
            ,
            l.prototype._onLoadWebLibraryError = function(c) {
                var e = this.m_library
                  , a = !0
                  , r = "";
                switch (r += X.getErrorDescriptionEx(X.ERROR_LIBRARY_COMUNICATION_FAILED, this.m_language),
                r += ". ",
                c.GetErrorCode()) {
                case X.ERROR_LIBRARY_COMUNICATION_FAILED:
                    r += o.getString(o.WEB_LIBRARY_NOT_INSTALLED_OR_RUN, this.m_language);
                    break;
                case X.ERROR_LIBRARY_VERSION_NOT_SUPPORTED:
                    r += o.getString(o.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED, this.m_language),
                    a = !1,
                    this.m_errorResult = null;
                    break;
                default:
                    r += X.getErrorDescriptionEx(c.GetErrorCode(), this.m_language) + "."
                }
                r += "<br><br>",
                null != e.GetInstallURL() ? (c.GetErrorCode() == X.ERROR_LIBRARY_VERSION_NOT_SUPPORTED ? r += '<div><a style="text-indent:18px" href="' + e.GetUpdateURL() + '">' + o.getString(o.WEB_LIBRARY_UPDATE_PACKAGE, this.m_language) + "</a></div>" : (r += '<div><a style="text-indent:18px" href="' + e.GetInstallURL() + '">' + o.getString(o.WEB_LIBRARY_INSTALL_PACKAGE, this.m_language) + "</a></div>",
                l.isWebExtensionSupported() && (r += '<div><a style="text-indent:18px" href="' + e.GetWebExtensionInstallURL() + '">' + o.getString(o.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE, this.m_language) + "</a></div>")),
                r += '<div><a style="text-indent:18px" href="' + e.GetHelpURL() + '">' + o.getString(o.WEB_LIBRARY_USER_MANUAL, this.m_language) + "</a></div>") : r += "<div>" + o.getString(o.WEB_LIBRARY_OS_NOT_SUPPORTED, this.m_language) + "</div>",
                this._onLoadError(a, r, c.GetErrorCode(), e)
            }
            ,
            l.prototype._loadWebLibrary = function() {
                var c = this;
                c.m_library.Load(function() {
                    c._onLoad()
                }, function(e) {
                    c._onLoadWebLibraryError(e)
                })
            }
            ,
            l.prototype._loadSignAgent = function() {
                if (this._appendWebWrapperObject("localhost", "http:" == window.location.protocol ? "8081" : "8083", !1, !1))
                    this._loadWebLibrary();
                else {
                    var c = X.getErrorDescriptionEx(X.ERROR_LIBRARY_COMUNICATION_FAILED, this.m_language);
                    this._onLoadError(!0, c, X.ERROR_LIBRARY_COMUNICATION_FAILED, null)
                }
            }
            ,
            l.prototype._loadWebExtension = function() {
                if (this._appendWebWrapperObject("chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/", "", !1, !1))
                    this._loadWebLibrary();
                else {
                    var c = X.getErrorDescriptionEx(X.ERROR_LIBRARY_COMUNICATION_FAILED, this.m_language);
                    this._onLoadError(!0, c, X.ERROR_LIBRARY_COMUNICATION_FAILED, null)
                }
            }
            ,
            l.prototype._loadPlugin = function(c, e, a, r) {
                if (this._appendWebWrapperObject(c, "", !0, r))
                    this._waitForPluginLoad(this, e, a);
                else {
                    var i = X.getErrorDescriptionEx(X.ERROR_LIBRARY_COMUNICATION_FAILED, this.m_language);
                    this._onLoadError(!0, i, X.ERROR_LIBRARY_COMUNICATION_FAILED, null)
                }
            }
            ,
            l.prototype._waitForPluginLoad = function(c, e, a) {
                c.m_library.Load(function() {
                    c._onLoad()
                }, function(r) {
                    r.GetErrorCode() != X.ERROR_LIBRARY_COMUNICATION_FAILED || 0 == a ? c._onLoadWebLibraryError(r) : setTimeout(function() {
                        c._waitForPluginLoad(c, e, a - 1)
                    }, e, a)
                })
            }
            ,
            l.prototype._loadNPAPI = function() {
                this._loadPlugin("application/x-eusign-cp", 100, 50, !1)
            }
            ,
            l.prototype._loadActiveX = function() {
                this._loadPlugin("clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B", 100, 50, !0)
            }
            ;
            var h = function() {
                this.vendor = "JSC IIT",
                this.parentClassName = "Object",
                this.className = "EndUserArrayList",
                this.classVersion = 1,
                this.m_array = []
            };
            h.prototype.add = function(c) {
                return this.m_array.push(c),
                !0
            }
            ,
            h.prototype.clear = function() {
                this.m_array = []
            }
            ,
            h.prototype.get = function(c) {
                return this.m_array[c]
            }
            ,
            h.prototype.size = function() {
                return this.m_array.length
            }
            ,
            Object.create || (Object.create = function(c, e) {
                function a() {}
                if ("object" != typeof c && "function" != typeof c || null === c || void 0 !== e)
                    throw new Error("Invalid arguments");
                return a.prototype = c,
                new a
            }
            ),
            Uint8Array.prototype.slice || (Uint8Array.prototype.slice = Uint8Array.prototype.subarray);
            var s = null;
            s = "undefined" == typeof Uint8Array ? function(c) {
                var e;
                if ("number" == typeof c) {
                    e = new Array(c);
                    for (var a = 0; a < c; ++a)
                        e[a] = 0
                } else
                    e = c.slice(0);
                return e.buffer = e,
                e.subarray = function(c, a) {
                    return e.slice(c, a)
                }
                ,
                e.set = function(c, a) {
                    arguments.length < 2 && (a = 0);
                    for (var r = 0, i = c.length; r < i; ++r,
                    ++a)
                        e[a] = 255 & c[r]
                }
                ,
                e.byteLength = e.length,
                "object" == typeof c && c.buffer && (e.buffer = c.buffer),
                e
            }
            : Uint8Array;
            var g = function() {
                this.vendor = "JSC IIT",
                this.parentClassName = "Object",
                this.className = "EndUserTransferableObject",
                this.classVersion = 1,
                this.isFilled = !1,
                this.fields = {}
            };
            g.makeTransferable = function(c) {
                var e, a;
                a = g,
                (e = c).prototype = Object.create(a.prototype),
                e.prototype.constructor = e,
                g[(new c).className] = c
            }
            ,
            g.prototype.base64Coder = new b,
            g.prototype.dateCoder = new n,
            g.prototype.setClassInfo = function(c, e) {
                this.parentClassName = "EndUserTransferableObject",
                this.className = c,
                this.classVersion = e
            }
            ,
            g.prototype.initializeFields = function() {
                for (var c in this.fields)
                    switch (this.fields[c]) {
                    case "boolean":
                        this[c] = !1;
                        break;
                    case "int":
                    case "long":
                    case "number":
                        this[c] = 0;
                        break;
                    case "string":
                        this[c] = "";
                        break;
                    case "EndUserKeyMedia":
                        this[c] = new j;
                        break;
                    default:
                        this[c] = null
                    }
            }
            ,
            g.prototype.set = function(c) {
                if (this.className != c.className)
                    throw "invalid class";
                for (var e in this.fields)
                    this[e] = c[e]
            }
            ,
            g.prototype.encode = function() {
                var e, a;
                for (var r in a = new Object,
                e = new Object,
                this.fields)
                    null != this[r] ? c(this[r]) ? a[r] = this[r].encode() : "byteArray" == this.fields[r] ? a[r] = this.base64Coder.encode(this[r]) : "time" == this.fields[r] ? a[r] = this.dateCoder.encode(this[r]) : a[r] = this[r] : a[r] = null;
                return e.className = this.className,
                e.classVersion = this.classVersion,
                e.classFields = a,
                e
            }
            ,
            g.prototype.decode = function(c) {
                try {
                    if (null == c.classVersion || null == c.classFields)
                        return !1;
                    var e = c.classFields;
                    for (var a in this.fields)
                        if ("time" == this.fields[a])
                            this[a] = this.dateCoder.decode(e[a]);
                        else if ("EndUserOwnerInfo" == this.fields[a])
                            this[a] = new O,
                            this[a].decode(e[a]);
                        else if ("EndUserTimeInfo" == this.fields[a])
                            this[a] = new C,
                            this[a].decode(e[a]);
                        else if ("EndUserKeyMedia" == this.fields[a])
                            this[a] = new j,
                            this[a].decode(e[a]);
                        else if ("EndUserCertificateInfoEx" == this.fields[a])
                            this[a] = new P,
                            this[a].decode(e[a]);
                        else if ("byteArray" == this.fields[a])
                            null != e[a] && (this[a] = this.base64Coder.decode(e[a]));
                        else if ("array" == this.fields[a]) {
                            this[a] = [];
                            for (var r = e[a], i = 0; i < r.length; i++) {
                                var t = r[i].className
                                  , n = new g[t];
                                if (void 0 !== n) {
                                    if (!n.decode(r[i]))
                                        throw "invalid class";
                                    "EndUserByteArray" == n.className && (n = n.GetData()),
                                    this[a].push(n)
                                } else
                                    this[a].push(r[i])
                            }
                        } else
                            this[a] = e[a];
                    return !0
                } catch (c) {
                    return this.isFilled = !1,
                    !1
                }
            }
            ;
            var k = function(c) {
                this.setClassInfo("EndUserByteArray", 1),
                this.fields = {
                    data: "byteArray"
                },
                this.initializeFields(),
                this.data = c
            };
            g.makeTransferable(k),
            k.prototype.GetData = function() {
                return this.data
            }
            ,
            k.prototype.SetData = function(c) {
                this.data = c
            }
            ;
            var j = function() {
                this.setClassInfo("EndUserKeyMedia", 1),
                this.fields = {
                    typeIndex: "long",
                    devIndex: "long",
                    password: "string"
                },
                this.initializeFields()
            };
            g.makeTransferable(j),
            j.prototype.GetTypeIndex = function() {
                return this.typeIndex
            }
            ,
            j.prototype.SetTypeIndex = function(c) {
                this.typeIndex = c
            }
            ,
            j.prototype.GetDevIndex = function() {
                return this.devIndex
            }
            ,
            j.prototype.SetDevIndex = function(c) {
                this.devIndex = c
            }
            ,
            j.prototype.GetPassword = function() {
                return this.password
            }
            ,
            j.prototype.SetPassword = function(c) {
                this.password = c
            }
            ;
            var p = function() {
                this.setClassInfo("EndUserFileStoreSettings", 1),
                this.fields = {
                    path: "string",
                    checkCRLs: "boolean",
                    autoRefresh: "boolean",
                    ownCRLsOnly: "boolean",
                    fullAndDeltaCRLs: "boolean",
                    autoDownloadCRLs: "boolean",
                    saveLoadedCerts: "boolean",
                    expireTime: "long"
                },
                this.initializeFields(),
                this.expireTime = 3600
            };
            g.makeTransferable(p),
            p.prototype.GetPath = function() {
                return this.path
            }
            ,
            p.prototype.SetPath = function(c) {
                this.path = c
            }
            ,
            p.prototype.GetCheckCRLs = function() {
                return this.checkCRLs
            }
            ,
            p.prototype.SetCheckCRLs = function(c) {
                this.checkCRLs = c
            }
            ,
            p.prototype.GetAutoRefresh = function() {
                return this.autoRefresh
            }
            ,
            p.prototype.SetAutoRefresh = function(c) {
                this.autoRefresh = c
            }
            ,
            p.prototype.GetOwnCRLsOnly = function() {
                return this.ownCRLsOnly
            }
            ,
            p.prototype.SetOwnCRLsOnly = function(c) {
                this.ownCRLsOnly = c
            }
            ,
            p.prototype.GetFullAndDeltaCRLs = function() {
                return this.fullAndDeltaCRLs
            }
            ,
            p.prototype.SetFullAndDeltaCRLs = function(c) {
                this.fullAndDeltaCRLs = c
            }
            ,
            p.prototype.GetAutoDownloadCRLs = function() {
                return this.autoDownloadCRLs
            }
            ,
            p.prototype.SetAutoDownloadCRLs = function(c) {
                this.autoDownloadCRLs = c
            }
            ,
            p.prototype.GetSaveLoadedCerts = function() {
                return this.saveLoadedCerts
            }
            ,
            p.prototype.SetSaveLoadedCerts = function(c) {
                this.saveLoadedCerts = c
            }
            ,
            p.prototype.GetExpireTime = function() {
                return this.expireTime
            }
            ,
            p.prototype.SetExpireTime = function(c) {
                this.expireTime = c
            }
            ;
            var m = function() {
                this.setClassInfo("EndUserProxySettings", 1),
                this.fields = {
                    useProxy: "boolean",
                    anonymous: "boolean",
                    address: "string",
                    port: "string",
                    user: "string",
                    password: "string",
                    savePassword: "boolean"
                },
                this.initializeFields(),
                this.port = "80"
            };
            g.makeTransferable(m),
            m.prototype.GetUseProxy = function() {
                return this.useProxy
            }
            ,
            m.prototype.SetUseProxy = function(c) {
                this.useProxy = c
            }
            ,
            m.prototype.GetAnonymous = function() {
                return this.anonymous
            }
            ,
            m.prototype.SetAnonymous = function(c) {
                this.anonymous = c
            }
            ,
            m.prototype.GetAddress = function() {
                return this.address
            }
            ,
            m.prototype.SetAddress = function(c) {
                this.address = c
            }
            ,
            m.prototype.GetPort = function() {
                return this.port
            }
            ,
            m.prototype.SetPort = function(c) {
                this.port = c
            }
            ,
            m.prototype.GetUser = function() {
                return this.user
            }
            ,
            m.prototype.SetUser = function(c) {
                this.user = c
            }
            ,
            m.prototype.GetPassword = function() {
                return this.password
            }
            ,
            m.prototype.SetPassword = function(c) {
                this.password = c
            }
            ,
            m.prototype.GetSavePassword = function() {
                return this.savePassword
            }
            ,
            m.prototype.SetSavePassword = function(c) {
                this.savePassword = c
            }
            ;
            var v = function() {
                this.setClassInfo("EndUserTSPSettings", 1),
                this.fields = {
                    getStamps: "boolean",
                    address: "string",
                    port: "string"
                },
                this.initializeFields(),
                this.port = "80"
            };
            g.makeTransferable(v),
            v.prototype.GetGetStamps = function() {
                return this.getStamps
            }
            ,
            v.prototype.SetGetStamps = function(c) {
                this.getStamps = c
            }
            ,
            v.prototype.GetAddress = function() {
                return this.address
            }
            ,
            v.prototype.SetAddress = function(c) {
                this.address = c
            }
            ,
            v.prototype.GetPort = function() {
                return this.port
            }
            ,
            v.prototype.SetPort = function(c) {
                this.port = c
            }
            ;
            var E = function() {
                this.setClassInfo("EndUserOCSPSettings", 1),
                this.fields = {
                    useOCSP: "boolean",
                    beforeStore: "boolean",
                    address: "string",
                    port: "string"
                },
                this.initializeFields(),
                this.port = "80"
            };
            g.makeTransferable(E),
            E.prototype.GetUseOCSP = function() {
                return this.useOCSP
            }
            ,
            E.prototype.SetUseOCSP = function(c) {
                this.useOCSP = c
            }
            ,
            E.prototype.GetBeforeStore = function() {
                return this.beforeStore
            }
            ,
            E.prototype.SetBeforeStore = function(c) {
                this.beforeStore = c
            }
            ,
            E.prototype.GetAddress = function() {
                return this.address
            }
            ,
            E.prototype.SetAddress = function(c) {
                this.address = c
            }
            ,
            E.prototype.GetPort = function() {
                return this.port
            }
            ,
            E.prototype.SetPort = function(c) {
                this.port = c
            }
            ;
            var _ = function() {
                this.setClassInfo("EndUserLDAPSettings", 1),
                this.fields = {
                    useLDAP: "boolean",
                    address: "string",
                    port: "string",
                    anonymous: "boolean",
                    user: "string",
                    password: "string"
                },
                this.initializeFields(),
                this.port = "389"
            };
            g.makeTransferable(_),
            _.prototype.GetUseLDAP = function() {
                return this.useLDAP
            }
            ,
            _.prototype.SetUseLDAP = function(c) {
                this.useLDAP = c
            }
            ,
            _.prototype.GetAddress = function() {
                return this.address
            }
            ,
            _.prototype.SetAddress = function(c) {
                this.address = c
            }
            ,
            _.prototype.GetPort = function() {
                return this.port
            }
            ,
            _.prototype.SetPort = function(c) {
                this.port = c
            }
            ,
            _.prototype.GetAnonymous = function() {
                return this.anonymous
            }
            ,
            _.prototype.SetAnonymous = function(c) {
                this.anonymous = c
            }
            ,
            _.prototype.GetUser = function() {
                return this.user
            }
            ,
            _.prototype.SetUser = function(c) {
                this.user = c
            }
            ,
            _.prototype.GetPassword = function() {
                return this.password
            }
            ,
            _.prototype.SetPassword = function(c) {
                this.password = c
            }
            ;
            var w = function() {
                this.setClassInfo("EndUserCMPSettings", 1),
                this.fields = {
                    useCMP: "boolean",
                    address: "string",
                    port: "string",
                    commonName: "string"
                },
                this.initializeFields(),
                this.port = "80"
            };
            g.makeTransferable(w),
            w.prototype.GetUseCMP = function() {
                return this.useCMP
            }
            ,
            w.prototype.SetUseCMP = function(c) {
                this.useCMP = c
            }
            ,
            w.prototype.GetAddress = function() {
                return this.address
            }
            ,
            w.prototype.SetAddress = function(c) {
                this.address = c
            }
            ,
            w.prototype.GetPort = function() {
                return this.port
            }
            ,
            w.prototype.SetPort = function(c) {
                this.port = c
            }
            ,
            w.prototype.GetCommonName = function() {
                return this.commonName
            }
            ,
            w.prototype.SetCommonName = function(c) {
                this.commonName = c
            }
            ;
            var y = function() {
                this.setClassInfo("EndUserModeSettings", 1),
                this.fields = {
                    offlineMode: "boolean"
                },
                this.initializeFields()
            };
            g.makeTransferable(y),
            y.prototype.GetOfflineMode = function() {
                return this.offlineMode
            }
            ,
            y.prototype.SetOfflineMode = function(c) {
                this.offlineMode = c
            }
            ;
            var L = function() {
                this.setClassInfo("EndUserOCSPAccessInfoModeSettings", 1),
                this.fields = {
                    enabled: "boolean"
                },
                this.initializeFields()
            };
            g.makeTransferable(L),
            L.prototype.GetEnabled = function() {
                return this.enabled
            }
            ,
            L.prototype.SetEnabled = function(c) {
                this.enabled = c
            }
            ;
            var S = function() {
                this.setClassInfo("EndUserOCSPAccessInfoSettings", 1),
                this.fields = {
                    issuerCN: "string",
                    address: "string",
                    port: "string"
                },
                this.initializeFields()
            };
            g.makeTransferable(S),
            S.prototype.GetIssuerCN = function() {
                return this.issuerCN
            }
            ,
            S.prototype.SetIssuerCN = function(c) {
                this.issuerCN = c
            }
            ,
            S.prototype.GetAddress = function() {
                return this.address
            }
            ,
            S.prototype.SetAddress = function(c) {
                this.address = c
            }
            ,
            S.prototype.GetPort = function() {
                return this.port
            }
            ,
            S.prototype.SetPort = function(c) {
                this.port = c
            }
            ;
            var A = function() {
                this.setClassInfo("EndUserKeyMediaSettings", 1),
                this.fields = {
                    sourceType: "long",
                    showErrors: "boolean",
                    keyMedia: "EndUserKeyMedia"
                },
                this.initializeFields(),
                this.sourceType = 1,
                this.showErrors = !0
            };
            g.makeTransferable(A),
            A.prototype.GetSourceType = function() {
                return this.sourceType
            }
            ,
            A.prototype.SetSourceType = function(c) {
                this.sourceType = c
            }
            ,
            A.prototype.GetShowErrors = function() {
                return this.showErrors
            }
            ,
            A.prototype.SetShowErrors = function(c) {
                this.showErrors = c
            }
            ,
            A.prototype.GetKeyMedia = function() {
                return this.keyMedia
            }
            ,
            A.prototype.SetKeyMedia = function(c) {
                this.keyMedia = c
            }
            ;
            var O = function() {
                this.setClassInfo("EndUserOwnerInfo", 1),
                this.fields = {
                    isFilled: "boolean",
                    issuer: "string",
                    issuerCN: "string",
                    serial: "string",
                    subject: "string",
                    subjCN: "string",
                    subjOrg: "string",
                    subjOrgUnit: "string",
                    subjTitle: "string",
                    subjState: "string",
                    subjLocality: "string",
                    subjFullName: "string",
                    subjAddress: "string",
                    subjPhone: "string",
                    subjEMail: "string",
                    subjDNS: "string",
                    subjEDRPOUCode: "string",
                    subjDRFOCode: "string"
                },
                this.initializeFields()
            };
            g.makeTransferable(O),
            O.prototype.IsFilled = function() {
                return this.isFilled
            }
            ,
            O.prototype.GetIssuer = function() {
                return this.issuer
            }
            ,
            O.prototype.GetIssuerCN = function() {
                return this.issuerCN
            }
            ,
            O.prototype.GetSerial = function() {
                return this.serial
            }
            ,
            O.prototype.GetSubject = function() {
                return this.subject
            }
            ,
            O.prototype.GetSubjCN = function() {
                return this.subjCN
            }
            ,
            O.prototype.GetSubjOrg = function() {
                return this.subjOrg
            }
            ,
            O.prototype.GetSubjOrgUnit = function() {
                return this.subjOrgUnit
            }
            ,
            O.prototype.GetSubjTitle = function() {
                return this.subjTitle
            }
            ,
            O.prototype.GetSubjState = function() {
                return this.subjState
            }
            ,
            O.prototype.GetSubjLocality = function() {
                return this.subjLocality
            }
            ,
            O.prototype.GetSubjFullName = function() {
                return this.subjFullName
            }
            ,
            O.prototype.GetSubjAddress = function() {
                return this.subjAddress
            }
            ,
            O.prototype.GetSubjPhone = function() {
                return this.subjPhone
            }
            ,
            O.prototype.GetSubjEMail = function() {
                return this.subjEMail
            }
            ,
            O.prototype.GetSubjDNS = function() {
                return this.subjDNS
            }
            ,
            O.prototype.GetSubjEDRPOUCode = function() {
                return this.subjEDRPOUCode
            }
            ,
            O.prototype.GetSubjDRFOCode = function() {
                return this.subjDRFOCode
            }
            ;
            var C = function() {
                this.setClassInfo("EndUserTimeInfo", 2),
                this.fields = {
                    version: "number",
                    isTimeAvail: "boolean",
                    isTimeStamp: "boolean",
                    time: "time",
                    isSignTimeStampAvail: "boolean",
                    signTimeStamp: "time"
                },
                this.initializeFields()
            };
            g.makeTransferable(C),
            C.prototype.GetVersion = function() {
                return this.version
            }
            ,
            C.prototype.IsTimeAvail = function() {
                return this.isTimeAvail
            }
            ,
            C.prototype.IsTimeStamp = function() {
                return this.isTimeStamp
            }
            ,
            C.prototype.GetTime = function() {
                return this.time
            }
            ,
            C.prototype.IsSignTimeStampAvail = function() {
                return this.isSignTimeStampAvail
            }
            ,
            C.prototype.GetSignTimeStamp = function() {
                return this.signTimeStamp
            }
            ;
            var R = function() {
                this.setClassInfo("EndUserSignInfo", 1),
                this.fields = {
                    ownerInfo: "EndUserOwnerInfo",
                    timeInfo: "EndUserTimeInfo",
                    data: "byteArray"
                },
                this.initializeFields()
            };
            g.makeTransferable(R),
            R.prototype.GetOwnerInfo = function() {
                return this.ownerInfo
            }
            ,
            R.prototype.GetTimeInfo = function() {
                return this.timeInfo
            }
            ,
            R.prototype.GetData = function() {
                return this.data
            }
            ,
            R.prototype.GetDataString = function(c) {
                return t.ArrayToString(c, this.data)
            }
            ;
            var q = function() {
                this.setClassInfo("EndUserSenderInfo", 1),
                this.fields = {
                    ownerInfo: "EndUserOwnerInfo",
                    timeInfo: "EndUserTimeInfo",
                    data: "byteArray"
                },
                this.initializeFields()
            };
            g.makeTransferable(q),
            q.prototype.GetOwnerInfo = function() {
                return this.ownerInfo
            }
            ,
            q.prototype.GetTimeInfo = function() {
                return this.timeInfo
            }
            ,
            q.prototype.GetData = function() {
                return this.data
            }
            ,
            q.prototype.GetDataString = function(c) {
                return t.ArrayToString(c, this.data)
            }
            ;
            var I = function() {
                this.setClassInfo("EndUserCertificateInfo", 1),
                this.fields = {
                    isFilled: "boolean",
                    version: "long",
                    issuer: "string",
                    issuerCN: "string",
                    serial: "string",
                    subject: "string",
                    subjCN: "string",
                    subjOrg: "string",
                    subjOrgUnit: "string",
                    subjTitle: "string",
                    subjState: "string",
                    subjLocality: "string",
                    subjFullName: "string",
                    subjAddress: "string",
                    subjPhone: "string",
                    subjEMail: "string",
                    subjDNS: "string",
                    subjEDRPOUCode: "string",
                    subjDRFOCode: "string",
                    subjNBUCode: "string",
                    subjSPFMCode: "string",
                    subjOCode: "string",
                    subjOUCode: "string",
                    subjUserCode: "string",
                    certBeginTime: "time",
                    certEndTime: "time",
                    isPrivKeyTimesAvail: "boolean",
                    privKeyBeginTime: "time",
                    privKeyEndTime: "time",
                    publicKeyBits: "long",
                    publicKey: "string",
                    publicKeyID: "string",
                    isECDHPublicKeyAvail: "boolean",
                    ECDHPublicKeyBits: "long",
                    ECDHPublicKey: "string",
                    ECDHPublicKeyID: "string",
                    issuerPublicKeyID: "string",
                    keyUsage: "string",
                    extKeyUsages: "string",
                    policies: "string",
                    crlDistribPoint1: "string",
                    crlDistribPoint2: "string",
                    isPowerCert: "boolean",
                    isSubjTypeAvail: "boolean",
                    isSubjCA: "boolean"
                },
                this.initializeFields()
            };
            g.makeTransferable(I),
            I.prototype.IsFilled = function() {
                return this.isFilled
            }
            ,
            I.prototype.GetVersion = function() {
                return this.version
            }
            ,
            I.prototype.GetIssuer = function() {
                return this.issuer
            }
            ,
            I.prototype.GetIssuerCN = function() {
                return this.issuerCN
            }
            ,
            I.prototype.GetSerial = function() {
                return this.serial
            }
            ,
            I.prototype.GetSubject = function() {
                return this.subject
            }
            ,
            I.prototype.GetSubjCN = function() {
                return this.subjCN
            }
            ,
            I.prototype.GetSubjOrg = function() {
                return this.subjOrg
            }
            ,
            I.prototype.GetSubjOrgUnit = function() {
                return this.subjOrgUnit
            }
            ,
            I.prototype.GetSubjTitle = function() {
                return this.subjTitle
            }
            ,
            I.prototype.GetSubjState = function() {
                return this.subjState
            }
            ,
            I.prototype.GetSubjLocality = function() {
                return this.subjLocality
            }
            ,
            I.prototype.GetSubjFullName = function() {
                return this.subjFullName
            }
            ,
            I.prototype.GetSubjAddress = function() {
                return this.subjAddress
            }
            ,
            I.prototype.GetSubjPhone = function() {
                return this.subjPhone
            }
            ,
            I.prototype.GetSubjEMail = function() {
                return this.subjEMail
            }
            ,
            I.prototype.GetSubjDNS = function() {
                return this.subjDNS
            }
            ,
            I.prototype.GetSubjEDRPOUCode = function() {
                return this.subjEDRPOUCode
            }
            ,
            I.prototype.GetSubjDRFOCode = function() {
                return this.subjDRFOCode
            }
            ,
            I.prototype.GetSubjNBUCode = function() {
                return this.subjNBUCode
            }
            ,
            I.prototype.GetSubjSPFMCode = function() {
                return this.subjSPFMCode
            }
            ,
            I.prototype.GetSubjOCode = function() {
                return this.subjOCode
            }
            ,
            I.prototype.GetSubjOUCode = function() {
                return this.subjOUCode
            }
            ,
            I.prototype.GetSubjUserCode = function() {
                return this.subjUserCode
            }
            ,
            I.prototype.GetCertBeginTime = function() {
                return this.certBeginTime
            }
            ,
            I.prototype.GetCertEndTime = function() {
                return this.certEndTime
            }
            ,
            I.prototype.IsPrivKeyTimesAvail = function() {
                return this.isPrivKeyTimesAvail
            }
            ,
            I.prototype.GetPrivKeyBeginTime = function() {
                return this.privKeyBeginTime
            }
            ,
            I.prototype.GetPrivKeyEndTime = function() {
                return this.privKeyEndTime
            }
            ,
            I.prototype.GetPublicKeyBits = function() {
                return this.publicKeyBits
            }
            ,
            I.prototype.GetPublicKey = function() {
                return this.publicKey
            }
            ,
            I.prototype.GetPublicKeyID = function() {
                return this.publicKeyID
            }
            ,
            I.prototype.IsECDHPublicKeyAvail = function() {
                return this.isECDHPublicKeyAvail
            }
            ,
            I.prototype.GetECDHPublicKeyBits = function() {
                return this.ECDHPublicKeyBits
            }
            ,
            I.prototype.GetECDHPublicKey = function() {
                return this.ECDHPublicKey
            }
            ,
            I.prototype.GetECDHPublicKeyID = function() {
                return this.ECDHPublicKeyID
            }
            ,
            I.prototype.GetIssuerPublicKeyID = function() {
                return this.issuerPublicKeyID
            }
            ,
            I.prototype.GetKeyUsage = function() {
                return this.keyUsage
            }
            ,
            I.prototype.GetExtKeyUsages = function() {
                return this.extKeyUsages
            }
            ,
            I.prototype.GetPolicies = function() {
                return this.policies
            }
            ,
            I.prototype.GetCRLDistribPoint1 = function() {
                return this.crlDistribPoint1
            }
            ,
            I.prototype.GetCRLDistribPoint2 = function() {
                return this.crlDistribPoint2
            }
            ,
            I.prototype.IsPowerCert = function() {
                return this.isPowerCert
            }
            ,
            I.prototype.IsSubjTypeAvail = function() {
                return this.isSubjTypeAvail
            }
            ,
            I.prototype.IsSubjCA = function() {
                return this.isSubjCA
            }
            ;
            var P = function() {
                this.setClassInfo("EndUserCertificateInfoEx", 8),
                this.fields = {
                    isFilled: "boolean",
                    version: "long",
                    issuer: "string",
                    issuerCN: "string",
                    serial: "string",
                    subject: "string",
                    subjCN: "string",
                    subjOrg: "string",
                    subjOrgUnit: "string",
                    subjTitle: "string",
                    subjState: "string",
                    subjLocality: "string",
                    subjFullName: "string",
                    subjAddress: "string",
                    subjPhone: "string",
                    subjEMail: "string",
                    subjDNS: "string",
                    subjEDRPOUCode: "string",
                    subjDRFOCode: "string",
                    subjNBUCode: "string",
                    subjSPFMCode: "string",
                    subjOCode: "string",
                    subjOUCode: "string",
                    subjUserCode: "string",
                    certBeginTime: "time",
                    certEndTime: "time",
                    isPrivKeyTimesAvail: "boolean",
                    privKeyBeginTime: "time",
                    privKeyEndTime: "time",
                    publicKeyBits: "long",
                    publicKey: "string",
                    publicKeyID: "string",
                    issuerPublicKeyID: "string",
                    keyUsage: "string",
                    extKeyUsages: "string",
                    policies: "string",
                    crlDistribPoint1: "string",
                    crlDistribPoint2: "string",
                    isPowerCert: "boolean",
                    isSubjTypeAvail: "boolean",
                    isSubjCA: "boolean",
                    chainLength: "int",
                    UPN: "string",
                    publicKeyType: "long",
                    keyUsageType: "long",
                    RSAModul: "string",
                    RSAExponent: "string",
                    OCSPAccessInfo: "string",
                    issuerAccessInfo: "string",
                    TSPAccessInfo: "string",
                    isLimitValueAvailable: "boolean",
                    limitValue: "long",
                    limitValueCurrency: "string",
                    subjType: "long",
                    subjSubType: "long",
                    subjUNZR: "string",
                    subjCountry: "string",
                    fingerprint: "string",
                    isQSCD: "boolean",
                    subjUserID: "string"
                },
                this.initializeFields();
                var c = this;
                this.IsLimitValueAvailable = function() {
                    return c.isLimitValueAvailable
                }
            };
            g.makeTransferable(P),
            P.prototype.IsFilled = function() {
                return this.isFilled
            }
            ,
            P.prototype.GetVersion = function() {
                return this.version
            }
            ,
            P.prototype.GetIssuer = function() {
                return this.issuer
            }
            ,
            P.prototype.GetIssuerCN = function() {
                return this.issuerCN
            }
            ,
            P.prototype.GetSerial = function() {
                return this.serial
            }
            ,
            P.prototype.GetSubject = function() {
                return this.subject
            }
            ,
            P.prototype.GetSubjCN = function() {
                return this.subjCN
            }
            ,
            P.prototype.GetSubjOrg = function() {
                return this.subjOrg
            }
            ,
            P.prototype.GetSubjOrgUnit = function() {
                return this.subjOrgUnit
            }
            ,
            P.prototype.GetSubjTitle = function() {
                return this.subjTitle
            }
            ,
            P.prototype.GetSubjState = function() {
                return this.subjState
            }
            ,
            P.prototype.GetSubjLocality = function() {
                return this.subjLocality
            }
            ,
            P.prototype.GetSubjFullName = function() {
                return this.subjFullName
            }
            ,
            P.prototype.GetSubjAddress = function() {
                return this.subjAddress
            }
            ,
            P.prototype.GetSubjPhone = function() {
                return this.subjPhone
            }
            ,
            P.prototype.GetSubjEMail = function() {
                return this.subjEMail
            }
            ,
            P.prototype.GetSubjDNS = function() {
                return this.subjDNS
            }
            ,
            P.prototype.GetSubjEDRPOUCode = function() {
                return this.subjEDRPOUCode
            }
            ,
            P.prototype.GetSubjDRFOCode = function() {
                return this.subjDRFOCode
            }
            ,
            P.prototype.GetSubjNBUCode = function() {
                return this.subjNBUCode
            }
            ,
            P.prototype.GetSubjSPFMCode = function() {
                return this.subjSPFMCode
            }
            ,
            P.prototype.GetSubjOCode = function() {
                return this.subjOCode
            }
            ,
            P.prototype.GetSubjOUCode = function() {
                return this.subjOUCode
            }
            ,
            P.prototype.GetSubjUserCode = function() {
                return this.subjUserCode
            }
            ,
            P.prototype.GetCertBeginTime = function() {
                return this.certBeginTime
            }
            ,
            P.prototype.GetCertEndTime = function() {
                return this.certEndTime
            }
            ,
            P.prototype.IsPrivKeyTimesAvail = function() {
                return this.isPrivKeyTimesAvail
            }
            ,
            P.prototype.GetPrivKeyBeginTime = function() {
                return this.privKeyBeginTime
            }
            ,
            P.prototype.GetPrivKeyEndTime = function() {
                return this.privKeyEndTime
            }
            ,
            P.prototype.GetPublicKeyBits = function() {
                return this.publicKeyBits
            }
            ,
            P.prototype.GetPublicKey = function() {
                return this.publicKey
            }
            ,
            P.prototype.GetPublicKeyID = function() {
                return this.publicKeyID
            }
            ,
            P.prototype.GetIssuerPublicKeyID = function() {
                return this.issuerPublicKeyID
            }
            ,
            P.prototype.GetKeyUsage = function() {
                return this.keyUsage
            }
            ,
            P.prototype.GetExtKeyUsages = function() {
                return this.extKeyUsages
            }
            ,
            P.prototype.GetPolicies = function() {
                return this.policies
            }
            ,
            P.prototype.GetCRLDistribPoint1 = function() {
                return this.crlDistribPoint1
            }
            ,
            P.prototype.GetCRLDistribPoint2 = function() {
                return this.crlDistribPoint2
            }
            ,
            P.prototype.IsPowerCert = function() {
                return this.isPowerCert
            }
            ,
            P.prototype.IsSubjTypeAvail = function() {
                return this.isSubjTypeAvail
            }
            ,
            P.prototype.IsSubjCA = function() {
                return this.isSubjCA
            }
            ,
            P.prototype.GetChainLength = function() {
                return this.chainLength
            }
            ,
            P.prototype.GetUPN = function() {
                return this.UPN
            }
            ,
            P.prototype.GetPublicKeyType = function() {
                return this.publicKeyType
            }
            ,
            P.prototype.GetKeyUsageType = function() {
                return this.keyUsageType
            }
            ,
            P.prototype.GetRSAModul = function() {
                return this.RSAModul
            }
            ,
            P.prototype.GetRSAExponent = function() {
                return this.RSAExponent
            }
            ,
            P.prototype.GetOCSPAccessInfo = function() {
                return this.OCSPAccessInfo
            }
            ,
            P.prototype.GetIssuerAccessInfo = function() {
                return this.issuerAccessInfo
            }
            ,
            P.prototype.GetTSPAccessInfo = function() {
                return this.TSPAccessInfo
            }
            ,
            P.prototype.IsLimitValueAvail = function() {
                return this.isLimitValueAvailable
            }
            ,
            P.prototype.GetLimitValue = function() {
                return this.limitValue
            }
            ,
            P.prototype.GetLimitValueCurrency = function() {
                return this.limitValueCurrency
            }
            ,
            P.prototype.GetSubjType = function() {
                return this.subjType
            }
            ,
            P.prototype.GetSubjSubType = function() {
                return this.subjSubType
            }
            ,
            P.prototype.GetSubjUNZR = function() {
                return this.subjUNZR
            }
            ,
            P.prototype.GetSubjCountry = function() {
                return this.subjCountry
            }
            ,
            P.prototype.GetFingerprint = function() {
                return this.fingerprint
            }
            ,
            P.prototype.IsQSCD = function() {
                return this.isQSCD
            }
            ,
            P.prototype.GetSubjUserID = function() {
                return this.subjUserID
            }
            ;
            var T = function() {
                this.setClassInfo("EndUserCertificate", 1),
                this.fields = {
                    infoEx: "EndUserCertificateInfoEx",
                    data: "byteArray"
                },
                this.initializeFields()
            };
            g.makeTransferable(T),
            T.prototype.GetInfoEx = function() {
                return this.infoEx
            }
            ,
            T.prototype.SetInfoEx = function(c) {
                this.infoEx = c
            }
            ,
            T.prototype.GetData = function() {
                return this.data
            }
            ,
            T.prototype.SetData = function(c) {
                this.data = c
            }
            ;
            var x = function() {
                this.setClassInfo("EndUserCRLInfo", 1, !0, !1),
                this.fields = {
                    isFilled: "boolean",
                    issuer: "string",
                    issuerCN: "string",
                    crlNumber: "long",
                    thisUpdate: "time",
                    nextUpdate: "time"
                },
                this.initializeFields()
            };
            g.makeTransferable(x),
            x.prototype.IsFilled = function() {
                return this.isFilled
            }
            ,
            x.prototype.GetIssuer = function() {
                return this.issuer
            }
            ,
            x.prototype.GetIssuerCN = function() {
                return this.issuerCN
            }
            ,
            x.prototype.GetCRLNumber = function() {
                return this.crlNumber
            }
            ,
            x.prototype.GetThisUpdate = function() {
                return this.thisUpdate
            }
            ,
            x.prototype.GetNextUpdate = function() {
                return this.nextUpdate
            }
            ;
            var U = function() {
                this.setClassInfo("EndUserCRLDetailedInfo", 1),
                this.fields = {
                    isFilled: "boolean",
                    version: "long",
                    issuer: "string",
                    issuerCN: "string",
                    issuerPublicKeyID: "string",
                    crlNumber: "long",
                    thisUpdate: "time",
                    nextUpdate: "time",
                    revokedItemsCount: "long"
                },
                this.initializeFields()
            };
            g.makeTransferable(U),
            U.prototype.IsFilled = function() {
                return this.isFilled
            }
            ,
            U.prototype.GetVersion = function() {
                return this.version
            }
            ,
            U.prototype.GetIssuer = function() {
                return this.issuer
            }
            ,
            U.prototype.GetIssuerCN = function() {
                return this.issuerCN
            }
            ,
            U.prototype.GetIssuerPublicKeyID = function() {
                return this.issuerPublicKeyID
            }
            ,
            U.prototype.GetCRLNumber = function() {
                return this.crlNumber
            }
            ,
            U.prototype.GetThisUpdate = function() {
                return this.thisUpdate
            }
            ,
            U.prototype.GetNextUpdate = function() {
                return this.nextUpdate
            }
            ,
            U.prototype.GetRevokedItemsCount = function() {
                return this.revokedItemsCount
            }
            ;
            var N = function() {
                this.setClassInfo("EndUserPrivateKeyInfo", 1),
                this.fields = {
                    privateKey: "byteArray",
                    privateKeyInfo: "byteArray"
                },
                this.initializeFields()
            };
            g.makeTransferable(N),
            N.prototype.GetPrivateKey = function() {
                return this.privateKey
            }
            ,
            N.prototype.SetPrivateKey = function(c) {
                this.privateKey = c
            }
            ,
            N.prototype.GetPrivateKeyInfo = function() {
                return this.privateKeyInfo
            }
            ,
            N.prototype.SetPrivateKeyInfo = function(c) {
                this.privateKeyInfo = c
            }
            ;
            var D = function() {
                this.setClassInfo("EndUserJKSPrivateKey", 1),
                this.fields = {
                    privateKey: "byteArray",
                    certificates: "array"
                },
                this.initializeFields()
            };
            g.makeTransferable(D),
            D.prototype.GetPrivateKey = function() {
                return this.privateKey
            }
            ,
            D.prototype.GetCertificate = function(c) {
                return c < 0 || c >= this.certificates.length ? null : this.certificates[c]
            }
            ,
            D.prototype.GetCertificatesCount = function() {
                return this.certificates.length
            }
            ,
            D.prototype.GetCertificates = function() {
                return this.certificates
            }
            ;
            var B = function() {
                this.setClassInfo("EndUserRequestInfo", 4),
                this.fields = {
                    request: "byteArray",
                    requestType: "number",
                    defaultRequestFileName: "string",
                    isSimple: "boolean",
                    subject: "string",
                    subjCN: "string",
                    subjOrg: "string",
                    subjOrgUnit: "string",
                    subjTitle: "string",
                    subjState: "string",
                    subjLocality: "string",
                    subjFullName: "string",
                    subjAddress: "string",
                    subjPhone: "string",
                    subjEMail: "string",
                    subjDNS: "string",
                    subjEDRPOUCode: "string",
                    subjDRFOCode: "string",
                    subjNBUCode: "string",
                    subjSPFMCode: "string",
                    subjOCode: "string",
                    subjOUCode: " string",
                    subjUserCode: "string",
                    certBeginTime: "time",
                    certEndTime: "time",
                    isPrivKeyTimesAvail: "boolean",
                    privKeyBeginTime: "time",
                    privKeyEndTime: "time",
                    publicKeyType: "number",
                    publicKeyBits: "number",
                    RSAModul: "string",
                    RSAExponent: "string",
                    publicKey: "string",
                    publicKeyID: "string",
                    extKeyUsages: "string",
                    crlDistribPoint1: "string",
                    crlDistribPoint2: "string",
                    isSubjTypeAvail: "boolean",
                    subjType: "number",
                    subjSubType: "number",
                    isSelfSigned: "boolean",
                    signIssuer: "string",
                    signSerial: "string",
                    subjUNZR: "string",
                    subjCountry: "string",
                    isQSCD: "boolean"
                },
                this.initializeFields()
            };
            g.makeTransferable(B),
            B.prototype.GetRequest = function() {
                return this.request
            }
            ,
            B.prototype.GetRequestType = function() {
                return this.requestType
            }
            ,
            B.prototype.GetDefaultRequestFileName = function() {
                return this.defaultRequestFileName
            }
            ,
            B.prototype.IsSimple = function() {
                return this.isSimple
            }
            ,
            B.prototype.GetSubject = function() {
                return this.subject
            }
            ,
            B.prototype.GetSubjCN = function() {
                return this.subjCN
            }
            ,
            B.prototype.GetSubjOrg = function() {
                return this.subjOrg
            }
            ,
            B.prototype.GetSubjOrgUnit = function() {
                return this.subjOrgUnit
            }
            ,
            B.prototype.GetSubjTitle = function() {
                return this.subjTitle
            }
            ,
            B.prototype.GetSubjState = function() {
                return this.subjState
            }
            ,
            B.prototype.GetSubjLocality = function() {
                return this.subjLocality
            }
            ,
            B.prototype.GetSubjFullName = function() {
                return this.subjFullName
            }
            ,
            B.prototype.GetSubjAddress = function() {
                return this.subjAddress
            }
            ,
            B.prototype.GetSubjPhone = function() {
                return this.subjPhone
            }
            ,
            B.prototype.GetSubjEMail = function() {
                return this.subjEMail
            }
            ,
            B.prototype.GetSubjDNS = function() {
                return this.subjDNS
            }
            ,
            B.prototype.GetSubjEDRPOUCode = function() {
                return this.subjEDRPOUCode
            }
            ,
            B.prototype.GetSubjDRFOCode = function() {
                return this.subjDRFOCode
            }
            ,
            B.prototype.GetSubjNBUCode = function() {
                return this.subjNBUCode
            }
            ,
            B.prototype.GetSubjSPFMCode = function() {
                return this.subjSPFMCode
            }
            ,
            B.prototype.GetSubjOCode = function() {
                return this.subjOCode
            }
            ,
            B.prototype.GetSubjOUCode = function() {
                return this.subjOUCode
            }
            ,
            B.prototype.GetSubjUserCode = function() {
                return this.subjUserCode
            }
            ,
            B.prototype.GetCertBeginTime = function() {
                return this.certBeginTime
            }
            ,
            B.prototype.GetCertEndTime = function() {
                return this.certEndTime
            }
            ,
            B.prototype.IsPrivKeyTimesAvail = function() {
                return this.isPrivKeyTimesAvail
            }
            ,
            B.prototype.GetPrivKeyBeginTime = function() {
                return this.privKeyBeginTime
            }
            ,
            B.prototype.GetPrivKeyEndTime = function() {
                return this.privKeyEndTime
            }
            ,
            B.prototype.GetPublicKeyType = function() {
                return this.publicKeyType
            }
            ,
            B.prototype.GetPublicKeyBits = function() {
                return this.publicKeyBits
            }
            ,
            B.prototype.GetRSAModul = function() {
                return this.RSAModul
            }
            ,
            B.prototype.GetRSAExponent = function() {
                return this.RSAExponent
            }
            ,
            B.prototype.GetPublicKey = function() {
                return this.publicKey
            }
            ,
            B.prototype.GetPublicKeyID = function() {
                return this.publicKeyID
            }
            ,
            B.prototype.GetExtKeyUsages = function() {
                return this.extKeyUsages
            }
            ,
            B.prototype.GetCRLDistribPoint1 = function() {
                return this.crlDistribPoint1
            }
            ,
            B.prototype.GetCRLDistribPoint2 = function() {
                return this.crlDistribPoint2
            }
            ,
            B.prototype.IsSubjTypeAvail = function() {
                return this.isSubjTypeAvail
            }
            ,
            B.prototype.GetSubjType = function() {
                return this.subjType
            }
            ,
            B.prototype.GetSubjSubType = function() {
                return this.subjSubType
            }
            ,
            B.prototype.IsSelfSigned = function() {
                return this.isSelfSigned
            }
            ,
            B.prototype.GetSignIssuer = function() {
                return this.signIssuer
            }
            ,
            B.prototype.GetSignSerial = function() {
                return this.signSerial
            }
            ,
            B.prototype.GetSubjUNZR = function() {
                return this.subjUNZR
            }
            ,
            B.prototype.GetSubjCountry = function() {
                return this.subjCountry
            }
            ,
            B.prototype.IsQSCD = function() {
                return this.isQSCD
            }
            ;
            var F = function() {
                this.setClassInfo("EndUserInfo", 3),
                this.fields = {
                    commonName: "string",
                    locality: "string",
                    state: "string",
                    organization: "string",
                    orgUnit: "string",
                    title: "string",
                    street: "string",
                    phone: "string",
                    surname: "string",
                    givenname: "string",
                    EMail: "string",
                    DNS: "string",
                    EDRPOUCode: "string",
                    DRFOCode: "string",
                    NBUCode: "string",
                    SPFMCode: "string",
                    OCode: "string",
                    OUCode: "string",
                    userCode: "string",
                    UPN: "string",
                    UNZR: "string",
                    country: "string"
                },
                this.initializeFields()
            };
            g.makeTransferable(F),
            F.prototype.GetCommonName = function() {
                return this.commonName
            }
            ,
            F.prototype.SetCommonName = function(c) {
                this.commonName = c
            }
            ,
            F.prototype.GetLocality = function() {
                return this.locality
            }
            ,
            F.prototype.SetLocality = function(c) {
                this.locality = c
            }
            ,
            F.prototype.GetState = function() {
                return this.state
            }
            ,
            F.prototype.SetState = function(c) {
                this.state = c
            }
            ,
            F.prototype.GetOrganization = function() {
                return this.organization
            }
            ,
            F.prototype.SetOrganization = function(c) {
                this.organization = c
            }
            ,
            F.prototype.GetOrgUnit = function() {
                return this.orgUnit
            }
            ,
            F.prototype.SetOrgUnit = function(c) {
                this.orgUnit = c
            }
            ,
            F.prototype.GetTitle = function() {
                return this.title
            }
            ,
            F.prototype.SetTitle = function(c) {
                this.title = c
            }
            ,
            F.prototype.GetStreet = function() {
                return this.street
            }
            ,
            F.prototype.SetStreet = function(c) {
                this.street = c
            }
            ,
            F.prototype.GetPhone = function() {
                return this.phone
            }
            ,
            F.prototype.SetPhone = function(c) {
                this.phone = c
            }
            ,
            F.prototype.GetSurname = function() {
                return this.surname
            }
            ,
            F.prototype.SetSurname = function(c) {
                this.surname = c
            }
            ,
            F.prototype.GetGivenname = function() {
                return this.givenname
            }
            ,
            F.prototype.SetGivenname = function(c) {
                this.givenname = c
            }
            ,
            F.prototype.GetEMail = function() {
                return this.EMail
            }
            ,
            F.prototype.SetEMail = function(c) {
                this.EMail = c
            }
            ,
            F.prototype.GetDNS = function() {
                return this.DNS
            }
            ,
            F.prototype.SetDNS = function(c) {
                this.DNS = c
            }
            ,
            F.prototype.GetEDRPOUCode = function() {
                return this.EDRPOUCode
            }
            ,
            F.prototype.SetEDRPOUCode = function(c) {
                this.EDRPOUCode = c
            }
            ,
            F.prototype.GetDRFOCode = function() {
                return this.DRFOCode
            }
            ,
            F.prototype.SetDRFOCode = function(c) {
                this.DRFOCode = c
            }
            ,
            F.prototype.GetNBUCode = function() {
                return this.NBUCode
            }
            ,
            F.prototype.SetNBUCode = function(c) {
                this.NBUCode = c
            }
            ,
            F.prototype.GetSPFMCode = function() {
                return this.SPFMCode
            }
            ,
            F.prototype.SetSPFMCode = function(c) {
                this.SPFMCode = c
            }
            ,
            F.prototype.GetOCode = function() {
                return this.OCode
            }
            ,
            F.prototype.SetOCode = function(c) {
                this.OCode = c
            }
            ,
            F.prototype.GetOUCode = function() {
                return this.OUCode
            }
            ,
            F.prototype.SetOUCode = function(c) {
                this.OUCode = c
            }
            ,
            F.prototype.GetUserCode = function() {
                return this.userCode
            }
            ,
            F.prototype.SetUserCode = function(c) {
                this.userCode = c
            }
            ,
            F.prototype.GetUPN = function() {
                return this.UPN
            }
            ,
            F.prototype.SetUPN = function(c) {
                this.UPN = c
            }
            ,
            F.prototype.GetUNZR = function() {
                return this.UNZR
            }
            ,
            F.prototype.SetUNZR = function(c) {
                this.UNZR = c
            }
            ,
            F.prototype.GetCountry = function() {
                return this.country
            }
            ,
            F.prototype.SetCountry = function(c) {
                this.country = c
            }
            ;
            var G = function() {
                this.setClassInfo("EndUserParams", 1),
                this.fields = {
                    SN: "number",
                    commonName: "string",
                    locality: "string",
                    state: "string",
                    organization: "string",
                    orgUnit: "string",
                    title: "string",
                    street: "string",
                    phone: "string",
                    surname: "string",
                    givenname: "string",
                    EMail: "string",
                    DNS: "string",
                    EDRPOUCode: "string",
                    DRFOCode: "string",
                    NBUCode: "string",
                    SPFMCode: "string",
                    information: "string",
                    passPhrase: "string",
                    isPublishCertificate: "boolean",
                    RAAdminSN: "number"
                },
                this.initializeFields()
            };
            g.makeTransferable(G),
            G.prototype.GetSN = function() {
                return this.SN
            }
            ,
            G.prototype.SetSN = function(c) {
                this.SN = c
            }
            ,
            G.prototype.GetCommonName = function() {
                return this.commonName
            }
            ,
            G.prototype.SetCommonName = function(c) {
                this.commonName = c
            }
            ,
            G.prototype.GetLocality = function() {
                return this.locality
            }
            ,
            G.prototype.SetLocality = function(c) {
                this.locality = c
            }
            ,
            G.prototype.GetState = function() {
                return this.state
            }
            ,
            G.prototype.SetState = function(c) {
                this.state = c
            }
            ,
            G.prototype.GetOrganization = function() {
                return this.organization
            }
            ,
            G.prototype.SetOrganization = function(c) {
                this.organization = c
            }
            ,
            G.prototype.GetOrgUnit = function() {
                return this.orgUnit
            }
            ,
            G.prototype.SetOrgUnit = function(c) {
                this.orgUnit = c
            }
            ,
            G.prototype.GetTitle = function() {
                return this.title
            }
            ,
            G.prototype.SetTitle = function(c) {
                this.title = c
            }
            ,
            G.prototype.GetStreet = function() {
                return this.street
            }
            ,
            G.prototype.SetStreet = function(c) {
                this.street = c
            }
            ,
            G.prototype.GetPhone = function() {
                return this.phone
            }
            ,
            G.prototype.SetPhone = function(c) {
                this.phone = c
            }
            ,
            G.prototype.GetSurname = function() {
                return this.surname
            }
            ,
            G.prototype.SetSurname = function(c) {
                this.surname = c
            }
            ,
            G.prototype.GetGivenname = function() {
                return this.givenname
            }
            ,
            G.prototype.SetGivenname = function(c) {
                this.givenname = c
            }
            ,
            G.prototype.GetEMail = function() {
                return this.EMail
            }
            ,
            G.prototype.SetEMail = function(c) {
                this.EMail = c
            }
            ,
            G.prototype.GetDNS = function() {
                return this.DNS
            }
            ,
            G.prototype.SetDNS = function(c) {
                this.DNS = c
            }
            ,
            G.prototype.GetEDRPOUCode = function() {
                return this.EDRPOUCode
            }
            ,
            G.prototype.SetEDRPOUCode = function(c) {
                this.EDRPOUCode = c
            }
            ,
            G.prototype.GetDRFOCode = function() {
                return this.DRFOCode
            }
            ,
            G.prototype.SetDRFOCode = function(c) {
                this.DRFOCode = c
            }
            ,
            G.prototype.GetNBUCode = function() {
                return this.NBUCode
            }
            ,
            G.prototype.SetNBUCode = function(c) {
                this.NBUCode = c
            }
            ,
            G.prototype.GetSPFMCode = function() {
                return this.SPFMCode
            }
            ,
            G.prototype.SetSPFMCode = function(c) {
                this.SPFMCode = c
            }
            ,
            G.prototype.GetInformation = function() {
                return this.information
            }
            ,
            G.prototype.SetInformation = function(c) {
                this.information = c
            }
            ,
            G.prototype.GetPassPhrase = function() {
                return this.passPhrase
            }
            ,
            G.prototype.SetPassPhrase = function(c) {
                this.passPhrase = c
            }
            ,
            G.prototype.GetIsPublishCertificate = function() {
                return this.isPublishCertificate
            }
            ,
            G.prototype.SetIsPublishCertificate = function(c) {
                this.isPublishCertificate = c
            }
            ,
            G.prototype.GetRAAdminSN = function() {
                return this.RAAdminSN
            }
            ,
            G.prototype.SetRAAdminSN = function(c) {
                this.RAAdminSN = c
            }
            ;
            var M = function() {
                this.setClassInfo("EndUserOperationContext", 1),
                this.fields = {
                    handle: "string"
                },
                this.initializeFields(),
                this.handle = null
            };
            g.makeTransferable(M),
            M.prototype.GetHandle = function() {
                return this.handle
            }
            ;
            var Q = function() {
                this.setClassInfo("EndUserSession", 1),
                this.fields = {
                    handle: "string",
                    data: "byteArray"
                },
                this.initializeFields()
            };
            g.makeTransferable(Q),
            Q.prototype.GetHandle = function() {
                return this.handle
            }
            ,
            Q.prototype.GetData = function() {
                return this.data
            }
            ,
            Q.prototype.SetData = function(c) {
                this.data = c
            }
            ;
            var J = function() {
                this.setClassInfo("EndUserSCClientStatistic", 1),
                this.fields = {
                    activeSessions: "number",
                    gatedSessions: "number",
                    unprotectedData: "number",
                    protectedData: "number"
                },
                this.initializeFields()
            };
            g.makeTransferable(J),
            J.prototype.GetActiveSessions = function() {
                return this.activeSessions
            }
            ,
            J.prototype.GetGatedSessions = function() {
                return this.gatedSessions
            }
            ,
            J.prototype.GetUnprotectedData = function() {
                return this.unprotectedData
            }
            ,
            J.prototype.GetProtectedData = function() {
                return this.protectedData
            }
            ;
            var z = function() {
                this.setClassInfo("EndUserDeviceContext", 1),
                this.fields = {
                    handle: "string"
                },
                this.initializeFields(),
                this.handle = null
            };
            g.makeTransferable(z),
            z.prototype.GetHandle = function() {
                return this.handle
            }
            ;
            var K = function() {
                this.setClassInfo("EndUserTransportHeader", 1),
                this.fields = {
                    receiptNumber: "number",
                    cryptoData: "byteArray"
                },
                this.initializeFields()
            };
            g.makeTransferable(K),
            K.prototype.GetReceiptNumber = function() {
                return this.receiptNumber
            }
            ,
            K.prototype.GetCryptoData = function() {
                return this.cryptoData
            }
            ;
            var H = function() {
                this.setClassInfo("EndUserCryptoHeader", 1),
                this.fields = {
                    caType: "string",
                    headerType: "number",
                    headerSize: "number",
                    cryptoData: "byteArray"
                },
                this.initializeFields()
            };
            g.makeTransferable(H),
            H.prototype.GetCAType = function() {
                return this.caType
            }
            ,
            H.prototype.GetHeaderType = function() {
                return this.headerType
            }
            ,
            H.prototype.GetHeaderSize = function() {
                return this.headerSize
            }
            ,
            H.prototype.GetCryptoData = function() {
                return this.cryptoData
            }
            ;
            var V = function() {
                this.setClassInfo("EndUserContext", 1),
                this.fields = {
                    handle: "string"
                },
                this.initializeFields()
            };
            g.makeTransferable(V),
            V.prototype.GetHandle = function() {
                return this.handle
            }
            ;
            var Y = function() {
                this.setClassInfo("EndUserHashContext", 1),
                this.fields = {
                    handle: "string"
                },
                this.initializeFields()
            };
            g.makeTransferable(Y),
            Y.prototype.GetHandle = function() {
                return this.handle
            }
            ;
            var W = function() {
                this.setClassInfo("EndUserPrivateKeyContext", 1),
                this.fields = {
                    handle: "string",
                    ownerInfo: "EndUserOwnerInfo"
                },
                this.initializeFields()
            };
            g.makeTransferable(W),
            W.prototype.GetHandle = function() {
                return this.handle
            }
            ,
            W.prototype.GetOwnerInfo = function() {
                return this.ownerInfo
            }
            ;
            var X = function(c, e) {
                this.errorCode = c,
                this.message = e,
                this.toString = function() {
                    return this.message + " (" + this.errorCode + ")"
                }
                ,
                this.GetErrorCode = function() {
                    return this.errorCode
                }
                ,
                this.GetMessage = function() {
                    return this.message
                }
            };
            X.ERROR_NONE = 0,
            X.ERROR_UNKNOWN = 65535,
            X.ERROR_NOT_SUPPORTED = 65534,
            X.ERROR_NOT_INITIALIZED = 1,
            X.ERROR_BAD_PARAMETER = 2,
            X.ERROR_LIBRARY_LOAD = 3,
            X.ERROR_READ_SETTINGS = 4,
            X.ERROR_TRANSMIT_REQUEST = 5,
            X.ERROR_MEMORY_ALLOCATION = 6,
            X.WARNING_END_OF_ENUM = 7,
            X.ERROR_PROXY_NOT_AUTHORIZED = 8,
            X.ERROR_NO_GUI_DIALOGS = 9,
            X.ERROR_DOWNLOAD_FILE = 10,
            X.ERROR_WRITE_SETTINGS = 11,
            X.ERROR_CANCELED_BY_GUI = 12,
            X.ERROR_OFFLINE_MODE = 13,
            X.ERROR_KEY_MEDIAS_FAILED = 17,
            X.ERROR_KEY_MEDIAS_ACCESS_FAILED = 18,
            X.ERROR_KEY_MEDIAS_READ_FAILED = 19,
            X.ERROR_KEY_MEDIAS_WRITE_FAILED = 20,
            X.WARNING_KEY_MEDIAS_READ_ONLY = 21,
            X.ERROR_KEY_MEDIAS_DELETE = 22,
            X.ERROR_KEY_MEDIAS_CLEAR = 23,
            X.ERROR_BAD_PRIVATE_KEY = 24,
            X.ERROR_PKI_FORMATS_FAILED = 33,
            X.ERROR_CSP_FAILED = 34,
            X.ERROR_BAD_SIGNATURE = 35,
            X.ERROR_AUTH_FAILED = 36,
            X.ERROR_NOT_RECEIVER = 37,
            X.ERROR_STORAGE_FAILED = 49,
            X.ERROR_BAD_CERT = 50,
            X.ERROR_CERT_NOT_FOUND = 51,
            X.ERROR_INVALID_CERT_TIME = 52,
            X.ERROR_CERT_IN_CRL = 53,
            X.ERROR_BAD_CRL = 54,
            X.ERROR_NO_VALID_CRLS = 55,
            X.ERROR_GET_TIME_STAMP = 65,
            X.ERROR_BAD_TSP_RESPONSE = 66,
            X.ERROR_TSP_SERVER_CERT_NOT_FOUND = 67,
            X.ERROR_TSP_SERVER_CERT_INVALID = 68,
            X.ERROR_GET_OCSP_STATUS = 81,
            X.ERROR_BAD_OCSP_RESPONSE = 82,
            X.ERROR_CERT_BAD_BY_OCSP = 83,
            X.ERROR_OCSP_SERVER_CERT_NOT_FOUND = 84,
            X.ERROR_OCSP_SERVER_CERT_INVALID = 85,
            X.ERROR_LDAP_ERROR = 97,
            X.ERROR_LIBRARY_COMUNICATION_FAILED = 4097,
            X.ERROR_LIBRARY_VERSION_NOT_SUPPORTED = 4098,
            X.ERROR_BROWSER_NOT_SUPPORTED = 65537,
            X.ERROR_OPEN_FILE = 65552,
            X.ERROR_READ_FILE = 65553,
            X.ERROR_WRITE_FILE = 65554,
            X.ERROR_DESCRIPTIONS_EX = [],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_NONE] = ["Виконано успішно", "Выполнено успешно", "Executed successfully"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_NOT_SUPPORTED] = ["Операція не підтримується", "Операция не поддерживается", "Operation is not supported"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_UNKNOWN] = ["Невідома помилка", "Неизвестная ошибка", "Unknown error"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_LIBRARY_LOAD] = ["Виникла помилка при завантаженні криптографічної бібліотеки", "Возникла ошибка при загрузке криптографической библиотеки", "Error at load crypto library"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_NOT_INITIALIZED] = ["Бібліотека не ініціалізована", "Библиотека не инициализирована", "Library is not initialized"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_BAD_PARAMETER] = ["Невірний параметр", "Неверный параметр", "Incorrect parameter"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_BAD_CERT] = ["Сертифікат пошкоджений або не може бути використаний", "Сертификат поврежден или не может быть использован", "Certificate corrupted or cannot be used"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_CERT_NOT_FOUND] = ["Сертифікат не знайдено", "Сертификат не найден", "Certificate not found"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_TRANSMIT_REQUEST] = ["Виникла помилка при передачі запиту на сервер ЦСК за протоколом HTTP", "Возникла ошибка при передаче запроса на сервер ЦСК по протоколу HTTP", "Error at request transfer to CA's server by HTTP protocol"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_DOWNLOAD_FILE] = ["Виникла помилка при завантаженні файлу з HTTP-сервера", "Возникла ошибка при загрузке файла с HTTP-сервера", "Error at the load of file from a HTTP-server"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_LIBRARY_COMUNICATION_FAILED] = ["Виникла помилка при взаємодії з криптографічною бібліотекою", "Возникла ошибка при взаимодействии с криптографической библиотекой", "Error at comunication with crypto library"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_LIBRARY_VERSION_NOT_SUPPORTED] = ["Встановлена версія бібліотеки не підтримується", "Установленная версия библиотеки не поддерживается", "The installed version of the library is not supported"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_BROWSER_NOT_SUPPORTED] = ["Ваш браузер не підтримується", "Ваш браузер не поддерживается", "Your browser is not supported"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_OPEN_FILE] = ["Виникла помилка при відкритті файлу", "Возникла ошибка при открытии файла", "Error at open file"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_READ_FILE] = ["Виникла помилка при зчитуванні файлу", "Возникла ошибка при чтении файла", "Error at read file"],
            X.ERROR_DESCRIPTIONS_EX[X.ERROR_WRITE_FILE] = ["Виникла помилка при записі файлу", "Возникла ошибка при записи файла", "Error at write file"],
            X.isError = function(c) {
                return c != X.ERROR_NONE
            }
            ,
            X.isSuccess = function(c) {
                return c == X.ERROR_NONE
            }
            ,
            X.getErrorDescriptionEx = function(c, e) {
                var a, r;
                return void 0 === (a = X.ERROR_DESCRIPTIONS_EX[c]) && (a = X.ERROR_DESCRIPTIONS_EX[X.ERROR_UNKNOWN]),
                void 0 === (r = a[e - 1]) ? a[0] : r
            }
            ;
            var $ = function(c, e) {
                this.vendor = "JSC IIT",
                this.classVersion = "1.3.48",
                this.className = "EUSignCP",
                this.SUBJECT_TYPE_UNDIFFERENCED = 0,
                this.SUBJECT_TYPE_CA = 1,
                this.SUBJECT_TYPE_CA_SERVER = 2,
                this.SUBJECT_TYPE_RA_ADMINISTRATOR = 3,
                this.SUBJECT_TYPE_END_USER = 4,
                this.EU_SUBJECT_TYPE_UNDIFFERENCED = this.SUBJECT_TYPE_UNDIFFERENCED,
                this.EU_SUBJECT_TYPE_CA = this.SUBJECT_TYPE_CA,
                this.EU_SUBJECT_TYPE_CA_SERVER = this.SUBJECT_TYPE_CA_SERVER,
                this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR = this.SUBJECT_TYPE_RA_ADMINISTRATOR,
                this.EU_SUBJECT_TYPE_END_USER = this.SUBJECT_TYPE_END_USER,
                this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0,
                this.SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1,
                this.SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2,
                this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3,
                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = this.SUBJECT_CA_SERVER_SUB_TYPE_CMP,
                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = this.SUBJECT_CA_SERVER_SUB_TYPE_TSP,
                this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP,
                this.CERT_KEY_TYPE_UNKNOWN = 0,
                this.CERT_KEY_TYPE_DSTU4145 = 1,
                this.CERT_KEY_TYPE_RSA = 2,
                this.CERT_KEY_TYPE_ECDSA = 4,
                this.EU_CERT_KEY_TYPE_UNKNOWN = this.CERT_KEY_TYPE_UNKNOWN,
                this.EU_CERT_KEY_TYPE_DSTU4145 = this.CERT_KEY_TYPE_DSTU4145,
                this.EU_CERT_KEY_TYPE_RSA = this.CERT_KEY_TYPE_RSA,
                this.EU_CERT_KEY_TYPE_ECDSA = this.CERT_KEY_TYPE_ECDSA,
                this.KEY_USAGE_UNKNOWN = 0,
                this.KEY_USAGE_DIGITAL_SIGNATUR = 1,
                this.KEY_KEY_USAGE_KEY_AGREEMENT = 16,
                this.EU_KEY_USAGE_UNKNOWN = this.KEY_USAGE_UNKNOWN,
                this.EU_KEY_USAGE_DIGITAL_SIGNATURE = this.KEY_USAGE_DIGITAL_SIGNATUR,
                this.EU_KEY_USAGE_KEY_AGREEMENT = this.KEY_KEY_USAGE_KEY_AGREEMENT,
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
                this.EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128,
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
                this.m_language = this.EU_DEFAULT_LANG,
                this.m_lastErrorCode = X.ERROR_NONE,
                this.m_lastError = "",
                this.m_charset = "UTF-8",
                this.m_stringCoder = new a,
                this.m_base64Coder = new b,
                this.m_dateCoder = new n,
                this.m_browserInfo = new f;
                var r = 1;
                switch (c) {
                case "chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/":
                    r = 2,
                    this.m_browserInfo.GetName() == f.BROWSER_NAME_FIREFOX && (c = "eusw@iit.com.ua");
                    break;
                case "clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B":
                    r = 4;
                    break;
                case "application/x-eusign-cp":
                    r = 3
                }
                this.m_jsonRpcClient = new u(r,c,e,"https:" == window.location.protocol),
                this.m_monitorLibraryTimer = null
            };
            return $.prototype._funcMakeParams = function(e) {
                var a = [];
                null == e && (e = []);
                for (var r = function(e) {
                    if (c(e))
                        return e.encode();
                    if (Array.isArray(e)) {
                        for (var a = e.length, i = [], t = 0; t < a; t++)
                            i[t] = r(e[t]);
                        return i
                    }
                    return e
                }, i = e.length, t = 0; t < i; t++)
                    a[t] = r(e[t]);
                return a
            }
            ,
            $.prototype._funcCall = function(c, e, a, r, i) {
                var t;
                if (!this.IsAsync(a, r))
                    return t = this.m_jsonRpcClient.execute(c, e, null),
                    t = this._funcHandleResult(t),
                    i ? i(t) : t;
                var n = null == i ? a : function(c) {
                    i(c, a, r)
                }
                  , b = this;
                this.m_jsonRpcClient.execute(c, e, function(c) {
                    b._funcHandleResult(c, n, r)
                })
            }
            ,
            $.prototype._funcHandleResult = function(c, a, r) {
                var i, t, n = this.IsAsync(a, r);
                if (null == c) {
                    if (i = this.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
                    n)
                        return void r(i);
                    throw new e(i.errorCode,i.message)
                }
                if (t = (i = c.error).code,
                X.isError(t)) {
                    if (t == X.WARNING_END_OF_ENUM)
                        return n ? void a(null) : null;
                    if (i = this.MakeError(t, i.message),
                    n)
                        return void r(i);
                    throw new e(i.errorCode,i.message)
                }
                try {
                    c = this._funcDecodeResult(c.result)
                } catch (c) {
                    if (i = this.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
                    n)
                        return void r(i);
                    throw new e(i.errorCode,i.message)
                }
                if (!n)
                    return c;
                a(c)
            }
            ,
            $.prototype._funcDecodeResult = function(c) {
                if (null == c)
                    return null;
                var e = function(c) {
                    if (Array.isArray(c)) {
                        for (var a = [], r = c.length, i = 0; i < r; i++)
                            a[i] = e(c[i]);
                        return a
                    }
                    if ("object" == typeof c) {
                        var t, n = c.className;
                        return (t = new g[n]).decode(c) ? "EndUserByteArray" == t.className ? t.GetData() : t : null
                    }
                    return c
                };
                return e(c)
            }
            ,
            $.prototype._checkVersion = function(c) {
                try {
                    var e = this.classVersion;
                    if (e == c)
                        return !0;
                    if (e = e.split("."),
                    c = c.split("."),
                    e.length != c.length)
                        return !1;
                    for (var a = 0; a < c.length; a++)
                        if (parseInt(e[a]) > parseInt(c[a]))
                            return !1
                } catch (c) {
                    return !1
                }
                return !0
            }
            ,
            $.prototype._stringToBytes = function(c, a) {
                try {
                    return this.m_stringCoder.encode(c)
                } catch (c) {
                    var r = this.MakeError(X.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== a)
                        return setTimeout(function() {
                            a(r)
                        }, 1),
                        null;
                    throw new e(r.errorCode,r.message)
                }
            }
            ,
            $.prototype._bytesToString = function(c, a) {
                try {
                    return this.m_stringCoder.decode(c)
                } catch (c) {
                    var r = this.MakeError(X.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== a)
                        return setTimeout(function() {
                            a(r)
                        }, 1),
                        null;
                    throw new e(r.errorCode,r.message)
                }
            }
            ,
            $.prototype._base64Encode = function(c, a) {
                try {
                    return this.m_base64Coder.encode(c)
                } catch (c) {
                    var r = this.MakeError(X.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== a)
                        return setTimeout(function() {
                            a(r)
                        }, 1),
                        null;
                    throw new e(r.errorCode,r.message)
                }
            }
            ,
            $.prototype._base64Decode = function(c, a) {
                try {
                    return this.m_base64Coder.decode(c)
                } catch (c) {
                    var r = this.MakeError(X.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== a)
                        return setTimeout(function() {
                            a(r)
                        }, 1),
                        null;
                    throw new e(r.errorCode,r.message)
                }
            }
            ,
            $.prototype._copyArrayData = function(c, e) {
                try {
                    if (c.length != e.length)
                        return !1;
                    if (Array.isArray(e) || Array.isArray(c))
                        for (var a = 0; a < e.length; a++)
                            c[a] = e[a];
                    else
                        c.set(e);
                    return !0
                } catch (c) {
                    return !1
                }
            }
            ,
            $.prototype._startMonitorLibraryStatus = function() {
                var c = this;
                try {
                    c.m_monitorLibraryTimer = setInterval(function() {
                        c.IsInitialized(function(e) {
                            e || c._stopMonitorLibraryStatus()
                        }, function(e) {
                            c._stopMonitorLibraryStatus()
                        })
                    }, 6e5)
                } catch (c) {}
            }
            ,
            $.prototype._stopMonitorLibraryStatus = function() {
                try {
                    if (null == this.m_monitorLibraryTimer)
                        return;
                    clearInterval(this.m_monitorLibraryTimer),
                    this.m_monitorLibraryTimer = null
                } catch (c) {}
            }
            ,
            $.prototype.IsAsync = function(c, e) {
                return void 0 !== c && void 0 !== e
            }
            ,
            $.prototype.MakeError = function(c, e) {
                return "" == e && (e = X.getErrorDescriptionEx(c, this.m_language)),
                this.m_lastErrorCode = c,
                this.m_lastError = e,
                new X(c,e)
            }
            ,
            $.prototype.RaiseError = function(c, a) {
                var r;
                throw new e((r = this.MakeError(c, a)).errorCode,r.message)
            }
            ,
            $.prototype.GetInstallURL = function(c, e) {
                var a = this.m_browserInfo.GetOSName()
                  , r = this.m_browserInfo.GetArch()
                  , i = [];
                e = e || "http://iit.com.ua/download/productfiles";
                var t = function(c) {
                    i.push(e + "/" + c)
                };
                switch (a) {
                case f.OS_NAME_WINDOWS:
                    t("EUSignWebInstall.exe");
                    break;
                case f.OS_NAME_MAC:
                    t("EUSignWebInstall.pkg");
                    break;
                case f.OS_NAME_LINUX:
                    r == f.BROWSER_ARCH_NAME_X86 ? (t("euswi.deb"),
                    t("euswi.rpm"),
                    t("euswi.tar")) : (t("euswi.64.deb"),
                    t("euswi.64.rpm"),
                    t("euswi.64.tar"));
                    break;
                case f.OS_NAME_ANDROID:
                    t("EUSignWebInstall.apk");
                    break;
                default:
                    return null
                }
                return c ? i : i[0]
            }
            ,
            $.prototype.GetUpdateURL = function(c, e) {
                var a = this.m_browserInfo.GetOSName()
                  , r = this.m_browserInfo.GetArch()
                  , i = [];
                e = e || "http://iit.com.ua/download/productfiles";
                var t = function(c) {
                    i.push(e + "/" + c)
                };
                switch (a) {
                case f.OS_NAME_WINDOWS:
                    t("EUSignWebUpdate.exe");
                    break;
                case f.OS_NAME_MAC:
                    t("EUSignWebInstall.pkg");
                    break;
                case f.OS_NAME_LINUX:
                    r == f.BROWSER_ARCH_NAME_X86 ? (t("euswi.deb"),
                    t("euswi.rpm"),
                    t("euswi.tar")) : (t("euswi.64.deb"),
                    t("euswi.64.rpm"),
                    t("euswi.64.tar"));
                    break;
                case f.OS_NAME_ANDROID:
                    t("EUSignWebInstall.apk");
                    break;
                default:
                    return null
                }
                return c ? i : i[0]
            }
            ,
            $.prototype.GetHelpURL = function(c) {
                switch (c = c || "http://iit.com.ua/download/productfiles",
                this.m_browserInfo.GetOSName()) {
                case f.OS_NAME_WINDOWS:
                case f.OS_NAME_MAC:
                case f.OS_NAME_LINUX:
                    return c + "/EUSignWebOManual.pdf";
                default:
                    return null
                }
            }
            ,
            $.prototype.GetWebExtensionInstallURL = function() {
                switch (this.m_browserInfo.GetName()) {
                case f.BROWSER_NAME_CHROME:
                    return "https://chrome.google.com/webstore/detail/%D1%96%D1%96%D1%82-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87-%D1%86%D1%81%D0%BA-1-%D0%B1%D1%96%D0%B1%D0%BB/jffafkigfgmjafhpkoibhfefeaebmccg?utm_source=chrome-app-launcher-info-dialog";
                case f.BROWSER_NAME_FIREFOX:
                    return "https://eu.iit.com.ua/download/productfiles/eusw@iit.com.ua.xpi";
                case f.BROWSER_NAME_OPERA:
                    return "https://addons.opera.com/uk/extensions/details/iit-end-user-ca-1-sign-web-extension/?display=uk";
                default:
                    return null
                }
            }
            ,
            $.prototype.GetInstallPath = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetInstallPath", a, c, e, null)
            }
            ,
            $.prototype.SelectFile = function(c, e, a, r) {
                return this.SelectFileEx(c, e, null, null, null, null, a, r)
            }
            ,
            $.prototype.SelectFileEx = function(c, e, a, r, i, t, n, b) {
                var f;
                return f = this._funcMakeParams([c, e, a, r, i, t]),
                this._funcCall("SelectFile", f, n, b, null)
            }
            ,
            $.prototype.SelectFolder = function(c, e) {
                return this.SelectFolderEx(null, null, null, c, e)
            }
            ,
            $.prototype.SelectFolderEx = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, a]),
                this._funcCall("SelectFolder", t, r, i, null)
            }
            ,
            $.prototype.CreateFolder = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("CreateFolder", r, e, a, null)
            }
            ,
            $.prototype.ReadFile = function(c, e, a) {
                var r = this.IsAsync(e, a)
                  , i = this
                  , t = i.EU_FILE_PROCESS_CHUNK_SIZE;
                if (!r) {
                    for (var n, b = i.GetFileSize(c), f = Math.floor(b / t), d = b % t, u = new Uint8Array(b), o = 0; o < f; o++)
                        n = i.ReadFileWithOffset(c, o * t, t),
                        u.set(n, o * t, n.length);
                    return 0 != d && (n = i.ReadFileWithOffset(c, f * t, d),
                    u.set(n, f * t, n.length)),
                    u
                }
                var l = {
                    buf: null,
                    length: 0,
                    curLength: 0
                }
                  , h = function(r) {
                    if (r.curLength != r.length) {
                        var n = r.length - r.curLength;
                        n > t && (n = t),
                        i.ReadFileWithOffset(c, r.curLength, n, function(c) {
                            r.buf.set(c, r.curLength, c.length),
                            r.curLength += c.length,
                            h(r)
                        }, a)
                    } else
                        e(r.buf)
                };
                i.GetFileSize(c, function(c) {
                    l.buf = new Uint8Array(c),
                    l.length = c,
                    h(l)
                }, a)
            }
            ,
            $.prototype.WriteFile = function(c, e, a, r) {
                var i = this.IsAsync(a, r)
                  , t = this
                  , n = t.EU_FILE_PROCESS_CHUNK_SIZE;
                if (i) {
                    var b = {
                        buf: null,
                        length: 0,
                        curLength: 0
                    }
                      , f = function(e, i) {
                        if (i || e.curLength != e.length) {
                            var b = e.length - e.curLength;
                            b > n && (b = n),
                            t.WriteFileWithOffset(c, e.curLength, t.Copy(e.buf, e.curLength, n), function() {
                                e.curLength += b,
                                f(e, !1)
                            }, r)
                        } else
                            a()
                    };
                    b.buf = e,
                    b.length = e.length,
                    f(b, !0)
                } else {
                    for (var d = e.length, u = Math.floor(d / n), o = d % n, l = 0; l < u; l++)
                        t.WriteFileWithOffset(c, l * n, t.Copy(e, l * n, n));
                    0 == o && 0 != e.length || t.WriteFileWithOffset(c, u * n, t.Copy(e, u * n, o))
                }
            }
            ,
            $.prototype.GetFileSize = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("GetFileSize", r, e, a, null)
            }
            ,
            $.prototype.ReadFileWithOffset = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, a]),
                this._funcCall("ReadFileWithOffset", t, r, i, null)
            }
            ,
            $.prototype.WriteFileWithOffset = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, new k(a)]),
                this._funcCall("WriteFileWithOffset", t, r, i, null)
            }
            ,
            $.prototype.DeleteFile = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("DeleteFile", r, e, a, null)
            }
            ,
            $.prototype.AppendFile = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([c, e]),
                this._funcCall("AppendFile", i, a, r, null)
            }
            ,
            $.prototype.CopyFileWithOffset = function(c, e, a, r, i, t) {
                var n;
                n = this._funcMakeParams([c, e, a, r]),
                this._funcCall("CopyFileWithOffset", n, i, t, null)
            }
            ,
            $.prototype.Load = function(c, e) {
                var a = this;
                if (this.IsAsync(c, e))
                    this.GetVersion(function(r) {
                        if (a._checkVersion(r))
                            c();
                        else {
                            var i = a.MakeError(X.ERROR_LIBRARY_VERSION_NOT_SUPPORTED, "");
                            e(i)
                        }
                    }, function(c) {
                        c = a.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
                        e(c)
                    });
                else {
                    var r;
                    try {
                        r = this._checkVersion(this.GetVersion())
                    } catch (c) {
                        this.RaiseError(X.ERROR_LIBRARY_COMUNICATION_FAILED, "")
                    }
                    r || this.RaiseError(X.ERROR_LIBRARY_VERSION_NOT_SUPPORTED, "")
                }
            }
            ,
            $.prototype.GetVersion = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetVersion", a, c, e, null)
            }
            ,
            $.prototype.IsInitialized = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("IsInitialized", a, c, e, null)
            }
            ,
            $.prototype.Initialize = function(c, e) {
                var a, r = this, i = this.IsAsync(c, e);
                a = this._funcMakeParams(null),
                this._funcCall("Initialize", a, i ? function() {
                    r._startMonitorLibraryStatus(),
                    c()
                }
                : c, e, null),
                i || r._startMonitorLibraryStatus()
            }
            ,
            $.prototype.Finalize = function(c, e) {
                var a;
                this._stopMonitorLibraryStatus(),
                a = this._funcMakeParams(null),
                this._funcCall("Finalize", a, c, e, null)
            }
            ,
            $.prototype.ResetOperation = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("ResetOperation", a, c, e, null)
            }
            ,
            $.prototype.SetUIMode = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetUIMode", r, e, a, null)
            }
            ,
            $.prototype.SetLanguage = function(c, e, a) {
                var r, i = this, t = this.IsAsync(e, a);
                r = this._funcMakeParams([c]),
                this._funcCall("SetLanguage", r, t ? function() {
                    i.m_language = c,
                    e()
                }
                : e, a, null),
                t || (this.m_language = c)
            }
            ,
            $.prototype.SetCharset = function(c, a, r) {
                var i, n = this.IsAsync(a, r);
                if (null == (i = t.GetCoder(c))) {
                    var b = this.MakeError(X.ERROR_BAD_PARAMETER, "");
                    if (n)
                        return void setTimeout(function() {
                            r(b)
                        }, 1);
                    throw new e(b.errorCode,b.message)
                }
                this.m_stringCoder = i,
                this.m_charset = c,
                n && setTimeout(function() {
                    a()
                }, 1)
            }
            ,
            $.prototype.SetRuntimeParameter = function(c, e, a, r) {
                var i;
                "boolean" == typeof e && (e = e ? 1 : 0),
                i = this._funcMakeParams([c, e]),
                this._funcCall("SetRuntimeParameter", i, a, r, null)
            }
            ,
            $.prototype.GetStorageParameter = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetStorageParameter", i, a, r, null)
            }
            ,
            $.prototype.SetStorageParameter = function(c, e, a, r, i) {
                var t;
                t = this._funcMakeParams([c, e, a]),
                this._funcCall("SetStorageParameter", t, r, i, null)
            }
            ,
            $.prototype.CreateArrayList = function() {
                return new h
            }
            ,
            $.prototype.GetLastError = function() {
                return this.m_lastError
            }
            ,
            $.prototype.GetLastErrorCode = function() {
                return this.m_lastErrorCode
            }
            ,
            $.prototype.BASE64Encode = function(c, e, a) {
                var r = this._base64Encode(c, a);
                if (!this.IsAsync(e, a))
                    return r;
                setTimeout(function() {
                    e(r)
                }, 1)
            }
            ,
            $.prototype.BASE64Decode = function(c, e, a) {
                var r = this._base64Decode(c, a);
                if (!this.IsAsync(e, a))
                    return r;
                setTimeout(function() {
                    e(r)
                }, 1)
            }
            ,
            $.prototype.StringToBytes = function(c, e, a) {
                var r = this._stringToBytes(c, a);
                if (!this.IsAsync(e, a))
                    return r;
                setTimeout(function() {
                    e(r)
                }, 1)
            }
            ,
            $.prototype.BytesToString = function(c, e, a) {
                var r = this._bytesToString(c, a);
                if (!this.IsAsync(e, a))
                    return r;
                setTimeout(function() {
                    e(r)
                }, 1)
            }
            ,
            $.prototype.Concatenate = function(c, e) {
                if (Array.isArray(c) && Array.isArray(e))
                    return c.concat(e);
                var a, r = c.length + e.length;
                if (Array.isArray(c) || Array.isArray(e)) {
                    var i, t;
                    for (a = new Array(r),
                    i = 0; i < c.length; i++)
                        a[i] = c[i];
                    for (t = 0; t < e.length; i++,
                    t++)
                        a[i] = e[t]
                } else
                    (a = new s(r)).set(c),
                    a.set(e, c.length);
                return a
            }
            ,
            $.prototype.Copy = function(c, e, a) {
                return c.slice(e, e + a)
            }
            ,
            $.prototype.SetSettings = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("SetSettings", a, c, e, null)
            }
            ,
            $.prototype.DoesNeedSetSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("DoesNeedSetSettings", a, c, e, null)
            }
            ,
            $.prototype.InitializeMandatorySettings = function(c, e) {
                var a, r = this;
                if (this.IsAsync(c, e))
                    (a = function(c) {
                        var a = r.CreateFileStoreSettings();
                        r.SetFileStoreSettings(a, c, e)
                    }
                    ,
                    new function() {
                        var c = this
                          , e = function() {
                            var a;
                            c.deferred.length && ((a = [].slice.call(arguments)).unshift(e),
                            c.deferred[0].apply(c, a),
                            c.deferred.shift())
                        };
                        this.deferred = [],
                        this.eu_wait = function(e) {
                            return this.deferred.push(e),
                            c
                        }
                        ,
                        a(e)
                    }
                    ).eu_wait(function(c) {
                        r.GetProxySettings(function(e) {
                            c()
                        }, function(a) {
                            r.GetSystemProxySettings(function(a) {
                                r.SetProxySettings(a, c, e)
                            }, function(a) {
                                var i = r.CreateProxySettings();
                                r.SetProxySettings(i, c, e)
                            })
                        })
                    }).eu_wait(function(c) {
                        var a = r.CreateTSPSettings();
                        r.SetTSPSettings(a, c, e)
                    }).eu_wait(function(c) {
                        var a = r.CreateLDAPSettings();
                        r.SetLDAPSettings(a, c, e)
                    }).eu_wait(function() {
                        var a = r.CreateOCSPSettings();
                        r.SetOCSPSettings(a, c, e)
                    });
                else {
                    var i, t = r.CreateFileStoreSettings();
                    r.SetFileStoreSettings(t);
                    try {
                        i = r.GetProxySettings()
                    } catch (c) {
                        i = r.CreateProxySettings();
                        try {
                            i = r.GetSystemProxySettings()
                        } catch (c) {}
                        r.SetProxySettings(i)
                    }
                    var n = r.CreateTSPSettings();
                    r.SetTSPSettings(n);
                    var b = r.CreateLDAPSettings();
                    r.SetLDAPSettings(b);
                    var f = r.CreateOCSPSettings();
                    r.SetOCSPSettings(f)
                }
            }
            ,
            $.prototype.CreateModeSettings = function() {
                return new y
            }
            ,
            $.prototype.GetModeSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetModeSettings", a, c, e, null)
            }
            ,
            $.prototype.SetModeSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetModeSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateKeyMediaSettings = function() {
                return new A
            }
            ,
            $.prototype.GetKeyMediaSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetKeyMediaSettings", a, c, e, null)
            }
            ,
            $.prototype.SetKeyMediaSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetKeyMediaSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateFileStoreSettings = function() {
                return new p
            }
            ,
            $.prototype.GetFileStoreSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetFileStoreSettings", a, c, e, null)
            }
            ,
            $.prototype.SetFileStoreSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetFileStoreSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateProxySettings = function() {
                return new m
            }
            ,
            $.prototype.GetProxySettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetProxySettings", a, c, e, null)
            }
            ,
            $.prototype.SetProxySettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetProxySettings", r, e, a, null)
            }
            ,
            $.prototype.CreateOCSPSettings = function() {
                return new E
            }
            ,
            $.prototype.GetOCSPSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetOCSPSettings", a, c, e, null)
            }
            ,
            $.prototype.SetOCSPSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetOCSPSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateOCSPAccessInfoModeSettings = function() {
                return new L
            }
            ,
            $.prototype.GetOCSPAccessInfoModeSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetOCSPAccessInfoModeSettings", a, c, e, null)
            }
            ,
            $.prototype.SetOCSPAccessInfoModeSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetOCSPAccessInfoModeSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateOCSPAccessInfoSettings = function() {
                return new S
            }
            ,
            $.prototype.EnumOCSPAccessInfoSettings = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("EnumOCSPAccessInfoSettings", r, e, a, null)
            }
            ,
            $.prototype.GetOCSPAccessInfoSettings = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("GetOCSPAccessInfoSettings", r, e, a, null)
            }
            ,
            $.prototype.SetOCSPAccessInfoSettings = function(c, e, a) {
                var r, i = this, t = i.IsAsync(e, a);
                if (c = Array.isArray(c) ? c : [c],
                t) {
                    var n = function(t) {
                        t >= c.length ? e() : (r = i._funcMakeParams([c[t]]),
                        i._funcCall("SetOCSPAccessInfoSettings", r, function() {
                            n(t + 1)
                        }, a, null))
                    };
                    n(0)
                } else
                    for (var b = 0; b < c.length; b++)
                        r = i._funcMakeParams([c[b]]),
                        i._funcCall("SetOCSPAccessInfoSettings", r, e, a, null)
            }
            ,
            $.prototype.DeleteOCSPAccessInfoSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("DeleteOCSPAccessInfoSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateTSPSettings = function() {
                return new v
            }
            ,
            $.prototype.GetTSPSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetTSPSettings", a, c, e, null)
            }
            ,
            $.prototype.SetTSPSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetTSPSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateLDAPSettings = function() {
                return new _
            }
            ,
            $.prototype.GetLDAPSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetLDAPSettings", a, c, e, null)
            }
            ,
            $.prototype.SetLDAPSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetLDAPSettings", r, e, a, null)
            }
            ,
            $.prototype.CreateCMPSettings = function() {
                return new w
            }
            ,
            $.prototype.GetCMPSettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetCMPSettings", a, c, e, null)
            }
            ,
            $.prototype.SetCMPSettings = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SetCMPSettings", r, e, a, null)
            }
            ,
            $.prototype.GetSystemProxySettings = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetSystemProxySettings", a, c, e, null)
            }
            ,
            $.prototype.RefreshFileStore = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("RefreshFileStore", r, e, a, null)
            }
            ,
            $.prototype.ShowCertificates = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("ShowCertificates", a, c, e, null)
            }
            ,
            $.prototype.SelectCertificateInfo = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("SelectCertificateInfo", a, c, e, null)
            }
            ,
            $.prototype.GetCertificatesCount = function(c, e, a, r) {
                var i;
                return "number" == typeof c && "number" == typeof e || (a = c,
                r = e,
                c = this.SUBJECT_TYPE_UNDIFFERENCED,
                e = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED),
                i = this._funcMakeParams([c, e]),
                this._funcCall("GetCertificatesCount", i, a, r, null)
            }
            ,
            $.prototype.GetCACertificatesCount = function(c, e) {
                return this.GetCertificatesCount(this.SUBJECT_TYPE_CA, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, c, e)
            }
            ,
            $.prototype.GetCAServerCertificatesCount = function(c, e) {
                return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, c, e)
            }
            ,
            $.prototype.GetCMPServerCertificatesCount = function(c, e) {
                return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_CMP, c, e)
            }
            ,
            $.prototype.GetOCSPServerCertificatesCount = function(c, e) {
                return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP, c, e)
            }
            ,
            $.prototype.GetTSPServerCertificatesCount = function(c, e) {
                return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_TSP, c, e)
            }
            ,
            $.prototype.GetRAAdministratorCertificatesCount = function(c, e) {
                return this.GetCertificatesCount(this.SUBJECT_TYPE_RA_ADMINISTRATOR, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, c, e)
            }
            ,
            $.prototype.GetEndUserCertificatesCount = function(c, e) {
                return this.GetCertificatesCount(this.SUBJECT_TYPE_END_USER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, c, e)
            }
            ,
            $.prototype.EnumCertificates = function(c, e, a, r, i) {
                var t;
                return "number" == typeof e && "number" == typeof a || (r = e,
                i = a,
                a = c,
                c = this.SUBJECT_TYPE_UNDIFFERENCED,
                e = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED),
                t = this._funcMakeParams([c, e, a]),
                this._funcCall("EnumCertificates", t, r, i, null)
            }
            ,
            $.prototype.EnumCACertificates = function(c, e, a) {
                return this.EnumCertificates(c, this.SUBJECT_TYPE_CA, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, e, a)
            }
            ,
            $.prototype.EnumCAServerCertificates = function(c, e, a) {
                return this.EnumCertificates(c, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, e, a)
            }
            ,
            $.prototype.EnumCMPServerCertificatesCount = function(c, e, a) {
                return this.EnumCertificates(c, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_CMP, e, a)
            }
            ,
            $.prototype.EnumOCSPServerCertificatesCount = function(c, e, a) {
                return this.EnumCertificates(c, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP, e, a)
            }
            ,
            $.prototype.EnumTSPServerCertificatesCount = function(c, e, a) {
                return this.EnumCertificates(c, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_TSP, e, a)
            }
            ,
            $.prototype.EnumRAAdministratorCertificatesCount = function(c, e, a) {
                return this.EnumCertificates(c, this.SUBJECT_TYPE_RA_ADMINISTRATOR, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, e, a)
            }
            ,
            $.prototype.EnumEndUserCertificatesCount = function(c, e, a) {
                return this.EnumCertificates(c, this.SUBJECT_TYPE_END_USER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, e, a)
            }
            ,
            $.prototype.GetCertificateInfo = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetCertificateInfo", i, a, r, null)
            }
            ,
            $.prototype.GetCertificateInfoEx = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetCertificateInfoEx", i, a, r, null)
            }
            ,
            $.prototype.GetCertificate = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetCertificate", i, a, r, null)
            }
            ,
            $.prototype.CheckCertificateByIssuerAndSerial = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("CheckCertificateByIssuerAndSerial", i, a, r, null)
            }
            ,
            $.prototype.CheckCertificate = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("CheckCertificate", r, e, a, null)
            }
            ,
            $.prototype.ParseCertificate = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("ParseCertificate", r, e, a, null)
            }
            ,
            $.prototype.ParseCertificateEx = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("ParseCertificateEx", r, e, a, null)
            }
            ,
            $.prototype.SaveCertificate = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("SaveCertificate", r, e, a, null)
            }
            ,
            $.prototype.SaveCertificates = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("SaveCertificates", r, e, a, null)
            }
            ,
            $.prototype.SaveCertificatesEx = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([new k(c), e ? new k(e) : null]),
                this._funcCall("SaveCertificatesEx", i, a, r, null)
            }
            ,
            $.prototype.GetCertificatesFromLDAPByEDRPOUCode = function(c, e, a, r, i, t, n) {
                var b;
                return null != r && null != i ? ("EndUserArrayList" == r.className && (r = r.m_array),
                "EndUserArrayList" == i.className && (i = i.m_array)) : (r = null,
                i = null),
                b = this._funcMakeParams([c, e, a, r, i]),
                this._funcCall("GetCertificatesFromLDAPByEDRPOUCode", b, t, n, null)
            }
            ,
            $.prototype.GetCertificateByEmail = function(c, e, a, r, i, t) {
                var n;
                return "string" != typeof r && (r = this.m_dateCoder.encode(r)),
                n = this._funcMakeParams([c, e, a, r]),
                this._funcCall("GetCertificateByEmail", n, i, t, null)
            }
            ,
            $.prototype.GetCertificateByNBUCode = function(c, e, a, r, i, t) {
                var n;
                return "string" != typeof r && (r = this.m_dateCoder.encode(r)),
                n = this._funcMakeParams([c, e, a, r]),
                this._funcCall("GetCertificateByNBUCode", n, i, t, null)
            }
            ,
            $.prototype.GetReceiversCertificates = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetReceiversCertificates", a, c, e, null)
            }
            ,
            $.prototype.GetReceiversCertificatesInArrayList = function(c, a) {
                var r, i = this;
                return r = this._funcMakeParams(null),
                this._funcCall("GetReceiversCertificates", r, c, a, function(c, a, r) {
                    var t = i.IsAsync(a, r);
                    try {
                        for (var n = new h, b = 0; b < c.length; b++)
                            n.add(c[b]);
                        if (!t)
                            return n;
                        a(n)
                    } catch (c) {
                        var f = i.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, "");
                        if (t)
                            return void r(f);
                        throw new e(f.errorCode,f.message)
                    }
                })
            }
            ,
            $.prototype.GetCertificates = function(c, a, r, i) {
                var t, n = this;
                return t = this._funcMakeParams([c, a]),
                this._funcCall("GetCertificates", t, r, i, function(c, a, r) {
                    var i = n.IsAsync(a, r);
                    try {
                        for (var t = new h, b = 0; b < c.length; b++)
                            t.add(c[b]);
                        if (!i)
                            return t;
                        a(t)
                    } catch (c) {
                        var f = n.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, "");
                        if (i)
                            return void r(f);
                        throw new e(f.errorCode,f.message)
                    }
                })
            }
            ,
            $.prototype.GetCertificateByFingerprint = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("GetCertificateByFingerprint", r, e, a, null)
            }
            ,
            $.prototype.GetCertificatesByEDRPOUAndDRFOCode = function(c, a, r, i) {
                var t, n = this;
                return t = this._funcMakeParams([c, a]),
                this._funcCall("GetCertificatesByEDRPOUAndDRFOCode", t, r, i, function(c, a, r) {
                    var i = n.IsAsync(a, r);
                    try {
                        for (var t = new h, b = 0; b < c.length; b++)
                            t.add(c[b]);
                        if (!i)
                            return t;
                        a(t)
                    } catch (c) {
                        var f = n.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, "");
                        if (i)
                            return void r(f);
                        throw new e(f.errorCode,f.message)
                    }
                })
            }
            ,
            $.prototype.ShowCRLs = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("ShowCRLs", a, c, e, null)
            }
            ,
            $.prototype.GetCRLsCount = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetCRLsCount", a, c, e, null)
            }
            ,
            $.prototype.EnumCRLs = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("EnumCRLs", r, e, a, null)
            }
            ,
            $.prototype.GetCRLDetailedInfo = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, parseInt(e)]),
                this._funcCall("GetCRLDetailedInfo", i, a, r, null)
            }
            ,
            $.prototype.SaveCRL = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, new k(e)]),
                this._funcCall("SaveCRL", i, a, r, null)
            }
            ,
            $.prototype.CreateKeyMedia = function() {
                return new j
            }
            ,
            $.prototype.GetPrivateKeyMedia = function(c, e, a) {
                var r;
                return "string" != typeof c && (c = null),
                r = this._funcMakeParams([c]),
                this._funcCall("GetPrivateKeyMedia", r, e, a, null)
            }
            ,
            $.prototype.EnumKeyMediaTypes = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("EnumKeyMediaTypes", r, e, a, null)
            }
            ,
            $.prototype.EnumKeyMediaDevices = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("EnumKeyMediaDevices", i, a, r, null)
            }
            ,
            $.prototype.GetKeyMediaTypes = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetKeyMediaTypes", a, c, e, null)
            }
            ,
            $.prototype.GetKeyMediaDevices = function(c, e, a) {
                var r;
                return "number" == typeof c && (c = [c]),
                c && (c = new k(c)),
                r = this._funcMakeParams([c]),
                this._funcCall("GetKeyMediaDevices", r, e, a, null)
            }
            ,
            $.prototype.IsPrivateKeyReaded = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("IsPrivateKeyReaded", a, c, e, null)
            }
            ,
            $.prototype.ReadPrivateKey = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("ReadPrivateKey", a, c, e, null)
            }
            ,
            $.prototype.ReadPrivateKeySilently = function(c, e, a, r, i) {
                var t, n;
                "number" == typeof c ? ((n = new j).typeIndex = c,
                n.devIndex = e,
                n.password = a) : (n = c,
                r = e,
                i = a),
                t = this._funcMakeParams([n]),
                this._funcCall("ReadPrivateKeySilently", t, r, i, null)
            }
            ,
            $.prototype.ReadPrivateKeyBinary = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([new k(c), e]),
                this._funcCall("ReadPrivateKeyBinary", i, a, r, null)
            }
            ,
            $.prototype.ReadPrivateKeyFile = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([c, e]),
                this._funcCall("ReadPrivateKeyFile", i, a, r, null)
            }
            ,
            $.prototype.CtxReadPrivateKey = function(c, e, a, r, i, t) {
                var n, b;
                return "number" == typeof e ? ((b = new j).typeIndex = e,
                b.devIndex = a,
                b.password = r) : (b = e,
                i = a,
                t = r),
                n = this._funcMakeParams([c, b]),
                this._funcCall("CtxReadPrivateKey", n, i, t, null)
            }
            ,
            $.prototype.CtxReadPrivateKeyBinary = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, new k(e), a]),
                this._funcCall("CtxReadPrivateKeyBinary", t, r, i, null)
            }
            ,
            $.prototype.ResetPrivateKey = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("ResetPrivateKey", a, c, e, null)
            }
            ,
            $.prototype.CtxFreePrivateKey = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("CtxFreePrivateKey", r, e, a, null)
            }
            ,
            $.prototype.ShowOwnCertificate = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("ShowOwnCertificate", a, c, e, null)
            }
            ,
            $.prototype.GetOwnCertificate = function(c, e, a, r) {
                var i;
                return "number" == typeof c && "number" == typeof e || (a = c,
                r = e,
                c = null,
                e = null),
                i = this._funcMakeParams([c, e]),
                this._funcCall("GetOwnCertificate", i, a, r, null)
            }
            ,
            $.prototype.EnumOwnCertificates = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("EnumOwnCertificates", r, e, a, null)
            }
            ,
            $.prototype.GetPrivateKeyOwnerInfo = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetPrivateKeyOwnerInfo", a, c, e, null)
            }
            ,
            $.prototype.CtxEnumOwnCertificates = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("CtxEnumOwnCertificates", i, a, r, null)
            }
            ,
            $.prototype.CtxGetOwnCertificate = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, a]),
                this._funcCall("CtxGetOwnCertificate", t, r, i, null)
            }
            ,
            $.prototype.GetKeyInfo = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("GetKeyInfo", r, e, a, null)
            }
            ,
            $.prototype.GetKeyInfoSilently = function(c, e, a, r, i) {
                var t;
                return (t = new j).typeIndex = c,
                t.devIndex = e,
                t.password = a,
                this.GetKeyInfo(t, r, i)
            }
            ,
            $.prototype.GetKeyInfoBinary = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([new k(c), e]),
                this._funcCall("GetKeyInfoBinary", i, a, r, null)
            }
            ,
            $.prototype.GetKeyInfoFile = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetKeyInfoFile", i, a, r, null)
            }
            ,
            $.prototype.GetCertificateByKeyInfo = function(c, e, a, r) {
                var i, t = [];
                return "number" == typeof c && "number" == typeof e || (r = a,
                a = e),
                "number" == typeof c && "number" == typeof e ? (t.push(c),
                t.push(e),
                t.push(null)) : (t.push(null),
                t.push(null),
                t.push(new k(c))),
                i = this._funcMakeParams(t),
                this._funcCall("GetCertificateByKeyInfo", i, a, r, null)
            }
            ,
            $.prototype.GetCertificatesByKeyInfo = function(c, e, a, r, i) {
                var t;
                return "EndUserPrivateKeyInfo" == c.className && (c = c.GetPrivateKeyInfo()),
                null != e && null != a ? ("EndUserArrayList" == e.className && (e = e.m_array),
                "EndUserArrayList" == a.className && (a = a.m_array)) : (e = null,
                a = null),
                t = this._funcMakeParams([new k(c), e, a]),
                this._funcCall("GetCertificatesByKeyInfo", t, r, i, null)
            }
            ,
            $.prototype.ChangeSoftwarePrivateKeyPassword = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([new k(c), e, a]),
                this._funcCall("ChangeSoftwarePrivateKeyPassword", t, r, i, null)
            }
            ,
            $.prototype.EnumJKSPrivateKeys = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([new k(c), e]),
                this._funcCall("EnumJKSPrivateKeys", i, a, r, null)
            }
            ,
            $.prototype.EnumJKSPrivateKeysFile = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("EnumJKSPrivateKeysFile", i, a, r, null)
            }
            ,
            $.prototype.GetJKSPrivateKey = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([new k(c), e]),
                this._funcCall("GetJKSPrivateKey", i, a, r, null)
            }
            ,
            $.prototype.GetJKSPrivateKeyFile = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetJKSPrivateKeyFile", i, a, r, null)
            }
            ,
            $.prototype.CreatePrivateKeyInfo = function() {
                return new N
            }
            ,
            $.prototype.CreateEndUserInfo = function() {
                return new F
            }
            ,
            $.prototype._generatePrivateKey = function(c, e, a, r, i, t, n, b, f, d, u, o, l, h, s, g) {
                if (!this.IsAsync(s, g))
                    return this.GeneratePrivateKeyEx(c, e, a, r, !1, i, t, n, b, f, d, u, o, null, null, l, h, s, g).m_array;
                this.GeneratePrivateKeyEx(c, e, a, r, !1, i, t, n, b, f, d, u, o, null, null, l, h, function(c) {
                    s(c.m_array)
                }, g)
            }
            ,
            $.prototype.GeneratePrivateKey = function(c, a, r, i, t, n, b, f, d, u, o, l, h, s, g, k) {
                if ("boolean" == typeof c)
                    return this._generatePrivateKeyEx(c, a, r, i, t, n, b, f, d, u, o, l, h, s, g, k);
                if ("boolean" == typeof r)
                    return this._generatePrivateKey(!0, 0, 0, "", c, a, r, i, t, n, b, f, null, !1, d, u);
                if ("string" == typeof r)
                    return this._generatePrivateKey(!1, c, a, r, i, t, n, b, f, d, u, o, null, !1, l, h);
                if ("number" == typeof r)
                    return this._generatePrivateKey(!1, 0, 0, c, a, r, i, t, n, b, f, d, u, !0, o, l);
                var j = this.MakeError(X.ERROR_BAD_PARAMETER, "");
                throw new e(j.errorCode,j.message)
            }
            ,
            $.prototype._generatePrivateKeyEx = function(c, a, r, i, t, n, b, f, d, u, o, l, s, g, k, p, m, v, E) {
                var _, w, y = this;
                return c ? w = null : ((w = new j).typeIndex = a,
                w.devIndex = r,
                w.password = "string" != typeof i ? "" : i),
                null == p && (m = !1),
                _ = this._funcMakeParams([c, w, t, n, b, f, d, u, o, l, s, g, k, null != p, m]),
                this._funcCall("GeneratePrivateKeyEx", _, v, E, function(c, a, r) {
                    var i = y.IsAsync(a, r);
                    try {
                        for (var t = c[0], n = new h, b = 0; b < t.length; b++)
                            n.add(t[b]);
                        if (null != p && p.set(c[1]),
                        !i)
                            return n;
                        a(n)
                    } catch (c) {
                        var f = y.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, "");
                        if (i)
                            return void r(f);
                        throw new e(f.errorCode,f.message)
                    }
                })
            }
            ,
            $.prototype.GeneratePrivateKeyEx = function(c, a, r, i, t, n, b, f, d, u, o, l, h, s, g, k, j, p, m) {
                if ("boolean" == typeof c)
                    return "boolean" == typeof t ? this._generatePrivateKeyEx(c, a, r, i, t, n, b, f, d, u, o, l, h, s, g, k, j, p, m) : this._generatePrivateKeyEx(c, a, r, i, !1, t, n, b, f, d, u, o, l, null, null, h, s, g, k);
                if ("boolean" == typeof r)
                    return void 0 !== u && null == u || "string" == typeof u ? this._generatePrivateKeyEx(!0, 0, 0, "", !1, c, a, r, i, t, n, b, f, d, u, null, !1, o, l) : this._generatePrivateKeyEx(!0, 0, 0, "", !1, c, a, r, i, t, n, b, f, null, null, null, !1, d, u);
                if ("number" == typeof c)
                    return "boolean" == typeof i ? this._generatePrivateKeyEx(!1, c, a, r, i, t, n, b, f, d, u, o, l, h, s, null, !1, g, k) : this._generatePrivateKeyEx(!1, c, a, r, !1, i, t, n, b, f, d, u, o, null, null, null, !1, l, h);
                if ("string" == typeof c)
                    return void 0 !== o && null == o || "string" == typeof o ? this._generatePrivateKeyEx(!1, 0, 0, c, !1, a, r, i, t, n, b, f, d, u, o, l, !0, h, s) : this._generatePrivateKeyEx(!1, 0, 0, c, !1, a, r, i, t, n, b, f, d, null, null, u, !0, o, l);
                var v = this.MakeError(X.ERROR_BAD_PARAMETER, "");
                throw new e(v.errorCode,v.message)
            }
            ,
            $.prototype.GetCRInfo = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([new k(c), e, a]),
                this._funcCall("GetCRInfo", t, r, i, null)
            }
            ,
            $.prototype.IsHardwareKeyMedia = function(c, e, a, r, i) {
                var t, n;
                return "number" == typeof c ? ((n = new j).typeIndex = c,
                n.devIndex = e,
                n.password = a) : (n = null,
                r = c,
                i = e),
                t = this._funcMakeParams([n]),
                this._funcCall("IsHardwareKeyMedia", t, r, i, null)
            }
            ,
            $.prototype.IsPrivateKeyExists = function(c, e, a, r, i) {
                var t, n;
                return "number" == typeof c ? ((n = new j).typeIndex = c,
                n.devIndex = e,
                n.password = a) : (n = null,
                r = c,
                i = e),
                t = this._funcMakeParams([n]),
                this._funcCall("IsPrivateKeyExists", t, r, i, null)
            }
            ,
            $.prototype.ChangePrivateKeyPassword = function(c, e, a, r, i, t) {
                var n, b;
                "number" == typeof c ? ((b = new j).typeIndex = c,
                b.devIndex = e,
                b.password = a) : (b = null,
                r = null,
                i = c,
                t = e),
                n = this._funcMakeParams([b, r]),
                this._funcCall("ChangePrivateKeyPassword", n, i, t, null)
            }
            ,
            $.prototype.BackupPrivateKey = function(c, e, a, r, i, t, n, b) {
                var f, d, u;
                "number" == typeof c ? ((d = new j).typeIndex = c,
                d.devIndex = e,
                d.password = a,
                (u = new j).typeIndex = r,
                u.devIndex = i,
                u.password = t) : (d = null,
                u = null,
                n = c,
                b = e),
                f = this._funcMakeParams([d, u]),
                this._funcCall("BackupPrivateKey", f, n, b, null)
            }
            ,
            $.prototype.DestroyPrivateKey = function(c, e, a, r, i) {
                var t, n;
                "number" == typeof c ? ((n = new j).typeIndex = c,
                n.devIndex = e,
                n.password = a) : (n = null,
                r = c,
                i = e),
                t = this._funcMakeParams([n]),
                this._funcCall("DestroyPrivateKey", t, r, i, null)
            }
            ,
            $.prototype.SetKeyMediaPassword = function(c, e, a, r, i) {
                var t, n;
                "number" == typeof c ? ((n = new j).typeIndex = c,
                n.devIndex = e,
                n.password = a) : (n = null,
                r = c,
                i = e),
                t = this._funcMakeParams([n]),
                this._funcCall("SetKeyMediaPassword", t, r, i, null)
            }
            ,
            $.prototype.SetKeyMediaUserPassword = function(c, e, a, r, i, t) {
                var n, b;
                "number" == typeof e ? ((b = new j).typeIndex = e,
                b.devIndex = a,
                b.password = r) : (b = null,
                i = e,
                t = a),
                n = this._funcMakeParams([c, b]),
                this._funcCall("SetKeyMediaUserPassword", n, i, t, null)
            }
            ,
            $.prototype.ChangeOwnCertificatesStatus = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([c, e]),
                this._funcCall("ChangeOwnCertificatesStatus", i, a, r, null)
            }
            ,
            $.prototype.CtxChangeOwnCertificatesStatus = function(c, e, a, r, i) {
                var t;
                t = this._funcMakeParams([c, e, a]),
                this._funcCall("CtxChangeOwnCertificatesStatus", t, r, i, null)
            }
            ,
            $.prototype.MakeNewCertificate = function(c, e, a, r, i, t, n, b, f, d, u, o, l, h, s) {
                var g;
                return null != e && (e = new k(e)),
                g = this._funcMakeParams([c, e, a, r, i, t, n, b, f, d, u, o, l]),
                this._funcCall("MakeNewCertificate", g, h, s, null)
            }
            ,
            $.prototype.MakeNewOwnCertificate = function(c, e, a, r, i, t, n, b, f, d) {
                var u;
                return u = this._funcMakeParams([c, e, a, r, i, t, n, b]),
                this._funcCall("MakeNewOwnCertificate", u, f, d, null)
            }
            ,
            $.prototype.CtxMakeNewOwnCertificate = function(c, e, a, r, i, t, n, b, f, d, u) {
                var o;
                return o = this._funcMakeParams([c, e, a, r, i, t, n, b, f]),
                this._funcCall("CtxMakeNewOwnCertificate", o, d, u, null)
            }
            ,
            $.prototype.GetOwnEUserParams = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetOwnEUserParams", a, c, e, null)
            }
            ,
            $.prototype.ModifyOwnEUserParams = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("ModifyOwnEUserParams", i, a, r, null)
            }
            ,
            $.prototype.CtxGetOwnEUserParams = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("CtxGetOwnEUserParams", r, e, a, null)
            }
            ,
            $.prototype.CtxModifyOwnEUserParams = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, a]),
                this._funcCall("CtxModifyOwnEUserParams", t, r, i, null)
            }
            ,
            $.prototype.Hash = function(c, e, a) {
                var r;
                if ("string" != typeof c || null != (c = this._stringToBytes(c, a)))
                    return r = this._funcMakeParams([new k(c)]),
                    this._funcCall("Hash", r, e, a, null)
            }
            ,
            $.prototype.ContinueHash = function(c, e, a, r, i) {
                var t;
                "number" == typeof e && "number" == typeof a || (r = e,
                i = a),
                "string" == typeof c && null == (c = this._stringToBytes(c, i)) || ("number" == typeof e && "number" == typeof a && (c = c.slice(e, e + a)),
                t = this._funcMakeParams([new k(c)]),
                this._funcCall("ContinueHash", t, r, i, null))
            }
            ,
            $.prototype.EndHash = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("EndHash", a, c, e, null)
            }
            ,
            $.prototype.HashWithParams = function(c, e, a, r) {
                var i;
                if ("string" != typeof e || null != (e = this._stringToBytes(e, r)))
                    return i = this._funcMakeParams([new k(c), new k(e)]),
                    this._funcCall("HashWithParams", i, a, r, null)
            }
            ,
            $.prototype.HashBeginWithParams = function(c, e, a) {
                var r;
                r = this._funcMakeParams([new k(c)]),
                this._funcCall("HashBeginWithParams", r, e, a, null)
            }
            ,
            $.prototype.HashFile = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("HashFile", r, e, a, null)
            }
            ,
            $.prototype.HashFileWithParams = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([new k(c), e]),
                this._funcCall("HashFileWithParams", i, a, r, null)
            }
            ,
            $.prototype.CtxHashBegin = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, a ? new k(a) : null]),
                this._funcCall("CtxHashBegin", t, r, i, null)
            }
            ,
            $.prototype.CtxHashContinue = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([c, new k(e)]),
                this._funcCall("CtxHashContinue", i, a, r, null)
            }
            ,
            $.prototype.CtxHashEnd = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("CtxHashEnd", r, e, a, null)
            }
            ,
            $.prototype.CtxHashFree = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("CtxHashFree", r, e, a, null)
            }
            ,
            $.prototype.ShowSignInfo = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("ShowSignInfo", r, e, a, null)
            }
            ,
            $.prototype.IsSigned = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("IsSigned", r, e, a, null)
            }
            ,
            $.prototype.IsSignedFile = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("IsSignedFile", r, e, a, null)
            }
            ,
            $.prototype.GetSignType = function(c, e, a, r) {
                var i;
                if ("string" == typeof e || null != (e = this._base64Encode(e, r)))
                    return i = this._funcMakeParams([c, e]),
                    this._funcCall("GetSignType", i, a, r, null)
            }
            ,
            $.prototype.GetFileSignType = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetFileSignType", i, a, r, null)
            }
            ,
            $.prototype.GetSignsCount = function(c, e, a) {
                var r;
                if ("string" == typeof c || null != (c = this._base64Encode(c, a)))
                    return r = this._funcMakeParams([c]),
                    this._funcCall("GetSignsCount", r, e, a, null)
            }
            ,
            $.prototype.GetSignerInfo = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetSignerInfo", i, a, r, null)
            }
            ,
            $.prototype.GetSignerCertificate = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetSignerCertificate", i, a, r, null)
            }
            ,
            $.prototype.GetFileSignsCount = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("GetFileSignsCount", r, e, a, null)
            }
            ,
            $.prototype.GetFileSignerInfo = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetFileSignerInfo", i, a, r, null)
            }
            ,
            $.prototype.GetFileSignerCertificate = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetFileSignerCertificate", i, a, r, null)
            }
            ,
            $.prototype.CtxGetSignerInfo = function(c, e, a, r, i) {
                var t;
                if ("string" == typeof a || null != (a = this._base64Encode(a, i)))
                    return t = this._funcMakeParams([c, e, a]),
                    this._funcCall("CtxGetSignerInfo", t, r, i, null)
            }
            ,
            $.prototype.Sign = function(c, e, a) {
                var r;
                if ("string" != typeof c || null != (c = this._stringToBytes(c, a)))
                    return r = this._funcMakeParams([new k(c)]),
                    this._funcCall("Sign", r, e, a, null)
            }
            ,
            $.prototype.Verify = function(c, e, a, r, i) {
                var t, n = [];
                if ("boolean" != typeof a && (i = r,
                r = a),
                "string" != typeof e || null != (e = this._stringToBytes(e, i)))
                    return n.push(c),
                    n.push(new k(e)),
                    "boolean" == typeof a ? n.push(a) : n.push(null),
                    t = this._funcMakeParams(n),
                    this._funcCall("Verify", t, r, i, null)
            }
            ,
            $.prototype.ContinueSign = function(c, e, a, r, i) {
                var t;
                "number" == typeof e && "number" == typeof a || (r = e,
                i = a),
                "string" == typeof c && null == (c = this._stringToBytes(c, i)) || ("number" == typeof e && "number" == typeof a && (c = c.slice(e, e + a)),
                t = this._funcMakeParams([new k(c)]),
                this._funcCall("ContinueSign", t, r, i, null))
            }
            ,
            $.prototype.EndSign = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("EndSign", a, c, e, null)
            }
            ,
            $.prototype.BeginVerify = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("BeginVerify", r, e, a, null)
            }
            ,
            $.prototype.ContinueVerify = function(c, e, a, r, i) {
                var t;
                "number" == typeof e && "number" == typeof a || (r = e,
                i = a),
                "string" == typeof c && null == (c = this._stringToBytes(c, i)) || ("number" == typeof e && "number" == typeof a && (c = c.slice(e, e + a)),
                t = this._funcMakeParams([new k(c)]),
                this._funcCall("ContinueVerify", t, r, i, null))
            }
            ,
            $.prototype.EndVerify = function(c, e, a) {
                var r, i = [];
                return "boolean" != typeof c && (a = e,
                e = c),
                "boolean" != typeof c ? i.push(c) : i.push(null),
                r = this._funcMakeParams(i),
                this._funcCall("EndVerify", r, e, a, null)
            }
            ,
            $.prototype.SignHash = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("SignHash", r, e, a, null)
            }
            ,
            $.prototype.VerifyHash = function(c, e, a, r, i) {
                var t, n = [];
                return "boolean" != typeof a && (i = r,
                r = a),
                n.push(c),
                n.push(e),
                "boolean" == typeof a ? n.push(a) : n.push(null),
                t = this._funcMakeParams(n),
                this._funcCall("VerifyHash", t, r, i, null)
            }
            ,
            $.prototype.SignInternal = function(c, e, a, r) {
                var i;
                if ("string" != typeof e || null != (e = this._stringToBytes(e, r)))
                    return i = this._funcMakeParams([c, new k(e)]),
                    this._funcCall("SignInternal", i, a, r, null)
            }
            ,
            $.prototype.VerifyInternal = function(c, e, a, r) {
                var i, t = [];
                return "boolean" != typeof e && (r = a,
                a = e),
                t.push(c),
                "boolean" == typeof e ? t.push(e) : t.push(null),
                i = this._funcMakeParams(t),
                this._funcCall("VerifyInternal", i, a, r, null)
            }
            ,
            $.prototype.VerifyInternalString = function(c, e, a, r) {
                var i = this;
                if ("boolean" != typeof e && (r = a,
                a = e),
                !this.IsAsync(a, r)) {
                    var t = this.VerifyInternal(c, e);
                    return this.BytesToString(t)
                }
                this.VerifyInternal(c, e, function(c) {
                    i.BytesToString(c, a, r)
                }, r)
            }
            ,
            $.prototype.SignFile = function(c, e, a, r, i) {
                var t;
                t = this._funcMakeParams([c, e, a]),
                this._funcCall("SignFile", t, r, i, null)
            }
            ,
            $.prototype.VerifyFile = function(c, e, a, r, i) {
                var t, n = [];
                return "boolean" != typeof a && (i = r,
                r = a),
                n.push(c),
                n.push(e),
                "boolean" == typeof a ? n.push(a) : n.push(null),
                t = this._funcMakeParams(n),
                this._funcCall("VerifyFile", t, r, i, null)
            }
            ,
            $.prototype.VerifyFileWithExternalSign = function(c, e, a, r, i) {
                return this.VerifyFile(e, c, a, r, i)
            }
            ,
            $.prototype.VerifyFileWithInternalSign = function(c, e, a, r, i) {
                return this.VerifyFile(c, e, a, r, i)
            }
            ,
            $.prototype.IsAlreadySigned = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("IsAlreadySigned", r, e, a, null)
            }
            ,
            $.prototype.IsFileAlreadySigned = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("IsFileAlreadySigned", r, e, a, null)
            }
            ,
            $.prototype.AppendSign = function(c, e, a, r) {
                var i;
                if (!("string" == typeof c && null == (c = this._stringToBytes(c, r)) || "string" != typeof e && null == (e = this._base64Encode(e, r))))
                    return i = this._funcMakeParams([new k(c), e]),
                    this._funcCall("AppendSign", i, a, r, null)
            }
            ,
            $.prototype.VerifySpecific = function(c, e, a, r, i, t) {
                var n, b = [];
                if ("boolean" != typeof r && (t = i,
                i = r),
                "string" != typeof e || null != (e = this._stringToBytes(e, t)))
                    return b.push(c),
                    b.push(new k(e)),
                    b.push(a),
                    "boolean" == typeof r ? b.push(r) : b.push(null),
                    n = this._funcMakeParams(b),
                    this._funcCall("VerifySpecific", n, i, t, null)
            }
            ,
            $.prototype.AppendSignBegin = function(c, e, a) {
                var r;
                "string" != typeof c && null == (c = this._base64Encode(c, a)) || (r = this._funcMakeParams([c]),
                this._funcCall("AppendSignBegin", r, e, a, null))
            }
            ,
            $.prototype.VerifyDataSpecificBegin = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([c, e]),
                this._funcCall("VerifyDataSpecificBegin", i, a, r, null)
            }
            ,
            $.prototype.AppendSignHash = function(c, e, a, r) {
                var i;
                if (!("string" != typeof c && null == (c = this._base64Encode(c, r)) || "string" != typeof e && null == (e = this._base64Encode(e, r))))
                    return i = this._funcMakeParams([c, e]),
                    this._funcCall("AppendSignHash", i, a, r, null)
            }
            ,
            $.prototype.VerifyHashSpecific = function(c, e, a, r, i, t) {
                var n, b = [];
                return "boolean" != typeof r && (t = i,
                i = r),
                b.push(c),
                b.push(e),
                b.push(a),
                "boolean" == typeof r ? b.push(r) : b.push(null),
                n = this._funcMakeParams(b),
                this._funcCall("VerifyHashSpecific", n, i, t, null)
            }
            ,
            $.prototype.AppendSignInternal = function(c, e, a, r) {
                var i;
                if ("string" == typeof e || null != (e = this._base64Encode(e, r)))
                    return i = this._funcMakeParams([c, e]),
                    this._funcCall("AppendSignInternal", i, a, r, null)
            }
            ,
            $.prototype.VerifySpecificInternal = function(c, e, a, r, i) {
                var t, n = [];
                return "boolean" != typeof a && (i = r,
                r = a),
                n.push(c),
                n.push(e),
                "boolean" == typeof a ? n.push(a) : n.push(null),
                t = this._funcMakeParams(n),
                this._funcCall("VerifySpecificInternal", t, r, i, null)
            }
            ,
            $.prototype.VerifySpecificInternalString = function(c, e, a, r, i) {
                var t = this;
                if ("boolean" != typeof a && (i = r,
                r = a),
                !this.IsAsync(r, i)) {
                    var n = this.VerifySpecificInternal(c, e, a);
                    return this.BytesToString(n)
                }
                this.VerifySpecificInternal(c, e, a, function(c) {
                    t.BytesToString(c, r, i)
                }, i)
            }
            ,
            $.prototype.AppendSignFile = function(c, e, a, r, i, t) {
                var n;
                return n = this._funcMakeParams([c, e, a, r]),
                this._funcCall("AppendSignFile", n, i, t, null)
            }
            ,
            $.prototype.VerifyFileSpecific = function(c, e, a, r, i, t) {
                var n, b = [];
                return "boolean" != typeof r && (t = i,
                i = r),
                b.push(c),
                b.push(e),
                b.push(a),
                "boolean" == typeof r ? b.push(r) : b.push(null),
                n = this._funcMakeParams(b),
                this._funcCall("VerifyFileSpecific", n, i, t, null)
            }
            ,
            $.prototype.VerifyFileWithExternalSignSpecific = function(c, e, a, r, i, t) {
                return this.VerifyFileSpecific(c, e, a, r, i, t)
            }
            ,
            $.prototype.VerifyFileWithInternalSignSpecific = function(c, e, a, r, i, t) {
                return this.VerifyFileSpecific(c, e, a, r, i, t)
            }
            ,
            $.prototype.CreateEmptySign = function(c, e, a) {
                var r, i = [];
                if (2 == arguments.length && (a = e,
                e = c),
                "string" != typeof c || null != (c = this._stringToBytes(c, a)))
                    return 1 == arguments.length || 3 == arguments.length ? i.push(new k(c)) : i.push(null),
                    r = this._funcMakeParams(i),
                    this._funcCall("CreateEmptySign", r, e, a, null)
            }
            ,
            $.prototype.CreateSigner = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("CreateSigner", r, e, a, null)
            }
            ,
            $.prototype.AppendSigner = function(c, e, a, r, i) {
                var t, n = [];
                return n.push(c),
                null != e ? n.push(new k(e)) : n.push(null),
                n.push(a),
                t = this._funcMakeParams(n),
                this._funcCall("AppendSigner", t, r, i, null)
            }
            ,
            $.prototype.IsDataInSignedDataAvailable = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("IsDataInSignedDataAvailable", r, e, a, null)
            }
            ,
            $.prototype.IsDataInSignedFileAvailable = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("IsDataInSignedFileAvailable", r, e, a, null)
            }
            ,
            $.prototype.GetDataFromSignedData = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("GetDataFromSignedData", r, e, a, null)
            }
            ,
            $.prototype.GetDataFromSignedFile = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([c, e]),
                this._funcCall("GetDataFromSignedFile", i, a, r, null)
            }
            ,
            $.prototype.GetCertificateFromSignedData = function(c, e, a, r) {
                var i;
                if ("string" == typeof e || null != (e = this._base64Encode(e, r)))
                    return i = this._funcMakeParams([c, e]),
                    this._funcCall("GetCertificateFromSignedData", i, a, r, null)
            }
            ,
            $.prototype.GetCertificateFromSignedFile = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetCertificateFromSignedFile", i, a, r, null)
            }
            ,
            $.prototype.GetSignTimeInfo = function(c, e, a, r) {
                var i;
                if ("string" == typeof e || null != (e = this._base64Encode(e, r)))
                    return i = this._funcMakeParams([c, e]),
                    this._funcCall("GetSignTimeInfo", i, a, r, null)
            }
            ,
            $.prototype.GetFileSignTimeInfo = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("GetFileSignTimeInfo", i, a, r, null)
            }
            ,
            $.prototype.VerifyHashOnTime = function(c, e, a, r, i, t, n) {
                return this.VerifyHashOnTimeEx(c, e, a, r, null != r, !1, i, t, n)
            }
            ,
            $.prototype.VerifyHashOnTimeEx = function(c, e, a, r, i, t, n, b, f) {
                var d, u = [];
                if ("boolean" != typeof n && (f = b,
                b = n),
                !("string" != typeof c && null == (c = this._base64Encode(c, f)) || "string" != typeof a && null == (a = this._base64Encode(a, f))))
                    return u = [c, e, a, r, i, t],
                    "boolean" == typeof n ? u.push(n) : u.push(null),
                    d = this._funcMakeParams(u),
                    this._funcCall("VerifyHashOnTimeEx", d, b, f, null)
            }
            ,
            $.prototype.VerifyDataOnTime = function(c, e, a, r, i, t, n) {
                return this.VerifyDataOnTimeEx(c, e, a, r, null != r, !1, i, t, n)
            }
            ,
            $.prototype.VerifyDataOnTimeEx = function(c, e, a, r, i, t, n, b, f) {
                var d, u = [];
                if ("boolean" != typeof n && (f = b,
                b = n),
                !("string" == typeof c && null == (c = this._stringToBytes(c, f)) || "string" != typeof a && null == (a = this._base64Encode(a, f))))
                    return u = [new k(c), e, a, r, i, t],
                    "boolean" == typeof n ? u.push(n) : u.push(null),
                    d = this._funcMakeParams(u),
                    this._funcCall("VerifyDataOnTimeEx", d, b, f, null)
            }
            ,
            $.prototype.VerifyDataInternalOnTime = function(c, e, a, r, i, t) {
                return this.VerifyDataInternalOnTimeEx(c, e, a, null != a, !1, r, i, t)
            }
            ,
            $.prototype.VerifyDataInternalOnTimeEx = function(c, e, a, r, i, t, n, b) {
                var f, d = [];
                if ("boolean" != typeof t && (b = n,
                n = t),
                "string" == typeof c || null != (c = this._base64Encode(c, b)))
                    return d = [c, e, a, r, i],
                    "boolean" == typeof t ? d.push(t) : d.push(null),
                    f = this._funcMakeParams(d),
                    this._funcCall("VerifyDataInternalOnTimeEx", f, n, b, null)
            }
            ,
            $.prototype.VerifyDataInternalOnTimeString = function(c, e, a, r, i, t) {
                return this.VerifyDataInternalOnTimeStringEx(c, e, a, null != a, !1, r, i, t)
            }
            ,
            $.prototype.VerifyDataInternalOnTimeStringEx = function(c, e, a, r, i, t, n, b) {
                var f = this;
                if ("boolean" != typeof t && (b = n,
                n = t),
                !this.IsAsync(n, b)) {
                    var d = this.VerifyDataInternalOnTimeEx(c, e, a, r, i, t);
                    return this.BytesToString(d)
                }
                this.VerifyDataInternalOnTimeEx(c, e, a, r, i, t, function(c) {
                    f.BytesToString(c, n, b)
                }, b)
            }
            ,
            $.prototype.VerifyDataOnTimeBegin = function(c, e, a, r, i) {
                this.VerifyDataOnTimeBeginEx(c, e, a, null != a, !1, r, i)
            }
            ,
            $.prototype.VerifyDataOnTimeBeginEx = function(c, e, a, r, i, t, n) {
                var b;
                b = this._funcMakeParams([c, e, a, r, i]),
                this._funcCall("VerifyDataOnTimeBeginEx", b, t, n, null)
            }
            ,
            $.prototype.VerifyFileOnTime = function(c, e, a, r, i, t, n, b, f) {
                var d, u = [];
                return "boolean" != typeof n && (f = b,
                b = n),
                u = [c, e, a, r, i, t],
                "boolean" == typeof n ? u.push(n) : u.push(null),
                d = this._funcMakeParams(u),
                this._funcCall("VerifyFileOnTimeEx", d, b, f, null)
            }
            ,
            $.prototype.VerifyFileWithExternalSignOnTime = function(c, e, a, r, i, t, n) {
                return this.VerifyFileOnTime(c, a, e, r, null != r, !1, i, t, n)
            }
            ,
            $.prototype.VerifyFileWithExternalSignOnTimeEx = function(c, e, a, r, i, t, n, b, f) {
                return this.VerifyFileOnTime(c, a, e, r, i, t, n, b, f)
            }
            ,
            $.prototype.VerifyFileWithInternalSignOnTime = function(c, e, a, r, i, t, n) {
                return this.VerifyFileOnTime(c, e, a, r, null != r, !1, i, t, n)
            }
            ,
            $.prototype.VerifyFileWithInternalSignOnTimeEx = function(c, e, a, r, i, t, n, b, f) {
                return this.VerifyFileOnTime(c, a, e, r, i, t, n, b, f)
            }
            ,
            $.prototype.ContinueSignCtx = function(c, e, a, r) {
                var i;
                if (null == c && (c = new M),
                "string" != typeof e || null != (e = this._stringToBytes(e, r)))
                    return i = this._funcMakeParams([c, new k(e)]),
                    this._funcCall("ContinueSignCtx", i, a, r, null)
            }
            ,
            $.prototype.ContinueSignCtxWithOffset = function(c, e, a, r, i, t) {
                return e = e.slice(a, a + r),
                this.ContinueSignCtx(c, e, i, t)
            }
            ,
            $.prototype.EndSignCtx = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("EndSignCtx", i, a, r, null)
            }
            ,
            $.prototype.BeginVerifyCtx = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("BeginVerifyCtx", r, e, a, null)
            }
            ,
            $.prototype.ContinueVerifyCtx = function(c, e, a, r, i, t) {
                var n;
                "number" == typeof a && "number" == typeof r || (i = a,
                t = r),
                "string" == typeof e && null == (e = this._stringToBytes(e, t)) || ("number" == typeof a && "number" == typeof r && (e = e.slice(a, a + r)),
                n = this._funcMakeParams([c, new k(e)]),
                this._funcCall("ContinueVerifyCtx", n, i, t, null))
            }
            ,
            $.prototype.EndVerifyCtx = function(c, e, a, r) {
                var i, t = [];
                return "boolean" != typeof e && (r = a = e),
                t.push(c),
                "boolean" == typeof e ? t.push(e) : t.push(null),
                i = this._funcMakeParams(t),
                this._funcCall("EndVerifyCtx", i, a, r, null)
            }
            ,
            $.prototype.ResetOperationCtx = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("ResetOperationCtx", r, e, a, null)
            }
            ,
            $.prototype.SignHashRSA = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("SignHashRSA", r, e, a, null)
            }
            ,
            $.prototype.SignRSA = function(c, e, a, r, i) {
                var t;
                if ("string" != typeof c || null != (c = this._stringToBytes(c, i)))
                    return t = this._funcMakeParams([new k(c), e, a]),
                    this._funcCall("SignRSA", t, r, i, null)
            }
            ,
            $.prototype.ContinueRSASign = function(c, e, a) {
                var r;
                "string" == typeof c && null == (c = this._stringToBytes(c, a)) || (r = this._funcMakeParams([new k(c)]),
                this._funcCall("ContinueRSASign", r, e, a, null))
            }
            ,
            $.prototype.ContinueRSASignWithOffset = function(c, e, a, r, i) {
                return c = c.slice(e, e + a),
                this.ContinueRSASign(c, r, i)
            }
            ,
            $.prototype.EndRSASign = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("EndRSASign", r, e, a, null)
            }
            ,
            $.prototype.SignRSAFile = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, a]),
                this._funcCall("SignRSAFile", t, r, i, null)
            }
            ,
            $.prototype.ContinueRSASignCtx = function(c, e, a, r) {
                var i;
                if (null == c && (c = new M),
                "string" != typeof e || null != (e = this._stringToBytes(e, r)))
                    return i = this._funcMakeParams([c, new k(e)]),
                    this._funcCall("ContinueRSASignCtx", i, a, r, null)
            }
            ,
            $.prototype.ContinueRSASignCtxWithOffset = function(c, e, a, r, i, t) {
                return e = e.slice(a, a + r),
                this.ContinueRSASignCtx(e, i, t)
            }
            ,
            $.prototype.EndRSASignCtx = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("EndRSASignCtx", i, a, r, null)
            }
            ,
            $.prototype.SignECDSA = function(c, e, a, r, i) {
                var t;
                if ("string" != typeof c || null != (c = this._stringToBytes(c, i)))
                    return t = this._funcMakeParams([new k(c), e, a]),
                    this._funcCall("SignECDSA", t, r, i, null)
            }
            ,
            $.prototype.RawSign = function(c, e, a) {
                var r;
                if ("string" != typeof c || null != (c = this._stringToBytes(c, a)))
                    return r = this._funcMakeParams([new k(c)]),
                    this._funcCall("RawSign", r, e, a, null)
            }
            ,
            $.prototype.RawVerify = function(c, e, a, r, i) {
                var t, n = [];
                if ("boolean" != typeof a && (i = r,
                r = a),
                "string" != typeof e || null != (e = this._stringToBytes(e, i)))
                    return n.push(c),
                    n.push(new k(e)),
                    "boolean" == typeof a ? n.push(a) : n.push(null),
                    t = this._funcMakeParams(n),
                    this._funcCall("RawVerify", t, r, i, null)
            }
            ,
            $.prototype.RawSignHash = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("RawSignHash", r, e, a, null)
            }
            ,
            $.prototype.RawVerifyHash = function(c, e, a, r, i) {
                var t, n = [];
                return "boolean" != typeof a && (i = r,
                r = a),
                n.push(c),
                n.push(e),
                "boolean" == typeof a ? n.push(a) : n.push(null),
                t = this._funcMakeParams(n),
                this._funcCall("RawVerifyHash", t, r, i, null)
            }
            ,
            $.prototype.RawSignFile = function(c, e, a, r) {
                var i;
                i = this._funcMakeParams([c, e]),
                this._funcCall("RawSignFile", i, a, r, null)
            }
            ,
            $.prototype.RawVerifyFile = function(c, e, a, r, i) {
                var t, n = [];
                return "boolean" != typeof a && (i = r,
                r = a),
                n.push(c),
                n.push(e),
                "boolean" == typeof a ? n.push(a) : n.push(null),
                t = this._funcMakeParams(n),
                this._funcCall("RawVerifyFile", t, r, i, null)
            }
            ,
            $.prototype.CtxSignHash = function(c, e, a, r, i, t) {
                var n;
                if ("string" == typeof a || null != (a = this._base64Encode(a, t)))
                    return n = this._funcMakeParams([c, e, a, r]),
                    this._funcCall("CtxSignHash", n, i, t, null)
            }
            ,
            $.prototype.CtxSign = function(c, e, a, r, i, t, n) {
                var b;
                if ("string" != typeof a || null != (a = this._stringToBytes(a, n)))
                    return b = this._funcMakeParams([c, e, new k(a), r, i]),
                    this._funcCall("CtxSign", b, t, n, null)
            }
            ,
            $.prototype.CtxSignFile = function(c, e, a, r, i, t, n, b) {
                var f;
                f = this._funcMakeParams([c, e, a, r, i, t]),
                this._funcCall("CtxSignFile", f, n, b, null)
            }
            ,
            $.prototype.CtxAppendSignHash = function(c, e, a, r, i, t, n) {
                var b;
                if (!("string" != typeof a && null == (a = this._base64Encode(a, n)) || "string" != typeof r && null == (r = this._base64Encode(r, n))))
                    return b = this._funcMakeParams([c, e, a, r, i]),
                    this._funcCall("CtxAppendSignHash", b, t, n, null)
            }
            ,
            $.prototype.CtxAppendSign = function(c, e, a, r, i, t, n) {
                var b;
                if (!(null != a && "string" == typeof a && null == (a = this._stringToBytes(a, n)) || "string" != typeof r && null == (r = this._base64Encode(r, n))))
                    return b = this._funcMakeParams([c, e, a ? new k(a) : null, r, i]),
                    this._funcCall("CtxAppendSign", b, t, n, null)
            }
            ,
            $.prototype.CtxAppendSignFile = function(c, e, a, r, i, t, n, b) {
                var f;
                f = this._funcMakeParams([c, e, a, r, i, t]),
                this._funcCall("CtxAppendSignFile", f, n, b, null)
            }
            ,
            $.prototype.ShowSenderInfo = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("ShowSenderInfo", r, e, a, null)
            }
            ,
            $.prototype.IsEnveloped = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("IsEnveloped", r, e, a, null)
            }
            ,
            $.prototype.IsEnvelopedFile = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("IsEnvelopedFile", r, e, a, null)
            }
            ,
            $.prototype.Envelop = function(c, e, a, r, i, t) {
                var n;
                if ("string" != typeof r || null != (r = this._stringToBytes(r, t)))
                    return n = this._funcMakeParams([c, e, a, new k(r)]),
                    this._funcCall("Envelop", n, i, t, null)
            }
            ,
            $.prototype.Develop = function(c, e, a, r) {
                var i, t = [];
                if ("boolean" != typeof e && (r = a,
                a = e),
                "string" == typeof c || null != (c = this._base64Encode(c, r)))
                    return t.push(c),
                    "boolean" == typeof e ? t.push(e) : t.push(null),
                    i = this._funcMakeParams(t),
                    this._funcCall("Develop", i, a, r, null)
            }
            ,
            $.prototype.EnvelopFile = function(c, e, a, r, i, t, n) {
                var b;
                b = this._funcMakeParams([c, e, a, r, i]),
                this._funcCall("EnvelopFile", b, t, n, null)
            }
            ,
            $.prototype.DevelopFile = function(c, e, a, r, i) {
                var t, n = [];
                return "boolean" != typeof a && (i = r,
                r = a),
                n.push(c),
                n.push(e),
                "boolean" == typeof a ? n.push(a) : n.push(null),
                t = this._funcMakeParams(n),
                this._funcCall("DevelopFile", t, r, i, null)
            }
            ,
            $.prototype.EnvelopEx = function(c, e, a, r, i, t) {
                var n;
                if ("EndUserArrayList" == c.className && (c = c.m_array),
                "EndUserArrayList" == e.className && (e = e.m_array),
                "string" != typeof r || null != (r = this._stringToBytes(r, t)))
                    return n = this._funcMakeParams([c, e, a, new k(r)]),
                    this._funcCall("EnvelopEx", n, i, t, null)
            }
            ,
            $.prototype.DevelopEx = function(c, e, a, r, i) {
                var t, n = [];
                if ("boolean" != typeof a && (i = r,
                r = a),
                "string" == typeof c || null != (c = this._base64Encode(c, i)))
                    return n.push(c),
                    n.push(e ? new k(e) : null),
                    "boolean" == typeof a ? n.push(a) : n.push(null),
                    t = this._funcMakeParams(n),
                    this._funcCall("DevelopEx", t, r, i, null)
            }
            ,
            $.prototype.EnvelopFileEx = function(c, e, a, r, i, t, n) {
                var b;
                "EndUserArrayList" == c.className && (c = c.m_array),
                "EndUserArrayList" == e.className && (e = e.m_array),
                b = this._funcMakeParams([c, e, a, r, i]),
                this._funcCall("EnvelopFileEx", b, t, n, null)
            }
            ,
            $.prototype.EnvelopToRecipients = function(c, e, a, r, i) {
                var t;
                "EndUserArrayList" == c.className && (c = c.m_array);
                for (var n = [], b = 0; b < c.length; b++)
                    n.push(new k(c[b]));
                if ("string" != typeof a || null != (a = this._stringToBytes(a, i)))
                    return t = this._funcMakeParams([n, e, new k(a)]),
                    this._funcCall("EnvelopToRecipients", t, r, i, null)
            }
            ,
            $.prototype.EnvelopFileToRecipients = function(c, e, a, r, i, t) {
                var n;
                "EndUserArrayList" == c.className && (c = c.m_array);
                for (var b = [], f = 0; f < c.length; f++)
                    b.push(new k(c[f]));
                n = this._funcMakeParams([b, e, a, r]),
                this._funcCall("EnvelopFileToRecipients", n, i, t, null)
            }
            ,
            $.prototype.EnvelopToRecipientsEx = function(c, e, a, r, i, t) {
                var n;
                "EndUserArrayList" == c.className && (c = c.m_array);
                for (var b = [], f = 0; f < c.length; f++)
                    b.push(new k(c[f]));
                if ("string" != typeof r || null != (r = this._stringToBytes(r, t)))
                    return n = this._funcMakeParams([b, e, a, new k(r)]),
                    this._funcCall("EnvelopToRecipientsEx", n, i, t, null)
            }
            ,
            $.prototype.EnvelopFileToRecipientsEx = function(c, e, a, r, i, t, n) {
                var b;
                "EndUserArrayList" == c.className && (c = c.m_array);
                for (var f = [], d = 0; d < c.length; d++)
                    f.push(new k(c[d]));
                b = this._funcMakeParams([f, e, a, r, i]),
                this._funcCall("EnvelopFileToRecipientsEx", b, t, n, null)
            }
            ,
            $.prototype.EnvelopToRecipientsWithOCode = function(c, e, a, r, i, t) {
                var n;
                if ("string" != typeof r || null != (r = this._stringToBytes(r, t)))
                    return n = this._funcMakeParams([c, e, a, new k(r)]),
                    this._funcCall("EnvelopToRecipientsWithOCode", n, i, t, null)
            }
            ,
            $.prototype.EnvelopExWithDynamicKey = function(c, e, a, r, i, t, n) {
                var b;
                if ("EndUserArrayList" == c.className && (c = c.m_array),
                "EndUserArrayList" == e.className && (e = e.m_array),
                "string" != typeof i || null != (i = this._stringToBytes(i, n)))
                    return b = this._funcMakeParams([c, e, a, r, new k(i)]),
                    this._funcCall("EnvelopExWithDynamicKey", b, t, n, null)
            }
            ,
            $.prototype.EnvelopFileExWithDynamicKey = function(c, e, a, r, i, t, n, b) {
                var f;
                "EndUserArrayList" == c.className && (c = c.m_array),
                "EndUserArrayList" == e.className && (e = e.m_array),
                f = this._funcMakeParams([c, e, a, r, i, t]),
                this._funcCall("EnvelopFileExWithDynamicKey", f, n, b, null)
            }
            ,
            $.prototype.EnvelopToRecipientsWithDynamicKey = function(c, e, a, r, i, t) {
                var n;
                "EndUserArrayList" == c.className && (c = c.m_array);
                for (var b = [], f = 0; f < c.length; f++)
                    b.push(new k(c[f]));
                if ("string" != typeof r || null != (r = this._stringToBytes(r, t)))
                    return n = this._funcMakeParams([b, e, a, new k(r)]),
                    this._funcCall("EnvelopToRecipientsWithDynamicKey", n, i, t, null)
            }
            ,
            $.prototype.EnvelopFileToRecipientsWithDynamicKey = function(c, e, a, r, i, t, n) {
                var b;
                "EndUserArrayList" == c.className && (c = c.m_array);
                for (var f = [], d = 0; d < c.length; d++)
                    f.push(new k(c[d]));
                b = this._funcMakeParams([f, e, a, r, i]),
                this._funcCall("EnvelopFileToRecipientsWithDynamicKey", b, t, n, null)
            }
            ,
            $.prototype.EnvelopToRecipientsWithSettings = function(c, e, a, r, i, t, n, b, f) {
                var d;
                if ("string" != typeof a || null != (a = this._stringToBytes(a, f))) {
                    "EndUserArrayList" == c.className && (c = c.m_array);
                    for (var u = [], o = 0; o < c.length; o++)
                        u.push(new k(c[o]));
                    return d = this._funcMakeParams([u, e, new k(a), r, i, t, n]),
                    this._funcCall("EnvelopToRecipientsWithSettings", d, b, f, null)
                }
            }
            ,
            $.prototype.RawEnvelop = function(c, e, a, r) {
                var i;
                if ("string" != typeof e || null != (e = this._stringToBytes(e, r)))
                    return i = this._funcMakeParams([new k(c), new k(e)]),
                    this._funcCall("RawEnvelop", i, a, r, null)
            }
            ,
            $.prototype.RawDevelop = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("RawDevelop", i, a, r, null)
            }
            ,
            $.prototype.EnvelopRSA = function(c, e, a, r, i, t, n) {
                return this.EnvelopRSAEx(c, [e], [a], r, i, t, n)
            }
            ,
            $.prototype.EnvelopFileRSA = function(c, e, a, r, i, t, n, b) {
                this.EnvelopFileRSAEx(c, [e], [a], r, i, t, n, b)
            }
            ,
            $.prototype.EnvelopRSAEx = function(c, e, a, r, i, t, n) {
                var b;
                if ("EndUserArrayList" == e.className && (e = e.m_array),
                "EndUserArrayList" == a.className && (a = a.m_array),
                "string" != typeof i || null != (i = this._stringToBytes(i, n)))
                    return b = this._funcMakeParams([c, e, a, r, new k(i)]),
                    this._funcCall("EnvelopRSAEx", b, t, n, null)
            }
            ,
            $.prototype.EnvelopFileRSAEx = function(c, e, a, r, i, t, n, b) {
                var f;
                "EndUserArrayList" == e.className && (e = e.m_array),
                "EndUserArrayList" == a.className && (a = a.m_array),
                f = this._funcMakeParams([c, e, a, r, i, t]),
                this._funcCall("EnvelopFileRSAEx", f, n, b, null)
            }
            ,
            $.prototype.EnvelopToRecipientsRSA = function(c, e, a, r, i, t) {
                var n;
                "EndUserArrayList" == e.className && (e = e.m_array);
                for (var b = [], f = 0; f < e.length; f++)
                    b.push(new k(e[f]));
                if ("string" != typeof r || null != (r = this._stringToBytes(r, t)))
                    return n = this._funcMakeParams([c, b, a, new k(r)]),
                    this._funcCall("EnvelopToRecipientsRSA", n, i, t, null)
            }
            ,
            $.prototype.EnvelopFileToRecipientsRSA = function(c, e, a, r, i, t, n) {
                var b;
                "EndUserArrayList" == e.className && (e = e.m_array);
                for (var f = [], d = 0; d < e.length; d++)
                    f.push(new k(e[d]));
                b = this._funcMakeParams([c, f, a, r, i]),
                this._funcCall("EnvelopFileToRecipientsRSA", b, t, n, null)
            }
            ,
            $.prototype.CtxEnvelop = function(c, e, a, r, i, t, n, b) {
                var f;
                if ("string" != typeof t || null != (t = this._stringToBytes(t, b))) {
                    "EndUserArrayList" == e.className && (e = e.m_array);
                    for (var d = [], u = 0; u < e.length; u++)
                        d.push(new k(e[u]));
                    return f = this._funcMakeParams([c, d, a, r, i, new k(t)]),
                    this._funcCall("CtxEnvelop", f, n, b, null)
                }
            }
            ,
            $.prototype.CtxEnvelopFile = function(c, e, a, r, i, t, n, b, f) {
                var d;
                "EndUserArrayList" == e.className && (e = e.m_array);
                for (var u = [], o = 0; o < e.length; o++)
                    u.push(new k(e[o]));
                d = this._funcMakeParams([c, u, a, r, i, t, n]),
                this._funcCall("CtxEnvelopFile", d, b, f, null)
            }
            ,
            $.prototype.CtxEnvelopWithDynamicKey = function(c, e, a, r, i, t, n, b) {
                var f;
                if ("string" != typeof t || null != (t = this._stringToBytes(t, b))) {
                    "EndUserArrayList" == e.className && (e = e.m_array);
                    for (var d = [], u = 0; u < e.length; u++)
                        d.push(new k(e[u]));
                    return f = this._funcMakeParams([c, d, a, r, i, new k(t)]),
                    this._funcCall("CtxEnvelopWithDynamicKey", f, n, b, null)
                }
            }
            ,
            $.prototype.CtxEnvelopFileWithDynamicKey = function(c, e, a, r, i, t, n, b, f) {
                var d;
                "EndUserArrayList" == e.className && (e = e.m_array);
                for (var u = [], o = 0; o < e.length; o++)
                    u.push(new k(e[o]));
                d = this._funcMakeParams([c, u, a, r, i, t, n]),
                this._funcCall("CtxEnvelopFileWithDynamicKey", d, b, f, null)
            }
            ,
            $.prototype.CtxDevelop = function(c, e, a, r, i, t) {
                var n, b = [];
                if ("boolean" != typeof r && (t = i,
                i = r),
                "string" == typeof e || null != (e = this._base64Encode(e, t)))
                    return b.push(c),
                    b.push(e),
                    b.push(a ? new k(a) : null),
                    "boolean" == typeof r ? b.push(r) : b.push(null),
                    n = this._funcMakeParams(b),
                    this._funcCall("CtxDevelop", n, i, t, null)
            }
            ,
            $.prototype.CtxDevelopFile = function(c, e, a, r, i, t, n) {
                var b, f = [];
                return "boolean" != typeof i && (n = t,
                t = i),
                f.push(c),
                f.push(e),
                f.push(a ? new k(a) : null),
                f.push(r),
                "boolean" == typeof i ? f.push(i) : f.push(null),
                b = this._funcMakeParams(f),
                this._funcCall("CtxDevelopFile", b, t, n, null)
            }
            ,
            $.prototype.ProtectDataByPassword = function(c, e, a, r) {
                var i;
                if ("string" != typeof c || null != (c = this._stringToBytes(c, r)))
                    return i = this._funcMakeParams([new k(c), e]),
                    this._funcCall("ProtectDataByPassword", i, a, r, null)
            }
            ,
            $.prototype.UnprotectDataByPassword = function(c, e, a, r) {
                var i;
                if ("string" == typeof c || null != (c = this._base64Encode(c, r)))
                    return i = this._funcMakeParams([c, e]),
                    this._funcCall("UnprotectDataByPassword", i, a, r, null)
            }
            ,
            $.prototype.SessionIsInitialized = function(c, e, a) {
                var r;
                return c.SetData(null),
                r = this._funcMakeParams([c]),
                this._funcCall("SessionIsInitialized", r, e, a, null)
            }
            ,
            $.prototype.SessionClose = function(c, e, a) {
                var r;
                c.SetData(null),
                r = this._funcMakeParams([c]),
                this._funcCall("SessionClose", r, e, a, null)
            }
            ,
            $.prototype.ClientSessionCreateStep1 = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("ClientSessionCreateStep1", r, e, a, null)
            }
            ,
            $.prototype.ServerSessionCreateStep1 = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, new k(e)]),
                this._funcCall("ServerSessionCreateStep1", i, a, r, null)
            }
            ,
            $.prototype.ClientSessionCreateStep2 = function(c, e, a, r) {
                var i, t = this;
                c.SetData(null),
                i = this._funcMakeParams([c, new k(e)]),
                this._funcCall("ClientSessionCreateStep2", i, a, r, function(e, a, r) {
                    c.SetData(e.GetData()),
                    t.IsAsync(a, r) && a()
                })
            }
            ,
            $.prototype.ServerSessionCreateStep2 = function(c, e, a, r) {
                var i;
                c.SetData(null),
                i = this._funcMakeParams([c, new k(e)]),
                this._funcCall("ServerSessionCreateStep2", i, a, r, null)
            }
            ,
            $.prototype.SessionSave = function(c, e, a) {
                var r;
                return c.SetData(null),
                r = this._funcMakeParams([c]),
                this._funcCall("SessionSave", r, e, a, null)
            }
            ,
            $.prototype.SessionLoad = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("SessionLoad", r, e, a, null)
            }
            ,
            $.prototype.SessionCheckCertificates = function(c, e, a) {
                var r;
                return c.SetData(null),
                r = this._funcMakeParams([c]),
                this._funcCall("SessionCheckCertificates", r, e, a, null)
            }
            ,
            $.prototype.SessionEncrypt = function(c, e, a, r) {
                var i, t = !1, n = this;
                if ("string" != typeof e || (t = !0,
                null != (e = this._stringToBytes(e, r))))
                    return c.SetData(null),
                    i = this._funcMakeParams([c, new k(e)]),
                    this._funcCall("SessionEncrypt", i, a, r, t ? function(c, e, a) {
                        return n.BASE64Encode(c, e, a)
                    }
                    : null)
            }
            ,
            $.prototype.SessionDecrypt = function(c, e, a, r) {
                var i;
                if ("string" != typeof e || null != (e = this._base64Decode(e, r)))
                    return c.SetData(null),
                    i = this._funcMakeParams([c, new k(e)]),
                    this._funcCall("SessionDecrypt", i, a, r, null)
            }
            ,
            $.prototype.SessionEncryptContinue = function(c, a, r, i) {
                var t, n = this, b = !1;
                if ("string" != typeof a || (b = !0,
                null != (a = this._stringToBytes(a, i))))
                    return c.SetData(null),
                    t = this._funcMakeParams([c, new k(a)]),
                    this._funcCall("SessionEncryptContinue", t, r, i, function(c, r, i) {
                        if (b)
                            return n.BASE64Encode(c, r, i);
                        var t = n.IsAsync(r, i);
                        if (!n._copyArrayData(a, c)) {
                            var f = n.MakeError(X.ERROR_BAD_PARAMETER, "");
                            if (t)
                                return void i(f);
                            throw new e(f.errorCode,f.message)
                        }
                        if (!t)
                            return a;
                        r(a)
                    })
            }
            ,
            $.prototype.SessionDecryptContinue = function(c, a, r, i) {
                var t, n = this;
                if ("string" != typeof a || null != (a = this._base64Decode(a, i)))
                    return c.SetData(null),
                    t = this._funcMakeParams([c, new k(a)]),
                    this._funcCall("SessionDecryptContinue", t, r, i, function(c, r, i) {
                        var t = n.IsAsync(r, i);
                        if (!n._copyArrayData(a, c)) {
                            var b = n.MakeError(X.ERROR_BAD_PARAMETER, "");
                            if (t)
                                return void i(b);
                            throw new e(b.errorCode,b.message)
                        }
                        if (!t)
                            return a;
                        r(a)
                    })
            }
            ,
            $.prototype.SessionGetPeerCertificateInfo = function(c, e, a) {
                var r;
                return c.SetData(null),
                r = this._funcMakeParams([c]),
                this._funcCall("SessionGetPeerCertificateInfo", r, e, a, null)
            }
            ,
            $.prototype.ClientDynamicKeySessionCreate = function(c, e, a, r, i) {
                var t, n = [];
                return "string" == typeof e && "string" == typeof a || (i = r,
                r = a),
                n.push(c),
                "string" == typeof e && "string" == typeof a ? (n.push(e),
                n.push(a),
                n.push(null)) : (n.push(null),
                n.push(null),
                n.push(new k(e))),
                t = this._funcMakeParams(n),
                this._funcCall("ClientDynamicKeySessionCreate", t, r, i, null)
            }
            ,
            $.prototype.ServerDynamicKeySessionCreate = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, new k(e)]),
                this._funcCall("ServerDynamicKeySessionCreate", i, a, r, null)
            }
            ,
            $.prototype.ClientDynamicKeySessionLoad = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("ClientDynamicKeySessionLoad", r, e, a, null)
            }
            ,
            $.prototype.SCClientIsRunning = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("SCClientIsRunning", a, c, e, null)
            }
            ,
            $.prototype.SCClientStart = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("SCClientStart", a, c, e, null)
            }
            ,
            $.prototype.SCClientStop = function(c, e) {
                var a;
                a = this._funcMakeParams(null),
                this._funcCall("SCClientStop", a, c, e, null)
            }
            ,
            $.prototype.SCClientAddGate = function(c, e, a, r, i, t, n, b) {
                var f;
                "string" != typeof i && (n = i,
                b = t,
                i = null,
                t = null),
                f = this._funcMakeParams([c, e, a, r, i, t]),
                this._funcCall("SCClientAddGate", f, n, b, null)
            }
            ,
            $.prototype.SCClientRemoveGate = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("SCClientRemoveGate", r, e, a, null)
            }
            ,
            $.prototype.SCClientGetStatistic = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("SCClientGetStatistic", a, c, e, null)
            }
            ,
            $.prototype.AppendTransportHeader = function(c, e, a, r, i, t, n) {
                var b;
                return b = this._funcMakeParams([c, e, a, new k(r), new k(i)]),
                this._funcCall("AppendTransportHeader", b, t, n, null)
            }
            ,
            $.prototype.ParseTransportHeader = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("ParseTransportHeader", r, e, a, null)
            }
            ,
            $.prototype.AppendCryptoHeader = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, new k(a)]),
                this._funcCall("AppendCryptoHeader", t, r, i, null)
            }
            ,
            $.prototype.ParseCryptoHeader = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([new k(c)]),
                this._funcCall("ParseCryptoHeader", r, e, a, null)
            }
            ,
            $.prototype.AppendFileTransportHeader = function(c, e, a, r, i, t, n, b) {
                var f;
                f = this._funcMakeParams([c, e, a, new k(r), i, t]),
                this._funcCall("AppendFileTransportHeader", f, n, b, null)
            }
            ,
            $.prototype.ParseFileTransportHeader = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("ParseFileTransportHeader", i, a, r, null)
            }
            ,
            $.prototype.AppendFileCryptoHeader = function(c, e, a, r, i, t) {
                var n;
                n = this._funcMakeParams([c, e, a, r]),
                this._funcCall("AppendFileCryptoHeader", n, i, t, null)
            }
            ,
            $.prototype.ParseFileCryptoHeader = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("ParseFileCryptoHeader", i, a, r, null)
            }
            ,
            $.prototype.DevCtxEnum = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("DevCtxEnum", r, e, a, null)
            }
            ,
            $.prototype.DevCtxOpen = function(c, e, a, r, i) {
                var t;
                return t = this._funcMakeParams([c, e, a]),
                this._funcCall("DevCtxOpen", t, r, i, null)
            }
            ,
            $.prototype.CreateDeviceContext = function() {
                return new z
            }
            ,
            $.prototype.DevCtxEnumVirtual = function(c, a, r) {
                var i, t = this;
                return i = this._funcMakeParams([c]),
                this._funcCall("DevCtxEnumVirtual", i, a, r, function(a, r, i) {
                    var n = t.IsAsync(r, i);
                    try {
                        if (null == a) {
                            if (!n)
                                return null;
                            r(null)
                        }
                        if (c.set(a[1]),
                        !n)
                            return a[0];
                        r(a[0])
                    } catch (c) {
                        var b = t.MakeError(X.ERROR_LIBRARY_COMUNICATION_FAILED, "");
                        if (n)
                            return void i(b);
                        throw new e(b.errorCode,b.message)
                    }
                })
            }
            ,
            $.prototype.DevCtxClose = function(c, e, a) {
                var r;
                return r = this._funcMakeParams([c]),
                this._funcCall("DevCtxClose", r, e, a, null)
            }
            ,
            $.prototype.DevCtxGetData = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("DevCtxGetData", i, a, r, null)
            }
            ,
            $.prototype.DevCtxChangePassword = function(c, e, a, r) {
                var i;
                return i = this._funcMakeParams([c, e]),
                this._funcCall("DevCtxChangePassword", i, a, r, null)
            }
            ,
            $.prototype.GetHostInfo = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("GetHostInfo", a, c, e, null)
            }
            ,
            $.prototype.IsRemotelyControlled = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("IsRemotelyControlled", a, c, e, null)
            }
            ,
            $.prototype.CtxCreate = function(c, e) {
                var a;
                return a = this._funcMakeParams(null),
                this._funcCall("CtxCreate", a, c, e, null)
            }
            ,
            $.prototype.CtxFree = function(c, e, a) {
                var r;
                r = this._funcMakeParams([c]),
                this._funcCall("CtxFree", r, e, a, null)
            }
            ,
            $.prototype.CtxSetParameter = function(c, e, a, r, i) {
                var t;
                "boolean" == typeof a && (a = a ? 1 : 0),
                t = this._funcMakeParams([c, e, a]),
                this._funcCall("CtxSetParameter", t, r, i, null)
            }
            ,
            {
                EndUserLibraryLoader: l,
                EUSignCP: $,
                EndUserError: X
            }
        }
        ) ? r.apply(e, []) : r) || (c.exports = i)
    }
    , function(c, e, a) {
        "use strict";
        a.r(e);
        var r = a(0)
          , i = a(12)
          , t = a(5)
          , n = a(6)
          , b = a(7)
          , f = function() {}
          , d = function(c) {
            this.type = c ? c.type : "",
            this.device = c ? c.device : "",
            this.visibleName = c ? c.visibleName : "",
            this.typeIndex = c ? c.typeIndex : -1,
            this.devIndex = c ? c.devIndex : -1,
            this.password = c ? c.password : "",
            this.user = c ? c.user : ""
        }
          , u = a(13)
          , o = function() {}
          , l = function() {}
          , h = a(2)
          , s = a(9)
          , g = a(10)
          , k = a(8)
          , j = a(11)
          , p = a(14)
          , m = function() {
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
          , v = a(15)
          , E = a(17)
          , _ = a(18)
          , w = function() {
            function c(c) {
                this.m_worker = new E.a(_,c)
            }
            return c.prototype.GetLibraryInfo = function(c) {
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
            c.prototype.ReadPrivateKeySIM = function(c, e, a) {
                return this.m_worker.postMessage("ReadPrivateKeySIM", Array.prototype.slice.call(arguments))
            }
            ,
            c.prototype.ReadPrivateKeyKSP = function(c, e, a) {
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
            c.prototype.MakeNewCertificate = function(c, e, a, r, i, t, n, b, f, d, u, o, l, h, s, g) {
                return void 0 === g && (g = !1),
                this.m_worker.postMessage("MakeNewCertificate", Array.prototype.slice.call(arguments))
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
            c.prototype.ProtectDataByPassword = function(c, e, a) {
                return this.m_worker.postMessage("ProtectDataByPassword", Array.prototype.slice.call(arguments))
            }
            ,
            c.prototype.UnprotectDataByPassword = function(c, e, a) {
                return this.m_worker.postMessage("UnprotectDataByPassword", Array.prototype.slice.call(arguments))
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
          , y = a(19);
        a.d(e, "EndUser", function() {
            return L
        }),
        a.d(e, "CASettings", function() {
            return t.a
        }),
        a.d(e, "KSPSettings", function() {
            return t.d
        }),
        a.d(e, "EndUserError", function() {
            return r
        }),
        a.d(e, "EndUserConstants", function() {
            return h
        }),
        a.d(e, "EndUserLibraryInfoJS", function() {
            return i.a
        }),
        a.d(e, "EndUserLibraryInfoSW", function() {
            return i.b
        }),
        a.d(e, "EndUserSettings", function() {
            return t.c
        }),
        a.d(e, "EndUserProxySettings", function() {
            return t.b
        }),
        a.d(e, "EndUserOwnerInfo", function() {
            return n.a
        }),
        a.d(e, "EndUserCertificateInfoEx", function() {
            return b.a
        }),
        a.d(e, "EndUserCertificate", function() {
            return f
        }),
        a.d(e, "EndUserKeyMedia", function() {
            return d
        }),
        a.d(e, "EndUserJKSPrivateKeyInfo", function() {
            return u.a
        }),
        a.d(e, "EndUserContext", function() {
            return o
        }),
        a.d(e, "EndUserPrivateKeyContext", function() {
            return l
        }),
        a.d(e, "EndUserTimeInfo", function() {
            return g.a
        }),
        a.d(e, "EndUserSignInfo", function() {
            return k.a
        }),
        a.d(e, "EndUserSenderInfo", function() {
            return j.a
        }),
        a.d(e, "EndUserParams", function() {
            return p.a
        }),
        a.d(e, "EndUserInfo", function() {
            return m
        }),
        a.d(e, "EndUserRequestInfo", function() {
            return v.a
        }),
        a.d(e, "EndUserTaxReport", function() {
            return s.b
        }),
        a.d(e, "EndUserTaxReceipt", function() {
            return s.a
        });
        var L = function() {
            function c(c, e) {
                switch (void 0 === e && (e = h.EndUserLibraryType.JS),
                e) {
                case h.EndUserLibraryType.SW:
                    this.m_library = new y.a;
                    break;
                case h.EndUserLibraryType.JS:
                case h.EndUserLibraryType.MS:
                default:
                    this.m_library = new w(c)
                }
            }
            return c.prototype.GetLibraryInfo = function(c) {
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
            c.prototype.ReadPrivateKeySIM = function(c, e, a) {
                return void 0 === a && (a = !0),
                this.m_library.ReadPrivateKeySIM(c, e, a)
            }
            ,
            c.prototype.ReadPrivateKeyKSP = function(c, e, a) {
                return void 0 === a && (a = !0),
                this.m_library.ReadPrivateKeyKSP(c, e, a)
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
            c.prototype.MakeNewCertificate = function(c, e, a, r, i, t, n, b, f, d, u, o, l, h, s, g) {
                return void 0 === g && (g = !1),
                this.m_library.MakeNewCertificate(c, e, a, r, i, t, n, b, f, d, u, o, l, h, s, g)
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
            c.prototype.CtxCreate = function() {
                return this.m_library.CtxCreate()
            }
            ,
            c.prototype.CtxFree = function(c) {
                return this.m_library.CtxFree(c)
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
        a.d(e, "a", function() {
            return r
        }),
        a.d(e, "d", function() {
            return i
        }),
        a.d(e, "c", function() {
            return t
        }),
        a.d(e, "b", function() {
            return n
        });
        var r = function() {}
          , i = function() {}
          , t = function() {}
          , n = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "b", function() {
            return r
        }),
        a.d(e, "a", function() {
            return i
        });
        var r = function() {}
          , i = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        }),
        a.d(e, "b", function() {
            return i
        });
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
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        "use strict";
        a.d(e, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(c, e, a) {
        (function(e, r) {
            var i;
            i = function() {
                "use strict";
                function c(c) {
                    return "function" == typeof c
                }
                function i() {
                    var c = setTimeout;
                    return function() {
                        return c(t, 1)
                    }
                }
                function t() {
                    for (var c = 0; c < O; c += 2)
                        (0,
                        N[c])(N[c + 1]),
                        N[c] = void 0,
                        N[c + 1] = void 0;
                    O = 0
                }
                function n(c, e) {
                    var a = arguments
                      , r = this
                      , i = new this.constructor(f);
                    void 0 === i[B] && m(i);
                    var t, n = r._state;
                    return n ? (t = a[n - 1],
                    q(function() {
                        return p(n, i, t, r._result)
                    })) : g(r, i, c, e),
                    i
                }
                function b(c) {
                    if (c && "object" == typeof c && c.constructor === this)
                        return c;
                    var e = new this(f);
                    return o(e, c),
                    e
                }
                function f() {}
                function d(c) {
                    try {
                        return c.then
                    } catch (c) {
                        return G.error = c,
                        G
                    }
                }
                function u(e, a, r) {
                    a.constructor === e.constructor && r === n && a.constructor.resolve === b ? function(c, e) {
                        1 === e._state ? h(c, e._result) : 2 === e._state ? s(c, e._result) : g(e, void 0, function(e) {
                            return o(c, e)
                        }, function(e) {
                            return s(c, e)
                        })
                    }(e, a) : r === G ? s(e, G.error) : void 0 === r ? h(e, a) : c(r) ? function(c, e, a) {
                        q(function(c) {
                            var r = !1
                              , i = function(c, e, a, r) {
                                try {
                                    c.call(e, a, r)
                                } catch (c) {
                                    return c
                                }
                            }(a, e, function(a) {
                                r || (r = !0,
                                e !== a ? o(c, a) : h(c, a))
                            }, function(e) {
                                r || (r = !0,
                                s(c, e))
                            }, c._label);
                            !r && i && (r = !0,
                            s(c, i))
                        }, c)
                    }(e, a, r) : h(e, a)
                }
                function o(c, e) {
                    var a;
                    c === e ? s(c, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (a = e) || "object" == typeof a && null !== a ? u(c, e, d(e)) : h(c, e)
                }
                function l(c) {
                    c._onerror && c._onerror(c._result),
                    k(c)
                }
                function h(c, e) {
                    c._state === F && (c._result = e,
                    c._state = 1,
                    0 !== c._subscribers.length && q(k, c))
                }
                function s(c, e) {
                    c._state === F && (c._state = 2,
                    c._result = e,
                    q(l, c))
                }
                function g(c, e, a, r) {
                    var i = c._subscribers
                      , t = i.length;
                    c._onerror = null,
                    i[t] = e,
                    i[t + 1] = a,
                    i[t + 2] = r,
                    0 === t && c._state && q(k, c)
                }
                function k(c) {
                    var e = c._subscribers
                      , a = c._state;
                    if (0 !== e.length) {
                        for (var r = void 0, i = void 0, t = c._result, n = 0; n < e.length; n += 3)
                            r = e[n],
                            i = e[n + a],
                            r ? p(a, r, i, t) : i(t);
                        c._subscribers.length = 0
                    }
                }
                function j() {
                    this.error = null
                }
                function p(e, a, r, i) {
                    var t = c(r)
                      , n = void 0
                      , b = void 0
                      , f = void 0
                      , d = void 0;
                    if (t) {
                        if ((n = function(c, e) {
                            try {
                                return c(e)
                            } catch (c) {
                                return M.error = c,
                                M
                            }
                        }(r, i)) === M ? (d = !0,
                        b = n.error,
                        n = null) : f = !0,
                        a === n)
                            return void s(a, new TypeError("A promises callback cannot return that same promise."))
                    } else
                        n = i,
                        f = !0;
                    a._state !== F || (t && f ? o(a, n) : d ? s(a, b) : 1 === e ? h(a, n) : 2 === e && s(a, n))
                }
                function m(c) {
                    c[B] = Q++,
                    c._state = void 0,
                    c._result = void 0,
                    c._subscribers = []
                }
                function v(c, e) {
                    this._instanceConstructor = c,
                    this.promise = new c(f),
                    this.promise[B] || m(this.promise),
                    A(e) ? (this._input = e,
                    this.length = e.length,
                    this._remaining = e.length,
                    this._result = new Array(this.length),
                    0 === this.length ? h(this.promise, this._result) : (this.length = this.length || 0,
                    this._enumerate(),
                    0 === this._remaining && h(this.promise, this._result))) : s(this.promise, new Error("Array Methods must be provided an Array"))
                }
                function E(c) {
                    this[B] = Q++,
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    f !== c && ("function" != typeof c && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(),
                    this instanceof E ? function(c, e) {
                        try {
                            e(function(e) {
                                o(c, e)
                            }, function(e) {
                                s(c, e)
                            })
                        } catch (e) {
                            s(c, e)
                        }
                    }(this, c) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }
                function _() {
                    var c = void 0;
                    if (void 0 !== r)
                        c = r;
                    else if ("undefined" != typeof self)
                        c = self;
                    else
                        try {
                            c = Function("return this")()
                        } catch (c) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    var e = c.Promise;
                    if (e) {
                        var a = null;
                        try {
                            a = Object.prototype.toString.call(e.resolve())
                        } catch (c) {}
                        if ("[object Promise]" === a && !e.cast)
                            return
                    }
                    c.Promise = E
                }
                var w, y, L, S, A = Array.isArray ? Array.isArray : function(c) {
                    return "[object Array]" === Object.prototype.toString.call(c)
                }
                , O = 0, C = void 0, R = void 0, q = function(c, e) {
                    N[O] = c,
                    N[O + 1] = e,
                    2 === (O += 2) && (R ? R(t) : D())
                }, I = "undefined" != typeof window ? window : void 0, P = I || {}, T = P.MutationObserver || P.WebKitMutationObserver, x = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e), U = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, N = new Array(1e3), D = void 0;
                x ? D = function() {
                    return e.nextTick(t)
                }
                : T ? (y = 0,
                L = new T(t),
                S = document.createTextNode(""),
                L.observe(S, {
                    characterData: !0
                }),
                D = function() {
                    S.data = y = ++y % 2
                }
                ) : U ? ((w = new MessageChannel).port1.onmessage = t,
                D = function() {
                    return w.port2.postMessage(0)
                }
                ) : D = void 0 === I ? function() {
                    try {
                        var c = a(23);
                        return C = c.runOnLoop || c.runOnContext,
                        function() {
                            C(t)
                        }
                    } catch (c) {
                        return i()
                    }
                }() : i();
                var B = Math.random().toString(36).substring(16)
                  , F = void 0
                  , G = new j
                  , M = new j
                  , Q = 0;
                return v.prototype._enumerate = function() {
                    for (var c = this.length, e = this._input, a = 0; this._state === F && a < c; a++)
                        this._eachEntry(e[a], a)
                }
                ,
                v.prototype._eachEntry = function(c, e) {
                    var a = this._instanceConstructor
                      , r = a.resolve;
                    if (r === b) {
                        var i = d(c);
                        if (i === n && c._state !== F)
                            this._settledAt(c._state, e, c._result);
                        else if ("function" != typeof i)
                            this._remaining--,
                            this._result[e] = c;
                        else if (a === E) {
                            var t = new a(f);
                            u(t, c, i),
                            this._willSettleAt(t, e)
                        } else
                            this._willSettleAt(new a(function(e) {
                                return e(c)
                            }
                            ), e)
                    } else
                        this._willSettleAt(r(c), e)
                }
                ,
                v.prototype._settledAt = function(c, e, a) {
                    var r = this.promise;
                    r._state === F && (this._remaining--,
                    2 === c ? s(r, a) : this._result[e] = a),
                    0 === this._remaining && h(r, this._result)
                }
                ,
                v.prototype._willSettleAt = function(c, e) {
                    var a = this;
                    g(c, void 0, function(c) {
                        return a._settledAt(1, e, c)
                    }, function(c) {
                        return a._settledAt(2, e, c)
                    })
                }
                ,
                E.all = function(c) {
                    return new v(this,c).promise
                }
                ,
                E.race = function(c) {
                    var e = this;
                    return new e(A(c) ? function(a, r) {
                        for (var i = c.length, t = 0; t < i; t++)
                            e.resolve(c[t]).then(a, r)
                    }
                    : function(c, e) {
                        return e(new TypeError("You must pass an array to race."))
                    }
                    )
                }
                ,
                E.resolve = b,
                E.reject = function(c) {
                    var e = new this(f);
                    return s(e, c),
                    e
                }
                ,
                E._setScheduler = function(c) {
                    R = c
                }
                ,
                E._setAsap = function(c) {
                    q = c
                }
                ,
                E._asap = q,
                E.prototype = {
                    constructor: E,
                    then: n,
                    catch: function(c) {
                        return this.then(null, c)
                    }
                },
                _(),
                E.polyfill = _,
                E.Promise = E,
                E
            }
            ,
            c.exports = i()
        }
        ).call(this, a(21), a(22))
    }
    , function(c, e, a) {
        "use strict";
        (function(c) {
            var a = function() {
                function e(c, e) {
                    var a = this;
                    this.m_worker = this.loadWorker(c, e),
                    this.m_worker.onmessage = function(c) {
                        var e = c.data
                          , r = a.m_promises[e.id - 1];
                        r && (delete a.m_promises[e.id - 1],
                        e.error ? r.reject(e.error) : r.resolve(e.result))
                    }
                    ,
                    this.m_worker.onerror = function(c) {
                        a.m_promises.forEach(function(e) {
                            e.reject(c.error)
                        }),
                        a.m_promises = new Array
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
                e.prototype.postMessage = function(e, a) {
                    var r = this
                      , i = new function(c, e, a) {
                        this.id = c,
                        this.cmd = e,
                        this.params = a,
                        this.origin = window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
                        this.pathname = window.location.pathname
                    }
                    (-1,e,a)
                      , t = new c(function(c, e) {
                        i.id = r.m_promises.push({
                            resolve: c,
                            reject: e
                        })
                    }
                    );
                    return this.m_worker.postMessage(i),
                    t
                }
                ,
                e
            }();
            e.a = a,
            function() {
                function c(c) {
                    this.m_context = c,
                    this.m_initialized = !1;
                    var e = this;
                    self.onmessage = function(c) {
                        e.onMessage(c.data)
                    }
                }
                c.prototype.postMessage = function(c, e, a, r) {
                    var i = new function(c, e, a, r) {
                        this.id = c,
                        this.cmd = e,
                        this.result = a,
                        this.error = r
                    }
                    (c,e,a,r);
                    self.postMessage(i)
                }
                ,
                c.prototype.onMessage = function(c) {
                    var e = this;
                    this.m_initialized ? this.m_context[c.cmd].apply(this.m_context, c.params).then(function(a) {
                        e.postMessage(c.id, c.cmd, a)
                    }, function(a) {
                        e.postMessage(c.id, c.cmd, null, a)
                    }) : setTimeout(function() {
                        e.onMessage(c)
                    }, 50)
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
              , i = a(5)
              , t = a(6)
              , n = a(13)
              , b = a(20)
              , f = a(4)
              , d = a(12)
              , u = a(1)
              , o = a(7)
              , l = a(2)
              , h = a(9)
              , s = a(14)
              , g = a(15)
              , k = a(8)
              , j = a(11)
              , p = a(10)
              , m = function() {
                function e() {
                    this.m_library = new b.a,
                    this.m_settings = null,
                    this.m_initialized = !1,
                    this.m_kmTypes = null,
                    this.m_kmActiveOperation = !1,
                    this.m_context = null,
                    this.m_pkContext = null
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
                e.prototype.ProcessArray = function(e) {
                    var a = this;
                    return new c(function(c, r) {
                        var i = Array()
                          , t = 0
                          , n = function() {
                            t >= e.length ? c(i) : (e[t].then(function(c) {
                                i.push(c),
                                n()
                            }).catch(function(c) {
                                return r(a.MapError(c))
                            }),
                            t++)
                        };
                        n()
                    }
                    )
                }
                ,
                e.prototype.CheckInitialize = function() {
                    var e = this
                      , a = e.m_library;
                    return new c(function(c, i) {
                        e.m_initialized ? c() : a.Load().then(function() {
                            throw a.MakeError(r.EU_ERROR_NOT_INITIALIZED, "")
                        }).catch(function(c) {
                            return i(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.BeginKMOperation = function() {
                    var e = this;
                    return new c(function(c, a) {
                        var r = function() {
                            e.m_kmActiveOperation ? setTimeout(r, 10) : (e.m_kmActiveOperation = !0,
                            c())
                        };
                        r()
                    }
                    )
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
                    return new c(function(c, t) {
                        if (e && null == n)
                            throw i.MakeError(r.EU_ERROR_WRITE_SETTINGS, "");
                        var f = n && n.tspAddress ? n : b
                          , d = i.CreateTSPSettings();
                        d.SetGetStamps(!0),
                        d.SetAddress(f ? f.tspAddress : ""),
                        d.SetPort(f ? f.tspAddressPort : "80"),
                        i.SetTSPSettings(d).then(function() {
                            var c = !n || !(!n || !n.ocspAccessPointAddress)
                              , e = i.CreateOCSPSettings();
                            return e.SetUseOCSP(c),
                            c && (e.SetBeforeStore(!0),
                            e.SetAddress(n ? n.ocspAccessPointAddress : "czo.gov.ua"),
                            e.SetPort(n ? n.ocspAccessPointPort : "80")),
                            i.SetOCSPSettings(e)
                        }).then(function() {
                            var c;
                            c = !(!n || !n.cmpAddress);
                            var e = i.CreateCMPSettings();
                            return e.SetUseCMP(c),
                            c && (e.SetAddress(n.cmpAddress),
                            e.SetPort("80")),
                            i.SetCMPSettings(e)
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            t(a.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetJKSPrivateKey = function(e, a) {
                    var r = this
                      , i = r.m_library;
                    return new c(function(c, t) {
                        var b = {
                            alias: null,
                            info: null
                        };
                        i.EnumJKSPrivateKeys(e, a).then(function(a) {
                            if (null != a)
                                return b.alias = a,
                                i.GetJKSPrivateKey(e, a);
                            c(null)
                        }).then(function(c) {
                            b.info = c;
                            for (var e = new Array, a = 0; a < c.GetCertificatesCount(); a++) {
                                var t = c.GetCertificate(a);
                                e.push(i.ParseCertificateEx(t))
                            }
                            return r.ProcessArray(e)
                        }).then(function(e) {
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
                        }).catch(function(c) {
                            return t(r.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxReadPrivateKeyInternal = function(e, a, i, t, n, b) {
                    var f = this
                      , d = this.m_library
                      , u = {
                        pkContext: null
                    };
                    return e || (e = f.m_context),
                    new c(function(c, o) {
                        var l = new Array;
                        if (n)
                            if (Array.isArray(n))
                                for (var h = 0; h < n.length; h++)
                                    l.push(d.SaveCertificate(n[h]));
                            else
                                l.push(d.SaveCertificates(n));
                        f.ProcessArray(l).then(function() {
                            return f.SetSettings(b)
                        }).then(function() {
                            return null != a && null != i ? d.CtxReadPrivateKeyBinary(e, a, i) : d.CtxReadPrivateKey(e, t)
                        }).then(function(c) {
                            u.pkContext = c;
                            var e = c.GetOwnerInfo();
                            if (!b)
                                return f.SetSettings(e.GetIssuerCN());
                            var a = f.GetCASettings(e.GetIssuerCN());
                            if (!a || -1 == a.issuerCNs.indexOf(b))
                                throw d.MakeError(r.EU_ERROR_CERT_NOT_FOUND, "")
                        }).then(function() {
                            c(u.pkContext)
                        }).catch(function(n) {
                            null == u.pkContext ? f.MapError(n).code != r.EU_ERROR_CERT_NOT_FOUND || b ? o(f.MapError(n)) : f.SearchPrivateKeyCertificatesWithCMP(a, i, t).then(function(c) {
                                return f.CtxReadPrivateKeyInternal(e, a, i, t, c.certs, c.CACommonName)
                            }).then(function(e) {
                                c(e)
                            }).catch(function(c) {
                                return o(f.MapError(c))
                            }) : d.CtxFreePrivateKey(u.pkContext).then(function() {
                                o(f.MapError(n))
                            }).catch(function() {
                                o(f.MapError(n))
                            })
                        })
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKeyInternal = function(e, a, r, i, n) {
                    var b = this;
                    return new c(function(c, f) {
                        b.ResetPrivateKeyInternal().then(function() {
                            return b.CtxReadPrivateKeyInternal(b.m_context, e, a, r, i, n)
                        }).then(function(e) {
                            b.m_pkContext = e;
                            var a = u.a.MapEndUserOwnerInfo(e.GetOwnerInfo(), new t.a);
                            c(a)
                        }).catch(function(c) {
                            f(b.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ResetPrivateKeyInternal = function() {
                    var e = this
                      , a = this.m_library;
                    return new c(function(c, r) {
                        null != e.m_pkContext ? a.CtxFreePrivateKey(e.m_pkContext).then(function() {
                            e.m_pkContext = null,
                            c()
                        }).catch(function(c) {
                            return r(e.MapError(c))
                        }) : c()
                    }
                    )
                }
                ,
                e.prototype.SearchPrivateKeyCertificatesWithCMP = function(e, a, i, t) {
                    var n = this
                      , b = n.m_library
                      , f = n.m_settings.CAs;
                    return new c(function(c, d) {
                        (null != e && null != a ? b.GetKeyInfoBinary(e, a) : b.GetKeyInfo(i)).then(function(e) {
                            var a = function(i, u) {
                                if (i >= f.length) {
                                    var o = b.MakeError(u ? r.EU_ERROR_CERT_NOT_FOUND : r.EU_ERROR_TRANSMIT_REQUEST, "");
                                    d(n.MapError(o))
                                } else {
                                    var h = t ? l.EndUserCMPCompatibility.DownloadEUCerts : l.EndUserCMPCompatibility.SearchEUCerts;
                                    n.IsCMPCompatible(f[i], h) ? t && -1 == f[i].issuerCNs.indexOf(t) ? a(i + 1, u) : b.GetCertificatesByKeyInfo(e, [f[i].cmpAddress], ["80"]).then(function(e) {
                                        c({
                                            certs: e,
                                            CACommonName: f[i].issuerCNs[0]
                                        })
                                    }).catch(function(c) {
                                        var e = c.GetErrorCode();
                                        if (e == r.EU_ERROR_CERT_NOT_FOUND || e == r.EU_ERROR_TRANSMIT_REQUEST)
                                            return u = u || e == r.EU_ERROR_CERT_NOT_FOUND,
                                            void a(i + 1, u);
                                        d(n.MapError(c))
                                    }) : a(i + 1, u)
                                }
                            };
                            a(0, !1)
                        }).catch(function(c) {
                            return d(n.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetUserCertificatesFromCertificates = function(e) {
                    var a = this
                      , r = a.m_library;
                    return new c(function(c, i) {
                        var t = new Array
                          , n = function(b) {
                            r.GetCertificateFromSignedData(b, e).then(function(e) {
                                if (null != e) {
                                    var a = new f.EndUserCertificate;
                                    return a.data = e,
                                    t.push(a),
                                    r.ParseCertificateEx(e)
                                }
                                for (var i = new Array, n = 0; n < t.length; n++)
                                    t[n].infoEx.subjType == r.EU_SUBJECT_TYPE_END_USER && i.push(t[n]);
                                c(i)
                            }).then(function(c) {
                                t[b].infoEx = u.a.MapToEndUserCertificateInfoEx(c, new o.a),
                                n(b + 1)
                            }).catch(function(c) {
                                return i(a.MapError(c))
                            })
                        };
                        n(0)
                    }
                    )
                }
                ,
                e.prototype.GeneratePrivateKeyInternal = function(e, a, r, i, t, n, b, f, d, o, l, h, s) {
                    var k = this
                      , j = this.m_library;
                    return new c(function(c, p) {
                        var m = null == e && null == r
                          , v = null != r
                          , E = j.CreatePrivateKeyInfo()
                          , _ = null;
                        null != h && (_ = u.a.MapFromEndUserInfo(h, j.CreateEndUserInfo())),
                        j.GeneratePrivateKeyEx(m, e ? e.GetTypeIndex() : -1, e ? e.GetDevIndex() : -1, e ? e.GetPassword() : r, a, i, t, n, b, f, d, o, l, _, s, E, null != r).then(function(e) {
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
                        }).catch(function(c) {
                            return p(k.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.LoadTaxReportPKey = function(e, a, i) {
                    var t = this
                      , n = this.m_library;
                    return new c(function(c, b) {
                        var f = new function() {}
                        ;
                        if (Array.isArray(e) || (e = [e]),
                        e.length > 2)
                            b(t.MapError(n.MakeError(r.EU_ERROR_BAD_PARAMETER, "")));
                        else {
                            var d = function(u, o) {
                                var h = a[u]
                                  , s = e[o];
                                n.CtxGetOwnCertificate(s, l.EndUserCertKeyType.DSTU4145, h).then(function(e) {
                                    if (i && h & l.EndUserKeyUsage.DigitalSignature && !(e.GetInfoEx().GetExtKeyUsages().indexOf(n.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1))
                                        throw n.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                                    if (h & l.EndUserKeyUsage.DigitalSignature)
                                        f.signPKCtx = s,
                                        f.signCert = e;
                                    else {
                                        if (!(h & l.EndUserKeyUsage.KeyAgreement))
                                            throw n.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                                        f.envelopPKCtx = s,
                                        f.envelopCert = e
                                    }
                                    u + 1 < a.length ? d(u + 1, 0) : c(f)
                                }).catch(function(c) {
                                    if (c.GetErrorCode() == r.EU_ERROR_CERT_NOT_FOUND) {
                                        if (o + 1 < e.length)
                                            return void d(u, o + 1);
                                        c = n.MakeError(r.EU_ERROR_BAD_PARAMETER, "")
                                    }
                                    b(t.MapError(c))
                                })
                            };
                            d(0, 0)
                        }
                    }
                    )
                }
                ,
                e.prototype.ProtectTaxReport = function(e, a, i, t, n, b, f) {
                    var d = this
                      , u = this.m_library
                      , o = new h.b;
                    o.name = b.name;
                    var l = function(e, a) {
                        return new c(function(c, r) {
                            return u.CtxSign(e.signPKCtx, u.EU_CTX_SIGN_DSTU4145_WITH_GOST34311, a, !1, !0).then(function(c) {
                                return u.BASE64Decode(c)
                            }).then(function(c) {
                                return u.AppendCryptoHeader(u.EU_HEADER_CA_TYPE, u.EU_HEADER_PART_TYPE_SIGNED, c)
                            }).then(function(e) {
                                c(e)
                            }).catch(function(c) {
                                return r(d.MapError(c))
                            })
                        }
                        )
                    }
                      , s = function(e, a) {
                        return new c(function(r, i) {
                            return u.CtxEnvelop(e.envelopPKCtx, [n], u.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL, !1, !1, a).then(function(c) {
                                return u.BASE64Decode(c)
                            }).then(function(c) {
                                return u.AppendCryptoHeader(u.EU_HEADER_CA_TYPE, u.EU_HEADER_PART_TYPE_ENCRYPTED, c)
                            }).then(function(a) {
                                var r = e.envelopCert
                                  , i = u.EU_KEY_USAGE_DIGITAL_SIGNATURE | u.EU_KEY_USAGE_KEY_AGREEMENT;
                                return i == (r.GetInfoEx().GetKeyUsageType() & i) ? a : function(e, a) {
                                    return new c(function(c, r) {
                                        return u.AppendCryptoHeader(u.EU_HEADER_CA_TYPE, u.EU_HEADER_PART_TYPE_CERTCRYPT, e).then(function(e) {
                                            var r = new Uint8Array(e.byteLength + a.byteLength);
                                            r.set(new Uint8Array(e), 0),
                                            r.set(new Uint8Array(a), e.byteLength),
                                            c(r)
                                        }).catch(function(c) {
                                            return r(d.MapError(c))
                                        })
                                    }
                                    )
                                }(r.GetData(), a)
                            }).then(function(c) {
                                return l(e, c)
                            }).then(function(c) {
                                r({
                                    reportData: c,
                                    ownCert: e.envelopCert.GetData()
                                })
                            }).catch(function(c) {
                                return i(d.MapError(c))
                            })
                        }
                        )
                    };
                    return new c(function(n, h) {
                        new c(function(c, e) {
                            c(b.data)
                        }
                        ).then(function(c) {
                            return null != e ? l(e, c) : c
                        }).then(function(c) {
                            return null != a ? l(a, c) : c
                        }).then(function(c) {
                            return null != i ? l(i, c) : c
                        }).then(function(c) {
                            return f && (o.signedData = c),
                            null != a || null != i ? s(null != i ? i : a, c) : {
                                reportData: c,
                                ownCert: e.signCert.GetData()
                            }
                        }).then(function(c) {
                            return u.AppendTransportHeader(u.EU_HEADER_CA_TYPE, b.name, t, c.ownCert, c.reportData)
                        }).then(function(c) {
                            o.data = c,
                            o.error = d.MapError(u.MakeError(r.EU_ERROR_NONE, "")),
                            n(o)
                        }).catch(function(c) {
                            o.error = d.MapError(c),
                            n(o)
                        })
                    }
                    )
                }
                ,
                e.prototype.UnprotectTaxReceipt = function(e, a) {
                    var i = this
                      , t = this.m_library
                      , n = new h.a;
                    return n.data = null,
                    n.receiptNumber = 0,
                    n.initiators = [],
                    n.error = null,
                    new c(function(b, f) {
                        var d;
                        (d = a.data,
                        new c(function(c, e) {
                            t.ParseTransportHeader(d).then(function(e) {
                                n.receiptNumber = e.GetReceiptNumber(),
                                c(e.GetCryptoData())
                            }).catch(function(a) {
                                a.GetErrorCode() == r.EU_ERROR_PKI_FORMATS_FAILED ? c(d) : e(i.MapError(a))
                            })
                        }
                        )).then(function(a) {
                            var d = function(a) {
                                (function(a) {
                                    var b = {
                                        headerInfo: null
                                    };
                                    return new c(function(c, f) {
                                        t.ParseCryptoHeader(a).then(function(c) {
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
                                        }).then(function(e) {
                                            if (null != e) {
                                                var r = b.headerInfo.GetHeaderType() == t.EU_HEADER_PART_TYPE_SIGNED ? u.a.MapToEndUserSignInfo(e, new k.a) : u.a.MapToEndUserSenderInfo(e, new j.a);
                                                n.initiators.push(r),
                                                a = e.GetData()
                                            } else
                                                a = a.slice(b.headerInfo.GetHeaderSize() + b.headerInfo.GetCryptoData().length, a.length);
                                            c(a)
                                        }).catch(function(e) {
                                            e.GetErrorCode() == r.EU_ERROR_BAD_PARAMETER ? c(null) : f(i.MapError(e))
                                        })
                                    }
                                    )
                                }
                                )(a).then(function(c) {
                                    if (null == c)
                                        return n.data = a,
                                        n.error = i.MapError(t.MakeError(r.EU_ERROR_NONE, "")),
                                        void b(n);
                                    d(c)
                                }).catch(function(c) {
                                    return f(i.MapError(c))
                                })
                            };
                            d(a)
                        }).catch(function(c) {
                            return f(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetLibraryInfo = function(e) {
                    var a = this
                      , r = this.m_library;
                    return new c(function(c, i) {
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
                        t.supported ? r.Load().then(function() {
                            t.loaded = !0,
                            r.GetVersion().then(function(e) {
                                t.version = e,
                                c(t)
                            }).catch(function(c) {
                                return i(a.MapError(c))
                            })
                        }).catch(function(e) {
                            var i = a.MapError(e);
                            t.loaded = !1,
                            t.isNativeLibraryNeedUpdate = r.IsLibraryVersionNotSupportedError(i.code),
                            c(t)
                        }) : c(t)
                    }
                    )
                }
                ,
                e.prototype.IsInitialized = function() {
                    var e = this;
                    return new c(function(c, a) {
                        c(e.m_initialized)
                    }
                    )
                }
                ,
                e.prototype.Initialize = function(e) {
                    var a = this
                      , r = a.m_library;
                    return a.m_settings = e,
                    new c(function(c, i) {
                        r.Load().then(function() {
                            return r.SetRuntimeParameter(r.EU_SAVE_SETTINGS_PARAMETER, r.EU_SETTINGS_ID_PROXY)
                        }).then(function() {
                            return r.SetUIMode(!1)
                        }).then(function() {
                            return r.Initialize()
                        }).then(function() {
                            return r.SetUIMode(!1)
                        }).then(function() {
                            return r.SetCharset(a.m_settings.encoding)
                        }).then(function() {
                            return r.SetLanguage(a.m_settings.language)
                        }).then(function() {
                            return r.InitializeMandatorySettings()
                        }).then(function() {
                            var c = r.CreateFileStoreSettings();
                            return c.SetPath(""),
                            c.SetSaveLoadedCerts(!0),
                            r.SetFileStoreSettings(c)
                        }).then(function() {
                            return null != a.m_settings.CAs && "string" == typeof a.m_settings.CAs ? r.DownloadData(a.m_settings.CAs, "json") : a.m_settings.CAs
                        }).then(function(c) {
                            a.m_settings.CAs = c;
                            var e = r.CreateOCSPAccessInfoModeSettings();
                            return e.SetEnabled(!0),
                            r.SetOCSPAccessInfoModeSettings(e)
                        }).then(function() {
                            for (var c = new Array, e = a.m_settings.CAs, i = 0; i < e.length; i++)
                                for (var t = 0; t < e[i].issuerCNs.length; t++) {
                                    var n = r.CreateOCSPAccessInfoSettings();
                                    n.SetAddress(e[i].ocspAccessPointAddress),
                                    n.SetPort(e[i].ocspAccessPointPort),
                                    n.SetIssuerCN(e[i].issuerCNs[t]),
                                    c.push(n)
                                }
                            return r.SetOCSPAccessInfoSettings(c)
                        }).then(function() {
                            var c = r.CreateModeSettings();
                            return r.SetModeSettings(c)
                        }).then(function() {
                            return null != e.CACertificates && "string" == typeof e.CACertificates ? r.DownloadData(e.CACertificates, "binary") : e.CACertificates
                        }).then(function(c) {
                            if (null != e.CACertificates)
                                return r.SaveCertificates(c)
                        }).then(function() {
                            return r.SetRuntimeParameter(r.EU_RESOLVE_OIDS_PARAMETER, !1)
                        }).then(function() {
                            return r.CtxCreate()
                        }).then(function(c) {
                            return a.m_context = c,
                            r.CtxSetParameter(c, r.EU_RESOLVE_OIDS_CONTEXT_PARAMETER, !1)
                        }).then(function() {
                            a.m_initialized = !0,
                            c()
                        }).catch(function(c) {
                            return i(a.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.SetRuntimeParameter = function(e, a) {
                    var r = this
                      , i = r.m_library;
                    return new c(function(c, t) {
                        r.CheckInitialize().then(function() {
                            return i.SetRuntimeParameter(e, a)
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            return t(r.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetStorageParameter = function(e, a) {
                    var r = this
                      , i = r.m_library;
                    return new c(function(c, t) {
                        r.CheckInitialize().then(function() {
                            return i.GetStorageParameter(a, e)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return t(r.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.SetStorageParameter = function(e, a, r) {
                    var i = this
                      , t = i.m_library;
                    return new c(function(c, n) {
                        i.CheckInitialize().then(function() {
                            return t.SetStorageParameter(r, e, a)
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            return n(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetCAs = function() {
                    var e = this;
                    return new c(function(c, a) {
                        e.CheckInitialize().then(function() {
                            c(e.m_settings.CAs)
                        }).catch(function(c) {
                            return a(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetProxySettings = function() {
                    var e = this
                      , a = e.m_library;
                    return new c(function(c, r) {
                        e.CheckInitialize().then(function() {
                            return a.GetProxySettings()
                        }).then(function(e) {
                            var a = u.a.MapToProxySettings(e, new i.b);
                            c(a)
                        }).catch(function(c) {
                            return r(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.SetProxySettings = function(e) {
                    var a = this
                      , r = a.m_library;
                    return new c(function(c, i) {
                        a.CheckInitialize().then(function() {
                            var c = u.a.MapFromProxySettings(e, r.CreateProxySettings());
                            return r.SetProxySettings(c)
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            return i(a.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetKeyMedias = function() {
                    var e = this
                      , a = e.m_library
                      , r = new Array
                      , i = null;
                    return e.m_settings.allowedKeyMediaDevices && (i = {},
                    e.m_settings.allowedKeyMediaDevices.forEach(function(c) {
                        i[c.type] = c.devices
                    })),
                    new c(function(c, t) {
                        e.CheckInitialize().then(function() {
                            return e.BeginKMOperation()
                        }).then(function() {
                            return e.m_kmTypes ? e.m_kmTypes : a.GetKeyMediaTypes()
                        }).then(function(c) {
                            e.m_kmTypes = c;
                            var i = e.m_settings.allowedKeyMediaTypes;
                            r = new Array;
                            for (var t = 0; t < c.length; t++) {
                                var n = c[t];
                                (!i || i.indexOf(n) >= 0) && r.push(t)
                            }
                            return a.GetKeyMediaDevices(r)
                        }).then(function(a) {
                            for (var t = new Array, n = 0; n < a.length; n++)
                                for (var b = r[n], d = e.m_kmTypes[b], u = a[n], o = i && i[d] ? i[d] : null, l = 0; l < u.length; l++)
                                    if (!o || -1 != o.indexOf(u[l])) {
                                        var h = new f.EndUserKeyMedia;
                                        h.typeIndex = b,
                                        h.devIndex = l,
                                        h.password = null,
                                        h.type = d,
                                        h.device = u[l],
                                        h.visibleName = h.device + "(" + h.type + ")",
                                        t.push(h)
                                    }
                            e.EndKMOperation(),
                            c(t)
                        }).catch(function(c) {
                            e.EndKMOperation(),
                            t(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetJKSPrivateKeys = function(e) {
                    var a = this;
                    return new c(function(c, r) {
                        a.CheckInitialize().then(function() {
                            var i = new Array
                              , t = function(n) {
                                a.GetJKSPrivateKey(e, n).then(function(e) {
                                    e ? (i.push(e),
                                    t(n + 1)) : c(i)
                                }).catch(function(c) {
                                    return r(a.MapError(c))
                                })
                            };
                            t(0)
                        }).catch(function(c) {
                            return r(a.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.IsPrivateKeyReaded = function() {
                    var e = this;
                    return new c(function(c, a) {
                        e.CheckInitialize().then(function() {
                            c(null != e.m_pkContext)
                        }).catch(function(c) {
                            return a(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ResetPrivateKey = function() {
                    var e = this;
                    return new c(function(c, a) {
                        e.CheckInitialize().then(function() {
                            return e.ResetPrivateKeyInternal()
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            return a(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKey = function(e, a, r) {
                    var i = this
                      , t = this.m_library;
                    return new c(function(c, n) {
                        i.CheckInitialize().then(function() {
                            i.BeginKMOperation()
                        }).then(function() {
                            var c = u.a.MapFromKeyMedia(e, t.CreateKeyMedia());
                            return i.ReadPrivateKeyInternal(null, null, c, a, r)
                        }).then(function(e) {
                            i.EndKMOperation(),
                            c(e)
                        }).catch(function(c) {
                            i.EndKMOperation(),
                            n(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKeyBinary = function(e, a, r, i) {
                    var t = this;
                    return new c(function(c, n) {
                        t.CheckInitialize().then(function() {
                            return t.ReadPrivateKeyInternal(e, a, null, r, i)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return n(t.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKeySIM = function(e, a, i) {
                    var t = this
                      , n = this.m_library;
                    return new c(function(c, e) {
                        t.CheckInitialize().then(function() {
                            throw n.MakeError(r.EU_ERROR_NOT_SUPPORTED, "")
                        }).catch(function(c) {
                            return e(t.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKeyKSP = function(e, a, i) {
                    var t = this
                      , n = this.m_library;
                    return new c(function(c, e) {
                        t.CheckInitialize().then(function() {
                            throw n.MakeError(r.EU_ERROR_NOT_SUPPORTED, "")
                        }).catch(function(c) {
                            return e(t.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GetOwnCertificates = function() {
                    return this.CtxGetOwnCertificates(this.m_pkContext)
                }
                ,
                e.prototype.GetOwnEUserParams = function() {
                    var e = this
                      , a = e.m_library;
                    return new c(function(c, i) {
                        e.CheckInitialize().then(function() {
                            if (null == e.m_pkContext)
                                throw a.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return a.CtxGetOwnEUserParams(e.m_pkContext)
                        }).then(function(e) {
                            var a = u.a.MapToEndUserParams(e, new s.a);
                            c(a)
                        }).catch(function(c) {
                            return i(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ChangeOwnCertificatesStatus = function(e, a) {
                    var i = this
                      , t = i.m_library;
                    return new c(function(c, n) {
                        i.CheckInitialize().then(function() {
                            if (null == i.m_pkContext)
                                throw t.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return t.CtxChangeOwnCertificatesStatus(i.m_pkContext, e, a)
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            return n(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.MakeNewCertificate = function(e, a, r, i, t, n, b, f, d, o, l, h, s, g, k, j) {
                    void 0 === j && (j = !1);
                    var p = this
                      , m = p.m_library
                      , v = {
                        key: null,
                        certs: null
                    };
                    return new c(function(E, _) {
                        p.CheckInitialize().then(function() {
                            return p.BeginKMOperation()
                        }).then(function() {
                            var c = null;
                            return null != e && (c = u.a.MapFromKeyMedia(e, m.CreateKeyMedia())),
                            j ? null : p.ReadPrivateKeyInternal(a, r, c, null, g)
                        }).then(function(c) {
                            return k && !j ? m.CtxGetOwnEUserParams(p.m_pkContext) : null
                        }).then(function(c) {
                            return k ? m.CtxModifyOwnEUserParams(p.m_pkContext, k.phone, k.EMail) : null
                        }).then(function() {
                            return j ? null : p.ResetPrivateKeyInternal()
                        }).then(function() {
                            if (j)
                                return new c(function(c, a) {
                                    m.CtxMakeNewOwnCertificate(p.m_pkContext, i, t, n, b, f, d, o, l).then(function() {
                                        return p.ResetPrivateKeyInternal()
                                    }).then(function() {
                                        var c = u.a.MapFromKeyMedia(e, m.CreateKeyMedia());
                                        return h && h.password != e.password ? m.ChangePrivateKeyPassword(c, h.password) : null
                                    }).then(function() {
                                        c(null)
                                    }).catch(function(c) {
                                        a(p.MapError(c))
                                    })
                                }
                                );
                            var g = null
                              , k = null;
                            return e && (g = u.a.MapFromKeyMedia(e, m.CreateKeyMedia())),
                            h && (k = u.a.MapFromKeyMedia(h, m.CreateKeyMedia())),
                            m.MakeNewCertificate(g, a, r, i, t, n, b, f, d, o, l, k, s)
                        }).then(function(c) {
                            v.key = c;
                            var a = null;
                            return (j && e || h) && (a = u.a.MapFromKeyMedia(h || e, m.CreateKeyMedia())),
                            p.SearchPrivateKeyCertificatesWithCMP(c, s, a, g)
                        }).then(function(c) {
                            return p.GetUserCertificatesFromCertificates(c.certs)
                        }).then(function(c) {
                            p.EndKMOperation(),
                            v.certs = c,
                            E(v)
                        }).catch(function(c) {
                            p.EndKMOperation(),
                            _(p.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ChangePrivateKeyPassword = function(e, a) {
                    var r = this
                      , i = r.m_library;
                    return new c(function(c, t) {
                        r.CheckInitialize().then(function() {
                            return r.BeginKMOperation()
                        }).then(function() {
                            var c = u.a.MapFromKeyMedia(e, i.CreateKeyMedia());
                            return r.m_library.ChangePrivateKeyPassword(c, a)
                        }).then(function() {
                            r.EndKMOperation(),
                            c()
                        }).catch(function(c) {
                            r.EndKMOperation(),
                            t(r.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GeneratePrivateKey = function(e, a, r, i, t, n, b, f, d, o, l, h) {
                    var s = this
                      , g = s.m_library;
                    return new c(function(c, k) {
                        s.CheckInitialize().then(function() {
                            return s.BeginKMOperation()
                        }).then(function() {
                            var c = null;
                            return e && (c = u.a.MapFromKeyMedia(e, g.CreateKeyMedia())),
                            s.GeneratePrivateKeyInternal(c, a, null, r, i, t, n, b, f, d, o, l, h)
                        }).then(function(e) {
                            s.EndKMOperation(),
                            c(e)
                        }).catch(function(c) {
                            s.EndKMOperation(),
                            k(s.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.GeneratePrivateKeyBinary = function(e, a, r, i, t, n, b, f, d, u, o) {
                    var l = this;
                    return new c(function(c, h) {
                        l.CheckInitialize().then(function() {
                            return l.BeginKMOperation()
                        }).then(function() {
                            return l.GeneratePrivateKeyInternal(null, !1, e, a, r, i, t, n, b, f, d, u, o)
                        }).then(function(e) {
                            l.EndKMOperation(),
                            c(e)
                        }).catch(function(c) {
                            l.EndKMOperation(),
                            h(l.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.HashData = function(e, a, r) {
                    var i = this
                      , t = this.m_library
                      , n = {
                        hashContext: null,
                        hash: null
                    };
                    return new c(function(b, f) {
                        i.CheckInitialize().then(function() {
                            return t.CtxHashBegin(i.m_context, e, null)
                        }).then(function(c) {
                            return n.hashContext = c,
                            "string" != typeof a ? a : t.StringToBytes(a)
                        }).then(function(e) {
                            var a = t.EU_FILE_PROCESS_CHUNK_SIZE;
                            return new c(function(c, r) {
                                var i = function(b) {
                                    var f = e.length - b;
                                    f > a && (f = a);
                                    var d = e.subarray(b, b + f);
                                    t.CtxHashContinue(n.hashContext, d).then(function() {
                                        (b += f) < e.length ? i(b) : c()
                                    }).catch(function(c) {
                                        return r(c)
                                    })
                                };
                                i(0)
                            }
                            )
                        }).then(function() {
                            return t.CtxHashEnd(n.hashContext)
                        }).then(function(c) {
                            return n.hash = c,
                            t.CtxHashFree(n.hashContext)
                        }).then(function() {
                            return n.hashContext = null,
                            r ? n.hash : t.BASE64Decode(n.hash)
                        }).then(function(c) {
                            b(c)
                        }).catch(function(c) {
                            n.hashContext ? t.CtxHashFree(n.hashContext).then(function() {
                                f(i.MapError(c))
                            }).catch(function() {
                                f(i.MapError(c))
                            }) : f(i.MapError(c))
                        })
                    }
                    )
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
                    return new c(function(b, d) {
                        i.CheckInitialize().then(function() {
                            return t.CtxCreate()
                        }).then(function(c) {
                            return n.context = c,
                            t.CtxSetParameter(c, t.EU_RESOLVE_OIDS_CONTEXT_PARAMETER, r)
                        }).then(function() {
                            return -1 == a ? t.GetSignsCount(e) : 1
                        }).then(function(r) {
                            var b = function(a) {
                                return new c(function(c, r) {
                                    var b = new f.EndUserCertificate;
                                    t.CtxGetSignerInfo(n.context, a, e).then(function(e) {
                                        u.a.MapToEndUserCertificate(e, b),
                                        c(b)
                                    }).catch(function(c) {
                                        return r(i.MapError(c))
                                    })
                                }
                                )
                            }
                              , d = new Array;
                            if (-1 != a)
                                d.push(b(a));
                            else
                                for (var o = 0; o < r; o++)
                                    d.push(b(o));
                            return i.ProcessArray(d)
                        }).then(function(c) {
                            return n.signersInfo = c,
                            t.CtxFree(n.context)
                        }).then(function() {
                            n.context = null,
                            b(-1 != a ? n.signersInfo[0] : n.signersInfo)
                        }).catch(function(c) {
                            n.context ? t.CtxFree(n.context).then(function() {
                                d(i.MapError(c))
                            }).catch(function() {
                                d(i.MapError(c))
                            }) : d(i.MapError(c))
                        })
                    }
                    )
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
                e.prototype.SignHash = function(e, a, i, t) {
                    var n = this
                      , b = n.m_library;
                    return new c(function(c, f) {
                        n.CheckInitialize().then(function() {
                            if (null == n.m_pkContext)
                                throw b.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return b.CtxSignHash(n.m_pkContext, e, a, i)
                        }).then(function(c) {
                            return t ? c : b.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return f(n.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.SignDataEx = function(e, a, i, t, n) {
                    var b = this
                      , f = b.m_library;
                    return new c(function(c, d) {
                        b.CheckInitialize().then(function() {
                            if (null == b.m_pkContext)
                                throw f.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return f.CtxSign(b.m_pkContext, e, a, i, t)
                        }).then(function(c) {
                            return n ? c : f.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return d(b.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.AppendSign = function(e, a, i, t, n) {
                    var b = this
                      , f = b.m_library;
                    return new c(function(c, d) {
                        b.CheckInitialize().then(function() {
                            if (null == b.m_pkContext)
                                throw f.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return f.CtxAppendSign(b.m_pkContext, e, a, i, t)
                        }).then(function(c) {
                            return n ? c : f.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return d(b.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.AppendSignHash = function(e, a, i, t, n) {
                    var b = this
                      , f = b.m_library;
                    return new c(function(c, d) {
                        b.CheckInitialize().then(function() {
                            if (null == b.m_pkContext)
                                throw f.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return f.CtxAppendSignHash(b.m_pkContext, e, a, i, t)
                        }).then(function(c) {
                            return n ? c : f.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return d(b.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.VerifyHash = function(e, a, r) {
                    void 0 === r && (r = -1);
                    var i = this
                      , t = this.m_library;
                    return new c(function(n, b) {
                        i.CheckInitialize().then(function() {
                            return -1 == r ? t.GetSignsCount(a) : 1
                        }).then(function(n) {
                            var b = function(r) {
                                return new c(function(c, n) {
                                    var b = new k.a;
                                    t.VerifyHashOnTimeEx(e, r, a, null, !1, !1).then(function(c) {
                                        return u.a.MapToEndUserSignInfo(c, b),
                                        t.GetSignTimeInfo(r, a)
                                    }).then(function(e) {
                                        b.timeInfo = u.a.MapToEndUserTimeInfo(e, new p.a),
                                        c(b)
                                    }).catch(function(c) {
                                        return n(i.MapError(c))
                                    })
                                }
                                )
                            }
                              , f = new Array;
                            if (-1 != r)
                                f.push(b(r));
                            else
                                for (var d = 0; d < n; d++)
                                    f.push(b(d));
                            return i.ProcessArray(f)
                        }).then(function(c) {
                            n(-1 != r ? c[0] : c)
                        }).catch(function(c) {
                            return b(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.VerifyData = function(e, a, r) {
                    void 0 === r && (r = -1);
                    var i = this
                      , t = this.m_library;
                    return new c(function(n, b) {
                        i.CheckInitialize().then(function() {
                            return -1 == r ? t.GetSignsCount(a) : 1
                        }).then(function(n) {
                            var b = function(r) {
                                return new c(function(c, n) {
                                    var b = new k.a;
                                    t.VerifyDataOnTimeEx(e, r, a, null, !1, !1).then(function(c) {
                                        return u.a.MapToEndUserSignInfo(c, b),
                                        t.GetSignTimeInfo(r, a)
                                    }).then(function(e) {
                                        b.timeInfo = u.a.MapToEndUserTimeInfo(e, new p.a),
                                        c(b)
                                    }).catch(function(c) {
                                        return n(i.MapError(c))
                                    })
                                }
                                )
                            }
                              , f = new Array;
                            if (-1 != r)
                                f.push(b(r));
                            else
                                for (var d = 0; d < n; d++)
                                    f.push(b(d));
                            return i.ProcessArray(f)
                        }).then(function(c) {
                            n(-1 != r ? c[0] : c)
                        }).catch(function(c) {
                            return b(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.VerifyDataInternal = function(e, a) {
                    void 0 === a && (a = -1);
                    var r = this
                      , i = this.m_library;
                    return new c(function(t, n) {
                        r.CheckInitialize().then(function() {
                            return -1 == a ? i.GetSignsCount(e) : 1
                        }).then(function(t) {
                            var n = function(a) {
                                return new c(function(c, t) {
                                    var n = new k.a;
                                    i.VerifyDataInternalOnTimeEx(e, a, null, !1, !1).then(function(c) {
                                        return u.a.MapToEndUserSignInfo(c, n),
                                        i.GetSignTimeInfo(a, e)
                                    }).then(function(e) {
                                        n.timeInfo = u.a.MapToEndUserTimeInfo(e, new p.a),
                                        c(n)
                                    }).catch(function(c) {
                                        return t(r.MapError(c))
                                    })
                                }
                                )
                            }
                              , b = new Array;
                            if (-1 != a)
                                b.push(n(a));
                            else
                                for (var f = 0; f < t; f++)
                                    b.push(n(f));
                            return r.ProcessArray(b)
                        }).then(function(c) {
                            t(-1 != a ? c[0] : c)
                        }).catch(function(c) {
                            return n(r.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.EnvelopData = function(e, a, i, t, n, b) {
                    void 0 === b && (b = !1);
                    var f = this
                      , d = this.m_library;
                    return new c(function(c, u) {
                        f.CheckInitialize().then(function() {
                            if (null == f.m_pkContext && (!b || i))
                                throw d.MakeError(r.EU_ERROR_BAD_CERT, "");
                            var c = d.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
                            return b ? i ? d.CtxEnvelopWithDynamicKey(f.m_pkContext, e, c, i, t, a) : d.EnvelopToRecipientsWithDynamicKey(e, i, t, a) : d.CtxEnvelop(f.m_pkContext, e, c, i, t, a)
                        }).then(function(c) {
                            return n ? c : d.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return u(f.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.DevelopData = function(e, a) {
                    var i = this
                      , t = this.m_library;
                    return new c(function(c, n) {
                        i.CheckInitialize().then(function() {
                            if (null == i.m_pkContext)
                                throw t.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return t.CtxDevelop(i.m_pkContext, e, a)
                        }).then(function(e) {
                            var a = u.a.MapToEndUserSenderInfo(e, new j.a);
                            c(a)
                        }).catch(function(c) {
                            return n(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ProtectDataByPassword = function(e, a, r) {
                    var i = this
                      , t = this.m_library;
                    return new c(function(c, n) {
                        i.CheckInitialize().then(function() {
                            return t.ProtectDataByPassword(e, a)
                        }).then(function(c) {
                            return r ? c : t.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return n(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.UnprotectDataByPassword = function(e, a, r) {
                    var i = this
                      , t = this.m_library;
                    return new c(function(c, n) {
                        i.CheckInitialize().then(function() {
                            return t.UnprotectDataByPassword(e, a)
                        }).then(function(c) {
                            return r ? t.BytesToString(c) : c
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return n(i.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxCreate = function() {
                    var e = this
                      , a = this.m_library
                      , r = {
                        context: null
                    };
                    return new c(function(c, i) {
                        e.CheckInitialize().then(function() {
                            return a.CtxCreate()
                        }).then(function(c) {
                            return r.context = c,
                            a.CtxSetParameter(c, a.EU_RESOLVE_OIDS_CONTEXT_PARAMETER, !1)
                        }).then(function() {
                            c(r.context)
                        }).catch(function(c) {
                            return i(e.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxFree = function(e) {
                    var a = this
                      , r = this.m_library;
                    return new c(function(c, i) {
                        a.CheckInitialize().then(function() {
                            r.CtxFree(e)
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            return i(a.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxReadPrivateKey = function(e, a, r, i) {
                    var t = this
                      , n = t.m_library;
                    return new c(function(c, b) {
                        t.CheckInitialize().then(function() {
                            return t.BeginKMOperation()
                        }).then(function() {
                            var c = u.a.MapFromKeyMedia(a, n.CreateKeyMedia());
                            return t.CtxReadPrivateKeyInternal(e, null, null, c, r, i)
                        }).then(function(e) {
                            t.EndKMOperation(),
                            c(e)
                        }).catch(function(c) {
                            t.EndKMOperation(),
                            b(t.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxReadPrivateKeyBinary = function(e, a, r, i, t) {
                    var n = this;
                    return new c(function(c, b) {
                        n.CheckInitialize().then(function() {
                            return n.CtxReadPrivateKeyInternal(e, a, r, null, i, t)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return b(n.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxFreePrivateKey = function(e) {
                    var a = this
                      , r = this.m_library;
                    return new c(function(c, i) {
                        a.CheckInitialize().then(function() {
                            return r.CtxFreePrivateKey(e)
                        }).then(function() {
                            c()
                        }).catch(function(c) {
                            return i(a.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxGetOwnCertificates = function(e) {
                    var a = this
                      , i = this.m_library;
                    return new c(function(c, t) {
                        a.CheckInitialize().then(function() {
                            if (null == e)
                                throw i.MakeError(r.EU_ERROR_BAD_CERT, "");
                            var n = new Array
                              , b = function(r) {
                                i.CtxEnumOwnCertificates(e, r).then(function(e) {
                                    if (e) {
                                        var a = u.a.MapToEndUserCertificate(e, new f.EndUserCertificate);
                                        n.push(a),
                                        b(r + 1)
                                    } else
                                        c(n)
                                }).catch(function(c) {
                                    return t(a.MapError(c))
                                })
                            };
                            b(0)
                        }).catch(function(c) {
                            return t(a.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxSignHash = function(e, a, i, t, n) {
                    var b = this
                      , f = this.m_library;
                    return new c(function(c, d) {
                        b.CheckInitialize().then(function() {
                            if (null == e)
                                throw f.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return f.CtxSignHash(e, a, i, t)
                        }).then(function(c) {
                            return n ? c : f.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return d(b.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxSignData = function(e, a, i, t, n, b) {
                    var f = this
                      , d = this.m_library;
                    return new c(function(c, u) {
                        f.CheckInitialize().then(function() {
                            if (null == e)
                                throw d.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return d.CtxSign(e, a, i, t, n)
                        }).then(function(c) {
                            return b ? c : d.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return u(f.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxAppendSignHash = function(e, a, i, t, n, b) {
                    var f = this
                      , d = this.m_library;
                    return new c(function(c, u) {
                        f.CheckInitialize().then(function() {
                            if (null == e)
                                throw d.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return d.CtxAppendSignHash(e, a, i, t, n)
                        }).then(function(c) {
                            return b ? c : d.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return u(f.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxAppendSign = function(e, a, i, t, n, b) {
                    var f = this
                      , d = this.m_library;
                    return new c(function(c, u) {
                        f.CheckInitialize().then(function() {
                            if (null == e)
                                throw d.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return d.CtxAppendSign(e, a, i, t, n)
                        }).then(function(c) {
                            return b ? c : d.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return u(f.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxEnvelopData = function(e, a, i, t, n, b, f) {
                    var d = this
                      , u = this.m_library;
                    return new c(function(c, o) {
                        d.CheckInitialize().then(function() {
                            if (null == e && (!f || t))
                                throw u.MakeError(r.EU_ERROR_BAD_CERT, "");
                            var c = u.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
                            return f ? t ? u.CtxEnvelopWithDynamicKey(e, a, c, t, n, i) : u.EnvelopToRecipientsWithDynamicKey(a, t, n, i) : u.CtxEnvelop(e, a, c, t, n, i)
                        }).then(function(c) {
                            return b ? c : u.BASE64Decode(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return o(d.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.CtxDevelopData = function(e, a, i) {
                    var t = this
                      , n = this.m_library;
                    return new c(function(c, b) {
                        t.CheckInitialize().then(function() {
                            if (null == e)
                                throw n.MakeError(r.EU_ERROR_BAD_CERT, "");
                            return n.CtxDevelop(e, a, i)
                        }).then(function(e) {
                            var a = u.a.MapToEndUserSenderInfo(e, new j.a);
                            c(a)
                        }).catch(function(c) {
                            return b(t.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.ProtectTaxReports = function(e, a, r, i, t, n, b) {
                    void 0 === e && (e = null),
                    void 0 === a && (a = null),
                    void 0 === r && (r = null),
                    void 0 === b && (b = !1);
                    var f = this;
                    return new c(function(c, d) {
                        var u = {
                            accountant: null,
                            director: null,
                            stamp: null
                        };
                        f.CheckInitialize().then(function() {
                            var c = [l.EndUserKeyUsage.DigitalSignature];
                            return null != e ? f.LoadTaxReportPKey(e, c, !1) : null
                        }).then(function(c) {
                            u.accountant = c;
                            var e = [l.EndUserKeyUsage.DigitalSignature];
                            return r || e.push(l.EndUserKeyUsage.KeyAgreement),
                            null != a ? f.LoadTaxReportPKey(a, e, !1) : null
                        }).then(function(c) {
                            u.director = c;
                            var e = [l.EndUserKeyUsage.DigitalSignature, l.EndUserKeyUsage.KeyAgreement];
                            return null != r ? f.LoadTaxReportPKey(r, e, !0) : null
                        }).then(function(c) {
                            u.stamp = c;
                            for (var e = new Array, a = 0; a < n.length; a++)
                                e.push(f.ProtectTaxReport(u.accountant, u.director, u.stamp, i, t, n[a], b));
                            return f.ProcessArray(e)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return d(f.MapError(c))
                        })
                    }
                    )
                }
                ,
                e.prototype.UnprotectTaxReceipts = function(e, a) {
                    var r = this;
                    return new c(function(c, i) {
                        r.CheckInitialize().then(function() {
                            for (var c = new Array, i = 0; i < a.length; i++)
                                c.push(r.UnprotectTaxReceipt(e, a[i]));
                            return r.ProcessArray(c)
                        }).then(function(e) {
                            c(e)
                        }).catch(function(c) {
                            return i(r.MapError(c))
                        })
                    }
                    )
                }
                ,
                e
            }();
            e.a = m
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
                        return new c(function(c, n) {
                            t.EnvelopToRecipientsEx(e, a, r, i, c, n)
                        }
                        )
                    }
                    ,
                    this.EnvelopToRecipientsWithDynamicKey = function(e, a, r, i) {
                        var t = this.m_library;
                        return new c(function(c, n) {
                            t.EnvelopToRecipientsWithDynamicKey(e, a, r, i, c, n)
                        }
                        )
                    }
                    ,
                    this.EnvelopToRecipientsWithSettings = function(e, a, r, i, t, n, b) {
                        var f = this.m_library;
                        return new c(function(c, d) {
                            f.EnvelopToRecipientsWithSettings(e, a, r, i, t, n, b, c, d)
                        }
                        )
                    }
                    ,
                    this.CtxEnvelop = function(e, a, r, i, t, n) {
                        var b = this.m_library;
                        return new c(function(c, f) {
                            b.CtxEnvelop(e, a, r, i, t, n, c, f)
                        }
                        )
                    }
                    ,
                    this.CtxEnvelopWithDynamicKey = function(e, a, r, i, t, n) {
                        var b = this.m_library;
                        return new c(function(c, f) {
                            b.CtxEnvelopWithDynamicKey(e, a, r, i, t, n, c, f)
                        }
                        )
                    }
                    ,
                    this.DevelopEx = function(e, a) {
                        void 0 === a && (a = null);
                        var r = this.m_library;
                        return new c(function(c, i) {
                            r.DevelopEx(e, a, c, i)
                        }
                        )
                    }
                    ,
                    this.CtxDevelop = function(e, a, r) {
                        void 0 === r && (r = null);
                        var i = this.m_library;
                        return new c(function(c, t) {
                            i.CtxDevelop(e, a, r, c, t)
                        }
                        )
                    }
                    ,
                    this.ProtectDataByPassword = function(e, a) {
                        var r = this.m_library;
                        return new c(function(c, i) {
                            r.ProtectDataByPassword(e, a, c, i)
                        }
                        )
                    }
                    ,
                    this.UnprotectDataByPassword = function(e, a) {
                        var r = this.m_library;
                        return new c(function(c, i) {
                            r.UnprotectDataByPassword(e, a, c, i)
                        }
                        )
                    }
                    ,
                    this.AppendTransportHeader = function(e, a, r, i, t) {
                        var n = this.m_library;
                        return new c(function(c, b) {
                            n.AppendTransportHeader(e, a, r, i, t, c, b)
                        }
                        )
                    }
                    ,
                    this.ParseTransportHeader = function(e) {
                        var a = this.m_library;
                        return new c(function(c, r) {
                            a.ParseTransportHeader(e, c, r)
                        }
                        )
                    }
                    ,
                    this.AppendCryptoHeader = function(e, a, r) {
                        var i = this.m_library;
                        return new c(function(c, t) {
                            i.AppendCryptoHeader(e, a, r, c, t)
                        }
                        )
                    }
                    ,
                    this.ParseCryptoHeader = function(e) {
                        var a = this.m_library;
                        return new c(function(c, r) {
                            a.ParseCryptoHeader(e, c, r)
                        }
                        )
                    }
                    ,
                    this.CtxCreate = function() {
                        var e = this.m_library;
                        return new c(function(c, a) {
                            e.CtxCreate(c, a)
                        }
                        )
                    }
                    ,
                    this.CtxFree = function(e) {
                        var a = this.m_library;
                        return new c(function(c, r) {
                            a.CtxFree(e, c, r)
                        }
                        )
                    }
                    ,
                    this.CtxSetParameter = function(e, a, r) {
                        var i = this.m_library;
                        return new c(function(c, t) {
                            i.CtxSetParameter(e, a, r, c, t)
                        }
                        )
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
                    return new c(function(c, a) {
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
                    )
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
                e.prototype.GetVersion = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetVersion(c, a)
                    }
                    )
                }
                ,
                e.prototype.IsInitialized = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.IsInitialized(c, a)
                    }
                    )
                }
                ,
                e.prototype.Initialize = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.Initialize(c, a)
                    }
                    )
                }
                ,
                e.prototype.Finalize = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.Finalize(c, a)
                    }
                    )
                }
                ,
                e.prototype.ResetOperation = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.ResetOperation(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetUIMode = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetUIMode(e, c, r)
                    }
                    )
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
                    new c(function(c, r) {
                        a.SetLanguage(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.SetCharset = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetCharset(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.SetRuntimeParameter = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.SetRuntimeParameter(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.GetStorageParameter = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.GetStorageParameter(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.SetStorageParameter = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.SetStorageParameter(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.BASE64Encode = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.BASE64Encode(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.BASE64Decode = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.BASE64Decode(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.StringToBytes = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.StringToBytes(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.BytesToString = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.BytesToString(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.DoesNeedSetSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.DoesNeedSetSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.InitializeMandatorySettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.InitializeMandatorySettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.CreateModeSettings = function() {
                    return this.m_library.CreateModeSettings()
                }
                ,
                e.prototype.GetModeSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetModeSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetModeSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetModeSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateKeyMediaSettings = function() {
                    return this.m_library.CreateKeyMediaSettings()
                }
                ,
                e.prototype.GetKeyMediaSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetKeyMediaSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetKeyMediaSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetKeyMediaSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateFileStoreSettings = function() {
                    return this.m_library.CreateFileStoreSettings()
                }
                ,
                e.prototype.GetFileStoreSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetFileStoreSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetFileStoreSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetFileStoreSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateProxySettings = function() {
                    return this.m_library.CreateProxySettings()
                }
                ,
                e.prototype.GetProxySettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetProxySettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetProxySettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetProxySettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateOCSPSettings = function() {
                    return this.m_library.CreateOCSPSettings()
                }
                ,
                e.prototype.GetOCSPSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetOCSPSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetOCSPSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetOCSPSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateOCSPAccessInfoModeSettings = function() {
                    return this.m_library.CreateOCSPAccessInfoModeSettings()
                }
                ,
                e.prototype.GetOCSPAccessInfoModeSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetOCSPAccessInfoModeSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetOCSPAccessInfoModeSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetOCSPAccessInfoModeSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateOCSPAccessInfoSettings = function() {
                    return this.m_library.CreateOCSPAccessInfoSettings()
                }
                ,
                e.prototype.EnumOCSPAccessInfoSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.EnumOCSPAccessInfoSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.GetOCSPAccessInfoSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetOCSPAccessInfoSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetOCSPAccessInfoSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetOCSPAccessInfoSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.DeleteOCSPAccessInfoSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.DeleteOCSPAccessInfoSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateTSPSettings = function() {
                    return this.m_library.CreateTSPSettings()
                }
                ,
                e.prototype.GetTSPSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetTSPSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetTSPSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetTSPSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateLDAPSettings = function() {
                    return this.m_library.CreateLDAPSettings()
                }
                ,
                e.prototype.GetLDAPSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetLDAPSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetLDAPSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetLDAPSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CreateCMPSettings = function() {
                    return this.m_library.CreateCMPSettings()
                }
                ,
                e.prototype.GetCMPSettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetCMPSettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.SetCMPSettings = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SetCMPSettings(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.GetSystemProxySettings = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetSystemProxySettings(c, a)
                    }
                    )
                }
                ,
                e.prototype.GetCertificate = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.GetCertificate(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.ParseCertificateEx = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.ParseCertificateEx(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.SaveCertificate = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SaveCertificate(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.SaveCertificates = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SaveCertificates(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.DownloadData = function(e, a) {
                    var i = this;
                    return new c(function(c, t) {
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
                    )
                }
                ,
                e.prototype.CreateKeyMedia = function() {
                    return this.m_library.CreateKeyMedia()
                }
                ,
                e.prototype.GetPrivateKeyMedia = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.GetPrivateKeyMedia(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.EnumKeyMediaTypes = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.EnumKeyMediaTypes(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.EnumKeyMediaDevices = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.EnumKeyMediaDevices(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.GetKeyMediaTypes = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetKeyMediaTypes(c, a)
                    }
                    )
                }
                ,
                e.prototype.GetKeyMediaDevices = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.GetKeyMediaDevices(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.IsPrivateKeyReaded = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.IsPrivateKeyReaded(c, a)
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKey = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.ReadPrivateKey(c, a)
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKeySilently = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        "number" == typeof e ? i.ReadPrivateKeySilently(e, a, r, c, t) : i.ReadPrivateKeySilently(e, c, t)
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKeyBinary = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.ReadPrivateKeyBinary(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.ReadPrivateKeyFile = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.ReadPrivateKeyFile(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.ResetPrivateKey = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.ResetPrivateKey(c, a)
                    }
                    )
                }
                ,
                e.prototype.CtxReadPrivateKey = function(e, a, r, i) {
                    var t = this.m_library;
                    return new c(function(c, n) {
                        "number" == typeof a ? t.CtxReadPrivateKey(e, a, r, i, c, n) : t.CtxReadPrivateKey(e, a, c, n)
                    }
                    )
                }
                ,
                e.prototype.CtxReadPrivateKeyBinary = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.CtxReadPrivateKeyBinary(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.CtxFreePrivateKey = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.CtxFreePrivateKey(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.ShowOwnCertificate = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.ShowOwnCertificate(c, a)
                    }
                    )
                }
                ,
                e.prototype.GetOwnCertificate = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        "number" == typeof e || "number" == typeof a ? r.GetOwnCertificate(e, a, c, i) : r.GetOwnCertificate(c, i)
                    }
                    )
                }
                ,
                e.prototype.GetOwnEUserParams = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetOwnEUserParams(c, a)
                    }
                    )
                }
                ,
                e.prototype.CtxGetOwnEUserParams = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.CtxGetOwnEUserParams(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.ModifyOwnEUserParams = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.ModifyOwnEUserParams(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.CtxModifyOwnEUserParams = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.CtxModifyOwnEUserParams(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.EnumOwnCertificates = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.EnumOwnCertificates(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.GetPrivateKeyOwnerInfo = function() {
                    var e = this.m_library;
                    return new c(function(c, a) {
                        e.GetPrivateKeyOwnerInfo(c, a)
                    }
                    )
                }
                ,
                e.prototype.CtxEnumOwnCertificates = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.CtxEnumOwnCertificates(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.CtxGetOwnCertificate = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.CtxGetOwnCertificate(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.GetKeyInfo = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.GetKeyInfo(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.GetKeyInfoBinary = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.GetKeyInfoBinary(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.GetKeyInfoFile = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.GetKeyInfoFile(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.GetCertificatesByKeyInfo = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.GetCertificatesByKeyInfo(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.EnumJKSPrivateKeys = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.EnumJKSPrivateKeys(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.GetJKSPrivateKey = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.GetJKSPrivateKey(e, a, c, i)
                    }
                    )
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
                e.prototype.GeneratePrivateKeyEx = function(e, a, r, i, t, n, b, f, d, u, o, l, h, s, g, k, j) {
                    var p = this.m_library;
                    return new c(function(c, m) {
                        p.GeneratePrivateKeyEx(e, a, r, i, t, n, b, f, d, u, o, l, h, s, g, k, j, c, m)
                    }
                    )
                }
                ,
                e.prototype.ChangePrivateKeyPassword = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        null != e ? r.ChangePrivateKeyPassword(e.GetTypeIndex(), e.GetDevIndex(), e.GetPassword(), a, c, i) : r.ChangePrivateKeyPassword(c, i)
                    }
                    )
                }
                ,
                e.prototype.ChangeOwnCertificatesStatus = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.ChangeOwnCertificatesStatus(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.CtxChangeOwnCertificatesStatus = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.CtxChangeOwnCertificatesStatus(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.MakeNewCertificate = function(e, a, r, i, t, n, b, f, d, u, o, l, h) {
                    var s = this.m_library;
                    return new c(function(c, g) {
                        s.MakeNewCertificate(e, a, r, i, t, n, b, f, d, u, o, l, h, c, g)
                    }
                    )
                }
                ,
                e.prototype.MakeNewOwnCertificate = function(e, a, r, i, t, n, b, f) {
                    var d = this.m_library;
                    return new c(function(c, u) {
                        d.MakeNewOwnCertificate(e, a, r, i, t, n, b, f, c, u)
                    }
                    )
                }
                ,
                e.prototype.CtxMakeNewOwnCertificate = function(e, a, r, i, t, n, b, f, d) {
                    var u = this.m_library;
                    return new c(function(c, o) {
                        u.CtxMakeNewOwnCertificate(e, a, r, i, t, n, b, f, d, c, o)
                    }
                    )
                }
                ,
                e.prototype.CtxHashBegin = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.CtxHashBegin(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.CtxHashContinue = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.CtxHashContinue(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.CtxHashEnd = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.CtxHashEnd(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CtxHashFree = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.CtxHashFree(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.CtxGetSignerInfo = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.CtxGetSignerInfo(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.SignHash = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SignHash(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.Sign = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.Sign(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.SignInternal = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.SignInternal(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.SignHashRSA = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.SignHashRSA(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.SignRSA = function(e, a, r) {
                    var i = this.m_library;
                    return new c(function(c, t) {
                        i.SignRSA(e, a, r, c, t)
                    }
                    )
                }
                ,
                e.prototype.CtxSignHash = function(e, a, r, i) {
                    var t = this.m_library;
                    return new c(function(c, n) {
                        t.CtxSignHash(e, a, r, i, c, n)
                    }
                    )
                }
                ,
                e.prototype.CtxSign = function(e, a, r, i, t) {
                    var n = this.m_library;
                    return new c(function(c, b) {
                        n.CtxSign(e, a, r, i, t, c, b)
                    }
                    )
                }
                ,
                e.prototype.CtxSignFile = function(e, a, r, i, t, n) {
                    var b = this.m_library;
                    return new c(function(c, f) {
                        b.CtxSignFile(e, a, r, i, t, n, c, f)
                    }
                    )
                }
                ,
                e.prototype.AppendSignHash = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.AppendSignHash(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.AppendSign = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.AppendSign(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.AppendSignInternal = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.AppendSignInternal(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.CtxAppendSignHash = function(e, a, r, i, t) {
                    var n = this.m_library;
                    return new c(function(c, b) {
                        n.CtxAppendSignHash(e, a, r, i, t, c, b)
                    }
                    )
                }
                ,
                e.prototype.CtxAppendSign = function(e, a, r, i, t) {
                    var n = this.m_library;
                    return new c(function(c, b) {
                        n.CtxAppendSign(e, a, r, i, t, c, b)
                    }
                    )
                }
                ,
                e.prototype.CtxAppendSignFile = function(e, a, r, i, t, n) {
                    var b = this.m_library;
                    return new c(function(c, f) {
                        b.CtxAppendSignFile(e, a, r, i, t, n, c, f)
                    }
                    )
                }
                ,
                e.prototype.GetCertificateFromSignedData = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.GetCertificateFromSignedData(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.GetSignsCount = function(e) {
                    var a = this.m_library;
                    return new c(function(c, r) {
                        a.GetSignsCount(e, c, r)
                    }
                    )
                }
                ,
                e.prototype.GetSignTimeInfo = function(e, a) {
                    var r = this.m_library;
                    return new c(function(c, i) {
                        r.GetSignTimeInfo(e, a, c, i)
                    }
                    )
                }
                ,
                e.prototype.VerifyHashOnTimeEx = function(e, a, r, i, t, n) {
                    var b = this.m_library;
                    return new c(function(c, f) {
                        b.VerifyHashOnTimeEx(e, a, r, i, t, n, c, f)
                    }
                    )
                }
                ,
                e.prototype.VerifyDataOnTimeEx = function(e, a, r, i, t, n) {
                    var b = this.m_library;
                    return new c(function(c, f) {
                        b.VerifyDataOnTimeEx(e, a, r, i, t, n, c, f)
                    }
                    )
                }
                ,
                e.prototype.VerifyDataInternalOnTimeEx = function(e, a, r, i, t) {
                    var n = this.m_library;
                    return new c(function(c, b) {
                        n.VerifyDataInternalOnTimeEx(e, a, r, i, t, c, b)
                    }
                    )
                }
                ,
                e
            }();
            e.a = i
        }
        ).call(this, a(16).Promise)
    }
    , function(c, e) {
        function a() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(c) {
            if (d === setTimeout)
                return setTimeout(c, 0);
            if ((d === a || !d) && setTimeout)
                return d = setTimeout,
                setTimeout(c, 0);
            try {
                return d(c, 0)
            } catch (e) {
                try {
                    return d.call(null, c, 0)
                } catch (e) {
                    return d.call(this, c, 0)
                }
            }
        }
        function t() {
            s && l && (s = !1,
            l.length ? h = l.concat(h) : g = -1,
            h.length && n())
        }
        function n() {
            if (!s) {
                var c = i(t);
                s = !0;
                for (var e = h.length; e; ) {
                    for (l = h,
                    h = []; ++g < e; )
                        l && l[g].run();
                    g = -1,
                    e = h.length
                }
                l = null,
                s = !1,
                function(c) {
                    if (u === clearTimeout)
                        return clearTimeout(c);
                    if ((u === r || !u) && clearTimeout)
                        return u = clearTimeout,
                        clearTimeout(c);
                    try {
                        u(c)
                    } catch (e) {
                        try {
                            return u.call(null, c)
                        } catch (e) {
                            return u.call(this, c)
                        }
                    }
                }(c)
            }
        }
        function b(c, e) {
            this.fun = c,
            this.array = e
        }
        function f() {}
        var d, u, o = c.exports = {};
        !function() {
            try {
                d = "function" == typeof setTimeout ? setTimeout : a
            } catch (c) {
                d = a
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (c) {
                u = r
            }
        }();
        var l, h = [], s = !1, g = -1;
        o.nextTick = function(c) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var a = 1; a < arguments.length; a++)
                    e[a - 1] = arguments[a];
            h.push(new b(c,e)),
            1 !== h.length || s || i(n)
        }
        ,
        b.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        o.title = "browser",
        o.browser = !0,
        o.env = {},
        o.argv = [],
        o.version = "",
        o.versions = {},
        o.on = f,
        o.addListener = f,
        o.once = f,
        o.off = f,
        o.removeListener = f,
        o.removeAllListeners = f,
        o.emit = f,
        o.prependListener = f,
        o.prependOnceListener = f,
        o.listeners = function(c) {
            return []
        }
        ,
        o.binding = function(c) {
            throw new Error("process.binding is not supported")
        }
        ,
        o.cwd = function() {
            return "/"
        }
        ,
        o.chdir = function(c) {
            throw new Error("process.chdir is not supported")
        }
        ,
        o.umask = function() {
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
        c.PROCESS_STATUS_LOAD_LIBRARY = "process_status_load_library",
        c.PROCESS_STATUS_INSTALL_LIBRARY = "process_status_install_library",
        c.PROCESS_STATUS_SAVE_PROXY_SETTINGS = "process_status_save_proxy_settings",
        c.PROCESS_STATUS_READ_PRIVATE_KEY = "process_status_read_private_key",
        c.PROCESS_STATUS_MAKE_NEW_CERTIFICATE = "process_status_make_new_certificate",
        c.PROCESS_STATUS_SIGN_FILE = "process_status_sign_file",
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
        c.LABEL_PK = "label_pk",
        c.LABEL_PK_SUPPORTED_FILES = "label_pk_supported_files",
        c.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES = "label_pk_make_new_certificates_supported_files",
        c.LABEL_PK_TYPE_FILE = "label_pk_type_file",
        c.LABEL_PK_TYPE_KM = "label_pk_type_km",
        c.LABEL_PK_TYPE_SIM = "label_pk_type_sim",
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
            c.replace(/{(\d+)}/g, function(c, e) {
                return void 0 !== r[e] ? r[e] : c
            })
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
    n[i.SIGN_FILE_FORM_TITLE] = "Створення кваліфікованого електронного підпису",
    n[i.SIGN_FILE_FORM_SUB_TITLE] = 'Оберіть файл для підпису (до 5 МБ) та натисніть "Підписати"',
    n[i.SIGN_FILE_RESULT_FORM_SUB_TITLE] = 'Для збереження підпису до папки "Завантаження" натисніть "Зберегти"',
    n[i.VIEW_PKEY_CERTIFICATES_FORM_TITLE] = "Перегляд інформації про сертифікати особистого ключа",
    n[i.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE] = 'Для збереження сертифікатів особистого ключа до папки "Завантаження" натисніть "Зберегти"',
    n[i.PROCESS_STATUS_LOAD_LIBRARY] = "Завантаження криптографічної бібліотеки",
    n[i.PROCESS_STATUS_INSTALL_LIBRARY] = "Ініціалізація криптографічної бібліотеки",
    n[i.PROCESS_STATUS_SAVE_PROXY_SETTINGS] = "Збереження налаштувань proxy-серверу",
    n[i.PROCESS_STATUS_READ_PRIVATE_KEY] = "Зчитування особистого ключа",
    n[i.PROCESS_STATUS_MAKE_NEW_CERTIFICATE] = "Формування нових сертифікатів особистого ключа",
    n[i.PROCESS_STATUS_SIGN_FILE] = "Накладання підпису на файл",
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
    n[i.TEXT_SIGN_TIME_SIGN_TIMESTAMP_TITLE] = "Час підпису (підтверджено позначкою часу для підпису від АЦСК)",
    n[i.TEXT_SIGN_TIME_DATA_TIMESTAMP_TITLE] = "Час підпису (підтверджено позначкою часу для підпису від АЦСК)",
    n[i.TEXT_SIGN_TIME_TIME_TITLE] = "Час підпису (не підтверджено позначкою часу від АЦСК)",
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
    n[i.LABEL_PK] = "Особистий ключ",
    n[i.LABEL_PK_SUPPORTED_FILES] = "Key-6.dat, *.pfx, *.pk8, *.zs2 або *.jks",
    n[i.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES] = "Key-6.dat або *.pfx",
    n[i.LABEL_PK_TYPE_FILE] = "Файловий носій (flash-диск, CD-диск, SD-картка тощо)",
    n[i.LABEL_PK_TYPE_KM] = "Захищений носій (е.ключ Алмаз-1К, Кристал-1 тощо)",
    n[i.LABEL_PK_TYPE_SIM] = "SIM-картка",
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
    n[i.ERROR_FILE_TO_BIG] = "Занадто великий розмір файлу. Оберіть файл меншого розміру",
    n[i.ERROR_SIGN_FILE] = "Виникла помилка при підписі файла",
    n[i.CONFIRM_CONTINUE_WITHOUT_PKEY_READED] = "Ви відмовилися надавати ідентифікаційні дані ос. ключа. Продовжити?";
    var b, f = n;
    !function(c) {
        c[c.UNKNOWN = -1] = "UNKNOWN",
        c[c.DEFAULT = 0] = "DEFAULT",
        c[c.UA = 1] = "UA",
        c[c.RU = 2] = "RU",
        c[c.EN = 3] = "EN"
    }(b || (b = {}));
    var d, u, o, l = function() {
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
    }(), h = l.translate, s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], g = [12, 33, 34, 35, 36, 37, 38, 39, 40, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], k = /^\+380\d{9}$/, j = ["АЦСК органів юстиції України", "CA of the Justice of Ukraine", "АЦСК Держінформ'юсту", 'Кваліфікований надавач ЕДП "Військова частина 2428"', "АЦСК Державної прикордонної служби України"], p = ["криптомод. ІІТ Гряда-301"], m = null, v = function() {
        function c(c, e, a) {
            this.ksp = c,
            this.kspName = e,
            this.userId = a
        }
        return c.prototype.GetKSPId = function() {
            return this.ksp == r.EndUserConstants.EndUserKSP.IIT ? this.kspName : this.ksp
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
    };
    !function(c) {
        c[c.ReadPrivateKey = 1] = "ReadPrivateKey",
        c[c.MakeNewCertificate = 2] = "MakeNewCertificate",
        c[c.SignFile = 3] = "SignFile",
        c[c.ViewPKeyCertificates = 4] = "ViewPKeyCertificates"
    }(d || (d = {})),
    function(c) {
        c[c.Internal = 1] = "Internal",
        c[c.External = 2] = "External",
        c[c.ASiCS = 3] = "ASiCS"
    }(u || (u = {})),
    function(c) {
        c[c.File = 1] = "File",
        c[c.Hardware = 2] = "Hardware",
        c[c.Mobile = 3] = "Mobile",
        c[c.KSP = 4] = "KSP"
    }(o || (o = {}));
    var _ = function() {
        function c(c) {
            this.m_type = c,
            this.m_library = new r.EndUser(null,c),
            this.m_info = null,
            this.m_loading = !1
        }
        return c.prototype.GetType = function() {
            return this.m_type
        }
        ,
        c.prototype.IsSupported = function() {
            return this.m_info && this.m_info.supported
        }
        ,
        c.prototype.IsLoaded = function() {
            return this.m_info && this.m_info.loaded
        }
        ,
        c.prototype.IsLoading = function() {
            return this.m_loading
        }
        ,
        c.prototype.GetLibrary = function() {
            return this.m_library
        }
        ,
        c.prototype.GetInfo = function() {
            return this.m_info
        }
        ,
        c.prototype.Load = function() {
            var c = this;
            return c.m_loading = !0,
            new Promise(function(e, a) {
                c.m_library.GetLibraryInfo(LIBRARY_SETTINGS.downloadsURL).then(function(a) {
                    c.m_loading = !1,
                    c.m_info = a,
                    e()
                }).catch(function(e) {
                    c.m_loading = !1,
                    a(e)
                })
            }
            )
        }
        ,
        c
    }()
      , w = function() {
        function c() {
            this.m_mainPageOrigin = this.GetURLParameter(window.location.href, "address", null),
            this.m_debug = "true" == this.GetURLParameter(window.location.href, "debug", "false"),
            this.m_formType = parseInt(this.GetURLParameter(window.location.href, "formType", d.ReadPrivateKey + "")),
            this.m_ownCAOnly = "true" == this.GetURLParameter(window.location.href, "ownCAOnly", "false"),
            this.m_keyMediaType = parseInt(this.GetStorageItem("KeyMediaType", o.File)),
            this.m_libraries = new Array,
            this.m_libraries[r.EndUserConstants.EU_LIBRARY_TYPE_JS] = new _(r.EndUserConstants.EU_LIBRARY_TYPE_JS),
            this.m_libraries[r.EndUserConstants.EU_LIBRARY_TYPE_SW] = new _(r.EndUserConstants.EU_LIBRARY_TYPE_SW),
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
            this.m_euParams = null
        }
        return c.prototype.SetFormTitle = function(c) {
            var e = null;
            switch (c) {
            case "#proxySettingsBlock":
                e = h(i.PK_SET_PROXY_FORM_TITLE);
                break;
            case "#pkReadFileBlock":
            case "#pkReadKMBlock":
            case "#pkWriteFileBlock":
            case "#pkWriteKMBlock":
            case "#pkInfoBlock":
            case "#installBlock":
            case "#signBlock":
            default:
                switch (this.m_formType) {
                case d.MakeNewCertificate:
                    e = h(i.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE);
                    break;
                case d.SignFile:
                    e = h(i.SIGN_FILE_FORM_TITLE);
                    break;
                case d.ViewPKeyCertificates:
                    e = h(i.VIEW_PKEY_CERTIFICATES_FORM_TITLE);
                    break;
                case d.ReadPrivateKey:
                default:
                    e = h(i.PK_READ_FORM_TITLE)
                }
            }
            $("#titleLabel").text(e)
        }
        ,
        c.prototype.SetFormSubTitle = function(c) {
            var e = null;
            switch (c) {
            case "#proxySettingsBlock":
                e = h(i.PK_SET_PROXY_FORM_SUB_TITLE);
                break;
            case "#pkReadFileBlock":
            case "#pkReadKMBlock":
                switch (this.m_formType) {
                case d.MakeNewCertificate:
                    e = h(i.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE);
                    break;
                case d.SignFile:
                case d.ReadPrivateKey:
                case d.ViewPKeyCertificates:
                default:
                    e = h(i.PK_READ_FORM_SUB_TITLE)
                }
                break;
            case "#pkWriteFileBlock":
            case "#pkWriteKMBlock":
                switch (this.m_formType) {
                case d.MakeNewCertificate:
                    e = h(this.m_noNewKMOnMakeNewCertificate ? this.m_readedPKey.keyMedia ? i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE : this.m_noNewFileKMOnMakeNewCertificate ? i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE : i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE : i.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE)
                }
                break;
            case "#pkInfoBlock":
                switch (this.m_formType) {
                case d.ViewPKeyCertificates:
                    e = h(i.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                    break;
                default:
                    e = h(i.PK_INFO_FORM_SUB_TITLE)
                }
                break;
            case "#signBlock":
                e = h(i.SIGN_FILE_FORM_SUB_TITLE);
                break;
            case "#resultBlock":
                switch (this.m_formType) {
                case d.SignFile:
                    e = h(i.SIGN_FILE_RESULT_FORM_SUB_TITLE);
                    break;
                case d.MakeNewCertificate:
                    e = h(i.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                    break;
                case d.ViewPKeyCertificates:
                    e = h(i.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE)
                }
            }
            null != e && $("#subTitleLabel").text(e)
        }
        ,
        c.prototype.SetFormsLabels = function() {
            var c = "";
            switch (this.m_formType) {
            case d.MakeNewCertificate:
                c = h(i.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES);
                break;
            case d.SignFile:
            case d.ReadPrivateKey:
            case d.ViewPKeyCertificates:
            default:
                c = h(i.LABEL_PK_SUPPORTED_FILES)
            }
            $("#pkReadFileTitleLabel").text(h(i.LABEL_PK) + " (" + c + "):"),
            $("#pkTypeFileTitle").text(h(i.LABEL_PK_TYPE_FILE)),
            $("#pkTypeKMTitle").text(h(i.LABEL_PK_TYPE_KM)),
            $("#pkTypeSIMTitle").text(h(i.LABEL_PK_TYPE_SIM))
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
            case d.MakeNewCertificate:
                c = !1,
                e = !1;
                break;
            case d.SignFile:
            case d.ReadPrivateKey:
            case d.ViewPKeyCertificates:
            default:
                c = null != LIBRARY_SETTINGS.mssServiceURL && "" != LIBRARY_SETTINGS.mssServiceURL,
                e = null != LIBRARY_SETTINGS.KSPs
            }
            c ? $("#pkTypeSIMRadioButton").show() : $("#pkTypeSIMRadioButton").hide(),
            e ? $("#pkTypeKSPRadioButton").show() : $("#pkTypeKSPRadioButton").hide(),
            (!c && this.m_keyMediaType == o.Mobile || !e && this.m_keyMediaType == o.KSP) && (this.m_keyMediaType = o.File),
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
        c.prototype.GetCurrentLibrary = function() {
            return this.m_libraries[this.m_keyMediaType == o.Hardware || this.m_formType == d.MakeNewCertificate && this.m_noNewFileKMOnMakeNewCertificate ? r.EndUserConstants.EndUserLibraryType.SW : r.EndUserConstants.EndUserLibraryType.JS]
        }
        ,
        c.prototype.GetKMSelect = function() {
            switch (this.m_formType) {
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                return $("#pkReadKMSelect");
            case d.MakeNewCertificate:
                return null == this.m_readedPKey ? $("#pkReadKMSelect") : $("#pkWriteKMSelect")
            }
        }
        ,
        c.prototype.GetKMUserTextField = function() {
            switch (this.m_formType) {
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                return $("#pkReadKMUserTextField");
            case d.MakeNewCertificate:
                return null == this.m_readedPKey ? $("#pkReadKMUserTextField") : $("#pkWriteKMUserTextField")
            }
        }
        ,
        c.prototype.GetKMPasswordTextField = function() {
            switch (this.m_formType) {
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                return $("#pkReadKMPasswordTextField");
            case d.MakeNewCertificate:
                return null == this.m_readedPKey ? $("#pkReadKMPasswordTextField") : $("#pkWriteKMPasswordTextField")
            }
        }
        ,
        c.prototype.GetKMPasswordConfirmTextField = function() {
            switch (this.m_formType) {
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                return null;
            case d.MakeNewCertificate:
                return null == this.m_readedPKey ? null : $("#pkWriteKMPasswordConfirmTextField")
            }
        }
        ,
        c.prototype.GetKMCertsTextField = function() {
            switch (this.m_formType) {
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                return $("#pkReadKMCertsTextField");
            case d.MakeNewCertificate:
                return null == this.m_readedPKey ? $("#pkReadKMCertsTextField") : null
            }
        }
        ,
        c.prototype.GetKMCertsSelectButton = function() {
            switch (this.m_formType) {
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                return $("#pkReadKMCertsFileSelectButton");
            case d.MakeNewCertificate:
                return null == this.m_readedPKey ? $("#pkReadKMCertsFileSelectButton") : null
            }
        }
        ,
        c.prototype.GetKMButton = function() {
            switch (this.m_formType) {
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                return $("#pkReadKMButton");
            case d.MakeNewCertificate:
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
            i.on("click", function() {
                t.is(":visible") ? (t.slideUp(200),
                i.find("i").attr("direction", "down")) : (t.slideDown(200),
                i.find("i").attr("direction", "up"))
            }),
            r
        }
        ,
        c.prototype.MakeSaveFileEl = function(c, e, a, r) {
            var i = this;
            void 0 === r && (r = !1);
            var t = $("<a " + (r ? 'style="text-decoration: underline;"' : "") + ">" + c + "</a>");
            return t.attr("title", e),
            $(t).on("click", function(c) {
                i.SaveFile(e, a)
            }),
            t
        }
        ,
        c.prototype.DateToLocalString = function(c) {
            var e = ("0" + c.getDate()).slice(-2) + "." + ("0" + (c.getMonth() + 1)).slice(-2) + "." + c.getFullYear();
            return e += " " + ("0" + c.getHours()).slice(-2) + ":" + ("0" + c.getMinutes()).slice(-2) + ":" + ("0" + c.getSeconds()).slice(-2)
        }
        ,
        c.prototype.SetViewPKeyInfo = function(c) {
            var e = this
              , a = $('<div class="certificates-block rainbow-bg">')
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
            $("#pkInfoNextButton").on("click", function() {
                e.OnPKeyReaded(c)
            }),
            $("#pkInfoBackButton").off("click"),
            $("#pkInfoBackButton").on("click", function() {
                e.OnResetPKey()
            }),
            e.ShowForm("#pkInfoBlock", !1)
        }
        ,
        c.prototype.SetPKMakeNewCertificatesResult = function(c, e, a) {
            var r = $('<div class="Block StatusBlock">');
            if (e) {
                r.append("<label>" + h(i.TEXT_SAVE_NEW_PRIVATE_KEY) + ":</label><br>");
                var t = this.MakeSaveFileEl(c, c, e);
                r.append(t),
                r.append("<br><br>")
            }
            r.append("<label>" + h(i.TEXT_DOWLOAD_NEW_CERTIFICATES) + ":</label><br>");
            for (var n = 0; n < a.length; n++) {
                var b = a[n]
                  , f = "EU-" + b.infoEx.serial + ".cer"
                  , d = n + 1 + ". " + f;
                t = this.MakeSaveFileEl(d, f, b.data),
                r.append(t),
                r.append("<br>")
            }
            this.SetResult(r)
        }
        ,
        c.prototype.GetQSCD = function(c) {
            var e = new function() {
                this.use = !1,
                this.name = "",
                this.sn = ""
            }
            ;
            if (e.use = c.isQSCD,
            e.use) {
                for (var a = c.extKeyUsages.split(";"), i = 0; i < a.length; i++)
                    if (a[i].indexOf("ЗНКІ") > -1) {
                        e.name = a[i];
                        break
                    }
                e.name && j.indexOf(c.issuerCN) > -1 && (e.sn = c.subjUserCode)
            } else
                c.publicKeyType == r.EndUserConstants.EndUserCertKeyType.ECDSA && j.indexOf(c.issuerCN) > -1 && c.subjUserID && 20 == c.subjUserID.length && (e.use = !0,
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
              , u = ""
              , o = "";
            b.isTimeAvail ? b.isSignTimeStampAvail ? (u = h(i.TEXT_SIGN_TIME_SIGN_TIMESTAMP_TITLE),
            o = t.DateToLocalString(b.signTimeStamp)) : (u = h(b.isTimeStamp ? i.TEXT_SIGN_TIME_DATA_TIMESTAMP_TITLE : i.TEXT_SIGN_TIME_TIME_TITLE),
            o = t.DateToLocalString(b.time)) : (u = h(i.TEXT_SIGN_TIME_TITLE),
            o = h(i.TEXT_NO_VALUE));
            var l = d.use ? h(i.TEXT_KEY_MEDIA_TYPE_QSCD) + (d.name ? "(" + d.name + ")" : "") : h(i.TEXT_KEY_MEDIA_TYPE_NOT_QSCD)
              , s = d.sn ? d.sn : h(i.TEXT_NOT_DEFINED)
              , g = [{
                title: h(i.TEXT_SIGN_RESULT_TITLE),
                value: h(i.TEXT_SIGN_RESULT_SUCCESS)
            }, {
                title: h(i.TEXT_SIGN_FILE_NAME_TITLE),
                value: c
            }, {
                title: h(i.TEXT_SIGNER_TITLE),
                value: f.subjCN
            }, {
                title: h(i.TEXT_ORGANIZATION_TITLE),
                value: f.subjOrg
            }, {
                title: h(i.TEXT_TITLE_TITLE),
                value: f.subjTitle
            }, {
                title: u,
                value: o
            }, {
                title: h(i.TEXT_ISSUER_CN_TITLE),
                value: f.issuerCN
            }, {
                title: h(i.TEXT_SN_TITLE),
                value: f.serial
            }, {
                title: h(i.TEXT_KEY_MEDIA_TYPE_TITLE),
                value: l
            }];
            d.use && g.push({
                title: h(i.TEXT_KEY_MEDIA_SN_TITLE),
                value: s
            });
            for (var k = 0; k < g.length; k++)
                n.append(t.MakeRowEl(g[k].title, g[k].value));
            var j = [{
                title: h(i.BUTTON_SAVE),
                handle: function() {
                    t.SaveFile(c, e)
                }
            }, {
                title: h(i.BUTTON_BACK),
                handle: function() {
                    t.ShowForm("#signBlock", !1)
                }
            }];
            t.SetResult(n, j)
        }
        ,
        c.prototype.MakeCertificateInfoEl = function(c, e) {
            for (var a = "EU-" + e.infoEx.serial + ".cer", r = $("<div>"), t = this.MakeKeyUsageWithPublicKeyType(e.infoEx.keyUsageType, e.infoEx.publicKeyType), n = h(i.TEXT_FROM) + " " + this.DateToLocalString(e.infoEx.certBeginTime) + " " + h(i.TEXT_TO) + " " + this.DateToLocalString(e.infoEx.certEndTime), b = [{
                title: h(i.TEXT_ISSUER_CN_TITLE),
                value: e.infoEx.issuerCN
            }, {
                title: h(i.TEXT_SN_TITLE),
                value: e.infoEx.serial
            }, {
                title: h(i.TEXT_CERTIFICATE_VALID_TITLE),
                value: n
            }, {
                title: h(i.BUTTON_DOWNLOAD),
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
                $("#pkReadFileSelectButton").removeClass("active"),
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
                $("#pkReadKSPUserIdTextField").val(""),
                $("#pkReadKSPButton").attr("disabled", !0);
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
                this.m_formType == d.MakeNewCertificate && this.m_noNewFileKMOnMakeNewCertificate ? $("#proxyButtonBlock").show() : $("#proxyButtonBlock").hide();
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
                var i = this.m_formType != d.MakeNewCertificate || !this.m_noNewKMOnMakeNewCertificate || null == this.m_readedPKey.keyMedia;
                i && !this.m_noNewFileKMOnMakeNewCertificate ? $("#pkTypesBlock").show() : $("#pkTypesBlock").hide(),
                $("#pkBlock").show(),
                $("#pkCABloсk").hide(),
                i || ($("#pkWriteKMUserBlock").hide(),
                $("#pkWriteKMSelectBlock").hide()),
                this.m_isPKActionDone = !1,
                this.m_formType != d.MakeNewCertificate ? $("#proxyButtonBlock").show() : $("#proxyButtonBlock").hide();
                break;
            case "#pkInfoBlock":
                this.m_formType != d.ViewPKeyCertificates ? $("#pkInfoNextButton").show() : $("#pkInfoNextButton").hide(),
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
                $("#pkReadFileButton").text(h(e ? i.BUTTON_CLEAR : i.BUTTON_READ)),
                this.m_formType == d.MakeNewCertificate && (e ? $("#pkReadFileButton").hide() : $("#pkReadFileButton").show());
                break;
            case "#pkReadKMBlock":
                $("#pkTypesBlock").find(":radio").prop("disabled", e),
                $("#pkCASelect").prop("disabled", e),
                a = "" != $("#pkReadKMSelect").find(":selected").text(),
                $("#proxyButton").attr("disabled", e),
                $("#pkReadKMSelect").prop("disabled", e),
                $("#pkReadKMUserTextField").prop("disabled", e || !a),
                $("#pkReadKMPasswordTextField").prop("disabled", e || !a),
                $("#pkReadKMCertsTextField").prop("disabled", e || !a),
                $("#pkReadKMCertsFileSelectButton").attr("disabled", e || !a),
                $("#pkReadKMButton").attr("disabled", !a),
                $("#pkReadKMButton").text(h(e ? i.BUTTON_CLEAR : i.BUTTON_READ)),
                this.m_formType == d.MakeNewCertificate && (e ? $("#pkReadKMButton").hide() : $("#pkReadKMButton").show());
                break;
            case "#pkReadSIMBlock":
                $("#pkTypesBlock").find(":radio").prop("disabled", e),
                $("#pkReadSIMSelect").prop("disabled", e),
                $("#pkReadSIMMSISDNTextField").prop("disabled", e),
                a = !!("+380" + $("#pkReadSIMMSISDNTextField").val()).match(k),
                $("#pkReadSIMButton").text(h(e ? i.BUTTON_CLEAR : i.BUTTON_READ));
                break;
            case "#pkReadKSPBlock":
                $("#pkTypesBlock").find(":radio").prop("disabled", e),
                $("#pkReadKSPSelect").prop("disabled", e),
                $("#pkReadKSPUserIdTextField").prop("disabled", e),
                a = "" != $("#pkReadKSPUserIdTextField").val(),
                $("#pkReadKSPButton").text(h(e ? i.BUTTON_CLEAR : i.BUTTON_READ));
                break;
            case "#pkWriteFileBlock":
                $("#pkTypesBlock").find(":radio").prop("disabled", e),
                $("#pkCASelect").prop("disabled", e),
                a = "" != $("#pkWriteFileTextField").val(),
                $("#pkWriteFileTextField").prop("disabled", e),
                $("#pkWriteFilePasswordTextField").prop("disabled", e || !a),
                $("#pkWriteFilePasswordConfirmTextField").prop("disabled", e || !a),
                $("#pkWriteFileButton").attr("disabled", e || !a);
                break;
            case "#pkWriteKMBlock":
                $("#pkTypesBlock").find(":radio").prop("disabled", e),
                $("#pkCASelect").prop("disabled", e),
                a = "" != $("#pkWriteKMSelect").find(":selected").text() || this.m_formType == d.MakeNewCertificate && this.m_noNewKMOnMakeNewCertificate && !this.m_noNewFileKMOnMakeNewCertificate && null == this.m_readedPKey.keyMedia,
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
                this.GetCurrentLibrary().GetType() == r.EndUserConstants.EU_LIBRARY_TYPE_SW && (e += ". " + h(i.TEXT_SET_PROXY_SETTINGS))
            }
            return e
        }
        ,
        c.prototype.SetError = function(c, e) {
            void 0 === e && (e = null);
            var a = "";
            c && (a += c),
            e && (a += ". " + h(i.TEXT_ERROR_DESCRIPTION) + ": ",
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
            c.useProxy ? "" == c.address ? (this.SetError(h(i.ERROR_PROXY_ADDRESS_NOT_SET)),
            $("#proxyAddressTextField").focus(),
            null) : isNaN(parseInt(c.port)) || parseInt(c.port) < 1 || parseInt(c.port) > 65535 ? (this.SetError(h(i.ERROR_PROXY_PORT_NOT_SET)),
            $("#proxyPortTextField").focus(),
            null) : c.anonymous ? c : "" == c.user ? (this.SetError(h(i.ERROR_PROXY_USER_NOT_SET)),
            $("#proxyUserTextField").focus(),
            null) : c : c
        }
        ,
        c.prototype.ReadFile = function(c) {
            return new Promise(function(e, a) {
                var r = new FileReader;
                r.onloadend = function(a) {
                    if (a.target.readyState == FileReader.DONE) {
                        var r = new function(c, e) {
                            this.file = c,
                            this.data = e
                        }
                        (c,new Uint8Array(a.target.result));
                        e(r)
                    }
                }
                ,
                r.readAsArrayBuffer(c)
            }
            )
        }
        ,
        c.prototype.ReadFiles = function(c) {
            var e = this;
            return new Promise(function(a, r) {
                var i = Array()
                  , t = 0
                  , n = function() {
                    t >= c.length ? a(i) : (e.ReadFile(c[t]).then(function(c) {
                        i.push(c),
                        n()
                    }).catch(function(c) {
                        return r(c)
                    }),
                    t++)
                };
                n()
            }
            )
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
            $.each(c, function(c, a) {
                e.append($("<option/>", {
                    value: a.ksp,
                    text: a.name
                }))
            })
        }
        ,
        c.prototype.SetCAs = function(c) {
            this.m_CAs = c;
            var e = $("#pkCASelect")
              , a = [];
            if (null == this.m_CAs || this.m_CAs.length < 2 || this.m_keyMediaType == o.Mobile || this.m_keyMediaType == o.KSP || this.m_formType == d.MakeNewCertificate || this.m_ownCAOnly)
                $("#pkCABloсk").hide();
            else {
                a.push(h(i.TEXT_CA_AUTO_DETECT));
                for (var r = 0; r < this.m_CAs.length; r++)
                    a.push(this.m_CAs[r].issuerCNs[0]);
                e.empty(),
                $.each(a, function(c, a) {
                    e.append($("<option/>", {
                        value: c,
                        text: a
                    }))
                }),
                $("#pkCABloсk").show()
            }
        }
        ,
        c.prototype.GetSelectedCA = function() {
            if (null == this.m_CAs || 0 == this.m_CAs.length)
                return null;
            if (1 == this.m_CAs.length || this.m_formType == d.MakeNewCertificate || this.m_ownCAOnly)
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
            return null != c && c.forEach(function(c) {
                e.push(c.visibleName)
            }),
            e
        }
        ,
        c.prototype.IsKMMultiKeyDevice = function(c) {
            return p.indexOf(c.type) > -1
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
            e.GetLibrary().GetKeyMedias().then(function(e) {
                c.WriteLog("KeyMedias: " + e),
                c.m_updatingKM = !1,
                c.m_updateKM && (c.m_formType == d.MakeNewCertificate && null != c.m_readedPKey && null != c.m_readedPKey.keyMedia && c.m_noNewKMOnMakeNewCertificate && (c.IsKMConnected(c.m_readedPKey.keyMedia, e) || (e = [])),
                c.IsKMsUpdated(e, c.m_KMs) && c.SetKMs(e),
                setTimeout(function() {
                    c.m_updateKM && c.BeginUpdateKMs()
                }, 1e3))
            }).catch(function(e) {
                c.m_updatingKM = !1,
                c.m_updateKM && c.SetError(h(i.ERROR_KM_UPDATE_LIST), e),
                c.StopUpdateKMs()
            })) : c.StopUpdateKMs()
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
            $.each(u, function(c, e) {
                r.append($("<option/>", {
                    value: e,
                    text: e
                }))
            }),
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
        c.prototype.MakeKeyUsageWithPublicKeyType = function(c, e) {
            var a = ""
              , t = [];
            switch (e) {
            case r.EndUserConstants.EndUserCertKeyType.DSTU4145:
                a = h(i.TEXT_KEY_TYPE_DSTU4145);
                break;
            case r.EndUserConstants.EndUserCertKeyType.RSA:
                a = h(i.TEXT_KEY_TYPE_RSA);
                break;
            case r.EndUserConstants.EndUserCertKeyType.ECDSA:
                a = h(i.TEXT_KEY_TYPE_ECDSA)
            }
            return a = "" != a ? " (" + a + ")" : "",
            c & r.EndUserConstants.EndUserKeyUsage.DigitalSignature && t.push(h(i.TEXT_KEY_USAGE_SIGN) + a),
            c & r.EndUserConstants.EndUserKeyUsage.KeyAgreement && t.push(h(i.TEXT_KEY_USAGE_ENVELOP) + a),
            t
        }
        ,
        c.prototype.CheckPrivateKey = function(c, e, a) {
            void 0 === a && (a = !1);
            var n = this;
            return new Promise(function(b, f) {
                if (a)
                    b();
                else if (n.m_readedPKey) {
                    for (var d = n.m_readedPKey.certificatesInfo, u = null, o = (r.EndUserConstants.EndUserKeyUsage.Unknown,
                    0); o < d.length; o++) {
                        var l = d[o].infoEx;
                        if ((c == r.EndUserConstants.EndUserCertKeyType.Unknown || l.publicKeyType == c) && (l.keyUsageType,
                        e == r.EndUserConstants.EndUserKeyUsage.Unknown || (e & l.keyUsageType) == e)) {
                            u = d[o];
                            break
                        }
                    }
                    if (null != u)
                        b();
                    else {
                        var s = n.MakeKeyUsageWithPublicKeyType(e, c);
                        f(t.format(h(i.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO), s.join(", ")))
                    }
                } else
                    f(h(i.ERROR_PRIVATE_KEY_NOT_READED))
            }
            )
        }
        ,
        c.prototype.GetSupportedSignAlgosByKSP = function(c) {
            var e = [];
            switch (c) {
            case r.EndUserConstants.EndUserKSP.Kyivstar:
                e.push({
                    value: r.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
                    text: h(i.TEXT_SIGN_ALGO_ECDSA)
                });
                break;
            default:
                e.push({
                    value: r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311,
                    text: h(i.TEXT_SIGN_ALGO_DSTU4145)
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
                            text: h(i.TEXT_SIGN_ALGO_DSTU4145)
                        });
                        break;
                    case r.EndUserConstants.EndUserCertKeyType.RSA:
                        e.push({
                            value: r.EndUserConstants.EndUserSignAlgo.RSAWithSHA,
                            text: h(i.TEXT_SIGN_ALGO_RSA)
                        });
                        break;
                    case r.EndUserConstants.EndUserCertKeyType.ECDSA:
                        e.push({
                            value: r.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
                            text: h(i.TEXT_SIGN_ALGO_ECDSA)
                        })
                    }
            }
            if (0 == e.length && (this.m_keyMediaType == o.Mobile || this.m_keyMediaType == o.KSP)) {
                var n = parseInt(this.m_keyMediaType == o.Mobile ? $("#pkReadSIMSelect").find(":selected").val() : $("#pkReadKSPSelect").find(":selected").val());
                e = this.GetSupportedSignAlgosByKSP(n)
            }
            return e
        }
        ,
        c.prototype.OnPKeyReaded = function(c) {
            switch (this.m_readedPKey = c,
            this.ShowForm(null, !0),
            this.SetStatus(h(i.STATUS_PRIVATE_KEY_READED)),
            this.m_formType) {
            case d.MakeNewCertificate:
                this.m_isPKActionDone = !1,
                this.BeginUpdateKMs();
                break;
            case d.ReadPrivateKey:
                this.m_isPKActionDone = !0;
                break;
            case d.ViewPKeyCertificates:
                this.m_isPKActionDone = !0,
                this.SetViewPKeyInfo(c);
                break;
            case d.SignFile:
                this.m_isPKActionDone = !0;
                var e = this.GetSupportedSignAlgos(c.certificatesInfo);
                if (0 == e.length) {
                    var a = t.format(h(i.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO), h(i.TEXT_KEY_USAGE_SIGN), "");
                    return void this.SetError(a)
                }
                var r = $("#signAlgoSelect");
                r.empty(),
                $.each(e, function(c, a) {
                    r.append($("<option/>", {
                        value: e[c].value,
                        text: e[c].text
                    }))
                }),
                this.ShowForm("#signBlock", !1)
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
            return !(e || a || r) && ([8, 46, 37, 39].indexOf(c) > -1 || t.indexOf(c) > -1 || i.indexOf(String.fromCharCode(c)) > -1)
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
                    e[c.data.cmd].apply(e, c.data.params).then(function(a) {
                        e.PostMessage(c.source, c.data.id, null, a)
                    }).catch(function(a) {
                        e.PostMessage(c.source, c.data.id, a, null)
                    })
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
            case d.ReadPrivateKey:
            case d.SignFile:
            case d.ViewPKeyCertificates:
                switch (a) {
                case o.File:
                    n = "#pkReadFileBlock";
                    break;
                case o.Hardware:
                    n = "#pkReadKMBlock";
                    break;
                case o.Mobile:
                    n = "#pkReadSIMBlock";
                    break;
                case o.KSP:
                    n = "#pkReadKSPBlock"
                }
                break;
            case d.MakeNewCertificate:
                n = a == o.Hardware ? null == c.m_readedPKey ? "#pkReadKMBlock" : "#pkWriteKMBlock" : null == c.m_readedPKey ? "#pkReadFileBlock" : "#pkWriteFileBlock"
            }
            c.ShowForm(n, !1);
            var b = c.GetCurrentLibrary();
            if (null == b.GetInfo())
                return c.ShowDimmerView(h(i.PROCESS_STATUS_LOAD_LIBRARY)),
                void c.LoadLibrary();
            if (c.CloseDimmerView(),
            !b.IsSupported())
                return c.HideForm("#pkBlock"),
                void c.SetError(h(i.ERROR_LIBRARY_NOT_SUPPORTED));
            if (!b.IsLoaded()) {
                if (b.GetType() != r.EndUserConstants.EU_LIBRARY_TYPE_SW)
                    return c.HideForm("#pkBlock"),
                    void c.SetError(h(i.ERROR_LIBRARY_NOT_LOADED));
                var f = b.GetInfo();
                $("#installLabel").text(h(f.isNativeLibraryNeedUpdate ? i.TEXT_LIBRARY_NEED_UPDATE : i.TEXT_LIBRARY_NEED_INSTALL));
                var u = h(f.isNativeLibraryNeedUpdate ? i.TEXT_LIBRARY_UPDATE : i.TEXT_LIBRARY_INSTALL)
                  , l = f.nativeLibraryInstallURL;
                return !f.isWebExtensionSupported || f.isWebExtensionInstalled || f.isNativeLibraryNeedUpdate || (u = h(i.TEXT_LIBRARY_WEB_EXTENSION_INSTALL),
                l = f.webExtensionInstallURL),
                $("#installURL").text(u),
                $("#installURL").attr("href", l),
                $("#installHelpURL").text(h(i.TEXT_LIBRARY_USER_MANUAL)),
                $("#installHelpURL").attr("href", f.helpURL),
                c.ShowForm("#installBlock", !1),
                void setTimeout(function() {
                    c.LoadLibrary()
                }, 500)
            }
            c.ShowDimmerView(h(i.PROCESS_STATUS_INSTALL_LIBRARY)),
            b.GetLibrary().IsInitialized().then(function(c) {
                return c ? null : b.GetLibrary().Initialize(LIBRARY_SETTINGS)
            }).then(function() {
                return b.GetLibrary().GetCAs()
            }).then(function(e) {
                c.SetCAs(e),
                c.CloseDimmerView(),
                c.BeginUpdateKMs()
            }).catch(function(e) {
                c.CloseDimmerView(),
                c.HideForm("#pkTypesBlock"),
                c.HideForm("#pkBlock"),
                c.SetError(h(i.ERROR_LIBRARY_INITIALIZE), e)
            })
        }
        ,
        c.prototype.OnSelectCA = function() {
            var c = this.GetSelectedCA()
              , e = this.m_keyMediaType == o.Hardware ? $("#pkReadKMCertsBlock") : $("#pkReadFileCertsBlock");
            !c || c.cmpAddress || c.certsInKey ? e.hide() : e.show()
        }
        ,
        c.prototype.OnSelectPKeyFile = function(c) {
            var e = this
              , a = c && 1 == c.length
              , r = a ? c[0].name : ""
              , t = e.GetFileExtension(r);
            if ($("#pkReadFilePasswordTextField").prop("disabled", !a),
            $("#pkReadFileSelectButton").toggleClass("active"),
            $("#pkReadFileButton").attr("disabled", !a),
            $("#pkReadFileCertsTextField").prop("disabled", !a),
            $("#pkReadFileCertsFileSelectButton").attr("disabled", !a),
            $("#pkReadFileButton").attr("disabled", !a),
            a || $("#pkReadFilePasswordTextField").val(""),
            $("#pkReadFileTextField").val(r),
            a && "jks" == t) {
                var n = $("#pkReadFileAliasSelect");
                n.empty(),
                e.ReadFile(c[0]).then(function(c) {
                    return e.GetCurrentLibrary().GetLibrary().GetJKSPrivateKeys(c.data)
                }).then(function(c) {
                    0 != c.length && ($.each(c, function(a, r) {
                        var i = e.FilterUserCertificates(c[a].certificates);
                        n.append($("<option/>", {
                            value: c[a].alias,
                            text: c[a].alias + "(" + i[0].infoEx.subjCN + ")"
                        }))
                    }),
                    n.prop("disabled", !1),
                    $("#pkReadFileSelectAliasBlock").show())
                }).catch(function(c) {
                    e.SetError(h(i.ERROR_GET_JKS_PRIVATE_KEY_INFO), c)
                })
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
        c.prototype.OnReadSIMMSISDNTextFieldChange = function() {
            var c = !("+380" + $("#pkReadSIMMSISDNTextField").val()).match(k);
            $("#pkReadSIMButton").attr("disabled", c)
        }
        ,
        c.prototype.OnReadKSPSelectChange = function() {
            switch (parseInt($("#pkReadKSPSelect").find(":selected").val())) {
            case r.EndUserConstants.EndUserKSP.IIT:
                $("#pkReadKSPUserIdTextField").css("text-transform", "uppercase");
                break;
            default:
                $("#pkReadKSPUserIdTextField").css("text-transform", "none")
            }
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
              , e = $("#signInFileTextField").val()
              , a = "";
            "" != e && (a = e,
            a += c == u.ASiCS ? ".zip" : ".p7s"),
            $("#signOutFileTextField").val(a)
        }
        ,
        c.prototype.OnSelectSignFile = function(c) {
            var e = c && 1 == c.length
              , a = e ? c[0].name : "";
            this.SetError(null),
            e && c[0].size >= 5242880 && (e = !1,
            a = "",
            $("#signInFileInput").val(""),
            this.SetError(h(i.ERROR_FILE_TO_BIG))),
            $("#signInFileTextField").val(a),
            this.OnChangeSignType(),
            $("#signOutFileTextField").prop("disabled", !e),
            $("#signButton").attr("disabled", !e)
        }
        ,
        c.prototype.OnSetProxy = function() {
            var c = this;
            c.GetCurrentLibrary().GetLibrary().GetProxySettings().then(function(e) {
                $("#proxyUseCheckbox").prop("checked", e.useProxy),
                $("#proxyAddressTextField").val(e.address),
                $("#proxyPortTextField").val(e.port),
                $("#proxyAuthCheckbox").prop("checked", !e.anonymous),
                $("#proxyUserTextField").val(e.user),
                $("#proxyPasswordTextField").val(e.password),
                c.ShowForm("#proxySettingsBlock", !1),
                c.OnUseProxy()
            }).catch(function(e) {
                c.SetError(h(i.ERROR_GET_PROXY_SETTINGS), e)
            })
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
            c.ShowDimmerView(h(i.PROCESS_STATUS_SAVE_PROXY_SETTINGS)),
            c.GetCurrentLibrary().GetLibrary().SetProxySettings(e).then(function() {
                c.OnHideProxy(),
                c.CloseDimmerView()
            }).catch(function(e) {
                c.CloseDimmerView(),
                c.SetError(h(i.ERROR_SET_PROXY_SETTINGS), e)
            }))
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
            e.GetLibrary().ResetPrivateKey().then(function() {
                c.OnChangeLibraryType()
            }).catch(function() {
                c.OnChangeLibraryType()
            })
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
                  , u = c ? $("#pkReadFileCertsInput") : $("#pkReadKMCertsInput")
                  , o = c ? $("#pkReadFileCertsTextField") : $("#pkReadKMCertsTextField")
                  , l = c ? null : e.GetSelectedKM()
                  , s = c ? $("#pkReadFileInput").prop("files")[0] : null
                  , g = c && "jks" == e.GetFileExtension(s.name)
                  , k = g ? n.val() : null
                  , j = new Array
                  , p = b.val()
                  , m = e.GetSelectedCA()
                  , v = null != m ? m.issuerCNs[0] : null;
                if (f && f.is(":visible") && "" == f.val())
                    return f.focus(),
                    void e.SetError(h(i.ERROR_USER_NOT_SET));
                if ("" == p)
                    return b.focus(),
                    void e.SetError(h(i.ERROR_PASSWORD_NOT_SET));
                if (o.is(":visible") && 0 == (j = u.prop("files")).length)
                    e.SetError(h(i.ERROR_CERTIFICATES_NOT_SELECTED));
                else {
                    e.ShowDimmerView(h(i.PROCESS_STATUS_READ_PRIVATE_KEY)),
                    e.StopUpdateKMs();
                    var _ = new E;
                    _.keyMedia = l,
                    _.alias = k,
                    _.password = p,
                    e.ReadFiles(j).then(function(c) {
                        var a = Array();
                        if (c)
                            for (var r = 0; r < c.length; r++)
                                a.push(c[r].data);
                        return _.certificates = a,
                        s ? e.ReadFile(s) : null
                    }).then(function(c) {
                        return _.file = c,
                        g ? a.GetLibrary().GetJKSPrivateKeys(c.data) : null
                    }).then(function(r) {
                        var i = c ? _.file.data : null;
                        if (g && c && 0 != r.length)
                            for (var t = 0; t < r.length; t++)
                                if (r[t].alias == k) {
                                    i = r[t].privateKey;
                                    for (var n = e.FilterUserCertificates(r[t].certificates), b = 0; b < n.length; b++)
                                        _.certificates.push(n[b].data);
                                    break
                                }
                        return c ? a.GetLibrary().ReadPrivateKeyBinary(i, _.password, _.certificates, v) : a.GetLibrary().ReadPrivateKey(_.keyMedia, _.certificates, v)
                    }).then(function(c) {
                        return e.SetSelectedCA(c.issuerCN),
                        a.GetLibrary().GetOwnCertificates()
                    }).then(function(c) {
                        _.certificatesInfo = c,
                        e.SetViewPKeyInfo(_),
                        e.CloseDimmerView()
                    }).catch(function(a) {
                        var n = h(i.ERROR_READ_PRIVATE_KEY);
                        if (a.code == r.EndUserError.EU_ERROR_CERT_NOT_FOUND) {
                            var b = c ? "#pkReadFileCertsBlock" : "#pkReadKMCertsBlock";
                            e.m_formType == d.MakeNewCertificate ? (n = h(i.ERROR_MAKE_NEW_CERTIFICATE),
                            a = t.format(h(i.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA), v)) : (a = null == m ? h(i.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT) : t.format(h(m.cmpAddress ? i.ERROR_READ_PRIVATE_KEY_INVALID_CA : i.ERROR_READ_PRIVATE_NEED_CERTIFICATE), v),
                            null == m || m.cmpAddress || $(b).show())
                        }
                        e.BeginUpdateKMs(),
                        e.CloseDimmerView(),
                        e.SetError(n, a)
                    })
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
                  , t = null;
                switch (c.m_keyMediaType) {
                case o.Mobile:
                    if (a = parseInt($("#pkReadSIMSelect").find(":selected").val()),
                    !(t = "+380" + $("#pkReadSIMMSISDNTextField").val()).match(k))
                        return $("#pkReadSIMMSISDNTextField").focus(),
                        void c.SetError(h(i.ERROR_MSISDN_NOT_SET_OR_INVALID));
                    break;
                case o.KSP:
                    if (a = parseInt($("#pkReadKSPSelect").find(":selected").val()),
                    r = $("#pkReadKSPSelect").find(":selected").text(),
                    !(t = $("#pkReadKSPUserIdTextField").val()))
                        return $("#pkReadKSPUserIdTextField").focus(),
                        void c.SetError(h(i.ERROR_USER_ID_NOT_SET_OR_INVALID));
                    break;
                default:
                    return
                }
                c.ShowDimmerView(h(i.PROCESS_STATUS_READ_PRIVATE_KEY)),
                c.StopUpdateKMs();
                var n = new E;
                n.keyMedia = null,
                n.password = null,
                n.kspKey = new v(a,r,t),
                e.GetLibrary().ReadPrivateKeyKSP(n.kspKey.userId, n.kspKey.GetKSPId()).then(function(c) {
                    return null != c || confirm(h(i.CONFIRM_CONTINUE_WITHOUT_PKEY_READED)) ? e.GetLibrary().GetOwnCertificates() : null
                }).then(function(a) {
                    if (!a)
                        return c.BeginUpdateKMs(),
                        e.GetLibrary().ResetPrivateKey();
                    n.certificatesInfo = a,
                    c.SetViewPKeyInfo(n)
                }).then(function() {
                    c.CloseDimmerView()
                }).catch(function(e) {
                    c.BeginUpdateKMs(),
                    c.CloseDimmerView(),
                    c.SetError(h(i.ERROR_READ_PRIVATE_KEY), e)
                })
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
                  , u = b.val()
                  , l = f.val()
                  , s = null
                  , g = e.GetSelectedCA()
                  , k = null != g ? g.issuerCNs[0] : null
                  , j = LIBRARY_SETTINGS.passwordRequirements ? new RegExp(LIBRARY_SETTINGS.passwordRequirements,"g") : null;
                if (c || (e.m_noNewKMOnMakeNewCertificate && null != e.m_readedPKey.keyMedia ? (s = new r.EndUserKeyMedia(e.m_readedPKey.keyMedia)).password = u : s = e.GetSelectedKM()),
                c && "" == d)
                    return $("#pkWriteFileTextField").focus(),
                    void e.SetError(h(i.ERROR_NEW_PK_FILE_NAME_NOT_SET));
                if (n && n.is(":visible") && "" == n.val())
                    return n.focus(),
                    void e.SetError(h(i.ERROR_USER_NOT_SET));
                if ("" == u)
                    return $(b).focus(),
                    void e.SetError(h(i.ERROR_NEW_PASSWORD_NOT_SET));
                if ("" == l)
                    return $(f).focus(),
                    void e.SetError(h(i.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET));
                if (u != l)
                    return $(f).focus(),
                    void e.SetError(h(i.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL));
                var p = null != e.m_readedPKey.keyMedia
                  , m = e.m_keyMediaType == o.Hardware
                  , v = p ? e.m_readedPKey.keyMedia.password : e.m_readedPKey.password;
                !j || u != v && j.test(u) ? (e.ShowDimmerView(h(i.PROCESS_STATUS_MAKE_NEW_CERTIFICATE)),
                e.StopUpdateKMs(),
                (p || m) && (a = this.m_libraries[r.EndUserConstants.EU_LIBRARY_TYPE_SW]),
                a.GetLibrary().IsInitialized().then(function() {
                    return e.m_euParams && e.m_noNewKMOnMakeNewCertificate ? a.GetLibrary().GetOwnEUserParams() : null
                }).then(function(c) {
                    return c ? (c.EMail = e.m_euParams.EMail,
                    c.phone = e.m_euParams.phone) : c = e.m_euParams ? e.m_euParams : null,
                    a.GetLibrary().MakeNewCertificate(p ? e.m_readedPKey.keyMedia : null, p ? null : e.m_readedPKey.file.data, p ? null : e.m_readedPKey.password, r.EndUserConstants.EndUserKeysType.DSTUAndECDHWithGOST, r.EndUserConstants.EU_KEYS_LENGTH_DS_UA_CERT, !1, r.EndUserConstants.EU_KEYS_LENGTH_KEP_UA_CERT, null, r.EndUserConstants.EU_KEYS_TYPE_NONE, 0, null, m ? s : null, m ? null : u, k, c, e.m_noNewKMOnMakeNewCertificate && p)
                }).then(function(c) {
                    null != c.key && e.SaveFile(d, c.key);
                    var a = h(i.STATUS_NEW_CERTIFICATE_MADE);
                    m || (a += ". " + t.format(h(i.STATUS_RESULT_SAVED_TO_DOWNLOADS), d)),
                    e.m_isPKActionDone = !0,
                    e.m_readedPKey = null,
                    e.ShowForm("#resultBlock", !0),
                    e.SetStatus(a, !1),
                    e.SetPKMakeNewCertificatesResult(d, c.key, c.certs),
                    e.CloseDimmerView()
                }).catch(function(c) {
                    e.BeginUpdateKMs(),
                    e.SetError(h(i.ERROR_MAKE_NEW_CERTIFICATE), c),
                    e.CloseDimmerView()
                })) : e.SetError(h(i.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS))
            }
        }
        ,
        c.prototype.OnSignFile = function() {
            var c = this
              , e = c.GetCurrentLibrary();
            c.SetError("");
            var a = parseInt($("input[type='radio'][name=signTypesRadio]:checked").val())
              , t = parseInt($("#signAlgoSelect").val())
              , n = parseInt($("#signFormatSelect").val())
              , b = $("#signInFileInput").prop("files")[0]
              , f = $("#signInFileTextField").val()
              , d = $("#signOutFileTextField").val()
              , o = new JSZip
              , l = {
                data: null,
                sign: null,
                signInfo: null,
                signerInfo: null
            };
            return "" == f ? ($("#signInFileTextField").focus(),
            void c.SetError(h(i.ERROR_FILE_TO_SIGN_NOT_SET))) : "" == d ? ($("#signOutFileTextField").focus(),
            void c.SetError(h(i.ERROR_FILE_TO_SIGN_RESULT_NOT_SET))) : (c.ShowDimmerView(h(i.PROCESS_STATUS_SIGN_FILE)),
            void e.GetLibrary().SetRuntimeParameter(r.EndUserConstants.EU_SIGN_TYPE_PARAMETER, n).then(function() {
                return c.ReadFile(b)
            }).then(function(c) {
                return l.data = c.data,
                e.GetLibrary().SignDataEx(t, c.data, a != u.Internal, !0, !1)
            }).then(function(c) {
                return l.sign = c,
                a != u.Internal ? e.GetLibrary().VerifyData(l.data, l.sign, 0) : e.GetLibrary().VerifyDataInternal(l.sign, 0)
            }).then(function(c) {
                return l.signInfo = c,
                e.GetLibrary().GetSigner(l.sign, 0, !0)
            }).then(function(c) {
                switch (l.signerInfo = c,
                a) {
                case u.ASiCS:
                    return o.file("mimetype", "application/vnd.etsi.asic-s+zip"),
                    o.file(f, l.data),
                    o.folder("META-INF").file("signature.p7s", l.sign),
                    o.generateAsync({
                        type: "blob"
                    });
                case u.Internal:
                case u.External:
                default:
                    return l.sign
                }
            }).then(function(e) {
                c.SetSignFileResult(d, e, l.signInfo, l.signerInfo),
                c.ShowForm("#resultBlock", !0),
                c.CloseDimmerView()
            }).catch(function(e) {
                c.CloseDimmerView(),
                c.SetError(h(i.ERROR_SIGN_FILE), e)
            }))
        }
        ,
        c.prototype.OnSignFileCancel = function() {
            this.ShowForm("#pkInfoBlock", !1)
        }
        ,
        c.prototype.ShowDimmerView = function(c) {
            $("#dimmerViewMessageLabel").text(c),
            $("#dimmerViewBlock").show()
        }
        ,
        c.prototype.CloseDimmerView = function() {
            $("#dimmerViewBlock").hide()
        }
        ,
        c.prototype.LoadLibrary = function() {
            var c = this
              , e = c.GetCurrentLibrary();
            e.IsLoading() || e.Load().then(function() {
                e == c.GetCurrentLibrary() && c.OnChangeLibraryType()
            }).catch(function(a) {
                e == c.GetCurrentLibrary() && (c.SetError(h(i.ERROR_LIBRARY_LOAD), a),
                c.CloseDimmerView())
            })
        }
        ,
        c.prototype.ResetPrivateKey = function() {
            var c = this;
            return new Promise(function(e, a) {
                c.OnResetPKey(),
                e()
            }
            )
        }
        ,
        c.prototype.ReadPrivateKey = function() {
            var c = this;
            return new Promise(function(e, a) {
                var r = function() {
                    c.m_readedPKey ? e(c.m_readedPKey.certificatesInfo) : ("#installBlock" != c.GetVisibleFormId() && "#proxySettingsBlock" != c.GetVisibleFormId() && "#pkReadFileBlock" != c.GetVisibleFormId() && "#pkReadKMBlock" != c.GetVisibleFormId() && "#pkReadSIMBlock" != c.GetVisibleFormId() && "#pkReadKSPBlock" != c.GetVisibleFormId() && "#pkInfoBlock" != c.GetVisibleFormId() && c.OnChangeLibraryType(),
                    setTimeout(function() {
                        r()
                    }, 500))
                };
                r()
            }
            )
        }
        ,
        c.prototype.MakeNewCertificate = function(c) {
            void 0 === c && (c = null);
            var e = this;
            return e.m_euParams = c,
            new Promise(function(c, a) {
                var r = function() {
                    if (e.m_isPKActionDone)
                        c();
                    else {
                        if (null != e.m_readedPKey && "#installBlock" != e.GetVisibleFormId() && "#proxySettingsBlock" != e.GetVisibleFormId() && "#pkWriteFileBlock" != e.GetVisibleFormId() && "#pkWriteKMBlock" != e.GetVisibleFormId()) {
                            var a = null == e.m_readedPKey.keyMedia && !e.m_noNewFileKMOnMakeNewCertificate;
                            e.SetKeyMediaType(a ? o.File : o.Hardware)
                        }
                        setTimeout(function() {
                            r()
                        }, 500)
                    }
                };
                r()
            }
            )
        }
        ,
        c.prototype.ChangeOwnCertificatesStatus = function(c, e) {
            var a = this
              , i = a.GetCurrentLibrary().GetLibrary();
            return new Promise(function(t, n) {
                a.CheckPrivateKey(r.EndUserConstants.EndUserCertKeyType.Unknown, r.EndUserConstants.EndUserKeyUsage.Unknown).then(function() {
                    return i.ChangeOwnCertificatesStatus(c, e)
                }).then(function() {
                    return t()
                }).catch(function(c) {
                    return n(c)
                })
            }
            )
        }
        ,
        c.prototype.SignHash = function(c, e, a, i, t) {
            void 0 === e && (e = !1),
            void 0 === a && (a = r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
            void 0 === i && (i = r.EndUserConstants.EndUserSignType.CAdES_BES),
            void 0 === t && (t = null);
            var n = this
              , b = n.GetCurrentLibrary().GetLibrary();
            return new Promise(function(f, d) {
                n.CheckPrivateKey(n.SignAlgoToPublicKeyType(a), r.EndUserConstants.EndUserKeyUsage.DigitalSignature).then(function() {
                    return b.SetRuntimeParameter(r.EndUserConstants.EU_SIGN_TYPE_PARAMETER, i)
                }).then(function() {
                    return null == t ? b.SignHash(a, c, !0, e) : b.AppendSignHash(a, c, t, !0, e)
                }).then(function(c) {
                    return f(c)
                }).catch(function(c) {
                    return d(c)
                })
            }
            )
        }
        ,
        c.prototype.SignData = function(c, e, a, i, t, n) {
            void 0 === e && (e = !0),
            void 0 === a && (a = !1),
            void 0 === i && (i = r.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
            void 0 === t && (t = null),
            void 0 === n && (n = r.EndUserConstants.EndUserSignType.CAdES_BES);
            var b = this
              , f = b.GetCurrentLibrary().GetLibrary();
            return new Promise(function(d, u) {
                b.CheckPrivateKey(b.SignAlgoToPublicKeyType(i), r.EndUserConstants.EndUserKeyUsage.DigitalSignature).then(function() {
                    return f.SetRuntimeParameter(r.EndUserConstants.EU_SIGN_TYPE_PARAMETER, n)
                }).then(function() {
                    return null == t ? f.SignDataEx(i, c, e, !0, a) : f.AppendSign(i, e ? c : null, t, !0, a)
                }).then(function(c) {
                    return d(c)
                }).catch(function(c) {
                    return u(c)
                })
            }
            )
        }
        ,
        c.prototype.EnvelopData = function(c, e, a, i, t) {
            void 0 === a && (a = !1),
            void 0 === i && (i = !1),
            void 0 === t && (t = !1);
            var n = this
              , b = n.GetCurrentLibrary().GetLibrary();
            return new Promise(function(f, d) {
                n.CheckPrivateKey(r.EndUserConstants.EndUserCertKeyType.DSTU4145, (a ? r.EndUserConstants.EndUserKeyUsage.DigitalSignature : 0) | (t ? 0 : r.EndUserConstants.EndUserKeyUsage.KeyAgreement), !a && t).then(function() {
                    return b.EnvelopData(c, e, a, !0, i, t)
                }).then(function(c) {
                    return f(c)
                }).catch(function(c) {
                    return d(c)
                })
            }
            )
        }
        ,
        c.prototype.DevelopData = function(c, e) {
            void 0 === e && (e = null);
            var a = this
              , i = a.GetCurrentLibrary().GetLibrary();
            return new Promise(function(t, n) {
                a.CheckPrivateKey(r.EndUserConstants.EndUserCertKeyType.DSTU4145, r.EndUserConstants.EndUserKeyUsage.KeyAgreement).then(function() {
                    return i.DevelopData(c, e)
                }).then(function(c) {
                    return t(c)
                }).catch(function(c) {
                    return n(c)
                })
            }
            )
        }
        ,
        c
    }();
    window.onload = function() {
        if (l.getInstance().addTranlation(b.UA, f),
        LOCALIZATION)
            for (var c in LOCALIZATION)
                l.getInstance().addTranlation(l.getLocaleTypeById(c), LOCALIZATION[c]);
        m = new w,
        $(window).on("message", function(c) {
            m.OnReceiveMessage(c.originalEvent)
        });
        for (var e = $("[name = pkTypesRadio]"), a = 0; a < e.length; a++)
            $(e[a]).on("change", function() {
                m.OnChangeLibraryType()
            });
        var r = $("[name = signTypesRadio]");
        for (a = 0; a < r.length; a++)
            $(r[a]).on("change", function() {
                m.OnChangeSignType()
            });
        $("#pkCASelect").on("change", function() {
            m.OnSelectCA()
        }),
        $("#proxyButton").on("click", function() {
            m.OnSetProxy()
        }),
        $("#proxyUseCheckbox").on("click", function() {
            m.OnUseProxy()
        }),
        $("#proxyAuthCheckbox").on("click", function() {
            m.OnAuthProxy()
        }),
        $("#proxySaveButton").on("click", function() {
            m.OnSaveProxy()
        }),
        $("#proxyCancelButton").on("click", function() {
            m.OnHideProxy()
        }),
        $("#pkReadFileInput").on("change", function(c) {
            m.OnSelectPKeyFile(c.target.files)
        }),
        $("#pkReadFileCertsInput").on("change", function(c) {
            m.OnSelectPKeyCertificates("#pkReadFileCertsTextField", c.target.files)
        }),
        $("#pkReadFileButton").on("click", function(c) {
            m.OnReadPKey(!0)
        }),
        $("#pkReadKMSelect").on("change", function(c) {
            m.OnKMSelectChange()
        }),
        $("#pkReadKMCertsInput").on("change", function(c) {
            m.OnSelectPKeyCertificates("#pkReadKMCertsTextField", c.target.files)
        }),
        $("#pkReadKMButton").on("click", function(c) {
            m.OnReadPKey(!1)
        }),
        $("#pkReadSIMMSISDNTextField").on("keydown", function(c) {
            m.OnValidateInput(c.keyCode, c.ctrlKey, c.metaKey, c.shiftKey, s, g) || c.preventDefault()
        }),
        $("#pkReadSIMMSISDNTextField").on("input", function(c) {
            m.OnReadSIMMSISDNTextFieldChange()
        }),
        $("#pkReadSIMButton").on("click", function(c) {
            m.OnReadPKeyKSP()
        }),
        $("#pkReadKSPSelect").on("change", function(c) {
            m.OnReadKSPSelectChange()
        }),
        $("#pkReadKSPUserIdTextField").on("input", function(c) {
            m.OnReadKSPUserIdTextFieldChange()
        }),
        $("#pkReadKSPButton").on("click", function(c) {
            m.OnReadPKeyKSP()
        }),
        $("#pkWriteFileTextField").on("input", function(c) {
            m.OnWriteFileTextFieldChange()
        }),
        $("#pkWriteFileButton").on("click", function(c) {
            m.OnWritePKey(!0)
        }),
        $("#pkWriteKMSelect").on("change", function(c) {
            m.OnKMSelectChange()
        }),
        $("#pkWriteKMButton").on("click", function(c) {
            m.OnWritePKey(!1)
        }),
        $("#signInFileInput").on("change", function(c) {
            m.OnSelectSignFile(c.target.files)
        }),
        $("#signButton").on("click", function(c) {
            m.OnSignFile()
        }),
        $("#signCancelButton").on("click", function(c) {
            m.OnSignFileCancel()
        }),
        m.OnChangeLibraryType(),
        m.OnReadKSPSelectChange(),
        m.PostMessage(null, -1, null, null)
    }
}
]);
