!function() {
    "use strict";
    function e(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function n(e) {
        return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function r(e, t) {
        return (r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function o() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function l(e, t, n) {
        return (l = o() ? Reflect.construct : function(e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var l = new (Function.bind.apply(e, o));
            return n && r(l, n.prototype),
            l
        }
        ).apply(null, arguments)
    }
    function i(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (i = function(e) {
            if (null === e || (o = e,
            -1 === Function.toString.call(o).indexOf("[native code]")))
                return e;
            var o;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, i)
            }
            function i() {
                return l(e, arguments, n(this).constructor)
            }
            return i.prototype = Object.create(e.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            r(i, e)
        }
        )(e)
    }
    function u(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }
    function _(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , l = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                l = e
            } finally {
                try {
                    r || null == u.return || u.return()
                } finally {
                    if (o)
                        throw l
                }
            }
            return n
        }(e, t) || c(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function a(e) {
        return function(e) {
            if (Array.isArray(e))
                return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || c(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function c(e, t) {
        if (e) {
            if ("string" == typeof e)
                return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
        }
    }
    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function f(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    function p(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var d = p((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = {
            attributeNames: {
                styleName: "className"
            },
            generateScopedName: "[path]___[name]__[local]___[hash:base64:5]",
            handleMissingStyleName: "throw"
        };
        t.default = n
    }
    ));
    f(d);
    var h, y, v, m, b, g = f(p((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n, r = (n = d) && n.__esModule ? n : {
            default: n
        };
        var o = function(e, t) {
            if ("throw" === t)
                throw new Error(e);
            return "warn" === t && console.warn(e),
            null
        };
        t.default = function(e, t, n) {
            var l = Object.keys(t)
              , i = n || {}
              , u = i.handleMissingStyleName
              , _ = void 0 === u ? r.default.handleMissingStyleName : u
              , a = i.autoResolveMultipleImports
              , c = void 0 === a ? r.default.autoResolveMultipleImports : a;
            return e ? e.split(" ").filter((function(e) {
                return e
            }
            )).map((function(e) {
                if (function(e) {
                    return -1 !== e.indexOf(".")
                }(e))
                    return function(e, t, n) {
                        var l = e.split(".")
                          , i = l[0]
                          , u = l[1]
                          , _ = n || r.default.handleMissingStyleName;
                        return u ? t[i] ? t[i][u] ? t[i][u] : o("CSS module does not exist: " + u, _) : o("CSS module import does not exist: " + i, _) : o("Invalid style name: " + e, _)
                    }(e, t, _);
                if (0 === l.length)
                    throw new Error("Cannot use styleName attribute for style name '" + e + "' without importing at least one stylesheet.");
                if (l.length > 1) {
                    if (!c)
                        throw new Error("Cannot use anonymous style name '" + e + "' with more than one stylesheet import without setting 'autoResolveMultipleImports' to true.");
                    return function(e, t, n) {
                        var l = n || r.default.handleMissingStyleName
                          , i = Object.keys(t).map((function(n) {
                            return t[n][e] && n
                        }
                        )).filter((function(e) {
                            return e
                        }
                        ));
                        if (i.length > 1)
                            throw new Error('Cannot resolve styleName "' + e + '" because it is present in multiple imports:\n\n\t' + i.join("\n\t") + '\n\nYou can resolve this by using a named import, e.g:\n\n\timport foo from "' + i[0] + '";\n\t<div styleName="foo.' + e + '" />\n\n');
                        return 0 === i.length ? o("Could not resolve the styleName '" + e + "'.", l) : t[i[0]][e]
                    }(e, t, _)
                }
                var n = t[l[0]];
                return n[e] ? n[e] : o("Could not resolve the styleName '" + e + "'.", _)
            }
            )).filter((function(e) {
                return e
            }
            )).join(" ") : ""
        }
    }
    ))), w = {}, k = [], x = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function S(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function E(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function N(e, t, n) {
        var r, o, l, i = arguments, u = {};
        for (l in t)
            "key" == l ? r = t[l] : "ref" == l ? o = t[l] : u[l] = t[l];
        if (arguments.length > 3)
            for (n = [n],
            l = 3; l < arguments.length; l++)
                n.push(i[l]);
        if (null != n && (u.children = n),
        "function" == typeof e && null != e.defaultProps)
            for (l in e.defaultProps)
                void 0 === u[l] && (u[l] = e.defaultProps[l]);
        return C(e, u, r, o, null)
    }
    function C(e, t, n, r, o) {
        var l = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: o
        };
        return null == o && (l.__v = l),
        null != h.vnode && h.vnode(l),
        l
    }
    function j(e) {
        return e.children
    }
    function M(e, t) {
        this.props = e,
        this.context = t
    }
    function O(e, t) {
        if (null == t)
            return e.__ ? O(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e)
                return n.__e;
        return "function" == typeof e.type ? O(e) : null
    }
    function A(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return A(e)
        }
    }
    function P(e) {
        (!e.__d && (e.__d = !0) && y.push(e) && !T.__r++ || m !== h.debounceRendering) && ((m = h.debounceRendering) || v)(T)
    }
    function T() {
        for (var e; T.__r = y.length; )
            e = y.sort((function(e, t) {
                return e.__v.__b - t.__v.__b
            }
            )),
            y = [],
            e.some((function(e) {
                var t, n, r, o, l, i, u;
                e.__d && (i = (l = (t = e).__v).__e,
                (u = t.__P) && (n = [],
                (r = S({}, l)).__v = r,
                o = W(u, l, r, t.__n, void 0 !== u.ownerSVGElement, null != l.__h ? [i] : null, n, null == i ? O(l) : i, l.__h),
                q(n, l),
                o != i && A(l)))
            }
            ))
    }
    function H(e, t, n, r, o, l, i, u, _, a) {
        var c, s, f, p, d, h, y, v = r && r.__k || k, m = v.length;
        for (_ == w && (_ = null != i ? i[0] : m ? O(r, 0) : null),
        n.__k = [],
        c = 0; c < t.length; c++)
            if (null != (p = n.__k[c] = null == (p = t[c]) || "boolean" == typeof p ? null : "string" == typeof p || "number" == typeof p ? C(null, p, null, null, p) : Array.isArray(p) ? C(j, {
                children: p
            }, null, null, null) : null != p.__e || null != p.__c ? C(p.type, p.props, p.key, null, p.__v) : p)) {
                if (p.__ = n,
                p.__b = n.__b + 1,
                null === (f = v[c]) || f && p.key == f.key && p.type === f.type)
                    v[c] = void 0;
                else
                    for (s = 0; s < m; s++) {
                        if ((f = v[s]) && p.key == f.key && p.type === f.type) {
                            v[s] = void 0;
                            break
                        }
                        f = null
                    }
                d = W(e, p, f = f || w, o, l, i, u, _, a),
                (s = p.ref) && f.ref != s && (y || (y = []),
                f.ref && y.push(f.ref, null, p),
                y.push(s, p.__c || d, p)),
                null != d ? (null == h && (h = d),
                _ = D(e, p, f, v, i, d, _),
                a || "option" != n.type ? "function" == typeof n.type && (n.__d = _) : e.value = "") : _ && f.__e == _ && _.parentNode != e && (_ = O(f))
            }
        if (n.__e = h,
        null != i && "function" != typeof n.type)
            for (c = i.length; c--; )
                null != i[c] && E(i[c]);
        for (c = m; c--; )
            null != v[c] && $(v[c], v[c]);
        if (y)
            for (c = 0; c < y.length; c++)
                z(y[c], y[++c], y[++c])
    }
    function D(e, t, n, r, o, l, i) {
        var u, _, a;
        if (void 0 !== t.__d)
            u = t.__d,
            t.__d = void 0;
        else if (o == n || l != i || null == l.parentNode)
            e: if (null == i || i.parentNode !== e)
                e.appendChild(l),
                u = null;
            else {
                for (_ = i,
                a = 0; (_ = _.nextSibling) && a < r.length; a += 2)
                    if (_ == l)
                        break e;
                e.insertBefore(l, i),
                u = i
            }
        return void 0 !== u ? u : l.nextSibling
    }
    function R(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || x.test(t) ? n : n + "px"
    }
    function F(e, t, n, r, o) {
        var l, i, u;
        if (o && "className" == t && (t = "class"),
        "style" === t)
            if ("string" == typeof n)
                e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""),
                r)
                    for (t in r)
                        n && t in n || R(e.style, t, "");
                if (n)
                    for (t in n)
                        r && n[t] === r[t] || R(e.style, t, n[t])
            }
        else
            "o" === t[0] && "n" === t[1] ? (l = t !== (t = t.replace(/Capture$/, "")),
            (i = t.toLowerCase())in e && (t = i),
            t = t.slice(2),
            e.l || (e.l = {}),
            e.l[t + l] = n,
            u = l ? U : I,
            n ? r || e.addEventListener(t, u, l) : e.removeEventListener(t, u, l)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
    function I(e) {
        this.l[e.type + !1](h.event ? h.event(e) : e)
    }
    function U(e) {
        this.l[e.type + !0](h.event ? h.event(e) : e)
    }
    function L(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++)
            (o = e.__k[r]) && (o.__ = e,
            o.__e && ("function" == typeof o.type && o.__k.length > 1 && L(o, t, n),
            t = D(n, o, o, e.__k, null, o.__e, t),
            "function" == typeof e.type && (e.__d = t)))
    }
    function W(e, t, n, r, o, l, i, u, _) {
        var a, c, s, f, p, d, y, v, m, b, g, w = t.type;
        if (void 0 !== t.constructor)
            return null;
        null != n.__h && (_ = n.__h,
        u = t.__e = n.__e,
        t.__h = null,
        l = [u]),
        (a = h.__b) && a(t);
        try {
            e: if ("function" == typeof w) {
                if (v = t.props,
                m = (a = w.contextType) && r[a.__c],
                b = a ? m ? m.props.value : a.__ : r,
                n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype"in w && w.prototype.render ? t.__c = c = new w(v,b) : (t.__c = c = new M(v,b),
                c.constructor = w,
                c.render = G),
                m && m.sub(c),
                c.props = v,
                c.state || (c.state = {}),
                c.context = b,
                c.__n = r,
                s = c.__d = !0,
                c.__h = []),
                null == c.__s && (c.__s = c.state),
                null != w.getDerivedStateFromProps && (c.__s == c.state && (c.__s = S({}, c.__s)),
                S(c.__s, w.getDerivedStateFromProps(v, c.__s))),
                f = c.props,
                p = c.state,
                s)
                    null == w.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(),
                    null != c.componentDidMount && c.__h.push(c.componentDidMount);
                else {
                    if (null == w.getDerivedStateFromProps && v !== f && null != c.componentWillReceiveProps && c.componentWillReceiveProps(v, b),
                    !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(v, c.__s, b) || t.__v === n.__v) {
                        c.props = v,
                        c.state = c.__s,
                        t.__v !== n.__v && (c.__d = !1),
                        c.__v = t,
                        t.__e = n.__e,
                        t.__k = n.__k,
                        c.__h.length && i.push(c),
                        L(t, u, e);
                        break e
                    }
                    null != c.componentWillUpdate && c.componentWillUpdate(v, c.__s, b),
                    null != c.componentDidUpdate && c.__h.push((function() {
                        c.componentDidUpdate(f, p, d)
                    }
                    ))
                }
                c.context = b,
                c.props = v,
                c.state = c.__s,
                (a = h.__r) && a(t),
                c.__d = !1,
                c.__v = t,
                c.__P = e,
                a = c.render(c.props, c.state, c.context),
                c.state = c.__s,
                null != c.getChildContext && (r = S(S({}, r), c.getChildContext())),
                s || null == c.getSnapshotBeforeUpdate || (d = c.getSnapshotBeforeUpdate(f, p)),
                g = null != a && a.type == j && null == a.key ? a.props.children : a,
                H(e, Array.isArray(g) ? g : [g], t, n, r, o, l, i, u, _),
                c.base = t.__e,
                t.__h = null,
                c.__h.length && i.push(c),
                y && (c.__E = c.__ = null),
                c.__e = !1
            } else
                null == l && t.__v === n.__v ? (t.__k = n.__k,
                t.__e = n.__e) : t.__e = B(n.__e, t, n, r, o, l, i, _);
            (a = h.diffed) && a(t)
        } catch (e) {
            t.__v = null,
            (_ || null != l) && (t.__e = u,
            t.__h = !!_,
            l[l.indexOf(u)] = null),
            h.__e(e, t, n)
        }
        return t.__e
    }
    function q(e, t) {
        h.__c && h.__c(t, e),
        e.some((function(t) {
            try {
                e = t.__h,
                t.__h = [],
                e.some((function(e) {
                    e.call(t)
                }
                ))
            } catch (e) {
                h.__e(e, t.__v)
            }
        }
        ))
    }
    function B(e, t, n, r, o, l, i, u) {
        var _, a, c, s, f, p = n.props, d = t.props;
        if (o = "svg" === t.type || o,
        null != l)
            for (_ = 0; _ < l.length; _++)
                if (null != (a = l[_]) && ((null === t.type ? 3 === a.nodeType : a.localName === t.type) || e == a)) {
                    e = a,
                    l[_] = null;
                    break
                }
        if (null == e) {
            if (null === t.type)
                return document.createTextNode(d);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, d.is && {
                is: d.is
            }),
            l = null,
            u = !1
        }
        if (null === t.type)
            p === d || u && e.data === d || (e.data = d);
        else {
            if (null != l && (l = k.slice.call(e.childNodes)),
            c = (p = n.props || w).dangerouslySetInnerHTML,
            s = d.dangerouslySetInnerHTML,
            !u) {
                if (null != l)
                    for (p = {},
                    f = 0; f < e.attributes.length; f++)
                        p[e.attributes[f].name] = e.attributes[f].value;
                (s || c) && (s && (c && s.__html == c.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""))
            }
            (function(e, t, n, r, o) {
                var l;
                for (l in n)
                    "children" === l || "key" === l || l in t || F(e, l, null, n[l], r);
                for (l in t)
                    o && "function" != typeof t[l] || "children" === l || "key" === l || "value" === l || "checked" === l || n[l] === t[l] || F(e, l, t[l], n[l], r)
            }
            )(e, d, p, o, u),
            s ? t.__k = [] : (_ = t.props.children,
            H(e, Array.isArray(_) ? _ : [_], t, n, r, "foreignObject" !== t.type && o, l, i, w, u)),
            u || ("value"in d && void 0 !== (_ = d.value) && (_ !== e.value || "progress" === t.type && !_) && F(e, "value", _, p.value, !1),
            "checked"in d && void 0 !== (_ = d.checked) && _ !== e.checked && F(e, "checked", _, p.checked, !1))
        }
        return e
    }
    function z(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            h.__e(e, n)
        }
    }
    function $(e, t, n) {
        var r, o, l;
        if (h.unmount && h.unmount(e),
        (r = e.ref) && (r.current && r.current !== e.__e || z(r, null, t)),
        n || "function" == typeof e.type || (n = null != (o = e.__e)),
        e.__e = e.__d = void 0,
        null != (r = e.__c)) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount()
                } catch (e) {
                    h.__e(e, t)
                }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (l = 0; l < r.length; l++)
                r[l] && $(r[l], t, n);
        null != o && E(o)
    }
    function G(e, t, n) {
        return this.constructor(e, n)
    }
    h = {
        __e: function(e, t) {
            for (var n, r, o, l = t.__h; t = t.__; )
                if ((n = t.__c) && !n.__)
                    try {
                        if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)),
                        o = n.__d),
                        null != n.componentDidCatch && (n.componentDidCatch(e),
                        o = n.__d),
                        o)
                            return t.__h = l,
                            n.__E = n
                    } catch (t) {
                        e = t
                    }
            throw e
        }
    },
    M.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = S({}, this.state),
        "function" == typeof e && (e = e(S({}, n), this.props)),
        e && S(n, e),
        null != e && this.__v && (t && this.__h.push(t),
        P(this))
    }
    ,
    M.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        P(this))
    }
    ,
    M.prototype.render = j,
    y = [],
    v = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    T.__r = 0,
    b = w;
    var V = [{
        background: "#e2d3b6 url(https://www.toptal.com/designers/subtlepatterns/patterns/vintage-concrete.png)",
        sidebar_background: "#e2d3b6 url(https://www.toptal.com/designers/subtlepatterns/patterns/vintage-concrete.png)",
        card_background: "url(https://www.toptal.com/designers/subtlepatterns/patterns/paper.png)",
        foreground_color: "#363636",
        border_color: "#fff",
        highlight: ["#fff", "#fff", "#fff", "#95a5b3", "#363636", "#262b2f", "#000000", "#000000", "#5d6c7b", "#40464a", "#2980b9", "#be516e", "#237dac", "#944770", "#239371", "#fff"],
        color: ["#e2d3b6", "#e2d3b6"]
    }].concat(a([["#e84701", "#e84701 url(https://cdn.jsdelivr.net/gh/ikeq/inside-static@assets/hodgepodge.jpg)"], ["#ff76ab", "#ff76ab linear-gradient(to bottom,#ff76ab 0%,#ff5640 100%)"], ["#1a1a1a", "#1a1a1a url(https://cdn.jsdelivr.net/gh/ikeq/inside-static@assets/ocean.jpg)"]].map((function(e) {
        return {
            accent_color: e[0],
            sidebar_background: e[1]
        }
    }
    ))), a(["673ab7", "3f51b5", "2196f3", "009688", "4caf50", "ff9800", "ff5722", "795548", "607D8B", "2a2b33"].map((function(e) {
        return {
            accent_color: "#" + e,
            sidebar_background: "#" + e
        }
    }
    ))));
    function J() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.reduce((function(e, t) {
            return t && e.push(t),
            e
        }
        ), []).join(" ")
    }
    !function(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0]
              , o = document.createElement("style");
            o.type = "text/css",
            "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o),
            o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
        }
    }("is-palette{display:block;margin:1rem auto;max-width:calc(9rem + 12px);line-height:1}is-palette .x7c0f4{display:flex;flex-wrap:wrap;justify-content:center}is-palette .x1a81a{margin:1px;width:1.5rem;height:1.5rem;border-radius:1.5rem;background-size:60px!important;font-size:1.5rem;box-sizing:border-box;cursor:pointer;border:1px solid transparent;transition:transform .15s}is-palette .x1a81a:hover{transform:scale(1.1)}is-palette .x1a81a.x8ec5b,is-palette .x1a81a:hover{border-color:var(--inside-foreground-color)}is-palette .x1a81a.xd6736{width:calc(3rem + 2px)}");
    var Y, K, Q, X = 0, Z = [], ee = h.__r, te = h.diffed, ne = h.__c, re = h.unmount;
    function oe(e, t) {
        h.__h && h.__h(K, e, X || t),
        X = 0;
        var n = K.__H || (K.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({}),
        n.__[e]
    }
    function le(e) {
        return X = 1,
        function(e, t, n) {
            var r = oe(Y++, 2);
            return r.t = e,
            r.__c || (r.__ = [n ? n(t) : ce(void 0, t), function(e) {
                var t = r.t(r.__[0], e);
                r.__[0] !== t && (r.__ = [t, r.__[1]],
                r.__c.setState({}))
            }
            ],
            r.__c = K),
            r.__
        }(ce, e)
    }
    function ie() {
        Z.some((function(e) {
            if (e.__P)
                try {
                    e.__H.__h.forEach(_e),
                    e.__H.__h.forEach(ae),
                    e.__H.__h = []
                } catch (t) {
                    return e.__H.__h = [],
                    h.__e(t, e.__v),
                    !0
                }
        }
        )),
        Z = []
    }
    h.__r = function(e) {
        ee && ee(e),
        Y = 0;
        var t = (K = e.__c).__H;
        t && (t.__h.forEach(_e),
        t.__h.forEach(ae),
        t.__h = [])
    }
    ,
    h.diffed = function(e) {
        te && te(e);
        var t = e.__c;
        t && t.__H && t.__H.__h.length && (1 !== Z.push(t) && Q === h.requestAnimationFrame || ((Q = h.requestAnimationFrame) || function(e) {
            var t, n = function() {
                clearTimeout(r),
                ue && cancelAnimationFrame(t),
                setTimeout(e)
            }, r = setTimeout(n, 100);
            ue && (t = requestAnimationFrame(n))
        }
        )(ie))
    }
    ,
    h.__c = function(e, t) {
        t.some((function(e) {
            try {
                e.__h.forEach(_e),
                e.__h = e.__h.filter((function(e) {
                    return !e.__ || ae(e)
                }
                ))
            } catch (n) {
                t.some((function(e) {
                    e.__h && (e.__h = [])
                }
                )),
                t = [],
                h.__e(n, e.__v)
            }
        }
        )),
        ne && ne(e, t)
    }
    ,
    h.unmount = function(e) {
        re && re(e);
        var t = e.__c;
        if (t && t.__H)
            try {
                t.__H.__.forEach(_e)
            } catch (e) {
                h.__e(e, t.__v)
            }
    }
    ;
    var ue = "function" == typeof requestAnimationFrame;
    function _e(e) {
        "function" == typeof e.u && e.u()
    }
    function ae(e) {
        e.u = e.__()
    }
    function ce(e, t) {
        return "function" == typeof t ? t(e) : t
    }
    var se = {
        "./style.scss": {
            root: "x7c0f4",
            anchor: "x1a81a",
            "is-active": "x8ec5b",
            "is-lg": "xd6736"
        }
    };
    function fe() {
        var e = _(le(-1), 2)
          , t = e[0]
          , n = e[1];
        return N("div", {
            class: "x7c0f4"
        }, V.map((function(e, r) {
            var o = /(url\(|gradient)/.test(e.sidebar_background);
            return N("a", {
                style: {
                    background: e.sidebar_background || e.background || e.accent_color
                },
                title: JSON.stringify(e, null, 2),
                onClick: function() {
                    var t;
                    n(r),
                    t = e,
                    document.dispatchEvent(new CustomEvent("inside",{
                        detail: {
                            type: "theme",
                            data: t
                        }
                    }))
                },
                class: g(J("anchor", o && "is-lg", t === r && "is-active"), se, {
                    autoResolveMultipleImports: !0,
                    handleMissingStyleName: "ignore"
                })
            })
        }
        )))
    }
    customElements.define("is-palette", function(l) {
        !function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && r(e, t)
        }(p, l);
        var i, _, a, c, s, f = (i = p,
        _ = o(),
        function() {
            var e, t = n(i);
            if (_) {
                var r = n(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else
                e = t.apply(this, arguments);
            return u(this, e)
        }
        );
        function p() {
            return e(this, p),
            f.apply(this, arguments)
        }
        return a = p,
        (c = [{
            key: "connectedCallback",
            value: function() {
                !function(e, t, n) {
                    var r, o, l;
                    h.__ && h.__(e, t),
                    o = (r = n === b) ? null : n && n.__k || t.__k,
                    e = N(j, null, [e]),
                    l = [],
                    W(t, (r ? t : n || t).__k = e, o || w, w, void 0 !== t.ownerSVGElement, n && !r ? [n] : o ? null : t.childNodes.length ? k.slice.call(t.childNodes) : null, l, n || w, r),
                    q(l, e)
                }(N(fe, null), this)
            }
        }]) && t(a.prototype, c),
        s && t(a, s),
        p
    }(i(HTMLElement)))
}();
