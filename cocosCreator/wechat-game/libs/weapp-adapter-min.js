!function (e) { function t(o) { if (n[o]) return n[o].exports; var r = n[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports } var n = {}; t.m = e, t.c = n, t.p = "", t(0) }([function (e, t, n) { "use strict"; function o(e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t } function r() { a.addEventListener = a.canvas.addEventListener = function (e, t) { a.document.addEventListener(e, t) }, a.removeEventListener = a.canvas.removeEventListener = function (e, t) { a.document.removeEventListener(e, t) }; var e = wx.getSystemInfoSync().platform; if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) { for (var t in a) { var n = Object.getOwnPropertyDescriptor(i, t); n && !0 !== n.configurable || Object.defineProperty(window, t, { value: a[t] }) } for (var o in a.document) { var r = Object.getOwnPropertyDescriptor(i.document, o); r && !0 !== r.configurable || Object.defineProperty(i.document, o, { value: a.document[o] }) } window.parent = window } else { for (var u in a) i[u] = a[u]; i.window = a, window = i, window.top = window.parent = window } } var a = o(n(1)), i = GameGlobal; GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, r()) }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.cancelAnimationFrame = t.requestAnimationFrame = t.clearInterval = t.clearTimeout = t.setInterval = t.setTimeout = t.canvas = t.location = t.localStorage = t.HTMLElement = t.FileReader = t.Audio = t.Image = t.WebSocket = t.XMLHttpRequest = t.navigator = t.document = void 0; var r = n(2); Object.keys(r).forEach(function (e) { "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, { enumerable: !0, get: function () { return r[e] } }) }); var a = n(3); Object.keys(a).forEach(function (e) { "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, { enumerable: !0, get: function () { return a[e] } }) }); var i = o(n(9)), u = o(n(10)), c = o(n(17)), s = o(n(18)), l = o(n(19)), f = o(n(11)), p = o(n(12)), d = o(n(20)), h = o(n(4)), y = o(n(21)), v = o(n(22)); t.document = u.default, t.navigator = c.default, t.XMLHttpRequest = s.default, t.WebSocket = l.default, t.Image = f.default, t.Audio = p.default, t.FileReader = d.default, t.HTMLElement = h.default, t.localStorage = y.default, t.location = v.default; var b = new i.default; t.canvas = b, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, t.cancelAnimationFrame = cancelAnimationFrame }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = wx.getSystemInfoSync(), o = n.screenWidth, r = n.screenHeight, a = n.devicePixelRatio, i = t.innerWidth = o, u = t.innerHeight = r; t.devicePixelRatio = a; t.screen = { availWidth: i, availHeight: u }, t.performance = { now: function () { return Date.now() / 1e3 } }, t.ontouchstart = null, t.ontouchmove = null, t.ontouchend = null }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }), t.HTMLCanvasElement = t.HTMLImageElement = void 0; var u = o(n(4)); t.HTMLImageElement = function (e) { function t() { return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "img")) } return i(t, u.default), t }(), t.HTMLCanvasElement = function (e) { function t() { return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "canvas")) } return i(t, u.default), t }() }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), c = o(n(5)), s = n(8), l = n(2), f = function (e) { function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; r(this, t); var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return n.className = "", n.childern = [], n.style = { width: l.innerWidth + "px", height: l.innerHeight + "px" }, n.insertBefore = s.noop, n.innerHTML = "", n.tagName = e.toUpperCase(), n } return i(t, c.default), u(t, [{ key: "setAttribute", value: function (e, t) { this[e] = t } }, { key: "getAttribute", value: function (e) { return this[e] } }, { key: "getBoundingClientRect", value: function () { return { top: 0, left: 0, width: l.innerWidth, height: l.innerHeight } } }, { key: "focus", value: function () { } }, { key: "clientWidth", get: function () { var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length; return Number.isNaN(e) ? 0 : e } }, { key: "clientHeight", get: function () { var e = parseInt(this.style.fontSize, 10); return Number.isNaN(e) ? 0 : e } }]), t }(); t.default = f }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = o(n(6)), c = function (e) { function t() { r(this, t); var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return e.className = "", e.children = [], e } return i(t, u.default), t }(); t.default = c }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), c = o(n(7)), s = function (e) { function t() { r(this, t); var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return e.childNodes = [], e } return i(t, c.default), u(t, [{ key: "appendChild", value: function (e) { if (!(e instanceof t)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'."); this.childNodes.push(e) } }, { key: "cloneNode", value: function () { var e = Object.create(this); return Object.assign(e, this), e } }, { key: "removeChild", value: function (e) { var t = this.childNodes.findIndex(function (t) { return t === e }); return t > -1 ? this.childNodes.splice(t, 1) : null } }]), t }(); t.default = s }, function (e, t) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), r = new WeakMap, a = function () { function e() { n(this, e), r.set(this, {}) } return o(e, [{ key: "addEventListener", value: function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = r.get(this); o || (o = {}, r.set(this, o)), o[e] || (o[e] = []), o[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.") } }, { key: "removeEventListener", value: function (e, t) { var n = r.get(this)[e]; if (n && n.length > 0) for (var o = n.length; o--; o > 0)if (n[o] === t) { n.splice(o, 1); break } } }, { key: "dispatchEvent", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = r.get(this)[e.type]; if (t) for (var n = 0; n < t.length; n++)t[n](e) } }]), e }(); t.default = a }, function (e, t) { "use strict"; function n() { } Object.defineProperty(t, "__esModule", { value: !0 }), t.noop = n }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r() { var e = wx.createCanvas(); e.type = "canvas", e.__proto__.__proto__ = new a.default("canvas"); e.getContext; return e.getBoundingClientRect = function () { return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight } }, e } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = r; n(3); var a = o(n(4)); o(n(10)) }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t } Object.defineProperty(t, "__esModule", { value: !0 }); var a = r(n(1)), i = o(n(4)), u = o(n(11)), c = o(n(12)), s = o(n(9)); n(15); var l = {}, f = { readyState: "complete", visibilityState: "visible", documentElement: a, hidden: !1, style: {}, location: a.location, ontouchstart: null, ontouchmove: null, ontouchend: null, head: new i.default("head"), body: new i.default("body"), createElement: function (e) { return "canvas" === e ? new s.default : "audio" === e ? new c.default : "img" === e ? new u.default : new i.default(e) }, getElementById: function (e) { return e === a.canvas.id ? a.canvas : null }, getElementsByTagName: function (e) { return "head" === e ? [f.head] : "body" === e ? [f.body] : "canvas" === e ? [a.canvas] : [] }, querySelector: function (e) { return "head" === e ? f.head : "body" === e ? f.body : "canvas" === e ? a.canvas : e === "#" + a.canvas.id ? a.canvas : null }, querySelectorAll: function (e) { return "head" === e ? [f.head] : "body" === e ? [f.body] : "canvas" === e ? [a.canvas] : [] }, addEventListener: function (e, t) { l[e] || (l[e] = []), l[e].push(t) }, removeEventListener: function (e, t) { var n = l[e]; if (n && n.length > 0) for (var o = n.length; o--; o > 0)if (n[o] === t) { n.splice(o, 1); break } }, dispatchEvent: function (e) { var t = l[e.type]; if (t) for (var n = 0; n < t.length; n++)t[n](e) } }; t.default = f }, function (e, t) { "use strict"; function n() { return wx.createImage() } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), c = o(n(13)), s = 0, l = 1, f = 2, p = 3, d = 4, h = new WeakMap, y = new WeakMap, v = (new WeakMap, new WeakMap, function (e) { function t(e) { r(this, t); var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); n.HAVE_NOTHING = s, n.HAVE_METADATA = l, n.HAVE_CURRENT_DATA = f, n.HAVE_FUTURE_DATA = p, n.HAVE_ENOUGH_DATA = d, n.readyState = s, y.set(n, ""); var o = wx.createInnerAudioContext(); return h.set(n, o), o.onCanplay(function () { n.dispatchEvent({ type: "load" }), n.dispatchEvent({ type: "loadend" }), n.dispatchEvent({ type: "canplay" }), n.dispatchEvent({ type: "canplaythrough" }), n.dispatchEvent({ type: "loadedmetadata" }), n.readyState = f }), o.onPlay(function () { n.dispatchEvent({ type: "play" }) }), o.onPause(function () { n.dispatchEvent({ type: "pause" }) }), o.onEnded(function () { n.dispatchEvent({ type: "ended" }), n.readyState = d }), o.onError(function () { n.dispatchEvent({ type: "error" }) }), e && (h.get(n).src = e), n } return i(t, c.default), u(t, [{ key: "load", value: function () { console.warn("HTMLAudioElement.load() is not implemented.") } }, { key: "play", value: function () { h.get(this).play() } }, { key: "pause", value: function () { h.get(this).pause() } }, { key: "canPlayType", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return "string" != typeof e ? "" : e.indexOf("audio/mpeg") > -1 || e.indexOf("audio/mp4") ? "probably" : "" } }, { key: "cloneNode", value: function () { var e = new t; return e.loop = h.get(this).loop, e.autoplay = h.get(this).loop, e.src = this.src, e } }, { key: "currentTime", get: function () { return h.get(this).currentTime }, set: function (e) { h.get(this).seek(e) } }, { key: "src", get: function () { return y.get(this) }, set: function (e) { y.set(this, e), h.get(this).src = e } }, { key: "loop", get: function () { return h.get(this).loop }, set: function (e) { h.get(this).loop = e } }, { key: "autoplay", get: function () { return h.get(this).autoplay }, set: function (e) { h.get(this).autoplay = e } }, { key: "paused", get: function () { return h.get(this).paused } }]), t }()); t.default = v }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = o(n(14)), c = function (e) { function t() { return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "audio")) } return i(t, u.default), t }(); t.default = c }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), c = o(n(4)), s = function (e) { function t(e) { return r(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) } return i(t, c.default), u(t, [{ key: "addTextTrack", value: function () { } }, { key: "captureStream", value: function () { } }, { key: "fastSeek", value: function () { } }, { key: "load", value: function () { } }, { key: "pause", value: function () { } }, { key: "play", value: function () { } }]), t }(); t.default = s }, function (e, t, n) { "use strict"; n(16) }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } function r(e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t } function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function i(e) { return function (t) { var n = new l(e); n.touches = t.touches, n.targetTouches = Array.prototype.slice.call(t.touches), n.changedTouches = t.changedTouches, n.timeStamp = t.timeStamp, c.default.dispatchEvent(n) } } var u = r(n(1)), c = o(n(10)), s = n(8), l = function e(t) { a(this, e), this.target = u.canvas, this.currentTarget = u.canvas, this.touches = [], this.targetTouches = [], this.changedTouches = [], this.preventDefault = s.noop, this.stopPropagation = s.noop, this.type = t }; wx.onTouchStart(i("touchstart")), wx.onTouchMove(i("touchmove")), wx.onTouchEnd(i("touchend")), wx.onTouchCancel(i("touchcancel")) }, function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(8), r = { platform: wx.getSystemInfoSync().platform, language: "zh-cn", appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN", onLine: !0, geolocation: { getCurrentPosition: o.noop, watchPosition: o.noop, clearWatch: o.noop } }; t.default = r }, function (e, t) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function o(e) { if ("function" == typeof this["on" + e]) { for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)n[o - 1] = arguments[o]; this["on" + e].apply(this, n) } } function r(e) { this.readyState = e, o.call(this, "readystatechange") } Object.defineProperty(t, "__esModule", { value: !0 }); var a = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), i = new WeakMap, u = new WeakMap, c = new WeakMap, s = new WeakMap, l = new WeakMap, f = function () { function e() { n(this, e), this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, this.withCredentials = !1, c.set(this, { "content-type": "application/x-www-form-urlencoded" }), s.set(this, {}) } return a(e, [{ key: "abort", value: function () { var e = l.get(this); e && e.abort() } }, { key: "getAllResponseHeaders", value: function () { var e = s.get(this); return Object.keys(e).map(function (t) { return t + ": " + e[t] }).join("\n") } }, { key: "getResponseHeader", value: function (e) { return s.get(this)[e] } }, { key: "open", value: function (t, n) { u.set(this, t), i.set(this, n), r.call(this, e.OPENED) } }, { key: "overrideMimeType", value: function () { } }, { key: "send", value: function () { var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; if (this.readyState !== e.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED."); wx.request({ data: n, url: i.get(this), method: u.get(this), header: c.get(this), responseType: this.responseType, success: function (n) { var a = n.data, i = n.statusCode, u = n.header; if ("string" != typeof a && !(a instanceof ArrayBuffer)) try { a = JSON.stringify(a) } catch (e) { a = a } if (t.status = i, s.set(t, u), o.call(t, "loadstart"), r.call(t, e.HEADERS_RECEIVED), r.call(t, e.LOADING), t.response = a, a instanceof ArrayBuffer) { t.responseText = ""; for (var c = new Uint8Array(a), l = c.byteLength, f = 0; f < l; f++)t.responseText += String.fromCharCode(c[f]) } else t.responseText = a; r.call(t, e.DONE), o.call(t, "load"), o.call(t, "loadend") }, fail: function (e) { var n = e.errMsg; -1 !== n.indexOf("abort") ? o.call(t, "abort") : o.call(t, "error", n), o.call(t, "loadend") } }) } }, { key: "setRequestHeader", value: function (e, t) { var n = c.get(this); n[e] = t, c.set(this, n) } }]), e }(); f.UNSEND = 0, f.OPENED = 1, f.HEADERS_RECEIVED = 2, f.LOADING = 3, f.DONE = 4, t.default = f }, function (e, t) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), r = new WeakMap, a = function () { function e(t) { var o = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; if (n(this, e), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", this.readyState = 3, "string" != typeof t || !/(^ws:\/\/)|(^wss:\/\/)/.test(t)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + t + "' is invalid"); this.url = t, this.readyState = e.CONNECTING; var i = wx.connectSocket({ url: t, protocols: Array.isArray(a) ? a : [a] }); return r.set(this, i), i.onClose(function (t) { o.readyState = e.CLOSED, "function" == typeof o.onclose && o.onclose(t) }), i.onMessage(function (e) { "function" == typeof o.onmessage && o.onmessage(e) }), i.onOpen(function () { o.readyState = e.OPEN, "function" == typeof o.onopen && o.onopen() }), i.onError(function (e) { "function" == typeof o.onerror && o.onerror(new Error(e.errMsg)) }), this } return o(e, [{ key: "close", value: function (t, n) { this.readyState = e.CLOSING, r.get(this).close({ code: t, reason: n }) } }, { key: "send", value: function (e) { if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid"); r.get(this).send({ data: e }) } }]), e }(); a.CONNECTING = 0, a.OPEN = 1, a.CLOSING = 2, a.CLOSED = 3, t.default = a }, function (e, t) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var o = function e() { n(this, e) }; t.default = o }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = { get length() { return wx.getStorageInfoSync().keys.length }, key: function (e) { return wx.getStorageInfoSync().keys[e] }, getItem: function (e) { return wx.getStorageSync(e) }, setItem: function (e, t) { return wx.setStorageSync(e, t) }, removeItem: function (e) { wx.removeStorageSync(e) }, clear: function () { wx.clearStorageSync() } }; t.default = n }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = { href: "game.js", reload: function () { } }; t.default = n }]);