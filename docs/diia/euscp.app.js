!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {
    e.exports = (function (e) {
      var t = {};
      function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var r = Object.create(null);
          if (
            (n.r(r),
            Object.defineProperty(r, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var i in e)
              n.d(
                r,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i)
              );
          return r;
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 4))
      );
    })([
      function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "EU_LIBRARY_TYPE_JS", function () {
            return i;
          }),
          n.d(t, "EU_LIBRARY_TYPE_SW", function () {
            return o;
          }),
          n.d(t, "EU_LIBRARY_TYPE_MS", function () {
            return a;
          }),
          n.d(t, "EndUserLibraryType", function () {
            return r;
          }),
          n.d(t, "EU_SUBJECT_TYPE_UNDIFFERENCED", function () {
            return u;
          }),
          n.d(t, "EU_SUBJECT_TYPE_CA", function () {
            return l;
          }),
          n.d(t, "EU_SUBJECT_TYPE_CA_SERVER", function () {
            return c;
          }),
          n.d(t, "EU_SUBJECT_TYPE_RA_ADMINISTRATOR", function () {
            return p;
          }),
          n.d(t, "EU_SUBJECT_TYPE_END_USER", function () {
            return f;
          }),
          n.d(t, "EndUserSubjectType", function () {
            return s;
          }),
          n.d(t, "EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED", function () {
            return E;
          }),
          n.d(t, "EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP", function () {
            return h;
          }),
          n.d(t, "EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP", function () {
            return d;
          }),
          n.d(t, "EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP", function () {
            return S;
          }),
          n.d(t, "EndUserSubjectCAServerSubType", function () {
            return _;
          }),
          n.d(t, "EU_CERT_KEY_TYPE_UNKNOWN", function () {
            return C;
          }),
          n.d(t, "EU_CERT_KEY_TYPE_DSTU4145", function () {
            return T;
          }),
          n.d(t, "EU_CERT_KEY_TYPE_RSA", function () {
            return R;
          }),
          n.d(t, "EU_CERT_KEY_TYPE_ECDSA", function () {
            return m;
          }),
          n.d(t, "EndUserCertKeyType", function () {
            return y;
          }),
          n.d(t, "EU_KEY_USAGE_UNKNOWN", function () {
            return g;
          }),
          n.d(t, "EU_KEY_USAGE_DIGITAL_SIGNATURE", function () {
            return P;
          }),
          n.d(t, "EU_KEY_USAGE_NON_REPUDATION", function () {
            return I;
          }),
          n.d(t, "EU_KEY_USAGE_KEY_AGREEMENT", function () {
            return v;
          }),
          n.d(t, "EndUserKeyUsage", function () {
            return A;
          }),
          n.d(t, "EU_CCS_TYPE_REVOKE", function () {
            return b;
          }),
          n.d(t, "EU_CCS_TYPE_HOLD", function () {
            return O;
          }),
          n.d(t, "EndUserCCSType", function () {
            return U;
          }),
          n.d(t, "EU_REVOCATION_REASON_UNKNOWN", function () {
            return k;
          }),
          n.d(t, "EU_REVOCATION_REASON_KEY_COMPROMISE", function () {
            return N;
          }),
          n.d(t, "EU_REVOCATION_REASON_NEW_ISSUED", function () {
            return M;
          }),
          n.d(t, "EndUserRevocationReason", function () {
            return D;
          }),
          n.d(t, "EU_KEYS_TYPE_NONE", function () {
            return G;
          }),
          n.d(t, "EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST", function () {
            return K;
          }),
          n.d(t, "EU_KEYS_TYPE_RSA_WITH_SHA", function () {
            return L;
          }),
          n.d(t, "EndUserKeysType", function () {
            return w;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_UA_191", function () {
            return F;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_UA_257", function () {
            return x;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_UA_307", function () {
            return Y;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_UA_FILE", function () {
            return $;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_UA_CERT", function () {
            return V;
          }),
          n.d(t, "EndUserKeysLengthDSUA", function () {
            return B;
          }),
          n.d(t, "EU_KEYS_LENGTH_KEP_UA_257", function () {
            return W;
          }),
          n.d(t, "EU_KEYS_LENGTH_KEP_UA_431", function () {
            return j;
          }),
          n.d(t, "EU_KEYS_LENGTH_KEP_UA_571", function () {
            return X;
          }),
          n.d(t, "EU_KEYS_LENGTH_KEP_UA_FILE", function () {
            return z;
          }),
          n.d(t, "EU_KEYS_LENGTH_KEP_UA_CERT", function () {
            return J;
          }),
          n.d(t, "EndUserKeysLengthKEPUA", function () {
            return H;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_RSA_1024", function () {
            return q;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_RSA_2048", function () {
            return Q;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_RSA_3072", function () {
            return ee;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_RSA_4096", function () {
            return te;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_RSA_FILE", function () {
            return ne;
          }),
          n.d(t, "EU_KEYS_LENGTH_DS_RSA_CERT", function () {
            return re;
          }),
          n.d(t, "EndUserKeysLengthDSRSA", function () {
            return Z;
          }),
          n.d(t, "EU_KEYS_REQUEST_TYPE_UA_DS", function () {
            return oe;
          }),
          n.d(t, "EU_KEYS_REQUEST_TYPE_UA_KEP", function () {
            return ae;
          }),
          n.d(t, "EU_KEYS_REQUEST_TYPE_INT_RSA", function () {
            return se;
          }),
          n.d(t, "EndUserRequestTypes", function () {
            return ie;
          }),
          n.d(t, "EU_MOBILE_OPERATOR_ID_KYIVSTAR", function () {
            return le;
          }),
          n.d(t, "EU_MOBILE_OPERATOR_ID_VODAFONE", function () {
            return ce;
          }),
          n.d(t, "EU_MOBILE_OPERATOR_ID_LIFECELL", function () {
            return pe;
          }),
          n.d(t, "EndUserMobileOperatorID", function () {
            return ue;
          }),
          n.d(t, "EU_KSP_IIT", function () {
            return Ee;
          }),
          n.d(t, "EU_KSP_UKEY", function () {
            return he;
          }),
          n.d(t, "EU_KSP_PB", function () {
            return de;
          }),
          n.d(t, "EU_KSP_DIIA", function () {
            return Se;
          }),
          n.d(t, "EndUserKSP", function () {
            return fe;
          }),
          n.d(t, "EndUserKSPClientIdType", function () {
            return _e;
          }),
          n.d(t, "EU_SIGN_TYPE_UNKNOWN", function () {
            return Ce;
          }),
          n.d(t, "EU_SIGN_TYPE_CADES_BES", function () {
            return Te;
          }),
          n.d(t, "EU_SIGN_TYPE_CADES_T", function () {
            return Re;
          }),
          n.d(t, "EU_SIGN_TYPE_CADES_C", function () {
            return me;
          }),
          n.d(t, "EU_SIGN_TYPE_CADES_X_LONG", function () {
            return Ae;
          }),
          n.d(t, "EU_SIGN_TYPE_CADES_X_LONG_TRUSTED", function () {
            return ge;
          }),
          n.d(t, "EndUserSignType", function () {
            return ye;
          }),
          n.d(t, "EU_CADES_TYPE_UNKNOWN", function () {
            return Ie;
          }),
          n.d(t, "EU_CADES_TYPE_DETACHED", function () {
            return ve;
          }),
          n.d(t, "EU_CADES_TYPE_ENVELOPED", function () {
            return Ue;
          }),
          n.d(t, "EndUserCAdESType", function () {
            return Pe;
          }),
          n.d(t, "EU_CTX_SIGN_UNKNOWN", function () {
            return Oe;
          }),
          n.d(t, "EU_CTX_SIGN_DSTU4145_WITH_GOST34311", function () {
            return De;
          }),
          n.d(t, "EU_CTX_SIGN_RSA_WITH_SHA", function () {
            return ke;
          }),
          n.d(t, "EU_CTX_SIGN_ECDSA_WITH_SHA", function () {
            return Ne;
          }),
          n.d(t, "EndUserSignAlgo", function () {
            return be;
          }),
          n.d(t, "EU_SIGN_TYPE_PARAMETER", function () {
            return we;
          }),
          n.d(t, "EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER", function () {
            return Ge;
          }),
          n.d(t, "EU_UA_OID_EXT_KEY_USAGE_STAMP", function () {
            return Ke;
          }),
          n.d(t, "EU_USER_INFO_VERSION", function () {
            return Le;
          }),
          n.d(t, "EndUserCMPCompatibility", function () {
            return Me;
          }),
          n.d(t, "EU_CTX_HASH_ALGO_UNKNOWN", function () {
            return Fe;
          }),
          n.d(t, "EU_CTX_HASH_ALGO_GOST34311", function () {
            return xe;
          }),
          n.d(t, "EU_CTX_HASH_ALGO_SHA160", function () {
            return Ye;
          }),
          n.d(t, "EU_CTX_HASH_ALGO_SHA224", function () {
            return $e;
          }),
          n.d(t, "EU_CTX_HASH_ALGO_SHA256", function () {
            return Ve;
          }),
          n.d(t, "EndUserHashAlgo", function () {
            return Be;
          }),
          n.d(t, "EU_ASIC_TYPE_UNKNOWN", function () {
            return We;
          }),
          n.d(t, "EU_ASIC_TYPE_S", function () {
            return je;
          }),
          n.d(t, "EU_ASIC_TYPE_E", function () {
            return Xe;
          }),
          n.d(t, "EndUserASiCType", function () {
            return He;
          }),
          n.d(t, "EU_ASIC_SIGN_TYPE_UNKNOWN", function () {
            return Je;
          }),
          n.d(t, "EU_ASIC_SIGN_TYPE_CADES", function () {
            return Ze;
          }),
          n.d(t, "EU_ASIC_SIGN_TYPE_XADES", function () {
            return qe;
          }),
          n.d(t, "EndUserASiCSignType", function () {
            return ze;
          }),
          n.d(t, "EU_XADES_TYPE_UNKNOWN", function () {
            return et;
          }),
          n.d(t, "EU_XADES_TYPE_DETACHED", function () {
            return tt;
          }),
          n.d(t, "EU_XADES_TYPE_ENVELOPING", function () {
            return nt;
          }),
          n.d(t, "EU_XADES_TYPE_ENVELOPED", function () {
            return rt;
          }),
          n.d(t, "EndUserXAdESType", function () {
            return Qe;
          }),
          n.d(t, "EU_XADES_SIGN_LEVEL_UNKNOWN", function () {
            return ot;
          }),
          n.d(t, "EU_XADES_SIGN_LEVEL_B_B", function () {
            return at;
          }),
          n.d(t, "EU_XADES_SIGN_LEVEL_B_T", function () {
            return st;
          }),
          n.d(t, "EU_XADES_SIGN_LEVEL_B_LT", function () {
            return ut;
          }),
          n.d(t, "EU_XADES_SIGN_LEVEL_B_LTA", function () {
            return lt;
          }),
          n.d(t, "EndUserXAdESSignLevel", function () {
            return it;
          }),
          n.d(t, "EU_PADES_SIGN_LEVEL_UNKNOWN", function () {
            return ft;
          }),
          n.d(t, "EU_PADES_SIGN_LEVEL_B_B", function () {
            return _t;
          }),
          n.d(t, "EU_PADES_SIGN_LEVEL_B_T", function () {
            return Et;
          }),
          n.d(t, "EU_PADES_SIGN_LEVEL_B_LT", function () {
            return ht;
          }),
          n.d(t, "EU_PADES_SIGN_LEVEL_B_LTA", function () {
            return dt;
          }),
          n.d(t, "EndUserPAdESSignLevel", function () {
            return ct;
          }),
          n.d(t, "EndUserEventType", function () {
            return pt;
          }),
          n.d(t, "EU_SIGN_CONTAINER_TYPE_UNKNOWN", function () {
            return yt;
          }),
          n.d(t, "EU_SIGN_CONTAINER_TYPE_CADES", function () {
            return Ct;
          }),
          n.d(t, "EU_SIGN_CONTAINER_TYPE_XADES", function () {
            return Tt;
          }),
          n.d(t, "EU_SIGN_CONTAINER_TYPE_PADES", function () {
            return Rt;
          }),
          n.d(t, "EU_SIGN_CONTAINER_TYPE_ASIC", function () {
            return mt;
          }),
          n.d(t, "EndUserSignContainerType", function () {
            return St;
          });
        var r,
          i = 1,
          o = 2,
          a = 3;
        !(function (e) {
          (e[(e.JS = i)] = "JS"),
            (e[(e.SW = o)] = "SW"),
            (e[(e.MS = a)] = "MS");
        })(r || (r = {}));
        var s,
          u = 0,
          l = 1,
          c = 2,
          p = 3,
          f = 4;
        !(function (e) {
          (e[(e.Undifferenced = u)] = "Undifferenced"),
            (e[(e.CA = l)] = "CA"),
            (e[(e.CAServer = c)] = "CAServer"),
            (e[(e.RAAdministrator = p)] = "RAAdministrator"),
            (e[(e.EndUser = f)] = "EndUser");
        })(s || (s = {}));
        var _,
          E = 0,
          h = 1,
          d = 2,
          S = 3;
        !(function (e) {
          (e[(e.Undifferenced = E)] = "Undifferenced"),
            (e[(e.CMP = h)] = "CMP"),
            (e[(e.TSP = d)] = "TSP"),
            (e[(e.OCSP = S)] = "OCSP");
        })(_ || (_ = {}));
        var y,
          C = 0,
          T = 1,
          R = 2,
          m = 4;
        !(function (e) {
          (e[(e.Unknown = C)] = "Unknown"),
            (e[(e.DSTU4145 = T)] = "DSTU4145"),
            (e[(e.RSA = R)] = "RSA"),
            (e[(e.ECDSA = m)] = "ECDSA");
        })(y || (y = {}));
        var A,
          g = 0,
          P = 1,
          I = 2,
          v = 16;
        !(function (e) {
          (e[(e.Unknown = C)] = "Unknown"),
            (e[(e.DigitalSignature = P)] = "DigitalSignature"),
            (e[(e.NonRepudation = I)] = "NonRepudation"),
            (e[(e.KeyAgreement = v)] = "KeyAgreement");
        })(A || (A = {}));
        var U,
          b = 1,
          O = 2;
        !(function (e) {
          (e[(e.Revoke = b)] = "Revoke"), (e[(e.Hold = O)] = "Hold");
        })(U || (U = {}));
        var D,
          k = 0,
          N = 1,
          M = 2;
        !(function (e) {
          (e[(e.Unknown = k)] = "Unknown"),
            (e[(e.KeyCompromise = N)] = "KeyCompromise"),
            (e[(e.NewIssued = M)] = "NewIssued");
        })(D || (D = {}));
        var w,
          G = 0,
          K = 1,
          L = 2;
        !(function (e) {
          (e[(e.None = G)] = "None"),
            (e[(e.DSTUAndECDHWithGOST = K)] = "DSTUAndECDHWithGOST"),
            (e[(e.RSAWithSHA = L)] = "RSAWithSHA");
        })(w || (w = {}));
        var B,
          F = 1,
          x = 2,
          Y = 3,
          $ = 4,
          V = 5;
        !(function (e) {
          (e[(e.EC_191 = F)] = "EC_191"),
            (e[(e.EC_257 = x)] = "EC_257"),
            (e[(e.EC_307 = Y)] = "EC_307"),
            (e[(e.File = $)] = "File"),
            (e[(e.Cert = V)] = "Cert");
        })(B || (B = {}));
        var H,
          W = 1,
          j = 2,
          X = 3,
          z = 4,
          J = 5;
        !(function (e) {
          (e[(e.EC_257 = W)] = "EC_257"),
            (e[(e.EC_431 = j)] = "EC_431"),
            (e[(e.EC_571 = X)] = "EC_571"),
            (e[(e.File = $)] = "File"),
            (e[(e.Cert = V)] = "Cert");
        })(H || (H = {}));
        var Z,
          q = 1,
          Q = 2,
          ee = 3,
          te = 4,
          ne = 5,
          re = 6;
        !(function (e) {
          (e[(e.N_1024 = q)] = "N_1024"),
            (e[(e.N_2048 = Q)] = "N_2048"),
            (e[(e.N_3072 = ee)] = "N_3072"),
            (e[(e.N_4096 = te)] = "N_4096"),
            (e[(e.File = $)] = "File"),
            (e[(e.Cert = V)] = "Cert");
        })(Z || (Z = {}));
        var ie,
          oe = 1,
          ae = 2,
          se = 3;
        !(function (e) {
          (e[(e.uaDS = oe)] = "uaDS"),
            (e[(e.uaKEP = ae)] = "uaKEP"),
            (e[(e.intRSA = se)] = "intRSA");
        })(ie || (ie = {}));
        var ue,
          le = 1,
          ce = 2,
          pe = 3;
        !(function (e) {
          (e[(e.Kyivstar = le)] = "Kyivstar"),
            (e[(e.Vodafone = ce)] = "Vodafone"),
            (e[(e.Lifecell = pe)] = "Lifecell");
        })(ue || (ue = {}));
        var fe,
          _e,
          Ee = 4,
          he = 5,
          de = 6,
          Se = 7;
        !(function (e) {
          (e[(e.Kyivstar = le)] = "Kyivstar"),
            (e[(e.Vodafone = ce)] = "Vodafone"),
            (e[(e.Lifecell = pe)] = "Lifecell"),
            (e[(e.IIT = Ee)] = "IIT"),
            (e[(e.UKey = he)] = "UKey"),
            (e[(e.PB = de)] = "PB"),
            (e[(e.DIIA = Se)] = "DIIA");
        })(fe || (fe = {})),
          (function (e) {
            (e[(e.Default = 0)] = "Default"),
              (e[(e.Name = 1)] = "Name"),
              (e[(e.Phone = 2)] = "Phone"),
              (e[(e.Email = 3)] = "Email");
          })(_e || (_e = {}));
        var ye,
          Ce = 0,
          Te = 1,
          Re = 4,
          me = 8,
          Ae = 16,
          ge = 128;
        !(function (e) {
          (e[(e.Unknown = Ce)] = "Unknown"),
            (e[(e.CAdES_BES = Te)] = "CAdES_BES"),
            (e[(e.CAdES_T = Re)] = "CAdES_T"),
            (e[(e.CAdES_C = me)] = "CAdES_C"),
            (e[(e.CAdES_X_Long = Ae)] = "CAdES_X_Long"),
            (e[(e.CAdES_X_Long_Trusted = ge)] = "CAdES_X_Long_Trusted");
        })(ye || (ye = {}));
        var Pe,
          Ie = 0,
          ve = 1,
          Ue = 3;
        !(function (e) {
          (e[(e.Unknown = Ie)] = "Unknown"),
            (e[(e.Detached = ve)] = "Detached"),
            (e[(e.Enveloped = Ue)] = "Enveloped");
        })(Pe || (Pe = {}));
        var be,
          Oe = 0,
          De = 1,
          ke = 2,
          Ne = 3;
        !(function (e) {
          (e[(e.Unknown = Oe)] = "Unknown"),
            (e[(e.DSTU4145WithGOST34311 = De)] = "DSTU4145WithGOST34311"),
            (e[(e.RSAWithSHA = ke)] = "RSAWithSHA"),
            (e[(e.ECDSAWithSHA = Ne)] = "ECDSAWithSHA");
        })(be || (be = {}));
        var Me,
          we = "SignType",
          Ge = "CheckPrivateKey",
          Ke = "1.2.804.2.1.1.1.3.9",
          Le = 3;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.DownloadEUCerts = 1)] = "DownloadEUCerts"),
            (e[(e.SearchEUCerts = 2)] = "SearchEUCerts");
        })(Me || (Me = {}));
        var Be,
          Fe = 0,
          xe = 1,
          Ye = 2,
          $e = 3,
          Ve = 4;
        !(function (e) {
          (e[(e.Unknown = Fe)] = "Unknown"),
            (e[(e.GOST34311 = xe)] = "GOST34311"),
            (e[(e.SHA160 = Ye)] = "SHA160"),
            (e[(e.SHA224 = $e)] = "SHA224"),
            (e[(e.SHA256 = Ve)] = "SHA256");
        })(Be || (Be = {}));
        var He,
          We = 0,
          je = 1,
          Xe = 2;
        !(function (e) {
          (e[(e.Unknown = We)] = "Unknown"),
            (e[(e.S = je)] = "S"),
            (e[(e.E = Xe)] = "E");
        })(He || (He = {}));
        var ze,
          Je = 0,
          Ze = 1,
          qe = 2;
        !(function (e) {
          (e[(e.Unknown = Je)] = "Unknown"),
            (e[(e.CAdES = Ze)] = "CAdES"),
            (e[(e.XAdES = qe)] = "XAdES");
        })(ze || (ze = {}));
        var Qe,
          et = 0,
          tt = 1,
          nt = 2,
          rt = 3;
        !(function (e) {
          (e[(e.Unknown = et)] = "Unknown"),
            (e[(e.Detached = tt)] = "Detached"),
            (e[(e.Enveloping = nt)] = "Enveloping"),
            (e[(e.Enveloped = rt)] = "Enveloped");
        })(Qe || (Qe = {}));
        var it,
          ot = 0,
          at = 1,
          st = 4,
          ut = 16,
          lt = 32;
        !(function (e) {
          (e[(e.Unknown = ot)] = "Unknown"),
            (e[(e.B_B = at)] = "B_B"),
            (e[(e.B_T = st)] = "B_T"),
            (e[(e.B_LT = ut)] = "B_LT"),
            (e[(e.B_LTA = lt)] = "B_LTA");
        })(it || (it = {}));
        var ct,
          pt,
          ft = 0,
          _t = 1,
          Et = 4,
          ht = 16,
          dt = 32;
        !(function (e) {
          (e[(e.Unknown = ot)] = "Unknown"),
            (e[(e.B_B = _t)] = "B_B"),
            (e[(e.B_T = Et)] = "B_T"),
            (e[(e.B_LT = ht)] = "B_LT"),
            (e[(e.B_LTA = dt)] = "B_LTA");
        })(ct || (ct = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.All = 1)] = "All"),
              (e[(e.ConfirmKSPOperation = 2)] = "ConfirmKSPOperation");
          })(pt || (pt = {}));
        var St,
          yt = 0,
          Ct = 1,
          Tt = 2,
          Rt = 3,
          mt = 4;
        !(function (e) {
          (e[(e.Unknown = yt)] = "Unknown"),
            (e[(e.CAdES = Ct)] = "CAdES"),
            (e[(e.XAdES = Tt)] = "XAdES"),
            (e[(e.PAdES = Rt)] = "PAdES"),
            (e[(e.ASiC = mt)] = "ASiC");
        })(St || (St = {}));
      },
      function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "EU_ERROR_NONE", function () {
            return r;
          }),
          n.d(t, "EU_ERROR_UNKNOWN", function () {
            return i;
          }),
          n.d(t, "EU_ERROR_NOT_SUPPORTED", function () {
            return o;
          }),
          n.d(t, "EU_ERROR_NOT_INITIALIZED", function () {
            return a;
          }),
          n.d(t, "EU_ERROR_BAD_PARAMETER", function () {
            return s;
          }),
          n.d(t, "EU_ERROR_LIBRARY_LOAD", function () {
            return u;
          }),
          n.d(t, "EU_ERROR_READ_SETTINGS", function () {
            return l;
          }),
          n.d(t, "EU_ERROR_TRANSMIT_REQUEST", function () {
            return c;
          }),
          n.d(t, "EU_ERROR_MEMORY_ALLOCATION", function () {
            return p;
          }),
          n.d(t, "EU_WARNING_END_OF_ENUM", function () {
            return f;
          }),
          n.d(t, "EU_ERROR_PROXY_NOT_AUTHORIZED", function () {
            return _;
          }),
          n.d(t, "EU_ERROR_NO_GUI_DIALOGS", function () {
            return E;
          }),
          n.d(t, "EU_ERROR_DOWNLOAD_FILE", function () {
            return h;
          }),
          n.d(t, "EU_ERROR_WRITE_SETTINGS", function () {
            return d;
          }),
          n.d(t, "EU_ERROR_CANCELED_BY_GUI", function () {
            return S;
          }),
          n.d(t, "EU_ERROR_OFFLINE_MODE", function () {
            return y;
          }),
          n.d(t, "EU_ERROR_KEY_MEDIAS_FAILED", function () {
            return C;
          }),
          n.d(t, "EU_ERROR_KEY_MEDIAS_ACCESS_FAILED", function () {
            return T;
          }),
          n.d(t, "EU_ERROR_KEY_MEDIAS_READ_FAILED", function () {
            return R;
          }),
          n.d(t, "EU_ERROR_KEY_MEDIAS_WRITE_FAILED", function () {
            return m;
          }),
          n.d(t, "EU_WARNING_KEY_MEDIAS_READ_ONLY", function () {
            return A;
          }),
          n.d(t, "EU_ERROR_KEY_MEDIAS_DELETE", function () {
            return g;
          }),
          n.d(t, "EU_ERROR_KEY_MEDIAS_CLEAR", function () {
            return P;
          }),
          n.d(t, "EU_ERROR_BAD_PRIVATE_KEY", function () {
            return I;
          }),
          n.d(t, "EU_ERROR_PKI_FORMATS_FAILED", function () {
            return v;
          }),
          n.d(t, "EU_ERROR_CSP_FAILED", function () {
            return U;
          }),
          n.d(t, "EU_ERROR_BAD_SIGNATURE", function () {
            return b;
          }),
          n.d(t, "EU_ERROR_AUTH_FAILED", function () {
            return O;
          }),
          n.d(t, "EU_ERROR_NOT_RECEIVER", function () {
            return D;
          }),
          n.d(t, "EU_ERROR_STORAGE_FAILED", function () {
            return k;
          }),
          n.d(t, "EU_ERROR_BAD_CERT", function () {
            return N;
          }),
          n.d(t, "EU_ERROR_CERT_NOT_FOUND", function () {
            return M;
          }),
          n.d(t, "EU_ERROR_INVALID_CERT_TIME", function () {
            return w;
          }),
          n.d(t, "EU_ERROR_CERT_IN_CRL", function () {
            return G;
          }),
          n.d(t, "EU_ERROR_BAD_CRL", function () {
            return K;
          }),
          n.d(t, "EU_ERROR_NO_VALID_CRLS", function () {
            return L;
          }),
          n.d(t, "EU_ERROR_GET_TIME_STAMP", function () {
            return B;
          }),
          n.d(t, "EU_ERROR_BAD_TSP_RESPONSE", function () {
            return F;
          }),
          n.d(t, "EU_ERROR_TSP_SERVER_CERT_NOT_FOUND", function () {
            return x;
          }),
          n.d(t, "EU_ERROR_TSP_SERVER_CERT_INVALID", function () {
            return Y;
          }),
          n.d(t, "EU_ERROR_GET_OCSP_STATUS", function () {
            return $;
          }),
          n.d(t, "EU_ERROR_BAD_OCSP_RESPONSE", function () {
            return V;
          }),
          n.d(t, "EU_ERROR_CERT_BAD_BY_OCSP", function () {
            return H;
          }),
          n.d(t, "EU_ERROR_OCSP_SERVER_CERT_NOT_FOUND", function () {
            return W;
          }),
          n.d(t, "EU_ERROR_OCSP_SERVER_CERT_INVALID", function () {
            return j;
          }),
          n.d(t, "EU_ERROR_LDAP_ERROR", function () {
            return X;
          }),
          n.d(t, "EndUserError", function () {
            return z;
          });
        var r = 0,
          i = 65535,
          o = 65534,
          a = 1,
          s = 2,
          u = 3,
          l = 4,
          c = 5,
          p = 6,
          f = 7,
          _ = 8,
          E = 9,
          h = 10,
          d = 11,
          S = 12,
          y = 13,
          C = 17,
          T = 18,
          R = 19,
          m = 20,
          A = 21,
          g = 22,
          P = 23,
          I = 24,
          v = 33,
          U = 34,
          b = 35,
          O = 36,
          D = 37,
          k = 49,
          N = 50,
          M = 51,
          w = 52,
          G = 53,
          K = 54,
          L = 55,
          B = 65,
          F = 66,
          x = 67,
          Y = 68,
          $ = 81,
          V = 82,
          H = 83,
          W = 84,
          j = 85,
          X = 97,
          z = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        });
        var r = n(8),
          i = n(10),
          o = n(4),
          a = (function () {
            function e() {}
            return (
              (e.MapFromKeyMedia = function (e, t) {
                return (
                  t.SetTypeIndex(e.typeIndex),
                  t.SetDevIndex(e.devIndex),
                  t.SetPassword(
                    e.user ? "##" + e.user + "##" + e.password : e.password
                  ),
                  t
                );
              }),
              (e.MapToProxySettings = function (e, t) {
                return (
                  (t.useProxy = e.GetUseProxy()),
                  (t.address = e.GetAddress()),
                  (t.port = e.GetPort()),
                  (t.anonymous = e.GetAnonymous()),
                  (t.user = e.GetUser()),
                  (t.password = e.GetPassword()),
                  (t.savePassword = e.GetSavePassword()),
                  t
                );
              }),
              (e.MapFromProxySettings = function (e, t) {
                return (
                  t.SetUseProxy(e.useProxy),
                  t.SetAddress(e.address),
                  t.SetPort(e.port),
                  t.SetAnonymous(e.anonymous),
                  t.SetUser(e.user),
                  t.SetPassword(e.password),
                  t.SetSavePassword(e.savePassword),
                  t
                );
              }),
              (e.MapEndUserOwnerInfo = function (e, t) {
                return (
                  (t.isFilled = e.IsFilled()),
                  (t.issuer = e.GetIssuer()),
                  (t.issuerCN = e.GetIssuerCN()),
                  (t.serial = e.GetSerial()),
                  (t.subject = e.GetSubject()),
                  (t.subjCN = e.GetSubjCN()),
                  (t.subjOrg = e.GetSubjOrg()),
                  (t.subjOrgUnit = e.GetSubjOrgUnit()),
                  (t.subjTitle = e.GetSubjTitle()),
                  (t.subjState = e.GetSubjState()),
                  (t.subjLocality = e.GetSubjLocality()),
                  (t.subjFullName = e.GetSubjFullName()),
                  (t.subjAddress = e.GetSubjAddress()),
                  (t.subjPhone = e.GetSubjPhone()),
                  (t.subjEMail = e.GetSubjEMail()),
                  (t.subjDNS = e.GetSubjDNS()),
                  (t.subjEDRPOUCode = e.GetSubjEDRPOUCode()),
                  (t.subjDRFOCode = e.GetSubjDRFOCode()),
                  t
                );
              }),
              (e.MapToEndUserCertificateInfoEx = function (e, t) {
                return (
                  (t.isFilled = e.IsFilled()),
                  (t.version = e.GetVersion()),
                  (t.issuer = e.GetIssuer()),
                  (t.issuerCN = e.GetIssuerCN()),
                  (t.serial = e.GetSerial()),
                  (t.subject = e.GetSubject()),
                  (t.subjCN = e.GetSubjCN()),
                  (t.subjOrg = e.GetSubjOrg()),
                  (t.subjOrgUnit = e.GetSubjOrgUnit()),
                  (t.subjTitle = e.GetSubjTitle()),
                  (t.subjState = e.GetSubjState()),
                  (t.subjLocality = e.GetSubjLocality()),
                  (t.subjFullName = e.GetSubjFullName()),
                  (t.subjAddress = e.GetSubjAddress()),
                  (t.subjPhone = e.GetSubjPhone()),
                  (t.subjEMail = e.GetSubjEMail()),
                  (t.subjDNS = e.GetSubjDNS()),
                  (t.subjEDRPOUCode = e.GetSubjEDRPOUCode()),
                  (t.subjDRFOCode = e.GetSubjDRFOCode()),
                  (t.subjNBUCode = e.GetSubjNBUCode()),
                  (t.subjSPFMCode = e.GetSubjSPFMCode()),
                  (t.subjOCode = e.GetSubjOCode()),
                  (t.subjOUCode = e.GetSubjOUCode()),
                  (t.subjUserCode = e.GetSubjUserCode()),
                  (t.certBeginTime = e.GetCertBeginTime()),
                  (t.certEndTime = e.GetCertEndTime()),
                  (t.isPrivKeyTimesAvail = e.IsPrivKeyTimesAvail()),
                  (t.privKeyBeginTime = e.GetPrivKeyBeginTime()),
                  (t.privKeyEndTime = e.GetPrivKeyEndTime()),
                  (t.publicKeyBits = e.GetPublicKeyBits()),
                  (t.publicKey = e.GetPublicKey()),
                  (t.publicKeyID = e.GetPublicKeyID()),
                  (t.issuerPublicKeyID = e.GetIssuerPublicKeyID()),
                  (t.keyUsage = e.GetKeyUsage()),
                  (t.extKeyUsages = e.GetExtKeyUsages()),
                  (t.policies = e.GetPolicies()),
                  (t.crlDistribPoint1 = e.GetCRLDistribPoint1()),
                  (t.crlDistribPoint2 = e.GetCRLDistribPoint2()),
                  (t.isPowerCert = e.IsPowerCert()),
                  (t.isSubjTypeAvail = e.IsSubjTypeAvail()),
                  (t.isSubjCA = e.IsSubjCA()),
                  (t.chainLength = e.GetChainLength()),
                  (t.UPN = e.GetUPN()),
                  (t.publicKeyType = e.GetPublicKeyType()),
                  (t.keyUsageType = e.GetKeyUsageType()),
                  (t.RSAModul = e.GetRSAModul()),
                  (t.RSAExponent = e.GetRSAExponent()),
                  (t.OCSPAccessInfo = e.GetOCSPAccessInfo()),
                  (t.issuerAccessInfo = e.GetIssuerAccessInfo()),
                  (t.TSPAccessInfo = e.GetTSPAccessInfo()),
                  (t.isLimitValueAvailable = e.IsLimitValueAvail()),
                  (t.limitValue = e.GetLimitValue()),
                  (t.limitValueCurrency = e.GetLimitValueCurrency()),
                  (t.subjType = e.GetSubjType()),
                  (t.subjSubType = e.GetSubjSubType()),
                  (t.subjUNZR = e.GetSubjUNZR()),
                  (t.subjCountry = e.GetSubjCountry()),
                  (t.isQSCD = e.IsQSCD()),
                  (t.subjUserID = e.GetSubjUserID()),
                  t
                );
              }),
              (e.MapToEndUserParams = function (e, t) {
                return (
                  (t.SN = e.GetSN()),
                  (t.commonName = e.GetCommonName()),
                  (t.locality = e.GetLocality()),
                  (t.state = e.GetState()),
                  (t.organization = e.GetOrganization()),
                  (t.orgUnit = e.GetOrgUnit()),
                  (t.title = e.GetTitle()),
                  (t.street = e.GetStreet()),
                  (t.phone = e.GetPhone()),
                  (t.surname = e.GetSurname()),
                  (t.givenname = e.GetGivenname()),
                  (t.EMail = e.GetEMail()),
                  (t.DNS = e.GetDNS()),
                  (t.EDRPOUCode = e.GetEDRPOUCode()),
                  (t.DRFOCode = e.GetDRFOCode()),
                  (t.NBUCode = e.GetNBUCode()),
                  (t.SPFMCode = e.GetSPFMCode()),
                  (t.information = e.GetInformation()),
                  (t.passPhrase = e.GetPassPhrase()),
                  (t.isPublishCertificate = e.GetIsPublishCertificate()),
                  (t.RAAdminSN = e.GetRAAdminSN()),
                  t
                );
              }),
              (e.MapToEndUserTimeInfo = function (e, t) {
                return (
                  (t.version = e.GetVersion()),
                  (t.isTimeAvail = e.IsTimeAvail()),
                  (t.isTimeStamp = e.IsTimeStamp()),
                  (t.time = e.GetTime()),
                  (t.isSignTimeStampAvail = e.IsSignTimeStampAvail()),
                  (t.signTimeStamp = e.GetSignTimeStamp()),
                  t
                );
              }),
              (e.MapToEndUserSignInfo = function (t, n) {
                return (
                  (n.ownerInfo = e.MapEndUserOwnerInfo(
                    t.GetOwnerInfo(),
                    new i.a()
                  )),
                  (n.timeInfo = e.MapToEndUserTimeInfo(
                    t.GetTimeInfo(),
                    new o.EndUserTimeInfo()
                  )),
                  (n.data = t.GetData()),
                  (n.signLevel = 0),
                  n
                );
              }),
              (e.MapToEndUserSenderInfo = function (t, n) {
                return (
                  (n.ownerInfo = e.MapEndUserOwnerInfo(
                    t.GetOwnerInfo(),
                    new i.a()
                  )),
                  (n.timeInfo = e.MapToEndUserTimeInfo(
                    t.GetTimeInfo(),
                    new o.EndUserTimeInfo()
                  )),
                  (n.data = t.GetData()),
                  n
                );
              }),
              (e.MapToEndUserCertificate = function (t, n) {
                return (
                  (n.data = t.GetData()),
                  (n.infoEx = e.MapToEndUserCertificateInfoEx(
                    t.GetInfoEx(),
                    new r.a()
                  )),
                  n
                );
              }),
              (e.MapFromEndUserInfo = function (e, t) {
                return (
                  t.SetCommonName(e.commonName),
                  t.SetLocality(e.locality),
                  t.SetState(e.state),
                  t.SetOrganization(e.organization),
                  t.SetOrgUnit(e.orgUnit),
                  t.SetTitle(e.title),
                  t.SetStreet(e.street),
                  t.SetPhone(e.phone),
                  t.SetSurname(e.surname),
                  t.SetGivenname(e.givenname),
                  t.SetEMail(e.EMail),
                  t.SetDNS(e.DNS),
                  t.SetEDRPOUCode(e.EDRPOUCode),
                  t.SetDRFOCode(e.DRFOCode),
                  t.SetNBUCode(e.NBUCode),
                  t.SetSPFMCode(e.SPFMCode),
                  t.SetOCode(e.OCode),
                  t.SetOUCode(e.OUCode),
                  t.SetUserCode(e.userCode),
                  t.SetUPN(e.UPN),
                  t.SetUNZR(e.UNZR),
                  t.SetCountry(e.country),
                  t
                );
              }),
              (e.MapToEndUserRequestInfo = function (e, t) {
                return (
                  (t.isFilled = !0),
                  (t.data = e.GetRequest()),
                  (t.type = e.GetRequestType()),
                  (t.fileName = e.GetDefaultRequestFileName()),
                  (t.isSimple = e.IsSimple()),
                  (t.subject = e.GetSubject()),
                  (t.subjCN = e.GetSubjCN()),
                  (t.subjOrg = e.GetSubjOrg()),
                  (t.subjOrgUnit = e.GetSubjOrgUnit()),
                  (t.subjTitle = e.GetSubjTitle()),
                  (t.subjState = e.GetSubjState()),
                  (t.subjLocality = e.GetSubjLocality()),
                  (t.subjFullName = e.GetSubjFullName()),
                  (t.subjAddress = e.GetSubjAddress()),
                  (t.subjPhone = e.GetSubjPhone()),
                  (t.subjEMail = e.GetSubjEMail()),
                  (t.subjDNS = e.GetSubjDNS()),
                  (t.subjEDRPOUCode = e.GetSubjEDRPOUCode()),
                  (t.subjDRFOCode = e.GetSubjDRFOCode()),
                  (t.subjNBUCode = e.GetSubjNBUCode()),
                  (t.subjSPFMCode = e.GetSubjSPFMCode()),
                  (t.subjOCode = e.GetSubjOCode()),
                  (t.subjOUCode = e.GetSubjOUCode()),
                  (t.subjUserCode = e.GetSubjUserCode()),
                  (t.certBeginTime = e.GetCertBeginTime()),
                  (t.certEndTime = e.GetCertEndTime()),
                  (t.isPrivKeyTimesAvail = e.IsPrivKeyTimesAvail()),
                  (t.privKeyBeginTime = e.GetPrivKeyBeginTime()),
                  (t.privKeyEndTime = e.GetPrivKeyEndTime()),
                  (t.publicKeyType = e.GetPublicKeyType()),
                  (t.publicKeyBits = e.GetPublicKeyBits()),
                  (t.RSAModul = e.GetRSAModul()),
                  (t.RSAExponent = e.GetRSAExponent()),
                  (t.publicKey = e.GetPublicKey()),
                  (t.publicKeyID = e.GetPublicKeyID()),
                  (t.extKeyUsages = e.GetExtKeyUsages()),
                  (t.crlDistribPoint1 = e.GetCRLDistribPoint1()),
                  (t.crlDistribPoint2 = e.GetCRLDistribPoint2()),
                  (t.isSubjTypeAvail = e.IsSubjTypeAvail()),
                  (t.subjType = e.GetSubjType()),
                  (t.subjSubType = e.GetSubjSubType()),
                  (t.isSelfSigned = e.IsSelfSigned()),
                  (t.signIssuer = e.GetSignIssuer()),
                  (t.signSerial = e.GetSignSerial()),
                  (t.subjUNZR = e.GetSubjUNZR()),
                  (t.subjCountry = e.GetSubjCountry()),
                  (t.isQSCD = e.IsQSCD()),
                  t
                );
              }),
              (e.MapToEndUserReference = function (e, t) {
                return (t.name = e.GetName()), (t.val = e.GetData()), t;
              }),
              (e.MapFromEndUserReference = function (e, t) {
                return t.SetName(e.name), t.SetData(e.val), t;
              }),
              e
            );
          })();
      },
      function (e, t, n) {
        var r, i;
        void 0 ===
          (i =
            "function" ==
            typeof (r = function () {
              var e = function () {
                (this.vendor = "JSC IIT"),
                  (this.classVersion = 1),
                  (this.className = "EndUserUTF8Coder");
              };
              (e.prototype.encode = function (e) {
                for (var t = [], n = 0, r = 0; r < e.length; r++) {
                  var i = e.charCodeAt(r);
                  i < 128
                    ? (t[n++] = i)
                    : i < 2048
                    ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
                    : ((t[n++] = (i >> 12) | 224),
                      (t[n++] = ((i >> 6) & 63) | 128),
                      (t[n++] = (63 & i) | 128));
                }
                return t;
              }),
                (e.prototype.decode = function (e) {
                  for (var t, n, r, i = [], o = 0, a = 0; o < e.length; )
                    (t = e[o++]) < 128
                      ? (i[a++] = String.fromCharCode(t))
                      : t > 191 && t < 224
                      ? ((n = e[o++]),
                        (i[a++] = String.fromCharCode(
                          ((31 & t) << 6) | (63 & n)
                        )))
                      : ((n = e[o++]),
                        (r = e[o++]),
                        (i[a++] = String.fromCharCode(
                          ((15 & t) << 12) | ((63 & n) << 6) | (63 & r)
                        )));
                  return i.join("");
                });
              var t = function () {
                (this.vendor = "JSC IIT"),
                  (this.classVersion = 1),
                  (this.className = "EndUserUTF16LECoder");
              };
              (t.prototype.encode = function (e) {
                for (var t, n = [], r = 0; r < e.length; r++)
                  (t = e.charCodeAt(r)),
                    n.push(255 & t),
                    n.push((65280 & t) >> 8);
                return n;
              }),
                (t.prototype.decode = function (e) {
                  var t,
                    n = 0,
                    r = "";
                  if (e.length % 2 != 0) return null;
                  for (
                    (t = e.length) > 0 &&
                    0 == e[t - 2] &&
                    0 == e[t - 1] &&
                    (t -= 2);
                    n < t;

                  )
                    (r += String.fromCharCode(e[n] | (e[n + 1] << 8))),
                      (n += 2);
                  return r;
                });
              var n = function () {
                (this.vendor = "JSC IIT"),
                  (this.classVersion = 1),
                  (this.className = "EndUserCP1251Coder"),
                  (this.m_cp1251_table = {
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
                    1109: 190,
                  }),
                  (this.m_ut8_table = unescape(
                    "%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457"
                  ));
              };
              (n.prototype.encode = function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var r = e.charCodeAt(n);
                  if (!(r in this.m_cp1251_table))
                    throw (
                      "Character " +
                      e.charAt(n) +
                      " isn't supported by win1251!"
                    );
                  t.push(this.m_cp1251_table[r]);
                }
                return t;
              }),
                (n.prototype.decode = function (e) {
                  for (var t, n = "", r = 0; r < e.length; r++)
                    n +=
                      (t = e[r]) >= 192 && t <= 255
                        ? String.fromCharCode(t - 192 + 1040)
                        : t >= 128 && t <= 191
                        ? this.m_ut8_table.charAt(t - 128)
                        : String.fromCharCode(t);
                  return n;
                });
              var r = {
                  GetCoder: function (r) {
                    switch ((r = r.toUpperCase())) {
                      case "UTF-8":
                        return new e();
                      case "UTF-16LE":
                        return new t();
                      case "windows-1251":
                        return new n();
                      default:
                        return null;
                    }
                  },
                  ArrayToString: function (e, t) {
                    var n, i;
                    if (
                      (void 0 === e && (e = "UTF-8"),
                      null == (n = r.GetCoder(e)))
                    )
                      throw new ee(
                        (i = Q.ERROR_BAD_PARAMETER),
                        Q.getErrorDescriptionEx(i, 0)
                      );
                    return n.decode(t);
                  },
                },
                i = function () {
                  (this.vendor = "JSC IIT"),
                    (this.classVersion = 1),
                    (this.className = "EndUserDateCoder"),
                    (this.dateDelimeter = "."),
                    (this.timeDelimeter = ":"),
                    (this.dateTimeDelimeter = " "),
                    (this.format = "dd.MM.yyyy HH:mm:ss");
                };
              (i.prototype.encode = function (e) {
                var t = e.getDate(),
                  n = e.getMonth() + 1,
                  r = e.getFullYear(),
                  i = e.getHours(),
                  o = e.getMinutes(),
                  a = e.getSeconds();
                return (
                  t +
                  this.dateDelimeter +
                  n +
                  this.dateDelimeter +
                  r +
                  this.dateTimeDelimeter +
                  i +
                  this.timeDelimeter +
                  o +
                  this.timeDelimeter +
                  a
                );
              }),
                (i.prototype.decode = function (e) {
                  try {
                    var t = e.split(this.dateTimeDelimeter),
                      n = t[0].split(this.dateDelimeter),
                      r = t[1].split(this.timeDelimeter),
                      i = parseInt(n[0]),
                      o = parseInt(n[1]) - 1,
                      a = parseInt(n[2]);
                    if (i < 0 || i > 31 || o < 0 || o > 12 || a < 0)
                      return null;
                    var s = parseInt(r[0]),
                      u = parseInt(r[1]),
                      l = parseInt(r[2]);
                    return s < 0 || s > 23 || u < 0 || u > 59 || l < 0 || l > 59
                      ? null
                      : new Date(a, o, i, s, u, l, 0);
                  } catch (e) {
                    return null;
                  }
                });
              var o = function () {
                (this.vendor = "JSC IIT"),
                  (this.classVersion = 1),
                  (this.className = "EndUserBase64Coder"),
                  (this.m_map =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
                  (this.m_codes = [
                    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                    80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100,
                    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
                    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49,
                    50, 51, 52, 53, 54, 55, 56, 57, 43, 47,
                  ]);
              };
              (o.prototype._getTextDecoder = function () {
                try {
                  if ("undefined" == typeof TextDecoder) return null;
                  var e = new TextDecoder("utf-8");
                  return "utf-8" != e.encoding ? null : e;
                } catch (e) {
                  return null;
                }
              }),
                (o.prototype._encodePart = function (e, t, n) {
                  for (var r, i, o = [], a = t; a < n; a += 3)
                    (r = (e[a] << 16) | (e[a + 1] << 8) | e[a + 2]),
                      (i =
                        this.m_map[(r >> 18) & 63] +
                        this.m_map[(r >> 12) & 63] +
                        this.m_map[(r >> 6) & 63] +
                        this.m_map[63 & r]),
                      o.push(i);
                  return o.join("");
                }),
                (o.prototype.encode = function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = "";
                  if (
                    0 ==
                    (o = (t =
                      "undefined" == typeof Uint8Array
                        ? void 0 === _
                          ? e.slice(0)
                          : new _(e)
                        : new Uint8Array(e)).length)
                  )
                    return "";
                  var u = this._getTextDecoder();
                  if (null != u) {
                    for (
                      a = new Uint8Array(4 * parseInt((o + 2) / 3)),
                        n = 0,
                        r = 0;
                      n < o - (o % 3);
                      n += 3, r += 4
                    )
                      (i = (t[n] << 16) | (t[n + 1] << 8) | t[n + 2]),
                        (a[r] = this.m_codes[(i >> 18) & 63]),
                        (a[r + 1] = this.m_codes[(i >> 12) & 63]),
                        (a[r + 2] = this.m_codes[(i >> 6) & 63]),
                        (a[r + 3] = this.m_codes[63 & i]);
                    switch (o % 3) {
                      case 1:
                        (i = t[n] << 16),
                          (a[r] = this.m_codes[(i >> 18) & 63]),
                          (a[r + 1] = this.m_codes[(i >> 12) & 63]),
                          (a[r + 2] = 61),
                          (a[r + 3] = 61);
                        break;
                      case 2:
                        (i = (t[n] << 16) | (t[n + 1] << 8)),
                          (a[r] = this.m_codes[(i >> 18) & 63]),
                          (a[r + 1] = this.m_codes[(i >> 12) & 63]),
                          (a[r + 2] = this.m_codes[(i >> 6) & 63]),
                          (a[r + 3] = 61);
                    }
                    s = u.decode(a);
                  } else {
                    var l,
                      c = null,
                      p = o - (o % 3),
                      f = parseInt(p / 15360);
                    for (a = [], n = 0; n < f; n++)
                      (c = this._encodePart(t, 15360 * n, 15360 * n + 15360)),
                        a.push(c);
                    switch (
                      (15360 * f < p &&
                        ((c = this._encodePart(t, 15360 * n, p)), a.push(c)),
                      o % 3)
                    ) {
                      case 1:
                        (i = t[o - 1] << 16),
                          (l = this.m_map[(i >> 18) & 63]),
                          (l += this.m_map[(i >> 12) & 63]),
                          (l += "="),
                          (l += "="),
                          a.push(l);
                        break;
                      case 2:
                        (i = (t[o - 2] << 16) | (t[o - 1] << 8)),
                          (l = this.m_map[(i >> 18) & 63]),
                          (l += this.m_map[(i >> 12) & 63]),
                          (l += this.m_map[(i >> 6) & 63]),
                          (l += "="),
                          a.push(l);
                    }
                    s = a.join("");
                  }
                  return s;
                }),
                (o.prototype.decode = function (e) {
                  var t, n, r, i, o, a, s, u, l, c, p;
                  if ("" == e || (3 & e.length) > 0)
                    return "undefined" == typeof Uint8Array
                      ? void 0 === _
                        ? []
                        : new _(0)
                      : new Uint8Array(0);
                  for (
                    n =
                      ((a = e.length) / 4) * 3 -
                      (s = "=" == e[a - 1] ? ("=" == e[a - 2] ? 2 : 1) : 0),
                      t =
                        "undefined" == typeof Uint8Array
                          ? void 0 === _
                            ? []
                            : new _(n)
                          : new Uint8Array(n),
                      r = 0,
                      i = 0,
                      o = 0;
                    r < Math.floor((a - s) / 4);
                    r++
                  )
                    (u = this.m_map.indexOf(e[i++])),
                      (l = this.m_map.indexOf(e[i++])),
                      (c = this.m_map.indexOf(e[i++])),
                      (p = this.m_map.indexOf(e[i++])),
                      (t[o++] = (u << 2) | (l >> 4)),
                      (t[o++] = ((15 & l) << 4) | (c >> 2)),
                      (t[o++] = ((3 & c) << 6) | (63 & p));
                  switch (s) {
                    case 2:
                      (u = this.m_map.indexOf(e[i])),
                        (l = this.m_map.indexOf(e[i + 1])),
                        (t[o++] = (u << 2) | (l >> 4));
                      break;
                    case 1:
                      (u = this.m_map.indexOf(e[i])),
                        (l = this.m_map.indexOf(e[i + 1])),
                        (c = this.m_map.indexOf(e[i + 2])),
                        (t[o++] = (u << 2) | (l >> 4)),
                        (t[o++] = ((15 & l) << 4) | (c >> 2));
                  }
                  return t;
                });
              var a = function (e) {
                  return new (function () {
                    var t = this,
                      n = function () {
                        var e;
                        t.deferred.length &&
                          ((e = [].slice.call(arguments)).unshift(n),
                          t.deferred[0].apply(t, e),
                          t.deferred.shift());
                      };
                    (this.deferred = []),
                      (this.eu_wait = function (e) {
                        return this.deferred.push(e), t;
                      }),
                      e(n);
                  })();
                },
                s = function () {
                  var e = this._getBrowserInfo();
                  (this.m_name = e.name),
                    (this.m_version = e.version),
                    (this.m_arch = this._getArch()),
                    (this.m_os_name = this._getOSName());
                };
              (s.BROWSER_NAME_IE = "IE"),
                (s.BROWSER_NAME_OPERA = "Opera"),
                (s.BROWSER_NAME_CHROME = "Chrome"),
                (s.BROWSER_NAME_FIREFOX = "Firefox"),
                (s.BROWSER_NAME_SAFARI = "Safari"),
                (s.BROWSER_NAME_EDGE = "Edge"),
                (s.BROWSER_NAME_UNKNOWN = "Unknown"),
                (s.OS_NAME_WINDOWS = "Windows"),
                (s.OS_NAME_LINUX = "Linux"),
                (s.OS_NAME_UNIX = "Unix"),
                (s.OS_NAME_MAC = "Mac OS X"),
                (s.OS_NAME_ANDROID = "Android"),
                (s.OS_NAME_UNKNOWN = "Unknown"),
                (s.BROWSER_ARCH_NAME_X86 = "x86"),
                (s.BROWSER_ARCH_NAME_X64 = "x64"),
                (s.BROWSER_ARCH_NAME_ARM = "arm"),
                (s.BROWSER_ARCH_NAME_UNKNOWN = "Unknown"),
                (s.prototype._getBrowserInfo = function () {
                  var e,
                    t = { name: s.BROWSER_NAME_UNKNOWN, version: "" },
                    n = navigator.userAgent,
                    r =
                      n.match(
                        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                      ) || [];
                  return /msie/i.test(r[1]) || /trident/i.test(r[1])
                    ? ((t.name = s.BROWSER_NAME_IE),
                      /msie/i.test(r[1])
                        ? (t.version = parseInt(r[2]))
                        : ((e = /\brv[ :]+(\d+)/g.exec(n) || []),
                          (t.version = parseInt(e[1]))),
                      t)
                    : "Chrome" === r[1] &&
                      null != (e = n.match(/\b(OPR|Edge)\/(\d+)/))
                    ? ((t.name = e[1].replace("OPR", s.BROWSER_NAME_OPERA)),
                      (t.version = parseInt(e[2])),
                      t)
                    : ((r = r[2]
                        ? [r[1], r[2]]
                        : [navigator.appName, navigator.appVersion, "-?"]),
                      null != (e = n.match(/version\/(\d+)/i)) &&
                        r.splice(1, 1, e[1]),
                      (t.name = r[0]),
                      (t.version = parseInt(r[1])),
                      t);
                }),
                (s.prototype._getOSName = function () {
                  var e = navigator.platform || "",
                    t = (navigator.userAgent || "").toLowerCase();
                  return -1 != e.indexOf("Win")
                    ? s.OS_NAME_WINDOWS
                    : -1 != e.indexOf("Mac")
                    ? s.OS_NAME_MAC
                    : -1 != e.indexOf("Android") || -1 != t.indexOf("android")
                    ? s.OS_NAME_ANDROID
                    : -1 != e.indexOf("Linux")
                    ? s.OS_NAME_LINUX
                    : -1 != e.indexOf("FreeBSD")
                    ? s.OS_NAME_UNIX
                    : s.OS_NAME_UNKNOWN;
                }),
                (s.prototype._getArch = function () {
                  var e,
                    t = navigator.platform || "";
                  switch (this._getOSName()) {
                    case s.OS_NAME_WINDOWS:
                      e =
                        -1 != t.indexOf("Win32")
                          ? s.BROWSER_ARCH_NAME_X86
                          : s.BROWSER_ARCH_NAME_X64;
                      break;
                    case s.OS_NAME_MAC:
                      e =
                        -1 != t.indexOf("MacIntel")
                          ? s.BROWSER_ARCH_NAME_X86
                          : s.BROWSER_ARCH_NAME_X64;
                      break;
                    case s.OS_NAME_UNIX:
                    case s.OS_NAME_LINUX:
                    case s.OS_NAME_ANDROID:
                      e =
                        -1 != t.indexOf("armv")
                          ? s.BROWSER_ARCH_NAME_ARM
                          : -1 != t.indexOf("x86_64")
                          ? s.BROWSER_ARCH_NAME_X64
                          : s.BROWSER_ARCH_NAME_X32;
                      break;
                    default:
                      e = s.BROWSER_ARCH_NAME_UNKNOWN;
                  }
                  return e;
                }),
                (s.prototype.GetName = function () {
                  return this.m_name;
                }),
                (s.prototype.GetVersion = function () {
                  return this.m_version;
                }),
                (s.prototype.GetArch = function () {
                  return this.m_arch;
                }),
                (s.prototype.GetOSName = function () {
                  return this.m_os_name;
                });
              var u = [];
              (u[0] = "Executed successfully"),
                (u[-1] = "Unknown error"),
                (u[-32300] = "Transport error"),
                (u[-32400] = "System error"),
                (u[-32500] = "Application error"),
                (u[-32510] = "Application error. Invalid session"),
                (u[-32600] =
                  "Server error. Invalid rpc. Not conforming to spec"),
                (u[-32601] = "Server error. Requested method not found"),
                (u[-32602] = "Server error. Invalid method parameters"),
                (u[-32603] = "Server error. Internal rpc error"),
                (u[-32700] = "Parse error. Not well formed"),
                (u[-32701] = "Parse error. Unsupported encoding"),
                (u[-32702] = "Parse error. Invalid character for encoding");
              var l = function (e, t, n, r) {
                switch (
                  ((this.Vendor = "JSC IIT"),
                  (this.ClassVersion = "1.0.2"),
                  (this.ClassName = "JSONRPCClient"),
                  (this.m_type = e),
                  (this.m_log = !1),
                  this._logFunction("Initialize", arguments, [
                    "type",
                    "address",
                    "port",
                    "useHttps",
                  ]),
                  e)
                ) {
                  case 2:
                    (this.m_uri = t),
                      (this.m_callbacks = []),
                      this._registerOnExtensionRecieveEventHandler();
                    break;
                  case 3:
                  case 4:
                    (this.m_uri = t), (this.m_callbacks = []);
                    break;
                  case 1:
                  default:
                    (this.m_uri = ""),
                      r && t.indexOf("https://")
                        ? (this.m_uri += "https://")
                        : 0 != t.indexOf("http://") &&
                          (this.m_uri += "http://"),
                      (this.m_uri += t + ":" + n);
                }
                (this.m_requests = 0),
                  (this.m_session_id = this._loadSessionId());
              };
              (l.prototype._logFunction = function (e, t, n) {
                if (this.m_log) {
                  for (var r = "(", i = 0; i < t.length; i++)
                    (r += n[i] + ": " + t[i].toString()),
                      i != t.length - 1 && (r += ", ");
                  (r += ")"), this._log(e, r);
                }
              }),
                (l.prototype._log = function (e, t) {
                  this.m_log && console.log(e + ": " + t);
                }),
                (l.prototype._loadSessionId = function () {
                  try {
                    var e = sessionStorage.getItem(
                      this.ClassName + "session_id"
                    );
                    return void 0 === e || null == e || "" == e ? null : e;
                  } catch (e) {
                    return null;
                  }
                }),
                (l.prototype._saveSessionId = function (e) {
                  try {
                    sessionStorage.setItem(this.ClassName + "session_id", e);
                  } catch (e) {}
                }),
                (l.prototype._removeSessionId = function () {
                  try {
                    sessionStorage.removeItem(this.ClassName + "session_id");
                  } catch (e) {}
                }),
                (l.prototype.createXMLHttpRequest = function () {
                  return (
                    "undefined" == typeof XMLHttpRequest &&
                      (XMLHttpRequest = function () {
                        try {
                          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                        } catch (e) {}
                        try {
                          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                        } catch (e) {}
                        try {
                          return new ActiveXObject("Msxml2.XMLHTTP");
                        } catch (e) {}
                        try {
                          return new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {}
                        throw u[-32300];
                      }),
                    new XMLHttpRequest()
                  );
                }),
                (l.prototype.makeRequest = function (e, t, n) {
                  var r = null;
                  try {
                    ((r = {}).jsonrpc = "2.0"),
                      (r.id = n),
                      (r.method = e),
                      (r.params = t),
                      (r.session_id = this.m_session_id),
                      (r = JSON.stringify(r));
                  } catch (e) {}
                  return r;
                }),
                (l.prototype.verifyResponse = function (e, t) {
                  try {
                    if ("2.0" != t.jsonrpc) return !1;
                    var n = t.error;
                    if (void 0 === n) {
                      if (t.id != e || void 0 === t.result) return !1;
                    } else {
                      if (void 0 === n.code || void 0 === n.message) return !1;
                      if (0 != n.code) return !1;
                    }
                    if (void 0 !== t.session_id)
                      if (null != this.m_session_id && null != t.session_id) {
                        if (this.m_session_id != t.session_id) return !1;
                      } else
                        (this.m_session_id = t.session_id),
                          this._saveSessionId(this.m_session_id);
                    return !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (l.prototype.handleResponse = function (e, t) {
                  try {
                    return (
                      (t = JSON.parse(t)),
                      this.verifyResponse(e, t)
                        ? t
                        : ((this.m_session_id = null),
                          this._removeSessionId(),
                          null)
                    );
                  } catch (e) {
                    return null;
                  }
                }),
                (l.prototype._sendHttp = function (e, t, n) {
                  var r,
                    i,
                    o = this;
                  try {
                    if (
                      ((r = this.createXMLHttpRequest()).open(
                        "POST",
                        this.m_uri,
                        null != n
                      ),
                      r.setRequestHeader(
                        "Content-Type",
                        "application/json-rpc"
                      ),
                      null != n &&
                        ((r.onload = function () {
                          200 == r.status
                            ? ((i = o.handleResponse(t, r.response)),
                              n(null != i ? i.result : null))
                            : n(null);
                        }),
                        (r.onerror = function () {
                          n(null);
                        })),
                      r.send(e),
                      null != n)
                    )
                      return;
                    return 200 != r.status ||
                      null == (i = this.handleResponse(t, r.response))
                      ? null
                      : i.result;
                  } catch (e) {
                    if (null == n) return null;
                    n(null);
                  }
                }),
                (l.prototype._registerOnExtensionRecieveEventHandler =
                  function () {
                    var e = this;
                    window.addEventListener(
                      "message",
                      function (t) {
                        if (t.data.sender == e.m_uri)
                          try {
                            var n = t.data.callback_id,
                              r = e.m_callbacks[n - 1];
                            delete e.m_callbacks[n - 1],
                              e._logFunction(
                                "_registerOnExtensionRecieveEventHandler",
                                [r.request_id, t.data.data],
                                ["request_id", "data"]
                              );
                            var i = e.handleResponse(r.request_id, t.data.data);
                            if (null == i) return void r.callback(null);
                            r.callback(i.result);
                          } catch (e) {}
                      },
                      !1
                    );
                  }),
                (l.prototype._sendExtension = function (e, t, n) {
                  var r = this;
                  if (
                    (r._logFunction(
                      "_sendExtension",
                      [arguments[0], arguments[1]],
                      ["request", "request_id"]
                    ),
                    !n)
                  )
                    throw "Synchronous calls for web extensions not supported";
                  if (1 == document.getElementsByClassName(r.m_uri).length)
                    try {
                      var i = { request_id: t, callback: n },
                        o = r.m_callbacks.push(i),
                        a = { sender: r.ClassName, request: e, callback_id: o };
                      window.postMessage(a, "*");
                    } catch (e) {
                      n(null);
                    }
                  else n(null);
                }),
                (l.prototype._getPluginObject = function () {
                  try {
                    for (
                      var e = document.getElementsByTagName("object"), t = 0;
                      t < e.length;
                      t++
                    ) {
                      var n = e[t].classid;
                      if (
                        (!n &&
                          e[t].attributes &&
                          e[t].attributes.classid &&
                          (n = e[t].attributes.classid.value),
                        n === this.m_uri)
                      )
                        return e[t];
                    }
                    return null;
                  } catch (e) {
                    return null;
                  }
                }),
                (l.prototype._sendPlugin = function (e, t, n) {
                  var i,
                    a = this;
                  a._logFunction(
                    "_sendPlugin",
                    [arguments[0], arguments[1]],
                    ["request", "request_id"]
                  );
                  var s = a._getPluginObject();
                  if (null == s) return null != n && n(null), null;
                  var u = function (e) {
                    try {
                      for (var t = new o(), n = new _(0); ; ) {
                        var i = s.ProcessData(e),
                          a = i.slice(0, 5),
                          u = i.slice(5, i.length - 1);
                        if (null != u || "" != u) {
                          var l = t.decode(u),
                            c = new _(n.length + l.length);
                          c.set(n), c.set(l, n.length), (n = c);
                        }
                        switch (a) {
                          case '"part':
                            e = '"next"';
                            continue;
                          case '"last':
                            return r.ArrayToString("UTF-8", n);
                          default:
                            return null;
                        }
                      }
                    } catch (e) {
                      return null;
                    }
                  };
                  try {
                    return null != n
                      ? void setTimeout(function () {
                          (i = u(e)),
                            a._logFunction(
                              "_sendPlugin",
                              [t, i],
                              ["request_id", "response"]
                            ),
                            null != (i = a.handleResponse(t, i))
                              ? n(i.result)
                              : n(null);
                        }, 1)
                      : ((i = u(e)),
                        null == (i = a.handleResponse(t, i)) ? null : i.result);
                  } catch (e) {
                    n(null);
                  }
                }),
                (l.prototype.send = function (e, t, n) {
                  switch (this.m_type) {
                    case 1:
                      return this._sendHttp(e, t, n);
                    case 2:
                      return this._sendExtension(e, t, n);
                    case 3:
                    case 4:
                      return this._sendPlugin(e, t, n);
                  }
                }),
                (l.prototype.execute = function (e, t, n) {
                  var r, i;
                  return (
                    (r = this.m_requests),
                    this.m_requests++,
                    null == (i = this.makeRequest(e, t, r))
                      ? null != n
                        ? void n(null)
                        : null
                      : null == n
                      ? this.send(i, r, n)
                      : void this.send(i, r, n)
                  );
                });
              var c = function () {};
              (c.WEB_LIBRARY_OS_NOT_SUPPORTED = 131072),
                (c.WEB_LIBRARY_NOT_INSTALLED_OR_RUN = 131073),
                (c.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED = 131074),
                (c.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED = 131075),
                (c.WEB_LIBRARY_INSTALL_PACKAGE = 131076),
                (c.WEB_LIBRARY_UPDATE_PACKAGE = 131077),
                (c.WEB_LIBRARY_USER_MANUAL = 131078),
                (c.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE = 131079),
                (c.WEB_LIBRARY_CHECK_JRE_VERSION = 131080),
                (c.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN = 131081),
                ((c.DESCRIPTIONS = [])[c.WEB_LIBRARY_OS_NOT_SUPPORTED] = [
                  "Інсталяційний пакет web-бібліотеки підпису для вашої системи відсутній",
                  "Инсталяционный  пакет web-библиотеки подписи для вашей системы отсутствует",
                  "The installation package of the library for the web signature for your system is absent",
                ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_NOT_INSTALLED_OR_RUN] = [
                  "Бібліотеку web-підпису не запущено або не інстальовано у системі. Для продовження необхідно запустити або інсталювати бібліотеку web-підпису.",
                  "Библиотеку web-подписи не запущено или не установлено в системе. Для продолжения необходимо запустить или установить библиотеку web-подписи.",
                  "The library for the web signature isn't started or not installed in system. To continue, it is necessary to start or install library for the web signature.",
                ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED] =
                  [
                    "Інстальована версія web-бібліотеки підпису більше не підтримується. Для продовження необхідно інсталювати оновлену версію web-бібліотеки підпису.",
                    "Инсталированная версия web-библиотеки подписи больше не поддерживается. Для продолжения необходимо установить обновленную версию web-библиотеки подписи.",
                    "The installed version of library for the web signature isn't supported any more. To continue, it is necessary to install the updated version of the library for the web signature.",
                  ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED] = [
                  "Java-апплет не завантажено. Необхідно перевірити версію JRE",
                  "Java-апплет не загружен. Необходимо проверить версию JRE",
                  "Java applet isn't loaded. It is necessary to check the version of JRE",
                ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_INSTALL_PACKAGE] = [
                  "Інсталяційний пакет web-бібліотеки підпису",
                  "Инсталяционный пакет web-библиотеки подписи",
                  "Install package of library for the web signature",
                ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_UPDATE_PACKAGE] = [
                  "Оновлення web-бібліотеки підпису",
                  "Обновление web-библиотеки подписи",
                  "Update of library for the web signature",
                ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_USER_MANUAL] = [
                  "Настанова користувача",
                  "Руководство пользователя",
                  "User manual",
                ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE] = [
                  "Інсталяційний пакет бібліотеки підпису (web-розширення)",
                  "Инсталяционный пакет библиотеки подписи (web-расширение)",
                  "Install package of library for the web signature (web-extension)",
                ]),
                (c.DESCRIPTIONS[c.WEB_LIBRARY_CHECK_JRE_VERSION] = [
                  "Перевірити версію JRE",
                  "Проверить версию JRE",
                  "Check JRE version",
                ]),
                (c.DESCRIPTIONS[
                  c.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN
                ] = [
                  "Веб-розширення для роботи бібліотеки web-підпису не запущено або не інстальовано в браузері. Для продовження необхідно запустити або інсталювати веб-розширення.",
                  "Веб-расширение для работы библиотеки web-подписи не запущено или не установлено в браузере. Для продолжения необходимо запустить или установить веб-расширение.",
                  "The web extension for the web signature library is not running or installed in the browser. To continue, you need to run or install the web extension.",
                ]),
                (c.getString = function (e, t) {
                  var n, r;
                  return (
                    void 0 === (n = c.DESCRIPTIONS[e]) && (n = ""),
                    void 0 === (r = n[t - 1]) ? n[0] : r
                  );
                });
              var p = function (e, t, n, r, i) {
                switch (
                  ((this.m_id = t),
                  (this.m_library = null),
                  (this.m_language = n),
                  (this.m_supportedLibraryTypes = []),
                  (this.m_supportedLibraryTypesIndex = 0),
                  (this.m_noJavaApplet = !1 | r),
                  (this.m_webExtensionFirst = !1 | i),
                  (this.m_errorResult = null),
                  e)
                ) {
                  case p.LIBRARY_TYPE_JAVA_APPLET:
                  case p.LIBRARY_TYPE_SIGN_AGENT:
                  case p.LIBRARY_TYPE_WEB_EXTENSION:
                  case p.LIBRARY_TYPE_NPAPI:
                  case p.LIBRARY_TYPE_ACTIVE_X:
                    this.m_libraryType = e;
                    break;
                  default:
                    this.m_libraryType = p.LIBRARY_TYPE_DEFAULT;
                }
                this.m_libraryType == p.LIBRARY_TYPE_DEFAULT
                  ? (this.m_webExtensionFirst &&
                      p.isWebExtensionSupported() &&
                      this.m_supportedLibraryTypes.push(
                        p.LIBRARY_TYPE_WEB_EXTENSION
                      ),
                    p.isSignAgentSupported() &&
                      this.m_supportedLibraryTypes.push(
                        p.LIBRARY_TYPE_SIGN_AGENT
                      ),
                    !this.m_webExtensionFirst &&
                      p.isWebExtensionSupported() &&
                      this.m_supportedLibraryTypes.push(
                        p.LIBRARY_TYPE_WEB_EXTENSION
                      ),
                    p.isNPAPISupported() &&
                      this.m_supportedLibraryTypes.push(p.LIBRARY_TYPE_NPAPI),
                    p.isActiveXSupported() &&
                      this.m_supportedLibraryTypes.push(
                        p.LIBRARY_TYPE_ACTIVE_X
                      ),
                    !this.m_noJavaApplet &&
                      p.isJavaAppletSupported() &&
                      this.m_supportedLibraryTypes.push(
                        p.LIBRARY_TYPE_JAVA_APPLET
                      ))
                  : this.m_supportedLibraryTypes.push(this.m_libraryType),
                  (this.onload = function (e) {}),
                  (this.onerror = function (e, t, n) {}),
                  (this.getLibraryType = function () {
                    return this.m_libraryType;
                  });
              };
              (p.LIBRARY_TYPE_DEFAULT = 0),
                (p.LIBRARY_TYPE_JAVA_APPLET = 1),
                (p.LIBRARY_TYPE_SIGN_AGENT = 2),
                (p.LIBRARY_TYPE_WEB_EXTENSION = 3),
                (p.LIBRARY_TYPE_NPAPI = 4),
                (p.LIBRARY_TYPE_ACTIVE_X = 5),
                (p.EU_DEFAULT_LANG = 0),
                (p.EU_UA_LANG = 1),
                (p.EU_RU_LANG = 2),
                (p.EU_EN_LANG = 3),
                (p.isJavaAppletSupported = function () {
                  var e = new s();
                  if (this.m_noJavaApplet) return !1;
                  switch (e.GetName()) {
                    case s.BROWSER_NAME_FIREFOX:
                    case s.BROWSER_NAME_CHROME:
                      return !(e.GetVersion() > 44);
                    case s.BROWSER_NAME_OPERA:
                      return !(e.GetVersion() > 30);
                    case s.BROWSER_NAME_EDGE:
                    case s.BROWSER_NAME_UNKNOWN:
                      return !1;
                    default:
                      return !0;
                  }
                }),
                (p.isSignAgentSupported = function () {
                  var e = new s();
                  switch (e.GetName()) {
                    case s.BROWSER_NAME_IE:
                      if (e.GetVersion() < 10) return !1;
                      break;
                    case s.BROWSER_NAME_SAFARI:
                      if (e.GetVersion() < 7) return !1;
                      break;
                    case s.BROWSER_NAME_UNKNOWN:
                      return !1;
                  }
                  switch (e.GetOSName()) {
                    case s.OS_NAME_WINDOWS:
                    case s.OS_NAME_MAC:
                    case s.OS_NAME_ANDROID:
                      break;
                    case s.OS_NAME_UNKNOWN:
                    default:
                      return !1;
                  }
                  return !0;
                }),
                (p.isWebExtensionSupported = function () {
                  var e = new s();
                  switch (e.GetName()) {
                    case s.BROWSER_NAME_CHROME:
                      break;
                    case s.BROWSER_NAME_OPERA:
                      if (e.GetVersion() < 35) return !1;
                      break;
                    case s.BROWSER_NAME_FIREFOX:
                      if (e.GetVersion() < 50) return !1;
                      break;
                    case s.BROWSER_NAME_UNKNOWN:
                    default:
                      return !1;
                  }
                  switch (e.GetOSName()) {
                    case s.OS_NAME_ANDROID:
                    case s.OS_NAME_UNKNOWN:
                      return !1;
                  }
                  return !0;
                }),
                (p.isNPAPISupported = function () {
                  var e = new s();
                  switch (e.GetName()) {
                    case s.BROWSER_NAME_FIREFOX:
                      if (e.GetVersion() > 51) return !1;
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                }),
                (p.isActiveXSupported = function () {
                  var e = new s();
                  switch (e.GetName()) {
                    case s.BROWSER_NAME_IE:
                      if (
                        e.GetVersion() < 9 ||
                        e.GetArch() == s.BROWSER_ARCH_NAME_X64
                      )
                        return !1;
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                }),
                (p.isWebExtensionInstalled = function () {
                  var e =
                    new s().GetName() == s.BROWSER_NAME_FIREFOX
                      ? "eusw@iit.com.ua"
                      : "chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/";
                  return 1 == document.getElementsByClassName(e).length;
                }),
                (p.prototype.getLibraryType = function () {
                  return this.m_libraryType;
                }),
                (p.prototype.load = function () {
                  var e = this;
                  setTimeout(function () {
                    e._load(
                      e.m_supportedLibraryTypes[e.m_supportedLibraryTypesIndex]
                    );
                  }, 1);
                }),
                (p.prototype.unload = function () {
                  var e = document.getElementById(this.m_id);
                  e && e.parentNode && e.parentNode.removeChild(e);
                }),
                (p.prototype._load = function (e) {
                  switch (e) {
                    case p.LIBRARY_TYPE_JAVA_APPLET:
                      return void this._loadSignApplet();
                    case p.LIBRARY_TYPE_SIGN_AGENT:
                      return void this._loadSignAgent();
                    case p.LIBRARY_TYPE_WEB_EXTENSION:
                      return void this._loadWebExtension();
                    case p.LIBRARY_TYPE_NPAPI:
                      return void this._loadNPAPI();
                    case p.LIBRARY_TYPE_ACTIVE_X:
                      return void this._loadActiveX();
                  }
                }),
                (p.prototype._onLoad = function () {
                  this.m_libraryType =
                    this.m_supportedLibraryTypes[
                      this.m_supportedLibraryTypesIndex
                    ];
                  try {
                    this.onload(this.m_library);
                  } catch (e) {
                    console.log(e);
                  }
                }),
                (p.prototype._onLoadError = function (e, t, n, r) {
                  null == this.m_errorResult &&
                    (this.m_errorResult = { msg: t, code: n, library: r });
                  var i = document.getElementById(this.m_id);
                  if ((i && i.parentNode && i.parentNode.removeChild(i), e))
                    if (
                      (this.m_supportedLibraryTypesIndex++,
                      this.m_supportedLibraryTypesIndex >=
                        this.m_supportedLibraryTypes.length)
                    )
                      try {
                        this.onerror(
                          this.m_errorResult.msg,
                          this.m_errorResult.code,
                          this.m_errorResult.library
                        );
                      } catch (e) {
                        console.log(e);
                      }
                    else this.load();
                  else
                    try {
                      this.onerror(
                        this.m_errorResult.msg,
                        this.m_errorResult.code,
                        this.m_errorResult.library
                      );
                    } catch (e) {
                      console.log(e);
                    }
                }),
                (p.prototype._loadSignApplet = function () {
                  var e = document.createElement("applet");
                  e.setAttribute("codebase", "https://sign.eu.iit.com.ua"),
                    e.setAttribute(
                      "code",
                      "com.iit.certificateAuthority.endUser.libraries.signJava.EndUser.class"
                    ),
                    e.setAttribute("archive", "EUSignJava.jar"),
                    e.setAttribute("cache_archive", "EUSignJava.jar"),
                    e.setAttribute("cache_version", "1.3.102"),
                    e.setAttribute("separate_jvm", !0),
                    e.setAttribute("id", this.m_id),
                    e.setAttribute("width", "100%"),
                    e.setAttribute("height", "1"),
                    document.body.appendChild(e),
                    (this.m_library = document.getElementById(this.m_id)),
                    this._waitForSignAppletLoad(this, 100, 1200);
                }),
                (p.prototype._waitForSignAppletLoad = function (e, t, n) {
                  try {
                    e.m_library.SetUIMode(!1);
                  } catch (i) {
                    if (0 != n)
                      return void setTimeout(
                        function () {
                          e._waitForSignAppletLoad(e, t, n - 1);
                        },
                        t,
                        n
                      );
                    var r = "";
                    return (
                      (r =
                        Q.getErrorDescriptionEx(
                          Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                          e.m_language
                        ) + ". "),
                      (r += c.getString(
                        c.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED,
                        e.m_language
                      )),
                      (r += "<br><br>"),
                      (r +=
                        '<a style="text-indent:18px" href="https://www.java.com/ru/download/installed.jsp">' +
                        c.getString(
                          c.WEB_LIBRARY_CHECK_JRE_VERSION,
                          e.m_language
                        ) +
                        "</a>"),
                      void e._onLoadError(
                        !0,
                        r,
                        Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                        null
                      )
                    );
                  }
                  e._onLoad(e.m_library);
                }),
                (p.prototype._appendWebWrapperObject = function (e, t, n, r) {
                  try {
                    var i = new te(e, t),
                      o = document.createElement("object");
                    for (var a in (o.setAttribute("id", this.m_id),
                    n
                      ? r
                        ? (o.setAttribute("classid", e),
                          o.setAttribute("height", "1px"))
                        : ((o.type = e), (o.classid = e), (o.height = "1px"))
                      : ((o.classid = "EUSignCP.class"),
                        (o.style = "display:none"),
                        (o.style.visibility = "hidden")),
                    document.body.appendChild(o),
                    i))
                      o[a] = i[a];
                    return (
                      (this.m_library = document.getElementById(this.m_id)), !0
                    );
                  } catch (e) {
                    return !1;
                  }
                }),
                (p.prototype._onLoadWebLibraryError = function (e) {
                  var t,
                    n = this.m_library,
                    r = !0,
                    i = "";
                  switch (
                    ((t =
                      p.isWebExtensionSupported() &&
                      !p.isWebExtensionInstalled() &&
                      this.m_webExtensionFirst),
                    (i += Q.getErrorDescriptionEx(
                      Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                      this.m_language
                    )),
                    (i += ". "),
                    e.GetErrorCode())
                  ) {
                    case Q.ERROR_LIBRARY_COMUNICATION_FAILED:
                      i += c.getString(
                        t
                          ? c.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN
                          : c.WEB_LIBRARY_NOT_INSTALLED_OR_RUN,
                        this.m_language
                      );
                      break;
                    case Q.ERROR_LIBRARY_VERSION_NOT_SUPPORTED:
                      (i += c.getString(
                        c.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED,
                        this.m_language
                      )),
                        (r = !1),
                        (this.m_errorResult = null);
                      break;
                    default:
                      i +=
                        Q.getErrorDescriptionEx(
                          e.GetErrorCode(),
                          this.m_language
                        ) + ".";
                  }
                  (i += "<br><br>"),
                    null != n.GetInstallURL()
                      ? (e.GetErrorCode() ==
                        Q.ERROR_LIBRARY_VERSION_NOT_SUPPORTED
                          ? (i +=
                              '<div><a style="text-indent:18px" href="' +
                              n.GetUpdateURL() +
                              '">' +
                              c.getString(
                                c.WEB_LIBRARY_UPDATE_PACKAGE,
                                this.m_language
                              ) +
                              "</a></div>")
                          : (i += t
                              ? '<div><a style="text-indent:18px" href="' +
                                n.GetWebExtensionInstallURL() +
                                '">' +
                                c.getString(
                                  c.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE,
                                  this.m_language
                                ) +
                                "</a></div>"
                              : '<div><a style="text-indent:18px" href="' +
                                n.GetInstallURL() +
                                '">' +
                                c.getString(
                                  c.WEB_LIBRARY_INSTALL_PACKAGE,
                                  this.m_language
                                ) +
                                "</a></div>"),
                        (i +=
                          '<div><a style="text-indent:18px" href="' +
                          n.GetHelpURL() +
                          '">' +
                          c.getString(
                            c.WEB_LIBRARY_USER_MANUAL,
                            this.m_language
                          ) +
                          "</a></div>"))
                      : (i +=
                          "<div>" +
                          c.getString(
                            c.WEB_LIBRARY_OS_NOT_SUPPORTED,
                            this.m_language
                          ) +
                          "</div>"),
                    this._onLoadError(r, i, e.GetErrorCode(), n);
                }),
                (p.prototype._loadWebLibrary = function () {
                  var e = this;
                  e.m_library.Load(
                    function () {
                      e._onLoad();
                    },
                    function (t) {
                      e._onLoadWebLibraryError(t);
                    }
                  );
                }),
                (p.prototype._loadSignAgent = function () {
                  if (
                    this._appendWebWrapperObject(
                      "localhost",
                      "http:" == window.location.protocol ? "8081" : "8083",
                      !1,
                      !1
                    )
                  )
                    this._loadWebLibrary();
                  else {
                    var e = Q.getErrorDescriptionEx(
                      Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                      this.m_language
                    );
                    this._onLoadError(
                      !0,
                      e,
                      Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                      null
                    );
                  }
                }),
                (p.prototype._loadWebExtension = function () {
                  if (
                    this._appendWebWrapperObject(
                      "chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/",
                      "",
                      !1,
                      !1
                    )
                  )
                    this._loadWebLibrary();
                  else {
                    var e = Q.getErrorDescriptionEx(
                      Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                      this.m_language
                    );
                    this._onLoadError(
                      !0,
                      e,
                      Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                      null
                    );
                  }
                }),
                (p.prototype._loadPlugin = function (e, t, n, r) {
                  if (this._appendWebWrapperObject(e, "", !0, r))
                    this._waitForPluginLoad(this, t, n);
                  else {
                    var i = Q.getErrorDescriptionEx(
                      Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                      this.m_language
                    );
                    this._onLoadError(
                      !0,
                      i,
                      Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                      null
                    );
                  }
                }),
                (p.prototype._waitForPluginLoad = function (e, t, n) {
                  e.m_library.Load(
                    function () {
                      e._onLoad();
                    },
                    function (r) {
                      r.GetErrorCode() != Q.ERROR_LIBRARY_COMUNICATION_FAILED ||
                      0 == n
                        ? e._onLoadWebLibraryError(r)
                        : setTimeout(
                            function () {
                              e._waitForPluginLoad(e, t, n - 1);
                            },
                            t,
                            n
                          );
                    }
                  );
                }),
                (p.prototype._loadNPAPI = function () {
                  this._loadPlugin("application/x-eusign-cp", 100, 50, !1);
                }),
                (p.prototype._loadActiveX = function () {
                  this._loadPlugin(
                    "clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B",
                    100,
                    50,
                    !0
                  );
                });
              var f = function () {
                (this.vendor = "JSC IIT"),
                  (this.parentClassName = "Object"),
                  (this.className = "EndUserArrayList"),
                  (this.classVersion = 1),
                  (this.m_array = []);
              };
              (f.prototype.add = function (e) {
                return this.m_array.push(e), !0;
              }),
                (f.prototype.clear = function () {
                  this.m_array = [];
                }),
                (f.prototype.get = function (e) {
                  return this.m_array[e];
                }),
                (f.prototype.size = function () {
                  return this.m_array.length;
                }),
                Object.create ||
                  (Object.create = function (e, t) {
                    if (
                      ("object" != typeof e && "function" != typeof e) ||
                      null === e ||
                      void 0 !== t
                    )
                      throw new Error("Invalid arguments");
                    function n() {}
                    return (n.prototype = e), new n();
                  }),
                Uint8Array.prototype.slice ||
                  (Uint8Array.prototype.slice = Uint8Array.prototype.subarray);
              var _ = null;
              function E(e) {
                return (
                  null != e &&
                  "object" == typeof e &&
                  ("EndUserTransferableObject" == e.className ||
                    "EndUserTransferableObject" == e.parentClassName)
                );
              }
              _ =
                "undefined" == typeof Uint8Array
                  ? function (e) {
                      var t;
                      if ("number" == typeof e) {
                        t = new Array(e);
                        for (var n = 0; n < e; ++n) t[n] = 0;
                      } else t = e.slice(0);
                      return (
                        (t.buffer = t),
                        (t.subarray = function (e, n) {
                          return t.slice(e, n);
                        }),
                        (t.set = function (e, n) {
                          arguments.length < 2 && (n = 0);
                          for (var r = 0, i = e.length; r < i; ++r, ++n)
                            t[n] = 255 & e[r];
                        }),
                        (t.byteLength = t.length),
                        "object" == typeof e &&
                          e.buffer &&
                          (t.buffer = e.buffer),
                        t
                      );
                    }
                  : Uint8Array;
              var h = function () {
                (this.vendor = "JSC IIT"),
                  (this.parentClassName = "Object"),
                  (this.className = "EndUserTransferableObject"),
                  (this.classVersion = 1),
                  (this.isFilled = !1),
                  (this.fields = {});
              };
              (h.makeTransferable = function (e) {
                var t, n;
                (n = h),
                  ((t = e).prototype = Object.create(n.prototype)),
                  (t.prototype.constructor = t),
                  (h[new e().className] = e);
              }),
                (h.prototype.base64Coder = new o()),
                (h.prototype.dateCoder = new i()),
                (h.prototype.setClassInfo = function (e, t) {
                  (this.parentClassName = "EndUserTransferableObject"),
                    (this.className = e),
                    (this.classVersion = t);
                }),
                (h.prototype.initializeFields = function () {
                  for (var e in this.fields)
                    switch (this.fields[e]) {
                      case "boolean":
                        this[e] = !1;
                        break;
                      case "int":
                      case "long":
                      case "number":
                        this[e] = 0;
                        break;
                      case "string":
                        this[e] = "";
                        break;
                      case "EndUserKeyMedia":
                        this[e] = new S();
                        break;
                      default:
                        this[e] = null;
                    }
                }),
                (h.prototype.set = function (e) {
                  if (this.className != e.className) throw "invalid class";
                  for (var t in this.fields) this[t] = e[t];
                }),
                (h.prototype.encode = function () {
                  var e, t;
                  for (var n in ((t = new Object()),
                  (e = new Object()),
                  this.fields))
                    null != this[n]
                      ? E(this[n])
                        ? (t[n] = this[n].encode())
                        : "byteArray" == this.fields[n]
                        ? (t[n] = this.base64Coder.encode(this[n]))
                        : "time" == this.fields[n]
                        ? (t[n] = this.dateCoder.encode(this[n]))
                        : (t[n] = this[n])
                      : (t[n] = null);
                  return (
                    (e.className = this.className),
                    (e.classVersion = this.classVersion),
                    (e.classFields = t),
                    e
                  );
                }),
                (h.prototype.decode = function (e) {
                  try {
                    if (null == e.classVersion || null == e.classFields)
                      return !1;
                    var t = e.classFields;
                    for (var n in this.fields)
                      if ("time" == this.fields[n])
                        this[n] = this.dateCoder.decode(t[n]);
                      else if ("EndUserOwnerInfo" == this.fields[n])
                        (this[n] = new b()), this[n].decode(t[n]);
                      else if ("EndUserTimeInfo" == this.fields[n])
                        (this[n] = new O()), this[n].decode(t[n]);
                      else if ("EndUserKeyMedia" == this.fields[n])
                        (this[n] = new S()), this[n].decode(t[n]);
                      else if ("EndUserCertificateInfoEx" == this.fields[n])
                        (this[n] = new M()), this[n].decode(t[n]);
                      else if ("byteArray" == this.fields[n])
                        null != t[n] &&
                          (this[n] = this.base64Coder.decode(t[n]));
                      else if ("array" == this.fields[n]) {
                        this[n] = [];
                        for (var r = t[n], i = 0; i < r.length; i++) {
                          var o = r[i].className,
                            a = new h[o]();
                          if (void 0 !== a) {
                            if (!a.decode(r[i])) throw "invalid class";
                            "EndUserByteArray" == a.className &&
                              (a = a.GetData()),
                              this[n].push(a);
                          } else this[n].push(r[i]);
                        }
                      } else this[n] = t[n];
                    return !0;
                  } catch (e) {
                    return (this.isFilled = !1), !1;
                  }
                });
              var d = function (e) {
                this.setClassInfo("EndUserByteArray", 1),
                  (this.fields = { data: "byteArray" }),
                  this.initializeFields(),
                  (this.data = e);
              };
              h.makeTransferable(d),
                (d.prototype.GetData = function () {
                  return this.data;
                }),
                (d.prototype.SetData = function (e) {
                  this.data = e;
                });
              var S = function () {
                this.setClassInfo("EndUserKeyMedia", 1),
                  (this.fields = {
                    typeIndex: "long",
                    devIndex: "long",
                    password: "string",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(S),
                (S.prototype.GetTypeIndex = function () {
                  return this.typeIndex;
                }),
                (S.prototype.SetTypeIndex = function (e) {
                  this.typeIndex = e;
                }),
                (S.prototype.GetDevIndex = function () {
                  return this.devIndex;
                }),
                (S.prototype.SetDevIndex = function (e) {
                  this.devIndex = e;
                }),
                (S.prototype.GetPassword = function () {
                  return this.password;
                }),
                (S.prototype.SetPassword = function (e) {
                  this.password = e;
                });
              var y = function () {
                this.setClassInfo("EndUserFileStoreSettings", 1),
                  (this.fields = {
                    path: "string",
                    checkCRLs: "boolean",
                    autoRefresh: "boolean",
                    ownCRLsOnly: "boolean",
                    fullAndDeltaCRLs: "boolean",
                    autoDownloadCRLs: "boolean",
                    saveLoadedCerts: "boolean",
                    expireTime: "long",
                  }),
                  this.initializeFields(),
                  (this.expireTime = 3600);
              };
              h.makeTransferable(y),
                (y.prototype.GetPath = function () {
                  return this.path;
                }),
                (y.prototype.SetPath = function (e) {
                  this.path = e;
                }),
                (y.prototype.GetCheckCRLs = function () {
                  return this.checkCRLs;
                }),
                (y.prototype.SetCheckCRLs = function (e) {
                  this.checkCRLs = e;
                }),
                (y.prototype.GetAutoRefresh = function () {
                  return this.autoRefresh;
                }),
                (y.prototype.SetAutoRefresh = function (e) {
                  this.autoRefresh = e;
                }),
                (y.prototype.GetOwnCRLsOnly = function () {
                  return this.ownCRLsOnly;
                }),
                (y.prototype.SetOwnCRLsOnly = function (e) {
                  this.ownCRLsOnly = e;
                }),
                (y.prototype.GetFullAndDeltaCRLs = function () {
                  return this.fullAndDeltaCRLs;
                }),
                (y.prototype.SetFullAndDeltaCRLs = function (e) {
                  this.fullAndDeltaCRLs = e;
                }),
                (y.prototype.GetAutoDownloadCRLs = function () {
                  return this.autoDownloadCRLs;
                }),
                (y.prototype.SetAutoDownloadCRLs = function (e) {
                  this.autoDownloadCRLs = e;
                }),
                (y.prototype.GetSaveLoadedCerts = function () {
                  return this.saveLoadedCerts;
                }),
                (y.prototype.SetSaveLoadedCerts = function (e) {
                  this.saveLoadedCerts = e;
                }),
                (y.prototype.GetExpireTime = function () {
                  return this.expireTime;
                }),
                (y.prototype.SetExpireTime = function (e) {
                  this.expireTime = e;
                });
              var C = function () {
                this.setClassInfo("EndUserProxySettings", 1),
                  (this.fields = {
                    useProxy: "boolean",
                    anonymous: "boolean",
                    address: "string",
                    port: "string",
                    user: "string",
                    password: "string",
                    savePassword: "boolean",
                  }),
                  this.initializeFields(),
                  (this.port = "80");
              };
              h.makeTransferable(C),
                (C.prototype.GetUseProxy = function () {
                  return this.useProxy;
                }),
                (C.prototype.SetUseProxy = function (e) {
                  this.useProxy = e;
                }),
                (C.prototype.GetAnonymous = function () {
                  return this.anonymous;
                }),
                (C.prototype.SetAnonymous = function (e) {
                  this.anonymous = e;
                }),
                (C.prototype.GetAddress = function () {
                  return this.address;
                }),
                (C.prototype.SetAddress = function (e) {
                  this.address = e;
                }),
                (C.prototype.GetPort = function () {
                  return this.port;
                }),
                (C.prototype.SetPort = function (e) {
                  this.port = e;
                }),
                (C.prototype.GetUser = function () {
                  return this.user;
                }),
                (C.prototype.SetUser = function (e) {
                  this.user = e;
                }),
                (C.prototype.GetPassword = function () {
                  return this.password;
                }),
                (C.prototype.SetPassword = function (e) {
                  this.password = e;
                }),
                (C.prototype.GetSavePassword = function () {
                  return this.savePassword;
                }),
                (C.prototype.SetSavePassword = function (e) {
                  this.savePassword = e;
                });
              var T = function () {
                this.setClassInfo("EndUserTSPSettings", 1),
                  (this.fields = {
                    getStamps: "boolean",
                    address: "string",
                    port: "string",
                  }),
                  this.initializeFields(),
                  (this.port = "80");
              };
              h.makeTransferable(T),
                (T.prototype.GetGetStamps = function () {
                  return this.getStamps;
                }),
                (T.prototype.SetGetStamps = function (e) {
                  this.getStamps = e;
                }),
                (T.prototype.GetAddress = function () {
                  return this.address;
                }),
                (T.prototype.SetAddress = function (e) {
                  this.address = e;
                }),
                (T.prototype.GetPort = function () {
                  return this.port;
                }),
                (T.prototype.SetPort = function (e) {
                  this.port = e;
                });
              var R = function () {
                this.setClassInfo("EndUserOCSPSettings", 1),
                  (this.fields = {
                    useOCSP: "boolean",
                    beforeStore: "boolean",
                    address: "string",
                    port: "string",
                  }),
                  this.initializeFields(),
                  (this.port = "80");
              };
              h.makeTransferable(R),
                (R.prototype.GetUseOCSP = function () {
                  return this.useOCSP;
                }),
                (R.prototype.SetUseOCSP = function (e) {
                  this.useOCSP = e;
                }),
                (R.prototype.GetBeforeStore = function () {
                  return this.beforeStore;
                }),
                (R.prototype.SetBeforeStore = function (e) {
                  this.beforeStore = e;
                }),
                (R.prototype.GetAddress = function () {
                  return this.address;
                }),
                (R.prototype.SetAddress = function (e) {
                  this.address = e;
                }),
                (R.prototype.GetPort = function () {
                  return this.port;
                }),
                (R.prototype.SetPort = function (e) {
                  this.port = e;
                });
              var m = function () {
                this.setClassInfo("EndUserLDAPSettings", 1),
                  (this.fields = {
                    useLDAP: "boolean",
                    address: "string",
                    port: "string",
                    anonymous: "boolean",
                    user: "string",
                    password: "string",
                  }),
                  this.initializeFields(),
                  (this.port = "389");
              };
              h.makeTransferable(m),
                (m.prototype.GetUseLDAP = function () {
                  return this.useLDAP;
                }),
                (m.prototype.SetUseLDAP = function (e) {
                  this.useLDAP = e;
                }),
                (m.prototype.GetAddress = function () {
                  return this.address;
                }),
                (m.prototype.SetAddress = function (e) {
                  this.address = e;
                }),
                (m.prototype.GetPort = function () {
                  return this.port;
                }),
                (m.prototype.SetPort = function (e) {
                  this.port = e;
                }),
                (m.prototype.GetAnonymous = function () {
                  return this.anonymous;
                }),
                (m.prototype.SetAnonymous = function (e) {
                  this.anonymous = e;
                }),
                (m.prototype.GetUser = function () {
                  return this.user;
                }),
                (m.prototype.SetUser = function (e) {
                  this.user = e;
                }),
                (m.prototype.GetPassword = function () {
                  return this.password;
                }),
                (m.prototype.SetPassword = function (e) {
                  this.password = e;
                });
              var A = function () {
                this.setClassInfo("EndUserCMPSettings", 1),
                  (this.fields = {
                    useCMP: "boolean",
                    address: "string",
                    port: "string",
                    commonName: "string",
                  }),
                  this.initializeFields(),
                  (this.port = "80");
              };
              h.makeTransferable(A),
                (A.prototype.GetUseCMP = function () {
                  return this.useCMP;
                }),
                (A.prototype.SetUseCMP = function (e) {
                  this.useCMP = e;
                }),
                (A.prototype.GetAddress = function () {
                  return this.address;
                }),
                (A.prototype.SetAddress = function (e) {
                  this.address = e;
                }),
                (A.prototype.GetPort = function () {
                  return this.port;
                }),
                (A.prototype.SetPort = function (e) {
                  this.port = e;
                }),
                (A.prototype.GetCommonName = function () {
                  return this.commonName;
                }),
                (A.prototype.SetCommonName = function (e) {
                  this.commonName = e;
                });
              var g = function () {
                this.setClassInfo("EndUserModeSettings", 1),
                  (this.fields = { offlineMode: "boolean" }),
                  this.initializeFields();
              };
              h.makeTransferable(g),
                (g.prototype.GetOfflineMode = function () {
                  return this.offlineMode;
                }),
                (g.prototype.SetOfflineMode = function (e) {
                  this.offlineMode = e;
                });
              var P = function () {
                this.setClassInfo("EndUserOCSPAccessInfoModeSettings", 1),
                  (this.fields = { enabled: "boolean" }),
                  this.initializeFields();
              };
              h.makeTransferable(P),
                (P.prototype.GetEnabled = function () {
                  return this.enabled;
                }),
                (P.prototype.SetEnabled = function (e) {
                  this.enabled = e;
                });
              var I = function () {
                this.setClassInfo("EndUserOCSPAccessInfoSettings", 1),
                  (this.fields = {
                    issuerCN: "string",
                    address: "string",
                    port: "string",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(I),
                (I.prototype.GetIssuerCN = function () {
                  return this.issuerCN;
                }),
                (I.prototype.SetIssuerCN = function (e) {
                  this.issuerCN = e;
                }),
                (I.prototype.GetAddress = function () {
                  return this.address;
                }),
                (I.prototype.SetAddress = function (e) {
                  this.address = e;
                }),
                (I.prototype.GetPort = function () {
                  return this.port;
                }),
                (I.prototype.SetPort = function (e) {
                  this.port = e;
                });
              var v = function () {
                this.setClassInfo("EndUserKeyMediaSettings", 1),
                  (this.fields = {
                    sourceType: "long",
                    showErrors: "boolean",
                    keyMedia: "EndUserKeyMedia",
                  }),
                  this.initializeFields(),
                  (this.sourceType = 1),
                  (this.showErrors = !0);
              };
              h.makeTransferable(v),
                (v.prototype.GetSourceType = function () {
                  return this.sourceType;
                }),
                (v.prototype.SetSourceType = function (e) {
                  this.sourceType = e;
                }),
                (v.prototype.GetShowErrors = function () {
                  return this.showErrors;
                }),
                (v.prototype.SetShowErrors = function (e) {
                  this.showErrors = e;
                }),
                (v.prototype.GetKeyMedia = function () {
                  return this.keyMedia;
                }),
                (v.prototype.SetKeyMedia = function (e) {
                  this.keyMedia = e;
                });
              var U = function () {
                this.setClassInfo("EndUserTSLSettings", 1),
                  (this.fields = {
                    useTSL: "boolean",
                    autoDownloadTSL: "boolean",
                    tslAddress: "string",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(U),
                (U.prototype.GetUseTSL = function () {
                  return this.useTSL;
                }),
                (U.prototype.SetUseTSL = function (e) {
                  this.useTSL = e;
                }),
                (U.prototype.GetAutoDownloadTSL = function () {
                  return this.autoDownloadTSL;
                }),
                (U.prototype.SetAutoDownloadTSL = function (e) {
                  this.autoDownloadTSL = e;
                }),
                (U.prototype.GetTSLAddress = function () {
                  return this.tslAddress;
                }),
                (U.prototype.SetTSLAddress = function (e) {
                  this.tslAddress = e;
                });
              var b = function () {
                this.setClassInfo("EndUserOwnerInfo", 1),
                  (this.fields = {
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
                    subjDRFOCode: "string",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(b),
                (b.prototype.IsFilled = function () {
                  return this.isFilled;
                }),
                (b.prototype.GetIssuer = function () {
                  return this.issuer;
                }),
                (b.prototype.GetIssuerCN = function () {
                  return this.issuerCN;
                }),
                (b.prototype.GetSerial = function () {
                  return this.serial;
                }),
                (b.prototype.GetSubject = function () {
                  return this.subject;
                }),
                (b.prototype.GetSubjCN = function () {
                  return this.subjCN;
                }),
                (b.prototype.GetSubjOrg = function () {
                  return this.subjOrg;
                }),
                (b.prototype.GetSubjOrgUnit = function () {
                  return this.subjOrgUnit;
                }),
                (b.prototype.GetSubjTitle = function () {
                  return this.subjTitle;
                }),
                (b.prototype.GetSubjState = function () {
                  return this.subjState;
                }),
                (b.prototype.GetSubjLocality = function () {
                  return this.subjLocality;
                }),
                (b.prototype.GetSubjFullName = function () {
                  return this.subjFullName;
                }),
                (b.prototype.GetSubjAddress = function () {
                  return this.subjAddress;
                }),
                (b.prototype.GetSubjPhone = function () {
                  return this.subjPhone;
                }),
                (b.prototype.GetSubjEMail = function () {
                  return this.subjEMail;
                }),
                (b.prototype.GetSubjDNS = function () {
                  return this.subjDNS;
                }),
                (b.prototype.GetSubjEDRPOUCode = function () {
                  return this.subjEDRPOUCode;
                }),
                (b.prototype.GetSubjDRFOCode = function () {
                  return this.subjDRFOCode;
                });
              var O = function () {
                this.setClassInfo("EndUserTimeInfo", 2),
                  (this.fields = {
                    version: "number",
                    isTimeAvail: "boolean",
                    isTimeStamp: "boolean",
                    time: "time",
                    isSignTimeStampAvail: "boolean",
                    signTimeStamp: "time",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(O),
                (O.prototype.GetVersion = function () {
                  return this.version;
                }),
                (O.prototype.IsTimeAvail = function () {
                  return this.isTimeAvail;
                }),
                (O.prototype.IsTimeStamp = function () {
                  return this.isTimeStamp;
                }),
                (O.prototype.GetTime = function () {
                  return this.time;
                }),
                (O.prototype.IsSignTimeStampAvail = function () {
                  return this.isSignTimeStampAvail;
                }),
                (O.prototype.GetSignTimeStamp = function () {
                  return this.signTimeStamp;
                });
              var D = function () {
                this.setClassInfo("EndUserSignInfo", 1),
                  (this.fields = {
                    ownerInfo: "EndUserOwnerInfo",
                    timeInfo: "EndUserTimeInfo",
                    data: "byteArray",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(D),
                (D.prototype.GetOwnerInfo = function () {
                  return this.ownerInfo;
                }),
                (D.prototype.GetTimeInfo = function () {
                  return this.timeInfo;
                }),
                (D.prototype.GetData = function () {
                  return this.data;
                }),
                (D.prototype.GetDataString = function (e) {
                  return r.ArrayToString(e, this.data);
                });
              var k = function () {
                this.setClassInfo("EndUserSenderInfo", 1),
                  (this.fields = {
                    ownerInfo: "EndUserOwnerInfo",
                    timeInfo: "EndUserTimeInfo",
                    data: "byteArray",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(k),
                (k.prototype.GetOwnerInfo = function () {
                  return this.ownerInfo;
                }),
                (k.prototype.GetTimeInfo = function () {
                  return this.timeInfo;
                }),
                (k.prototype.GetData = function () {
                  return this.data;
                }),
                (k.prototype.GetDataString = function (e) {
                  return r.ArrayToString(e, this.data);
                });
              var N = function () {
                this.setClassInfo("EndUserCertificateInfo", 1),
                  (this.fields = {
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
                    isSubjCA: "boolean",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(N),
                (N.prototype.IsFilled = function () {
                  return this.isFilled;
                }),
                (N.prototype.GetVersion = function () {
                  return this.version;
                }),
                (N.prototype.GetIssuer = function () {
                  return this.issuer;
                }),
                (N.prototype.GetIssuerCN = function () {
                  return this.issuerCN;
                }),
                (N.prototype.GetSerial = function () {
                  return this.serial;
                }),
                (N.prototype.GetSubject = function () {
                  return this.subject;
                }),
                (N.prototype.GetSubjCN = function () {
                  return this.subjCN;
                }),
                (N.prototype.GetSubjOrg = function () {
                  return this.subjOrg;
                }),
                (N.prototype.GetSubjOrgUnit = function () {
                  return this.subjOrgUnit;
                }),
                (N.prototype.GetSubjTitle = function () {
                  return this.subjTitle;
                }),
                (N.prototype.GetSubjState = function () {
                  return this.subjState;
                }),
                (N.prototype.GetSubjLocality = function () {
                  return this.subjLocality;
                }),
                (N.prototype.GetSubjFullName = function () {
                  return this.subjFullName;
                }),
                (N.prototype.GetSubjAddress = function () {
                  return this.subjAddress;
                }),
                (N.prototype.GetSubjPhone = function () {
                  return this.subjPhone;
                }),
                (N.prototype.GetSubjEMail = function () {
                  return this.subjEMail;
                }),
                (N.prototype.GetSubjDNS = function () {
                  return this.subjDNS;
                }),
                (N.prototype.GetSubjEDRPOUCode = function () {
                  return this.subjEDRPOUCode;
                }),
                (N.prototype.GetSubjDRFOCode = function () {
                  return this.subjDRFOCode;
                }),
                (N.prototype.GetSubjNBUCode = function () {
                  return this.subjNBUCode;
                }),
                (N.prototype.GetSubjSPFMCode = function () {
                  return this.subjSPFMCode;
                }),
                (N.prototype.GetSubjOCode = function () {
                  return this.subjOCode;
                }),
                (N.prototype.GetSubjOUCode = function () {
                  return this.subjOUCode;
                }),
                (N.prototype.GetSubjUserCode = function () {
                  return this.subjUserCode;
                }),
                (N.prototype.GetCertBeginTime = function () {
                  return this.certBeginTime;
                }),
                (N.prototype.GetCertEndTime = function () {
                  return this.certEndTime;
                }),
                (N.prototype.IsPrivKeyTimesAvail = function () {
                  return this.isPrivKeyTimesAvail;
                }),
                (N.prototype.GetPrivKeyBeginTime = function () {
                  return this.privKeyBeginTime;
                }),
                (N.prototype.GetPrivKeyEndTime = function () {
                  return this.privKeyEndTime;
                }),
                (N.prototype.GetPublicKeyBits = function () {
                  return this.publicKeyBits;
                }),
                (N.prototype.GetPublicKey = function () {
                  return this.publicKey;
                }),
                (N.prototype.GetPublicKeyID = function () {
                  return this.publicKeyID;
                }),
                (N.prototype.IsECDHPublicKeyAvail = function () {
                  return this.isECDHPublicKeyAvail;
                }),
                (N.prototype.GetECDHPublicKeyBits = function () {
                  return this.ECDHPublicKeyBits;
                }),
                (N.prototype.GetECDHPublicKey = function () {
                  return this.ECDHPublicKey;
                }),
                (N.prototype.GetECDHPublicKeyID = function () {
                  return this.ECDHPublicKeyID;
                }),
                (N.prototype.GetIssuerPublicKeyID = function () {
                  return this.issuerPublicKeyID;
                }),
                (N.prototype.GetKeyUsage = function () {
                  return this.keyUsage;
                }),
                (N.prototype.GetExtKeyUsages = function () {
                  return this.extKeyUsages;
                }),
                (N.prototype.GetPolicies = function () {
                  return this.policies;
                }),
                (N.prototype.GetCRLDistribPoint1 = function () {
                  return this.crlDistribPoint1;
                }),
                (N.prototype.GetCRLDistribPoint2 = function () {
                  return this.crlDistribPoint2;
                }),
                (N.prototype.IsPowerCert = function () {
                  return this.isPowerCert;
                }),
                (N.prototype.IsSubjTypeAvail = function () {
                  return this.isSubjTypeAvail;
                }),
                (N.prototype.IsSubjCA = function () {
                  return this.isSubjCA;
                });
              var M = function () {
                this.setClassInfo("EndUserCertificateInfoEx", 8),
                  (this.fields = {
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
                    subjUserID: "string",
                  }),
                  this.initializeFields();
                var e = this;
                this.IsLimitValueAvailable = function () {
                  return e.isLimitValueAvailable;
                };
              };
              h.makeTransferable(M),
                (M.prototype.IsFilled = function () {
                  return this.isFilled;
                }),
                (M.prototype.GetVersion = function () {
                  return this.version;
                }),
                (M.prototype.GetIssuer = function () {
                  return this.issuer;
                }),
                (M.prototype.GetIssuerCN = function () {
                  return this.issuerCN;
                }),
                (M.prototype.GetSerial = function () {
                  return this.serial;
                }),
                (M.prototype.GetSubject = function () {
                  return this.subject;
                }),
                (M.prototype.GetSubjCN = function () {
                  return this.subjCN;
                }),
                (M.prototype.GetSubjOrg = function () {
                  return this.subjOrg;
                }),
                (M.prototype.GetSubjOrgUnit = function () {
                  return this.subjOrgUnit;
                }),
                (M.prototype.GetSubjTitle = function () {
                  return this.subjTitle;
                }),
                (M.prototype.GetSubjState = function () {
                  return this.subjState;
                }),
                (M.prototype.GetSubjLocality = function () {
                  return this.subjLocality;
                }),
                (M.prototype.GetSubjFullName = function () {
                  return this.subjFullName;
                }),
                (M.prototype.GetSubjAddress = function () {
                  return this.subjAddress;
                }),
                (M.prototype.GetSubjPhone = function () {
                  return this.subjPhone;
                }),
                (M.prototype.GetSubjEMail = function () {
                  return this.subjEMail;
                }),
                (M.prototype.GetSubjDNS = function () {
                  return this.subjDNS;
                }),
                (M.prototype.GetSubjEDRPOUCode = function () {
                  return this.subjEDRPOUCode;
                }),
                (M.prototype.GetSubjDRFOCode = function () {
                  return this.subjDRFOCode;
                }),
                (M.prototype.GetSubjNBUCode = function () {
                  return this.subjNBUCode;
                }),
                (M.prototype.GetSubjSPFMCode = function () {
                  return this.subjSPFMCode;
                }),
                (M.prototype.GetSubjOCode = function () {
                  return this.subjOCode;
                }),
                (M.prototype.GetSubjOUCode = function () {
                  return this.subjOUCode;
                }),
                (M.prototype.GetSubjUserCode = function () {
                  return this.subjUserCode;
                }),
                (M.prototype.GetCertBeginTime = function () {
                  return this.certBeginTime;
                }),
                (M.prototype.GetCertEndTime = function () {
                  return this.certEndTime;
                }),
                (M.prototype.IsPrivKeyTimesAvail = function () {
                  return this.isPrivKeyTimesAvail;
                }),
                (M.prototype.GetPrivKeyBeginTime = function () {
                  return this.privKeyBeginTime;
                }),
                (M.prototype.GetPrivKeyEndTime = function () {
                  return this.privKeyEndTime;
                }),
                (M.prototype.GetPublicKeyBits = function () {
                  return this.publicKeyBits;
                }),
                (M.prototype.GetPublicKey = function () {
                  return this.publicKey;
                }),
                (M.prototype.GetPublicKeyID = function () {
                  return this.publicKeyID;
                }),
                (M.prototype.GetIssuerPublicKeyID = function () {
                  return this.issuerPublicKeyID;
                }),
                (M.prototype.GetKeyUsage = function () {
                  return this.keyUsage;
                }),
                (M.prototype.GetExtKeyUsages = function () {
                  return this.extKeyUsages;
                }),
                (M.prototype.GetPolicies = function () {
                  return this.policies;
                }),
                (M.prototype.GetCRLDistribPoint1 = function () {
                  return this.crlDistribPoint1;
                }),
                (M.prototype.GetCRLDistribPoint2 = function () {
                  return this.crlDistribPoint2;
                }),
                (M.prototype.IsPowerCert = function () {
                  return this.isPowerCert;
                }),
                (M.prototype.IsSubjTypeAvail = function () {
                  return this.isSubjTypeAvail;
                }),
                (M.prototype.IsSubjCA = function () {
                  return this.isSubjCA;
                }),
                (M.prototype.GetChainLength = function () {
                  return this.chainLength;
                }),
                (M.prototype.GetUPN = function () {
                  return this.UPN;
                }),
                (M.prototype.GetPublicKeyType = function () {
                  return this.publicKeyType;
                }),
                (M.prototype.GetKeyUsageType = function () {
                  return this.keyUsageType;
                }),
                (M.prototype.GetRSAModul = function () {
                  return this.RSAModul;
                }),
                (M.prototype.GetRSAExponent = function () {
                  return this.RSAExponent;
                }),
                (M.prototype.GetOCSPAccessInfo = function () {
                  return this.OCSPAccessInfo;
                }),
                (M.prototype.GetIssuerAccessInfo = function () {
                  return this.issuerAccessInfo;
                }),
                (M.prototype.GetTSPAccessInfo = function () {
                  return this.TSPAccessInfo;
                }),
                (M.prototype.IsLimitValueAvail = function () {
                  return this.isLimitValueAvailable;
                }),
                (M.prototype.GetLimitValue = function () {
                  return this.limitValue;
                }),
                (M.prototype.GetLimitValueCurrency = function () {
                  return this.limitValueCurrency;
                }),
                (M.prototype.GetSubjType = function () {
                  return this.subjType;
                }),
                (M.prototype.GetSubjSubType = function () {
                  return this.subjSubType;
                }),
                (M.prototype.GetSubjUNZR = function () {
                  return this.subjUNZR;
                }),
                (M.prototype.GetSubjCountry = function () {
                  return this.subjCountry;
                }),
                (M.prototype.GetFingerprint = function () {
                  return this.fingerprint;
                }),
                (M.prototype.IsQSCD = function () {
                  return this.isQSCD;
                }),
                (M.prototype.GetSubjUserID = function () {
                  return this.subjUserID;
                });
              var w = function () {
                this.setClassInfo("EndUserCertificate", 1),
                  (this.fields = {
                    infoEx: "EndUserCertificateInfoEx",
                    data: "byteArray",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(w),
                (w.prototype.GetInfoEx = function () {
                  return this.infoEx;
                }),
                (w.prototype.SetInfoEx = function (e) {
                  this.infoEx = e;
                }),
                (w.prototype.GetData = function () {
                  return this.data;
                }),
                (w.prototype.SetData = function (e) {
                  this.data = e;
                });
              var G = function () {
                this.setClassInfo("EndUserCRLInfo", 1, !0, !1),
                  (this.fields = {
                    isFilled: "boolean",
                    issuer: "string",
                    issuerCN: "string",
                    crlNumber: "long",
                    thisUpdate: "time",
                    nextUpdate: "time",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(G),
                (G.prototype.IsFilled = function () {
                  return this.isFilled;
                }),
                (G.prototype.GetIssuer = function () {
                  return this.issuer;
                }),
                (G.prototype.GetIssuerCN = function () {
                  return this.issuerCN;
                }),
                (G.prototype.GetCRLNumber = function () {
                  return this.crlNumber;
                }),
                (G.prototype.GetThisUpdate = function () {
                  return this.thisUpdate;
                }),
                (G.prototype.GetNextUpdate = function () {
                  return this.nextUpdate;
                });
              var K = function () {
                this.setClassInfo("EndUserCRLDetailedInfo", 1),
                  (this.fields = {
                    isFilled: "boolean",
                    version: "long",
                    issuer: "string",
                    issuerCN: "string",
                    issuerPublicKeyID: "string",
                    crlNumber: "long",
                    thisUpdate: "time",
                    nextUpdate: "time",
                    revokedItemsCount: "long",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(K),
                (K.prototype.IsFilled = function () {
                  return this.isFilled;
                }),
                (K.prototype.GetVersion = function () {
                  return this.version;
                }),
                (K.prototype.GetIssuer = function () {
                  return this.issuer;
                }),
                (K.prototype.GetIssuerCN = function () {
                  return this.issuerCN;
                }),
                (K.prototype.GetIssuerPublicKeyID = function () {
                  return this.issuerPublicKeyID;
                }),
                (K.prototype.GetCRLNumber = function () {
                  return this.crlNumber;
                }),
                (K.prototype.GetThisUpdate = function () {
                  return this.thisUpdate;
                }),
                (K.prototype.GetNextUpdate = function () {
                  return this.nextUpdate;
                }),
                (K.prototype.GetRevokedItemsCount = function () {
                  return this.revokedItemsCount;
                });
              var L = function () {
                this.setClassInfo("EndUserPrivateKeyInfo", 1),
                  (this.fields = {
                    privateKey: "byteArray",
                    privateKeyInfo: "byteArray",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(L),
                (L.prototype.GetPrivateKey = function () {
                  return this.privateKey;
                }),
                (L.prototype.SetPrivateKey = function (e) {
                  this.privateKey = e;
                }),
                (L.prototype.GetPrivateKeyInfo = function () {
                  return this.privateKeyInfo;
                }),
                (L.prototype.SetPrivateKeyInfo = function (e) {
                  this.privateKeyInfo = e;
                });
              var B = function () {
                this.setClassInfo("EndUserJKSPrivateKey", 1),
                  (this.fields = {
                    privateKey: "byteArray",
                    certificates: "array",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(B),
                (B.prototype.GetPrivateKey = function () {
                  return this.privateKey;
                }),
                (B.prototype.GetCertificate = function (e) {
                  return e < 0 || e >= this.certificates.length
                    ? null
                    : this.certificates[e];
                }),
                (B.prototype.GetCertificatesCount = function () {
                  return this.certificates.length;
                }),
                (B.prototype.GetCertificates = function () {
                  return this.certificates;
                });
              var F = function () {
                this.setClassInfo("EndUserRequestInfo", 4),
                  (this.fields = {
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
                    isQSCD: "boolean",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(F),
                (F.prototype.GetRequest = function () {
                  return this.request;
                }),
                (F.prototype.GetRequestType = function () {
                  return this.requestType;
                }),
                (F.prototype.GetDefaultRequestFileName = function () {
                  return this.defaultRequestFileName;
                }),
                (F.prototype.IsSimple = function () {
                  return this.isSimple;
                }),
                (F.prototype.GetSubject = function () {
                  return this.subject;
                }),
                (F.prototype.GetSubjCN = function () {
                  return this.subjCN;
                }),
                (F.prototype.GetSubjOrg = function () {
                  return this.subjOrg;
                }),
                (F.prototype.GetSubjOrgUnit = function () {
                  return this.subjOrgUnit;
                }),
                (F.prototype.GetSubjTitle = function () {
                  return this.subjTitle;
                }),
                (F.prototype.GetSubjState = function () {
                  return this.subjState;
                }),
                (F.prototype.GetSubjLocality = function () {
                  return this.subjLocality;
                }),
                (F.prototype.GetSubjFullName = function () {
                  return this.subjFullName;
                }),
                (F.prototype.GetSubjAddress = function () {
                  return this.subjAddress;
                }),
                (F.prototype.GetSubjPhone = function () {
                  return this.subjPhone;
                }),
                (F.prototype.GetSubjEMail = function () {
                  return this.subjEMail;
                }),
                (F.prototype.GetSubjDNS = function () {
                  return this.subjDNS;
                }),
                (F.prototype.GetSubjEDRPOUCode = function () {
                  return this.subjEDRPOUCode;
                }),
                (F.prototype.GetSubjDRFOCode = function () {
                  return this.subjDRFOCode;
                }),
                (F.prototype.GetSubjNBUCode = function () {
                  return this.subjNBUCode;
                }),
                (F.prototype.GetSubjSPFMCode = function () {
                  return this.subjSPFMCode;
                }),
                (F.prototype.GetSubjOCode = function () {
                  return this.subjOCode;
                }),
                (F.prototype.GetSubjOUCode = function () {
                  return this.subjOUCode;
                }),
                (F.prototype.GetSubjUserCode = function () {
                  return this.subjUserCode;
                }),
                (F.prototype.GetCertBeginTime = function () {
                  return this.certBeginTime;
                }),
                (F.prototype.GetCertEndTime = function () {
                  return this.certEndTime;
                }),
                (F.prototype.IsPrivKeyTimesAvail = function () {
                  return this.isPrivKeyTimesAvail;
                }),
                (F.prototype.GetPrivKeyBeginTime = function () {
                  return this.privKeyBeginTime;
                }),
                (F.prototype.GetPrivKeyEndTime = function () {
                  return this.privKeyEndTime;
                }),
                (F.prototype.GetPublicKeyType = function () {
                  return this.publicKeyType;
                }),
                (F.prototype.GetPublicKeyBits = function () {
                  return this.publicKeyBits;
                }),
                (F.prototype.GetRSAModul = function () {
                  return this.RSAModul;
                }),
                (F.prototype.GetRSAExponent = function () {
                  return this.RSAExponent;
                }),
                (F.prototype.GetPublicKey = function () {
                  return this.publicKey;
                }),
                (F.prototype.GetPublicKeyID = function () {
                  return this.publicKeyID;
                }),
                (F.prototype.GetExtKeyUsages = function () {
                  return this.extKeyUsages;
                }),
                (F.prototype.GetCRLDistribPoint1 = function () {
                  return this.crlDistribPoint1;
                }),
                (F.prototype.GetCRLDistribPoint2 = function () {
                  return this.crlDistribPoint2;
                }),
                (F.prototype.IsSubjTypeAvail = function () {
                  return this.isSubjTypeAvail;
                }),
                (F.prototype.GetSubjType = function () {
                  return this.subjType;
                }),
                (F.prototype.GetSubjSubType = function () {
                  return this.subjSubType;
                }),
                (F.prototype.IsSelfSigned = function () {
                  return this.isSelfSigned;
                }),
                (F.prototype.GetSignIssuer = function () {
                  return this.signIssuer;
                }),
                (F.prototype.GetSignSerial = function () {
                  return this.signSerial;
                }),
                (F.prototype.GetSubjUNZR = function () {
                  return this.subjUNZR;
                }),
                (F.prototype.GetSubjCountry = function () {
                  return this.subjCountry;
                }),
                (F.prototype.IsQSCD = function () {
                  return this.isQSCD;
                });
              var x = function () {
                this.setClassInfo("EndUserInfo", 3),
                  (this.fields = {
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
                    country: "string",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(x),
                (x.prototype.GetCommonName = function () {
                  return this.commonName;
                }),
                (x.prototype.SetCommonName = function (e) {
                  this.commonName = e;
                }),
                (x.prototype.GetLocality = function () {
                  return this.locality;
                }),
                (x.prototype.SetLocality = function (e) {
                  this.locality = e;
                }),
                (x.prototype.GetState = function () {
                  return this.state;
                }),
                (x.prototype.SetState = function (e) {
                  this.state = e;
                }),
                (x.prototype.GetOrganization = function () {
                  return this.organization;
                }),
                (x.prototype.SetOrganization = function (e) {
                  this.organization = e;
                }),
                (x.prototype.GetOrgUnit = function () {
                  return this.orgUnit;
                }),
                (x.prototype.SetOrgUnit = function (e) {
                  this.orgUnit = e;
                }),
                (x.prototype.GetTitle = function () {
                  return this.title;
                }),
                (x.prototype.SetTitle = function (e) {
                  this.title = e;
                }),
                (x.prototype.GetStreet = function () {
                  return this.street;
                }),
                (x.prototype.SetStreet = function (e) {
                  this.street = e;
                }),
                (x.prototype.GetPhone = function () {
                  return this.phone;
                }),
                (x.prototype.SetPhone = function (e) {
                  this.phone = e;
                }),
                (x.prototype.GetSurname = function () {
                  return this.surname;
                }),
                (x.prototype.SetSurname = function (e) {
                  this.surname = e;
                }),
                (x.prototype.GetGivenname = function () {
                  return this.givenname;
                }),
                (x.prototype.SetGivenname = function (e) {
                  this.givenname = e;
                }),
                (x.prototype.GetEMail = function () {
                  return this.EMail;
                }),
                (x.prototype.SetEMail = function (e) {
                  this.EMail = e;
                }),
                (x.prototype.GetDNS = function () {
                  return this.DNS;
                }),
                (x.prototype.SetDNS = function (e) {
                  this.DNS = e;
                }),
                (x.prototype.GetEDRPOUCode = function () {
                  return this.EDRPOUCode;
                }),
                (x.prototype.SetEDRPOUCode = function (e) {
                  this.EDRPOUCode = e;
                }),
                (x.prototype.GetDRFOCode = function () {
                  return this.DRFOCode;
                }),
                (x.prototype.SetDRFOCode = function (e) {
                  this.DRFOCode = e;
                }),
                (x.prototype.GetNBUCode = function () {
                  return this.NBUCode;
                }),
                (x.prototype.SetNBUCode = function (e) {
                  this.NBUCode = e;
                }),
                (x.prototype.GetSPFMCode = function () {
                  return this.SPFMCode;
                }),
                (x.prototype.SetSPFMCode = function (e) {
                  this.SPFMCode = e;
                }),
                (x.prototype.GetOCode = function () {
                  return this.OCode;
                }),
                (x.prototype.SetOCode = function (e) {
                  this.OCode = e;
                }),
                (x.prototype.GetOUCode = function () {
                  return this.OUCode;
                }),
                (x.prototype.SetOUCode = function (e) {
                  this.OUCode = e;
                }),
                (x.prototype.GetUserCode = function () {
                  return this.userCode;
                }),
                (x.prototype.SetUserCode = function (e) {
                  this.userCode = e;
                }),
                (x.prototype.GetUPN = function () {
                  return this.UPN;
                }),
                (x.prototype.SetUPN = function (e) {
                  this.UPN = e;
                }),
                (x.prototype.GetUNZR = function () {
                  return this.UNZR;
                }),
                (x.prototype.SetUNZR = function (e) {
                  this.UNZR = e;
                }),
                (x.prototype.GetCountry = function () {
                  return this.country;
                }),
                (x.prototype.SetCountry = function (e) {
                  this.country = e;
                });
              var Y = function () {
                this.setClassInfo("EndUserParams", 1),
                  (this.fields = {
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
                    RAAdminSN: "number",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(Y),
                (Y.prototype.GetSN = function () {
                  return this.SN;
                }),
                (Y.prototype.SetSN = function (e) {
                  this.SN = e;
                }),
                (Y.prototype.GetCommonName = function () {
                  return this.commonName;
                }),
                (Y.prototype.SetCommonName = function (e) {
                  this.commonName = e;
                }),
                (Y.prototype.GetLocality = function () {
                  return this.locality;
                }),
                (Y.prototype.SetLocality = function (e) {
                  this.locality = e;
                }),
                (Y.prototype.GetState = function () {
                  return this.state;
                }),
                (Y.prototype.SetState = function (e) {
                  this.state = e;
                }),
                (Y.prototype.GetOrganization = function () {
                  return this.organization;
                }),
                (Y.prototype.SetOrganization = function (e) {
                  this.organization = e;
                }),
                (Y.prototype.GetOrgUnit = function () {
                  return this.orgUnit;
                }),
                (Y.prototype.SetOrgUnit = function (e) {
                  this.orgUnit = e;
                }),
                (Y.prototype.GetTitle = function () {
                  return this.title;
                }),
                (Y.prototype.SetTitle = function (e) {
                  this.title = e;
                }),
                (Y.prototype.GetStreet = function () {
                  return this.street;
                }),
                (Y.prototype.SetStreet = function (e) {
                  this.street = e;
                }),
                (Y.prototype.GetPhone = function () {
                  return this.phone;
                }),
                (Y.prototype.SetPhone = function (e) {
                  this.phone = e;
                }),
                (Y.prototype.GetSurname = function () {
                  return this.surname;
                }),
                (Y.prototype.SetSurname = function (e) {
                  this.surname = e;
                }),
                (Y.prototype.GetGivenname = function () {
                  return this.givenname;
                }),
                (Y.prototype.SetGivenname = function (e) {
                  this.givenname = e;
                }),
                (Y.prototype.GetEMail = function () {
                  return this.EMail;
                }),
                (Y.prototype.SetEMail = function (e) {
                  this.EMail = e;
                }),
                (Y.prototype.GetDNS = function () {
                  return this.DNS;
                }),
                (Y.prototype.SetDNS = function (e) {
                  this.DNS = e;
                }),
                (Y.prototype.GetEDRPOUCode = function () {
                  return this.EDRPOUCode;
                }),
                (Y.prototype.SetEDRPOUCode = function (e) {
                  this.EDRPOUCode = e;
                }),
                (Y.prototype.GetDRFOCode = function () {
                  return this.DRFOCode;
                }),
                (Y.prototype.SetDRFOCode = function (e) {
                  this.DRFOCode = e;
                }),
                (Y.prototype.GetNBUCode = function () {
                  return this.NBUCode;
                }),
                (Y.prototype.SetNBUCode = function (e) {
                  this.NBUCode = e;
                }),
                (Y.prototype.GetSPFMCode = function () {
                  return this.SPFMCode;
                }),
                (Y.prototype.SetSPFMCode = function (e) {
                  this.SPFMCode = e;
                }),
                (Y.prototype.GetInformation = function () {
                  return this.information;
                }),
                (Y.prototype.SetInformation = function (e) {
                  this.information = e;
                }),
                (Y.prototype.GetPassPhrase = function () {
                  return this.passPhrase;
                }),
                (Y.prototype.SetPassPhrase = function (e) {
                  this.passPhrase = e;
                }),
                (Y.prototype.GetIsPublishCertificate = function () {
                  return this.isPublishCertificate;
                }),
                (Y.prototype.SetIsPublishCertificate = function (e) {
                  this.isPublishCertificate = e;
                }),
                (Y.prototype.GetRAAdminSN = function () {
                  return this.RAAdminSN;
                }),
                (Y.prototype.SetRAAdminSN = function (e) {
                  this.RAAdminSN = e;
                });
              var $ = function () {
                this.setClassInfo("EndUserOperationContext", 1),
                  (this.fields = { handle: "string" }),
                  this.initializeFields(),
                  (this.handle = null);
              };
              h.makeTransferable($),
                ($.prototype.GetHandle = function () {
                  return this.handle;
                });
              var V = function () {
                this.setClassInfo("EndUserSession", 1),
                  (this.fields = { handle: "string", data: "byteArray" }),
                  this.initializeFields();
              };
              h.makeTransferable(V),
                (V.prototype.GetHandle = function () {
                  return this.handle;
                }),
                (V.prototype.GetData = function () {
                  return this.data;
                }),
                (V.prototype.SetData = function (e) {
                  this.data = e;
                });
              var H = function () {
                this.setClassInfo("EndUserSCClientStatistic", 1),
                  (this.fields = {
                    activeSessions: "number",
                    gatedSessions: "number",
                    unprotectedData: "number",
                    protectedData: "number",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(H),
                (H.prototype.GetActiveSessions = function () {
                  return this.activeSessions;
                }),
                (H.prototype.GetGatedSessions = function () {
                  return this.gatedSessions;
                }),
                (H.prototype.GetUnprotectedData = function () {
                  return this.unprotectedData;
                }),
                (H.prototype.GetProtectedData = function () {
                  return this.protectedData;
                });
              var W = function () {
                this.setClassInfo("EndUserDeviceContext", 1),
                  (this.fields = { handle: "string" }),
                  this.initializeFields(),
                  (this.handle = null);
              };
              h.makeTransferable(W),
                (W.prototype.GetHandle = function () {
                  return this.handle;
                });
              var j = function () {
                this.setClassInfo("EndUserTransportHeader", 1),
                  (this.fields = {
                    receiptNumber: "number",
                    cryptoData: "byteArray",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(j),
                (j.prototype.GetReceiptNumber = function () {
                  return this.receiptNumber;
                }),
                (j.prototype.GetCryptoData = function () {
                  return this.cryptoData;
                });
              var X = function () {
                this.setClassInfo("EndUserCryptoHeader", 1),
                  (this.fields = {
                    caType: "string",
                    headerType: "number",
                    headerSize: "number",
                    cryptoData: "byteArray",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(X),
                (X.prototype.GetCAType = function () {
                  return this.caType;
                }),
                (X.prototype.GetHeaderType = function () {
                  return this.headerType;
                }),
                (X.prototype.GetHeaderSize = function () {
                  return this.headerSize;
                }),
                (X.prototype.GetCryptoData = function () {
                  return this.cryptoData;
                });
              var z = function () {
                this.setClassInfo("EndUserContext", 1),
                  (this.fields = { handle: "string" }),
                  this.initializeFields();
              };
              h.makeTransferable(z),
                (z.prototype.GetHandle = function () {
                  return this.handle;
                });
              var J = function () {
                this.setClassInfo("EndUserHashContext", 1),
                  (this.fields = { handle: "string" }),
                  this.initializeFields();
              };
              h.makeTransferable(J),
                (J.prototype.GetHandle = function () {
                  return this.handle;
                });
              var Z = function () {
                this.setClassInfo("EndUserPrivateKeyContext", 1),
                  (this.fields = {
                    handle: "string",
                    ownerInfo: "EndUserOwnerInfo",
                  }),
                  this.initializeFields();
              };
              h.makeTransferable(Z),
                (Z.prototype.GetHandle = function () {
                  return this.handle;
                }),
                (Z.prototype.GetOwnerInfo = function () {
                  return this.ownerInfo;
                });
              var q = function (e, t) {
                this.setClassInfo("EndUserReference", 1),
                  (this.fields = { name: "string", data: "byteArray" }),
                  this.initializeFields(),
                  (this.name = e),
                  (this.data = t);
              };
              h.makeTransferable(q),
                (q.prototype.GetName = function () {
                  return this.name;
                }),
                (q.prototype.SetName = function (e) {
                  this.name = e;
                }),
                (q.prototype.GetData = function () {
                  return this.data;
                }),
                (q.prototype.SetData = function (e) {
                  this.data = e;
                });
              var Q = function (e, t) {
                (this.errorCode = e),
                  (this.message = t),
                  (this.toString = function () {
                    return this.message + " (" + this.errorCode + ")";
                  }),
                  (this.GetErrorCode = function () {
                    return this.errorCode;
                  }),
                  (this.GetMessage = function () {
                    return this.message;
                  });
              };
              function ee(e, t) {
                (this.errorCode = e),
                  (this.message = t),
                  (this.toString = function () {
                    return this.message + " (" + this.errorCode + ")";
                  }),
                  (this.GetErrorCode = function () {
                    return this.errorCode;
                  }),
                  (this.GetMessage = function () {
                    return this.message;
                  });
              }
              (Q.ERROR_NONE = 0),
                (Q.ERROR_UNKNOWN = 65535),
                (Q.ERROR_NOT_SUPPORTED = 65534),
                (Q.ERROR_NOT_INITIALIZED = 1),
                (Q.ERROR_BAD_PARAMETER = 2),
                (Q.ERROR_LIBRARY_LOAD = 3),
                (Q.ERROR_READ_SETTINGS = 4),
                (Q.ERROR_TRANSMIT_REQUEST = 5),
                (Q.ERROR_MEMORY_ALLOCATION = 6),
                (Q.WARNING_END_OF_ENUM = 7),
                (Q.ERROR_PROXY_NOT_AUTHORIZED = 8),
                (Q.ERROR_NO_GUI_DIALOGS = 9),
                (Q.ERROR_DOWNLOAD_FILE = 10),
                (Q.ERROR_WRITE_SETTINGS = 11),
                (Q.ERROR_CANCELED_BY_GUI = 12),
                (Q.ERROR_OFFLINE_MODE = 13),
                (Q.ERROR_KEY_MEDIAS_FAILED = 17),
                (Q.ERROR_KEY_MEDIAS_ACCESS_FAILED = 18),
                (Q.ERROR_KEY_MEDIAS_READ_FAILED = 19),
                (Q.ERROR_KEY_MEDIAS_WRITE_FAILED = 20),
                (Q.WARNING_KEY_MEDIAS_READ_ONLY = 21),
                (Q.ERROR_KEY_MEDIAS_DELETE = 22),
                (Q.ERROR_KEY_MEDIAS_CLEAR = 23),
                (Q.ERROR_BAD_PRIVATE_KEY = 24),
                (Q.ERROR_PKI_FORMATS_FAILED = 33),
                (Q.ERROR_CSP_FAILED = 34),
                (Q.ERROR_BAD_SIGNATURE = 35),
                (Q.ERROR_AUTH_FAILED = 36),
                (Q.ERROR_NOT_RECEIVER = 37),
                (Q.ERROR_STORAGE_FAILED = 49),
                (Q.ERROR_BAD_CERT = 50),
                (Q.ERROR_CERT_NOT_FOUND = 51),
                (Q.ERROR_INVALID_CERT_TIME = 52),
                (Q.ERROR_CERT_IN_CRL = 53),
                (Q.ERROR_BAD_CRL = 54),
                (Q.ERROR_NO_VALID_CRLS = 55),
                (Q.ERROR_GET_TIME_STAMP = 65),
                (Q.ERROR_BAD_TSP_RESPONSE = 66),
                (Q.ERROR_TSP_SERVER_CERT_NOT_FOUND = 67),
                (Q.ERROR_TSP_SERVER_CERT_INVALID = 68),
                (Q.ERROR_GET_OCSP_STATUS = 81),
                (Q.ERROR_BAD_OCSP_RESPONSE = 82),
                (Q.ERROR_CERT_BAD_BY_OCSP = 83),
                (Q.ERROR_OCSP_SERVER_CERT_NOT_FOUND = 84),
                (Q.ERROR_OCSP_SERVER_CERT_INVALID = 85),
                (Q.ERROR_LDAP_ERROR = 97),
                (Q.ERROR_LIBRARY_COMUNICATION_FAILED = 4097),
                (Q.ERROR_LIBRARY_VERSION_NOT_SUPPORTED = 4098),
                (Q.ERROR_BROWSER_NOT_SUPPORTED = 65537),
                (Q.ERROR_OPEN_FILE = 65552),
                (Q.ERROR_READ_FILE = 65553),
                (Q.ERROR_WRITE_FILE = 65554),
                (Q.ERROR_DESCRIPTIONS_EX = []),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_NONE] = [
                  "Виконано успішно",
                  "Выполнено успешно",
                  "Executed successfully",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_NOT_SUPPORTED] = [
                  "Операція не підтримується",
                  "Операция не поддерживается",
                  "Operation is not supported",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_UNKNOWN] = [
                  "Невідома помилка",
                  "Неизвестная ошибка",
                  "Unknown error",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_LIBRARY_LOAD] = [
                  "Виникла помилка при завантаженні криптографічної бібліотеки",
                  "Возникла ошибка при загрузке криптографической библиотеки",
                  "Error at load crypto library",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_NOT_INITIALIZED] = [
                  "Бібліотека не ініціалізована",
                  "Библиотека не инициализирована",
                  "Library is not initialized",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_BAD_PARAMETER] = [
                  "Невірний параметр",
                  "Неверный параметр",
                  "Incorrect parameter",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_BAD_CERT] = [
                  "Сертифікат пошкоджений або не може бути використаний",
                  "Сертификат поврежден или не может быть использован",
                  "Certificate corrupted or cannot be used",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_CERT_NOT_FOUND] = [
                  "Сертифікат не знайдено",
                  "Сертификат не найден",
                  "Certificate not found",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_TRANSMIT_REQUEST] = [
                  "Виникла помилка при передачі запиту на сервер ЦСК за протоколом HTTP",
                  "Возникла ошибка при передаче запроса на сервер ЦСК по протоколу HTTP",
                  "Error at request transfer to CA's server by HTTP protocol",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_DOWNLOAD_FILE] = [
                  "Виникла помилка при завантаженні файлу з HTTP-сервера",
                  "Возникла ошибка при загрузке файла с HTTP-сервера",
                  "Error at the load of file from a HTTP-server",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_LIBRARY_COMUNICATION_FAILED] =
                  [
                    "Виникла помилка при взаємодії з криптографічною бібліотекою",
                    "Возникла ошибка при взаимодействии с криптографической библиотекой",
                    "Error at comunication with crypto library",
                  ]),
                (Q.ERROR_DESCRIPTIONS_EX[
                  Q.ERROR_LIBRARY_VERSION_NOT_SUPPORTED
                ] = [
                  "Встановлена версія бібліотеки не підтримується",
                  "Установленная версия библиотеки не поддерживается",
                  "The installed version of the library is not supported",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_BROWSER_NOT_SUPPORTED] = [
                  "Ваш браузер не підтримується",
                  "Ваш браузер не поддерживается",
                  "Your browser is not supported",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_OPEN_FILE] = [
                  "Виникла помилка при відкритті файлу",
                  "Возникла ошибка при открытии файла",
                  "Error at open file",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_READ_FILE] = [
                  "Виникла помилка при зчитуванні файлу",
                  "Возникла ошибка при чтении файла",
                  "Error at read file",
                ]),
                (Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_WRITE_FILE] = [
                  "Виникла помилка при записі файлу",
                  "Возникла ошибка при записи файла",
                  "Error at write file",
                ]),
                (Q.isError = function (e) {
                  return e != Q.ERROR_NONE;
                }),
                (Q.isSuccess = function (e) {
                  return e == Q.ERROR_NONE;
                }),
                (Q.getErrorDescriptionEx = function (e, t) {
                  var n, r;
                  return (
                    void 0 === (n = Q.ERROR_DESCRIPTIONS_EX[e]) &&
                      (n = Q.ERROR_DESCRIPTIONS_EX[Q.ERROR_UNKNOWN]),
                    void 0 === (r = n[t - 1]) ? n[0] : r
                  );
                });
              var te = function (t, n) {
                (this.vendor = "JSC IIT"),
                  (this.classVersion = "1.3.79"),
                  (this.className = "EUSignCP"),
                  (this.SUBJECT_TYPE_UNDIFFERENCED = 0),
                  (this.SUBJECT_TYPE_CA = 1),
                  (this.SUBJECT_TYPE_CA_SERVER = 2),
                  (this.SUBJECT_TYPE_RA_ADMINISTRATOR = 3),
                  (this.SUBJECT_TYPE_END_USER = 4),
                  (this.EU_SUBJECT_TYPE_UNDIFFERENCED =
                    this.SUBJECT_TYPE_UNDIFFERENCED),
                  (this.EU_SUBJECT_TYPE_CA = this.SUBJECT_TYPE_CA),
                  (this.EU_SUBJECT_TYPE_CA_SERVER =
                    this.SUBJECT_TYPE_CA_SERVER),
                  (this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR =
                    this.SUBJECT_TYPE_RA_ADMINISTRATOR),
                  (this.EU_SUBJECT_TYPE_END_USER = this.SUBJECT_TYPE_END_USER),
                  (this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0),
                  (this.SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1),
                  (this.SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2),
                  (this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED =
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP =
                    this.SUBJECT_CA_SERVER_SUB_TYPE_CMP),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP =
                    this.SUBJECT_CA_SERVER_SUB_TYPE_TSP),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP =
                    this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP),
                  (this.CERT_KEY_TYPE_UNKNOWN = 0),
                  (this.CERT_KEY_TYPE_DSTU4145 = 1),
                  (this.CERT_KEY_TYPE_RSA = 2),
                  (this.CERT_KEY_TYPE_ECDSA = 4),
                  (this.EU_CERT_KEY_TYPE_UNKNOWN = this.CERT_KEY_TYPE_UNKNOWN),
                  (this.EU_CERT_KEY_TYPE_DSTU4145 =
                    this.CERT_KEY_TYPE_DSTU4145),
                  (this.EU_CERT_KEY_TYPE_RSA = this.CERT_KEY_TYPE_RSA),
                  (this.EU_CERT_KEY_TYPE_ECDSA = this.CERT_KEY_TYPE_ECDSA),
                  (this.KEY_USAGE_UNKNOWN = 0),
                  (this.KEY_USAGE_DIGITAL_SIGNATUR = 1),
                  (this.KEY_KEY_USAGE_KEY_AGREEMENT = 16),
                  (this.EU_KEY_USAGE_UNKNOWN = this.KEY_USAGE_UNKNOWN),
                  (this.EU_KEY_USAGE_DIGITAL_SIGNATURE =
                    this.KEY_USAGE_DIGITAL_SIGNATUR),
                  (this.EU_KEY_USAGE_NON_REPUDATION = 2),
                  (this.EU_KEY_USAGE_KEY_AGREEMENT =
                    this.KEY_KEY_USAGE_KEY_AGREEMENT),
                  (this.EU_KEYS_REQUEST_TYPE_UA_DS = 1),
                  (this.EU_KEYS_REQUEST_TYPE_UA_KEP = 2),
                  (this.EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3),
                  (this.EU_KEYS_TYPE_NONE = 0),
                  (this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS = 1),
                  (this.EU_KEYS_TYPE_RSA_WITH_SHA = 2),
                  (this.EU_KEYS_TYPE_ECDSA_WITH_SHA = 4),
                  (this.EU_KEYS_LENGTH_DS_UA_191 = 1),
                  (this.EU_KEYS_LENGTH_DS_UA_257 = 2),
                  (this.EU_KEYS_LENGTH_DS_UA_307 = 3),
                  (this.EU_KEYS_LENGTH_DS_UA_FILE = 4),
                  (this.EU_KEYS_LENGTH_DS_UA_CERT = 5),
                  (this.EU_KEYS_LENGTH_KEP_UA_257 = 1),
                  (this.EU_KEYS_LENGTH_KEP_UA_431 = 2),
                  (this.EU_KEYS_LENGTH_KEP_UA_571 = 3),
                  (this.EU_KEYS_LENGTH_KEP_UA_FILE = 4),
                  (this.EU_KEYS_LENGTH_KEP_UA_CERT = 5),
                  (this.EU_KEYS_LENGTH_DS_RSA_1024 = 1),
                  (this.EU_KEYS_LENGTH_DS_RSA_2048 = 2),
                  (this.EU_KEYS_LENGTH_DS_RSA_3072 = 3),
                  (this.EU_KEYS_LENGTH_DS_RSA_4096 = 4),
                  (this.EU_KEYS_LENGTH_DS_RSA_FILE = 5),
                  (this.EU_KEYS_LENGTH_DS_RSA_CERT = 6),
                  (this.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL = 1),
                  (this.EU_RECIPIENT_APPEND_KEY_ID = 2),
                  (this.EU_RECIPIENT_APPEND_KEY_ID_USC_COMPAT = 3),
                  (this.EU_SAVE_SETTINGS_PARAMETER = "SaveSettings"),
                  (this.EU_RESOLVE_OIDS_PARAMETER = "ResolveOIDs"),
                  (this.EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER =
                    "MakePKeyPFXContainer"),
                  (this.EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER =
                    "SignIncludeContentTimeStamp"),
                  (this.EU_SIGN_TYPE_PARAMETER = "SignType"),
                  (this.EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER =
                    "SignIncludeCACertificates"),
                  (this.EU_FS_CALCULATE_FINGERPRINT = "FSCalculateFingerprint"),
                  (this.EU_FORCE_USE_TSP_FROM_SETTINGS_PARAMETER =
                    "ForceUseTSPFromSettings"),
                  (this.EU_STRING_ENCODING_PARAMETER = "StringEncoding"),
                  (this.EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER =
                    "CheckCertChainOnSignTime"),
                  (this.EU_CONNECTIONS_TIMEOUT_PARAMETER =
                    "ConnectionsTimeout"),
                  (this.EU_LOG_EVENTS_THRESHOLD_PARAMETER =
                    "LogEventsThreshold"),
                  (this.EU_SETTINGS_ID_NONE = 0),
                  (this.EU_SETTINGS_ID_MANDATORY = 31),
                  (this.EU_SETTINGS_ID_ALL = 1023),
                  (this.EU_SETTINGS_ID_FSTORE = 1),
                  (this.EU_SETTINGS_ID_PROXY = 2),
                  (this.EU_SETTINGS_ID_TSP = 4),
                  (this.EU_SETTINGS_ID_OCSP = 8),
                  (this.EU_SETTINGS_ID_LDAP = 16),
                  (this.EU_SETTINGS_ID_MODE = 32),
                  (this.EU_SETTINGS_ID_CMP = 64),
                  (this.EU_SETTINGS_ID_KM = 128),
                  (this.EU_SETTINGS_ID_OCSP_ACCESS_INFO_MODE = 256),
                  (this.EU_SETTINGS_ID_OCSP_ACCESS_INFO = 512),
                  (this.EU_SETTINGS_ID_TSL = 1024),
                  (this.EU_SETTINGS_ID_LOG = 2048),
                  (this.EU_HEADER_CA_TYPE = "UA1"),
                  (this.EU_HEADER_PART_TYPE_SIGNED = 1),
                  (this.EU_HEADER_PART_TYPE_ENCRYPTED = 2),
                  (this.EU_HEADER_PART_TYPE_STAMPED = 3),
                  (this.EU_HEADER_PART_TYPE_CERTCRYPT = 4),
                  (this.EU_HEADER_MAX_CA_TYPE_SIZE = 3),
                  (this.EU_SIGNED_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_SIGNED),
                  (this.EU_ENCRYPTED_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_ENCRYPTED),
                  (this.EU_TIMESTAMPED_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_STAMPED),
                  (this.EU_CERTCRYPT_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_CERTCRYPT),
                  (this.EU_DEFAULT_LANG = 0),
                  (this.EU_UA_LANG = 1),
                  (this.EU_RU_LANG = 2),
                  (this.EU_EN_LANG = 3),
                  (this.EU_CONTENT_ENC_ALGO_TDES_CBC = 4),
                  (this.EU_CONTENT_ENC_ALGO_AES_128_CBC = 5),
                  (this.EU_CONTENT_ENC_ALGO_AES_192_CBC = 6),
                  (this.EU_CONTENT_ENC_ALGO_AES_256_CBC = 7),
                  (this.EU_DEV_CTX_MIN_PUBLIC_DATA_ID = 16),
                  (this.EU_DEV_CTX_MAX_PRIVATE_DATA_ID = 175),
                  (this.EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9"),
                  (this.EU_CCS_TYPE_REVOKE = 1),
                  (this.EU_CCS_TYPE_HOLD = 2),
                  (this.EU_REVOCATION_REASON_UNKNOWN = 0),
                  (this.EU_REVOCATION_REASON_KEY_COMPROMISE = 1),
                  (this.EU_REVOCATION_REASON_NEW_ISSURED = 2),
                  (this.EU_SIGN_TYPE_UNKNOWN = 0),
                  (this.EU_SIGN_TYPE_CADES_BES = 1),
                  (this.EU_SIGN_TYPE_CADES_T = 4),
                  (this.EU_SIGN_TYPE_CADES_C = 8),
                  (this.EU_SIGN_TYPE_CADES_X_LONG = 16),
                  (this.EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128),
                  (this.EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER =
                    "CheckPrivateKey"),
                  (this.EU_RESOLVE_OIDS_CONTEXT_PARAMETER = "ResolveOIDs"),
                  (this.EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER =
                    "ExportableContext"),
                  (this.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1),
                  (this.EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2),
                  (this.EU_CTX_HASH_ALGO_UNKNOWN = 0),
                  (this.EU_CTX_HASH_ALGO_GOST34311 = 1),
                  (this.EU_CTX_HASH_ALGO_SHA160 = 2),
                  (this.EU_CTX_HASH_ALGO_SHA224 = 3),
                  (this.EU_CTX_HASH_ALGO_SHA256 = 4),
                  (this.EU_CTX_SIGN_UNKNOWN = 0),
                  (this.EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1),
                  (this.EU_CTX_SIGN_RSA_WITH_SHA = 2),
                  (this.EU_CTX_SIGN_ECDSA_WITH_SHA = 3),
                  (this.EU_FILE_PROCESS_CHUNK_SIZE = 1048576),
                  (this.EU_ASIC_TYPE_UNKNOWN = 0),
                  (this.EU_ASIC_TYPE_S = 1),
                  (this.EU_ASIC_TYPE_E = 2),
                  (this.EU_ASIC_SIGN_TYPE_UNKNOWN = 0),
                  (this.EU_ASIC_SIGN_TYPE_CADES = 1),
                  (this.EU_ASIC_SIGN_TYPE_XADES = 2),
                  (this.EU_ASIC_SIGN_LEVEL_BES = 1),
                  (this.EU_ASIC_SIGN_LEVEL_T = 4),
                  (this.EU_ASIC_SIGN_LEVEL_C = 8),
                  (this.EU_ASIC_SIGN_LEVEL_X_LONG = 16),
                  (this.EU_ASIC_SIGN_LEVEL_X_LONG_TRUSTED = 128),
                  (this.EU_XADES_SIGN_TYPE_UNKNOWN = 0),
                  (this.EU_XADES_TYPE_DETACHED = 1),
                  (this.EU_XADES_TYPE_ENVELOPING = 2),
                  (this.EU_XADES_TYPE_ENVELOPED = 3),
                  (this.EU_XADES_SIGN_LEVEL_BES = 1),
                  (this.EU_XADES_SIGN_LEVEL_T = 4),
                  (this.EU_XADES_SIGN_LEVEL_B_LT = 16),
                  (this.EU_XADES_SIGN_LEVEL_B_LTA = 32),
                  (this.EU_PADES_SIGN_LEVEL_B_B = 1),
                  (this.EU_PADES_SIGN_LEVEL_B_T = 4),
                  (this.EU_PADES_SIGN_LEVEL_B_LT = 16),
                  (this.EU_PADES_SIGN_LEVEL_B_LTA = 32),
                  (this.EU_CP_ACP_ENCODING = 0),
                  (this.EU_CP_1251_ENCODING = 1251),
                  (this.EU_UTF8_ENCODING = 65001),
                  (this.m_language = this.EU_DEFAULT_LANG),
                  (this.m_lastErrorCode = Q.ERROR_NONE),
                  (this.m_lastError = ""),
                  (this.m_charset = "UTF-8"),
                  (this.m_stringCoder = new e()),
                  (this.m_base64Coder = new o()),
                  (this.m_dateCoder = new i()),
                  (this.m_browserInfo = new s());
                var r = 1;
                switch (t) {
                  case "chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/":
                    (r = 2),
                      this.m_browserInfo.GetName() == s.BROWSER_NAME_FIREFOX &&
                        (t = "eusw@iit.com.ua");
                    break;
                  case "clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B":
                    r = 4;
                    break;
                  case "application/x-eusign-cp":
                    r = 3;
                }
                (this.m_jsonRpcClient = new l(
                  r,
                  t,
                  n,
                  "https:" == window.location.protocol
                )),
                  (this.m_monitorLibraryTimer = null);
              };
              return (
                (te.prototype._funcMakeParams = function (e) {
                  var t = [];
                  null == e && (e = []);
                  for (
                    var n = function (e) {
                        if (E(e)) return e.encode();
                        if (Array.isArray(e)) {
                          for (var t = e.length, r = [], i = 0; i < t; i++)
                            r[i] = n(e[i]);
                          return r;
                        }
                        return e;
                      },
                      r = e.length,
                      i = 0;
                    i < r;
                    i++
                  )
                    t[i] = n(e[i]);
                  return t;
                }),
                (te.prototype._funcCall = function (e, t, n, r, i) {
                  var o;
                  if (!this.IsAsync(n, r))
                    return (
                      (o = this.m_jsonRpcClient.execute(e, t, null)),
                      (o = this._funcHandleResult(o)),
                      i ? i(o) : o
                    );
                  var a =
                      null == i
                        ? n
                        : function (e) {
                            i(e, n, r);
                          },
                    s = this;
                  this.m_jsonRpcClient.execute(e, t, function (e) {
                    s._funcHandleResult(e, a, r);
                  });
                }),
                (te.prototype._funcHandleResult = function (e, t, n) {
                  var r,
                    i,
                    o = this.IsAsync(t, n);
                  if (null == e) {
                    if (
                      ((r = this.MakeError(
                        Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                        ""
                      )),
                      o)
                    )
                      return void n(r);
                    throw new ee(r.errorCode, r.message);
                  }
                  if (((i = (r = e.error).code), Q.isError(i))) {
                    if (i == Q.WARNING_END_OF_ENUM)
                      return o ? void t(null) : null;
                    if (((r = this.MakeError(i, r.message)), o))
                      return void n(r);
                    throw new ee(r.errorCode, r.message);
                  }
                  try {
                    e = this._funcDecodeResult(e.result);
                  } catch (e) {
                    if (
                      ((r = this.MakeError(
                        Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                        ""
                      )),
                      o)
                    )
                      return void n(r);
                    throw new ee(r.errorCode, r.message);
                  }
                  if (!o) return e;
                  t(e);
                }),
                (te.prototype._funcDecodeResult = function (e) {
                  if (null == e) return null;
                  var t = function (e) {
                    if (Array.isArray(e)) {
                      for (var n = [], r = e.length, i = 0; i < r; i++)
                        n[i] = t(e[i]);
                      return n;
                    }
                    if ("object" == typeof e) {
                      var o,
                        a = e.className;
                      return (o = new h[a]()).decode(e)
                        ? "EndUserByteArray" == o.className
                          ? o.GetData()
                          : o
                        : null;
                    }
                    return e;
                  };
                  return t(e);
                }),
                (te.prototype._checkVersion = function (e) {
                  try {
                    var t = this.classVersion;
                    if (t == e) return !0;
                    if (
                      ((t = t.split(".")),
                      (e = e.split(".")),
                      t.length != e.length)
                    )
                      return !1;
                    for (var n = 0; n < e.length; n++)
                      if (parseInt(t[n]) > parseInt(e[n])) return !1;
                  } catch (e) {
                    return !1;
                  }
                  return !0;
                }),
                (te.prototype._stringToBytes = function (e, t) {
                  try {
                    return this.m_stringCoder.encode(e);
                  } catch (e) {
                    var n = this.MakeError(Q.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== t)
                      return (
                        setTimeout(function () {
                          t(n);
                        }, 1),
                        null
                      );
                    throw new ee(n.errorCode, n.message);
                  }
                }),
                (te.prototype._bytesToString = function (e, t) {
                  try {
                    return this.m_stringCoder.decode(e);
                  } catch (e) {
                    var n = this.MakeError(Q.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== t)
                      return (
                        setTimeout(function () {
                          t(n);
                        }, 1),
                        null
                      );
                    throw new ee(n.errorCode, n.message);
                  }
                }),
                (te.prototype._base64Encode = function (e, t) {
                  try {
                    return this.m_base64Coder.encode(e);
                  } catch (e) {
                    var n = this.MakeError(Q.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== t)
                      return (
                        setTimeout(function () {
                          t(n);
                        }, 1),
                        null
                      );
                    throw new ee(n.errorCode, n.message);
                  }
                }),
                (te.prototype._base64Decode = function (e, t) {
                  try {
                    return this.m_base64Coder.decode(e);
                  } catch (e) {
                    var n = this.MakeError(Q.ERROR_BAD_PARAMETER, "");
                    if (void 0 !== t)
                      return (
                        setTimeout(function () {
                          t(n);
                        }, 1),
                        null
                      );
                    throw new ee(n.errorCode, n.message);
                  }
                }),
                (te.prototype._copyArrayData = function (e, t) {
                  try {
                    if (e.length != t.length) return !1;
                    if (Array.isArray(t) || Array.isArray(e))
                      for (var n = 0; n < t.length; n++) e[n] = t[n];
                    else e.set(t);
                    return !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (te.prototype._startMonitorLibraryStatus = function () {
                  var e = this;
                  try {
                    e.m_monitorLibraryTimer = setInterval(function () {
                      e.IsInitialized(
                        function (t) {
                          t || e._stopMonitorLibraryStatus();
                        },
                        function (t) {
                          e._stopMonitorLibraryStatus();
                        }
                      );
                    }, 6e5);
                  } catch (e) {}
                }),
                (te.prototype._stopMonitorLibraryStatus = function () {
                  try {
                    if (null == this.m_monitorLibraryTimer) return;
                    clearInterval(this.m_monitorLibraryTimer),
                      (this.m_monitorLibraryTimer = null);
                  } catch (e) {}
                }),
                (te.prototype._getAndroidAppIntentURL = function (e, t) {
                  var n =
                    "intent://addurlandstart?url={URL_LOCATION}#Intent;scheme=saclient;package=ua.com.iit.signagentmanagement;S.browser_fallback_url={URL_INSTALL};end;";
                  return (n = n.replace(
                    "{URL_LOCATION}",
                    encodeURIComponent(location.origin)
                  )).replace("{URL_INSTALL}", encodeURIComponent(e + "/" + t));
                }),
                (te.prototype.IsAsync = function (e, t) {
                  return void 0 !== e && void 0 !== t;
                }),
                (te.prototype.MakeError = function (e, t) {
                  return (
                    "" == t &&
                      (t = Q.getErrorDescriptionEx(e, this.m_language)),
                    (this.m_lastErrorCode = e),
                    (this.m_lastError = t),
                    new Q(e, t)
                  );
                }),
                (te.prototype.RaiseError = function (e, t) {
                  var n;
                  throw new ee((n = this.MakeError(e, t)).errorCode, n.message);
                }),
                (te.prototype.GetInstallURL = function (e, t) {
                  var n = this,
                    r = n.m_browserInfo.GetOSName(),
                    i = n.m_browserInfo.GetArch(),
                    o = [];
                  t = t || "https://iit.com.ua/download/productfiles";
                  var a = function (e) {
                    o.push(t + "/" + e);
                  };
                  switch (r) {
                    case s.OS_NAME_WINDOWS:
                      a("EUSignWebInstall.exe");
                      break;
                    case s.OS_NAME_MAC:
                      a("EUSignWebInstall.pkg");
                      break;
                    case s.OS_NAME_LINUX:
                      i == s.BROWSER_ARCH_NAME_X86
                        ? (a("euswi.deb"), a("euswi.rpm"), a("euswi.tar"))
                        : (a("euswi.64.deb"),
                          a("euswi.64.rpm"),
                          a("euswi.64.tar"));
                      break;
                    case s.OS_NAME_ANDROID:
                      o.push(
                        n._getAndroidAppIntentURL(t, "EUSignWebInstall.apk")
                      );
                      break;
                    default:
                      return null;
                  }
                  return e ? o : o[0];
                }),
                (te.prototype.GetUpdateURL = function (e, t) {
                  var n = this,
                    r = n.m_browserInfo.GetOSName(),
                    i = n.m_browserInfo.GetArch(),
                    o = [];
                  t = t || "https://iit.com.ua/download/productfiles";
                  var a = function (e) {
                    o.push(t + "/" + e);
                  };
                  switch (r) {
                    case s.OS_NAME_WINDOWS:
                      a("EUSignWebUpdate.exe");
                      break;
                    case s.OS_NAME_MAC:
                      a("EUSignWebInstall.pkg");
                      break;
                    case s.OS_NAME_LINUX:
                      i == s.BROWSER_ARCH_NAME_X86
                        ? (a("euswi.deb"), a("euswi.rpm"), a("euswi.tar"))
                        : (a("euswi.64.deb"),
                          a("euswi.64.rpm"),
                          a("euswi.64.tar"));
                      break;
                    case s.OS_NAME_ANDROID:
                      o.push(
                        n._getAndroidAppIntentURL(t, "EUSignWebInstall.apk")
                      );
                      break;
                    default:
                      return null;
                  }
                  return e ? o : o[0];
                }),
                (te.prototype.GetHelpURL = function (e) {
                  switch (
                    ((e = e || "https://iit.com.ua/download/productfiles"),
                    this.m_browserInfo.GetOSName())
                  ) {
                    case s.OS_NAME_WINDOWS:
                    case s.OS_NAME_MAC:
                    case s.OS_NAME_LINUX:
                      return e + "/EUSignWebOManual.pdf";
                    default:
                      return null;
                  }
                }),
                (te.prototype.GetWebExtensionInstallURL = function () {
                  switch (this.m_browserInfo.GetName()) {
                    case s.BROWSER_NAME_CHROME:
                      return "https://chrome.google.com/webstore/detail/%D1%96%D1%96%D1%82-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87-%D1%86%D1%81%D0%BA-1-%D0%B1%D1%96%D0%B1%D0%BB/jffafkigfgmjafhpkoibhfefeaebmccg?utm_source=chrome-app-launcher-info-dialog";
                    case s.BROWSER_NAME_FIREFOX:
                      return "https://eu.iit.com.ua/download/productfiles/eusw@iit.com.ua.xpi";
                    case s.BROWSER_NAME_OPERA:
                      return "https://chrome.google.com/webstore/detail/%D1%96%D1%96%D1%82-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87-%D1%86%D1%81%D0%BA-1-%D0%B1%D1%96%D0%B1%D0%BB/jffafkigfgmjafhpkoibhfefeaebmccg?utm_source=chrome-app-launcher-info-dialog";
                    default:
                      return null;
                  }
                }),
                (te.prototype.GetInstallPath = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetInstallPath", n, e, t, null)
                  );
                }),
                (te.prototype.SelectFile = function (e, t, n, r) {
                  return this.SelectFileEx(e, t, null, null, null, null, n, r);
                }),
                (te.prototype.SelectFileEx = function (e, t, n, r, i, o, a, s) {
                  var u;
                  return (
                    (u = this._funcMakeParams([e, t, n, r, i, o])),
                    this._funcCall("SelectFile", u, a, s, null)
                  );
                }),
                (te.prototype.SelectFolder = function (e, t) {
                  return this.SelectFolderEx(null, null, null, e, t);
                }),
                (te.prototype.SelectFolderEx = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("SelectFolder", o, r, i, null)
                  );
                }),
                (te.prototype.CreateFolder = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("CreateFolder", r, t, n, null)
                  );
                }),
                (te.prototype.ReadFile = function (e, t, n) {
                  var r = this.IsAsync(t, n),
                    i = this,
                    o = i.EU_FILE_PROCESS_CHUNK_SIZE;
                  if (!r) {
                    for (
                      var a,
                        s = i.GetFileSize(e),
                        u = Math.floor(s / o),
                        l = s % o,
                        c = new Uint8Array(s),
                        p = 0;
                      p < u;
                      p++
                    )
                      (a = i.ReadFileWithOffset(e, p * o, o)),
                        c.set(a, p * o, a.length);
                    return (
                      0 != l &&
                        ((a = i.ReadFileWithOffset(e, u * o, l)),
                        c.set(a, u * o, a.length)),
                      c
                    );
                  }
                  var f = { buf: null, length: 0, curLength: 0 },
                    _ = function (r) {
                      if (r.curLength != r.length) {
                        var a = r.length - r.curLength;
                        a > o && (a = o),
                          i.ReadFileWithOffset(
                            e,
                            r.curLength,
                            a,
                            function (e) {
                              r.buf.set(e, r.curLength, e.length),
                                (r.curLength += e.length),
                                _(r);
                            },
                            n
                          );
                      } else t(r.buf);
                    };
                  i.GetFileSize(
                    e,
                    function (e) {
                      (f.buf = new Uint8Array(e)), (f.length = e), _(f);
                    },
                    n
                  );
                }),
                (te.prototype.WriteFile = function (e, t, n, r) {
                  var i = this.IsAsync(n, r),
                    o = this,
                    a = o.EU_FILE_PROCESS_CHUNK_SIZE;
                  if (i) {
                    var s = { buf: null, length: 0, curLength: 0 },
                      u = function (t, i) {
                        if (i || t.curLength != t.length) {
                          var s = t.length - t.curLength;
                          s > a && (s = a),
                            o.WriteFileWithOffset(
                              e,
                              t.curLength,
                              o.Copy(t.buf, t.curLength, a),
                              function () {
                                (t.curLength += s), u(t, !1);
                              },
                              r
                            );
                        } else n();
                      };
                    (s.buf = t), (s.length = t.length), u(s, !0);
                  } else {
                    for (
                      var l = t.length, c = Math.floor(l / a), p = l % a, f = 0;
                      f < c;
                      f++
                    )
                      o.WriteFileWithOffset(e, f * a, o.Copy(t, f * a, a));
                    (0 == p && 0 != t.length) ||
                      o.WriteFileWithOffset(e, c * a, o.Copy(t, c * a, p));
                  }
                }),
                (te.prototype.GetFileSize = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetFileSize", r, t, n, null)
                  );
                }),
                (te.prototype.ReadFileWithOffset = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("ReadFileWithOffset", o, r, i, null)
                  );
                }),
                (te.prototype.WriteFileWithOffset = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, new d(n)])),
                    this._funcCall("WriteFileWithOffset", o, r, i, null)
                  );
                }),
                (te.prototype.DeleteFile = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("DeleteFile", r, t, n, null);
                }),
                (te.prototype.AppendFile = function (e, t, n, r) {
                  var i;
                  (i = this._funcMakeParams([e, t])),
                    this._funcCall("AppendFile", i, n, r, null);
                }),
                (te.prototype.CopyFileWithOffset = function (e, t, n, r, i, o) {
                  var a;
                  (a = this._funcMakeParams([e, t, n, r])),
                    this._funcCall("CopyFileWithOffset", a, i, o, null);
                }),
                (te.prototype.Load = function (e, t) {
                  var n = this.IsAsync(e, t),
                    r = this;
                  if (n)
                    this.GetVersion(
                      function (n) {
                        if (r._checkVersion(n)) e();
                        else {
                          var i = r.MakeError(
                            Q.ERROR_LIBRARY_VERSION_NOT_SUPPORTED,
                            ""
                          );
                          t(i);
                        }
                      },
                      function (e) {
                        (e = r.MakeError(
                          Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                          ""
                        )),
                          t(e);
                      }
                    );
                  else {
                    var i;
                    try {
                      i = this._checkVersion(this.GetVersion());
                    } catch (e) {
                      this.RaiseError(Q.ERROR_LIBRARY_COMUNICATION_FAILED, "");
                    }
                    i ||
                      this.RaiseError(
                        Q.ERROR_LIBRARY_VERSION_NOT_SUPPORTED,
                        ""
                      );
                  }
                }),
                (te.prototype.GetVersion = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetVersion", n, e, t, null)
                  );
                }),
                (te.prototype.IsInitialized = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("IsInitialized", n, e, t, null)
                  );
                }),
                (te.prototype.Initialize = function (e, t) {
                  var n,
                    r = this,
                    i = this.IsAsync(e, t);
                  (n = this._funcMakeParams(null)),
                    this._funcCall(
                      "Initialize",
                      n,
                      i
                        ? function () {
                            r._startMonitorLibraryStatus(), e();
                          }
                        : e,
                      t,
                      null
                    ),
                    i || r._startMonitorLibraryStatus();
                }),
                (te.prototype.Finalize = function (e, t) {
                  var n;
                  this._stopMonitorLibraryStatus(),
                    (n = this._funcMakeParams(null)),
                    this._funcCall("Finalize", n, e, t, null);
                }),
                (te.prototype.ResetOperation = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("ResetOperation", n, e, t, null);
                }),
                (te.prototype.SetUIMode = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetUIMode", r, t, n, null);
                }),
                (te.prototype.SetLanguage = function (e, t, n) {
                  var r,
                    i = this,
                    o = this.IsAsync(t, n);
                  (r = this._funcMakeParams([e])),
                    this._funcCall(
                      "SetLanguage",
                      r,
                      o
                        ? function () {
                            (i.m_language = e), t();
                          }
                        : t,
                      n,
                      null
                    ),
                    o || (this.m_language = e);
                }),
                (te.prototype.SetCharset = function (e, t, n) {
                  var i,
                    o = this.IsAsync(t, n);
                  if (null == (i = r.GetCoder(e))) {
                    var a = this.MakeError(Q.ERROR_BAD_PARAMETER, "");
                    if (o)
                      return void setTimeout(function () {
                        n(a);
                      }, 1);
                    throw new ee(a.errorCode, a.message);
                  }
                  (this.m_stringCoder = i),
                    (this.m_charset = e),
                    o &&
                      setTimeout(function () {
                        t();
                      }, 1);
                }),
                (te.prototype.SetRuntimeParameter = function (e, t, n, r) {
                  var i;
                  "boolean" == typeof t && (t = t ? 1 : 0),
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("SetRuntimeParameter", i, n, r, null);
                }),
                (te.prototype.GetStorageParameter = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetStorageParameter", i, n, r, null)
                  );
                }),
                (te.prototype.SetStorageParameter = function (e, t, n, r, i) {
                  var o;
                  (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("SetStorageParameter", o, r, i, null);
                }),
                (te.prototype.CreateArrayList = function () {
                  return new f();
                }),
                (te.prototype.GetLastError = function () {
                  return this.m_lastError;
                }),
                (te.prototype.GetLastErrorCode = function () {
                  return this.m_lastErrorCode;
                }),
                (te.prototype.BASE64Encode = function (e, t, n) {
                  var r = this._base64Encode(e, n);
                  if (!this.IsAsync(t, n)) return r;
                  setTimeout(function () {
                    t(r);
                  }, 1);
                }),
                (te.prototype.BASE64Decode = function (e, t, n) {
                  var r = this._base64Decode(e, n);
                  if (!this.IsAsync(t, n)) return r;
                  setTimeout(function () {
                    t(r);
                  }, 1);
                }),
                (te.prototype.StringToBytes = function (e, t, n) {
                  var r = this._stringToBytes(e, n);
                  if (!this.IsAsync(t, n)) return r;
                  setTimeout(function () {
                    t(r);
                  }, 1);
                }),
                (te.prototype.BytesToString = function (e, t, n) {
                  var r = this._bytesToString(e, n);
                  if (!this.IsAsync(t, n)) return r;
                  setTimeout(function () {
                    t(r);
                  }, 1);
                }),
                (te.prototype.Concatenate = function (e, t) {
                  if (Array.isArray(e) && Array.isArray(t)) return e.concat(t);
                  var n,
                    r = e.length + t.length;
                  if (Array.isArray(e) || Array.isArray(t)) {
                    var i, o;
                    for (n = new Array(r), i = 0; i < e.length; i++)
                      n[i] = e[i];
                    for (o = 0; o < t.length; i++, o++) n[i] = t[o];
                  } else (n = new _(r)).set(e), n.set(t, e.length);
                  return n;
                }),
                (te.prototype.Copy = function (e, t, n) {
                  return e.slice(t, t + n);
                }),
                (te.prototype.SetSettings = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("SetSettings", n, e, t, null);
                }),
                (te.prototype.DoesNeedSetSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("DoesNeedSetSettings", n, e, t, null)
                  );
                }),
                (te.prototype.InitializeMandatorySettings = function (e, t) {
                  var n = this;
                  if (this.IsAsync(e, t))
                    a(function (e) {
                      var r = n.CreateFileStoreSettings();
                      n.SetFileStoreSettings(r, e, t);
                    })
                      .eu_wait(function (e) {
                        n.GetProxySettings(
                          function (t) {
                            e();
                          },
                          function (r) {
                            n.GetSystemProxySettings(
                              function (r) {
                                n.SetProxySettings(r, e, t);
                              },
                              function (r) {
                                var i = n.CreateProxySettings();
                                n.SetProxySettings(i, e, t);
                              }
                            );
                          }
                        );
                      })
                      .eu_wait(function (e) {
                        var r = n.CreateTSPSettings();
                        n.SetTSPSettings(r, e, t);
                      })
                      .eu_wait(function (e) {
                        var r = n.CreateLDAPSettings();
                        n.SetLDAPSettings(r, e, t);
                      })
                      .eu_wait(function () {
                        var r = n.CreateOCSPSettings();
                        n.SetOCSPSettings(r, e, t);
                      });
                  else {
                    var r,
                      i = n.CreateFileStoreSettings();
                    n.SetFileStoreSettings(i);
                    try {
                      r = n.GetProxySettings();
                    } catch (e) {
                      r = n.CreateProxySettings();
                      try {
                        r = n.GetSystemProxySettings();
                      } catch (e) {}
                      n.SetProxySettings(r);
                    }
                    var o = n.CreateTSPSettings();
                    n.SetTSPSettings(o);
                    var s = n.CreateLDAPSettings();
                    n.SetLDAPSettings(s);
                    var u = n.CreateOCSPSettings();
                    n.SetOCSPSettings(u);
                  }
                }),
                (te.prototype.CreateModeSettings = function () {
                  return new g();
                }),
                (te.prototype.GetModeSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetModeSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetModeSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetModeSettings", r, t, n, null);
                }),
                (te.prototype.CreateKeyMediaSettings = function () {
                  return new v();
                }),
                (te.prototype.GetKeyMediaSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetKeyMediaSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetKeyMediaSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetKeyMediaSettings", r, t, n, null);
                }),
                (te.prototype.CreateFileStoreSettings = function () {
                  return new y();
                }),
                (te.prototype.GetFileStoreSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetFileStoreSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetFileStoreSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetFileStoreSettings", r, t, n, null);
                }),
                (te.prototype.CreateProxySettings = function () {
                  return new C();
                }),
                (te.prototype.GetProxySettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetProxySettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetProxySettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetProxySettings", r, t, n, null);
                }),
                (te.prototype.CreateOCSPSettings = function () {
                  return new R();
                }),
                (te.prototype.GetOCSPSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetOCSPSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetOCSPSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetOCSPSettings", r, t, n, null);
                }),
                (te.prototype.CreateOCSPAccessInfoModeSettings = function () {
                  return new P();
                }),
                (te.prototype.GetOCSPAccessInfoModeSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall(
                      "GetOCSPAccessInfoModeSettings",
                      n,
                      e,
                      t,
                      null
                    )
                  );
                }),
                (te.prototype.SetOCSPAccessInfoModeSettings = function (
                  e,
                  t,
                  n
                ) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall(
                      "SetOCSPAccessInfoModeSettings",
                      r,
                      t,
                      n,
                      null
                    );
                }),
                (te.prototype.CreateOCSPAccessInfoSettings = function () {
                  return new I();
                }),
                (te.prototype.EnumOCSPAccessInfoSettings = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("EnumOCSPAccessInfoSettings", r, t, n, null)
                  );
                }),
                (te.prototype.GetOCSPAccessInfoSettings = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetOCSPAccessInfoSettings", r, t, n, null)
                  );
                }),
                (te.prototype.SetOCSPAccessInfoSettings = function (e, t, n) {
                  var r,
                    i = this,
                    o = i.IsAsync(t, n);
                  if (((e = Array.isArray(e) ? e : [e]), o)) {
                    var a = function (o) {
                      o >= e.length
                        ? t()
                        : ((r = i._funcMakeParams([e[o]])),
                          i._funcCall(
                            "SetOCSPAccessInfoSettings",
                            r,
                            function () {
                              a(o + 1);
                            },
                            n,
                            null
                          ));
                    };
                    a(0);
                  } else
                    for (var s = 0; s < e.length; s++)
                      (r = i._funcMakeParams([e[s]])),
                        i._funcCall("SetOCSPAccessInfoSettings", r, t, n, null);
                }),
                (te.prototype.DeleteOCSPAccessInfoSettings = function (
                  e,
                  t,
                  n
                ) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall(
                      "DeleteOCSPAccessInfoSettings",
                      r,
                      t,
                      n,
                      null
                    );
                }),
                (te.prototype.CreateTSPSettings = function () {
                  return new T();
                }),
                (te.prototype.GetTSPSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetTSPSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetTSPSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetTSPSettings", r, t, n, null);
                }),
                (te.prototype.CreateLDAPSettings = function () {
                  return new m();
                }),
                (te.prototype.GetLDAPSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetLDAPSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetLDAPSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetLDAPSettings", r, t, n, null);
                }),
                (te.prototype.CreateCMPSettings = function () {
                  return new A();
                }),
                (te.prototype.GetCMPSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetCMPSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetCMPSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetCMPSettings", r, t, n, null);
                }),
                (te.prototype.GetSystemProxySettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetSystemProxySettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetOCSPResponseExpireTime = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetOCSPResponseExpireTime", r, t, n, null);
                }),
                (te.prototype.CreateTSLSettings = function () {
                  return new U();
                }),
                (te.prototype.GetTSLSettings = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetTSLSettings", n, e, t, null)
                  );
                }),
                (te.prototype.SetTSLSettings = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SetTSLSettings", r, t, n, null);
                }),
                (te.prototype.RefreshFileStore = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("RefreshFileStore", r, t, n, null);
                }),
                (te.prototype.ShowCertificates = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("ShowCertificates", n, e, t, null);
                }),
                (te.prototype.SelectCertificateInfo = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("SelectCertificateInfo", n, e, t, null)
                  );
                }),
                (te.prototype.GetCertificatesCount = function (e, t, n, r) {
                  var i;
                  return (
                    ("number" == typeof e && "number" == typeof t) ||
                      ((n = e),
                      (r = t),
                      (e = this.SUBJECT_TYPE_UNDIFFERENCED),
                      (t = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED)),
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetCertificatesCount", i, n, r, null)
                  );
                }),
                (te.prototype.GetCACertificatesCount = function (e, t) {
                  return this.GetCertificatesCount(
                    this.SUBJECT_TYPE_CA,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    e,
                    t
                  );
                }),
                (te.prototype.GetCAServerCertificatesCount = function (e, t) {
                  return this.GetCertificatesCount(
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    e,
                    t
                  );
                }),
                (te.prototype.GetCMPServerCertificatesCount = function (e, t) {
                  return this.GetCertificatesCount(
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_CMP,
                    e,
                    t
                  );
                }),
                (te.prototype.GetOCSPServerCertificatesCount = function (e, t) {
                  return this.GetCertificatesCount(
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP,
                    e,
                    t
                  );
                }),
                (te.prototype.GetTSPServerCertificatesCount = function (e, t) {
                  return this.GetCertificatesCount(
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_TSP,
                    e,
                    t
                  );
                }),
                (te.prototype.GetRAAdministratorCertificatesCount = function (
                  e,
                  t
                ) {
                  return this.GetCertificatesCount(
                    this.SUBJECT_TYPE_RA_ADMINISTRATOR,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    e,
                    t
                  );
                }),
                (te.prototype.GetEndUserCertificatesCount = function (e, t) {
                  return this.GetCertificatesCount(
                    this.SUBJECT_TYPE_END_USER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    e,
                    t
                  );
                }),
                (te.prototype.EnumCertificates = function (e, t, n, r, i) {
                  var o;
                  return (
                    ("number" == typeof t && "number" == typeof n) ||
                      ((r = t),
                      (i = n),
                      (n = e),
                      (e = this.SUBJECT_TYPE_UNDIFFERENCED),
                      (t = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED)),
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("EnumCertificates", o, r, i, null)
                  );
                }),
                (te.prototype.EnumCACertificates = function (e, t, n) {
                  return this.EnumCertificates(
                    e,
                    this.SUBJECT_TYPE_CA,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    t,
                    n
                  );
                }),
                (te.prototype.EnumCAServerCertificates = function (e, t, n) {
                  return this.EnumCertificates(
                    e,
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    t,
                    n
                  );
                }),
                (te.prototype.EnumCMPServerCertificatesCount = function (
                  e,
                  t,
                  n
                ) {
                  return this.EnumCertificates(
                    e,
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_CMP,
                    t,
                    n
                  );
                }),
                (te.prototype.EnumOCSPServerCertificatesCount = function (
                  e,
                  t,
                  n
                ) {
                  return this.EnumCertificates(
                    e,
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP,
                    t,
                    n
                  );
                }),
                (te.prototype.EnumTSPServerCertificatesCount = function (
                  e,
                  t,
                  n
                ) {
                  return this.EnumCertificates(
                    e,
                    this.SUBJECT_TYPE_CA_SERVER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_TSP,
                    t,
                    n
                  );
                }),
                (te.prototype.EnumRAAdministratorCertificatesCount = function (
                  e,
                  t,
                  n
                ) {
                  return this.EnumCertificates(
                    e,
                    this.SUBJECT_TYPE_RA_ADMINISTRATOR,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    t,
                    n
                  );
                }),
                (te.prototype.EnumEndUserCertificatesCount = function (
                  e,
                  t,
                  n
                ) {
                  return this.EnumCertificates(
                    e,
                    this.SUBJECT_TYPE_END_USER,
                    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED,
                    t,
                    n
                  );
                }),
                (te.prototype.GetCertificateInfo = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetCertificateInfo", i, n, r, null)
                  );
                }),
                (te.prototype.GetCertificateInfoEx = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetCertificateInfoEx", i, n, r, null)
                  );
                }),
                (te.prototype.GetCertificate = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetCertificate", i, n, r, null)
                  );
                }),
                (te.prototype.CheckCertificateByIssuerAndSerial = function (
                  e,
                  t,
                  n,
                  r
                ) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall(
                      "CheckCertificateByIssuerAndSerial",
                      i,
                      n,
                      r,
                      null
                    )
                  );
                }),
                (te.prototype.CheckCertificate = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("CheckCertificate", r, t, n, null)
                  );
                }),
                (te.prototype.ParseCertificate = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("ParseCertificate", r, t, n, null)
                  );
                }),
                (te.prototype.ParseCertificateEx = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("ParseCertificateEx", r, t, n, null)
                  );
                }),
                (te.prototype.SaveCertificate = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("SaveCertificate", r, t, n, null)
                  );
                }),
                (te.prototype.SaveCertificates = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("SaveCertificates", r, t, n, null)
                  );
                }),
                (te.prototype.SaveCertificatesEx = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([new d(e), t ? new d(t) : null])),
                    this._funcCall("SaveCertificatesEx", i, n, r, null)
                  );
                }),
                (te.prototype.GetCertificatesFromLDAPByEDRPOUCode = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  return (
                    null != r && null != i
                      ? ("EndUserArrayList" == r.className && (r = r.m_array),
                        "EndUserArrayList" == i.className && (i = i.m_array))
                      : ((r = null), (i = null)),
                    (s = this._funcMakeParams([e, t, n, r, i])),
                    this._funcCall(
                      "GetCertificatesFromLDAPByEDRPOUCode",
                      s,
                      o,
                      a,
                      null
                    )
                  );
                }),
                (te.prototype.GetCertificateByEmail = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  return (
                    "string" != typeof r && (r = this.m_dateCoder.encode(r)),
                    (a = this._funcMakeParams([e, t, n, r])),
                    this._funcCall("GetCertificateByEmail", a, i, o, null)
                  );
                }),
                (te.prototype.GetCertificateByNBUCode = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  return (
                    "string" != typeof r && (r = this.m_dateCoder.encode(r)),
                    (a = this._funcMakeParams([e, t, n, r])),
                    this._funcCall("GetCertificateByNBUCode", a, i, o, null)
                  );
                }),
                (te.prototype.GetReceiversCertificates = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetReceiversCertificates", n, e, t, null)
                  );
                }),
                (te.prototype.GetReceiversCertificatesInArrayList = function (
                  e,
                  t
                ) {
                  var n,
                    r = this;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall(
                      "GetReceiversCertificates",
                      n,
                      e,
                      t,
                      function (e, t, n) {
                        var i = r.IsAsync(t, n);
                        try {
                          for (var o = new f(), a = 0; a < e.length; a++)
                            o.add(e[a]);
                          if (!i) return o;
                          t(o);
                        } catch (e) {
                          var s = r.MakeError(
                            Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                            ""
                          );
                          if (i) return void n(s);
                          throw new ee(s.errorCode, s.message);
                        }
                      }
                    )
                  );
                }),
                (te.prototype.GetCertificates = function (e, t, n, r) {
                  var i,
                    o = this;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall(
                      "GetCertificates",
                      i,
                      n,
                      r,
                      function (e, t, n) {
                        var r = o.IsAsync(t, n);
                        try {
                          for (var i = new f(), a = 0; a < e.length; a++)
                            i.add(e[a]);
                          if (!r) return i;
                          t(i);
                        } catch (e) {
                          var s = o.MakeError(
                            Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                            ""
                          );
                          if (r) return void n(s);
                          throw new ee(s.errorCode, s.message);
                        }
                      }
                    )
                  );
                }),
                (te.prototype.GetCertificateByFingerprint = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetCertificateByFingerprint", r, t, n, null)
                  );
                }),
                (te.prototype.GetCertificatesByEDRPOUAndDRFOCode = function (
                  e,
                  t,
                  n,
                  r
                ) {
                  var i,
                    o = this;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall(
                      "GetCertificatesByEDRPOUAndDRFOCode",
                      i,
                      n,
                      r,
                      function (e, t, n) {
                        var r = o.IsAsync(t, n);
                        try {
                          for (var i = new f(), a = 0; a < e.length; a++)
                            i.add(e[a]);
                          if (!r) return i;
                          t(i);
                        } catch (e) {
                          var s = o.MakeError(
                            Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                            ""
                          );
                          if (r) return void n(s);
                          throw new ee(s.errorCode, s.message);
                        }
                      }
                    )
                  );
                }),
                (te.prototype.ShowCRLs = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("ShowCRLs", n, e, t, null);
                }),
                (te.prototype.GetCRLsCount = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetCRLsCount", n, e, t, null)
                  );
                }),
                (te.prototype.EnumCRLs = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("EnumCRLs", r, t, n, null)
                  );
                }),
                (te.prototype.GetCRLDetailedInfo = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, parseInt(t)])),
                    this._funcCall("GetCRLDetailedInfo", i, n, r, null)
                  );
                }),
                (te.prototype.SaveCRL = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, new d(t)])),
                    this._funcCall("SaveCRL", i, n, r, null)
                  );
                }),
                (te.prototype.GetTSPByAccessInfo = function (e, t, n, r, i, o) {
                  var a;
                  if (
                    "string" == typeof t ||
                    null != (t = this._base64Encode(t, o))
                  )
                    return (
                      (a = this._funcMakeParams([e, t, n, r])),
                      this._funcCall("GetTSPByAccessInfo", a, i, o, null)
                    );
                }),
                (te.prototype.CheckTSP = function (e, t, n, r, i) {
                  var o;
                  ("string" == typeof e &&
                    null == (e = this._base64Decode(e, i))) ||
                    (null != n &&
                      "string" != typeof n &&
                      null == (n = this._base64Encode(n, i))) ||
                    ((o = this._funcMakeParams([new d(e), t, n])),
                    this._funcCall("CheckTSP", o, r, i, null));
                }),
                (te.prototype.GetOCSPResponseByAccessInfo = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o;
                  return (
                    (o = this._funcMakeParams([new d(e), t, n])),
                    this._funcCall("GetOCSPResponseByAccessInfo", o, r, i, null)
                  );
                }),
                (te.prototype.CheckOCSPResponse = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, r))
                  )
                    return (
                      null != t &&
                        "string" != typeof t &&
                        (t = this.m_dateCoder.encode(t)),
                      (i = this._funcMakeParams([new d(e), t])),
                      this._funcCall("CheckOCSPResponse", i, n, r, null)
                    );
                }),
                (te.prototype.CreateKeyMedia = function () {
                  return new S();
                }),
                (te.prototype.GetPrivateKeyMedia = function (e, t, n) {
                  var r;
                  return (
                    "string" != typeof e && (e = null),
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetPrivateKeyMedia", r, t, n, null)
                  );
                }),
                (te.prototype.EnumKeyMediaTypes = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("EnumKeyMediaTypes", r, t, n, null)
                  );
                }),
                (te.prototype.EnumKeyMediaDevices = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("EnumKeyMediaDevices", i, n, r, null)
                  );
                }),
                (te.prototype.GetKeyMediaTypes = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetKeyMediaTypes", n, e, t, null)
                  );
                }),
                (te.prototype.GetKeyMediaDevices = function (e, t, n) {
                  var r;
                  return (
                    "number" == typeof e && (e = [e]),
                    e && (e = new d(e)),
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetKeyMediaDevices", r, t, n, null)
                  );
                }),
                (te.prototype.IsPrivateKeyReaded = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("IsPrivateKeyReaded", n, e, t, null)
                  );
                }),
                (te.prototype.ReadPrivateKey = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("ReadPrivateKey", n, e, t, null);
                }),
                (te.prototype.ReadPrivateKeySilently = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o, a;
                  "number" == typeof e
                    ? (((a = new S()).typeIndex = e),
                      (a.devIndex = t),
                      (a.password = n))
                    : ((a = e), (r = t), (i = n)),
                    (o = this._funcMakeParams([a])),
                    this._funcCall("ReadPrivateKeySilently", o, r, i, null);
                }),
                (te.prototype.ReadPrivateKeyBinary = function (e, t, n, r) {
                  var i;
                  (i = this._funcMakeParams([new d(e), t])),
                    this._funcCall("ReadPrivateKeyBinary", i, n, r, null);
                }),
                (te.prototype.ReadPrivateKeyFile = function (e, t, n, r) {
                  var i;
                  (i = this._funcMakeParams([e, t])),
                    this._funcCall("ReadPrivateKeyFile", i, n, r, null);
                }),
                (te.prototype.CtxReadPrivateKey = function (e, t, n, r, i, o) {
                  var a, s;
                  return (
                    "number" == typeof t
                      ? (((s = new S()).typeIndex = t),
                        (s.devIndex = n),
                        (s.password = r))
                      : ((s = t), (i = n), (o = r)),
                    (a = this._funcMakeParams([e, s])),
                    this._funcCall("CtxReadPrivateKey", a, i, o, null)
                  );
                }),
                (te.prototype.CtxReadPrivateKeyBinary = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, new d(t), n])),
                    this._funcCall("CtxReadPrivateKeyBinary", o, r, i, null)
                  );
                }),
                (te.prototype.ResetPrivateKey = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("ResetPrivateKey", n, e, t, null);
                }),
                (te.prototype.CtxFreePrivateKey = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("CtxFreePrivateKey", r, t, n, null);
                }),
                (te.prototype.ShowOwnCertificate = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("ShowOwnCertificate", n, e, t, null);
                }),
                (te.prototype.GetOwnCertificate = function (e, t, n, r) {
                  var i;
                  return (
                    ("number" == typeof e && "number" == typeof t) ||
                      ((n = e), (r = t), (e = null), (t = null)),
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetOwnCertificate", i, n, r, null)
                  );
                }),
                (te.prototype.EnumOwnCertificates = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("EnumOwnCertificates", r, t, n, null)
                  );
                }),
                (te.prototype.GetPrivateKeyOwnerInfo = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetPrivateKeyOwnerInfo", n, e, t, null)
                  );
                }),
                (te.prototype.CtxEnumOwnCertificates = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("CtxEnumOwnCertificates", i, n, r, null)
                  );
                }),
                (te.prototype.CtxGetOwnCertificate = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("CtxGetOwnCertificate", o, r, i, null)
                  );
                }),
                (te.prototype.GetKeyInfo = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetKeyInfo", r, t, n, null)
                  );
                }),
                (te.prototype.GetKeyInfoSilently = function (e, t, n, r, i) {
                  var o;
                  return (
                    ((o = new S()).typeIndex = e),
                    (o.devIndex = t),
                    (o.password = n),
                    this.GetKeyInfo(o, r, i)
                  );
                }),
                (te.prototype.GetKeyInfoBinary = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([new d(e), t])),
                    this._funcCall("GetKeyInfoBinary", i, n, r, null)
                  );
                }),
                (te.prototype.GetKeyInfoFile = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetKeyInfoFile", i, n, r, null)
                  );
                }),
                (te.prototype.GetCertificateByKeyInfo = function (e, t, n, r) {
                  var i,
                    o = [];
                  return (
                    ("number" == typeof e && "number" == typeof t) ||
                      ((r = n), (n = t)),
                    "number" == typeof e && "number" == typeof t
                      ? (o.push(e), o.push(t), o.push(null))
                      : (o.push(null), o.push(null), o.push(new d(e))),
                    (i = this._funcMakeParams(o)),
                    this._funcCall("GetCertificateByKeyInfo", i, n, r, null)
                  );
                }),
                (te.prototype.GetCertificatesByKeyInfo = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o;
                  return (
                    "EndUserPrivateKeyInfo" == e.className &&
                      (e = e.GetPrivateKeyInfo()),
                    null != t && null != n
                      ? ("EndUserArrayList" == t.className && (t = t.m_array),
                        "EndUserArrayList" == n.className && (n = n.m_array))
                      : ((t = null), (n = null)),
                    (o = this._funcMakeParams([new d(e), t, n])),
                    this._funcCall("GetCertificatesByKeyInfo", o, r, i, null)
                  );
                }),
                (te.prototype.ChangeSoftwarePrivateKeyPassword = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o;
                  return (
                    (o = this._funcMakeParams([new d(e), t, n])),
                    this._funcCall(
                      "ChangeSoftwarePrivateKeyPassword",
                      o,
                      r,
                      i,
                      null
                    )
                  );
                }),
                (te.prototype.EnumJKSPrivateKeys = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([new d(e), t])),
                    this._funcCall("EnumJKSPrivateKeys", i, n, r, null)
                  );
                }),
                (te.prototype.EnumJKSPrivateKeysFile = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("EnumJKSPrivateKeysFile", i, n, r, null)
                  );
                }),
                (te.prototype.GetJKSPrivateKey = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([new d(e), t])),
                    this._funcCall("GetJKSPrivateKey", i, n, r, null)
                  );
                }),
                (te.prototype.GetJKSPrivateKeyFile = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetJKSPrivateKeyFile", i, n, r, null)
                  );
                }),
                (te.prototype.CreatePrivateKeyInfo = function () {
                  return new L();
                }),
                (te.prototype.CreateEndUserInfo = function () {
                  return new x();
                }),
                (te.prototype._generatePrivateKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p,
                  f,
                  _,
                  E,
                  h
                ) {
                  if (!this.IsAsync(E, h))
                    return this.GeneratePrivateKeyEx(
                      e,
                      t,
                      n,
                      r,
                      !1,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      c,
                      p,
                      null,
                      null,
                      f,
                      _,
                      E,
                      h
                    ).m_array;
                  this.GeneratePrivateKeyEx(
                    e,
                    t,
                    n,
                    r,
                    !1,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    p,
                    null,
                    null,
                    f,
                    _,
                    function (e) {
                      E(e.m_array);
                    },
                    h
                  );
                }),
                (te.prototype.GeneratePrivateKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p,
                  f,
                  _,
                  E,
                  h
                ) {
                  if ("boolean" == typeof e)
                    return this._generatePrivateKeyEx(
                      e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      c,
                      p,
                      f,
                      _,
                      E,
                      h
                    );
                  if ("boolean" == typeof n)
                    return this._generatePrivateKey(
                      !0,
                      0,
                      0,
                      "",
                      e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      null,
                      !1,
                      u,
                      l
                    );
                  if ("string" == typeof n)
                    return this._generatePrivateKey(
                      !1,
                      e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      c,
                      null,
                      !1,
                      p,
                      f
                    );
                  if ("number" == typeof n)
                    return this._generatePrivateKey(
                      !1,
                      0,
                      0,
                      e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      !0,
                      c,
                      p
                    );
                  var d = this.MakeError(Q.ERROR_BAD_PARAMETER, "");
                  throw new ee(d.errorCode, d.message);
                }),
                (te.prototype._generatePrivateKeyEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p,
                  _,
                  E,
                  h,
                  d,
                  y,
                  C,
                  T
                ) {
                  var R,
                    m,
                    A = this;
                  return (
                    e
                      ? (m = null)
                      : (((m = new S()).typeIndex = t),
                        (m.devIndex = n),
                        (m.password = "string" != typeof r ? "" : r)),
                    null == d && (y = !1),
                    (R = this._funcMakeParams([
                      e,
                      m,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      c,
                      p,
                      _,
                      E,
                      h,
                      null != d,
                      y,
                    ])),
                    this._funcCall(
                      "GeneratePrivateKeyEx",
                      R,
                      C,
                      T,
                      function (e, t, n) {
                        var r = A.IsAsync(t, n);
                        try {
                          for (
                            var i = e[0], o = new f(), a = 0;
                            a < i.length;
                            a++
                          )
                            o.add(i[a]);
                          if ((null != d && d.set(e[1]), !r)) return o;
                          t(o);
                        } catch (e) {
                          var s = A.MakeError(
                            Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                            ""
                          );
                          if (r) return void n(s);
                          throw new ee(s.errorCode, s.message);
                        }
                      }
                    )
                  );
                }),
                (te.prototype.GeneratePrivateKeyEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p,
                  f,
                  _,
                  E,
                  h,
                  d,
                  S,
                  y
                ) {
                  if ("boolean" == typeof e)
                    return "boolean" == typeof i
                      ? this._generatePrivateKeyEx(
                          e,
                          t,
                          n,
                          r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l,
                          c,
                          p,
                          f,
                          _,
                          E,
                          h,
                          d,
                          S,
                          y
                        )
                      : this._generatePrivateKeyEx(
                          e,
                          t,
                          n,
                          r,
                          !1,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l,
                          c,
                          p,
                          null,
                          null,
                          f,
                          _,
                          E,
                          h
                        );
                  if ("boolean" == typeof n)
                    return (void 0 !== l && null == l) || "string" == typeof l
                      ? this._generatePrivateKeyEx(
                          !0,
                          0,
                          0,
                          "",
                          !1,
                          e,
                          t,
                          n,
                          r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l,
                          null,
                          !1,
                          c,
                          p
                        )
                      : this._generatePrivateKeyEx(
                          !0,
                          0,
                          0,
                          "",
                          !1,
                          e,
                          t,
                          n,
                          r,
                          i,
                          o,
                          a,
                          s,
                          null,
                          null,
                          null,
                          !1,
                          u,
                          l
                        );
                  if ("number" == typeof e)
                    return "boolean" == typeof r
                      ? this._generatePrivateKeyEx(
                          !1,
                          e,
                          t,
                          n,
                          r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l,
                          c,
                          p,
                          f,
                          _,
                          null,
                          !1,
                          E,
                          h
                        )
                      : this._generatePrivateKeyEx(
                          !1,
                          e,
                          t,
                          n,
                          !1,
                          r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l,
                          c,
                          null,
                          null,
                          null,
                          !1,
                          p,
                          f
                        );
                  if ("string" == typeof e)
                    return (void 0 !== c && null == c) || "string" == typeof c
                      ? this._generatePrivateKeyEx(
                          !1,
                          0,
                          0,
                          e,
                          !1,
                          t,
                          n,
                          r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l,
                          c,
                          p,
                          !0,
                          f,
                          _
                        )
                      : this._generatePrivateKeyEx(
                          !1,
                          0,
                          0,
                          e,
                          !1,
                          t,
                          n,
                          r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          null,
                          null,
                          l,
                          !0,
                          c,
                          p
                        );
                  var C = this.MakeError(Q.ERROR_BAD_PARAMETER, "");
                  throw new ee(C.errorCode, C.message);
                }),
                (te.prototype.GetCRInfo = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([new d(e), t, n])),
                    this._funcCall("GetCRInfo", o, r, i, null)
                  );
                }),
                (te.prototype.IsHardwareKeyMedia = function (e, t, n, r, i) {
                  var o, a;
                  return (
                    "number" == typeof e
                      ? (((a = new S()).typeIndex = e),
                        (a.devIndex = t),
                        (a.password = n))
                      : ((a = null), (r = e), (i = t)),
                    (o = this._funcMakeParams([a])),
                    this._funcCall("IsHardwareKeyMedia", o, r, i, null)
                  );
                }),
                (te.prototype.IsPrivateKeyExists = function (e, t, n, r, i) {
                  var o, a;
                  return (
                    "number" == typeof e
                      ? (((a = new S()).typeIndex = e),
                        (a.devIndex = t),
                        (a.password = n))
                      : ((a = null), (r = e), (i = t)),
                    (o = this._funcMakeParams([a])),
                    this._funcCall("IsPrivateKeyExists", o, r, i, null)
                  );
                }),
                (te.prototype.ChangePrivateKeyPassword = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a, s;
                  "number" == typeof e
                    ? (((s = new S()).typeIndex = e),
                      (s.devIndex = t),
                      (s.password = n))
                    : ((s = null), (r = null), (i = e), (o = t)),
                    (a = this._funcMakeParams([s, r])),
                    this._funcCall("ChangePrivateKeyPassword", a, i, o, null);
                }),
                (te.prototype.BackupPrivateKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u, l, c;
                  "number" == typeof e
                    ? (((l = new S()).typeIndex = e),
                      (l.devIndex = t),
                      (l.password = n),
                      ((c = new S()).typeIndex = r),
                      (c.devIndex = i),
                      (c.password = o))
                    : ((l = null), (c = null), (a = e), (s = t)),
                    (u = this._funcMakeParams([l, c])),
                    this._funcCall("BackupPrivateKey", u, a, s, null);
                }),
                (te.prototype.DestroyPrivateKey = function (e, t, n, r, i) {
                  var o, a;
                  "number" == typeof e
                    ? (((a = new S()).typeIndex = e),
                      (a.devIndex = t),
                      (a.password = n))
                    : ((a = null), (r = e), (i = t)),
                    (o = this._funcMakeParams([a])),
                    this._funcCall("DestroyPrivateKey", o, r, i, null);
                }),
                (te.prototype.SetKeyMediaPassword = function (e, t, n, r, i) {
                  var o, a;
                  "number" == typeof e
                    ? (((a = new S()).typeIndex = e),
                      (a.devIndex = t),
                      (a.password = n))
                    : ((a = null), (r = e), (i = t)),
                    (o = this._funcMakeParams([a])),
                    this._funcCall("SetKeyMediaPassword", o, r, i, null);
                }),
                (te.prototype.SetKeyMediaUserPassword = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a, s;
                  "number" == typeof t
                    ? (((s = new S()).typeIndex = t),
                      (s.devIndex = n),
                      (s.password = r))
                    : ((s = null), (i = t), (o = n)),
                    (a = this._funcMakeParams([e, s])),
                    this._funcCall("SetKeyMediaUserPassword", a, i, o, null);
                }),
                (te.prototype.ChangeOwnCertificatesStatus = function (
                  e,
                  t,
                  n,
                  r
                ) {
                  var i;
                  (i = this._funcMakeParams([e, t])),
                    this._funcCall(
                      "ChangeOwnCertificatesStatus",
                      i,
                      n,
                      r,
                      null
                    );
                }),
                (te.prototype.CtxChangeOwnCertificatesStatus = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o;
                  (o = this._funcMakeParams([e, t, n])),
                    this._funcCall(
                      "CtxChangeOwnCertificatesStatus",
                      o,
                      r,
                      i,
                      null
                    );
                }),
                (te.prototype.MakeNewCertificate = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p,
                  f,
                  _,
                  E
                ) {
                  var h;
                  return (
                    null != t && (t = new d(t)),
                    (h = this._funcMakeParams([
                      e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      c,
                      p,
                      f,
                    ])),
                    this._funcCall("MakeNewCertificate", h, _, E, null)
                  );
                }),
                (te.prototype.MakeNewOwnCertificate = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l
                ) {
                  var c;
                  return (
                    (c = this._funcMakeParams([e, t, n, r, i, o, a, s])),
                    this._funcCall("MakeNewOwnCertificate", c, u, l, null)
                  );
                }),
                (te.prototype.CtxMakeNewOwnCertificate = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c
                ) {
                  var p;
                  return (
                    (p = this._funcMakeParams([e, t, n, r, i, o, a, s, u])),
                    this._funcCall("CtxMakeNewOwnCertificate", p, l, c, null)
                  );
                }),
                (te.prototype.CtxMakeDeviceCertificate = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l
                ) {
                  var c;
                  return (
                    null != n && (n = new d(n)),
                    null != r && (r = new d(r)),
                    null != i && (i = new d(i)),
                    null != o && (o = new d(o)),
                    (c = this._funcMakeParams([e, t, n, r, i, o, a, s])),
                    this._funcCall("CtxMakeDeviceCertificate", c, u, l, null)
                  );
                }),
                (te.prototype.GetOwnEUserParams = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetOwnEUserParams", n, e, t, null)
                  );
                }),
                (te.prototype.ModifyOwnEUserParams = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("ModifyOwnEUserParams", i, n, r, null)
                  );
                }),
                (te.prototype.CtxGetOwnEUserParams = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("CtxGetOwnEUserParams", r, t, n, null)
                  );
                }),
                (te.prototype.CtxModifyOwnEUserParams = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("CtxModifyOwnEUserParams", o, r, i, null)
                  );
                }),
                (te.prototype.Hash = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._stringToBytes(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("Hash", r, t, n, null)
                    );
                }),
                (te.prototype.ContinueHash = function (e, t, n, r, i) {
                  var o;
                  ("number" == typeof t && "number" == typeof n) ||
                    ((r = t), (i = n)),
                    ("string" == typeof e &&
                      null == (e = this._stringToBytes(e, i))) ||
                      ("number" == typeof t &&
                        "number" == typeof n &&
                        (e = e.slice(t, t + n)),
                      (o = this._funcMakeParams([new d(e)])),
                      this._funcCall("ContinueHash", o, r, i, null));
                }),
                (te.prototype.EndHash = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("EndHash", n, e, t, null)
                  );
                }),
                (te.prototype.HashWithParams = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._stringToBytes(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([new d(e), new d(t)])),
                      this._funcCall("HashWithParams", i, n, r, null)
                    );
                }),
                (te.prototype.HashBeginWithParams = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("HashBeginWithParams", r, t, n, null);
                }),
                (te.prototype.HashFile = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("HashFile", r, t, n, null)
                  );
                }),
                (te.prototype.HashFileWithParams = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([new d(e), t])),
                    this._funcCall("HashFileWithParams", i, n, r, null)
                  );
                }),
                (te.prototype.CtxHash = function (e, t, n, r, i, o) {
                  var s = this,
                    u = this.IsAsync(i, o),
                    l = s.EU_FILE_PROCESS_CHUNK_SIZE;
                  if (
                    "string" != typeof r ||
                    null != (r = this._stringToBytes(r, o))
                  )
                    if (u) {
                      var c = { hashContext: null, hash: null },
                        p = function (e) {
                          null == c.hashContext
                            ? o(e)
                            : s.CtxHashFree(
                                c.hashContext,
                                function () {
                                  o(e);
                                },
                                function () {
                                  o(e);
                                }
                              );
                        };
                      a(function (r) {
                        s.CtxHashBegin(e, t, n, r, p);
                      })
                        .eu_wait(function (e, t) {
                          c.hashContext = t;
                          var n = function (i) {
                            if (i >= r.length) s.CtxHashEnd(t, e, p);
                            else {
                              var o = r.length - i;
                              o > l && (o = l);
                              var a = r.slice(i, i + o);
                              s.CtxHashContinue(
                                t,
                                a,
                                function () {
                                  n(i + o);
                                },
                                p
                              );
                            }
                          };
                          n(0);
                        })
                        .eu_wait(function (e, t) {
                          (c.hash = t), s.CtxHashFree(c.hashContext, e, o);
                        })
                        .eu_wait(function () {
                          i(c.hash);
                        });
                    } else {
                      var f = null;
                      try {
                        var _,
                          E = 0;
                        for (f = s.CtxHashBegin(e, t, n); ; ) {
                          var h = r.length - E;
                          h > l && (h = l);
                          var d = r.slice(E, E + h);
                          if ((s.CtxHashContinue(f, d), !((E += h) < r.length)))
                            break;
                        }
                        return (
                          (_ = s.CtxHashEnd(f)), s.CtxHashFree(f), (f = null), _
                        );
                      } catch (e) {
                        throw (null != f && s.CtxHashFree(f), e);
                      }
                    }
                }),
                (te.prototype.CtxHashBegin = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, n ? new d(n) : null])),
                    this._funcCall("CtxHashBegin", o, r, i, null)
                  );
                }),
                (te.prototype.CtxHashContinue = function (e, t, n, r) {
                  var i;
                  (i = this._funcMakeParams([e, new d(t)])),
                    this._funcCall("CtxHashContinue", i, n, r, null);
                }),
                (te.prototype.CtxHashEnd = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("CtxHashEnd", r, t, n, null)
                  );
                }),
                (te.prototype.CtxHashFree = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("CtxHashFree", r, t, n, null);
                }),
                (te.prototype.ShowSignInfo = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("ShowSignInfo", r, t, n, null);
                }),
                (te.prototype.IsSigned = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("IsSigned", r, t, n, null)
                  );
                }),
                (te.prototype.IsSignedFile = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("IsSignedFile", r, t, n, null)
                  );
                }),
                (te.prototype.GetSignType = function (e, t, n, r) {
                  var i;
                  if (
                    "string" == typeof t ||
                    null != (t = this._base64Encode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, t])),
                      this._funcCall("GetSignType", i, n, r, null)
                    );
                }),
                (te.prototype.GetFileSignType = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetFileSignType", i, n, r, null)
                  );
                }),
                (te.prototype.GetSignsCount = function (e, t, n) {
                  var r;
                  if (
                    "string" == typeof e ||
                    null != (e = this._base64Encode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([e])),
                      this._funcCall("GetSignsCount", r, t, n, null)
                    );
                }),
                (te.prototype.GetSignerInfo = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetSignerInfo", i, n, r, null)
                  );
                }),
                (te.prototype.GetSignerCertificate = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetSignerCertificate", i, n, r, null)
                  );
                }),
                (te.prototype.GetFileSignsCount = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetFileSignsCount", r, t, n, null)
                  );
                }),
                (te.prototype.GetFileSignerInfo = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetFileSignerInfo", i, n, r, null)
                  );
                }),
                (te.prototype.GetFileSignerCertificate = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetFileSignerCertificate", i, n, r, null)
                  );
                }),
                (te.prototype.CtxGetSignerInfo = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" == typeof n ||
                    null != (n = this._base64Encode(n, i))
                  )
                    return (
                      (o = this._funcMakeParams([e, t, n])),
                      this._funcCall("CtxGetSignerInfo", o, r, i, null)
                    );
                }),
                (te.prototype.Sign = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._stringToBytes(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("Sign", r, t, n, null)
                    );
                }),
                (te.prototype.Verify = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  if (
                    ("boolean" != typeof n && ((i = r), (r = n)),
                    "string" != typeof t ||
                      null != (t = this._stringToBytes(t, i)))
                  )
                    return (
                      a.push(e),
                      a.push(new d(t)),
                      "boolean" == typeof n ? a.push(n) : a.push(null),
                      (o = this._funcMakeParams(a)),
                      this._funcCall("Verify", o, r, i, null)
                    );
                }),
                (te.prototype.ContinueSign = function (e, t, n, r, i) {
                  var o;
                  ("number" == typeof t && "number" == typeof n) ||
                    ((r = t), (i = n)),
                    ("string" == typeof e &&
                      null == (e = this._stringToBytes(e, i))) ||
                      ("number" == typeof t &&
                        "number" == typeof n &&
                        (e = e.slice(t, t + n)),
                      (o = this._funcMakeParams([new d(e)])),
                      this._funcCall("ContinueSign", o, r, i, null));
                }),
                (te.prototype.EndSign = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("EndSign", n, e, t, null)
                  );
                }),
                (te.prototype.BeginVerify = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("BeginVerify", r, t, n, null);
                }),
                (te.prototype.ContinueVerify = function (e, t, n, r, i) {
                  var o;
                  ("number" == typeof t && "number" == typeof n) ||
                    ((r = t), (i = n)),
                    ("string" == typeof e &&
                      null == (e = this._stringToBytes(e, i))) ||
                      ("number" == typeof t &&
                        "number" == typeof n &&
                        (e = e.slice(t, t + n)),
                      (o = this._funcMakeParams([new d(e)])),
                      this._funcCall("ContinueVerify", o, r, i, null));
                }),
                (te.prototype.EndVerify = function (e, t, n) {
                  var r,
                    i = [];
                  return (
                    "boolean" != typeof e && ((n = t), (t = e)),
                    "boolean" != typeof e ? i.push(e) : i.push(null),
                    (r = this._funcMakeParams(i)),
                    this._funcCall("EndVerify", r, t, n, null)
                  );
                }),
                (te.prototype.SignHash = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("SignHash", r, t, n, null)
                  );
                }),
                (te.prototype.VerifyHash = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  return (
                    "boolean" != typeof n && ((i = r), (r = n)),
                    a.push(e),
                    a.push(t),
                    "boolean" == typeof n ? a.push(n) : a.push(null),
                    (o = this._funcMakeParams(a)),
                    this._funcCall("VerifyHash", o, r, i, null)
                  );
                }),
                (te.prototype.SignInternal = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._stringToBytes(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("SignInternal", i, n, r, null)
                    );
                }),
                (te.prototype.VerifyInternal = function (e, t, n, r) {
                  var i,
                    o = [];
                  return (
                    "boolean" != typeof t && ((r = n), (n = t)),
                    o.push(e),
                    "boolean" == typeof t ? o.push(t) : o.push(null),
                    (i = this._funcMakeParams(o)),
                    this._funcCall("VerifyInternal", i, n, r, null)
                  );
                }),
                (te.prototype.VerifyInternalString = function (e, t, n, r) {
                  var i = this;
                  if (
                    ("boolean" != typeof t && ((r = n), (n = t)),
                    !this.IsAsync(n, r))
                  ) {
                    var o = this.VerifyInternal(e, t);
                    return this.BytesToString(o);
                  }
                  this.VerifyInternal(
                    e,
                    t,
                    function (e) {
                      i.BytesToString(e, n, r);
                    },
                    r
                  );
                }),
                (te.prototype.SignFile = function (e, t, n, r, i) {
                  var o;
                  (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("SignFile", o, r, i, null);
                }),
                (te.prototype.VerifyFile = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  return (
                    "boolean" != typeof n && ((i = r), (r = n)),
                    a.push(e),
                    a.push(t),
                    "boolean" == typeof n ? a.push(n) : a.push(null),
                    (o = this._funcMakeParams(a)),
                    this._funcCall("VerifyFile", o, r, i, null)
                  );
                }),
                (te.prototype.VerifyFileWithExternalSign = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  return this.VerifyFile(t, e, n, r, i);
                }),
                (te.prototype.VerifyFileWithInternalSign = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  return this.VerifyFile(e, t, n, r, i);
                }),
                (te.prototype.IsAlreadySigned = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("IsAlreadySigned", r, t, n, null)
                  );
                }),
                (te.prototype.IsFileAlreadySigned = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("IsFileAlreadySigned", r, t, n, null)
                  );
                }),
                (te.prototype.AppendSign = function (e, t, n, r) {
                  var i;
                  if (
                    !(
                      ("string" == typeof e &&
                        null == (e = this._stringToBytes(e, r))) ||
                      ("string" != typeof t &&
                        null == (t = this._base64Encode(t, r)))
                    )
                  )
                    return (
                      (i = this._funcMakeParams([new d(e), t])),
                      this._funcCall("AppendSign", i, n, r, null)
                    );
                }),
                (te.prototype.VerifySpecific = function (e, t, n, r, i, o) {
                  var a,
                    s = [];
                  if (
                    ("boolean" != typeof r && ((o = i), (i = r)),
                    "string" != typeof t ||
                      null != (t = this._stringToBytes(t, o)))
                  )
                    return (
                      s.push(e),
                      s.push(new d(t)),
                      s.push(n),
                      "boolean" == typeof r ? s.push(r) : s.push(null),
                      (a = this._funcMakeParams(s)),
                      this._funcCall("VerifySpecific", a, i, o, null)
                    );
                }),
                (te.prototype.AppendSignBegin = function (e, t, n) {
                  var r;
                  ("string" != typeof e &&
                    null == (e = this._base64Encode(e, n))) ||
                    ((r = this._funcMakeParams([e])),
                    this._funcCall("AppendSignBegin", r, t, n, null));
                }),
                (te.prototype.VerifyDataSpecificBegin = function (e, t, n, r) {
                  var i;
                  (i = this._funcMakeParams([e, t])),
                    this._funcCall("VerifyDataSpecificBegin", i, n, r, null);
                }),
                (te.prototype.AppendSignHash = function (e, t, n, r) {
                  var i;
                  if (
                    !(
                      ("string" != typeof e &&
                        null == (e = this._base64Encode(e, r))) ||
                      ("string" != typeof t &&
                        null == (t = this._base64Encode(t, r)))
                    )
                  )
                    return (
                      (i = this._funcMakeParams([e, t])),
                      this._funcCall("AppendSignHash", i, n, r, null)
                    );
                }),
                (te.prototype.VerifyHashSpecific = function (e, t, n, r, i, o) {
                  var a,
                    s = [];
                  return (
                    "boolean" != typeof r && ((o = i), (i = r)),
                    s.push(e),
                    s.push(t),
                    s.push(n),
                    "boolean" == typeof r ? s.push(r) : s.push(null),
                    (a = this._funcMakeParams(s)),
                    this._funcCall("VerifyHashSpecific", a, i, o, null)
                  );
                }),
                (te.prototype.AppendSignInternal = function (e, t, n, r) {
                  var i;
                  if (
                    "string" == typeof t ||
                    null != (t = this._base64Encode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, t])),
                      this._funcCall("AppendSignInternal", i, n, r, null)
                    );
                }),
                (te.prototype.VerifySpecificInternal = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o,
                    a = [];
                  return (
                    "boolean" != typeof n && ((i = r), (r = n)),
                    a.push(e),
                    a.push(t),
                    "boolean" == typeof n ? a.push(n) : a.push(null),
                    (o = this._funcMakeParams(a)),
                    this._funcCall("VerifySpecificInternal", o, r, i, null)
                  );
                }),
                (te.prototype.VerifySpecificInternalString = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o = this;
                  if (
                    ("boolean" != typeof n && ((i = r), (r = n)),
                    !this.IsAsync(r, i))
                  ) {
                    var a = this.VerifySpecificInternal(e, t, n);
                    return this.BytesToString(a);
                  }
                  this.VerifySpecificInternal(
                    e,
                    t,
                    n,
                    function (e) {
                      o.BytesToString(e, r, i);
                    },
                    i
                  );
                }),
                (te.prototype.AppendSignFile = function (e, t, n, r, i, o) {
                  var a;
                  return (
                    (a = this._funcMakeParams([e, t, n, r])),
                    this._funcCall("AppendSignFile", a, i, o, null)
                  );
                }),
                (te.prototype.VerifyFileSpecific = function (e, t, n, r, i, o) {
                  var a,
                    s = [];
                  return (
                    "boolean" != typeof r && ((o = i), (i = r)),
                    s.push(e),
                    s.push(t),
                    s.push(n),
                    "boolean" == typeof r ? s.push(r) : s.push(null),
                    (a = this._funcMakeParams(s)),
                    this._funcCall("VerifyFileSpecific", a, i, o, null)
                  );
                }),
                (te.prototype.VerifyFileWithExternalSignSpecific = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  return this.VerifyFileSpecific(e, t, n, r, i, o);
                }),
                (te.prototype.VerifyFileWithInternalSignSpecific = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  return this.VerifyFileSpecific(e, t, n, r, i, o);
                }),
                (te.prototype.CreateEmptySign = function (e, t, n) {
                  var r,
                    i = [];
                  if (
                    (2 == arguments.length && ((n = t), (t = e)),
                    "string" != typeof e ||
                      null != (e = this._stringToBytes(e, n)))
                  )
                    return (
                      1 == arguments.length || 3 == arguments.length
                        ? i.push(new d(e))
                        : i.push(null),
                      (r = this._funcMakeParams(i)),
                      this._funcCall("CreateEmptySign", r, t, n, null)
                    );
                }),
                (te.prototype.CreateSigner = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("CreateSigner", r, t, n, null)
                  );
                }),
                (te.prototype.AppendSigner = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  return (
                    a.push(e),
                    null != t ? a.push(new d(t)) : a.push(null),
                    a.push(n),
                    (o = this._funcMakeParams(a)),
                    this._funcCall("AppendSigner", o, r, i, null)
                  );
                }),
                (te.prototype.AppendValidationDataToSignerEx = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o,
                    a = [];
                  if (
                    "string" == typeof e ||
                    null != (e = this._base64Encode(e, i))
                  )
                    return (
                      a.push(e),
                      null != t ? a.push(new d(t)) : a.push(null),
                      a.push(n),
                      (o = this._funcMakeParams(a)),
                      this._funcCall(
                        "AppendValidationDataToSignerEx",
                        o,
                        r,
                        i,
                        null
                      )
                    );
                }),
                (te.prototype.IsDataInSignedDataAvailable = function (e, t, n) {
                  var r;
                  if (
                    "string" == typeof e ||
                    null != (e = this._base64Encode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([e])),
                      this._funcCall(
                        "IsDataInSignedDataAvailable",
                        r,
                        t,
                        n,
                        null
                      )
                    );
                }),
                (te.prototype.IsDataInSignedFileAvailable = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("IsDataInSignedFileAvailable", r, t, n, null)
                  );
                }),
                (te.prototype.GetDataFromSignedData = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("GetDataFromSignedData", r, t, n, null)
                  );
                }),
                (te.prototype.GetDataFromSignedFile = function (e, t, n, r) {
                  var i;
                  (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetDataFromSignedFile", i, n, r, null);
                }),
                (te.prototype.GetCertificateFromSignedData = function (
                  e,
                  t,
                  n,
                  r
                ) {
                  var i;
                  if (
                    "string" == typeof t ||
                    null != (t = this._base64Encode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, t])),
                      this._funcCall(
                        "GetCertificateFromSignedData",
                        i,
                        n,
                        r,
                        null
                      )
                    );
                }),
                (te.prototype.GetCertificateFromSignedFile = function (
                  e,
                  t,
                  n,
                  r
                ) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall(
                      "GetCertificateFromSignedFile",
                      i,
                      n,
                      r,
                      null
                    )
                  );
                }),
                (te.prototype.GetSignTimeInfo = function (e, t, n, r) {
                  var i;
                  if (
                    "string" == typeof t ||
                    null != (t = this._base64Encode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, t])),
                      this._funcCall("GetSignTimeInfo", i, n, r, null)
                    );
                }),
                (te.prototype.GetFileSignTimeInfo = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("GetFileSignTimeInfo", i, n, r, null)
                  );
                }),
                (te.prototype.VerifyHashOnTime = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  return this.VerifyHashOnTimeEx(
                    e,
                    t,
                    n,
                    r,
                    null != r,
                    !1,
                    i,
                    o,
                    a
                  );
                }),
                (te.prototype.VerifyHashOnTimeEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l,
                    c = [];
                  if (
                    ("boolean" != typeof a && ((u = s), (s = a)),
                    !(
                      ("string" != typeof e &&
                        null == (e = this._base64Encode(e, u))) ||
                      ("string" != typeof n &&
                        null == (n = this._base64Encode(n, u)))
                    ))
                  )
                    return (
                      (c = [e, t, n, r, i, o]),
                      "boolean" == typeof a ? c.push(a) : c.push(null),
                      (l = this._funcMakeParams(c)),
                      this._funcCall("VerifyHashOnTimeEx", l, s, u, null)
                    );
                }),
                (te.prototype.VerifyDataOnTime = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  return this.VerifyDataOnTimeEx(
                    e,
                    t,
                    n,
                    r,
                    null != r,
                    !1,
                    i,
                    o,
                    a
                  );
                }),
                (te.prototype.VerifyDataOnTimeEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l,
                    c = [];
                  if (
                    ("boolean" != typeof a && ((u = s), (s = a)),
                    !(
                      ("string" == typeof e &&
                        null == (e = this._stringToBytes(e, u))) ||
                      ("string" != typeof n &&
                        null == (n = this._base64Encode(n, u)))
                    ))
                  )
                    return (
                      (c = [new d(e), t, n, r, i, o]),
                      "boolean" == typeof a ? c.push(a) : c.push(null),
                      (l = this._funcMakeParams(c)),
                      this._funcCall("VerifyDataOnTimeEx", l, s, u, null)
                    );
                }),
                (te.prototype.VerifyDataInternalOnTime = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  return this.VerifyDataInternalOnTimeEx(
                    e,
                    t,
                    n,
                    null != n,
                    !1,
                    r,
                    i,
                    o
                  );
                }),
                (te.prototype.VerifyDataInternalOnTimeEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u,
                    l = [];
                  if (
                    ("boolean" != typeof o && ((s = a), (a = o)),
                    "string" == typeof e ||
                      null != (e = this._base64Encode(e, s)))
                  )
                    return (
                      (l = [e, t, n, r, i]),
                      "boolean" == typeof o ? l.push(o) : l.push(null),
                      (u = this._funcMakeParams(l)),
                      this._funcCall(
                        "VerifyDataInternalOnTimeEx",
                        u,
                        a,
                        s,
                        null
                      )
                    );
                }),
                (te.prototype.VerifyDataInternalOnTimeString = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  return this.VerifyDataInternalOnTimeStringEx(
                    e,
                    t,
                    n,
                    null != n,
                    !1,
                    r,
                    i,
                    o
                  );
                }),
                (te.prototype.VerifyDataInternalOnTimeStringEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u = this;
                  if (
                    ("boolean" != typeof o && ((s = a), (a = o)),
                    !this.IsAsync(a, s))
                  ) {
                    var l = this.VerifyDataInternalOnTimeEx(e, t, n, r, i, o);
                    return this.BytesToString(l);
                  }
                  this.VerifyDataInternalOnTimeEx(
                    e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    function (e) {
                      u.BytesToString(e, a, s);
                    },
                    s
                  );
                }),
                (te.prototype.VerifyDataOnTimeBegin = function (e, t, n, r, i) {
                  this.VerifyDataOnTimeBeginEx(e, t, n, null != n, !1, r, i);
                }),
                (te.prototype.VerifyDataOnTimeBeginEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  (s = this._funcMakeParams([e, t, n, r, i])),
                    this._funcCall("VerifyDataOnTimeBeginEx", s, o, a, null);
                }),
                (te.prototype.VerifyFileOnTime = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l,
                    c = [];
                  return (
                    "boolean" != typeof a && ((u = s), (s = a)),
                    (c = [e, t, n, r, i, o]),
                    "boolean" == typeof a ? c.push(a) : c.push(null),
                    (l = this._funcMakeParams(c)),
                    this._funcCall("VerifyFileOnTimeEx", l, s, u, null)
                  );
                }),
                (te.prototype.VerifyFileWithExternalSignOnTime = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  return this.VerifyFileOnTime(
                    e,
                    n,
                    t,
                    r,
                    null != r,
                    !1,
                    i,
                    o,
                    a
                  );
                }),
                (te.prototype.VerifyFileWithExternalSignOnTimeEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  return this.VerifyFileOnTime(e, n, t, r, i, o, a, s, u);
                }),
                (te.prototype.VerifyFileWithInternalSignOnTime = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  return this.VerifyFileOnTime(
                    e,
                    t,
                    n,
                    r,
                    null != r,
                    !1,
                    i,
                    o,
                    a
                  );
                }),
                (te.prototype.VerifyFileWithInternalSignOnTimeEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  return this.VerifyFileOnTime(e, n, t, r, i, o, a, s, u);
                }),
                (te.prototype.ContinueSignCtx = function (e, t, n, r) {
                  var i;
                  if (
                    (null == e && (e = new $()),
                    "string" != typeof t ||
                      null != (t = this._stringToBytes(t, r)))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ContinueSignCtx", i, n, r, null)
                    );
                }),
                (te.prototype.ContinueSignCtxWithOffset = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  return (
                    (t = t.slice(n, n + r)), this.ContinueSignCtx(e, t, i, o)
                  );
                }),
                (te.prototype.EndSignCtx = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("EndSignCtx", i, n, r, null)
                  );
                }),
                (te.prototype.BeginVerifyCtx = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("BeginVerifyCtx", r, t, n, null)
                  );
                }),
                (te.prototype.ContinueVerifyCtx = function (e, t, n, r, i, o) {
                  var a;
                  ("number" == typeof n && "number" == typeof r) ||
                    ((i = n), (o = r)),
                    ("string" == typeof t &&
                      null == (t = this._stringToBytes(t, o))) ||
                      ("number" == typeof n &&
                        "number" == typeof r &&
                        (t = t.slice(n, n + r)),
                      (a = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ContinueVerifyCtx", a, i, o, null));
                }),
                (te.prototype.EndVerifyCtx = function (e, t, n, r) {
                  var i,
                    o = [];
                  return (
                    "boolean" != typeof t && (r = n = t),
                    o.push(e),
                    "boolean" == typeof t ? o.push(t) : o.push(null),
                    (i = this._funcMakeParams(o)),
                    this._funcCall("EndVerifyCtx", i, n, r, null)
                  );
                }),
                (te.prototype.ResetOperationCtx = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("ResetOperationCtx", r, t, n, null);
                }),
                (te.prototype.SignHashRSA = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("SignHashRSA", r, t, n, null)
                  );
                }),
                (te.prototype.SignRSA = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" != typeof e ||
                    null != (e = this._stringToBytes(e, i))
                  )
                    return (
                      (o = this._funcMakeParams([new d(e), t, n])),
                      this._funcCall("SignRSA", o, r, i, null)
                    );
                }),
                (te.prototype.ContinueRSASign = function (e, t, n) {
                  var r;
                  ("string" == typeof e &&
                    null == (e = this._stringToBytes(e, n))) ||
                    ((r = this._funcMakeParams([new d(e)])),
                    this._funcCall("ContinueRSASign", r, t, n, null));
                }),
                (te.prototype.ContinueRSASignWithOffset = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  return (e = e.slice(t, t + n)), this.ContinueRSASign(e, r, i);
                }),
                (te.prototype.EndRSASign = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("EndRSASign", r, t, n, null)
                  );
                }),
                (te.prototype.SignRSAFile = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("SignRSAFile", o, r, i, null)
                  );
                }),
                (te.prototype.ContinueRSASignCtx = function (e, t, n, r) {
                  var i;
                  if (
                    (null == e && (e = new $()),
                    "string" != typeof t ||
                      null != (t = this._stringToBytes(t, r)))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ContinueRSASignCtx", i, n, r, null)
                    );
                }),
                (te.prototype.ContinueRSASignCtxWithOffset = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  return (
                    (t = t.slice(n, n + r)), this.ContinueRSASignCtx(t, i, o)
                  );
                }),
                (te.prototype.EndRSASignCtx = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("EndRSASignCtx", i, n, r, null)
                  );
                }),
                (te.prototype.SignECDSA = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" != typeof e ||
                    null != (e = this._stringToBytes(e, i))
                  )
                    return (
                      (o = this._funcMakeParams([new d(e), t, n])),
                      this._funcCall("SignECDSA", o, r, i, null)
                    );
                }),
                (te.prototype.RawSign = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._stringToBytes(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("RawSign", r, t, n, null)
                    );
                }),
                (te.prototype.RawVerify = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  if (
                    ("boolean" != typeof n && ((i = r), (r = n)),
                    "string" != typeof t ||
                      null != (t = this._stringToBytes(t, i)))
                  )
                    return (
                      a.push(e),
                      a.push(new d(t)),
                      "boolean" == typeof n ? a.push(n) : a.push(null),
                      (o = this._funcMakeParams(a)),
                      this._funcCall("RawVerify", o, r, i, null)
                    );
                }),
                (te.prototype.RawSignHash = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("RawSignHash", r, t, n, null)
                  );
                }),
                (te.prototype.RawVerifyHash = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  return (
                    "boolean" != typeof n && ((i = r), (r = n)),
                    a.push(e),
                    a.push(t),
                    "boolean" == typeof n ? a.push(n) : a.push(null),
                    (o = this._funcMakeParams(a)),
                    this._funcCall("RawVerifyHash", o, r, i, null)
                  );
                }),
                (te.prototype.RawSignFile = function (e, t, n, r) {
                  var i;
                  (i = this._funcMakeParams([e, t])),
                    this._funcCall("RawSignFile", i, n, r, null);
                }),
                (te.prototype.RawVerifyFile = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  return (
                    "boolean" != typeof n && ((i = r), (r = n)),
                    a.push(e),
                    a.push(t),
                    "boolean" == typeof n ? a.push(n) : a.push(null),
                    (o = this._funcMakeParams(a)),
                    this._funcCall("RawVerifyFile", o, r, i, null)
                  );
                }),
                (te.prototype.CtxSignHash = function (e, t, n, r, i, o) {
                  var a;
                  if (
                    "string" == typeof n ||
                    null != (n = this._base64Encode(n, o))
                  )
                    return (
                      (a = this._funcMakeParams([e, t, n, r])),
                      this._funcCall("CtxSignHash", a, i, o, null)
                    );
                }),
                (te.prototype.CtxSign = function (e, t, n, r, i, o, a) {
                  var s;
                  if (
                    "string" != typeof n ||
                    null != (n = this._stringToBytes(n, a))
                  )
                    return (
                      (s = this._funcMakeParams([e, t, new d(n), r, i])),
                      this._funcCall("CtxSign", s, o, a, null)
                    );
                }),
                (te.prototype.CtxSignFile = function (e, t, n, r, i, o, a, s) {
                  var u;
                  (u = this._funcMakeParams([e, t, n, r, i, o])),
                    this._funcCall("CtxSignFile", u, a, s, null);
                }),
                (te.prototype.CtxAppendSignHash = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  if (
                    !(
                      ("string" != typeof n &&
                        null == (n = this._base64Encode(n, a))) ||
                      ("string" != typeof r &&
                        null == (r = this._base64Encode(r, a)))
                    )
                  )
                    return (
                      (s = this._funcMakeParams([e, t, n, r, i])),
                      this._funcCall("CtxAppendSignHash", s, o, a, null)
                    );
                }),
                (te.prototype.CtxAppendSign = function (e, t, n, r, i, o, a) {
                  var s;
                  if (
                    !(
                      (null != n &&
                        "string" == typeof n &&
                        null == (n = this._stringToBytes(n, a))) ||
                      ("string" != typeof r &&
                        null == (r = this._base64Encode(r, a)))
                    )
                  )
                    return (
                      (s = this._funcMakeParams([
                        e,
                        t,
                        n ? new d(n) : null,
                        r,
                        i,
                      ])),
                      this._funcCall("CtxAppendSign", s, o, a, null)
                    );
                }),
                (te.prototype.CtxAppendSignFile = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u;
                  (u = this._funcMakeParams([e, t, n, r, i, o])),
                    this._funcCall("CtxAppendSignFile", u, a, s, null);
                }),
                (te.prototype.ShowSenderInfo = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("ShowSenderInfo", r, t, n, null)
                  );
                }),
                (te.prototype.IsEnveloped = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("IsEnveloped", r, t, n, null)
                  );
                }),
                (te.prototype.IsEnvelopedFile = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("IsEnvelopedFile", r, t, n, null)
                  );
                }),
                (te.prototype.Envelop = function (e, t, n, r, i, o) {
                  var a;
                  if (
                    "string" != typeof r ||
                    null != (r = this._stringToBytes(r, o))
                  )
                    return (
                      (a = this._funcMakeParams([e, t, n, new d(r)])),
                      this._funcCall("Envelop", a, i, o, null)
                    );
                }),
                (te.prototype.Develop = function (e, t, n, r) {
                  var i,
                    o = [];
                  if (
                    ("boolean" != typeof t && ((r = n), (n = t)),
                    "string" == typeof e ||
                      null != (e = this._base64Encode(e, r)))
                  )
                    return (
                      o.push(e),
                      "boolean" == typeof t ? o.push(t) : o.push(null),
                      (i = this._funcMakeParams(o)),
                      this._funcCall("Develop", i, n, r, null)
                    );
                }),
                (te.prototype.EnvelopFile = function (e, t, n, r, i, o, a) {
                  var s;
                  (s = this._funcMakeParams([e, t, n, r, i])),
                    this._funcCall("EnvelopFile", s, o, a, null);
                }),
                (te.prototype.DevelopFile = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  return (
                    "boolean" != typeof n && ((i = r), (r = n)),
                    a.push(e),
                    a.push(t),
                    "boolean" == typeof n ? a.push(n) : a.push(null),
                    (o = this._funcMakeParams(a)),
                    this._funcCall("DevelopFile", o, r, i, null)
                  );
                }),
                (te.prototype.EnvelopEx = function (e, t, n, r, i, o) {
                  var a;
                  if (
                    ("EndUserArrayList" == e.className && (e = e.m_array),
                    "EndUserArrayList" == t.className && (t = t.m_array),
                    "string" != typeof r ||
                      null != (r = this._stringToBytes(r, o)))
                  )
                    return (
                      (a = this._funcMakeParams([e, t, n, new d(r)])),
                      this._funcCall("EnvelopEx", a, i, o, null)
                    );
                }),
                (te.prototype.DevelopEx = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  if (
                    ("boolean" != typeof n && ((i = r), (r = n)),
                    "string" == typeof e ||
                      null != (e = this._base64Encode(e, i)))
                  )
                    return (
                      a.push(e),
                      a.push(t ? new d(t) : null),
                      "boolean" == typeof n ? a.push(n) : a.push(null),
                      (o = this._funcMakeParams(a)),
                      this._funcCall("DevelopEx", o, r, i, null)
                    );
                }),
                (te.prototype.EnvelopFileEx = function (e, t, n, r, i, o, a) {
                  var s;
                  "EndUserArrayList" == e.className && (e = e.m_array),
                    "EndUserArrayList" == t.className && (t = t.m_array),
                    (s = this._funcMakeParams([e, t, n, r, i])),
                    this._funcCall("EnvelopFileEx", s, o, a, null);
                }),
                (te.prototype.EnvelopToRecipients = function (e, t, n, r, i) {
                  var o;
                  "EndUserArrayList" == e.className && (e = e.m_array);
                  for (var a = [], s = 0; s < e.length; s++)
                    a.push(new d(e[s]));
                  if (
                    "string" != typeof n ||
                    null != (n = this._stringToBytes(n, i))
                  )
                    return (
                      (o = this._funcMakeParams([a, t, new d(n)])),
                      this._funcCall("EnvelopToRecipients", o, r, i, null)
                    );
                }),
                (te.prototype.EnvelopFileToRecipients = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  "EndUserArrayList" == e.className && (e = e.m_array);
                  for (var s = [], u = 0; u < e.length; u++)
                    s.push(new d(e[u]));
                  (a = this._funcMakeParams([s, t, n, r])),
                    this._funcCall("EnvelopFileToRecipients", a, i, o, null);
                }),
                (te.prototype.EnvelopToRecipientsEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  "EndUserArrayList" == e.className && (e = e.m_array);
                  for (var s = [], u = 0; u < e.length; u++)
                    s.push(new d(e[u]));
                  if (
                    "string" != typeof r ||
                    null != (r = this._stringToBytes(r, o))
                  )
                    return (
                      (a = this._funcMakeParams([s, t, n, new d(r)])),
                      this._funcCall("EnvelopToRecipientsEx", a, i, o, null)
                    );
                }),
                (te.prototype.EnvelopFileToRecipientsEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  "EndUserArrayList" == e.className && (e = e.m_array);
                  for (var u = [], l = 0; l < e.length; l++)
                    u.push(new d(e[l]));
                  (s = this._funcMakeParams([u, t, n, r, i])),
                    this._funcCall("EnvelopFileToRecipientsEx", s, o, a, null);
                }),
                (te.prototype.EnvelopToRecipientsWithOCode = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  if (
                    "string" != typeof r ||
                    null != (r = this._stringToBytes(r, o))
                  )
                    return (
                      (a = this._funcMakeParams([e, t, n, new d(r)])),
                      this._funcCall(
                        "EnvelopToRecipientsWithOCode",
                        a,
                        i,
                        o,
                        null
                      )
                    );
                }),
                (te.prototype.EnvelopExWithDynamicKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  if (
                    ("EndUserArrayList" == e.className && (e = e.m_array),
                    "EndUserArrayList" == t.className && (t = t.m_array),
                    "string" != typeof i ||
                      null != (i = this._stringToBytes(i, a)))
                  )
                    return (
                      (s = this._funcMakeParams([e, t, n, r, new d(i)])),
                      this._funcCall("EnvelopExWithDynamicKey", s, o, a, null)
                    );
                }),
                (te.prototype.EnvelopFileExWithDynamicKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u;
                  "EndUserArrayList" == e.className && (e = e.m_array),
                    "EndUserArrayList" == t.className && (t = t.m_array),
                    (u = this._funcMakeParams([e, t, n, r, i, o])),
                    this._funcCall(
                      "EnvelopFileExWithDynamicKey",
                      u,
                      a,
                      s,
                      null
                    );
                }),
                (te.prototype.EnvelopToRecipientsWithDynamicKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  "EndUserArrayList" == e.className && (e = e.m_array);
                  for (var s = [], u = 0; u < e.length; u++)
                    s.push(new d(e[u]));
                  if (
                    "string" != typeof r ||
                    null != (r = this._stringToBytes(r, o))
                  )
                    return (
                      (a = this._funcMakeParams([s, t, n, new d(r)])),
                      this._funcCall(
                        "EnvelopToRecipientsWithDynamicKey",
                        a,
                        i,
                        o,
                        null
                      )
                    );
                }),
                (te.prototype.EnvelopFileToRecipientsWithDynamicKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  "EndUserArrayList" == e.className && (e = e.m_array);
                  for (var u = [], l = 0; l < e.length; l++)
                    u.push(new d(e[l]));
                  (s = this._funcMakeParams([u, t, n, r, i])),
                    this._funcCall(
                      "EnvelopFileToRecipientsWithDynamicKey",
                      s,
                      o,
                      a,
                      null
                    );
                }),
                (te.prototype.EnvelopToRecipientsWithSettings = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l;
                  if (
                    "string" != typeof n ||
                    null != (n = this._stringToBytes(n, u))
                  ) {
                    "EndUserArrayList" == e.className && (e = e.m_array);
                    for (var c = [], p = 0; p < e.length; p++)
                      c.push(new d(e[p]));
                    return (
                      (l = this._funcMakeParams([c, t, new d(n), r, i, o, a])),
                      this._funcCall(
                        "EnvelopToRecipientsWithSettings",
                        l,
                        s,
                        u,
                        null
                      )
                    );
                  }
                }),
                (te.prototype.RawEnvelop = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._stringToBytes(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([new d(e), new d(t)])),
                      this._funcCall("RawEnvelop", i, n, r, null)
                    );
                }),
                (te.prototype.RawDevelop = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("RawDevelop", i, n, r, null)
                  );
                }),
                (te.prototype.EnvelopRSA = function (e, t, n, r, i, o, a) {
                  return this.EnvelopRSAEx(e, [t], [n], r, i, o, a);
                }),
                (te.prototype.EnvelopFileRSA = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  this.EnvelopFileRSAEx(e, [t], [n], r, i, o, a, s);
                }),
                (te.prototype.EnvelopRSAEx = function (e, t, n, r, i, o, a) {
                  var s;
                  if (
                    ("EndUserArrayList" == t.className && (t = t.m_array),
                    "EndUserArrayList" == n.className && (n = n.m_array),
                    "string" != typeof i ||
                      null != (i = this._stringToBytes(i, a)))
                  )
                    return (
                      (s = this._funcMakeParams([e, t, n, r, new d(i)])),
                      this._funcCall("EnvelopRSAEx", s, o, a, null)
                    );
                }),
                (te.prototype.EnvelopFileRSAEx = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u;
                  "EndUserArrayList" == t.className && (t = t.m_array),
                    "EndUserArrayList" == n.className && (n = n.m_array),
                    (u = this._funcMakeParams([e, t, n, r, i, o])),
                    this._funcCall("EnvelopFileRSAEx", u, a, s, null);
                }),
                (te.prototype.EnvelopToRecipientsRSA = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  "EndUserArrayList" == t.className && (t = t.m_array);
                  for (var s = [], u = 0; u < t.length; u++)
                    s.push(new d(t[u]));
                  if (
                    "string" != typeof r ||
                    null != (r = this._stringToBytes(r, o))
                  )
                    return (
                      (a = this._funcMakeParams([e, s, n, new d(r)])),
                      this._funcCall("EnvelopToRecipientsRSA", a, i, o, null)
                    );
                }),
                (te.prototype.EnvelopFileToRecipientsRSA = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  "EndUserArrayList" == t.className && (t = t.m_array);
                  for (var u = [], l = 0; l < t.length; l++)
                    u.push(new d(t[l]));
                  (s = this._funcMakeParams([e, u, n, r, i])),
                    this._funcCall("EnvelopFileToRecipientsRSA", s, o, a, null);
                }),
                (te.prototype.CtxEnvelop = function (e, t, n, r, i, o, a, s) {
                  var u;
                  if (
                    "string" != typeof o ||
                    null != (o = this._stringToBytes(o, s))
                  ) {
                    "EndUserArrayList" == t.className && (t = t.m_array);
                    for (var l = [], c = 0; c < t.length; c++)
                      l.push(new d(t[c]));
                    return (
                      (u = this._funcMakeParams([e, l, n, r, i, new d(o)])),
                      this._funcCall("CtxEnvelop", u, a, s, null)
                    );
                  }
                }),
                (te.prototype.CtxEnvelopFile = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l;
                  "EndUserArrayList" == t.className && (t = t.m_array);
                  for (var c = [], p = 0; p < t.length; p++)
                    c.push(new d(t[p]));
                  (l = this._funcMakeParams([e, c, n, r, i, o, a])),
                    this._funcCall("CtxEnvelopFile", l, s, u, null);
                }),
                (te.prototype.CtxEnvelopWithDynamicKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u;
                  if (
                    "string" != typeof o ||
                    null != (o = this._stringToBytes(o, s))
                  ) {
                    "EndUserArrayList" == t.className && (t = t.m_array);
                    for (var l = [], c = 0; c < t.length; c++)
                      l.push(new d(t[c]));
                    return (
                      (u = this._funcMakeParams([e, l, n, r, i, new d(o)])),
                      this._funcCall("CtxEnvelopWithDynamicKey", u, a, s, null)
                    );
                  }
                }),
                (te.prototype.CtxEnvelopFileWithDynamicKey = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l;
                  "EndUserArrayList" == t.className && (t = t.m_array);
                  for (var c = [], p = 0; p < t.length; p++)
                    c.push(new d(t[p]));
                  (l = this._funcMakeParams([e, c, n, r, i, o, a])),
                    this._funcCall(
                      "CtxEnvelopFileWithDynamicKey",
                      l,
                      s,
                      u,
                      null
                    );
                }),
                (te.prototype.CtxDevelop = function (e, t, n, r, i, o) {
                  var a,
                    s = [];
                  if (
                    ("boolean" != typeof r && ((o = i), (i = r)),
                    "string" == typeof t ||
                      null != (t = this._base64Encode(t, o)))
                  )
                    return (
                      s.push(e),
                      s.push(t),
                      s.push(n ? new d(n) : null),
                      "boolean" == typeof r ? s.push(r) : s.push(null),
                      (a = this._funcMakeParams(s)),
                      this._funcCall("CtxDevelop", a, i, o, null)
                    );
                }),
                (te.prototype.CtxDevelopFile = function (e, t, n, r, i, o, a) {
                  var s,
                    u = [];
                  return (
                    "boolean" != typeof i && ((a = o), (o = i)),
                    u.push(e),
                    u.push(t),
                    u.push(n ? new d(n) : null),
                    u.push(r),
                    "boolean" == typeof i ? u.push(i) : u.push(null),
                    (s = this._funcMakeParams(u)),
                    this._funcCall("CtxDevelopFile", s, o, a, null)
                  );
                }),
                (te.prototype.CtxCreateAuthData = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" != typeof n ||
                    null != (n = this._stringToBytes(n, i))
                  )
                    return (
                      (o = this._funcMakeParams([e, new d(t), new d(n)])),
                      this._funcCall("CtxCreateAuthData", o, r, i, null)
                    );
                }),
                (te.prototype.ProtectDataByPassword = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof e ||
                    null != (e = this._stringToBytes(e, r))
                  )
                    return (
                      (i = this._funcMakeParams([new d(e), t])),
                      this._funcCall("ProtectDataByPassword", i, n, r, null)
                    );
                }),
                (te.prototype.UnprotectDataByPassword = function (e, t, n, r) {
                  var i;
                  if (
                    "string" == typeof e ||
                    null != (e = this._base64Encode(e, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, t])),
                      this._funcCall("UnprotectDataByPassword", i, n, r, null)
                    );
                }),
                (te.prototype.SessionIsInitialized = function (e, t, n) {
                  var r;
                  return (
                    e.SetData(null),
                    (r = this._funcMakeParams([e])),
                    this._funcCall("SessionIsInitialized", r, t, n, null)
                  );
                }),
                (te.prototype.SessionClose = function (e, t, n) {
                  var r;
                  e.SetData(null),
                    (r = this._funcMakeParams([e])),
                    this._funcCall("SessionClose", r, t, n, null);
                }),
                (te.prototype.ClientSessionCreateStep1 = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("ClientSessionCreateStep1", r, t, n, null)
                  );
                }),
                (te.prototype.ServerSessionCreateStep1 = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, new d(t)])),
                    this._funcCall("ServerSessionCreateStep1", i, n, r, null)
                  );
                }),
                (te.prototype.ClientSessionCreateStep2 = function (e, t, n, r) {
                  var i,
                    o = this;
                  e.SetData(null),
                    (i = this._funcMakeParams([e, new d(t)])),
                    this._funcCall(
                      "ClientSessionCreateStep2",
                      i,
                      n,
                      r,
                      function (t, n, r) {
                        e.SetData(t.GetData()), o.IsAsync(n, r) && n();
                      }
                    );
                }),
                (te.prototype.ServerSessionCreateStep2 = function (e, t, n, r) {
                  var i;
                  e.SetData(null),
                    (i = this._funcMakeParams([e, new d(t)])),
                    this._funcCall("ServerSessionCreateStep2", i, n, r, null);
                }),
                (te.prototype.SessionSave = function (e, t, n) {
                  var r;
                  return (
                    e.SetData(null),
                    (r = this._funcMakeParams([e])),
                    this._funcCall("SessionSave", r, t, n, null)
                  );
                }),
                (te.prototype.SessionLoad = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("SessionLoad", r, t, n, null)
                  );
                }),
                (te.prototype.SessionCheckCertificates = function (e, t, n) {
                  var r;
                  return (
                    e.SetData(null),
                    (r = this._funcMakeParams([e])),
                    this._funcCall("SessionCheckCertificates", r, t, n, null)
                  );
                }),
                (te.prototype.SessionEncrypt = function (e, t, n, r) {
                  var i,
                    o = !1,
                    a = this;
                  if (
                    "string" != typeof t ||
                    ((o = !0), null != (t = this._stringToBytes(t, r)))
                  )
                    return (
                      e.SetData(null),
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall(
                        "SessionEncrypt",
                        i,
                        n,
                        r,
                        o
                          ? function (e, t, n) {
                              return a.BASE64Encode(e, t, n);
                            }
                          : null
                      )
                    );
                }),
                (te.prototype.SessionDecrypt = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      e.SetData(null),
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("SessionDecrypt", i, n, r, null)
                    );
                }),
                (te.prototype.SessionEncryptContinue = function (e, t, n, r) {
                  var i,
                    o = this,
                    a = !1;
                  if (
                    "string" != typeof t ||
                    ((a = !0), null != (t = this._stringToBytes(t, r)))
                  )
                    return (
                      e.SetData(null),
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall(
                        "SessionEncryptContinue",
                        i,
                        n,
                        r,
                        function (e, n, r) {
                          if (a) return o.BASE64Encode(e, n, r);
                          var i = o.IsAsync(n, r);
                          if (!o._copyArrayData(t, e)) {
                            var s = o.MakeError(Q.ERROR_BAD_PARAMETER, "");
                            if (i) return void r(s);
                            throw new ee(s.errorCode, s.message);
                          }
                          if (!i) return t;
                          n(t);
                        }
                      )
                    );
                }),
                (te.prototype.SessionDecryptContinue = function (e, t, n, r) {
                  var i,
                    o = this;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      e.SetData(null),
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall(
                        "SessionDecryptContinue",
                        i,
                        n,
                        r,
                        function (e, n, r) {
                          var i = o.IsAsync(n, r);
                          if (!o._copyArrayData(t, e)) {
                            var a = o.MakeError(Q.ERROR_BAD_PARAMETER, "");
                            if (i) return void r(a);
                            throw new ee(a.errorCode, a.message);
                          }
                          if (!i) return t;
                          n(t);
                        }
                      )
                    );
                }),
                (te.prototype.SessionGetPeerCertificateInfo = function (
                  e,
                  t,
                  n
                ) {
                  var r;
                  return (
                    e.SetData(null),
                    (r = this._funcMakeParams([e])),
                    this._funcCall(
                      "SessionGetPeerCertificateInfo",
                      r,
                      t,
                      n,
                      null
                    )
                  );
                }),
                (te.prototype.ClientDynamicKeySessionCreate = function (
                  e,
                  t,
                  n,
                  r,
                  i
                ) {
                  var o,
                    a = [];
                  return (
                    ("string" == typeof t && "string" == typeof n) ||
                      ((i = r), (r = n)),
                    a.push(e),
                    "string" == typeof t && "string" == typeof n
                      ? (a.push(t), a.push(n), a.push(null))
                      : (a.push(null), a.push(null), a.push(new d(t))),
                    (o = this._funcMakeParams(a)),
                    this._funcCall(
                      "ClientDynamicKeySessionCreate",
                      o,
                      r,
                      i,
                      null
                    )
                  );
                }),
                (te.prototype.ServerDynamicKeySessionCreate = function (
                  e,
                  t,
                  n,
                  r
                ) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, new d(t)])),
                    this._funcCall(
                      "ServerDynamicKeySessionCreate",
                      i,
                      n,
                      r,
                      null
                    )
                  );
                }),
                (te.prototype.ClientDynamicKeySessionLoad = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("ClientDynamicKeySessionLoad", r, t, n, null)
                  );
                }),
                (te.prototype.SCClientIsRunning = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("SCClientIsRunning", n, e, t, null)
                  );
                }),
                (te.prototype.SCClientStart = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("SCClientStart", n, e, t, null);
                }),
                (te.prototype.SCClientStop = function (e, t) {
                  var n;
                  (n = this._funcMakeParams(null)),
                    this._funcCall("SCClientStop", n, e, t, null);
                }),
                (te.prototype.SCClientAddGate = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u;
                  "string" != typeof i &&
                    ((a = i), (s = o), (i = null), (o = null)),
                    (u = this._funcMakeParams([e, t, n, r, i, o])),
                    this._funcCall("SCClientAddGate", u, a, s, null);
                }),
                (te.prototype.SCClientRemoveGate = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("SCClientRemoveGate", r, t, n, null);
                }),
                (te.prototype.SCClientGetStatistic = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("SCClientGetStatistic", n, e, t, null)
                  );
                }),
                (te.prototype.AppendTransportHeader = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  return (
                    (s = this._funcMakeParams([e, t, n, new d(r), new d(i)])),
                    this._funcCall("AppendTransportHeader", s, o, a, null)
                  );
                }),
                (te.prototype.ParseTransportHeader = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("ParseTransportHeader", r, t, n, null)
                  );
                }),
                (te.prototype.AppendCryptoHeader = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, new d(n)])),
                    this._funcCall("AppendCryptoHeader", o, r, i, null)
                  );
                }),
                (te.prototype.ParseCryptoHeader = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([new d(e)])),
                    this._funcCall("ParseCryptoHeader", r, t, n, null)
                  );
                }),
                (te.prototype.AppendFileTransportHeader = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u;
                  (u = this._funcMakeParams([e, t, n, new d(r), i, o])),
                    this._funcCall("AppendFileTransportHeader", u, a, s, null);
                }),
                (te.prototype.ParseFileTransportHeader = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("ParseFileTransportHeader", i, n, r, null)
                  );
                }),
                (te.prototype.AppendFileCryptoHeader = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a;
                  (a = this._funcMakeParams([e, t, n, r])),
                    this._funcCall("AppendFileCryptoHeader", a, i, o, null);
                }),
                (te.prototype.ParseFileCryptoHeader = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("ParseFileCryptoHeader", i, n, r, null)
                  );
                }),
                (te.prototype.DevCtxEnum = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("DevCtxEnum", r, t, n, null)
                  );
                }),
                (te.prototype.DevCtxOpen = function (e, t, n, r, i) {
                  var o;
                  return (
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("DevCtxOpen", o, r, i, null)
                  );
                }),
                (te.prototype.CreateDeviceContext = function () {
                  return new W();
                }),
                (te.prototype.DevCtxEnumVirtual = function (e, t, n) {
                  var r,
                    i = this;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall(
                      "DevCtxEnumVirtual",
                      r,
                      t,
                      n,
                      function (t, n, r) {
                        var o = i.IsAsync(n, r);
                        try {
                          if (null == t) {
                            if (!o) return null;
                            n(null);
                          }
                          if ((e.set(t[1]), !o)) return t[0];
                          n(t[0]);
                        } catch (e) {
                          var a = i.MakeError(
                            Q.ERROR_LIBRARY_COMUNICATION_FAILED,
                            ""
                          );
                          if (o) return void r(a);
                          throw new ee(a.errorCode, a.message);
                        }
                      }
                    )
                  );
                }),
                (te.prototype.DevCtxClose = function (e, t, n) {
                  var r;
                  return (
                    (r = this._funcMakeParams([e])),
                    this._funcCall("DevCtxClose", r, t, n, null)
                  );
                }),
                (te.prototype.DevCtxGetData = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("DevCtxGetData", i, n, r, null)
                  );
                }),
                (te.prototype.DevCtxChangePassword = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([e, t])),
                    this._funcCall("DevCtxChangePassword", i, n, r, null)
                  );
                }),
                (te.prototype.GetHostInfo = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("GetHostInfo", n, e, t, null)
                  );
                }),
                (te.prototype.IsRemotelyControlled = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("IsRemotelyControlled", n, e, t, null)
                  );
                }),
                (te.prototype.CtxCreate = function (e, t) {
                  var n;
                  return (
                    (n = this._funcMakeParams(null)),
                    this._funcCall("CtxCreate", n, e, t, null)
                  );
                }),
                (te.prototype.CtxFree = function (e, t, n) {
                  var r;
                  (r = this._funcMakeParams([e])),
                    this._funcCall("CtxFree", r, t, n, null);
                }),
                (te.prototype.CtxSetParameter = function (e, t, n, r, i) {
                  var o;
                  "boolean" == typeof n && (n = n ? 1 : 0),
                    (o = this._funcMakeParams([e, t, n])),
                    this._funcCall("CtxSetParameter", o, r, i, null);
                }),
                (te.prototype.CreateReference = function (e, t) {
                  return new q(e, t);
                }),
                (te.prototype.ASiCGetASiCType = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("ASiCGetASiCType", r, t, n, null)
                    );
                }),
                (te.prototype.ASiCGetSignType = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("ASiCGetSignType", r, t, n, null)
                    );
                }),
                (te.prototype.ASiCGetSignsCount = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("ASiCGetSignsCount", r, t, n, null)
                    );
                }),
                (te.prototype.ASiCGetSignerInfo = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ASiCGetSignerInfo", i, n, r, null)
                    );
                }),
                (te.prototype.ASiCGetSignTimeInfo = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ASiCGetSignTimeInfo", i, n, r, null)
                    );
                }),
                (te.prototype.ASiCGetSignReferences = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ASiCGetSignReferences", i, n, r, null)
                    );
                }),
                (te.prototype.ASiCGetReference = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, r))
                  )
                    return (
                      (i = this._funcMakeParams([new d(e), t])),
                      this._funcCall("ASiCGetReference", i, n, r, null)
                    );
                }),
                (te.prototype.ASiCSign = function (e, t, n, r, i, o) {
                  for (var a, s = [], u = [], l = 0; l < r.length; l++)
                    s.push(r[l].GetName()), u.push(new d(r[l].GetData()));
                  return (
                    (a = this._funcMakeParams([e, t, n, s, u])),
                    this._funcCall("ASiCSign", a, i, o, null)
                  );
                }),
                (te.prototype.ASiCAppendSign = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" != typeof n ||
                    null != (n = this._base64Decode(n, i))
                  )
                    return (
                      (o = this._funcMakeParams([e, t, new d(n)])),
                      this._funcCall("ASiCAppendSign", o, r, i, null)
                    );
                }),
                (te.prototype.ASiCVerify = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, i))
                  )
                    return (
                      "boolean" != typeof n && ((i = r), (r = n)),
                      a.push(e),
                      a.push(new d(t)),
                      "boolean" == typeof n ? a.push(n) : a.push(null),
                      (o = this._funcMakeParams(a)),
                      this._funcCall("ASiCVerify", o, r, i, null)
                    );
                }),
                (te.prototype.CtxASiCSign = function (e, t, n, r, i, o, a, s) {
                  for (var u, l = [], c = [], p = 0; p < o.length; p++)
                    l.push(o[p].GetName()), c.push(new d(o[p].GetData()));
                  return (
                    (u = this._funcMakeParams([e, t, n, r, i, l, c])),
                    this._funcCall("CtxASiCSign", u, a, s, null)
                  );
                }),
                (te.prototype.CtxASiCAppendSign = function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a
                ) {
                  var s;
                  if (
                    "string" != typeof i ||
                    null != (i = this._base64Decode(i, a))
                  )
                    return (
                      (s = this._funcMakeParams([e, t, n, r, new d(i)])),
                      this._funcCall("CtxASiCAppendSign", s, o, a, null)
                    );
                }),
                (te.prototype.CtxASiCGetSignerInfo = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" != typeof n ||
                    null != (n = this._base64Decode(n, i))
                  )
                    return (
                      (o = this._funcMakeParams([e, t, new d(n)])),
                      this._funcCall("CtxASiCGetSignerInfo", o, r, i, null)
                    );
                }),
                (te.prototype.ASiCGetSignLevel = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ASiCGetSignLevel", i, n, r, null)
                    );
                }),
                (te.prototype.ASiCIsAllContentCovered = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("ASiCIsAllContentCovered", i, n, r, null)
                    );
                }),
                (te.prototype.PDFGetSignType = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("PDFGetSignType", i, n, r, null)
                    );
                }),
                (te.prototype.PDFGetSignsCount = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("PDFGetSignsCount", r, t, n, null)
                    );
                }),
                (te.prototype.PDFGetSignerInfo = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("PDFGetSignerInfo", i, n, r, null)
                    );
                }),
                (te.prototype.PDFGetSignTimeInfo = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("PDFGetSignTimeInfo", i, n, r, null)
                    );
                }),
                (te.prototype.PDFSign = function (e, t, n, r) {
                  var i;
                  return (
                    (i = this._funcMakeParams([new d(e), t])),
                    this._funcCall("PDFSign", i, n, r, null)
                  );
                }),
                (te.prototype.PDFVerify = function (e, t, n, r, i) {
                  var o,
                    a = [];
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, i))
                  )
                    return (
                      "boolean" != typeof n && ((i = r), (r = n)),
                      a.push(e),
                      a.push(new d(t)),
                      "boolean" == typeof n ? a.push(n) : a.push(null),
                      (o = this._funcMakeParams(a)),
                      this._funcCall("PDFVerify", o, r, i, null)
                    );
                }),
                (te.prototype.CtxPDFSign = function (e, t, n, r, i, o) {
                  var a;
                  return (
                    (a = this._funcMakeParams([e, t, new d(n), r])),
                    this._funcCall("CtxPDFSign", a, i, o, null)
                  );
                }),
                (te.prototype.CtxPDFGetSignerInfo = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" != typeof n ||
                    null != (n = this._base64Decode(n, i))
                  )
                    return (
                      (o = this._funcMakeParams([e, t, new d(n)])),
                      this._funcCall("CtxPDFGetSignerInfo", o, r, i, null)
                    );
                }),
                (te.prototype.XAdESGetType = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("XAdESGetType", r, t, n, null)
                    );
                }),
                (te.prototype.XAdESGetSignsCount = function (e, t, n) {
                  var r;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, n))
                  )
                    return (
                      (r = this._funcMakeParams([new d(e)])),
                      this._funcCall("XAdESGetSignsCount", r, t, n, null)
                    );
                }),
                (te.prototype.XAdESGetSignLevel = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("XAdESGetSignLevel", i, n, r, null)
                    );
                }),
                (te.prototype.XAdESGetSignerInfo = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("XAdESGetSignerInfo", i, n, r, null)
                    );
                }),
                (te.prototype.XAdESGetSignTimeInfo = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("XAdESGetSignTimeInfo", i, n, r, null)
                    );
                }),
                (te.prototype.XAdESGetSignReferences = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof t ||
                    null != (t = this._base64Decode(t, r))
                  )
                    return (
                      (i = this._funcMakeParams([e, new d(t)])),
                      this._funcCall("XAdESGetSignReferences", i, n, r, null)
                    );
                }),
                (te.prototype.XAdESGetReference = function (e, t, n, r) {
                  var i;
                  if (
                    "string" != typeof e ||
                    null != (e = this._base64Decode(e, r))
                  )
                    return (
                      (i = this._funcMakeParams([new d(e), t])),
                      this._funcCall("XAdESGetReference", i, n, r, null)
                    );
                }),
                (te.prototype.XAdESSign = function (e, t, n, r, i) {
                  for (var o, a = [], s = [], u = 0; u < n.length; u++)
                    a.push(n[u].GetName()), s.push(new d(n[u].GetData()));
                  return (
                    (o = this._funcMakeParams([e, t, a, s])),
                    this._funcCall("XAdESSign", o, r, i, null)
                  );
                }),
                (te.prototype.XAdESVerify = function (e, t, n, r, i, o) {
                  var a,
                    s = [],
                    u = null,
                    l = null;
                  if (null != e) {
                    (u = []), (l = []);
                    for (var c = 0; c < e.length; c++)
                      u.push(e[c].GetName()), l.push(new d(e[c].GetData()));
                  }
                  if (
                    "string" != typeof n ||
                    null != (n = this._base64Decode(n, o))
                  )
                    return (
                      "boolean" != typeof r && ((o = i), (i = r)),
                      s.push(u),
                      s.push(l),
                      s.push(t),
                      s.push(new d(n)),
                      "boolean" == typeof r ? s.push(r) : s.push(null),
                      (a = this._funcMakeParams(s)),
                      this._funcCall("XAdESVerify", a, i, o, null)
                    );
                }),
                (te.prototype.CtxXAdESSign = function (e, t, n, r, i, o, a) {
                  for (var s, u = [], l = [], c = 0; c < i.length; c++)
                    u.push(i[c].GetName()), l.push(new d(i[c].GetData()));
                  return (
                    (s = this._funcMakeParams([e, t, n, r, u, l])),
                    this._funcCall("CtxXAdESSign", s, o, a, null)
                  );
                }),
                (te.prototype.CtxXAdESGetSignerInfo = function (e, t, n, r, i) {
                  var o;
                  if (
                    "string" != typeof n ||
                    null != (n = this._base64Decode(n, i))
                  )
                    return (
                      (o = this._funcMakeParams([e, t, new d(n)])),
                      this._funcCall("CtxXAdESGetSignerInfo", o, r, i, null)
                    );
                }),
                { EndUserLibraryLoader: p, EUSignCP: te, EndUserError: Q }
              );
            })
              ? r.apply(t, [])
              : r) || (e.exports = i);
      },
      function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "CASettings", function () {
            return a.a;
          }),
          n.d(t, "KSPSettings", function () {
            return a.d;
          }),
          n.d(t, "EndUserError", function () {
            return i;
          }),
          n.d(t, "EndUserConstants", function () {
            return E;
          }),
          n.d(t, "EndUserEvents", function () {
            return r;
          }),
          n.d(t, "EndUserLibraryInfoJS", function () {
            return o.a;
          }),
          n.d(t, "EndUserLibraryInfoSW", function () {
            return o.b;
          }),
          n.d(t, "EndUserSettings", function () {
            return a.c;
          }),
          n.d(t, "EndUserProxySettings", function () {
            return a.b;
          }),
          n.d(t, "EndUserOwnerInfo", function () {
            return s.a;
          }),
          n.d(t, "EndUserCertificateInfoEx", function () {
            return u.a;
          }),
          n.d(t, "EndUserCertificate", function () {
            return l;
          }),
          n.d(t, "EndUserKeyMedia", function () {
            return c;
          }),
          n.d(t, "EndUserJKSPrivateKeyInfo", function () {
            return p.a;
          }),
          n.d(t, "EndUserContext", function () {
            return f;
          }),
          n.d(t, "EndUserPrivateKeyContext", function () {
            return _;
          }),
          n.d(t, "EndUserTimeInfo", function () {
            return d.a;
          }),
          n.d(t, "EndUserSignContainerInfo", function () {
            return S.a;
          }),
          n.d(t, "EndUserSignInfo", function () {
            return y.a;
          }),
          n.d(t, "EndUserSenderInfo", function () {
            return C.a;
          }),
          n.d(t, "EndUserParams", function () {
            return T.a;
          }),
          n.d(t, "EndUserInfo", function () {
            return R;
          }),
          n.d(t, "EndUserRequestInfo", function () {
            return m.a;
          }),
          n.d(t, "EndUserClientRegistrationToken", function () {
            return A;
          }),
          n.d(t, "EndUserTaxReport", function () {
            return h.b;
          }),
          n.d(t, "EndUserTaxReceipt", function () {
            return h.a;
          }),
          n.d(t, "EndUser", function () {
            return U;
          });
        var r = {};
        n.r(r),
          n.d(r, "EndUserConfirmKSPOperationEvent", function () {
            return g;
          });
        var i = n(1),
          o = n(13),
          a = n(9),
          s = n(10),
          u = n(8),
          l = function () {},
          c = function (e) {
            (this.type = e ? e.type : ""),
              (this.device = e ? e.device : ""),
              (this.visibleName = e ? e.visibleName : ""),
              (this.typeIndex = e ? e.typeIndex : -1),
              (this.devIndex = e ? e.devIndex : -1),
              (this.password = e ? e.password : ""),
              (this.user = e ? e.user : "");
          },
          p = n(14),
          f = function () {},
          _ = function () {},
          E = n(0),
          h = n(11),
          d = n(6),
          S = n(7),
          y = n(5),
          C = n(12),
          T = n(15),
          R = function () {
            (this.version = E.EU_USER_INFO_VERSION),
              (this.commonName = ""),
              (this.locality = ""),
              (this.state = ""),
              (this.organization = ""),
              (this.orgUnit = ""),
              (this.title = ""),
              (this.street = ""),
              (this.phone = ""),
              (this.surname = ""),
              (this.givenname = ""),
              (this.EMail = ""),
              (this.DNS = ""),
              (this.EDRPOUCode = ""),
              (this.DRFOCode = ""),
              (this.NBUCode = ""),
              (this.SPFMCode = ""),
              (this.OCode = ""),
              (this.OUCode = ""),
              (this.userCode = ""),
              (this.UPN = ""),
              (this.UNZR = ""),
              (this.country = "UA");
          },
          m = n(16),
          A = function () {},
          g = function () {
            this.type = E.EndUserEventType.ConfirmKSPOperation;
          },
          P = n(18),
          I = (function () {
            function e(e) {
              var t = this;
              (this.m_worker = new P.a("", e, function (e) {
                t.OnEvent(e);
              })),
                (this.m_eventListeners = new Array());
            }
            return (
              (e.prototype.OnEvent = function (e) {
                try {
                  var t =
                    this.m_eventListeners[e.type] ||
                    this.m_eventListeners[E.EndUserEventType.All];
                  t && t(e);
                } catch (e) {}
              }),
              (e.prototype.AddEventListener = function (e, t) {
                switch (e) {
                  case E.EndUserEventType.None:
                    this.m_eventListeners = [];
                    break;
                  case E.EndUserEventType.All:
                    (this.m_eventListeners = []),
                      (this.m_eventListeners[e] = t);
                    break;
                  default:
                    this.m_eventListeners[e] = t;
                }
                return this.m_worker.postMessage("AddEventListener", [e]);
              }),
              (e.prototype.GetLibraryInfo = function (e) {
                return this.m_worker.postMessage(
                  "GetLibraryInfo",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.IsInitialized = function () {
                return this.m_worker.postMessage(
                  "IsInitialized",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.Initialize = function (e) {
                return this.m_worker.postMessage(
                  "Initialize",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.SetRuntimeParameter = function (e, t) {
                return this.m_worker.postMessage(
                  "SetRuntimeParameter",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetStorageParameter = function (e, t) {
                return this.m_worker.postMessage(
                  "GetStorageParameter",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.SetStorageParameter = function (e, t, n) {
                return this.m_worker.postMessage(
                  "SetStorageParameter",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetCAs = function () {
                return this.m_worker.postMessage(
                  "GetCAs",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetProxySettings = function () {
                return this.m_worker.postMessage(
                  "GetProxySettings",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.SetProxySettings = function (e) {
                return this.m_worker.postMessage(
                  "SetProxySettings",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetKeyMedias = function () {
                return this.m_worker.postMessage(
                  "GetKeyMedias",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetJKSPrivateKeys = function (e) {
                return this.m_worker.postMessage(
                  "GetJKSPrivateKeys",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.IsPrivateKeyReaded = function () {
                return this.m_worker.postMessage(
                  "IsPrivateKeyReaded",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ResetPrivateKey = function () {
                return this.m_worker.postMessage(
                  "ResetPrivateKey",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ResetOperationKSP = function () {
                return this.m_worker.postMessage(
                  "ResetOperationKSP",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ReadPrivateKey = function (e, t, n) {
                return this.m_worker.postMessage(
                  "ReadPrivateKey",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ReadPrivateKeyBinary = function (e, t, n, r) {
                return this.m_worker.postMessage(
                  "ReadPrivateKeyBinary",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ReadPrivateKeySIM = function (e, t, n, r) {
                return this.m_worker.postMessage(
                  "ReadPrivateKeySIM",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ReadPrivateKeyKSP = function (e, t, n, r) {
                return this.m_worker.postMessage(
                  "ReadPrivateKeyKSP",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetOwnCertificates = function () {
                return this.m_worker.postMessage(
                  "GetOwnCertificates",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetOwnEUserParams = function () {
                return this.m_worker.postMessage(
                  "GetOwnEUserParams",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ChangeOwnCertificatesStatus = function (e, t) {
                return this.m_worker.postMessage(
                  "ChangeOwnCertificatesStatus",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.MakeNewCertificate = function (
                e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                p,
                f,
                _,
                E,
                h,
                d,
                S
              ) {
                return (
                  void 0 === h && (h = !1),
                  void 0 === d && (d = null),
                  void 0 === S && (S = null),
                  this.m_worker.postMessage(
                    "MakeNewCertificate",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.MakeDeviceCertificate = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "MakeDeviceCertificate",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ChangePrivateKeyPassword = function (e, t) {
                return this.m_worker.postMessage(
                  "ChangePrivateKeyPassword",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ChangePrivateKeyPasswordBinary = function (e, t, n) {
                return this.m_worker.postMessage(
                  "ChangePrivateKeyPasswordBinary",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GeneratePrivateKey = function (
                e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                p
              ) {
                return this.m_worker.postMessage(
                  "GeneratePrivateKey",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GeneratePrivateKeyBinary = function (
                e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c
              ) {
                return this.m_worker.postMessage(
                  "GeneratePrivateKeyBinary",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetKeyInfo = function (e) {
                return this.m_worker.postMessage(
                  "GetKeyInfo",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetKeyInfoBinary = function (e, t) {
                return this.m_worker.postMessage(
                  "GetKeyInfoBinary",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetClientRegistrationTokenKSP = function (e) {
                return this.m_worker.postMessage(
                  "GetClientRegistrationTokenKSP",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.HashData = function (e, t, n) {
                return this.m_worker.postMessage(
                  "HashData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetSigner = function (e, t, n) {
                return (
                  void 0 === t && (t = -1),
                  void 0 === n && (n = !1),
                  this.m_worker.postMessage(
                    "GetSigner",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.SignData = function (e, t) {
                return (
                  void 0 === t && (t = !1),
                  this.m_worker.postMessage(
                    "SignData",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.SignDataInternal = function (e, t, n) {
                return (
                  void 0 === n && (n = !1),
                  this.m_worker.postMessage(
                    "SignDataInternal",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.SignHash = function (e, t, n, r) {
                return this.m_worker.postMessage(
                  "SignHash",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.SignDataEx = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "SignDataEx",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.AppendSign = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "AppendSign",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.AppendSignHash = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "AppendSignHash",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.VerifyHash = function (e, t, n) {
                return (
                  void 0 === n && (n = -1),
                  this.m_worker.postMessage(
                    "VerifyHash",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.VerifyData = function (e, t, n) {
                return (
                  void 0 === n && (n = -1),
                  this.m_worker.postMessage(
                    "VerifyData",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.VerifyDataInternal = function (e, t) {
                return (
                  void 0 === t && (t = -1),
                  this.m_worker.postMessage(
                    "VerifyDataInternal",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.EnvelopData = function (e, t, n, r, i, o) {
                return (
                  void 0 === o && (o = !1),
                  this.m_worker.postMessage(
                    "EnvelopData",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.DevelopData = function (e, t) {
                return this.m_worker.postMessage(
                  "DevelopData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CreateAuthData = function (e, t, n) {
                return this.m_worker.postMessage(
                  "CreateAuthData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ProtectDataByPassword = function (e, t, n) {
                return this.m_worker.postMessage(
                  "ProtectDataByPassword",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.UnprotectDataByPassword = function (e, t, n) {
                return this.m_worker.postMessage(
                  "UnprotectDataByPassword",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.GetTSPByAccessInfo = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "GetTSPByAccessInfo",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CheckTSP = function (e, t, n) {
                return this.m_worker.postMessage(
                  "CheckTSP",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxCreate = function () {
                return this.m_worker.postMessage(
                  "CtxCreate",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxFree = function (e) {
                return this.m_worker.postMessage(
                  "CtxFree",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxSetParameter = function (e, t, n) {
                return this.m_worker.postMessage(
                  "CtxSetParameter",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxReadPrivateKey = function (e, t, n, r) {
                return this.m_worker.postMessage(
                  "CtxReadPrivateKey",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxReadPrivateKeyBinary = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "CtxReadPrivateKeyBinary",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxFreePrivateKey = function (e) {
                return this.m_worker.postMessage(
                  "CtxFreePrivateKey",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxGetOwnCertificates = function (e) {
                return this.m_worker.postMessage(
                  "CtxGetOwnCertificates",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxSignHash = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "CtxSignHash",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxSignData = function (e, t, n, r, i, o) {
                return this.m_worker.postMessage(
                  "CtxSignData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxAppendSignHash = function (e, t, n, r, i, o) {
                return this.m_worker.postMessage(
                  "CtxAppendSignHash",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxAppendSign = function (e, t, n, r, i, o) {
                return this.m_worker.postMessage(
                  "CtxAppendSign",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxEnvelopData = function (e, t, n, r, i, o, a) {
                return this.m_worker.postMessage(
                  "CtxEnvelopData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.CtxDevelopData = function (e, t, n) {
                return this.m_worker.postMessage(
                  "CtxDevelopData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ProtectTaxReports = function (e, t, n, r, i, o, a) {
                return (
                  void 0 === e && (e = null),
                  void 0 === t && (t = null),
                  void 0 === n && (n = null),
                  void 0 === a && (a = !1),
                  this.m_worker.postMessage(
                    "ProtectTaxReports",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.UnprotectTaxReceipts = function (e, t) {
                return this.m_worker.postMessage(
                  "UnprotectTaxReceipts",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ASiCGetSigner = function (e, t, n) {
                return this.m_worker.postMessage(
                  "ASiCGetSigner",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ASiCSignData = function (e, t, n, r, i, o) {
                return this.m_worker.postMessage(
                  "ASiCSignData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ASiCAppendSign = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "ASiCAppendSign",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.ASiCVerifyData = function (e, t) {
                return (
                  void 0 === t && (t = -1),
                  this.m_worker.postMessage(
                    "ASiCVerifyData",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.PDFSignData = function (e, t, n, r) {
                return this.m_worker.postMessage(
                  "PDFSignData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.PDFVerifyData = function (e, t) {
                return (
                  void 0 === t && (t = -1),
                  this.m_worker.postMessage(
                    "PDFVerifyData",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.PDFGetSigner = function (e, t, n) {
                return (
                  void 0 === t && (t = -1),
                  void 0 === n && (n = !1),
                  this.m_worker.postMessage(
                    "PDFGetSigner",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.XAdESGetSigner = function (e, t, n) {
                return (
                  void 0 === t && (t = -1),
                  void 0 === n && (n = !1),
                  this.m_worker.postMessage(
                    "XAdESGetSigner",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.XAdESSignData = function (e, t, n, r, i) {
                return this.m_worker.postMessage(
                  "XAdESSignData",
                  Array.prototype.slice.call(arguments)
                );
              }),
              (e.prototype.XAdESVerifyData = function (e, t, n) {
                return (
                  void 0 === n && (n = -1),
                  this.m_worker.postMessage(
                    "XAdESVerifyData",
                    Array.prototype.slice.call(arguments)
                  )
                );
              }),
              (e.prototype.GetSignContainerInfo = function (e) {
                return this.m_worker.postMessage(
                  "GetSignContainerInfo",
                  Array.prototype.slice.call(arguments)
                );
              }),
              e
            );
          })(),
          v = n(19),
          U = (function () {
            function e(e, t) {
              switch ((void 0 === t && (t = E.EndUserLibraryType.JS), t)) {
                case E.EndUserLibraryType.SW:
                  this.m_library = new v.a();
                  break;
                case E.EndUserLibraryType.JS:
                case E.EndUserLibraryType.MS:
                default:
                  this.m_library = new I(e);
              }
            }
            return (
              (e.prototype.AddEventListener = function (e, t) {
                return this.m_library.AddEventListener(e, t);
              }),
              (e.prototype.GetLibraryInfo = function (e) {
                return this.m_library.GetLibraryInfo(e);
              }),
              (e.prototype.IsInitialized = function () {
                return this.m_library.IsInitialized();
              }),
              (e.prototype.Initialize = function (e) {
                return this.m_library.Initialize(e);
              }),
              (e.prototype.SetRuntimeParameter = function (e, t) {
                return this.m_library.SetRuntimeParameter(e, t);
              }),
              (e.prototype.GetStorageParameter = function (e, t) {
                return (
                  void 0 === t && (t = !1),
                  this.m_library.GetStorageParameter(e, t)
                );
              }),
              (e.prototype.SetStorageParameter = function (e, t, n) {
                return (
                  void 0 === n && (n = !1),
                  this.m_library.SetStorageParameter(e, t, n)
                );
              }),
              (e.prototype.GetCAs = function () {
                return this.m_library.GetCAs();
              }),
              (e.prototype.GetProxySettings = function () {
                return this.m_library.GetProxySettings();
              }),
              (e.prototype.SetProxySettings = function (e) {
                return this.m_library.SetProxySettings(e);
              }),
              (e.prototype.GetKeyMedias = function () {
                return this.m_library.GetKeyMedias();
              }),
              (e.prototype.GetJKSPrivateKeys = function (e) {
                return this.m_library.GetJKSPrivateKeys(e);
              }),
              (e.prototype.IsPrivateKeyReaded = function () {
                return this.m_library.IsPrivateKeyReaded();
              }),
              (e.prototype.ResetPrivateKey = function () {
                return this.m_library.ResetPrivateKey();
              }),
              (e.prototype.ResetOperationKSP = function () {
                return this.m_library.ResetOperationKSP();
              }),
              (e.prototype.ReadPrivateKey = function (e, t, n) {
                return this.m_library.ReadPrivateKey(e, t, n);
              }),
              (e.prototype.ReadPrivateKeyBinary = function (e, t, n, r) {
                return this.m_library.ReadPrivateKeyBinary(e, t, n, r);
              }),
              (e.prototype.ReadPrivateKeySIM = function (e, t, n, r) {
                return (
                  void 0 === n && (n = !0),
                  void 0 === r && (r = 0),
                  this.m_library.ReadPrivateKeySIM(e, t, n, r)
                );
              }),
              (e.prototype.ReadPrivateKeyKSP = function (e, t, n, r) {
                return (
                  void 0 === n && (n = !0),
                  void 0 === r && (r = 0),
                  this.m_library.ReadPrivateKeyKSP(e, t, n, r)
                );
              }),
              (e.prototype.GetOwnCertificates = function () {
                return this.m_library.GetOwnCertificates();
              }),
              (e.prototype.GetOwnEUserParams = function () {
                return this.m_library.GetOwnEUserParams();
              }),
              (e.prototype.ChangeOwnCertificatesStatus = function (e, t) {
                return this.m_library.ChangeOwnCertificatesStatus(e, t);
              }),
              (e.prototype.MakeNewCertificate = function (
                e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                p,
                f,
                _,
                E,
                h,
                d,
                S
              ) {
                return (
                  void 0 === h && (h = !1),
                  void 0 === d && (d = null),
                  void 0 === S && (S = null),
                  this.m_library.MakeNewCertificate(
                    e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    p,
                    f,
                    _,
                    E,
                    h,
                    d,
                    S
                  )
                );
              }),
              (e.prototype.MakeDeviceCertificate = function (e, t, n, r, i) {
                return this.m_library.MakeDeviceCertificate(e, t, n, r, i);
              }),
              (e.prototype.ChangePrivateKeyPassword = function (e, t) {
                return this.m_library.ChangePrivateKeyPassword(e, t);
              }),
              (e.prototype.ChangePrivateKeyPasswordBinary = function (e, t, n) {
                return this.m_library.ChangePrivateKeyPasswordBinary(e, t, n);
              }),
              (e.prototype.GeneratePrivateKey = function (
                e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                p
              ) {
                return this.m_library.GeneratePrivateKey(
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p
                );
              }),
              (e.prototype.GeneratePrivateKeyBinary = function (
                e,
                t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                l,
                c
              ) {
                return this.m_library.GeneratePrivateKeyBinary(
                  e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c
                );
              }),
              (e.prototype.GetKeyInfo = function (e) {
                return this.m_library.GetKeyInfo(e);
              }),
              (e.prototype.GetKeyInfoBinary = function (e, t) {
                return this.m_library.GetKeyInfoBinary(e, t);
              }),
              (e.prototype.GetClientRegistrationTokenKSP = function (e) {
                return this.m_library.GetClientRegistrationTokenKSP(e);
              }),
              (e.prototype.HashData = function (e, t, n) {
                return this.m_library.HashData(e, t, n);
              }),
              (e.prototype.GetSigner = function (e, t, n) {
                return this.m_library.GetSigner(e, t, n);
              }),
              (e.prototype.SignData = function (e, t) {
                return void 0 === t && (t = !1), this.m_library.SignData(e, t);
              }),
              (e.prototype.SignDataInternal = function (e, t, n) {
                return (
                  void 0 === n && (n = !1),
                  this.m_library.SignDataInternal(e, t, n)
                );
              }),
              (e.prototype.SignHash = function (e, t, n, r) {
                return (
                  void 0 === r && (r = !1), this.m_library.SignHash(e, t, n, r)
                );
              }),
              (e.prototype.SignDataEx = function (e, t, n, r, i) {
                return (
                  void 0 === i && (i = !1),
                  this.m_library.SignDataEx(e, t, n, r, i)
                );
              }),
              (e.prototype.AppendSign = function (e, t, n, r, i) {
                return (
                  void 0 === i && (i = !1),
                  this.m_library.AppendSign(e, t, n, r, i)
                );
              }),
              (e.prototype.AppendSignHash = function (e, t, n, r, i) {
                return this.m_library.AppendSignHash(e, t, n, r, i);
              }),
              (e.prototype.VerifyHash = function (e, t, n) {
                return (
                  void 0 === n && (n = -1), this.m_library.VerifyHash(e, t, n)
                );
              }),
              (e.prototype.VerifyData = function (e, t, n) {
                return (
                  void 0 === n && (n = -1), this.m_library.VerifyData(e, t, n)
                );
              }),
              (e.prototype.VerifyDataInternal = function (e, t) {
                return (
                  void 0 === t && (t = -1),
                  this.m_library.VerifyDataInternal(e, t)
                );
              }),
              (e.prototype.EnvelopData = function (e, t, n, r, i, o) {
                return (
                  void 0 === o && (o = !1),
                  this.m_library.EnvelopData(e, t, n, r, i, o)
                );
              }),
              (e.prototype.DevelopData = function (e, t) {
                return this.m_library.DevelopData(e, t);
              }),
              (e.prototype.ProtectDataByPassword = function (e, t, n) {
                return this.m_library.ProtectDataByPassword(e, t, n);
              }),
              (e.prototype.UnprotectDataByPassword = function (e, t, n) {
                return this.m_library.UnprotectDataByPassword(e, t, n);
              }),
              (e.prototype.CreateAuthData = function (e, t, n) {
                return this.m_library.CreateAuthData(e, t, n);
              }),
              (e.prototype.GetTSPByAccessInfo = function (e, t, n, r, i) {
                return this.m_library.GetTSPByAccessInfo(e, t, n, r, i);
              }),
              (e.prototype.CheckTSP = function (e, t, n) {
                return this.m_library.CheckTSP(e, t, n);
              }),
              (e.prototype.CtxCreate = function () {
                return this.m_library.CtxCreate();
              }),
              (e.prototype.CtxFree = function (e) {
                return this.m_library.CtxFree(e);
              }),
              (e.prototype.CtxSetParameter = function (e, t, n) {
                return this.m_library.CtxSetParameter(e, t, n);
              }),
              (e.prototype.CtxReadPrivateKey = function (e, t, n, r) {
                return (
                  void 0 === e && (e = null),
                  this.m_library.CtxReadPrivateKey(e, t, n, r)
                );
              }),
              (e.prototype.CtxReadPrivateKeyBinary = function (e, t, n, r, i) {
                return (
                  void 0 === e && (e = null),
                  this.m_library.CtxReadPrivateKeyBinary(e, t, n, r, i)
                );
              }),
              (e.prototype.CtxFreePrivateKey = function (e) {
                return this.m_library.CtxFreePrivateKey(e);
              }),
              (e.prototype.CtxGetOwnCertificates = function (e) {
                return this.m_library.CtxGetOwnCertificates(e);
              }),
              (e.prototype.CtxSignHash = function (e, t, n, r, i) {
                return this.m_library.CtxSignHash(e, t, n, r, i);
              }),
              (e.prototype.CtxSignData = function (e, t, n, r, i, o) {
                return this.m_library.CtxSignData(e, t, n, r, i, o);
              }),
              (e.prototype.CtxAppendSignHash = function (e, t, n, r, i, o) {
                return this.m_library.CtxAppendSignHash(e, t, n, r, i, o);
              }),
              (e.prototype.CtxAppendSign = function (e, t, n, r, i, o) {
                return this.m_library.CtxAppendSign(e, t, n, r, i, o);
              }),
              (e.prototype.CtxEnvelopData = function (e, t, n, r, i, o, a) {
                return this.m_library.CtxEnvelopData(e, t, n, r, i, o, a);
              }),
              (e.prototype.CtxDevelopData = function (e, t, n) {
                return this.m_library.CtxDevelopData(e, t, n);
              }),
              (e.prototype.ProtectTaxReports = function (e, t, n, r, i, o, a) {
                return (
                  void 0 === e && (e = null),
                  void 0 === t && (t = null),
                  void 0 === n && (n = null),
                  this.m_library.ProtectTaxReports(e, t, n, r, i, o, a)
                );
              }),
              (e.prototype.UnprotectTaxReceipts = function (e, t) {
                return this.m_library.UnprotectTaxReceipts(e, t);
              }),
              (e.prototype.ASiCGetSigner = function (e, t, n) {
                return this.m_library.ASiCGetSigner(e, t, n);
              }),
              (e.prototype.ASiCSignData = function (e, t, n, r, i, o) {
                return this.m_library.ASiCSignData(e, t, n, r, i, o);
              }),
              (e.prototype.ASiCAppendSign = function (e, t, n, r, i) {
                return this.m_library.ASiCAppendSign(e, t, n, r, i);
              }),
              (e.prototype.ASiCVerifyData = function (e, t) {
                return this.m_library.ASiCVerifyData(e, t);
              }),
              (e.prototype.PDFGetSigner = function (e, t, n) {
                return this.m_library.PDFGetSigner(e, t, n);
              }),
              (e.prototype.PDFSignData = function (e, t, n, r) {
                return this.m_library.PDFSignData(e, t, n, r);
              }),
              (e.prototype.PDFVerifyData = function (e, t) {
                return this.m_library.PDFVerifyData(e, t);
              }),
              (e.prototype.XAdESGetSigner = function (e, t, n) {
                return this.m_library.XAdESGetSigner(e, t, n);
              }),
              (e.prototype.XAdESSignData = function (e, t, n, r, i) {
                return this.m_library.XAdESSignData(e, t, n, r, i);
              }),
              (e.prototype.XAdESVerifyData = function (e, t, n) {
                return this.m_library.XAdESVerifyData(e, t, n);
              }),
              (e.prototype.GetSignContainerInfo = function (e) {
                return this.m_library.GetSignContainerInfo(e);
              }),
              e
            );
          })();
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n(0),
          i = function () {
            (this.type = r.EndUserSignContainerType.Unknown),
              (this.subType = r.EndUserCAdESType.Unknown),
              (this.asicSignType = r.EndUserASiCSignType.Unknown);
          };
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "d", function () {
            return i;
          }),
          n.d(t, "c", function () {
            return o;
          }),
          n.d(t, "b", function () {
            return a;
          });
        var r = function () {},
          i = function () {},
          o = function () {},
          a = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "a", function () {
            return i;
          });
        var r = function () {},
          i = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          });
        var r = function () {
            (this.version = null), (this.supported = !1), (this.loaded = !1);
          },
          i = function () {
            (this.version = null),
              (this.supported = !1),
              (this.loaded = !1),
              (this.isSignAgentSupported = !1),
              (this.isWebExtensionSupported = !1),
              (this.isNPAPISupported = !1),
              (this.isActiveXSupported = !1),
              (this.isWebExtensionInstalled = !1),
              (this.isNativeLibraryNeedUpdate = !1),
              (this.nativeLibraryInstallURL = null),
              (this.nativeLibraryUpdateURL = null),
              (this.webExtensionInstallURL = null),
              (this.helpURL = null);
          };
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        var r = function () {};
      },
      function (e, t, n) {
        (function (t, r) {
          var i;
          /*!
           * @overview es6-promise - a tiny implementation of Promises/A+.
           * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
           * @license   Licensed under MIT license
           *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
           * @version   3.3.1
           */ (i = function () {
            "use strict";
            function e(e) {
              return "function" == typeof e;
            }
            var i = Array.isArray
                ? Array.isArray
                : function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  },
              o = 0,
              a = void 0,
              s = void 0,
              u = function (e, t) {
                (h[o] = e), (h[o + 1] = t), 2 === (o += 2) && (s ? s(d) : R());
              },
              l = "undefined" != typeof window ? window : void 0,
              c = l || {},
              p = c.MutationObserver || c.WebKitMutationObserver,
              f =
                "undefined" == typeof self &&
                void 0 !== t &&
                "[object process]" === {}.toString.call(t),
              _ =
                "undefined" != typeof Uint8ClampedArray &&
                "undefined" != typeof importScripts &&
                "undefined" != typeof MessageChannel;
            function E() {
              var e = setTimeout;
              return function () {
                return e(d, 1);
              };
            }
            var h = new Array(1e3);
            function d() {
              for (var e = 0; e < o; e += 2)
                (0, h[e])(h[e + 1]), (h[e] = void 0), (h[e + 1] = void 0);
              o = 0;
            }
            var S,
              y,
              C,
              T,
              R = void 0;
            function m(e, t) {
              var n = arguments,
                r = this,
                i = new this.constructor(P);
              void 0 === i[g] && B(i);
              var o,
                a = r._state;
              return (
                a
                  ? ((o = n[a - 1]),
                    u(function () {
                      return K(a, i, o, r._result);
                    }))
                  : N(r, i, e, t),
                i
              );
            }
            function A(e) {
              if (e && "object" == typeof e && e.constructor === this) return e;
              var t = new this(P);
              return b(t, e), t;
            }
            f
              ? (R = function () {
                  return t.nextTick(d);
                })
              : p
              ? ((y = 0),
                (C = new p(d)),
                (T = document.createTextNode("")),
                C.observe(T, { characterData: !0 }),
                (R = function () {
                  T.data = y = ++y % 2;
                }))
              : _
              ? (((S = new MessageChannel()).port1.onmessage = d),
                (R = function () {
                  return S.port2.postMessage(0);
                }))
              : (R =
                  void 0 === l
                    ? (function () {
                        try {
                          var e = n(23);
                          return (
                            (a = e.runOnLoop || e.runOnContext),
                            function () {
                              a(d);
                            }
                          );
                        } catch (e) {
                          return E();
                        }
                      })()
                    : E());
            var g = Math.random().toString(36).substring(16);
            function P() {}
            var I = new w();
            function v(e) {
              try {
                return e.then;
              } catch (e) {
                return (I.error = e), I;
              }
            }
            function U(t, n, r) {
              n.constructor === t.constructor &&
              r === m &&
              n.constructor.resolve === A
                ? (function (e, t) {
                    1 === t._state
                      ? D(e, t._result)
                      : 2 === t._state
                      ? k(e, t._result)
                      : N(
                          t,
                          void 0,
                          function (t) {
                            return b(e, t);
                          },
                          function (t) {
                            return k(e, t);
                          }
                        );
                  })(t, n)
                : r === I
                ? k(t, I.error)
                : void 0 === r
                ? D(t, n)
                : e(r)
                ? (function (e, t, n) {
                    u(function (e) {
                      var r = !1,
                        i = (function (e, t, n, r) {
                          try {
                            e.call(t, n, r);
                          } catch (e) {
                            return e;
                          }
                        })(
                          n,
                          t,
                          function (n) {
                            r || ((r = !0), t !== n ? b(e, n) : D(e, n));
                          },
                          function (t) {
                            r || ((r = !0), k(e, t));
                          },
                          e._label
                        );
                      !r && i && ((r = !0), k(e, i));
                    }, e);
                  })(t, n, r)
                : D(t, n);
            }
            function b(e, t) {
              var n;
              e === t
                ? k(
                    e,
                    new TypeError("You cannot resolve a promise with itself")
                  )
                : "function" == typeof (n = t) ||
                  ("object" == typeof n && null !== n)
                ? U(e, t, v(t))
                : D(e, t);
            }
            function O(e) {
              e._onerror && e._onerror(e._result), M(e);
            }
            function D(e, t) {
              void 0 === e._state &&
                ((e._result = t),
                (e._state = 1),
                0 !== e._subscribers.length && u(M, e));
            }
            function k(e, t) {
              void 0 === e._state && ((e._state = 2), (e._result = t), u(O, e));
            }
            function N(e, t, n, r) {
              var i = e._subscribers,
                o = i.length;
              (e._onerror = null),
                (i[o] = t),
                (i[o + 1] = n),
                (i[o + 2] = r),
                0 === o && e._state && u(M, e);
            }
            function M(e) {
              var t = e._subscribers,
                n = e._state;
              if (0 !== t.length) {
                for (
                  var r = void 0, i = void 0, o = e._result, a = 0;
                  a < t.length;
                  a += 3
                )
                  (r = t[a]), (i = t[a + n]), r ? K(n, r, i, o) : i(o);
                e._subscribers.length = 0;
              }
            }
            function w() {
              this.error = null;
            }
            var G = new w();
            function K(t, n, r, i) {
              var o = e(r),
                a = void 0,
                s = void 0,
                u = void 0,
                l = void 0;
              if (o) {
                if (
                  ((a = (function (e, t) {
                    try {
                      return e(t);
                    } catch (e) {
                      return (G.error = e), G;
                    }
                  })(r, i)) === G
                    ? ((l = !0), (s = a.error), (a = null))
                    : (u = !0),
                  n === a)
                )
                  return void k(
                    n,
                    new TypeError(
                      "A promises callback cannot return that same promise."
                    )
                  );
              } else (a = i), (u = !0);
              void 0 !== n._state ||
                (o && u
                  ? b(n, a)
                  : l
                  ? k(n, s)
                  : 1 === t
                  ? D(n, a)
                  : 2 === t && k(n, a));
            }
            var L = 0;
            function B(e) {
              (e[g] = L++),
                (e._state = void 0),
                (e._result = void 0),
                (e._subscribers = []);
            }
            function F(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(P)),
                this.promise[g] || B(this.promise),
                i(t)
                  ? ((this._input = t),
                    (this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? D(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(),
                        0 === this._remaining && D(this.promise, this._result)))
                  : k(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            function x(e) {
              (this[g] = L++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                P !== e &&
                  ("function" != typeof e &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof x
                    ? (function (e, t) {
                        try {
                          t(
                            function (t) {
                              b(e, t);
                            },
                            function (t) {
                              k(e, t);
                            }
                          );
                        } catch (t) {
                          k(e, t);
                        }
                      })(this, e)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            function Y() {
              var e = void 0;
              if (void 0 !== r) e = r;
              else if ("undefined" != typeof self) e = self;
              else
                try {
                  e = Function("return this")();
                } catch (e) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var t = e.Promise;
              if (t) {
                var n = null;
                try {
                  n = Object.prototype.toString.call(t.resolve());
                } catch (e) {}
                if ("[object Promise]" === n && !t.cast) return;
              }
              e.Promise = x;
            }
            return (
              (F.prototype._enumerate = function () {
                for (
                  var e = this.length, t = this._input, n = 0;
                  void 0 === this._state && n < e;
                  n++
                )
                  this._eachEntry(t[n], n);
              }),
              (F.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                  r = n.resolve;
                if (r === A) {
                  var i = v(e);
                  if (i === m && void 0 !== e._state)
                    this._settledAt(e._state, t, e._result);
                  else if ("function" != typeof i)
                    this._remaining--, (this._result[t] = e);
                  else if (n === x) {
                    var o = new n(P);
                    U(o, e, i), this._willSettleAt(o, t);
                  } else
                    this._willSettleAt(
                      new n(function (t) {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(r(e), t);
              }),
              (F.prototype._settledAt = function (e, t, n) {
                var r = this.promise;
                void 0 === r._state &&
                  (this._remaining--,
                  2 === e ? k(r, n) : (this._result[t] = n)),
                  0 === this._remaining && D(r, this._result);
              }),
              (F.prototype._willSettleAt = function (e, t) {
                var n = this;
                N(
                  e,
                  void 0,
                  function (e) {
                    return n._settledAt(1, t, e);
                  },
                  function (e) {
                    return n._settledAt(2, t, e);
                  }
                );
              }),
              (x.all = function (e) {
                return new F(this, e).promise;
              }),
              (x.race = function (e) {
                var t = this;
                return i(e)
                  ? new t(function (n, r) {
                      for (var i = e.length, o = 0; o < i; o++)
                        t.resolve(e[o]).then(n, r);
                    })
                  : new t(function (e, t) {
                      return t(
                        new TypeError("You must pass an array to race.")
                      );
                    });
              }),
              (x.resolve = A),
              (x.reject = function (e) {
                var t = new this(P);
                return k(t, e), t;
              }),
              (x._setScheduler = function (e) {
                s = e;
              }),
              (x._setAsap = function (e) {
                u = e;
              }),
              (x._asap = u),
              (x.prototype = {
                constructor: x,
                then: m,
                catch: function (e) {
                  return this.then(null, e);
                },
              }),
              Y(),
              (x.polyfill = Y),
              (x.Promise = x),
              x
            );
          }),
            (e.exports = i());
        }).call(this, n(21), n(22));
      },
      function (e, t, n) {
        "use strict";
        (function (e) {
          var n = function (e, t, n) {
              (this.id = e),
                (this.cmd = t),
                (this.params = n),
                (this.origin = window.location.origin
                  ? window.location.origin
                  : window.location.protocol +
                    "//" +
                    window.location.hostname +
                    (window.location.port ? ":" + window.location.port : "")),
                (this.pathname = window.location.pathname);
            },
            r = function (e, t, n, r) {
              (this.id = e),
                (this.cmd = t),
                (this.result = n),
                (this.error = r);
            },
            i = (function () {
              function t(e, t, n) {
                var r = this;
                (this.m_worker = this.loadWorker(e, t)),
                  (this.m_worker.onmessage = function (e) {
                    var t = e.data;
                    if (-2 != t.id) {
                      var i = r.m_promises[t.id - 1];
                      i &&
                        (delete r.m_promises[t.id - 1],
                        t.error ? i.reject(t.error) : i.resolve(t.result));
                    } else n(t.result);
                  }),
                  (this.m_worker.onerror = function (e) {
                    r.m_promises.forEach(function (t) {
                      t.reject(e.error);
                    }),
                      (r.m_promises = new Array());
                  }),
                  (this.m_promises = new Array());
              }
              return (
                (t.prototype.loadWorker = function (e, t) {
                  try {
                    if (!e) throw "No worker content";
                    try {
                      var n,
                        r = window,
                        i = r.URL || r.webkitURL;
                      try {
                        (n = new (r.BlobBuilder ||
                          r.WebKitBlobBuilder ||
                          r.MozBlobBuilder ||
                          r.MSBlobBuilder)()).append(e),
                          (n = n.getBlob());
                      } catch (t) {
                        n = new Blob([e]);
                      }
                      return new Worker(i.createObjectURL(n));
                    } catch (t) {
                      return new Worker(
                        "data:application/javascript," + encodeURIComponent(e)
                      );
                    }
                  } catch (e) {
                    if (!t) throw Error("Inline worker is not supported");
                    return new Worker(t);
                  }
                }),
                (t.prototype.postMessage = function (t, r) {
                  var i = this,
                    o = new n(-1, t, r),
                    a = new e(function (e, t) {
                      o.id = i.m_promises.push({ resolve: e, reject: t });
                    });
                  return this.m_worker.postMessage(o), a;
                }),
                t
              );
            })();
          (t.a = i),
            (function () {
              function e(e) {
                (this.m_context = e), (this.m_initialized = !1);
                var t = this;
                self.onmessage = function (e) {
                  t.onMessage(e.data);
                };
              }
              (e.prototype.postMessage = function (e, t, n, i) {
                var o = new r(e, t, n, i);
                self.postMessage(o);
              }),
                (e.prototype.onMessage = function (e) {
                  var t = this;
                  this.m_initialized
                    ? this.m_context[e.cmd]
                        .apply(this.m_context, e.params)
                        .then(
                          function (n) {
                            t.postMessage(e.id, e.cmd, n);
                          },
                          function (n) {
                            t.postMessage(e.id, e.cmd, null, n);
                          }
                        )
                    : setTimeout(function () {
                        t.onMessage(e);
                      }, 50);
                }),
                (e.prototype.initialize = function () {
                  this.m_initialized = !0;
                });
            })();
        }).call(this, n(17).Promise);
      },
      function (e, t, n) {
        "use strict";
        (function (e) {
          var r = n(1),
            i = n(9),
            o = n(10),
            a = n(14),
            s = n(20),
            u = n(4),
            l = n(13),
            c = n(2),
            p = n(8),
            f = n(0),
            _ = n(11),
            E = n(15),
            h = n(16),
            d = n(7),
            S = n(5),
            y = n(12),
            C = n(6),
            T = function () {},
            R = (function () {
              function t() {
                (this.m_library = new s.a()),
                  (this.m_settings = null),
                  (this.m_initialized = !1),
                  (this.m_kmTypes = null),
                  (this.m_kmActiveOperation = !1),
                  (this.m_context = null),
                  (this.m_pkContext = null),
                  (this.m_eventListeners = new Array()),
                  (this.m_resolveOIDs = !1);
              }
              return (
                (t.prototype.MapError = function (e) {
                  var t = new r.EndUserError();
                  return (
                    void 0 !== e.GetErrorCode && void 0 !== e.GetMessage
                      ? ((t.code = e.GetErrorCode()),
                        (t.message = e.GetMessage()))
                      : void 0 !== e.code && void 0 !== e.message
                      ? ((t.code = e.code), (t.message = e.message))
                      : ((t.code = r.EU_ERROR_UNKNOWN),
                        (t.message = e.toString())),
                    t
                  );
                }),
                (t.prototype.ProcessArray = function (t, n) {
                  var r = this;
                  return new e(function (e, i) {
                    var o = Array(),
                      a = 0,
                      s = function () {
                        a >= t.length
                          ? e(o)
                          : (n(t[a])
                              .then(function (e) {
                                o.push(e), s();
                              })
                              .catch(function (e) {
                                return i(r.MapError(e));
                              }),
                            a++);
                      };
                    s();
                  });
                }),
                (t.prototype.DataToNamedDataArray = function (e) {
                  (e = null != e ? e : []), (e = Array.isArray(e) ? e : [e]);
                  for (var t = [], n = 0; n < e.length; n++) {
                    var r = void 0 !== e[n].name && void 0 !== e[n].val;
                    t.push({
                      name: r ? e[n].name : "Ім'я відсутнє",
                      val: r ? e[n].val : e[n],
                    });
                  }
                  return t;
                }),
                (t.prototype.DataToResult = function (e, t) {
                  for (
                    var n = [], r = !Array.isArray(e), i = r ? [e] : e, o = 0;
                    o < i.length;
                    o++
                  ) {
                    var a =
                      void 0 !== i[o].name && void 0 !== i[o].val
                        ? { name: i[o].name, val: t[o] }
                        : t[o];
                    n.push(a);
                  }
                  return r ? n[0] : n;
                }),
                (t.prototype.OnEvent = function (e) {
                  try {
                    var t =
                      this.m_eventListeners[e.type] ||
                      this.m_eventListeners[f.EndUserEventType.All];
                    t && t(e);
                  } catch (e) {}
                }),
                (t.prototype.CheckInitialize = function () {
                  var t = this,
                    n = t.m_library;
                  return new e(function (e, i) {
                    t.m_initialized
                      ? e()
                      : n
                          .Load()
                          .then(function () {
                            throw n.MakeError(r.EU_ERROR_NOT_INITIALIZED, "");
                          })
                          .catch(function (e) {
                            return i(t.MapError(e));
                          });
                  });
                }),
                (t.prototype.BeginKMOperation = function () {
                  var t = this;
                  return new e(function (e, n) {
                    var r = function () {
                      t.m_kmActiveOperation
                        ? setTimeout(r, 10)
                        : ((t.m_kmActiveOperation = !0), e());
                    };
                    r();
                  });
                }),
                (t.prototype.EndKMOperation = function () {
                  this.m_kmActiveOperation = !1;
                }),
                (t.prototype.GetCASettings = function (e) {
                  if (!e) return null;
                  for (var t = this.m_settings.CAs, n = 0; n < t.length; n++)
                    for (var r = t[n].issuerCNs, i = 0; i < r.length; i++)
                      if (r[i] == e) return t[n];
                  return null;
                }),
                (t.prototype.IsCMPCompatible = function (e, t) {
                  return (
                    !!e.cmpAddress &&
                    (void 0 === e.cmpCompatibility ||
                      (e.cmpCompatibility & t) == t)
                  );
                }),
                (t.prototype.SetSettings = function (t) {
                  var n = this,
                    i = n.m_library,
                    o = n.m_settings.CAs,
                    a = this.GetCASettings(t),
                    s = o && o.length > 0 ? o[0] : null;
                  return new e(function (e, o) {
                    if (t && null == a)
                      throw i.MakeError(r.EU_ERROR_WRITE_SETTINGS, "");
                    var u = a && a.tspAddress ? a : s,
                      l = i.CreateTSPSettings();
                    l.SetGetStamps(!0),
                      l.SetAddress(u ? u.tspAddress : ""),
                      l.SetPort(u ? u.tspAddressPort : "80"),
                      i
                        .SetTSPSettings(l)
                        .then(function () {
                          var e = !a || !(!a || !a.ocspAccessPointAddress),
                            t = i.CreateOCSPSettings();
                          return (
                            t.SetUseOCSP(e),
                            e &&
                              (t.SetBeforeStore(!0),
                              t.SetAddress("czo.gov.ua"),
                              t.SetPort("80")),
                            i.SetOCSPSettings(t)
                          );
                        })
                        .then(function () {
                          var e;
                          e = !(!a || !a.cmpAddress);
                          var t = i.CreateCMPSettings();
                          return (
                            t.SetUseCMP(e),
                            e && (t.SetAddress(a.cmpAddress), t.SetPort("80")),
                            i.SetCMPSettings(t)
                          );
                        })
                        .then(function () {
                          e();
                        })
                        .catch(function (e) {
                          o(n.MapError(e));
                        });
                  });
                }),
                (t.prototype.GetJKSPrivateKey = function (t, n) {
                  var r = this,
                    i = r.m_library;
                  return new e(function (e, o) {
                    var s = { alias: null, info: null };
                    i.EnumJKSPrivateKeys(t, n)
                      .then(function (n) {
                        if (null != n)
                          return (s.alias = n), i.GetJKSPrivateKey(t, n);
                        e(null);
                      })
                      .then(function (e) {
                        s.info = e;
                        for (
                          var t = new Array(), n = 0;
                          n < e.GetCertificatesCount();
                          n++
                        )
                          t.push(e.GetCertificate(n));
                        return r.ProcessArray(t, function (e) {
                          return i.ParseCertificateEx(e);
                        });
                      })
                      .then(function (t) {
                        var n = new a.a();
                        (n.alias = s.alias),
                          (n.privateKey = s.info.GetPrivateKey()),
                          (n.certificates = new Array()),
                          (n.digitalStamp = !1);
                        for (var r = 0; r < t.length; r++) {
                          var o = t[r];
                          if (o.GetSubjType() == i.EU_SUBJECT_TYPE_END_USER) {
                            o.GetPublicKeyType() ==
                              i.EU_CERT_KEY_TYPE_DSTU4145 &&
                              (o.GetKeyUsageType() &
                                i.EU_KEY_USAGE_DIGITAL_SIGNATURE) ==
                                i.EU_KEY_USAGE_DIGITAL_SIGNATURE &&
                              (n.digitalStamp =
                                o
                                  .GetExtKeyUsages()
                                  .indexOf(i.EU_UA_OID_EXT_KEY_USAGE_STAMP) >
                                -1);
                            var l = new u.EndUserCertificate();
                            (l.data = s.info.GetCertificate(r)),
                              (l.infoEx = c.a.MapToEndUserCertificateInfoEx(
                                o,
                                new p. a()
                              )),
                              n.certificates.push(l);
                          }
                        }
                        (n.digitalStamp = !1), e(n);
                      })
                      .catch(function (e) {
                        return o(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.SaveCertificatesInternal = function (t) {
                  var n = this,
                    r = this.m_library;
                  return new e(function (e, i) {
                    t
                      ? Array.isArray(t)
                        ? n
                            .ProcessArray(t, function (e) {
                              return r.SaveCertificate(e);
                            })
                            .then(function () {
                              return e();
                            })
                            .catch(function (e) {
                              return i(e);
                            })
                        : r
                            .SaveCertificates(t)
                            .then(function () {
                              return e();
                            })
                            .catch(function (e) {
                              return i(e);
                            })
                      : e();
                  });
                }),
                (t.prototype.CtxReadPrivateKeyInternal = function (
                  t,
                  n,
                  i,
                  o,
                  a,
                  s
                ) {
                  var u = this,
                    l = this.m_library,
                    c = { pkContext: null };
                  return (
                    t || (t = u.m_context),
                    new e(function (e, p) {
                      u.SaveCertificatesInternal(a)
                        .then(function () {
                          return u.SetSettings(s);
                        })
                        .then(function () {
                          return null != n && null != i
                            ? l.CtxReadPrivateKeyBinary(t, n, i)
                            : l.CtxReadPrivateKey(t, o);
                        })
                        .then(function (e) {
                          c.pkContext = e;
                          var t = e.GetOwnerInfo();
                          if (!s) return u.SetSettings(t.GetIssuerCN());
                          var n = u.GetCASettings(t.GetIssuerCN());
                          if (!n || -1 == n.issuerCNs.indexOf(s))
                            throw l.MakeError(r.EU_ERROR_CERT_NOT_FOUND, "");
                        })
                        .then(function () {
                          e(c.pkContext);
                        })
                        .catch(function (a) {
                          null == c.pkContext
                            ? u.MapError(a).code != r.EU_ERROR_CERT_NOT_FOUND ||
                              s
                              ? p(u.MapError(a))
                              : u
                                  .SearchPrivateKeyCertificatesWithCMP(n, i, o)
                                  .then(function (e) {
                                    return u.CtxReadPrivateKeyInternal(
                                      t,
                                      n,
                                      i,
                                      o,
                                      e.certs,
                                      e.CACommonName
                                    );
                                  })
                                  .then(function (t) {
                                    e(t);
                                  })
                                  .catch(function (e) {
                                    return p(u.MapError(e));
                                  })
                            : l
                                .CtxFreePrivateKey(c.pkContext)
                                .then(function () {
                                  p(u.MapError(a));
                                })
                                .catch(function () {
                                  p(u.MapError(a));
                                });
                        });
                    })
                  );
                }),
                (t.prototype.ReadPrivateKeyInternal = function (t, n, r, i, a) {
                  var s = this;
                  return new e(function (e, u) {
                    s.ResetPrivateKeyInternal()
                      .then(function () {
                        return s.CtxReadPrivateKeyInternal(
                          s.m_context,
                          t,
                          n,
                          r,
                          i,
                          a
                        );
                      })
                      .then(function (t) {
                        s.m_pkContext = t;
                        var n = c.a.MapEndUserOwnerInfo(
                          t.GetOwnerInfo(),
                          new o.a()
                        );
                        e(n);
                      })
                      .catch(function (e) {
                        u(s.MapError(e));
                      });
                  });
                }),
                (t.prototype.ResetPrivateKeyInternal = function () {
                  var t = this,
                    n = this.m_library;
                  return new e(function (e, r) {
                    null != t.m_pkContext
                      ? n
                          .CtxFreePrivateKey(t.m_pkContext)
                          .then(function () {
                            (t.m_pkContext = null), e();
                          })
                          .catch(function (e) {
                            return r(t.MapError(e));
                          })
                      : e();
                  });
                }),
                (t.prototype.SearchPrivateKeyCertificatesWithCMP = function (
                  t,
                  n,
                  i,
                  o
                ) {
                  var a = this,
                    s = a.m_library,
                    u = a.m_settings.CAs;
                  return new e(function (e, l) {
                    (null != t && null != n
                      ? s.GetKeyInfoBinary(t, n)
                      : s.GetKeyInfo(i)
                    )
                      .then(function (t) {
                        var n = function (i, c) {
                          if (i >= u.length) {
                            var p = s.MakeError(
                              c
                                ? r.EU_ERROR_CERT_NOT_FOUND
                                : r.EU_ERROR_TRANSMIT_REQUEST,
                              ""
                            );
                            l(a.MapError(p));
                          } else {
                            var _ = o
                              ? f.EndUserCMPCompatibility.DownloadEUCerts
                              : f.EndUserCMPCompatibility.SearchEUCerts;
                            a.IsCMPCompatible(u[i], _)
                              ? o && -1 == u[i].issuerCNs.indexOf(o)
                                ? n(i + 1, c)
                                : s
                                    .GetCertificatesByKeyInfo(
                                      t,
                                      [u[i].cmpAddress],
                                      ["80"]
                                    )
                                    .then(function (t) {
                                      e({
                                        certs: t,
                                        CACommonName: u[i].issuerCNs[0],
                                      });
                                    })
                                    .catch(function (e) {
                                      var t = e.GetErrorCode();
                                      if (
                                        t == r.EU_ERROR_CERT_NOT_FOUND ||
                                        t == r.EU_ERROR_TRANSMIT_REQUEST
                                      )
                                        return (
                                          (c =
                                            c ||
                                            t == r.EU_ERROR_CERT_NOT_FOUND),
                                          void n(i + 1, c)
                                        );
                                      l(a.MapError(e));
                                    })
                              : n(i + 1, c);
                          }
                        };
                        n(0, !1);
                      })
                      .catch(function (e) {
                        return l(a.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetUserCertificatesFromCertificates = function (
                  t
                ) {
                  var n = this,
                    r = n.m_library;
                  return new e(function (e, i) {
                    var o = new Array(),
                      a = function (s) {
                        r.GetCertificateFromSignedData(s, t)
                          .then(function (t) {
                            if (null != t) {
                              var n = new u.EndUserCertificate();
                              return (
                                (n.data = t), o.push(n), r.ParseCertificateEx(t)
                              );
                            }
                            for (var i = new Array(), a = 0; a < o.length; a++)
                              o[a].infoEx.subjType ==
                                r.EU_SUBJECT_TYPE_END_USER && i.push(o[a]);
                            e(i);
                          })
                          .then(function (e) {
                            (o[s].infoEx = c.a.MapToEndUserCertificateInfoEx(
                              e,
                              new p.a()
                            )),
                              a(s + 1);
                          })
                          .catch(function (e) {
                            return i(n.MapError(e));
                          });
                      };
                    a(0);
                  });
                }),
                (t.prototype.GeneratePrivateKeyInternal = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  p,
                  f,
                  _,
                  E
                ) {
                  var d = this,
                    S = this.m_library;
                  return new e(function (e, y) {
                    var C = null == t && null == r,
                      T = null != r,
                      R = S.CreatePrivateKeyInfo(),
                      m = null;
                    null != _ &&
                      (m = c.a.MapFromEndUserInfo(_, S.CreateEndUserInfo())),
                      S.GeneratePrivateKeyEx(
                        C,
                        t ? t.GetTypeIndex() : -1,
                        t ? t.GetDevIndex() : -1,
                        t ? t.GetPassword() : r,
                        n,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        p,
                        f,
                        m,
                        E,
                        R,
                        null != r
                      )
                        .then(function (t) {
                          for (var n = new Array(), r = 0; r < t.size(); r++) {
                            var i = t.get(r);
                            (i = c.a.MapToEndUserRequestInfo(i, new h.a())),
                              n.push(i);
                          }
                          var o = {
                            key: T ? R.GetPrivateKey() : null,
                            requests: n,
                          };
                          e(o);
                        })
                        .catch(function (e) {
                          return y(d.MapError(e));
                        });
                  });
                }),
                (t.prototype.GetHashAlgoBySignAlgo = function (e) {
                  var t = this.m_library;
                  switch (e) {
                    case f.EndUserSignAlgo.DSTU4145WithGOST34311:
                      return f.EndUserHashAlgo.GOST34311;
                    case f.EndUserSignAlgo.RSAWithSHA:
                    case f.EndUserSignAlgo.ECDSAWithSHA:
                      return f.EndUserHashAlgo.SHA256;
                    default:
                      throw t.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                  }
                }),
                (t.prototype.CtxSignHashInternal = function (t, n, i, o, a, s) {
                  var u = this,
                    l = this.m_library,
                    c = null != o,
                    p = u.DataToNamedDataArray(i),
                    f = u.DataToNamedDataArray(o);
                  return new e(function (o, _) {
                    u.CheckInitialize()
                      .then(function () {
                        if (null == t)
                          throw l.MakeError(r.EU_ERROR_BAD_CERT, "");
                        if (c && p.length != f.length)
                          throw l.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                        for (var i = new Array(), o = 0; o < p.length; o++)
                          i.push({ hash: p[o], previousSign: c ? f[o] : null });
                        return u.ProcessArray(i, function (r) {
                          return new e(function (e, i) {
                            (c
                              ? l.CtxAppendSignHash(
                                  t,
                                  n,
                                  r.hash.val,
                                  r.previousSign.val,
                                  a
                                )
                              : l.CtxSignHash(t, n, r.hash.val, a)
                            )
                              .then(function (e) {
                                return s ? e : l.BASE64Decode(e);
                              })
                              .then(function (t) {
                                e(t);
                              })
                              .catch(function (e) {
                                return i(e);
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        var t = u.DataToResult(i, e);
                        o(t);
                      })
                      .catch(function (e) {
                        return _(u.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxSignDataInternal = function (
                  t,
                  n,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l = this,
                    c = this,
                    p = this.m_library,
                    f = null != o,
                    _ = c.DataToNamedDataArray(i),
                    E = c.DataToNamedDataArray(o);
                  return new e(function (h, d) {
                    c.CheckInitialize()
                      .then(function () {
                        if (null == t)
                          throw p.MakeError(r.EU_ERROR_BAD_CERT, "");
                        if (f && a && _.length != E.length)
                          throw p.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                        if (!a) return _;
                        var e = c.GetHashAlgoBySignAlgo(n);
                        return c.HashData(e, _, !0);
                      })
                      .then(function (r) {
                        for (
                          var i = new Array(),
                            o = f ? E.length : r.length,
                            l = 0;
                          l < o;
                          l++
                        )
                          i.push({
                            dataOrHash: null != r ? r[l] : null,
                            previousSign: f ? E[l] : null,
                          });
                        return c.ProcessArray(i, function (r) {
                          return new e(function (e, i) {
                            (f
                              ? a
                                ? p.CtxAppendSignHash(
                                    t,
                                    n,
                                    r.dataOrHash.val,
                                    r.previousSign.val,
                                    s
                                  )
                                : p.CtxAppendSign(
                                    t,
                                    n,
                                    null,
                                    r.previousSign.val,
                                    s
                                  )
                              : a
                              ? p.CtxSignHash(t, n, r.dataOrHash.val, s)
                              : p.CtxSign(t, n, r.dataOrHash.val, !1, s)
                            )
                              .then(function (e) {
                                return u ? e : p.BASE64Decode(e);
                              })
                              .then(function (t) {
                                e(t);
                              })
                              .catch(function (e) {
                                return i(e);
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        var t = l.DataToResult(f && !a ? o : i, e);
                        h(t);
                      })
                      .catch(function (e) {
                        return d(c.MapError(e));
                      });
                  });
                }),
                (t.prototype.LoadTaxReportPKey = function (t, n, i) {
                  var o = this,
                    a = this.m_library;
                  return new e(function (e, s) {
                    var u = new T();
                    if ((Array.isArray(t) || (t = [t]), t.length > 2))
                      s(o.MapError(a.MakeError(r.EU_ERROR_BAD_PARAMETER, "")));
                    else {
                      var l = function (c, p) {
                        var _ = n[c],
                          E = t[p];
                        a.CtxGetOwnCertificate(
                          E,
                          f.EndUserCertKeyType.DSTU4145,
                          _
                        )
                          .then(function (t) {
                            if (
                              i &&
                              _ & f.EndUserKeyUsage.DigitalSignature &&
                              !(
                                t
                                  .GetInfoEx()
                                  .GetExtKeyUsages()
                                  .indexOf(a.EU_UA_OID_EXT_KEY_USAGE_STAMP) > -1
                              )
                            )
                              throw a.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                            if (_ & f.EndUserKeyUsage.DigitalSignature)
                              (u.signPKCtx = E), (u.signCert = t);
                            else {
                              if (!(_ & f.EndUserKeyUsage.KeyAgreement))
                                throw a.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                              (u.envelopPKCtx = E), (u.envelopCert = t);
                            }
                            c + 1 < n.length ? l(c + 1, 0) : e(u);
                          })
                          .catch(function (e) {
                            if (e.GetErrorCode() == r.EU_ERROR_CERT_NOT_FOUND) {
                              if (p + 1 < t.length) return void l(c, p + 1);
                              e = a.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                            }
                            s(o.MapError(e));
                          });
                      };
                      l(0, 0);
                    }
                  });
                }),
                (t.prototype.ProtectTaxReport = function (t, n, i, o, a, s, u) {
                  var l = this,
                    c = this.m_library,
                    p = new _.b();
                  p.name = s.name;
                  var f = function (t, n) {
                      return new e(function (e, r) {
                        return c
                          .CtxSign(
                            t.signPKCtx,
                            c.EU_CTX_SIGN_DSTU4145_WITH_GOST34311,
                            n,
                            !1,
                            !0
                          )
                          .then(function (e) {
                            return c.BASE64Decode(e);
                          })
                          .then(function (e) {
                            return c.AppendCryptoHeader(
                              c.EU_HEADER_CA_TYPE,
                              c.EU_HEADER_PART_TYPE_SIGNED,
                              e
                            );
                          })
                          .then(function (t) {
                            e(t);
                          })
                          .catch(function (e) {
                            return r(l.MapError(e));
                          });
                      });
                    },
                    E = function (t, n) {
                      return new e(function (r, i) {
                        return c
                          .CtxEnvelop(
                            t.envelopPKCtx,
                            [a],
                            c.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL,
                            !1,
                            !1,
                            n
                          )
                          .then(function (e) {
                            return c.BASE64Decode(e);
                          })
                          .then(function (e) {
                            return c.AppendCryptoHeader(
                              c.EU_HEADER_CA_TYPE,
                              c.EU_HEADER_PART_TYPE_ENCRYPTED,
                              e
                            );
                          })
                          .then(function (n) {
                            var r = t.envelopCert,
                              i =
                                c.EU_KEY_USAGE_DIGITAL_SIGNATURE |
                                c.EU_KEY_USAGE_KEY_AGREEMENT;
                            return i == (r.GetInfoEx().GetKeyUsageType() & i)
                              ? n
                              : (function (t, n) {
                                  return new e(function (e, r) {
                                    return c
                                      .AppendCryptoHeader(
                                        c.EU_HEADER_CA_TYPE,
                                        c.EU_HEADER_PART_TYPE_CERTCRYPT,
                                        t
                                      )
                                      .then(function (t) {
                                        var r = new Uint8Array(
                                          t.byteLength + n.byteLength
                                        );
                                        r.set(new Uint8Array(t), 0),
                                          r.set(
                                            new Uint8Array(n),
                                            t.byteLength
                                          ),
                                          e(r);
                                      })
                                      .catch(function (e) {
                                        return r(l.MapError(e));
                                      });
                                  });
                                })(r.GetData(), n);
                          })
                          .then(function (e) {
                            return f(t, e);
                          })
                          .then(function (e) {
                            r({
                              reportData: e,
                              ownCert: t.envelopCert.GetData(),
                            });
                          })
                          .catch(function (e) {
                            return i(l.MapError(e));
                          });
                      });
                    };
                  return new e(function (a, _) {
                    new e(function (e, t) {
                      e(s.data);
                    })
                      .then(function (e) {
                        return null != t ? f(t, e) : e;
                      })
                      .then(function (e) {
                        return null != n ? f(n, e) : e;
                      })
                      .then(function (e) {
                        return null != i ? f(i, e) : e;
                      })
                      .then(function (e) {
                        return (
                          u && (p.signedData = e),
                          null != n || null != i
                            ? E(null != i ? i : n, e)
                            : { reportData: e, ownCert: t.signCert.GetData() }
                        );
                      })
                      .then(function (e) {
                        return c.AppendTransportHeader(
                          c.EU_HEADER_CA_TYPE,
                          s.name,
                          o,
                          e.ownCert,
                          e.reportData
                        );
                      })
                      .then(function (e) {
                        (p.data = e),
                          (p.error = l.MapError(
                            c.MakeError(r.EU_ERROR_NONE, "")
                          )),
                          a(p);
                      })
                      .catch(function (e) {
                        (p.error = l.MapError(e)), a(p);
                      });
                  });
                }),
                (t.prototype.UnprotectTaxReceipt = function (t, n) {
                  var i = this,
                    o = this.m_library,
                    a = new _.a();
                  return (
                    (a.data = null),
                    (a.receiptNumber = 0),
                    (a.initiators = []),
                    (a.error = null),
                    new e(function (s, u) {
                      var l;
                      ((l = n.data),
                      new e(function (e, t) {
                        o.ParseTransportHeader(l)
                          .then(function (t) {
                            (a.receiptNumber = t.GetReceiptNumber()),
                              e(t.GetCryptoData());
                          })
                          .catch(function (n) {
                            n.GetErrorCode() == r.EU_ERROR_PKI_FORMATS_FAILED
                              ? e(l)
                              : t(i.MapError(n));
                          });
                      }))
                        .then(function (n) {
                          var l = function (n) {
                            (function (n) {
                              var s = { headerInfo: null };
                              return new e(function (e, u) {
                                o.ParseCryptoHeader(n)
                                  .then(function (e) {
                                    s.headerInfo = e;
                                    var n = e.GetCryptoData();
                                    switch (e.GetHeaderType()) {
                                      case o.EU_HEADER_PART_TYPE_SIGNED:
                                        return o.VerifyDataInternalOnTimeEx(
                                          n,
                                          0,
                                          null,
                                          !1,
                                          !1
                                        );
                                      case o.EU_HEADER_PART_TYPE_ENCRYPTED:
                                        return o.CtxDevelop(t, n);
                                      case o.EU_HEADER_PART_TYPE_STAMPED:
                                      case o.EU_HEADER_PART_TYPE_CERTCRYPT:
                                        return null;
                                      default:
                                        throw o.MakeError(
                                          r.EU_ERROR_PKI_FORMATS_FAILED,
                                          ""
                                        );
                                    }
                                  })
                                  .then(function (t) {
                                    if (null != t) {
                                      var r =
                                        s.headerInfo.GetHeaderType() ==
                                        o.EU_HEADER_PART_TYPE_SIGNED
                                          ? c.a.MapToEndUserSignInfo(
                                              t,
                                              new S.a()
                                            )
                                          : c.a.MapToEndUserSenderInfo(
                                              t,
                                              new y.a()
                                            );
                                      a.initiators.push(r), (n = t.GetData());
                                    } else n = n.slice(s.headerInfo.GetHeaderSize() + s.headerInfo.GetCryptoData().length, n.length);
                                    e(n);
                                  })
                                  .catch(function (t) {
                                    t.GetErrorCode() == r.EU_ERROR_BAD_PARAMETER
                                      ? e(null)
                                      : u(i.MapError(t));
                                  });
                              });
                            })(n)
                              .then(function (e) {
                                if (null == e)
                                  return (
                                    (a.data = n),
                                    (a.error = i.MapError(
                                      o.MakeError(r.EU_ERROR_NONE, "")
                                    )),
                                    void s(a)
                                  );
                                l(e);
                              })
                              .catch(function (e) {
                                return u(i.MapError(e));
                              });
                          };
                          l(n);
                        })
                        .catch(function (e) {
                          return u(i.MapError(e));
                        });
                    })
                  );
                }),
                (t.prototype.AddEventListener = function (t, n) {
                  var i = this,
                    o = i.m_library;
                  return new e(function (e, a) {
                    if (
                      [
                        f.EndUserEventType.None,
                        f.EndUserEventType.All,
                        f.EndUserEventType.ConfirmKSPOperation,
                      ].indexOf(t) < 0
                    )
                      a(i.MapError(o.MakeError(r.EU_ERROR_BAD_PARAMETER, "")));
                    else {
                      switch (t) {
                        case f.EndUserEventType.None:
                          i.m_eventListeners = [];
                          break;
                        case f.EndUserEventType.All:
                          (i.m_eventListeners = []),
                            (i.m_eventListeners[t] = n);
                          break;
                        default:
                          i.m_eventListeners[t] = n;
                      }
                      e();
                    }
                  });
                }),
                (t.prototype.GetLibraryInfo = function (t) {
                  var n = this,
                    r = this.m_library;
                  return new e(function (e, i) {
                    var o = new l.b();
                    (o.supported = r.IsSupported()),
                      (o.isSignAgentSupported = r.IsSignAgentSupported()),
                      (o.isWebExtensionSupported = r.IsWebExtensionSupported()),
                      (o.isNPAPISupported = r.IsNPAPISupported()),
                      (o.isActiveXSupported = r.IsActiveXSupported()),
                      (o.isWebExtensionInstalled = r.IsWebExtensionInstalled()),
                      (o.nativeLibraryInstallURLs = r.GetInstallURL(!0, t)),
                      (o.nativeLibraryInstallURL = o.nativeLibraryInstallURLs
                        ? o.nativeLibraryInstallURLs[0]
                        : null),
                      (o.nativeLibraryUpdateURLs = r.GetUpdateURL(!0, t)),
                      (o.nativeLibraryUpdateURL = o.nativeLibraryUpdateURLs
                        ? o.nativeLibraryUpdateURLs[0]
                        : null),
                      (o.webExtensionInstallURL =
                        r.GetWebExtensionInstallURL()),
                      (o.helpURL = r.GetHelpURL(t)),
                      o.supported
                        ? r
                            .Load()
                            .then(function () {
                              (o.loaded = !0),
                                r
                                  .GetVersion()
                                  .then(function (t) {
                                    (o.version = t), e(o);
                                  })
                                  .catch(function (e) {
                                    return i(n.MapError(e));
                                  });
                            })
                            .catch(function (t) {
                              var i = n.MapError(t);
                              (o.loaded = !1),
                                (o.isNativeLibraryNeedUpdate =
                                  r.IsLibraryVersionNotSupportedError(i.code)),
                                e(o);
                            })
                        : e(o);
                  });
                }),
                (t.prototype.IsInitialized = function () {
                  var t = this;
                  return new e(function (e, n) {
                    e(t.m_initialized);
                  });
                }),
                (t.prototype.Initialize = function (t) {
                  var n = this,
                    r = n.m_library;
                  return (
                    (n.m_settings = t),
                    new e(function (e, i) {
                      r.Load()
                        .then(function () {
                          return r.SetRuntimeParameter(
                            r.EU_SAVE_SETTINGS_PARAMETER,
                            r.EU_SETTINGS_ID_PROXY
                          );
                        })
                        .then(function () {
                          return r.SetUIMode(!1);
                        })
                        .then(function () {
                          return r.Initialize();
                        })
                        .then(function () {
                          return r.SetUIMode(!1);
                        })
                        .then(function () {
                          return r.SetCharset(n.m_settings.encoding);
                        })
                        .then(function () {
                          return r.SetLanguage(n.m_settings.language);
                        })
                        .then(function () {
                          return r.InitializeMandatorySettings();
                        })
                        .then(function () {
                          var e = r.CreateFileStoreSettings();
                          return (
                            e.SetPath(""),
                            e.SetSaveLoadedCerts(!0),
                            r.SetFileStoreSettings(e)
                          );
                        })
                        .then(function () {
                          return null != n.m_settings.CAs &&
                            "string" == typeof n.m_settings.CAs
                            ? r.DownloadData(n.m_settings.CAs, "json")
                            : n.m_settings.CAs;
                        })
                        .then(function (e) {
                          n.m_settings.CAs = e;
                          var t = r.CreateOCSPAccessInfoModeSettings();
                          return (
                            t.SetEnabled(!0), r.SetOCSPAccessInfoModeSettings(t)
                          );
                        })
                        .then(function () {
                          for (
                            var e = new Array(), t = n.m_settings.CAs, i = 0;
                            i < t.length;
                            i++
                          )
                            for (var o = 0; o < t[i].issuerCNs.length; o++) {
                              var a = r.CreateOCSPAccessInfoSettings();
                              a.SetAddress(t[i].ocspAccessPointAddress),
                                a.SetPort(t[i].ocspAccessPointPort),
                                a.SetIssuerCN(t[i].issuerCNs[o]),
                                e.push(a);
                            }
                          return r.SetOCSPAccessInfoSettings(e);
                        })
                        .then(function () {
                          var e = r.CreateModeSettings();
                          return r.SetModeSettings(e);
                        })
                        .then(function () {
                          return null != t.CACertificates &&
                            "string" == typeof t.CACertificates
                            ? r.DownloadData(t.CACertificates, "binary")
                            : t.CACertificates;
                        })
                        .then(function (e) {
                          if (null != t.CACertificates)
                            return r.SaveCertificates(e);
                        })
                        .then(function () {
                          var e = !!t.TSLAddress,
                            n = r.CreateTSLSettings();
                          return (
                            n.SetUseTSL(e),
                            n.SetAutoDownloadTSL(!!e),
                            n.SetTSLAddress(e ? t.TSLAddress : ""),
                            r.SetTSLSettings(n)
                          );
                        })
                        .then(function () {
                          return r.SetRuntimeParameter(
                            r.EU_RESOLVE_OIDS_PARAMETER,
                            n.m_resolveOIDs
                          );
                        })
                        .then(function () {
                          if ("number" == typeof n.m_settings.connectionTimeout)
                            return r.SetRuntimeParameter(
                              r.EU_CONNECTIONS_TIMEOUT_PARAMETER,
                              n.m_settings.connectionTimeout
                            );
                        })
                        .then(function () {
                          if ("number" == typeof t.ocspResponseExpireTime)
                            return r.SetOCSPResponseExpireTime(
                              n.m_settings.ocspResponseExpireTime
                            );
                        })
                        .then(function () {
                          return r.CtxCreate();
                        })
                        .then(function (e) {
                          return (
                            (n.m_context = e),
                            r.CtxSetParameter(
                              e,
                              r.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
                              n.m_resolveOIDs
                            )
                          );
                        })
                        .then(function () {
                          return r.SetRuntimeParameter(
                            r.EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER,
                            !0
                          );
                        })
                        .then(function () {
                          return null != n.m_settings.signInfoTmpl &&
                            "string" == typeof n.m_settings.signInfoTmpl
                            ? r.DownloadData(n.m_settings.signInfoTmpl, "")
                            : n.m_settings.signInfoTmpl;
                        })
                        .then(function (t) {
                          (n.m_settings.signInfoTmpl = t),
                            (n.m_initialized = !0),
                            e();
                        })
                        .catch(function (e) {
                          return i(n.MapError(e));
                        });
                    })
                  );
                }),
                (t.prototype.SetRuntimeParameter = function (t, n) {
                  var r = this,
                    i = r.m_library;
                  return new e(function (e, o) {
                    r.CheckInitialize()
                      .then(function () {
                        return i.SetRuntimeParameter(t, n);
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return o(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetStorageParameter = function (t, n) {
                  var r = this,
                    i = r.m_library;
                  return new e(function (e, o) {
                    r.CheckInitialize()
                      .then(function () {
                        return i.GetStorageParameter(n, t);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return o(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.SetStorageParameter = function (t, n, r) {
                  var i = this,
                    o = i.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.SetStorageParameter(r, t, n);
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetCAs = function () {
                  var t = this;
                  return new e(function (e, n) {
                    t.CheckInitialize()
                      .then(function () {
                        e(t.m_settings.CAs);
                      })
                      .catch(function (e) {
                        return n(t.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetProxySettings = function () {
                  var t = this,
                    n = t.m_library;
                  return new e(function (e, r) {
                    t.CheckInitialize()
                      .then(function () {
                        return n.GetProxySettings();
                      })
                      .then(function (t) {
                        var n = c.a.MapToProxySettings(t, new i.b());
                        e(n);
                      })
                      .catch(function (e) {
                        return r(t.MapError(e));
                      });
                  });
                }),
                (t.prototype.SetProxySettings = function (t) {
                  var n = this,
                    r = n.m_library;
                  return new e(function (e, i) {
                    n.CheckInitialize()
                      .then(function () {
                        var e = c.a.MapFromProxySettings(
                          t,
                          r.CreateProxySettings()
                        );
                        return r.SetProxySettings(e);
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return i(n.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetKeyMedias = function () {
                  var t = this,
                    n = t.m_library,
                    r = new Array(),
                    i = null;
                  return (
                    t.m_settings.allowedKeyMediaDevices &&
                      ((i = {}),
                      t.m_settings.allowedKeyMediaDevices.forEach(function (e) {
                        i[e.type] = e.devices;
                      })),
                    new e(function (e, o) {
                      t.CheckInitialize()
                        .then(function () {
                          return t.BeginKMOperation();
                        })
                        .then(function () {
                          return t.m_kmTypes
                            ? t.m_kmTypes
                            : n.GetKeyMediaTypes();
                        })
                        .then(function (e) {
                          t.m_kmTypes = e;
                          var i = t.m_settings.allowedKeyMediaTypes;
                          r = new Array();
                          for (var o = 0; o < e.length; o++) {
                            var a = e[o];
                            (!i || i.indexOf(a) >= 0) && r.push(o);
                          }
                          return n.GetKeyMediaDevices(r);
                        })
                        .then(function (n) {
                          for (var o = new Array(), a = 0; a < n.length; a++)
                            for (
                              var s = r[a],
                                l = t.m_kmTypes[s],
                                c = n[a],
                                p = i && i[l] ? i[l] : null,
                                f = 0;
                              f < c.length;
                              f++
                            )
                              if (!p || -1 != p.indexOf(c[f])) {
                                var _ = new u.EndUserKeyMedia();
                                (_.typeIndex = s),
                                  (_.devIndex = f),
                                  (_.password = null),
                                  (_.type = l),
                                  (_.device = c[f]),
                                  (_.visibleName =
                                    _.device + "(" + _.type + ")"),
                                  o.push(_);
                              }
                          t.EndKMOperation(), e(o);
                        })
                        .catch(function (e) {
                          t.EndKMOperation(), o(t.MapError(e));
                        });
                    })
                  );
                }),
                (t.prototype.GetJKSPrivateKeys = function (t) {
                  var n = this;
                  return new e(function (e, r) {
                    n.CheckInitialize()
                      .then(function () {
                        var i = new Array(),
                          o = function (a) {
                            n.GetJKSPrivateKey(t, a)
                              .then(function (t) {
                                t ? (i.push(t), o(a + 1)) : e(i);
                              })
                              .catch(function (e) {
                                return r(n.MapError(e));
                              });
                          };
                        o(0);
                      })
                      .catch(function (e) {
                        return r(n.MapError(e));
                      });
                  });
                }),
                (t.prototype.IsPrivateKeyReaded = function () {
                  var t = this;
                  return new e(function (e, n) {
                    t.CheckInitialize()
                      .then(function () {
                        e(null != t.m_pkContext);
                      })
                      .catch(function (e) {
                        return n(t.MapError(e));
                      });
                  });
                }),
                (t.prototype.ResetPrivateKey = function () {
                  var t = this;
                  return new e(function (e, n) {
                    t.CheckInitialize()
                      .then(function () {
                        return t.ResetPrivateKeyInternal();
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return n(t.MapError(e));
                      });
                  });
                }),
                (t.prototype.ResetOperationKSP = function () {
                  var t = this,
                    n = this.m_library;
                  return new e(function (e, i) {
                    t.CheckInitialize()
                      .then(function () {
                        throw n.MakeError(r.EU_ERROR_NOT_SUPPORTED, "");
                      })
                      .catch(function (e) {
                        return i(t.MapError(e));
                      });
                  });
                }),
                (t.prototype.ReadPrivateKey = function (t, n, r) {
                  var i = this,
                    o = this.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        i.BeginKMOperation();
                      })
                      .then(function () {
                        var e = c.a.MapFromKeyMedia(t, o.CreateKeyMedia());
                        return i.ReadPrivateKeyInternal(null, null, e, n, r);
                      })
                      .then(function (t) {
                        i.EndKMOperation(), e(t);
                      })
                      .catch(function (e) {
                        i.EndKMOperation(), a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.ReadPrivateKeyBinary = function (t, n, r, i) {
                  var o = this;
                  return new e(function (e, a) {
                    o.CheckInitialize()
                      .then(function () {
                        return o.ReadPrivateKeyInternal(t, n, null, r, i);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return a(o.MapError(e));
                      });
                  });
                }),
                (t.prototype.ReadPrivateKeySIM = function (t, n, i, o) {
                  var a = this,
                    s = this.m_library;
                  return new e(function (e, t) {
                    a.CheckInitialize()
                      .then(function () {
                        throw s.MakeError(r.EU_ERROR_NOT_SUPPORTED, "");
                      })
                      .catch(function (e) {
                        return t(a.MapError(e));
                      });
                  });
                }),
                (t.prototype.ReadPrivateKeyKSP = function (t, n, i, o) {
                  var a = this,
                    s = this.m_library;
                  return new e(function (e, t) {
                    a.CheckInitialize()
                      .then(function () {
                        throw s.MakeError(r.EU_ERROR_NOT_SUPPORTED, "");
                      })
                      .catch(function (e) {
                        return t(a.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetOwnCertificates = function () {
                  return this.CtxGetOwnCertificates(this.m_pkContext);
                }),
                (t.prototype.GetOwnEUserParams = function () {
                  var t = this,
                    n = t.m_library;
                  return new e(function (e, i) {
                    t.CheckInitialize()
                      .then(function () {
                        if (null == t.m_pkContext)
                          throw n.MakeError(r.EU_ERROR_BAD_CERT, "");
                        return n.CtxGetOwnEUserParams(t.m_pkContext);
                      })
                      .then(function (t) {
                        var n = c.a.MapToEndUserParams(t, new E.a());
                        e(n);
                      })
                      .catch(function (e) {
                        return i(t.MapError(e));
                      });
                  });
                }),
                (t.prototype.ChangeOwnCertificatesStatus = function (t, n) {
                  var i = this,
                    o = i.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        if (null == i.m_pkContext)
                          throw o.MakeError(r.EU_ERROR_BAD_CERT, "");
                        return o.CtxChangeOwnCertificatesStatus(
                          i.m_pkContext,
                          t,
                          n
                        );
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.MakeNewCertificate = function (
                  t,
                  n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  p,
                  f,
                  _,
                  E,
                  h,
                  d,
                  S,
                  y,
                  C,
                  T
                ) {
                  void 0 === y && (y = !1),
                    void 0 === C && (C = null),
                    void 0 === T && (T = null);
                  var R = this,
                    m = R.m_library,
                    A = { key: null, certs: null };
                  return new e(function (g, P) {
                    R.CheckInitialize()
                      .then(function () {
                        if (null != C || null != T)
                          throw m.MakeError(r.EU_ERROR_NOT_SUPPORTED, "");
                        return R.BeginKMOperation();
                      })
                      .then(function () {
                        var e = null;
                        return (
                          null != t &&
                            (e = c.a.MapFromKeyMedia(t, m.CreateKeyMedia())),
                          y ? null : R.ReadPrivateKeyInternal(n, i, e, null, d)
                        );
                      })
                      .then(function (e) {
                        return S && !y
                          ? m.CtxGetOwnEUserParams(R.m_pkContext)
                          : null;
                      })
                      .then(function (e) {
                        return S
                          ? m.CtxModifyOwnEUserParams(
                              R.m_pkContext,
                              S.phone,
                              S.EMail
                            )
                          : null;
                      })
                      .then(function () {
                        return y ? null : R.ResetPrivateKeyInternal();
                      })
                      .then(function () {
                        if (y)
                          return new e(function (e, n) {
                            m.CtxMakeNewOwnCertificate(
                              R.m_pkContext,
                              o,
                              a,
                              s,
                              u,
                              l,
                              p,
                              f,
                              _
                            )
                              .then(function () {
                                return R.ResetPrivateKeyInternal();
                              })
                              .then(function () {
                                var e = c.a.MapFromKeyMedia(
                                  t,
                                  m.CreateKeyMedia()
                                );
                                return E && E.password != t.password
                                  ? m.ChangePrivateKeyPassword(e, E.password)
                                  : null;
                              })
                              .then(function () {
                                e(null);
                              })
                              .catch(function (e) {
                                n(R.MapError(e));
                              });
                          });
                        var r = null,
                          d = null;
                        return (
                          t && (r = c.a.MapFromKeyMedia(t, m.CreateKeyMedia())),
                          E && (d = c.a.MapFromKeyMedia(E, m.CreateKeyMedia())),
                          m.MakeNewCertificate(
                            r,
                            n,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            p,
                            f,
                            _,
                            d,
                            h
                          )
                        );
                      })
                      .then(function (e) {
                        A.key = e;
                        var n = null;
                        return (
                          ((y && t) || E) &&
                            (n = c.a.MapFromKeyMedia(
                              E || t,
                              m.CreateKeyMedia()
                            )),
                          R.SearchPrivateKeyCertificatesWithCMP(e, h, n, d)
                        );
                      })
                      .then(function (e) {
                        return R.GetUserCertificatesFromCertificates(e.certs);
                      })
                      .then(function (e) {
                        R.EndKMOperation(), (A.certs = e), g(A);
                      })
                      .catch(function (e) {
                        R.EndKMOperation(), P(R.MapError(e));
                      });
                  });
                }),
                (t.prototype.MakeDeviceCertificate = function (t, n, i, o, a) {
                  var s = this,
                    l = s.m_library;
                  return new e(function (f, _) {
                    s.CheckInitialize()
                      .then(function () {
                        if (null == s.m_pkContext)
                          throw l.MakeError(r.EU_ERROR_BAD_CERT, "");
                        var e = s.m_pkContext.GetOwnerInfo(),
                          u = s.GetCASettings(e.GetIssuerCN());
                        if (!u || !u.cmpAddress || "" == u.cmpAddress)
                          throw l.MakeError(r.EU_ERROR_BAD_PARAMETER, "");
                        return l.CtxMakeDeviceCertificate(
                          s.m_pkContext,
                          t,
                          n,
                          i,
                          o,
                          a,
                          u.cmpAddress,
                          "80"
                        );
                      })
                      .then(function (t) {
                        return s.ProcessArray(t, function (t) {
                          return new e(function (e, n) {
                            l.ParseCertificateEx(t)
                              .then(function (n) {
                                var r = new u.EndUserCertificate();
                                (r.data = t),
                                  (r.infoEx = c.a.MapToEndUserCertificateInfoEx(
                                    n,
                                    new p.a()
                                  )),
                                  e(r);
                              })
                              .catch(function (e) {
                                return n(e);
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        f(e);
                      })
                      .catch(function (e) {
                        s.EndKMOperation(), _(s.MapError(e));
                      });
                  });
                }),
                (t.prototype.ChangePrivateKeyPassword = function (t, n) {
                  var r = this,
                    i = r.m_library;
                  return new e(function (e, o) {
                    r.CheckInitialize()
                      .then(function () {
                        return r.BeginKMOperation();
                      })
                      .then(function () {
                        var e = c.a.MapFromKeyMedia(t, i.CreateKeyMedia());
                        return r.m_library.ChangePrivateKeyPassword(e, n);
                      })
                      .then(function () {
                        r.EndKMOperation(), e();
                      })
                      .catch(function (e) {
                        r.EndKMOperation(), o(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.ChangePrivateKeyPasswordBinary = function (
                  t,
                  n,
                  r
                ) {
                  var i = this,
                    o = i.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.ChangeSoftwarePrivateKeyPassword(t, n, r);
                      })
                      .then(function (t) {
                        e(t), e();
                      })
                      .catch(function (e) {
                        a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.GeneratePrivateKey = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  p,
                  f,
                  _
                ) {
                  var E = this,
                    h = E.m_library;
                  return new e(function (e, d) {
                    E.CheckInitialize()
                      .then(function () {
                        return E.BeginKMOperation();
                      })
                      .then(function () {
                        var e = null;
                        return (
                          t && (e = c.a.MapFromKeyMedia(t, h.CreateKeyMedia())),
                          E.GeneratePrivateKeyInternal(
                            e,
                            n,
                            null,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            p,
                            f,
                            _
                          )
                        );
                      })
                      .then(function (t) {
                        E.EndKMOperation(), e(t);
                      })
                      .catch(function (e) {
                        E.EndKMOperation(), d(E.MapError(e));
                      });
                  });
                }),
                (t.prototype.GeneratePrivateKeyBinary = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p
                ) {
                  var f = this;
                  return new e(function (e, _) {
                    f.CheckInitialize()
                      .then(function () {
                        return f.BeginKMOperation();
                      })
                      .then(function () {
                        return f.GeneratePrivateKeyInternal(
                          null,
                          !1,
                          t,
                          n,
                          r,
                          i,
                          o,
                          a,
                          s,
                          u,
                          l,
                          c,
                          p
                        );
                      })
                      .then(function (t) {
                        f.EndKMOperation(), e(t);
                      })
                      .catch(function (e) {
                        f.EndKMOperation(), _(f.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetKeyInfo = function (t) {
                  var n = this,
                    r = n.m_library;
                  return new e(function (e, i) {
                    n.CheckInitialize()
                      .then(function () {
                        return n.BeginKMOperation();
                      })
                      .then(function () {
                        var e = c.a.MapFromKeyMedia(t, r.CreateKeyMedia());
                        return r.GetKeyInfo(e);
                      })
                      .then(function (t) {
                        n.EndKMOperation(), e(t.GetPrivateKeyInfo());
                      })
                      .catch(function (e) {
                        n.EndKMOperation(), i(n.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetKeyInfoBinary = function (t, n) {
                  var r = this,
                    i = r.m_library;
                  return new e(function (e, o) {
                    r.CheckInitialize()
                      .then(function () {
                        return i.GetKeyInfoBinary(t, n);
                      })
                      .then(function (t) {
                        e(t.GetPrivateKeyInfo());
                      })
                      .catch(function (e) {
                        o(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetClientRegistrationTokenKSP = function (t) {
                  var n = this,
                    i = n.m_library;
                  return new e(function (e, t) {
                    n.CheckInitialize()
                      .then(function () {
                        throw i.MakeError(r.EU_ERROR_NOT_SUPPORTED, "");
                      })
                      .catch(function (e) {
                        t(n.MapError(e));
                      });
                  });
                }),
                (t.prototype.HashData = function (t, n, r) {
                  var i = this,
                    o = this.m_library,
                    a = i.DataToNamedDataArray(n);
                  return new e(function (s, u) {
                    i.CheckInitialize()
                      .then(function () {
                        return i.ProcessArray(a, function (n) {
                          return new e(function (e, a) {
                            o.CtxHash(i.m_context, t, null, n.val)
                              .then(function (e) {
                                return r ? e : o.BASE64Decode(e);
                              })
                              .then(function (t) {
                                e(t);
                              })
                              .catch(function (e) {
                                return a(e);
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        var t = i.DataToResult(n, e);
                        s(t);
                      })
                      .catch(function (e) {
                        u(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetSigner = function (t, n, r) {
                  void 0 === n && (n = -1), void 0 === r && (r = !1);
                  var i = this,
                    o = this.m_library,
                    a = { context: null, signersInfo: null };
                  return new e(function (s, l) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.CtxCreate();
                      })
                      .then(function (e) {
                        return (
                          (a.context = e),
                          o.CtxSetParameter(
                            e,
                            o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
                            r
                          )
                        );
                      })
                      .then(function () {
                        return -1 == n ? o.GetSignsCount(t) : 1;
                      })
                      .then(function (r) {
                        var s = new Array();
                        if (-1 != n) s.push(n);
                        else for (var l = 0; l < r; l++) s.push(l);
                        return i.ProcessArray(s, function (n) {
                          return new e(function (e, r) {
                            var s = new u.EndUserCertificate();
                            o.CtxGetSignerInfo(a.context, n, t)
                              .then(function (t) {
                                c.a.MapToEndUserCertificate(t, s), e(s);
                              })
                              .catch(function (e) {
                                return r(i.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        return (a.signersInfo = e), o.CtxFree(a.context);
                      })
                      .then(function () {
                        (a.context = null),
                          s(-1 != n ? a.signersInfo[0] : a.signersInfo);
                      })
                      .catch(function (e) {
                        a.context
                          ? o
                              .CtxFree(a.context)
                              .then(function () {
                                l(i.MapError(e));
                              })
                              .catch(function () {
                                l(i.MapError(e));
                              })
                          : l(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.SignData = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.SignDataEx(
                      f.EndUserSignAlgo.DSTU4145WithGOST34311,
                      e,
                      !0,
                      !0,
                      t
                    )
                  );
                }),
                (t.prototype.SignDataInternal = function (e, t, n) {
                  return (
                    void 0 === n && (n = !1),
                    this.SignDataEx(
                      f.EndUserSignAlgo.DSTU4145WithGOST34311,
                      t,
                      !1,
                      e,
                      n
                    )
                  );
                }),
                (t.prototype.SignHash = function (e, t, n, r) {
                  return this.CtxSignHashInternal(
                    this.m_pkContext,
                    e,
                    t,
                    null,
                    n,
                    r
                  );
                }),
                (t.prototype.SignDataEx = function (e, t, n, r, i) {
                  return this.CtxSignDataInternal(
                    this.m_pkContext,
                    e,
                    t,
                    null,
                    n,
                    r,
                    i
                  );
                }),
                (t.prototype.AppendSign = function (e, t, n, r, i) {
                  return this.CtxSignDataInternal(
                    this.m_pkContext,
                    e,
                    t,
                    n,
                    null != t,
                    r,
                    i
                  );
                }),
                (t.prototype.AppendSignHash = function (e, t, n, r, i) {
                  return this.CtxSignHashInternal(
                    this.m_pkContext,
                    e,
                    t,
                    n,
                    r,
                    i
                  );
                }),
                (t.prototype.VerifyHash = function (t, n, r) {
                  void 0 === r && (r = -1);
                  var i = this,
                    o = this.m_library;
                  return new e(function (a, s) {
                    i.CheckInitialize()
                      .then(function () {
                        return -1 == r ? o.GetSignsCount(n) : 1;
                      })
                      .then(function (a) {
                        var s = new Array();
                        if (-1 != r) s.push(r);
                        else for (var u = 0; u < a; u++) s.push(u);
                        return i.ProcessArray(s, function (r) {
                          return new e(function (e, a) {
                            var s = new S.a();
                            o.VerifyHashOnTimeEx(t, r, n, null, !1, !1)
                              .then(function (e) {
                                return (
                                  c.a.MapToEndUserSignInfo(e, s),
                                  o.GetSignTimeInfo(r, n)
                                );
                              })
                              .then(function (e) {
                                return (
                                  (s.timeInfo = c.a.MapToEndUserTimeInfo(
                                    e,
                                    new C.a()
                                  )),
                                  o.GetSignType(r, n)
                                );
                              })
                              .then(function (t) {
                                (s.signLevel = t), e(s);
                              })
                              .catch(function (e) {
                                return a(i.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        a(-1 != r ? e[0] : e);
                      })
                      .catch(function (e) {
                        return s(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.VerifyData = function (t, n, r) {
                  void 0 === r && (r = -1);
                  var i = this,
                    o = this.m_library;
                  return new e(function (a, s) {
                    i.CheckInitialize()
                      .then(function () {
                        return -1 == r ? o.GetSignsCount(n) : 1;
                      })
                      .then(function (a) {
                        var s = new Array();
                        if (-1 != r) s.push(r);
                        else for (var u = 0; u < a; u++) s.push(u);
                        return i.ProcessArray(s, function (r) {
                          return new e(function (e, a) {
                            var s = new S.a();
                            o.VerifyDataOnTimeEx(t, r, n, null, !1, !1)
                              .then(function (e) {
                                return (
                                  c.a.MapToEndUserSignInfo(e, s),
                                  o.GetSignTimeInfo(r, n)
                                );
                              })
                              .then(function (e) {
                                return (
                                  (s.timeInfo = c.a.MapToEndUserTimeInfo(
                                    e,
                                    new C.a()
                                  )),
                                  o.GetSignType(r, n)
                                );
                              })
                              .then(function (t) {
                                (s.signLevel = t), e(s);
                              })
                              .catch(function (e) {
                                return a(i.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        a(-1 != r ? e[0] : e);
                      })
                      .catch(function (e) {
                        return s(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.VerifyDataInternal = function (t, n) {
                  void 0 === n && (n = -1);
                  var r = this,
                    i = this.m_library;
                  return new e(function (o, a) {
                    r.CheckInitialize()
                      .then(function () {
                        return -1 == n ? i.GetSignsCount(t) : 1;
                      })
                      .then(function (o) {
                        var a = new Array();
                        if (-1 != n) a.push(n);
                        else for (var s = 0; s < o; s++) a.push(s);
                        return r.ProcessArray(a, function (n) {
                          return new e(function (e, o) {
                            var a = new S.a();
                            i.VerifyDataInternalOnTimeEx(t, n, null, !1, !1)
                              .then(function (e) {
                                return (
                                  c.a.MapToEndUserSignInfo(e, a),
                                  i.GetSignTimeInfo(n, t)
                                );
                              })
                              .then(function (e) {
                                return (
                                  (a.timeInfo = c.a.MapToEndUserTimeInfo(
                                    e,
                                    new C.a()
                                  )),
                                  i.GetSignType(n, t)
                                );
                              })
                              .then(function (t) {
                                (a.signLevel = t), e(a);
                              })
                              .catch(function (e) {
                                return o(r.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        o(-1 != n ? e[0] : e);
                      })
                      .catch(function (e) {
                        return a(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.EnvelopData = function (t, n, i, o, a, s) {
                  void 0 === s && (s = !1);
                  var u = this,
                    l = this.m_library;
                  return new e(function (e, c) {
                    u.CheckInitialize()
                      .then(function () {
                        if (null == u.m_pkContext && (!s || i))
                          throw l.MakeError(r.EU_ERROR_BAD_CERT, "");
                        var e = l.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
                        return s
                          ? i
                            ? l.CtxEnvelopWithDynamicKey(
                                u.m_pkContext,
                                t,
                                e,
                                i,
                                o,
                                n
                              )
                            : l.EnvelopToRecipientsWithDynamicKey(t, i, o, n)
                          : l.CtxEnvelop(u.m_pkContext, t, e, i, o, n);
                      })
                      .then(function (e) {
                        return a ? e : l.BASE64Decode(e);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return c(u.MapError(e));
                      });
                  });
                }),
                (t.prototype.DevelopData = function (t, n) {
                  var i = this,
                    o = this.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        if (null == i.m_pkContext)
                          throw o.MakeError(r.EU_ERROR_BAD_CERT, "");
                        return o.CtxDevelop(i.m_pkContext, t, n);
                      })
                      .then(function (t) {
                        var n = c.a.MapToEndUserSenderInfo(t, new y.a());
                        e(n);
                      })
                      .catch(function (e) {
                        return a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.ProtectDataByPassword = function (t, n, r) {
                  var i = this,
                    o = this.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.ProtectDataByPassword(t, n);
                      })
                      .then(function (e) {
                        return r ? e : o.BASE64Decode(e);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.UnprotectDataByPassword = function (t, n, r) {
                  var i = this,
                    o = this.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.UnprotectDataByPassword(t, n);
                      })
                      .then(function (e) {
                        return r ? o.BytesToString(e) : e;
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.CreateAuthData = function (t, n, i) {
                  var o = this,
                    a = this.m_library;
                  return new e(function (e, s) {
                    o.CheckInitialize()
                      .then(function () {
                        if (null == o.m_pkContext)
                          throw a.MakeError(r.EU_ERROR_BAD_CERT, "");
                        return a.CtxCreateAuthData(o.m_pkContext, t, n);
                      })
                      .then(function (e) {
                        return i ? e : a.BASE64Decode(e);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return s(o.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetTSPByAccessInfo = function (t, n, r, i, o) {
                  var a = this,
                    s = this.m_library;
                  return new e(function (e, u) {
                    a.CheckInitialize()
                      .then(function () {
                        return s.GetTSPByAccessInfo(t, n, r, i);
                      })
                      .then(function (e) {
                        return o ? s.BASE64Encode(e) : e;
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return u(a.MapError(e));
                      });
                  });
                }),
                (t.prototype.CheckTSP = function (t, n, r) {
                  var i = this,
                    o = this.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.CheckTSP(t, n, r);
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxCreate = function () {
                  var t = this,
                    n = this.m_library,
                    r = { context: null };
                  return new e(function (e, i) {
                    t.CheckInitialize()
                      .then(function () {
                        return n.CtxCreate();
                      })
                      .then(function (e) {
                        return (
                          (r.context = e),
                          n.CtxSetParameter(
                            e,
                            n.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
                            t.m_resolveOIDs
                          )
                        );
                      })
                      .then(function () {
                        e(r.context);
                      })
                      .catch(function (e) {
                        return i(t.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxFree = function (t) {
                  var n = this,
                    r = this.m_library;
                  return new e(function (e, i) {
                    n.CheckInitialize()
                      .then(function () {
                        r.CtxFree(t);
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return i(n.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxSetParameter = function (t, n, r) {
                  var i = this,
                    o = i.m_library;
                  return new e(function (e, a) {
                    i.CheckInitialize()
                      .then(function () {
                        return (
                          null == t && (t = i.m_context),
                          o.CtxSetParameter(t, n, r)
                        );
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        i.EndKMOperation(), a(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxReadPrivateKey = function (t, n, r, i) {
                  var o = this,
                    a = o.m_library;
                  return new e(function (e, s) {
                    o.CheckInitialize()
                      .then(function () {
                        return o.BeginKMOperation();
                      })
                      .then(function () {
                        var e = c.a.MapFromKeyMedia(n, a.CreateKeyMedia());
                        return o.CtxReadPrivateKeyInternal(
                          t,
                          null,
                          null,
                          e,
                          r,
                          i
                        );
                      })
                      .then(function (t) {
                        o.EndKMOperation(), e(t);
                      })
                      .catch(function (e) {
                        o.EndKMOperation(), s(o.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxReadPrivateKeyBinary = function (
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a = this;
                  return new e(function (e, s) {
                    a.CheckInitialize()
                      .then(function () {
                        return a.CtxReadPrivateKeyInternal(t, n, r, null, i, o);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return s(a.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxFreePrivateKey = function (t) {
                  var n = this,
                    r = this.m_library;
                  return new e(function (e, i) {
                    n.CheckInitialize()
                      .then(function () {
                        return r.CtxFreePrivateKey(t);
                      })
                      .then(function () {
                        e();
                      })
                      .catch(function (e) {
                        return i(n.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxGetOwnCertificates = function (t) {
                  var n = this,
                    i = this.m_library;
                  return new e(function (e, o) {
                    n.CheckInitialize()
                      .then(function () {
                        if (null == t)
                          throw i.MakeError(r.EU_ERROR_BAD_CERT, "");
                        var a = new Array(),
                          s = function (r) {
                            i.CtxEnumOwnCertificates(t, r)
                              .then(function (t) {
                                if (t) {
                                  var n = c.a.MapToEndUserCertificate(
                                    t,
                                    new u.EndUserCertificate()
                                  );
                                  a.push(n), s(r + 1);
                                } else e(a);
                              })
                              .catch(function (e) {
                                return o(n.MapError(e));
                              });
                          };
                        s(0);
                      })
                      .catch(function (e) {
                        return o(n.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxSignHash = function (e, t, n, r, i) {
                  return this.CtxSignHashInternal(e, t, n, null, r, i);
                }),
                (t.prototype.CtxSignData = function (e, t, n, r, i, o) {
                  return this.CtxSignDataInternal(e, t, n, null, r, i, o);
                }),
                (t.prototype.CtxAppendSignHash = function (e, t, n, r, i, o) {
                  return this.CtxSignHashInternal(e, t, n, r, i, o);
                }),
                (t.prototype.CtxAppendSign = function (e, t, n, r, i, o) {
                  return this.CtxSignDataInternal(e, t, n, r, null != n, i, o);
                }),
                (t.prototype.CtxEnvelopData = function (t, n, i, o, a, s, u) {
                  var l = this,
                    c = this.m_library;
                  return new e(function (e, p) {
                    l.CheckInitialize()
                      .then(function () {
                        if (null == t && (!u || o))
                          throw c.MakeError(r.EU_ERROR_BAD_CERT, "");
                        var e = c.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL;
                        return u
                          ? o
                            ? c.CtxEnvelopWithDynamicKey(t, n, e, o, a, i)
                            : c.EnvelopToRecipientsWithDynamicKey(n, o, a, i)
                          : c.CtxEnvelop(t, n, e, o, a, i);
                      })
                      .then(function (e) {
                        return s ? e : c.BASE64Decode(e);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return p(l.MapError(e));
                      });
                  });
                }),
                (t.prototype.CtxDevelopData = function (t, n, i) {
                  var o = this,
                    a = this.m_library;
                  return new e(function (e, s) {
                    o.CheckInitialize()
                      .then(function () {
                        if (null == t)
                          throw a.MakeError(r.EU_ERROR_BAD_CERT, "");
                        return a.CtxDevelop(t, n, i);
                      })
                      .then(function (t) {
                        var n = c.a.MapToEndUserSenderInfo(t, new y.a());
                        e(n);
                      })
                      .catch(function (e) {
                        return s(o.MapError(e));
                      });
                  });
                }),
                (t.prototype.ProtectTaxReports = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s
                ) {
                  void 0 === t && (t = null),
                    void 0 === n && (n = null),
                    void 0 === r && (r = null),
                    void 0 === s && (s = !1);
                  var u = this;
                  return new e(function (e, l) {
                    var c = { accountant: null, director: null, stamp: null };
                    u.CheckInitialize()
                      .then(function () {
                        var e = [f.EndUserKeyUsage.DigitalSignature];
                        return null != t ? u.LoadTaxReportPKey(t, e, !1) : null;
                      })
                      .then(function (e) {
                        c.accountant = e;
                        var t = [f.EndUserKeyUsage.DigitalSignature];
                        return (
                          r || t.push(f.EndUserKeyUsage.KeyAgreement),
                          null != n ? u.LoadTaxReportPKey(n, t, !1) : null
                        );
                      })
                      .then(function (e) {
                        c.director = e;
                        var t = [
                          f.EndUserKeyUsage.DigitalSignature,
                          f.EndUserKeyUsage.KeyAgreement,
                        ];
                        return null != r ? u.LoadTaxReportPKey(r, t, !0) : null;
                      })
                      .then(function (e) {
                        return (
                          (c.stamp = e),
                          u.ProcessArray(a, function (e) {
                            return u.ProtectTaxReport(
                              c.accountant,
                              c.director,
                              c.stamp,
                              i,
                              o,
                              e,
                              s
                            );
                          })
                        );
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return l(u.MapError(e));
                      });
                  });
                }),
                (t.prototype.UnprotectTaxReceipts = function (t, n) {
                  var r = this;
                  return new e(function (e, i) {
                    r.CheckInitialize()
                      .then(function () {
                        return r.ProcessArray(n, function (e) {
                          return r.UnprotectTaxReceipt(t, e);
                        });
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function (e) {
                        return i(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.ASiCGetSigner = function (t, n, r) {
                  void 0 === n && (n = -1), void 0 === r && (r = !1);
                  var i = this,
                    o = this.m_library,
                    a = { context: null, signersInfo: null };
                  return new e(function (s, l) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.CtxCreate();
                      })
                      .then(function (e) {
                        return (
                          (a.context = e),
                          o.CtxSetParameter(
                            e,
                            o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
                            r
                          )
                        );
                      })
                      .then(function () {
                        return -1 == n ? o.ASiCGetSignsCount(t) : 1;
                      })
                      .then(function (r) {
                        var s = new Array();
                        if (-1 != n) s.push(n);
                        else for (var l = 0; l < r; l++) s.push(l);
                        return i.ProcessArray(s, function (n) {
                          return new e(function (e, r) {
                            var s = new u.EndUserCertificate();
                            o.CtxASiCGetSignerInfo(a.context, n, t)
                              .then(function (t) {
                                c.a.MapToEndUserCertificate(t, s), e(s);
                              })
                              .catch(function (e) {
                                return r(i.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        return (a.signersInfo = e), o.CtxFree(a.context);
                      })
                      .then(function () {
                        s(-1 != n ? a.signersInfo[0] : a.signersInfo);
                      })
                      .catch(function (e) {
                        a.context &&
                          o
                            .CtxFree(a.context)
                            .then(function () {
                              l(i.MapError(e));
                            })
                            .catch(function () {
                              l(i.MapError(e));
                            });
                      });
                  });
                }),
                (t.prototype.ASiCSignData = function (t, n, i, o, a, s) {
                  var u = this,
                    l = this,
                    c = this.m_library;
                  return new e(function (e, p) {
                    l.CheckInitialize()
                      .then(function () {
                        if (null == u.m_pkContext)
                          throw c.MakeError(r.EU_ERROR_BAD_CERT, "");
                        for (var e = [], s = 0; s < a.length; s++) {
                          var l = c.CreateReference(a[s].name, a[s].val);
                          e.push(l);
                        }
                        return c.CtxASiCSign(u.m_pkContext, t, n, i, o, e);
                      })
                      .then(function (e) {
                        return s ? e : c.BASE64Decode(e);
                      })
                      .then(function (t) {
                        var r = {
                          name:
                            a[0].name +
                            (n == f.EndUserASiCType.S ? ".asics" : ".asice"),
                          val: t,
                        };
                        e(r);
                      })
                      .catch(function (e) {
                        return p(l.MapError(e));
                      });
                  });
                }),
                (t.prototype.ASiCAppendSign = function (t, n, i, o, a) {
                  var s = this,
                    u = this,
                    l = this.m_library,
                    c = u.DataToNamedDataArray(o);
                  return new e(function (e, o) {
                    u.CheckInitialize()
                      .then(function () {
                        if (null == s.m_pkContext)
                          throw l.MakeError(r.EU_ERROR_BAD_CERT, "");
                        return l.CtxASiCAppendSign(
                          s.m_pkContext,
                          t,
                          n,
                          i,
                          c[0].val
                        );
                      })
                      .then(function (e) {
                        return a ? e : l.BASE64Decode(e);
                      })
                      .then(function (t) {
                        var n = { name: c[0].name, val: t };
                        e(n);
                      })
                      .catch(function (e) {
                        return o(u.MapError(e));
                      });
                  });
                }),
                (t.prototype.ASiCVerifyData = function (t, n) {
                  void 0 === n && (n = -1);
                  var r = this,
                    i = this.m_library;
                  return new e(function (o, a) {
                    r.CheckInitialize()
                      .then(function () {
                        return -1 == n ? i.ASiCGetSignsCount(t) : 1;
                      })
                      .then(function (o) {
                        var a = new Array();
                        if (-1 != n) a.push(n);
                        else for (var s = 0; s < o; s++) a.push(s);
                        return r.ProcessArray(a, function (n) {
                          return new e(function (e, o) {
                            var a = new S.a();
                            i.ASiCVerify(n, t)
                              .then(function (e) {
                                return (
                                  c.a.MapToEndUserSignInfo(e, a),
                                  i.ASiCGetSignTimeInfo(n, t)
                                );
                              })
                              .then(function (e) {
                                return (
                                  (a.timeInfo = c.a.MapToEndUserTimeInfo(
                                    e,
                                    new C.a()
                                  )),
                                  i.ASiCGetSignLevel(n, t)
                                );
                              })
                              .then(function (t) {
                                (a.signLevel = t), e(a);
                              })
                              .catch(function (e) {
                                return o(r.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        o(-1 != n ? e[0] : e);
                      })
                      .catch(function (e) {
                        return a(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.PDFGetSigner = function (t, n, r) {
                  void 0 === n && (n = -1), void 0 === r && (r = !1);
                  var i = this,
                    o = this.m_library,
                    a = { context: null, signersInfo: null };
                  return new e(function (s, l) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.CtxCreate();
                      })
                      .then(function (e) {
                        return (
                          (a.context = e),
                          o.CtxSetParameter(
                            e,
                            o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
                            r
                          )
                        );
                      })
                      .then(function () {
                        return -1 == n ? o.PDFGetSignsCount(t) : 1;
                      })
                      .then(function (r) {
                        var s = new Array();
                        if (-1 != n) s.push(n);
                        else for (var l = 0; l < r; l++) s.push(l);
                        return i.ProcessArray(s, function (n) {
                          return new e(function (e, r) {
                            var s = new u.EndUserCertificate();
                            o.CtxPDFGetSignerInfo(a.context, n, t)
                              .then(function (t) {
                                c.a.MapToEndUserCertificate(t, s), e(s);
                              })
                              .catch(function (e) {
                                return r(i.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        return (a.signersInfo = e), o.CtxFree(a.context);
                      })
                      .then(function () {
                        s(-1 != n ? a.signersInfo[0] : a.signersInfo);
                      })
                      .catch(function (e) {
                        a.context &&
                          o
                            .CtxFree(a.context)
                            .then(function () {
                              l(i.MapError(e));
                            })
                            .catch(function () {
                              l(i.MapError(e));
                            });
                      });
                  });
                }),
                (t.prototype.PDFSignData = function (t, n, i, o) {
                  var a = this,
                    s = this,
                    u = this.m_library,
                    l = s.DataToNamedDataArray(n);
                  return new e(function (c, p) {
                    s.CheckInitialize()
                      .then(function () {
                        if (null == a.m_pkContext)
                          throw u.MakeError(r.EU_ERROR_BAD_CERT, "");
                        return s.ProcessArray(l, function (n) {
                          return new e(function (e, r) {
                            return u
                              .CtxPDFSign(a.m_pkContext, t, n.val, i)
                              .then(function (e) {
                                return o ? e : u.BASE64Decode(e);
                              })
                              .then(function (t) {
                                e(t);
                              })
                              .catch(function (e) {
                                return r(e);
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        var t = a.DataToResult(n, e);
                        c(t);
                      })
                      .catch(function (e) {
                        return p(s.MapError(e));
                      });
                  });
                }),
                (t.prototype.PDFVerifyData = function (t, n) {
                  void 0 === n && (n = -1);
                  var r = this,
                    i = this.m_library;
                  return new e(function (o, a) {
                    r.CheckInitialize()
                      .then(function () {
                        return -1 == n ? i.PDFGetSignsCount(t) : 1;
                      })
                      .then(function (o) {
                        var a = new Array();
                        if (-1 != n) a.push(n);
                        else for (var s = 0; s < o; s++) a.push(s);
                        return r.ProcessArray(a, function (n) {
                          return new e(function (e, o) {
                            var a = new S.a();
                            i.PDFVerify(n, t)
                              .then(function (e) {
                                return (
                                  c.a.MapToEndUserSignInfo(e, a),
                                  i.PDFGetSignTimeInfo(n, t)
                                );
                              })
                              .then(function (e) {
                                return (
                                  (a.timeInfo = c.a.MapToEndUserTimeInfo(
                                    e,
                                    new C.a()
                                  )),
                                  i.PDFGetSignType(n, t)
                                );
                              })
                              .then(function (t) {
                                (a.signLevel = t), e(a);
                              })
                              .catch(function (e) {
                                return o(r.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        o(-1 != n ? e[0] : e);
                      })
                      .catch(function (e) {
                        return a(r.MapError(e));
                      });
                  });
                }),
                (t.prototype.XAdESGetSigner = function (t, n, r) {
                  void 0 === n && (n = -1), void 0 === r && (r = !1);
                  var i = this,
                    o = this.m_library,
                    a = { context: null, signersInfo: null };
                  return new e(function (s, l) {
                    i.CheckInitialize()
                      .then(function () {
                        return o.CtxCreate();
                      })
                      .then(function (e) {
                        return (
                          (a.context = e),
                          o.CtxSetParameter(
                            e,
                            o.EU_RESOLVE_OIDS_CONTEXT_PARAMETER,
                            r
                          )
                        );
                      })
                      .then(function () {
                        return -1 == n ? o.XAdESGetSignsCount(t) : 1;
                      })
                      .then(function (r) {
                        var s = new Array();
                        if (-1 != n) s.push(n);
                        else for (var l = 0; l < r; l++) s.push(l);
                        return i.ProcessArray(s, function (n) {
                          return new e(function (e, r) {
                            var s = new u.EndUserCertificate();
                            o.CtxXAdESGetSignerInfo(a.context, n, t)
                              .then(function (t) {
                                c.a.MapToEndUserCertificate(t, s), e(s);
                              })
                              .catch(function (e) {
                                return r(i.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        return (a.signersInfo = e), o.CtxFree(a.context);
                      })
                      .then(function () {
                        s(-1 != n ? a.signersInfo[0] : a.signersInfo);
                      })
                      .catch(function (e) {
                        a.context &&
                          o
                            .CtxFree(a.context)
                            .then(function () {
                              l(i.MapError(e));
                            })
                            .catch(function () {
                              l(i.MapError(e));
                            });
                      });
                  });
                }),
                (t.prototype.XAdESSignData = function (t, n, i, o, a) {
                  var s = this,
                    u = this,
                    l = this.m_library;
                  return new e(function (e, c) {
                    u.CheckInitialize()
                      .then(function () {
                        if (null == s.m_pkContext)
                          throw l.MakeError(r.EU_ERROR_BAD_CERT, "");
                        for (var e = [], a = 0; a < o.length; a++) {
                          var u = l.CreateReference(o[a].name, o[a].val);
                          e.push(u);
                        }
                        return l.CtxXAdESSign(s.m_pkContext, t, n, i, e);
                      })
                      .then(function (e) {
                        return a ? e : l.BASE64Decode(e);
                      })
                      .then(function (t) {
                        var n = {
                          name:
                            o[0].name +
                            (o[0].name.endsWith(".xml") ? "" : ".xml"),
                          val: t,
                        };
                        e(n);
                      })
                      .catch(function (e) {
                        return c(u.MapError(e));
                      });
                  });
                }),
                (t.prototype.XAdESVerifyData = function (t, n, r) {
                  void 0 === r && (r = -1);
                  var i = this,
                    o = this.m_library;
                  return new e(function (a, s) {
                    i.CheckInitialize()
                      .then(function () {
                        return -1 == r ? o.XAdESGetSignsCount(n) : 1;
                      })
                      .then(function (a) {
                        var s = new Array();
                        if (-1 != r) s.push(r);
                        else for (var u = 0; u < a; u++) s.push(u);
                        var l = null;
                        if (null != t)
                          for (l = [], u = 0; u < t.length; u++) {
                            var p = o.CreateReference(t[u].name, t[u].val);
                            l.push(p);
                          }
                        return i.ProcessArray(s, function (t) {
                          return new e(function (e, r) {
                            var a = new S.a();
                            o.XAdESVerify(l, t, n)
                              .then(function (e) {
                                return (
                                  c.a.MapToEndUserSignInfo(e, a),
                                  o.XAdESGetSignTimeInfo(t, n)
                                );
                              })
                              .then(function (e) {
                                return (
                                  (a.timeInfo = c.a.MapToEndUserTimeInfo(
                                    e,
                                    new C.a()
                                  )),
                                  o.XAdESGetSignLevel(t, n)
                                );
                              })
                              .then(function (t) {
                                (a.signLevel = t), e(a);
                              })
                              .catch(function (e) {
                                return r(i.MapError(e));
                              });
                          });
                        });
                      })
                      .then(function (e) {
                        a(-1 != r ? e[0] : e);
                      })
                      .catch(function (e) {
                        return s(i.MapError(e));
                      });
                  });
                }),
                (t.prototype.GetSignContainerInfo = function (t) {
                  var n = this,
                    r = this.m_library,
                    i =
                      (new d.a(),
                      function (t) {
                        var n = new d.a();
                        return new e(function (e, i) {
                          r.IsDataInSignedDataAvailable(t)
                            .then(function (t) {
                              (n.type = f.EndUserSignContainerType.CAdES),
                                (n.subType = t
                                  ? f.EndUserCAdESType.Enveloped
                                  : f.EndUserCAdESType.Detached),
                                e(n);
                            })
                            .catch(function (t) {
                              e(null);
                            });
                        });
                      }),
                    o = function (t) {
                      var n = new d.a();
                      return new e(function (e, i) {
                        r.XAdESGetType(t)
                          .then(function (t) {
                            (n.type = f.EndUserSignContainerType.XAdES),
                              (n.subType = t),
                              e(n);
                          })
                          .catch(function (t) {
                            e(null);
                          });
                      });
                    },
                    a = function (t) {
                      var n = new d.a();
                      return new e(function (e, i) {
                        r.PDFGetSignsCount(t)
                          .then(function (t) {
                            (n.type = f.EndUserSignContainerType.PAdES), e(n);
                          })
                          .catch(function (t) {
                            e(null);
                          });
                      });
                    },
                    s = function (t) {
                      var n = new d.a();
                      return new e(function (e, i) {
                        r.ASiCGetASiCType(t)
                          .then(function (e) {
                            return (
                              (n.type = f.EndUserSignContainerType.ASiC),
                              (n.subType = e),
                              r.ASiCGetSignType(t)
                            );
                          })
                          .then(function (t) {
                            (n.asicSignType = t), e(n);
                          })
                          .catch(function (t) {
                            e(null);
                          });
                      });
                    };
                  return new e(function (u, l) {
                    n.CheckInitialize()
                      .then(function () {
                        return "string" == typeof t ? r.BASE64Decode(t) : t;
                      })
                      .then(function (t) {
                        var n = [],
                          r = function (e, t) {
                            if (e.length < t.length) return !1;
                            for (var n = 0; n < t.length; n++)
                              if (e[n] != t[n]) return !1;
                            return !0;
                          };
                        return (
                          (n = r(t, [60, 63, 120, 109, 108])
                            ? [o, i, a, s]
                            : r(t, [37, 80, 68, 70])
                            ? [a, i, o, s]
                            : r(t, [80, 75])
                            ? [s, i, o, a]
                            : [i, o, a, s]),
                          new e(function (e, r) {
                            var i = function (o) {
                              o >= n.length
                                ? e(new d.a())
                                : n[o](t)
                                    .then(function (t) {
                                      null != t ? e(t) : i(o + 1);
                                    })
                                    .catch(function (e) {
                                      return r(e);
                                    });
                            };
                            i(0);
                          })
                        );
                      })
                      .then(function (e) {
                        u(e);
                      })
                      .catch(function (e) {
                        return l(n.MapError(e));
                      });
                  });
                }),
                t
              );
            })();
          t.a = R;
        }).call(this, n(17).Promise);
      },
      function (e, t, n) {
        "use strict";
        (function (e) {
          var r = n(3),
            i = (function () {
              function t() {
                (this.EU_SUBJECT_TYPE_UNDIFFERENCED = 0),
                  (this.EU_SUBJECT_TYPE_CA = 1),
                  (this.EU_SUBJECT_TYPE_CA_SERVER = 2),
                  (this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR = 3),
                  (this.EU_SUBJECT_TYPE_END_USER = 4),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2),
                  (this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3),
                  (this.EU_CERT_KEY_TYPE_UNKNOWN = 0),
                  (this.EU_CERT_KEY_TYPE_DSTU4145 = 1),
                  (this.EU_CERT_KEY_TYPE_RSA = 2),
                  (this.EU_CERT_KEY_TYPE_ECDSA = 4),
                  (this.EU_KEY_USAGE_UNKNOWN = 0),
                  (this.EU_KEY_USAGE_DIGITAL_SIGNATURE = 1),
                  (this.EU_KEY_USAGE_KEY_AGREEMENT = 16),
                  (this.EU_KEYS_REQUEST_TYPE_UA_DS = 1),
                  (this.EU_KEYS_REQUEST_TYPE_UA_KEP = 2),
                  (this.EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3),
                  (this.EU_KEYS_TYPE_NONE = 0),
                  (this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS = 1),
                  (this.EU_KEYS_TYPE_RSA_WITH_SHA = 2),
                  (this.EU_KEYS_LENGTH_DS_UA_191 = 1),
                  (this.EU_KEYS_LENGTH_DS_UA_257 = 2),
                  (this.EU_KEYS_LENGTH_DS_UA_307 = 3),
                  (this.EU_KEYS_LENGTH_DS_UA_FILE = 4),
                  (this.EU_KEYS_LENGTH_DS_UA_CERT = 5),
                  (this.EU_KEYS_LENGTH_KEP_UA_257 = 1),
                  (this.EU_KEYS_LENGTH_KEP_UA_431 = 2),
                  (this.EU_KEYS_LENGTH_KEP_UA_571 = 3),
                  (this.EU_KEYS_LENGTH_KEP_UA_FILE = 4),
                  (this.EU_KEYS_LENGTH_KEP_UA_CERT = 5),
                  (this.EU_KEYS_LENGTH_DS_RSA_1024 = 1),
                  (this.EU_KEYS_LENGTH_DS_RSA_2048 = 2),
                  (this.EU_KEYS_LENGTH_DS_RSA_3072 = 3),
                  (this.EU_KEYS_LENGTH_DS_RSA_4096 = 4),
                  (this.EU_KEYS_LENGTH_DS_RSA_FILE = 5),
                  (this.EU_KEYS_LENGTH_DS_RSA_CERT = 6),
                  (this.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL = 1),
                  (this.EU_RECIPIENT_APPEND_KEY_ID = 2),
                  (this.EU_RECIPIENT_APPEND_KEY_ID_USC_COMPAT = 3),
                  (this.EU_SAVE_SETTINGS_PARAMETER = "SaveSettings"),
                  (this.EU_RESOLVE_OIDS_PARAMETER = "ResolveOIDs"),
                  (this.EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER =
                    "MakePKeyPFXContainer"),
                  (this.EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER =
                    "SignIncludeContentTimeStamp"),
                  (this.EU_SIGN_TYPE_PARAMETER = "SignType"),
                  (this.EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER =
                    "SignIncludeCACertificates"),
                  (this.EU_FS_CALCULATE_FINGERPRINT = "FSCalculateFingerprint"),
                  (this.EU_CHECK_CERT_CHAIN_ON_SIGN_TIME_PARAMETER =
                    "CheckCertChainOnSignTime"),
                  (this.EU_CONNECTIONS_TIMEOUT_PARAMETER =
                    "ConnectionsTimeout"),
                  (this.EU_LOG_EVENTS_THRESHOLD_PARAMETER =
                    "LogEventsThreshold"),
                  (this.EU_SETTINGS_ID_NONE = 0),
                  (this.EU_SETTINGS_ID_MANDATORY = 31),
                  (this.EU_SETTINGS_ID_ALL = 1023),
                  (this.EU_SETTINGS_ID_FSTORE = 1),
                  (this.EU_SETTINGS_ID_PROXY = 2),
                  (this.EU_SETTINGS_ID_TSP = 4),
                  (this.EU_SETTINGS_ID_OCSP = 8),
                  (this.EU_SETTINGS_ID_LDAP = 16),
                  (this.EU_SETTINGS_ID_MODE = 32),
                  (this.EU_SETTINGS_ID_CMP = 64),
                  (this.EU_SETTINGS_ID_KM = 128),
                  (this.EU_SETTINGS_ID_OCSP_ACCESS_INFO_MODE = 256),
                  (this.EU_SETTINGS_ID_OCSP_ACCESS_INFO = 512),
                  (this.EU_HEADER_CA_TYPE = "UA1"),
                  (this.EU_HEADER_PART_TYPE_SIGNED = 1),
                  (this.EU_HEADER_PART_TYPE_ENCRYPTED = 2),
                  (this.EU_HEADER_PART_TYPE_STAMPED = 3),
                  (this.EU_HEADER_PART_TYPE_CERTCRYPT = 4),
                  (this.EU_HEADER_MAX_CA_TYPE_SIZE = 3),
                  (this.EU_SIGNED_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_SIGNED),
                  (this.EU_ENCRYPTED_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_ENCRYPTED),
                  (this.EU_TIMESTAMPED_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_STAMPED),
                  (this.EU_CERTCRYPT_CRYPTO_HEADER =
                    this.EU_HEADER_PART_TYPE_CERTCRYPT),
                  (this.EU_DEFAULT_LANG = 0),
                  (this.EU_UA_LANG = 1),
                  (this.EU_RU_LANG = 2),
                  (this.EU_EN_LANG = 3),
                  (this.EU_CONTENT_ENC_ALGO_TDES_CBC = 4),
                  (this.EU_CONTENT_ENC_ALGO_AES_128_CBC = 5),
                  (this.EU_CONTENT_ENC_ALGO_AES_192_CBC = 6),
                  (this.EU_CONTENT_ENC_ALGO_AES_256_CBC = 7),
                  (this.EU_DEV_CTX_MIN_PUBLIC_DATA_ID = 16),
                  (this.EU_DEV_CTX_MAX_PRIVATE_DATA_ID = 175),
                  (this.EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9"),
                  (this.EU_CCS_TYPE_REVOKE = 1),
                  (this.EU_CCS_TYPE_HOLD = 2),
                  (this.EU_REVOCATION_REASON_UNKNOWN = 0),
                  (this.EU_REVOCATION_REASON_KEY_COMPROMISE = 1),
                  (this.EU_REVOCATION_REASON_NEW_ISSURED = 2),
                  (this.EU_SIGN_TYPE_UNKNOWN = 0),
                  (this.EU_SIGN_TYPE_CADES_BES = 1),
                  (this.EU_SIGN_TYPE_CADES_T = 4),
                  (this.EU_SIGN_TYPE_CADES_C = 8),
                  (this.EU_SIGN_TYPE_CADES_X_LONG = 16),
                  (this.EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER =
                    "CheckPrivateKey"),
                  (this.EU_RESOLVE_OIDS_CONTEXT_PARAMETER = "ResolveOIDs"),
                  (this.EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER =
                    "ExportableContext"),
                  (this.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1),
                  (this.EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2),
                  (this.EU_CTX_HASH_ALGO_UNKNOWN = 0),
                  (this.EU_CTX_HASH_ALGO_GOST34311 = 1),
                  (this.EU_CTX_HASH_ALGO_SHA160 = 2),
                  (this.EU_CTX_HASH_ALGO_SHA224 = 3),
                  (this.EU_CTX_HASH_ALGO_SHA256 = 4),
                  (this.EU_CTX_SIGN_UNKNOWN = 0),
                  (this.EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1),
                  (this.EU_CTX_SIGN_RSA_WITH_SHA = 2),
                  (this.EU_FILE_PROCESS_CHUNK_SIZE = 1048576),
                  (this.EU_ASIC_TYPE_UNKNOWN = 0),
                  (this.EU_ASIC_TYPE_S = 1),
                  (this.EU_ASIC_TYPE_E = 2),
                  (this.EU_ASIC_SIGN_TYPE_UNKNOWN = 0),
                  (this.EU_ASIC_SIGN_TYPE_CADES = 1),
                  (this.EU_ASIC_SIGN_TYPE_XADES = 2),
                  (this.EU_ASIC_SIGN_LEVEL_BES = 1),
                  (this.EnvelopToRecipientsEx = function (t, n, r, i) {
                    var o = this.m_library;
                    return new e(function (e, a) {
                      o.EnvelopToRecipientsEx(t, n, r, i, e, a);
                    });
                  }),
                  (this.EnvelopToRecipientsWithDynamicKey = function (
                    t,
                    n,
                    r,
                    i
                  ) {
                    var o = this.m_library;
                    return new e(function (e, a) {
                      o.EnvelopToRecipientsWithDynamicKey(t, n, r, i, e, a);
                    });
                  }),
                  (this.EnvelopToRecipientsWithSettings = function (
                    t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s
                  ) {
                    var u = this.m_library;
                    return new e(function (e, l) {
                      u.EnvelopToRecipientsWithSettings(
                        t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        e,
                        l
                      );
                    });
                  }),
                  (this.CtxEnvelop = function (t, n, r, i, o, a) {
                    var s = this.m_library;
                    return new e(function (e, u) {
                      s.CtxEnvelop(t, n, r, i, o, a, e, u);
                    });
                  }),
                  (this.CtxEnvelopWithDynamicKey = function (t, n, r, i, o, a) {
                    var s = this.m_library;
                    return new e(function (e, u) {
                      s.CtxEnvelopWithDynamicKey(t, n, r, i, o, a, e, u);
                    });
                  }),
                  (this.DevelopEx = function (t, n) {
                    void 0 === n && (n = null);
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.DevelopEx(t, n, e, i);
                    });
                  }),
                  (this.CtxDevelop = function (t, n, r) {
                    void 0 === r && (r = null);
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.CtxDevelop(t, n, r, e, o);
                    });
                  }),
                  (this.CtxCreateAuthData = function (t, n, r) {
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.CtxCreateAuthData(t, n, r, e, o);
                    });
                  }),
                  (this.ProtectDataByPassword = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.ProtectDataByPassword(t, n, e, i);
                    });
                  }),
                  (this.UnprotectDataByPassword = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.UnprotectDataByPassword(t, n, e, i);
                    });
                  }),
                  (this.AppendTransportHeader = function (t, n, r, i, o) {
                    var a = this.m_library;
                    return new e(function (e, s) {
                      a.AppendTransportHeader(t, n, r, i, o, e, s);
                    });
                  }),
                  (this.ParseTransportHeader = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.ParseTransportHeader(t, e, r);
                    });
                  }),
                  (this.AppendCryptoHeader = function (t, n, r) {
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.AppendCryptoHeader(t, n, r, e, o);
                    });
                  }),
                  (this.ParseCryptoHeader = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.ParseCryptoHeader(t, e, r);
                    });
                  }),
                  (this.CtxCreate = function () {
                    var t = this.m_library;
                    return new e(function (e, n) {
                      t.CtxCreate(e, n);
                    });
                  }),
                  (this.CtxFree = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.CtxFree(t, e, r);
                    });
                  }),
                  (this.CtxSetParameter = function (t, n, r) {
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.CtxSetParameter(t, n, r, e, o);
                    });
                  }),
                  (this.ASiCGetASiCType = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.ASiCGetASiCType(t, e, r);
                    });
                  }),
                  (this.ASiCGetSignType = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.ASiCGetSignType(t, e, r);
                    });
                  }),
                  (this.ASiCGetSignsCount = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.ASiCGetSignsCount(t, e, r);
                    });
                  }),
                  (this.ASiCGetSignerInfo = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.ASiCGetSignerInfo(t, n, e, i);
                    });
                  }),
                  (this.ASiCGetSignTimeInfo = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.ASiCGetSignTimeInfo(t, n, e, i);
                    });
                  }),
                  (this.CtxASiCSign = function (t, n, r, i, o, a) {
                    var s = this.m_library;
                    return new e(function (e, u) {
                      s.CtxASiCSign(t, n, r, i, o, a, e, u);
                    });
                  }),
                  (this.CtxASiCAppendSign = function (t, n, r, i, o) {
                    var a = this.m_library;
                    return new e(function (e, s) {
                      a.CtxASiCAppendSign(t, n, r, i, o, e, s);
                    });
                  }),
                  (this.ASiCVerify = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.ASiCVerify(t, n, e, i);
                    });
                  }),
                  (this.CtxASiCGetSignerInfo = function (t, n, r) {
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.CtxASiCGetSignerInfo(t, n, r, e, o);
                    });
                  }),
                  (this.ASiCGetSignLevel = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.ASiCGetSignLevel(t, n, e, i);
                    });
                  }),
                  (this.PDFGetSignType = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.PDFGetSignType(t, n, e, i);
                    });
                  }),
                  (this.PDFGetSignsCount = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.PDFGetSignsCount(t, e, r);
                    });
                  }),
                  (this.PDFGetSignerInfo = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.PDFGetSignerInfo(t, n, e, i);
                    });
                  }),
                  (this.PDFGetSignTimeInfo = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.PDFGetSignTimeInfo(t, n, e, i);
                    });
                  }),
                  (this.CtxPDFSign = function (t, n, r, i) {
                    var o = this.m_library;
                    return new e(function (e, a) {
                      o.CtxPDFSign(t, n, r, i, e, a);
                    });
                  }),
                  (this.PDFVerify = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.PDFVerify(t, n, e, i);
                    });
                  }),
                  (this.CtxPDFGetSignerInfo = function (t, n, r) {
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.CtxPDFGetSignerInfo(t, n, r, e, o);
                    });
                  }),
                  (this.XAdESGetType = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.XAdESGetType(t, e, r);
                    });
                  }),
                  (this.XAdESGetSignsCount = function (t) {
                    var n = this.m_library;
                    return new e(function (e, r) {
                      n.XAdESGetSignsCount(t, e, r);
                    });
                  }),
                  (this.XAdESGetSignLevel = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.XAdESGetSignLevel(t, n, e, i);
                    });
                  }),
                  (this.XAdESGetSignerInfo = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.XAdESGetSignerInfo(t, n, e, i);
                    });
                  }),
                  (this.XAdESGetSignTimeInfo = function (t, n) {
                    var r = this.m_library;
                    return new e(function (e, i) {
                      r.XAdESGetSignTimeInfo(t, n, e, i);
                    });
                  }),
                  (this.CtxXAdESSign = function (t, n, r, i, o) {
                    var a = this.m_library;
                    return new e(function (e, s) {
                      a.CtxXAdESSign(t, n, r, i, o, e, s);
                    });
                  }),
                  (this.XAdESVerify = function (t, n, r) {
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.XAdESVerify(t, n, r, e, o);
                    });
                  }),
                  (this.CtxXAdESGetSignerInfo = function (t, n, r) {
                    var i = this.m_library;
                    return new e(function (e, o) {
                      i.CtxXAdESGetSignerInfo(t, n, r, e, o);
                    });
                  }),
                  (this.m_language = 0),
                  (this.m_library = null);
              }
              return (
                (t.prototype.MakeURL = function (e) {
                  var t = location.origin,
                    n = location.pathname;
                  return 0 == e.indexOf("http://") || 0 == e.indexOf("https://")
                    ? e
                    : 0 == e.indexOf("/") && t
                    ? t + e
                    : t && n
                    ? t + n.substr(0, n.lastIndexOf("/")) + "/" + e
                    : e;
                }),
                (t.prototype.MakeError = function (e, t) {
                  return this.m_library.MakeError(e, t);
                }),
                (t.prototype.IsLibraryLoadError = function (e) {
                  return e == r.EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED;
                }),
                (t.prototype.IsLibraryVersionNotSupportedError = function (e) {
                  return (
                    e == r.EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED
                  );
                }),
                (t.prototype.Load = function () {
                  var t = this;
                  return new e(function (e, n) {
                    if (null == t.m_library) {
                      var i = new r.EndUserLibraryLoader(
                        r.EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT,
                        "euSign",
                        t.m_language,
                        !0,
                        !0
                      );
                      (i.onload = function (n) {
                        (t.m_library = n), e();
                      }),
                        (i.onerror = function (e, t, i) {
                          null == i && (i = new r.EUSignCP("", "")),
                            n(i.MakeError(t, ""));
                        }),
                        i.load();
                    } else e();
                  });
                }),
                (t.prototype.IsSupported = function () {
                  return (
                    r.EndUserLibraryLoader.isWebExtensionSupported() ||
                    r.EndUserLibraryLoader.isSignAgentSupported() ||
                    r.EndUserLibraryLoader.isNPAPISupported() ||
                    r.EndUserLibraryLoader.isActiveXSupported()
                  );
                }),
                (t.prototype.IsSignAgentSupported = function () {
                  return r.EndUserLibraryLoader.isSignAgentSupported();
                }),
                (t.prototype.IsWebExtensionSupported = function () {
                  return r.EndUserLibraryLoader.isWebExtensionSupported();
                }),
                (t.prototype.IsNPAPISupported = function () {
                  return r.EndUserLibraryLoader.isNPAPISupported();
                }),
                (t.prototype.IsActiveXSupported = function () {
                  return r.EndUserLibraryLoader.isActiveXSupported();
                }),
                (t.prototype.IsWebExtensionInstalled = function () {
                  return r.EndUserLibraryLoader.isWebExtensionInstalled();
                }),
                (t.prototype.GetInstallURL = function (e, t) {
                  return (
                    void 0 === e && (e = !1),
                    new r.EUSignCP("", "").GetInstallURL(e, t)
                  );
                }),
                (t.prototype.GetUpdateURL = function (e, t) {
                  return (
                    void 0 === e && (e = !1),
                    new r.EUSignCP("", "").GetUpdateURL(e, t)
                  );
                }),
                (t.prototype.GetHelpURL = function (e) {
                  return new r.EUSignCP("", "").GetHelpURL(e);
                }),
                (t.prototype.GetWebExtensionInstallURL = function () {
                  return new r.EUSignCP("", "").GetWebExtensionInstallURL();
                }),
                (t.prototype.GetVersion = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetVersion(e, n);
                  });
                }),
                (t.prototype.IsInitialized = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.IsInitialized(e, n);
                  });
                }),
                (t.prototype.Initialize = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.Initialize(e, n);
                  });
                }),
                (t.prototype.Finalize = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.Finalize(e, n);
                  });
                }),
                (t.prototype.ResetOperation = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.ResetOperation(e, n);
                  });
                }),
                (t.prototype.SetUIMode = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetUIMode(t, e, r);
                  });
                }),
                (t.prototype.SetLanguage = function (t) {
                  var n = this.m_library;
                  if ("string" == typeof t)
                    switch ((t = t.toLocaleLowerCase())) {
                      case "en":
                        t = this.EU_EN_LANG;
                        break;
                      case "ru":
                        t = this.EU_RU_LANG;
                        break;
                      case "uk":
                      case "ua":
                      default:
                        t = this.EU_UA_LANG;
                    }
                  return (
                    (this.m_language = t),
                    new e(function (e, r) {
                      n.SetLanguage(t, e, r);
                    })
                  );
                }),
                (t.prototype.SetCharset = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetCharset(t, e, r);
                  });
                }),
                (t.prototype.SetRuntimeParameter = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.SetRuntimeParameter(t, n, e, i);
                  });
                }),
                (t.prototype.GetStorageParameter = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetStorageParameter(t, n, e, i);
                  });
                }),
                (t.prototype.SetStorageParameter = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.SetStorageParameter(t, n, r, e, o);
                  });
                }),
                (t.prototype.BASE64Encode = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.BASE64Encode(t, e, r);
                  });
                }),
                (t.prototype.BASE64Decode = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.BASE64Decode(t, e, r);
                  });
                }),
                (t.prototype.StringToBytes = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.StringToBytes(t, e, r);
                  });
                }),
                (t.prototype.BytesToString = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.BytesToString(t, e, r);
                  });
                }),
                (t.prototype.DoesNeedSetSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.DoesNeedSetSettings(e, n);
                  });
                }),
                (t.prototype.InitializeMandatorySettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.InitializeMandatorySettings(e, n);
                  });
                }),
                (t.prototype.CreateModeSettings = function () {
                  return this.m_library.CreateModeSettings();
                }),
                (t.prototype.GetModeSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetModeSettings(e, n);
                  });
                }),
                (t.prototype.SetModeSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetModeSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateKeyMediaSettings = function () {
                  return this.m_library.CreateKeyMediaSettings();
                }),
                (t.prototype.GetKeyMediaSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetKeyMediaSettings(e, n);
                  });
                }),
                (t.prototype.SetKeyMediaSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetKeyMediaSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateFileStoreSettings = function () {
                  return this.m_library.CreateFileStoreSettings();
                }),
                (t.prototype.GetFileStoreSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetFileStoreSettings(e, n);
                  });
                }),
                (t.prototype.SetFileStoreSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetFileStoreSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateProxySettings = function () {
                  return this.m_library.CreateProxySettings();
                }),
                (t.prototype.GetProxySettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetProxySettings(e, n);
                  });
                }),
                (t.prototype.SetProxySettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetProxySettings(t, e, r);
                  });
                }),
                (t.prototype.CreateOCSPSettings = function () {
                  return this.m_library.CreateOCSPSettings();
                }),
                (t.prototype.GetOCSPSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetOCSPSettings(e, n);
                  });
                }),
                (t.prototype.SetOCSPSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetOCSPSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateOCSPAccessInfoModeSettings = function () {
                  return this.m_library.CreateOCSPAccessInfoModeSettings();
                }),
                (t.prototype.GetOCSPAccessInfoModeSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetOCSPAccessInfoModeSettings(e, n);
                  });
                }),
                (t.prototype.SetOCSPAccessInfoModeSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetOCSPAccessInfoModeSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateOCSPAccessInfoSettings = function () {
                  return this.m_library.CreateOCSPAccessInfoSettings();
                }),
                (t.prototype.EnumOCSPAccessInfoSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.EnumOCSPAccessInfoSettings(t, e, r);
                  });
                }),
                (t.prototype.GetOCSPAccessInfoSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetOCSPAccessInfoSettings(e, n);
                  });
                }),
                (t.prototype.SetOCSPAccessInfoSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetOCSPAccessInfoSettings(t, e, r);
                  });
                }),
                (t.prototype.DeleteOCSPAccessInfoSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.DeleteOCSPAccessInfoSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateTSPSettings = function () {
                  return this.m_library.CreateTSPSettings();
                }),
                (t.prototype.GetTSPSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetTSPSettings(e, n);
                  });
                }),
                (t.prototype.SetTSPSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetTSPSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateLDAPSettings = function () {
                  return this.m_library.CreateLDAPSettings();
                }),
                (t.prototype.GetLDAPSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetLDAPSettings(e, n);
                  });
                }),
                (t.prototype.SetLDAPSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetLDAPSettings(t, e, r);
                  });
                }),
                (t.prototype.CreateCMPSettings = function () {
                  return this.m_library.CreateCMPSettings();
                }),
                (t.prototype.GetCMPSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetCMPSettings(e, n);
                  });
                }),
                (t.prototype.SetCMPSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetCMPSettings(t, e, r);
                  });
                }),
                (t.prototype.GetSystemProxySettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetSystemProxySettings(e, n);
                  });
                }),
                (t.prototype.CreateTSLSettings = function () {
                  return this.m_library.CreateTSLSettings();
                }),
                (t.prototype.GetTSLSettings = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetTSLSettings(e, n);
                  });
                }),
                (t.prototype.SetTSLSettings = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetTSLSettings(t, e, r);
                  });
                }),
                (t.prototype.SetOCSPResponseExpireTime = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SetOCSPResponseExpireTime(t, e, r);
                  });
                }),
                (t.prototype.GetCertificate = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetCertificate(t, n, e, i);
                  });
                }),
                (t.prototype.ParseCertificateEx = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.ParseCertificateEx(t, e, r);
                  });
                }),
                (t.prototype.SaveCertificate = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SaveCertificate(t, e, r);
                  });
                }),
                (t.prototype.SaveCertificates = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SaveCertificates(t, e, r);
                  });
                }),
                (t.prototype.GetTSPByAccessInfo = function (t, n, r, i) {
                  var o = this.m_library;
                  return new e(function (e, a) {
                    o.GetTSPByAccessInfo(t, n, r, i, e, a);
                  });
                }),
                (t.prototype.CheckTSP = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.CheckTSP(t, n, r, e, o);
                  });
                }),
                (t.prototype.DownloadData = function (t, n) {
                  var i = this;
                  return new e(function (e, o) {
                    try {
                      var a = new XMLHttpRequest();
                      (a.onload = function () {
                        if (4 == a.readyState) {
                          var s = null;
                          try {
                            if (200 != a.status)
                              throw (
                                "Download data error. URL - " +
                                t +
                                ", status - " +
                                a.status
                              );
                            switch (n) {
                              case "binary":
                                s = new Uint8Array(a.response);
                                break;
                              case "json":
                                s = JSON.parse(
                                  a.responseText.replace(/\\'/g, "'")
                                );
                                break;
                              default:
                                s = a.responseText;
                            }
                          } catch (e) {
                            return (
                              console.log("EndUser.DowloadData error: " + e),
                              void o(
                                i.MakeError(
                                  r.EndUserError.ERROR_DOWNLOAD_FILE,
                                  ""
                                )
                              )
                            );
                          }
                          e(s);
                        }
                      }),
                        (a.onerror = function () {
                          o(
                            i.MakeError(r.EndUserError.ERROR_DOWNLOAD_FILE, "")
                          );
                        }),
                        (t = i.MakeURL(t)),
                        a.open("GET", t, !0),
                        "binary" == n && (a.responseType = "arraybuffer"),
                        a.send();
                    } catch (e) {
                      o(i.MakeError(r.EndUserError.ERROR_DOWNLOAD_FILE, ""));
                    }
                  });
                }),
                (t.prototype.CreateKeyMedia = function () {
                  return this.m_library.CreateKeyMedia();
                }),
                (t.prototype.GetPrivateKeyMedia = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.GetPrivateKeyMedia(t, e, r);
                  });
                }),
                (t.prototype.EnumKeyMediaTypes = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.EnumKeyMediaTypes(t, e, r);
                  });
                }),
                (t.prototype.EnumKeyMediaDevices = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.EnumKeyMediaDevices(t, n, e, i);
                  });
                }),
                (t.prototype.GetKeyMediaTypes = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetKeyMediaTypes(e, n);
                  });
                }),
                (t.prototype.GetKeyMediaDevices = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.GetKeyMediaDevices(t, e, r);
                  });
                }),
                (t.prototype.IsPrivateKeyReaded = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.IsPrivateKeyReaded(e, n);
                  });
                }),
                (t.prototype.ReadPrivateKey = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.ReadPrivateKey(e, n);
                  });
                }),
                (t.prototype.ReadPrivateKeySilently = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    "number" == typeof t
                      ? i.ReadPrivateKeySilently(t, n, r, e, o)
                      : i.ReadPrivateKeySilently(t, e, o);
                  });
                }),
                (t.prototype.ReadPrivateKeyBinary = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.ReadPrivateKeyBinary(t, n, e, i);
                  });
                }),
                (t.prototype.ReadPrivateKeyFile = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.ReadPrivateKeyFile(t, n, e, i);
                  });
                }),
                (t.prototype.ResetPrivateKey = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.ResetPrivateKey(e, n);
                  });
                }),
                (t.prototype.CtxReadPrivateKey = function (t, n, r, i) {
                  var o = this.m_library;
                  return new e(function (e, a) {
                    "number" == typeof n
                      ? o.CtxReadPrivateKey(t, n, r, i, e, a)
                      : o.CtxReadPrivateKey(t, n, e, a);
                  });
                }),
                (t.prototype.CtxReadPrivateKeyBinary = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.CtxReadPrivateKeyBinary(t, n, r, e, o);
                  });
                }),
                (t.prototype.CtxFreePrivateKey = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.CtxFreePrivateKey(t, e, r);
                  });
                }),
                (t.prototype.ShowOwnCertificate = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.ShowOwnCertificate(e, n);
                  });
                }),
                (t.prototype.GetOwnCertificate = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    "number" == typeof t || "number" == typeof n
                      ? r.GetOwnCertificate(t, n, e, i)
                      : r.GetOwnCertificate(e, i);
                  });
                }),
                (t.prototype.GetOwnEUserParams = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetOwnEUserParams(e, n);
                  });
                }),
                (t.prototype.CtxGetOwnEUserParams = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.CtxGetOwnEUserParams(t, e, r);
                  });
                }),
                (t.prototype.ModifyOwnEUserParams = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.ModifyOwnEUserParams(t, n, e, i);
                  });
                }),
                (t.prototype.CtxModifyOwnEUserParams = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.CtxModifyOwnEUserParams(t, n, r, e, o);
                  });
                }),
                (t.prototype.EnumOwnCertificates = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.EnumOwnCertificates(t, e, r);
                  });
                }),
                (t.prototype.GetPrivateKeyOwnerInfo = function () {
                  var t = this.m_library;
                  return new e(function (e, n) {
                    t.GetPrivateKeyOwnerInfo(e, n);
                  });
                }),
                (t.prototype.CtxEnumOwnCertificates = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.CtxEnumOwnCertificates(t, n, e, i);
                  });
                }),
                (t.prototype.CtxGetOwnCertificate = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.CtxGetOwnCertificate(t, n, r, e, o);
                  });
                }),
                (t.prototype.GetKeyInfo = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.GetKeyInfo(t, e, r);
                  });
                }),
                (t.prototype.GetKeyInfoBinary = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetKeyInfoBinary(t, n, e, i);
                  });
                }),
                (t.prototype.GetKeyInfoFile = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetKeyInfoFile(t, n, e, i);
                  });
                }),
                (t.prototype.GetCertificatesByKeyInfo = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.GetCertificatesByKeyInfo(t, n, r, e, o);
                  });
                }),
                (t.prototype.EnumJKSPrivateKeys = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.EnumJKSPrivateKeys(t, n, e, i);
                  });
                }),
                (t.prototype.GetJKSPrivateKey = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetJKSPrivateKey(t, n, e, i);
                  });
                }),
                (t.prototype.CreatePrivateKeyInfo = function () {
                  return this.m_library.CreatePrivateKeyInfo();
                }),
                (t.prototype.CreateEndUserInfo = function () {
                  return this.m_library.CreateEndUserInfo();
                }),
                (t.prototype.GeneratePrivateKeyEx = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p,
                  f,
                  _,
                  E,
                  h,
                  d,
                  S
                ) {
                  var y = this.m_library;
                  return new e(function (e, C) {
                    y.GeneratePrivateKeyEx(
                      t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      c,
                      p,
                      f,
                      _,
                      E,
                      h,
                      d,
                      S,
                      e,
                      C
                    );
                  });
                }),
                (t.prototype.ChangePrivateKeyPassword = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    null != t
                      ? r.ChangePrivateKeyPassword(
                          t.GetTypeIndex(),
                          t.GetDevIndex(),
                          t.GetPassword(),
                          n,
                          e,
                          i
                        )
                      : r.ChangePrivateKeyPassword(e, i);
                  });
                }),
                (t.prototype.ChangeSoftwarePrivateKeyPassword = function (
                  t,
                  n,
                  r
                ) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.ChangeSoftwarePrivateKeyPassword(t, n, r, e, o);
                  });
                }),
                (t.prototype.ChangeOwnCertificatesStatus = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.ChangeOwnCertificatesStatus(t, n, e, i);
                  });
                }),
                (t.prototype.CtxChangeOwnCertificatesStatus = function (
                  t,
                  n,
                  r
                ) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.CtxChangeOwnCertificatesStatus(t, n, r, e, o);
                  });
                }),
                (t.prototype.MakeNewCertificate = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  p,
                  f,
                  _
                ) {
                  var E = this.m_library;
                  return new e(function (e, h) {
                    E.MakeNewCertificate(
                      t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l,
                      c,
                      p,
                      f,
                      _,
                      e,
                      h
                    );
                  });
                }),
                (t.prototype.MakeNewOwnCertificate = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l = this.m_library;
                  return new e(function (e, c) {
                    l.MakeNewOwnCertificate(t, n, r, i, o, a, s, u, e, c);
                  });
                }),
                (t.prototype.CtxMakeNewOwnCertificate = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l
                ) {
                  var c = this.m_library;
                  return new e(function (e, p) {
                    c.CtxMakeNewOwnCertificate(t, n, r, i, o, a, s, u, l, e, p);
                  });
                }),
                (t.prototype.CtxMakeDeviceCertificate = function (
                  t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u
                ) {
                  var l = this.m_library;
                  return new e(function (e, c) {
                    l.CtxMakeDeviceCertificate(t, n, r, i, o, a, s, u, e, c);
                  });
                }),
                (t.prototype.CtxHash = function (t, n, r, i) {
                  var o = this.m_library;
                  return new e(function (e, a) {
                    o.CtxHash(t, n, r, i, e, a);
                  });
                }),
                (t.prototype.CtxHashBegin = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.CtxHashBegin(t, n, r, e, o);
                  });
                }),
                (t.prototype.CtxHashContinue = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.CtxHashContinue(t, n, e, i);
                  });
                }),
                (t.prototype.CtxHashEnd = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.CtxHashEnd(t, e, r);
                  });
                }),
                (t.prototype.CtxHashFree = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.CtxHashFree(t, e, r);
                  });
                }),
                (t.prototype.GetSignType = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetSignType(t, n, e, i);
                  });
                }),
                (t.prototype.CtxGetSignerInfo = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.CtxGetSignerInfo(t, n, r, e, o);
                  });
                }),
                (t.prototype.SignHash = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SignHash(t, e, r);
                  });
                }),
                (t.prototype.Sign = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.Sign(t, e, r);
                  });
                }),
                (t.prototype.SignInternal = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.SignInternal(t, n, e, i);
                  });
                }),
                (t.prototype.SignHashRSA = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.SignHashRSA(t, e, r);
                  });
                }),
                (t.prototype.SignRSA = function (t, n, r) {
                  var i = this.m_library;
                  return new e(function (e, o) {
                    i.SignRSA(t, n, r, e, o);
                  });
                }),
                (t.prototype.CtxSignHash = function (t, n, r, i) {
                  var o = this.m_library;
                  return new e(function (e, a) {
                    o.CtxSignHash(t, n, r, i, e, a);
                  });
                }),
                (t.prototype.CtxSign = function (t, n, r, i, o) {
                  var a = this.m_library;
                  return new e(function (e, s) {
                    a.CtxSign(t, n, r, i, o, e, s);
                  });
                }),
                (t.prototype.CtxSignFile = function (t, n, r, i, o, a) {
                  var s = this.m_library;
                  return new e(function (e, u) {
                    s.CtxSignFile(t, n, r, i, o, a, e, u);
                  });
                }),
                (t.prototype.AppendSignHash = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.AppendSignHash(t, n, e, i);
                  });
                }),
                (t.prototype.AppendSign = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.AppendSign(t, n, e, i);
                  });
                }),
                (t.prototype.AppendSignInternal = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.AppendSignInternal(t, n, e, i);
                  });
                }),
                (t.prototype.CtxAppendSignHash = function (t, n, r, i, o) {
                  var a = this.m_library;
                  return new e(function (e, s) {
                    a.CtxAppendSignHash(t, n, r, i, o, e, s);
                  });
                }),
                (t.prototype.CtxAppendSign = function (t, n, r, i, o) {
                  var a = this.m_library;
                  return new e(function (e, s) {
                    a.CtxAppendSign(t, n, r, i, o, e, s);
                  });
                }),
                (t.prototype.CtxAppendSignFile = function (t, n, r, i, o, a) {
                  var s = this.m_library;
                  return new e(function (e, u) {
                    s.CtxAppendSignFile(t, n, r, i, o, a, e, u);
                  });
                }),
                (t.prototype.IsDataInSignedDataAvailable = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.IsDataInSignedDataAvailable(t, e, r);
                  });
                }),
                (t.prototype.GetCertificateFromSignedData = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetCertificateFromSignedData(t, n, e, i);
                  });
                }),
                (t.prototype.GetSignsCount = function (t) {
                  var n = this.m_library;
                  return new e(function (e, r) {
                    n.GetSignsCount(t, e, r);
                  });
                }),
                (t.prototype.GetSignTimeInfo = function (t, n) {
                  var r = this.m_library;
                  return new e(function (e, i) {
                    r.GetSignTimeInfo(t, n, e, i);
                  });
                }),
                (t.prototype.VerifyHashOnTimeEx = function (t, n, r, i, o, a) {
                  var s = this.m_library;
                  return new e(function (e, u) {
                    s.VerifyHashOnTimeEx(t, n, r, i, o, a, e, u);
                  });
                }),
                (t.prototype.VerifyDataOnTimeEx = function (t, n, r, i, o, a) {
                  var s = this.m_library;
                  return new e(function (e, u) {
                    s.VerifyDataOnTimeEx(t, n, r, i, o, a, e, u);
                  });
                }),
                (t.prototype.VerifyDataInternalOnTimeEx = function (
                  t,
                  n,
                  r,
                  i,
                  o
                ) {
                  var a = this.m_library;
                  return new e(function (e, s) {
                    a.VerifyDataInternalOnTimeEx(t, n, r, i, o, e, s);
                  });
                }),
                (t.prototype.CreateReference = function (e, t) {
                  return this.m_library.CreateReference(e, t);
                }),
                t
              );
            })();
          t.a = i;
        }).call(this, n(17).Promise);
      },
      function (e, t) {
        var n,
          r,
          i = (e.exports = {});
        function o() {
          throw new Error("setTimeout has not been defined");
        }
        function a() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === o || !n) && setTimeout)
            return (n = setTimeout), setTimeout(e, 0);
          try {
            return n(e, 0);
          } catch (t) {
            try {
              return n.call(null, e, 0);
            } catch (t) {
              return n.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            n = "function" == typeof setTimeout ? setTimeout : o;
          } catch (e) {
            n = o;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : a;
          } catch (e) {
            r = a;
          }
        })();
        var u,
          l = [],
          c = !1,
          p = -1;
        function f() {
          c &&
            u &&
            ((c = !1),
            u.length ? (l = u.concat(l)) : (p = -1),
            l.length && _());
        }
        function _() {
          if (!c) {
            var e = s(f);
            c = !0;
            for (var t = l.length; t; ) {
              for (u = l, l = []; ++p < t; ) u && u[p].run();
              (p = -1), (t = l.length);
            }
            (u = null),
              (c = !1),
              (function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                  return (r = clearTimeout), clearTimeout(e);
                try {
                  r(e);
                } catch (t) {
                  try {
                    return r.call(null, e);
                  } catch (t) {
                    return r.call(this, e);
                  }
                }
              })(e);
          }
        }
        function E(e, t) {
          (this.fun = e), (this.array = t);
        }
        function h() {}
        (i.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          l.push(new E(e, t)), 1 !== l.length || c || s(_);
        }),
          (E.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (i.title = "browser"),
          (i.browser = !0),
          (i.env = {}),
          (i.argv = []),
          (i.version = ""),
          (i.versions = {}),
          (i.on = h),
          (i.addListener = h),
          (i.once = h),
          (i.off = h),
          (i.removeListener = h),
          (i.removeAllListeners = h),
          (i.emit = h),
          (i.prependListener = h),
          (i.prependOnceListener = h),
          (i.listeners = function (e) {
            return [];
          }),
          (i.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (i.cwd = function () {
            return "/";
          }),
          (i.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (i.umask = function () {
            return 0;
          });
      },
      function (e, t) {
        var n;
        n = (function () {
          return this;
        })();
        try {
          n = n || new Function("return this")();
        } catch (e) {
          "object" == typeof window && (n = window);
        }
        e.exports = n;
      },
      function (e, t) {},
    ]);
  },
  function (e, t, n) {
    e.exports = n(2);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r,
      i = n(0),
      o = (function () {
        function e() {}
        return (
          (e.PK_READ_FORM_TITLE = "Зчитайте ключ"),
          (e.PK_READ_FORM_SUB_TITLE =
            'Оберіть тип носія особистого ключа, особистий ключ, введіть пароль захисту ключа та натисніть "Зчитати"'),
          (e.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE =
            "Формування нового сертифіката"),
          (e.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE =
            'Оберіть тип носія діючого особистого ключа, діючий особистий ключ, введіть пароль захисту ключа та натисніть "Зчитати"'),
          (e.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE =
            'Оберіть тип носія для нового особистого ключа, новий особистий ключ, введіть пароль захисту ключа та натисніть "Сформувати"'),
          (e.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE =
            'Введіть новий пароль захисту ключа, його підтвердження та натисніть "Сформувати"'),
          (e.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE =
            'Введіть новий пароль захисту ключа, його підтвердження та натисніть "Сформувати"'),
          (e.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE =
            "Завантажити нові сертифікати особистого ключа можна за посиланнями"),
          (e.PK_SET_PROXY_FORM_TITLE =
            "Встановлення налаштувань proxy-сервера"),
          (e.PK_SET_PROXY_FORM_SUB_TITLE =
            'Встановіть налаштування proxy-сервера та натисніть "Зберегти"'),
          (e.PK_INFO_FORM_TITLE = "Перевірте дані"),
          (e.PK_INFO_FORM_SUB_TITLE = "Перевірте дані"),
          (e.PRE_SIGN_FILE_FORM_TITLE = "Підписати та зберегти"),
          (e.SIGN_FILE_FORM_TITLE = "Підписати файл за допомогою"),
          (e.SIGN_FILE_FORM_SUB_TITLE =
            'Оберіть файл для підпису та натисніть "Підписати"'),
          (e.SIGN_FILE_RESULT_FORM_TITLE = "👍 Документ підписано"),
          (e.SIGN_FILE_RESULT_FORM_SUB_TITLE =
            "Ви можете зберігти підписаний файл."),
          (e.VIEW_PKEY_CERTIFICATES_FORM_TITLE =
            "Перегляд інформації про сертифікати особистого ключа"),
          (e.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE =
            'Для збереження сертифікатів особистого ключа до папки "Завантаження" натисніть "Зберегти"'),
          (e.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE =
            "Формування технологічних сертифікатів"),
          (e.MAKE_TECHNICAL_CERTIFICATES_PK_READ_FORM_SUB_TITLE =
            'Оберіть тип носія особистого ключа, особистий ключ, введіть пароль захисту ключа відповідальної особи та натисніть "Зчитати"'),
          (e.MAKE_TECHNICAL_CERTIFICATES_FORM_SUB_TITLE =
            'Введіть назву технічного пристрою, оберіть файл із запитом ЕЦП (EU.p10) та протоколу розподілу ключів (EU-KEP.p10), та натисніть "Сформувати"'),
          (e.MAKE_TECHNICAL_CERTIFICATES_RESULT_FORM_SUB_TITLE =
            "Завантажити технологічні сертифікати можна за посиланнями"),
          (e.PROCESS_STATUS_LOAD_LIBRARY =
            "Завантаження криптографічної бібліотеки"),
          (e.PROCESS_STATUS_INITIALIZE_LIBRARY =
            "Ініціалізація криптографічної бібліотеки"),
          (e.PROCESS_STATUS_SAVE_PROXY_SETTINGS =
            "Збереження налаштувань proxy-серверу"),
          (e.PROCESS_STATUS_READ_PRIVATE_KEY = "Зчитування особистого ключа"),
          (e.PROCESS_STATUS_MAKE_NEW_CERTIFICATE =
            "Формування нових сертифікатів особистого ключа"),
          (e.PROCESS_STATUS_SIGN_FILE = "Накладання підпису на файл"),
          (e.PROCESS_STATUS_SIGN_DATA = "Накладання підпису на дані"),
          (e.PROCESS_STATUS_MAKE_TECHNICAL_CERTS =
            "Формування технологічного сертифікату пристрою"),
          (e.TEXT_ERROR_DESCRIPTION = "Опис помилки"),
          (e.TEXT_LIBRARY_NEED_INSTALL =
            'Для роботи з криптографічною бібліотекою необхідно встановити додаткове програмне забезпечення (web-бібліотеку підпису) після чого натиснути "Оновити сторінку"'),
          (e.TEXT_LIBRARY_NEED_UPDATE =
            'Для роботи з криптографічною бібліотекою необхідно оновити додаткове програмне забезпечення (web-бібліотеку підпису) після чого натиснути "Оновити сторінку"'),
          (e.TEXT_LIBRARY_INSTALL =
            "Інсталяційний пакет web-бібліотеки підпису"),
          (e.TEXT_LIBRARY_UPDATE = "Оновлення web-бібліотеки підпису"),
          (e.TEXT_LIBRARY_WEB_EXTENSION_INSTALL =
            "Інсталяційний пакет бібліотеки підпису (web-розширення)"),
          (e.TEXT_LIBRARY_USER_MANUAL = "Настанова користувача"),
          (e.TEXT_DOWLOAD_NEW_CERTIFICATES = "Завантажити нові сертифікати"),
          (e.TEXT_SAVE_NEW_PRIVATE_KEY = "Зберегти новий особистий ключ"),
          (e.TEXT_SAVE_SIGN_FILE = "Зберегти підписаний файл"),
          (e.TEXT_CA_AUTO_DETECT = "Визначити автоматично"),
          (e.TEXT_SET_PROXY_SETTINGS =
            "Перевірте та встановіть налаштування proxy-сервера"),
          (e.TEXT_SIGN_ALGO_DSTU4145 = "ДСТУ 4145"),
          (e.TEXT_SIGN_ALGO_RSA = "RSA"),
          (e.TEXT_SIGN_ALGO_ECDSA = "ECDSA"),
          (e.TEXT_SIGN_RESULT_TITLE = "Результат накладання підпису"),
          (e.TEXT_SIGN_RESULT_SUCCESS =
            "Підпис накладено успішно. Цілісність даних підтверджено"),
          (e.TEXT_SIGN_FILE_NAME_TITLE = "Назва файлу, що підписувався"),
          (e.TEXT_SIGNER_TITLE = "Підписувач"),
          (e.TEXT_SUBJECT_CN_TITLE = "Власник"),
          (e.TEXT_ORGANIZATION_TITLE = "Організація"),
          (e.TEXT_TITLE_TITLE = "Посада"),
          (e.TEXT_DRFO_CODE_TITLE = "РНОКПП"),
          (e.TEXT_EDRPOU_CODE_TITLE = "Код ЄДРПОУ"),
          (e.TEXT_DIGITAL_STAMP_TITLE = "Є цифровою печаткою"),
          (e.TEXT_KEY_TYPE = "Тип ключа"),
          (e.TEXT_KEY_TYPE_DSTU4145 = "ДСТУ 4145"),
          (e.TEXT_KEY_TYPE_RSA = "RSA"),
          (e.TEXT_KEY_TYPE_ECDSA = "ECDSA"),
          (e.TEXT_KEY_USAGE_TITLE = "Використання ключів"),
          (e.TEXT_KEY_USAGE_SIGN = "ЕЦП"),
          (e.TEXT_KEY_NON_REPUDATION = "Неспростовність"),
          (e.TEXT_KEY_USAGE_ENVELOP = "Протоколи розподілу ключів"),
          (e.TEXT_ISSUER_CN_TITLE = "Сертифікат виданий"),
          (e.TEXT_SN_TITLE = "Серійний номер"),
          (e.TEXT_CERTIFICATE_VALID_TITLE = "Cертифікат чинний"),
          (e.TEXT_CERTIFICATE_TITLE = "Cертифікат"),
          (e.TEXT_CERTIFICATES_INFO_TITLE = "Cертифікати"),
          (e.TEXT_SIGN_TIME_TITLE = "Час підпису"),
          (e.TEXT_SIGN_TIME_SIGN_TIMESTAMP_TITLE =
            "Час підпису (підтверджено кваліфікованою позначкою часу для підпису від Надавача)"),
          (e.TEXT_SIGN_TIME_DATA_TIMESTAMP_TITLE =
            "Час підпису (підтверджено кваліфікованою позначкою часу для даних від Надавача)"),
          (e.TEXT_SIGN_TIME_TIME_TITLE =
            "Час підпису (не підтверджено кваліфікованою позначкою часу для підпису від Надавача)"),
          (e.TEXT_NO_VALUE = "відсутній"),
          (e.TEXT_PRIVATE_KEY_MEDIA_INFO = "Носій ос. ключа"),
          (e.TEXT_DOWLOAD_CERTIFICATES = "Завантажити сертифікати"),
          (e.TEXT_FROM = "з"),
          (e.TEXT_TO = "до"),
          (e.TEXT_NAME = "Ім'я"),
          (e.TEXT_KEY_MEDIA_TYPE_TITLE = "Тип носія особистого ключа"),
          (e.TEXT_KEY_MEDIA_TYPE_QSCD = "Захищений"),
          (e.TEXT_KEY_MEDIA_TYPE_NOT_QSCD = "Незахищений"),
          (e.TEXT_KEY_MEDIA_SN_TITLE = "Серійний номер носія особистого ключа"),
          (e.TEXT_NOT_DEFINED = "Не визначено"),
          (e.TEXT_KSP_OPERATION_CONFIRMATION =
            "Натисність або зчитайте QR-код сканером у застосунку {0} та дотримуйтесь інструкцій"),
          (e.TEXT_QR_CODE_VALID_UNTIL = "QR-код буде дійсним ще"),
          (e.LABEL_PK = "Особистий ключ"),
          (e.LABEL_PK_SUPPORTED_FILES =
            '(зазвичай його назва "Key-6.dat" або *.pfx, *.pk8, *.zs2, *.jks)'),
          (e.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES =
            "(Key-6.dat або *.pfx)"),
          (e.LABEL_PK_TYPE_FILE =
            "Файловий носій (flash-диск, CD-диск, SD-картка тощо)"),
          (e.LABEL_PK_TYPE_KM =
            "Захищений носій (е.ключ Алмаз-1К, Кристал-1, Гряда-301, ID-картка тощо)"),
          (e.LABEL_PK_TYPE_SIM = "SIM-картка"),
          (e.LABEL_MAKE_TECHNICAL_CERT_DEVICE_NAME_TITLE =
            "Назва технічного пристрою:"),
          (e.LABEL_STEP = "Крок {0} з {1}"),
          (e.BUTTON_READ = "Зчитати"),
          (e.BUTTON_CLEAR = "Cтерти"),
          (e.BUTTON_MAKE = "Сформувати"),
          (e.BUTTON_CHOOSE_ANOTHER = "Обрати інший"),
          (e.BUTTON_BACK = "Назад"),
          (e.BUTTON_SAVE = "Зберегти"),
          (e.BUTTON_DOWNLOAD = "Завантажити"),
          (e.BUTTON_THANKS = "Дякую"),
          (e.BUTTON_SIGN = "Підписати"),
          (e.BUTTON_SIGN_ASICE = "Підписати в форматі ASIC-E"),
          (e.STATUS_PRIVATE_KEY_READED = "Особистий ключ зчитано"),
          (e.STATUS_NEW_CERTIFICATE_MADE = "Особистий ключ створено"),
          (e.STATUS_FILE_SIGNED = "Підпис накладено успішно"),
          (e.STATUS_RESULT_SAVED_TO_DOWNLOADS =
            'Результат збережено до папки "Завантаження" з ім\'ям {0}'),
          (e.ERROR_PROXY_ADDRESS_NOT_SET = "Не вказана адреса proxy-сервера"),
          (e.ERROR_PROXY_PORT_NOT_SET = "Не вказаний порт proxy-сервера"),
          (e.ERROR_PROXY_USER_NOT_SET =
            "Не вказане ім'я користувача proxy-сервера"),
          (e.ERROR_NEW_PK_FILE_NAME_NOT_SET =
            "Не вказане ім'я файлу нового ключа"),
          (e.ERROR_MSISDN_NOT_SET_OR_INVALID =
            "Не вказано номер мобільного телефону або він має невірний формат"),
          (e.ERROR_USER_ID_NOT_SET_OR_INVALID =
            "Не вказано ідентифікатор користувача або він має невірний формат"),
          (e.ERROR_PASSWORD_NOT_SET = "Не вказано пароль до особистого ключа"),
          (e.ERROR_USER_NOT_SET =
            "Не вказано користувача носія ключової інформації"),
          (e.ERROR_NEW_PASSWORD_NOT_SET =
            "Не вказано новий пароль до особистого ключа"),
          (e.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET =
            "Не вказано підтвердження нового паролю до особистого ключа"),
          (e.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL =
            "Новий пароль та його підтвердження не співпадають"),
          (e.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS =
            "Новий пароль не відповідає вимогам"),
          (e.ERROR_CERTIFICATES_NOT_SELECTED =
            "Не обрано сертифікати особистого ключа"),
          (e.ERROR_GET_JKS_PRIVATE_KEY_INFO =
            "Виникла помилка при отриманні інформації про особистий ключ"),
          (e.ERROR_KM_UPDATE_LIST =
            "Виникла помилка при оновленні списку носіїв ключової інформації"),
          (e.ERROR_LIBRARY_NOT_SUPPORTED =
            "Криптографічна бібліотека не підтримується"),
          (e.ERROR_LIBRARY_NOT_LOADED =
            "Криптографічна бібліотека не завантажена"),
          (e.ERROR_LIBRARY_LOAD =
            "Виникла помилка при завантаженні бібліотеки"),
          (e.ERROR_LIBRARY_INITIALIZE =
            "Виникла помилка при ініціалізації криптографічної бібліотеки"),
          (e.ERROR_GET_PROXY_SETTINGS =
            "Виникла помилка при отриманні налаштувань proxy-серверу"),
          (e.ERROR_SET_PROXY_SETTINGS =
            "Виникла помилка при збереженні налаштувань proxy-серверу"),
          (e.ERROR_PRIVATE_KEY_NOT_READED = "Особистий ключ не зчитано"),
          (e.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO =
            "Зчитаний особистий ключ не підтримує {0}. Необхідно зчитати інший особистий ключ"),
          (e.ERROR_READ_PRIVATE_KEY =
            "Виникла помилка при зчитуванні особистого ключа"),
          (e.ERROR_READ_PRIVATE_KEY_INVALID_CA =
            "Ваш сертифікат виданий іншим надавачем та не обслуговується в {0}. Необхідно обрати надавача Вашого сертифіката"),
          (e.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT =
            "Надавач не підтримує автоматичний пошук сертифіката за ос. ключем. Необхідно обрати надавача самостійно"),
          (e.ERROR_READ_PRIVATE_NEED_CERTIFICATE =
            "Надавач {0} не підтримує автоматичний пошук сертифіката за ос. ключем. Необхідно обрати сертифікат(и) ос. ключа"),
          (e.ERROR_MAKE_NEW_CERTIFICATE =
            "Виникла помилка при формуванні нових сертифікатів особистого ключа"),
          (e.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA =
            "Формування нового сертифіката можливе лише для користувачів {0}! Ваш сертифікат виданий іншим надавачем!"),
          (e.ERROR_FILE_TO_SIGN_NOT_SET = "Не обрано файл для підпису"),
          (e.ERROR_FILE_TO_SIGN_RESULT_NOT_SET =
            "Не вказане ім'я файлу з підписом"),
          (e.ERROR_FILE_EMPTY =
            "Обраний файл не містить даних. Оберіть інший файл"),
          (e.ERROR_FILE_TO_BIG =
            'Занадто великий розмір файлу. Оберіть файл меншого розміру або оберіть тип підпису "Дані та підпис окремими файлами (формат CAdES)"'),
          (e.ERROR_SIGN_MULTIPLE_FILES_NOT_SUPPORTED =
            "Обраний формат підпису не підтримує одночасний підпис декількох файлів. Необхідно використовувати формат підпису ASiC-E"),
          (e.ERROR_SIGN_FILE = "Виникла помилка при підписі файла"),
          (e.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_NOT_SET =
            "Не вказано назву технічного пристрою"),
          (e.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_INVALID =
            "Назва технічного пристрою має невірний формат"),
          (e.ERROR_TECHNICAL_EU_CERTS_REQUEST_FILE_NOT_SET =
            "Не обрано файл із запитом ЕЦП"),
          (e.ERROR_TECHNICAL_EU_KEP_CERTS_REQUEST_FILE_NOT_SET =
            "Не обрано файл із запитом протоколу розподілу ключів"),
          (e.ERROR_MAKE_TECHNICAL_CERTS =
            "Виникла помилка при формуванні технологічних сертифікатів пристрою"),
          (e.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED =
            "Використання удосконаленого сертифіката відкритого ключа не дозволено. Зверніться до надавача Вашого сертифіката ({0}) для отримання квалфікованого сертифіката відкритого ключа"),
          (e.ERROR_FILE_NOT_PDF =
            "Формування підпису в форматі PAdES можливо лише для файлів pdf. Оберіть інший файл або формат підпису"),
          (e.ERROR_FILE_NOT_XML =
            "Формування підпису в форматі XAdES-enveloped можливо лише для файлів xml. Оберіть інший файл, формат або тип підпису"),
          (e.ERROR_DOWNLOAD_DATA = "Виникла помилка при завантаженні даних"),
          (e.ERROR_PARSE_SIGN_TEMPLATE =
            "Виникла помилка в шаблоні при відображенні результату підпису"),
          (e.ERROR_SAVE_FILE = "Виникла помилка при збереженні файлу {0}"),
          (e.CONFIRM_CONTINUE_WITHOUT_PKEY_READED =
            "Ви відмовилися надавати ідентифікаційні дані ос. ключа. Продовжити?"),
          e
        );
      })(),
      a = (function () {
        function e() {}
        return (
          (e.format = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            var r = Array.apply(null, arguments);
            return (
              (r = r.slice(1)),
              e.replace(/{(\d+)}/g, function (e, t) {
                return void 0 !== r[t] ? r[t] : e;
              })
            );
          }),
          e
        );
      })();
    !(function (e) {
      (e[(e.UNKNOWN = -1)] = "UNKNOWN"),
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.UA = 1)] = "UA"),
        (e[(e.RU = 2)] = "RU"),
        (e[(e.EN = 3)] = "EN");
    })(r || (r = {}));
    var s,
      u,
      l,
      c = (function () {
        function e() {
          (e.s_instance = this),
            (this.m_Locale = r.UA),
            (this.m_Translations = new Array()),
            (this.m_Translations[r.UA] = {}),
            (this.m_Translations[r.EN] = {}),
            (this.m_Translations[r.RU] = {});
        }
        return (
          (e.getInstance = function () {
            return e.s_instance;
          }),
          (e.getLocaleTypeById = function (e) {
            switch ((e = e.toLowerCase())) {
              case "uk":
              case "ua":
                return r.UA;
              case "ru":
                return r.RU;
              case "en":
                return r.EN;
              default:
                return r.UNKNOWN;
            }
          }),
          (e.prototype.setLocale = function (e) {
            e == r.UNKNOWN && (e = r.DEFAULT), (this.m_Locale = e);
          }),
          (e.prototype.getLocale = function () {
            return this.m_Locale;
          }),
          (e.translate = function (t) {
            try {
              var n = e.getInstance(),
                r = n.m_Translations[n.m_Locale];
              return r.hasOwnProperty(t) ? r[t] : t;
            } catch (e) {
              return t;
            }
          }),
          (e.prototype.addTranlation = function (e, t) {
            var n = this.m_Translations[e];
            for (var r in t) n[r] = t[r];
          }),
          (e.prototype.addTranlations = function (t) {
            for (var n in t) this.addTranlation(e.getLocaleTypeById(n), t[n]);
          }),
          (e.s_instance = new e()),
          e
        );
      })(),
      p =
        ((function () {
          function e() {}
          e.format = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            var r = Array.apply(null, arguments);
            return (
              (r = r.slice(1)),
              e.replace(/{(\d+)}/g, function (e, t) {
                return void 0 !== r[t] ? r[t] : e;
              })
            );
          };
        })(),
        c.translate);
    (s = window.Node || window.Element) &&
      s.prototype &&
      null == s.prototype.children &&
      Object.defineProperty(s.prototype, "children", {
        get: function () {
          for (var e, t = 0, n = this.childNodes, r = []; (e = n[t++]); )
            1 === e.nodeType && r.push(e);
          return r;
        },
      }),
      (function (e) {
        (e.Unknown = ""),
          (e.Image = "image"),
          (e.Date = "date"),
          (e.Item = "item"),
          (e.Link = "link"),
          (e.Html = "html");
      })(u || (u = {})),
      (function (e) {
        (e.Unknown = ""),
          (e.Sequence = "sequence"),
          (e.Array = "array"),
          (e.Choice = "choice");
      })(l || (l = {}));
    var f,
      _,
      E = function () {
        (this.options = {
          margins: 0,
          font: "",
          fontSize: 0,
          fontColor: "",
          fontStyle: "",
        }),
          (this.fonts = new Array()),
          (this.contents = null);
      },
      h = (function () {
        function e() {
          this.tmpl = new E();
        }
        return (
          (e.isBasicType = function (e) {
            return [u.Image, u.Date, u.Item, u.Link, u.Html].indexOf(e) >= 0;
          }),
          (e.isComplexType = function (e) {
            return [l.Sequence, l.Array, l.Choice].indexOf(e) >= 0;
          }),
          (e.prototype.parse = function (e) {
            try {
              var t = new DOMParser().parseFromString(e, "application/xml");
              return (
                (this.tmpl.options = this.parseOptions(t)),
                (this.tmpl.fonts = this.parseFonts(t)),
                (this.tmpl.contents = this.parseContents(t, this.tmpl.options)),
                !0
              );
            } catch (e) {
              return console.log(e), !1;
            }
          }),
          (e.prototype.getElOpt = function (e, t, n) {
            try {
              var r = e.getElementsByTagName(t).item(0).textContent;
              switch (n) {
                case "number":
                  r = parseInt(r);
              }
              return r;
            } catch (n) {
              throw "No option: " + t + " in element " + e.nodeName;
            }
          }),
          (e.prototype.parseOptions = function (e) {
            var t = e.getElementsByTagName("options").item(0);
            return {
              margins: this.getElOpt(t, "margins", "number"),
              font: this.getElOpt(t, "font"),
              fontSize: this.getElOpt(t, "font-size", "number"),
              fontColor: this.getElOpt(t, "font-color"),
              fontStyle: this.getElOpt(t, "font-style"),
            };
          }),
          (e.prototype.parseFonts = function (e) {
            for (
              var t = e.getElementsByTagName("fonts").item(0).children,
                n = new Array(),
                r = 0;
              r < t.length;
              r++
            )
              n.push({
                name: this.getElOpt(t[r], "name"),
                path: this.getElOpt(t[r], "path"),
                style: this.getElOpt(t[r], "style"),
              });
            return n;
          }),
          (e.prototype.parseBasicType = function (t, n) {
            var r = t.getAttribute("id"),
              i = t.nodeName;
            if (!e.isBasicType(i))
              throw "Invalid basic type " + i + " in element " + r;
            return {
              type: i,
              id: t.getAttribute("id"),
              title: t.getAttribute("title"),
              value: t.textContent,
              options: {
                font: t.getAttribute("font") || n.font,
                fontSize: parseInt(t.getAttribute("font-size") || n.fontSize),
                fontColor: t.getAttribute("font-color") || n.fontColor,
                fontStyle: t.getAttribute("font-style") || n.fontStyle,
                align: t.getAttribute("align") || "left",
                format: t.getAttribute("format"),
                height: parseInt(t.getAttribute("height")),
                width: parseInt(t.getAttribute("width")),
                visibility: t.getAttribute("visibility") || "",
                i18n: "true" == t.getAttribute("i18n"),
              },
            };
          }),
          (e.prototype.parseComplexType = function (t, n) {
            if (1 != t.children.length)
              throw "Invalid complex type in element " + t.id;
            var r = t.getAttribute("id"),
              i = t.children[0].nodeName,
              o = t.children[0].children;
            if (!e.isComplexType(i))
              throw "Invalid complex type " + i + " in element" + r;
            for (
              var a = { id: r, type: i, items: new Array() }, s = 0;
              s < o.length;
              s++
            ) {
              var u =
                "complexType" == o[s].nodeName
                  ? this.parseComplexType(o[s], n)
                  : this.parseBasicType(o[s], n);
              i == l.Choice ? (a.items[u.id] = u) : a.items.push(u);
            }
            return a;
          }),
          (e.prototype.parseContents = function (e, t) {
            var n = e.getElementsByTagName("contents").item(0);
            return this.parseComplexType(n.children[0], t);
          }),
          e
        );
      })();
    !(function (e) {
      (e.Html = "html"), (e.Pdf = "pdf");
    })(f || (f = {})),
      (function (e) {
        (e.String = "string"), (e.Binary = "binary"), (e.File = "file");
      })(_ || (_ = {}));
    var d = function () {
        this.html = "";
      },
      S = function (e, t) {
        this.doc = new jsPDF({ unit: "pt", format: "a4" });
        for (var n = 0; n < e.length; n++)
          this.doc.addFont(e[n].path, e[n].name, e[n].style);
        (this.page = {
          width:
            this.doc.internal.pageSize.width ||
            this.doc.internal.pageSize.getWidth(),
          height:
            this.doc.internal.pageSize.height ||
            this.doc.internal.pageSize.getHeight(),
          margin: t.margins,
          center: {
            x:
              (this.doc.internal.pageSize.width ||
                this.doc.internal.pageSize.getWidth()) / 2,
          },
        }),
          (this.yOffset = this.page.margin);
      },
      y = (function () {
        function e(e, t, n) {
          (this.m_name = e), (this.m_tmpl = t), (this.m_contents = n);
        }
        return (
          (e.formatDate = function (e, t) {
            var n = {
              M: e.getMonth() + 1,
              d: e.getDate(),
              h: e.getHours(),
              m: e.getMinutes(),
              s: e.getSeconds(),
            };
            return (t = t.replace(/(M+|d+|h+|m+|s+)/g, function (e) {
              return ((e.length > 1 ? "0" : "") + n[e.slice(-1)]).slice(-2);
            })).replace(/(y+)/g, function (t) {
              return e.getFullYear().toString().slice(-t.length);
            });
          }),
          (e.prototype.makeDocument = function (e, t) {
            switch (((this.m_type = e), e)) {
              case f.Html:
                this.m_htmlContext = new d();
                break;
              case f.Pdf:
                this.m_pdfContext = new S(
                  this.m_tmpl.fonts,
                  this.m_tmpl.options
                );
            }
            this.processItem(this.m_tmpl.contents, this.m_contents);
            var n = null;
            switch (e) {
              case f.Html:
                n = this.m_htmlContext.html;
                break;
              case f.Pdf:
                switch (t) {
                  case _.Binary:
                    n = new Uint8Array(
                      this.m_pdfContext.doc.output("arraybuffer")
                    );
                    break;
                  case _.File:
                    this.m_pdfContext.doc.output("save", this.m_name);
                }
            }
            return n;
          }),
          (e.prototype.processItem = function (e, t) {
            var n = e.id && t ? (void 0 !== t[e.id] ? t[e.id] : t) : null;
            h.isComplexType(e.type)
              ? this.processComplexType(e, n)
              : this.processBasicType(e, n);
          }),
          (e.prototype.processComplexType = function (e, t) {
            var n, r;
            switch (
              (this.m_type == f.Html &&
                (this.m_htmlContext.html += '<div id="' + e.id + '">'),
              e.type)
            ) {
              case l.Sequence:
                for (n = 0; n < e.items.length; n++)
                  this.processItem(e.items[n], t);
                break;
              case l.Array:
                for (n = 0; n < t.length; n++)
                  for (r = 0; r < e.items.length; r++)
                    this.processItem(e.items[r], t[n]);
                break;
              case l.Choice:
                (e = e.items[t.id]), this.processItem(e, t);
            }
            this.m_type == f.Html && (this.m_htmlContext.html += "</div>");
          }),
          (e.prototype.processBasicType = function (t, n) {
            var r = t.type,
              i = n && n.title ? n.title : t.title ? t.title : null,
              o = n ? (n.value ? n.value : n) : t.value ? t.value : null,
              a = t.options;
            switch ((i && (i = p(i)), o && t.options.i18n && (o = p(o)), r)) {
              case u.Date:
                o = e.formatDate(o, a.format);
            }
            if (!a.visibility || a.visibility == this.m_type)
              switch (this.m_type) {
                case f.Html:
                  this.addHtmlEl(r, i, o, a);
                  break;
                case f.Pdf:
                  this.addPdfEl(r, i, o, a);
              }
          }),
          (e.prototype.addHtmlEl = function (e, t, n, r) {
            var i = "",
              o = "";
            switch (
              ((i +=
                '<div align="' +
                (r.align || "left") +
                '"style="font-family: ' +
                r.font +
                '">'),
              e)
            ) {
              case u.Image:
                (i +=
                  '<img src="' +
                  n +
                  '" style="width:' +
                  r.width +
                  ";height:" +
                  r.height +
                  ';" >'),
                  (i += "</img>");
                break;
              case u.Item:
              case u.Date:
                (o = ""),
                  n
                    ? ((o += t ? "<h5>" + t + "</h5>" : ""),
                      (o += "<h6>" + n + "<h6>"))
                    : (o += t ? "" : "<br>"),
                  r.fontColor &&
                    (o = "<font color=" + r.fontColor + ">" + o + "</font>"),
                  (i += o);
                break;
              case u.Link:
                (o = ""),
                  (o += t ? "<b>" + t + ": </b>" : ""),
                  (o += '<a href="' + n + '">' + n + "</a>"),
                  r.fontColor &&
                    (o = "<font color=" + r.fontColor + ">" + o + "</font>"),
                  (i += o);
                break;
              case u.Html:
                i += n;
            }
            (i += "</div>"), (this.m_htmlContext.html += i);
          }),
          (e.prototype.addPdfEl = function (e, t, n, r) {
            var i = this.m_pdfContext,
              o = i.doc,
              a = i.page,
              s = function (e, t) {
                var n = 0;
                switch ((e = e || "left")) {
                  case "center":
                    n = a.center.x - t / 2;
                    break;
                  case "right":
                    n = a.width - a.margin - t;
                    break;
                  case "left":
                  default:
                    n = a.margin;
                }
                return n;
              },
              l = function (e) {
                var t = i.yOffset;
                return (
                  (i.yOffset += e),
                  i.yOffset > a.height - a.margin &&
                    ((t = a.margin), (i.yOffset = a.margin + e), o.addPage()),
                  t
                );
              };
            switch (e) {
              case u.Image:
                !(function (e, t) {
                  var n = s(t.align, t.width),
                    r = l(t.height),
                    i = e.split(".").pop().toLowerCase();
                  switch (i) {
                    case "jpg":
                    case "jpeg":
                      i = "JPEG";
                      break;
                    case "png":
                      i = "PNG";
                      break;
                    case "bmp":
                      i = "BMP";
                  }
                  o.addImage(e, i, n, r, t.width, t.height);
                })(n, r);
                break;
              case u.Item:
              case u.Date:
                var c = "";
                n ? ((c += t ? t + ": " : ""), (c += n)) : (c = t ? null : ""),
                  null != c &&
                    (function (e, t) {
                      o.setFont(t.font, t.fontStyle),
                        o.setFontSize(t.fontSize),
                        o.setTextColor(t.fontColor);
                      for (
                        var n = t.align || "left",
                          r = s(n, 0),
                          i = 0,
                          u = a.width - 2 * a.margin,
                          c = o.getFontSize() * o.getLineHeightFactor(),
                          p = o.splitTextToSize(e, u),
                          f = 0;
                        f < p.length;
                        f++
                      )
                        (i = l(c)),
                          o.text(p[f], r, i, {
                            align: n,
                            maxWidth: u,
                            baseline: "middle",
                          });
                    })(c, r);
                break;
              case u.Link:
                !(function (e, t, n) {
                  o.setFont(n.font, n.fontStyle),
                    o.setFontSize(n.fontSize),
                    o.setTextColor(n.fontColor);
                  var r,
                    i = s("left", 0),
                    u = a.width - 2 * a.margin,
                    c = o.getFontSize() * o.getLineHeightFactor();
                  (e += ": "),
                    (r = l(c)),
                    o.text(e, i, r, {
                      align: "left",
                      maxWidth: u,
                      baseline: "middle",
                    }),
                    (i += o.getTextWidth(e)),
                    o.setTextColor("blue"),
                    o.textWithLink(t, i, r, { url: t, baseline: "middle" });
                })(t, n, r);
            }
          }),
          (e.formatFileSize = function (e) {
            if (Math.abs(e) < 1024) return e + " " + p("Б");
            var t = ["КБ", "МБ", "ГБ", "ТБ"],
              n = -1;
            do {
              (e /= 1024), ++n;
            } while (Math.abs(e) >= 1024 && n < t.length - 1);
            return e.toFixed(1) + " " + p(t[n]);
          }),
          e
        );
      })(),
      C = [
        "AU",
        "AT",
        "AZ",
        "AL",
        "DZ",
        "AO",
        "AD",
        "AG",
        "AR",
        "AW",
        "AF",
        "BS",
        "BD",
        "BB",
        "BH",
        "BZ",
        "BE",
        "BJ",
        "BY",
        "BG",
        "BO",
        "BA",
        "BW",
        "BR",
        "BN",
        "BF",
        "BI",
        "BT",
        "VU",
        "VA",
        "GB",
        "VE",
        "VN",
        "AM",
        "GA",
        "HT",
        "GY",
        "GM",
        "GH",
        "GP",
        "GT",
        "GN",
        "GW",
        "HN",
        "GD",
        "GR",
        "GE",
        "GL",
        "DK",
        "CD",
        "DJ",
        "DM",
        "DO",
        "EC",
        "GQ",
        "ER",
        "EE",
        "ET",
        "EG",
        "YE",
        "ZM",
        "EH",
        "ZW",
        "IL",
        "IN",
        "ID",
        "IQ",
        "IR",
        "IE",
        "IS",
        "ES",
        "IT",
        "JO",
        "CV",
        "KZ",
        "KH",
        "CM",
        "CA",
        "QA",
        "KE",
        "KG",
        "CN",
        "KP",
        "CY",
        "KI",
        "CO",
        "KM",
        "CG",
        "CR",
        "CI",
        "CU",
        "KW",
        "LA",
        "LV",
        "LS",
        "LT",
        "LR",
        "LB",
        "LY",
        "LI",
        "LU",
        "MU",
        "MR",
        "MG",
        "MK",
        "MW",
        "MY",
        "ML",
        "MV",
        "MT",
        "MA",
        "MH",
        "MX",
        "MZ",
        "MD",
        "MC",
        "MN",
        "MM",
        "NA",
        "NR",
        "NP",
        "NE",
        "NG",
        "NL",
        "NI",
        "DE",
        "NZ",
        "NO",
        "AE",
        "OM",
        "PK",
        "PW",
        "PS",
        "PA",
        "PG",
        "PY",
        "PE",
        "KR",
        "SS",
        "ZA",
        "PL",
        "PT",
        "PR",
        "RU",
        "RW",
        "RO",
        "SV",
        "WS",
        "SM",
        "ST",
        "SA",
        "SZ",
        "SC",
        "SN",
        "VC",
        "KN",
        "LC",
        "RS",
        "SY",
        "SG",
        "SK",
        "SI",
        "SB",
        "SO",
        "US",
        "SD",
        "SR",
        "TL",
        "SL",
        "TJ",
        "TH",
        "TZ",
        "TG",
        "TO",
        "TT",
        "TN",
        "TR",
        "TM",
        "UG",
        "HU",
        "UZ",
        "UA",
        "UY",
        "FM",
        "FJ",
        "PH",
        "FI",
        "FR",
        "HR",
        "CF",
        "TD",
        "CZ",
        "CL",
        "ME",
        "CH",
        "SE",
        "LK",
        "JM",
        "JP",
      ],
      T = {
        ua: [
          "Австралія",
          "Австрія",
          "Азербайджан",
          "Албанія",
          "Алжир",
          "Ангола",
          "Андорра",
          "Антигуа і Барбуда",
          "Аргентина",
          "Аруба",
          "Афганістан",
          "Багамські Острови",
          "Бангладеш",
          "Барбадос",
          "Бахрейн",
          "Беліз",
          "Бельгія",
          "Бенін",
          "Білорусь",
          "Болгарія",
          "Болівія",
          "Боснія і Герцеговина",
          "Ботсвана",
          "Бразилія",
          "Бруней",
          "Буркіна-Фасо",
          "Бурунді",
          "Бутан",
          "Вануату",
          "Ватикан",
          "Велика Британія",
          "Венесуела",
          "В'єтнам",
          "Вірменія",
          "Габон",
          "Гаїті",
          "Гаяна",
          "Гамбія",
          "Гана",
          "Гваделупа",
          "Гватемала",
          "Гвінея",
          "Гвінея-Бісау",
          "Гондурас",
          "Гренада",
          "Греція",
          "Грузія",
          "Ґренландія",
          "Данія",
          "ДР Конго",
          "Джибуті",
          "Домініка",
          "Домініканська Республіка",
          "Еквадор",
          "Екваторіальна Гвінея",
          "Еритрея",
          "Естонія",
          "Ефіопія",
          "Єгипет",
          "Ємен",
          "Замбія",
          "Західна Сахара",
          "Зімбабве",
          "Ізраїль",
          "Індія",
          "Індонезія",
          "Ірак",
          "Іран",
          "Ірландія",
          "Ісландія",
          "Іспанія",
          "Італія",
          "Йорданія",
          "Кабо-Верде",
          "Казахстан",
          "Камбоджа",
          "Камерун",
          "Канада",
          "Катар",
          "Кенія",
          "Киргизстан",
          "КНР",
          "Північна Корея",
          "Кіпр",
          "Кірибаті",
          "Колумбія",
          "Коморські Острови",
          "Конго",
          "Коста-Рика",
          "Кот-д'Івуар",
          "Куба",
          "Кувейт",
          "Лаос",
          "Латвія",
          "Лесото",
          "Литва",
          "Ліберія",
          "Ліван",
          "Лівія",
          "Ліхтенштейн",
          "Люксембург",
          "Маврикій",
          "Мавританія",
          "Мадагаскар",
          "Македонія",
          "Малаві",
          "Малайзія",
          "Малі",
          "Мальдіви",
          "Мальта",
          "Марокко",
          "Маршаллові Острови",
          "Мексика",
          "Мозамбік",
          "Молдова",
          "Монако",
          "Монголія",
          "М'янма",
          "Намібія",
          "Науру",
          "Непал",
          "Нігер",
          "Нігерія",
          "Нідерланди",
          "Нікарагуа",
          "Німеччина",
          "Нова Зеландія",
          "Норвегія",
          "ОАЕ",
          "Оман",
          "Пакистан",
          "Палау",
          "Палестина",
          "Панама",
          "Папуа Нова Гвінея",
          "Парагвай",
          "Перу",
          "Південна Корея",
          "Південний Судан",
          "ПАР",
          "Польща",
          "Португалія",
          "Пуерто-Рико",
          "Росія",
          "Руанда",
          "Румунія",
          "Сальвадор",
          "Самоа",
          "Сан-Марино",
          "Сан-Томе і Принсіпі",
          "Саудівська Аравія",
          "Свазіленд",
          "Сейшельські Острови",
          "Сенегал",
          "Сент-Вінсент і Гренадини",
          "Сент-Кіттс і Невіс",
          "Сент-Люсія",
          "Сербія",
          "Сирія",
          "Сингапур",
          "Словаччина",
          "Словенія",
          "Соломонові Острови",
          "Сомалі",
          "США",
          "Судан",
          "Суринам",
          "Східний Тимор",
          "Сьєрра-Леоне",
          "Таджикистан",
          "Таїланд",
          "Танзанія",
          "Того",
          "Тонга",
          "Тринідад і Тобаго",
          "Туніс",
          "Туреччина",
          "Туркменістан",
          "Уганда",
          "Угорщина",
          "Узбекистан",
          "Україна",
          "Уругвай",
          "Федеративні Штати Мікронезії",
          "Фіджі",
          "Філіппіни",
          "Фінляндія",
          "Франція",
          "Хорватія",
          "Центральноафриканська Республіка",
          "Чад",
          "Чехія",
          "Чилі",
          "Чорногорія",
          "Швейцарія",
          "Швеція",
          "Шрі-Ланка",
          "Ямайка",
          "Японія",
        ],
        en: [
          "Australia",
          "Austria",
          "Azerbaijan",
          "Albania",
          "Algeria",
          "Angola",
          "Andorra",
          "Antigua and Barbuda",
          "Argentina",
          "Aruba",
          "Afghanistan",
          "Bahamas",
          "Bangladesh",
          "Barbados",
          "Bahrain",
          "Belize",
          "Belgium",
          "Benin",
          "Belarus",
          "Bulgaria",
          "Bolivia",
          "Bosnia and Herzegovina",
          "Botswana",
          "Brazil",
          "Brunei",
          "Burkina Faso",
          "Burundi",
          "Bhutan",
          "Vanuatu",
          "Vatican City",
          "Great Britain",
          "Venezuela",
          "Vietnam",
          "Armenia",
          "Gabon",
          "Haiti",
          "Guyana",
          "Gambia",
          "Ghana",
          "Guadeloupe",
          "Guatemala",
          "Guinea",
          "Guinea-Bissau",
          "Honduras",
          "Grenada",
          "Ellada",
          "Georgia",
          "Greenland",
          "Denmark",
          "DR Congo",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Egypt",
          "Yemen",
          "Zambia",
          "Western Sahara",
          "Zimbabwe",
          "Israel",
          "India",
          "Indonesia",
          "Iraq",
          "Iran",
          "Ireland",
          "Iceland",
          "Spain",
          "Italy",
          "Jordan",
          "Cape Verde",
          "Kazakhstan",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Qatar",
          "Kenya",
          "Kyrgyzstan",
          "China",
          "North Korea",
          "Cyprus",
          "Kiribati",
          "Colombia",
          "Comoros",
          "Congo",
          "Costa Rica",
          "Côte d'Ivoire",
          "Cuba",
          "Kuwait",
          "Laos",
          "Latvia",
          "Lesotho",
          "Lithuania",
          "Liberia",
          "Lebanon",
          "Libya",
          "Liechtenstein",
          "Luxembourg",
          "Mauritius",
          "Mauritania",
          "Madagascar",
          "Macedonia",
          "Malawi",
          "Malaysia",
          "Mali",
          "Maldives",
          "Malta",
          "Morocco",
          "Marshall Islands",
          "Mexico",
          "Mozambique",
          "Moldova",
          "Monaco",
          "Mongolia",
          "Myanmar",
          "Namibia",
          "Nauru",
          "Nepal",
          "Niger",
          "Nigeria",
          "Netherlands",
          "Nicaragua",
          "Germany",
          "New Zealand",
          "Norway",
          "UAE",
          "Oman",
          "Pakistan",
          "Palau",
          "Palestine",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "South Korea",
          "South Sudan",
          "South Africa",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Russia",
          "Rwanda",
          "Romania",
          "El Salvador",
          "Samoa",
          "San Marino",
          "San Tome and Principe",
          "Saudi Arabia",
          "Swaziland",
          "Seychelles",
          "Senegal",
          "St. Vincent and the Grenadines",
          "St. Kitts and Nevis",
          "St. Lucia",
          "Serbia",
          "Syria",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "USA",
          "Sudan",
          "Suriname",
          "East Timor",
          "Sierra Leone",
          "Tajikistan",
          "Thailand",
          "Tanzania",
          "Togo",
          "Tonga",
          "Trinidad and Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Uganda",
          "Hungary",
          "Uzbekistan",
          "Ukraine",
          "Uruguay",
          "Federated States of Micronesia",
          "Fiji",
          "Philippines",
          "Finland",
          "France",
          "Croatia",
          "Central African Republic",
          "Chad",
          "Czech Republic",
          "Chile",
          "Montenegro",
          "Switzerland",
          "Sweden",
          "Sri Lanka",
          "Jamaica",
          "Japan",
        ],
      },
      R = (function () {
        function e() {}
        return (
          (e.getCountryName = function (e, t) {
            (e = e.toLowerCase()), T[e] || (e = "ua"), (t = t.toUpperCase());
            var n = C.indexOf(t);
            return n < 0 ? t : T[e][n];
          }),
          e
        );
      })(),
      m = ["CA of RoA"],
      A = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      g = [
        12, 33, 34, 35, 36, 37, 38, 39, 40, 45, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
      ],
      P = ["криптомод. ІІТ Гряда-301"];
    var I,
      v,
      U,
      b,
      O = function (e, t, n) {
        void 0 === n && (n = null),
          (this.file = n),
          (this.name = e),
          (this.data = t),
          (this.size = t ? t.length : n ? n.size : 0);
      },
      D = (function () {
        function e(e, t, n, r) {
          (this.ksp = e),
            (this.kspName = t),
            (this.userId = n),
            (this.keyId = r);
        }
        return (
          (e.prototype.GetKSPId = function () {
            return this.ksp == i.EndUserConstants.EndUserKSP.IIT ||
              this.ksp == i.EndUserConstants.EndUserKSP.PB ||
              this.ksp == i.EndUserConstants.EndUserKSP.DIIA
              ? this.kspName
              : this.ksp;
          }),
          e
        );
      })(),
      k = function () {
        (this.keyMedia = null),
          (this.file = null),
          (this.alias = null),
          (this.password = null),
          (this.certificates = null),
          (this.kspKey = null);
      },
      N = function () {
        (this.use = !1), (this.name = ""), (this.sn = "");
      };
    !(function (e) {
      (e[(e.ReadPrivateKey = 1)] = "ReadPrivateKey"),
        (e[(e.MakeNewCertificate = 2)] = "MakeNewCertificate"),
        (e[(e.SignFile = 3)] = "SignFile"),
        (e[(e.ViewPKeyCertificates = 4)] = "ViewPKeyCertificates"),
        (e[(e.MakeDeviceCertificate = 5)] = "MakeDeviceCertificate");
    })(I || (I = {})),
      (function (e) {
        (e[(e.XAdES = 1)] = "XAdES"),
          (e[(e.PAdES = 2)] = "PAdES"),
          (e[(e.CAdES = 3)] = "CAdES"),
          (e[(e.ASiCS = 4)] = "ASiCS"),
          (e[(e.ASiCE = 5)] = "ASiCE");
      })(v || (v = {})),
      (function (e) {
        (e[(e.Detached = 1)] = "Detached"),
          (e[(e.Enveloped = 2)] = "Enveloped");
      })(U || (U = {})),
      (function (e) {
        (e[(e.File = 1)] = "File"),
          (e[(e.Hardware = 2)] = "Hardware"),
          (e[(e.KSP = 4)] = "KSP"),
          (e[(e.DIIA_UA = 5)] = "DIIA_UA"),
          (e[(e.DIIA_EU = 6)] = "DIIA_EU");
      })(b || (b = {}));
    var M = (function () {
        function e(e) {
          (this.m_type = e),
            (this.m_library = new i.EndUser(JS_WORKER_PATH, e)),
            (this.m_info = null),
            (this.m_loading = !1),
            (this.m_eventsRegistered = !1);
        }
        return (
          (e.prototype.GetType = function () {
            return this.m_type;
          }),
          (e.prototype.IsSupported = function () {
            return this.m_info && this.m_info.supported;
          }),
          (e.prototype.IsLoaded = function () {
            return this.m_info && this.m_info.loaded;
          }),
          (e.prototype.IsLoading = function () {
            return this.m_loading;
          }),
          (e.prototype.IsEventsRegistered = function () {
            return this.m_eventsRegistered;
          }),
          (e.prototype.SetEventsRegistered = function () {
            this.m_eventsRegistered = !0;
          }),
          (e.prototype.GetLibrary = function () {
            return this.m_library;
          }),
          (e.prototype.GetInfo = function () {
            return this.m_info;
          }),
          (e.prototype.Load = function (e) {
            var t = this;
            return (
              (t.m_loading = !0),
              new Promise(function (n, r) {
                t.m_library
                  .AddEventListener(i.EndUserConstants.EndUserEventType.All, e)
                  .then(function () {
                    return t.m_library.GetLibraryInfo(
                      LIBRARY_SETTINGS.downloadsURL
                    );
                  })
                  .then(function (e) {
                    (t.m_loading = !1), (t.m_info = e), n();
                  })
                  .catch(function (e) {
                    (t.m_loading = !1), r(e);
                  });
              })
            );
          }),
          e
        );
      })(),
      w = (function () {
        function e() {
          (this.m_mainPageOrigin = this.GetURLParameter(
            window.location.href,
            "address",
            null
          )),
            (this.m_debug =
              "true" ==
              this.GetURLParameter(window.location.href, "debug", "false")),
            (this.m_formType = parseInt(
              this.GetURLParameter(
                window.location.href,
                "formType",
                I.ReadPrivateKey + ""
              )
            )),
            (this.m_ownCAOnly =
              "true" ==
              this.GetURLParameter(window.location.href, "ownCAOnly", "false")),
            (this.m_showPKInfo =
              "true" ==
              this.GetURLParameter(window.location.href, "showPKInfo", "true")),
            (this.m_showSignTip =
              "true" ==
              this.GetURLParameter(
                window.location.href,
                "showSignTip",
                "true"
              )),
            (this.m_showPKPreSelect =
              LIBRARY_SETTINGS.KSPs &&
              LIBRARY_SETTINGS.KSPs.filter(function (e) {
                return e.ksp == i.EndUserConstants.EU_KSP_DIIA;
              }).length > 0),
            (this.m_keyMediaType = parseInt(
              this.GetStorageItem("KeyMediaType", b.File)
            )),
            (this.m_libraries = new Array()),
            (this.m_libraries[i.EndUserConstants.EU_LIBRARY_TYPE_JS] = new M(
              i.EndUserConstants.EU_LIBRARY_TYPE_JS
            )),
            (this.m_libraries[i.EndUserConstants.EU_LIBRARY_TYPE_SW] = new M(
              i.EndUserConstants.EU_LIBRARY_TYPE_SW
            )),
            (this.m_signInfoTmpl = null),
            (this.m_curStep = 0),
            (this.m_maxSteps = this.GetMaxSteps()),
            this.SetFormTitle(null),
            this.SetFormHelp(null),
            this.SetFormSubTitle(null),
            this.SetFormsLabels(),
            this.SetFormsFileInputs(),
            this.ConfigureKeyMediaTypes(),
            this.ConfigureKSPsSettings(),
            this.RegisterGUIEvents(),
            (this.m_isPKActionDone = !1),
            (this.m_KM = null),
            (this.m_updateKM = !1),
            (this.m_updatingKM = !1),
            (this.m_readedPKey = null),
            (this.m_KMs = new Array()),
            (this.m_noNewKMOnMakeNewCertificate =
              !LIBRARY_SETTINGS.allowMakeNewCertOnNewKeyMedia),
            (this.m_noNewFileKMOnMakeNewCertificate =
              !LIBRARY_SETTINGS.allowMakeNewCertOnFileKeyMedia),
            (this.m_euParams = null),
            (this.m_listeners = []),
            this.m_showPKPreSelect || this.OnChangeLibraryType();
        }
        return (
          (e.prototype.SetFormTitle = function (e) {
            var t = null;
            switch (e) {
              case "#proxySettingsBlock":
                t = p(o.PK_SET_PROXY_FORM_TITLE);
                break;
              case "#resultBlock":
                switch (this.m_formType) {
                  case I.MakeNewCertificate:
                    t = p(o.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.SignFile:
                    t = p(o.SIGN_FILE_RESULT_FORM_TITLE);
                    break;
                  case I.ViewPKeyCertificates:
                    t = p(o.VIEW_PKEY_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.MakeDeviceCertificate:
                    t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.ReadPrivateKey:
                  default:
                    t = p(o.PK_READ_FORM_TITLE);
                }
                break;
              case "#pkReadFileBlock":
              case "#pkReadKMBlock":
              case "#pkReadKSPBlock":
                switch (this.m_formType) {
                  case I.MakeNewCertificate:
                    t = p(o.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.SignFile:
                    t = p(o.PK_READ_FORM_TITLE);
                    break;
                  case I.ViewPKeyCertificates:
                    t = p(o.VIEW_PKEY_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.MakeDeviceCertificate:
                    t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.ReadPrivateKey:
                  default:
                    t = p(o.PK_READ_FORM_TITLE);
                }
                break;
              case "#pkInfoBlock":
                switch (this.m_formType) {
                  case I.SignFile:
                    t = p(o.PK_INFO_FORM_TITLE);
                }
                break;
              case "#preSignBlock":
              case "#signBlock":
                switch (this.m_formType) {
                  case I.SignFile:
                    t = p(o.PRE_SIGN_FILE_FORM_TITLE);
                }
                break;
              case "#pkWriteFileBlock":
              case "#pkWriteKMBlock":
              case "#installBlock":
              case "#makeTechnicalCertBlock":
              default:
                switch (this.m_formType) {
                  case I.MakeNewCertificate:
                    t = p(o.PK_MAKE_NEW_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.SignFile:
                    t = p(o.SIGN_FILE_FORM_TITLE);
                    break;
                  case I.ViewPKeyCertificates:
                    t = p(o.VIEW_PKEY_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.MakeDeviceCertificate:
                    t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_TITLE);
                    break;
                  case I.ReadPrivateKey:
                  default:
                    t = p(o.PK_READ_FORM_TITLE);
                }
            }
            $("#titleLabel").text(t);
          }),
          (e.prototype.SetFormSubTitle = function (e) {
            var t = null;
            switch (e) {
              case "#proxySettingsBlock":
                t = p(o.PK_SET_PROXY_FORM_SUB_TITLE);
                break;
              case "#pkReadFileBlock":
              case "#pkReadKMBlock":
                switch (this.m_formType) {
                  case I.MakeNewCertificate:
                    t = p(o.PK_MAKE_NEW_CERTIFICATES_OLD_KEY_FORM_SUB_TITLE);
                    break;
                  case I.MakeDeviceCertificate:
                    t = p(o.MAKE_TECHNICAL_CERTIFICATES_PK_READ_FORM_SUB_TITLE);
                    break;
                  case I.SignFile:
                  case I.ReadPrivateKey:
                  case I.ViewPKeyCertificates:
                  default:
                    t = p(o.PK_READ_FORM_SUB_TITLE);
                }
                break;
              case "#pkWriteFileBlock":
              case "#pkWriteKMBlock":
                switch (this.m_formType) {
                  case I.MakeNewCertificate:
                    t = this.m_noNewKMOnMakeNewCertificate
                      ? this.m_readedPKey.keyMedia
                        ? p(
                            o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_KM_FORM_SUB_TITLE
                          )
                        : this.m_noNewFileKMOnMakeNewCertificate
                        ? p(o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE)
                        : p(
                            o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FILE_FORM_SUB_TITLE
                          )
                      : p(o.PK_MAKE_NEW_CERTIFICATES_NEW_KEY_FORM_SUB_TITLE);
                }
                break;
              case "#pkInfoBlock":
                switch (this.m_formType) {
                  case I.ViewPKeyCertificates:
                    t = p(o.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                    break;
                  default:
                    t = p(o.PK_INFO_FORM_SUB_TITLE);
                }
                break;
              case "#preSignBlock":
              case "#signBlock":
                t = p(o.SIGN_FILE_FORM_SUB_TITLE);
                break;
              case "#makeTechnicalCertBlock":
                t = p(o.MAKE_TECHNICAL_CERTIFICATES_FORM_SUB_TITLE);
                break;
              case "#resultBlock":
                switch (this.m_formType) {
                  case I.SignFile:
                    t = p(o.SIGN_FILE_RESULT_FORM_SUB_TITLE);
                    break;
                  case I.MakeNewCertificate:
                    t = p(o.PK_MAKE_NEW_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                    break;
                  case I.ViewPKeyCertificates:
                    t = p(o.VIEW_PKEY_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                    break;
                  case I.MakeDeviceCertificate:
                    t = p(o.MAKE_TECHNICAL_CERTIFICATES_RESULT_FORM_SUB_TITLE);
                }
            }
            null != t && $("#subTitleLabel").text(t);
          }),
          (e.prototype.SetFormHelp = function (e) {
            var t =
                "#" + $("#rightBlock").find(".HelpPanel:visible").attr("id"),
              n = "";
            switch (e) {
              case "#pkTypesPreSelectBlock":
                n = "#helpPanel1";
                break;
              case "#proxySettingsBlock":
                break;
              case "#pkReadFileBlock":
                n = "#helpPanel2";
                break;
              case "#pkReadKMBlock":
                n = "#helpPanel3";
                break;
              case "#pkReadKSPBlock":
                n = "#helpPanel4";
                break;
              case "#pkReadDIIABlock":
                n = "#helpPanel6";
                break;
              case "#pkInfoBlock":
                n = "#helpPanel7";
                break;
              case "#preSignBlock":
                n = "#helpPanel8";
                break;
              case "#signBlock":
                n = $("#preSignShowParamsCheckbox").prop("checked")
                  ? "#helpPanel9"
                  : "#helpPanel8";
                break;
              default:
                n = "";
            }
            if (t != n && n)
              if (
                ($(t).hide(),
                "" != n && $(n).show(),
                $(n).find(".HelpPanelItem").length > 0 ||
                  $(n).find(".HelpPanelItemContent").length > 0)
              )
                $("#helpBlock").hide();
              else {
                var r = $(n).find("h3").html(),
                  i = $(n).find("div").html();
                $("#helpBlock").show(),
                  $("#helpTitleLabel").html(r),
                  $("#helpLabel").html(i);
              }
            else n || $("#helpBlock").hide();
          }),
          (e.prototype.SetFormStep = function (e) {
            var t = this.m_curStep;
            switch (e) {
              case "#pkReadFileBlock":
              case "#pkReadKMBlock":
              case "#pkReadKSPBlock":
              case "#pkReadDIIABlock":
                t = 1;
                break;
              case "#pkWriteFileBlock":
              case "#pkWriteKMBlock":
                switch (this.m_formType) {
                  case I.MakeNewCertificate:
                    t = 3;
                }
                break;
              case "#pkInfoBlock":
                t = 2;
                break;
              case "#preSignBlock":
                t = this.m_showSignTip ? 3 : 4;
                break;
              case "#signBlock":
                t = this.m_showSignTip ? 4 : 3;
                break;
              case "#makeTechnicalCertBlock":
                t = 3;
            }
            this.m_curStep = t;
            var n = a.format(p(o.LABEL_STEP), t, this.m_maxSteps);
            $("#stepLabel").text(n);
          }),
          (e.prototype.SetFormsLabels = function () {
            var e = "";
            switch (this.m_formType) {
              case I.MakeNewCertificate:
                e = p(o.LABEL_PK_MAKE_NEW_CERTIFICATES_SUPPORTED_FILES);
                break;
              case I.SignFile:
              case I.ReadPrivateKey:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
              default:
                e = p(o.LABEL_PK_SUPPORTED_FILES);
            }
            $("#pkReadFileSelectFileFileTypeLabel").text(e),
              $("#pkTypeFileTitle").text(p(o.LABEL_PK_TYPE_FILE)),
              $("#pkTypeKMTitle").text(p(o.LABEL_PK_TYPE_KM)),
              $("#makeTechnicalCertDeviceNameTitleLabel").text(
                p(o.LABEL_MAKE_TECHNICAL_CERT_DEVICE_NAME_TITLE)
              );
          }),
          (e.prototype.SetFormsFileInputs = function () {
            (/iPad|iPhone|iPod/.test(navigator.platform) ||
              ("MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1)) &&
              !window.MSStream &&
              ($("#pkReadFileCertsInput").removeAttr("accept"),
              $("#pkReadFileInput").removeAttr("accept"),
              $("#pkReadKMCertsInput").removeAttr("accept"));
          }),
          (e.prototype.SetKeyMediaType = function (e) {
            $("#pkTypesBlock")
              .find("button[value=" + e + "]")
              .click();
          }),
          (e.prototype.GetMaxSteps = function () {
            switch (this.m_formType) {
              case I.MakeNewCertificate:
                return 3;
              case I.SignFile:
                return 4;
              case I.ViewPKeyCertificates:
                return 2;
              case I.MakeDeviceCertificate:
                return 3;
              case I.ReadPrivateKey:
              default:
                return 2;
            }
          }),
          (e.prototype.GetPreSelectMenuId = function () {
            return this.m_showPKPreSelect
              ? "#" +
                  $("#pkTypesPreSelectBlock")
                    .find(".MenuItem[selected]")
                    .attr("id")
              : "#pkTypeBaseMenuItem";
          }),
          (e.prototype.ConfigureKeyMediaTypes = function () {
            var e = !1,
              t = LIBRARY_SETTINGS.KSPs || [];
            switch (
              ((t = t.filter(function (e) {
                return e.ksp != i.EndUserConstants.EU_KSP_DIIA;
              })),
              this.m_formType)
            ) {
              case I.MakeNewCertificate:
              case I.MakeDeviceCertificate:
                e = !1;
                break;
              case I.SignFile:
              case I.ReadPrivateKey:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
              default:
                e = t.length > 0;
            }
            e
              ? $("#pkTypeKSPTabButton").show()
              : $("#pkTypeKSPTabButton").hide(),
              e ||
                this.m_keyMediaType != b.KSP ||
                (this.m_keyMediaType = b.File),
              e && this.SetKSPs(t),
              this.SetKeyMediaType(this.m_keyMediaType);
          }),
          (e.prototype.ConfigureKSPsSettings = function () {
            var e = this;
            LIBRARY_SETTINGS.KSPs &&
              LIBRARY_SETTINGS.KSPs.forEach(function (t) {
                t.systemId || (t.systemId = e.m_mainPageOrigin);
              });
          }),
          (e.prototype.RegisterGUIEvents = function () {
            var e = this;
            $(window).on("message", function (t) {
              e.OnReceiveMessage(t.originalEvent);
            }),
              $("#helpTitleBlock").on("click", function () {
                var e = $("#helpTextBlock"),
                  t = $("#helpTitleArrow");
                e.is(":visible")
                  ? (e.slideUp(200), t.attr("direction", "down"))
                  : (e.slideDown(200), t.attr("direction", "up"));
              });
            for (
              var t = [
                  "#pkTypeBaseMenuItem",
                  "#pkTypeDIIAUAMenuItem",
                  "#pkTypeDIIAEUMenuItem",
                ],
                n = 0;
              n < t.length;
              n++
            )
              $(t[n]).on("click", function (t) {
                $(t.currentTarget).attr("selected", ""),
                  e.OnChangeLibraryType(function () {
                    ("#pkTypeDIIAUAMenuItem" != e.GetPreSelectMenuId() &&
                      "#pkTypeDIIAEUMenuItem" != e.GetPreSelectMenuId()) ||
                      e.OnReadPKeyKSP();
                  });
              });
            var r = [
              "#pkTypeFileTabButton",
              "#pkTypeKMTabButton",
              "#pkTypeKSPTabButton",
            ];
            for (n = 0; n < r.length; n++)
              $(r[n]).on("click", function (t) {
                $("#pkTypesBlock")
                  .find("button[selected]")
                  .removeAttr("selected"),
                  $(t.currentTarget).attr("selected", ""),
                  e.OnChangeLibraryType();
              });
            var i = $("[name = signTypesRadio]");
            for (n = 0; n < i.length; n++)
              $(i[n]).on("change", function () {
                e.OnChangeSignType();
              });
            $("#signTypeASiCSelect").on("change", function () {
              e.OnChangeASiCType();
            }),
              $("#signTypeCAdESSelect").on("change", function () {
                e.OnChangeSignFile();
              });
            var o = [
              "#pkReadFileBackButton",
              "#pkReadKMBackButton",
              "#pkReadKSPBackButton",
              "#pkReadDIIABackButton",
            ];
            if (this.m_showPKPreSelect)
              for (n = 0; n < o.length; n++)
                $(o[n]).on("click", function (t) {
                  e.OnReadPKeyCancel();
                });
            else for (n = 0; n < o.length; n++) $(o[n]).hide();
            $("#pkCASelect").on("change", function () {
              e.OnSelectCA();
            }),
              $("#proxyButton").on("click", function () {
                e.OnSetProxy();
              }),
              $("#proxyUseCheckbox").on("click", function () {
                e.OnUseProxy();
              }),
              $("#proxyAuthCheckbox").on("click", function () {
                e.OnAuthProxy();
              }),
              $("#proxySaveButton").on("click", function () {
                e.OnSaveProxy();
              }),
              $("#proxyCancelButton").on("click", function () {
                e.OnHideProxy();
              }),
              $(".FormTextInput").each(function (t, n) {
                e.InitializeInputEl(n);
              }),
              $("#pkReadFileSelectFileDropZone").on("click", function (e) {
                $("#pkReadFileInput").click(), e.preventDefault();
              }),
              $("#pkReadFileSelectFileDropZone")
                .bind("dragover", function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    (e.originalEvent.dataTransfer.dropEffect = "copy");
                })
                .bind("drop", function (t) {
                  t.stopPropagation(),
                    t.preventDefault(),
                    $("#pkReadFileInput").prop(
                      "files",
                      t.originalEvent.dataTransfer.files
                    ),
                    e.OnSelectPKeyFile(t.originalEvent.dataTransfer.files);
                }),
              $("#pkReadFileInput").on("change", function (t) {
                e.OnSelectPKeyFile(t.target.files);
              }),
              $("#pkReadFileSelectCertsDropZone").on("click", function (e) {
                $("#pkReadFileCertsInput").click(), e.preventDefault();
              }),
              $("#pkReadFileSelectCertsDropZone")
                .bind("dragover", function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    (e.originalEvent.dataTransfer.dropEffect = "copy");
                })
                .bind("drop", function (t) {
                  t.stopPropagation(),
                    t.preventDefault(),
                    $("#pkReadFileCertsInput").prop(
                      "files",
                      t.originalEvent.dataTransfer.files
                    ),
                    e.OnSelectPKeyCertificates(
                      "#pkReadFileSelectCertsCenterBlock",
                      "#pkReadFileSelectCertsSelectedCenterBlock",
                      "#pkReadFileSelectCertsSelectedList",
                      t.originalEvent.dataTransfer.files
                    );
                }),
              $("#pkReadFileCertsInput").on("change", function (t) {
                e.OnSelectPKeyCertificates(
                  "#pkReadFileSelectCertsCenterBlock",
                  "#pkReadFileSelectCertsSelectedCenterBlock",
                  "#pkReadFileSelectCertsSelectedList",
                  t.target.files
                );
              }),
              $("#pkReadFileButton").on("click", function (t) {
                e.OnReadPKey(!0);
              }),
              $("#pkReadKMSelect").on("change", function (t) {
                e.OnKMSelectChange();
              }),
              $("#pkReadKMSelectCertsDropZone").on("click", function (e) {
                $("#pkReadKMCertsInput").click(), e.preventDefault();
              }),
              $("#pkReadKMSelectCertsDropZone")
                .bind("dragover", function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    (e.originalEvent.dataTransfer.dropEffect = "copy");
                })
                .bind("drop", function (t) {
                  t.stopPropagation(),
                    t.preventDefault(),
                    $("#pkReadKMCertsInput").prop(
                      "files",
                      t.originalEvent.dataTransfer.files
                    ),
                    e.OnSelectPKeyCertificates(
                      "#pkReadKMSelectCertsCenterBlock",
                      "#pkReadKMSelectCertsSelectedCenterBlock",
                      "#pkReadKMSelectCertsSelectedList",
                      t.originalEvent.dataTransfer.files
                    );
                }),
              $("#pkReadKMCertsInput").on("change", function (t) {
                e.OnSelectPKeyCertificates(
                  "#pkReadKMSelectCertsCenterBlock",
                  "#pkReadKMSelectCertsSelectedCenterBlock",
                  "#pkReadKMSelectCertsSelectedList",
                  t.target.files
                );
              }),
              $("#pkReadKMButton").on("click", function (t) {
                e.OnReadPKey(!1);
              }),
              $("#pkReadKSPSelect").on("change", function (t) {
                e.OnReadKSPSelectChange();
              }),
              $("#pkReadKSPUserIdTextField").on("input", function (t) {
                e.OnReadKSPUserIdTextFieldChange();
              }),
              $("#pkReadKSPButton").on("click", function (t) {
                e.OnReadPKeyKSP();
              }),
              $("#pkWriteFileTextField").on("input", function (t) {
                e.OnWriteFileTextFieldChange();
              }),
              $("#pkWriteFileButton").on("click", function (t) {
                e.OnWritePKey(!0);
              }),
              $("#pkWriteKMSelect").on("change", function (t) {
                e.OnKMSelectChange();
              }),
              $("#pkWriteKMButton").on("click", function (t) {
                e.OnWritePKey(!1);
              }),
              $("#makeTechnicalCertDeviceNameTextField").on(
                "keydown",
                function (t) {
                  e.OnValidateInput(
                    t.keyCode,
                    t.ctrlKey,
                    t.metaKey,
                    t.shiftKey,
                    A,
                    g
                  ) || t.preventDefault();
                }
              ),
              $("#makeTechnicalCertEUFileInput").on("change", function (t) {
                e.OnSelectTechnicalCertRequest(
                  "#makeTechnicalCertEUFileTextField",
                  t.target.files
                );
              }),
              $("#makeTechnicalCertEUKEPFileInput").on("change", function (t) {
                e.OnSelectTechnicalCertRequest(
                  "#makeTechnicalCertEUKEPFileTextField",
                  t.target.files
                );
              }),
              $("#makeTechnicalCertNextButton").on("click", function (t) {
                e.OnMakeDeviceCert();
              }),
              $("#makeTechnicalCertBackButton").on("click", function (t) {
                e.OnMakeDeviceCertCancel();
              }),
              $("#preSignNextButton").on("click", function (t) {
                e.OnShowSignFileForm(!1);
              }),
              $("#preSignBackButton").on("click", function (t) {
                e.OnShowSignFileForm(!0);
              }),
              $("#signFilesDropZone").on("click", function (e) {
                $("#signFilesInput").click(), e.preventDefault();
              }),
              $("#signFilesDropZone")
                .bind("dragover", function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    (e.originalEvent.dataTransfer.dropEffect = "copy");
                })
                .bind("drop", function (t) {
                  t.stopPropagation(),
                    t.preventDefault(),
                    $("#signFilesInput").prop(
                      "files",
                      t.originalEvent.dataTransfer.files
                    ),
                    e.OnSelectSignFile(t.originalEvent.dataTransfer.files);
                }),
              $("#signFilesInput").bind("change", function (t) {
                e.OnSelectSignFile(t.target.files);
              }),
              $("#signButton").on("click", function (t) {
                e.OnSignFile();
              }),
              $("#signCancelButton").on("click", function (t) {
                e.OnSignFileCancel();
              });
          }),
          (e.prototype.SetStorageItem = function (e, t) {
            try {
              localStorage.setItem(e, t);
            } catch (e) {}
          }),
          (e.prototype.GetStorageItem = function (e, t) {
            try {
              var n = localStorage.getItem(e);
              (n && "string" == typeof n) || (n = t);
            } catch (e) {
              n = t;
            }
            return n;
          }),
          (e.prototype.MakeUserId = function () {
            return "undefined" != typeof crypto
              ? ("" + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  function (e) {
                    var t = Number(e);
                    return (
                      t ^
                      (crypto.getRandomValues(new Uint8Array(1))[0] &
                        (15 >> (t / 4)))
                    ).toString(16);
                  }
                )
              : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (e) {
                    var t = (16 * Math.random()) | 0;
                    return ("x" == e ? t : (3 & t) | 8).toString(16);
                  }
                );
          }),
          (e.prototype.GetCurrentLibrary = function () {
            return this.m_libraries[
              this.m_keyMediaType == b.Hardware ||
              (this.m_formType == I.MakeNewCertificate &&
                this.m_noNewFileKMOnMakeNewCertificate)
                ? i.EndUserConstants.EndUserLibraryType.SW
                : i.EndUserConstants.EndUserLibraryType.JS
            ];
          }),
          (e.prototype.GetKMSelect = function () {
            switch (this.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                return $("#pkReadKMSelect");
              case I.MakeNewCertificate:
                return null == this.m_readedPKey
                  ? $("#pkReadKMSelect")
                  : $("#pkWriteKMSelect");
            }
          }),
          (e.prototype.GetKMUserTextField = function () {
            switch (this.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                return $("#pkReadKMUserTextField");
              case I.MakeNewCertificate:
                return null == this.m_readedPKey
                  ? $("#pkReadKMUserTextField")
                  : $("#pkWriteKMUserTextField");
            }
          }),
          (e.prototype.GetKMUserBlock = function () {
            switch (this.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                return $("#pkReadKMUserBlock");
              case I.MakeNewCertificate:
                return null == this.m_readedPKey
                  ? $("#pkReadKMUserBlock")
                  : $("#pkWriteKMUserBlock");
            }
          }),
          (e.prototype.GetKMPasswordTextField = function () {
            switch (this.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                return $("#pkReadKMPasswordTextField");
              case I.MakeNewCertificate:
                return null == this.m_readedPKey
                  ? $("#pkReadKMPasswordTextField")
                  : $("#pkWriteKMPasswordTextField");
            }
          }),
          (e.prototype.GetKMPasswordConfirmTextField = function () {
            switch (this.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                return null;
              case I.MakeNewCertificate:
                return null == this.m_readedPKey
                  ? null
                  : $("#pkWriteKMPasswordConfirmTextField");
            }
          }),
          (e.prototype.GetKMCertsBlock = function () {
            switch (this.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                return $("#pkReadKMCertsBlock");
              case I.MakeNewCertificate:
                return null == this.m_readedPKey
                  ? $("#pkReadKMCertsBlock")
                  : null;
            }
          }),
          (e.prototype.GetKMButton = function () {
            switch (this.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                return $("#pkReadKMButton");
              case I.MakeNewCertificate:
                return null == this.m_readedPKey
                  ? $("#pkReadKMButton")
                  : $("#pkWriteKMButton");
            }
          }),
          (e.prototype.InitializeInputEl = function (e) {
            var t = this,
              n = $(e).find(".TextField"),
              r = $(e).find(".InputLabel");
            n.on("change", function (i) {
              "" != n.val()
                ? r.hasClass("InputLabel-shrink") ||
                  r.addClass("InputLabel-shrink")
                : r.removeClass("InputLabel-shrink"),
                t.SetErrorInputEl(e, "");
            }),
              n.on("focus", function (e) {
                r.hasClass("InputLabel-shrink") ||
                  r.addClass("InputLabel-shrink");
              }),
              n.on("focusout", function (e) {
                "" != n.val()
                  ? r.hasClass("InputLabel-shrink") ||
                    r.addClass("InputLabel-shrink")
                  : r.removeClass("InputLabel-shrink");
              });
          }),
          (e.prototype.SetErrorInputEl = function (e, t) {
            "string" != typeof e &&
              (e =
                "#" +
                ($(e).hasClass("FormControl")
                  ? $(e)
                  : $(e).parents(".FormControl")
                ).attr("id"));
            var n = $(e).find("input"),
              r = $(e).find(".InputLabel"),
              i = $(e).find(".FormHelperText");
            i.text(t),
              "" != t
                ? (n.hasClass("error") || n.addClass("error"),
                  r.hasClass("error") || r.addClass("error"),
                  i.show())
                : (n.removeClass("error"), r.removeClass("error"), i.hide());
          }),
          (e.prototype.MakeRowEl = function (e, t, n, r) {
            if (
              (void 0 === t && (t = null),
              void 0 === n && (n = !0),
              void 0 === r && (r = !0),
              !t && n)
            )
              return "";
            var i = $("<label><b>" + e + (t ? ": " : "") + "</b></label>");
            return (
              t &&
                ("string" == typeof t && (t = "<label>" + t + "</label>"),
                i.append(t)),
              r && i.append("<br>"),
              i
            );
          }),
          (e.prototype.MakeRowEl1 = function (e, t, n) {
            if ((void 0 === t && (t = null), void 0 === n && (n = !0), !t && n))
              return "";
            var r = $('<div class="Block">');
            return (
              r.append("<h6>" + e + "</h6>"),
              t &&
                ("string" == typeof t && (t = "<label>" + t + "</label>"),
                r.append(t)),
              r
            );
          }),
          (e.prototype.MakeInfoBlock = function (e, t, n) {
            void 0 === n && (n = !0);
            var r = $('<div class="HelpBlock ColoredBorderBlock">'),
              i = $(
                '<div class="HelpTitleBlock"><span>' +
                  e +
                  '</span><div class="Arrow" direction="' +
                  (n ? "down" : "up") +
                  '"></div></div>'
              ),
              o = $(
                '<div class="HelpTextBlock"' +
                  (n ? "style=display:none" : "") +
                  ">"
              );
            return (
              o.append(t),
              r.append(i),
              r.append(o),
              i.on("click", function () {
                o.is(":visible")
                  ? (o.slideUp(200), i.find(".Arrow").attr("direction", "down"))
                  : (o.slideDown(200),
                    i.find(".Arrow").attr("direction", "up"));
              }),
              r
            );
          }),
          (e.prototype.MakeSaveFileEl = function (e, t, n, r) {
            var i = this;
            void 0 === r && (r = !1);
            var o = $(
              "<a " +
                (r ? 'style="text-decoration: underline;"' : "") +
                ">" +
                e +
                "</a>"
            );
            return (
              o.attr("title", t),
              $(o).on("click", function (e) {
                i.SaveFile(t, n);
              }),
              o
            );
          }),
          (e.prototype.DateToLocalString = function (e) {
            var t =
              ("0" + e.getDate()).slice(-2) +
              "." +
              ("0" + (e.getMonth() + 1)).slice(-2) +
              "." +
              e.getFullYear();
            return (t +=
              " " +
              ("0" + e.getHours()).slice(-2) +
              ":" +
              ("0" + e.getMinutes()).slice(-2) +
              ":" +
              ("0" + e.getSeconds()).slice(-2));
          }),
          (e.prototype.IsQualifiedCertificates = function (e) {
            for (var t = 0; t < e.length; t++)
              if (!e[t].infoEx.isPowerCert) return !1;
            return !0;
          }),
          (e.prototype.IsReadedKeyTypeSupportsExtSignType = function () {
            return (
              null != this.m_readedPKey &&
              (null != this.m_readedPKey.keyMedia ||
                null != this.m_readedPKey.file)
            );
          }),
          (e.prototype.IsReadedKeyTypeSupportsPAdESSignType = function () {
            return (
              null != this.m_readedPKey &&
              (null != this.m_readedPKey.keyMedia ||
                null != this.m_readedPKey.file ||
                this.m_readedPKey.kspKey.ksp ==
                  i.EndUserConstants.EndUserKSP.DIIA)
            );
          }),
          (e.prototype.SetViewPKeyInfo = function (e) {
            var t = this;
            if (!t.m_showPKInfo || e.certificatesInfo.length < 1)
              t.OnPKeyReaded(e);
            else {
              var n = $('<div class="Block">'),
                r = e.certificatesInfo,
                i = r[0],
                o = function (e, t) {
                  $(e).text(t),
                    t ? $(e).parent("div").show() : $(e).parent("div").hide();
                };
              $("#pkInfoSubjCN").text(i.infoEx.subjCN),
                o("#pkInfoSubjOrg", i.infoEx.subjOrg),
                o("#pkInfoSubjOrgUnit", i.infoEx.subjOrgUnit),
                o("#pkInfoSubjTitle", i.infoEx.subjTitle),
                o("#pkInfoSubjDRFOCode", i.infoEx.subjDRFOCode),
                o("#pkInfoSubjUNZR", i.infoEx.subjUNZR),
                o("#pkInfoSubjEDRPOUCode", i.infoEx.subjEDRPOUCode),
                i.infoEx.subjDRFOCode ||
                i.infoEx.subjUNZR ||
                i.infoEx.subjEDRPOUCode
                  ? $("#pkInfoSubjCodesBlock").show()
                  : $("#pkInfoSubjCodesBlock").hide();
              for (var a = [], s = 0; s < r.length; s++) {
                var u = t.MakeKeyUsageWithPublicKeyType(
                  r[s].infoEx.keyUsageType,
                  r[s].infoEx.publicKeyType
                );
                a = a.concat(u);
              }
              var l = $("<div>");
              for (s = 0; s < r.length; s++)
                l.append(t.MakeCertificateInfoEl(r[s]));
              n.append(l),
                $("#pkInfoContentBlock").empty(),
                $("#pkInfoContentBlock").append(n),
                $("#pkInfoNextButton").off("click"),
                $("#pkInfoNextButton").on("click", function () {
                  t.OnPKeyReaded(e);
                }),
                $("#pkInfoBackButton").off("click"),
                $("#pkInfoBackButton").on("click", function () {
                  t.OnResetPKey();
                }),
                t.ShowForm("#pkInfoBlock", !1);
            }
          }),
          (e.prototype.SetPKMakeNewCertificatesResult = function (e, t, n) {
            var r = $('<div class="Block StatusBlock">');
            if (t) {
              r.append(
                "<label>" + p(o.TEXT_SAVE_NEW_PRIVATE_KEY) + ":</label><br>"
              );
              var i = this.MakeSaveFileEl(e, e, t);
              r.append(i), r.append("<br><br>");
            }
            r.append(
              "<label>" + p(o.TEXT_DOWLOAD_NEW_CERTIFICATES) + ":</label><br>"
            );
            for (var a = 0; a < n.length; a++) {
              var s = n[a],
                u = "EU-" + s.infoEx.serial + ".cer",
                l = a + 1 + ". " + u;
              i = this.MakeSaveFileEl(l, u, s.data);
              r.append(i), r.append("<br>");
            }
            this.SetResult(r);
          }),
          (e.prototype.SetMakeDeviceCertificateResult = function (e) {
            var t = $('<div class="Block StatusBlock">');
            t.append(
              "<label>" + p(o.TEXT_DOWLOAD_NEW_CERTIFICATES) + ":</label><br>"
            );
            for (var n = 0; n < e.length; n++) {
              var r = e[n],
                i = "EU-" + r.infoEx.serial + ".cer",
                a = n + 1 + ". " + i,
                s = this.MakeSaveFileEl(a, i, r.data);
              t.append(s), t.append("<br>");
            }
            this.SetResult(t);
          }),
          (e.prototype.IsCAQC = function (e) {
            return m.indexOf(e) > -1;
          }),
          (e.prototype.IsQSCDSNInCert = function (e) {
            for (var t = 0; t < this.m_CAs.length; t++) {
              var n = this.m_CAs[t];
              if (n.qscdSNInCert && n.issuerCNs.indexOf(e) > -1) return !0;
            }
            return !1;
          }),
          (e.prototype.GetQSCD = function (e) {
            var t = new N();
            if (((t.use = e.isQSCD || this.IsCAQC(e.issuerCN)), t.use)) {
              for (var n = e.extKeyUsages.split(","), r = 0; r < n.length; r++)
                if (n[r].indexOf("ЗНКІ") > -1) {
                  t.name = p(n[r].trim());
                  break;
                }
              t.name &&
                this.IsQSCDSNInCert(e.issuerCN) &&
                (t.sn = p(e.subjUserCode));
            } else
              (e.publicKeyType == i.EndUserConstants.EndUserCertKeyType.ECDSA ||
                e.publicKeyType == i.EndUserConstants.EndUserCertKeyType.RSA) &&
                this.IsQSCDSNInCert(e.issuerCN) &&
                e.subjUserID &&
                20 == e.subjUserID.length &&
                ((t.use = !0),
                (t.name = p("ЗНКІ SIM-карта Київстар (MobileID)")),
                (t.sn = p(e.subjUserID.substr(0, 19))));
            return t;
          }),
          (e.prototype.isSafariBrowser = function () {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          }),
          (e.prototype.addSaveFileButton = function (e, t, n) {
            var r = this;
            $(e).off("click"),
              $(e).click(function () {
                return (
                  r.SetStatus(""),
                  n()
                    .then(function (e) {
                      return r.SaveFile(t, e.data);
                    })
                    .then(function () {
                      var e = a.format(
                        p('Файл {0} збережено до директорії "Завантаження"'),
                        t
                      );
                      r.SetStatus(e);
                    })
                    .catch(function (e) {
                      var n = a.format(
                        p("Виникла помилка при збереженні файлу {0}"),
                        t
                      );
                      e &&
                        (n += ". " + p("Опис помилки") + ": " + e.toString()),
                        r.SetStatus(n, !0);
                    }),
                  !1
                );
              });
          }),
          (e.prototype.SetSignFileResult = function (
            e, //!!!!
            t,
            n,
            r,
            i,
            a,
            s,
            u
          ) {
            var l = this,
              c = $("<div>"),
              E = $('<div class="SignResult">'),
              d = new h();
            if (d.parse(l.m_signInfoTmpl)) {
              for (var S = new O(n, t), C = [], T = 0; T < r.length; T++)
                C.push({
                  signTimeInfo: r[T].timeInfo,
                  signerInfo: i[T].infoEx,
                  isDigitalStamp: l.IsDigitalStamp([i[T]]),
                  qscd: l.GetQSCD(i[T].infoEx),
                  signAlgo: l.GetSignAlgo(i[T].infoEx.publicKeyType),
                  signContainerType: l.GetSignContainerType(a, s),
                  signFormat: l.GetSignFormat(a, r[T].signLevel, u),
                });
              var R = { signFile: S, files: e, signsInfos: [C] },
                m = l.makeSignReportData(R),
                A = m.report,
                g = new y(A.fileName, d.tmpl, m),
                P = g.makeDocument(f.Pdf, _.Binary);
              m.report.saveReportFileButton =
                m.report.saveReportFileButton.replace(
                  "__validation__report__size__",
                  y.formatFileSize(P.length)
                );
              var I = g.makeDocument(f.Html, _.String),
                v = function () {
                  return new Promise(function (e, t) {
                    e(S);
                  });
                },
                U = function () {
                  return new Promise(function (e, t) {
                    e(new O(A.fileName, P));
                  });
                };
              $(E).append(I),
                $(c).append(
                  '<div id="saveAllButton" class="Block">\t\t\t\t<div class="DownloadIcon" style="float: left;"></div>\t\t\t\t<label class="i18n">' +
                    p("Завантажити все архівом") +
                    "</label>\t\t\t</div>"
                ),
                $(c).append(E);
              var b = {
                title: p(o.BUTTON_THANKS),
                handle: function () {
                  l.ShowForm("#signBlock", !1);
                },
              };
              l.SetResult(c, b),
                l.addSaveFileButton("#saveSignFileButton", A.signFileName, v),
                l.addSaveFileButton(
                  "#saveDataFileButton",
                  A.dataFilesName,
                  function () {
                    return new Promise(function (e, t) {
                      R.files.length > 1
                        ? l
                            .makeZip(A.dataFilesName, R.files)
                            .then(function (t) {
                              e(t);
                            })
                            .catch(t)
                        : e(R.files[0]);
                    });
                  }
                ),
                l.isSafariBrowser()
                  ? ($("#saveReportFileButton").off("click"),
                    $("#saveReportFileButton").click(function () {
                      g.makeDocument(f.Pdf, _.File);
                    }))
                  : l.addSaveFileButton("#saveReportFileButton", A.fileName, U),
                l.addSaveFileButton(
                  "#saveAllButton",
                  A.zipFileName,
                  function () {
                    return new Promise(function (e, t) {
                      var n = [];
                      v()
                        .then(function (e) {
                          return n.push(e), R.files;
                        })
                        .then(function (e) {
                          return (
                            e.forEach(function (e) {
                              for (var t = 0; t < n.length; t++)
                                if (e.name == n[t].name) {
                                  var r =
                                    l.removeFileExtension(e.name) +
                                    ".orig." +
                                    l.getFileExtension(e.name);
                                  e = new O(r, e.data, e.file);
                                  break;
                                }
                              n.push(e);
                            }),
                            U()
                          );
                        })
                        .then(function (e) {
                          return n.push(e), l.makeZip(A.zipFileName, n);
                        })
                        .then(function (t) {
                          e(t);
                        })
                        .catch(t);
                    });
                  }
                );
            } else
              l.SetStatus(
                p(
                  "Виникла помилка в шаблоні при відображенні результату підпису"
                ),
                !0
              );
          }),
          (e.prototype.MakeCertificateInfoEl = function (e) {
            var t = this,
              n = "EU-" + e.infoEx.serial + ".cer",
              r = t.MakeKeyUsageWithPublicKeyType(
                e.infoEx.keyUsageType,
                e.infoEx.publicKeyType
              ),
              i =
                (p("чинний"),
                p(o.TEXT_FROM),
                t.DateToLocalString(e.infoEx.certBeginTime),
                p(o.TEXT_TO),
                t.DateToLocalString(e.infoEx.certEndTime),
                $(
                  '<div class="Block ColorBorder"><div class="FileIcon"></div><div class="FileContent"><h2>' +
                    r.join(", ") +
                    '</h2><label class="TextSmall TextLight">' +
                    n +
                    '</label></div><div class="DownloadIcon"></div></div>'
                ));
            return (
              i.on("click", function (r) {
                t.SaveFile(n, e.data);
              }),
              i
            );
          }),
          (e.prototype.ClearForm = function (e) {
            switch (e) {
              case "#pkTypesPreSelectBlock":
                $("#pkTypesPreSelectBlock")
                  .find(".MenuItem[selected]")
                  .removeAttr("selected");
                break;
              case "#pkReadFileBlock":
                $("#pkReadFileSelectFileTextField").text(""),
                  $("#pkReadFileSelectFileTextField").change(),
                  $("#pkReadFileSelectFileCenterBlock").show(),
                  $("#pkReadFileSelectFileSelectedCenterBlock").hide(),
                  $("#pkReadFileInput").val(""),
                  $("#pkReadFileAliasSelect").empty(),
                  $("#pkReadFilePasswordTextField").val(""),
                  $("#pkReadFilePasswordTextField").change(),
                  $("#pkReadFileCertsBlock").hide(),
                  $("#pkReadFileCertsInput").val(""),
                  $("#pkReadFileSelectCertsCenterBlock").show(),
                  $("#pkReadFileSelectCertsSelectedCenterBlock").hide(),
                  $("#pkReadFileSelectCertsSelectedList").empty(),
                  $("#pkReadFilePasswordTextField").prop("disabled", !0),
                  $("#pkReadFileCertsBlock").hide(),
                  $("#pkReadFileButton").attr("disabled", !0),
                  $("#pkReadFileSelectAliasBlock").hide();
                break;
              case "#pkReadKMBlock":
                $("#pkReadKMUserTextField").val(""),
                  $("#pkReadKMUserTextField").change(),
                  $("#pkReadKMPasswordTextField").val(""),
                  $("#pkReadKMPasswordTextField").change(),
                  $("#pkReadKMCertsBlock").hide(),
                  $("#pkReadKMCertsInput").val(""),
                  $("#pkReadKMSelectCertsCenterBlock").show(),
                  $("#pkReadKMSelectCertsSelectedCenterBlock").hide(),
                  $("#pkReadKMSelectCertsSelectedList").empty(),
                  $("#pkReadKMUserBlock").hide(),
                  $("#pkReadKMCertsBlock").hide(),
                  this.m_KMs
                    ? this.SetKMs(this.m_KMs)
                    : ($("#pkReadKMUserTextField").prop("disabled", !0),
                      $("#pkReadKMPasswordTextField").prop("disabled", !0),
                      $("#pkReadKMButton").attr("disabled", !0));
                break;
              case "#pkReadKSPBlock":
                $("#pkReadKSPSelect").val(
                  $("#pkReadKSPSelect option:first").val()
                ),
                  $("#pkReadKSPUserIdTextField").val(""),
                  $("#pkReadKSPUserIdTextField").change(),
                  $("#pkReadKSPButton").attr("disabled", !0),
                  this.OnReadKSPSelectChange();
                break;
              case "#pkReadDIIABlock":
                $("#pkReadDIIAQRCodeBlock").empty();
                break;
              case "#pkWriteFileBlock":
                $("#pkWriteFileTextField").val("Key-6.dat"),
                  $("#pkWriteFileTextField").change(),
                  $("#pkWriteFilePasswordTextField").val(""),
                  $("#pkWriteFilePasswordTextField").change(),
                  $("#pkWriteFilePasswordConfirmTextField").val(""),
                  $("#pkWriteFilePasswordConfirmTextField").change(),
                  $("#pkWriteFilePasswordTextField").prop("disabled", !1),
                  $("#pkWriteFilePasswordConfirmTextField").prop(
                    "disabled",
                    !1
                  ),
                  $("#pkWriteFileButton").attr("disabled", !0);
                break;
              case "#pkWriteKMBlock":
                $("#pkWriteKMUserTextField").val(""),
                  $("#pkWriteKMUserTextField").change(),
                  $("#pkWriteKMPasswordTextField").val(""),
                  $("#pkWriteKMPasswordTextField").change(),
                  $("#pkWriteKMPasswordConfirmTextField").val(""),
                  $("#pkWriteKMPasswordConfirmTextField").change(),
                  this.m_KMs
                    ? this.SetKMs(this.m_KMs)
                    : ($("#pkWriteKMUserTextField").prop("disabled", !0),
                      $("#pkWriteKMPasswordTextField").prop("disabled", !0),
                      $("#pkWriteKMPasswordConfirmTextField").prop(
                        "disabled",
                        !0
                      ),
                      $("#pkReadKMButton").attr("disabled", !0));
                break;
              case "#preSignBlock":
                //!!!!
                break;
              case "#signBlock":
                var t =
                  (this.m_showSignTip &&
                    $("#preSignShowParamsCheckbox").prop("checked")) ||
                  !this.m_showSignTip;
                t
                  ? ($("#signTipBlock").hide(),
                    $("#signParamsBlock").show(),
                    $("#signButton").text(p(o.BUTTON_SIGN)))
                  : ($("#signTipBlock").show(),
                    $("#signParamsBlock").hide(),
                    $("#signButton").text(p(o.BUTTON_SIGN_ASICE))),
                  $(
                    "[name=signTypesRadio][value=" +
                      (t
                        ? this.IsReadedKeyTypeSupportsExtSignType()
                          ? v.XAdES
                          : v.CAdES
                        : v.ASiCE) +
                      "]"
                  )
                    .prop("checked", !0)
                    .trigger("click"),
                  $("#signTypeXAdESSelect").val(
                    i.EndUserConstants.EndUserXAdESType.Detached + ""
                  ),
                  $("#signFormatXAdESSelect").val(
                    i.EndUserConstants.EndUserXAdESSignLevel.B_LT + ""
                  ),
                  $("#signFormatPAdESSelect").val(
                    i.EndUserConstants.EndUserPAdESSignLevel.B_LT + ""
                  ),
                  $("#signTypeCAdESSelect").val(U.Enveloped + ""),
                  $("#signFormatCAdESSelect").val(
                    (i.EndUserConstants.EndUserSignType.CAdES_X_Long |
                      i.EndUserConstants.EndUserSignType.CAdES_X_Long_Trusted) +
                      ""
                  ),
                  $("#signTypeASiCSelect").val(
                    (t || !this.IsReadedKeyTypeSupportsExtSignType()
                      ? i.EndUserConstants.EndUserASiCSignType.CAdES
                      : i.EndUserConstants.EndUserASiCSignType.XAdES) + ""
                  ),
                  this.OnChangeSignType(),
                  $("#signFilesInput").val(""),
                  $("#signFilesSelectBlock").show(),
                  $("#signFilesSelectedBlock").hide(),
                  $("#signFilesSelectedList").empty(),
                  $("#signButton").attr("disabled", !0),
                  this.IsReadedKeyTypeSupportsExtSignType()
                    ? ($("#signTypeXAdESRadioBlock").show(),
                      $("#signTypeASiCXAdESOption").show())
                    : ($("#signTypeXAdESRadioBlock").hide(),
                      $("#signTypeASiCXAdESOption").hide()),
                  this.IsReadedKeyTypeSupportsPAdESSignType()
                    ? $("#signTypePAdESRadioBlock").show()
                    : $("#signTypePAdESRadioBlock").hide();
                break;
              case "#makeTechnicalCertBlock":
                $("#makeTechnicalCertDeviceNameTextField").val(""),
                  $("#makeTechnicalCertDeviceNameTextField").change(),
                  $("#makeTechnicalCertEUFileTextField").val(""),
                  $("#makeTechnicalCertEUFileTextField").change(),
                  $("#makeTechnicalCertEUFileInput").val(""),
                  $("#makeTechnicalCertEUKEPFileTextField").val(""),
                  $("#makeTechnicalCertEUKEPFileTextField").change(),
                  $("#makeTechnicalCertEUKEPFileInput").val("");
                break;
              case "#proxySettingsBlock":
              case "#installBlock":
                break;
              case "#resultBlock":
                $("#resultBlock").empty();
            }
          }),
          (e.prototype.GetVisibleFormId = function () {
            return "#" + $(".VisibleBlock").attr("id");
          }),
          (e.prototype.ShowForm = function (e, t) {
            var n = this.GetVisibleFormId();
            if (null != e && n != e) {
              this.HideForm(null);
              var r = $(e);
              r.show(), r.addClass("VisibleBlock");
            }
            switch (
              ("#proxySettingsBlock" != n &&
                !t &&
                this.ClearForm(null != e ? e : n),
              this.SetFormTitle(e),
              this.SetFormSubTitle(e),
              this.SetFormStep(e),
              this.SetFormHelp(e),
              this.SetStatus(),
              this.ChangeFormState(null != e ? e : n, t),
              e)
            ) {
              case "#pkTypesPreSelectBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").hide(),
                  $("#pkBlock").hide(),
                  $("#pkTypesBlock").hide();
                break;
              case "#pkReadFileBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  $("#pkTypesBlock").show(),
                  $("#pkBlock").show(),
                  $("#pkCABloсk").show(),
                  (this.m_isPKActionDone = !1),
                  this.m_formType == I.MakeNewCertificate &&
                  this.m_noNewFileKMOnMakeNewCertificate
                    ? $("#proxyButtonBlock").show()
                    : $("#proxyButtonBlock").hide();
                break;
              case "#pkReadKMBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  $("#pkTypesBlock").show(),
                  $("#pkBlock").show(),
                  $("#pkCABloсk").show(),
                  (this.m_isPKActionDone = !1),
                  $("#proxyButtonBlock").show();
                break;
              case "#pkReadKSPBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  $("#pkTypesBlock").show(),
                  $("#pkBlock").show(),
                  $("#pkCABloсk").hide(),
                  (this.m_isPKActionDone = !1),
                  $("#proxyButtonBlock").hide();
                break;
              case "#pkReadDIIABlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  $("#pkTypesBlock").hide(),
                  $("#pkBlock").show(),
                  $("#pkCABloсk").hide(),
                  (this.m_isPKActionDone = !1),
                  $("#proxyButtonBlock").hide();
                break;
              case "#pkWriteFileBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  this.m_noNewKMOnMakeNewCertificate
                    ? $("#pkTypesBlock").hide()
                    : $("#pkTypesBlock").show(),
                  $("#pkBlock").show(),
                  $("#pkCABloсk").hide(),
                  this.m_noNewKMOnMakeNewCertificate &&
                    $("#pkWriteFileSelectFileBlock").hide(),
                  (this.m_isPKActionDone = !1),
                  $("#proxyButtonBlock").hide();
                break;
              case "#pkWriteKMBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show();
                var i =
                  this.m_formType != I.MakeNewCertificate ||
                  !this.m_noNewKMOnMakeNewCertificate ||
                  null == this.m_readedPKey.keyMedia;
                i && !this.m_noNewFileKMOnMakeNewCertificate
                  ? $("#pkTypesBlock").show()
                  : $("#pkTypesBlock").hide(),
                  $("#pkBlock").show(),
                  $("#pkCABloсk").hide(),
                  i ||
                    ($("#pkWriteKMUserBlock").hide(),
                    $("#pkWriteKMSelectBlock").hide()),
                  (this.m_isPKActionDone = !1),
                  this.m_formType != I.MakeNewCertificate
                    ? $("#proxyButtonBlock").show()
                    : $("#proxyButtonBlock").hide();
                break;
              case "#pkInfoBlock":
                this.m_formType != I.ViewPKeyCertificates
                  ? $("#pkInfoNextButton").show()
                  : $("#pkInfoNextButton").hide(),
                  $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  $("#pkTypesBlock").hide(),
                  $("#pkBlock").hide();
                break;
              case "#preSignBlock":
              case "#signBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  $("#pkTypesBlock").hide(),
                  $("#pkBlock").hide();
                break;
              case "#proxySettingsBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").hide(),
                  $("#pkTypesBlock").hide(),
                  $("#pkBlock").hide();
                break;
              case "#installBlock":
                $("#titleBlock").show(),
                  $("#titleBlock").css("text-align", "initial"),
                  $("#subTitleLabel").hide(),
                  $("#stepBlock").show(),
                  $("#pkBlock").hide();
                break;
              case "#resultBlock":
                $("#titleLabel").is(":visible")
                  ? ($("#titleBlock").show(), $("#subTitleLabel").show())
                  : ($("#titleBlock").hide(), $("#subTitleLabel").hide()),
                  $("#titleBlock").css("text-align", "center"),
                  $("#stepBlock").hide(),
                  $("#pkTypesBlock").hide(),
                  $("#pkBlock").hide();
            }
          }),
          (e.prototype.HideForm = function (e) {
            null == e && (e = this.GetVisibleFormId());
            var t = $(e);
            t.hide(), t.removeClass("VisibleBlock");
          }),
          (e.prototype.ChangeFormState = function (e, t) {
            switch (e) {
              case "#pkTypesPreSelectBlock":
                break;
              case "#pkReadFileBlock":
                $("#pkTypesBlock").find(".TabButton").prop("disabled", t),
                  $("#pkCASelect").prop("disabled", t),
                  $("#proxyButton").attr("disabled", t);
                var n = "" != $("#pkReadFileSelectFileTextField").text();
                $("#pkReadFileAliasSelect").prop("disabled", t || !n),
                  $("#pkReadFilePasswordTextField").prop("disabled", t || !n),
                  $("#pkReadFileSelectFileChangeButton").attr("disabled", t),
                  $("#pkReadFileSelectCertsDropZone").prop("disabled", t || !n),
                  $("#pkReadFileSelectCertsChangeButton").attr(
                    "disabled",
                    t || !n
                  ),
                  $("#pkReadFileButton").attr("disabled", !n),
                  $("#pkReadFileButton").text(
                    p(t ? o.BUTTON_CLEAR : o.BUTTON_READ)
                  ),
                  this.m_formType == I.MakeNewCertificate &&
                    (t
                      ? $("#pkReadFileButton").hide()
                      : $("#pkReadFileButton").show());
                break;
              case "#pkReadKMBlock":
                $("#pkTypesBlock").find(".TabButton").prop("disabled", t),
                  $("#pkCASelect").prop("disabled", t);
                n = "" != $("#pkReadKMSelect").find(":selected").text();
                $("#proxyButton").attr("disabled", t),
                  $("#pkReadKMSelect").prop("disabled", t),
                  $("#pkReadKMUserTextField").prop("disabled", t || !n),
                  $("#pkReadKMPasswordTextField").prop("disabled", t || !n),
                  $("#pkReadKMSelectCertsDropZone").prop("disabled", t || !n),
                  $("#pkReadKMSelectCertsChangeButton").attr(
                    "disabled",
                    t || !n
                  ),
                  $("#pkReadKMButton").attr("disabled", !n),
                  $("#pkReadKMButton").text(
                    p(t ? o.BUTTON_CLEAR : o.BUTTON_READ)
                  ),
                  this.m_formType == I.MakeNewCertificate &&
                    (t
                      ? $("#pkReadKMButton").hide()
                      : $("#pkReadKMButton").show());
                break;
              case "#pkReadKSPBlock":
                $("#pkTypesBlock").find(".TabButton").prop("disabled", t),
                  $("#pkReadKSPSelect").prop("disabled", t),
                  $("#pkReadKSPUserIdTextField").prop("disabled", t);
                n = "" != $("#pkReadKSPUserIdTextField").val();
                $("#pkReadKSPButton").text(
                  p(t ? o.BUTTON_CLEAR : o.BUTTON_READ)
                );
                break;
              case "#pkWriteFileBlock":
                $("#pkTypesBlock").find(".TabButton").prop("disabled", t),
                  $("#pkCASelect").prop("disabled", t);
                n = "" != $("#pkWriteFileTextField").val();
                $("#pkWriteFileTextField").prop("disabled", t),
                  $("#pkWriteFilePasswordTextField").prop("disabled", t || !n),
                  $("#pkWriteFilePasswordConfirmTextField").prop(
                    "disabled",
                    t || !n
                  ),
                  $("#pkWriteFileButton").attr("disabled", t || !n);
                break;
              case "#pkWriteKMBlock":
                $("#pkTypesBlock").find(".TabButton").prop("disabled", t),
                  $("#pkCASelect").prop("disabled", t);
                n =
                  "" != $("#pkWriteKMSelect").find(":selected").text() ||
                  (this.m_formType == I.MakeNewCertificate &&
                    this.m_noNewKMOnMakeNewCertificate &&
                    !this.m_noNewFileKMOnMakeNewCertificate &&
                    null == this.m_readedPKey.keyMedia);
                $("#proxyButton").attr("disabled", t),
                  $("#pkWriteKMSelect").prop("disabled", t),
                  $("#pkWriteKMUserTextField").prop("disabled", t || !n),
                  $("#pkWriteKMPasswordTextField").prop("disabled", t || !n),
                  $("#pkWriteKMPasswordConfirmTextField").prop(
                    "disabled",
                    t || !n
                  ),
                  $("#pkWriteKMButton").attr("disabled", t || !n);
                break;
              case "#pkInfoBlock":
                $("#pkInfoNextButton").attr("disabled", t);
            }
          }),
          (e.prototype.SetStatus = function (e, t) {
            void 0 === e && (e = ""),
              void 0 === t && (t = !1),
              $("#statusLabel").text(e),
              "" == e ? $("#statusBlock").hide() : $("#statusBlock").show(),
              t
                ? ($("#statusBlock").addClass("error"),
                  $("#statusBlock").removeClass("status"))
                : ($("#statusBlock").removeClass("error"),
                  $("#statusBlock").addClass("status"));
          }),
          (e.prototype.GetLibraryErrorDetailedDescription = function (e) {
            var t = e.message + "(" + e.code + ")";
            switch (e.code) {
              case i.EndUserError.EU_ERROR_TRANSMIT_REQUEST:
                this.GetCurrentLibrary().GetType() ==
                  i.EndUserConstants.EU_LIBRARY_TYPE_SW &&
                  (t += ". " + p(o.TEXT_SET_PROXY_SETTINGS));
            }
            return t;
          }),
          (e.prototype.SetError = function (e, t) {
            void 0 === t && (t = null);
            var n = "";
            e && (n += e),
              t &&
                ((n += ". " + p(o.TEXT_ERROR_DESCRIPTION) + ": "),
                (n +=
                  "string" == typeof t
                    ? t
                    : this.GetLibraryErrorDetailedDescription(t))),
              this.SetStatus(n, !0);
          }),
          (e.prototype.SetResult = function (e, t) {
            void 0 === e && (e = null),
              void 0 === t && (t = null),
              $("#resultContentBlock").empty(),
              $("#resultContentBlock").append(e),
              null != t
                ? ($("#resultOKButton").off(),
                  $("#resultOKButton").on("click", t.handle),
                  $("#resultOKButton").text(t.title),
                  $("#resultButtonsBlock").show())
                : $("#resultButtonsBlock").hide();
          }),
          (e.prototype.GetURLParameter = function (e, t, n) {
            if (!e) return n;
            if (-1 == e.indexOf("?")) return n;
            for (
              var r = n,
                i = e.substring(e.indexOf("?") + 1, e.length).split("&"),
                o = 0;
              o < i.length;
              o++
            )
              if (0 == i[o].indexOf(t + "=")) {
                r = i[o].substring((t + "=").length, i[o].length);
                break;
              }
            return r;
          }),
          (e.prototype.WriteLog = function (e) {
            this.m_debug && console.log("SignWidget: " + e);
          }),
          (e.prototype.GetProxySettings = function () {
            var e = new i.EndUserProxySettings();
            return (
              (e.useProxy = $("#proxyUseCheckbox").prop("checked")),
              (e.address = e.useProxy ? $("#proxyAddressTextField").val() : ""),
              (e.port = e.useProxy ? $("#proxyPortTextField").val() : "3128"),
              (e.anonymous =
                !e.useProxy || !$("#proxyAuthCheckbox").prop("checked")),
              (e.user = e.anonymous ? "" : $("#proxyUserTextField").val()),
              (e.password = e.anonymous
                ? ""
                : $("#proxyPasswordTextField").val()),
              (e.savePassword = !0),
              e.useProxy
                ? "" == e.address
                  ? (this.SetError(p(o.ERROR_PROXY_ADDRESS_NOT_SET)),
                    $("#proxyAddressTextField").focus(),
                    null)
                  : isNaN(parseInt(e.port)) ||
                    parseInt(e.port) < 1 ||
                    parseInt(e.port) > 65535
                  ? (this.SetError(p(o.ERROR_PROXY_PORT_NOT_SET)),
                    $("#proxyPortTextField").focus(),
                    null)
                  : e.anonymous
                  ? e
                  : "" == e.user
                  ? (this.SetError(p(o.ERROR_PROXY_USER_NOT_SET)),
                    $("#proxyUserTextField").focus(),
                    null)
                  : e
                : e
            );
          }),
          (e.prototype.GetFilesSize = function (e) {
            if (!e) return 0;
            for (var t = 0, n = 0; n < e.length; n++) t += e[n].size;
            return t;
          }),
          (e.prototype.ReadFile = function (e) {
            return new Promise(function (t, n) {
              var r = new FileReader();
              (r.onloadend = function (n) {
                if (n.target.readyState == FileReader.DONE) {
                  var r = new O(e.name, new Uint8Array(n.target.result), e);
                  t(r);
                }
              }),
                r.readAsArrayBuffer(e);
            });
          }),
          (e.prototype.ReadFiles = function (e) {
            var t = this;
            return new Promise(function (n, r) {
              var i = Array(),
                o = 0,
                a = function () {
                  o >= e.length
                    ? n(i)
                    : (t
                        .ReadFile(e[o])
                        .then(function (e) {
                          i.push(e), a();
                        })
                        .catch(function (e) {
                          return r(e);
                        }),
                      o++);
                };
              a();
            });
          }),
          (e.prototype.SaveFile = function (e, t) {
            var n = new Blob([t], { type: "application/octet-stream" });
            saveAs(n, e);
          }),
          (e.prototype.SetKSPs = function (e) {
            var t = $("#pkReadKSPSelect");
            t.empty(),
              $.each(e, function (e, n) {
                t.append($("<option/>", { value: n.ksp, text: n.name }));
              });
          }),
          (e.prototype.SetCAs = function (e) {
            this.m_CAs = e;
            var t = $("#pkCASelect"),
              n = [];
            if (
              null == this.m_CAs ||
              this.m_CAs.length < 2 ||
              this.m_keyMediaType == b.KSP ||
              this.m_keyMediaType == b.DIIA_UA ||
              this.m_keyMediaType == b.DIIA_EU ||
              this.m_formType == I.MakeNewCertificate ||
              this.m_formType == I.MakeDeviceCertificate ||
              this.m_ownCAOnly
            )
              $("#pkCABloсk").hide();
            else {
              n.push(p(o.TEXT_CA_AUTO_DETECT));
              for (var r = 0; r < this.m_CAs.length; r++)
                n.push(this.m_CAs[r].issuerCNs[0]);
              t.empty(),
                $.each(n, function (e, n) {
                  t.append($("<option/>", { value: e, text: n }));
                }),
                $("#pkCABloсk").show();
            }
          }),
          (e.prototype.GetSelectedCA = function () {
            if (null == this.m_CAs || 0 == this.m_CAs.length) return null;
            if (
              1 == this.m_CAs.length ||
              this.m_formType == I.MakeNewCertificate ||
              this.m_formType == I.MakeDeviceCertificate ||
              this.m_ownCAOnly
            )
              return this.m_CAs[0];
            var e = parseInt($("#pkCASelect").val());
            return 0 != e ? this.m_CAs[e - 1] : null;
          }),
          (e.prototype.SetSelectedCA = function (e) {
            for (var t = 0; t < this.m_CAs.length; t++)
              for (var n = 0; n < this.m_CAs[t].issuerCNs.length; n++)
                if (e == this.m_CAs[t].issuerCNs[n])
                  return void $("#pkCASelect").val(t + 1);
          }),
          (e.prototype.GetFileExtension = function (e) {
            return e.substring(e.lastIndexOf(".") + 1, e.length);
          }),
          (e.prototype.FilterUserCertificates = function (e) {
            for (var t = new Array(), n = 0; n < e.length; n++)
              e[n].infoEx.subjType ==
                i.EndUserConstants.EndUserSubjectType.EndUser && t.push(e[n]);
            return t;
          }),
          (e.prototype.GetKMLocalizedVisibleName = function (e) {
            return e.device + "(" + p(e.type) + ")";
          }),
          (e.prototype.GetKMsVisibleNames = function (e) {
            var t = this,
              n = new Array();
            return (
              null != e &&
                e.forEach(function (e) {
                  n.push(t.GetKMLocalizedVisibleName(e));
                }),
              n
            );
          }),
          (e.prototype.IsKMMultiKeyDevice = function (e) {
            return P.indexOf(e.type) > -1;
          }),
          (e.prototype.IsKMConnected = function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              if (
                e.typeIndex == r.typeIndex &&
                e.devIndex == r.devIndex &&
                e.type == r.type &&
                e.device == r.device
              )
                return !0;
            }
            return !1;
          }),
          (e.prototype.IsKMsUpdated = function (e, t) {
            var n = this.GetKMsVisibleNames(e),
              r = this.GetKMsVisibleNames(t);
            if (n.length != r.length) return !0;
            for (var i = 0; i < n.length; i++) if (n[i] != r[i]) return !0;
            return !1;
          }),
          (e.prototype.BeginUpdateKMs = function () {
            var e = this,
              t = e.GetCurrentLibrary();
            e.WriteLog("BeginUpdateKMs"),
              t.GetType() == i.EndUserConstants.EU_LIBRARY_TYPE_SW
                ? e.m_updatingKM
                  ? (e.m_updateKM = !0)
                  : ((e.m_updateKM = !0),
                    (e.m_updatingKM = !0),
                    t
                      .GetLibrary()
                      .GetKeyMedias()
                      .then(function (t) {
                        (e.WriteLog("KeyMedias: " + t),
                        (e.m_updatingKM = !1),
                        e.m_updateKM) &&
                          (e.m_formType == I.MakeNewCertificate &&
                            null != e.m_readedPKey &&
                            null != e.m_readedPKey.keyMedia &&
                            e.m_noNewKMOnMakeNewCertificate &&
                            (e.IsKMConnected(e.m_readedPKey.keyMedia, t) ||
                              (t = [])),
                          e.IsKMsUpdated(t, e.m_KMs) && e.SetKMs(t),
                          setTimeout(function () {
                            e.m_updateKM && e.BeginUpdateKMs();
                          }, 1e3));
                      })
                      .catch(function (t) {
                        (e.m_updatingKM = !1),
                          e.m_updateKM &&
                            e.SetError(p(o.ERROR_KM_UPDATE_LIST), t),
                          e.StopUpdateKMs();
                      }))
                : e.StopUpdateKMs();
          }),
          (e.prototype.StopUpdateKMs = function () {
            this.WriteLog("StopUpdateKMs"), (this.m_updateKM = !1);
          }),
          (e.prototype.SetKMs = function (e) {
            this.m_KMs = e;
            var t = null;
            if (this.m_KM)
              for (var n = 0; n < e.length; n++)
                if (
                  e[n].type == this.m_KM.type &&
                  e[n].device == this.m_KM.device
                ) {
                  t = e[n];
                  break;
                }
            var r = this.GetKMSelect(),
              i = this.GetKMUserTextField(),
              o = this.GetKMPasswordTextField(),
              a = this.GetKMPasswordConfirmTextField(),
              s = this.GetKMCertsBlock(),
              u = this.GetKMButton(),
              l = this.GetKMsVisibleNames(e);
            r.empty(),
              $.each(l, function (e, t) {
                r.append($("<option/>", { value: t, text: t }));
              }),
              t && r.val(this.GetKMLocalizedVisibleName(t)),
              this.OnKMSelectChange(),
              i.prop("disabled", 0 == l.length),
              o.prop("disabled", 0 == l.length),
              a && a.prop("disabled", 0 == l.length),
              u.attr("disabled", 0 == l.length),
              s && s.prop("disabled", 0 == l.length),
              s && s.attr("disabled", 0 == l.length),
              0 == l.length &&
                (i.val(""),
                o.val(""),
                a && a.val(""),
                s && s.find("ul").empty());
          }),
          (e.prototype.GetSelectedKM = function () {
            if (null == this.m_KMs) return null;
            for (
              var e = this.GetKMSelect(),
                t = this.GetKMUserTextField(),
                n = this.GetKMPasswordTextField(),
                r = e.find(":selected").text(),
                o = 0;
              o < this.m_KMs.length;
              o++
            ) {
              var a = this.m_KMs[o];
              if (this.GetKMLocalizedVisibleName(a) == r) {
                var s = new i.EndUserKeyMedia(a);
                return (
                  (s.password = n.val()),
                  t.is(":visible") && (s.user = t.val()),
                  s
                );
              }
            }
            return null;
          }),
          (e.prototype.GetSelectedKSPSettigs = function () {
            for (
              var e = $("#pkReadKSPSelect").find(":selected").text(),
                t = LIBRARY_SETTINGS.KSPs || [],
                n = 0;
              n < t.length;
              n++
            )
              if (t[n].name == e) return t[n];
            return null;
          }),
          (e.prototype.OnEvent = function (e) {
            switch (e.type) {
              case i.EndUserConstants.EndUserEventType.ConfirmKSPOperation:
                var t = e;
                this.BeginOperationConfirmation(
                  t.url,
                  t.qrCode,
                  t.mobileAppName,
                  t.expireDate
                );
            }
            (this.m_listeners[e.type] ||
              this.m_listeners[i.EndUserConstants.EndUserEventType.All]) &&
              this.PostMessage(null, -2, null, e);
          }),
          (e.prototype.BeginOperationConfirmationTimer = function (e, t, n) {
            var r = this,
              i = function () {
                var i = e.getTime() - new Date().getTime(),
                  o = Math.floor((i / 1e3) % 60),
                  a = Math.floor((i / 1e3 / 60) % 60),
                  s = t + " " + ("0" + a).slice(-2) + ":" + ("0" + o).slice(-2);
                $("#dimmerViewTimerLabel").text(s),
                  i <= 0 &&
                    (clearInterval(r.m_dimmerViewTimer),
                    (r.m_dimmerViewTimer = void 0),
                    n());
              };
            i(),
              (r.m_dimmerViewTimer = setInterval(i, 1e3)),
              $("#dimmerViewTimerBlock").show();
          }),
          (e.prototype.StopOperationConfirmationTimer = function () {
            void 0 !== this.m_dimmerViewTimer &&
              (clearInterval(this.m_dimmerViewTimer),
              (this.m_dimmerViewTimer = void 0)),
              $("#dimmerViewTimerLabel").text(""),
              $("#dimmerViewTimerBlock").hide();
          }),
          (e.prototype.BeginOperationConfirmation = function (e, t, n, r) {
            var i = this,
              s = $("<div>");
            s.css("padding", "10px");
            var u = $("<a>");
            u.attr("href", e), u.attr("target", "_blank");
            var l = new Image();
            (l.src = "data:image/bmp;base64," + t),
              $(l).css("padding", "10px"),
              $(l).css("background", "white"),
              u.append(l),
              s.append(u);
            var c =
                '<a href="' +
                encodeURI(e) +
                '" target="blank" style="color:black">' +
                p(n) +
                "</a>",
              f = $("<div>");
            f.append(
              '<label style="color:#aaa">' +
                a.format(p(o.TEXT_KSP_OPERATION_CONFIRMATION), c) +
                "</label>"
            ),
              i.BeginOperationConfirmationTimer(
                r,
                p(o.TEXT_QR_CODE_VALID_UNTIL),
                function () {
                  i.StopOperationConfirmationTimer();
                }
              ),
              $("#dimmerViewQRCodeBlock").empty(),
              $("#dimmerViewQRCodeBlock").append(s),
              $("#dimmerViewQRCodeBlock").append(f),
              $("#dimmerViewQRCodeBlock").show();
          }),
          (e.prototype.StopOperationConfirmation = function () {
            this.StopOperationConfirmationTimer(),
              $("#dimmerViewQRCodeBlock").empty(),
              $("#dimmerViewQRCodeBlock").hide();
          }),
          (e.prototype.IsDigitalStamp = function (e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t].infoEx;
              if (
                n.publicKeyType ==
                  i.EndUserConstants.EndUserCertKeyType.DSTU4145 &&
                (n.keyUsageType &
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature) ==
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature
              )
                return !(
                  n.extKeyUsages.indexOf(
                    i.EndUserConstants.EU_UA_OID_EXT_KEY_USAGE_STAMP
                  ) < 0 && n.extKeyUsages.indexOf("Цифрова печатка") < 0
                );
            }
          }),
          (e.prototype.GetSignAlgo = function (e) {
            switch (e) {
              case i.EndUserConstants.EndUserCertKeyType.DSTU4145:
                return p("ДСТУ 4145");
              case i.EndUserConstants.EndUserCertKeyType.RSA:
                return p("RSA");
              case i.EndUserConstants.EndUserCertKeyType.ECDSA:
                return p("ECDSA");
              default:
                return "";
            }
          }),
          (e.prototype.GetSignFileExt = function (e, t) {
            switch (t) {
              case v.CAdES:
                return ".p7s";
              case v.ASiCS:
                return ".asics";
              case v.ASiCE:
                return e.endsWith(".asice") || e.endsWith(".sce")
                  ? ""
                  : ".asice";
              case v.PAdES:
                return "";
              case v.XAdES:
                return e.endsWith(".xml") ? "" : ".xml";
              default:
                return "";
            }
          }),
          (e.prototype.GetSignContainerType = function (e, t) {
            switch (e) {
              case i.EndUserConstants.EndUserSignContainerType.CAdES:
                switch (t) {
                  case i.EndUserConstants.EndUserCAdESType.Detached:
                    return p(
                      "Підпис та дані в окремих файлах (CAdES detached)"
                    );
                  case i.EndUserConstants.EndUserCAdESType.Enveloped:
                    return p("Підпис та дані в одному файлі (CAdES enveloped)");
                  default:
                    return p("Не визначено");
                }
              case i.EndUserConstants.EndUserSignContainerType.XAdES:
                switch (t) {
                  case i.EndUserConstants.EndUserXAdESType.Detached:
                    return p(
                      "Підпис та дані в окремих файлах (XAdES detached)"
                    );
                  case i.EndUserConstants.EndUserXAdESType.Enveloping:
                    return p(
                      "Підпис та дані в одному файлі (XAdES enveloping)"
                    );
                  case i.EndUserConstants.EndUserXAdESType.Enveloped:
                    return p("Підпис та дані в одному файлі (XAdES enveloped)");
                  default:
                    return p("Не визначено");
                }
              case i.EndUserConstants.EndUserSignContainerType.PAdES:
                return p("Підписаний PDF-файл (PAdES)");
              case i.EndUserConstants.EndUserSignContainerType.ASiC:
                switch (t) {
                  case i.EndUserConstants.EndUserASiCType.S:
                    return p("Підпис та дані в архіві (ASiC-S)");
                  case i.EndUserConstants.EndUserASiCType.E:
                    return p("Підпис та дані в архіві (розширений) (ASiC-E)");
                  default:
                    return p("Не визначено");
                }
              default:
                return p("Не визначено");
            }
          }),
          (e.prototype.GetSignFormat = function (e, t, n) {
            switch (e) {
              case i.EndUserConstants.EndUserSignContainerType.CAdES:
                return this.GetCAdESSignLevel(t);
              case i.EndUserConstants.EndUserSignContainerType.XAdES:
                return this.GetXAdESSignLevel(t);
              case i.EndUserConstants.EndUserSignContainerType.PAdES:
                return this.GetPAdESSignLevel(t);
              case i.EndUserConstants.EndUserSignContainerType.ASiC:
                switch (n) {
                  case i.EndUserConstants.EndUserASiCSignType.CAdES:
                    return this.GetCAdESSignLevel(t);
                  case i.EndUserConstants.EndUserASiCSignType.XAdES:
                    return this.GetXAdESSignLevel(t);
                  default:
                    return p("Не визначено");
                }
              default:
                return p("Не визначено");
            }
          }),
          (e.prototype.GetCAdESSignLevel = function (e) {
            switch (e) {
              case i.EndUserConstants.EndUserSignType.CAdES_BES:
                return p("Базовий (CAdES-BES)");
              case i.EndUserConstants.EndUserSignType.CAdES_T:
                return p("З позначкою часу від ЕП (CAdES-T)");
              case i.EndUserConstants.EndUserSignType.CAdES_C:
                return p("З посиланнями на повні дані для перевірки (CAdES-C)");
              case i.EndUserConstants.EndUserSignType.CAdES_X_Long:
                return p("З повними даними для перевірки (CAdES-X Long)");
              case i.EndUserConstants.EndUserSignType.CAdES_X_Long |
                i.EndUserConstants.EndUserSignType.CAdES_X_Long_Trusted:
                return p("З повними даними ЦСК для перевірки (CAdES-X Long)");
              default:
                return p("Не визначено");
            }
          }),
          (e.prototype.GetXAdESSignLevel = function (e) {
            switch (e) {
              case i.EndUserConstants.EndUserXAdESSignLevel.B_B:
                return p("Базовий (XAdES-B-B)");
              case i.EndUserConstants.EndUserXAdESSignLevel.B_T:
                return p("З позначкою часу від ЕП (XAdES-B-T)");
              case i.EndUserConstants.EndUserXAdESSignLevel.B_LT:
                return p("З повними даними для перевірки (XAdES-B-LT)");
              case i.EndUserConstants.EndUserXAdESSignLevel.B_LTA:
                return p(
                  "З повними даними для архівного зберігання (XAdES-B-LTA)"
                );
              default:
                return p("Не визначено");
            }
          }),
          (e.prototype.GetPAdESSignLevel = function (e) {
            switch (e) {
              case i.EndUserConstants.EndUserPAdESSignLevel.B_B:
                return p("Базовий (PAdES-B-B)");
              case i.EndUserConstants.EndUserPAdESSignLevel.B_T:
                return p("З позначкою часу від ЕП (PAdES-B-T)");
              case i.EndUserConstants.EndUserPAdESSignLevel.B_LT:
                return p("З повними даними для перевірки (PAdES-B-LT)");
              case i.EndUserConstants.EndUserPAdESSignLevel.B_LTA:
                return p(
                  "З повними даними для архівного зберігання (PAdES-B-LTA)"
                );
              default:
                return p("Не визначено");
            }
          }),
          (e.prototype.SignAlgoToPublicKeyType = function (e) {
            switch (e) {
              case i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311:
                return i.EndUserConstants.EndUserCertKeyType.DSTU4145;
              case i.EndUserConstants.EndUserSignAlgo.RSAWithSHA:
                return i.EndUserConstants.EndUserCertKeyType.RSA;
              case i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA:
                return i.EndUserConstants.EndUserCertKeyType.ECDSA;
              default:
                return i.EndUserConstants.EndUserCertKeyType.Unknown;
            }
          }),
          (e.prototype.SignAlgoToHashAlgo = function (e) {
            switch (e) {
              case i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311:
                return i.EndUserConstants.EndUserHashAlgo.GOST34311;
              case i.EndUserConstants.EndUserSignAlgo.RSAWithSHA:
              case i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA:
                return i.EndUserConstants.EndUserHashAlgo.SHA256;
              default:
                return i.EndUserConstants.EndUserHashAlgo.Unknown;
            }
          }),
          (e.prototype.MakeKeyUsageWithPublicKeyType = function (e, t) {
            var n = "",
              r = [];
            switch (t) {
              case i.EndUserConstants.EndUserCertKeyType.DSTU4145:
                n = p(o.TEXT_KEY_TYPE_DSTU4145);
                break;
              case i.EndUserConstants.EndUserCertKeyType.RSA:
                n = p(o.TEXT_KEY_TYPE_RSA);
                break;
              case i.EndUserConstants.EndUserCertKeyType.ECDSA:
                n = p(o.TEXT_KEY_TYPE_ECDSA);
            }
            return (
              (n = "" != n ? " (" + n + ")" : ""),
              e & i.EndUserConstants.EndUserKeyUsage.DigitalSignature &&
                r.push(p(o.TEXT_KEY_USAGE_SIGN) + n),
              e & i.EndUserConstants.EndUserKeyUsage.NonRepudation &&
                r.push(p(o.TEXT_KEY_NON_REPUDATION) + n),
              e & i.EndUserConstants.EndUserKeyUsage.KeyAgreement &&
                r.push(p(o.TEXT_KEY_USAGE_ENVELOP) + n),
              r
            );
          }),
          (e.prototype.CheckPrivateKey = function (e, t, n) {
            void 0 === n && (n = !1);
            var r = this;
            return new Promise(function (s, u) {
              if (n) s();
              else if (r.m_readedPKey) {
                for (
                  var l = r.m_readedPKey.certificatesInfo,
                    c = i.EndUserConstants.EndUserKeyUsage.Unknown,
                    f = 0;
                  f < l.length;
                  f++
                ) {
                  var _ = l[f].infoEx;
                  (e != i.EndUserConstants.EndUserCertKeyType.Unknown &&
                    _.publicKeyType != e) ||
                    (c |= _.keyUsageType);
                }
                var E = i.EndUserConstants.EndUserKeyUsage.Unknown;
                for (f = 0; f < t.length; f++) 0 == (c & t[f]) && (E |= t[f]);
                if (E == i.EndUserConstants.EndUserKeyUsage.Unknown) s();
                else {
                  var h = r.MakeKeyUsageWithPublicKeyType(E, e);
                  u(
                    a.format(
                      p(o.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO),
                      h.join(", ")
                    )
                  );
                }
              } else u(p(o.ERROR_PRIVATE_KEY_NOT_READED));
            });
          }),
          (e.prototype.GetSupportedSignAlgosByKSP = function (e) {
            var t = [];
            switch (e) {
              case i.EndUserConstants.EndUserKSP.Kyivstar:
                t.push(
                  {
                    value: i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
                    text: p(o.TEXT_SIGN_ALGO_ECDSA),
                  },
                  {
                    value: i.EndUserConstants.EndUserSignAlgo.RSAWithSHA,
                    text: p(o.TEXT_SIGN_ALGO_RSA),
                  }
                );
                break;
              default:
                t.push({
                  value:
                    i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311,
                  text: p(o.TEXT_SIGN_ALGO_DSTU4145),
                });
            }
            return t;
          }),
          (e.prototype.GetSupportedSignAlgos = function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var r = e[n].infoEx;
              if (
                (r.keyUsageType &
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature) ==
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature ||
                (r.keyUsageType &
                  i.EndUserConstants.EndUserKeyUsage.NonRepudation) ==
                  i.EndUserConstants.EndUserKeyUsage.NonRepudation
              )
                switch (r.publicKeyType) {
                  case i.EndUserConstants.EndUserCertKeyType.DSTU4145:
                    t.push({
                      value:
                        i.EndUserConstants.EndUserSignAlgo
                          .DSTU4145WithGOST34311,
                      text: p(o.TEXT_SIGN_ALGO_DSTU4145),
                    });
                    break;
                  case i.EndUserConstants.EndUserCertKeyType.RSA:
                    t.push({
                      value: i.EndUserConstants.EndUserSignAlgo.RSAWithSHA,
                      text: p(o.TEXT_SIGN_ALGO_RSA),
                    });
                    break;
                  case i.EndUserConstants.EndUserCertKeyType.ECDSA:
                    t.push({
                      value: i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA,
                      text: p(o.TEXT_SIGN_ALGO_ECDSA),
                    });
                }
            }
            if (0 == t.length && this.m_keyMediaType == b.KSP) {
              var a = parseInt($("#pkReadKSPSelect").find(":selected").val());
              t = this.GetSupportedSignAlgosByKSP(a);
            }
            return t;
          }),
          (e.prototype.OnPKeyReaded = function (e) {
            switch (
              ((this.m_readedPKey = e),
              this.ShowForm(null, !0),
              this.SetStatus(p(o.STATUS_PRIVATE_KEY_READED)),
              this.m_formType)
            ) {
              case I.MakeNewCertificate:
                (this.m_isPKActionDone = !1), this.BeginUpdateKMs();
                break;
              case I.ReadPrivateKey:
                this.m_isPKActionDone = !0;
                break;
              case I.ViewPKeyCertificates:
                (this.m_isPKActionDone = !0), this.SetViewPKeyInfo(e);
                break;
              case I.SignFile:
                this.m_isPKActionDone = !0;
                var t = this.GetSupportedSignAlgos(e.certificatesInfo);
                if (0 == t.length) {
                  var n = a.format(
                    p(o.ERROR_PRIVATE_KEY_INVALID_TYPE_OR_ALGO),
                    p(o.TEXT_KEY_USAGE_SIGN),
                    ""
                  );
                  return void this.SetError(n);
                }
                var r = $("#signAlgoSelect");
                r.empty(),
                  $.each(t, function (e, n) {
                    r.append(
                      $("<option/>", { value: t[e].value, text: t[e].text })
                    );
                  }),
                  this.ShowForm(
                    this.m_showSignTip ? "#preSignBlock" : "#signBlock",
                    !1
                  );
                break;
              case I.MakeDeviceCertificate:
                this.m_isPKActionDone = !1;
            }
          }),
          (e.prototype.PostMessage = function (e, t, n, r) {
            var o = null;
            n &&
              ((o = n),
              (void 0 !== n.code && void 0 !== n.message) ||
                (o = {
                  code: i.EndUserError.EU_ERROR_UNKNOWN,
                  message: n.toString(),
                }));
            var a = {
              sender: "EndUserSignWidget",
              reciever: "EndUserSignWidgetConnector",
              id: t,
              error: o,
              result: r,
            };
            null == e && (e = parent), e.postMessage(a, this.m_mainPageOrigin);
          }),
          (e.prototype.OnValidateInput = function (e, t, n, r, i, o) {
            if (t || n || r) return !1;
            return (
              [8, 46, 37, 39].indexOf(e) > -1 ||
              o.indexOf(e) > -1 ||
              i.indexOf(String.fromCharCode(e)) > -1
            );
          }),
          (e.prototype.OnReceiveMessage = function (e) {
            var t = this;
            if (
              (t.WriteLog("Recieve event:"),
              t.WriteLog("event:" + e),
              t.WriteLog("origin:" + e.origin),
              e.origin == t.m_mainPageOrigin &&
                void 0 !== e.data.id &&
                void 0 !== e.data.cmd &&
                "EndUserSignWidgetConnector" == e.data.sender &&
                "EndUserSignWidget" == e.data.reciever)
            ) {
              t.WriteLog("Event data"),
                t.WriteLog("id:" + e.data.id),
                t.WriteLog("cmd:" + e.data.cmd),
                t.WriteLog("params:" + e.data.params);
              try {
                t[e.data.cmd]
                  .apply(t, e.data.params)
                  .then(function (n) {
                    t.PostMessage(e.source, e.data.id, null, n);
                  })
                  .catch(function (n) {
                    t.PostMessage(e.source, e.data.id, n, null);
                  });
              } catch (n) {
                t.PostMessage(e.source, e.data.id, n, null),
                  t.WriteLog("Error: " + n);
              }
            }
          }),
          (e.prototype.OnChangeLibraryType = function (e) {
            var t = this,
              n = t.GetPreSelectMenuId(),
              r =
                "#pkTypeBaseMenuItem" == n
                  ? parseInt(
                      $("#pkTypesBlock").find("button[selected]").attr("value")
                    )
                  : "#pkTypeDIIAUAMenuItem" == n
                  ? b.DIIA_UA
                  : b.DIIA_EU;
            (t.m_keyMediaType = r), t.SetStorageItem("KeyMediaType", r);
            var a = null;
            switch (t.m_formType) {
              case I.ReadPrivateKey:
              case I.SignFile:
              case I.ViewPKeyCertificates:
              case I.MakeDeviceCertificate:
                switch (r) {
                  case b.File:
                    a = "#pkReadFileBlock";
                    break;
                  case b.Hardware:
                    a = "#pkReadKMBlock";
                    break;
                  case b.KSP:
                    a = "#pkReadKSPBlock";
                    break;
                  case b.DIIA_EU:
                  case b.DIIA_UA:
                    a = "#pkReadDIIABlock";
                }
                break;
              case I.MakeNewCertificate:
                a =
                  r == b.Hardware
                    ? null == t.m_readedPKey
                      ? "#pkReadKMBlock"
                      : "#pkWriteKMBlock"
                    : null == t.m_readedPKey
                    ? "#pkReadFileBlock"
                    : "#pkWriteFileBlock";
            }
            t.ShowForm(a, !1);
            var s = t.GetCurrentLibrary();
            if (null == s.GetInfo())
              return (
                t.ShowDimmerView(p(o.PROCESS_STATUS_LOAD_LIBRARY)),
                void t.LoadLibrary(e)
              );
            if ((t.CloseDimmerView(), !s.IsSupported()))
              return (
                t.HideForm("#pkBlock"),
                void t.SetError(p(o.ERROR_LIBRARY_NOT_SUPPORTED))
              );
            if (!s.IsLoaded()) {
              if (s.GetType() != i.EndUserConstants.EU_LIBRARY_TYPE_SW)
                return (
                  t.HideForm("#pkBlock"),
                  void t.SetError(p(o.ERROR_LIBRARY_NOT_LOADED))
                );
              var u = s.GetInfo();
              $("#installLabel").text(
                u.isNativeLibraryNeedUpdate
                  ? p(o.TEXT_LIBRARY_NEED_UPDATE)
                  : p(o.TEXT_LIBRARY_NEED_INSTALL)
              );
              var l = u.isNativeLibraryNeedUpdate
                  ? p(o.TEXT_LIBRARY_UPDATE)
                  : p(o.TEXT_LIBRARY_INSTALL),
                c = u.nativeLibraryInstallURL;
              return (
                !u.isWebExtensionSupported ||
                  u.isWebExtensionInstalled ||
                  u.isNativeLibraryNeedUpdate ||
                  ((l = p(o.TEXT_LIBRARY_WEB_EXTENSION_INSTALL)),
                  (c = u.webExtensionInstallURL)),
                $("#installURL").text(l),
                $("#installURL").attr("href", c),
                $("#installHelpURL").text(p(o.TEXT_LIBRARY_USER_MANUAL)),
                $("#installHelpURL").attr("href", u.helpURL),
                t.ShowForm("#installBlock", !1),
                void setTimeout(function () {
                  t.LoadLibrary(e);
                }, 500)
              );
            }
            var f = { isInitialized: !1 };
            s.GetLibrary()
              .IsInitialized()
              .then(function (e) {
                return (
                  (f.isInitialized = e),
                  f.isInitialized
                    ? null
                    : (t.ShowDimmerView(p(o.PROCESS_STATUS_INITIALIZE_LIBRARY)),
                      s.GetLibrary().Initialize(LIBRARY_SETTINGS))
                );
              })
              .then(function () {
                return f.isInitialized
                  ? null
                  : s.GetLibrary().SetRuntimeParameter("StringEncoding", 65001);
              })
              .then(function () {
                return s.GetLibrary().GetCAs();
              })
              .then(function (n) {
                t.SetCAs(n), t.CloseDimmerView(), t.BeginUpdateKMs(), e && e();
              })
              .catch(function (e) {
                t.CloseDimmerView(),
                  t.HideForm("#pkTypesBlock"),
                  t.HideForm("#pkBlock"),
                  t.SetError(p(o.ERROR_LIBRARY_INITIALIZE), e);
              });
          }),
          (e.prototype.OnSelectCA = function () {
            var e = this.GetSelectedCA(),
              t =
                this.m_keyMediaType == b.Hardware
                  ? $("#pkReadKMCertsBlock")
                  : $("#pkReadFileCertsBlock");
            !e || e.cmpAddress || e.certsInKey ? t.hide() : t.show();
          }),
          (e.prototype.OnSelectPKeyFile = function (e) {
            var t = this,
              n = e && 1 == e.length,
              r = n ? e[0].name : "",
              i = t.GetFileExtension(r);
            if (
              ($("#pkReadFilePasswordTextField").prop("disabled", !n),
              $("#pkReadFileButton").attr("disabled", !n),
              $("#pkReadFileSelectCertsDropZone").prop("disabled", !n),
              $("#pkReadFileSelectCertsChangeButton").attr("disabled", !n),
              $("#pkReadFileButton").attr("disabled", !n),
              n
                ? ($("#pkReadFileSelectFileCenterBlock").hide(),
                  $("#pkReadFileSelectFileSelectedCenterBlock").show())
                : ($("#pkReadFilePasswordTextField").val(""),
                  $("#pkReadFilePasswordTextField").change(),
                  $("#pkReadFileSelectFileCenterBlock").show(),
                  $("#pkReadFileSelectFileSelectedCenterBlock").hide(),
                  $("#pkReadFileCertsBlock").hide(),
                  $("#pkReadFileCertsInput").val(""),
                  $("#pkReadFileSelectCertsCenterBlock").show(),
                  $("#pkReadFileSelectCertsSelectedList").empty(),
                  $("#pkReadFileSelectCertsSelectedCenterBlock").hide()),
              $("#pkReadFileSelectFileTextField").text(r),
              $("#pkReadFileSelectFileTextField").change(),
              n && "jks" == i)
            ) {
              var a = $("#pkReadFileAliasSelect");
              a.empty(),
                t
                  .ReadFile(e[0])
                  .then(function (e) {
                    return t
                      .GetCurrentLibrary()
                      .GetLibrary()
                      .GetJKSPrivateKeys(e.data);
                  })
                  .then(function (e) {
                    0 != e.length &&
                      ($.each(e, function (n, r) {
                        var i = t.FilterUserCertificates(e[n].certificates);
                        a.append(
                          $("<option/>", {
                            value: e[n].alias,
                            text: e[n].alias + "(" + i[0].infoEx.subjCN + ")",
                          })
                        );
                      }),
                      a.prop("disabled", !1),
                      $("#pkReadFileSelectAliasBlock").show());
                  })
                  .catch(function (e) {
                    t.SetError(p(o.ERROR_GET_JKS_PRIVATE_KEY_INFO), e);
                  });
            } else
              $("#pkReadFileSelectAliasBlock").hide(),
                $("#pkReadFileAliasSelect").empty();
          }),
          (e.prototype.OnKMSelectChange = function () {
            var e = this.GetSelectedKM(),
              t = this.GetKMUserTextField(),
              n = this.GetKMUserBlock();
            null != e && this.IsKMMultiKeyDevice(e)
              ? (n.show(), t.prop("disabled", !1))
              : (t.val(""), n.hide());
          }),
          (e.prototype.OnSelectPKeyCertificates = function (e, t, n, r) {
            if (($(n).empty(), r && r.length > 0)) {
              $(e).hide(), $(t).show();
              for (var i = 0; i < r.length; i++)
                $(n).append("<li>" + r[i].name + "</li>");
            } else $(e).show(), $(t).hide();
          }),
          (e.prototype.OnSelectTechnicalCertRequest = function (e, t) {
            var n = "";
            t && t.length > 0 && (n = t[0].name), $(e).val(n);
          }),
          (e.prototype.OnReadKSPSelectChange = function () {
            var e = this.GetSelectedKSPSettigs(),
              t = parseInt($("#pkReadKSPSelect").find(":selected").val()),
              n =
                t != i.EndUserConstants.EndUserKSP.IIT ||
                (void 0 !== e.clientIdType &&
                  e.clientIdType !=
                    i.EndUserConstants.EndUserKSPClientIdType.Default)
                  ? "none"
                  : "uppercase";
            $("#pkReadKSPUserIdTextField").css("text-transform", n);
            var r = !0;
            switch (t) {
              case i.EndUserConstants.EndUserKSP.PB:
                r = !e.confirmationURL;
                break;
              case i.EndUserConstants.EndUserKSP.DIIA:
                r = !1;
                break;
              default:
                r = !0;
            }
            r
              ? $("#pkReadKSPUserIdBlock").show()
              : $("#pkReadKSPUserIdBlock").hide(),
              $("#pkReadKSPUserIdTextField").val(r ? "" : this.MakeUserId()),
              $("#pkReadKSPUserIdTextField").change(),
              this.OnReadKSPUserIdTextFieldChange();
          }),
          (e.prototype.OnReadKSPUserIdTextFieldChange = function () {
            var e = "" == $("#pkReadKSPUserIdTextField").val();
            $("#pkReadKSPButton").attr("disabled", e);
          }),
          (e.prototype.OnWriteFileTextFieldChange = function () {
            var e = "" == $("#pkWriteFileTextField").val();
            $("#pkWriteFilePasswordTextField").prop("disabled", e),
              $("#pkWriteFilePasswordConfirmTextField").prop("disabled", e),
              $("#pkWriteFileButton").attr("disabled", e),
              e &&
                ($("#pkWriteFilePasswordTextField").val(""),
                $("#pkWriteFilePasswordTextField").change(),
                $("#pkWriteFilePasswordConfirmTextField").val(""),
                $("#pkWriteFilePasswordConfirmTextField").change());
          }),
          (e.prototype.OnChangeSignFile = function () {
            var e = parseInt(
                $("input[type='radio'][name=signTypesRadio]:checked").val()
              ),
              t = parseInt($("#signTypeCAdESSelect").val()),
              n = $("#signFilesInput").prop("files"),
              r = this.GetFilesSize(n);
            if (n.length >= 1) {
              if ((this.SetError(null), r <= 0))
                return void this.SetError(p(o.ERROR_FILE_EMPTY));
              if (
                (e != v.CAdES || (e == v.CAdES && t != U.Detached)) &&
                r >= MAX_FILE_SIZE
              )
                return void this.SetError(p(o.ERROR_FILE_TO_BIG));
              if (n.length > 1 && e != v.ASiCE)
                return void this.SetError(
                  p(o.ERROR_SIGN_MULTIPLE_FILES_NOT_SUPPORTED)
                );
            }
          }),
          (e.prototype.OnChangeSignType = function () {
            var e = parseInt(
              $("input[type='radio'][name=signTypesRadio]:checked").val()
            );
            e == v.ASiCS || e == v.ASiCE
              ? $("#signTypeASiCBlock").show()
              : $("#signTypeASiCBlock").hide(),
              e == v.CAdES
                ? $("#signTypeCAdESBlock").show()
                : $("#signTypeCAdESBlock").hide(),
              e == v.XAdES
                ? $("#signTypeXAdESBlock").show()
                : $("#signTypeXAdESBlock").hide(),
              this.OnChangeASiCType(),
              this.OnChangeSignFile();
          }),
          (e.prototype.OnChangeASiCType = function () {
            var e = parseInt($("#signTypeASiCSelect").val()),
              t = parseInt(
                $("input[type='radio'][name=signTypesRadio]:checked").val()
              );
            t == v.PAdES
              ? ($("#signFormatPAdESBlock").show(),
                $("#signFormatCAdESBlock").hide(),
                $("#signFormatXAdESBlock").hide())
              : t == v.CAdES ||
                ((t == v.ASiCS || t == v.ASiCE) &&
                  e == i.EndUserConstants.EndUserASiCSignType.CAdES)
              ? ($("#signFormatCAdESBlock").show(),
                $("#signFormatXAdESBlock").hide(),
                $("#signFormatPAdESBlock").hide())
              : ($("#signFormatCAdESBlock").hide(),
                $("#signFormatXAdESBlock").show(),
                $("#signFormatPAdESBlock").hide());
          }),
          (e.prototype.OnSelectSignFile = function (e) {
            var t = e && e.length >= 1;
            this.SetError(null), $("#signFilesSelectedList").empty();
            for (var n = 0; n < e.length; n++)
              $("#signFilesSelectedList").append("<li>" + e[n].name + "</li>");
            t
              ? ($("#signFilesSelectBlock").hide(),
                $("#signFilesSelectedBlock").show())
              : ($("#signFilesSelectBlock").show(),
                $("#signFilesSelectedBlock").hide()),
              this.OnChangeSignFile(),
              $("#signButton").attr("disabled", !t);
          }),
          (e.prototype.OnSetProxy = function () {
            var e = this;
            e.GetCurrentLibrary()
              .GetLibrary()
              .GetProxySettings()
              .then(function (t) {
                $("#proxyUseCheckbox").prop("checked", t.useProxy),
                  $("#proxyAddressTextField").val(t.address),
                  $("#proxyAddressTextField").change(),
                  $("#proxyPortTextField").val(t.port),
                  $("#proxyPortTextField").change(),
                  $("#proxyAuthCheckbox").prop("checked", !t.anonymous),
                  $("#proxyUserTextField").val(t.user),
                  $("#proxyUserTextField").change(),
                  $("#proxyPasswordTextField").val(t.password),
                  $("#proxyPasswordTextField").change(),
                  e.ShowForm("#proxySettingsBlock", !1),
                  e.OnUseProxy();
              })
              .catch(function (t) {
                e.SetError(p(o.ERROR_GET_PROXY_SETTINGS), t);
              });
          }),
          (e.prototype.OnUseProxy = function () {
            var e = $("#proxyUseCheckbox").prop("checked");
            $("#proxyAddressTextField").prop("disabled", !e),
              $("#proxyPortTextField").prop("disabled", !e),
              $("#proxyAuthCheckbox").prop("disabled", !e),
              this.OnAuthProxy();
          }),
          (e.prototype.OnAuthProxy = function () {
            var e =
              $("#proxyAuthCheckbox").prop("checked") &&
              !$("#proxyAuthCheckbox").prop("disabled");
            $("#proxyUserTextField").prop("disabled", !e),
              $("#proxyPasswordTextField").prop("disabled", !e);
          }),
          (e.prototype.OnSaveProxy = function () {
            var e = this,
              t = e.GetProxySettings();
            null != t &&
              (e.SetError(""),
              e.ShowDimmerView(p(o.PROCESS_STATUS_SAVE_PROXY_SETTINGS)),
              e
                .GetCurrentLibrary()
                .GetLibrary()
                .SetProxySettings(t)
                .then(function () {
                  e.OnHideProxy(), e.CloseDimmerView();
                })
                .catch(function (t) {
                  e.CloseDimmerView(),
                    e.SetError(p(o.ERROR_SET_PROXY_SETTINGS), t);
                }));
          }),
          (e.prototype.OnHideProxy = function () {
            this.OnChangeLibraryType();
          }),
          (e.prototype.OnResetPKey = function () {
            var e = this,
              t = e.GetCurrentLibrary();
            (e.m_readedPKey = null),
              t
                .GetLibrary()
                .ResetPrivateKey()
                .then(function () {
                  "#pkTypeDIIAUAMenuItem" == e.GetPreSelectMenuId() ||
                  "#pkTypeDIIAEUMenuItem" == e.GetPreSelectMenuId()
                    ? e.OnReadPKeyCancel()
                    : e.OnChangeLibraryType();
                })
                .catch(function () {
                  "#pkTypeDIIAUAMenuItem" == e.GetPreSelectMenuId() ||
                  "#pkTypeDIIAEUMenuItem" == e.GetPreSelectMenuId()
                    ? e.OnReadPKeyCancel()
                    : e.OnChangeLibraryType();
                });
          }),
          (e.prototype.OnReadPKey = function (e) {
            var t = this,
              n = t.GetCurrentLibrary();
            if ((t.SetError(""), t.m_isPKActionDone || null != t.m_readedPKey))
              t.OnResetPKey();
            else {
              var r = e ? $("#pkReadFileAliasSelect") : null,
                s = e
                  ? $("#pkReadFilePasswordTextField")
                  : $("#pkReadKMPasswordTextField"),
                u = e ? null : $("#pkReadKMUserTextField"),
                l = e ? $("#pkReadFileCertsInput") : $("#pkReadKMCertsInput"),
                c = e ? $("#pkReadFileCertsBlock") : $("#pkReadKMCertsBlock"),
                f = e ? null : t.GetSelectedKM(),
                _ = e ? $("#pkReadFileInput").prop("files")[0] : null,
                E = e && "jks" == t.GetFileExtension(_.name),
                h = E ? r.val() : null,
                d = new Array(),
                S = s.val(),
                y = t.GetSelectedCA(),
                C = null != y ? y.issuerCNs[0] : null;
              if (u && u.is(":visible") && "" == u.val())
                return u.focus(), void t.SetError(p(o.ERROR_USER_NOT_SET));
              if ("" == S)
                return s.focus(), void t.SetError(p(o.ERROR_PASSWORD_NOT_SET));
              if (c.is(":visible") && 0 == (d = l.prop("files")).length)
                t.SetError(p(o.ERROR_CERTIFICATES_NOT_SELECTED));
              else {
                t.ShowDimmerView(p(o.PROCESS_STATUS_READ_PRIVATE_KEY)),
                  t.StopUpdateKMs();
                var T = new k();
                (T.keyMedia = f),
                  (T.alias = h),
                  (T.password = S),
                  t
                    .ReadFiles(d)
                    .then(function (e) {
                      var n = Array();
                      if (e)
                        for (var r = 0; r < e.length; r++) n.push(e[r].data);
                      return (T.certificates = n), _ ? t.ReadFile(_) : null;
                    })
                    .then(function (e) {
                      return (
                        (T.file = e),
                        E ? n.GetLibrary().GetJKSPrivateKeys(e.data) : null
                      );
                    })
                    .then(function (r) {
                      var i = e ? T.file.data : null;
                      if (E && e && 0 != r.length)
                        for (var o = 0; o < r.length; o++)
                          if (r[o].alias == h) {
                            i = r[o].privateKey;
                            for (
                              var a = t.FilterUserCertificates(
                                  r[o].certificates
                                ),
                                s = 0;
                              s < a.length;
                              s++
                            )
                              T.certificates.push(a[s].data);
                            break;
                          }
                      return e
                        ? n
                            .GetLibrary()
                            .ReadPrivateKeyBinary(
                              i,
                              T.password,
                              T.certificates,
                              C
                            )
                        : n
                            .GetLibrary()
                            .ReadPrivateKey(T.keyMedia, T.certificates, C);
                    })
                    .then(function (e) {
                      return (
                        t.SetSelectedCA(e.issuerCN),
                        n.GetLibrary().GetOwnCertificates()
                      );
                    })
                    .then(function (e) {
                      t.IsQualifiedCertificates(e) ||
                      LIBRARY_SETTINGS.supportAdvancedCertificates
                        ? ((T.certificatesInfo = e),
                          t.SetViewPKeyInfo(T),
                          t.CloseDimmerView())
                        : n
                            .GetLibrary()
                            .ResetPrivateKey()
                            .then(function () {
                              t.BeginUpdateKMs(), t.CloseDimmerView();
                              var n = a.format(
                                p(o.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED),
                                e[0].infoEx.issuerCN
                              );
                              t.SetError(n);
                            })
                            .catch(function (e) {
                              throw e;
                            });
                    })
                    .catch(function (n) {
                      var r = p(o.ERROR_READ_PRIVATE_KEY);
                      if (n.code == i.EndUserError.EU_ERROR_CERT_NOT_FOUND) {
                        var s = e
                          ? "#pkReadFileCertsBlock"
                          : "#pkReadKMCertsBlock";
                        t.m_formType == I.MakeNewCertificate
                          ? ((r = p(o.ERROR_MAKE_NEW_CERTIFICATE)),
                            (n = a.format(
                              p(o.ERROR_MAKE_NEW_CERTIFICATE_INVALID_CA),
                              C
                            )))
                          : ((n =
                              null == y
                                ? p(o.ERROR_READ_PRIVATE_KEY_CA_AUTO_DETECT)
                                : a.format(
                                    y.cmpAddress
                                      ? p(o.ERROR_READ_PRIVATE_KEY_INVALID_CA)
                                      : p(
                                          o.ERROR_READ_PRIVATE_NEED_CERTIFICATE
                                        ),
                                    C
                                  )),
                            null == y || y.cmpAddress || $(s).show());
                      }
                      t.BeginUpdateKMs(), t.CloseDimmerView(), t.SetError(r, n);
                    });
              }
            }
          }),
          (e.prototype.OnReadPKeyKSP = function () {
            var e = this,
              t = e.GetCurrentLibrary();
            if ((e.SetError(""), e.m_isPKActionDone || null != e.m_readedPKey))
              e.OnResetPKey();
            else {
              var n = 0,
                r = null,
                s = null,
                u = 0;
              switch (e.m_keyMediaType) {
                case b.KSP:
                  if (
                    ((n = parseInt(
                      $("#pkReadKSPSelect").find(":selected").val()
                    )),
                    (r = $("#pkReadKSPSelect").find(":selected").text()),
                    !(s = $("#pkReadKSPUserIdTextField").val()))
                  )
                    return (
                      $("#pkReadKSPUserIdTextField").focus(),
                      void e.SetError(p(o.ERROR_USER_ID_NOT_SET_OR_INVALID))
                    );
                  break;
                case b.DIIA_UA:
                case b.DIIA_EU:
                  (n = i.EndUserConstants.EndUserKSP.DIIA),
                    (r = LIBRARY_SETTINGS.KSPs.filter(function (e) {
                      return e.ksp == i.EndUserConstants.EU_KSP_DIIA;
                    })[0].name),
                    (s = ""),
                    (u =
                      e.m_keyMediaType == b.DIIA_UA
                        ? i.EndUserConstants.EndUserSignAlgo
                            .DSTU4145WithGOST34311
                        : i.EndUserConstants.EndUserSignAlgo.ECDSAWithSHA);
                  break;
                default:
                  return;
              }
              e.ShowDimmerView(p(o.PROCESS_STATUS_READ_PRIVATE_KEY)),
                e.StopUpdateKMs();
              var l = new k();
              (l.keyMedia = null),
                (l.password = null),
                (l.kspKey = new D(n, r, s, u)),
                t
                  .GetLibrary()
                  .ReadPrivateKeyKSP(
                    l.kspKey.userId,
                    l.kspKey.GetKSPId(),
                    !0,
                    l.kspKey.keyId
                  )
                  .then(function (e) {
                    return null != e ||
                      confirm(p(o.CONFIRM_CONTINUE_WITHOUT_PKEY_READED))
                      ? t.GetLibrary().GetOwnCertificates()
                      : null;
                  })
                  .then(function (n) {
                    if (!n)
                      return (
                        e.BeginUpdateKMs(), t.GetLibrary().ResetPrivateKey()
                      );
                    e.IsQualifiedCertificates(n) ||
                    LIBRARY_SETTINGS.supportAdvancedCertificates
                      ? ((l.certificatesInfo = n), e.SetViewPKeyInfo(l))
                      : t
                          .GetLibrary()
                          .ResetPrivateKey()
                          .then(function () {
                            e.BeginUpdateKMs(),
                              e.CloseDimmerView(),
                              e.StopOperationConfirmation();
                            var t = a.format(
                              p(o.ERROR_USE_ADVANCED_CERTS_UNSUPPORTED),
                              n[0].infoEx.issuerCN
                            );
                            e.SetError(t);
                          })
                          .catch(function (e) {
                            throw e;
                          });
                  })
                  .then(function () {
                    e.CloseDimmerView(), e.StopOperationConfirmation();
                  })
                  .catch(function (t) {
                    e.BeginUpdateKMs(),
                      e.CloseDimmerView(),
                      e.StopOperationConfirmation(),
                      e.SetError(p(o.ERROR_READ_PRIVATE_KEY), t);
                  });
            }
          }),
          (e.prototype.OnReadPKeyCancel = function () {
            this.ShowForm("#pkTypesPreSelectBlock", !1);
          }),
          (e.prototype.OnWritePKey = function (e) {
            var t = this,
              n = t.GetCurrentLibrary();
            if ((t.SetError(""), t.m_isPKActionDone)) t.OnResetPKey();
            else {
              var r = e ? null : $("#pkWriteKMUserTextField"),
                s = e
                  ? $("#pkWriteFilePasswordTextField")
                  : $("#pkWriteKMPasswordTextField"),
                u = e
                  ? $("#pkWriteFilePasswordConfirmTextField")
                  : $("#pkWriteKMPasswordConfirmTextField"),
                l = e ? $("#pkWriteFileTextField").val() : null,
                c = s.val(),
                f = u.val(),
                _ = null,
                E = t.GetSelectedCA(),
                h = null != E ? E.issuerCNs[0] : null,
                d = LIBRARY_SETTINGS.passwordRequirements
                  ? new RegExp(LIBRARY_SETTINGS.passwordRequirements, "g")
                  : null;
              if (
                (e ||
                  (t.m_noNewKMOnMakeNewCertificate &&
                  null != t.m_readedPKey.keyMedia
                    ? ((_ = new i.EndUserKeyMedia(
                        t.m_readedPKey.keyMedia
                      )).password = c)
                    : (_ = t.GetSelectedKM())),
                e && "" == l)
              )
                return (
                  $("#pkWriteFileTextField").focus(),
                  void t.SetError(p(o.ERROR_NEW_PK_FILE_NAME_NOT_SET))
                );
              if (r && r.is(":visible") && "" == r.val())
                return r.focus(), void t.SetError(p(o.ERROR_USER_NOT_SET));
              if ("" == c)
                return (
                  $(s).focus(), void t.SetError(p(o.ERROR_NEW_PASSWORD_NOT_SET))
                );
              if ("" == f)
                return (
                  $(u).focus(),
                  void t.SetError(p(o.ERROR_CONFIRM_NEW_PASSWORD_NOT_SET))
                );
              if (c != f)
                return (
                  $(u).focus(),
                  void t.SetError(p(o.ERROR_NEW_PASSWORD_AND_CONFIRM_NOT_EQUAL))
                );
              var S = null != t.m_readedPKey.keyMedia,
                y = t.m_keyMediaType == b.Hardware,
                C = S
                  ? t.m_readedPKey.keyMedia.password
                  : t.m_readedPKey.password;
              !d || (c != C && d.test(c))
                ? (t.ShowDimmerView(p(o.PROCESS_STATUS_MAKE_NEW_CERTIFICATE)),
                  t.StopUpdateKMs(),
                  (S || y) &&
                    (n =
                      this.m_libraries[i.EndUserConstants.EU_LIBRARY_TYPE_SW]),
                  n
                    .GetLibrary()
                    .IsInitialized()
                    .then(function () {
                      return t.m_euParams && t.m_noNewKMOnMakeNewCertificate
                        ? n.GetLibrary().GetOwnEUserParams()
                        : null;
                    })
                    .then(function (e) {
                      return (
                        e
                          ? ((e.EMail = t.m_euParams.EMail),
                            (e.phone = t.m_euParams.phone))
                          : (e = t.m_euParams ? t.m_euParams : null),
                        n
                          .GetLibrary()
                          .MakeNewCertificate(
                            S ? t.m_readedPKey.keyMedia : null,
                            S ? null : t.m_readedPKey.file.data,
                            S ? null : t.m_readedPKey.password,
                            i.EndUserConstants.EndUserKeysType
                              .DSTUAndECDHWithGOST,
                            i.EndUserConstants.EU_KEYS_LENGTH_DS_UA_CERT,
                            !1,
                            i.EndUserConstants.EU_KEYS_LENGTH_KEP_UA_CERT,
                            null,
                            i.EndUserConstants.EU_KEYS_TYPE_NONE,
                            0,
                            null,
                            y ? _ : null,
                            y ? null : c,
                            h,
                            e,
                            t.m_noNewKMOnMakeNewCertificate && S
                          )
                      );
                    })
                    .then(function (e) {
                      null != e.key && t.SaveFile(l, e.key);
                      var n = p(o.STATUS_NEW_CERTIFICATE_MADE);
                      y ||
                        (n +=
                          ". " +
                          a.format(p(o.STATUS_RESULT_SAVED_TO_DOWNLOADS), l)),
                        (t.m_isPKActionDone = !0),
                        (t.m_readedPKey = null),
                        t.ShowForm("#resultBlock", !0),
                        t.SetStatus(n, !1),
                        t.SetPKMakeNewCertificatesResult(l, e.key, e.certs),
                        t.CloseDimmerView();
                    })
                    .catch(function (e) {
                      t.BeginUpdateKMs(),
                        t.SetError(p(o.ERROR_MAKE_NEW_CERTIFICATE), e),
                        t.CloseDimmerView();
                    }))
                : t.SetError(p(o.ERROR_NEW_PASSWORD_NOT_MATCH_REQUIREMENTS));
            }
          }),
          (e.prototype.OnMakeDeviceCert = function () {
            var e = this,
              t = e.GetCurrentLibrary();
            e.SetError("");
            var n = $("#makeTechnicalCertDeviceNameTextField").val(),
              r = $("#makeTechnicalCertEUFileInput").prop("files")[0],
              i = $("#makeTechnicalCertEUFileTextField").val(),
              a = $("#makeTechnicalCertEUKEPFileInput").prop("files")[0],
              s = $("#makeTechnicalCertEUKEPFileTextField").val();
            if ("" == n)
              return (
                $("#makeTechnicalCertDeviceNameTextField").focus(),
                void e.SetError(
                  p(o.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_NOT_SET)
                )
              );
            if (e.m_deviceCertParams && e.m_deviceCertParams.subjCN) {
              var u = e.m_deviceCertParams.subjCN,
                l = u.template,
                c = u.requirement;
              if ((l && (n = l.replace("%s", n)), c))
                if (
                  ((c = l ? l.replace("%s", c) : c),
                  !new RegExp(c, "g").test(n))
                )
                  return (
                    $("#makeTechnicalCertDeviceNameTextField").focus(),
                    void e.SetError(
                      p(o.ERROR_TECHNICAL_EU_CERTS_DEVICE_NAME_INVALID)
                    )
                  );
            }
            if ("" == i)
              return (
                $("#makeTechnicalCertEUFileTextField").focus(),
                void e.SetError(
                  p(o.ERROR_TECHNICAL_EU_CERTS_REQUEST_FILE_NOT_SET)
                )
              );
            if ("" == s)
              return (
                $("#makeTechnicalCertEUKEPFileInput").focus(),
                void e.SetError(
                  p(o.ERROR_TECHNICAL_EU_KEP_CERTS_REQUEST_FILE_NOT_SET)
                )
              );
            e.ShowDimmerView(p(o.PROCESS_STATUS_MAKE_TECHNICAL_CERTS));
            var f = { euRequest: null, euKEPRequest: null };
            e.ReadFile(r)
              .then(function (t) {
                return (f.euRequest = t.data), e.ReadFile(a);
              })
              .then(function (e) {
                return (
                  (f.euKEPRequest = e.data),
                  t
                    .GetLibrary()
                    .MakeDeviceCertificate(
                      n,
                      f.euRequest,
                      f.euKEPRequest,
                      null,
                      null
                    )
                );
              })
              .then(function (t) {
                e.SetMakeDeviceCertificateResult(t),
                  e.ShowForm("#resultBlock", !0),
                  e.CloseDimmerView(),
                  e.StopOperationConfirmation(),
                  (e.m_isPKActionDone = !0);
              })
              .catch(function (t) {
                e.CloseDimmerView(),
                  e.StopOperationConfirmation(),
                  e.SetError(p(o.ERROR_MAKE_TECHNICAL_CERTS), t);
              });
          }),
          (e.prototype.OnMakeDeviceCertCancel = function () {
            this.m_showPKInfo && this.m_readedPKey.certificatesInfo.length > 0
              ? this.ShowForm("#pkInfoBlock", !1)
              : this.OnResetPKey();
          }),
          //!!!!
          (e.prototype.makeFileDownloadHTML = function (e, t, n, r) {
            return (
              '<div id="' +
              e +
              '" class="Block ColorBorder"><div class="FileIcon"></div><div class="FileContent"><h2>' +
              t +
              '</h2><label class="TextSmall TextLight">' +
              n +
              '</label><label  class="TextSmall TextLight">' +
              r +
              '</label></div><div class="DownloadIcon"></div></div>'
            );
          }),
          (e.prototype.getFileExtension = function (e) {
            var t = e.lastIndexOf(".");
            return t <= 0 ? "" : e.substr(t + 1, e.length - 1);
          }),
          (e.prototype.removeFileExtension = function (e) {
            var t = e.lastIndexOf(".");
            return t <= 0 ? e : e.substr(0, t);
          }),
          (e.prototype.makeSignReportData = function (e) {
            for (
              var t = new Date(),
                n = p(
                  "Підпис створено та перевірено успішно. Цілісність даних підтверджено"
                ),
                r = e.signFile.name,
                i = y.formatFileSize(e.signFile.size),
                o = this.makeFileDownloadHTML(
                  "saveSignFileButton",
                  p("Файл з підписом"),
                  r,
                  i
                ),
                a = [],
                s = 0;
              s < e.files.length;
              s++
            )
              a.push({
                fileName: e.files[s].name,
                fileSize: y.formatFileSize(e.files[s].size),
              });
            var u =
                1 == e.files.length
                  ? e.files[0].name
                  : this.removeFileExtension(e.signFile.name) + ".zip",
              l = y.formatFileSize(this.GetFilesSize(e.files)),
              c = this.makeFileDownloadHTML(
                "saveDataFileButton",
                p("Файл(и) без підпису"),
                u,
                l
              ),
              f = this.removeFileExtension(u) + "_Validation_Report.pdf",
              _ = this.makeFileDownloadHTML(
                "saveReportFileButton",
                p(
                  "Протокол створення та перевірки кваліфікованого електронного підпису від "
                ) + y.formatDate(t, "dd.MM.yyyy"),
                f,
                "__validation__report__size__"
              ),
              E = r + ".zip",
              h = [],
              d = e.signsInfos,
              S = 1,
              C = 1,
              T = !(1 == d.length && 1 == d[0].length),
              m = { id: "none", value: null },
              A = { id: "none", value: null };
            for (s = 0; s < d.length; s++)
              for (var g = 0; g < d[s].length; g++) {
                var P,
                  I,
                  v,
                  U,
                  b = d[s][g],
                  O = b.signTimeInfo,
                  D = b.signerInfo,
                  k = b.isDigitalStamp
                    ? p("Електронна печатка")
                    : p("Підписувач");
                T && (k += " - " + (b.isDigitalStamp ? C : S)),
                  (D.subjCN = { title: k, value: D.subjCN }),
                  (D.subjCountry = R.getCountryName(
                    LIBRARY_LANGUAGE,
                    D.subjCountry
                  )),
                  O.isTimeAvail || O.isSignTimeStampAvail
                    ? O.isSignTimeStampAvail
                      ? ((P = "signTimeStamp"), (I = O.signTimeStamp))
                      : ((P = O.isTimeStamp ? "timeStamp" : "time"),
                        (I = O.time))
                    : ((P = "none"), (I = p("Відсутній"))),
                  (D.timeInfo = { id: P, value: I }),
                  (O.isTimeAvail && O.isTimeStamp) ||
                    O.isSignTimeStampAvail ||
                    (m = { id: "noTSP", value: null }),
                  (D.isPowerCert = D.isPowerCert || this.IsCAQC(D.issuerCN)),
                  (D.isQSCD = D.isQSCD || this.IsCAQC(D.issuerCN)),
                  (D.qscdName = b.qscd.name),
                  (D.qscdSN = b.qscd.sn),
                  (D.signAlgo = b.signAlgo),
                  (D.signContainerType = b.signContainerType),
                  (D.signFormat = b.signFormat),
                  (D.signType =
                    D.isPowerCert && b.qscd.use
                      ? p("Кваліфікований")
                      : p("Удосконалений")),
                  (v = D.isPowerCert
                    ? "qualified"
                    : LIBRARY_SETTINGS.supportAdvancedCertificates
                    ? "advanced"
                    : "advancedWarning"),
                  (U = D.isPowerCert
                    ? p("Кваліфікований")
                    : p("Удосконалений")),
                  (D.certType = { id: v, value: U }),
                  D.isPowerCert ||
                    LIBRARY_SETTINGS.supportAdvancedCertificates ||
                    (A = { id: "advanced", value: null }),
                  b.isDigitalStamp ? C++ : S++,
                  h.push({ signerInfo: D });
              }
            return {
              report: {
                createTime: t,
                fileName: f,
                zipFileName: E,
                signFileName: r,
                signFileSize: i,
                dataFilesName: u,
                dataFiles: a,
                signInfo: {
                  signResult: n,
                  signerInfos: h,
                  noTSPWarning: m,
                  advancedWarning: A,
                },
                saveDataFileButton: c,
                saveSignFileButton: o,
                saveReportFileButton: _,
                libraryVersion: LIBRARY_VERSION,
              },
            };
          }),
          (e.prototype.MakeURL = function (e) {
            var t = location.origin,
              n = location.pathname;
            return 0 == e.indexOf("http://") || 0 == e.indexOf("https://")
              ? e
              : 0 == e.indexOf("/") && t
              ? t + e
              : t && n
              ? t + n.substr(0, n.lastIndexOf("/")) + "/" + e
              : e;
          }),
          (e.prototype.DownloadData = function (e, t) {
            var n = this;
            return new Promise(function (r, i) {
              try {
                var a = new XMLHttpRequest();
                (a.onload = function () {
                  if (4 == a.readyState) {
                    var n = null;
                    try {
                      if (200 != a.status)
                        throw (
                          "Download data error. URL - " +
                          e +
                          ", status - " +
                          a.status
                        );
                      switch (t) {
                        case "binary":
                          n = new Uint8Array(a.response);
                          break;
                        case "json":
                          n = JSON.parse(a.responseText.replace(/\\'/g, "'"));
                          break;
                        default:
                          n = a.responseText;
                      }
                    } catch (e) {
                      return (
                        console.log("DowloadData error: " + e),
                        void i(p(o.ERROR_DOWNLOAD_DATA))
                      );
                    }
                    r(n);
                  }
                }),
                  (a.onerror = function () {
                    i(p(o.ERROR_DOWNLOAD_DATA));
                  }),
                  (e = n.MakeURL(e)),
                  a.open("GET", e, !0),
                  "binary" == t && (a.responseType = "arraybuffer"),
                  a.send();
              } catch (e) {
                i(p(o.ERROR_DOWNLOAD_DATA));
              }
            });
          }),
          (e.prototype.makeZip = function (e, t) {
            return new Promise(function (n, r) {
              for (var i = new JSZip(), s = 0; s < t.length; s++)
                i.file(t[s].name, t[s].data);
              i.generateAsync({
                type: "uint8array",
                compression: "DEFLATE",
                compressionOptions: { level: 9 },
              })
                .then(function (t) {
                  n(new O(e, t));
                })
                .catch(function (t) {
                  r(p(a.format(o.ERROR_SAVE_FILE, e)));
                });
            });
          }),
          (e.prototype.OnShowSignFileForm = function (e) {
            $("#preSignShowParamsCheckbox").prop("checked", e),
              this.SetError(""),
              this.ShowForm("#signBlock", !1);
          }),
          (e.prototype.OnSignFile = function () {
            var e = this,
              t = e.GetCurrentLibrary();
            e.SetError("");
            var n = parseInt(
                $("input[type='radio'][name=signTypesRadio]:checked").val()
              ),
              r = parseInt($("#signAlgoSelect").val()),
              a = parseInt($("#signTypeCAdESSelect").val()),
              s = parseInt($("#signFormatCAdESSelect").val()),
              u = parseInt($("#signFormatXAdESSelect").val()),
              l = parseInt($("#signFormatPAdESSelect").val()),
              c = e.SignAlgoToHashAlgo(r),
              f = n == v.ASiCS || n == v.ASiCE,
              _ = n == v.PAdES,
              E = n == v.XAdES,
              h = parseInt($("#signTypeXAdESSelect").val()),
              d = f
                ? n == v.ASiCS
                  ? i.EndUserConstants.EndUserASiCType.S
                  : i.EndUserConstants.EndUserASiCType.E
                : i.EndUserConstants.EndUserASiCType.Unknown,
              S = parseInt($("#signTypeASiCSelect").val()),
              y = S == i.EndUserConstants.EndUserASiCSignType.CAdES ? s : u,
              C = n == v.CAdES && a == U.Detached,
              T = $("#signFilesInput").prop("files"),
              R = T.length >= 1 ? T[0].name : "",
              m = R + e.GetSignFileExt(R, n),
              A = e.GetFilesSize(T),
              g = e.GetFileExtension(R).toLowerCase(),
              P =
                (new JSZip(),
                {
                  filesData: null,
                  namedData: null,
                  hash: null,
                  sign: null,
                  signsInfo: null,
                  signersInfo: null,
                  signContainerInfo: null,
                });
            if ("" != R)
              if ("" != m)
                if (T.length > 1 && n != v.ASiCE)
                  e.SetError(p(o.ERROR_SIGN_MULTIPLE_FILES_NOT_SUPPORTED));
                else if (
                  (n != v.CAdES || (n == v.CAdES && a != U.Detached)) &&
                  A >= MAX_FILE_SIZE
                )
                  e.SetError(p(o.ERROR_FILE_TO_BIG));
                else if (A <= 0) e.SetError(p(o.ERROR_FILE_EMPTY));
                else {
                  switch (n) {
                    case v.PAdES:
                      if ("pdf" != g)
                        return void e.SetError(p(o.ERROR_FILE_NOT_PDF));
                      break;
                    case v.XAdES:
                      if (
                        h == i.EndUserConstants.EndUserXAdESType.Enveloped &&
                        "xml" != g
                      )
                        return void e.SetError(p(o.ERROR_FILE_NOT_XML));
                  }
                  e.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_FILE)),
                    t
                      .GetLibrary()
                      .SetRuntimeParameter(
                        i.EndUserConstants.EU_SIGN_TYPE_PARAMETER,
                        s
                      )
                      .then(function () {
                        return e.ReadFiles(T);
                      })
                      .then(function (e) {
                        return (
                          (P.filesData = e),
                          C ? t.GetLibrary().HashData(c, e[0].data, !1) : null
                        );
                      })
                      .then(function (e) {
                        return (
                          (P.hash = e),
                          1 == P.filesData.length && f
                            ? t
                                .GetLibrary()
                                .GetSignContainerInfo(P.filesData[0].data)
                            : null
                        );
                      })
                      .then(function (e) {
                        P.signContainerInfo =
                          null != e &&
                          e.type !=
                            i.EndUserConstants.EndUserSignContainerType.Unknown
                            ? e
                            : null;
                        var n = !1;
                        null != e &&
                          (n =
                            e.type ==
                              i.EndUserConstants.EndUserSignContainerType
                                .ASiC &&
                            e.subType == d &&
                            e.asicSignType == S),
                          (P.namedData = []),
                          P.filesData.forEach(function (e) {
                            P.namedData.push({ name: e.name, val: e.data });
                          });
                        var o = C
                          ? { name: P.namedData[0].name, val: P.hash }
                          : null;
                        return f
                          ? n
                            ? t
                                .GetLibrary()
                                .ASiCAppendSign(r, y, null, P.namedData[0], !1)
                            : t
                                .GetLibrary()
                                .ASiCSignData(r, d, S, y, P.namedData, !1)
                          : _
                          ? t.GetLibrary().PDFSignData(r, P.namedData[0], l, !1)
                          : E
                          ? t
                              .GetLibrary()
                              .XAdESSignData(r, h, u, P.namedData, !1)
                          : C
                          ? t.GetLibrary().SignHash(r, o, !0, !1)
                          : t
                              .GetLibrary()
                              .SignDataEx(r, P.namedData[0], !1, !0, !1);
                      })
                      .then(function (e) {
                        return (
                          (P.sign = e.val),
                          f
                            ? t.GetLibrary().ASiCVerifyData(P.sign, -1)
                            : _
                            ? t.GetLibrary().PDFVerifyData(P.sign, -1)
                            : E
                            ? t
                                .GetLibrary()
                                .XAdESVerifyData(P.namedData, P.sign, -1)
                            : C
                            ? t.GetLibrary().VerifyHash(P.hash, P.sign, -1)
                            : t.GetLibrary().VerifyDataInternal(P.sign, -1)
                        );
                      })
                      .then(function (e) {
                        return (
                          (P.signsInfo = e),
                          f
                            ? t.GetLibrary().ASiCGetSigner(P.sign, -1, !0)
                            : _
                            ? t.GetLibrary().PDFGetSigner(P.sign, -1, !0)
                            : E
                            ? t.GetLibrary().XAdESGetSigner(P.sign, -1, !0)
                            : t.GetLibrary().GetSigner(P.sign, -1, !0)
                        );
                      })
                      .then(function (e) {
                        return (
                          (P.signersInfo = e),
                          null != P.signContainerInfo
                            ? P.signContainerInfo
                            : t.GetLibrary().GetSignContainerInfo(P.sign)
                        );
                      })
                      .then(function (e) {
                        return (P.signContainerInfo = e), P.sign;
                      })
                      .then(function (t) {
                        return (
                          (P.sign = t),
                          e.m_signInfoTmpl
                            ? e.m_signInfoTmpl
                            : e.DownloadData("Data/sign-info.tmpl.xml", "")
                        );
                      })
                      .then(function (t) {
                        (e.m_signInfoTmpl = t),
                          e.SetSignFileResult(
                            P.filesData,
                            P.sign,
                            m,
                            P.signsInfo,
                            P.signersInfo,
                            P.signContainerInfo.type,
                            P.signContainerInfo.subType,
                            P.signContainerInfo.asicSignType
                          ),
                          e.ShowForm("#resultBlock", !0),
                          e.CloseDimmerView(),
                          e.StopOperationConfirmation();
                      })
                      .catch(function (t) {
                        e.CloseDimmerView(),
                          e.StopOperationConfirmation(),
                          e.SetError(p(o.ERROR_SIGN_FILE), t);
                      });
                }
              else e.SetError(p(o.ERROR_FILE_TO_SIGN_RESULT_NOT_SET));
            else e.SetError(p(o.ERROR_FILE_TO_SIGN_NOT_SET));
          }),
          (e.prototype.OnSignFileCancel = function () {
            this.m_showPKInfo && this.m_readedPKey.certificatesInfo.length > 0
              ? this.ShowForm(
                  this.m_showSignTip ? "#preSignBlock" : "#pkInfoBlock",
                  !1
                )
              : this.OnResetPKey();
          }),
          (e.prototype.ShowDimmerView = function (e) {
            $("#dimmerViewMessageLabel").text(e), $("#dimmerViewBlock").show();
          }),
          (e.prototype.CloseDimmerView = function () {
            $("#dimmerViewBlock").hide();
          }),
          (e.prototype.LoadLibrary = function (e) {
            var t = this,
              n = t.GetCurrentLibrary();
            n.IsLoading() ||
              n
                .Load(function (e) {
                  t.OnEvent(e);
                })
                .then(function () {
                  n == t.GetCurrentLibrary() && t.OnChangeLibraryType(e);
                })
                .catch(function (e) {
                  n == t.GetCurrentLibrary() &&
                    (t.SetError(p(o.ERROR_LIBRARY_LOAD), e),
                    t.CloseDimmerView());
                });
          }),
          (e.prototype.AddEventListener = function (e) {
            var t = this;
            return new Promise(function (n, r) {
              (t.m_listeners[e] = function (e) {
                t.OnEvent(e);
              }),
                n();
            });
          }),
          (e.prototype.ResetPrivateKey = function () {
            var e = this;
            return new Promise(function (t, n) {
              e.OnResetPKey(), t();
            });
          }),
          (e.prototype.ReadPrivateKey = function () {
            var e = this;
            return new Promise(function (t, n) {
              var r = function () {
                e.m_readedPKey
                  ? t(e.m_readedPKey.certificatesInfo)
                  : ("#pkTypesPreSelectBlock" != e.GetVisibleFormId() &&
                      "#installBlock" != e.GetVisibleFormId() &&
                      "#proxySettingsBlock" != e.GetVisibleFormId() &&
                      "#pkReadFileBlock" != e.GetVisibleFormId() &&
                      "#pkReadKMBlock" != e.GetVisibleFormId() &&
                      "#pkReadKSPBlock" != e.GetVisibleFormId() &&
                      "#pkReadDIIABlock" != e.GetVisibleFormId() &&
                      "#pkInfoBlock" != e.GetVisibleFormId() &&
                      e.OnChangeLibraryType(),
                    setTimeout(function () {
                      r();
                    }, 500));
              };
              r();
            });
          }),
          (e.prototype.MakeNewCertificate = function (e) {
            void 0 === e && (e = null);
            var t = this;
            return (
              (t.m_euParams = e),
              new Promise(function (e, n) {
                var r = function () {
                  if (t.m_isPKActionDone) e();
                  else {
                    if (
                      null != t.m_readedPKey &&
                      "#installBlock" != t.GetVisibleFormId() &&
                      "#proxySettingsBlock" != t.GetVisibleFormId() &&
                      "#pkWriteFileBlock" != t.GetVisibleFormId() &&
                      "#pkWriteKMBlock" != t.GetVisibleFormId()
                    ) {
                      var n =
                        null == t.m_readedPKey.keyMedia &&
                        !t.m_noNewFileKMOnMakeNewCertificate;
                      t.SetKeyMediaType(n ? b.File : b.Hardware);
                    }
                    setTimeout(function () {
                      r();
                    }, 500);
                  }
                };
                r();
              })
            );
          }),
          (e.prototype.MakeDeviceCertificate = function (e) {
            var t = this;
            return new Promise(function (n, r) {
              var i = function () {
                if (t.m_isPKActionDone)
                  return (t.m_isPKActionDone = !1), void n();
                null != t.m_readedPKey &&
                  "#installBlock" != t.GetVisibleFormId() &&
                  "#proxySettingsBlock" != t.GetVisibleFormId() &&
                  "#makeTechnicalCertBlock" != t.GetVisibleFormId() &&
                  ((t.m_deviceCertParams = e),
                  t.ShowForm("#makeTechnicalCertBlock", !1)),
                  setTimeout(function () {
                    i();
                  }, 500);
              };
              i();
            });
          }),
          (e.prototype.ChangeOwnCertificatesStatus = function (e, t) {
            var n = this,
              r = n.GetCurrentLibrary().GetLibrary();
            return new Promise(function (o, a) {
              n.CheckPrivateKey(
                i.EndUserConstants.EndUserCertKeyType.Unknown,
                []
              )
                .then(function () {
                  return r.ChangeOwnCertificatesStatus(e, t);
                })
                .then(function () {
                  return o();
                })
                .catch(function (e) {
                  return a(e);
                });
            });
          }),
          (e.prototype.SignHash = function (e, t, n, r, a) {
            void 0 === t && (t = !1),
              void 0 === n &&
                (n = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
              void 0 === r &&
                (r = i.EndUserConstants.EndUserSignType.CAdES_BES),
              void 0 === a && (a = null);
            var s = this,
              u = s.GetCurrentLibrary().GetLibrary();
            return (
              s.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
              new Promise(function (o, l) {
                s.CheckPrivateKey(s.SignAlgoToPublicKeyType(n), [
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
                    i.EndUserConstants.EndUserKeyUsage.NonRepudation,
                ])
                  .then(function () {
                    return u.SetRuntimeParameter(
                      i.EndUserConstants.EU_SIGN_TYPE_PARAMETER,
                      r
                    );
                  })
                  .then(function () {
                    return null == a
                      ? u.SignHash(n, e, !0, t)
                      : u.AppendSignHash(n, e, a, !0, t);
                  })
                  .then(function (e) {
                    s.CloseDimmerView(), s.StopOperationConfirmation(), o(e);
                  })
                  .catch(function (e) {
                    s.CloseDimmerView(), s.StopOperationConfirmation(), l(e);
                  });
              })
            );
          }),
          (e.prototype.SignData = function (e, t, n, r, a, s) {
            void 0 === t && (t = !0),
              void 0 === n && (n = !1),
              void 0 === r &&
                (r = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
              void 0 === a && (a = null),
              void 0 === s &&
                (s = i.EndUserConstants.EndUserSignType.CAdES_BES);
            var u = this,
              l = u.GetCurrentLibrary().GetLibrary();
            return (
              u.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
              new Promise(function (o, c) {
                u.CheckPrivateKey(u.SignAlgoToPublicKeyType(r), [
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
                    i.EndUserConstants.EndUserKeyUsage.NonRepudation,
                ])
                  .then(function () {
                    return l.SetRuntimeParameter(
                      i.EndUserConstants.EU_SIGN_TYPE_PARAMETER,
                      s
                    );
                  })
                  .then(function () {
                    return null == a
                      ? l.SignDataEx(r, e, t, !0, n)
                      : l.AppendSign(r, t ? e : null, a, !0, n);
                  })
                  .then(function (e) {
                    u.CloseDimmerView(), u.StopOperationConfirmation(), o(e);
                  })
                  .catch(function (e) {
                    u.CloseDimmerView(), u.StopOperationConfirmation(), c(e);
                  });
              })
            );
          }),
          (e.prototype.PAdESSignData = function (e, t, n, r) {
            void 0 === t && (t = !1),
              void 0 === n &&
                (n = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
              void 0 === r &&
                (r = i.EndUserConstants.EndUserPAdESSignLevel.B_B);
            var a = this,
              s = a.GetCurrentLibrary().GetLibrary();
            return (
              a.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
              new Promise(function (o, u) {
                a.CheckPrivateKey(a.SignAlgoToPublicKeyType(n), [
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
                    i.EndUserConstants.EndUserKeyUsage.NonRepudation,
                ])
                  .then(function () {
                    return s.PDFSignData(n, e, r, t);
                  })
                  .then(function (e) {
                    a.CloseDimmerView(), a.StopOperationConfirmation(), o(e);
                  })
                  .catch(function (e) {
                    a.CloseDimmerView(), a.StopOperationConfirmation(), u(e);
                  });
              })
            );
          }),
          (e.prototype.XAdESSignData = function (e, t, n, r, a) {
            void 0 === n && (n = !1),
              void 0 === r &&
                (r = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
              void 0 === a &&
                (a = i.EndUserConstants.EndUserXAdESSignLevel.B_B);
            var s = this,
              u = s.GetCurrentLibrary().GetLibrary();
            return (
              s.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
              new Promise(function (o, l) {
                s.CheckPrivateKey(s.SignAlgoToPublicKeyType(r), [
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
                    i.EndUserConstants.EndUserKeyUsage.NonRepudation,
                ])
                  .then(function () {
                    return u.XAdESSignData(r, e, a, t, n);
                  })
                  .then(function (e) {
                    s.CloseDimmerView(), s.StopOperationConfirmation(), o(e);
                  })
                  .catch(function (e) {
                    s.CloseDimmerView(), s.StopOperationConfirmation(), l(e);
                  });
              })
            );
          }),
          (e.prototype.ASiCSignData = function (e, t, n, r, a, s) {
            void 0 === r && (r = !1),
              void 0 === a &&
                (a = i.EndUserConstants.EndUserSignAlgo.DSTU4145WithGOST34311),
              void 0 === s && (s = 0);
            var u = this,
              l = u.GetCurrentLibrary().GetLibrary();
            return (
              u.ShowDimmerView(p(o.PROCESS_STATUS_SIGN_DATA)),
              0 == s &&
                (s =
                  t == i.EndUserConstants.EndUserASiCSignType.CAdES
                    ? i.EndUserConstants.EndUserSignType.CAdES_BES
                    : i.EndUserConstants.EndUserXAdESSignLevel.B_B),
              new Promise(function (o, c) {
                u.CheckPrivateKey(u.SignAlgoToPublicKeyType(a), [
                  i.EndUserConstants.EndUserKeyUsage.DigitalSignature |
                    i.EndUserConstants.EndUserKeyUsage.NonRepudation,
                ])
                  .then(function () {
                    return l.ASiCSignData(a, e, t, s, n, r);
                  })
                  .then(function (e) {
                    u.CloseDimmerView(), u.StopOperationConfirmation(), o(e);
                  })
                  .catch(function (e) {
                    u.CloseDimmerView(), u.StopOperationConfirmation(), c(e);
                  });
              })
            );
          }),
          (e.prototype.EnvelopData = function (e, t, n, r, o) {
            void 0 === n && (n = !1),
              void 0 === r && (r = !1),
              void 0 === o && (o = !1);
            var a = this,
              s = a.GetCurrentLibrary().GetLibrary();
            return new Promise(function (u, l) {
              a.CheckPrivateKey(
                i.EndUserConstants.EndUserCertKeyType.DSTU4145,
                [
                  (n
                    ? i.EndUserConstants.EndUserKeyUsage.DigitalSignature
                    : 0) |
                    (o ? 0 : i.EndUserConstants.EndUserKeyUsage.KeyAgreement),
                ],
                !n && o
              )
                .then(function () {
                  return s.EnvelopData(e, t, n, !0, r, o);
                })
                .then(function (e) {
                  return u(e);
                })
                .catch(function (e) {
                  return l(e);
                });
            });
          }),
          (e.prototype.DevelopData = function (e, t) {
            void 0 === t && (t = null);
            var n = this,
              r = n.GetCurrentLibrary().GetLibrary();
            return new Promise(function (o, a) {
              n.CheckPrivateKey(
                i.EndUserConstants.EndUserCertKeyType.DSTU4145,
                [i.EndUserConstants.EndUserKeyUsage.KeyAgreement]
              )
                .then(function () {
                  return r.DevelopData(e, t);
                })
                .then(function (e) {
                  return o(e);
                })
                .catch(function (e) {
                  return a(e);
                });
            });
          }),
          e
        );
      })();
    window.onload = function () {
      c.getInstance().addTranlations(LIBRARY_LOCALIZATION),
        LIBRARY_HOST_LOCALIZATION &&
          c.getInstance().addTranlations(LIBRARY_HOST_LOCALIZATION),
        c.getInstance().setLocale(c.getLocaleTypeById(LIBRARY_LANGUAGE)),
        (function () {
          for (var e = $(".i18n"), t = 0; t < e.length; t++) {
            var n = $(e[t]);
            n.text(p(n.text()));
          }
        })(),
        new w();
    };
  },
]);
