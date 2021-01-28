!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).__inside__ || (self.__inside__ = {}))
}(this, (function(e) {
    "use strict";
    var t = function() {
        return (t = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , n = /#(?:[0-9a-fA-F]{3}){1,2}/
      , r = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/
      , o = "__inside__"
      , i = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
      , c = {
        accent_color: "#2a2b33",
        foreground_color: "#363636",
        border_color: "#e0e0e0",
        background: "#f3f6f7",
        sidebar_background: "#2a2b33",
        card_background: "#fff",
        content_width: "660px",
        font: {
            base: i,
            logo: i,
            menu: i,
            heading: i,
            label: i,
            code: i,
            print: i
        },
        highlight: ["#ffffff", "#e0e0e0", "#f3f6f7", "#95a5b3", "#363636", "#262b2f", "#000000", "#000000", "#5d6c7b", "#40464a", "#2980b9", "#be516e", "#237dac", "#944770", "#239371", "#edf0f3"]
    }
      , a = "undefined" != typeof document;
    if (a) {
        document.addEventListener("inside:theme", (function(e) {
            document.dispatchEvent(new CustomEvent("inside",{
                detail: {
                    type: "theme",
                    data: e.detail
                }
            }))
        }
        )),
        document.addEventListener("inside", (function(e) {
            if (!a || "theme" !== e.detail.type)
                return !1;
            u(e.detail.data)
        }
        ));
        var f = localStorage.getItem(o);
        if (f)
            try {
                u(JSON.parse(f).theme)
            } catch (e) {}
    }
    function u(e) {
        var t = document.querySelector('style[is="theme"]')
          , n = document.querySelector('meta[name="theme-color"]')
          , r = window[o] || {};
        t || ((t = document.createElement("style")).setAttribute("is", "theme"),
        document.body.appendChild(t)),
        r.theme = Object.assign({}, r.theme, e),
        r.color = [m(r.theme.sidebar_background).color || r.theme.accent_color].concat(m(r.theme.background).color || []),
        t.innerHTML = d(r.theme),
        n && (n.content = r.color[r.color.length - 1]),
        localStorage.setItem(o, JSON.stringify({
            theme: r.theme
        }))
    }
    function d(e) {
        if (!e)
            return "";
        var o = function(e, t) {
            var n = {}
              , r = e.accent_color
              , o = e.foreground_color
              , i = e.border_color
              , c = e.background
              , a = e.sidebar_background
              , f = e.card_background
              , u = e.font
              , d = void 0 === u ? {} : u
              , s = e.content_width
              , h = e.highlight;
            n.accent_color = r ? g(r).hex : t.accent_color,
            n.foreground_color = o ? g(o).hex : t.foreground_color,
            n.border_color = i ? g(i).hex : t.border_color,
            n.background = c ? l(c) : t.background,
            n.sidebar_background = a ? l(a) : t.sidebar_background,
            n.card_background = f ? l(f) : t.card_background;
            var m = d.base ? b(d.base) : t.font.base.split(",");
            n.font = {
                base: String(m)
            },
            n.font.logo = d.logo ? b(d.logo, m).join(",") : t.font.logo,
            n.font.menu = d.menu ? b(d.menu, m).join(",") : t.font.menu,
            n.font.heading = d.heading ? b(d.heading, m).join(",") : t.font.heading,
            n.font.label = d.label ? b(d.label, m).join(",") : t.font.label,
            n.font.code = d.code ? b(d.code).join(",") : t.font.code,
            n.font.print = d.print ? b(d.print).join(",") : t.font.print;
            var _ = function(e) {
                if (!e)
                    return;
                if ("number" == typeof e)
                    return {
                        value: e,
                        unit: "px"
                    };
                var t = e.match(/^(\d+)(%|rem|px)$/);
                if (t)
                    return {
                        value: +t[1],
                        unit: t[2]
                    }
            }(s);
            n.content_width = _ ? _.value + _.unit : t.content_width,
            Array.isArray(h) ? (n.highlight = h.map((function(e) {
                return g(e).hex
            }
            )).filter((function(e) {
                return e
            }
            )),
            n.highlight.length < 16 && (n.highlight = t.highlight)) : n.highlight = t.highlight;
            return n
        }(e, c)
          , i = (o.card_background.match(n) || o.card_background.match(r) || [])[0] || o.foreground_color
          , a = g(o.accent_color);
        return "html{" + function(e, t) {
            void 0 === e && (e = {});
            void 0 === t && (t = "var");
            return n(e);
            function n(e, r, o) {
                void 0 === r && (r = []);
                var i = function(i) {
                    var c = e[i];
                    if (Array.isArray(c))
                        c.forEach((function(e, t) {
                            var o, c = t.toString(16);
                            return c.length < 2 && (c = "0" + c),
                            n(((o = {})[c] = e,
                            o), r, i)
                        }
                        ));
                    else if ("object" == typeof c)
                        n(c, r, i);
                    else {
                        var a = (o ? o + "_" : "") + i;
                        r.push(["--" + t + "-" + a.replace(/_/g, "-"), c, a])
                    }
                };
                for (var c in e)
                    i(c);
                return r
            }
        }(t(t({}, o), {
            card_color: i,
            accent_color_005: "rgba(" + a.r + "," + a.g + "," + a.b + ",.05)",
            accent_color_01: "rgba(" + a.r + "," + a.g + "," + a.b + ",.1)",
            accent_color_02: "rgba(" + a.r + "," + a.g + "," + a.b + ",.2)",
            accent_color_04: "rgba(" + a.r + "," + a.g + "," + a.b + ",.4)",
            accent_color_08: "rgba(" + a.r + "," + a.g + "," + a.b + ",.8)",
            accent_color: a.hex
        }), "inside").map((function(e) {
            return e.slice(0, 2).join(":")
        }
        )).join(";") + "}"
    }
    function l(e) {
        var t = /(^data:image)|(^[^\(^'^"]*\.(jpg|png|gif|svg))/;
        return e.split(/\s+/).map((function(e) {
            return e.match(t) ? "url(" + e + ")" : e
        }
        )).join(" ")
    }
    function g(e, o) {
        if (e = (e || "").trim(),
        n.test(e))
            return t({
                hex: e
            }, h(e));
        if (r.test(e)) {
            var i = e.match(r).slice(1, 4).map((function(e) {
                return +e
            }
            )).filter((function(e) {
                return e < 256
            }
            ));
            if (3 === i.length)
                return {
                    hex: s.apply(null, i),
                    r: i[0],
                    g: i[1],
                    b: i[2]
                }
        }
        return o ? t({
            hex: o
        }, h(o)) : {}
    }
    function s(e, t, n) {
        return "#" + ((1 << 24) + (e << 16) + (t << 8) + n).toString(16).slice(1)
    }
    function h(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, n, r) {
            return t + t + n + n + r + r
        }
        ));
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16)
        } : null
    }
    function b(e, t) {
        void 0 === t && (t = []);
        var n = e ? e.split(",") : []
          , r = [];
        return n.forEach((function(e) {
            (e = e.trim()) && !~t.indexOf(e) && r.push(e)
        }
        )),
        r.concat(t)
    }
    function m(e) {
        if (!e)
            return {};
        var t = e.split(/\s+/);
        if (n.test(t[0]))
            return {
                color: t[0],
                image: t.slice(1).join(" ")
            };
        var r = t.length - 1;
        return t[r] && n.test(t[r]) ? {
            color: t.pop(),
            image: t.join(" ")
        } : {
            image: e
        }
    }
    e.css = d,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));
