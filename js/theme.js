!
function(e, r) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = r();
    else if ("function" == typeof define && define.amd) define([], r);
    else {
        var o = r();
        for (var t in o)("object" == typeof exports ? exports: e)[t] = o[t]
    }
} (this.__inside__ || (this.__inside__ = {}), (function() {
    return function(e) {
        var r = {};
        function o(t) {
            if (r[t]) return r[t].exports;
            var i = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(i.exports, i, i.exports, o),
            i.l = !0,
            i.exports
        }
        return o.m = e,
        o.c = r,
        o.d = function(e, r, t) {
            o.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: t
            })
        },
        o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        o.t = function(e, r) {
            if (1 & r && (e = o(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (o.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e) for (var i in e) o.d(t, i,
            function(r) {
                return e[r]
            }.bind(null, i));
            return t
        },
        o.n = function(e) {
            var r = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return o.d(r, "a", r),
            r
        },
        o.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        },
        o.p = "",
        o(o.s = 1)
    } ([function(e, r, o) {
        "use strict";
        e.exports = function(e) {
            var r = [];
            return r.toString = function() {
                return this.map((function(r) {
                    var o = function(e, r) {
                        var o = e[1] || "",
                        t = e[3];
                        if (!t) return o;
                        if (r && "function" == typeof btoa) {
                            var i = (c = t, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(c)))) + " */"),
                            n = t.sources.map((function(e) {
                                return "/*# sourceURL=" + t.sourceRoot + e + " */"
                            }));
                            return [o].concat(n).concat([i]).join("\n")
                        }
                        var c;
                        return [o].join("\n")
                    } (r, e);
                    return r[2] ? "@media " + r[2] + "{" + o + "}": o
                })).join("")
            },
            r.i = function(e, o) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var t = {},
                i = 0; i < this.length; i++) {
                    var n = this[i][0];
                    null != n && (t[n] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var c = e[i];
                    null != c[0] && t[c[0]] || (o && !c[2] ? c[2] = o: o && (c[2] = "(" + c[2] + ") and (" + o + ")"), r.push(c))
                }
            },
            r
        }
    },
    function(e, r, o) {
        "use strict";
        var t = this && this.__assign ||
        function() {
            return (t = Object.assign ||
            function(e) {
                for (var r, o = 1,
                t = arguments.length; o < t; o++) for (var i in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                return e
            }).apply(this, arguments)
        };
        r.__esModule = !0,
        r.css = void 0;
        var i = /#(?:[0-9a-fA-F]{3}){1,2}/,
        n = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
        c = {
            mode: _(o(2)),
            content_width: _(o(3)),
            accent_color: _(o(4)),
            background: _(o(5)),
            font: {
                base: _(o(6)),
                logo: _(o(7)),
                menu: _(o(8)),
                heading: _(o(9)),
                label: _(o(10)),
                code: _(o(11)),
                print: _(o(12))
            },
            highlight: {
                base: _(o(13)),
                flat: _(o(14)),
                bordered: _(o(15)),
                bordered_mix: _(o(16))
            }
        },
        a = {
            accent_color: "#2a2b33",
            foreground_color: "#363636",
            border_color: "#e0e0e0",
            background: "#f3f6f7",
            sidebar_background: "#2a2b33",
            card_background: "#fff",
            highlight: ["#ffffff", "#ffffff", "#f3f6f7", "#95a5b3", "#363636", "#262b2f", "#000000", "#000000", "#5d6c7b", "#40464a", "#2980b9", "#be516e", "#237dac", "#944770", "#239371", "#edf0f3"]
        },
        h = "undefined" != typeof document;
        function l(e) {
            if (!e) return "";
            var r = function(e, r) {
                var o = {},
                t = e.accent_color,
                i = e.foreground_color,
                n = e.border_color,
                c = e.background,
                a = e.sidebar_background,
                h = e.card_background,
                l = e.font,
                d = e.content_width,
                f = e.highlight;
                if (o.accent_color = t ? u(t).hex: r.accent_color, o.foreground_color = i ? u(i).hex: r.foreground_color, o.border_color = n ? u(n).hex: r.border_color, o.background = c ? g(c) : r.background, o.sidebar_background = a ? g(a) : r.sidebar_background, o.card_background = h ? g(h) : r.card_background, l) {
                    var s = b(l.base);
                    o.font = {
                        base: s.join(",")
                    },
                    l.logo && (o.font.logo = b(l.logo, s).join(",")),
                    l.menu && (o.font.menu = b(l.menu, s).join(",")),
                    l.heading && (o.font.heading = b(l.heading, s).join(",")),
                    l.label && (o.font.label = b(l.label, s).join(",")),
                    l.code && (o.font.code = b(l.code).join(",")),
                    l.print && (o.font.print = b(l.print).join(","))
                }
                var p = function(e) {
                    if (!e) return;
                    if ("number" == typeof e) return {
                        value: e,
                        unit: "px"
                    };
                    var r = e.match(/^(\d+)(%|rem|px)$/);
                    if (r) return {
                        value: +r[1],
                        unit: r[2]
                    }
                } (d);
                p && (o.content_width = p.value + p.unit);
                Array.isArray(f) ? (o.highlight = f.map((function(e) {
                    return u(e).hex
                })).filter((function(e) {
                    return e
                })), o.highlight.length < 16 && (o.highlight = r.highlight)) : o.highlight = r.highlight;
                return o
            } (e, a),
            o = [],
            t = (r.card_background.match(i) || r.card_background.match(n) || [])[0] || r.foreground_color;
            if (o.push(c.mode.replace(/MODE_FG/g, r.foreground_color).replace(/MODE_CARD_BG/g, r.card_background).replace(/CARD_COLOR/g, t).replace(/MODE_BORDER/g, r.border_color)), r.font) {
                var h = r.font;
                h.base && o.push(c.font.base.replace(/FONT_BASE/g, h.base)),
                h.logo && o.push(c.font.logo.replace(/FONT_LOGO/g, h.logo)),
                h.menu && o.push(c.font.menu.replace(/FONT_MENU/g, h.menu)),
                h.heading && o.push(c.font.heading.replace(/FONT_HEADING/g, h.heading)),
                h.label && o.push(c.font.label.replace(/FONT_LABEL/g, h.label)),
                h.code && o.push(c.font.code.replace(/FONT_CODE/g, h.code)),
                h.print && o.push(c.font.print.replace(/FONT_PRINT/g, h.print))
            }
            var l = u(r.accent_color);
            return o.push(c.background.replace(/BACKGROUND/g, r.background), c.accent_color.replace(/COLOR_005/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.05)").replace(/COLOR_01/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.1)").replace(/COLOR_02/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.2)").replace(/COLOR_04/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.4)").replace(/COLOR_08/g, "rgba(" + l.r + "," + l.g + "," + l.b + ",.8)").replace(/COLOR/g, l.hex).replace(/SIDEBAR_BACKGROUND/g, g(r.sidebar_background))),
            r.content_width && o.push(c.content_width.replace(/CONTENT_WIDTH/g, r.content_width)),
            o.push(s(c.highlight.base, r.highlight)),
            p(r.card_background, r.highlight[0]) || p(r.highlight[15], r.highlight[0]) ? p(r.card_background, r.highlight[1]) || p(r.highlight[15], r.highlight[1]) ? o.push(c.highlight.bordered_mix) : o.push(s(c.highlight.bordered, r.highlight)) : (p(r.card_background, r.highlight[1]) && (r.highlight[1] = r.highlight[0]), o.push(s(c.highlight.flat, r.highlight))),
            o.join("")
        }
        function g(e) {
            var r = /(^data:image)|(^[^\(^'^"]*\.(jpg|png|gif|svg))/;
            return e.split(/\s+/).map((function(e) {
                return e.match(r) ? "url(" + e + ")": e
            })).join(" ")
        }
        function u(e, r) {
            if (e = (e || "").trim(), i.test(e)) return t({
                hex: e
            },
            f(e));
            if (n.test(e)) {
                var o = e.match(n).slice(1, 4).map((function(e) {
                    return + e
                })).filter((function(e) {
                    return e < 256
                }));
                if (3 === o.length) return {
                    hex: d.apply(null, o),
                    r: o[0],
                    g: o[1],
                    b: o[2]
                }
            }
            return r ? t({
                hex: r
            },
            f(r)) : {}
        }
        function d(e, r, o) {
            return "#" + ((1 << 24) + (e << 16) + (r << 8) + o).toString(16).slice(1)
        }
        function f(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, r, o, t) {
                return r + r + o + o + t + t
            }));
            var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return r ? {
                r: parseInt(r[1], 16),
                g: parseInt(r[2], 16),
                b: parseInt(r[3], 16)
            }: null
        }
        function b(e, r) {
            void 0 === r && (r = []);
            var o = e ? e.split(",") : [],
            t = [];
            return o.forEach((function(e) { (e = e.trim()) && !~r.indexOf(e) && t.push(e)
            })),
            t.concat(r)
        }
        function s(e, r) {
            return r.reduce((function(e, r, o) {
                var t = new RegExp("base0" + o.toString(16).toUpperCase(), "g");
                return e.replace(t, r)
            }), e)
        }
        function p(e, r) {
            var o = u(e),
            t = u(r);
            return o && t && o.r === t.r && o.g === t.g && o.b === t.b
        }
        function _(e) {
            return (e.
        default || e).toString().replace('@charset "UTF-8";', "")
        }
        function O(e) {
            if (!e) return {};
            var r = e.split(/\s+/);
            if (i.test(r[0])) return {
                color: r[0],
                image: r.slice(1).join(" ")
            };
            var o = r.length - 1;
            return r[o] && i.test(r[o]) ? {
                color: r.pop(),
                image: r.join(" ")
            }: {
                image: e
            }
        }
        h && (document.addEventListener("inside:theme", (function(e) {
            document.dispatchEvent(new CustomEvent("inside", {
                detail: {
                    type: "theme",
                    data: e.detail
                }
            }))
        })), document.addEventListener("inside", (function(e) {
            if (!h || "theme" !== e.detail.type) return ! 1;
            var r = document.querySelector('link[is="theme"]'),
            o = document.querySelector('meta[name="theme-color"]'),
            t = window.__inside__ || {};
            if (!r) return ! 1;
            t.theme = Object.assign({},
            t.theme, e.detail.data),
            t.color = [O(t.theme.sidebar_background).color || t.theme.accent_color].concat(O(t.theme.background).color || []);
            var i = l(t.theme);
            if (!i) return ! 1;
            URL.revokeObjectURL(r.href),
            r.href = URL.createObjectURL(new Blob([i], {
                type: "text/css"
            })),
            o && (o.content = t.color[t.color.length - 1])
        }))),
        r.css = l
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, "body{color:MODE_FG}.φf,.φg:after{background:MODE_CARD_BG}.φh,details figure.highlight,input,textarea{border-color:MODE_BORDER}.φi:after{color:CARD_COLOR}.φj:after{box-shadow:0 0 0 1px MODE_BORDER}.φcy ::-webkit-scrollbar-thumb{background-color:MODE_BORDER}.φcy ::-webkit-scrollbar-thumb:hover{background-color:MODE_FG}.φdb>ul>li:before{background-color:MODE_BORDER}.φdb>ul>li:after{background:MODE_CARD_BG}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, "@media (min-width:676px){.φbf{max-width:CONTENT_WIDTH}}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, "::-moz-selection{background-color:COLOR;color:#fff}::selection{background-color:COLOR;color:#fff}::-webkit-scrollbar-thumb{background-color:COLOR_02}::-webkit-scrollbar-thumb:hover{background-color:COLOR_08}code{color:COLOR}.φda th,code{background-color:COLOR_005}@media (max-width:675px){.φk{background:SIDEBAR_BACKGROUND}}.φl,.φm:after,.φn:before,.φo:active:after,.φo:hover:after,.φp:active:before,.φp:hover:before,.φq:active,.φq:hover{background-color:COLOR;background-image:none}.φr{background-color:COLOR_01}.φs{background-color:COLOR_005}.φt,.φu:active,.φu:hover{color:COLOR}.φv{border-color:COLOR}.φw{border-color:COLOR_04}.φx,.φy:active,.φy:hover{border-color:COLOR_02}.φz a:hover,.φz sup a{color:COLOR}.φz a:hover{border-color:COLOR}.φba{stroke:COLOR}.φbb{fill:COLOR}.φdb>ul li{border-color:COLOR}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".φbc,.φbd:after,body{background:BACKGROUND}@media (max-width:675px){.φbe{background:BACKGROUND}}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, "body{font-family:FONT_BASE}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".φa{font-family:FONT_LOGO}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".φc{font-family:FONT_MENU}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".φb,h1,h2,h3,h4,h5,h6{font-family:FONT_HEADING}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".φd,.φe:after{font-family:FONT_LABEL}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".highlight figcaption,code,pre{font-family:FONT_CODE}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, "@media print{body{font-family:FONT_PRINT}}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".highlight{border-radius:3px;color:base05}.highlight .gutter{color:base03}.highlight figcaption{color:base04}.highlight figcaption a,.highlight figcaption a:hover{color:base0C}.highlight ::-webkit-scrollbar-thumb{background-color:base01}.highlight ::-webkit-scrollbar-thumb:hover{background-color:base02}.highlight ::-moz-selection{background-color:base02;color:inherit}.highlight ::selection{background-color:base02;color:inherit}.highlight .comment,.highlight .quote{color:base03}.highlight .deletion,.highlight .name,.highlight .regexp,.highlight .selector-class,.highlight .selector-id,.highlight .tag,.highlight .template-variable,.highlight .variable{color:base08}.highlight .built_in,.highlight .builtin-name,.highlight .link,.highlight .literal,.highlight .meta,.highlight .number,.highlight .params,.highlight .type{color:base09}.highlight .attribute{color:base0A}.highlight .addition,.highlight .bullet,.highlight .string,.highlight .symbol{color:base0B}.highlight .section,.highlight .title{color:base0D}.highlight .keyword,.highlight .selector-tag{color:base0E}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".highlight{background-color:base00}.highlight figcaption{border-radius:3px 3px 0 0;background-color:base01}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".highlight{border:1px solid base01}.highlight figcaption{background-color:base01}", ""])
    },
    function(e, r, o) { (e.exports = o(0)(!1)).push([e.i, ".highlight{border:1px solid;border-color:inherit}.highlight figcaption{border-bottom:1px solid;border-color:inherit}", ""])
    }])
}));