try {
    "undefined" == typeof XMLHttpRequest && (XMLHttpRequest = function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (t) {}
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
        try {
            return new XDomainRequest
        } catch (t) {}
        throw new Error("This browser does not support XMLHttpRequest.")
    })
} catch (t) {}! function() {
    try {
        var t = (new Date).getTime(),
            e = 0,
            n = 0,
            a = 0,
            c = 0,
            r = function() {
                try {
                    var t = !1,
                        e = 0;
                    try {
                        top && top.document && (e = 0)
                    } catch (t) {
                        e = 1
                    }
                    var n = n;
                    return e || (n = n.top), n.performance && n.performance.timing ? void 0 !== n.performance.timing.loadEventEnd && 0 !== n.performance.timing.loadEventEnd && (t = !0) : void 0 !== windowLoadedTime && (t = !0), t
                } catch (t) {
                    return !1
                }
            },
            i = function(t) {
                try {
                    r() || (a += t), c += t
                } catch (t) {}
            },
            o = function(t, e, n) {
                try {
                    t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent(e, n)
                } catch (t) {}
            },
            s = function(t) {
                try {
                    for (var e = t + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
                        for (var c = n[a];
                            " " == c.charAt(0);) c = c.substring(1);
                        if (0 == c.indexOf(e)) return c.substring(e.length, c.length)
                    }
                    return ""
                } catch (t) {
                    return ""
                }
            },
            d = {},
            u = "." + window.location.host.replace(/:\d+/, ""),
            h = function() {
                try {
                    var t = 0,
                        e = [];
                    e[t++] = "0";
                    var n = function(t, e) {
                            var n;
                            try {
                                var a = new Date(t),
                                    c = new Date(t + e);
                                a.getUTCDate() == c.getUTCDate() && a.getUTCMonth() == c.getUTCMonth() && a.getUTCFullYear() == c.getUTCFullYear() || (c.setUTCFullYear(a.getUTCFullYear()), c.setUTCMonth(a.getUTCMonth()), c.setUTCDate(a.getUTCDate()), c.setUTCHours(23), c.setUTCMinutes(59), c.setUTCSeconds(59), c.setUTCMilliseconds(999)), n = c.toUTCString()
                            } catch (e) {
                                n = new Date(t).toUTCString()
                            }
                            return n
                        },
                        a = function(n) {
                            try {
                                var a = n.cn,
                                    c = s(a);
                                c ? (document.cookie = a + "=" + c + "; expires=" + n.et + ";path=/; domain=" + u + "; SameSite=None; Secure", d[n.key] = c, d[n.ncfk] = 0) : (document.cookie = a + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + u + "; SameSite=None; Secure", c = n.cv, document.cookie = a + "=" + c + "; expires=" + n.et + ";path=/; domain=" + u + "; SameSite=None; Secure", s(a) == c ? (d[n.key] = c, d[n.ncfk] = 1) : "sco" === n.key ? e[t++] = "41" : "scot" === n.key ? e[t++] = "42" : "scotd" === n.key && (e[t++] = "43"))
                            } catch (t) {}
                        };
                    this.init = function(t) {
                        try {
                            var r = n(t.slst, 18e5),
                                i = [{
                                    cn: "bfp_sn",
                                    key: "sco",
                                    ncfk: "scof",
                                    cv: t.skwt,
                                    slst: t.slst,
                                    et: r
                                }];
                            t.pid && i.push({
                                cn: "bfp_sn_t_" + c(t.pid + "", 23),
                                key: "scot",
                                ncfk: "scotf",
                                cv: t.skwt + "_" + c(t.pid.toString(), 23),
                                slst: t.slst,
                                et: r
                            }), t.od && "NA" != t.od && t.pid && i.push({
                                cn: "bfp_sn_td_" + c((t.pid + t.od).toString(), 23),
                                key: "scotd",
                                ncfk: "scotdf",
                                cv: t.skwt + "_" + c((t.pid + t.od).toString(), 23),
                                slst: t.slst,
                                et: r
                            });
                            for (var o = 0; o < i.length; o++) a(i[o]);
                            d.ex = e.join("#")
                        } catch (t) {}
                    };
                    var c = function(t, e) {
                        try {
                            var n = function(t, e) {
                                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                                    var n = [0, 0, 0, 0];
                                    return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                                },
                                a = function(t, e) {
                                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                                    var n = [0, 0, 0, 0];
                                    return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                                },
                                c = function(t, e) {
                                    return e %= 64, 32 === e ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
                                },
                                r = function(t, e) {
                                    return e %= 64, 0 === e ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
                                },
                                i = function(t, e) {
                                    return [t[0] ^ e[0], t[1] ^ e[1]]
                                },
                                o = function(t) {
                                    return t = i(t, [0, t[0] >>> 1]), t = a(t, [4283543511, 3981806797]), t = i(t, [0, t[0] >>> 1]), t = a(t, [3301882366, 444984403]), t = i(t, [0, t[0] >>> 1])
                                };
                            t = t || "", e = e || 0;
                            for (var s = t.length % 16, d = t.length - s, u = [0, e], h = [0, e], f = [0, 0], l = [0, 0], y = [2277735313, 289559509], v = [1291169091, 658871167], g = 0; g < d; g += 16) f = [255 & t.charCodeAt(g + 4) | (255 & t.charCodeAt(g + 5)) << 8 | (255 & t.charCodeAt(g + 6)) << 16 | (255 & t.charCodeAt(g + 7)) << 24, 255 & t.charCodeAt(g) | (255 & t.charCodeAt(g + 1)) << 8 | (255 & t.charCodeAt(g + 2)) << 16 | (255 & t.charCodeAt(g + 3)) << 24], l = [255 & t.charCodeAt(g + 12) | (255 & t.charCodeAt(g + 13)) << 8 | (255 & t.charCodeAt(g + 14)) << 16 | (255 & t.charCodeAt(g + 15)) << 24, 255 & t.charCodeAt(g + 8) | (255 & t.charCodeAt(g + 9)) << 8 | (255 & t.charCodeAt(g + 10)) << 16 | (255 & t.charCodeAt(g + 11)) << 24], f = c(f = a(f, y), 31), f = a(f, v), u = n(u = c(u = i(u, f), 27), h), u = n(a(u, [0, 5]), [0, 1390208809]), l = c(l = a(l, v), 33), l = a(l, y), h = n(h = c(h = i(h, l), 31), u), h = n(a(h, [0, 5]), [0, 944331445]);
                            switch (f = [0, 0], l = [0, 0], s) {
                                case 15:
                                    l = i(l, r([0, t.charCodeAt(g + 14)], 48));
                                case 14:
                                    l = i(l, r([0, t.charCodeAt(g + 13)], 40));
                                case 13:
                                    l = i(l, r([0, t.charCodeAt(g + 12)], 32));
                                case 12:
                                    l = i(l, r([0, t.charCodeAt(g + 11)], 24));
                                case 11:
                                    l = i(l, r([0, t.charCodeAt(g + 10)], 16));
                                case 10:
                                    l = i(l, r([0, t.charCodeAt(g + 9)], 8));
                                case 9:
                                    l = i(l, [0, t.charCodeAt(g + 8)]), l = c(l = a(l, v), 33), l = a(l, y), h = i(h, l);
                                case 8:
                                    f = i(f, r([0, t.charCodeAt(g + 7)], 56));
                                case 7:
                                    f = i(f, r([0, t.charCodeAt(g + 6)], 48));
                                case 6:
                                    f = i(f, r([0, t.charCodeAt(g + 5)], 40));
                                case 5:
                                    f = i(f, r([0, t.charCodeAt(g + 4)], 32));
                                case 4:
                                    f = i(f, r([0, t.charCodeAt(g + 3)], 24));
                                case 3:
                                    f = i(f, r([0, t.charCodeAt(g + 2)], 16));
                                case 2:
                                    f = i(f, r([0, t.charCodeAt(g + 1)], 8));
                                case 1:
                                    f = i(f, [0, t.charCodeAt(g)]), f = c(f = a(f, y), 31), f = a(f, v), u = i(u, f)
                            }
                            return u = i(u, [0, t.length]), h = i(h, [0, t.length]), u = n(u, h), h = n(h, u), u = o(u), h = o(h), u = n(u, h), h = n(h, u), ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[1] >>> 0).toString(16)).slice(-8)
                        } catch (t) {}
                    }
                } catch (t) {}
            },
            f = function() {
                try {
                    var t, r, o, h, f, l, y, v, g, w, m = 0,
                        p = !1,
                        T = -1,
                        b = {},
                        C = [],
                        _ = function(t, e, n) {
                            try {
                                var a;
                                return a = void 0 !== e && document.getElementById(e) ? document.getElementById(e) : document.createElement(t), a.style.visibility = "hidden", a.style.position = "absolute", e && a.setAttribute("id", e), n && document.body.appendChild(a), a
                            } catch (t) {}
                        },
                        D = function(t) {
                            try {
                                var e = document.getElementById(t);
                                document.body.removeChild(e)
                            } catch (t) {}
                        },
                        A = function() {
                            try {
                                if (r) {
                                    var t = r.getItem("bafp_t");
                                    t && void 0 != t && "undefined" != t && (b.local_storage = t)
                                }
                            } catch (t) {} finally {
                                C.local_storage = 1
                            }
                        },
                        k = function(t) {
                            try {
                                r && r.setItem("bafp_t", t)
                            } catch (t) {}
                        },
                        S = function() {
                            try {
                                if (o) {
                                    var t = o.getItem("bafp_t");
                                    t && void 0 != t && "undefined" != t && (b.session_storage = t)
                                }
                            } catch (t) {} finally {
                                C.session_storage = 1
                            }
                        },
                        x = function(t) {
                            try {
                                o && o.setItem("bafp_t", t)
                            } catch (t) {}
                        },
                        M = function(t, e) {
                            try {
                                t.onerror = function(t) {
                                    try {
                                        var n = (new Date).getTime();
                                        e && (C.indexdb_storage = 1);
                                        var a = (new Date).getTime();
                                        i(a - n)
                                    } catch (t) {}
                                }, t.onupgradeneeded = function(t) {
                                    try {
                                        var e = (new Date).getTime(),
                                            n = (t.target.result.createObjectStore("ect", {
                                                keyPath: "name",
                                                unique: !1
                                            }), (new Date).getTime());
                                        i(n - e)
                                    } catch (t) {}
                                }
                            } catch (t) {}
                        },
                        U = function() {
                            try {
                                if (t) {
                                    var e = t.open("bafp_ec_t", 1);
                                    M(e, !0), e.onsuccess = function(t) {
                                        try {
                                            var e = (new Date).getTime(),
                                                n = t.target.result;
                                            if (n.objectStoreNames.contains("ect")) {
                                                var a = n.transaction(["ect"]).objectStore("ect").get("bafp_t");
                                                a.onsuccess = function(t) {
                                                    try {
                                                        var e = (new Date).getTime();
                                                        null != a.result && void 0 != a.result && "undefined" != a.result && a.result.value && void 0 != a.result.value && "undefined" != a.result.value && (b.indexdb_storage = a.result.value), C.indexdb_storage = 1;
                                                        var n = (new Date).getTime();
                                                        i(n - e)
                                                    } catch (t) {}
                                                }
                                            } else C.indexdb_storage = 1;
                                            n.close();
                                            var c = (new Date).getTime();
                                            i(c - e)
                                        } catch (t) {
                                            C.indexdb_storage = 1
                                        }
                                    }
                                } else C.indexdb_storage = 1
                            } catch (t) {
                                C.indexdb_storage = 1
                            }
                        },
                        E = function(e) {
                            try {
                                if (t) {
                                    var n = t.open("bafp_ec_t", 1);
                                    M(n, !1), n.onsuccess = function(t) {
                                        try {
                                            var n = (new Date).getTime(),
                                                a = t.target.result;
                                            if (a.objectStoreNames.contains("ect")) a.transaction(["ect"], "readwrite").objectStore("ect").put({
                                                name: "bafp_t",
                                                value: e
                                            });
                                            a.close();
                                            var c = (new Date).getTime();
                                            i(c - n)
                                        } catch (t) {}
                                    }
                                }
                            } catch (t) {}
                        },
                        R = function() {
                            try {
                                var t = _("div", "userdata_el", 1);
                                if (t && t.addBehavior) {
                                    t.style.behavior = "url(#default#userData)", t.load("bafp_t");
                                    var e = t.getAttribute("bafp_t");
                                    e && void 0 != e && "undefined" != e && (b.ie_user_data = e)
                                }
                            } catch (t) {} finally {
                                C.ie_user_data = 1
                            }
                        },
                        j = function(t) {
                            try {
                                var e = _("div", "userdata_el", 1);
                                e && e.addBehavior && (e.style.behavior = "url(#default#userData)", e.load("bafp_t"), e.setAttribute("bafp_t", t), e.save("bafp_t"))
                            } catch (t) {}
                        },
                        F = function() {
                            try {
                                var t = s("bafp_t");
                                t && (b.cookie_data = t)
                            } catch (t) {} finally {
                                C.cookie_data = 1
                            }
                        },
                        O = function(t) {
                            try {
                                document.cookie = "bafp_t=" + t + "; path=/; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + u + "; SameSite=None; Secure"
                            } catch (t) {}
                        },
                        X = function() {
                            try {
                                var t = window.requestFileSystem || window.webkitRequestFileSystem;
                                t ? t(window.TEMPORARY, 1024, function(t) {
                                    try {
                                        var e = (new Date).getTime();
                                        t.root.getFile("bafp_t", {}, function(t) {
                                            try {
                                                var e = (new Date).getTime();
                                                t.file(function(t) {
                                                    try {
                                                        var e = (new Date).getTime(),
                                                            n = new FileReader;
                                                        n.onloadend = function() {
                                                            try {
                                                                var t = (new Date).getTime();
                                                                b.file_system = this.result, C.file_system = 1;
                                                                var e = (new Date).getTime();
                                                                i(e - t)
                                                            } catch (t) {}
                                                        }, n.readAsText(t);
                                                        var a = (new Date).getTime();
                                                        i(a - e)
                                                    } catch (t) {}
                                                });
                                                var n = (new Date).getTime();
                                                i(n - e)
                                            } catch (t) {}
                                        });
                                        var n = (new Date).getTime();
                                        i(n - e)
                                    } catch (t) {}
                                }, function() {
                                    try {
                                        C.file_system = 1
                                    } catch (t) {}
                                }) : C.file_system = 1
                            } catch (t) {
                                C.file_system = 1
                            }
                        },
                        q = function(t) {
                            try {
                                var e = window.requestFileSystem || window.webkitRequestFileSystem;
                                e && e(window.TEMPORARY, 1024, function(e) {
                                    try {
                                        var n = (new Date).getTime();
                                        e.root.getFile("bafp_t", {
                                            create: !0
                                        }, function(e) {
                                            try {
                                                var n = (new Date).getTime();
                                                e.createWriter(function(e) {
                                                    try {
                                                        var n = (new Date).getTime(),
                                                            a = new Blob([t], {
                                                                type: "text/plain"
                                                            });
                                                        e.write(a);
                                                        var c = (new Date).getTime();
                                                        i(c - n)
                                                    } catch (t) {}
                                                });
                                                var a = (new Date).getTime();
                                                i(a - n)
                                            } catch (t) {}
                                        });
                                        var a = (new Date).getTime();
                                        i(a - n)
                                    } catch (t) {}
                                })
                            } catch (t) {}
                        },
                        B = function(t) {
                            try {
                                if (void 0 !== t && "null" != t && "undefined" != t)
                                    for (var e = 0; e < l.length; e++) try {
                                        l[e](t)
                                    } catch (t) {}
                            } catch (t) {}
                        },
                        I = function(t) {
                            try {
                                p && (-1 != T ? (d.kb = 1, d.ka = t) : d.kb = 2, H())
                            } catch (t) {}
                        },
                        L = function() {
                            try {
                                m = 0, p = !1, T = -1, h = null, C = [], b = {}
                            } catch (t) {}
                        },
                        N = function() {
                            try {
                                L(), G(), z(I)
                            } catch (t) {}
                        },
                        P = function() {
                            try {
                                y && v || Y(null, -1);
                                var t = new XMLHttpRequest;
                                t.onreadystatechange = function() {
                                        try {
                                            var e = (new Date).getTime();
                                            if (4 == t.readyState)
                                                if (200 == t.status) {
                                                    var n = t.res…
