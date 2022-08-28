!
function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis: e || self)["jessibuca-demo"] = t()
} (this,
function() {
	"use strict";
	const r = "player",
	m = "playbackTF",
	M = "flv",
	U = "webTransport",
	N = {
		url: "",
		playbackConfig: {},
		playType: r,
		playbackForwardMaxRateDecodeIFrame: 4,
		playOptions: {}
	},
	j = {
		playType: r,
		container: "",
		videoBuffer: 1e3,
		videoBufferDelay: 1e3,
		isResize: !0,
		isFullResize: !1,
		isFlv: !1,
		isHls: !1,
		isWebrtc: !1,
		debug: !1,
		hotKey: !1,
		loadingTimeout: 10,
		heartTimeout: 10,
		timeout: 10,
		loadingTimeoutReplay: !0,
		heartTimeoutReplay: !0,
		loadingTimeoutReplayTimes: 3,
		heartTimeoutReplayTimes: 3,
		supportDblclickFullscreen: !1,
		showBandwidth: !1,
		keepScreenOn: !1,
		isNotMute: !1,
		hasAudio: !0,
		hasVideo: !0,
		operateBtns: {
			fullscreen: !1,
			screenshot: !1,
			play: !1,
			audio: !1,
			record: !1,
			ptz: !1,
			quality: !1,
			zoom: !1,
			fullscreenFn: null,
			fullscreenExitFn: null,
			screenshotFn: null,
			playFn: null,
			pauseFn: null,
			recordFn: null,
			recordStopFn: null
		},
		watermarkConfig: {},
		controlAutoHide: !1,
		hasControl: !1,
		loadingText: "",
		background: "",
		decoder: "decoder-pro.js",
		url: "",
		rotate: 0,
		playbackConfig: {
			playList: [],
			fps: ""
		},
		qualityConfig: [],
		forceNoOffscreen: !0,
		hiddenAutoPause: !1,
		protocol: 2,
		demuxType: M,
		useWasm: !1,
		useWCS: !1,
		useSIMD: !1,
		wcsUseVideoRender: !0,
		wasmUseVideoRender: !1,
		mseUseCanvasRender: !1,
		useMSE: !1,
		useOffscreen: !1,
		autoWasm: !0,
		wasmDecodeErrorReplay: !0,
		openWebglAlignment: !1,
		wasmDecodeAudioSyncVideo: !0,
		playbackDelayTime: 1e3,
		playbackFps: 25,
		playbackForwardMaxRateDecodeIFrame: 4,
		playbackCurrentTimeMove: !0
	},
	_ = "init",
	V = "initVideo",
	H = "initAudio",
	K = "videoCode",
	G = "decode",
	v = {
		fullscreen: "fullscreen$2",
		webFullscreen: "webFullscreen",
		decoderWorkerInit: "decoderWorkerInit",
		play: "play",
		playing: "playing",
		pause: "pause",
		mute: "mute",
		load: "load",
		loading: "loading",
		videoInfo: "videoInfo",
		timeUpdate: "timeUpdate",
		audioInfo: "audioInfo",
		log: "log",
		error: "error",
		kBps: "kBps",
		timeout: "timeout",
		delayTimeout: "delayTimeout",
		loadingTimeout: "loadingTimeout",
		stats: "stats",
		performance: "performance",
		record: "record",
		recording: "recording",
		recordingTimestamp: "recordingTimestamp",
		recordStart: "recordStart",
		recordEnd: "recordEnd",
		recordCreateError: "recordCreateError",
		buffer: "buffer",
		videoFrame: "videoFrame",
		start: "start",
		metadata: "metadata",
		resize: "resize",
		streamEnd: "streamEnd",
		streamRate: "streamRate",
		streamAbps: "streamAbps",
		streamVbps: "streamVbps",
		streamSuccess: "streamSuccess",
		streamMessage: "streamMessage",
		streamError: "streamError",
		volumechange: "volumechange",
		destroy: "destroy",
		mseSourceOpen: "mseSourceOpen",
		mseSourceClose: "mseSourceClose",
		mseSourceended: "mseSourceended",
		mseSourceBufferError: "mseSourceBufferError",
		mseSourceBufferBusy: "mseSourceBufferBusy",
		mseSourceBufferFull: "mseSourceBufferFull",
		videoWaiting: "videoWaiting",
		videoTimeUpdate: "videoTimeUpdate",
		videoSyncAudio: "videoSyncAudio",
		playToRenderTimes: "playToRenderTimes",
		playbackTime: "playbackTime",
		playbackTimestamp: "playbackTimestamp",
		playbackPrecision: "playbackPrecision",
		playbackJustTime: "playbackJustTime",
		playbackStats: "playbackStats",
		playbackSeek: "playbackSeek",
		talkSuccess: "talkSuccess",
		talkGetUserMediaFail: "talkGetUserMediaFail",
		ptz: "ptz",
		streamQualityChange: "streamQualityChange",
		visibilityChange: "visibilityChange"
	},
	u = {
		load: v.load,
		timeUpdate: v.timeUpdate,
		videoInfo: v.videoInfo,
		audioInfo: v.audioInfo,
		error: v.error,
		kBps: v.kBps,
		log: v.log,
		start: v.start,
		timeout: v.timeout,
		loadingTimeout: v.loadingTimeout,
		delayTimeout: v.delayTimeout,
		fullscreen: "fullscreen",
		play: v.play,
		pause: v.pause,
		mute: v.mute,
		stats: v.stats,
		performance: v.performance,
		recordingTimestamp: v.recordingTimestamp,
		recordStart: v.recordStart,
		recordEnd: v.recordEnd,
		playToRenderTimes: v.playToRenderTimes,
		playbackSeek: v.playbackSeek,
		playbackStats: v.playbackStats,
		playbackTimestamp: v.playbackTimestamp,
		ptz: v.ptz,
		streamQualityChange: v.streamQualityChange
	},
	d = {
		playError: "playIsNotPauseOrUrlIsNull",
		fetchError: "fetchError",
		websocketError: "websocketError",
		webcodecsH265NotSupport: "webcodecsH265NotSupport",
		webcodecsDecodeError: "webcodecsDecodeError",
		mediaSourceH265NotSupport: "mediaSourceH265NotSupport",
		mediaSourceFull: v.mseSourceBufferFull,
		mseSourceBufferError: v.mseSourceBufferError,
		mediaSourceAppendBufferError: "mediaSourceAppendBufferError",
		mediaSourceBufferListLarge: "mediaSourceBufferListLarge",
		mediaSourceAppendBufferEndTimeout: "mediaSourceAppendBufferEndTimeout",
		wasmDecodeError: "wasmDecodeError",
		hlsError: "hlsError",
		webrtcError: "webrtcError",
		webglAlignmentError: "webglAlignmentError",
		webcodecsWidthOrHeightChange: "webcodecsWidthOrHeightChange"
	},
	W = "notConnect",
	o = {
		download: "download",
		base64: "base64",
		blob: "blob"
	},
	q = {
		7 : "H264(AVC)",
		12 : "H265(HEVC)"
	},
	Q = {
		10 : "AAC",
		7 : "ALAW",
		8 : "MULAW"
	},
	z = "webm",
	J = "webcodecs",
	t = "webgl",
	X = "offscreen",
	Y = 'video/mp4; codecs="avc1.64002A"',
	Z = 'video/mp4; codecs="hev1.1.6.L123.b0"',
	h = "oneHour",
	$ = "halfHour",
	f = "fiveMin",
	A = {
		oneHour: "one-hour",
		halfHour: "half-hour",
		tenMin: "ten-min",
		fiveMin: "five-min"
	},
	i = ["oneHour", "halfHour", "tenMin", "fiveMin"],
	ee = ["up", "right", "down", "left"],
	l = {
		png: "image/png",
		jpeg: "image/jpeg",
		webp: "image/webp"
	};
	class te {
		constructor(s) {
			this.log = function(e) {
				if (s._opt.debug) {
					for (var t = arguments.length,
					i = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
					console.log(`Jessibuca: [$ {
						e
					}]`, ...i)
				}
			},
			this.warn = function(e) {
				if (s._opt.debug) {
					for (var t = arguments.length,
					i = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
					console.warn(`Jessibuca: [$ {
						e
					}]`, ...i)
				}
			},
			this.error = function(e) {
				for (var t = arguments.length,
				i = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
				console.error(`Jessibuca: [$ {
					e
				}]`, ...i)
			}
		}
	}
	class ie {
		constructor(e) {
			this.destroys = [],
			this.proxy = this.proxy.bind(this),
			this.master = e
		}
		proxy(t, e, i) {
			let r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
			if (t) {
				if (Array.isArray(e)) return e.map(e = >this.proxy(t, e, i, r));
				t.addEventListener(e, i, r);
				var s = () = >t.removeEventListener(e, i, r);
				return this.destroys.push(s),
				s
			}
		}
		destroy() {
			this.master.debug && this.master.debug.log("Events", "destroy"),
			this.destroys.forEach(e = >e())
		}
	}
	var F = "undefined" != typeof globalThis ? globalThis: "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {};
	function re(e, t) {
		return e(t = {
			exports: {}
		},
		t.exports),
		t.exports
	}
	var p = re(function(e) {
		var a, t, o, i, r;
		a = "undefined" != typeof window && void 0 !== window.document ? window.document: {},
		t = e.exports,
		o = function() {
			for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = 0, r = t.length, s = {}; i < r; i++) if ((e = t[i]) && e[1] in a) {
				for (i = 0; i < e.length; i++) s[t[0][i]] = e[i];
				return s
			}
			return ! 1
		} (),
		i = {
			change: o.fullscreenchange,
			error: o.fullscreenerror
		},
		r = {
			request: function(s, n) {
				return new Promise(function(e, t) {
					var i = function() {
						this.off("change", i),
						e()
					}.bind(this),
					r = (this.on("change", i), (s = s || a.documentElement)[o.requestFullscreen](n));
					r instanceof Promise && r.then(i).
					catch(t)
				}.bind(this))
			},
			exit: function() {
				return new Promise(function(e, t) {
					var i, r;
					this.isFullscreen ? (i = function() {
						this.off("change", i),
						e()
					}.bind(this), this.on("change", i), (r = a[o.exitFullscreen]()) instanceof Promise && r.then(i).
					catch(t)) : e()
				}.bind(this))
			},
			toggle: function(e, t) {
				return this.isFullscreen ? this.exit() : this.request(e, t)
			},
			onchange: function(e) {
				this.on("change", e)
			},
			onerror: function(e) {
				this.on("error", e)
			},
			on: function(e, t) {
				e = i[e];
				e && a.addEventListener(e, t, !1)
			},
			off: function(e, t) {
				e = i[e];
				e && a.removeEventListener(e, t, !1)
			},
			raw: o
		},
		o ? (Object.defineProperties(r, {
			isFullscreen: {
				get: function() {
					return Boolean(a[o.fullscreenElement])
				}
			},
			element: {
				enumerable: !0,
				get: function() {
					return a[o.fullscreenElement]
				}
			},
			isEnabled: {
				enumerable: !0,
				get: function() {
					return Boolean(a[o.fullscreenEnabled])
				}
			}
		}), t ? e.exports = r: window.screenfull = r) : t ? e.exports = {
			isEnabled: !1
		}: window.screenfull = {
			isEnabled: !1
		}
	});
	function se() {}
	function ne(e) {
		let t = 0 < arguments.length && void 0 !== e ? e: "";
		const i = t.split(","),
		r = atob(i[1]),
		s = i[0].replace("data:", "").replace(";base64", "");
		let n = r.length,
		a = new Uint8Array(n);
		for (; n--;) a[n] = r.charCodeAt(n);
		return new File([a], "file", {
			type: s
		})
	}
	function g() {
		return (new Date).getTime()
	}
	function y(e, t, i) {
		return Math.max(Math.min(e, Math.max(t, i)), Math.min(t, i))
	}
	function b(t, i, e) {
		t && ("object" == typeof i && Object.keys(i).forEach(e = >{
			b(t, e, i[e])
		}), t.style[i] = e)
	}
	function ae(e, t, i) {
		i = !(2 < arguments.length && void 0 !== i) || i;
		if (!e) return 0;
		e = getComputedStyle(e, null).getPropertyValue(t);
		return i ? parseFloat(e) : e
	}
	function oe() {
		return (performance && "function" == typeof performance.now ? performance: Date).now()
	}
	function le(i) {
		let r = 0,
		s = oe();
		return e = >{
			var t;
			S(e) && (r += e, 1e3 <= (t = (e = oe()) - s) && (i(r / t * 1e3), s = e, r = 0))
		}
	}
	function E() {
		return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())
	}
	function ce(e, t) {
		if (0 === arguments.length) return null;
		var t = t || "{y}-{m}-{d} {h}:{i}:{s}",
		e = "object" == typeof e ? e: (e = +(e = 10 === ("" + e).length ? 1e3 * parseInt(e) : e), new Date(e)),
		r = {
			y: e.getFullYear(),
			m: e.getMonth() + 1,
			d: e.getDate(),
			h: e.getHours(),
			i: e.getMinutes(),
			s: e.getSeconds(),
			a: e.getDay()
		};
		return t.replace(/{(y|m|d|h|i|s|a)+}/g, (e, t) = >{
			var i = r[t];
			return "a" === t ? ["一", "二", "三", "四", "五", "六", "日"][i - 1] : (i = 0 < e.length && i < 10 ? "0" + i: i) || 0
		})
	}
	function S(e) {
		return "[object Number]" === Object.prototype.toString.call(e)
	}
	function c(e) {
		return null == e
	}
	function s(e) {
		return ! c(e)
	}
	function ue(e) {
		var t = {
			container: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			image: {
				src: "",
				width: "100",
				height: "60"
			},
			text: {
				content: "",
				fontSize: "14",
				color: "#000"
			}
		},
		i = Object.assign(t.image, e.image || {}),
		r = Object.assign(t.text, e.text || {});
		return Object.assign(t, e, {
			image: i,
			text: r
		})
	}
	function T(e) {
		let t = "";
		var i, r;
		return - 1 < e && (i = Math.floor(e / 60 / 60) % 60, r = Math.floor(e / 60) % 60, e = e % 60, r = Math.round(r), t = i < 10 ? "0" + i + ":": i + ":", r < 10 && (t += "0"), t += r + ":", e < 10 && (t += "0"), t += e),
		t
	}
	function w(e, t) {
		var i = Math.floor(t / 60 / 60) % 60,
		r = Math.floor(t / 60) % 60,
		t = t % 60;
		return new Date(e).setHours(i, r, t, 0)
	}
	function de(e) {
		return ("" + e).length
	}
	function he(e) {
		e = e || window.event;
		return e.target || e.srcElement
	}
	function k(e) {
		return "function" == typeof e
	}
	p.isEnabled;
	try {
		if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
			var e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
			if (e instanceof WebAssembly.Module) new WebAssembly.Instance(e),
			WebAssembly.Instance
		}
	} catch(e) {}
	class n {
		on(e, t, i) {
			const r = this.e || (this.e = {});
			return (r[e] || (r[e] = [])).push({
				fn: t,
				ctx: i
			}),
			this
		}
		once(r, s, n) {
			const a = this;
			function o() {
				a.off(r, o);
				for (var e = arguments.length,
				t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
				s.apply(n, t)
			}
			return o._ = s,
			this.on(r, o, n)
		}
		emit(e) {
			const t = ((this.e || (this.e = {}))[e] || []).slice();
			for (var i = arguments.length,
			r = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) r[s - 1] = arguments[s];
			for (let e = 0; e < t.length; e += 1) t[e].fn.apply(t[e].ctx, r);
			return this
		}
		off(e, i) {
			const t = this.e || (this.e = {});
			if (!e) return Object.keys(t).forEach(e = >{
				delete t[e]
			}),
			void delete this.e;
			const r = t[e],
			s = [];
			if (r && i) for (let e = 0, t = r.length; e < t; e += 1) r[e].fn !== i && r[e].fn._ !== i && s.push(r[e]);
			return s.length ? t[e] = s: delete t[e],
			this
		}
	}
	class fe extends n {
		constructor() {
			super(),
			this.videoInfo = {
				width: "",
				height: "",
				encType: ""
			},
			this.init = !1
		}
		resetInit() {
			this.videoInfo = {
				width: "",
				height: "",
				encType: ""
			},
			this.init = !1
		}
		destroy() {
			this.resetInit()
		}
		updateVideoInfo(e) {
			e.encTypeCode && (this.videoInfo.encType = q[e.encTypeCode]),
			e.width && (this.videoInfo.width = e.width),
			e.height && (this.videoInfo.height = e.height),
			this.videoInfo.encType && this.videoInfo.height && this.videoInfo.width && !this.init && (this.player.emit(v.videoInfo, this.videoInfo), this.init = !0)
		}
		clearView() {}
		play() {}
		pause() {}
	}
	var R = "object" == typeof window && window.window === window ? window: "object" == typeof self && self.self === self ? self: "object" == typeof global && global.global === global ? global: void 0;
	function Ae(e, t, i) {
		var r = new XMLHttpRequest;
		r.open("GET", e),
		r.responseType = "blob",
		r.onload = function() {
			C(r.response, t, i)
		},
		r.onerror = function() {
			console.error("could not download file")
		},
		r.send()
	}
	function pe(e) {
		var t = new XMLHttpRequest;
		t.open("HEAD", e, !1);
		try {
			t.send()
		} catch(e) {}
		return 200 <= t.status && t.status <= 299
	}
	function a(t) {
		try {
			t.dispatchEvent(new MouseEvent("click"))
		} catch(e) {
			var i = document.createEvent("MouseEvents");
			i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
			t.dispatchEvent(i)
		}
	}
	var ge = R.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
	C = "object" != typeof window || window !== R ?
	function() {}: "download" in HTMLAnchorElement.prototype && !ge ?
	function(e, t, i) {
		var r = R.URL || R.webkitURL,
		s = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
		t = t || e.name || "download",
		s.download = t,
		s.rel = "noopener",
		"string" == typeof e ? (s.href = e, s.origin !== location.origin ? pe(s.href) ? Ae(e, t, i) : a(s, s.target = "_blank") : a(s)) : (s.href = r.createObjectURL(e), setTimeout(function() {
			r.revokeObjectURL(s.href)
		},
		4e4), setTimeout(function() {
			a(s)
		},
		0))
	}: "msSaveOrOpenBlob" in navigator ?
	function(e, t, i) {
		var r;
		t = t || e.name || "download",
		"string" == typeof e ? pe(e) ? Ae(e, t, i) : ((r = document.createElement("a")).href = e, r.target = "_blank", setTimeout(function() {
			a(r)
		})) : navigator.msSaveOrOpenBlob((e = e, void 0 === (i = i) ? i = {
			autoBom: !1
		}: "object" != typeof i && (console.warn("Deprecated: Expected third argument to be a object"), i = {
			autoBom: !i
		}), i.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
			type: e.type
		}) : e), t)
	}: function(e, t, i, r) {
		if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), "string" == typeof e) return Ae(e, t, i);
		var s, n, a, t = "application/octet-stream" === e.type,
		i = /constructor/i.test(R.HTMLElement) || R.safari,
		o = /CriOS\/[\d]+/.test(navigator.userAgent); (o || t && i || ge) && "undefined" != typeof FileReader ? ((s = new FileReader).onloadend = function() {
			var e = s.result,
			e = o ? e: e.replace(/^data:[^;]*;/, "data:attachment/file;");
			r ? r.location.href = e: location = e,
			r = null
		},
		s.readAsDataURL(e)) : (n = R.URL || R.webkitURL, a = n.createObjectURL(e), r ? r.location = a: location.href = a, r = null, setTimeout(function() {
			n.revokeObjectURL(a)
		},
		4e4))
	};
	class me extends fe {
		constructor(e) {
			super(),
			this.player = e;
			const t = document.createElement("canvas");
			t.style.position = "absolute",
			t.style.top = 0,
			t.style.left = 0,
			this.$videoElement = t,
			e.$container.appendChild(this.$videoElement),
			this.context2D = null,
			this.contextGl = null,
			this.contextGlRender = null,
			this.contextGlDestroy = null,
			this.bitmaprenderer = null,
			this.renderType = null,
			this.controlHeight = 0,
			this._initCanvasRender()
		}
		destroy() {
			super.destroy(),
			this.contextGl && (this.contextGl = null),
			this.context2D && (this.context2D = null),
			this.contextGlRender && (this.contextGlDestroy && this.contextGlDestroy(), this.contextGlDestroy = null, this.contextGlRender = null),
			this.bitmaprenderer && (this.bitmaprenderer = null),
			this.renderType = null,
			this.videoInfo = {
				width: "",
				height: "",
				encType: "",
				encTypeCode: ""
			},
			this.player.$container.removeChild(this.$videoElement),
			this.init = !1,
			this.off()
		}
		_initContextGl() {
			this.contextGl = function(e) {
				let t = null;
				var i = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
				let r = 0;
				for (; ! t && r < i.length;) {
					var s = i[r];
					try {
						var n = {
							preserveDrawingBuffer: !0
						};
						t = e.getContext(s, n)
					} catch(e) {
						t = null
					}
					t && "function" == typeof t.getParameter || (t = null),
					++r
				}
				return t
			} (this.$videoElement);
			n = this.contextGl,
			e = this.player._opt.openWebglAlignment,
			c = ["attribute vec4 vertexPos;", "attribute vec4 texturePos;", "varying vec2 textureCoord;", "void main()", "{", "gl_Position = vertexPos;", "textureCoord = texturePos.xy;", "}"].join("\n"),
			t = ["precision highp float;", "varying highp vec2 textureCoord;", "uniform sampler2D ySampler;", "uniform sampler2D uSampler;", "uniform sampler2D vSampler;", "const mat4 YUV2RGB = mat4", "(", "1.1643828125, 0, 1.59602734375, -.87078515625,", "1.1643828125, -.39176171875, -.81296875, .52959375,", "1.1643828125, 2.017234375, 0, -1.081390625,", "0, 0, 0, 1", ");", "void main(void) {", "highp float y = texture2D(ySampler,  textureCoord).r;", "highp float u = texture2D(uSampler,  textureCoord).r;", "highp float v = texture2D(vSampler,  textureCoord).r;", "gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;", "}"].join("\n"),
			e && n.pixelStorei(n.UNPACK_ALIGNMENT, 1),
			e = n.createShader(n.VERTEX_SHADER),
			n.shaderSource(e, c),
			n.compileShader(e),
			n.getShaderParameter(e, n.COMPILE_STATUS) || (console.log("Vertex shader failed to compile: " + n.getShaderInfoLog(e)), n.deleteShader(e)),
			c = n.createShader(n.FRAGMENT_SHADER),
			n.shaderSource(c, t),
			n.compileShader(c),
			n.getShaderParameter(c, n.COMPILE_STATUS) || (console.log("Fragment shader failed to compile: " + n.getShaderInfoLog(c)), n.deleteShader(c)),
			r = n.createProgram(),
			n.attachShader(r, e),
			n.attachShader(r, c),
			n.linkProgram(r),
			n.getProgramParameter(r, n.LINK_STATUS) || console.log("Program failed to compile: " + n.getProgramInfoLog(r)),
			n.useProgram(r),
			i = n.createBuffer(),
			n.bindBuffer(n.ARRAY_BUFFER, i),
			n.bufferData(n.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), n.STATIC_DRAW),
			t = n.getAttribLocation(r, "vertexPos"),
			n.enableVertexAttribArray(t),
			n.vertexAttribPointer(t, 2, n.FLOAT, !1, 0, 0),
			s = n.createBuffer(),
			n.bindBuffer(n.ARRAY_BUFFER, s),
			n.bufferData(n.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), n.STATIC_DRAW),
			e = n.getAttribLocation(r, "texturePos"),
			n.enableVertexAttribArray(e),
			n.vertexAttribPointer(e, 2, n.FLOAT, !1, 0, 0),
			a = u("ySampler", 0),
			o = u("uSampler", 1),
			l = u("vSampler", 2);
			var n, e, t, r, i, s, a, o, l, c = {
				render: function(e, t, i, r, s) {
					n.viewport(0, 0, e, t),
					n.activeTexture(n.TEXTURE0),
					n.bindTexture(n.TEXTURE_2D, a),
					n.texImage2D(n.TEXTURE_2D, 0, n.LUMINANCE, e, t, 0, n.LUMINANCE, n.UNSIGNED_BYTE, i),
					n.activeTexture(n.TEXTURE1),
					n.bindTexture(n.TEXTURE_2D, o),
					n.texImage2D(n.TEXTURE_2D, 0, n.LUMINANCE, e / 2, t / 2, 0, n.LUMINANCE, n.UNSIGNED_BYTE, r),
					n.activeTexture(n.TEXTURE2),
					n.bindTexture(n.TEXTURE_2D, l),
					n.texImage2D(n.TEXTURE_2D, 0, n.LUMINANCE, e / 2, t / 2, 0, n.LUMINANCE, n.UNSIGNED_BYTE, s),
					n.drawArrays(n.TRIANGLE_STRIP, 0, 4)
				},
				renderYUV: function(e, t, i) {
					var r = i.slice(0, e * t),
					s = i.slice(e * t, e * t * 5 / 4),
					i = i.slice(e * t * 5 / 4, e * t * 3 / 2);
					n.viewport(0, 0, e, t),
					n.activeTexture(n.TEXTURE0),
					n.bindTexture(n.TEXTURE_2D, a),
					n.texImage2D(n.TEXTURE_2D, 0, n.LUMINANCE, e, t, 0, n.LUMINANCE, n.UNSIGNED_BYTE, r),
					n.activeTexture(n.TEXTURE1),
					n.bindTexture(n.TEXTURE_2D, o),
					n.texImage2D(n.TEXTURE_2D, 0, n.LUMINANCE, e / 2, t / 2, 0, n.LUMINANCE, n.UNSIGNED_BYTE, s),
					n.activeTexture(n.TEXTURE2),
					n.bindTexture(n.TEXTURE_2D, l),
					n.texImage2D(n.TEXTURE_2D, 0, n.LUMINANCE, e / 2, t / 2, 0, n.LUMINANCE, n.UNSIGNED_BYTE, i),
					n.drawArrays(n.TRIANGLE_STRIP, 0, 4)
				},
				destroy: function() {
					try {
						n.deleteProgram(r),
						n.deleteBuffer(i),
						n.deleteBuffer(s),
						n.deleteTexture(a),
						n.deleteTexture(o),
						n.deleteBuffer(l)
					} catch(e) {}
				}
			};
			function u(e, t) {
				var i = n.createTexture();
				return n.bindTexture(n.TEXTURE_2D, i),
				n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR),
				n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR),
				n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE),
				n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE),
				n.bindTexture(n.TEXTURE_2D, null),
				n.uniform1i(n.getUniformLocation(r, e), t),
				i
			}
			this.contextGlRender = c.renderYUV,
			this.contextGlDestroy = c.destroy
		}
		initCanvasViewSize() {
			this.$videoElement.width = this.videoInfo.width,
			this.$videoElement.height = this.videoInfo.height,
			this.resize()
		}
		screenshot(e, t, i, r) {
			e = e || g(),
			r = r || o.download;
			let s = .92; ! l[t] && o[t] && (r = t, t = "png", i = void 0),
			"string" == typeof i && (r = i, i = void 0),
			void 0 !== i && (s = Number(i));
			i = this.$videoElement.toDataURL(l[t] || l.png, s),
			t = ne(i);
			return r === o.base64 ? i: r === o.blob ? t: void(r === o.download && C(t, e))
		}
		screenshotWatermark(a) {
			return new Promise((s, t) = >{ (a = (a = "string" == typeof a ? {
					filename: a
				}: a) || {}).width = this.videoInfo.width,
				a.height = this.videoInfo.height,
				a.filename = a.filename || g(),
				a.format = a.format ? l[a.format] : l.png,
				a.quality = Number(a.quality) || .92,
				a.type = a.type || o.download;
				const n = this.$videoElement.toDataURL(a.format, a.quality);
				var e, c;
				e = n,
				c = a,
				new Promise((t, i) = >{
					let r = ue(c);
					if (!r.image.src && !r.text.content) return t(e);
					let s = document.createElement("canvas"),
					n = (s.width = c.width, s.height = c.height, s.getContext("2d")),
					a = 0,
					o = 0;
					S(r.left) ? a = r.left: S(r.right) && (a = s.width - r.right),
					S(r.top) ? o = r.top: S(r.bottom) && (o = s.height - r.bottom);
					const l = new Image;
					l.src = e,
					l.onload = () = >{
						if (n.drawImage(l, 0, 0), r.image && r.image.src) {
							const e = new Image;
							e.src = r.image.src,
							e.setAttribute("crossOrigin", "Anonymous"),
							e.onload = () = >{
								a -= r.image.width,
								n.drawImage(e, a, o, r.image.width, r.image.height),
								t(s.toDataURL(c.format, c.quality))
							},
							e.onerror = e = >{
								i()
							}
						} else r.text && r.text.content && (n.font = r.text.fontSize + "px 宋体", n.fillStyle = r.text.color, n.textAlign = "right", n.fillText(r.text.content, a, o), t(s.toDataURL(c.format, c.quality)))
					},
					l.onerror = e = >{
						i(e)
					}
				}).then(e = >{
					e = ne(e);
					if (a.type === o.base64) s(n);
					else if (a.type === o.blob) s(e);
					else if (a.type === o.download) {
						s(); {
							var t = a.filename;
							const i = document.createElement("a"),
							r = (i.download = t, URL.createObjectURL(e));
							return i.href = r,
							i.click(),
							void setTimeout(() = >{
								URL.revokeObjectURL(r)
							},
							(t = window.navigator.userAgent.toLowerCase()) && /iphone|ipad|ipod|ios/.test(t) ? 1e3: 0)
						}
					}
				}).
				catch(e = >{
					t(e)
				})
			})
		}
		render() {}
		clearView() {}
		play() {}
		pause() {}
    isAmd() {
      var canvas = document.createElement('canvas'),
      gl = canvas.getContext('experimental-webgl'),
      debugInfo = gl.getExtension('WEBGL_debug_renderer_info'),
      gpuInfo = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      return /Vulkan/.test(gpuInfo)
    }
		resize() {
			this.player.debug.log("canvasVideo", "resize");
			const e = this.player._opt;
      const isAmd = this.isAmd();
			let t = this.player.width,
			i = this.player.height;
			if (e.hasControl && !e.controlAutoHide) {
				const e = this.controlHeight;
				E() && this.player.fullscreen ? t -= e: i -= e
			}
			let r = this.$videoElement.width,
			s = this.$videoElement.height;
			var n = e.rotate,
			a = (t - r) / 2,
			o = (i - s) / 2,
			l = (270 !== n && 90 !== n || (r = this.$videoElement.height, s = this.$videoElement.width), t / r),
			c = i / s;
			let u = c < l ? c: l,
			d = (e.isResize || l != c && (u = l + "," + c), "scale(" + (u = e.isFullResize ? c < l ? l: c: u) + ")");
			n && (d += " rotateY(" + n + "deg)"),
      isAmd && (d += " rotateX(180deg)")
			this.$videoElement.style.transform = d,
			this.$videoElement.style.left = a + "px",
			this.$videoElement.style.top = o + "px"
		}
	}
	class ve extends me {
		constructor(e) {
			super(e),
			this.yuvList = [],
			this.controlHeight = 38,
			this.renderInterval = null,
			this.player.debug.log("CanvasVideo", "init")
		}
		destroy() {
			super.destroy(),
			this._stopRenderInterval(),
			this.yuvList = [],
			this.player.debug.log("CanvasVideoLoader", "destroy")
		}
		_initContext2D() {
			this.context2D = this.$videoElement.getContext("2d", 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})
		}
		_initCanvasRender() {
			this.player._opt.useWCS && !this._supportOffscreen() ? (this.renderType = J, this._initContext2D()) : this.player._opt.useMSE && this.player._opt.mseUseCanvasRender ? (this.renderType = "mse", this._initContext2D()) : this._supportOffscreen() ? (this.renderType = X, this._bindOffscreen()) : (this.renderType = t, this._initContextGl())
		}
		_supportOffscreen() {
			return "function" == typeof this.$videoElement.transferControlToOffscreen && this.player._opt.useOffscreen
		}
		_bindOffscreen() {
			this.bitmaprenderer = this.$videoElement.getContext("bitmaprenderer")
		}
		_startRenderInterval() {
			this.renderInterval = setInterval(() = >{
				var e;
				0 < this.yuvList.length && (e = this.yuvList.shift(), this.doRender(e), 100 < this.yuvList.length && this.player.debug.warn("CanvasVideoLoader", "yuvList is " + this.yuvList.length))
			},
			10)
		}
		_stopRenderInterval() {
			this.renderInterval && (clearInterval(this.renderInterval), this.renderInterval = null)
		}
		render(e) {
			this.yuvList.push(e),
			this.startRender()
		}
		startRender() {
			for (; ! (this.yuvList.length <= 0);) {
				var e = this.yuvList.shift();
				this.doRender(e)
			}
		}
		doRender(e) {
			switch (this.player.videoTimestamp = e.ts || 0, this.player.updateStats({
				fps: !0,
				ts: e.ts || 0
			}), this.renderType) {
			case X:
				this.bitmaprenderer.transferFromImageBitmap(e.buffer);
				break;
			case t:
				this.contextGlRender(this.$videoElement.width, this.$videoElement.height, e.output);
				break;
			case J:
				if (k(e.videoFrame.createImageBitmap)) try {
					e.videoFrame.createImageBitmap().then(e = >{
						this.context2D.drawImage(e, 0, 0, this.$videoElement.width, this.$videoElement.height)
					})
				} catch(e) {} else this.context2D.drawImage(e.videoFrame, 0, 0, this.$videoElement.width, this.$videoElement.height);
				break;
			case "mse":
				this.context2D.drawImage(e.$video, 0, 0, this.$videoElement.width, this.$videoElement.height)
			}
		}
		clearView() {
			switch (this.renderType) {
			case X:
				!
				function(e, t) {
					const i = document.createElement("canvas");
					return i.width = e,
					i.height = t,
					window.createImageBitmap(i, 0, 0, e, t)
				} (this.$videoElement.width, this.$videoElement.height).then(e = >{
					this.bitmaprenderer.transferFromImageBitmap(e)
				});
				break;
			case t:
				this.contextGl.clear(this.contextGl.COLOR_BUFFER_BIT);
				break;
			case J:
			case "mse":
				this.context2D.clearRect(0, 0, this.$videoElement.width, this.$videoElement.height)
			}
		}
	}
	class D extends fe {
		constructor(t) {
			super(),
			this.player = t;
			const e = document.createElement("video"),
			i = (e.muted = !0, e.style.position = "absolute", e.style.top = 0, e.style.left = 0, this._videoCanPlay = !1, t.$container.appendChild(e), this.$videoElement = e, t.canVideoTrackWritter() && (this.trackGenerator = new MediaStreamTrackGenerator({
				kind: "video"
			}), e.srcObject = new MediaStream([this.trackGenerator]), this.vwriter = this.trackGenerator.writable.getWriter()), this.resize(), this.player.events)["proxy"];
			i(this.$videoElement, "canplay", () = >{
				this.player.debug.log("Video", "canplay"),
				this._videoCanPlay = !0
			}),
			i(this.$videoElement, "waiting", () = >{
				this._videoCanPlay = !1,
				this.player.debug.log("Video", "waiting")
			}),
			i(this.$videoElement, "timeupdate", e = >{
				e = parseInt(e.timeStamp, 10);
				this.player.emit(v.timeUpdate, e),
				t._opt.isWebrtc && t.handleRender()
			}),
			i(this.$videoElement, "error", () = >{
				this.player.debug.log("Video", "Error " + this.$videoElement.error.code + "; details: " + this.$videoElement.error.message)
			}),
			this.player.debug.log("Video", "init")
		}
		destroy() {
			super.destroy(),
			this.$videoElement && (this.$videoElement.src = "", this.player.$container.removeChild(this.$videoElement), this.$videoElement = null),
			this.trackGenerator && (this.trackGenerator = null),
			this.vwriter && (this.vwriter = null),
			this._videoCanPlay = !1,
			this.off(),
			this.player.debug.log("Video", "destroy")
		}
		play() {
			this._play()
		}
		_play() {
			this.$videoElement && this.$videoElement.play().then(() = >{
				this.player.debug.log("Video", "_play play")
			}).
			catch(e = >{
				this.player.debug.warn("Video", "_play play", e)
			})
		}
		pause(e) {
			e ? this.$videoElement && this.$videoElement.pause() : setTimeout(() = >{
				this.$videoElement && this.$videoElement.pause()
			},
			100)
		}
		clearView() {}
		screenshot(e, t, i, r) {
			e = e || g(),
			r = r || o.download;
			let s = .92; ! {
				png: "image/png",
				jpeg: "image/jpeg",
				webp: "image/webp"
			} [t] && o[t] && (r = t, t = "png", i = void 0),
			"string" == typeof i && (r = i, i = void 0),
			void 0 !== i && (s = Number(i));
			i = this.$videoElement;
			let n = document.createElement("canvas");
			n.width = i.videoWidth,
			n.height = i.videoHeight,
			n.getContext("2d").drawImage(i, 0, 0, n.width, n.height);
			i = n.toDataURL(o[t] || o.png, s),
			t = ne(i);
			return r === o.base64 ? i: r === o.blob ? t: void(r === o.download && C(t, e))
		}
		screenshotWatermark(e) {
			return new Promise((e, t) = >{})
		}
		initCanvasViewSize() {
			this.resize()
		}
		render(e) {
			var t;
			this.vwriter && (this.player.videoTimestamp = e.ts || 0, this.player.updateStats({
				fps: !0,
				ts: e.ts || 0
			}), e.videoFrame ? this.vwriter.write(e.videoFrame) : e.output && (t = e.output, e = {
				format: "I420",
				codedWidth: this.videoInfo.width,
				codedHeight: this.videoInfo.height,
				timestamp: e.ts
			},
			t = new VideoFrame(t, e), this.vwriter.write(t)))
		}
		resize() {
			let e = this.player.width,
			t = this.player.height;
			const i = this.player._opt,
			r = i.rotate;
			if (i.hasControl && !i.controlAutoHide) {
				const r = i.playType === m ? 48 : 38;
				E() && this.player.fullscreen ? e -= r: t -= r
			}
			this.$videoElement.width = e,
			this.$videoElement.height = t,
			270 !== r && 90 !== r || (this.$videoElement.width = t, this.$videoElement.height = e);
			let s = (e - this.$videoElement.width) / 2,
			n = (t - this.$videoElement.height) / 2,
			a = "contain";
			i.isResize || (a = "fill"),
			i.isFullResize && (a = "none"),
			this.$videoElement.style.objectFit = a,
			this.$videoElement.style.transform = "rotate(" + r + "deg)",
			this.$videoElement.style.left = s + "px",
			this.$videoElement.style.top = n + "px"
		}
	}
	class ye extends me {
		constructor(e) {
			super(e),
			this.controlHeight = 48,
			this.bufferList = [],
			this.playing = !1,
			this.playInterval = null,
			this.fps = 1,
			this.preFps = 1,
			this.playbackRate = 1,
			this._firstTimestamp = null,
			this._renderFps = 0,
			this._startfpsTime = null,
			this._startFpsTimestamp = null,
			this.player.debug.log("CanvasPlaybackLoader", "init")
		}
		destroy() {
			this._stopSync(),
			this._firstTimestamp = null,
			this.playing = !1,
			this.playbackRate = 1,
			this.fps = 1,
			this.preFps = 1,
			this.bufferList = [],
			this._renderFps = 0,
			this._startfpsTime = null,
			this._startFpsTimestamp = null,
			super.destroy(),
			this.player.debug.log("CanvasPlaybackLoader", "destroy")
		}
		_initCanvasRender() {
			this.renderType = t,
			this._initContextGl()
		}
		_sync() {
			this._stopSync(),
			this._doPlay(),
			this.playInterval = setInterval(() = >{
				this._doPlay()
			},
			this.fragDuration)
		}
		_doPlay() {
			var e;
			0 < this.bufferList.length && !this.player.seeking && ((e = this.bufferList.shift()) && e.buffer && (this.player.handleRender(), this._updateStats(e.ts), this._doRender(e.buffer)))
		}
		_stopSync() {
			this.playInterval && (clearInterval(this.playInterval), this.playInterval = null)
		}
		_doRender(e) {
			this.contextGlRender(this.$videoElement.width, this.$videoElement.height, e)
		}
		_updateStats(e) {
			this.player.updateStats({
				fps: !0,
				ts: e
			}),
			this._startfpsTime || (this._startfpsTime = e, this._startFpsTimestamp = g());
			var t = e,
			i = g(),
			r = i - this._startFpsTimestamp;
			r <= 1e3 ? this._renderFps += 1 : (this.player.emit(v.playbackStats, {
				fps: this._renderFps,
				start: this._startfpsTime,
				end: t,
				timestamp: r,
				dataTimestamp: t - this._startfpsTime,
				audioBufferSize: this.player.audio.bufferSize,
				videoBufferSize: this.player.video.bufferSize,
				ts: e
			}), this._renderFps = 0, this._startfpsTime = t, this._startFpsTimestamp = i)
		}
		get rate() {
			return this.playbackRate
		}
		get fragDuration() {
			return Math.ceil(1e3 / (this.fps * this.playbackRate))
		}
		get bufferSize() {
			return this.bufferList.length
		}
		initFps() {
			this.preFps = y(this.player.playback.fps, 1, 100),
			this.fps = this.preFps
		}
		setFps(e) {
			e !== this.fps && (100 < e && this.player.debug.warn("CanvasPlaybackLoader", "setFps max", e), e < 0 && this.player.debug.warn("CanvasPlaybackLoader", "setFps min", e), this.fps = y(e, 1, 100), this._sync())
		}
		setRate(e) {
			e !== this.playbackRate && (this.playbackRate = e, this._sync())
		}
		pushData(e) {
			null === this._firstTimestamp && (this._firstTimestamp = e.ts);
			var e = {
				ts: e.ts - this._firstTimestamp,
				buffer: e.output
			},
			e = (this.bufferSize > this.preFps * this.playbackRate * 2 && (this.player.debug.warn("CanvasPlaybackLoader", "buffer size is " + this.bufferSize), this.bufferList.shift()), this.bufferList.push(e), this.bufferList.length),
			t = e / (this.fps * this.playbackRate);
			t <= 1 ? this.setFps(this.preFps) : (this.setFps(this.fps + Math.floor(t * this.playbackRate)), this.player.debug.warn("CanvasPlaybackLoader", "rate is", t, "fps is", this.fps, "bufferListLength is", e))
		}
		initVideo() {
			this._sync(),
			this.playing = !0
		}
		initVideoDelay() {
			var e = this.player._opt.playbackDelayTime;
			0 < e ? this.delayTimeout = setTimeout(() = >{
				this.initVideo()
			},
			e) : this.initVideo()
		}
		clearView() {
			this.contextGl.clear(this.contextGl.COLOR_BUFFER_BIT)
		}
		clear() {
			this.bufferList = []
		}
		resume() {
			this._sync(),
			this.playing = !0
		}
		pause() {
			this._stopSync(),
			this.playing = !1
		}
	}
	class be {
		constructor(e) {
			return new(be.getLoaderFactory(e._opt))(e)
		}
		static getLoaderFactory(e) {
			return e.useMSE ? e.mseUseCanvasRender ? ve: D: e.isHls || e.isWebrtc ? D: e.useWCS ? !e.useOffscreen && e.wcsUseVideoRender ? D: ve: e.playType === m ? ye: e.wasmUseVideoRender ? D: ve
		}
	}
	class Ee extends n {
		constructor(e) {
			super(),
			this.bufferList = [],
			this.player = e,
			this.scriptNode = null,
			this.hasInitScriptNode = !1,
			this.audioContextChannel = null,
			this.audioContext = new(window.AudioContext || window.webkitAudioContext),
			this.gainNode = this.audioContext.createGain();
			const t = this.audioContext.createBufferSource();
			t.buffer = this.audioContext.createBuffer(1, 1, 22050),
			t.connect(this.audioContext.destination),
			t.noteOn ? t.noteOn(0) : t.start(0),
			this.audioBufferSourceNode = t,
			this.mediaStreamAudioDestinationNode = this.audioContext.createMediaStreamDestination(),
			this.audioEnabled(!0),
			this.gainNode.gain.value = 0,
			this.playing = !1,
			this.audioSyncVideoOption = {
				diff: null
			},
			this.audioInfo = {
				encType: "",
				channels: "",
				sampleRate: ""
			},
			this.init = !1,
			this.hasAudio = !1,
			this.on(v.videoSyncAudio, e = >{
				this.audioSyncVideoOption = e
			})
		}
		resetInit() {
			this.audioInfo = {
				encType: "",
				channels: "",
				sampleRate: ""
			},
			this.init = !1
		}
		destroy() {
			this.closeAudio(),
			this.resetInit(),
			this.audioContext.close(),
			this.audioContext = null,
			this.gainNode = null,
			this.hasAudio = !1,
			this.playing = !1,
			this.scriptNode && (this.scriptNode.onaudioprocess = se, this.scriptNode = null),
			this.audioBufferSourceNode = null,
			this.mediaStreamAudioDestinationNode = null,
			this.hasInitScriptNode = !1,
			this.audioSyncVideoOption = {
				diff: null
			},
			this.off()
		}
		updateAudioInfo(e) {
			e.encTypeCode && (this.audioInfo.encType = Q[e.encTypeCode]),
			e.channels && (this.audioInfo.channels = e.channels),
			e.sampleRate && (this.audioInfo.sampleRate = e.sampleRate),
			this.audioInfo.sampleRate && this.audioInfo.channels && this.audioInfo.encType && !this.init && (this.player.emit(v.audioInfo, this.audioInfo), this.init = !0)
		}
		get isPlaying() {
			return this.playing
		}
		get isMute() {
			return 0 === this.gainNode.gain.value || this.isStateSuspended()
		}
		get volume() {
			return this.gainNode.gain.value
		}
		get bufferSize() {
			return this.bufferList.length
		}
		initScriptNode() {}
		mute(e) {
			e ? (this.isMute || this.player.emit(v.mute, e), this.setVolume(0), this.audioEnabled(!1), this.clear()) : (this.isMute && this.player.emit(v.mute, e), this.setVolume(.5), this.audioEnabled(!0))
		}
		setVolume(e) {
			e = parseFloat(e).toFixed(2),
			isNaN(e) || (this.audioEnabled(!0), e = y(e, 0, 1), this.gainNode.gain.value = e, this.gainNode.gain.setValueAtTime(e, this.audioContext.currentTime), this.player.emit(v.volumechange, this.player.volume))
		}
		closeAudio() {
			this.hasInitScriptNode && (this.scriptNode && this.scriptNode.disconnect(this.gainNode), this.gainNode && this.gainNode.disconnect(this.audioContext.destination), this.gainNode && this.gainNode.disconnect(this.mediaStreamAudioDestinationNode)),
			this.clear()
		}
		audioEnabled(e) {
			e ? "suspended" === this.audioContext.state && this.audioContext.resume() : "running" === this.audioContext.state && this.audioContext.suspend()
		}
		isStateRunning() {
			return "running" === this.audioContext.state
		}
		isStateSuspended() {
			return "suspended" === this.audioContext.state
		}
		clear() {
			this.bufferList = []
		}
		play(e, t) {}
		pause() {
			this.audioSyncVideoOption = {
				diff: null
			},
			this.playing = !1,
			this.clear()
		}
		resume() {
			this.playing = !0
		}
		setRate(e) {}
	}
	class Se extends Ee {
		constructor(e) {
			super(e),
			this.player.debug.log("AudioContext", "init")
		}
		destroy() {
			super.destroy(),
			this.player.debug.log("AudioContext", "destroy")
		}
		initScriptNode() {
			if (this.playing = !0, !this.hasInitScriptNode) {
				const s = this.audioInfo.channels,
				e = this.audioContext.createScriptProcessor(1024, 0, s);
				e.onaudioprocess = e = >{
					const t = e.outputBuffer;
					if (this.bufferList.length && this.playing) {
						const e = this.player._opt;
						if (!e.useWCS && !e.useMSE && e.wasmDecodeAudioSyncVideo && e.hasVideo) {
							if (1e3 < this.audioSyncVideoOption.diff) return void this.player.debug.warn("AudioContext", `audioSyncVideoOption more than diff: $ {
								this.audioSyncVideoOption.diff
							},
							waiting`);
							if (this.audioSyncVideoOption.diff < -1e3) {
								this.player.debug.warn("AudioContext", `audioSyncVideoOption less than diff: $ {
									this.audioSyncVideoOption.diff
								},
								dropping`);
								let e = this.bufferList.shift();
								for (; e.ts - this.player.videoTimestamp < -1e3 && 0 < this.bufferList.length;) e = this.bufferList.shift();
								if (0 === this.bufferList.length) return
							}
						}
						if (0 !== this.bufferList.length) {
							var i = this.bufferList.shift();
							i && i.ts && (this.player.audioTimestamp = i.ts);
							for (let e = 0; e < s; e++) {
								const s = i.buffer[e],
								r = t.getChannelData(e);
								for (let e = 0; e < 1024; e++) r[e] = s && s[e] || 0
							}
						}
					}
				},
				e.connect(this.gainNode),
				this.scriptNode = e,
				this.gainNode.connect(this.audioContext.destination),
				this.gainNode.connect(this.mediaStreamAudioDestinationNode),
				this.hasInitScriptNode = !0
			}
		}
		play(e, t) {
			this.isMute || (this.hasAudio = !0, this.bufferList.push({
				buffer: e,
				ts: t
			}), 20 < this.bufferList.length && (this.player.debug.warn("AudioContext", "bufferList is large: " + this.bufferList.length), 50 < this.bufferList.length && this.bufferList.shift()))
		}
	}
	class Te extends n {
		constructor(e) {
			super(),
			this.player = e,
			this.$video = e.video.$videoElement,
			this.player.debug.log("Audio", "init")
		}
		resetInit() {}
		destroy() {
			this.off(),
			this.player.debug.log("Audio", "destroy")
		}
		get isPlaying() {
			return ! 0
		}
		get volume() {
			return this.$video.volume
		}
		get isMute() {
			return 0 === this.$video.volume
		}
		mute(e) {
			this.setVolume(e ? 0 : this.player.lastVolume || .5)
		}
		setVolume(e) {
			e = parseFloat(e),
			isNaN(e) || (e = y(e, 0, 1), this.$video.volume = e, this.player.emit(v.volumechange, this.player.volume))
		}
		clear() {}
		play() {}
		pause() {}
		resume() {}
	}
	class we {
		constructor(e, t, i, r) {
			this.player = e,
			this.audio = t,
			this.buffer = i,
			this.channel = r
		}
		extract(t, e) {
			var i = this.provide(e);
			for (let e = 0; e < i.size; e++) t[2 * e] = i.left[e],
			t[2 * e + 1] = i.right[e];
			return this.audio.tempAudioTimestamp = i.ts,
			i.size
		}
		provide(t) {
			let i = new Float32Array(t),
			r = new Float32Array(t),
			e = 0,
			s = 0,
			n = 0,
			a = t / 1024;
			if (this.buffer.length > a) {
				for (let e = 0; e < a; e++) {
					const t = this.buffer.shift();
					2 === this.channel ? (i.set(t.buffer[0], n), r.set(t.buffer[1], n)) : (i.set(t.buffer[0], n), r.set(t.buffer[0], n)),
					n += 1024,
					s = t.ts
				}
				e = i.length
			}
			return {
				size: e,
				ts: s,
				left: i,
				right: r
			}
		}
		destroy() {
			this.buffer = null,
			this.channel = null
		}
	}
	class L {
		constructor() {
			this._vector = new Float32Array,
			this._position = 0,
			this._frameCount = 0
		}
		get vector() {
			return this._vector
		}
		get position() {
			return this._position
		}
		get startIndex() {
			return 2 * this._position
		}
		get frameCount() {
			return this._frameCount
		}
		get endIndex() {
			return 2 * (this._position + this._frameCount)
		}
		clear() {
			this.receive(this._frameCount),
			this.rewind()
		}
		put(e) {
			this._frameCount += e
		}
		putSamples(e, t) {
			let i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
			var t = 2 * (t = t || 0),
			r = 2 * (i = 0 <= i ? i: (e.length - t) / 2),
			s = (this.ensureCapacity(i + this._frameCount), this.endIndex);
			this.vector.set(e.subarray(t, t + r), s),
			this._frameCount += i
		}
		putBuffer(e, t) {
			let i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
			t = t || 0,
			0 <= i || (i = e.frameCount - t),
			this.putSamples(e.vector, e.position + t, i)
		}
		receive(e) {
			0 <= e && !(e > this._frameCount) || (e = this.frameCount),
			this._frameCount -= e,
			this._position += e
		}
		receiveSamples(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
			i = this.startIndex;
			e.set(this._vector.subarray(i, i + 2 * t)),
			this.receive(t)
		}
		extract(e) {
			var t = this.startIndex + 2 * (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0);
			e.set(this._vector.subarray(t, t + 2 * (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0)))
		}
		ensureCapacity() {
			var e = parseInt(2 * (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0));
			if (this._vector.length < e) {
				const t = new Float32Array(e);
				t.set(this._vector.subarray(this.startIndex, this.endIndex)),
				this._vector = t,
				this._position = 0
			} else this.rewind()
		}
		ensureAdditionalCapacity() {
			this.ensureCapacity(this._frameCount + (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0))
		}
		rewind() {
			0 < this._position && (this._vector.set(this._vector.subarray(this.startIndex, this.endIndex)), this._position = 0)
		}
	}
	class ke {
		constructor(e) {
			e ? (this._inputBuffer = new L, this._outputBuffer = new L) : this._inputBuffer = this._outputBuffer = null
		}
		get inputBuffer() {
			return this._inputBuffer
		}
		set inputBuffer(e) {
			this._inputBuffer = e
		}
		get outputBuffer() {
			return this._outputBuffer
		}
		set outputBuffer(e) {
			this._outputBuffer = e
		}
		clear() {
			this._inputBuffer.clear(),
			this._outputBuffer.clear()
		}
	}
	class Re extends ke {
		constructor(e) {
			super(e),
			this.reset(),
			this._rate = 1
		}
		set rate(e) {
			this._rate = e
		}
		reset() {
			this.slopeCount = 0,
			this.prevSampleL = 0,
			this.prevSampleR = 0
		}
		clone() {
			const e = new Re;
			return e.rate = this._rate,
			e
		}
		process() {
			var e = this._inputBuffer.frameCount,
			e = (this._outputBuffer.ensureAdditionalCapacity(e / this._rate + 1), this.transpose(e));
			this._inputBuffer.receive(),
			this._outputBuffer.put(e)
		}
		transpose() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			if (0 === e) return 0;
			const t = this._inputBuffer.vector,
			i = this._inputBuffer.startIndex,
			r = this._outputBuffer.vector,
			s = this._outputBuffer.endIndex;
			let n = 0,
			a = 0;
			for (; this.slopeCount < 1;) r[s + 2 * a] = (1 - this.slopeCount) * this.prevSampleL + this.slopeCount * t[i],
			r[s + 2 * a + 1] = (1 - this.slopeCount) * this.prevSampleR + this.slopeCount * t[i + 1],
			a += 1,
			this.slopeCount += this._rate;
			if (--this.slopeCount, 1 !== e) e: for (;;) {
				for (; 1 < this.slopeCount;) if (--this.slopeCount, (n += 1) >= e - 1) break e;
				var o = i + 2 * n;
				r[s + 2 * a] = (1 - this.slopeCount) * t[o] + this.slopeCount * t[o + 2],
				r[s + 2 * a + 1] = (1 - this.slopeCount) * t[o + 1] + this.slopeCount * t[o + 3],
				a += 1,
				this.slopeCount += this._rate
			}
			return this.prevSampleL = t[i + 2 * e - 2],
			this.prevSampleR = t[i + 2 * e - 1],
			a
		}
	}
	function Ce() {}
	class De extends class {
		constructor(e) {
			this._pipe = e
		}
		get pipe() {
			return this._pipe
		}
		get inputBuffer() {
			return this._pipe.inputBuffer
		}
		get outputBuffer() {
			return this._pipe.outputBuffer
		}
		fillInputBuffer() {
			throw new Error("fillInputBuffer() not overridden")
		}
		fillOutputBuffer() {
			let e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			for (; this.outputBuffer.frameCount < e;) {
				const e = 16384 - this.inputBuffer.frameCount;
				if (this.fillInputBuffer(e), this.inputBuffer.frameCount < 16384) break;
				this._pipe.process()
			}
		}
		clear() {
			this._pipe.clear()
		}
	} {
		constructor(e, t) {
			var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Ce;
			super(t),
			this.callback = i,
			this.sourceSound = e,
			this.historyBufferSize = 22050,
			this._sourcePosition = 0,
			this.outputBufferPosition = 0,
			this._position = 0
		}
		get position() {
			return this._position
		}
		set position(e) {
			if (e > this._position) throw new RangeError("New position may not be greater than current position");
			var t = this.outputBufferPosition - (this._position - e);
			if (t < 0) throw new RangeError("New position falls outside of history buffer");
			this.outputBufferPosition = t,
			this._position = e
		}
		get sourcePosition() {
			return this._sourcePosition
		}
		set sourcePosition(e) {
			this.clear(),
			this._sourcePosition = e
		}
		onEnd() {
			this.callback()
		}
		fillInputBuffer() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
			t = new Float32Array(2 * e),
			e = this.sourceSound.extract(t, e, this._sourcePosition);
			this._sourcePosition += e,
			this.inputBuffer.putSamples(t, 0, e)
		}
		extract(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
			t = (this.fillOutputBuffer(this.outputBufferPosition + t), Math.min(t, this.outputBuffer.frameCount - this.outputBufferPosition)),
			e = (this.outputBuffer.extract(e, this.outputBufferPosition, t), this.outputBufferPosition + t);
			return this.outputBufferPosition = Math.min(this.historyBufferSize, e),
			this.outputBuffer.receive(Math.max(e - this.historyBufferSize, 0)),
			this._position += t,
			t
		}
		handleSampleData(e) {
			this.extract(e.data, 4096)
		}
		clear() {
			super.clear(),
			this.outputBufferPosition = 0
		}
	}
	const Le = [[124, 186, 248, 310, 372, 434, 496, 558, 620, 682, 744, 806, 868, 930, 992, 1054, 1116, 1178, 1240, 1302, 1364, 1426, 1488, 0], [ - 100, -75, -50, -25, 25, 50, 75, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [ - 20, -15, -10, -5, 5, 10, 15, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [ - 4, -3, -2, -1, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
	class Ie extends ke {
		constructor(e) {
			super(e),
			this._quickSeek = !0,
			this.midBufferDirty = !1,
			this.midBuffer = null,
			this.overlapLength = 0,
			this.autoSeqSetting = !0,
			this.autoSeekSetting = !0,
			this._tempo = 1,
			this.setParameters(44100, 0, 0, 8)
		}
		clear() {
			super.clear(),
			this.clearMidBuffer()
		}
		clearMidBuffer() {
			this.midBufferDirty && (this.midBufferDirty = !1, this.midBuffer = null)
		}
		setParameters(e, t, i, r) {
			0 < e && (this.sampleRate = e),
			0 < r && (this.overlapMs = r),
			0 < t ? (this.sequenceMs = t, this.autoSeqSetting = !1) : this.autoSeqSetting = !0,
			0 < i ? (this.seekWindowMs = i, this.autoSeekSetting = !1) : this.autoSeekSetting = !0,
			this.calculateSequenceParameters(),
			this.calculateOverlapLength(this.overlapMs),
			this.tempo = this._tempo
		}
		set tempo(e) {
			this._tempo = e,
			this.calculateSequenceParameters(),
			this.nominalSkip = this._tempo * (this.seekWindowLength - this.overlapLength),
			this.skipFract = 0,
			e = Math.floor(this.nominalSkip + .5),
			this.sampleReq = Math.max(e + this.overlapLength, this.seekWindowLength) + this.seekLength
		}
		get tempo() {
			return this._tempo
		}
		get inputChunkSize() {
			return this.sampleReq
		}
		get outputChunkSize() {
			return this.overlapLength + Math.max(0, this.seekWindowLength - 2 * this.overlapLength)
		}
		calculateOverlapLength() {
			let e,
			t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			e = (e = this.sampleRate * t / 1e3) < 16 ? 16 : e,
			e -= e % 8,
			this.overlapLength = e,
			this.refMidBuffer = new Float32Array(2 * this.overlapLength),
			this.midBuffer = new Float32Array(2 * this.overlapLength)
		}
		checkLimits(e, t, i) {
			return e < t ? t: i < e ? i: e
		}
		calculateSequenceParameters() {
			var e;
			this.autoSeqSetting && (e = 150 + -50 * this._tempo, e = this.checkLimits(e, 50, 125), this.sequenceMs = Math.floor(e + .5)),
			this.autoSeekSetting && (e = 28.333333333333332 + -10 / 1.5 * this._tempo, e = this.checkLimits(e, 15, 25), this.seekWindowMs = Math.floor(e + .5)),
			this.seekWindowLength = Math.floor(this.sampleRate * this.sequenceMs / 1e3),
			this.seekLength = Math.floor(this.sampleRate * this.seekWindowMs / 1e3)
		}
		set quickSeek(e) {
			this._quickSeek = e
		}
		clone() {
			const e = new Ie;
			return e.tempo = this._tempo,
			e.setParameters(this.sampleRate, this.sequenceMs, this.seekWindowMs, this.overlapMs),
			e
		}
		seekBestOverlapPosition() {
			return this._quickSeek ? this.seekBestOverlapPositionStereoQuick() : this.seekBestOverlapPositionStereo()
		}
		seekBestOverlapPositionStereo() {
			let e,
			t,
			i,
			r = 0;
			for (this.preCalculateCorrelationReferenceStereo(), e = 0, t = Number.MIN_VALUE; r < this.seekLength; r += 1)(i = this.calculateCrossCorrelationStereo(2 * r, this.refMidBuffer)) > t && (t = i, e = r);
			return e
		}
		seekBestOverlapPositionStereoQuick() {
			let t,
			i,
			r,
			s,
			n,
			a = 0;
			for (this.preCalculateCorrelationReferenceStereo(), i = Number.MIN_VALUE, t = 0, s = 0, n = 0; a < 4; a += 1) {
				let e = 0;
				for (; Le[a][e] && !((n = s + Le[a][e]) >= this.seekLength);)(r = this.calculateCrossCorrelationStereo(2 * n, this.refMidBuffer)) > i && (i = r, t = n),
				e += 1;
				s = t
			}
			return t
		}
		preCalculateCorrelationReferenceStereo() {
			let e,
			t,
			i = 0;
			for (; i < this.overlapLength; i += 1) t = i * (this.overlapLength - i),
			e = 2 * i,
			this.refMidBuffer[e] = this.midBuffer[e] * t,
			this.refMidBuffer[1 + e] = this.midBuffer[1 + e] * t
		}
		calculateCrossCorrelationStereo(e, t) {
			var i = this._inputBuffer.vector;
			e += this._inputBuffer.startIndex;
			let r = 0,
			s = 2;
			for (var n, a = 2 * this.overlapLength; s < a; s += 2) n = s + e,
			r += i[n] * t[s] + i[n + 1] * t[s + 1];
			return r
		}
		overlap(e) {
			this.overlapStereo(2 * e)
		}
		overlapStereo(e) {
			var t = this._inputBuffer.vector;
			e += this._inputBuffer.startIndex;
			const i = this._outputBuffer.vector,
			r = this._outputBuffer.endIndex;
			let s,
			n,
			a = 0;
			for (var o, l, c, u = 1 / this.overlapLength; a < this.overlapLength; a += 1) n = (this.overlapLength - a) * u,
			o = a * u,
			l = (s = 2 * a) + e,
			c = s + r,
			i[c + 0] = t[l + 0] * o + this.midBuffer[0 + s] * n,
			i[c + 1] = t[l + 1] * o + this.midBuffer[1 + s] * n
		}
		process() {
			var e;
			if (null === this.midBuffer) {
				if (this._inputBuffer.frameCount < this.overlapLength) return;
				this.midBuffer = new Float32Array(2 * this.overlapLength),
				this._inputBuffer.receiveSamples(this.midBuffer, this.overlapLength)
			}
			for (; this._inputBuffer.frameCount >= this.sampleReq;) {
				e = this.seekBestOverlapPosition(),
				this._outputBuffer.ensureAdditionalCapacity(this.overlapLength),
				this.overlap(Math.floor(e)),
				this._outputBuffer.put(this.overlapLength),
				0 < (t = this.seekWindowLength - 2 * this.overlapLength) && this._outputBuffer.putBuffer(this._inputBuffer, e + this.overlapLength, t);
				var t = this._inputBuffer.startIndex + 2 * (e + this.seekWindowLength - this.overlapLength);
				this.midBuffer.set(this._inputBuffer.vector.subarray(t, t + 2 * this.overlapLength)),
				this.skipFract += this.nominalSkip,
				e = Math.floor(this.skipFract),
				this.skipFract -= e,
				this._inputBuffer.receive(e)
			}
		}
	}
	function Be(e, t) {
		return 1e-10 < (t < e ? e - t: t - e)
	}
	class xe {
		constructor() {
			this.transposer = new Re(!1),
			this.stretch = new Ie(!1),
			this._inputBuffer = new L,
			this._intermediateBuffer = new L,
			this._outputBuffer = new L,
			this._rate = 0,
			this._tempo = 0,
			this.virtualPitch = 1,
			this.virtualRate = 1,
			this.virtualTempo = 1,
			this.calculateEffectiveRateAndTempo()
		}
		clear() {
			this.transposer.clear(),
			this.stretch.clear()
		}
		clone() {
			const e = new xe;
			return e.rate = this.rate,
			e.tempo = this.tempo,
			e
		}
		get rate() {
			return this._rate
		}
		set rate(e) {
			this.virtualRate = e,
			this.calculateEffectiveRateAndTempo()
		}
		set rateChange(e) {
			this._rate = 1 + .01 * e
		}
		get tempo() {
			return this._tempo
		}
		set tempo(e) {
			this.virtualTempo = e,
			this.calculateEffectiveRateAndTempo()
		}
		set tempoChange(e) {
			this.tempo = 1 + .01 * e
		}
		set pitch(e) {
			this.virtualPitch = e,
			this.calculateEffectiveRateAndTempo()
		}
		set pitchOctaves(e) {
			this.pitch = Math.exp(.69314718056 * e),
			this.calculateEffectiveRateAndTempo()
		}
		set pitchSemitones(e) {
			this.pitchOctaves = e / 12
		}
		get inputBuffer() {
			return this._inputBuffer
		}
		get outputBuffer() {
			return this._outputBuffer
		}
		calculateEffectiveRateAndTempo() {
			var e = this._tempo,
			t = this._rate;
			this._tempo = this.virtualTempo / this.virtualPitch,
			this._rate = this.virtualRate * this.virtualPitch,
			Be(this._tempo, e) && (this.stretch.tempo = this._tempo),
			Be(this._rate, t) && (this.transposer.rate = this._rate),
			1 < this._rate ? this._outputBuffer != this.transposer.outputBuffer && (this.stretch.inputBuffer = this._inputBuffer, this.stretch.outputBuffer = this._intermediateBuffer, this.transposer.inputBuffer = this._intermediateBuffer, this.transposer.outputBuffer = this._outputBuffer) : this._outputBuffer != this.stretch.outputBuffer && (this.transposer.inputBuffer = this._inputBuffer, this.transposer.outputBuffer = this._intermediateBuffer, this.stretch.inputBuffer = this._intermediateBuffer, this.stretch.outputBuffer = this._outputBuffer)
		}
		process() {
			1 < this._rate ? (this.stretch.process(), this.transposer.process()) : (this.transposer.process(), this.stretch.process())
		}
	}
	class Oe {
		constructor(e, t, i) {
			this.player = e,
			this.audio = t,
			this.soundTouch = new xe,
			this.soundTouch.tempo = 1,
			this.soundTouch.rate = 1,
			this.filter = new De(i, this.soundTouch, 1024)
		}
		setRate(e) {
			this.soundTouch.tempo = e
		}
		provide(e) {
			let t = new Float32Array(2 * e),
			i = this.filter.extract(t, e),
			r = new Float32Array(i),
			s = new Float32Array(i);
			for (let e = 0; e < i; e++) r[e] = t[2 * e],
			s[e] = t[2 * e + 1];
			return {
				size: i,
				left: r,
				right: s,
				ts: this.audio.tempAudioTimestamp || 0
			}
		}
		destroy() {
			this.soundTouch && (this.soundTouch.clear(), this.soundTouch = null),
			this.filter && (this.filter = null)
		}
	}
	class Fe extends Ee {
		constructor(e) {
			super(e),
			this.playbackRate = 1,
			this.rateProcessor = null,
			this.processor = null,
			this.firstTimestamp = null,
			this.player.debug.log("AudioPlaybackContext", "init")
		}
		destroy() {
			super.destroy(),
			this.processor && (this.processor.destroy(), this.processor = null),
			this.rateProcessor && (this.rateProcessor.destroy(), this.rateProcessor = null),
			this.player.debug.log("AudioPlaybackLoader", "destroy")
		}
		initScriptNode(e) {
			if (this.playing = !0, !this.hasInitScriptNode) {
				const s = this.audioInfo.channels,
				t = (this.processor = new we(this.player, this, this.bufferList, this.audioContextChannel), this.rateProcessor = new Oe(this.player, this, this.processor), this.audioContext.createScriptProcessor(1024, 0, s));
				t.onaudioprocess = t = >{
					const i = t.outputBuffer;
					if (this.bufferList.length && this.playing && !(1e3 < this.audioSyncVideoOption.diff)) {
						if (this.audioSyncVideoOption.diff < -1e3) {
							let e = this._provide(i.length);
							for (; e.ts - this.player.videoTimestamp < -1e3 && 0 < e.size;) e = this._provide(i.length);
							if (0 === e.size) return
						}
						const t = this._provide(i.length);
						if (0 !== t.size) {
							t && t.ts && (this.player.audioTimestamp = t.ts);
							for (let e = 0; e < s; e++) {
								const s = t.buffer[e],
								r = i.getChannelData(e);
								for (let e = 0; e < 1024; e++) r[e] = s && s[e] || 0
							}
						}
					}
				},
				t.connect(this.gainNode),
				this.scriptNode = t,
				this.gainNode.connect(this.audioContext.destination),
				this.gainNode.connect(this.mediaStreamAudioDestinationNode),
				this.hasInitScriptNode = !0
			}
		}
		initScriptNodeDelay(e) {
			var t = this.player._opt.playbackDelayTime;
			0 < t ? setTimeout(() = >{
				this.initScriptNode(e)
			},
			t) : this.initScriptNode(e)
		}
		setRate(e) {
			e !== this.playbackRate && this.rateProcessor && (this.player.debug.log("AudioPlaybackContext", "setRate", e), this.playbackRate = e, this.rateProcessor.setRate(e))
		}
		play(e, t) {
			this.isMute || (null === this.firstTimestamp && (this.firstTimestamp = t), this.hasAudio = !0, this.bufferList.push({
				buffer: e,
				ts: t - this.firstTimestamp
			}))
		}
		_provide(e) {
			return (1 === this.playbackRate ? this.processor: this.rateProcessor).provide(e)
		}
	}
	class Pe {
		constructor(e) {
			return new(Pe.getLoaderFactory(e._opt))(e)
		}
		static getLoaderFactory(e) {
			return e.playType === m ? Fe: e.isHls || e.isWebrtc ? Te: Se
		}
	}
	class Me extends n {
		constructor(t) {
			super(),
			this.player = t,
			this.playing = !1,
			this.abortController = new AbortController,
			this.streamRate = le(e = >{
				t.emit(v.kBps, (e / 1024).toFixed(2))
			}),
			this.streamRateInterval = null,
			t.debug.log("FetchStream", "init")
		}
		destroy() {
			this.abort(),
			this.off(),
			this.streamRate = null,
			this.stopStreamRateInterval(),
			this.player.debug.log("FetchStream", "destroy")
		}
		startStreamRateInterval() {
			this.stopStreamRateInterval(),
			this.streamRateInterval = setInterval(() = >{
				this.streamRate && this.streamRate(0)
			},
			1e3)
		}
		stopStreamRateInterval() {
			this.streamRateInterval && (clearInterval(this.streamRateInterval), this.streamRateInterval = null)
		}
		fetchStream(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
			const i = this.player["demux"];
			this.player._times.streamStart = g();
			t = Object.assign({
				signal: this.abortController.signal
			},
			{
				headers: t.headers || {}
			});
			fetch(e, t).then(e = >{
				this.emit(v.streamSuccess),
				this.startStreamRateInterval(),
				e.body.pipeTo(new WritableStream({
					write: e = >(this.streamRate && this.streamRate(e.byteLength), i.dispatch(e)),
					close: () = >{
						i.close()
					},
					abort: e = >{
						i.close(),
						this.abort(),
						-1 === e.toString().indexOf("The user aborted a request") && (this.emit(d.fetchError, e), this.player.emit(v.error, d.fetchError))
					}
				}))
			}).
			catch(e = >{
				this.abort(),
				this.emit(d.fetchError, e),
				this.player.emit(v.error, d.fetchError)
			})
		}
		abort() {
			this.abortController && (this.abortController.abort(), this.abortController = null)
		}
	}
	class Ue extends n {
		constructor(t) {
			super(),
			this.player = t,
			this.socket = null,
			this.socketStatus = W,
			this.wsUrl = null,
			this.streamRate = le(e = >{
				t.emit(v.kBps, (e / 1024).toFixed(2))
			}),
			this.streamRateInterval = null,
			t.debug.log("WebsocketStream", "init")
		}
		destroy() {
			this.socket && (this.socket.close(), this.socket = null),
			this.socketStatus = W,
			this.streamRate = null,
			this.stopStreamRateInterval(),
			this.wsUrl = null,
			this.off(),
			this.player.debug.log("WebsocketStream", "destroy")
		}
		startStreamRateInterval() {
			this.stopStreamRateInterval(),
			this.streamRateInterval = setInterval(() = >{
				this.streamRate && this.streamRate(0)
			},
			1e3)
		}
		stopStreamRateInterval() {
			this.streamRateInterval && (clearInterval(this.streamRateInterval), this.streamRateInterval = null)
		}
		_createWebSocket() {
			const e = this.player,
			{
				debug: t,
				events: {
					proxy: i
				},
				demux: r
			} = e;
			this.socket = new WebSocket(this.wsUrl),
			this.socket.binaryType = "arraybuffer",
			i(this.socket, "open", () = >{
				this.emit(v.streamSuccess),
				this.startStreamRateInterval(),
				t.log("WebsocketStream", "socket open"),
				this.socketStatus = "open"
			}),
			i(this.socket, "message", e = >{
				this.streamRate && this.streamRate(e.data.byteLength),
				this._handleMessage(e.data)
			}),
			i(this.socket, "close", () = >{
				t.log("WebsocketStream", "socket close"),
				this.emit(v.streamEnd),
				this.socketStatus = "close"
			}),
			i(this.socket, "error", e = >{
				t.log("WebsocketStream", "socket error"),
				this.emit(d.websocketError, e),
				this.player.emit(v.error, d.websocketError),
				this.socketStatus = "error",
				r.close(),
				t.log("WebsocketStream", "socket error:", e)
			})
		}
		_handleMessage(e) {
			const t = this.player["demux"];
			t ? t.dispatch(e) : this.player.debug.warn("WebsocketStream", "websocket handle message demux is null")
		}
		fetchStream(e, t) {
			this.player._times.streamStart = g(),
			this.wsUrl = e,
			this._createWebSocket()
		}
	}
	class Ne extends n {
		constructor(e) {
			super(),
			(this.player = e).debug.log("HlsStream", "init")
		}
		destroy() {
			this.off(),
			this.player.debug.log("HlsStream", "destroy")
		}
		fetchStream(e) {
			const t = this.player["hls"];
			this.player._times.streamStart = g(),
			t.loadSource(e).then(() = >{
				this.player.debug.log("HlsStream", "loadSource success"),
				this.emit(v.streamSuccess)
			}).
			catch(e = >{
				this.emit(d.hlsError, e),
				this.emit(v.error, d.hlsError)
			})
		}
	}
	class je extends n {
		constructor(e) {
			super(),
			this.player = e,
			this.webrctUrl = null,
			e.debug.log("WebrtcStream", "init")
		}
		destroy() {
			this.webrctUrl = null,
			this.off(),
			this.player.debug.log("WebrtcStream", "destroy")
		}
		fetchStream(e) {
			const t = this.player["webrtc"];
			this.player._times.streamStart = g(),
			this.webrctUrl = e.replace("webrtc:", window.location.protocol),
			t.loadSource(this.webrctUrl).then(() = >{
				this.player.debug.log("WebrtcStream", "loadSource success"),
				this.emit(v.streamSuccess)
			}).
			catch(e = >{
				this.emit(d.webrtcError, e),
				this.emit(v.error, d.webrtcError)
			})
		}
	}
	class _e extends n {
		constructor(t) {
			super(),
			this.player = t,
			this.transport = null,
			this.wtUrl = null,
			this.streamRate = le(e = >{
				t.emit(v.kBps, (e / 1024).toFixed(2))
			}),
			this.streamRateInterval = null,
			t.debug.log("WebTransportLoader", "init")
		}
		destroy() {
			this.abort(),
			this.off(),
			this.player.debug.log("WebTransportLoader", "destroy")
		}
		startStreamRateInterval() {
			this.stopStreamRateInterval(),
			this.streamRateInterval = setInterval(() = >{
				this.streamRate && this.streamRate(0)
			},
			1e3)
		}
		stopStreamRateInterval() {
			this.streamRateInterval && (clearInterval(this.streamRateInterval), this.streamRateInterval = null)
		}
		_createWebTransport() {
			const e = this.player,
			{
				events: {},
				demux: t
			} = e;
			try {
				this.transport = new WebTransport(this.wtUrl),
				this.transport.ready.then(() = >{
					this.emit(v.streamSuccess),
					this.startStreamRateInterval(),
					this.transport.createBidirectionalStream().then(e = >{
						e.readable.pipeTo(new WritableStream(t.input))
					})
				}).
				catch(e = >{
					this.player.debug.warn("WebTransportLoader", "_createWebTransport-ready", e)
				})
			} catch(e) {
				this.player.debug.warn("WebTransportLoader", "_createWebTransport", e)
			}
		}
		fetchStream(e) {
			this.player._times.streamStart = g(),
			this.wtUrl = e.replace(/^wt/, "https"),
			this._createWebTransport()
		}
		abort() {
			if (this.transport) try {
				this.transport.close(),
				this.transport = null
			} catch(e) {
				this.transport = null
			}
		}
	}
	class Ve extends n {
		constructor(e) {
			super(),
			this.player = e,
			this.workUrl = null,
			e.debug.log("WorkerStream", "init")
		}
		destroy() {
			this.workUrl = null,
			this.player.debug.log("WorkerStream", "destroy")
		}
		fetchStream(e) {
			this.workUrl = e,
			this.player._times.streamStart = g(),
			this.player.decoderWorker.workerFetchStream(e)
		}
	}
	class He {
		constructor(e) {
			return new(He.getLoaderFactory(e._opt))(e)
		}
		static getLoaderFactory(e) {
			var {
				protocol: e,
				useWasm: t,
				playType: i
			} = e;
			return 2 === e ? i === r && t ? Ve: Me: 1 === e ? i === r && t ? Ve: Ue: 3 === e ? Ne: 4 === e ? je: 5 === e ? _e: void 0
		}
	}
	var Ke = re(function(e) {
		function T(i, s) {
			if (!i) throw "First parameter is required.";
			s = new A(i, s = s || {
				type: "video"
			});
			var n = this;
			function t(e) {
				e && (s.initCallback = function() {
					e(),
					e = s.initCallback = null
				});
				var t = new p(i, s); (u = new t(i, s)).record(),
				c("recording"),
				s.disableLogs || console.log("Initialized recorderType:", u.constructor.name, "for output-type:", s.type)
			}
			function a(r) {
				if (r = r ||
				function() {},
				u) {
					if ("paused" === n.state) return n.resumeRecording(),
					void setTimeout(function() {
						a(r)
					},
					1);
					"recording" === n.state || s.disableLogs || console.warn('Recording state should be: "recording", however current state is: ', n.state),
					s.disableLogs || console.log("Stopped recording " + s.type + " stream."),
					"gif" !== s.type ? u.stop(e) : (u.stop(), e()),
					c("stopped")
				} else d();
				function e(e) {
					if (u) {
						Object.keys(u).forEach(function(e) {
							"function" != typeof u[e] && (n[e] = u[e])
						});
						var t, i = u.blob;
						if (!i) {
							if (!e) throw "Recording failed.";
							u.blob = i = e
						}
						if (i && !s.disableLogs && console.log(i.type, "->", v(i.size)), r) {
							try {
								t = w.createObjectURL(i)
							} catch(e) {}
							"function" == typeof r.call ? r.call(n, t) : r(t)
						}
						s.autoWriteToDisk && l(function(e) {
							var t = {};
							t[s.type + "Blob"] = e,
							L.Store(t)
						})
					} else "function" == typeof r.call ? r.call(n, "") : r("")
				}
			}
			function o(e) {
				postMessage((new FileReaderSync).readAsDataURL(e))
			}
			function l(t, e) {
				if (!t) throw "Pass a callback function over getDataURL.";
				var i, r = (e || u || {}).blob;
				if (!r) return s.disableLogs || console.warn("Blob encoder did not finish its job yet."),
				void setTimeout(function() {
					l(t, e)
				},
				1e3);
				"undefined" == typeof Worker || navigator.mozGetUserMedia ? ((i = new FileReader).readAsDataURL(r), i.onload = function(e) {
					t(e.target.result)
				}) : ((i = function(e) {
					try {
						var t = w.createObjectURL(new Blob([e.toString(), "this.onmessage =  function (eee) {" + e.name + "(eee.data);}"], {
							type: "application/javascript"
						})),
						i = new Worker(t);
						return w.revokeObjectURL(t),
						i
					} catch(e) {}
				} (o)).onmessage = function(e) {
					t(e.data)
				},
				i.postMessage(r))
			}
			function r(e) {
				e = e || 0,
				"paused" !== n.state ? "stopped" !== n.state && (e >= n.recordingDuration ? a(n.onRecordingStopped) : (e += 1e3, setTimeout(function() {
					r(e)
				},
				1e3))) : setTimeout(function() {
					r(e)
				},
				1e3)
			}
			function c(e) {
				n && (n.state = e, "function" == typeof n.onStateChanged.call ? n.onStateChanged.call(n, e) : n.onStateChanged(e))
			}
			var u, e = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + s.type + " recorder.";
			function d() { ! 0 !== s.disableLogs && console.warn(e)
			}
			var h, f = {
				startRecording: function(e) {
					return s.disableLogs || console.log("RecordRTC version: ", n.version),
					(s = e ? new A(i, e) : s).disableLogs || console.log("started recording " + s.type + " stream."),
					u ? (u.clearRecordedData(), u.record(), c("recording"), n.recordingDuration && r()) : t(function() {
						n.recordingDuration && r()
					}),
					n
				},
				stopRecording: a,
				pauseRecording: function() {
					u ? "recording" === n.state ? (c("paused"), u.pause(), s.disableLogs || console.log("Paused recording.")) : s.disableLogs || console.warn("Unable to pause the recording. Recording state: ", n.state) : d()
				},
				resumeRecording: function() {
					u ? "paused" === n.state ? (c("recording"), u.resume(), s.disableLogs || console.log("Resumed recording.")) : s.disableLogs || console.warn("Unable to resume the recording. Recording state: ", n.state) : d()
				},
				initRecorder: t,
				setRecordingDuration: function(e, t) {
					if (void 0 === e) throw "recordingDuration is required.";
					if ("number" != typeof e) throw "recordingDuration must be a number.";
					return n.recordingDuration = e,
					n.onRecordingStopped = t ||
					function() {},
					{
						onRecordingStopped: function(e) {
							n.onRecordingStopped = e
						}
					}
				},
				clearRecordedData: function() {
					u ? (u.clearRecordedData(), s.disableLogs || console.log("Cleared old recorded data.")) : d()
				},
				getBlob: function() {
					if (u) return u.blob;
					d()
				},
				getDataURL: l,
				toURL: function() {
					if (u) return w.createObjectURL(u.blob);
					d()
				},
				getInternalRecorder: function() {
					return u
				},
				save: function(e) {
					u ? y(u.blob, e) : d()
				},
				getFromDisk: function(e) {
					u ? T.getFromDisk(s.type, e) : d()
				},
				setAdvertisementArray: function(e) {
					s.advertisement = [];
					for (var t = e.length,
					i = 0; i < t; i++) s.advertisement.push({
						duration: i,
						image: e[i]
					})
				},
				blob: null,
				bufferSize: 0,
				sampleRate: 0,
				buffer: null,
				reset: function() {
					"recording" !== n.state || s.disableLogs || console.warn("Stop an active recorder."),
					u && "function" == typeof u.clearRecordedData && u.clearRecordedData(),
					u = null,
					c("inactive"),
					n.blob = null
				},
				onStateChanged: function(e) {
					s.disableLogs || console.log("Recorder state changed:", e)
				},
				state: "inactive",
				getState: function() {
					return n.state
				},
				destroy: function() {
					var e = s.disableLogs;
					s = {
						disableLogs: !0
					},
					n.reset(),
					c("destroyed"),
					f = n = null,
					b.AudioContextConstructor && (b.AudioContextConstructor.close(), b.AudioContextConstructor = null),
					s.disableLogs = e,
					s.disableLogs || console.log("RecordRTC is destroyed.")
				},
				version: "5.6.2"
			};
			if (!this) return n = f;
			for (h in f) this[h] = f[h];
			return n = this,
			f
		}
		function A(e, t) {
			return t.recorderType || t.type || (t.audio && t.video ? t.type = "video": t.audio && !t.video && (t.type = "audio")),
			t.recorderType && !t.type && (t.recorderType === h || t.recorderType === r || t.recorderType === O ? t.type = "video": t.recorderType === I ? t.type = "gif": t.recorderType === c ? t.type = "audio": t.recorderType === E && (k(e, "audio").length && k(e, "video").length || !k(e, "audio").length && k(e, "video").length ? t.type = "video": k(e, "audio").length && !k(e, "video").length && (t.type = "audio"))),
			"undefined" != typeof MediaRecorder && "requestData" in MediaRecorder.prototype && (t.mimeType || (t.mimeType = "video/webm"), t.type || (t.type = t.mimeType.split("/")[0]), t.bitsPerSecond),
			t.type || (t.mimeType && (t.type = t.mimeType.split("/")[0]), t.type || (t.type = "audio")),
			t
		}
		function p(e, t) {
			var i;
			return (u || s || a) && (i = c),
			"undefined" != typeof MediaRecorder && "requestData" in MediaRecorder.prototype && !u && (i = E),
			"video" === t.type && (u || a) && (i = h, "undefined" != typeof ReadableStream && (i = O)),
			"gif" === t.type && (i = I),
			"canvas" === t.type && (i = r),
			d() && i !== r && i !== I && "undefined" != typeof MediaRecorder && "requestData" in MediaRecorder.prototype && (k(e, "video").length || k(e, "audio").length) && ("audio" === t.type ? "function" == typeof MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported("audio/webm") && (i = E) : "function" == typeof MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported("video/webm") && (i = E)),
			e instanceof Array && e.length && (i = x),
			t.recorderType && (i = t.recorderType),
			!t.disableLogs && i && i.name && console.log("Using recorderType:", i.name || i.constructor.name),
			i = !i && l ? E: i
		}
		function t(a) {
			this.addStream = function(e) {
				e && (a = e)
			},
			this.mediaType = {
				audio: !0,
				video: !0
			},
			this.startRecording = function() {
				var e, t, i, r, s = this.mediaType,
				n = this.mimeType || {
					audio: null,
					video: null,
					gif: null
				};
				if ("function" != typeof s.audio && d() && !k(a, "audio").length && (s.audio = !1), "function" != typeof s.video && d() && !k(a, "video").length && (s.video = !1), "function" != typeof s.gif && d() && !k(a, "video").length && (s.gif = !1), !s.audio && !s.video && !s.gif) throw "MediaStream must have either audio or video tracks.";
				s.audio && (e = null, "function" == typeof s.audio && (e = s.audio), this.audioRecorder = new T(a, {
					type: "audio",
					bufferSize: this.bufferSize,
					sampleRate: this.sampleRate,
					numberOfAudioChannels: this.numberOfAudioChannels || 2,
					disableLogs: this.disableLogs,
					recorderType: e,
					mimeType: n.audio,
					timeSlice: this.timeSlice,
					onTimeStamp: this.onTimeStamp
				}), s.video || this.audioRecorder.startRecording()),
				s.video && (e = null, "function" == typeof s.video && (e = s.video), t = a, d() && s.audio && "function" == typeof s.audio && (r = k(a, "video")[0], o ? ((t = new m).addTrack(r), e && e === h && (e = E)) : (t = new m).addTrack(r)), this.videoRecorder = new T(t, {
					type: "video",
					video: this.video,
					canvas: this.canvas,
					frameInterval: this.frameInterval || 10,
					disableLogs: this.disableLogs,
					recorderType: e,
					mimeType: n.video,
					timeSlice: this.timeSlice,
					onTimeStamp: this.onTimeStamp,
					workerPath: this.workerPath,
					webAssemblyPath: this.webAssemblyPath,
					frameRate: this.frameRate,
					bitrate: this.bitrate
				}), s.audio || this.videoRecorder.startRecording()),
				s.audio && s.video && (i = this, r = !0 === d(), !0 === (r = s.audio instanceof c && s.video || !0 !== s.audio && !0 !== s.video && s.audio !== s.video ? !1 : r) ? (i.audioRecorder = null, i.videoRecorder.startRecording()) : i.videoRecorder.initRecorder(function() {
					i.audioRecorder.initRecorder(function() {
						i.videoRecorder.startRecording(),
						i.audioRecorder.startRecording()
					})
				})),
				s.gif && (e = null, "function" == typeof s.gif && (e = s.gif), this.gifRecorder = new T(a, {
					type: "gif",
					frameRate: this.frameRate || 200,
					quality: this.quality || 10,
					disableLogs: this.disableLogs,
					recorderType: e,
					mimeType: n.gif
				}), this.gifRecorder.startRecording())
			},
			this.stopRecording = function(t) {
				t = t ||
				function() {},
				this.audioRecorder && this.audioRecorder.stopRecording(function(e) {
					t(e, "audio")
				}),
				this.videoRecorder && this.videoRecorder.stopRecording(function(e) {
					t(e, "video")
				}),
				this.gifRecorder && this.gifRecorder.stopRecording(function(e) {
					t(e, "gif")
				})
			},
			this.pauseRecording = function() {
				this.audioRecorder && this.audioRecorder.pauseRecording(),
				this.videoRecorder && this.videoRecorder.pauseRecording(),
				this.gifRecorder && this.gifRecorder.pauseRecording()
			},
			this.resumeRecording = function() {
				this.audioRecorder && this.audioRecorder.resumeRecording(),
				this.videoRecorder && this.videoRecorder.resumeRecording(),
				this.gifRecorder && this.gifRecorder.resumeRecording()
			},
			this.getBlob = function(e) {
				var t = {};
				return this.audioRecorder && (t.audio = this.audioRecorder.getBlob()),
				this.videoRecorder && (t.video = this.videoRecorder.getBlob()),
				this.gifRecorder && (t.gif = this.gifRecorder.getBlob()),
				e && e(t),
				t
			},
			this.destroy = function() {
				this.audioRecorder && (this.audioRecorder.destroy(), this.audioRecorder = null),
				this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null),
				this.gifRecorder && (this.gifRecorder.destroy(), this.gifRecorder = null)
			},
			this.getDataURL = function(i) {
				function r(e, t) {
					var i;
					"undefined" != typeof Worker ? ((i = function(e) {
						var t, e = w.createObjectURL(new Blob([e.toString(), "this.onmessage =  function (eee) {" + e.name + "(eee.data);}"], {
							type: "application/javascript"
						})),
						i = new Worker(e);
						if (void 0 !== w) t = w;
						else {
							if ("undefined" == typeof webkitURL) throw "Neither URL nor webkitURL detected.";
							t = webkitURL
						}
						return t.revokeObjectURL(e),
						i
					} (function(e) {
						postMessage((new FileReaderSync).readAsDataURL(e))
					})).onmessage = function(e) {
						t(e.data)
					},
					i.postMessage(e)) : ((i = new FileReader).readAsDataURL(e), i.onload = function(e) {
						t(e.target.result)
					})
				}
				this.getBlob(function(e) {
					e.audio && e.video ? r(e.audio,
					function(t) {
						r(e.video,
						function(e) {
							i({
								audio: t,
								video: e
							})
						})
					}) : e.audio ? r(e.audio,
					function(e) {
						i({
							audio: e
						})
					}) : e.video && r(e.video,
					function(e) {
						i({
							video: e
						})
					})
				})
			},
			this.writeToDisk = function() {
				T.writeToDisk({
					audio: this.audioRecorder,
					video: this.videoRecorder,
					gif: this.gifRecorder
				})
			},
			this.save = function(e) { (e = e || {
					audio: !0,
					video: !0,
					gif: !0
				}).audio && this.audioRecorder && this.audioRecorder.save("string" == typeof e.audio ? e.audio: ""),
				e.video && this.videoRecorder && this.videoRecorder.save("string" == typeof e.video ? e.video: ""),
				e.gif && this.gifRecorder && this.gifRecorder.save("string" == typeof e.gif ? e.gif: "")
			}
		}
		T.version = "5.6.2",
		(e.exports = T).getFromDisk = function(i, r) {
			if (!r) throw "callback is mandatory.";
			console.log("Getting recorded " + ("all" === i ? "blobs": i + " blob ") + " from disk!"),
			L.Fetch(function(e, t) {
				"all" !== i && t === i + "Blob" && r && r(e),
				"all" === i && r && r(e, t.replace("Blob", ""))
			})
		},
		T.writeToDisk = function(e) {
			console.log("Writing recorded blob(s) to disk!"),
			(e = e || {}).audio && e.video && e.gif ? e.audio.getDataURL(function(i) {
				e.video.getDataURL(function(t) {
					e.gif.getDataURL(function(e) {
						L.Store({
							audioBlob: i,
							videoBlob: t,
							gifBlob: e
						})
					})
				})
			}) : e.audio && e.video ? e.audio.getDataURL(function(t) {
				e.video.getDataURL(function(e) {
					L.Store({
						audioBlob: t,
						videoBlob: e
					})
				})
			}) : e.audio && e.gif ? e.audio.getDataURL(function(t) {
				e.gif.getDataURL(function(e) {
					L.Store({
						audioBlob: t,
						gifBlob: e
					})
				})
			}) : e.video && e.gif ? e.video.getDataURL(function(t) {
				e.gif.getDataURL(function(e) {
					L.Store({
						videoBlob: t,
						gifBlob: e
					})
				})
			}) : e.audio ? e.audio.getDataURL(function(e) {
				L.Store({
					audioBlob: e
				})
			}) : e.video ? e.video.getDataURL(function(e) {
				L.Store({
					videoBlob: e
				})
			}) : e.gif && e.gif.getDataURL(function(e) {
				L.Store({
					gifBlob: e
				})
			})
		},
		t.getFromDisk = T.getFromDisk,
		t.writeToDisk = T.writeToDisk,
		T.MRecordRTC = t,
		(e = void 0 !== F ? F: null) && "undefined" == typeof window && void 0 !== F && (F.navigator = {
			userAgent: "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",
			getUserMedia: function() {}
		},
		F.console || (F.console = {}), void 0 !== F.console.log && void 0 !== F.console.error || (F.console.error = F.console.log = F.console.log ||
		function() {
			console.log(arguments)
		}), "undefined" == typeof document && (e.document = {
			documentElement: {
				appendChild: function() {
					return ""
				}
			}
		},
		document.createElement = document.captureStream = document.mozCaptureStream = function() {
			var e = {
				getContext: function() {
					return e
				},
				play: function() {},
				pause: function() {},
				drawImage: function() {},
				toDataURL: function() {
					return ""
				},
				style: {}
			};
			return e
		},
		e.HTMLVideoElement = function() {}), "undefined" == typeof location && (e.location = {
			protocol: "file:",
			href: "",
			hash: ""
		}), "undefined" == typeof screen && (e.screen = {
			width: 0,
			height: 0
		}), void 0 === w && (e.URL = {
			createObjectURL: function() {
				return ""
			},
			revokeObjectURL: function() {
				return ""
			}
		}), e.window = F);
		var n, f = window.requestAnimationFrame,
		g = (void 0 === f && ("undefined" != typeof webkitRequestAnimationFrame ? f = webkitRequestAnimationFrame: "undefined" != typeof mozRequestAnimationFrame ? f = mozRequestAnimationFrame: "undefined" != typeof msRequestAnimationFrame ? f = msRequestAnimationFrame: void 0 === f && (n = 0, f = function(e, t) {
			var i = (new Date).getTime(),
			r = Math.max(0, 16 - (i - n)),
			s = setTimeout(function() {
				e(i + r)
			},
			r);
			return n = i + r,
			s
		})), window.cancelAnimationFrame),
		e = (void 0 === g && ("undefined" != typeof webkitCancelAnimationFrame ? g = webkitCancelAnimationFrame: "undefined" != typeof mozCancelAnimationFrame ? g = mozCancelAnimationFrame: "undefined" != typeof msCancelAnimationFrame ? g = msCancelAnimationFrame: void 0 === g && (g = function(e) {
			clearTimeout(e)
		})), window.AudioContext),
		w = (void 0 === e && ("undefined" != typeof webkitAudioContext && (e = webkitAudioContext), "undefined" != typeof mozAudioContext && (e = mozAudioContext)), window.URL),
		s = (void 0 === w && "undefined" != typeof webkitURL && (w = webkitURL), "undefined" != typeof navigator && void 0 === navigator.getUserMedia && (void 0 !== navigator.webkitGetUserMedia && (navigator.getUserMedia = navigator.webkitGetUserMedia), void 0 !== navigator.mozGetUserMedia && (navigator.getUserMedia = navigator.mozGetUserMedia)), !( - 1 === navigator.userAgent.indexOf("Edge") || !navigator.msSaveBlob && !navigator.msSaveOrOpenBlob)),
		a = !!window.opera || -1 !== navigator.userAgent.indexOf("OPR/"),
		o = -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && "netscape" in window && / rv:/.test(navigator.userAgent),
		u = !a && !s && !!navigator.webkitGetUserMedia || i() || -1 !== navigator.userAgent.toLowerCase().indexOf("chrome/"),
		l = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
		m = (l && !u && -1 !== navigator.userAgent.indexOf("CriOS") && (u = !(l = !1)), window.MediaStream);
		function v(e) {
			if (0 === e) return "0 Bytes";
			var t = parseInt(Math.floor(Math.log(e) / Math.log(1e3)), 10);
			return (e / Math.pow(1e3, t)).toPrecision(3) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t]
		}
		function y(e, t) {
			if (!e) throw "Blob object is required.";
			if (!e.type) try {
				e.type = "video/webm"
			} catch(e) {}
			var i = (e.type || "video/webm").split("/")[1],
			r = ( - 1 !== i.indexOf(";") && (i = i.split(";")[0]), t && -1 !== t.indexOf(".") && (t = (r = t.split("."))[0], i = r[1]), (t || Math.round(9999999999 * Math.random()) + 888888888) + "." + i);
			if (void 0 !== navigator.msSaveOrOpenBlob) return navigator.msSaveOrOpenBlob(e, r);
			if (void 0 !== navigator.msSaveBlob) return navigator.msSaveBlob(e, r);
			t = document.createElement("a");
			t.href = w.createObjectURL(e),
			t.download = r,
			t.style = "display:none;opacity:0;color:transparent;",
			(document.body || document.documentElement).appendChild(t),
			"function" == typeof t.click ? t.click() : (t.target = "_blank", t.dispatchEvent(new MouseEvent("click", {
				view: window,
				bubbles: !0,
				cancelable: !0
			}))),
			w.revokeObjectURL(t.href)
		}
		function i() {
			return "undefined" != typeof window && "object" == typeof window.process && "renderer" === window.process.type || !("undefined" == typeof process || "object" != typeof process.versions || !process.versions.electron) || "object" == typeof navigator && "string" == typeof navigator.userAgent && 0 <= navigator.userAgent.indexOf("Electron")
		}
		function k(e, t) {
			return e && e.getTracks ? e.getTracks().filter(function(e) {
				return e.kind === (t || "audio")
			}) : []
		}
		function S(e, t) { ! ("srcObject" in t) && "mozSrcObject" in t ? t.mozSrcObject = e: t.srcObject = e
		}
		void 0 !== (m = void 0 === m && "undefined" != typeof webkitMediaStream ? webkitMediaStream: m) && void 0 === m.prototype.stop && (m.prototype.stop = function() {
			this.getTracks().forEach(function(e) {
				e.stop()
			})
		}),
		T.invokeSaveAsDialog = y,
		T.getTracks = k,
		T.getSeekableBlob = function(e, r) {
			if ("undefined" == typeof EBML) throw new Error("Please link: https://www.webrtc-experiment.com/EBML.js");
			var s = new EBML.Reader,
			n = new EBML.Decoder,
			a = EBML.tools,
			t = new FileReader;
			t.onload = function(e) {
				n.decode(this.result).forEach(function(e) {
					s.read(e)
				}),
				s.stop();
				var t = a.makeMetadataSeekable(s.metadatas, s.duration, s.cues),
				i = this.result.slice(s.metadataSize),
				t = new Blob([t, i], {
					type: "video/webm"
				});
				r(t)
			},
			t.readAsArrayBuffer(e)
		},
		T.bytesToSize = v,
		T.isElectron = i;
		var b = {};
		function d() {
			if (o || l || s) return ! 0;
			var e, t = navigator.userAgent,
			i = "" + parseFloat(navigator.appVersion),
			r = parseInt(navigator.appVersion, 10);
			return (u || a) && (e = t.indexOf("Chrome"), i = t.substring(e + 7)),
			-1 !== (t = (i = -1 !== (t = i.indexOf(";")) ? i.substring(0, t) : i).indexOf(" ")) && (i = i.substring(0, t)),
			r = parseInt("" + i, 10),
			isNaN(r) && (i = "" + parseFloat(navigator.appVersion), r = parseInt(navigator.appVersion, 10)),
			49 <= r
		}
		function E(i, r) {
			var e, s = this;
			if (void 0 === i) throw 'First argument "MediaStream" is required.';
			if ("undefined" == typeof MediaRecorder) throw "Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.";
			"audio" === (r = r || {
				mimeType: "video/webm"
			}).type && (k(i, "video").length && k(i, "audio").length && (navigator.mozGetUserMedia ? (e = new m).addTrack(k(i, "audio")[0]) : e = new m(k(i, "audio")), i = e), r.mimeType && -1 !== r.mimeType.toString().toLowerCase().indexOf("audio") || (r.mimeType = u ? "audio/webm": "audio/ogg"), r.mimeType && "audio/ogg" !== r.mimeType.toString().toLowerCase() && navigator.mozGetUserMedia && (r.mimeType = "audio/ogg"));
			var n, a = [];
			function o() {
				s.timestamps.push((new Date).getTime()),
				"function" == typeof r.onTimeStamp && r.onTimeStamp(s.timestamps[s.timestamps.length - 1], s.timestamps)
			}
			function l(e) {
				return n && n.mimeType ? n.mimeType: e.mimeType || "video/webm"
			}
			function t() {
				a = [],
				n = null,
				s.timestamps = []
			}
			this.getArrayOfBlobs = function() {
				return a
			},
			this.record = function() {
				s.blob = null,
				s.clearRecordedData(),
				s.timestamps = [],
				c = [],
				a = [];
				var t = r;
				r.disableLogs || console.log("Passing following config over MediaRecorder API.", t),
				n = n && null,
				u && !d() && (t = "video/vp8"),
				"function" == typeof MediaRecorder.isTypeSupported && t.mimeType && !MediaRecorder.isTypeSupported(t.mimeType) && (r.disableLogs || console.warn("MediaRecorder API seems unable to record mimeType:", t.mimeType), t.mimeType = "audio" === r.type ? "audio/webm": "video/webm");
				try {
					n = new MediaRecorder(i, t),
					r.mimeType = t.mimeType
				} catch(e) {
					n = new MediaRecorder(i)
				}
				t.mimeType && !MediaRecorder.isTypeSupported && "canRecordMimeType" in n && !1 === n.canRecordMimeType(t.mimeType) && (r.disableLogs || console.warn("MediaRecorder API seems unable to record mimeType:", t.mimeType)),
				n.ondataavailable = function(e) {
					e.data && c.push("ondataavailable: " + v(e.data.size)),
					"number" != typeof r.timeSlice ? !e.data || !e.data.size || e.data.size < 100 || s.blob ? s.recordingCallback && (s.recordingCallback(new Blob([], {
						type: l(t)
					})), s.recordingCallback = null) : (s.blob = r.getNativeBlob ? e.data: new Blob([e.data], {
						type: l(t)
					}), s.recordingCallback && (s.recordingCallback(s.blob), s.recordingCallback = null)) : e.data && e.data.size && (a.push(e.data), o(), "function" == typeof r.ondataavailable) && (e = r.getNativeBlob ? e.data: new Blob([e.data], {
						type: l(t)
					}), r.ondataavailable(e))
				},
				n.onstart = function() {
					c.push("started")
				},
				n.onpause = function() {
					c.push("paused")
				},
				n.onresume = function() {
					c.push("resumed")
				},
				n.onstop = function() {
					c.push("stopped")
				},
				n.onerror = function(e) {
					e && (e.name || (e.name = "UnknownError"), c.push("error: " + e), r.disableLogs || ( - 1 !== e.name.toString().toLowerCase().indexOf("invalidstate") ? console.error("The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.", e) : -1 !== e.name.toString().toLowerCase().indexOf("notsupported") ? console.error("MIME type (", t.mimeType, ") is not supported.", e) : -1 !== e.name.toString().toLowerCase().indexOf("security") ? console.error("MediaRecorder security error", e) : "OutOfMemory" === e.name ? console.error("The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.", e) : "IllegalStreamModification" === e.name ? console.error("A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.", e) : "OtherRecordingError" === e.name ? console.error("Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.", e) : "GenericError" === e.name ? console.error("The UA cannot provide the codec or recording option that has been requested.", e) : console.error("MediaRecorder Error", e)), !s.manuallyStopped && n && "inactive" === n.state ? (delete r.timeslice, n.start(6e5)) : setTimeout(void 0, 1e3), "inactive" !== n.state && "stopped" !== n.state && n.stop())
				},
				"number" == typeof r.timeSlice ? (o(), n.start(r.timeSlice)) : n.start(36e5),
				r.initCallback && r.initCallback()
			},
			this.timestamps = [],
			this.stop = function(e) {
				e = e ||
				function() {},
				s.manuallyStopped = !0,
				n && (this.recordingCallback = e, "recording" === n.state && n.stop(), "number" == typeof r.timeSlice && setTimeout(function() {
					s.blob = new Blob(a, {
						type: l(r)
					}),
					s.recordingCallback(s.blob)
				},
				100))
			},
			this.pause = function() {
				n && "recording" === n.state && n.pause()
			},
			this.resume = function() {
				n && "paused" === n.state && n.resume()
			},
			this.clearRecordedData = function() {
				n && "recording" === n.state && s.stop(t),
				t()
			},
			this.getInternalRecorder = function() {
				return n
			},
			this.blob = null,
			this.getState = function() {
				return n && n.state || "inactive"
			};
			var c = [];
			this.getAllStates = function() {
				return c
			},
			void 0 === r.checkForInactiveTracks && (r.checkForInactiveTracks = !1),
			s = this,
			function e() {
				if (n && !1 !== r.checkForInactiveTracks) return ! 1 ===
				function() {
					if ("active" in i) {
						if (!i.active) return ! 1
					} else if ("ended" in i && i.ended) return ! 1;
					return ! 0
				} () ? (r.disableLogs || console.log("MediaStream seems stopped."), void s.stop()) : void setTimeout(e, 1e3)
			} (),
			this.name = "MediaStreamRecorder",
			this.toString = function() {
				return this.name
			}
		}
		function c(e, r) {
			if (!k(e, "audio").length) throw "Your stream has no audio tracks.";
			var s, n = this,
			a = [],
			o = [],
			l = !1,
			c = 0,
			u = 2,
			d = (r = r || {}).desiredSampRate;
			function h() {
				if (!1 === r.checkForInactiveTracks) return ! 0;
				if ("active" in e) {
					if (!e.active) return ! 1
				} else if ("ended" in e && e.ended) return ! 1;
				return ! 0
			}
			function t(e, t) {
				function i(e, t) {
					var i, r = e.numberOfAudioChannels,
					s = e.leftBuffers.slice(0),
					n = e.rightBuffers.slice(0),
					a = e.sampleRate,
					o = e.internalInterleavedLength,
					e = e.desiredSampRate;
					function l(e, t, i) {
						var r = Math.round(e.length * (t / i)),
						s = [],
						n = Number((e.length - 1) / (r - 1));
						s[0] = e[0];
						for (var a, o = 1; o < r - 1; o++) {
							var l = o * n,
							c = Number(Math.floor(l)).toFixed(),
							u = Number(Math.ceil(l)).toFixed();
							s[o] = (a = e[c], u = e[u], a + (u - a) * (l - c))
						}
						return s[r - 1] = e[e.length - 1],
						s
					}
					function c(e, t) {
						for (var i = new Float64Array(t), r = 0, s = e.length, n = 0; n < s; n++) {
							var a = e[n];
							i.set(a, r),
							r += a.length
						}
						return i
					}
					function u(e, t, i) {
						for (var r = i.length,
						s = 0; s < r; s++) e.setUint8(t + s, i.charCodeAt(s))
					}
					2 === r && (s = c(s, o), n = c(n, o), e && (s = l(s, e, a), n = l(n, e, a))),
					1 === r && (s = c(s, o), e && (s = l(s, e, a))),
					e && (a = e),
					2 === r && (i = function(e, t) {
						for (var i = e.length + t.length,
						r = new Float64Array(i), s = 0, n = 0; n < i;) r[n++] = e[s],
						r[n++] = t[s],
						s++;
						return r
					} (s, n));
					var o = (i = 1 === r ? s: i).length,
					e = new ArrayBuffer(44 + 2 * o),
					d = new DataView(e);
					u(d, 0, "RIFF"),
					d.setUint32(4, 36 + 2 * o, !0),
					u(d, 8, "WAVE"),
					u(d, 12, "fmt "),
					d.setUint32(16, 16, !0),
					d.setUint16(20, 1, !0),
					d.setUint16(22, r, !0),
					d.setUint32(24, a, !0),
					d.setUint32(28, a * r * 2, !0),
					d.setUint16(32, 2 * r, !0),
					d.setUint16(34, 16, !0),
					u(d, 36, "data"),
					d.setUint32(40, 2 * o, !0);
					for (var h = o,
					f = 44,
					A = 0; A < h; A++) d.setInt16(f, 32767 * i[A], !0),
					f += 2;
					if (t) return t({
						buffer: e,
						view: d
					});
					postMessage({
						buffer: e,
						view: d
					})
				}
				var r, s, n;
				e.noWorker ? i(e,
				function(e) {
					t(e.buffer, e.view)
				}) : (r = i, r = w.createObjectURL(new Blob([r.toString(), ";this.onmessage =  function (eee) {" + r.name + "(eee.data);}"], {
					type: "application/javascript"
				})), (s = new Worker(r)).workerURL = r, (n = s).onmessage = function(e) {
					t(e.data.buffer, e.data.view),
					w.revokeObjectURL(n.workerURL),
					n.terminate()
				},
				n.postMessage(e))
			} ! 0 === r.leftChannel && (u = 1),
			(!(u = 1 === r.numberOfAudioChannels ? 1 : u) || u < 1) && (u = 2),
			r.disableLogs || console.log("StereoAudioRecorder is set to record number of channels: " + u),
			void 0 === r.checkForInactiveTracks && (r.checkForInactiveTracks = !0),
			this.record = function() {
				if (!1 === h()) throw "Please make sure MediaStream is active.";
				v(),
				b = m = !1,
				l = !0,
				void 0 !== r.timeSlice && S()
			},
			this.stop = function(i) {
				i = i ||
				function() {},
				l = !1,
				t({
					desiredSampRate: d,
					sampleRate: g,
					numberOfAudioChannels: u,
					internalInterleavedLength: c,
					leftBuffers: a,
					rightBuffers: 1 === u ? [] : o,
					noWorker: r.noWorker
				},
				function(e, t) {
					n.blob = new Blob([t], {
						type: "audio/wav"
					}),
					n.buffer = new ArrayBuffer(t.buffer.byteLength),
					n.view = t,
					n.sampleRate = d || g,
					n.bufferSize = p,
					n.length = c,
					b = !1,
					i && i(n.blob)
				})
			},
			(T.Storage = void 0 === T.Storage ? {
				AudioContextConstructor: null,
				AudioContext: window.AudioContext || window.webkitAudioContext
			}: T.Storage).AudioContextConstructor && "closed" !== T.Storage.AudioContextConstructor.state || (T.Storage.AudioContextConstructor = new T.Storage.AudioContext);
			var i = T.Storage.AudioContextConstructor,
			f = i.createMediaStreamSource(e),
			A = [0, 256, 512, 1024, 2048, 4096, 8192, 16384],
			p = void 0 === r.bufferSize ? 4096 : r.bufferSize;
			if ( - 1 !== A.indexOf(p) || r.disableLogs || console.log("Legal values for buffer-size are " + JSON.stringify(A, null, "\t")), i.createJavaScriptNode) s = i.createJavaScriptNode(p, u, u);
			else {
				if (!i.createScriptProcessor) throw "WebAudio API has no support on this browser.";
				s = i.createScriptProcessor(p, u, u)
			}
			f.connect(s),
			r.bufferSize || (p = s.bufferSize);
			var g = void 0 !== r.sampleRate ? r.sampleRate: i.sampleRate || 44100,
			m = ((g < 22050 || 96e3 < g) && !r.disableLogs && console.log("sample-rate must be under range 22050 and 96000."), r.disableLogs || r.desiredSampRate && console.log("Desired sample-rate: " + r.desiredSampRate), !1);
			function v() {
				a = [],
				c = 0,
				m = l = b = !(o = []),
				i = null,
				n.leftchannel = a,
				n.rightchannel = o,
				n.numberOfAudioChannels = u,
				n.desiredSampRate = d,
				n.sampleRate = g,
				n.recordingLength = c,
				E = {
					left: [],
					right: [],
					recordingLength: 0
				}
			}
			function y() {
				s && (s.onaudioprocess = null, s.disconnect(), s = null),
				f && (f.disconnect(), f = null),
				v()
			}
			this.pause = function() {
				m = !0
			},
			this.resume = function() {
				if (!1 === h()) throw "Please make sure MediaStream is active.";
				if (!l) return r.disableLogs || console.log("Seems recording has been restarted."),
				void this.record();
				m = !1
			},
			this.clearRecordedData = function() {
				r.checkForInactiveTracks = !1,
				l && this.stop(y),
				y()
			},
			this.name = "StereoAudioRecorder";
			var b = !(this.toString = function() {
				return this.name
			}),
			E = (s.onaudioprocess = function(e) {
				var t, i;
				m || (!1 === h() && (r.disableLogs || console.log("MediaStream seems stopped."), s.disconnect(), l = !1), l ? (b || (b = !0, r.onAudioProcessStarted && r.onAudioProcessStarted(), r.initCallback && r.initCallback()), t = e.inputBuffer.getChannelData(0), t = new Float32Array(t), a.push(t), 2 === u && (e = e.inputBuffer.getChannelData(1), i = new Float32Array(e), o.push(i)), c += p, n.recordingLength = c, void 0 !== r.timeSlice && (E.recordingLength += p, E.left.push(t), 2 === u && E.right.push(i))) : f && (f.disconnect(), f = null))
			},
			i.createMediaStreamDestination ? s.connect(i.createMediaStreamDestination()) : s.connect(i.destination), this.leftchannel = a, this.rightchannel = o, this.numberOfAudioChannels = u, this.desiredSampRate = d, this.sampleRate = g, n.recordingLength = c, {
				left: [],
				right: [],
				recordingLength: 0
			});
			function S() {
				l && "function" == typeof r.ondataavailable && void 0 !== r.timeSlice && (E.left.length ? (t({
					desiredSampRate: d,
					sampleRate: g,
					numberOfAudioChannels: u,
					internalInterleavedLength: E.recordingLength,
					leftBuffers: E.left,
					rightBuffers: 1 === u ? [] : E.right
				},
				function(e, t) {
					t = new Blob([t], {
						type: "audio/wav"
					});
					r.ondataavailable(t),
					setTimeout(S, r.timeSlice)
				}), E = {
					left: [],
					right: [],
					recordingLength: 0
				}) : setTimeout(S, r.timeSlice))
			}
		}
		function r(s, n) {
			if ("undefined" == typeof html2canvas) throw "Please link: https://www.webrtc-experiment.com/screenshot.js"; (n = n || {}).frameInterval || (n.frameInterval = 10);
			var r = !1; ["captureStream", "mozCaptureStream", "webkitCaptureStream"].forEach(function(e) {
				e in document.createElement("canvas") && (r = !0)
			});
			var i, a, o, e = !(!window.webkitRTCPeerConnection && !window.webkitGetUserMedia || !window.chrome),
			t = 50,
			l = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
			if (e && l && l[2] && (t = parseInt(l[2], 10)), e && t < 52 && (r = !1), r = n.useWhammyRecorder ? !1 : r) if (n.disableLogs || console.log("Your browser supports both MediRecorder API and canvas.captureStream!"), s instanceof HTMLCanvasElement) i = s;
			else {
				if (! (s instanceof CanvasRenderingContext2D)) throw "Please pass either HTMLCanvasElement or CanvasRenderingContext2D.";
				i = s.canvas
			} else ! navigator.mozGetUserMedia || n.disableLogs || console.error("Canvas recording is NOT supported in Firefox.");
			this.record = function() {
				if (o = !0, r && !n.useWhammyRecorder) {
					var e;
					"captureStream" in i ? e = i.captureStream(25) : "mozCaptureStream" in i ? e = i.mozCaptureStream(25) : "webkitCaptureStream" in i && (e = i.webkitCaptureStream(25));
					try {
						var t = new m;
						t.addTrack(k(e, "video")[0]),
						e = t
					} catch(e) {}
					if (!e) throw "captureStream API are NOT available."; (a = new E(e, {
						mimeType: n.mimeType || "video/webm"
					})).record()
				} else f.frames = [],
				h = (new Date).getTime(),
				d();
				n.initCallback && n.initCallback()
			},
			this.getWebPImages = function(e) {
				var r;
				"canvas" === s.nodeName.toLowerCase() && (r = f.frames.length, f.frames.forEach(function(e, t) {
					var i = r - t,
					i = (n.disableLogs || console.log(i + "/" + r + " frames remaining"), n.onEncodingCallback && n.onEncodingCallback(i, r), e.image.toDataURL("image/webp", 1));
					f.frames[t].image = i
				}), n.disableLogs || console.log("Generating WebM")),
				e()
			};
			var c = !(this.stop = function(t) {
				o = !1;
				var i = this;
				r && a ? a.stop(t) : this.getWebPImages(function() {
					f.compile(function(e) {
						n.disableLogs || console.log("Recording finished!"),
						i.blob = e,
						i.blob.forEach && (i.blob = new Blob([], {
							type: "video/webm"
						})),
						t && t(i.blob),
						f.frames = []
					})
				})
			});
			function u() {
				f.frames = [],
				c = o = !1
			}
			function d() {
				return c ? (h = (new Date).getTime(), setTimeout(d, 500)) : "canvas" === s.nodeName.toLowerCase() ? (e = (new Date).getTime() - h, h = (new Date).getTime(), f.frames.push({
					image: (i = (t = document.createElement("canvas")).getContext("2d"), t.width = s.width, t.height = s.height, i.drawImage(s, 0, 0), t),
					duration: e
				}), void(o && setTimeout(d, n.frameInterval))) : void html2canvas(s, {
					grabMouse: void 0 === n.showMousePointer || n.showMousePointer,
					onrendered: function(e) {
						var t = (new Date).getTime() - h;
						if (!t) return setTimeout(d, n.frameInterval);
						h = (new Date).getTime(),
						f.frames.push({
							image: e.toDataURL("image/webp", 1),
							duration: t
						}),
						o && setTimeout(d, n.frameInterval)
					}
				});
				var e, t, i
			}
			this.pause = function() {
				c = !0,
				a instanceof E && a.pause()
			},
			this.resume = function() {
				c = !1,
				a instanceof E ? a.resume() : o || this.record()
			},
			this.clearRecordedData = function() {
				o && this.stop(u),
				u()
			},
			this.name = "CanvasRecorder",
			this.toString = function() {
				return this.name
			};
			var h = (new Date).getTime(),
			f = new R.Video(100)
		}
		function h(e, y) {
			function i(e) {
				e = void 0 !== e ? e: 10;
				var t = (new Date).getTime() - a;
				return t ? s ? (a = (new Date).getTime(), setTimeout(i, 100)) : (a = (new Date).getTime(), n.paused && n.play(), o.drawImage(n, 0, 0, E.width, E.height), b.frames.push({
					duration: t,
					image: E.toDataURL("image/webp")
				}), void(r || setTimeout(i, e, e))) : setTimeout(i, e, e)
			} (y = y || {}).frameInterval || (y.frameInterval = 10),
			y.disableLogs || console.log("Using frames-interval:", y.frameInterval);
			var r = !(this.record = function() {
				y.width || (y.width = 320),
				y.height || (y.height = 240),
				y.video || (y.video = {
					width: y.width,
					height: y.height
				}),
				y.canvas || (y.canvas = {
					width: y.width,
					height: y.height
				}),
				E.width = y.canvas.width || 320,
				E.height = y.canvas.height || 240,
				o = E.getContext("2d"),
				y.video && y.video instanceof HTMLVideoElement ? (n = y.video.cloneNode(), y.initCallback && y.initCallback()) : (n = document.createElement("video"), S(e, n), n.onloadedmetadata = function() {
					y.initCallback && y.initCallback()
				},
				n.width = y.video.width, n.height = y.video.height),
				n.muted = !0,
				n.play(),
				a = (new Date).getTime(),
				b = new R.Video,
				y.disableLogs || (console.log("canvas resolutions", E.width, "*", E.height), console.log("video width/height", n.width || E.width, "*", n.height || E.height)),
				i(y.frameInterval)
			}),
			s = !(this.stop = function(m) {
				m = m ||
				function() {},
				r = !0;
				var v = this;
				setTimeout(function() {
					var i, e, t, r, s, n, a, u, d, h, o, f, A, p, g, l, c;
					i = b.frames,
					e = -1,
					r = t = null,
					s = function(e) {
						b.frames = e,
						y.advertisement && y.advertisement.length && (b.frames = y.advertisement.concat(b.frames)),
						b.compile(function(e) {
							v.blob = e,
							v.blob.forEach && (v.blob = new Blob([], {
								type: "video/webm"
							})),
							m && m(v.blob)
						})
					},
					(n = document.createElement("canvas")).width = E.width,
					n.height = E.height,
					u = n.getContext("2d"),
					d = [],
					h = -1 === e,
					o = e && 0 < e && e <= i.length ? e: i.length,
					f = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2)),
					A = t && 0 <= t && t <= 1 ? t: 0,
					p = r && 0 <= r && r <= 1 ? r: 0,
					g = !1,
					l = -1,
					c = (a = {
						length: o,
						functionToLoop: function(e, t) {
							function n() { ! g && l - a <= l * p || (h && (g = !0), d.push(i[t])),
								e()
							}
							var a, o, l, c;
							g ? n() : ((c = new Image).onload = function() {
								u.drawImage(c, 0, 0, E.width, E.height);
								var e = u.getImageData(0, 0, E.width, E.height);
								a = 0,
								o = e.data.length,
								l = e.data.length / 4;
								for (var t = 0; t < o; t += 4) {
									var i = e.data[t],
									r = e.data[t + 1],
									s = e.data[t + 2];
									Math.sqrt(Math.pow( + i, 2) + Math.pow( + r, 2) + Math.pow( + s, 2)) <= f * A && a++
								}
								n()
							},
							c.src = i[t].image)
						},
						callback: function() { (d = d.concat(i.slice(o))).length <= 0 && d.push(i[i.length - 1]),
							s(d)
						}
					}).length,
					function e() {++l !== c ? setTimeout(function() {
							a.functionToLoop(e, l)
						},
						1) : a.callback()
					} ()
				},
				10)
			});
			function t() {
				b.frames = [],
				s = !(r = !0)
			}
			this.pause = function() {
				s = !0
			},
			this.resume = function() {
				s = !1,
				r && this.record()
			},
			this.clearRecordedData = function() {
				r || this.stop(t),
				t()
			},
			this.name = "WhammyRecorder",
			this.toString = function() {
				return this.name
			};
			var n, a, b, E = document.createElement("canvas"),
			o = E.getContext("2d")
		}
		void 0 !== e ? b.AudioContext = e: "undefined" != typeof webkitAudioContext && (b.AudioContext = webkitAudioContext),
		T.Storage = b,
		T.MediaStreamRecorder = E,
		T.StereoAudioRecorder = c,
		T.CanvasRecorder = r,
		T.WhammyRecorder = h;
		C.prototype.add = function(e, t) {
			if ("toDataURL" in (e = "canvas" in e ? e.canvas: e) && (e = e.toDataURL("image/webp", this.quality)), !/^data:image\/webp;base64,/gi.test(e)) throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
			this.frames.push({
				image: e,
				duration: t || this.duration
			})
		},
		C.prototype.compile = function(t) {
			i = D,
			i = w.createObjectURL(new Blob([i.toString(), "this.onmessage =  function (eee) {" + i.name + "(eee.data);}"], {
				type: "application/javascript"
			})),
			e = new Worker(i),
			w.revokeObjectURL(i);
			var e, i = e;
			i.onmessage = function(e) {
				e.data.error ? console.error(e.data.error) : t(e.data)
			},
			i.postMessage(this.frames)
		};
		var R = {
			Video: C
		};
		function C(e) {
			this.frames = [],
			this.duration = e || 1,
			this.quality = .8
		}
		function D(e) {
			function a(e) {
				var t = [];
				e = (e.length % 8 ? new Array(9 - e.length % 8).join("0") : "") + e;
				for (var i = 0; i < e.length; i += 8) t.push(parseInt(e.substr(i, 8), 2));
				return new Uint8Array(t)
			}
			function c(e) {
				for (var t = [], i = 0; i < e.length; i++) {
					var r = e[i].data,
					s = (r = "string" == typeof(r = "number" == typeof(r = "object" == typeof r ? c(r) : r) ? a(r.toString(2)) : r) ? new Uint8Array(r.split("").map(function(e) {
						return e.charCodeAt(0)
					})) : r).size || r.byteLength || r.length,
					n = Math.ceil(Math.ceil(Math.log(s) / Math.log(2)) / 8),
					s = s.toString(2),
					s = new Array(7 * n + 7 + 1 - s.length).join("0") + s,
					n = new Array(n).join("0") + "1" + s;
					t.push(function(e) {
						for (var t = []; 0 < e;) t.push(255 & e),
						e >>= 8;
						return new Uint8Array(t.reverse())
					} (e[i].id)),
					t.push(a(n)),
					t.push(r)
				}
				return new Blob(t, {
					type: "video/webm"
				})
			}
			function o(e) {
				for (var t = 0,
				i = {}; t < e.length;) {
					var r = e.substr(t, 4),
					s = (s = t, parseInt(e.substr(s + 4, 4).split("").map(function(e) {
						e = e.charCodeAt(0).toString(2);
						return new Array(8 - e.length + 1).join("0") + e
					}).join(""), 2)),
					n = e.substr(t + 4 + 4, s);
					t += 8 + s,
					i[r] = i[r] || [],
					"RIFF" === r || "LIST" === r ? i[r].push(o(n)) : i[r].push(n)
				}
				return i
			}
			e = new
			function(e) {
				var t = function(e) {
					if (e[0]) {
						for (var t = e[0].width, i = e[0].height, r = e[0].duration, s = 1; s < e.length; s++) r += e[s].duration;
						return {
							duration: r,
							width: t,
							height: i
						}
					}
					postMessage({
						error: "Something went wrong. Maybe WebP format is not supported in the current browser."
					})
				} (e);
				if (!t) return [];
				for (var i, r = [{
					id: 440786851,
					data: [{
						data: 1,
						id: 17030
					},
					{
						data: 1,
						id: 17143
					},
					{
						data: 4,
						id: 17138
					},
					{
						data: 8,
						id: 17139
					},
					{
						data: "webm",
						id: 17026
					},
					{
						data: 2,
						id: 17031
					},
					{
						data: 2,
						id: 17029
					}]
				},
				{
					id: 408125543,
					data: [{
						id: 357149030,
						data: [{
							data: 1e6,
							id: 2807729
						},
						{
							data: "whammy",
							id: 19840
						},
						{
							data: "whammy",
							id: 22337
						},
						{
							data: (i = t.duration, [].slice.call(new Uint8Array(new Float64Array([i]).buffer), 0).map(function(e) {
								return String.fromCharCode(e)
							}).reverse().join("")),
							id: 17545
						}]
					},
					{
						id: 374648427,
						data: [{
							id: 174,
							data: [{
								data: 1,
								id: 215
							},
							{
								data: 1,
								id: 29637
							},
							{
								data: 0,
								id: 156
							},
							{
								data: "und",
								id: 2274716
							},
							{
								data: "V_VP8",
								id: 134
							},
							{
								data: "VP8",
								id: 2459272
							},
							{
								data: 1,
								id: 131
							},
							{
								id: 224,
								data: [{
									data: t.width,
									id: 176
								},
								{
									data: t.height,
									id: 186
								}]
							}]
						}]
					}]
				}], s = 0, n = 0; s < e.length;) {
					for (var a = [], o = 0; a.push(e[s]), o += e[s].duration, ++s < e.length && o < 3e4;);
					var l = {
						id: 524531317,
						data: function(e, i, t) {
							return [{
								data: e,
								id: 231
							}].concat(t.map(function(e) {
								var t = function(e) {
									var t = 0;
									if (e.keyframe && (t |= 128), e.invisible && (t |= 8), e.lacing && (t |= e.lacing << 1), e.discardable && (t |= 1), 127 < e.trackNum) throw "TrackNumber > 127 not supported";
									return [128 | e.trackNum, e.timecode >> 8, 255 & e.timecode, t].map(function(e) {
										return String.fromCharCode(e)
									}).join("") + e.frame
								} ({
									discardable: 0,
									frame: e.data.slice(4),
									invisible: 0,
									keyframe: 1,
									lacing: 0,
									trackNum: 1,
									timecode: Math.round(i)
								});
								return i += e.duration,
								{
									data: t,
									id: 163
								}
							}))
						} (n, 0, a)
					};
					r[1].data.push(l),
					n += o
				}
				return c(r)
			} (e.map(function(e) {
				var t = function(e) {
					for (var t = e.RIFF[0].WEBP[0], i = t.indexOf("*"), r = 0, s = []; r < 4; r++) s[r] = t.charCodeAt(i + 3 + r);
					return {
						width: 16383 & (s[1] << 8 | s[0]),
						height: 16383 & (s[3] << 8 | s[2]),
						data: t,
						riff: e
					}
				} (o(atob(e.image.slice(23))));
				return t.duration = e.duration,
				t
			}));
			postMessage(e)
		}
		T.Whammy = R;
		var L = {
			init: function() {
				var i, e, t, r = this;
				function s(e) {
					e.createObjectStore(r.dataStoreName)
				}
				function n() {
					var e = i.transaction([r.dataStoreName], "readwrite");
					function t(t) {
						e.objectStore(r.dataStoreName).get(t).onsuccess = function(e) {
							r.callback && r.callback(e.target.result, t)
						}
					}
					r.videoBlob && e.objectStore(r.dataStoreName).put(r.videoBlob, "videoBlob"),
					r.gifBlob && e.objectStore(r.dataStoreName).put(r.gifBlob, "gifBlob"),
					r.audioBlob && e.objectStore(r.dataStoreName).put(r.audioBlob, "audioBlob"),
					t("audioBlob"),
					t("videoBlob"),
					t("gifBlob")
				}
				"undefined" != typeof indexedDB && void 0 !== indexedDB.open ? (e = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ""), (t = indexedDB.open(e, 1)).onerror = r.onError, t.onsuccess = function() { (i = t.result).onerror = r.onError,
					i.setVersion && 1 !== i.version ? i.setVersion(1).onsuccess = function() {
						s(i),
						n()
					}: n()
				},
				t.onupgradeneeded = function(e) {
					s(e.target.result)
				}) : console.error("IndexedDB API are not available in this browser.")
			},
			Fetch: function(e) {
				return this.callback = e,
				this.init(),
				this
			},
			Store: function(e) {
				return this.audioBlob = e.audioBlob,
				this.videoBlob = e.videoBlob,
				this.gifBlob = e.gifBlob,
				this.init(),
				this
			},
			onError: function(e) {
				console.error(JSON.stringify(e, null, "\t"))
			},
			dataStoreName: "recordRTC",
			dbName: null
		};
		function I(e, i) {
			"undefined" == typeof GIFEncoder && ((t = document.createElement("script")).src = "https://www.webrtc-experiment.com/gif-recorder.js", (document.body || document.documentElement).appendChild(t)),
			i = i || {};
			var t, r, s = e instanceof CanvasRenderingContext2D || e instanceof HTMLCanvasElement,
			n = (this.record = function() {
				"undefined" != typeof GIFEncoder && l ? (s || (i.width || (i.width = r.offsetWidth || 320), i.height || (i.height = r.offsetHeight || 240), i.video || (i.video = {
					width: i.width,
					height: i.height
				}), i.canvas || (i.canvas = {
					width: i.width,
					height: i.height
				}), a.width = i.canvas.width || 320, a.height = i.canvas.height || 240, r.width = i.video.width || 320, r.height = i.video.height || 240), (u = new GIFEncoder).setRepeat(0), u.setDelay(i.frameRate || 200), u.setQuality(i.quality || 10), u.start(), "function" == typeof i.onGifRecordingStarted && i.onGifRecordingStarted(), d = f(function e(t) {
					if (!0 !== h.clearedRecordedData) {
						if (n) return setTimeout(function() {
							e(t)
						},
						100);
						d = f(e),
						t - c < 90 || (!s && r.paused && r.play(), s || o.drawImage(r, 0, 0, a.width, a.height), i.onGifPreview && i.onGifPreview(a.toDataURL("image/png")), u.addFrame(o), c = t)
					}
				}), i.initCallback && i.initCallback()) : setTimeout(h.record, 1e3)
			},
			!(this.stop = function(e) {
				e = e ||
				function() {},
				d && g(d),
				this.blob = new Blob([new Uint8Array(u.stream().bin)], {
					type: "image/gif"
				}),
				e(this.blob),
				u.stream().bin = []
			})),
			a = (this.pause = function() {
				n = !0
			},
			this.resume = function() {
				n = !1
			},
			this.clearRecordedData = function() {
				h.clearedRecordedData = !0,
				u && (u.stream().bin = [])
			},
			this.name = "GifRecorder", this.toString = function() {
				return this.name
			},
			document.createElement("canvas")),
			o = a.getContext("2d"),
			l = (s && (e instanceof CanvasRenderingContext2D ? a = (o = e).canvas: e instanceof HTMLCanvasElement && (o = e.getContext("2d"), a = e)), !0);
			s || ((r = document.createElement("video")).muted = !0, r.autoplay = !0, r.playsInline = !0, l = !1, r.onloadedmetadata = function() {
				l = !0
			},
			S(e, r), r.play());
			var c, u, d = null,
			h = this
		}
		function B(r, s) {
			s = s || "multi-streams-mixer";
			var n = [],
			a = !1,
			o = document.createElement("canvas"),
			l = o.getContext("2d"),
			c = (o.style.opacity = 0, o.style.position = "absolute", o.style.zIndex = -1, o.style.top = "-1000em", o.style.left = "-1000em", o.className = s, (document.body || document.documentElement).appendChild(o), this.disableLogs = !1, this.frameInterval = 10, this.width = 360, this.height = 240, this.useGainNode = !0, this),
			e = window.AudioContext;
			void 0 === e && ("undefined" != typeof webkitAudioContext && (e = webkitAudioContext), "undefined" != typeof mozAudioContext && (e = mozAudioContext));
			window.URL,
			"undefined" != typeof navigator && void 0 === navigator.getUserMedia && (void 0 !== navigator.webkitGetUserMedia && (navigator.getUserMedia = navigator.webkitGetUserMedia), void 0 !== navigator.mozGetUserMedia && (navigator.getUserMedia = navigator.mozGetUserMedia));
			var u = window.MediaStream,
			d = (void 0 !== (u = void 0 === u && "undefined" != typeof webkitMediaStream ? webkitMediaStream: u) && void 0 === u.prototype.stop && (u.prototype.stop = function() {
				this.getTracks().forEach(function(e) {
					e.stop()
				})
			}), {});
			function h() {
				var e, t, i;
				a || (e = n.length, t = !1, i = [], n.forEach(function(e) {
					e.stream || (e.stream = {}),
					e.stream.fullcanvas ? t = e: i.push(e)
				}), t ? (o.width = t.stream.width, o.height = t.stream.height) : i.length ? (o.width = 1 < e ? 2 * i[0].width: i[0].width, o.height = i[0].height * (9 !== e && 10 !== e ? 7 !== e && 8 !== e ? 5 !== e && 6 !== e ? 3 !== e && 4 !== e ? 1 : 2 : 3 : 4 : 5)) : (o.width = c.width || 360, o.height = c.height || 240), t && t instanceof HTMLVideoElement && f(t), i.forEach(function(e, t) {
					f(e, t)
				}), setTimeout(h, c.frameInterval))
			}
			function f(e, t) {
				var i, r, s, n;
				a || (r = i = 0, s = e.width, n = e.height, 1 === t && (i = e.width), 2 === t && (r = e.height), 3 === t && (i = e.width, r = e.height), 4 === t && (r = 2 * e.height), 5 === t && (i = e.width, r = 2 * e.height), 6 === t && (r = 3 * e.height), 7 === t && (i = e.width, r = 3 * e.height), void 0 !== e.stream.left && (i = e.stream.left), void 0 !== e.stream.top && (r = e.stream.top), void 0 !== e.stream.width && (s = e.stream.width), void 0 !== e.stream.height && (n = e.stream.height), l.drawImage(e, i, r, s, n), "function" == typeof e.stream.onRender && e.stream.onRender(l, i, r, s, n, t))
			}
			function A(e) {
				var t, i, r = document.createElement("video");
				return t = e,
				!("srcObject" in (i = r)) && "mozSrcObject" in i ? i.mozSrcObject = t: i.srcObject = t,
				r.className = s,
				r.muted = !0,
				r.volume = 0,
				r.width = e.width || c.width || 360,
				r.height = e.height || c.height || 240,
				r.play(),
				r
			}
			function p(e) {
				n = [],
				(e = e || r).forEach(function(e) {
					var t;
					e.getTracks().filter(function(e) {
						return "video" === e.kind
					}).length && ((t = A(e)).stream = e, n.push(t))
				})
			}
			void 0 !== e ? d.AudioContext = e: "undefined" != typeof webkitAudioContext && (d.AudioContext = webkitAudioContext),
			this.startDrawingFrames = function() {
				h()
			},
			this.appendStreams = function(e) {
				if (!e) throw "First parameter is required."; (e = e instanceof Array ? e: [e]).forEach(function(e) {
					var t, i = new u;
					e.getTracks().filter(function(e) {
						return "video" === e.kind
					}).length && ((t = A(e)).stream = e, n.push(t), i.addTrack(e.getTracks().filter(function(e) {
						return "video" === e.kind
					})[0])),
					e.getTracks().filter(function(e) {
						return "audio" === e.kind
					}).length && (t = c.audioContext.createMediaStreamSource(e), c.audioDestination = c.audioContext.createMediaStreamDestination(), t.connect(c.audioDestination), i.addTrack(c.audioDestination.stream.getTracks().filter(function(e) {
						return "audio" === e.kind
					})[0])),
					r.push(i)
				})
			},
			this.releaseStreams = function() {
				n = [],
				a = !0,
				c.gainNode && (c.gainNode.disconnect(), c.gainNode = null),
				c.audioSources.length && (c.audioSources.forEach(function(e) {
					e.disconnect()
				}), c.audioSources = []),
				c.audioDestination && (c.audioDestination.disconnect(), c.audioDestination = null),
				c.audioContext && c.audioContext.close(),
				c.audioContext = null,
				l.clearRect(0, 0, o.width, o.height),
				o.stream && (o.stream.stop(), o.stream = null)
			},
			this.resetVideoStreams = function(e) {
				p(e = !e || e instanceof Array ? e: [e])
			},
			this.name = "MultiStreamsMixer",
			this.toString = function() {
				return this.name
			},
			this.getMixedStream = function() {
				a = !1;
				p(),
				"captureStream" in o ? e = o.captureStream() : "mozCaptureStream" in o ? e = o.mozCaptureStream() : c.disableLogs || console.error("Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features"),
				t = new u,
				e.getTracks().filter(function(e) {
					return "video" === e.kind
				}).forEach(function(e) {
					t.addTrack(e)
				});
				var t, i = o.stream = t,
				e = function() {
					d.AudioContextConstructor || (d.AudioContextConstructor = new d.AudioContext),
					c.audioContext = d.AudioContextConstructor,
					c.audioSources = [],
					!0 === c.useGainNode && (c.gainNode = c.audioContext.createGain(), c.gainNode.connect(c.audioContext.destination), c.gainNode.gain.value = 0);
					var t = 0;
					if (r.forEach(function(e) {
						e.getTracks().filter(function(e) {
							return "audio" === e.kind
						}).length && (t++, e = c.audioContext.createMediaStreamSource(e), !0 === c.useGainNode && e.connect(c.gainNode), c.audioSources.push(e))
					}), t) return c.audioDestination = c.audioContext.createMediaStreamDestination(),
					c.audioSources.forEach(function(e) {
						e.connect(c.audioDestination)
					}),
					c.audioDestination.stream
				} ();
				return e && e.getTracks().filter(function(e) {
					return "audio" === e.kind
				}).forEach(function(e) {
					i.addTrack(e)
				}),
				r.forEach(function(e) {
					e.fullcanvas
				}),
				i
			}
		}
		function x(i, r) {
			i = i || [];
			var s, n, a = this; (r = r || {
				elementClass: "multi-streams-mixer",
				mimeType: "video/webm",
				video: {
					width: 360,
					height: 240
				}
			}).frameInterval || (r.frameInterval = 10),
			r.video || (r.video = {}),
			r.video.width || (r.video.width = 360),
			r.video.height || (r.video.height = 240),
			this.record = function() {
				var t;
				s = new B(i, r.elementClass || "multi-streams-mixer"),
				t = [],
				i.forEach(function(e) {
					k(e, "video").forEach(function(e) {
						t.push(e)
					})
				}),
				t.length && (s.frameInterval = r.frameInterval || 10, s.width = r.video.width || 360, s.height = r.video.height || 240, s.startDrawingFrames()),
				r.previewStream && "function" == typeof r.previewStream && r.previewStream(s.getMixedStream()),
				(n = new E(s.getMixedStream(), r)).record()
			},
			this.stop = function(t) {
				n && n.stop(function(e) {
					a.blob = e,
					t(e),
					a.clearRecordedData()
				})
			},
			this.pause = function() {
				n && n.pause()
			},
			this.resume = function() {
				n && n.resume()
			},
			this.clearRecordedData = function() {
				n && (n.clearRecordedData(), n = null),
				s && (s.releaseStreams(), s = null)
			},
			this.addStreams = function(e) {
				if (!e) throw "First parameter is required.";
				e instanceof Array || (e = [e]),
				i.concat(e),
				n && s && (s.appendStreams(e), r.previewStream && "function" == typeof r.previewStream && r.previewStream(s.getMixedStream()))
			},
			this.resetVideoStreams = function(e) {
				s && (!e || e instanceof Array || (e = [e]), s.resetVideoStreams(e))
			},
			this.getMixer = function() {
				return s
			},
			this.name = "MultiStreamRecorder",
			this.toString = function() {
				return this.name
			}
		}
		function O(i, o) {
			var l, r, s;
			function n(t, e) {
				if (!o.workerPath && !e) return l = !1,
				fetch("https://unpkg.com/webm-wasm@latest/dist/webm-worker.js").then(function(e) {
					e.arrayBuffer().then(function(e) {
						n(t, e)
					})
				}); ! o.workerPath && e instanceof ArrayBuffer && (e = new Blob([e], {
					type: "text/javascript"
				}), o.workerPath = w.createObjectURL(e)),
				o.workerPath || console.error("workerPath parameter is missing."),
				(r = new Worker(o.workerPath)).postMessage(o.webAssemblyPath || "https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm"),
				r.addEventListener("message",
				function(e) {
					"READY" === e.data ? (r.postMessage({
						width: o.width,
						height: o.height,
						bitrate: o.bitrate || 1200,
						timebaseDen: o.frameRate || 30,
						realtime: o.realtime
					}), new ReadableStream({
						start: function(r) {
							var s = document.createElement("canvas"),
							n = document.createElement("video"),
							a = !0;
							n.srcObject = i,
							n.muted = !0,
							n.height = o.height,
							n.width = o.width,
							n.volume = 0,
							n.onplaying = function() {
								s.width = o.width,
								s.height = o.height;
								var e = s.getContext("2d"),
								t = 1e3 / o.frameRate,
								i = setInterval(function() {
									if (l && (clearInterval(i), r.close()), a && (a = !1, o.onVideoProcessStarted && o.onVideoProcessStarted()), e.drawImage(n, 0, 0), "closed" !== r._controlledReadableStream.state) try {
										r.enqueue(e.getImageData(0, 0, o.width, o.height))
									} catch(e) {}
								},
								t)
							},
							n.play()
						}
					}).pipeTo(new WritableStream({
						write: function(e) {
							l ? console.error("Got image, but recorder is finished!") : r.postMessage(e.data.buffer, [e.data.buffer])
						}
					}))) : !e.data || s || a.push(e.data)
				})
			}
			"undefined" != typeof ReadableStream && "undefined" != typeof WritableStream || console.error("Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js"),
			(o = o || {}).width = o.width || 640,
			o.height = o.height || 480,
			o.frameRate = o.frameRate || 30,
			o.bitrate = o.bitrate || 1200,
			o.realtime = o.realtime || !0,
			this.record = function() {
				s = !(a = []),
				this.blob = null,
				n(i),
				"function" == typeof o.initCallback && o.initCallback()
			},
			this.pause = function() {
				s = !0
			},
			this.resume = function() {
				s = !1
			};
			var a = [];
			this.stop = function(e) {
				l = !0;
				var t, i = this;
				t = function() {
					i.blob = new Blob(a, {
						type: "video/webm"
					}),
					e(i.blob)
				},
				r ? (r.addEventListener("message",
				function(e) {
					null === e.data && (r.terminate(), r = null, t())
				}), r.postMessage(null)) : t()
			},
			this.name = "WebAssemblyRecorder",
			this.toString = function() {
				return this.name
			},
			this.clearRecordedData = function() {
				s = !(a = []),
				this.blob = null
			},
			this.blob = null
		}
		T.DiskStorage = L,
		T.GifRecorder = I,
		T.MultiStreamRecorder = x,
		T.RecordRTCPromisesHandler = function(e, t) {
			if (!this) throw 'Use "new RecordRTCPromisesHandler()"';
			if (void 0 === e) throw 'First argument "MediaStream" is required.';
			var r = this;
			r.recordRTC = new T(e, t),
			this.startRecording = function() {
				return new Promise(function(e, t) {
					try {
						r.recordRTC.startRecording(),
						e()
					} catch(e) {
						t(e)
					}
				})
			},
			this.stopRecording = function() {
				return new Promise(function(t, i) {
					try {
						r.recordRTC.stopRecording(function(e) {
							r.blob = r.recordRTC.getBlob(),
							r.blob && r.blob.size ? t(e) : i("Empty blob.", r.blob)
						})
					} catch(t) {
						i(t)
					}
				})
			},
			this.pauseRecording = function() {
				return new Promise(function(e, t) {
					try {
						r.recordRTC.pauseRecording(),
						e()
					} catch(e) {
						t(e)
					}
				})
			},
			this.resumeRecording = function() {
				return new Promise(function(e, t) {
					try {
						r.recordRTC.resumeRecording(),
						e()
					} catch(e) {
						t(e)
					}
				})
			},
			this.getDataURL = function(e) {
				return new Promise(function(t, e) {
					try {
						r.recordRTC.getDataURL(function(e) {
							t(e)
						})
					} catch(t) {
						e(t)
					}
				})
			},
			this.getBlob = function() {
				return new Promise(function(e, t) {
					try {
						e(r.recordRTC.getBlob())
					} catch(e) {
						t(e)
					}
				})
			},
			this.getInternalRecorder = function() {
				return new Promise(function(e, t) {
					try {
						e(r.recordRTC.getInternalRecorder())
					} catch(e) {
						t(e)
					}
				})
			},
			this.reset = function() {
				return new Promise(function(e, t) {
					try {
						e(r.recordRTC.reset())
					} catch(e) {
						t(e)
					}
				})
			},
			this.destroy = function() {
				return new Promise(function(e, t) {
					try {
						e(r.recordRTC.destroy())
					} catch(e) {
						t(e)
					}
				})
			},
			this.getState = function() {
				return new Promise(function(e, t) {
					try {
						e(r.recordRTC.getState())
					} catch(e) {
						t(e)
					}
				})
			},
			this.blob = null,
			this.version = "5.6.2"
		},
		T.WebAssemblyRecorder = O
	});
	class Ge extends n {
		constructor(e) {
			super(),
			this.player = e,
			this.fileName = "",
			this.fileType = z,
			this.isRecording = !1,
			this.recordingTimestamp = 0,
			this.recordingInterval = null,
			e.debug.log("Recorder", "init")
		}
		destroy() {
			this._reset(),
			this.player.debug.log("Recorder", "destroy")
		}
		setFileName(e, t) {
			this.fileName = e,
			"mp4" !== t && z !== t || (this.fileType = t)
		}
		get recording() {
			return this.isRecording
		}
		get recordTime() {
			return this.recordingTimestamp
		}
		startRecord() {
			const t = this.player.debug,
			e = {
				type: "video",
				mimeType: "video/webm;codecs=h264",
				onTimeStamp: e = >{
					t.log("Recorder", "record timestamp :" + e)
				},
				disableLogs: !this.player._opt.debug
			};
			try {
				const t = this.player.video.$videoElement.captureStream(25);
				if (this.player.audio && this.player.audio.mediaStreamAudioDestinationNode && this.player.audio.mediaStreamAudioDestinationNode.stream && !this.player.audio.isStateSuspended() && this.player.audio.hasAudio && this.player._opt.hasAudio) {
					const e = this.player.audio.mediaStreamAudioDestinationNode.stream;
					var i;
					0 < e.getAudioTracks().length && ((i = e.getAudioTracks()[0]) && i.enabled && t.addTrack(i))
				}
				this.recorder = Ke(t, e)
			} catch(e) {
				t.error("Recorder", "startRecord error", e),
				this.emit(v.recordCreateError)
			}
			this.recorder && (this.isRecording = !0, this.player.emit(v.recording, !0), this.recorder.startRecording(), t.log("Recorder", "start recording"), this.player.emit(v.recordStart), this.recordingInterval = window.setInterval(() = >{
				this.recordingTimestamp += 1,
				this.player.emit(v.recordingTimestamp, this.recordingTimestamp)
			},
			1e3))
		}
		stopRecordAndSave() {
			this.recorder && this.isRecording && this.recorder.stopRecording(() = >{
				this.player.debug.log("Recorder", "stop recording"),
				this.player.emit(v.recordEnd);
				var e = (this.fileName || g()) + "." + (this.fileType || z);
				C(this.recorder.getBlob(), e),
				this._reset(),
				this.player.emit(v.recording, !1)
			})
		}
		_reset() {
			this.isRecording = !1,
			this.recordingTimestamp = 0,
			this.recorder && (this.recorder.destroy(), this.recorder = null),
			this.fileName = null,
			this.recordingInterval && clearInterval(this.recordingInterval),
			this.recordingInterval = null
		}
	}
	class We {
		constructor(e) {
			return new(We.getLoaderFactory())(e)
		}
		static getLoaderFactory() {
			return Ge
		}
	}
	class qe {
		constructor(e) {
			this.player = e,
			this.decoderWorker = new Worker(e._opt.decoder),
			this._initDecoderWorker(),
			e.debug.log("decoderWorker", "init")
		}
		destroy() {
			this.decoderWorker.postMessage({
				cmd: "close"
			}),
			this.decoderWorker.terminate(),
			this.decoderWorker = null,
			this.player.debug.log("decoderWorker", "destroy")
		}
		_initDecoderWorker() {
			const {
				debug: i,
				events: {}
			} = this.player;
			this.decoderWorker.onmessage = e = >{
				const t = e.data;
				switch (t.cmd) {
				case _:
					i.log("decoderWorker", "onmessage:", _),
					this.player.loaded || this.player.emit(v.load),
					this.player.emit(v.decoderWorkerInit),
					this._initWork();
					break;
				case K:
					i.log("decoderWorker", "onmessage:", K, t.code),
					this.player._times.decodeStart || (this.player._times.decodeStart = g()),
					this.player.video.updateVideoInfo({
						encTypeCode: t.code
					});
					break;
				case "audioCode":
					this.player.audio && this.player.audio.updateAudioInfo({
						encTypeCode: t.code
					});
					break;
				case V:
					if (i.log("decoderWorker", "onmessage:", V, `width: $ {
						t.w
					},
					height: ` + t.h), this.player.video.updateVideoInfo({
						width: t.w,
						height: t.h
					}), !this.player._opt.openWebglAlignment && t.w / 2 % 4 != 0) return void this.player.emit(d.webglAlignmentError);
					this.player.video.initCanvasViewSize(),
					this.player._opt.playType === m && (this.player.video.initFps(), this.player.video.initVideoDelay());
					break;
				case H:
					i.log("decoderWorker", "onmessage:", H, `channels: $ {
						t.channels
					},
					sampleRate: ` + t.sampleRate),
					this.player.audio && (this.player.audio.updateAudioInfo(t), this.player._opt.playType === r ? this.player.audio.initScriptNode(t) : this.player._opt.playType === m && this.player.audio.initScriptNodeDelay(t));
					break;
				case "render":
					this.player._opt.playType === r ? (this.player.handleRender(), this.player.emit(v.timeUpdate, t.ts), this.player.updateStats({
						dfps: !0,
						buf: t.delay
					}), this.player.video.render(t), this.player._times.videoStart || (this.player._times.videoStart = g(), this.player.handlePlayToRenderTimes())) : this.player._opt.playType === m && this.player.video.pushData(t);
					break;
				case "playAudio":
					(this.player.playing && this.player.audio || !this.player.video) && (this.player._opt.hasVideo || this.player.handleRender(), this.player._opt.playType !== r && this.player._opt.playType !== m || this.player.audio.play(t.buffer, t.ts));
					break;
				case "workerFetch":
					t.type === v.streamSuccess ? this.player.stream.emit(v.streamSuccess) : t.type === v.streamRate ? this.player.emit(v.kBps, (t.value / 1024).toFixed(2)) : t.type === v.streamEnd ? this.player.stream.emit(v.streamEnd) : t.type === d.websocketError ? (this.player.stream.emit(d.websocketError, t.value), this.player.emit(v.error, d.websocketError)) : t.type === d.fetchError ? (this.player.stream.emit(d.fetchError, t.value), this.player.emit(v.error, d.fetchError)) : t.type === v.streamAbps ? this.player.updateStats({
						abps: t.value
					}) : t.type === v.streamVbps && (this.player._times.demuxStart || (this.player._times.demuxStart = g()), this.player.updateStats({
						vbps: t.value
					}));
					break;
				case "wasmError":
					t.message && -1 !== t.message.indexOf("Invalid NAL unit size") && (this.player.emit(v.error, d.wasmDecodeError), this.player.emit(d.wasmDecodeError));
					break;
				case "workerEnd":
					this.player.destroy(),
					console.error("jessibuca pro 体验结束,请刷新页面再次体验"),
					alert("jessibuca pro 体验结束,请刷新页面再次体验"),
					window.location.reload();
					break;
				default:
					this.player[t.cmd] && this.player[t.cmd](t)
				}
			}
		}
		_initWork() {
			var e = {
				debug: this.player._opt.debug,
				useOffscreen: this.player._opt.useOffscreen,
				useWCS: this.player._opt.useWCS,
				videoBuffer: this.player._opt.videoBuffer,
				videoBufferDelay: this.player._opt.videoBufferDelay,
				openWebglAlignment: this.player._opt.openWebglAlignment,
				playType: this.player._opt.playType,
				hasAudio: this.player._opt.hasAudio,
				hasVideo: this.player._opt.hasVideo,
				playbackRate: 1,
				playbackForwardMaxRateDecodeIFrame: this.player._opt.playbackForwardMaxRateDecodeIFrame,
				sampleRate: this.player.audio && this.player.audio.audioContext.sampleRate || 0
			};
			this.decoderWorker.postMessage({
				cmd: "init",
				opt: JSON.stringify(e)
			})
		}
		decodeVideo(e, t, i) {
			this.player._opt.playType === r ? this._decodeVideo(e, t, i) : this.player._opt.playType === m && (this.player.video.rate >= this.player._opt.playbackForwardMaxRateDecodeIFrame ? i && (this.player.debug.log("decoderWorker", `current rate is $ {
				this.player.video.rate
			},
			only decode i frame`), this._decodeVideoNoDelay(e, t)) : this._decodeVideo(e, t, i))
		}
		_decodeVideo(e, t, i) {
			t = {
				type: 2,
				ts: Math.max(t, 0),
				isIFrame: i
			};
			this.decoderWorker.postMessage({
				cmd: G,
				buffer: e,
				options: t
			},
			[e.buffer])
		}
		_decodeVideoNoDelay(e, t) {
			this.decoderWorker.postMessage({
				cmd: "videoDecode",
				buffer: e,
				ts: Math.max(t, 0)
			},
			[e.buffer])
		}
		decodeAudio(e, t) {
			this.player._opt.playType === r ? this.player._opt.useWCS && !this.player._opt.useOffscreen || this.player._opt.useMSE ? this._decodeAudioNoDelay(e, t) : this._decodeAudio(e, t) : this.player._opt.playType === m && this._decodeAudio(e, t)
		}
		_decodeAudio(e, t) {
			t = {
				type: 1,
				ts: Math.max(t, 0)
			};
			this.decoderWorker.postMessage({
				cmd: G,
				buffer: e,
				options: t
			},
			[e.buffer])
		}
		_decodeAudioNoDelay(e, t) {
			this.decoderWorker.postMessage({
				cmd: "audioDecode",
				buffer: e,
				ts: Math.max(t, 0)
			},
			[e.buffer])
		}
		updateWorkConfig(e) {
			this.decoderWorker.postMessage({
				cmd: "updateConfig",
				key: e.key,
				value: e.value
			})
		}
		workerFetchStream(e) {
			var t = this.player["_opt"],
			t = {
				protocol: t.protocol,
				isFlv: t.isFlv
			};
			this.decoderWorker.postMessage({
				cmd: "fetchStream",
				url: e,
				opt: JSON.stringify(t)
			})
		}
		clearWorkBuffer() {
			this.decoderWorker.postMessage({
				cmd: "clearBuffer"
			})
		}
	}
	class Qe extends n {
		constructor(e) {
			super(),
			this.player = e,
			this.stopId = null,
			this.firstTimestamp = null,
			this.startTimestamp = null,
			this.delay = -1,
			this.bufferList = [],
			this.dropping = !1,
			this.initInterval(),
			this.player.on(v.visibilityChange, e = >{})
		}
		destroy() {
			this.bufferList = [],
			this.stopId && (clearInterval(this.stopId), this.stopId = null),
			this.firstTimestamp = null,
			this.startTimestamp = null,
			this.delay = -1,
			this.dropping = !1,
			this.off(),
			this.player.debug.log("CommonDemux", "destroy")
		}
		getDelay(e) {
			return e ? (this.firstTimestamp ? e && (t = Date.now() - this.startTimestamp, i = e - this.firstTimestamp, this.delay = i <= t ? t - i: i - t) : (this.firstTimestamp = e, this.startTimestamp = Date.now(), this.delay = -1), this.delay) : -1;
			var t, i
		}
		resetDelay() {
			this.firstTimestamp = null,
			this.startTimestamp = null,
			this.delay = -1,
			this.dropping = !1
		}
		initInterval() {
			this.player.debug.log("common dumex", "init Interval"),
			this._loop(),
			this.stopId = setInterval(() = >{
				this._loop()
			},
			10)
		}
		_loop() {
			let e;
			var t = this.player._opt.videoBuffer,
			i = this.player._opt.videoBufferDelay;
			if (this.bufferList.length) if (this.dropping) {
				for (1 === (e = this.bufferList.shift()).type && 0 === e.payload[1] && this._doDecoderDecode(e); ! e.isIFrame && this.bufferList.length;) 1 === (e = this.bufferList.shift()).type && 0 === e.payload[1] && this._doDecoderDecode(e);
				e.isIFrame && this.getDelay(e.ts) <= Math.min(t, 200) && (this.player.debug.warn("common dumex", "_loop data isIFrame is true and delay is " + this.delay), this.dropping = !1, this._doDecoderDecode(e))
			} else e = this.bufferList[0],
			-1 === this.getDelay(e.ts) ? (this.bufferList.shift(), this._doDecoderDecode(e)) : this.getDelay(e.ts) > i + t ? (this.resetDelay(), this.dropping = !0) : this.getDelay(e.ts) > t && (this.bufferList.shift(), this._doDecoderDecode(e))
		}
		_doDecode(e, t, i, r, s) {
			const n = this.player;
			let a = {
				ts: i,
				cts: s,
				type: t,
				isIFrame: !1
			};
			n._opt.useWCS && !n._opt.useOffscreen || n._opt.useMSE ? (2 === t && (a.isIFrame = r), this.pushBuffer(e, a)) : 2 === t ? n.decoderWorker && n.decoderWorker.decodeVideo(e, i, r) : 1 === t && n._opt.hasAudio && n.decoderWorker && n.decoderWorker.decodeAudio(e, i)
		}
		_doDecoderDecode(e) {
			const t = this.player,
			{
				webcodecsDecoder: i,
				mseDecoder: r
			} = t;
			1 === e.type ? t._opt.hasAudio && t.decoderWorker && t.decoderWorker.decodeAudio(e.payload, e.ts) : 2 === e.type && (t._opt.useWCS && !t._opt.useOffscreen ? i.decodeVideo(e.payload, e.ts, e.isIFrame) : t._opt.useMSE && r.decodeVideo(e.payload, e.ts, e.isIFrame, e.cts))
		}
		pushBuffer(e, t) {
			if (1 === t.type) this.bufferList.push({
				ts: t.ts,
				payload: e,
				type: 1
			});
			else if (2 === t.type) {
				if (!this.player.visibility && 30 < this.bufferList.length) {
					this.player.debug.warn("CommonDemux", "document is hidden, buffer list size is " + this.bufferList.length);
					for (this.bufferList.shift(); 0 < this.bufferList.length && (this.player.debug.warn("CommonDemux", "isDropping"), !(this.bufferList[0].isIFrame && this.bufferList.length < 10));) this.bufferList.shift();
					this.player._opt.useMSE && this.player.mseDecoder.dropSourceBuffer(!0)
				}
				this.bufferList.push({
					ts: t.ts,
					cts: t.cts,
					payload: e,
					type: 2,
					isIFrame: t.isIFrame
				})
			}
		}
		close() {}
	}
	const ze = [[Uint8Array, Int8Array], [Uint16Array, Int16Array], [Uint32Array, Int32Array, Float32Array], [Float64Array]],
	Je = Symbol(32),
	Xe = Symbol(16),
	Ye = Symbol(8),
	Ze = new Map;
	ze.forEach((e, t) = >e.forEach(e = >Ze.set(e, t)));
	class $e {
		constructor(e) {
			this.g = e,
			this.consumed = 0,
			e && (this.need = e.next().value)
		}
		fillFromReader(i) {
			return e = this,
			l = function * () {
				var {
					done: e,
					value: t
				} = yield i.read();
				return e ? void this.close() : (this.write(t), this.fillFromReader(i))
			},
			new(o = (o = a = void 0) || Promise)(function(i, t) {
				function r(e) {
					try {
						n(l.next(e))
					} catch(e) {
						t(e)
					}
				}
				function s(e) {
					try {
						n(l.
						throw (e))
					} catch(e) {
						t(e)
					}
				}
				function n(e) {
					var t;
					e.done ? i(e.value) : ((t = e.value) instanceof o ? t: new o(function(e) {
						e(t)
					})).then(r, s)
				}
				n((l = l.apply(e, a || [])).next())
			});
			var e, a, o, l
		}
		consume() {
			this.buffer && this.consumed && (this.buffer.copyWithin(0, this.consumed), this.buffer = this.buffer.subarray(0, this.buffer.length - this.consumed), this.consumed = 0)
		}
		demand(e, t) {
			return t && this.consume(),
			this.need = e,
			this.flush()
		}
		read(i) {
			return new Promise((t, e) = >{
				if (this.resolve) return e("last read not complete yet");
				this.resolve = e = >{
					delete this.resolve,
					delete this.need,
					t(e)
				},
				this.demand(i, !0)
			})
		}
		readU32() {
			return this.read(Je)
		}
		readU16() {
			return this.read(Xe)
		}
		readU8() {
			return this.read(Ye)
		}
		close() {
			this.g && this.g.
			return ()
		}
		flush() {
			if (this.buffer && this.need) {
				let e = null;
				const r = this.buffer.subarray(this.consumed);
				let t = 0;
				var i = e = >r.length < (t = e);
				if ("number" == typeof this.need) {
					if (i(this.need)) return;
					e = r.subarray(0, t)
				} else if (this.need instanceof ArrayBuffer) {
					if (i(this.need.byteLength)) return;
					new Uint8Array(this.need).set(r.subarray(0, t)),
					e = this.need
				} else if (this.need === Je) {
					if (i(4)) return;
					e = r[0] << 24 | r[1] << 16 | r[2] << 8 | r[3]
				} else if (this.need === Xe) {
					if (i(2)) return;
					e = r[0] << 8 | r[1]
				} else if (this.need === Ye) {
					if (i(1)) return;
					e = r[0]
				} else if (Ze.has(this.need.constructor)) {
					if (i(this.need.length << Ze.get(this.need.constructor))) return;
					new Uint8Array(this.need.buffer, this.need.byteOffset).set(r.subarray(0, t)),
					e = this.need
				} else if (this.g) return void this.g.
				throw (new Error("Unsupported type"));
				return this.consumed += t,
				this.g ? this.demand(this.g.next(e).value, !0) : this.resolve && this.resolve(e),
				e
			}
		}
		write(e) {
			e instanceof ArrayBuffer ? this.malloc(e.byteLength).set(new Uint8Array(e)) : this.malloc(e.byteLength).set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
			(this.g || this.resolve) && this.flush()
		}
		writeU32(e) {
			this.malloc(4).set([e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]),
			this.flush()
		}
		writeU16(e) {
			this.malloc(2).set([e >> 8 & 255, 255 & e]),
			this.flush()
		}
		writeU8(e) {
			this.malloc(1)[0] = e,
			this.flush()
		}
		malloc(e) {
			if (this.buffer) {
				var t = this.buffer.length,
				i = t + e;
				if (i <= this.buffer.buffer.byteLength - this.buffer.byteOffset) this.buffer = new Uint8Array(this.buffer.buffer, this.buffer.byteOffset, i);
				else {
					const e = new Uint8Array(i);
					e.set(this.buffer),
					this.buffer = e
				}
				return this.buffer.subarray(t, i)
			}
			return this.buffer = new Uint8Array(e),
			this.buffer
		}
	}
	$e.U32 = Je,
	$e.U16 = Xe,
	$e.U8 = Ye;
	class et extends Qe {
		constructor(e) {
			super(e),
			this.input = new $e(this.demux()),
			e.debug.log("FlvDemux", "init")
		}
		destroy() {
			super.destroy(),
			this.input = null,
			this.player.debug.log("FlvDemux", "destroy")
		}
		dispatch(e) {
			this.input.write(e)
		} * demux() {
			yield 9;
			const t = new ArrayBuffer(4),
			i = new Uint8Array(t),
			r = new Uint32Array(t),
			s = this.player;
			for (;;) {
				if (!this.input) return;
				i[3] = 0;
				const t = yield 15,
				l = t[4];
				i[0] = t[7],
				i[1] = t[6],
				i[2] = t[5];
				var n = r[0];
				i[0] = t[10],
				i[1] = t[9],
				i[2] = t[8];
				let e = r[0];
				16777215 === e && (i[3] = t[11], e = r[0]);
				var a, o = (yield n).slice();
				if (!s) return;
				switch (l) {
				case 8:
					s._opt.hasAudio && (s.updateStats({
						abps: o.byteLength
					}), 0 < o.byteLength && this._doDecode(o, 1, e));
					break;
				case 9:
					if (s._opt.hasVideo) {
						s.updateStats({
							vbps:
							o.byteLength
						});
						const t = o[0] >> 4 == 1;
						0 < o.byteLength && (r[0] = o[4], r[1] = o[3], r[2] = o[2], r[3] = 0, a = r[0], s._times.demuxStart || (s._times.demuxStart = g()), this._doDecode(o, 2, e, t, a))
					}
				}
			}
		}
		close() {
			this.input = null
		}
	}
	class tt extends Qe {
		constructor(e) {
			super(e),
			e.debug.log("M7sDemux", "init")
		}
		destroy() {
			super.destroy(),
			this.player.debug.log("M7sDemux", "destroy"),
			this.player = null
		}
		dispatch(e) {
			const t = this.player,
			i = new DataView(e),
			r = i.getUint8(0),
			s = i.getUint32(1, !1);
			switch (r) {
			case 1:
				if (t._opt.hasAudio) {
					const i = new Uint8Array(e, 5);
					t.updateStats({
						abps: i.byteLength
					}),
					0 < i.byteLength && this._doDecode(i, r, s)
				}
				break;
			case 2:
				var n, a;
				t._opt.hasVideo && (t._times.demuxStart || (t._times.demuxStart = g()), 5 < i.byteLength ? (n = new Uint8Array(e, 5), a = i.getUint8(5) >> 4 == 1, t.updateStats({
					vbps: n.byteLength
				}), 0 < n.byteLength && this._doDecode(n, r, s, a)) : this.player.debug.warn("M7sDemux", "dispatch", "dv byteLength is", i.byteLength))
			}
		}
	}
	class it extends et {
		constructor(e) {
			super(e),
			e.debug.log("WebTransportDemux", "init")
		}
		destroy() {
			this.player.debug.log("WebTransportDemux", "destroy"),
			super.destroy()
		}
	}
	class rt {
		constructor(e) {
			return new(rt.getLoaderFactory(e._opt.demuxType))(e)
		}
		static getLoaderFactory(e) {
			return "m7s" === e ? tt: e === M ? et: e === U ? it: void 0
		}
	}
	class st {
		constructor(e) {
			this.TAG = "ExpGolomb",
			this._buffer = e,
			this._buffer_index = 0,
			this._total_bytes = e.byteLength,
			this._total_bits = 8 * e.byteLength,
			this._current_word = 0,
			this._current_word_bits_left = 0
		}
		destroy() {
			this._buffer = null
		}
		_fillCurrentWord() {
			let e = this._total_bytes - this._buffer_index,
			t = Math.min(4, e),
			i = new Uint8Array(4);
			i.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)),
			this._current_word = new DataView(i.buffer).getUint32(0, !1),
			this._buffer_index += t,
			this._current_word_bits_left = 8 * t
		}
		readBits(e) {
			if (e <= this._current_word_bits_left) return t = this._current_word >>> 32 - e,
			this._current_word <<= e,
			this._current_word_bits_left -= e,
			t;
			var t = this._current_word_bits_left ? this._current_word: 0,
			e = (t >>>= 32 - this._current_word_bits_left, e - this._current_word_bits_left),
			e = (this._fillCurrentWord(), Math.min(e, this._current_word_bits_left)),
			i = this._current_word >>> 32 - e;
			return this._current_word <<= e,
			this._current_word_bits_left -= e,
			t << e | i
		}
		readBool() {
			return 1 === this.readBits(1)
		}
		readByte() {
			return this.readBits(8)
		}
		_skipLeadingZero() {
			let e;
			for (e = 0; e < this._current_word_bits_left; e++) if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e,
			this._current_word_bits_left -= e,
			e;
			return this._fillCurrentWord(),
			e + this._skipLeadingZero()
		}
		readUEG() {
			var e = this._skipLeadingZero();
			return this.readBits(e + 1) - 1
		}
		readSEG() {
			var e = this.readUEG();
			return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
		}
	}
	class I {
		static _ebsp2rbsp(e) {
			let t = e,
			i = t.byteLength,
			r = new Uint8Array(i),
			s = 0;
			for (let e = 0; e < i; e++) 2 <= e && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (r[s] = t[e], s++);
			return new Uint8Array(r.buffer, 0, s)
		}
		static parseSPS(e) {
			let t = I._ebsp2rbsp(e),
			i = new st(t);
			i.readByte();
			var e = i.readByte(),
			r = (i.readByte(), i.readByte());
			i.readUEG();
			let s = I.getProfileString(e),
			n = I.getLevelString(r),
			a = 1,
			o = 420,
			l = 8;
			if ((100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e || 138 === e || 144 === e) && (3 === (a = i.readUEG()) && i.readBits(1), a <= 3 && (o = [0, 420, 422, 444][a]), l = i.readUEG() + 8, i.readUEG(), i.readBits(1), i.readBool())) {
				var c = 3 !== a ? 8 : 12;
				for (let e = 0; e < c; e++) i.readBool() && (e < 6 ? I._skipScalingList(i, 16) : I._skipScalingList(i, 64))
			}
			i.readUEG();
			r = i.readUEG();
			if (0 === r) i.readUEG();
			else if (1 === r) {
				i.readBits(1),
				i.readSEG(),
				i.readSEG();
				var u = i.readUEG();
				for (let e = 0; e < u; e++) i.readSEG()
			}
			var e = i.readUEG(),
			r = (i.readBits(1), i.readUEG()),
			d = i.readUEG(),
			h = i.readBits(1);
			0 === h && i.readBits(1),
			i.readBits(1);
			let f = 0,
			A = 0,
			p = 0,
			g = 0,
			m = (i.readBool() && (f = i.readUEG(), A = i.readUEG(), p = i.readUEG(), g = i.readUEG()), 1),
			v = 1,
			y = 0,
			b = !0,
			E = 0,
			S = 0,
			T = (i.readBool() && (i.readBool() && (0 < (C = i.readByte()) && C < 16 ? (m = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][C - 1], v = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][C - 1]) : 255 === C && (m = i.readByte() << 8 | i.readByte(), v = i.readByte() << 8 | i.readByte())), i.readBool() && i.readBool(), i.readBool() && (i.readBits(4), i.readBool() && i.readBits(24)), i.readBool() && (i.readUEG(), i.readUEG()), i.readBool() && (C = i.readBits(32), R = i.readBits(32), b = i.readBool(), E = R, S = 2 * C, y = E / S)), 1),
			w = (1 === m && 1 === v || (T = m / v), 0),
			k = 0;
			k = 0 === a ? (w = 1, 2 - h) : (w = 3 === a ? 1 : 2, (1 === a ? 2 : 1) * (2 - h));
			var R = 16 * (r + 1),
			C = 16 * (d + 1) * (2 - h),
			r = (R -= (f + A) * w, C -= (p + g) * k, Math.ceil(R * T));
			return i.destroy(),
			i = null,
			{
				profile_string: s,
				level_string: n,
				bit_depth: l,
				ref_frames: e,
				chroma_format: o,
				chroma_format_string: I.getChromaFormatString(o),
				frame_rate: {
					fixed: b,
					fps: y,
					fps_den: S,
					fps_num: E
				},
				sar_ratio: {
					width: m,
					height: v
				},
				codec_size: {
					width: R,
					height: C
				},
				present_size: {
					width: r,
					height: C
				}
			}
		}
		static _skipScalingList(t, i) {
			let r = 8,
			s = 8,
			n;
			for (let e = 0; e < i; e++) 0 !== s && (n = t.readSEG(), s = (r + n + 256) % 256),
			r = 0 === s ? r: s
		}
		static getProfileString(e) {
			switch (e) {
			case 66:
				return "Baseline";
			case 77:
				return "Main";
			case 88:
				return "Extended";
			case 100:
				return "High";
			case 110:
				return "High10";
			case 122:
				return "High422";
			case 244:
				return "High444";
			default:
				return "Unknown"
			}
		}
		static getLevelString(e) {
			return (e / 10).toFixed(1)
		}
		static getChromaFormatString(e) {
			switch (e) {
			case 420:
				return "4:2:0";
			case 422:
				return "4:2:2";
			case 444:
				return "4:4:4";
			default:
				return "Unknown"
			}
		}
	}
	class nt {
		constructor(e) {
			this.buffer = e,
			this.buflen = e.length,
			this.bufpos = 0,
			this.bufoff = 0,
			this.iserro = !1
		}
		read(e) {
			let t = 0,
			i;
			for (; e;) {
				if (e < 0 || this.bufpos >= this.buflen) return this.iserro = !0,
				0;
				this.iserro = !1,
				i = 8 < this.bufoff + e ? 8 - this.bufoff: e,
				t = (t <<= i) + (this.buffer[this.bufpos] >> 8 - this.bufoff - i & 255 >> 8 - i),
				this.bufoff += i,
				e -= i,
				8 == this.bufoff && (this.bufpos++, this.bufoff = 0)
			}
			return t
		}
		look(e) {
			var t = this.bufpos,
			i = this.bufoff,
			e = this.read(e);
			return this.bufpos = t,
			this.bufoff = i,
			e
		}
		read_golomb() {
			let e;
			for (e = 0; 0 === this.read(1) && !this.iserro; e++);
			return (1 << e) + this.read(e) - 1
		}
	}
	function at(e) {
		let t,
		i,
		r,
		s,
		n,
		a,
		o,
		l,
		c,
		u,
		d,
		h = {},
		f = new nt(e);
		f.read(48),
		h.width = 0,
		h.height = 0;
		do {
			if (h.profile = f.read(8), h.compat = f.read(8), h.level = f.read(8), h.nalu = 1 + (3 & f.read(8)), h.nb_sps = 31 & f.read(8), 0 == h.nb_sps) break;
			if (f.read(16), 103 != f.read(8)) break;
			if (t = f.read(8), f.read(8), f.read(8), f.read_golomb(), (100 == t || 110 == t || 122 == t || 244 == t || 44 == t || 83 == t || 86 == t || 118 == t) && (3 == (u = f.read_golomb()) && f.read(1), f.read_golomb(), f.read_golomb(), f.read(1), f.read(1))) for (c = 0; c < (3 != u ? 8 : 12); c++) f.read(1);
			switch (f.read_golomb(), f.read_golomb()) {
			case 0:
				f.read_golomb();
				break;
			case 1:
				for (f.read(1), f.read_golomb(), f.read_golomb(), d = f.read_golomb(), c = 0; c < d; c++) f.read_golomb()
			}
		} while ( h . avc_ref_frames = f . read_golomb (), f.read(1), i = f.read_golomb(), r = f.read_golomb(), (l = f.read(1)) || f.read(1), f.read(1), o = f.read(1) ? (s = f.read_golomb(), n = f.read_golomb(), a = f.read_golomb(), f.read_golomb()) : (s = 0, n = 0, a = 0), h.level = h.level / 10, h.width = 16 * (i + 1) - 2 * (s + n), h.height = (2 - l) * (r + 1) * 16 - 2 * (a + o), 0);
		return h.codecWidth = h.width,
		h.codecHeight = h.height,
		h.videoType = "avc",
		h
	}
	class ot extends n {
		constructor(e) {
			super(),
			this.player = e,
			this.hasInit = !1,
			this.isDecodeFirstIIframe = !1,
			this.isInitInfo = !1,
			this.decoder = null,
			this.initDecoder(),
			e.debug.log("Webcodecs", "init")
		}
		destroy() {
			this.decoder && (this.decoder.close(), this.decoder = null),
			this.hasInit = !1,
			this.isInitInfo = !1,
			this.isDecodeFirstIIframe = !1,
			this.off(),
			this.player.debug.log("Webcodecs", "destroy")
		}
		initDecoder() {
			const t = this;
			this.decoder = new VideoDecoder({
				output(e) {
					t.handleDecode(e)
				},
				error(e) {
					t.handleError(e)
				}
			})
		}
		handleDecode(e) {
			this.isInitInfo || (this.player.video.updateVideoInfo({
				width: e.codedWidth,
				height: e.codedHeight
			}), this.player.video.initCanvasViewSize(), this.isInitInfo = !0),
			this.player._times.videoStart || (this.player._times.videoStart = g(), this.player.handlePlayToRenderTimes()),
			this.player.handleRender(),
			this.player.video.render({
				videoFrame: e
			}),
			this.player.updateStats({
				dfps: !0,
				buf: this.player.demux.delay
			}),
			setTimeout(function() {
				e.close ? e.close() : e.destroy()
			},
			100)
		}
		handleError(e) {
			this.player.debug.error("Webcodecs", "VideoDecoder handleError", e)
		}
		decodeVideo(e, t, i) {
			if (this.hasInit) {
				if (i && 0 === e[1]) {
					const t = function(r) {
						const s = {},
						n = new DataView(r.buffer);
						var e = n.getUint8(0),
						t = n.getUint8(1);
						if (n.getUint8(2), n.getUint8(3), 1 === e && 0 !== t) {
							e = 1 + (3 & n.getUint8(4));
							if (3 == e || 4 == e) {
								var a = 31 & n.getUint8(5);
								if (0 != a) {
									let i = 6;
									for (let t = 0; t < a; t++) {
										var o = n.getUint16(i, !1);
										if (i += 2, 0 !== o) {
											let e = new Uint8Array(r.buffer, i, o);
											i += o;
											o = I.parseSPS(e);
											if (0 === t) {
												s.codecWidth = o.codec_size.width,
												s.codecHeight = o.codec_size.height,
												s.presentWidth = o.present_size.width,
												s.presentHeight = o.present_size.height,
												s.profile = o.profile_string,
												s.level = o.level_string,
												s.bitDepth = o.bit_depth,
												s.chromaFormat = o.chroma_format,
												s.sarRatio = o.sar_ratio,
												s.frameRate = o.frame_rate,
												!1 !== o.frame_rate.fixed && 0 !== o.frame_rate.fps_num && 0 !== o.frame_rate.fps_den || (s.frameRate = {});
												var o = s.frameRate.fps_den,
												l = s.frameRate.fps_num;
												s.refSampleDuration = s.timescale * (o / l);
												let i = e.subarray(1, 4),
												r = "avc1.";
												for (let t = 0; t < 3; t++) {
													let e = i[t].toString(16);
													e.length < 2 && (e = "0" + e),
													r += e
												}
												s.codec = r
											}
										}
									}
									var c = n.getUint8(i);
									if (0 !== c) {
										i++;
										for (let e = 0; e < c; e++) {
											var u = n.getUint16(i, !1);
											i += 2,
											0 !== u && (new Uint8Array(r.buffer, i, u), i += u)
										}
										return s.videoType = "avc",
										s
									}
								}
							}
						}
					} (e.slice(5)),
					i = this.player.video.videoInfo;
					if (t.codecWidth !== i.width || t.codecHeight !== i.height) return this.player.debug.log("Webcodecs", `width or height is update, width $ {
						i.width
					} - >$ {
						t.codecWidth
					},
					height $ {
						i.height
					} - >` + t.codecHeight),
					void this.player.emit(d.webcodecsWidthOrHeightChange)
				}
				if (!this.isDecodeFirstIIframe && i && (this.isDecodeFirstIIframe = !0), this.isDecodeFirstIIframe) {
					var r = new EncodedVideoChunk({
						data: e.slice(5),
						timestamp: t,
						type: i ? "key": "delta"
					});
					this.player.emit(v.timeUpdate, t);
					try {
						this.decoder.decode(r)
					} catch(e) {
						this.player.debug.error("Webcodecs", "VideoDecoder", e),
						-1 !== e.toString().indexOf("A key frame is required after configure() or flush()") && this.player.emit(d.webcodecsDecodeError)
					}
				} else this.player.debug.warn("Webcodecs", "VideoDecoder isDecodeFirstIIframe false")
			} else if (i && 0 === e[1]) {
				const t = 15 & e[0];
				if (this.player.video.updateVideoInfo({
					encTypeCode: t
				}), 12 == t) this.emit(d.webcodecsH265NotSupport);
				else {
					this.player._times.decodeStart || (this.player._times.decodeStart = g());
					const i = function(e) {
						let i = e.subarray(1, 4),
						r = "avc1.";
						for (let t = 0; t < 3; t++) {
							let e = i[t].toString(16);
							e.length < 2 && (e = "0" + e),
							r += e
						}
						return {
							codec: r,
							description: e
						}
					} (e.slice(5));
					this.decoder.configure(i),
					this.hasInit = !0
				}
			}
		}
	}
	const lt = {
		play: "播放",
		pause: "暂停",
		audio: "",
		mute: "",
		screenshot: "截图",
		loading: "加载",
		fullscreen: "全屏",
		fullscreenExit: "退出全屏",
		record: "录制",
		recordStop: "停止录制",
		narrow: "缩小",
		expand: "放大",
		ptz: "操作盘",
		ptzActive: "操作盘激活",
		zoom: "电子放大",
		zoomStop: "关闭电子放大"
	};
	var B = Object.keys(lt).reduce((e, t) = >(e[t] = ` < i class = "jessibuca-icon jessibuca-icon-${t}" > </i>
    ${lt[t]?`<span class="icon-title-tips"><span class="icon-title">${lt[t]}</span > </span>`:""}
`,e),{});function x(e,t){let i=!1;return e.forEach(e=>{i||e.startTimestamp<=t&&e.endTimestamp>t&&(i=!0)}),i}function ct(e,t,i){let r=0<arguments.length&&void 0!==e?e:[],s=1<arguments.length&&void 0!==t?t:[],n=2<arguments.length?i:void 0;const a=r.length,o=s.length,l=Math.max(a,o),c=2e3,u=Math.ceil(l/c); let d = 0, h = 0; !
	function e() {
		let t = "",
		i = "";
		for (let e = 0; e < c; e++) {
			const n = r[h],
			c = (n && (t += ` < div class = "jessibuca-playback-time-minute-one${n.hasRecord?"active ":""}${n.isStart?"start ":""}"data - has - record = "${n.hasRecord}"data - time = "${n.timestamp}"data - type = "${n.dataType}" > <span class = "jessibuca-playback-time-title-tips ${h>a-60?"jessibuca - playback - time - title - tips - left ":""}" > <span class = "jessibuca-playback-time-title" > $ {
				n.title
			} < /span></span > </div>
                `),s[h]);c&&(i+=`
                  <div class="jessibuca-playback-time-hour" data-hour="${c.hour}" data-min="${c.min}" data-second="${c.second}"><span class="jessibuca-playback-time-hour-text">${c.title}</span > </div>
                `),h+=1}t&&n.$playbackTimeListOne.insertAdjacentHTML("beforeend",t),i&&n.$playbackTimeListSecond.insertAdjacentHTML("beforeend",i),(d+=1)<u&&(n.rafId=window.requestAnimationFrame(e))}()}function ut(e,t){ct(function(e){let i=0<arguments.length&&void 0!==e?e:[],r=[];var s,n,a,o=(i[0]||{}).startTimestamp;for(let t=0;t<1440;t++){var l=t%60==0;let e=!1;o&&(e=x(i,(s=o,n=t,a=void 0,a=Math.floor(n/60) % 60, n = Math.floor(n % 60), new Date(s).setHours(a, n, 0, 0)))), r.push({
				title: function(e, t) {
					let i = "";
					var r;
					return - 1 < e && (r = Math.floor(e / 60) % 60, e = e % 60, e = Math.round(e), i = r < 10 ? "0" + r + ":": r + ":", e < 10 && (i += "0"), i += e, c(t) || (t < 10 && (t = "0" + t), i += ":" + t)),
					i
				} (t),
				timestamp: t,
				dataType: "min",
				hasRecord: e,
				isStart: l
			})
		}
		return r
	} (e),
	function() {
		let i = [];
		for (let t = 0; t < 24; t++) {
			let e = t + ":00";
			t < 10 && (e = "0" + e),
			i.push({
				title: e,
				hour: t,
				min: 0,
				second: 0
			})
		}
		return i
	} (), t)
}
var dt = (n, a) = >{
	const {
		proxy: s
	} = n["events"],
	o = document.createElement("object");
	o.setAttribute("aria-hidden", "true"),
	o.setAttribute("tabindex", -1),
	o.type = "text/html",
	o.data = "about:blank",
	b(o, {
		display: "block",
		position: "absolute",
		top: "0",
		left: "0",
		height: "100%",
		width: "100%",
		overflow: "hidden",
		pointerEvents: "none",
		zIndex: "-1"
	});
	let l = n.width,
	e = n.height;
	s(o, "load", () = >{
		s(o.contentDocument.defaultView, "resize", () = >{
			n.width === l && n.height === e || (l = n.width, e = n.height, n.emit(v.resize), i())
		})
	}),
	n.$container.appendChild(o),
	n.on(v.destroy, () = >{
		n.$container.removeChild(o)
	}),
	n.on(v.volumechange, () = >{
		var e, t, i;
		0 === (e = n.volume) ? (b(a.$volumeOn, "display", "none"), b(a.$volumeOff, "display", "flex"), b(a.$volumeHandle, "top", "48px")) : a.$volumeHandle && a.$volumePanel && (t = ae(a.$volumePanel, "height") || 60, i = ae(a.$volumeHandle, "height"), b(a.$volumeHandle, "top", t - (t - i) * e - i + "px"), b(a.$volumeOn, "display", "flex"), b(a.$volumeOff, "display", "none")),
		a.$volumePanelText && (a.$volumePanelText.innerHTML = parseInt(100 * e))
	}),
	n.on(v.loading, e = >{
		b(a.$loading, "display", e ? "flex": "none"),
		b(a.$poster, "display", "none"),
		e && b(a.$playBig, "display", "none")
	});
	const t = e = >{
		e = !0 === e || !1 === e ? e: n.fullscreen;
		b(a.$fullscreenExit, "display", e ? "flex": "none"),
		b(a.$fullscreen, "display", e ? "none": "flex")
	},
	i = i = >{
		E() && a.$controls && setTimeout(() = >{
			if (n.fullscreen) {
				console.log(n.width, n.height);
				const i = n._opt.playType === m ? 48 : CONTROL_HEIGHT;
				var e = n.height / 2 - n.width + i / 2,
				t = n.height / 2 - i / 2;
				a.$controls.style.transform = `translateX($ { - e
				}
				px) translateY( - $ {
					t
				}
				px) rotate( - 90deg)`
			} else a.$controls.style.transform = "translateX(0) translateY(0) rotate(0)";
			i && i()
		},
		10)
	};
	try {
		p.on("change", t),
		n.events.destroys.push(() = >{
			p.off("change", t)
		})
	} catch(n) {}
	n.on(v.webFullscreen, e = >{
		t(e),
		i(() = >{
			r()
		})
	}),
	n.on(v.recording, () = >{
		b(a.$record, "display", n.recording ? "none": "flex"),
		b(a.$recordStop, "display", n.recording ? "flex": "none"),
		b(a.$recording, "display", n.recording ? "flex": "none")
	}),
	n.on(v.recordingTimestamp, e = >{
		var t, i;
		a.$recordingTime && (a.$recordingTime.innerHTML = ( - 1 < (e = e) && (t = e % 60, i = (i = Math.floor(e / 3600)) < 10 ? "0" + i + ":": i + ":", (e = Math.floor(e / 60) % 60) < 10 && (i += "0"), i += e + ":", (t = Math.round(t)) < 10 && (i += "0"), i += t.toFixed(0)), i))
	}),
	n.on(v.playing, e = >{
		b(a.$play, "display", e ? "none": "flex"),
		b(a.$playBig, "display", e ? "none": "block"),
		b(a.$pause, "display", e ? "flex": "none"),
		b(a.$screenshot, "display", e ? "flex": "none"),
		b(a.$record, "display", e ? "flex": "none"),
		b(a.$fullscreen, "display", e ? "flex": "none"),
		e || a.$speed && (a.$speed.innerHTML = "0 kb/s"),
		r()
	}),
	n.on(v.kBps, e = >{
		if (n._opt.showBandwidth) {
			const n = function(e) {
				if (null == e || "" === e || 0 === parseFloat(e) || "NaN" === e) return "0 kb/s";
				var t = ["kb/s", "MB/S", "GB/S", "TB/S", "PB/S", "EB/S", "ZB/S", "YB/S"],
				e = parseFloat(e),
				i = Math.floor(Math.log(e) / Math.log(1024));
				let r = e / Math.pow(1024, i);
				return (r = r.toFixed(2)) + (t[i] || t[0])
			} (e);
			a.$speed && (a.$speed.innerHTML = n),
			r()
		}
	});
	const r = () = >{
		if (n._opt.playType === m) {
			let e = a.controlsInnerRect.width - a.controlsLeftRect.width - a.controlsRightRect.width - a.controlsPlaybackBtnsRect.width;
			E() && n.webFullscreen && (e = a.controlsInnerRect.height - a.controlsLeftRect.height - a.controlsRightRect.height - a.controlsPlaybackBtnsRect.height),
			a.$playbackTimeInner.style.width = e + "px"
		}
	};
	if (n._opt.playType === m) {
		const s = () = >{
			if (n._opt.playType === m) {
				let e = 0;
				var t = n.playback && n.playback.playingTimestamp;
				if (t) {
					const i = new Date(t),
					r = i.getHours(),
					m = i.getMinutes(),
					s = i.getSeconds();
					n.playback.is60Min ? e = 60 * r + m: n.playback.is30Min ? e = 2 * (60 * r + m) + parseInt(s / 30, 10) : n.playback.is10Min ? e = 6 * (60 * r + m) + parseInt(s / 10, 10) : n.playback.is5Min ? e = 12 * (60 * r + m) + parseInt(s / 5, 10) : n.playback.is1Min && (e = 60 * (60 * r + m) + parseInt(s, 10)),
					a.$playbackCurrentTime.style.left = e + "px"
				}
			}
		},
		o = e = >{
			a.$playbackNarrow.classList.remove("disabled"),
			a.$playbackExpand.classList.remove("disabled"),
			e === h && a.$playbackNarrow.classList.add("disabled"),
			e === f && a.$playbackExpand.classList.add("disabled")
		},
		l = () = >{
			var e = a.$playbackCurrentTime.style.left;
			let t = parseInt(e, 10);
			e = a.controlsPlaybackTimeInner.width;
			t = 0 < t - e / 2 ? parseInt(t - e / 2, 10) : 0,
			a.$playbackTimeInner.scrollLeft = t
		};
		n._opt.showBandwidth && (a.$controlsLeft.style.width = "90px"),
		n.on(v.playbackTime, e = >{
			a.$playbackCurrentTimeText && (a.$playbackCurrentTimeText.innerText = ce(e, "{h}:{i}:{s}")),
			s()
		}),
		n.on(v.playbackPrecision, (i, r) = >{
			a.$playbackTimeScroll.classList.remove(A.oneHour, A.halfHour, A.fiveMin, A.tenMin),
			a.$playbackTimeScroll.classList.add(A[i]),
			a.rafId && (window.cancelAnimationFrame(a.rafId), a.rafId = null),
			a.changePercisitionInterval && (clearTimeout(a.changePercisitionInterval), a.changePercisitionInterval = null),
			a.$playbackTimeListOne.innerHTML = "",
			a.$playbackTimeListSecond.innerHTML = "",
			a.changePercisitionInterval = setTimeout(() = >{
				switch (a.$playbackTimeListOne.innerHTML = "", a.$playbackTimeListSecond.innerHTML = "", i) {
				case h:
					ut(r, a);
					break;
				case $:
					t = a,
					ct(function(e) {
						let s = 0 < arguments.length && void 0 !== e ? e: [],
						n = [];
						var a = (s[0] || {}).startTimestamp;
						for (let r = 0; r < 1440; r++) {
							let e = 60 * r,
							t = e % 1800 == 0,
							i = !1;
							a && (i = x(s, w(a, e))),
							n.push({
								title: T(e),
								timestamp: e,
								dataType: "second",
								hasRecord: i,
								isStart: t
							});
							var o = 60 * r + 30;
							t = o % 1800 == 0,
							a && (i = x(s, w(a, o))),
							n.push({
								title: T(o),
								timestamp: o,
								dataType: "second",
								hasRecord: i,
								isStart: t
							})
						}
						return n
					} (r),
					function() {
						let r = [];
						for (let i = 0; i < 24; i++) {
							let e = i + ":00",
							t = i + ":30";
							i < 10 && (e = "0" + e, t = "0" + t),
							r.push({
								title: e,
								hour: i,
								min: 0,
								second: 0
							}),
							r.push({
								title: t,
								hour: i,
								min: 30,
								second: 0
							})
						}
						return r
					} (), t);
					break;
				case "tenMin":
					t = a,
					ct(function(e) {
						let n = 0 < arguments.length && void 0 !== e ? e: [],
						a = [];
						var o = (n[0] || {}).startTimestamp;
						for (let s = 0; s < 144; s++) for (let r = 0; r < 60; r++) {
							let e = 10 * r + 600 * s,
							t = e % 600 == 0,
							i = !1;
							o && (i = x(n, w(o, e))),
							a.push({
								title: T(e),
								timestamp: e,
								dataType: "second",
								isStart: t,
								hasRecord: i
							})
						}
						return a
					} (r),
					function() {
						let r = [];
						for (let i = 0; i < 24; i++) {
							let t = i + ":00";
							i < 10 && (t = "0" + t),
							r.push({
								title: t,
								hour: i,
								min: 0,
								second: 0
							});
							for (let e = 1; e < 6; e++) {
								var s = e + "0";
								r.push({
									title: t.replace(":00", ":" + s),
									hour: i,
									min: 10 * e,
									second: 0
								})
							}
						}
						return r
					} (), t);
					break;
				case f:
					e = a,
					ct(function(e) {
						let n = 0 < arguments.length && void 0 !== e ? e: [],
						a = [];
						var o = (n[0] || {}).startTimestamp;
						for (let s = 0; s < 288; s++) for (let r = 0; r < 60; r++) {
							let e = 5 * r + 300 * s,
							t = e % 300 == 0,
							i = !1;
							o && (i = x(n, w(o, e))),
							a.push({
								title: T(e),
								timestamp: e,
								dataType: "second",
								isStart: t,
								hasRecord: i
							})
						}
						return a
					} (r),
					function() {
						let r = [];
						for (let i = 0; i < 24; i++) {
							let t = i + ":00";
							i < 10 && (t = "0" + t),
							r.push({
								title: t,
								hour: i,
								min: 0,
								second: 0
							}),
							r.push({
								title: t.replace(":00", ":05"),
								hour: i,
								min: 5,
								second: 0
							});
							for (let e = 1; e < 6; e++) {
								var s = e + "0",
								n = e + "5";
								r.push({
									title: t.replace(":00", ":" + s),
									hour: i,
									min: 10 * e,
									second: 0
								}),
								r.push({
									title: t.replace(":00", ":" + n),
									hour: i,
									min: 10 * e + 5,
									second: 0
								})
							}
						}
						return r
					} (), e)
				}
				var e, t;
				s(),
				o(i),
				l()
			},
			16)
		}),
		n.on(v.resize, () = >{
			r()
		}),
		r()
	}
	if (n._opt.operateBtns.quality && 0 < n._opt.qualityConfig.length) {
		n.on(v.streamQualityChange, i = >{
			a.$qualityText.innerText = i,
			a.$qualityMenuItems.forEach(e = >{
				var t = e.dataset.quality;
				e.classList.remove("jessibuca-quality-menu-item-active"),
				t === i && e.classList.add("jessibuca-quality-menu-item-active")
			})
		}); {
			const c = n._opt.qualityConfig || [];
			let t = "";
			c.forEach(e = >{
				t += ` < div class = "jessibuca-quality-menu-item"data - quality = "${e}" > $ {
					e
				} < /div>
                `}),t&&(a.$qualityMenuList.insertAdjacentHTML("beforeend",t),Object.defineProperty(a,"$qualityMenuItems",{value:n.$container.querySelectorAll(".jessibuca-quality-menu-item")}),setTimeout(()=>{var e=c[0];n.streamQuality=e},0))}}};function ht(e,t){var i,r,t=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(i=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("style")).type="text/css ","top "===t&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)))}ht('@keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes magentaPulse{0%{background-color:#630030;-webkit-box-shadow:0 0 9px #333}50%{background-color:#a9014b;-webkit-box-shadow:0 0 18px #a9014b}to{background-color:#630030;-webkit-box-shadow:0 0 9px #333}}.jessibuca-container .jessibuca-icon{cursor:pointer;width:16px;height:16px}.jessibuca-container .jessibuca-ptz-controls{position:absolute;width:156px;height:156px;visibility:hidden;opacity:0;border-radius:78px;background:url("data: image / png;
				base64,
				iVBORw0KGgoAAAANSUhEUgAAATgAAAE4CAYAAADPf + 9qAAAgAElEQVR4Xu2dB1hUR / f / z9xlwQWFiGDBEkuiKWKMMZaY16iJCvcuKIgoGuwFK5YovuIb0YgvxooNLFGUCIpGFHYX1LxqiiVqrKRoVJKoqICoq8sCy975P + N / yQ + JRsoubDnzPDwx8c7MOZ8Zvrl3yjkEsCCBchA4cuSIXUFBQRO9Xu / BcVw9Smk9QsiTfwKAe6k / OwFAXQCQAkBtQ9MyAKhVqptHAFAMAHoAULP / TinVEkIKACCfEJJLKb0HADmEkHvsz + yfoijek0gkWbVq1brZs2dPVh8LEvhHAgT5IIESAnv37q1Xq1at1yilLQkhzUVRbM7 + CQDsp6lBtMwBGBO3PwHgd0rp7xzHPfknIeR6QUHBr / 7 + /kwcsSABQIGzwUmQlJRk7+Tk1I4Q8jal9C0AeB0APNmb2D/goMXFxbk6ne6OTqd7qNPpHhQWFj4sKCh4qNVqHzx + /PjJj1qt1mZnZ6sLCwv1d+7cyWft5eTkFGZlZRWWtN26dWtHmUxmJ5FISJMmTZ685dWuXdvB0dHRwdnZWVa7du2X2I9MJnupVq1aLg4ODi5SqZT9vCSVShva2dm5Afzj3M0BgEsA8Ash5AKl9Bwh5BLP83/ZYIPDbpMuo8DZwLCnpKQ04ziuOyGkKwC8BwBvPuttjH0mFhQUZBYWFmbl5 + ffUqvVWdnZ2bczMzOzjh49yv5cZA646tevb9 + zZ89GzZs3b1y / fv1Gzs7OHo6Ojh4ODg6Na9Wq1YIQwj6JyxYdAPwEAMcppSdEUfzW19eXvQVisWICKHBWNrhJSUkSR0fH9oSQbgDwvkHQGpdxUywqKrr5 + PHjXx8 + fPjr7du3r124cCHzwIEDt3U6HbVkJFKplPTt27fRW2 + 91aJRo0atXFxcXqtdu / Zr9vb2TQCAK + PbLSZ4APA9pfRYfn7++cDAQLYuiMVKCKDAWcFAqlSqVpTS3gDAfnoBwEul3WKflhqN5lJOTs7F69ev / 5SSkvJrZmbmk89HWyktWrRw9PX1fa1ly5Zvuru7t3NycmprZ2dX9pP8AQAcBoBDhJBDPM9fsxU + 1uonCpwFjizb0Xz8 + PH7EolEoJT6AECb0m7odLrbarX67J07d3784Ycfzn311Vc3LNBNk5s8YMCApu++++7bHh4e7zg7O3eQSqWNynR6mRCSqtfrlbVr1 / 4ed25NPiRG7wAFzuhITdOgSqVyYG9phJAASqmv4SjGk84opflqtfr07du3fzh58uTJ3bt349pSJYbB39 + /Wbdu3bo0atSos7Oz87uEEMdSzdwnhKSIoriX47gDuGFRCcA1UAUFrgagl7dL9qam1Wp7U0qDAKAfADiX1GVraHl5ed9dvnz5+82bN5/Ny8tji + hYjETA1dVVOmbMmA5t2rR539XV9V + GNbyS1tnZvf2EkESZTHYI3 + yMBN0EzaDAmQBqVZtUqVRvi6I4ihASCAD1S9orLCy8np2d / b9jx44djo + P / 62q / WD98hMIDg5 + tVu3br3q16 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") no-repeat 50%;background-size:100% 100%;transition:visibility .3s,opacity .3s;right:43px;bottom:135px}.jessibuca-container .jessibuca-ptz-controls.jessibuca-ptz-controls-show{visibility:visible;opacity:1}.jessibuca-container .jessibuca-ptz-bg-active{visibility:hidden;opacity:0;width:156px;height:156px;background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-ptz-bg-active.jessibuca-ptz-bg-active-up{transform:rotate(-90deg)}.jessibuca-container .jessibuca-ptz-bg-active.jessibuca-ptz-bg-active-left{transform:rotate(180deg)}.jessibuca-container .jessibuca-ptz-bg-active.jessibuca-ptz-bg-active-down{transform:rotate(90deg)}.jessibuca-container .jessibuca-ptz-bg-active.jessibuca-ptz-bg-active-show{visibility:visible;opacity:1}.jessibuca-container .jessibuca-ptz-control{position:absolute;left:53px;top:53px;width:50px;height:50px;background:#fff;border-radius:50%;transition:left .3s,top .3s}.jessibuca-container .jessibuca-ptz-control.jessibuca-ptz-control-left{left:33px}.jessibuca-container .jessibuca-ptz-control.jessibuca-ptz-control-up{top:33px}.jessibuca-container .jessibuca-ptz-control.jessibuca-ptz-control-right{left:73px}.jessibuca-container .jessibuca-ptz-control.jessibuca-ptz-control-down{top:73px}.jessibuca-container .jessibuca-ptz-arrow{cursor:pointer;position:absolute;width:0;height:0}.jessibuca-container .jessibuca-ptz-arrow-up{left:71px;top:15px;border:7px solid transparent;border-bottom:10px solid #fff}.jessibuca-container .jessibuca-ptz-arrow-right{top:71px;right:15px;border:7px solid transparent;border-left:10px solid #fff}.jessibuca-container .jessibuca-ptz-arrow-down{left:71px;bottom:15px;border:7px solid transparent;border-top:10px solid #fff}.jessibuca-container .jessibuca-ptz-arrow-left{left:15px;top:71px;border:7px solid transparent;border-right:10px solid #fff}.jessibuca-container .jessibuca-poster{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;height:100%;width:100%;background-position:50%;background-repeat:no-repeat;background-size:contain;pointer-events:none}.jessibuca-container .jessibuca-play-big{position:absolute;display:none;height:100%;width:100%;background:rgba(0,0,0,.4)}.jessibuca-container .jessibuca-play-big:after{cursor:pointer;content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:block;width:48px;height:48px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACgklEQVRoQ+3ZPYsTQRjA8eeZZCFlWttAwCIkZOaZJt8hlvkeHrlccuAFT6wEG0FQOeQQLCIWih6chQgKgkkKIyqKCVYip54IWmiQkTmyYhFvd3Zn3yDb7szu/7cv7GaDkPEFM94PK0DSZ9DzDAyHw7uI2HRDlVJX5/N5r9FoHCYdr/fvCRiNRmpJ6AEidoUQ15NG+AH8BgD2n9AHANAmohdJQfwAfgGA4xF4bjabnW21Whob62ILoKNfAsAGEd2PU2ATcNSNiDf0/cE5/xAHxDpgEf0NADaJ6HLUiKgAbvcjpdSGlPJZVJCoAUfdSqkLxWLxTLlc/mkbEgtgET1TSnWklLdtIuIEuN23crlcp16vv7cBSQKgu38AwBYRXQyLSArg3hsjRDxNRE+CQhIF/BN9qVAobFYqle+mkLQAdLd+8K0T0U0TRJoAbvc9fVkJId75gaQRoLv1C2STiPTb7rFLWgE6+g0RncwyYEJEtawCvjDGmpzzp5kD6NfxfD7frtVqB17xen2a7oG3ALBm+oMoFQBEPD+dTvtBfpImDXjIGFvjnD/3c7ksG5MU4HDxWeZa0HB3XhKAXcdxOn5vUi9gnIDXSqm2lHLPK8pkfVyAbSLqm4T5HRs1YB8RO0KIid8g03FRAT4rpbpSyh3TINPxUQB2GGM9zvkn05gg420CJovLZT9ISNA5tgB9ItoOGhFmnh/AcZ/X9xhj65zzV2Eiwsz1A1j2B8dHAOgS0W6YnduY6wkYj8d3lFKn/j66Ea84jtOrVqtfbQSE3YYnYDAY5Eql0hYAnNDv6kKIx2F3anO+J8DmzqLY1goQxVE12ebqDJgcrSjGrs5AFEfVZJt/AF0m+jHzUTtnAAAAAElFTkSuQmCC");background-repeat:no-repeat;background-position:50%}.jessibuca-container .jessibuca-play-big:hover:after{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACEElEQVRoQ+2ZXStEQRjH/3/yIXwDdz7J+i7kvdisXCk3SiFJW27kglBcSFFKbqwQSa4krykuKB09Naf2Yndn5jgzc06d53Znd36/mWfeniVyHsw5PwqB0DOonYEoijYBlOpAFwCMkHwLDS/9mwhEDUCfAAyTXA4tYSLwC6CtCegegH6S56FETAR+AHRoACcBTJAUWa+RloBAXwAYIrnt0yBNgZi7qtbHgw8RFwLC/QFglOScawlXAjH3gUqrE1cirgVi7mkAYyS/0xbxJSDcdwAGSa6nKeFTIOZeUyL3aYiEEBDuLwDjJGf+KxFKIOY+BdBL8iipSGiBmHtWbbuftiJZERBuOfgGSK7aSGRJIObeUml1ayKSRQHhlgtkiaTcdltGVgUE+ppkV54FaiS78yrwqlLoOI8Cch2XV548W7WRpTVwA6DP9kGUFYEpAOUkT9LQAvtq1M+0udKkQSgBqSlJWWYxKXj8vRACK+o6bbRIdYI+Ba7U7rKjg7L53JdAhWTZBsy0rWuBXZUuNVMg23auBF7UIl2yBbJt70JAoKV6/WwLk6R9mgKSJlJ1kLTxFmkJyCla8UZd15GJQKvyumyJ8gy8DAEvfZoINPqD41EtUjmUgoaJwAaAnjrKebVI34OSq85NBNqlCAWgE0CV5GEWwI3vQlmCbcSinYFCwPEIFDPgeIC1P1/MgHaIHDf4Aydx2TF7wnKeAAAAAElFTkSuQmCC")}.jessibuca-container .jessibuca-recording{display:none;position:absolute;left:50%;top:0;padding:0 3px;transform:translateX(-50%);justify-content:space-around;align-items:center;width:95px;height:20px;background:#000;opacity:1;border-radius:0 0 8px 8px;z-index:1}.jessibuca-container .jessibuca-recording .jessibuca-recording-red-point{width:8px;height:8px;background:#ff1f1f;border-radius:50%;animation:magentaPulse 1s linear infinite}.jessibuca-container .jessibuca-recording .jessibuca-recording-time{font-size:14px;font-weight:500;color:#ddd}.jessibuca-container .jessibuca-recording .jessibuca-icon-recordStop{width:16px;height:16px;cursor:pointer}.jessibuca-container .jessibuca-zoom-controls{display:none;position:absolute;left:50%;top:0;padding:0 3px;transform:translateX(-50%);justify-content:space-around;align-items:center;width:95px;height:20px;background:#000;opacity:1;border-radius:0 0 8px 8px;z-index:1}.jessibuca-container .jessibuca-zoom-controls .jessibuca-zoom-narrow{width:16px;height:16px;cursor:pointer}.jessibuca-container .jessibuca-zoom-controls .jessibuca-zoom-tips{font-size:14px;font-weight:500;color:#ddd}.jessibuca-container .jessibuca-zoom-controls .jessibuca-zoom-expand{width:16px;height:16px;cursor:pointer}.jessibuca-container .jessibuca-loading{display:none;flex-direction:column;justify-content:center;align-items:center;position:absolute;z-index:20;left:0;top:0;right:0;bottom:0;width:100%;height:100%;pointer-events:none}.jessibuca-container .jessibuca-loading-text{line-height:20px;font-size:13px;color:#fff;margin-top:10px}.jessibuca-container .jessibuca-controls{background-color:#161616;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;position:absolute;z-index:40;left:0;right:0;bottom:0;height:38px;width:100%;padding-left:13px;padding-right:13px;font-size:14px;color:#fff;opacity:0;visibility:hidden;transition:all .2s ease-in-out;-webkit-user-select:none;user-select:none;transition:width .5s ease-in}.jessibuca-container .jessibuca-controls .jessibuca-controls-item{position:relative;display:flex;justify-content:center;padding:0 8px}.jessibuca-container .jessibuca-controls .jessibuca-controls-item:hover .icon-title-tips{visibility:visible;opacity:1}.jessibuca-container .jessibuca-controls .jessibuca-fullscreen,.jessibuca-container .jessibuca-controls .jessibuca-fullscreen-exit,.jessibuca-container .jessibuca-controls .jessibuca-icon-audio,.jessibuca-container .jessibuca-controls .jessibuca-microphone-close,.jessibuca-container .jessibuca-controls .jessibuca-pause,.jessibuca-container .jessibuca-controls .jessibuca-play,.jessibuca-container .jessibuca-controls .jessibuca-ptz-active,.jessibuca-container .jessibuca-controls .jessibuca-record,.jessibuca-container .jessibuca-controls .jessibuca-record-stop,.jessibuca-container .jessibuca-controls .jessibuca-screenshot{display:none}.jessibuca-container .jessibuca-controls .jessibuca-icon-audio,.jessibuca-container .jessibuca-controls .jessibuca-icon-mute{z-index:1}.jessibuca-container .jessibuca-controls .jessibuca-controls-bottom{display:flex;justify-content:space-between;height:100%}.jessibuca-container .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-left,.jessibuca-container .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-right{display:flex;align-items:center}.jessibuca-container.jessibuca-controls-show .jessibuca-controls{opacity:1;visibility:visible}.jessibuca-container.jessibuca-controls-show-auto-hide .jessibuca-controls{opacity:.8;visibility:visible;display:none}.jessibuca-container.jessibuca-hide-cursor *{cursor:none!important}.jessibuca-container .jessibuca-icon-loading{width:50px;height:50px;background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%;animation:rotation 1s linear infinite}.jessibuca-container .jessibuca-icon-screenshot{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE5UlEQVRoQ+1YW2sdVRT+1s7JxbsoVkEUrIIX0ouz15zYNA+N1RdtQfCltlUfvLbqL/BCwZ8grbHtizQqPojgBSr0JkiMmT2nxgapqBURtPVCq7HxJCeZJVPmxDlzZubMmXOSEsnAvOy917fXt9e39tp7E5b4R0vcfywTuNgRbBgBx3HuJqLVzPzmYjprjHkcwAlmLqXNm4XAISLaSESPaq2HF4OE67rbRGRYRA7btn1fbgLGmKsA/Azg0gBkGzO/vZAkHMd5hIiqc5wHcCMz/5k0Z2oExsfHV1QqldPAf8lORNu11m8tBAljzFYAYWxRSl1vWdZvuQj4RsYYF4AVBlgIOVVlE55HRIxt23ZuCfmGjuOsJ6LPoiAistW27XfaEYmIbOYhPc9bXywWR1oiEJDYQkR1zrYjEjGyqfqbKd8a7kJVtLgQ+30i8pht2wfyRKIdmJkJBPkQTbILfudJ7CTZNBvVpggEcgpvc/ML38zESbLJsxBNE/A9biX0rdjGyTQXgbxyapdsarb0PMlXtWnGoXbKpm0Essqp3bJpK4E0OXmed3+hUBDP8w5FI91M0rdcyLLILElOCbaZilSWeXMncRx4klTCY1spfG3dhZJWx3GcDUR0EEB3ZMw0ET2gtT6SZWWzjmlrBIJCl0hAKfWgZVmHszqXZVxbCSxpCS2JJA6umIhe8ZKKVLPbaBJ+S9toqVRa53nedgAbAKwIwH4FcAzAa0R0l4i8F7PPz189k6RFRA+LyNcAXojDV0oNW5b1eW4Cxpg9AHZkSaaa6hhzb065uDSCH2LmRB8Sk9gY4293g43Qo/1pV80m8yQMfZSZ781cB1zXHRKRZ2IMpgD8A+DamL4ZItqitX4/jbQx5iEA7wLoihn3V/ACckWMJN/QWj9b1x5tGBsbW6uUOh5pPy0iL3Z2dn6ilJqanp5ep5TaJSLhF4NppdRNaU8gPmapVLrO87yfIoXuWyJ6uVKp+HmFjo6OQSJ6FcBtYT+UUmstyxqvkWuUgDFmP4AnQu2/e563qlgs+u9DNZ8xZhRAX7VRRPbath0XuXk7Y8xeAE+FgL6fnJzsHRwcLIfBR0ZGLunq6poAsDLUvp+Zw7b1r9PGmJMAbg8Z7WDmoThZuK67WkS+DD18fcPMdzSQUBR/EzN/nIC/SUQ+DPXV4dclsTHmHAD/SfHCNzc3t7Kvr++HJKeMMacA3BL0nyuXyzcPDAxMxo0fHR29slAo/Ajg6qD/fE9Pzw29vb1/x42fmJi4vFwu+5G/LOg/y8zXNJLQ2dAES5JANMQ7mfn1jBI6ycx3NiMhItqstf4oAX+ziHwQ6qvDj5NQNIn/ALCKmX+JSeIvABRD7fuY+ekGBPYBeDI05tTMzExvf3+/vz2Hk91/ET8RSeI6/DoCpVJpjed5fmKGvzMAXpqdnT3oed5Ud3d3v4jsAqBr9Ei0Rmv9VRqBBPzvROQVETnq2xJRdRu9tRF+bCVOKWT+Kvl/TSIFk6SW/LAjKfjV5K8rZABi8dOOEv7FI7Z8x6zwEWbemLbyMfJr5qiSiJ96oclymBOR3bZtP9+M89WxxpjdAHY2sN3DzM8ljWl4I3Nd9x7/OE1ENcdpETnmH3e11n41zv0l4J8RkU+J6AAz+xtF4teQQG7PFslwmcAiLfSyhC72Qv9/I/Avns2OT7QJskoAAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-screenshot:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAED0lEQVRoQ+2ZycsdRRTFf2ejqHFAMQqiYBTUoElUHLNx3GgCgpuYRF2o0UT9CxwQ/BMkMSbZSKLiQgQHUDCJgjiAxiEiESdEcJbEedgcKaj3UV+/6q7u/jovPPkK3qbr1ql76p5bt6qemPKmKfefeQKHOoLFCNg+H1gi6fFJOmv7VmCvpD1N87Yh8ApwNXCzpB2TIGF7DRDm2inpmt4EbB8LfAMcGUHWSHryYJKwfRMwmuMP4BRJv9TN2RgB2wuB72BWsq+V9MTBIGF7NZBiGzhJ0o+9CIRBtt8FLqgADC6nRDbpVO9Iuqi3hCKB5cDrGZDVkp4aIhIV2aSQyyW9MScCkcQqIOfsnCORkc3I31b5VtyFRmg1IQ7dt0ja3icSQ2C2JhAjUU2ykd+dE7tBNp2i2olAJJFuc+nCt564QTadF6IzgUhiVGiqyinKaQjZpJP2ItBXTkPJZhACXeU0pGwGI9BWTkPLZlACBTldG4o5EA6E1dY66edcyNrs8Q36zg1vVaTazNs7iXPgDVJJzYs7VRvHRzaDEohyugJ4CTi84sg/wHWSdnVxsGQ7aQLXS9pZcqpL/6AEplpCU5HE8YpJ9YrXUKQ6baN1+HPaRm1fBqwFQnKGK2ZoPwCvAo8Ai4FnMpPMHMwapHUj8DFwbw3+Dklv9iZgexOwvktSRduxU2VDlErwmyXV+lCbxLbDdndlCT3TX3vV7JgnKfRuSVflfMkSsL0ZuDMz4E/gL+CETN+/wCpJzzaRtn0D8DRwWMbu1/gCcnSm7zFJd1W/jxGwvQx4r2IYnlbuA14GAomQFw8B6YtBKFSnNj2BxEJ3IvB1pdB9CjwQ8yqYhcg/DJxZ8WOZpA/SbzkC24DbEqOfgPMkBRKzmu23gEuSj1sk5SI3Y2J7C3BHMuZz4FxJf6fgto8APgIWJd+3SUrHjr9O294HnJUMWi8pSGqs2V4CvJ88fH0i6eyChKr4KyS9WIO/Ang+6RvDz0XgABCeFEdtkaQv65yy/QVweuwPY0+T9FuNQ8cAXwHHxf7wdHiypN9r7BfEl8GjYv9+SceXJLQ/mSDYTh2Baog3SHq0pYT2STqno4RWSnqhBn8l8FzSN4bfJol/jkn8bXUS228DFyfft0paVyCwFbg9sQkSDEkctueZZju8iO+tJPEYfo7A0piYKd73wP3xnB+20cvjNnphxdmlkj4sEMjhfwY8COyOY0fb6Bkl/K6FLKxS+M1KpDhJY8mvrG5doRwlf66QZfGbjhLh4pEt35kV3iUp/IvTunU8qtTil/7gaHOY2yjpntaez9b5RmBDYewmSXfX2RRvZLYvbThOh+NuqMa9Ww1+yLnXgO2SwkZR24oEens2oYHzBCa00PMSOtQL/f+NwH+Hg8hAnbrYgQAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-play{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACgklEQVRoQ+3ZPYsTQRjA8eeZZCFlWttAwCIkZOaZJt8hlvkeHrlccuAFT6wEG0FQOeQQLCIWih6chQgKgkkKIyqKCVYip54IWmiQkTmyYhFvd3Zn3yDb7szu/7cv7GaDkPEFM94PK0DSZ9DzDAyHw7uI2HRDlVJX5/N5r9FoHCYdr/fvCRiNRmpJ6AEidoUQ15NG+AH8BgD2n9AHANAmohdJQfwAfgGA4xF4bjabnW21Whob62ILoKNfAsAGEd2PU2ATcNSNiDf0/cE5/xAHxDpgEf0NADaJ6HLUiKgAbvcjpdSGlPJZVJCoAUfdSqkLxWLxTLlc/mkbEgtgET1TSnWklLdtIuIEuN23crlcp16vv7cBSQKgu38AwBYRXQyLSArg3hsjRDxNRE+CQhIF/BN9qVAobFYqle+mkLQAdLd+8K0T0U0TRJoAbvc9fVkJId75gaQRoLv1C2STiPTb7rFLWgE6+g0RncwyYEJEtawCvjDGmpzzp5kD6NfxfD7frtVqB17xen2a7oG3ALBm+oMoFQBEPD+dTvtBfpImDXjIGFvjnD/3c7ksG5MU4HDxWeZa0HB3XhKAXcdxOn5vUi9gnIDXSqm2lHLPK8pkfVyAbSLqm4T5HRs1YB8RO0KIid8g03FRAT4rpbpSyh3TINPxUQB2GGM9zvkn05gg420CJovLZT9ISNA5tgB9ItoOGhFmnh/AcZ/X9xhj65zzV2Eiwsz1A1j2B8dHAOgS0W6YnduY6wkYj8d3lFKn/j66Ea84jtOrVqtfbQSE3YYnYDAY5Eql0hYAnNDv6kKIx2F3anO+J8DmzqLY1goQxVE12ebqDJgcrSjGrs5AFEfVZJt/AF0m+jHzUTtnAAAAAElFTkSuQmCC") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-play:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACEElEQVRoQ+2ZXStEQRjH/3/yIXwDdz7J+i7kvdisXCk3SiFJW27kglBcSFFKbqwQSa4krykuKB09Naf2Yndn5jgzc06d53Znd36/mWfeniVyHsw5PwqB0DOonYEoijYBlOpAFwCMkHwLDS/9mwhEDUCfAAyTXA4tYSLwC6CtCegegH6S56FETAR+AHRoACcBTJAUWa+RloBAXwAYIrnt0yBNgZi7qtbHgw8RFwLC/QFglOScawlXAjH3gUqrE1cirgVi7mkAYyS/0xbxJSDcdwAGSa6nKeFTIOZeUyL3aYiEEBDuLwDjJGf+KxFKIOY+BdBL8iipSGiBmHtWbbuftiJZERBuOfgGSK7aSGRJIObeUml1ayKSRQHhlgtkiaTcdltGVgUE+ppkV54FaiS78yrwqlLoOI8Cch2XV548W7WRpTVwA6DP9kGUFYEpAOUkT9LQAvtq1M+0udKkQSgBqSlJWWYxKXj8vRACK+o6bbRIdYI+Ba7U7rKjg7L53JdAhWTZBsy0rWuBXZUuNVMg23auBF7UIl2yBbJt70JAoKV6/WwLk6R9mgKSJlJ1kLTxFmkJyCla8UZd15GJQKvyumyJ8gy8DAEvfZoINPqD41EtUjmUgoaJwAaAnjrKebVI34OSq85NBNqlCAWgE0CV5GEWwI3vQlmCbcSinYFCwPEIFDPgeIC1P1/MgHaIHDf4Aydx2TF7wnKeAAAAAElFTkSuQmCC") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-pause{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABA0lEQVRoQ+1YwQqCUBAcfWXXsLr2AXWTPXno8yVB8AP6Aa3oHI+kCDqYaawJljSe133uzO44bx0M/HEG/v1gAd9mkAyQgY4I/F8LJUlyrQFtD2AtIkcNoFEU+Z7n7QD4DfFHEVlocrVmgAUAIAOl3mILPcDgEFcUhyrUKMGUUcroc3NQRimj9XJBGaWMvvPydKN0o6/9QTdKN6rZANxj6EbpRulGuZnjYqs8BbyR8Ub2Izeys+u6yyAIDpo/ehzHM2NMDsA0xFsRmWhyfTIDWSXxCEBmrd2EYXjSHJqm6bQoii2AOYBL5Z0xgFxEVppcrQvQJO0zhgX0iXbdWWSADHRE4AZQ731AhEUeNwAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-pause:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA7klEQVRoQ+2YSwrCQBBEX6HiVvxsPYDewfN7By/gD9ciQkvERQwJdBSiYs0mEDo96aruombEjy/9+P/jAj7NoBkwA28i8H8tFBFRA9oeWEo6ZgCNiDGwAYpn3TpKmmVytWbABQBmoNRbbqEHGB7iiuJYhRol2DJqGX1uDsuoZdRmLuNZSzGWUcuoZdRHSp/IylNgK2ErYSthK3FHwLcSvpXIjoLt9Jfa6TMwl3TIMBkRE2AH9BriL5KGmVyvWIltJXEfKN6tJJ0ym0bECFgDU+Ba+WZQFCdpkcnVuoBM0i5jXECXaNftZQbMwJsI3AAPN3dAQflHegAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-record{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC+UlEQVRoQ+1ZS2sTURT+zlDJYE3XSq219QHVuEjnJDT+Bff9Abqw2voAEfGxqygUqWhVFHGl/yMLu9BwByxk5SNI66ML6U7axjhHbmhgWiftncxoOiV3FcI53z3f/e65594zhIQPSnj86BBot4IdBToKRFyBnbeFlFIScVEiuYvIWC6Xe2YK8pcC7SYA4CMzH4mDQBXAqilQBDsLQLfPf9FxnF4i8kwwmypARI+Wl5dvmIBEsUmlUkNE9NaHsVCpVAZGR0d/m+A2JSAid3K53E0TkCg2pVKpz7KseR/GfKVSGYxMAMA0M1+JEpyJb6lUOm5ZVnkrAsVisaunp+esiByr1Wp3R0ZGvmifzZK4XQQWHMc52MgBpdQuAOcAXABwuB400ZTjONdaIjA7O5u2bVsnWU1EujzP+5nP5xdMVjvIJkCBD8x8VCm1G8AYgAkAAxt8Z5j5YmgCSqlTAJ4D2OcD/AXgATNfbYVEAIFPIvKKiE4D6GuCea8xX6gtpJT6DmBvECgRFRzHeROWRAABE4iWCbwHEFhkPM/L5vP5dyaz+23+KwHXdR3P854S0YG1ILSCuthNMfNM2OC1/RYENLY+ygcBnPfht6ZAA6BYLNr6dyqVokKhsGpaNQ2TWJstreXaE2aed133sojcj41AKyvdzCdAgSXLsk4MDw9/a/i4rntbRPxFNZoC/5jAV2be759DKTUJ4FZSFFi0bbs/k8noy2R9dAjEuWU2YgXkQOK3kD6BMsysi2Z9JC2Jdcw/ALzwPO+xvmcl7Rj177JVEbkO4BARjSflFDJJuW1dBxJPoCIiL4noDIB1BS0pW6j+oJmbm+uuVqvjRKQfLr0bZHnIzJf0f6HeAybahrUJqAPruhLlcnnPysqKfpXp11n/Gv62zoHAroS+AafT6QkiGrIsazKbzX7eVIHEt1US39gCkOzWYthkjNE+tuZujDGZQ8XRXn8N4KT5lLFZ6uaYPt+nwyDuvC80YdhvB9uOAu1WoaNAR4GIK/AHvdr+QAexB7EAAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-record:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACfUlEQVRoQ+2ZSYsUQRCFvycK4nJXXEbHBdwO4kn/gv9CD467ICIutxEFkREdFUU86T/xojcPntyQcT2INw+uISFVkD1Wd2dWlU7nUHlqisiX+fJFZGREi8yHMt8/HYG5VrBToFOg4QnMPxcyM2t4KE2nT0i6EwvylwIjQOCFpE1tEPgGfI0FamC3AFgazP8IrJL0KwZzkAI3gLMxIA1ttgCPA4w3wHpJP2NwBxG4KOlcDEgTGzNbA8wEGP57vA0CU5JONtlczFwz2wY8HUbAzBYCB4CtwCVJb33OIAXmioC70LoyBsxsEXAQOApsLIhelnS6FgEzW+5BBvwA/FS+SPJFa40KBZ5L2mxmS4AJ4IjHxCzwaUnHkgmY2V7gLrAyAPwOXJN0qg6DCgIvgQfAPsDjo2pcKddLciEz+wCs6AO6W9KjVBIVBGIgahN4BvRLMjslPYlZPbT53wR2AbeBtcUmXEFPdh5U06mbd/shBBzbr/Jx4FCAX0+BEsDMFocEYrNmFcE+BD4XsXZL0oyZnQCutkagzkn3m1NBwDe/Q9L74MAuFEqUn5op8I8JvJO0elacTALnc1HAH3Njkvwx+WeYWUegTa/pwaqIgexdyIN4uyRPmqULZRXEvulPwD3gpr+zcrtGQxfzRHYG2AAczuUWiom3kc4D2RN4BdwH9gM9CS0XFyoLGu9UuN974eIFVDiuSzruH5LqgRhtU20q8kBPV8LMlhVVmVdnYwX+SMdAZVeieAF7eeltmElJr4cpkH1bJfvGVvatxdR4bMu+teZuWxtKxWncXn8I7EldtQV7vz79fp9KwZp//9CksB8F206BuVahU6BToOEJ/Ab7+KdABdTt8AAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-recordStop{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-recordStop:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreen{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreen:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreenExit{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADd0lEQVRoQ+2Zz2sdVRTHv+fJBDW6anDVXen6wZszYxYBiYgtFGst3VSDunKjpS0GpUlqfjVpsVVs6aaL0or4YxMVFCJZ2ZLdPUP+gq5bQnTxtNAkfTnlhnnlkmQy9yV9780rudt77tzv5/y4v4bQ4Y06XD/2ANodwec/AiJygJnvtdvTWfPnRkBEJAiCN8rl8kMfiPn5+Ve7u7v3rays0Orq6lJfX99/PuN2auMDoAD+BvA2M6/mTWSMOUtE48D6AjHGzN/kjdlNvy+AnWOOmQ/lTSYiEwDOWzsimgrDcCRvzG76GwGw8/zJzO9sN6GInAMwbW1UdSSKoqndCMwb6wNwGsB39Q+p6h/M/C4R2dTa1AoHYBWKyCkA1+pqiWi2Wq0e7e/vf7yRoJAAKcQggMtuJKIoOtoxACnE0/xOi/SXMAxPuhCFjUBdpIjYVWXSEf0TM3/g9BeriDMKdSPEz8z8vrU1xgwT0YXCrEJZy1iSJKOqOub0/8jMA0mSfKKqNwoPkHp7ioiGHIhRIvpHVa93BEBa2JcAfOlALAHo6RgAKzRJkk9V1S6xL7kpV4idOM31taxaIKJHqmpPnMMA9hcOQES2PDJkAT1XAAC+ZebPfWB3auNzmLObVsNRUNUXVHUujuM7OxXnMy4XwOcj29mIyOuq+lapVGrYCelKpkEQ3CyXy4tbzdN0AGPMxr2iYZ+sra3FcRybtgCIiK2BKw2rdgaUSqWoUqlIkQAepFDdAF7cBq5ERI9rtdr1OI7tmE2t6SmUEYFHAEaexYW/1QC2EF+ru5GIvg7D0D2GNJxprQY4o6qv1I/b6SpzOYqiLxpWng5oOQAzXxWRWwA+dkRfYOb1p5hGW6sBJpn5KytSRG4D+KguWFXHoyhy7xdeLC0F2ChSRL4H8OFuINoKYIUbY34gogHH3eeZef1K6tPaDpCm068A3nMEDzHzxY4BUNWSiPxORO6z5aDPPlGICNQ9bYyZIaLjjudzIQoFkKbTbwCO+UI0HcB9J/LdeY0xs0R02IGYYObRrWqiFQCfEZEtSHsfmGZm+4qxbbM/hQD8BeBNa0hEM2EYnmgLgP3lFARBT1dXly4vL//b29tbzQNIU+llAHeJaLFSqRzJes5vegR8xGbZLCwsHKzVav8z8/0sm0ID+MDvAfh4qZk2exFopnd9vv0ELrXBQO7fD10AAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-fullscreenExit:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC/ElEQVRoQ+2Zy49NQRCHvx+ReK6IlZ34E7CUiCAR4xEbTLCyQRATYswwb2IQZDYWgojHZpCQECts+ResiQwLj0RClNSkb9Lu3HtPz7mZc8+V6eXt6tP1VVV3VdcVbT7U5vozC9BqD/7/HjCzlZLet9rS9fbP9ICZvQPWSfqRAmFmS4ClMHm+JiR9S1mXVyYFwIBXwEZJv7I2MrPjQH8A6JN0OWtNM/OpAL7HS0mbsjYzswGgN8gNS+rJWtPM/HQAfJ9nkrY22tDMTgMjQaZH0nAzCmatTQE4ClyNPvQU2CbJQ2vKKB2Aa2hmR4DrkbbPgQ5Jv6sJSgkQILqA0dgTkjraBiBAxPHtPz2UtDuGKK0HKkqamd8qg5HS9yXtjebLdYjrHNRqiAeS9gQvnQGGSnML1bvGzOwc0BfN35PUaWYHgRulBwjW9ju+O4JwqM/AWFsABIgLwKkIYgJY1jYAAeJQuGIXVIVcKTKxh8WfBin9J+AVpx/eFWUEqFkyNACKp0rhgWYArkg6kQibSyylmPOklQdibijBX+fSLHFRJkDid+qKmdlaYENOI0zeEcBNSZ9qbVIEQHWuyGOTNZLetgrAz8ClPFpHa1ZL8rf5lFGEB2oBfAxQi4D5DeDmAP7mGJPka0oD4LnDr9imH/xFe8AP4vLIjBclxWXItCOtaIBjwOKo3HaFRyWdnLbmYUHhAJKumdkt4ECk9JCkSitmWixFAwxKOjt5uZvdBvZH2vZLit8XSSBFA/yjpJndAfY1A9FSgOCJu0BnBNErqfIkzfRCywECxCNgR6Rtt6TzmdqHBmyKXG4ZM4sTWc04NzNPWE+AuG3ZlZInSuGBinXMbBzYGVkrE6JUACGcHgPbUyGKAIj7REmZ18y897o5ghiQ5E/bltRChwE/kF7Xj0jyLkbDYWbzgBfA+iA4LmlXqwD8LydvszjAF0lfswBCKC0E3gBeP22p186f8RBKUbaejJmtAr5L+lBPptQAKfCzAClWmkmZWQ/MpHVTvv0X9iFAQGQyevIAAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-audio{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACrUlEQVRoQ+2ZPYgTURCAZzbBXJnCeL2Cnb87b9MEtPBUrrMQFAtrtT5/ClGs9LBWWz0RtbBUFCF4oJDsbO68wsLA2YqQSmLlvpEHu7IuMdlLcus+yUKKhJfZ+ebnvZl5CJY/aLn+MAP41x7M1QPMfFtr/crzvHfTAs8FoNPp1LTWzwHgqIg0lFLvrQHwfX8BER8DwC6jNCIecF13wwoA3/dvIuKNpLJa60Oe560XGoCZd4rICiKeTCtaeABmPg4AJmRqg6xcaABmvg4At4aFRyEBhoVM4UMoCplHADCfJTEL5YEsIVNID5iQAYCHALCYxeq5b6PMfF5EBAAEESthGK7W6/XPRpFWq7W3VCqtZg2ZcT3g+/6i4zjzIlLSWn/yPO/DIGMNLCWY2Sj/+xGRK0qpZfNDEASnROTFVi0fr8+aA8z8Ld6KEfGt67oLYwMAwEUium8EREn7OgeAjwCwPyo/nrque3YSgAtE9GDaAM1mc65arc4Zuf1+P2w0Gt9jJZl5DQAORt+fENG5wgEw8zUAMB/zbBBRwyqAIAjuiMjlSOlNItpjFUCqWl0josMzgChR/9hGAWBbknjmAdPhDdqa0gfZzAMJKyVP4v8hhJYRcSni+0JEu63ahZj5anyQici6UuqIVQDdbrfS6/UqRulyufyTiH5sF8AlIro37VpoWEHIzGZ2tM+sEZFnSqkzk9RCS0R01wjIsZz+mug53hDRia0AnI4bGgDYISItz/M2jYC8Gpp2u30MEWuO4zha665Sqp0ZYFStX/iWchRAItFGzoHSsrJ2ZFl1mHg6bfVYJeGJv85CC++BpIJZ5kSFC6G0ha0e7mYJqcJ7IOkRay84UhD2XjHFIFZf8iW9YcYoYRi+tO6aNeupOs66iU/icV46zf/MAKZpzXFk/QL+JG1PUPhRiQAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-audio:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACSElEQVRoQ+2Zu4sUQRCHf5+C+gf4yBXMfMYHGvjCzEBQDIzV+HwEohipGKupD0QNDE8UEwUFTe68wEDhTMVUMFJ+0tArzbjs9u3Ojt0wBR0M9MzUV1XdXVWNKhcq1189wP/2YKcesH1d0nPgdVvgnQDY3iTpqaT9kuaAt9UA2D4o6aGkzVHpXcByFQC2r0q60lB2D7BUNIDtjZIeSDoyRNGyAWwfiiET4n6YlAtg+7Kka2PCozyAMSHT5CkLIIbMfUlbMhdmOQCZIVOeB2LI3JN0NNPq6bTZe8D2aUmOY72kN8DnoIXt7eF5FSEzkQdsB+OEsFwr6RPwbpixhqYStoPyqVwAbkaAY5KeTWD5wStZHrD9XdJgK34FhBP9H8kFOAvciQBhn3/RAcBHSTvjfx4DJ6cBOAPcbRvA9gZJYQT5DfwYKGl7UdLu+PwIOFUiwCVJYQRZBuZqA7gh6XxUegXYVhtAmq0uAnt7gLhQm9vorBZx74Hcc6D3QLKH/z2JGyVnlYs4pCfzEe4rsLW2XehicpAtAftqAwiZbhhBfgE/ZwVwDrjddi40KiG0HXpHO+KcJ8CJaXKheeBWBOgqnf6W1BwvgcOrATieFDTrJL0HViJAVwXNgVgPrJH0BfiQDTDKtREiNK7KLSnHASQLLacP1PxcVkWWq8PU3emq2yqJJ0b1Qsv2QKpdZp+orBBqmrfq5m5mSJXtgUZI1XnB0YCo94opCal6L/ka3ghtlIXqrllzT9VJ5k19Ek/y0zbf6QHatOYk3/oDujC8QMWgjf4AAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-mute{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-mute:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-ptz{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAL50lEQVRoQ81aaXMU1xU993XPjBZGi2VDbHDAbMaYaB0JGbAjHO9OUk4csJNKKpX8inzKj8nmCsQbNgRvETsCDQhJQEyQxY4xq6TRNjPd76bO1GtnkMEIzVTKr4oC1/Ryz3v33nPObQvKvNLpdMzzvCVBEDxhjGkAMCoiX1hrz6ZSqdEyvw5S7gceP3583uTkZKOIrAXwsIjcUtV+z/OOtba2Xi73+8oKoLu7uyKZTK4A8LyIvKyqSxyA3dbaj1S1b+3atTfKCaJsALq7u/1kMrlYVX8I4FUR4d9MoTyAIwA+AdCdy+X6161bd7NcIMoC4Pjx4/HJyclFTBsReRXABgCLi4IcU9UTIrJbRD5R1YG2trYbIqKlAikJgKrKwMBAVS6XW2SMSanqRhf8cgDejOAyAAjiM1Xd4/v+ierq6usrVqzIlgKiJADpdLpKRJg2HQBeAMDCXQQgcZegxgGcFJH9qvpZEAT9U1NTVzZu3BjMFcScATDna2trF6rqWlVl8D8CsKQokByAEIABEHN/82fu+AkA26N0KqW9zhmA2/0nVPV5AC8C4ClUOQAjAL4EMAmgAsCDrqB99zt/+5ggfN8/0NTUdHmu9VASAADLXNd5QUQ6ATwEIMciNcYcsdZeEZF6VW0WkR8AqHdd6XMR+dRay4Lua29v/+r/DoAplEgkanzfX2WMeZYnISLLAHD3/6WqO40xZ8IwnG+MedH9zhS7CmA/22oYhmnP875KpVI8qTmtOZ9A9LZ0Ol1rjGkKw/BpY8xSVR1hkQZBsJukdfr06cTY2FiXqnYB+D6AKwB6PM/rbW5uPi8idk6Ru5tKBsDnHDp0qCEWiy0Kw5DpkvN9/1JLSwuDK/T5/v7++fl8/jEAtSIyFobhpfr6+qultlA+uywAinfQMbJkMhnt6uri7hZA7Nq1q8ALpbTMO53UPQGoqtm6dats2rTJzqbQ2J2stTWqWun7vhcEQSgiU7lcbmL9+vUTs0kZEuSRI0d8bsK9AN8VAIVZZWUlj7wqFotlR0dHb27cuHH6TrtAkIODg7XZbHahMYap8rCqJlXVcwFPqupVY8xFVT1XUVFxY82aNeSJO659+/YlKysrF1hrPc/zbg4NDd3cvHkzOeUb644A+vv7q3O53GMispxtEMC1IAhOdHR0nJ15Clu2bPGWL1++IAiC1SLSaoxpYbGqao0jL1XVKRG5CODfIpJW1ZOxWOxCU1PTxMyI+O58Pv84ALbdShFhJztpjLmSSqUoDG9b3wDArjE6OroSwNMAGAwD4cv3+r7f6/v+tWj3HBvPV9VGpreqrgew2t3DF/GFERNTC50FcFRV9xljDtTU1AxHhcxTPHjwYF08Hl8hIk+pajuAagBfRO9ubm6+9K0A6KaMMSustQVJDICBxQFconZR1Y+DIDgayeGenp4Fnue1isizAPiHwCsBUPNfVdWMiFAXzXdMzEK+BuCgiLwvInuHhoYuMj3cxj2pqs+55z3pNBWv3yUiH6hqOpVKXS8G8fUJMOfnzZu32BjD4F9QVUriBe7iCVXda4x5N5/P7+js7Lzodr/ZWvsKgJcBNLlrh53+Pw1gzG0A66K16HTOAPiAIFT1CLUQ+YSBW2vfcADI6lzsZAOquoMbaIw5Njw8PB7VRAEA0Y+MjNBJraeTcqrye0VIWbwHVfUdEdmWSqXODwwM1Gez2ZdEZLPbfabaSb6ExsUYczoIgmnP85hC3xeRZ6y1L4oI01JF5LCqvu153s6RkZEzyWSyzrH1JgDcxAeK3k8V26+qn3qe9xGAy62trecKPJBOp8mOD6rqOoeckvgRdzNlLm9m7h4QkX/6vn/41KlTN5YuXbpEVV8XkTcBNDNtKB8A/INMXHzULMwgCHgCP1ZVbhD9wlcAuKtb4/F4r4jEc7kcn0PG5uk/4bQTxSDXTREZdCLwi7a2tr9HAF5TVR4xBRlfwqOLUospcEZVD1G7xGKxg7du3Sp42pqamifdcb/uZPRJAFuMMW+3trby37eto0ePPmStfV5V33R2kyezW1X/QlFXXV2dGR8fr/d9n5lAAKwpdiKmcRQPZUq/tXa4vb399xGAP4jIarczlL3Fi8IrLSI7jDHbW1paeBLg5CGbzbao6i8AvOaKNA3grwDeT6VSlMu3LcfQ7Gy/BfAT16kOAviTtfbDjo4OaiTwunnz5m1wqfkcAG5uJMN5yS1mRCqV4mYXUuiPIkJdz6OtLXorJQBl7mEAH6rqh1FgrlcTAFPoZyQuAH0A/hYEwTss8pkADhw4UBmLxbpE5DcAWPjsVvtF5M+uMTClCuvw4cPrjDFvOJ+x1Bmi6GeqXQJgLYGU/WtV5UV0VezhJK5oEe0pEdkjIh97njfoed5IIpGQsbGxxwkAAF9E4mFnedda+/bExMTRYtam6c9ms5TalNW8J+XMzqcA3orH47tzuRxrjZ3oEccnjIfXcXMifz3KGZOIDKdSqd9FJ0A9P59ymJ3C3RR1ANI9byKD7jHG7Jqenu67ePHiKNnXWvtTVf2lMzO0ij3OKnar6hB1vpPTlNkdIvKSa88ctwypKlvptkwm059MJhOqusY9izXAtsz850mxBjggi4qYNfBWAYDLTTLeKgJQ1ZdcVyluYwRRIB9r7faOjo4LFG0sNhH5uarSUnKMwlFJr6pyfHIMwHURqbPWFgJT1acAPOqIbheA96y1e9vb2y/19fU1qCqNEeuKbTTiAcZJEVhoo8YYdrr/tdEoV1iYU1NTpHGac/pcttOoJqbc7r7ned42FjMVY29v72PGGBYmWZtdgzvLodV/mHqqektEkrSe7g/bc05EWC/vMS1HR0dPMd3S6TRbOYv2VyLCVsr7uEhk3PkdnO6RyDKZzESkUm/TQiy0iooKtkeC4ElQGlBKUBZQv3yUz+f3d3Z2FgrOGfvl1tpnjDGvqCrbXp3TQBzkkgB5P0mOk4lpVSVT81k7Y7FYX2NjI+sMVKBVVVUtjtkJgPaTrZadcI9Lt967SonoJNhhstnsas/zuqy1jcYYavvLqnqADWJ8fPzcjALlMHe5MYbp0aqqK0WEx08CYgDcQYo6EhFPbkBEjoZh2N/e3n418gfFwtBa2yki1EJsn0PsVhSS9xRzEYienp6aWCxGUcdgalWVgup4XV3d2TvZQLd7j6rqMmstJTiHW0wJCjkGzxE7BeEZz/OGcrnchfPnz1+fqfGpSFkL1lp2OHY2AhhW1c9nLacjEEwP3/frwzCszOfz077v3/y26QG7TSaT4Wkx8AZXvAQQGGMy3ARjzA1r7UhbWxv9wR3noqytwcHBunw+3xAEgaGhGR4evnVfhqaYhPhA18YowGY1jC3qbLF4PB5WVlZO3q+B5zMYx5wt5Uwm/a7+9z1N/WwCZ7p5nkdnVhsEQWCtvR51Kt7f19fHlFgoItWe541ba6+2tbWxqEuaCRWIbDYBfts1LvdXhWHIzkHhNU6Tks/nD9G50TMvW7ZsnZMH5AEKvSOxWOxYU1MTW2RJa84AojzneJ3+2ZEQZ6XjIkKW5ejwrO/7D7gBMMmR3oMC8evxekNDw8j91kcx4jkDIOnF4/HFzoAzOBp6ujjqp17H3F+6jkRR1ubkwRQ1jYjsFJHubDZ7opRPTiUBqKioWBmGIW0ipTin05F7IvHR8o06IlzoXB7ZmOuCE33bVbVnJrveT07NGQBTqKqq6lHP855xKpNaiNMHLlpRTpx5GpQSVJRR8BxQ0aRvo3/O5XKDGzZs4MhlTmvOAPg2MnY8Hl9prV3n/ESUJjO/j0XBUfNT6LEGPuW3gbsx7GzRlASAHWbVqlU12WyW34OphSjCmEqUzDMXd5lemV5hL+tgYmLiWldXV3a2BHknUCUBiB5IHnCujoXMb8TR15rokugL5Z4wDD9JJBIDjY2N10oJPHpwWQDwYW4wRlX6nDNFPBHK6OhDN83ILmttfylFO/MUygaAD6Ypmp6ejsaDNCfsPjf5XZi8QCNTzuD5zrIC4AP5tUZE1hhjCgUtInRo9ACD3/n/2YMASHCJRGKJtZYDKlpSeoEzQRCc6+zs5KCsrOu/zrEzi6BNfKAAAAAASUVORK5CYII=") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-ptz:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-ptzActive{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-ptzActive:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-zoom{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-icon-zoom:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABH1JREFUaEPVmVuIVlUUx/8/IowoArtSEUWRQpCEUBEE1UM9mEFQEUbahSwLMi2MCMwyoiwzDMy0EDKQkq6YUD3UQw8+pEF0UR8KpSi70QWhoFjxn/YZvjlzvjNnn/NN87ngMMPMXnv//nudvfba+6BDwCJiOvBLFSrDzh8RKyTdIOke4J0y76EgYKakTZIulLQUWNMrYugFGDYiDpP0sqTrJa0HFhUixgmIiFOBb4bx1YqIJyQtk/SRXytg/xgBEWFl6yRdCnw4VSIi4kxJfs6SNCM9Z0s6o4fpYWBFWcBuSXuBqyYb3pFOkAWsfxrWoEeWxg9JX0naJ+lYSbOKSR4VkFb7Q5LmAtsmQ0BEXCtpcQI/qTTGT5K+TqCG3Z+ADb0POBgRcyW9LWlk9u3fK8B5djdwUW/HETFN0nF9Hs9G8T+nuS/qhEfE5ZKW9EAa2I8BK/N80V9EWPB2SX8D549ZxBHxgqRbJX0g6Y8EVcD5Zz/7XdL3kg5IumMiAV2iGhEbJN1WXp8jEYgIQ5zYM4CB/Lfv0uPf/fyQYP3/A8DPXaByfCPC62ANsHTcPhAR50ryLueFdTHgNDVUFhHHAz/23YkjwjvdG5L8rl0BvDfZCtKivlPS0ZK2FQszZ9xyGr1M0luSjpJ0DfBaTmc5bRP8qyWfGcDenH6qduIiVb0JXN2TBU6RNA1wiutkfeDd5wlVr0ndYJW1UFU5ERGfSTpH0iuSFgB/tVFRA/8I4H0oyxoXcykLFJ0/ADyeNdJ/2c4bWfm1cTePAQ/m9uf2bQXsAmbnDFgDvwq4P6evcWm0iXMpAr+5JgH+aejbb+afBu5t0ke/Nm0j4P5mAnsmGrxm5tcCros6WRcBcwDXJn2tBn4dcFcn8uTcRcBiYG0/iBr4jcBC+0XEaT6UdBHSRUDfV6AGfhNwSypdHnXpLuk5wLtxK+siYDswpzxqDfxmYH4qWTan01bhvgR4po2CLgL2AL4xGLUa+C3AvIhwqWL4k0uws4BP/28BTqFOpU6pdZvUVuC6iLgy3SwcUwJdCSxvA2+fLhGw/2xgV83Mu83nkp6XtFrS4SXQ1cB9beEHIWB9OhL6uiPXOi3eYrCuEciFLtq/BCxIkbvRkXSNBPi8nGVTIaBYE1XlRfZ91FQIKNZE1SY4mPNAVQxLxVxWmBs2blVST0UEqvRsAG5vKHRMs2EQMLIm0l6SXRsNgwCzb5V0RJvaKEeAL7GmtwlzC5/GtVGOgB2SLmgB08ZlHrCliWOOAH8h8beqybblwMqmg+QI8HV29rVHU5DUbhnwZI5PYwEpS7wuafSyK2egBm3vBp5t0K5dGk0C/BXl3fSBInesuvYLgY1tOsyKQBLhCDgSg7L5gA85rSxbQBLR754nB+KgpJsB7wGtrZWAAYj4NsG/35o8ObYW0CNilaTTM0A+keR3/uMMn75NOwlIIgzv9HrTBEC/SnrKR0vgz0HAu4/OAgqQiLCASySdJ8mfrArzB/Odkl4EvhwUeNHPwAT0gkWEbx4sZMcgZ7tK/L/0u8tAh/gBxwAAAABJRU5ErkJggg==") no-repeat 50%;background-size:100% 100%}.jessibuca-container .jessibuca-quality-icon-text{font-size:14px;width:30px;height:20px;line-height:20px;cursor:pointer}.jessibuca-container .jessibuca-speed{font-size:14px;color:#fff}.jessibuca-container .jessibuca-quality-menu-list{position:absolute;left:50%;bottom:100%;visibility:hidden;opacity:0;transform:translateX(-50%);transition:visibility .3s,opacity .3s;background-color:rgba(0,0,0,.5);border-radius:4px;overflow:hidden}.jessibuca-container .jessibuca-quality-menu-list.jessibuca-quality-menu-shown{visibility:visible;opacity:1}.jessibuca-container .icon-title-tips{pointer-events:none;position:absolute;left:50%;bottom:100%;visibility:hidden;opacity:0;transform:translateX(-50%);transition:visibility .3s ease 0s,opacity .3s ease 0s;background-color:rgba(0,0,0,.5);border-radius:4px}.jessibuca-container .icon-title{display:inline-block;padding:5px 10px;font-size:12px;white-space:nowrap;color:#fff}.jessibuca-container .jessibuca-quality-menu{padding:8px 0}.jessibuca-container .jessibuca-quality-menu-item{box-sizing:border-box;display:block;height:25px;line-height:25px;margin:0;padding:0 10px;cursor:pointer;font-size:14px;text-align:center;width:50px;color:hsla(0,0%,100%,.5);transition:color .3s,background-color .3s}.jessibuca-container .jessibuca-quality-menu-item:hover{background-color:hsla(0,0%,100%,.2)}.jessibuca-container .jessibuca-quality-menu-item:focus{outline:none}.jessibuca-container .jessibuca-quality-menu-item.jessibuca-quality-menu-item-active{color:#2298fc}.jessibuca-container .jessibuca-volume-panel-wrap{position:absolute;left:50%;bottom:100%;visibility:hidden;opacity:0;transform:translateX(-50%) translateY(22%);transition:visibility .3s,opacity .3s;background-color:rgba(0,0,0,.5);border-radius:4px;height:120px;width:50px;overflow:hidden}.jessibuca-container .jessibuca-volume-panel-wrap.jessibuca-volume-panel-wrap-show{visibility:visible;opacity:1}.jessibuca-container .jessibuca-volume-panel{cursor:pointer;position:absolute;top:21px;height:60px;width:50px;overflow:hidden}.jessibuca-container .jessibuca-volume-panel-text{position:absolute;left:0;top:0;width:50px;height:20px;line-height:20px;text-align:center;color:#fff;font-size:12px}.jessibuca-container .jessibuca-volume-panel-handle{position:absolute;top:48px;left:50%;width:12px;height:12px;border-radius:12px;margin-left:-6px;background:#fff}.jessibuca-container .jessibuca-volume-panel-handle:before{bottom:-54px;background:#fff}.jessibuca-container .jessibuca-volume-panel-handle:after{bottom:6px;background:hsla(0,0%,100%,.2)}.jessibuca-container .jessibuca-volume-panel-handle:after,.jessibuca-container .jessibuca-volume-panel-handle:before{content:"";position:absolute;display:block;left:50%;width:3px;margin-left:-1px;height:60px}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-controls{width:100vh}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-play-big:after{transform:translate(-50%,-50%) rotate(270deg)}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-loading{flex-direction:row}.jessibuca-container.jessibuca-fullscreen-web .jessibuca-loading-text{transform:rotate(270deg)}.jessibuca-container-playback .jessibuca-controls{height:48px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center{flex:1;display:flex;box-sizing:border-box;justify-content:space-between;font-size:12px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time{box-sizing:border-box;flex:1;position:relative;height:100%}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-inner{width:300px;height:100%;overflow-y:hidden;overflow-x:auto}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-current-time{position:absolute;left:0;top:0;height:15px;width:1px;background-color:red;text-align:center;z-index:1}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-current-time-text{position:absolute;box-sizing:border-box;padding:0 5px;width:60px;left:-25px;top:15px;border:1px solid red;height:15px;line-height:15px;cursor:move;background-color:#fff;color:#000;-webkit-user-select:none;user-select:none}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-scroll{position:relative;width:1440px;margin:0 auto}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-scroll.one-hour{width:1440px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-scroll.half-hour{width:2880px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-scroll.ten-min{width:8640px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-scroll.five-min{width:17280px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-scroll.one-min{width:86400px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-time-list{position:relative;background-color:#ccc;height:48px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-day{height:100%;overflow:hidden}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-one-wrap{height:8px;z-index:1}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-second-wrap{height:25px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-controls-playback-btns{display:flex;align-items:center}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute-one,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-second-one{float:left;width:1px;height:8px;margin:0;cursor:default;position:relative;z-index:1}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute-one.active,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-second-one.active{background-color:orange;cursor:pointer}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute-one.start,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-second-one.start{background-color:#999}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute-one:hover .jessibuca-playback-time-title-tips,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-second-one:hover .jessibuca-playback-time-title-tips{visibility:visible;opacity:1}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-title-tips{pointer-events:none;position:absolute;left:0;top:100%;visibility:hidden;opacity:0;transform:translateX(13%);transition:visibility .3s ease 0s,opacity .3s ease 0s;background-color:#000;border-radius:4px;z-index:1}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-title-tips.jessibuca-playback-time-title-tips-left{transform:translateX(-100%)}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-title-tips .jessibuca-playback-time-title{display:inline-block;padding:2px 5px;font-size:12px;white-space:nowrap;color:#fff}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-hour,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute{float:left;position:relative;width:60px;box-sizing:border-box;border-top:1px solid #999;-webkit-user-select:none;user-select:none;text-align:left;height:25px;line-height:25px}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-hour:first-child,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute:first-child{border-left:0}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-hour:first-child .jessibuca-playback-time-hour-text,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute:first-child .jessibuca-playback-time-hour-text{left:0}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-hour:after,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute:after{content:"";position:absolute;left:0;top:-8px;width:1px;height:14px;background-color:#999}.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-hour-text,.jessibuca-container-playback .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-center .jessibuca-playback-time-minute-text{position:absolute;left:-13px}.jessibuca-container-playback .jessibuca-icon-narrow{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABNlJREFUaEPtmWmolVUUhp+XaJ5LpKQif0RkQpNE4B8bKKJBtEGlogFEi8AGG6gQ+lEWJZUQhkQWlA0alvWjsoIgApGgICusKKzIBiMaqag3lnzKOefu79v7fOdE90ILLpd7v7Xevd49rLX22mKMi8a4//xP4L9ewb5WwPYc4DZg0hAcfwhYJOnbQbCKCNg+AHgYmDHIYAnb74H5kla1xc0SsD0FWAsc3HaQArslkhYW6I1QaSRg+1Tg1ULgL4FPgfj9J7APcAhwFLB7AcZKSRcV6HWp1BKwfTzwdgbwG+Ax4Hlgg6Q/evVtx8pNBWYB52fwVki6oh8SSQK29wK+APatAXN1mJdK+rl0QNuTgduBmQ02CyUtKcWsI7AOOK0G5D1gjqT43UpszwWWNxhPlrSxBHwEAdvnAatrjN8ETpEUe3wgsT0NeB2SyXSjpFitrKQIfAUclLD8EDha0t9Z1EIF26cDL9eoz5L0TA4qRSD2d0omSvosB9jvd9uLqnPRa7pJ0pE5vFICt0hanANr+932JuCIhP1USW814ZYQ2CppXFvnSuxsn1uF4l71ByVdPSiBOyXdWuLIIDq2P68SXydMdhuVrMCxkt4dxLkSW9sR+69L6B4mKcglJUdgi6RkDWQ7ttVZwH5V6ZBb6Z2BTyS9kFK0PR14LvHtTEkvtSXwmqQRCa0qM6JG2r9kdnt0wpmzJf3V+X/bUTO9n8CbKykq4VYr8LikS3otba8HTmzh/HaTeZK6MnG1opsThd8Nku5tSyBZXNn+DjhwAAIjoovtqLuCQFSxnXKzpLvbElgl6cLECsTsRT3TVqZJeqNnC00AIlHGWemUBZKWtiWwXtJJCQK7ASuAiN+7ArnyIoJFZPivgTskxXWyS6qL04aEo7MlPd2WwC/AeEm/pgBsjwf26IeApN9rsC4HHkl8myKp9l6SC6OB1xjG2u6hxArELPdu1x/jKls3gYFRQiB5DobleODY3hOIwBBbs1PWSYqKtVZKCITxBElRZv8r0lCRXpk6L51OlBJYKyky5dDFdmTyONy79IBHohsn6YdhrEBgXCzpiWEzsB23spMTuMslzcuNl1qBR4FLawyz9XluwM7vtu8DrknYRLcu7sXR9WiUFIG9ga2JhBJAEe8jKr2SA859tx3lwfU1esskXZXDiO91XYloezzbAHCjpHtKBujVsX0osKyqZOsgYgKjXmryYZttU2PrfmBBg5ORNSOrRlMrK1XSmw9ECzFWuURmSlrTpJhrLT5VddSaMKJbETV+3F0/qCJKlA1RYhwee7k6pOc0NMqa8BtJlDR3o+a5rGS6Kp3InkEgirIoM4YhtSSyBGJ02zcBdw3DkwEwkiSKCFQkoip9YMCLTKf/0VONd4Eo4kplhqSua2cxge0j2I4ccS1wTOmoPXo/AZEQF0vabDsKuNpyOTHGdEnxXrFN+ibQQeQMIA5mZNHck1MUahG1IqKskRR/75Dq6WplHxMySVIEjPYEehyIrtrE6ieuhjsBvwFbgI+A6O/EzNeK7dnAk4UkVku6YGgECgfNqtmOR5AI3Tn5WNK2VmTrLZQboe33wjPxjqTjRiWBcKqAxI5XnFG3Ah1BIvZ46n2gq9k2aglUKxEPjdEvPaGqkF+U1JVQRzWBknM05gn8A3BFtUAnWz1iAAAAAElFTkSuQmCC") no-repeat 50%;background-size:100% 100%}.jessibuca-container-playback .jessibuca-icon-narrow:hover{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABeRJREFUaEPtWW+IVUUUP+eub/9Y7lqJpFTkhyW0B9vunHkI+kErCikVrValogxEi8D+2B8qhD6YRUklhBKRBWWWhql9sKwkWBb0zn3bgzXFig0rcv0TUdbaPu6cGHkrb+/OfXfefSut0Hx58Oac3zm/OXPmnJmLcJEPvMj9h/8J/NcRrCoCvu8vQ8TnAGDGKDi+2fO8tR0dHSdrwXIi0N3dfXl9ff1bALCoFmMW3d8AYBURbU+Lm0ggn8+T1no3AExJa8RBbwMRrXGQGyFSkUA+n79Ja/2FI/AvANDHzOa36HleMzNfBQDTAaDJAWMrEd3tIDdMJJaAUqoDAIIEwBPM/C4A7GpqavKz2exgVF4pNYWZZyHiEgC4sxIeM2+RUj5QDQkrgd7e3kvPnj37MwC0xICxSeaGhoaN2Wz2jKtB3/ezAPA8Ii6uoLOGiDa4YloJBEGwj5lvjgHpZeZlUspeVyNRuSAIVjDzm3H6WutsLpc75II/goDv+3cg4o4Y5S4AuJGIii7glWR835+DiF8BWIvpISIy0UocIwgopX4FgCstmkeEENcjok5EdRRQSt0CAJ/ZxE3OCCE+SoKyEWCbUl1d3bT29vYfkwCrnVdKrTV5YdE7SkTXJeG5EniGiNYngaWdV0odBYDWqL7WelYul+uuhOtC4DQRTUrrnIue7/sLEHFXVJaZ35BSPlwTAWZ+QUr5rIsjtcgopX4CAFP4ykfiNkqMgOd5N3R0dBRqcc5FVyllzv7HLNvomlwuZ8hZRxKB40Rk7YGUUmZb3QYAE03rUDHMiMZOBgB+EELsscn6vr8QET+JziHiPCHE3lQEmPlLKeWIglZqM0yPdJnL6pbLMPPevr6+2zs7O8Py/4MgmM7M31rwVhCR6YSrjwAzvyelvDeqqZQ6AAC5ap0fkkfElUKIYZW4FNFjlsbvCSJ6JS0Ba3OllDoFAFekJWA7XZRSpu8yBJojuE8T0UupCADAdiLqtETArN6KtAS01nNyudzX5fr5fH6q1toUSpMr5WM1EW1MS+AAEc2MKu/fv7+xubl5CzMvAIAGAEhqL0wSmwrfDwDriGhzFLN0cfItSbxUCPFhWgJ/AcBkIvrbBlAoFCZrrceHYViRgOd5qLXmlpaW/tbW1n9sWEEQLGfmty0ESAgRey9JOkYh6RhLu40s29KscnS7/mGusnELaDASCcTlwWg5bnAKhcIlxWLRHAyNEdx9RGQ61tjhQsAoTyUi02ZfkFGhI33Qli/lTjgRQMTdQoiFF8L7np6eiWEYmuSuj+CHdXV1k9rb238fjQiYXLhHCPH+aJNQSplb2dworrlySilXJtmzReAdALjPpujSnycZLJ/3ff9VRHzEonMyk8lk29raTiThjSDQ1dU1obGx8bSloBgsc1zOI6LPk4CT5pVSpj14PEZuExE9lIRhPYXMn0EQLGbmj+MAEPFJIcTLLgaiMgcPHrza87xNpU42DuI0M6+UUsb6MKRY6WHrNQBYXYGEr7VeJ6UccZOy6ZiiVywWVwGAeUKc4ELevB8JIXZWlcSRPbqt9KJWCeMIM+9BxG5mPjxu3Lj+MAw5k8k0DA4OXgsA5nlkLiLOr/BQFoufRCLxcVcptQUA7ndZsZKMqZ6m7zFN2fgq9FKRSCRgUJVSTwHAi6PhTFqMuEg4ESgl9kxmfr2Wi0zE+TPMvB0Rl1dBahERDbt2OhMYMqKUMjXiUQBoq8JwueifAGAK4noiOhYEQSczx7bLURvMvFBKab5XnBtVExhSDILgVq31fEQ0VTTpk9MpRDS9/k5m3klEpnE7P0qfrra6LggizhBCHK6JQLmxnp6e1jAMpzHzNHPSIGIdIg5orY97nvfdwMDA0dmzZ5uVjx2+7y9FxA8cSewgortGjYCj0USxIAiWMPO2REGA74no3FNk6i3kYCSViGNOfENE7WOSgHHKgcT5rzhjLgJlp53Z4yO+D0Qf28YsAUOk9AJo3ksFAJgO+VMiGlZQxzQBlyS66An8C26dYE+zHCOfAAAAAElFTkSuQmCC") no-repeat 50%;background-size:100% 100%}.jessibuca-container-playback .jessibuca-icon-expand{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container-playback .jessibuca-icon-expand:hover{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%}.jessibuca-container-playback .jessibuca-playback-expand.disabled .jessibuca-icon-expand,.jessibuca-container-playback .jessibuca-playback-narrow.disabled .jessibuca-icon-narrow{cursor:no-drop}.jessibuca-container-playback.jessibuca-fullscreen-web .jessibuca-controls .jessibuca-controls-bottom .jessibuca-controls-playback-time-inner{overflow-y:auto}');class ft{constructor(e){var t,i,r,s,n,a;this.player=e,r=this,(i=e)._opt.hasControl&&i._opt.controlAutoHide?i.$container.classList.add("jessibuca-controls-show-auto-hide"):i.$container.classList.add("jessibuca-controls-show"),s=i._opt,n=s.operateBtns,a=`
				< div class = "jessibuca-controls-center" > <div class = "jessibuca-controls-playback-time" > <div class = "jessibuca-controls-playback-time-inner" > <div class = "jessibuca-controls-playback-time-scroll" > <div class = "jessibuca-controls-playback-time-list" > <div class = "jessibuca-playback-time-day" > <div class = "jessibuca-playback-time-one-wrap" > </div>
                                <div class="jessibuca-playback-time-second-wrap"></div > </div>
                        </div > <div class = "jessibuca-controls-playback-current-time" > <div class = "jessibuca-controls-playback-current-time-text" > 00 : 00 : 00 < /div>
                        </div > </div>
                </div > </div>
            <div class="jessibuca-controls-playback-btns">
                <div class="jessibuca-controls-item jessibuca-playback-narrow">${B.narrow}</div > <div class = "jessibuca-controls-item jessibuca-playback-expand" > $ {
					B.expand
				} < /div>
            </div > </div>
    `,i.$container.insertAdjacentHTML("beforeend",`
            ${s.background?`<div class="jessibuca-poster" style="background-image: url(${s.background})"></div > `: ""
			} < div class = "jessibuca-loading" > $ {
				B.loading
			}
			$ {
				s.loadingText ? ` < div class = "jessibuca-loading-text" > $ {
					s.loadingText
				} < /div>`:""}
            </div > $ {
					s.hasControl && n.play ? '<div class="jessibuca-play-big"></div>': ""
				}
				$ {
					s.hasControl && n.ptz ? '\n            <div class="jessibuca-ptz-controls">\n                <div class="jessibuca-ptz-bg-active"></div>\n                <div class="jessibuca-ptz-arrow jessibuca-ptz-arrow-up" data-arrow="up"></div>\n                <div class="jessibuca-ptz-arrow jessibuca-ptz-arrow-right" data-arrow="right"></div>\n                <div class="jessibuca-ptz-arrow jessibuca-ptz-arrow-down" data-arrow="down"></div>\n                <div class="jessibuca-ptz-arrow jessibuca-ptz-arrow-left" data-arrow="left"></div>\n                <div class="jessibuca-ptz-control"></div>\n            </div>\n            ': ""
				}
				$ {
					s.hasControl && n.zoom ? ` < div class = "jessibuca-zoom-controls" > <div class = "jessibuca-zoom-narrow" > $ {
						B.narrow
					} < /div>
                <div class="jessibuca-zoom-tips">电子放大</div > <div class = "jessibuca-zoom-expand" > $ {
						B.expand
					} < /div>
                <div class="jessibuca-zoom-stop2">${B.zoomStop}</div > </div>
            `:""}

            ${s.hasControl&&n.record?`
                <div class="jessibuca-recording">
                    <div class="jessibuca-recording-red-point"></div > <div class = "jessibuca-recording-time" > 00 : 00 : 01 < /div>
                    <div class="jessibuca-icon-recordStop jessibuca-recording-stop">${B.recordStop}</div > </div>
            `:""}
            ${s.hasControl?`
                <div class="jessibuca-controls">
                    <div class="jessibuca-controls-bottom">
                        <div class="jessibuca-controls-left">
                            ${s.showBandwidth?'<div class="jessibuca-controls-item jessibuca-speed"></div > ':""}
                        </div>
                        ${s.playType===m?a:""}

                        <div class="jessibuca-controls-right">
                             ${n.quality?'\n < div class = "jessibuca-controls-item jessibuca-quality-menu" > \n < div class = "jessibuca-quality-icon-text" > </div>\n                                    <div class="jessibuca-quality-menu-list"></div > \n < /div>\n                             ':""}
                             ${n.audio?`
                                 <div class="jessibuca-controls-item jessibuca-volume">
                                     ${B.audio}
                                     ${B.mute}
                                     <div class="jessibuca-volume-panel-wrap">
                                          <div class="jessibuca-volume-panel">
                                                 <div class="jessibuca-volume-panel-handle"></div > </div>
                                          <div class="jessibuca-volume-panel-text"></div > </div>
                                 </div > `: ""
				}
				$ {
					n.play ? ` < div class = "jessibuca-controls-item jessibuca-play" > $ {
						B.play
					} < /div><div class="jessibuca-controls-item jessibuca-pause">${B.pause}</div > `: ""
				}
				$ {
					n.screenshot ? ` < div class = "jessibuca-controls-item jessibuca-screenshot" > $ {
						B.screenshot
					} < /div>`:""}
                             ${n.record?` <div class="jessibuca-controls-item jessibuca-record">${B.record}</div > <div class = "jessibuca-controls-item jessibuca-record-stop" > $ {
						B.recordStop
					} < /div>`:""}
                             ${n.ptz?` <div class="jessibuca-controls-item jessibuca-ptz">${B.ptz}</div > <div class = "jessibuca-controls-item jessibuca-ptz-active" > $ {
						B.ptzActive
					} < /div>`:""}
                             ${n.zoom?` <div class="jessibuca-controls-item jessibuca-zoom">${B.zoom}</div > <div class = "jessibuca-controls-item jessibuca-zoom-stop" > $ {
						B.zoomStop
					} < /div>`:""}
                             ${n.fullscreen?`<div class="jessibuca-controls-item jessibuca-fullscreen">${B.fullscreen}</div > <div class = "jessibuca-controls-item jessibuca-fullscreen-exit" > $ {
						B.fullscreenExit
					} < /div>`:""}
                        </div > </div>
                </div > `: ""
				}

				`), Object.defineProperty(r, "$poster", {
					value: i.$container.querySelector(".jessibuca-poster")
				}), Object.defineProperty(r, "$loading", {
					value: i.$container.querySelector(".jessibuca-loading")
				}), Object.defineProperty(r, "$play", {
					value: i.$container.querySelector(".jessibuca-play")
				}), Object.defineProperty(r, "$playBig", {
					value: i.$container.querySelector(".jessibuca-play-big")
				}), Object.defineProperty(r, "$recording", {
					value: i.$container.querySelector(".jessibuca-recording")
				}), Object.defineProperty(r, "$recordingTime", {
					value: i.$container.querySelector(".jessibuca-recording-time")
				}), Object.defineProperty(r, "$recordingStop", {
					value: i.$container.querySelector(".jessibuca-recording-stop")
				}), Object.defineProperty(r, "$pause", {
					value: i.$container.querySelector(".jessibuca-pause")
				}), Object.defineProperty(r, "$controls", {
					value: i.$container.querySelector(".jessibuca-controls")
				}), Object.defineProperty(r, "$controlsInner", {
					value: i.$container.querySelector(".jessibuca-controls-bottom")
				}), Object.defineProperty(r, "$controlsLeft", {
					value: i.$container.querySelector(".jessibuca-controls-left")
				}), Object.defineProperty(r, "$controlsRight", {
					value: i.$container.querySelector(".jessibuca-controls-right")
				}), Object.defineProperty(r, "$fullscreen", {
					value: i.$container.querySelector(".jessibuca-fullscreen")
				}), Object.defineProperty(r, "$volume", {
					value: i.$container.querySelector(".jessibuca-volume")
				}), Object.defineProperty(r, "$volumePanelWrap", {
					value: i.$container.querySelector(".jessibuca-volume-panel-wrap")
				}), Object.defineProperty(r, "$volumePanelText", {
					value: i.$container.querySelector(".jessibuca-volume-panel-text")
				}), Object.defineProperty(r, "$volumePanel", {
					value: i.$container.querySelector(".jessibuca-volume-panel")
				}), Object.defineProperty(r, "$volumeHandle", {
					value: i.$container.querySelector(".jessibuca-volume-panel-handle")
				}), Object.defineProperty(r, "$volumeOn", {
					value: i.$container.querySelector(".jessibuca-icon-audio")
				}), Object.defineProperty(r, "$volumeOff", {
					value: i.$container.querySelector(".jessibuca-icon-mute")
				}), Object.defineProperty(r, "$fullscreen", {
					value: i.$container.querySelector(".jessibuca-fullscreen")
				}), Object.defineProperty(r, "$fullscreenExit", {
					value: i.$container.querySelector(".jessibuca-fullscreen-exit")
				}), Object.defineProperty(r, "$record", {
					value: i.$container.querySelector(".jessibuca-record")
				}), Object.defineProperty(r, "$recordStop", {
					value: i.$container.querySelector(".jessibuca-record-stop")
				}), Object.defineProperty(r, "$screenshot", {
					value: i.$container.querySelector(".jessibuca-screenshot")
				}), Object.defineProperty(r, "$speed", {
					value: i.$container.querySelector(".jessibuca-speed")
				}), Object.defineProperty(r, "$playbackTime", {
					value: i.$container.querySelector(".jessibuca-controls-playback-time")
				}), Object.defineProperty(r, "$playbackTimeInner", {
					value: i.$container.querySelector(".jessibuca-controls-playback-time-inner")
				}), Object.defineProperty(r, "$playbackTimeScroll", {
					value: i.$container.querySelector(".jessibuca-controls-playback-time-scroll")
				}), Object.defineProperty(r, "$playbackTimeList", {
					value: i.$container.querySelector(".jessibuca-controls-playback-time-list")
				}), Object.defineProperty(r, "$playbackTimeListOne", {
					value: i.$container.querySelector(".jessibuca-playback-time-one-wrap")
				}), Object.defineProperty(r, "$playbackTimeListSecond", {
					value: i.$container.querySelector(".jessibuca-playback-time-second-wrap")
				}), Object.defineProperty(r, "$playbackCurrentTime", {
					value: i.$container.querySelector(".jessibuca-controls-playback-current-time")
				}), Object.defineProperty(r, "$playbackCurrentTimeText", {
					value: i.$container.querySelector(".jessibuca-controls-playback-current-time-text")
				}), Object.defineProperty(r, "$controlsPlaybackBtns", {
					value: i.$container.querySelector(".jessibuca-controls-playback-btns")
				}), Object.defineProperty(r, "$playbackNarrow", {
					value: i.$container.querySelector(".jessibuca-playback-narrow")
				}), Object.defineProperty(r, "$playbackExpand", {
					value: i.$container.querySelector(".jessibuca-playback-expand")
				}), Object.defineProperty(r, "$ptz", {
					value: i.$container.querySelector(".jessibuca-ptz")
				}), Object.defineProperty(r, "$ptzActive", {
					value: i.$container.querySelector(".jessibuca-ptz-active")
				}), Object.defineProperty(r, "$ptzControl", {
					value: i.$container.querySelector(".jessibuca-ptz-controls")
				}), Object.defineProperty(r, "$ptzBgActive", {
					value: i.$container.querySelector(".jessibuca-ptz-bg-active")
				}), Object.defineProperty(r, "$ptzControlCircular", {
					value: i.$container.querySelector(".jessibuca-ptz-control")
				}), Object.defineProperty(r, "$ptzArrows", {
					value: i.$container.querySelectorAll(".jessibuca-ptz-arrow")
				}), Object.defineProperty(r, "$qualityText", {
					value: i.$container.querySelector(".jessibuca-quality-icon-text")
				}), Object.defineProperty(r, "$qualityMenu", {
					value: i.$container.querySelector(".jessibuca-quality-menu")
				}), Object.defineProperty(r, "$qualityMenuList", {
					value: i.$container.querySelector(".jessibuca-quality-menu-list")
				}), Object.defineProperty(r, "$zoom", {
					value: i.$container.querySelector(".jessibuca-zoom")
				}), Object.defineProperty(r, "$zoomStop", {
					value: i.$container.querySelector(".jessibuca-zoom-stop")
				}), Object.defineProperty(r, "$zoomNarrow", {
					value: i.$container.querySelector(".jessibuca-zoom-narrow")
				}), Object.defineProperty(r, "$zoomExpand", {
					value: i.$container.querySelector(".jessibuca-zoom-expand")
				}), Object.defineProperty(r, "$zoomStop2", {
					value: i.$container.querySelector(".jessibuca-zoom-stop2")
				}), t = this, Object.defineProperty(t, "controlsRect", {
					get: () = >t.$controls.getBoundingClientRect()
				}), Object.defineProperty(t, "controlsInnerRect", {
					get: () = >t.$controlsInner.getBoundingClientRect()
				}), Object.defineProperty(t, "controlsLeftRect", {
					get: () = >t.$controlsLeft.getBoundingClientRect()
				}), Object.defineProperty(t, "controlsRightRect", {
					get: () = >t.$controlsRight.getBoundingClientRect()
				}), Object.defineProperty(t, "controlsPlaybackTimeInner", {
					get: () = >t.$playbackTimeInner && t.$playbackTimeInner.getBoundingClientRect() || {}
				}), Object.defineProperty(t, "controlsPlaybackBtnsRect", {
					get: () = >t.$controlsPlaybackBtns && t.$controlsPlaybackBtns.getBoundingClientRect() || {
						width: 0
					}
				}), dt(e, this); {
					var o = e,
					l = this;
					const f = o["events"]["proxy"],
					A = o._opt.operateBtns;
					function c(e) {
						var {
							bottom: t,
							height: i
						} = l.$volumePanel.getBoundingClientRect(),
						r = l.$volumeHandle.getBoundingClientRect()["height"];
						return y(t - e.y - r / 2, 0, i - r / 2) / (i - r)
					}
					f(window, ["click", "contextmenu"], e = >{ - 1 < e.composedPath().indexOf(o.$container) ? l.isFocus = !0 : l.isFocus = !1
					}),
					f(window, "orientationchange", () = >{
						setTimeout(() = >{
							o.resize()
						},
						300)
					}),
					f(l.$controls, "click", e = >{
						e.stopPropagation()
					}),
					A.play && (f(l.$pause, "click", e = >{
						k(A.pauseFn) ? A.pauseFn() : o.pause()
					}), f(l.$play, "click", e = >{
						k(A.playFn) ? A.playFn() : (o.play(), o.resumeAudioAfterPause())
					})),
					f(l.$playBig, "click", e = >{
						k(A.playFn) ? A.playFn() : (o.play(), o.resumeAudioAfterPause())
					}),
					A.screenshot && f(l.$screenshot, "click", e = >{
						e.stopPropagation(),
						k(A.screenshotFn) ? A.screenshotFn() : o.video.screenshot()
					}),
					A.audio && (f(l.$volume, "mouseover", () = >{
						l.$volumePanelWrap.classList.add("jessibuca-volume-panel-wrap-show")
					}), f(l.$volume, "mouseout", () = >{
						l.$volumePanelWrap.classList.remove("jessibuca-volume-panel-wrap-show")
					}), f(l.$volumeOn, "click", e = >{
						e.stopPropagation(),
						b(l.$volumeOn, "display", "none"),
						b(l.$volumeOff, "display", "block");
						e = o.volume;
						o.volume = 0,
						o._lastVolume = e
					}), f(l.$volumeOff, "click", e = >{
						e.stopPropagation(),
						b(l.$volumeOn, "display", "block"),
						b(l.$volumeOff, "display", "none"),
						o.volume = o.lastVolume || .5
					}), f(l.$volumePanel, "click", e = >{
						e.stopPropagation(),
						o.volume = c(e)
					}), f(l.$volumeHandle, "mousedown", () = >{
						l.isVolumeDroging = !0
					}), f(l.$volumeHandle, "mousemove", e = >{
						l.isVolumeDroging && (o.volume = c(e))
					})),
					f(document, "mouseup", () = >{
						l.isVolumeDroging && (l.isVolumeDroging = !1)
					}),
					A.record && (f(l.$record, "click", e = >{
						e.stopPropagation(),
						k(A.recordFn) ? A.recordFn() : o.recording = !0
					}), f(l.$recordStop, "click", e = >{
						e.stopPropagation(),
						k(A.recordStopFn) ? A.recordStopFn() : o.recording = !1
					}), f(l.$recordingStop, "click", e = >{
						e.stopPropagation(),
						k(A.recordStopFn) ? A.recordStopFn() : o.recording = !1
					})),
					A.fullscreen && (f(l.$fullscreen, "click", e = >{
						e.stopPropagation(),
						k(A.fullscreenFn) ? A.fullscreenFn() : o.fullscreen = !0
					}), f(l.$fullscreenExit, "click", e = >{
						e.stopPropagation(),
						k(A.fullscreenExitFn) ? A.fullscreenExitFn() : o.fullscreen = !1
					})),
					A.ptz && (f(l.$ptz, "click", e = >{
						e.stopPropagation(),
						b(l.$ptzActive, "display", "flex"),
						b(l.$ptz, "display", "none"),
						l.$ptzControl.classList.add("jessibuca-ptz-controls-show")
					}), f(l.$ptzActive, "click", e = >{
						e.stopPropagation(),
						b(l.$ptz, "display", "flex"),
						b(l.$ptzActive, "display", "none"),
						l.$ptzControl.classList.remove("jessibuca-ptz-controls-show")
					}), l.$ptzArrows.forEach(e = >{
						f(e, "click", e = >{
							e.stopPropagation();
							e = e.currentTarget.dataset.arrow;
							l.$ptzBgActive.classList.add("jessibuca-ptz-bg-active-show"),
							l.$ptzBgActive.classList.add("jessibuca-ptz-bg-active-" + e),
							l.$ptzControlCircular.classList.add("jessibuca-ptz-control-" + e),
							o.emit(v.ptz, e),
							setTimeout(() = >{
								l.$ptzBgActive.classList.remove("jessibuca-ptz-bg-active-show"),
								ee.forEach(e = >{
									l.$ptzBgActive.classList.remove("jessibuca-ptz-bg-active-" + e),
									l.$ptzControlCircular.classList.remove("jessibuca-ptz-control-" + e)
								}),
								o.emit(v.ptz, "stop")
							},
							300)
						})
					})),
					o._opt.hasControl && o._opt.controlAutoHide && (f(o.$container, "mouseover", () = >{
						o.fullscreen || b(l.$controls, "display", "block")
					}), f(o.$container, "mouseout", () = >{
						b(l.$controls, "display", "none")
					})),
					o._opt.playType === m && (f(l.$playbackNarrow, "click", e = >{
						e.stopPropagation(),
						o.playback && o.playback.narrowPrecision()
					}), f(l.$playbackExpand, "click", e = >{
						e.stopPropagation(),
						o.playback && o.playback.expandPrecision()
					}), f(l.$playbackTimeList, "click", e = >{
						const t = he(e);
						t.matches("div.jessibuca-playback-time-minute-one") && o.playback && o.playback.seek(t.dataset)
					})),
					A.quality && (f(l.$qualityMenu, "mouseover", () = >{
						l.$qualityMenuList.classList.add("jessibuca-quality-menu-shown")
					}), f(l.$qualityMenu, "mouseout", () = >{
						l.$qualityMenuList.classList.remove("jessibuca-quality-menu-shown")
					}), f(l.$qualityMenuList, "click", e = >{
						const t = he(e);
						if (t.matches("div.jessibuca-quality-menu-item")) {
							const e = t.dataset;
							o.streamQuality = e.quality
						}
					})),
					A.zoom && (f(l.$zoomExpand, "click", e = >{
						e.stopPropagation()
					}), f(l.$zoomNarrow, "click", e = >{
						e.stopPropagation()
					}), f(l.$zoomStop, "click", e = >{
						e.stopPropagation()
					}))
				}
				if (e._opt.hotKey) {
					var u = e,
					d = this;
					const p = u["events"]["proxy"],
					g = {};
					function h(e, t) {
						g[e] ? g[e].push(t) : g[e] = [t]
					}
					h(27, () = >{
						u.fullscreen && (u.fullscreen = !1)
					}),
					h(38, () = >{
						u.volume += .05
					}),
					h(40, () = >{
						u.volume -= .05
					}),
					p(window, "keydown", e = >{
						if (d.isFocus) {
							const d = document.activeElement.tagName.toUpperCase(),
							t = document.activeElement.getAttribute("contenteditable");
							if ("INPUT" !== d && "TEXTAREA" !== d && "" !== t && "true" !== t) {
								const d = g[e.keyCode];
								d && (e.preventDefault(), d.forEach(e = >e()))
							}
						}
					})
				}
				this.player.debug.log("Control", "init")
			}
			destroy() {
				this.$poster && this.player.$container.removeChild(this.$poster),
				this.$loading && this.player.$container.removeChild(this.$loading),
				this.$controls && this.player.$container.removeChild(this.$controls),
				this.$playBig && this.player.$container.removeChild(this.$playBig),
				this.$recording && this.player.$container.removeChild(this.$recording),
				this.player.debug.log("control", "destroy")
			}
			autoSize() {
				const e = this.player,
				t = (e.$container.style.padding = "0 0", e.width),
				i = e.height,
				r = t / i,
				s = e.video.$videoElement.width / e.video.$videoElement.height;
				if (r > s) {
					const r = (t - i * s) / 2;
					e.$container.style.padding = `0 $ {
						r
					}
					px`
				} else {
					const r = (i - t / s) / 2;
					e.$container.style.padding = r + "px 0"
				}
			}
		}
		ht(".jessibuca-container{position:relative;width:100%;height:100%;overflow:hidden}.jessibuca-container.jessibuca-fullscreen-web{position:fixed;z-index:9999;left:0;top:0;right:0;bottom:0;width:100vw!important;height:100vh!important;background:#000}");
		class O {
			static init() {
				for (var e in O.types = {
					avc1: [],
					avcC: [],
					hvc1: [],
					hvcC: [],
					btrt: [],
					dinf: [],
					dref: [],
					esds: [],
					ftyp: [],
					hdlr: [],
					mdat: [],
					mdhd: [],
					mdia: [],
					mfhd: [],
					minf: [],
					moof: [],
					moov: [],
					mp4a: [],
					mvex: [],
					mvhd: [],
					sdtp: [],
					stbl: [],
					stco: [],
					stsc: [],
					stsd: [],
					stsz: [],
					stts: [],
					tfdt: [],
					tfhd: [],
					traf: [],
					trak: [],
					trun: [],
					trex: [],
					tkhd: [],
					vmhd: [],
					smhd: []
				},
				O.types) O.types.hasOwnProperty(e) && (O.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
				let t = O.constants = {};
				t.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]),
				t.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
				t.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
				t.STSC = t.STCO = t.STTS,
				t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				t.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
				t.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
				t.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
				t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
				t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
			}
			static box(e) {
				let t = 8,
				i = null,
				r = Array.prototype.slice.call(arguments, 1),
				s = r.length;
				for (let e = 0; e < s; e++) t += r[e].byteLength; (i = new Uint8Array(t))[0] = t >>> 24 & 255,
				i[1] = t >>> 16 & 255,
				i[2] = t >>> 8 & 255,
				i[3] = 255 & t,
				i.set(e, 4);
				let n = 8;
				for (let e = 0; e < s; e++) i.set(r[e], n),
				n += r[e].byteLength;
				return i
			}
			static generateInitSegment(e) {
				let t = O.box(O.types.ftyp, O.constants.FTYP),
				i = O.moov(e),
				r = new Uint8Array(t.byteLength + i.byteLength);
				return r.set(t, 0),
				r.set(i, t.byteLength),
				r
			}
			static moov(e) {
				var t = O.mvhd(e.timescale, e.duration),
				i = O.trak(e),
				e = O.mvex(e);
				return O.box(O.types.moov, t, i, e)
			}
			static mvhd(e, t) {
				return O.box(O.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
			}
			static trak(e) {
				return O.box(O.types.trak, O.tkhd(e), O.mdia(e))
			}
			static tkhd(e) {
				var t = e.id,
				i = e.duration,
				r = e.presentWidth,
				e = e.presentHeight;
				return O.box(O.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0, e >>> 8 & 255, 255 & e, 0, 0]))
			}
			static mdia(e) {
				return O.box(O.types.mdia, O.mdhd(e), O.hdlr(e), O.minf(e))
			}
			static mdhd(e) {
				var t = e.timescale,
				e = e.duration;
				return O.box(O.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, 85, 196, 0, 0]))
			}
			static hdlr(e) {
				e = "audio" === e.type ? O.constants.HDLR_AUDIO: O.constants.HDLR_VIDEO;
				return O.box(O.types.hdlr, e)
			}
			static minf(e) {
				var t = "audio" === e.type ? O.box(O.types.smhd, O.constants.SMHD) : O.box(O.types.vmhd, O.constants.VMHD);
				return O.box(O.types.minf, t, O.dinf(), O.stbl(e))
			}
			static dinf() {
				return O.box(O.types.dinf, O.box(O.types.dref, O.constants.DREF))
			}
			static stbl(e) {
				return O.box(O.types.stbl, O.stsd(e), O.box(O.types.stts, O.constants.STTS), O.box(O.types.stsc, O.constants.STSC), O.box(O.types.stsz, O.constants.STSZ), O.box(O.types.stco, O.constants.STCO))
			}
			static stsd(e) {
				return "audio" === e.type ? O.box(O.types.stsd, O.constants.STSD_PREFIX, O.mp4a(e)) : "avc" === e.videoType ? O.box(O.types.stsd, O.constants.STSD_PREFIX, O.avc1(e)) : O.box(O.types.stsd, O.constants.STSD_PREFIX, O.hvc1(e))
			}
			static mp4a(e) {
				var t = e.channelCount,
				i = e.audioSampleRate,
				t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
				return O.box(O.types.mp4a, t, O.esds(e))
			}
			static esds(e) {
				var e = e.config || [],
				t = e.length,
				t = new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e).concat([6, 1, 2]));
				return O.box(O.types.esds, t)
			}
			static avc1(e) {
				var t = e.avcc,
				i = e.codecWidth,
				e = e.codecHeight,
				i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, e >>> 8 & 255, 255 & e, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
				return O.box(O.types.avc1, i, O.box(O.types.avcC, t))
			}
			static hvc1(e) {
				var t = e.avcc,
				i = e.codecWidth,
				e = e.codecHeight,
				i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, e >>> 8 & 255, 255 & e, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
				return O.box(O.types.hvc1, i, O.box(O.types.hvcC, t))
			}
			static mvex(e) {
				return O.box(O.types.mvex, O.trex(e))
			}
			static trex(e) {
				e = e.id,
				e = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
				return O.box(O.types.trex, e)
			}
			static moof(e, t) {
				return O.box(O.types.moof, O.mfhd(e.sequenceNumber), O.traf(e, t))
			}
			static mfhd(e) {
				e = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
				return O.box(O.types.mfhd, e)
			}
			static traf(e, t) {
				var i = e.id,
				i = O.box(O.types.tfhd, new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i])),
				t = O.box(O.types.tfdt, new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])),
				r = O.sdtp(e),
				e = O.trun(e, r.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
				return O.box(O.types.traf, i, t, e, r)
			}
			static sdtp(e) {
				let t = new Uint8Array(5),
				i = e.flags;
				return t[4] = i.isLeading << 6 | i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy,
				O.box(O.types.sdtp, t)
			}
			static trun(e, t) {
				let i = new Uint8Array(28);
				t += 36,
				i.set([0, 0, 15, 1, 0, 0, 0, 1, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0);
				var t = e.duration,
				r = e.size,
				s = e.flags,
				e = e.cts;
				return i.set([t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.isNonSync, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e], 12),
				O.box(O.types.trun, i)
			}
			static mdat(e) {
				return O.box(O.types.mdat, e)
			}
		}
		function At(e) {
			let s = {
				width: 0,
				height: 0,
				profile: 0,
				level: 0
			};
			e = e.slice(5);
			do {
				let t = {};
				if (e.length < 23) break;
				if (t.configurationVersion = e[0], 1 != t.configurationVersion) break;
				t.general_profile_space = e[1] >> 6 & 3, t.general_tier_flag = e[1] >> 5 & 1, t.general_profile_idc = 31 & e[1], t.general_profile_compatibility_flags = e[2] << 24 | e[3] << 16 | e[4] << 8 | e[5], t.general_constraint_indicator_flags = e[6] << 24 | e[7] << 16 | e[8] << 8 | e[9], t.general_constraint_indicator_flags = t.general_constraint_indicator_flags << 16 | e[10] << 8 | e[11], t.general_level_idc = e[12], t.min_spatial_segmentation_idc = (15 & e[13]) << 8 | e[14], t.parallelismType = 3 & e[15], t.chromaFormat = 3 & e[16], t.bitDepthLumaMinus8 = 7 & e[17], t.bitDepthChromaMinus8 = 7 & e[18], t.avgFrameRate = e[19] << 8 | e[20], t.constantFrameRate = e[21] >> 6 & 3, t.numTemporalLayers = e[21] >> 3 & 7, t.temporalIdNested = e[21] >> 2 & 1, t.lengthSizeMinusOne = 3 & e[21];
				let i = e[22], r = e.slice(23);
				for (let e = 0; e < i && !(r.length < 3); e++) {
					var n = 63 & r[0],
					a = r[1] << 8 | r[2];
					r = r.slice(3);
					for (let e = 0; e < a && !(r.length < 2); e++) {
						var o = r[0] << 8 | r[1];
						if (r.length < 2 + o) break;
						if (r = r.slice(2), 33 == n) {
							let e = new Uint8Array(o);
							e.set(r.slice(0, o), 0),
							t.psps = function(e) {
								let t = {},
								i = e.length,
								r = [],
								s = new nt(e);
								s.read(1),
								s.read(6),
								s.read(6),
								s.read(3);
								for (let e = 2; e < i; e++) e + 2 < i && 3 == s.look(24) ? (r.push(s.read(8)), r.push(s.read(8)), e += 2, s.read(8)) : r.push(s.read(8));
								let n = new Uint8Array(r),
								a = new nt(n);
								var o;
								return t.sps_video_parameter_set_id = a.read(4),
								t.sps_max_sub_layers_minus1 = a.read(3),
								t.sps_temporal_id_nesting_flag = a.read(1),
								t.profile_tier_level = function(t, i) {
									let r = {};
									r.profile_space = t.read(2),
									r.tier_flag = t.read(1),
									r.profile_idc = t.read(5),
									r.profile_compatibility_flags = t.read(32),
									r.general_progressive_source_flag = t.read(1),
									r.general_interlaced_source_flag = t.read(1),
									r.general_non_packed_constraint_flag = t.read(1),
									r.general_frame_only_constraint_flag = t.read(1),
									t.read(32),
									t.read(12),
									r.level_idc = t.read(8),
									r.sub_layer_profile_present_flag = [],
									r.sub_layer_level_present_flag = [];
									for (let e = 0; e < i; e++) r.sub_layer_profile_present_flag[e] = t.read(1),
									r.sub_layer_level_present_flag[e] = t.read(1);
									if (0 < i) for (let e = i; e < 8; e++) t.read(2);
									r.sub_layer_profile_space = [],
									r.sub_layer_tier_flag = [],
									r.sub_layer_profile_idc = [],
									r.sub_layer_profile_compatibility_flag = [],
									r.sub_layer_progressive_source_flag = [],
									r.sub_layer_interlaced_source_flag = [],
									r.sub_layer_non_packed_constraint_flag = [],
									r.sub_layer_frame_only_constraint_flag = [],
									r.sub_layer_level_idc = [];
									for (let e = 0; e < i; e++) r.sub_layer_profile_present_flag[e] && (r.sub_layer_profile_space[e] = t.read(2), r.sub_layer_tier_flag[e] = t.read(1), r.sub_layer_profile_idc[e] = t.read(5), r.sub_layer_profile_compatibility_flag[e] = t.read(32), r.sub_layer_progressive_source_flag[e] = t.read(1), r.sub_layer_interlaced_source_flag[e] = t.read(1), r.sub_layer_non_packed_constraint_flag[e] = t.read(1), r.sub_layer_frame_only_constraint_flag[e] = t.read(1), t.read(32), t.read(12)),
									r.sub_layer_level_present_flag[e] ? r.sub_layer_level_idc[e] = t.read(8) : r.sub_layer_level_idc[e] = 1;
									return r
								} (a, t.sps_max_sub_layers_minus1),
								t.sps_seq_parameter_set_id = a.read_golomb(),
								t.chroma_format_idc = a.read_golomb(),
								3 == t.chroma_format_idc ? t.separate_colour_plane_flag = a.read(1) : t.separate_colour_plane_flag = 0,
								t.pic_width_in_luma_samples = a.read_golomb(),
								t.pic_height_in_luma_samples = a.read_golomb(),
								t.conformance_window_flag = a.read(1),
								t.conformance_window_flag ? (e = 1 + (t.chroma_format_idc < 2), o = 1 + (t.chroma_format_idc < 3), t.conf_win_left_offset = a.read_golomb() * o, t.conf_win_right_offset = a.read_golomb() * o, t.conf_win_top_offset = a.read_golomb() * e, t.conf_win_bottom_offset = a.read_golomb() * e) : (t.conf_win_left_offset = 0, t.conf_win_right_offset = 0, t.conf_win_top_offset = 0, t.conf_win_bottom_offset = 0),
								t
							} (e),
							s.profile = t.general_profile_idc,
							s.level = t.general_level_idc / 30,
							s.width = t.psps.pic_width_in_luma_samples - (t.psps.conf_win_left_offset + t.psps.conf_win_right_offset),
							s.height = t.psps.pic_height_in_luma_samples - (t.psps.conf_win_top_offset + t.psps.conf_win_bottom_offset)
						}
						r = r.slice(o)
					}
				}
			} while ( 0 );
			return s.codecWidth = s.width || 1920,
			s.codecHeight = s.height || 1080,
			s.videoType = "hevc",
			s
		}
		O.init();
		class pt extends n {
			constructor(e) {
				super(),
				this.player = e,
				this.isAvc = !0,
				this.mediaSource = new window.MediaSource,
				this.sourceBuffer = null,
				this.hasInit = !1,
				this.isInitInfo = !1,
				this.cacheTrack = {},
				this.timeInit = !1,
				this.sequenceNumber = 0,
				this.mediaSourceOpen = !1,
				this.dropping = !1,
				this.firstRenderTime = null,
				this.$videoElement = null,
				this.mediaSourceAppendBufferFull = !1,
				this.mediaSourceAppendBufferError = !1,
				this.isDecodeFirstIIframe = !1,
				this.prevTimestamp = null,
				this.mediaSourceObjectURL = window.URL.createObjectURL(this.mediaSource),
				e._opt.mseUseCanvasRender ? (this.$videoElement = document.createElement("video"), this.$videoElement.src = this.mediaSourceObjectURL, this.initVideoEvents()) : (this.player.video.$videoElement.src = this.mediaSourceObjectURL, this.$videoElement = this.player.video.$videoElement);
				const {
					proxy: t
				} = e["events"];
				t(this.mediaSource, "sourceopen", () = >{
					this.mediaSourceOpen = !0,
					this.player && this.player.emit(v.mseSourceOpen)
				}),
				t(this.mediaSource, "sourceclose", () = >{
					this.player && this.player.emit(v.mseSourceClose)
				}),
				t(this.mediaSource, "sourceended", () = >{
					this.player && this.player.emit(v.mseSourceended)
				}),
				e.debug.log("MediaSource", "init")
			}
			destroy() {
				this.stop(),
				this.mediaSource = null,
				this.mediaSourceOpen = !1,
				this.sourceBuffer = null,
				this.hasInit = !1,
				this.isInitInfo = !1,
				this.sequenceNumber = 0,
				this.cacheTrack = null,
				this.timeInit = !1,
				this.mediaSourceAppendBufferFull = !1,
				this.mediaSourceAppendBufferError = !1,
				this.isDecodeFirstIIframe = !1,
				this.prevTimestamp = null,
				this.$videoElement && (this.player._opt.mseUseCanvasRender && (this.$videoElement.src = "", this.$videoElement.removeAttribute("src")), this.$videoElement = null),
				this.mediaSourceObjectURL && (window.URL.revokeObjectURL(this.mediaSourceObjectURL), this.mediaSourceObjectURL = null),
				this.off(),
				this.player.debug.log("MediaSource", "destroy")
			}
			get state() {
				return this.mediaSource && this.mediaSource.readyState
			}
			get isStateOpen() {
				return "open" === this.state
			}
			get isStateClosed() {
				return "closed" === this.state
			}
			get isStateEnded() {
				return "ended" === this.state
			}
			get duration() {
				return this.mediaSource && this.mediaSource.duration
			}
			set duration(e) {
				this.mediaSource.duration = e
			}
			initVideoEvents() {
				const e = this.player.events["proxy"];
				e(this.$videoElement, "canplay", () = >{
					this.player.debug.log("MediaSource", "video canplay"),
					this.$videoElement.play().then(() = >{
						this.player.debug.log("MediaSource", "video play")
					}).
					catch(e = >{
						this.player.debug.warn("MediaSource", "video play error ", e)
					})
				}),
				e(this.$videoElement, "waiting", () = >{
					this.player.debug.log("MediaSource", "video waiting")
				}),
				e(this.$videoElement, "timeupdate", e = >{
					e = parseInt(e.timeStamp, 10);
					this.player.emit(v.videoTimeUpdate, e)
				})
			}
			decodeVideo(t, i, e, r) {
				const s = this.player;
				if (s) if (this.hasInit) {
					if (e && 0 === t[1]) {
						const i = 15 & t[0];
						let e = {};
						7 == i ? e = at(t) : 12 == i && (e = At(t));
						const r = this.player.video.videoInfo;
						e.codecWidth === r.width && e.codecHeight === r.height || (this.player.debug.warn("MediaSource", `width or height is update, width $ {
							r.width
						} - >$ {
							e.codecWidth
						},
						height $ {
							r.height
						} - >` + e.codecHeight), this.isInitInfo = !1, this.player.video.init = !1)
					}
					if (!this.isDecodeFirstIIframe && e && (this.isDecodeFirstIIframe = !0), this.isDecodeFirstIIframe) {
						null === this.firstRenderTime && (this.firstRenderTime = i);
						const s = i - this.firstRenderTime;
						this._decodeVideo(t, s, e, r)
					} else this.player.debug.warn("MediaSource", "decodeVideo isDecodeFirstIIframe false")
				} else if (e && 0 === t[1]) {
					const r = 15 & t[0]; (s.video.updateVideoInfo({
						encTypeCode: r
					}), 12 != r || window.MediaSource && window.MediaSource.isTypeSupported(Z)) ? (s._times.decodeStart || (s._times.decodeStart = g()), this.hasInit = this._decodeConfigurationRecord(t, i, e, r)) : this.emit(d.mediaSourceH265NotSupport)
				}
			}
			_decodeConfigurationRecord(e, t, i, r) {
				let s = e.slice(5),
				n = {};
				if (7 === r ? n = at(e) : 12 === r && (n = At(e)), 0 === n.codecWidth && 0 === n.codecHeight) return this.player.debug.error("MediaSource", "_decodeConfigurationRecord", n),
				this.emit(d.mediaSourceH265NotSupport),
				!1;
				e = {
					id: 1,
					type: "video",
					timescale: 1e3,
					duration: 0,
					avcc: s,
					codecWidth: n.codecWidth,
					codecHeight: n.codecHeight,
					videoType: n.videoType
				},
				e = O.generateInitSegment(e);
				return this.isAvc = 7 === r,
				this.appendBuffer(e.buffer),
				this.sequenceNumber = 0,
				this.cacheTrack = null,
				!(this.timeInit = !1)
			}
			_decodeVideo(e, s, t, i) {
				const n = this.player;
				var e = e.slice(5),
				r = e.byteLength,
				a = (new Date).getTime(),
				a = (this.prevTimestamp || (this.prevTimestamp = a), a - this.prevTimestamp); (a < 5 || 500 < a) && n.debug.warn("MediaSource", "_decodeVideo diff time is ", a);
				const o = this.$videoElement,
				l = n._opt.videoBufferDelay;
				if (1 < o.buffered.length && (this.removeBuffer(o.buffered.start(0), o.buffered.end(0)), this.timeInit = !1), this.dropping && s - this.cacheTrack.dts > l) n.debug.warn("MediaSource", "dropping time is ", s - this.cacheTrack.dts),
				this.dropping = !1,
				this.cacheTrack = {};
				else if (this.cacheTrack && s >= this.cacheTrack.dts) {
					let e = 8 + this.cacheTrack.size,
					t = new Uint8Array(e),
					i = (t[0] = e >>> 24 & 255, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = 255 & e, t.set(O.types.mdat, 4), t.set(this.cacheTrack.data, 8), this.cacheTrack.duration = s - this.cacheTrack.dts, O.moof(this.cacheTrack, this.cacheTrack.dts)),
					r = new Uint8Array(i.byteLength + t.byteLength);
					r.set(i, 0),
					r.set(t, i.byteLength),
					this.appendBuffer(r.buffer),
					n.handleRender(),
					n.updateStats({
						fps: !0,
						ts: s,
						buf: n.demux && n.demux.delay || 0
					}),
					n._times.videoStart || (n._times.videoStart = g(), n.handlePlayToRenderTimes())
				} else n.debug.log("MediaSource", `timeInit set false, cacheTrack = {}
				now dts is $ {
					s
				},
				cacheTrack dts is` + (this.cacheTrack && this.cacheTrack.dts)),
				this.timeInit = !1,
				this.cacheTrack = {};
				this.cacheTrack || (this.cacheTrack = {}),
				this.cacheTrack.id = 1,
				this.cacheTrack.sequenceNumber = ++this.sequenceNumber,
				this.cacheTrack.size = r,
				this.cacheTrack.dts = s,
				this.cacheTrack.cts = i,
				this.cacheTrack.isKeyframe = t,
				this.cacheTrack.data = e,
				this.cacheTrack.flags = {
					isLeading: 0,
					dependsOn: t ? 2 : 1,
					isDependedOn: t ? 1 : 0,
					hasRedundancy: 0,
					isNonSync: t ? 0 : 1
				},
				this.timeInit || 1 !== o.buffered.length || (n.debug.log("MediaSource", "timeInit set true"), this.timeInit = !0, o.currentTime = o.buffered.end(0)),
				!this.isInitInfo && 0 < o.videoWidth && 0 < o.videoHeight && (n.debug.log("MediaSource", `updateVideoInfo: $ {
					o.videoWidth
				},
				` + o.videoHeight), n.video.updateVideoInfo({
					width: o.videoWidth,
					height: o.videoHeight
				}), n.video.initCanvasViewSize(), this.isInitInfo = !0),
				n._opt.mseUseCanvasRender && n.video.render({
					$video: o,
					ts: ts
				}),
				this.prevTimestamp = (new Date).getTime()
			}
			appendBuffer(e) {
				const {
					debug: t,
					events: {
						proxy: i
					}
				} = this.player;
				if (null === this.sourceBuffer) {
					const e = this.isAvc ? Y: Z;
					this.sourceBuffer = this.mediaSource.addSourceBuffer(e),
					i(this.sourceBuffer, "error", e = >{
						this.player.emit(v.mseSourceBufferError, e)
					}),
					i(this.sourceBuffer, "updateend", () = >{})
				}
				if (this.mediaSourceAppendBufferFull) t.error("MediaSource", "this.mediaSourceAppendBufferFull is true");
				else if (this.mediaSourceAppendBufferError) t.error("MediaSource", "this.mediaSourceAppendBufferError is true");
				else if (!1 === this.sourceBuffer.updating && this.isStateOpen) try {
					this.sourceBuffer.appendBuffer(e)
				} catch(e) {
					t.warn("MediaSource", "this.sourceBuffer.appendBuffer()", e.code, e),
					22 === e.code ? (this.stop(), this.mediaSourceAppendBufferFull = !0, this.emit(d.mediaSourceFull)) : 11 === e.code ? (this.stop(), this.mediaSourceAppendBufferError = !0, this.emit(d.mediaSourceAppendBufferError)) : (t.error("MediaSource", "appendBuffer error", e), this.player.emit(v.mseSourceBufferError, e))
				} else this.isStateClosed ? this.player.emit(d.mseSourceBufferError, "mediaSource is not attached to video or mediaSource is closed") : this.isStateEnded ? this.player.emit(d.mseSourceBufferError, "mediaSource is closed") : !0 === this.sourceBuffer.updating && this.player.emit(v.mseSourceBufferBusy)
			}
			stop() {
				this.abortSourceBuffer(),
				this.removeSourceBuffer(),
				this.endOfStream()
			}
			dropSourceBuffer(e) {
				const t = this.$videoElement;
				this.dropping = e,
				0 < t.buffered.length && 1 < t.buffered.end(0) - t.currentTime && (this.player.debug.warn("MediaSource", "dropSourceBuffer", `$video.buffered.end(0) is $ {
					t.buffered.end(0)
				} - $video.currentTime` + t.currentTime), t.currentTime = t.buffered.end(0))
			}
			removeBuffer(e, t) {
				if (this.isStateOpen && !1 === this.sourceBuffer.updating) try {
					this.sourceBuffer.remove(e, t)
				} catch(e) {
					this.player.debug.warn("MediaSource", "removeBuffer() error", e)
				} else this.player.debug.warn("MediaSource", "removeBuffer() this.isStateOpen is", this.isStateOpen, "this.sourceBuffer.updating", this.sourceBuffer.updating)
			}
			endOfStream() {
				if (this.isStateOpen) try {
					this.mediaSource.endOfStream()
				} catch(e) {
					this.player.debug.warn("MediaSource", "endOfStream() error", e)
				}
			}
			abortSourceBuffer() {
				this.isStateOpen && this.sourceBuffer && (this.sourceBuffer.abort(), this.sourceBuffer = null)
			}
			removeSourceBuffer() {
				if (!this.isStateClosed && this.mediaSource && this.sourceBuffer) try {
					this.mediaSource.removeSourceBuffer(this.sourceBuffer)
				} catch(e) {
					this.player.debug.warn("MediaSource", "removeSourceBuffer() error", e)
				}
			}
		}
		const gt = () = >"undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream,
		mt = () = >"wakeLock" in navigator;
		class vt {
			constructor(e) {
				if (this.player = e, this.enabled = !1, mt()) {
					this._wakeLock = null;
					const e = () = >{
						null !== this._wakeLock && "visible" === document.visibilityState && this.enable()
					};
					document.addEventListener("visibilitychange", e),
					document.addEventListener("fullscreenchange", e)
				} else gt() ? this.noSleepTimer = null: (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", "data:video/webm;base64,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"), this._addSourceToVideo(this.noSleepVideo, "mp4", "data:video/mp4;base64,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"), this.noSleepVideo.addEventListener("loadedmetadata", () = >{
					this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () = >{.5 < this.noSleepVideo.currentTime && (this.noSleepVideo.currentTime = Math.random())
					})
				}))
			}
			_addSourceToVideo(e, t, i) {
				var r = document.createElement("source");
				r.src = i,
				r.type = "video/" + t,
				e.appendChild(r)
			}
			get isEnabled() {
				return this.enabled
			}
			enable() {
				const t = this.player.debug;
				return mt() ? navigator.wakeLock.request("screen").then(e = >{
					this._wakeLock = e,
					this.enabled = !0,
					t.log("wakeLock", "Wake Lock active."),
					this._wakeLock.addEventListener("release", () = >{
						t.log("wakeLock", "Wake Lock released.")
					})
				}).
				catch(e = >{
					throw this.enabled = !1,
					t.error("wakeLock", e.name + ", " + e.message),
					e
				}) : gt() ? (this.disable(), this.noSleepTimer = window.setInterval(() = >{
					document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0))
				},
				15e3), this.enabled = !0, Promise.resolve()) : this.noSleepVideo.play().then(e = >(this.enabled = !0, e)).
				catch(e = >{
					throw this.enabled = !1,
					e
				})
			}
			disable() {
				const e = this.player.debug;
				mt() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : gt() ? this.noSleepTimer && (e.warn("wakeLock", "NoSleep now disabled for older iOS devices."), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(),
				this.enabled = !1
			}
		}
		var P = (e = re(function(e, t) {
			"undefined" != typeof window && (e.exports = function() {
				return i = {
					"./node_modules/eventemitter3/index.js": function(e, t, i) {
						var r = Object.prototype.hasOwnProperty,
						f = "~";
						function s() {}
						function n(e, t, i) {
							this.fn = e,
							this.context = t,
							this.once = i || !1
						}
						function a(e, t, i, r, s) {
							if ("function" != typeof i) throw new TypeError("The listener must be a function");
							i = new n(i, r || e, s),
							r = f ? f + t: t;
							return e._events[r] ? e._events[r].fn ? e._events[r] = [e._events[r], i] : e._events[r].push(i) : (e._events[r] = i, e._eventsCount++),
							e
						}
						function l(e, t) {
							0 == --e._eventsCount ? e._events = new s: delete e._events[t]
						}
						function o() {
							this._events = new s,
							this._eventsCount = 0
						}
						Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (f = !1)),
						o.prototype.eventNames = function() {
							var e, t, i = [];
							if (0 === this._eventsCount) return i;
							for (t in e = this._events) r.call(e, t) && i.push(f ? t.slice(1) : t);
							return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
						},
						o.prototype.listeners = function(e) {
							var e = f ? f + e: e,
							t = this._events[e];
							if (!t) return [];
							if (t.fn) return [t.fn];
							for (var i = 0,
							r = t.length,
							s = new Array(r); i < r; i++) s[i] = t[i].fn;
							return s
						},
						o.prototype.listenerCount = function(e) {
							e = f ? f + e: e,
							e = this._events[e];
							return e ? e.fn ? 1 : e.length: 0
						},
						o.prototype.emit = function(e, t, i, r, s, n) {
							var a = f ? f + e: e;
							if (!this._events[a]) return ! 1;
							var o, l = this._events[a],
							c = arguments.length;
							if (l.fn) {
								switch (l.once && this.removeListener(e, l.fn, void 0, !0), c) {
								case 1:
									return l.fn.call(l.context),
									!0;
								case 2:
									return l.fn.call(l.context, t),
									!0;
								case 3:
									return l.fn.call(l.context, t, i),
									!0;
								case 4:
									return l.fn.call(l.context, t, i, r),
									!0;
								case 5:
									return l.fn.call(l.context, t, i, r, s),
									!0;
								case 6:
									return l.fn.call(l.context, t, i, r, s, n),
									!0
								}
								for (h = 1, o = new Array(c - 1); h < c; h++) o[h - 1] = arguments[h];
								l.fn.apply(l.context, o)
							} else for (var u, d = l.length,
							h = 0; h < d; h++) switch (l[h].once && this.removeListener(e, l[h].fn, void 0, !0), c) {
							case 1:
								l[h].fn.call(l[h].context);
								break;
							case 2:
								l[h].fn.call(l[h].context, t);
								break;
							case 3:
								l[h].fn.call(l[h].context, t, i);
								break;
							case 4:
								l[h].fn.call(l[h].context, t, i, r);
								break;
							default:
								if (!o) for (u = 1, o = new Array(c - 1); u < c; u++) o[u - 1] = arguments[u];
								l[h].fn.apply(l[h].context, o)
							}
							return ! 0
						},
						o.prototype.on = function(e, t, i) {
							return a(this, e, t, i, !1)
						},
						o.prototype.once = function(e, t, i) {
							return a(this, e, t, i, !0)
						},
						o.prototype.removeListener = function(e, t, i, r) {
							e = f ? f + e: e;
							if (!this._events[e]) return this;
							if (!t) return l(this, e),
							this;
							var s = this._events[e];
							if (s.fn) s.fn !== t || r && !s.once || i && s.context !== i || l(this, e);
							else {
								for (var n = 0,
								a = [], o = s.length; n < o; n++)(s[n].fn !== t || r && !s[n].once || i && s[n].context !== i) && a.push(s[n]);
								a.length ? this._events[e] = 1 === a.length ? a[0] : a: l(this, e)
							}
							return this
						},
						o.prototype.removeAllListeners = function(e) {
							return e ? (e = f ? f + e: e, this._events[e] && l(this, e)) : (this._events = new s, this._eventsCount = 0),
							this
						},
						o.prototype.off = o.prototype.removeListener,
						o.prototype.addListener = o.prototype.on,
						o.prefixed = f,
						e.exports = o.EventEmitter = o
					},
					"./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, i) {
						var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/,
						n = /^([^\/?#]*)([^]*)$/,
						s = /(?:\/|^)\.(?=\/)/g,
						a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
						o = {
							buildAbsoluteURL: function(e, t, i) {
								if (i = i || {},
								e = e.trim(), !(t = t.trim())) {
									if (!i.alwaysNormalize) return e;
									var r = o.parseURL(e);
									if (r) return r.path = o.normalizePath(r.path),
									o.buildURLFromParts(r);
									throw new Error("Error trying to parse base URL.")
								}
								r = o.parseURL(t);
								if (!r) throw new Error("Error trying to parse relative URL.");
								if (r.scheme) return i.alwaysNormalize ? (r.path = o.normalizePath(r.path), o.buildURLFromParts(r)) : t;
								t = o.parseURL(e);
								if (!t) throw new Error("Error trying to parse base URL."); ! t.netLoc && t.path && "/" !== t.path[0] && (e = n.exec(t.path), t.netLoc = e[1], t.path = e[2]),
								t.netLoc && !t.path && (t.path = "/");
								var s, e = {
									scheme: t.scheme,
									netLoc: r.netLoc,
									path: null,
									params: r.params,
									query: r.query,
									fragment: r.fragment
								};
								return r.netLoc || (e.netLoc = t.netLoc, "/" === r.path[0]) || (r.path ? (s = (s = t.path).substring(0, s.lastIndexOf("/") + 1) + r.path, e.path = o.normalizePath(s)) : (e.path = t.path, r.params || (e.params = t.params, r.query || (e.query = t.query)))),
								null === e.path && (e.path = i.alwaysNormalize ? o.normalizePath(r.path) : r.path),
								o.buildURLFromParts(e)
							},
							parseURL: function(e) {
								e = r.exec(e);
								return e ? {
									scheme: e[1] || "",
									netLoc: e[2] || "",
									path: e[3] || "",
									params: e[4] || "",
									query: e[5] || "",
									fragment: e[6] || ""
								}: null
							},
							normalizePath: function(e) {
								for (e = e.split("").reverse().join("").replace(s, ""); e.length !== (e = e.replace(a, "")).length;);
								return e.split("").reverse().join("")
							},
							buildURLFromParts: function(e) {
								return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
							}
						};
						e.exports = o
					},
					"./node_modules/webworkify-webpack/index.js": function(e, t, h) {
						function n(i) {
							var r = {};
							function s(e) {
								if (r[e]) return r[e].exports;
								var t = r[e] = {
									i: e,
									l: !1,
									exports: {}
								};
								return i[e].call(t.exports, t, t.exports, s),
								t.l = !0,
								t.exports
							}
							s.m = i,
							s.c = r,
							s.i = function(e) {
								return e
							},
							s.d = function(e, t, i) {
								s.o(e, t) || Object.defineProperty(e, t, {
									configurable: !1,
									enumerable: !0,
									get: i
								})
							},
							s.r = function(e) {
								Object.defineProperty(e, "__esModule", {
									value: !0
								})
							},
							s.n = function(e) {
								var t = e && e.__esModule ?
								function() {
									return e.
								default
								}:
								function() {
									return e
								};
								return s.d(t, "a", t),
								t
							},
							s.o = function(e, t) {
								return Object.prototype.hasOwnProperty.call(e, t)
							},
							s.p = "/",
							s.oe = function(e) {
								throw console.error(e),
								e
							};
							var e = s(s.s = ENTRY_MODULE);
							return e.
						default || e
						}
						var f = "[\\.|\\-|\\+|\\w|/|@]+",
						A = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";
						function p(e) {
							return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
						}
						e.exports = function(d, e) {
							var i = {
								main: h.m
							},
							r = (e = e || {}).all ? {
								main: Object.keys(i.main)
							}: function(e) {
								for (var t = {
									main: [d]
								},
								i = {
									main: []
								},
								r = {
									main: {}
								};
								function(i) {
									return Object.keys(i).reduce(function(e, t) {
										return e || 0 < i[t].length
									},
									!1)
								} (t);) for (var s = Object.keys(t), n = 0; n < s.length; n++) {
									var a = s[n],
									o = t[a].pop();
									if (r[a] = r[a] || {},
									!r[a][o] && e[a][o]) {
										r[a][o] = !0,
										i[a] = i[a] || [],
										i[a].push(o);
										for (var l = function(e, t, i) {
											var r = {},
											s = (r[i] = [], t.toString());
											if (! (t = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/))) return r;
											for (var n, t = t[1], a = new RegExp("(\\\\n|\\W)" + p(t) + A, "g"); n = a.exec(s);)"dll-reference" !== n[3] && r[i].push(n[3]);
											for (a = new RegExp("\\(" + p(t) + '\\("(dll-reference\\s(' + f + '))"\\)\\)' + A, "g"); n = a.exec(s);) e[n[2]] || (r[i].push(n[1]), e[n[2]] = h(n[1]).m),
											r[n[2]] = r[n[2]] || [],
											r[n[2]].push(n[4]);
											for (var o, l = Object.keys(r), c = 0; c < l.length; c++) for (var u = 0; u < r[l[c]].length; u++) o = r[l[c]][u],
											isNaN( + o) || (r[l[c]][u] = +r[l[c]][u]);
											return r
										} (e, e[a][o], a), c = Object.keys(l), u = 0; u < c.length; u++) t[c[u]] = t[c[u]] || [],
										t[c[u]] = t[c[u]].concat(l[c[u]])
									}
								}
								return i
							} (i),
							s = "",
							t = (Object.keys(r).filter(function(e) {
								return "main" !== e
							}).forEach(function(t) {
								for (var e = 0; r[t][e];) e++;
								r[t].push(e),
								i[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
								s = s + "var " + t + " = (" + n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + r[t].map(function(e) {
									return JSON.stringify(e) + ": " + i[t][e].toString()
								}).join(",") + "});\n"
							}), s = s + "new ((" + n.toString().replace("ENTRY_MODULE", JSON.stringify(d)) + ")({" + r.main.map(function(e) {
								return JSON.stringify(e) + ": " + i.main[e].toString()
							}).join(",") + "}))(self);", new window.Blob([s], {
								type: "text/javascript"
							}));
							if (e.bare) return t;
							e = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(t),
							t = new window.Worker(e);
							return t.objectURL = e,
							t
						}
					},
					"./src/config.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "hlsDefaultConfig",
						function() {
							return E
						}),
						i.d(t, "mergeConfig",
						function() {
							return S
						}),
						i.d(t, "enableStreamingMode",
						function() {
							return T
						});
						var t = i("./src/controller/abr-controller.ts"),
						r = i("./src/controller/audio-stream-controller.ts"),
						s = i("./src/controller/audio-track-controller.ts"),
						n = i("./src/controller/subtitle-stream-controller.ts"),
						a = i("./src/controller/subtitle-track-controller.ts"),
						o = i("./src/controller/buffer-controller.ts"),
						l = i("./src/controller/timeline-controller.ts"),
						c = i("./src/controller/cap-level-controller.ts"),
						u = i("./src/controller/fps-controller.ts"),
						d = i("./src/controller/eme-controller.ts"),
						h = i("./src/controller/cmcd-controller.ts"),
						f = i("./src/utils/xhr-loader.ts"),
						A = i("./src/utils/fetch-loader.ts"),
						p = i("./src/utils/cues.ts"),
						g = i("./src/utils/mediakeys-helper.ts"),
						m = i("./src/utils/logger.ts");
						function v() {
							return (v = Object.assign ||
							function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var i, r = arguments[t];
									for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
								}
								return e
							}).apply(this, arguments)
						}
						function y(t, e) {
							var i, r = Object.keys(t);
							return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter(function(e) {
								return Object.getOwnPropertyDescriptor(t, e).enumerable
							})), r.push.apply(r, i)),
							r
						}
						function b(r) {
							for (var e = 1; e < arguments.length; e++) {
								var s = null != arguments[e] ? arguments[e] : {};
								e % 2 ? y(Object(s), !0).forEach(function(e) {
									var t, i;
									t = r,
									i = s[e = e],
									e in t ? Object.defineProperty(t, e, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : t[e] = i
								}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : y(Object(s)).forEach(function(e) {
									Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
								})
							}
							return r
						}
						var E = b(b({
							autoStartLoad: !0,
							startPosition: -1,
							defaultAudioCodec: void 0,
							debug: !1,
							capLevelOnFPSDrop: !1,
							capLevelToPlayerSize: !1,
							initialLiveManifestSize: 1,
							maxBufferLength: 30,
							backBufferLength: 1 / 0,
							maxBufferSize: 6e7,
							maxBufferHole: .1,
							highBufferWatchdogPeriod: 2,
							nudgeOffset: .1,
							nudgeMaxRetry: 3,
							maxFragLookUpTolerance: .25,
							liveSyncDurationCount: 3,
							liveMaxLatencyDurationCount: 1 / 0,
							liveSyncDuration: void 0,
							liveMaxLatencyDuration: void 0,
							maxLiveSyncPlaybackRate: 1,
							liveDurationInfinity: !1,
							liveBackBufferLength: null,
							maxMaxBufferLength: 600,
							enableWorker: !0,
							enableSoftwareAES: !0,
							manifestLoadingTimeOut: 1e4,
							manifestLoadingMaxRetry: 1,
							manifestLoadingRetryDelay: 1e3,
							manifestLoadingMaxRetryTimeout: 64e3,
							startLevel: void 0,
							levelLoadingTimeOut: 1e4,
							levelLoadingMaxRetry: 4,
							levelLoadingRetryDelay: 1e3,
							levelLoadingMaxRetryTimeout: 64e3,
							fragLoadingTimeOut: 2e4,
							fragLoadingMaxRetry: 6,
							fragLoadingRetryDelay: 1e3,
							fragLoadingMaxRetryTimeout: 64e3,
							startFragPrefetch: !1,
							fpsDroppedMonitoringPeriod: 5e3,
							fpsDroppedMonitoringThreshold: .2,
							appendErrorMaxRetry: 3,
							loader: f.
						default,
							fLoader: void 0,
							pLoader: void 0,
							xhrSetup: void 0,
							licenseXhrSetup: void 0,
							licenseResponseCallback: void 0,
							abrController: t.
						default,
							bufferController: o.
						default,
							capLevelController: c.
						default,
							fpsController: u.
						default,
							stretchShortVideoTrack: !1,
							maxAudioFramesDrift: 1,
							forceKeyFrameOnDiscontinuity: !0,
							abrEwmaFastLive: 3,
							abrEwmaSlowLive: 9,
							abrEwmaFastVoD: 3,
							abrEwmaSlowVoD: 9,
							abrEwmaDefaultEstimate: 5e5,
							abrBandWidthFactor: .95,
							abrBandWidthUpFactor: .7,
							abrMaxWithRealBitrate: !1,
							maxStarvationDelay: 4,
							maxLoadingDelay: 4,
							minAutoBitrate: 0,
							emeEnabled: !1,
							widevineLicenseUrl: void 0,
							drmSystemOptions: {},
							requestMediaKeySystemAccessFunc: g.requestMediaKeySystemAccess,
							testBandwidth: !0,
							progressive: !1,
							lowLatencyMode: !0,
							cmcd: void 0
						},
						{
							cueHandler: p.
						default,
							enableCEA708Captions: !0,
							enableWebVTT: !0,
							enableIMSC1: !0,
							captionsTextTrack1Label: "English",
							captionsTextTrack1LanguageCode: "en",
							captionsTextTrack2Label: "Spanish",
							captionsTextTrack2LanguageCode: "es",
							captionsTextTrack3Label: "Unknown CC",
							captionsTextTrack3LanguageCode: "",
							captionsTextTrack4Label: "Unknown CC",
							captionsTextTrack4LanguageCode: "",
							renderTextTracksNatively: !0
						}), {},
						{
							subtitleStreamController: n.SubtitleStreamController,
							subtitleTrackController: a.
						default,
							timelineController: l.TimelineController,
							audioStreamController: r.
						default,
							audioTrackController: s.
						default,
							emeController: d.
						default,
							cmcdController: h.
						default
						});
						function S(e, t) {
							if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
							if (void 0 !== t.liveMaxLatencyDurationCount && (void 0 === t.liveSyncDurationCount || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
							if (void 0 !== t.liveMaxLatencyDuration && (void 0 === t.liveSyncDuration || t.liveMaxLatencyDuration <= t.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
							return v({},
							e, t)
						}
						function T(e) {
							var t = e.loader;
							t !== A.
						default && t !== f.
						default ? (m.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), e.progressive = !1) : Object(A.fetchSupported)() && (e.loader = A.
						default, e.progressive = !0, e.enableSoftwareAES = !0, m.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))
						}
					},
					"./src/controller/abr-controller.ts": function(e, t, i) {
						i.r(t);
						var m = i("./src/polyfills/number.ts"),
						r = i("./src/utils/ewma-bandwidth-estimator.ts"),
						v = i("./src/events.ts"),
						y = i("./src/utils/buffer-helper.ts"),
						s = i("./src/errors.ts"),
						o = i("./src/types/loader.ts"),
						b = i("./src/utils/logger.ts");
						function n(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function a(e) {
							this.hls = void 0,
							this.lastLoadedFragLevel = 0,
							this._nextAutoLevel = -1,
							this.timer = void 0,
							this.onCheck = this._abandonRulesCheck.bind(this),
							this.fragCurrent = null,
							this.partCurrent = null,
							this.bitrateTestDelay = 0,
							this.bwEstimator = void 0;
							e = (this.hls = e).config;
							this.bwEstimator = new r.
						default(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate),
							this.registerListeners()
						} (i = a.prototype).registerListeners = function() {
							var e = this.hls;
							e.on(v.Events.FRAG_LOADING, this.onFragLoading, this),
							e.on(v.Events.FRAG_LOADED, this.onFragLoaded, this),
							e.on(v.Events.FRAG_BUFFERED, this.onFragBuffered, this),
							e.on(v.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.on(v.Events.ERROR, this.onError, this)
						},
						i.unregisterListeners = function() {
							var e = this.hls;
							e.off(v.Events.FRAG_LOADING, this.onFragLoading, this),
							e.off(v.Events.FRAG_LOADED, this.onFragLoaded, this),
							e.off(v.Events.FRAG_BUFFERED, this.onFragBuffered, this),
							e.off(v.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.off(v.Events.ERROR, this.onError, this)
						},
						i.destroy = function() {
							this.unregisterListeners(),
							this.clearTimer(),
							this.hls = this.onCheck = null,
							this.fragCurrent = this.partCurrent = null
						},
						i.onFragLoading = function(e, t) {
							var i = t.frag;
							i.type !== o.PlaylistLevelType.MAIN || this.timer || (this.fragCurrent = i, this.partCurrent = null != (i = t.part) ? i: null, this.timer = self.setInterval(this.onCheck, 100))
						},
						i.onLevelLoaded = function(e, t) {
							var i = this.hls.config;
							t.details.live ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive) : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD)
						},
						i._abandonRulesCheck = function() {
							var e = this.fragCurrent,
							t = this.partCurrent,
							i = this.hls,
							r = i.autoLevelEnabled,
							s = i.config,
							n = i.media;
							if (e && n) {
								var a = (t || e).stats,
								o = (t || e).duration;
								if (a.aborted) return b.logger.warn("frag loader destroy or aborted, disarm abandonRules"),
								this.clearTimer(),
								void(this._nextAutoLevel = -1);
								if (r && !n.paused && n.playbackRate && n.readyState) {
									var r = performance.now() - a.loading.start,
									l = Math.abs(n.playbackRate);
									if (! (r <= 500 * o / l)) {
										var c = i.levels,
										u = i.minAutoLevel,
										d = c[e.level],
										d = a.total || Math.max(a.loaded, Math.round(o * d.maxBitrate / 8)),
										h = Math.max(1, a.bwEstimate ? a.bwEstimate / 8 : 1e3 * a.loaded / r),
										d = (d - a.loaded) / h,
										f = n.currentTime,
										A = (y.BufferHelper.bufferInfo(n, f, s.maxBufferHole).end - f) / l;
										if (! (2 * o / l <= A || d <= A)) {
											for (var p = Number.POSITIVE_INFINITY,
											g = e.level - 1; u < g && !((p = o * c[g].maxBitrate / (6.4 * h)) < A); g--);
											d <= p || (n = this.bwEstimator.getEstimate(), b.logger.warn("Fragment " + e.sn + (t ? " part " + t.index: "") + " of level " + e.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + g + "\n      Current BW estimate: " + (Object(m.isFiniteNumber)(n) ? (n / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + d.toFixed(3) + " s\n      Estimated load time for the next fragment: " + p.toFixed(3) + " s\n      Time to underbuffer: " + A.toFixed(3) + " s"), i.nextLoadLevel = g, this.bwEstimator.sample(r, a.loaded), this.clearTimer(), e.loader && (this.fragCurrent = this.partCurrent = null, e.loader.abort()), i.trigger(v.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
												frag: e,
												part: t,
												stats: a
											}))
										}
									}
								}
							}
						},
						i.onFragLoaded = function(e, t) {
							var i, r, s, n, a = t.frag,
							t = t.part;
							a.type === o.PlaylistLevelType.MAIN && Object(m.isFiniteNumber)(a.sn) && (i = (t || a).stats, s = (t || a).duration, this.clearTimer(), this.lastLoadedFragLevel = a.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate && (r = ((n = this.hls.levels[a.level]).loaded ? n.loaded.bytes: 0) + i.loaded, s = (n.loaded ? n.loaded.duration: 0) + s, n.loaded = {
								bytes: r,
								duration: s
							},
							n.realBitrate = Math.round(8 * r / s)), a.bitrateTest && (n = {
								stats: i,
								frag: a,
								part: t,
								id: a.type
							},
							this.onFragBuffered(v.Events.FRAG_BUFFERED, n), a.bitrateTest = !1))
						},
						i.onFragBuffered = function(e, t) {
							var i, r = t.frag,
							t = t.part,
							t = (t || r).stats;
							t.aborted || r.type !== o.PlaylistLevelType.MAIN || "initSegment" === r.sn || (i = t.parsing.end - t.loading.start, this.bwEstimator.sample(i, t.loaded), t.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = i / 1e3: this.bitrateTestDelay = 0)
						},
						i.onError = function(e, t) {
							switch (t.details) {
							case s.ErrorDetails.FRAG_LOAD_ERROR:
							case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
								this.clearTimer()
							}
						},
						i.clearTimer = function() {
							self.clearInterval(this.timer),
							this.timer = void 0
						},
						i.getNextABRAutoLevel = function() {
							var e = this.fragCurrent,
							t = this.partCurrent,
							i = this.hls,
							r = i.maxAutoLevel,
							s = i.config,
							n = i.minAutoLevel,
							i = i.media,
							t = t ? t.duration: e ? e.duration: 0,
							e = i ? i.currentTime: 0,
							a = i && 0 !== i.playbackRate ? Math.abs(i.playbackRate) : 1,
							o = this.bwEstimator ? this.bwEstimator.getEstimate() : s.abrEwmaDefaultEstimate,
							i = (y.BufferHelper.bufferInfo(i, e, s.maxBufferHole).end - e) / a,
							e = this.findBestLevel(o, n, r, i, s.abrBandWidthFactor, s.abrBandWidthUpFactor);
							if (0 <= e) return e;
							b.logger.trace((i ? "rebuffering expected": "buffer is empty") + ", finding optimal quality level");
							var l, a = t ? Math.min(t, s.maxStarvationDelay) : s.maxStarvationDelay,
							c = s.abrBandWidthFactor,
							u = s.abrBandWidthUpFactor;
							return i || (l = this.bitrateTestDelay) && (a = (t ? Math.min(t, s.maxLoadingDelay) : s.maxLoadingDelay) - l, b.logger.trace("bitrate test took " + Math.round(1e3 * l) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * a) + " ms"), c = u = 1),
							e = this.findBestLevel(o, n, r, i + a, c, u),
							Math.max(e, 0)
						},
						i.findBestLevel = function(e, t, i, r, s, n) {
							for (var a, o = this.fragCurrent,
							l = this.partCurrent,
							c = this.lastLoadedFragLevel,
							u = this.hls.levels,
							d = u[c], h = !(null == d || null == (a = d.details) || !a.live), f = null == d ? void 0 : d.codecSet, A = l ? l.duration: o ? o.duration: 0, p = i; t <= p; p--) {
								var g = u[p];
								if (g && (!f || g.codecSet === f)) {
									var m, g = g.details,
									g = (l ? null == g ? void 0 : g.partTarget: null == g ? void 0 : g.averagetargetduration) || A,
									v = u[p].maxBitrate,
									y = v * g / (m = p <= c ? s * e: n * e);
									if (b.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + p + "/" + Math.round(m) + "/" + v + "/" + g + "/" + r + "/" + y), v < m && (!y || h && !this.bitrateTestDelay || y < r)) return p
								}
							}
							return - 1
						},
						n(a.prototype, [{
							key: "nextAutoLevel",
							get: function() {
								var e = this._nextAutoLevel,
								t = this.bwEstimator;
								if (! ( - 1 === e || t && t.canEstimate())) return e;
								t = this.getNextABRAutoLevel();
								return t = -1 !== e ? Math.min(e, t) : t
							},
							set: function(e) {
								this._nextAutoLevel = e
							}
						}]),
						t.
					default = a
					},
					"./src/controller/audio-stream-controller.ts": function(e, t, i) {
						i.r(t);
						var s = i("./src/polyfills/number.ts"),
						h = i("./src/controller/base-stream-controller.ts"),
						f = i("./src/events.ts"),
						n = i("./src/utils/buffer-helper.ts"),
						a = i("./src/controller/fragment-tracker.ts"),
						r = i("./src/types/level.ts"),
						u = i("./src/types/loader.ts"),
						A = i("./src/loader/fragment.ts"),
						d = i("./src/demux/chunk-cache.ts"),
						p = i("./src/demux/transmuxer-interface.ts"),
						g = i("./src/types/transmuxer.ts"),
						o = i("./src/controller/fragment-finders.ts"),
						l = i("./src/utils/discontinuities.ts"),
						c = i("./src/errors.ts"),
						m = i("./src/utils/logger.ts");
						function v() {
							return (v = Object.assign ||
							function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var i, r = arguments[t];
									for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
								}
								return e
							}).apply(this, arguments)
						}
						function y(e, t) {
							return (y = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						b = h.
					default,
						i = b,
						(E = S).prototype = Object.create(i.prototype),
						y(E.prototype.constructor = E, i),
						(E = S.prototype).onHandlerDestroying = function() {
							this._unregisterListeners(),
							this.mainDetails = null
						},
						E._registerListeners = function() {
							var e = this.hls;
							e.on(f.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.on(f.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.on(f.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.on(f.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.on(f.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
							e.on(f.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
							e.on(f.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
							e.on(f.Events.ERROR, this.onError, this),
							e.on(f.Events.BUFFER_RESET, this.onBufferReset, this),
							e.on(f.Events.BUFFER_CREATED, this.onBufferCreated, this),
							e.on(f.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
							e.on(f.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
							e.on(f.Events.FRAG_BUFFERED, this.onFragBuffered, this)
						},
						E._unregisterListeners = function() {
							var e = this.hls;
							e.off(f.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.off(f.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.off(f.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.off(f.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.off(f.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
							e.off(f.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
							e.off(f.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
							e.off(f.Events.ERROR, this.onError, this),
							e.off(f.Events.BUFFER_RESET, this.onBufferReset, this),
							e.off(f.Events.BUFFER_CREATED, this.onBufferCreated, this),
							e.off(f.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
							e.off(f.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
							e.off(f.Events.FRAG_BUFFERED, this.onFragBuffered, this)
						},
						E.onInitPtsFound = function(e, t) {
							var i = t.frag,
							r = t.id,
							t = t.initPTS;
							"main" === r && (r = i.cc, this.initPTS[i.cc] = t, this.log("InitPTS for cc: " + r + " found from main: " + t), this.videoTrackCC = r, this.state === h.State.WAITING_INIT_PTS && this.tick())
						},
						E.startLoad = function(e) {
							if (!this.levels) return this.startPosition = e,
							void(this.state = h.State.STOPPED);
							var t = this.lastCurrentTime;
							this.stopLoad(),
							this.setInterval(100),
							(this.fragLoadError = 0) < t && -1 === e ? (this.log("Override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = h.State.IDLE) : (this.loadedmetadata = !1, this.state = h.State.WAITING_TRACK),
							this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
							this.tick()
						},
						E.doTick = function() {
							switch (this.state) {
							case h.State.IDLE:
								this.doTickIdle();
								break;
							case h.State.WAITING_TRACK:
								var e = this.levels,
								t = this.trackId,
								t = null == e || null == (e = e[t]) ? void 0 : e.details;
								if (t) {
									if (this.waitForCdnTuneIn(t)) break;
									this.state = h.State.WAITING_INIT_PTS
								}
								break;
							case h.State.FRAG_LOADING_WAITING_RETRY:
								e = performance.now(),
								t = this.retryDate; (!t || t <= e || null != (t = this.media) && t.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = h.State.IDLE);
								break;
							case h.State.WAITING_INIT_PTS:
								var i, r, e = this.waitingData;
								e ? (t = e.frag, i = e.part, r = e.cache, e = e.complete, void 0 !== this.initPTS[t.cc] ? (this.waitingData = null, this.waitingVideoCC = -1, this.state = h.State.FRAG_LOADING, i = {
									frag: t,
									part: i,
									payload: r.flush(),
									networkDetails: null
								},
								this._handleFragmentLoadProgress(i), e && b.prototype._handleFragmentLoadComplete.call(this, i)) : this.videoTrackCC !== this.waitingVideoCC ? (m.logger.log("Waiting fragment cc (" + t.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment()) : (r = this.getLoadPosition(), e = n.BufferHelper.bufferInfo(this.mediaBuffer, r, this.config.maxBufferHole), Object(o.fragmentWithinToleranceTest)(e.end, this.config.maxFragLookUpTolerance, t) < 0 && (m.logger.log("Waiting fragment cc (" + t.cc + ") @ " + t.start + " cancelled because another fragment at " + e.end + " is needed"), this.clearWaitingFragment()))) : this.state = h.State.IDLE
							}
							this.onTickEnd()
						},
						E.clearWaitingFragment = function() {
							var e = this.waitingData;
							e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = h.State.IDLE)
						},
						E.onTickEnd = function() {
							var e, t = this.media;
							t && t.readyState && (e = (this.mediaBuffer || t).buffered, !this.loadedmetadata && e.length && (this.loadedmetadata = !0), this.lastCurrentTime = t.currentTime)
						},
						E.doTickIdle = function() {
							var e = this.hls,
							t = this.levels,
							i = this.media,
							r = this.trackId,
							s = e.config;
							if (t && t[r] && (i || !this.startFragRequested && s.startFragPrefetch)) {
								s = t[r].details;
								if (!s || s.live && this.levelLastLoaded !== r || this.waitForCdnTuneIn(s)) this.state = h.State.WAITING_TRACK;
								else {
									this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer || this.media, A.ElementaryStreamTypes.AUDIO, u.PlaylistLevelType.AUDIO));
									var t = this.getFwdBufferInfo(this.mediaBuffer || this.media, u.PlaylistLevelType.AUDIO);
									if (null !== t) {
										var r = t.len,
										n = this.getMaxBufferLength(),
										a = this.audioSwitch;
										if (! (n <= r) || a) {
											if (!a && this._streamEnded(t, s)) return e.trigger(f.Events.BUFFER_EOS, {
												type: "audio"
											}),
											void(this.state = h.State.ENDED);
											n = s.fragments[0].start,
											r = t.end,
											a = (a && (r = e = this.getLoadPosition(), s.PTSKnown && e < n && (t.end > n || t.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), i.currentTime = n + .05)), this.getNextFragment(r, s));
											a ? "identity" !== (null == (e = a.decryptdata) ? void 0 : e.keyFormat) || null != (t = a.decryptdata) && t.key ? this.loadFragment(a, s, r) : this.loadKey(a, s) : this.bufferFlushed = !0
										}
									}
								}
							}
						},
						E.getMaxBufferLength = function() {
							var e = b.prototype.getMaxBufferLength.call(this),
							t = this.getFwdBufferInfo(this.videoBuffer || this.media, u.PlaylistLevelType.MAIN);
							return null === t ? e: Math.max(e, t.len)
						},
						E.onMediaDetaching = function() {
							this.videoBuffer = null,
							b.prototype.onMediaDetaching.call(this)
						},
						E.onAudioTracksUpdated = function(e, t) {
							t = t.audioTracks;
							this.resetTransmuxer(),
							this.levels = t.map(function(e) {
								return new r.Level(e)
							})
						},
						E.onAudioTrackSwitching = function(e, t) {
							var i = !!t.url,
							t = (this.trackId = t.id, this.fragCurrent);
							null != t && t.loader && t.loader.abort(),
							this.fragCurrent = null,
							this.clearWaitingFragment(),
							i ? this.setInterval(100) : this.resetTransmuxer(),
							i ? (this.audioSwitch = !0, this.state = h.State.IDLE) : this.state = h.State.STOPPED,
							this.tick()
						},
						E.onManifestLoading = function() {
							this.mainDetails = null,
							this.fragmentTracker.removeAllFragments(),
							this.startPosition = this.lastCurrentTime = 0,
							this.bufferFlushed = !1
						},
						E.onLevelLoaded = function(e, t) {
							this.mainDetails = t.details
						},
						E.onAudioTrackLoaded = function(e, t) {
							var i = this.levels,
							r = t.details,
							t = t.id;
							if (i) {
								this.log("Track " + t + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + r.totalduration);
								var i = i[t],
								s = 0;
								if (r.live || null != (n = i.details) && n.live) {
									var n = this.mainDetails;
									if (r.fragments[0] || (r.deltaUpdateFailed = !0), r.deltaUpdateFailed || !n) return;
									s = !i.details && r.hasProgramDateTime && n.hasProgramDateTime ? (Object(l.alignMediaPlaylistByPDT)(r, n), r.fragments[0].start) : this.alignPlaylists(r, i.details)
								}
								i.details = r,
								this.levelLastLoaded = t,
								this.startFragRequested || !this.mainDetails && r.live || this.setStartPosition(i.details, s),
								this.state !== h.State.WAITING_TRACK || this.waitForCdnTuneIn(r) || (this.state = h.State.IDLE),
								this.tick()
							} else this.warn("Audio tracks were reset while loading level " + t)
						},
						E._handleFragmentLoadProgress = function(e) {
							var t, i, r, s, n = e.frag,
							a = e.part,
							e = e.payload,
							o = this.config,
							l = this.trackId,
							c = this.levels;
							c ? (c = c[l], console.assert(c, "Audio track is defined on fragment load progress"), t = c.details, console.assert(t, "Audio track details are defined on fragment load progress"), o = o.defaultAudioCodec || c.audioCodec || "mp4a.40.2", c = (c = this.transmuxer) || (this.transmuxer = new p.
						default(this.hls, u.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this))), i = this.initPTS[n.cc], r = null == (r = n.initSegment) ? void 0 : r.data, void 0 !== i ? (s = a ? a.index: -1, s = new g.ChunkMetadata(n.level, n.sn, n.stats.chunkCount, e.byteLength, s, -1 !== s), c.push(e, r, o, "", n, a, t.totalduration, !1, s, i)) : (m.logger.log("Unknown video PTS for cc " + n.cc + ", waiting for video PTS before demuxing audio frag " + n.sn + " of [" + t.startSN + " ," + t.endSN + "],track " + l), (this.waitingData = this.waitingData || {
								frag: n,
								part: a,
								cache: new d.
							default,
								complete: !1
							}).cache.push(new Uint8Array(e)), this.waitingVideoCC = this.videoTrackCC, this.state = h.State.WAITING_INIT_PTS)) : this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + n.sn + " of level " + n.level + " will not be buffered")
						},
						E._handleFragmentLoadComplete = function(e) {
							this.waitingData ? this.waitingData.complete = !0 : b.prototype._handleFragmentLoadComplete.call(this, e)
						},
						E.onBufferReset = function() {
							this.mediaBuffer = this.videoBuffer = null,
							this.loadedmetadata = !1
						},
						E.onBufferCreated = function(e, t) {
							var i = t.tracks.audio;
							i && (this.mediaBuffer = i.buffer),
							t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
						},
						E.onFragBuffered = function(e, t) {
							var i = t.frag,
							t = t.part;
							i.type === u.PlaylistLevelType.AUDIO && (this.fragContextChanged(i) ? this.warn("Fragment " + i.sn + (t ? " p: " + t.index: "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : ("initSegment" !== i.sn && (this.fragPrevious = i, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(f.Events.AUDIO_TRACK_SWITCHED, {
								id: this.trackId
							}))), this.fragBufferedComplete(i, t)))
						},
						E.onError = function(e, t) {
							switch (t.details) {
							case c.ErrorDetails.FRAG_LOAD_ERROR:
							case c.ErrorDetails.FRAG_LOAD_TIMEOUT:
							case c.ErrorDetails.KEY_LOAD_ERROR:
							case c.ErrorDetails.KEY_LOAD_TIMEOUT:
								this.onFragmentOrKeyLoadError(u.PlaylistLevelType.AUDIO, t);
								break;
							case c.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
							case c.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
								this.state !== h.State.ERROR && this.state !== h.State.STOPPED && (this.state = t.fatal ? h.State.ERROR: h.State.IDLE, this.warn(t.details + " while loading frag, switching to " + this.state + " state"));
								break;
							case c.ErrorDetails.BUFFER_FULL_ERROR:
								var i, r;
								"audio" !== t.parent || this.state !== h.State.PARSING && this.state !== h.State.PARSED || (i = !0, (i = (r = this.getFwdBufferInfo(this.mediaBuffer, u.PlaylistLevelType.AUDIO)) && .5 < r.len ? !this.reduceMaxBufferLength(r.len) : i) && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, b.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState())
							}
						},
						E.onBufferFlushed = function(e, t) {
							t.type === A.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0)
						},
						E._handleTransmuxComplete = function(e) {
							var t = "audio",
							i = this.hls,
							r = e.remuxResult,
							e = e.chunkMeta,
							s = this.getCurrentContext(e);
							if (!s) return this.warn("The loading context changed while buffering fragment " + e.sn + " of level " + e.level + ". This chunk will not be buffered."),
							void this.resetLiveStartWhenNotLoaded(e.level);
							var n, a, o, l = s.frag,
							s = s.part,
							c = r.audio,
							u = r.text,
							d = r.id3,
							r = r.initSegment;
							this.fragContextChanged(l) || (this.state = h.State.PARSING, this.audioSwitch && c && this.completeAudioSwitch(), null != r && r.tracks && (this._bufferInitSegment(r.tracks, l, e), i.trigger(f.Events.FRAG_PARSING_INIT_SEGMENT, {
								frag: l,
								id: t,
								tracks: r.tracks
							})), c && (r = c.startPTS, a = c.endPTS, o = c.startDTS, n = c.endDTS, s && (s.elementaryStreams[A.ElementaryStreamTypes.AUDIO] = {
								startPTS: r,
								endPTS: a,
								startDTS: o,
								endDTS: n
							}), l.setElementaryStreamInfo(A.ElementaryStreamTypes.AUDIO, r, a, o, n), this.bufferFragmentData(c, l, s, e)), null != d && null != (r = d.samples) && r.length && (a = v({
								frag: l,
								id: t
							},
							d), i.trigger(f.Events.FRAG_PARSING_METADATA, a)), u && (o = v({
								frag: l,
								id: t
							},
							u), i.trigger(f.Events.FRAG_PARSING_USERDATA, o)))
						},
						E._bufferInitSegment = function(e, t, i) {
							var r;
							this.state === h.State.PARSING && (e.video && delete e.video, (r = e.audio) && (r.levelCodec = r.codec, r.id = "audio", this.log("Init audio buffer, container:" + r.container + ", codecs[parsed]=[" + r.codec + "]"), this.hls.trigger(f.Events.BUFFER_CODECS, e), null != (e = r.initSegment) && e.byteLength && (r = {
								type: "audio",
								frag: t,
								part: null,
								chunkMeta: i,
								parent: t.type,
								data: e
							},
							this.hls.trigger(f.Events.BUFFER_APPENDING, r)), this.tick()))
						},
						E.loadFragment = function(e, t, i) {
							var r = this.fragmentTracker.getState(e);
							this.fragCurrent = e,
							!this.audioSwitch && r !== a.FragmentState.NOT_LOADED && r !== a.FragmentState.PARTIAL || ("initSegment" === e.sn ? this._loadInitSegment(e) : t.live && !Object(s.isFiniteNumber)(this.initPTS[e.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = h.State.WAITING_INIT_PTS) : (this.startFragRequested = !0, b.prototype.loadFragment.call(this, e, t, i)))
						},
						E.completeAudioSwitch = function() {
							var e = this.hls,
							t = this.media,
							i = this.trackId;
							t && (this.log("Switching audio track : flushing all audio"), b.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")),
							this.audioSwitch = !1,
							e.trigger(f.Events.AUDIO_TRACK_SWITCHED, {
								id: i
							})
						};
						var b, E, i = S;
						function S(e, t) {
							return (e = b.call(this, e, t, "[audio-stream-controller]") || this).videoBuffer = null,
							e.videoTrackCC = -1,
							e.waitingVideoCC = -1,
							e.audioSwitch = !1,
							e.trackId = -1,
							e.waitingData = null,
							e.mainDetails = null,
							e.bufferFlushed = !1,
							e._registerListeners(),
							e
						}
						t.
					default = i
					},
					"./src/controller/audio-track-controller.ts": function(e, t, i) {
						i.r(t);
						var l = i("./src/events.ts"),
						r = i("./src/errors.ts"),
						s = i("./src/controller/base-playlist-controller.ts"),
						n = i("./src/types/loader.ts");
						function a(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function o(e, t) {
							return (o = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						c = s.
					default,
						i = c,
						(s = u).prototype = Object.create(i.prototype),
						o(s.prototype.constructor = s, i),
						(s = u.prototype).registerListeners = function() {
							var e = this.hls;
							e.on(l.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.on(l.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.on(l.Events.LEVEL_LOADING, this.onLevelLoading, this),
							e.on(l.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
							e.on(l.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
							e.on(l.Events.ERROR, this.onError, this)
						},
						s.unregisterListeners = function() {
							var e = this.hls;
							e.off(l.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.off(l.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.off(l.Events.LEVEL_LOADING, this.onLevelLoading, this),
							e.off(l.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
							e.off(l.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
							e.off(l.Events.ERROR, this.onError, this)
						},
						s.destroy = function() {
							this.unregisterListeners(),
							this.tracks.length = 0,
							this.tracksInGroup.length = 0,
							c.prototype.destroy.call(this)
						},
						s.onManifestLoading = function() {
							this.tracks = [],
							this.groupId = null,
							this.tracksInGroup = [],
							this.trackId = -1,
							this.trackName = "",
							this.selectDefaultTrack = !0
						},
						s.onManifestParsed = function(e, t) {
							this.tracks = t.audioTracks || []
						},
						s.onAudioTrackLoaded = function(e, t) {
							var i, r = t.id,
							s = t.details,
							n = this.tracksInGroup[r];
							n ? (i = n.details, n.details = t.details, this.log("audioTrack " + r + " loaded [" + s.startSN + "-" + s.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, t, i))) : this.warn("Invalid audio track id " + r)
						},
						s.onLevelLoading = function(e, t) {
							this.switchLevel(t.level)
						},
						s.onLevelSwitching = function(e, t) {
							this.switchLevel(t.level)
						},
						s.switchLevel = function(e) {
							var t, i, e = this.hls.levels[e];
							null != e && e.audioGroupIds && (t = e.audioGroupIds[e.urlId], this.groupId !== t && (this.groupId = t, e = this.tracks.filter(function(e) {
								return ! t || e.groupId === t
							}), this.selectDefaultTrack && !e.some(function(e) {
								return e.
							default
							}) && (this.selectDefaultTrack = !1), i = {
								audioTracks: this.tracksInGroup = e
							},
							this.log("Updating audio tracks, " + e.length + ' track(s) found in "' + t + '" group-id'), this.hls.trigger(l.Events.AUDIO_TRACKS_UPDATED, i), this.selectInitialTrack()))
						},
						s.onError = function(e, t) {
							c.prototype.onError.call(this, e, t),
							!t.fatal && t.context && t.context.type === n.PlaylistContextType.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.retryLoadingOrFail(t)
						},
						s.setAudioTrack = function(e) {
							var t, i, r, s, n, a, o = this.tracksInGroup;
							e < 0 || e >= o.length ? this.warn("Invalid id passed to audio-track controller") : (this.clearTimer(), t = o[this.trackId], this.log("Now switching to audio-track index " + e), i = (o = o[e]).id, r = void 0 === (r = o.groupId) ? "": r, s = o.name, n = o.type, a = o.url, this.trackId = e, this.trackName = s, this.selectDefaultTrack = !1, this.hls.trigger(l.Events.AUDIO_TRACK_SWITCHING, {
								id: i,
								groupId: r,
								name: s,
								type: n,
								url: a
							}), o.details && !o.details.live || (e = this.switchParams(o.url, null == t ? void 0 : t.details), this.loadPlaylist(e)))
						},
						s.selectInitialTrack = function() {
							var e = this.tracksInGroup,
							e = (console.assert(e.length, "Initial audio track should be selected when tracks are known"), this.trackName),
							e = this.findTrackId(e) || this.findTrackId(); - 1 !== e ? this.setAudioTrack(e) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(l.Events.ERROR, {
								type: r.ErrorTypes.MEDIA_ERROR,
								details: r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
								fatal: !0
							}))
						},
						s.findTrackId = function(e) {
							for (var t = this.tracksInGroup,
							i = 0; i < t.length; i++) {
								var r = t[i];
								if ((!this.selectDefaultTrack || r.
							default) && (!e || e === r.name)) return r.id
							}
							return - 1
						},
						s.loadPlaylist = function(e) {
							var t = this.tracksInGroup[this.trackId];
							if (this.shouldLoadTrack(t)) {
								var i = t.id,
								r = t.groupId,
								t = t.url;
								if (e) try {
									t = e.addDirectives(t)
								} catch(e) {
									this.warn("Could not construct new URL with HLS Delivery Directives: " + e)
								}
								this.log("loading audio-track playlist for id: " + i),
								this.clearTimer(),
								this.hls.trigger(l.Events.AUDIO_TRACK_LOADING, {
									url: t,
									id: i,
									groupId: r,
									deliveryDirectives: e || null
								})
							}
						},
						a(u.prototype, [{
							key: "audioTracks",
							get: function() {
								return this.tracksInGroup
							}
						},
						{
							key: "audioTrack",
							get: function() {
								return this.trackId
							},
							set: function(e) {
								this.selectDefaultTrack = !1,
								this.setAudioTrack(e)
							}
						}]);
						var c, i = u;
						function u(e) {
							return (e = c.call(this, e, "[audio-track-controller]") || this).tracks = [],
							e.groupId = null,
							e.tracksInGroup = [],
							e.trackId = -1,
							e.trackName = "",
							e.selectDefaultTrack = !0,
							e.registerListeners(),
							e
						}
						t.
					default = i
					},
					"./src/controller/base-playlist-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return n
						});
						var o = i("./src/polyfills/number.ts"),
						l = i("./src/types/level.ts"),
						A = i("./src/controller/level-helper.ts"),
						r = i("./src/utils/logger.ts"),
						s = i("./src/errors.ts"),
						n = ((t = a.prototype).destroy = function() {
							this.clearTimer(),
							this.hls = this.log = this.warn = null
						},
						t.onError = function(e, t) {
							t.fatal && t.type === s.ErrorTypes.NETWORK_ERROR && this.clearTimer()
						},
						t.clearTimer = function() {
							clearTimeout(this.timer),
							this.timer = -1
						},
						t.startLoad = function() {
							this.canLoad = !0,
							this.retryCount = 0,
							this.loadPlaylist()
						},
						t.stopLoad = function() {
							this.canLoad = !1,
							this.clearTimer()
						},
						t.switchParams = function(e, t) {
							var i = null == t ? void 0 : t.renditionReports;
							if (i) for (var r = 0; r < i.length; r++) {
								var s = i[r],
								n = "" + s.URI;
								if (n === e.substr( - n.length)) {
									var a, n = parseInt(s["LAST-MSN"]),
									s = parseInt(s["LAST-PART"]);
									if (t && this.hls.config.lowLatencyMode && (a = Math.min(t.age - t.partTarget, t.targetduration), void 0 !== s && a > t.partTarget && (s += 1)), Object(o.isFiniteNumber)(n)) return new l.HlsUrlParameters(n, Object(o.isFiniteNumber)(s) ? s: void 0, l.HlsSkip.No)
								}
							}
						},
						t.loadPlaylist = function(e) {},
						t.shouldLoadTrack = function(e) {
							return this.canLoad && e && !!e.url && (!e.details || e.details.live)
						},
						t.playlistLoaded = function(e, t, i) {
							var r = this,
							s = t.details,
							n = t.stats,
							a = n.loading.end ? Math.max(0, self.performance.now() - n.loading.end) : 0;
							if (s.advancedDateTime = Date.now() - a, s.live || null != i && i.live) {
								if (s.reloaded(i), i && this.log("live playlist " + e + " " + (s.advanced ? "REFRESHED " + s.lastPartSn + "-" + s.lastPartIndex: "MISSED")), i && 0 < s.fragments.length && Object(A.mergeDetails)(i, s), this.canLoad && s.live) {
									var o, a = void 0,
									l = void 0;
									if (s.canBlockReload && s.endSN && s.advanced) {
										var c = this.hls.config.lowLatencyMode,
										u = s.lastPartSn,
										d = s.endSN,
										h = s.lastPartIndex,
										f = u === d,
										u = ( - 1 !== h ? (a = f ? d + 1 : u, l = f ? c ? 0 : h: h + 1) : a = d + 1, s.age),
										h = u + s.ageHeader,
										d = Math.min(h - s.partTarget, 1.5 * s.targetduration);
										if (0 < d && (i && d > i.tuneInGoal ? (this.warn("CDN Tune-in goal increased from: " + i.tuneInGoal + " to: " + d + " with playlist age: " + s.age), d = 0) : (a += h = Math.floor(d / s.targetduration), void 0 !== l && (l += Math.round(d % s.targetduration / s.partTarget)), this.log("CDN Tune-in age: " + s.ageHeader + "s last advanced " + u.toFixed(2) + "s goal: " + d + " skip sn " + h + " to part " + l)), s.tuneInGoal = d), o = this.getDeliveryDirectives(s, t.deliveryDirectives, a, l), c || !f) return void this.loadPlaylist(o)
									} else o = this.getDeliveryDirectives(s, t.deliveryDirectives, a, l);
									i = Object(A.computeReloadInterval)(s, n);
									void 0 !== a && s.canBlockReload && (i -= s.partTarget || 1),
									this.log("reload live playlist " + e + " in " + Math.round(i) + " ms"),
									this.timer = self.setTimeout(function() {
										return r.loadPlaylist(o)
									},
									i)
								}
							} else this.clearTimer()
						},
						t.getDeliveryDirectives = function(e, t, i, r) {
							var s = Object(l.getSkipValue)(e, i);
							return null != t && t.skip && e.deltaUpdateFailed && (i = t.msn, r = t.part, s = l.HlsSkip.No),
							new l.HlsUrlParameters(i, r, s)
						},
						t.retryLoadingOrFail = function(e) {
							var t, i = this,
							r = this.hls.config,
							s = this.retryCount < r.levelLoadingMaxRetry;
							return s ? (this.retryCount++, -1 < e.details.indexOf("LoadTimeOut") && null != (t = e.context) && t.deliveryDirectives ? (this.warn("retry playlist loading #" + this.retryCount + ' after "' + e.details + '"'), this.loadPlaylist()) : (t = Math.min(Math.pow(2, this.retryCount) * r.levelLoadingRetryDelay, r.levelLoadingMaxRetryTimeout), this.timer = self.setTimeout(function() {
								return i.loadPlaylist()
							},
							t), this.warn("retry playlist loading #" + this.retryCount + " in " + t + ' ms after "' + e.details + '"'))) : (this.warn('cannot recover from error "' + e.details + '"'), this.clearTimer(), e.fatal = !0),
							s
						},
						a);
						function a(e, t) {
							this.hls = void 0,
							this.timer = -1,
							this.canLoad = !1,
							this.retryCount = 0,
							this.log = void 0,
							this.warn = void 0,
							this.log = r.logger.log.bind(r.logger, t + ":"),
							this.warn = r.logger.warn.bind(r.logger, t + ":"),
							this.hls = e
						}
					},
					"./src/controller/base-stream-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "State",
						function() {
							return E
						}),
						i.d(t, "default",
						function() {
							return S
						});
						var l = i("./src/polyfills/number.ts"),
						t = i("./src/task-loop.ts"),
						d = i("./src/controller/fragment-tracker.ts"),
						a = i("./src/utils/buffer-helper.ts"),
						s = i("./src/utils/logger.ts"),
						h = i("./src/events.ts"),
						r = i("./src/errors.ts"),
						n = i("./src/types/transmuxer.ts"),
						o = i("./src/utils/mp4-tools.ts"),
						c = i("./src/utils/discontinuities.ts"),
						f = i("./src/controller/fragment-finders.ts"),
						u = i("./src/controller/level-helper.ts"),
						A = i("./src/loader/fragment-loader.ts"),
						p = i("./src/crypt/decrypter.ts"),
						g = i("./src/utils/time-ranges.ts"),
						m = i("./src/types/loader.ts");
						function v(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function y(e, t) {
							return (y = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						var b, E = {
							STOPPED: "STOPPED",
							IDLE: "IDLE",
							KEY_LOADING: "KEY_LOADING",
							FRAG_LOADING: "FRAG_LOADING",
							FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
							WAITING_TRACK: "WAITING_TRACK",
							PARSING: "PARSING",
							PARSED: "PARSED",
							BACKTRACKING: "BACKTRACKING",
							ENDED: "ENDED",
							ERROR: "ERROR",
							WAITING_INIT_PTS: "WAITING_INIT_PTS",
							WAITING_LEVEL: "WAITING_LEVEL"
						},
						S = (b = t.
					default, i = b, (t = T).prototype = Object.create(i.prototype), y(t.prototype.constructor = t, i), (t = T.prototype).doTick = function() {
							this.onTickEnd()
						},
						t.onTickEnd = function() {},
						t.startLoad = function(e) {},
						t.stopLoad = function() {
							this.fragmentLoader.abort();
							var e = this.fragCurrent;
							e && this.fragmentTracker.removeFragment(e),
							this.resetTransmuxer(),
							this.fragCurrent = null,
							this.fragPrevious = null,
							this.clearInterval(),
							this.clearNextTick(),
							this.state = E.STOPPED
						},
						t._streamEnded = function(e, t) {
							var i = this.fragCurrent,
							r = this.fragmentTracker;
							if (!t.live && i && i.sn >= t.endSN && !e.nextStart) {
								e = t.partList;
								if (null != e && e.length) return t = e[e.length - 1],
								a.BufferHelper.isBuffered(this.media, t.start + t.duration / 2);
								e = r.getState(i);
								return e === d.FragmentState.PARTIAL || e === d.FragmentState.OK
							}
							return ! 1
						},
						t.onMediaAttached = function(e, t) {
							t = this.media = this.mediaBuffer = t.media,
							this.onvseeking = this.onMediaSeeking.bind(this),
							this.onvended = this.onMediaEnded.bind(this),
							t.addEventListener("seeking", this.onvseeking),
							t.addEventListener("ended", this.onvended),
							t = this.config;
							this.levels && t.autoStartLoad && this.state === E.STOPPED && this.startLoad(t.startPosition)
						},
						t.onMediaDetaching = function() {
							var e = this.media;
							null != e && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0),
							e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null),
							this.media = this.mediaBuffer = null,
							this.loadedmetadata = !1,
							this.fragmentTracker.removeAllFragments(),
							this.stopLoad()
						},
						t.onMediaSeeking = function() {
							var e = this.config,
							t = this.fragCurrent,
							i = this.media,
							r = this.mediaBuffer,
							s = this.state,
							n = i ? i.currentTime: 0,
							r = a.BufferHelper.bufferInfo(r || i, n, e.maxBufferHole);
							this.log("media seeking to " + (Object(l.isFiniteNumber)(n) ? n.toFixed(3) : n) + ", state: " + s),
							s === E.ENDED ? this.resetLoadingState() : t && !r.len && (s = e.maxFragLookUpTolerance, e = t.start - s, s = n > t.start + t.duration + s, (n < e || s) && (s && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.loader.abort()), this.resetLoadingState())),
							i && (this.lastCurrentTime = n),
							this.loadedmetadata || r.len || (this.nextLoadPosition = this.startPosition = n),
							this.tickImmediate()
						},
						t.onMediaEnded = function() {
							this.startPosition = this.lastCurrentTime = 0
						},
						t.onKeyLoaded = function(e, t) {
							var i;
							this.state === E.KEY_LOADING && t.frag === this.fragCurrent && this.levels && (this.state = E.IDLE, (i = this.levels[t.frag.level].details) && this.loadFragment(t.frag, i, t.frag.start))
						},
						t.onHandlerDestroying = function() {
							this.stopLoad(),
							b.prototype.onHandlerDestroying.call(this)
						},
						t.onHandlerDestroyed = function() {
							this.state = E.STOPPED,
							this.hls.off(h.Events.KEY_LOADED, this.onKeyLoaded, this),
							this.fragmentLoader && this.fragmentLoader.destroy(),
							this.decrypter && this.decrypter.destroy(),
							this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null,
							b.prototype.onHandlerDestroyed.call(this)
						},
						t.loadKey = function(e, t) {
							this.log("Loading key for " + e.sn + " of [" + t.startSN + "-" + t.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level": "track") + " " + e.level),
							this.state = E.KEY_LOADING,
							this.fragCurrent = e,
							this.hls.trigger(h.Events.KEY_LOADING, {
								frag: e
							})
						},
						t.loadFragment = function(e, t, i) {
							this._loadFragForPlayback(e, t, i)
						},
						t._loadFragForPlayback = function(i, e, t) {
							var r = this;
							this._doFragLoad(i, e, t,
							function(e) {
								if (r.fragContextChanged(i)) return r.warn("Fragment " + i.sn + (e.part ? " p: " + e.part.index: "") + " of level " + i.level + " was dropped during download."),
								void r.fragmentTracker.removeFragment(i);
								i.stats.chunkCount++,
								r._handleFragmentLoadProgress(e)
							}).then(function(e) {
								if (e) {
									r.fragLoadError = 0;
									var t = r.state;
									if (!r.fragContextChanged(i)) return "payload" in e && (r.log("Loaded fragment " + i.sn + " of level " + i.level), r.hls.trigger(h.Events.FRAG_LOADED, e), r.state === E.BACKTRACKING) ? (r.fragmentTracker.backtrack(i, e), void r.resetFragmentLoading(i)) : void r._handleFragmentLoadComplete(e);
									t !== E.FRAG_LOADING && t !== E.BACKTRACKING && (r.fragCurrent || t !== E.PARSING) || (r.fragmentTracker.removeFragment(i), r.state = E.IDLE)
								}
							}).
							catch(function(e) {
								r.warn(e),
								r.resetFragmentLoading(i)
							})
						},
						t.flushMainBuffer = function(e, t, i) {
							void 0 === i && (i = null),
							e - t && (e = {
								startOffset: e,
								endOffset: t,
								type: i
							},
							this.fragLoadError = 0, this.hls.trigger(h.Events.BUFFER_FLUSHING, e))
						},
						t._loadInitSegment = function(n) {
							var a = this;
							this._doFragLoad(n).then(function(e) {
								if (e && !a.fragContextChanged(n) && a.levels) return e;
								throw new Error("init load aborted")
							}).then(function(i) {
								var r, s = a.hls,
								e = i.payload,
								t = n.decryptdata;
								return e && 0 < e.byteLength && t && t.key && t.iv && "AES-128" === t.method ? (r = self.performance.now(), a.decrypter.webCryptoDecrypt(new Uint8Array(e), t.key.buffer, t.iv.buffer).then(function(e) {
									var t = self.performance.now();
									return s.trigger(h.Events.FRAG_DECRYPTED, {
										frag: n,
										payload: e,
										stats: {
											tstart: r,
											tdecrypt: t
										}
									}),
									i.payload = e,
									i
								})) : i
							}).then(function(e) {
								var t = a.fragCurrent,
								i = a.hls,
								r = a.levels;
								if (!r) throw new Error("init load aborted, missing levels");
								r = r[n.level].details,
								console.assert(r, "Level details are defined when init segment is loaded"),
								r = n.stats;
								a.state = E.IDLE,
								a.fragLoadError = 0,
								n.data = new Uint8Array(e.payload),
								r.parsing.start = r.buffering.start = self.performance.now(),
								r.parsing.end = r.buffering.end = self.performance.now(),
								e.frag === t && i.trigger(h.Events.FRAG_BUFFERED, {
									stats: r,
									frag: t,
									part: null,
									id: n.type
								}),
								a.tick()
							}).
							catch(function(e) {
								a.warn(e),
								a.resetFragmentLoading(n)
							})
						},
						t.fragContextChanged = function(e) {
							var t = this.fragCurrent;
							return ! e || !t || e.level !== t.level || e.sn !== t.sn || e.urlId !== t.urlId
						},
						t.fragBufferedComplete = function(e, t) {
							var i = this.mediaBuffer || this.media;
							this.log("Buffered " + e.type + " sn: " + e.sn + (t ? " part: " + t.index: "") + " of " + ("[stream-controller]" === this.logPrefix ? "level": "track") + " " + e.level + " " + g.
						default.toString(a.BufferHelper.getBuffered(i))),
							this.state = E.IDLE,
							this.tick()
						},
						t._handleFragmentLoadComplete = function(e) {
							var t, i, r = this.transmuxer;
							r && (i = e.frag, t = e.part, e = !(e = e.partsLoaded) || 0 === e.length || e.some(function(e) {
								return ! e
							}), i = new n.ChunkMetadata(i.level, i.sn, i.stats.chunkCount + 1, 0, t ? t.index: -1, !e), r.flush(i))
						},
						t._handleFragmentLoadProgress = function(e) {},
						t._doFragLoad = function(e, t, i, r) {
							var s = this;
							if (void 0 === i && (i = null), !this.levels) throw new Error("frag load aborted, missing levels");
							if (i = Math.max(e.start, i || 0), this.config.lowLatencyMode && t) {
								var n = t.partList;
								if (n && r) {
									i > e.end && t.fragmentHint && (e = t.fragmentHint);
									var a, o = this.getNextPart(n, e, i);
									if ( - 1 < o) return a = n[o],
									this.log("Loading part sn: " + e.sn + " p: " + a.index + " cc: " + e.cc + " of playlist [" + t.startSN + "-" + t.endSN + "] parts [0-" + o + "-" + (n.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level": "track") + ": " + e.level + ", target: " + parseFloat(i.toFixed(3))),
									this.nextLoadPosition = a.start + a.duration,
									this.state = E.FRAG_LOADING,
									this.hls.trigger(h.Events.FRAG_LOADING, {
										frag: e,
										part: n[o],
										targetBufferTime: i
									}),
									this.doFragPartsLoad(e, n, o, r).
									catch(function(e) {
										return s.handleFragLoadError(e)
									});
									if (!e.url || this.loadedEndOfParts(n, i)) return Promise.resolve(null)
								}
							}
							return this.log("Loading fragment " + e.sn + " cc: " + e.cc + " " + (t ? "of [" + t.startSN + "-" + t.endSN + "] ": "") + ("[stream-controller]" === this.logPrefix ? "level": "track") + ": " + e.level + ", target: " + parseFloat(i.toFixed(3))),
							Object(l.isFiniteNumber)(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
							this.state = E.FRAG_LOADING,
							this.hls.trigger(h.Events.FRAG_LOADING, {
								frag: e,
								targetBufferTime: i
							}),
							this.fragmentLoader.load(e, r).
							catch(function(e) {
								return s.handleFragLoadError(e)
							})
						},
						t.doFragPartsLoad = function(o, l, t, c) {
							var u = this;
							return new Promise(function(n, e) {
								var a = []; !
								function i(r) {
									var s = l[r];
									u.fragmentLoader.loadPart(o, s, c).then(function(e) {
										var t = (a[s.index] = e).part,
										e = (u.hls.trigger(h.Events.FRAG_LOADED, e), l[r + 1]);
										if (!e || e.fragment !== o) return n({
											frag: o,
											part: t,
											partsLoaded: a
										});
										i(r + 1)
									}).
									catch(e)
								} (t)
							})
						},
						t.handleFragLoadError = function(e) {
							e = e.data;
							return e && e.details === r.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(h.Events.ERROR, e),
							null
						},
						t._handleTransmuxerFlush = function(e) {
							var t, i, r, s = this.getCurrentContext(e);
							s && this.state === E.PARSING ? (t = s.frag, i = s.part, s = s.level, r = self.performance.now(), t.stats.parsing.end = r, i && (i.stats.parsing.end = r), this.updateLevelTiming(t, i, s, e.partial)) : this.fragCurrent || (this.state = E.IDLE)
						},
						t.getCurrentContext = function(e) {
							var t = this.levels,
							i = e.level,
							r = e.sn,
							e = e.part;
							if (!t || !t[i]) return this.warn("Levels object was unset while buffering fragment " + r + " of level " + i + ". The current chunk will not be buffered."),
							null;
							t = t[i],
							i = -1 < e ? Object(u.getPartWith)(t, r, e) : null,
							e = i ? i.fragment: Object(u.getFragmentWithSN)(t, r, this.fragCurrent);
							return e ? {
								frag: e,
								part: i,
								level: t
							}: null
						},
						t.bufferFragmentData = function(e, t, i, r) {
							var s, n, a;
							e && this.state === E.PARSING && (a = e.data1, s = e.data2, (n = (n = a) && s ? Object(o.appendUint8Array)(a, s) : n) && n.length && (a = {
								type: e.type,
								frag: t,
								part: i,
								chunkMeta: r,
								parent: t.type,
								data: n
							},
							this.hls.trigger(h.Events.BUFFER_APPENDING, a), e.dropped && e.independent && !i && this.flushBufferGap(t)))
						},
						t.flushBufferGap = function(e) {
							var t, i, r = this.media;
							r && (a.BufferHelper.isBuffered(r, r.currentTime) ? (t = r.currentTime, r = a.BufferHelper.bufferInfo(r, t, 0), i = e.duration, i = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * i), r = Math.max(Math.min(e.start - i, r.end - i), t + i), e.start - r > i && this.flushMainBuffer(r, e.start)) : this.flushMainBuffer(0, e.start))
						},
						t.getFwdBufferInfo = function(e, t) {
							var i = this.config,
							r = this.getLoadPosition();
							if (!Object(l.isFiniteNumber)(r)) return null;
							var s = a.BufferHelper.bufferInfo(e, r, i.maxBufferHole);
							if (0 === s.len && void 0 !== s.nextStart) {
								t = this.fragmentTracker.getBufferedFrag(r, t);
								if (t && s.nextStart < t.end) return a.BufferHelper.bufferInfo(e, r, Math.max(s.nextStart, i.maxBufferHole))
							}
							return s
						},
						t.getMaxBufferLength = function(e) {
							var t = this.config,
							e = e ? Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : t.maxBufferLength;
							return Math.min(e, t.maxMaxBufferLength)
						},
						t.reduceMaxBufferLength = function(e) {
							var t = this.config,
							e = e || t.maxBufferLength;
							return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
						},
						t.getNextFragment = function(e, t) {
							var i = t.fragments,
							r = i.length;
							if (!r) return null;
							var s, n = this.config,
							a = i[0].start;
							if (t.live) {
								var o = n.initialLiveManifestSize;
								if (r < o) return this.warn("Not enough fragments to start playback (have: " + r + ", need: " + o + ")"),
								null;
								t.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (s = this.getInitialLiveFragment(t, i), this.startPosition = s ? this.hls.liveSyncPosition || s.start: e)
							} else e <= a && (s = i[0]);
							return s || (r = n.lowLatencyMode ? t.partEnd: t.fragmentEnd, s = this.getFragmentAtPosition(e, r, t)),
							s = null == (o = s) || !o.initSegment || null != (a = s) && a.initSegment.data || this.bitrateTest ? s: s.initSegment
						},
						t.getNextPart = function(e, t, i) {
							for (var r = -1,
							s = !1,
							n = !0,
							a = 0,
							o = e.length; a < o; a++) {
								var l = e[a],
								n = n && !l.independent;
								if ( - 1 < r && i < l.start) break;
								var c = l.loaded; ! c && (s || l.independent || n) && l.fragment === t && (r = a),
								s = c
							}
							return r
						},
						t.loadedEndOfParts = function(e, t) {
							e = e[e.length - 1];
							return e && t > e.start && e.loaded
						},
						t.getInitialLiveFragment = function(e, t) {
							var i, r = this.fragPrevious,
							s = null;
							return r ? (e.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r.programDateTime), s = Object(f.findFragmentByPDT)(t, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), s || ((i = r.sn + 1) >= e.startSN && i <= e.endSN && (i = t[i - e.startSN], r.cc === i.cc && this.log("Live playlist, switching playlist, load frag with next SN: " + (s = i).sn)), s || (s = Object(f.findFragWithCC)(t, r.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + s.sn))) : null !== (i = this.hls.liveSyncPosition) && (s = this.getFragmentAtPosition(i, this.bitrateTest ? e.fragmentEnd: e.edge, e)),
							s
						},
						t.getFragmentAtPosition = function(e, t, i) {
							var r, s = this.config,
							n = this.fragPrevious,
							a = i.fragments,
							o = i.endSN,
							l = i.fragmentHint,
							c = s.maxFragLookUpTolerance,
							s = !!(s.lowLatencyMode && i.partList && l);
							if (s && l && !this.bitrateTest && (a = a.concat(l), o = l.sn), r = e < t ? (l = t - c < e ? 0 : c, Object(f.findFragmentByPTS)(n, a, e, l)) : a[a.length - 1]) {
								t = r.sn - i.startSN,
								c = n && r.level === n.level,
								e = a[1 + t];
								if (this.fragmentTracker.getState(r) === d.FragmentState.BACKTRACKED) {
									r = null;
									for (var u = t; a[u] && this.fragmentTracker.getState(a[u]) === d.FragmentState.BACKTRACKED;) r = n ? a[u--] : a[--u];
									r = r || e
								} else n && r.sn === n.sn && !s && c && (r = r.sn < o && this.fragmentTracker.getState(e) !== d.FragmentState.OK ? (this.log("SN " + r.sn + " just loaded, load next one: " + e.sn), e) : null)
							}
							return r
						},
						t.synchronizeToLiveEdge = function(e) {
							var t, i, r, s, n = this.config,
							a = this.media;
							a && (t = this.hls.liveSyncPosition, i = a.currentTime, s = e.fragments[0].start, r = e.edge, s = i >= s - n.maxFragLookUpTolerance && i <= r, null !== t && a.duration > t && (i < t || !s) && (n = void 0 !== n.liveMaxLatencyDuration ? n.liveMaxLatencyDuration: n.liveMaxLatencyDurationCount * e.targetduration, (!s && a.readyState < 4 || i < r - n) && (this.loadedmetadata || (this.nextLoadPosition = t), a.readyState && (this.warn("Playback: " + i.toFixed(3) + " is located too far from the end of live sliding playlist: " + r + ", reset currentTime to : " + t.toFixed(3)), a.currentTime = t))))
						},
						t.alignPlaylists = function(e, t) {
							var i = this.levels,
							r = this.levelLastLoaded,
							s = this.fragPrevious,
							i = null !== r ? i[r] : null,
							r = e.fragments.length;
							if (!r) return this.warn("No fragments in live playlist"),
							0;
							var n = e.fragments[0].start,
							a = !t,
							o = e.alignedSliding && Object(l.isFiniteNumber)(n);
							return a || !o && !n ? (Object(c.alignStream)(s, i, e), a = e.fragments[0].start, this.log("Live playlist sliding: " + a.toFixed(2) + " start-sn: " + (t ? t.startSN: "na") + "->" + e.startSN + " prev-sn: " + (s ? s.sn: "na") + " fragments: " + r), a) : n
						},
						t.waitForCdnTuneIn = function(e) {
							return e.live && e.canBlockReload && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget)
						},
						t.setStartPosition = function(e, t) {
							var i, r = this.startPosition; - 1 !== (r = r < t ? -1 : r) && -1 !== this.lastCurrentTime || (i = e.startTimeOffset, Object(l.isFiniteNumber)(i) ? (r = t + i, i < 0 && (r += e.totalduration), r = Math.min(Math.max(t, r), t + e.totalduration), this.log("Start time offset " + i + " found in playlist, adjust startPosition to " + r), this.startPosition = r) : e.live ? r = this.hls.liveSyncPosition || t: this.startPosition = r = 0, this.lastCurrentTime = r),
							this.nextLoadPosition = r
						},
						t.getLoadPosition = function() {
							var e = this.media,
							t = 0;
							return this.loadedmetadata && e ? t = e.currentTime: this.nextLoadPosition && (t = this.nextLoadPosition),
							t
						},
						t.handleFragLoadAborted = function(e, t) {
							this.transmuxer && "initSegment" !== e.sn && e.stats.aborted && (this.warn("Fragment " + e.sn + (t ? " part" + t.index: "") + " of level " + e.level + " was aborted"), this.resetFragmentLoading(e))
						},
						t.resetFragmentLoading = function(e) {
							this.fragCurrent && this.fragContextChanged(e) || (this.state = E.IDLE)
						},
						t.onFragmentOrKeyLoadError = function(e, t) {
							var i, r;
							t.fatal || (i = t.frag) && i.type === e && (r = this.fragCurrent, console.assert(r && i.sn === r.sn && i.level === r.level && i.urlId === r.urlId, "Frag load error must match current frag to retry"), r = this.config, this.fragLoadError + 1 <= r.fragLoadingMaxRetry ? this.resetLiveStartWhenNotLoaded(i.level) || (r = Math.min(Math.pow(2, this.fragLoadError) * r.fragLoadingRetryDelay, r.fragLoadingMaxRetryTimeout), this.warn("Fragment " + i.sn + " of " + e + " " + i.level + " failed to load, retrying in " + r + "ms"), this.retryDate = self.performance.now() + r, this.fragLoadError++, this.state = E.FRAG_LOADING_WAITING_RETRY) : t.levelRetry ? (e === m.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = E.IDLE) : (s.logger.error(t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.hls.stopLoad(), this.state = E.ERROR))
						},
						t.afterBufferFlushed = function(e, t, i) {
							e && (e = a.BufferHelper.getBuffered(e), this.fragmentTracker.detectEvictedFragments(t, e, i), this.state === E.ENDED && this.resetLoadingState())
						},
						t.resetLoadingState = function() {
							this.fragCurrent = null,
							this.fragPrevious = null,
							this.state = E.IDLE
						},
						t.resetLiveStartWhenNotLoaded = function(e) {
							if (!this.loadedmetadata) {
								this.startFragRequested = !1;
								e = this.levels ? this.levels[e].details: null;
								if (null != e && e.live) return this.startPosition = -1,
								this.setStartPosition(e, 0),
								this.resetLoadingState(),
								!0;
								this.nextLoadPosition = this.startPosition
							}
							return ! 1
						},
						t.updateLevelTiming = function(s, e, n, a) {
							var o = this,
							l = n.details;
							console.assert( !! l, "level.details must be defined"),
							Object.keys(s.elementaryStreams).reduce(function(e, t) {
								var i = s.elementaryStreams[t];
								if (i) {
									var r = i.endPTS - i.startPTS;
									if (r <= 0) return o.warn("Could not parse fragment " + s.sn + " " + t + " duration reliably (" + r + ") resetting transmuxer to fallback to playlist timing"),
									o.resetTransmuxer(),
									e || !1;
									r = a ? 0 : Object(u.updateFragPTSDTS)(l, s, i.startPTS, i.endPTS, i.startDTS, i.endDTS);
									return o.hls.trigger(h.Events.LEVEL_PTS_UPDATED, {
										details: l,
										level: n,
										drift: r,
										type: t,
										frag: s,
										start: i.startPTS,
										end: i.endPTS
									}),
									!0
								}
								return e
							},
							!1) ? (this.state = E.PARSED, this.hls.trigger(h.Events.FRAG_PARSED, {
								frag: s,
								part: e
							})) : this.resetLoadingState()
						},
						t.resetTransmuxer = function() {
							this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
						},
						v(T.prototype, [{
							key: "state",
							get: function() {
								return this._state
							},
							set: function(e) {
								var t = this._state;
								t !== e && (this._state = e, this.log(t + "->" + e))
							}
						}]), T);
						function T(e, t, i) {
							var r;
							return (r = b.call(this) || this).hls = void 0,
							r.fragPrevious = null,
							r.fragCurrent = null,
							r.fragmentTracker = void 0,
							r.transmuxer = null,
							r._state = E.STOPPED,
							r.media = void 0,
							r.mediaBuffer = void 0,
							r.config = void 0,
							r.bitrateTest = !1,
							r.lastCurrentTime = 0,
							r.nextLoadPosition = 0,
							r.startPosition = 0,
							r.loadedmetadata = !1,
							r.fragLoadError = 0,
							r.retryDate = 0,
							r.levels = null,
							r.fragmentLoader = void 0,
							r.levelLastLoaded = null,
							r.startFragRequested = !1,
							r.decrypter = void 0,
							r.initPTS = [],
							r.onvseeking = null,
							r.onvended = null,
							r.logPrefix = "",
							r.log = void 0,
							r.warn = void 0,
							r.logPrefix = i,
							r.log = s.logger.log.bind(s.logger, i + ":"),
							r.warn = s.logger.warn.bind(s.logger, i + ":"),
							r.hls = e,
							r.fragmentLoader = new A.
						default(e.config),
							r.fragmentTracker = t,
							r.config = e.config,
							r.decrypter = new p.
						default(e, e.config),
							e.on(h.Events.KEY_LOADED, r.onKeyLoaded,
							function(e) {
								if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return e
							} (r)),
							r
						}
					},
					"./src/controller/buffer-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return n
						});
						var l = i("./src/polyfills/number.ts"),
						p = i("./src/events.ts"),
						g = i("./src/utils/logger.ts"),
						m = i("./src/errors.ts"),
						v = i("./src/utils/buffer-helper.ts"),
						t = i("./src/utils/mediasource-helper.ts"),
						a = i("./src/loader/fragment.ts"),
						r = i("./src/controller/buffer-operation-queue.ts"),
						s = Object(t.getMediaSource)(),
						c = /([ha]vc.)(?:\.[^.,]+)+/,
						n = ((i = o.prototype).hasSourceTypes = function() {
							return 0 < this.getSourceBufferTypes().length || 0 < Object.keys(this.pendingTracks).length
						},
						i.destroy = function() {
							this.unregisterListeners(),
							this.details = null
						},
						i.registerListeners = function() {
							var e = this.hls;
							e.on(p.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
							e.on(p.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.on(p.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.on(p.Events.BUFFER_RESET, this.onBufferReset, this),
							e.on(p.Events.BUFFER_APPENDING, this.onBufferAppending, this),
							e.on(p.Events.BUFFER_CODECS, this.onBufferCodecs, this),
							e.on(p.Events.BUFFER_EOS, this.onBufferEos, this),
							e.on(p.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
							e.on(p.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
							e.on(p.Events.FRAG_PARSED, this.onFragParsed, this),
							e.on(p.Events.FRAG_CHANGED, this.onFragChanged, this)
						},
						i.unregisterListeners = function() {
							var e = this.hls;
							e.off(p.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
							e.off(p.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.off(p.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.off(p.Events.BUFFER_RESET, this.onBufferReset, this),
							e.off(p.Events.BUFFER_APPENDING, this.onBufferAppending, this),
							e.off(p.Events.BUFFER_CODECS, this.onBufferCodecs, this),
							e.off(p.Events.BUFFER_EOS, this.onBufferEos, this),
							e.off(p.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
							e.off(p.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
							e.off(p.Events.FRAG_PARSED, this.onFragParsed, this),
							e.off(p.Events.FRAG_CHANGED, this.onFragChanged, this)
						},
						i._initSourceBuffer = function() {
							this.sourceBuffer = {},
							this.operationQueue = new r.
						default(this.sourceBuffer),
							this.listeners = {
								audio: [],
								video: [],
								audiovideo: []
							}
						},
						i.onManifestParsed = function(e, t) {
							var i = 2; (!t.audio || t.video) && t.altAudio || (i = 1),
							this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i,
							this.details = null,
							g.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
						},
						i.onMediaAttaching = function(e, t) {
							var i, t = this.media = t.media;
							t && s && ((i = this.mediaSource = new s).addEventListener("sourceopen", this._onMediaSourceOpen), i.addEventListener("sourceended", this._onMediaSourceEnded), i.addEventListener("sourceclose", this._onMediaSourceClose), t.src = self.URL.createObjectURL(i), this._objectUrl = t.src)
						},
						i.onMediaDetaching = function() {
							var e = this.media,
							t = this.mediaSource,
							i = this._objectUrl;
							if (t) {
								if (g.logger.log("[buffer-controller]: media source detaching"), "open" === t.readyState) try {
									t.endOfStream()
								} catch(e) {
									g.logger.warn("[buffer-controller]: onMediaDetaching: " + e.message + " while calling endOfStream")
								}
								this.onBufferReset(),
								t.removeEventListener("sourceopen", this._onMediaSourceOpen),
								t.removeEventListener("sourceended", this._onMediaSourceEnded),
								t.removeEventListener("sourceclose", this._onMediaSourceClose),
								e && (i && self.URL.revokeObjectURL(i), e.src === i ? (e.removeAttribute("src"), e.load()) : g.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),
								this.mediaSource = null,
								this.media = null,
								this._objectUrl = null,
								this.bufferCodecEventsExpected = this._bufferCodecEventsTotal,
								this.pendingTracks = {},
								this.tracks = {}
							}
							this.hls.trigger(p.Events.MEDIA_DETACHED, void 0)
						},
						i.onBufferReset = function() {
							var i = this;
							this.getSourceBufferTypes().forEach(function(t) {
								var e = i.sourceBuffer[t];
								try {
									e && (i.removeBufferListeners(t), i.mediaSource && i.mediaSource.removeSourceBuffer(e), i.sourceBuffer[t] = void 0)
								} catch(e) {
									g.logger.warn("[buffer-controller]: Failed to reset the " + t + " buffer", e)
								}
							}),
							this._initSourceBuffer()
						},
						i.onBufferCodecs = function(e, n) {
							var a = this,
							o = this.getSourceBufferTypes().length;
							Object.keys(n).forEach(function(e) {
								var t, i, r, s;
								o ? (t = a.tracks[e]) && "function" == typeof t.buffer.changeType && (i = (s = n[e]).codec, r = s.levelCodec, s = s.container, (t.levelCodec || t.codec).replace(c, "$1") !== (r || i).replace(c, "$1") && a.appendChangeType(e, s + ";codecs=" + (r || i))) : a.pendingTracks[e] = n[e]
							}),
							o || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
						},
						i.appendChangeType = function(t, i) {
							var r = this,
							s = this.operationQueue;
							s.append({
								execute: function() {
									var e = r.sourceBuffer[t];
									e && (g.logger.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + i), e.changeType(i)),
									s.shiftAndExecuteNext(t)
								},
								onStart: function() {},
								onComplete: function() {},
								onError: function(e) {
									g.logger.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
								}
							},
							t)
						},
						i.onBufferAppending = function(e, t) {
							var s = this,
							i = this.hls,
							r = this.operationQueue,
							n = this.tracks,
							a = t.data,
							o = t.type,
							l = t.frag,
							c = t.part,
							u = t.chunkMeta,
							d = u.buffering[o],
							t = self.performance.now(),
							h = (d.start = t, l.stats.buffering),
							f = c ? c.stats.buffering: null,
							t = (0 === h.start && (h.start = t), f && 0 === f.start && (f.start = t), n.audio),
							A = "audio" === o && 1 === u.id && "audio/mpeg" === (null == t ? void 0 : t.container);
							r.append({
								execute: function() {
									var e, t;
									d.executeStart = self.performance.now(),
									A && (e = s.sourceBuffer[o]) && (t = l.start - e.timestampOffset, .1 <= Math.abs(t) && (g.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + l.start + " (delta: " + t + ") sn: " + l.sn + ")"), e.timestampOffset = l.start)),
									s.appendExecutor(a, o)
								},
								onStart: function() {},
								onComplete: function() {
									var e, t = self.performance.now(),
									i = (d.executeEnd = d.end = t, 0 === h.first && (h.first = t), f && 0 === f.first && (f.first = t), s.sourceBuffer),
									r = {};
									for (e in i) r[e] = v.BufferHelper.getBuffered(i[e]);
									s.appendError = 0,
									s.hls.trigger(p.Events.BUFFER_APPENDED, {
										type: o,
										frag: l,
										part: c,
										chunkMeta: u,
										parent: l.type,
										timeRanges: r
									})
								},
								onError: function(e) {
									g.logger.error("[buffer-controller]: Error encountered while trying to append to the " + o + " SourceBuffer", e);
									var t = {
										type: m.ErrorTypes.MEDIA_ERROR,
										parent: l.type,
										details: m.ErrorDetails.BUFFER_APPEND_ERROR,
										err: e,
										fatal: !1
									};
									e.code === DOMException.QUOTA_EXCEEDED_ERR ? t.details = m.ErrorDetails.BUFFER_FULL_ERROR: (s.appendError++, t.details = m.ErrorDetails.BUFFER_APPEND_ERROR, s.appendError > i.config.appendErrorMaxRetry && (g.logger.error("[buffer-controller]: Failed " + i.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), t.fatal = !0)),
									i.trigger(p.Events.ERROR, t)
								}
							},
							o)
						},
						i.onBufferFlushing = function(e, i) {
							function t(t) {
								return {
									execute: r.removeExecutor.bind(r, t, i.startOffset, i.endOffset),
									onStart: function() {},
									onComplete: function() {
										r.hls.trigger(p.Events.BUFFER_FLUSHED, {
											type: t
										})
									},
									onError: function(e) {
										g.logger.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
									}
								}
							}
							var r = this,
							s = this.operationQueue;
							i.type ? s.append(t(i.type), i.type) : this.getSourceBufferTypes().forEach(function(e) {
								s.append(t(e), e)
							})
						},
						i.onFragParsed = function(e, t) {
							var i = this,
							r = t.frag,
							s = t.part,
							t = [],
							n = (s || r).elementaryStreams;
							n[a.ElementaryStreamTypes.AUDIOVIDEO] ? t.push("audiovideo") : (n[a.ElementaryStreamTypes.AUDIO] && t.push("audio"), n[a.ElementaryStreamTypes.VIDEO] && t.push("video")),
							0 === t.length && g.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + r.type + " level: " + r.level + " sn: " + r.sn),
							this.blockBuffers(function() {
								var e = self.performance.now(),
								e = (r.stats.buffering.end = e, s && (s.stats.buffering.end = e), (s || r).stats);
								i.hls.trigger(p.Events.FRAG_BUFFERED, {
									frag: r,
									part: s,
									stats: e,
									id: r.type
								})
							},
							t)
						},
						i.onFragChanged = function(e, t) {
							this.flushBackBuffer()
						},
						i.onBufferEos = function(e, r) {
							var s = this;
							this.getSourceBufferTypes().reduce(function(e, t) {
								var i = s.sourceBuffer[t];
								return r.type && r.type !== t || i && !i.ended && (i.ended = !0, g.logger.log("[buffer-controller]: " + t + " sourceBuffer now EOS")),
								e && !(i && !i.ended)
							},
							!0) && this.blockBuffers(function() {
								var e = s.mediaSource;
								e && "open" === e.readyState && e.endOfStream()
							})
						},
						i.onLevelUpdated = function(e, t) {
							t = t.details;
							t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
						},
						i.flushBackBuffer = function() {
							var e, t, i, r, s = this.hls,
							n = this.details,
							a = this.media,
							o = this.sourceBuffer;
							a && null !== n && (e = this.getSourceBufferTypes()).length && (i = n.live && null !== s.config.liveBackBufferLength ? s.config.liveBackBufferLength: s.config.backBufferLength, !Object(l.isFiniteNumber)(i) || i < 0 || (a = a.currentTime, t = n.levelTargetDuration, i = Math.max(i, t), r = Math.floor(a / t) * t - i, e.forEach(function(e) {
								var t = o[e];
								t && 0 < (t = v.BufferHelper.getBuffered(t)).length && r > t.start(0) && (s.trigger(p.Events.BACK_BUFFER_REACHED, {
									bufferEnd: r
								}), n.live && s.trigger(p.Events.LIVE_BACK_BUFFER_REACHED, {
									bufferEnd: r
								}), s.trigger(p.Events.BUFFER_FLUSHING, {
									startOffset: 0,
									endOffset: r,
									type: e
								}))
							})))
						},
						i.updateMediaElementDuration = function() {
							var e, t, i, r, s, n;
							this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState && (e = this.details, t = this.hls, s = this.media, i = this.mediaSource, r = e.fragments[0].start + e.totalduration, s = s.duration, n = Object(l.isFiniteNumber)(i.duration) ? i.duration: 0, e.live && t.config.liveDurationInfinity ? (g.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(e)) : (n < r && s < r || !Object(l.isFiniteNumber)(s)) && (g.logger.log("[buffer-controller]: Updating Media Source duration to " + r.toFixed(3)), i.duration = r))
						},
						i.updateSeekableRange = function(e) {
							var t = this.mediaSource,
							i = e.fragments;
							i.length && e.live && null != t && t.setLiveSeekableRange && (i = Math.max(0, i[0].start), e = Math.max(i, i + e.totalduration), t.setLiveSeekableRange(i, e))
						},
						i.checkPendingTracks = function() {
							var e = this.bufferCodecEventsExpected,
							t = this.operationQueue,
							i = this.pendingTracks,
							r = Object.keys(i).length; (r && !e || 2 === r) && (this.createSourceBuffers(i), this.pendingTracks = {},
							0 === (e = this.getSourceBufferTypes()).length ? this.hls.trigger(p.Events.ERROR, {
								type: m.ErrorTypes.MEDIA_ERROR,
								details: m.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
								fatal: !0,
								reason: "could not create source buffer for media codec(s)"
							}) : e.forEach(function(e) {
								t.executeNext(e)
							}))
						},
						i.createSourceBuffers = function(e) {
							var t = this.sourceBuffer,
							i = this.mediaSource;
							if (!i) throw Error("createSourceBuffers called when mediaSource was null");
							var r, s = 0;
							for (r in e) if (!t[r]) {
								var n = e[r];
								if (!n) throw Error("source buffer exists for track " + r + ", however track does not");
								var a = n.levelCodec || n.codec,
								o = n.container + ";codecs=" + a;
								g.logger.log("[buffer-controller]: creating sourceBuffer(" + o + ")");
								try {
									var l = t[r] = i.addSourceBuffer(o),
									c = r;
									this.addBufferListener(c, "updatestart", this._onSBUpdateStart),
									this.addBufferListener(c, "updateend", this._onSBUpdateEnd),
									this.addBufferListener(c, "error", this._onSBUpdateError),
									this.tracks[r] = {
										buffer: l,
										codec: a,
										container: n.container,
										levelCodec: n.levelCodec,
										id: n.id
									},
									s++
								} catch(e) {
									g.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + e.message),
									this.hls.trigger(p.Events.ERROR, {
										type: m.ErrorTypes.MEDIA_ERROR,
										details: m.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
										fatal: !1,
										error: e,
										mimeType: o
									})
								}
							}
							s && this.hls.trigger(p.Events.BUFFER_CREATED, {
								tracks: this.tracks
							})
						},
						i._onSBUpdateStart = function(e) {
							this.operationQueue.current(e).onStart()
						},
						i._onSBUpdateEnd = function(e) {
							var t = this.operationQueue;
							t.current(e).onComplete(),
							t.shiftAndExecuteNext(e)
						},
						i._onSBUpdateError = function(e, t) {
							g.logger.error("[buffer-controller]: " + e + " SourceBuffer error", t),
							this.hls.trigger(p.Events.ERROR, {
								type: m.ErrorTypes.MEDIA_ERROR,
								details: m.ErrorDetails.BUFFER_APPENDING_ERROR,
								fatal: !1
							});
							e = this.operationQueue.current(e);
							e && e.onError(t)
						},
						i.removeExecutor = function(e, t, i) {
							var r = this.media,
							s = this.mediaSource,
							n = this.operationQueue,
							a = this.sourceBuffer[e];
							if (!r || !s || !a) return g.logger.warn("[buffer-controller]: Attempting to remove from the " + e + " SourceBuffer, but it does not exist"),
							void n.shiftAndExecuteNext(e);
							r = Object(l.isFiniteNumber)(r.duration) ? r.duration: 1 / 0,
							s = Object(l.isFiniteNumber)(s.duration) ? s.duration: 1 / 0,
							t = Math.max(0, t),
							i = Math.min(i, r, s);
							t < i ? (g.logger.log("[buffer-controller]: Removing [" + t + "," + i + "] from the " + e + " SourceBuffer"), console.assert(!a.updating, e + " sourceBuffer must not be updating"), a.remove(t, i)) : n.shiftAndExecuteNext(e)
						},
						i.appendExecutor = function(e, t) {
							var i = this.operationQueue,
							r = this.sourceBuffer[t];
							if (!r) return g.logger.warn("[buffer-controller]: Attempting to append to the " + t + " SourceBuffer, but it does not exist"),
							void i.shiftAndExecuteNext(t);
							r.ended = !1,
							console.assert(!r.updating, t + " sourceBuffer must not be updating"),
							r.appendBuffer(e)
						},
						i.blockBuffers = function(e, t) {
							var i = this;
							if (! (t = void 0 === t ? this.getSourceBufferTypes() : t).length) return g.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),
							void Promise.resolve(e);
							var r = this.operationQueue,
							s = t.map(function(e) {
								return r.appendBlocker(e)
							});
							Promise.all(s).then(function() {
								e(),
								t.forEach(function(e) {
									var t = i.sourceBuffer[e];
									t && t.updating || r.shiftAndExecuteNext(e)
								})
							})
						},
						i.getSourceBufferTypes = function() {
							return Object.keys(this.sourceBuffer)
						},
						i.addBufferListener = function(e, t, i) {
							var r = this.sourceBuffer[e];
							r && (i = i.bind(this, e), this.listeners[e].push({
								event: t,
								listener: i
							}), r.addEventListener(t, i))
						},
						i.removeBufferListeners = function(e) {
							var t = this.sourceBuffer[e];
							t && this.listeners[e].forEach(function(e) {
								t.removeEventListener(e.event, e.listener)
							})
						},
						o);
						function o(e) {
							var r = this;
							this.details = null,
							this._objectUrl = null,
							this.operationQueue = void 0,
							this.listeners = void 0,
							this.hls = void 0,
							this.bufferCodecEventsExpected = 0,
							this._bufferCodecEventsTotal = 0,
							this.media = null,
							this.mediaSource = null,
							this.appendError = 0,
							this.tracks = {},
							this.pendingTracks = {},
							this.sourceBuffer = void 0,
							this._onMediaSourceOpen = function() {
								var e = r.hls,
								t = r.media,
								i = r.mediaSource;
								g.logger.log("[buffer-controller]: Media source opened"),
								t && (r.updateMediaElementDuration(), e.trigger(p.Events.MEDIA_ATTACHED, {
									media: t
								})),
								i && i.removeEventListener("sourceopen", r._onMediaSourceOpen),
								r.checkPendingTracks()
							},
							this._onMediaSourceClose = function() {
								g.logger.log("[buffer-controller]: Media source closed")
							},
							this._onMediaSourceEnded = function() {
								g.logger.log("[buffer-controller]: Media source ended")
							},
							this.hls = e,
							this._initSourceBuffer(),
							this.registerListeners()
						}
					},
					"./src/controller/buffer-operation-queue.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						});
						var n = i("./src/utils/logger.ts"),
						r = ((t = s.prototype).append = function(e, t) {
							var i = this.queues[t];
							i.push(e),
							1 === i.length && this.buffers[t] && this.executeNext(t)
						},
						t.insertAbort = function(e, t) {
							this.queues[t].unshift(e),
							this.executeNext(t)
						},
						t.appendBlocker = function(e) {
							var t, i = new Promise(function(e) {
								t = e
							}),
							r = {
								execute: t,
								onStart: function() {},
								onComplete: function() {},
								onError: function() {}
							};
							return this.append(r, e),
							i
						},
						t.executeNext = function(e) {
							var t = this.buffers,
							i = this.queues,
							r = t[e],
							i = i[e];
							if (i.length) {
								var s = i[0];
								try {
									s.execute()
								} catch(t) {
									n.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),
									s.onError(t),
									r && r.updating || (i.shift(), this.executeNext(e))
								}
							}
						},
						t.shiftAndExecuteNext = function(e) {
							this.queues[e].shift(),
							this.executeNext(e)
						},
						t.current = function(e) {
							return this.queues[e][0]
						},
						s);
						function s(e) {
							this.buffers = void 0,
							this.queues = {
								video: [],
								audio: [],
								audiovideo: []
							},
							this.buffers = e
						}
					},
					"./src/controller/cap-level-controller.ts": function(e, t, i) {
						i.r(t);
						var r = i("./src/events.ts");
						function s(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						} (i = a.prototype).setStreamController = function(e) {
							this.streamController = e
						},
						i.destroy = function() {
							this.unregisterListener(),
							this.hls.config.capLevelToPlayerSize && this.stopCapping(),
							this.media = null,
							this.clientRect = null,
							this.hls = this.streamController = null
						},
						i.registerListeners = function() {
							var e = this.hls;
							e.on(r.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
							e.on(r.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
							e.on(r.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.on(r.Events.BUFFER_CODECS, this.onBufferCodecs, this),
							e.on(r.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
						},
						i.unregisterListener = function() {
							var e = this.hls;
							e.off(r.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
							e.off(r.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
							e.off(r.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.off(r.Events.BUFFER_CODECS, this.onBufferCodecs, this),
							e.off(r.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
						},
						i.onFpsDropLevelCapping = function(e, t) {
							a.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
						},
						i.onMediaAttaching = function(e, t) {
							this.media = t.media instanceof HTMLVideoElement ? t.media: null
						},
						i.onManifestParsed = function(e, t) {
							var i = this.hls;
							this.restrictedLevels = [],
							this.firstLevel = t.firstLevel,
							i.config.capLevelToPlayerSize && t.video && this.startCapping()
						},
						i.onBufferCodecs = function(e, t) {
							this.hls.config.capLevelToPlayerSize && t.video && this.startCapping()
						},
						i.onMediaDetaching = function() {
							this.stopCapping()
						},
						i.detectPlayerSize = function() {
							var e, t;
							this.media && 0 < this.mediaHeight && 0 < this.mediaWidth && ((e = this.hls.levels).length && ((t = this.hls).autoLevelCapping = this.getMaxLevel(e.length - 1), t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping))
						},
						i.getMaxLevel = function(i) {
							var r = this,
							e = this.hls.levels;
							if (!e.length) return - 1;
							e = e.filter(function(e, t) {
								return a.isLevelAllowed(t, r.restrictedLevels) && t <= i
							});
							return this.clientRect = null,
							a.getMaxLevelByMediaSize(e, this.mediaWidth, this.mediaHeight)
						},
						i.startCapping = function() {
							this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
						},
						i.stopCapping = function() {
							this.restrictedLevels = [],
							this.firstLevel = -1,
							this.autoLevelCapping = Number.POSITIVE_INFINITY,
							this.timer && (self.clearInterval(this.timer), this.timer = void 0)
						},
						i.getDimensions = function() {
							if (this.clientRect) return this.clientRect;
							var e, t = this.media,
							i = {
								width: 0,
								height: 0
							};
							return t && (e = t.getBoundingClientRect(), i.width = e.width, i.height = e.height, i.width || i.height || (i.width = e.right - e.left || t.width || 0, i.height = e.bottom - e.top || t.height || 0)),
							this.clientRect = i
						},
						a.isLevelAllowed = function(e, t) {
							return - 1 === (t = void 0 === t ? [] : t).indexOf(e)
						},
						a.getMaxLevelByMediaSize = function(e, t, i) {
							if (!e || !e.length) return - 1;
							for (var r, s = e.length - 1,
							n = 0; n < e.length; n += 1) {
								var a = e[n];
								if ((a.width >= t || a.height >= i) && (!(r = e[n + 1]) || a.width !== r.width || a.height !== r.height)) {
									s = n;
									break
								}
							}
							return s
						},
						i = [{
							key: "contentScaleFactor",
							get: function() {
								var e = 1;
								try {
									e = self.devicePixelRatio
								} catch(e) {}
								return e
							}
						}],
						s((n = a).prototype, [{
							key: "mediaWidth",
							get: function() {
								return this.getDimensions().width * a.contentScaleFactor
							}
						},
						{
							key: "mediaHeight",
							get: function() {
								return this.getDimensions().height * a.contentScaleFactor
							}
						}]),
						s(n, i);
						var n = a;
						function a(e) {
							this.autoLevelCapping = void 0,
							this.firstLevel = void 0,
							this.media = void 0,
							this.restrictedLevels = void 0,
							this.timer = void 0,
							this.hls = void 0,
							this.streamController = void 0,
							this.clientRect = void 0,
							this.hls = e,
							this.autoLevelCapping = Number.POSITIVE_INFINITY,
							this.firstLevel = -1,
							this.media = null,
							this.restrictedLevels = [],
							this.timer = void 0,
							this.clientRect = null,
							this.registerListeners()
						}
						t.
					default = n
					},
					"./src/controller/cmcd-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return h
						});
						var r = i("./src/events.ts"),
						a = i("./src/types/cmcd.ts"),
						s = i("./src/utils/buffer-helper.ts"),
						o = i("./src/utils/logger.ts");
						function n(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function l(e, t, i) {
							t && n(e.prototype, t),
							i && n(e, i)
						}
						function u(e, t) {
							var i, r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
							if (r) return (r = r.call(e)).next.bind(r);
							if (Array.isArray(e) || (r = function(e) {
								if (e) {
									if ("string" == typeof e) return c(e, void 0);
									var t = Object.prototype.toString.call(e).slice(8, -1);
									return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name: t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, void 0) : void 0
								}
							} (e)) || t && e && "number" == typeof e.length) return r && (e = r),
							i = 0,
							function() {
								return i >= e.length ? {
									done: !0
								}: {
									done: !1,
									value: e[i++]
								}
							};
							throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}
						function c(e, t) { (null == t || t > e.length) && (t = e.length);
							for (var i = 0,
							r = new Array(t); i < t; i++) r[i] = e[i];
							return r
						}
						function d() {
							return (d = Object.assign ||
							function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var i, r = arguments[t];
									for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
								}
								return e
							}).apply(this, arguments)
						} (t = f.prototype).registerListeners = function() {
							var e = this.hls;
							e.on(r.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.on(r.Events.MEDIA_DETACHED, this.onMediaDetached, this),
							e.on(r.Events.BUFFER_CREATED, this.onBufferCreated, this)
						},
						t.unregisterListeners = function() {
							var e = this.hls;
							e.off(r.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.off(r.Events.MEDIA_DETACHED, this.onMediaDetached, this),
							e.off(r.Events.BUFFER_CREATED, this.onBufferCreated, this),
							this.onMediaDetached()
						},
						t.destroy = function() {
							this.unregisterListeners(),
							this.hls = this.config = this.audioBuffer = this.videoBuffer = null
						},
						t.onMediaAttached = function(e, t) {
							this.media = t.media,
							this.media.addEventListener("waiting", this.onWaiting),
							this.media.addEventListener("playing", this.onPlaying)
						},
						t.onMediaDetached = function() {
							this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
						},
						t.onBufferCreated = function(e, t) {
							var i;
							this.audioBuffer = null == (i = t.tracks.audio) ? void 0 : i.buffer,
							this.videoBuffer = null == (i = t.tracks.video) ? void 0 : i.buffer
						},
						t.createData = function() {
							var e;
							return {
								v: a.CMCDVersion,
								sf: a.CMCDStreamingFormat.HLS,
								sid: this.sid,
								cid: this.cid,
								pr: null == (e = this.media) ? void 0 : e.playbackRate,
								mtp: this.hls.bandwidthEstimate / 1e3
							}
						},
						t.apply = function(e, t) {
							d(t = void 0 === t ? {}: t, this.createData());
							var i = t.ot === a.CMCDObjectType.INIT || t.ot === a.CMCDObjectType.VIDEO || t.ot === a.CMCDObjectType.MUXED;
							this.starved && i && (t.bs = !0, t.su = !0, this.starved = !1),
							null == t.su && (t.su = this.buffering),
							this.useHeaders ? (i = f.toHeaders(t), Object.keys(i).length && (e.headers || (e.headers = {}), d(e.headers, i))) : (i = f.toQuery(t)) && (e.url = f.appendQueryToUri(e.url, i))
						},
						t.getObjectType = function(e) {
							var t = e.type;
							return "subtitle" === t ? a.CMCDObjectType.TIMED_TEXT: "initSegment" === e.sn ? a.CMCDObjectType.INIT: "audio" === t ? a.CMCDObjectType.AUDIO: "main" === t ? this.hls.audioTracks.length ? a.CMCDObjectType.VIDEO: a.CMCDObjectType.MUXED: void 0
						},
						t.getTopBandwidth = function(e) {
							for (var t = 0,
							i = this.hls,
							r = u(e === a.CMCDObjectType.AUDIO ? i.audioTracks: (e = -1 < (e = i.maxAutoLevel) ? e + 1 : i.levels.length, i.levels.slice(0, e))); ! (s = r()).done;) {
								var s = s.value;
								s.bitrate > t && (t = s.bitrate)
							}
							return 0 < t ? t: NaN
						},
						t.getBufferLength = function(e) {
							var t = this.hls.media,
							e = e === a.CMCDObjectType.AUDIO ? this.audioBuffer: this.videoBuffer;
							return e && t ? 1e3 * s.BufferHelper.bufferInfo(e, t.currentTime, this.config.maxBufferHole).len: NaN
						},
						t.createPlaylistLoader = function() {
							var e = this.config.pLoader,
							r = this.applyPlaylistData,
							t = e || this.config.loader;
							return (e = i.prototype).destroy = function() {
								this.loader.destroy()
							},
							e.abort = function() {
								this.loader.abort()
							},
							e.load = function(e, t, i) {
								r(e),
								this.loader.load(e, t, i)
							},
							l(i, [{
								key: "stats",
								get: function() {
									return this.loader.stats
								}
							},
							{
								key: "context",
								get: function() {
									return this.loader.context
								}
							}]),
							i;
							function i(e) {
								this.loader = void 0,
								this.loader = new t(e)
							}
						},
						t.createFragmentLoader = function() {
							var e = this.config.fLoader,
							r = this.applyFragmentData,
							t = e || this.config.loader;
							return (e = i.prototype).destroy = function() {
								this.loader.destroy()
							},
							e.abort = function() {
								this.loader.abort()
							},
							e.load = function(e, t, i) {
								r(e),
								this.loader.load(e, t, i)
							},
							l(i, [{
								key: "stats",
								get: function() {
									return this.loader.stats
								}
							},
							{
								key: "context",
								get: function() {
									return this.loader.context
								}
							}]),
							i;
							function i(e) {
								this.loader = void 0,
								this.loader = new t(e)
							}
						},
						f.uuid = function() {
							var e = URL.createObjectURL(new Blob),
							t = e.toString();
							return URL.revokeObjectURL(e),
							t.substr(t.lastIndexOf("/") + 1)
						},
						f.serialize = function(e) {
							for (var t = [], i = function(e) {
								return Math.round(e)
							},
							r = function(e) {
								return 100 * i(e / 100)
							},
							s = {
								br: i,
								d: i,
								bl: r,
								dl: r,
								mtp: r,
								nor: function(e) {
									return encodeURIComponent(e)
								},
								rtp: r,
								tb: i
							},
							n = u(Object.keys(e || {}).sort()); ! (l = n()).done;) {
								var a, o, l = l.value,
								c = e[l];
								a = c,
								Number.isNaN(a) || null == a || "" === a || !1 === a || "v" === l && 1 === c || "pr" == l && 1 === c || (a = typeof(c = (a = s[l]) ? a(c) : c), o = void 0, o = "ot" === l || "sf" === l || "st" === l ? l + "=" + c: "boolean" == a ? l: "number" == a ? l + "=" + c: l + "=" + JSON.stringify(c), t.push(o))
							}
							return t.join(",")
						},
						f.toHeaders = function(e) {
							for (var t = {},
							i = ["Object", "Request", "Session", "Status"], r = [{},
							{},
							{},
							{}], s = {
								br: 0,
								d: 0,
								ot: 0,
								tb: 0,
								bl: 1,
								dl: 1,
								mtp: 1,
								nor: 1,
								nrr: 1,
								su: 1,
								cid: 2,
								pr: 2,
								sf: 2,
								sid: 2,
								st: 2,
								v: 2,
								bs: 3,
								rtp: 3
							},
							n = 0, a = Object.keys(e); n < a.length; n++) {
								var o = a[n];
								r[null != s[o] ? s[o] : 1][o] = e[o]
							}
							for (var l = 0; l < r.length; l++) {
								var c = f.serialize(r[l]);
								c && (t["CMCD-" + i[l]] = c)
							}
							return t
						},
						f.toQuery = function(e) {
							return "CMCD=" + encodeURIComponent(f.serialize(e))
						},
						f.appendQueryToUri = function(e, t) {
							if (!t) return e;
							var i = e.includes("?") ? "&": "?";
							return e + i + t
						};
						var h = f;
						function f(e) {
							var n = this,
							e = (this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
								n.initialized && (n.starved = !0),
								n.buffering = !0
							},
							this.onPlaying = function() {
								n.initialized || (n.initialized = !0),
								n.buffering = !1
							},
							this.applyPlaylistData = function(e) {
								try {
									n.apply(e, {
										ot: a.CMCDObjectType.MANIFEST,
										su: !n.initialized
									})
								} catch(e) {
									o.logger.warn("Could not generate manifest CMCD data.", e)
								}
							},
							this.applyFragmentData = function(e) {
								try {
									var t = e.frag,
									i = n.hls.levels[t.level],
									r = n.getObjectType(t),
									s = {
										d: 1e3 * t.duration,
										ot: r
									};
									r !== a.CMCDObjectType.VIDEO && r !== a.CMCDObjectType.AUDIO && r != a.CMCDObjectType.MUXED || (s.br = i.bitrate / 1e3, s.tb = n.getTopBandwidth(r) / 1e3, s.bl = n.getBufferLength(r)),
									n.apply(e, s)
								} catch(e) {
									o.logger.warn("Could not generate segment CMCD data.", e)
								}
							},
							this.hls = e, this.config = e.config),
							t = e.cmcd;
							null != t && (e.pLoader = this.createPlaylistLoader(), e.fLoader = this.createFragmentLoader(), this.sid = t.sessionId || f.uuid(), this.cid = t.contentId, this.useHeaders = !0 === t.useHeaders, this.registerListeners())
						}
					},
					"./src/controller/eme-controller.ts": function(e, t, i) {
						i.r(t);
						var a = i("./src/events.ts"),
						o = i("./src/errors.ts"),
						l = i("./src/utils/logger.ts"),
						c = i("./src/utils/mediakeys-helper.ts");
						function r(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function s(e) {
							this.hls = void 0,
							this._widevineLicenseUrl = void 0,
							this._licenseXhrSetup = void 0,
							this._licenseResponseCallback = void 0,
							this._emeEnabled = void 0,
							this._requestMediaKeySystemAccess = void 0,
							this._drmSystemOptions = void 0,
							this._config = void 0,
							this._mediaKeysList = [],
							this._media = null,
							this._hasSetMediaKeys = !1,
							this._requestLicenseFailureCount = 0,
							this.mediaKeysPromise = null,
							this._onMediaEncrypted = this.onMediaEncrypted.bind(this),
							this.hls = e,
							this._config = e.config,
							this._widevineLicenseUrl = this._config.widevineLicenseUrl,
							this._licenseXhrSetup = this._config.licenseXhrSetup,
							this._licenseResponseCallback = this._config.licenseResponseCallback,
							this._emeEnabled = this._config.emeEnabled,
							this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc,
							this._drmSystemOptions = this._config.drmSystemOptions,
							this._registerListeners()
						} (i = s.prototype).destroy = function() {
							this._unregisterListeners(),
							this.hls = this._onMediaEncrypted = null,
							this._requestMediaKeySystemAccess = null
						},
						i._registerListeners = function() {
							this.hls.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							this.hls.on(a.Events.MEDIA_DETACHED, this.onMediaDetached, this),
							this.hls.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this)
						},
						i._unregisterListeners = function() {
							this.hls.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							this.hls.off(a.Events.MEDIA_DETACHED, this.onMediaDetached, this),
							this.hls.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this)
						},
						i.getLicenseServerUrl = function(e) {
							if (e === c.KeySystems.WIDEVINE) if (this._widevineLicenseUrl) return this._widevineLicenseUrl;
							throw new Error('no license server URL configured for key-system "' + e + '"')
						},
						i._attemptKeySystemAccess = function(t, e, a) {
							var i = this,
							e = function(e, t, i) {
								if (e === c.KeySystems.WIDEVINE) return r = a,
								s = i,
								n = {
									audioCapabilities: [],
									videoCapabilities: []
								},
								t.forEach(function(e) {
									n.audioCapabilities.push({
										contentType: 'audio/mp4; codecs="' + e + '"',
										robustness: s.audioRobustness || ""
									})
								}),
								r.forEach(function(e) {
									n.videoCapabilities.push({
										contentType: 'video/mp4; codecs="' + e + '"',
										robustness: s.videoRobustness || ""
									})
								}),
								[n];
								var r, s, n;
								throw new Error("Unknown key-system: " + e)
							} (t, e, this._drmSystemOptions),
							e = (l.logger.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(t, e));
							this.mediaKeysPromise = e.then(function(e) {
								return i._onMediaKeySystemAccessObtained(t, e)
							}),
							e.
							catch(function(e) {
								l.logger.error('Failed to obtain key-system "' + t + '" access:', e)
							})
						},
						i._onMediaKeySystemAccessObtained = function(t, e) {
							var i = this,
							r = (l.logger.log('Access for key-system "' + t + '" obtained'), {
								mediaKeysSessionInitialized: !1,
								mediaKeySystemAccess: e,
								mediaKeySystemDomain: t
							}),
							s = (this._mediaKeysList.push(r), Promise.resolve().then(function() {
								return e.createMediaKeys()
							}).then(function(e) {
								return r.mediaKeys = e,
								l.logger.log('Media-keys created for key-system "' + t + '"'),
								i._onMediaKeysCreated(),
								e
							}));
							return s.
							catch(function(e) {
								l.logger.error("Failed to create media-keys:", e)
							}),
							s
						},
						i._onMediaKeysCreated = function() {
							var t = this;
							this._mediaKeysList.forEach(function(e) {
								e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
							})
						},
						i._onNewMediaKeySession = function(t) {
							var i = this;
							l.logger.log("New key-system session " + t.sessionId),
							t.addEventListener("message",
							function(e) {
								i._onKeySessionMessage(t, e.message)
							},
							!1)
						},
						i._onKeySessionMessage = function(t, e) {
							l.logger.log("Got EME message event, creating license request"),
							this._requestLicense(e,
							function(e) {
								l.logger.log("Received license data (length: " + (e && e.byteLength) + "), updating key-session"),
								t.update(e)
							})
						},
						i.onMediaEncrypted = function(t) {
							var i = this;
							if (l.logger.log('Media is encrypted using "' + t.initDataType + '" init data type'), !this.mediaKeysPromise) return l.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),
							void this.hls.trigger(a.Events.ERROR, {
								type: o.ErrorTypes.KEY_SYSTEM_ERROR,
								details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
								fatal: !0
							});
							function e(e) {
								i._media && (i._attemptSetMediaKeys(e), i._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
							}
							this.mediaKeysPromise.then(e).
							catch(e)
						},
						i._attemptSetMediaKeys = function(e) {
							if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
							if (!this._hasSetMediaKeys) {
								var t = this._mediaKeysList[0];
								if (!t || !t.mediaKeys) return l.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
								void this.hls.trigger(a.Events.ERROR, {
									type: o.ErrorTypes.KEY_SYSTEM_ERROR,
									details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
									fatal: !0
								});
								l.logger.log("Setting keys for encrypted media"),
								this._media.setMediaKeys(t.mediaKeys),
								this._hasSetMediaKeys = !0
							}
						},
						i._generateRequestWithPreferredKeySession = function(e, t) {
							var i = this,
							r = this._mediaKeysList[0];
							if (!r) return l.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
							void this.hls.trigger(a.Events.ERROR, {
								type: o.ErrorTypes.KEY_SYSTEM_ERROR,
								details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
								fatal: !0
							});
							if (r.mediaKeysSessionInitialized) l.logger.warn("Key-Session already initialized but requested again");
							else {
								var s = r.mediaKeysSession;
								if (s) return t ? (l.logger.log('Generating key-session request for "' + e + '" init data type'), r.mediaKeysSessionInitialized = !0, void s.generateRequest(e, t).then(function() {
									l.logger.debug("Key-session generation succeeded")
								}).
								catch(function(e) {
									l.logger.error("Error generating key-session request:", e),
									i.hls.trigger(a.Events.ERROR, {
										type: o.ErrorTypes.KEY_SYSTEM_ERROR,
										details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
										fatal: !1
									})
								})) : (l.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(a.Events.ERROR, {
									type: o.ErrorTypes.KEY_SYSTEM_ERROR,
									details: o.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
									fatal: !0
								}));
								l.logger.error("Fatal: Media is encrypted but no key-session existing"),
								void this.hls.trigger(a.Events.ERROR, {
									type: o.ErrorTypes.KEY_SYSTEM_ERROR,
									details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
									fatal: !0
								})
							}
						},
						i._createLicenseXhr = function(e, t, i) {
							var r = new XMLHttpRequest,
							t = (r.responseType = "arraybuffer", r.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, r, e, t, i), this._licenseXhrSetup);
							if (t) try {
								t.call(this.hls, r, e),
								t = void 0
							} catch(e) {
								l.logger.error(e)
							}
							try {
								r.readyState || r.open("POST", e, !0),
								t && t.call(this.hls, r, e)
							} catch(e) {
								throw new Error("issue setting up KeySystem license XHR " + e)
							}
							return r
						},
						i._onLicenseRequestReadyStageChange = function(e, t, i, r) {
							if (4 === e.readyState) if (200 === e.status) {
								this._requestLicenseFailureCount = 0,
								l.logger.log("License request succeeded");
								var s = e.response,
								n = this._licenseResponseCallback;
								if (n) try {
									s = n.call(this.hls, e, t)
								} catch(e) {
									l.logger.error(e)
								}
								r(s)
							} else(l.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, 3 < this._requestLicenseFailureCount) ? this.hls.trigger(a.Events.ERROR, {
								type: o.ErrorTypes.KEY_SYSTEM_ERROR,
								details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
								fatal: !0
							}) : (n = 3 - this._requestLicenseFailureCount + 1, l.logger.warn("Retrying license request, " + n + " attempts left"), this._requestLicense(i, r))
						},
						i._generateLicenseRequestChallenge = function(e, t) {
							if (e.mediaKeySystemDomain === c.KeySystems.WIDEVINE) return t;
							throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
						},
						i._requestLicense = function(e, t) {
							l.logger.log("Requesting content license for key-system");
							var i = this._mediaKeysList[0];
							if (!i) return l.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
							void this.hls.trigger(a.Events.ERROR, {
								type: o.ErrorTypes.KEY_SYSTEM_ERROR,
								details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
								fatal: !0
							});
							try {
								var r = this.getLicenseServerUrl(i.mediaKeySystemDomain),
								s = this._createLicenseXhr(r, e, t),
								n = (l.logger.log("Sending license request to URL: " + r), this._generateLicenseRequestChallenge(i, e));
								s.send(n)
							} catch(e) {
								l.logger.error("Failure requesting DRM license: " + e),
								this.hls.trigger(a.Events.ERROR, {
									type: o.ErrorTypes.KEY_SYSTEM_ERROR,
									details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
									fatal: !0
								})
							}
						},
						i.onMediaAttached = function(e, t) {
							this._emeEnabled && (t = t.media, (this._media = t).addEventListener("encrypted", this._onMediaEncrypted))
						},
						i.onMediaDetached = function() {
							var e = this._media,
							t = this._mediaKeysList;
							e && (e.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(t.map(function(e) {
								if (e.mediaKeysSession) return e.mediaKeysSession.close().
								catch(function() {})
							})).then(function() {
								return e.setMediaKeys(null)
							}).
							catch(function() {}))
						},
						i.onManifestParsed = function(e, t) {
							var i;
							this._emeEnabled && (i = t.levels.map(function(e) {
								return e.audioCodec
							}).filter(function(e) {
								return !! e
							}), t = t.levels.map(function(e) {
								return e.videoCodec
							}).filter(function(e) {
								return !! e
							}), this._attemptKeySystemAccess(c.KeySystems.WIDEVINE, i, t))
						},
						r(s.prototype, [{
							key: "requestMediaKeySystemAccess",
							get: function() {
								if (this._requestMediaKeySystemAccess) return this._requestMediaKeySystemAccess;
								throw new Error("No requestMediaKeySystemAccess function configured")
							}
						}]),
						t.
					default = s
					},
					"./src/controller/fps-controller.ts": function(e, t, i) {
						i.r(t);
						var l = i("./src/events.ts"),
						c = i("./src/utils/logger.ts");
						function r(e) {
							this.hls = void 0,
							this.isVideoPlaybackQualityAvailable = !1,
							this.timer = void 0,
							this.media = null,
							this.lastTime = void 0,
							this.lastDroppedFrames = 0,
							this.lastDecodedFrames = 0,
							this.streamController = void 0,
							this.hls = e,
							this.registerListeners()
						} (i = r.prototype).setStreamController = function(e) {
							this.streamController = e
						},
						i.registerListeners = function() {
							this.hls.on(l.Events.MEDIA_ATTACHING, this.onMediaAttaching, this)
						},
						i.unregisterListeners = function() {
							this.hls.off(l.Events.MEDIA_ATTACHING, this.onMediaAttaching)
						},
						i.destroy = function() {
							this.timer && clearInterval(this.timer),
							this.unregisterListeners(),
							this.isVideoPlaybackQualityAvailable = !1,
							this.media = null
						},
						i.onMediaAttaching = function(e, t) {
							var i = this.hls.config;
							i.capLevelOnFPSDrop && (t = t.media instanceof self.HTMLVideoElement ? t.media: null, (this.media = t) && "function" == typeof t.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i.fpsDroppedMonitoringPeriod))
						},
						i.checkFPS = function(e, t, i) {
							var r, s, n, a, o = performance.now();
							t && (this.lastTime && (a = o - this.lastTime, r = i - this.lastDroppedFrames, s = t - this.lastDecodedFrames, a = 1e3 * r / a, (n = this.hls).trigger(l.Events.FPS_DROP, {
								currentDropped: r,
								currentDecoded: s,
								totalDroppedFrames: i
							}), 0 < a && r > n.config.fpsDroppedMonitoringThreshold * s && (a = n.currentLevel, c.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + a), 0 < a && ( - 1 === n.autoLevelCapping || n.autoLevelCapping >= a) && (n.trigger(l.Events.FPS_DROP_LEVEL_CAPPING, {
								level: --a,
								droppedLevel: n.currentLevel
							}), n.autoLevelCapping = a, this.streamController.nextLevelSwitch()))), this.lastTime = o, this.lastDroppedFrames = i, this.lastDecodedFrames = t)
						},
						i.checkFPSInterval = function() {
							var e, t = this.media;
							t && (this.isVideoPlaybackQualityAvailable ? (e = t.getVideoPlaybackQuality(), this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)) : this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount))
						},
						t.
					default = r
					},
					"./src/controller/fragment-finders.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "findFragmentByPDT",
						function() {
							return r
						}),
						i.d(t, "findFragmentByPTS",
						function() {
							return s
						}),
						i.d(t, "fragmentWithinToleranceTest",
						function() {
							return o
						}),
						i.d(t, "pdtWithinToleranceTest",
						function() {
							return l
						}),
						i.d(t, "findFragWithCC",
						function() {
							return c
						});
						var n = i("./src/polyfills/number.ts"),
						a = i("./src/utils/binary-search.ts");
						function r(e, t, i) {
							if (null === t || !Array.isArray(e) || !e.length || !Object(n.isFiniteNumber)(t)) return null;
							if (t < (e[0].programDateTime || 0)) return null;
							if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
							i = i || 0;
							for (var r = 0; r < e.length; ++r) {
								var s = e[r];
								if (l(t, i, s)) return s
							}
							return null
						}
						function s(e, t, i, r) {
							void 0 === i && (i = 0),
							void 0 === r && (r = 0);
							var s = null;
							return e ? s = t[e.sn - t[0].sn + 1] || null: 0 === i && 0 === t[0].start && (s = t[0]),
							(!s || 0 !== o(i, r, s)) && a.
						default.search(t, o.bind(null, i, r)) || s
						}
						function o(e, t, i) {
							void 0 === e && (e = 0),
							void 0 === t && (t = 0);
							t = Math.min(t, i.duration + (i.deltaPTS || 0));
							return i.start + i.duration - t <= e ? 1 : i.start - t > e && i.start ? -1 : 0
						}
						function l(e, t, i) {
							t = 1e3 * Math.min(t, i.duration + (i.deltaPTS || 0));
							return (i.endProgramDateTime || 0) - t > e
						}
						function c(e, t) {
							return a.
						default.search(e,
							function(e) {
								return e.cc < t ? 1 : e.cc > t ? -1 : 0
							})
						}
					},
					"./src/controller/fragment-tracker.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "FragmentState",
						function() {
							return r
						}),
						i.d(t, "FragmentTracker",
						function() {
							return n
						});
						var r, s = i("./src/events.ts"),
						o = i("./src/types/loader.ts"),
						n = ((t = r = r || {}).NOT_LOADED = "NOT_LOADED", t.BACKTRACKED = "BACKTRACKED", t.APPENDING = "APPENDING", t.PARTIAL = "PARTIAL", t.OK = "OK", (i = a.prototype)._registerListeners = function() {
							var e = this.hls;
							e.on(s.Events.BUFFER_APPENDED, this.onBufferAppended, this),
							e.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this),
							e.on(s.Events.FRAG_LOADED, this.onFragLoaded, this)
						},
						i._unregisterListeners = function() {
							var e = this.hls;
							e.off(s.Events.BUFFER_APPENDED, this.onBufferAppended, this),
							e.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this),
							e.off(s.Events.FRAG_LOADED, this.onFragLoaded, this)
						},
						i.destroy = function() {
							this._unregisterListeners(),
							this.fragments = this.timeRanges = null
						},
						i.getAppendedFrag = function(e, t) {
							if (t === o.PlaylistLevelType.MAIN) {
								var i = this.activeFragment,
								r = this.activeParts;
								if (!i) return null;
								if (r) for (var s = r.length; s--;) {
									var n = r[s],
									a = n ? n.end: i.appendedPTS;
									if (n.start <= e && void 0 !== a && e <= a) return 9 < s && (this.activeParts = r.slice(s - 9)),
									n
								} else if (i.start <= e && void 0 !== i.appendedPTS && e <= i.appendedPTS) return i
							}
							return this.getBufferedFrag(e, t)
						},
						i.getBufferedFrag = function(e, t) {
							for (var i = this.fragments,
							r = Object.keys(i), s = r.length; s--;) {
								var n = i[r[s]];
								if ((null == n ? void 0 : n.body.type) === t && n.buffered) {
									n = n.body;
									if (n.start <= e && e <= n.end) return n
								}
							}
							return null
						},
						i.detectEvictedFragments = function(i, r, s) {
							var n = this;
							Object.keys(this.fragments).forEach(function(e) {
								var t = n.fragments[e];
								t && (t.buffered ? (e = t.range[i]) && e.time.some(function(e) {
									e = !n.isTimeBuffered(e.startPTS, e.endPTS, r);
									return e && n.removeFragment(t.body),
									e
								}) : t.body.type === s && n.removeFragment(t.body))
							})
						},
						i.detectPartialFragments = function(e) {
							var r, s = this,
							n = this.timeRanges,
							a = e.frag,
							o = e.part;
							n && "initSegment" !== a.sn && (e = c(a), (r = this.fragments[e]) && (Object.keys(n).forEach(function(e) {
								var t, i = a.elementaryStreams[e];
								i && (t = n[e], i = null !== o || !0 === i.partial, r.range[e] = s.getBufferedTimes(a, o, i, t))
							}), r.backtrack = r.loaded = null, Object.keys(r.range).length ? r.buffered = !0 : this.removeFragment(r.body)))
						},
						i.fragBuffered = function(e) {
							e = c(e),
							e = this.fragments[e];
							e && (e.backtrack = e.loaded = null, e.buffered = !0)
						},
						i.getBufferedTimes = function(e, t, i, r) {
							for (var s = {
								time: [],
								partial: i
							},
							n = (t || e).start, a = (t || e).end, o = e.minEndPTS || a, l = e.maxStartPTS || n, c = 0; c < r.length; c++) {
								var u = r.start(c) - this.bufferPadding,
								d = r.end(c) + this.bufferPadding;
								if (u <= l && o <= d) {
									s.time.push({
										startPTS: Math.max(n, r.start(c)),
										endPTS: Math.min(a, r.end(c))
									});
									break
								}
								if (n < d && u < a) s.partial = !0,
								s.time.push({
									startPTS: Math.max(n, r.start(c)),
									endPTS: Math.min(a, r.end(c))
								});
								else if (a <= u) break
							}
							return s
						},
						i.getPartialFragment = function(t) {
							var i, r, s = null,
							n = 0,
							a = this.bufferPadding,
							o = this.fragments;
							return Object.keys(o).forEach(function(e) {
								e = o[e];
								e && l(e) && (i = e.body.start - a, r = e.body.end + a, i <= t && t <= r && (i = Math.min(t - i, r - t), n <= i && (s = e.body, n = i)))
							}),
							s
						},
						i.getState = function(e) {
							e = c(e),
							e = this.fragments[e];
							return e ? e.buffered ? l(e) ? r.PARTIAL: r.OK: e.backtrack ? r.BACKTRACKED: r.APPENDING: r.NOT_LOADED
						},
						i.backtrack = function(e, t) {
							e = c(e),
							e = this.fragments[e];
							if (!e || e.backtrack) return null;
							t = e.backtrack = t || e.loaded;
							return e.loaded = null,
							t
						},
						i.getBacktrackData = function(e) {
							var t = c(e),
							t = this.fragments[t];
							if (t) {
								var i, t = t.backtrack;
								if (null != t && null != (i = t.payload) && i.byteLength) return t;
								this.removeFragment(e)
							}
							return null
						},
						i.isTimeBuffered = function(e, t, i) {
							for (var r, s, n = 0; n < i.length; n++) {
								if (r = i.start(n) - this.bufferPadding, s = i.end(n) + this.bufferPadding, r <= e && t <= s) return ! 0;
								if (t <= r) return ! 1
							}
							return ! 1
						},
						i.onFragLoaded = function(e, t) {
							var i = t.frag,
							r = t.part;
							"initSegment" === i.sn || i.bitrateTest || r || (r = c(i), this.fragments[r] = {
								body: i,
								loaded: t,
								backtrack: null,
								buffered: !1,
								range: Object.create(null)
							})
						},
						i.onBufferAppended = function(e, t) {
							var r = this,
							s = t.frag,
							n = t.part,
							a = t.timeRanges;
							s.type === o.PlaylistLevelType.MAIN && (this.activeFragment = s, n ? ((t = this.activeParts) || (this.activeParts = t = []), t.push(n)) : this.activeParts = null),
							this.timeRanges = a,
							Object.keys(a).forEach(function(e) {
								var t = a[e];
								if (r.detectEvictedFragments(e, t), !n) for (var i = 0; i < t.length; i++) s.appendedPTS = Math.max(t.end(i), s.appendedPTS || 0)
							})
						},
						i.onFragBuffered = function(e, t) {
							this.detectPartialFragments(t)
						},
						i.hasFragment = function(e) {
							e = c(e);
							return !! this.fragments[e]
						},
						i.removeFragmentsInRange = function(t, i, r) {
							var s = this;
							Object.keys(this.fragments).forEach(function(e) {
								var e = s.fragments[e];
								e && e.buffered && ((e = e.body).type === r && e.start < i && e.end > t && s.removeFragment(e))
							})
						},
						i.removeFragment = function(e) {
							var t = c(e);
							e.stats.loaded = 0,
							e.clearElementaryStreamInfo(),
							delete this.fragments[t]
						},
						i.removeAllFragments = function() {
							this.fragments = Object.create(null),
							this.activeFragment = null,
							this.activeParts = null
						},
						a);
						function a(e) {
							this.activeFragment = null,
							this.activeParts = null,
							this.fragments = Object.create(null),
							this.timeRanges = Object.create(null),
							this.bufferPadding = .2,
							this.hls = void 0,
							this.hls = e,
							this._registerListeners()
						}
						function l(e) {
							var t;
							return e.buffered && (null != (t = e.range.video) && t.partial || null != (t = e.range.audio) && t.partial)
						}
						function c(e) {
							return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
						}
					},
					"./src/controller/gap-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "STALL_MINIMUM_DURATION_MS",
						function() {
							return f
						}),
						i.d(t, "MAX_START_GAP_JUMP",
						function() {
							return A
						}),
						i.d(t, "SKIP_BUFFER_HOLE_STEP_SECONDS",
						function() {
							return p
						}),
						i.d(t, "SKIP_BUFFER_RANGE_START",
						function() {
							return g
						}),
						i.d(t, "default",
						function() {
							return r
						});
						var c = i("./src/utils/buffer-helper.ts"),
						u = i("./src/errors.ts"),
						d = i("./src/events.ts"),
						h = i("./src/utils/logger.ts"),
						f = 250,
						A = 2,
						p = .1,
						g = .05,
						r = ((t = s.prototype).destroy = function() {
							this.hls = this.fragmentTracker = this.media = null
						},
						t.poll = function(e) {
							var t = this.config,
							i = this.media,
							r = this.stalled,
							s = i.currentTime,
							n = i.seeking,
							a = this.seeking && !n,
							o = !this.seeking && n;
							if (this.seeking = n, s === e) {
								if ((o || a) && (this.stalled = null), !i.paused && !i.ended && 0 !== i.playbackRate && c.BufferHelper.getBuffered(i).length) {
									e = c.BufferHelper.bufferInfo(i, s, 0),
									o = 0 < e.len,
									a = e.nextStart || 0;
									if (o || a) {
										if (n) {
											var o = e.len > A,
											l = !a || A < a - s && !this.fragmentTracker.getPartialFragment(s);
											if (o || l) return;
											this.moved = !1
										}
										if (!this.moved && null !== this.stalled) {
											o = Math.max(a, e.start || 0) - s,
											l = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
											a = null != l && null != (a = l.details) && a.live ? 2 * l.details.targetduration: A;
											if (0 < o && o <= a) return void this._trySkipBufferHole(null)
										}
										l = self.performance.now();
										null !== r ? (o = l - r, !n && f <= o && this._reportStall(e.len), a = c.BufferHelper.bufferInfo(i, s, t.maxBufferHole), this._tryFixBufferStall(a, o)) : this.stalled = l
									}
								}
							} else this.moved = !0,
							null !== r && (this.stallReported && (n = self.performance.now() - r, h.logger.warn("playback not stuck anymore @" + s + ", after " + Math.round(n) + "ms"), this.stallReported = !1), this.stalled = null, this.nudgeRetry = 0)
						},
						t._tryFixBufferStall = function(e, t) {
							var i = this.config,
							r = this.fragmentTracker,
							s = this.media.currentTime,
							r = r.getPartialFragment(s);
							r && this._trySkipBufferHole(r) || e.len > i.maxBufferHole && t > 1e3 * i.highBufferWatchdogPeriod && (h.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
						},
						t._reportStall = function(e) {
							var t = this.hls,
							i = this.media;
							this.stallReported || (this.stallReported = !0, h.logger.warn("Playback stalling at @" + i.currentTime + " due to low buffer (buffer=" + e + ")"), t.trigger(d.Events.ERROR, {
								type: u.ErrorTypes.MEDIA_ERROR,
								details: u.ErrorDetails.BUFFER_STALLED_ERROR,
								fatal: !1,
								buffer: e
							}))
						},
						t._trySkipBufferHole = function(e) {
							for (var t = this.config,
							i = this.hls,
							r = this.media,
							s = r.currentTime,
							n = 0,
							a = c.BufferHelper.getBuffered(r), o = 0; o < a.length; o++) {
								var l = a.start(o);
								if (s + t.maxBufferHole >= n && s < l) return l = Math.max(l + g, r.currentTime + p),
								h.logger.warn("skipping hole, adjusting currentTime from " + s + " to " + l),
								this.moved = !0,
								this.stalled = null,
								r.currentTime = l,
								e && i.trigger(d.Events.ERROR, {
									type: u.ErrorTypes.MEDIA_ERROR,
									details: u.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
									fatal: !1,
									reason: "fragment loaded with buffer holes, seeking from " + s + " to " + l,
									frag: e
								}),
								l;
								n = a.end(o)
							}
							return 0
						},
						t._tryNudgeBuffer = function() {
							var e = this.config,
							t = this.hls,
							i = this.media,
							r = i.currentTime,
							s = (this.nudgeRetry || 0) + 1; (this.nudgeRetry = s) < e.nudgeMaxRetry ? (s = r + s * e.nudgeOffset, h.logger.warn("Nudging 'currentTime' from " + r + " to " + s), i.currentTime = s, t.trigger(d.Events.ERROR, {
								type: u.ErrorTypes.MEDIA_ERROR,
								details: u.ErrorDetails.BUFFER_NUDGE_ON_STALL,
								fatal: !1
							})) : (h.logger.error("Playhead still not moving while enough data buffered @" + r + " after " + e.nudgeMaxRetry + " nudges"), t.trigger(d.Events.ERROR, {
								type: u.ErrorTypes.MEDIA_ERROR,
								details: u.ErrorDetails.BUFFER_STALLED_ERROR,
								fatal: !0
							}))
						},
						s);
						function s(e, t, i, r) {
							this.config = void 0,
							this.media = void 0,
							this.fragmentTracker = void 0,
							this.hls = void 0,
							this.nudgeRetry = 0,
							this.stallReported = !1,
							this.stalled = null,
							this.moved = !1,
							this.seeking = !1,
							this.config = e,
							this.media = t,
							this.fragmentTracker = i,
							this.hls = r
						}
					},
					"./src/controller/id3-track-controller.ts": function(e, t, i) {
						i.r(t);
						var r = i("./src/events.ts"),
						s = i("./src/utils/texttrack-utils.ts"),
						h = i("./src/demux/id3.ts");
						function n(e) {
							this.hls = void 0,
							this.id3Track = null,
							this.media = null,
							this.hls = e,
							this._registerListeners()
						} (i = n.prototype).destroy = function() {
							this._unregisterListeners()
						},
						i._registerListeners = function() {
							var e = this.hls;
							e.on(r.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.on(r.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.on(r.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
							e.on(r.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
						},
						i._unregisterListeners = function() {
							var e = this.hls;
							e.off(r.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.off(r.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.off(r.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
							e.off(r.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
						},
						i.onMediaAttached = function(e, t) {
							this.media = t.media
						},
						i.onMediaDetaching = function() {
							this.id3Track && (Object(s.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null)
						},
						i.getID3Track = function(e) {
							if (this.media) {
								for (var t = 0; t < e.length; t++) {
									var i = e[t];
									if ("metadata" === i.kind && "id3" === i.label) return Object(s.sendAddTrackEvent)(i, this.media),
									i
								}
								return this.media.addTextTrack("metadata", "id3")
							}
						},
						i.onFragParsingMetadata = function(e, t) {
							if (this.media) {
								var i = t.frag,
								r = t.samples;
								this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
								for (var s = self.WebKitDataCue || self.VTTCue || self.TextTrackCue,
								n = 0; n < r.length; n++) {
									var a = h.getID3Frames(r[n].data);
									if (a) {
										var o = r[n].pts,
										l = n < r.length - 1 ? r[n + 1].pts: i.end;
										l - o <= 0 && (l = o + .25);
										for (var c = 0; c < a.length; c++) {
											var u, d = a[c];
											h.isTimeStampFrame(d) || ((u = new s(o, l, "")).value = d, this.id3Track.addCue(u))
										}
									}
								}
							}
						},
						i.onBufferFlushing = function(e, t) {
							var i = t.startOffset,
							r = t.endOffset,
							t = t.type;
							t && "audio" !== t || (t = this.id3Track) && Object(s.removeCuesInRange)(t, i, r)
						},
						t.
					default = n
					},
					"./src/controller/latency-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return o
						});
						var r = i("./src/errors.ts"),
						s = i("./src/events.ts"),
						n = i("./src/utils/logger.ts");
						function a(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						} (t = l.prototype).destroy = function() {
							this.unregisterListeners(),
							this.onMediaDetaching(),
							this.levelDetails = null,
							this.hls = this.timeupdateHandler = null
						},
						t.registerListeners = function() {
							this.hls.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							this.hls.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							this.hls.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							this.hls.on(s.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
							this.hls.on(s.Events.ERROR, this.onError, this)
						},
						t.unregisterListeners = function() {
							this.hls.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached),
							this.hls.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching),
							this.hls.off(s.Events.MANIFEST_LOADING, this.onManifestLoading),
							this.hls.off(s.Events.LEVEL_UPDATED, this.onLevelUpdated),
							this.hls.off(s.Events.ERROR, this.onError)
						},
						t.onMediaAttached = function(e, t) {
							this.media = t.media,
							this.media.addEventListener("timeupdate", this.timeupdateHandler)
						},
						t.onMediaDetaching = function() {
							this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
						},
						t.onManifestLoading = function() {
							this.levelDetails = null,
							this._latency = null,
							this.stallCount = 0
						},
						t.onLevelUpdated = function(e, t) {
							t = t.details; (this.levelDetails = t).advanced && this.timeupdate(),
							!t.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
						},
						t.onError = function(e, t) {
							t.details === r.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, n.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
						},
						t.timeupdate = function() {
							var e, t, i, r = this.media,
							s = this.levelDetails;
							r && s && (this.currentTime = r.currentTime, null !== (t = this.computeLatency()) && (this._latency = t, i = (e = this.config).lowLatencyMode, e = e.maxLiveSyncPlaybackRate, i && 1 !== e && null !== (i = this.targetLatency) && (i = (t = t - i) < Math.min(this.maxLatency, i + s.targetduration), s.live && i && .05 < t && 1 < this.forwardBufferLength ? (s = Math.min(2, Math.max(1, e)), i = Math.round(2 / (1 + Math.exp( - .75 * t - this.edgeStalled)) * 20) / 20, r.playbackRate = Math.min(s, Math.max(1, i))) : 1 !== r.playbackRate && 0 !== r.playbackRate && (r.playbackRate = 1))))
						},
						t.estimateLiveEdge = function() {
							var e = this.levelDetails;
							return null === e ? null: e.edge + e.age
						},
						t.computeLatency = function() {
							var e = this.estimateLiveEdge();
							return null === e ? null: e - this.currentTime
						},
						a(l.prototype, [{
							key: "latency",
							get: function() {
								return this._latency || 0
							}
						},
						{
							key: "maxLatency",
							get: function() {
								var e = this.config,
								t = this.levelDetails;
								return void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration: t ? e.liveMaxLatencyDurationCount * t.targetduration: 0
							}
						},
						{
							key: "targetLatency",
							get: function() {
								var e = this.levelDetails;
								if (null === e) return null;
								var t = e.holdBack,
								i = e.partHoldBack,
								e = e.targetduration,
								r = this.config,
								s = r.liveSyncDuration,
								n = r.liveSyncDurationCount,
								r = r.lowLatencyMode,
								a = this.hls.userConfig,
								r = r && i || t;
								return (r = a.liveSyncDuration || a.liveSyncDurationCount || 0 === r ? void 0 !== s ? s: n * e: r) + Math.min( + this.stallCount, e)
							}
						},
						{
							key: "liveSyncPosition",
							get: function() {
								var e = this.estimateLiveEdge(),
								t = this.targetLatency,
								i = this.levelDetails;
								if (null === e || null === t || null === i) return null;
								var r = i.edge,
								e = e - t - this.edgeStalled,
								t = r - i.totalduration,
								r = r - (this.config.lowLatencyMode && i.partTarget || i.targetduration);
								return Math.min(Math.max(t, e), r)
							}
						},
						{
							key: "drift",
							get: function() {
								var e = this.levelDetails;
								return null === e ? 1 : e.drift
							}
						},
						{
							key: "edgeStalled",
							get: function() {
								var e = this.levelDetails;
								if (null === e) return 0;
								var t = 3 * (this.config.lowLatencyMode && e.partTarget || e.targetduration);
								return Math.max(e.age - t, 0)
							}
						},
						{
							key: "forwardBufferLength",
							get: function() {
								var e = this.media,
								t = this.levelDetails;
								if (!e || !t) return 0;
								var i = e.buffered.length;
								return i ? e.buffered.end(i - 1) : t.edge - this.currentTime
							}
						}]);
						var o = l;
						function l(e) {
							var t = this;
							this.hls = void 0,
							this.config = void 0,
							this.media = null,
							this.levelDetails = null,
							this.currentTime = 0,
							this.stallCount = 0,
							this._latency = null,
							this.timeupdateHandler = function() {
								return t.timeupdate()
							},
							this.hls = e,
							this.config = e.config,
							this.registerListeners()
						}
					},
					"./src/controller/level-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return a
						});
						var f = i("./src/types/level.ts"),
						A = i("./src/events.ts"),
						p = i("./src/errors.ts"),
						g = i("./src/utils/codecs.ts"),
						m = i("./src/controller/level-helper.ts"),
						t = i("./src/controller/base-playlist-controller.ts"),
						o = i("./src/types/loader.ts");
						function s() {
							return (s = Object.assign ||
							function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var i, r = arguments[t];
									for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
								}
								return e
							}).apply(this, arguments)
						}
						function r(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function n(e, t) {
							return (n = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						var l, v = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
						a = (l = t.
					default, i = l, (t = c).prototype = Object.create(i.prototype), n(t.prototype.constructor = t, i), (t = c.prototype)._registerListeners = function() {
							var e = this.hls;
							e.on(A.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
							e.on(A.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.on(A.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
							e.on(A.Events.FRAG_LOADED, this.onFragLoaded, this),
							e.on(A.Events.ERROR, this.onError, this)
						},
						t._unregisterListeners = function() {
							var e = this.hls;
							e.off(A.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
							e.off(A.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.off(A.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
							e.off(A.Events.FRAG_LOADED, this.onFragLoaded, this),
							e.off(A.Events.ERROR, this.onError, this)
						},
						t.destroy = function() {
							this._unregisterListeners(),
							this.manualLevelIndex = -1,
							this._levels.length = 0,
							l.prototype.destroy.call(this)
						},
						t.startLoad = function() {
							this._levels.forEach(function(e) {
								e.loadError = 0
							}),
							l.prototype.startLoad.call(this)
						},
						t.onManifestLoaded = function(e, t) {
							var i, r, s = [],
							n = [],
							a = [],
							o = {},
							l = !1,
							c = !1,
							u = !1;
							if (t.levels.forEach(function(e) {
								var t = e.attrs,
								i = (l = l || !(!e.width || !e.height), c = c || !!e.videoCodec, u = u || !!e.audioCodec, v && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), e.bitrate + "-" + e.attrs.RESOLUTION + "-" + e.attrs.CODECS); (r = o[i]) ? r.url.push(e.url) : (r = new f.Level(e), o[i] = r, s.push(r)),
								t && (t.AUDIO && Object(m.addGroupId)(r, "audio", t.AUDIO), t.SUBTITLES && Object(m.addGroupId)(r, "text", t.SUBTITLES))
							}), s = (s = (l || c) && u ? s.filter(function(e) {
								var t = e.videoCodec,
								i = e.width,
								e = e.height;
								return !! t || !(!i || !e)
							}) : s).filter(function(e) {
								var t = e.audioCodec,
								e = e.videoCodec;
								return (!t || Object(g.isCodecSupportedInMp4)(t, "audio")) && (!e || Object(g.isCodecSupportedInMp4)(e, "video"))
							}), t.audioTracks && (n = t.audioTracks.filter(function(e) {
								return ! e.audioCodec || Object(g.isCodecSupportedInMp4)(e.audioCodec, "audio")
							}), Object(m.assignTrackIdsByGroup)(n)), t.subtitles && (a = t.subtitles, Object(m.assignTrackIdsByGroup)(a)), 0 < s.length) {
								i = s[0].bitrate,
								s.sort(function(e, t) {
									return e.bitrate - t.bitrate
								}),
								this._levels = s;
								for (var d = 0; d < s.length; d++) if (s[d].bitrate === i) {
									this._firstLevel = d,
									this.log("manifest loaded, " + s.length + " level(s) found, first bitrate: " + i);
									break
								}
								var h = u && !c,
								a = {
									levels: s,
									audioTracks: n,
									subtitleTracks: a,
									firstLevel: this._firstLevel,
									stats: t.stats,
									audio: u,
									video: c,
									altAudio: !h && n.some(function(e) {
										return !! e.url
									})
								};
								this.hls.trigger(A.Events.MANIFEST_PARSED, a),
								(this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
							} else this.hls.trigger(A.Events.ERROR, {
								type: p.ErrorTypes.MEDIA_ERROR,
								details: p.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
								fatal: !0,
								url: t.url,
								reason: "no level with compatible codecs found in manifest"
							})
						},
						t.onError = function(e, t) {
							if (l.prototype.onError.call(this, e, t), !t.fatal) {
								var i = t.context,
								e = this._levels[this.currentLevelIndex];
								if (i && (i.type === o.PlaylistContextType.AUDIO_TRACK && e.audioGroupIds && i.groupId === e.audioGroupIds[e.urlId] || i.type === o.PlaylistContextType.SUBTITLE_TRACK && e.textGroupIds && i.groupId === e.textGroupIds[e.urlId])) this.redundantFailover(this.currentLevelIndex);
								else {
									var r, s, n = !1,
									a = !0;
									switch (t.details) {
									case p.ErrorDetails.FRAG_LOAD_ERROR:
									case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
									case p.ErrorDetails.KEY_LOAD_ERROR:
									case p.ErrorDetails.KEY_LOAD_TIMEOUT:
										t.frag && ((s = this._levels[t.frag.level]) ? (s.fragmentError++, s.fragmentError > this.hls.config.fragLoadingMaxRetry && (r = t.frag.level)) : r = t.frag.level);
										break;
									case p.ErrorDetails.LEVEL_LOAD_ERROR:
									case p.ErrorDetails.LEVEL_LOAD_TIMEOUT:
										i && (i.deliveryDirectives && (a = !1), r = i.level),
										n = !0;
										break;
									case p.ErrorDetails.REMUX_ALLOC_ERROR:
										r = t.level,
										n = !0
									}
									void 0 !== r && this.recoverLevel(t, r, n, a)
								}
							}
						},
						t.recoverLevel = function(e, t, i, r) {
							var s = e.details,
							n = this._levels[t];
							if (n.loadError++, i) {
								if (!this.retryLoadingOrFail(e)) return void(this.currentLevelIndex = -1);
								e.levelRetry = !0
							}
							r && (1 < (i = n.url.length) && n.loadError < i ? (e.levelRetry = !0, this.redundantFailover(t)) : -1 === this.manualLevelIndex && (r = 0 === t ? this._levels.length - 1 : t - 1, this.currentLevelIndex !== r && 0 === this._levels[r].loadError && (this.warn(s + ": switch to " + r), e.levelRetry = !0, this.hls.nextAutoLevel = r)))
						},
						t.redundantFailover = function(e) {
							var t, i = this._levels[e],
							r = i.url.length;
							1 < r && (t = (i.urlId + 1) % r, this.warn("Switching to redundant URL-id " + t), this._levels.forEach(function(e) {
								e.urlId = t
							}), this.level = e)
						},
						t.onFragLoaded = function(e, t) {
							var t = t.frag;
							void 0 !== t && t.type === o.PlaylistLevelType.MAIN && void 0 !== (t = this._levels[t.level]) && (t.fragmentError = 0, t.loadError = 0)
						},
						t.onLevelLoaded = function(e, t) {
							var i, r = t.level,
							s = t.details,
							n = this._levels[r];
							if (!n) return this.warn("Invalid level index " + r),
							void(null != (i = t.deliveryDirectives) && i.skip && (s.deltaUpdateFailed = !0));
							r === this.currentLevelIndex ? (0 === n.fragmentError && (n.loadError = 0, this.retryCount = 0), this.playlistLoaded(r, t, n.details)) : null != (i = t.deliveryDirectives) && i.skip && (s.deltaUpdateFailed = !0)
						},
						t.onAudioTrackSwitched = function(e, t) {
							var i = this.hls.levels[this.currentLevelIndex];
							if (i && i.audioGroupIds) {
								for (var r = -1,
								s = this.hls.audioTracks[t.id].groupId, n = 0; n < i.audioGroupIds.length; n++) if (i.audioGroupIds[n] === s) {
									r = n;
									break
								}
								r !== i.urlId && (i.urlId = r, this.startLoad())
							}
						},
						t.loadPlaylist = function(e) {
							var t = this.currentLevelIndex,
							i = this._levels[t];
							if (this.canLoad && i && 0 < i.url.length) {
								var r = i.urlId,
								i = i.url[r];
								if (e) try {
									i = e.addDirectives(i)
								} catch(e) {
									this.warn("Could not construct new URL with HLS Delivery Directives: " + e)
								}
								this.log("Attempt loading level index " + t + (e ? " at sn " + e.msn + " part " + e.part: "") + " with URL-id " + r + " " + i),
								this.clearTimer(),
								this.hls.trigger(A.Events.LEVEL_LOADING, {
									url: i,
									level: t,
									id: r,
									deliveryDirectives: e || null
								})
							}
						},
						t.removeLevel = function(i, r) {
							function s(e, t) {
								return t !== r
							}
							var e = this._levels.filter(function(e, t) {
								return t !== i || 1 < e.url.length && void 0 !== r && (e.url = e.url.filter(s), e.audioGroupIds && (e.audioGroupIds = e.audioGroupIds.filter(s)), e.textGroupIds && (e.textGroupIds = e.textGroupIds.filter(s)), !(e.urlId = 0))
							}).map(function(e, t) {
								var i = e.details;
								return null != i && i.fragments && i.fragments.forEach(function(e) {
									e.level = t
								}),
								e
							});
							this._levels = e,
							this.hls.trigger(A.Events.LEVELS_UPDATED, {
								levels: e
							})
						},
						r(c.prototype, [{
							key: "levels",
							get: function() {
								return 0 === this._levels.length ? null: this._levels
							}
						},
						{
							key: "level",
							get: function() {
								return this.currentLevelIndex
							},
							set: function(e) {
								var t = this._levels;
								if (0 !== t.length && (this.currentLevelIndex !== e || null == (i = t[e]) || !i.details)) {
									if (e < 0 || e >= t.length) {
										var i = e < 0;
										if (this.hls.trigger(A.Events.ERROR, {
											type: p.ErrorTypes.OTHER_ERROR,
											details: p.ErrorDetails.LEVEL_SWITCH_ERROR,
											level: e,
											fatal: i,
											reason: "invalid level idx"
										}), i) return;
										e = Math.min(e, t.length - 1)
									}
									this.clearTimer();
									var i = this.currentLevelIndex,
									r = t[i],
									t = t[e],
									i = (this.log("switching to level " + e + " from " + i), s({},
									t, {
										level: this.currentLevelIndex = e,
										maxBitrate: t.maxBitrate,
										uri: t.uri,
										urlId: t.urlId
									})),
									e = (delete i._urlId, this.hls.trigger(A.Events.LEVEL_SWITCHING, i), t.details);
									e && !e.live || (i = this.switchParams(t.uri, null == r ? void 0 : r.details), this.loadPlaylist(i))
								}
							}
						},
						{
							key: "manualLevel",
							get: function() {
								return this.manualLevelIndex
							},
							set: function(e) {
								this.manualLevelIndex = e,
								void 0 === this._startLevel && (this._startLevel = e),
								-1 !== e && (this.level = e)
							}
						},
						{
							key: "firstLevel",
							get: function() {
								return this._firstLevel
							},
							set: function(e) {
								this._firstLevel = e
							}
						},
						{
							key: "startLevel",
							get: function() {
								var e;
								return void 0 === this._startLevel ? void 0 !== (e = this.hls.config.startLevel) ? e: this._firstLevel: this._startLevel
							},
							set: function(e) {
								this._startLevel = e
							}
						},
						{
							key: "nextLoadLevel",
							get: function() {
								return - 1 !== this.manualLevelIndex ? this.manualLevelIndex: this.hls.nextAutoLevel
							},
							set: function(e) {
								this.level = e,
								-1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
							}
						}]), c);
						function c(e) {
							return (e = l.call(this, e, "[level-controller]") || this)._levels = [],
							e._firstLevel = -1,
							e._startLevel = void 0,
							e.currentLevelIndex = -1,
							e.manualLevelIndex = -1,
							e.onParsedComplete = void 0,
							e._registerListeners(),
							e
						}
					},
					"./src/controller/level-helper.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "addGroupId",
						function() {
							return r
						}),
						i.d(t, "assignTrackIdsByGroup",
						function() {
							return s
						}),
						i.d(t, "updatePTS",
						function() {
							return n
						}),
						i.d(t, "updateFragPTSDTS",
						function() {
							return g
						}),
						i.d(t, "mergeDetails",
						function() {
							return a
						}),
						i.d(t, "mapPartIntersection",
						function() {
							return m
						}),
						i.d(t, "mapFragmentIntersection",
						function() {
							return v
						}),
						i.d(t, "adjustSliding",
						function() {
							return y
						}),
						i.d(t, "addSliding",
						function() {
							return o
						}),
						i.d(t, "computeReloadInterval",
						function() {
							return l
						}),
						i.d(t, "getFragmentWithSN",
						function() {
							return c
						}),
						i.d(t, "getPartWith",
						function() {
							return u
						});
						var f = i("./src/polyfills/number.ts"),
						A = i("./src/utils/logger.ts");
						function r(e, t, i) {
							switch (t) {
							case "audio":
								e.audioGroupIds || (e.audioGroupIds = []),
								e.audioGroupIds.push(i);
								break;
							case "text":
								e.textGroupIds || (e.textGroupIds = []),
								e.textGroupIds.push(i)
							}
						}
						function s(e) {
							var i = {};
							e.forEach(function(e) {
								var t = e.groupId || "";
								e.id = i[t] = i[t] || 0,
								i[t]++
							})
						}
						function n(e, t, i) {
							p(e[t], e[i])
						}
						function p(e, t) {
							var i, r = t.startPTS;
							Object(f.isFiniteNumber)(r) ? (i = 0, (r = t.sn > e.sn ? (i = r - e.start, e) : (i = e.start - r, t)).duration !== i && (r.duration = i)) : t.sn > e.sn ? e.cc === t.cc && e.minEndPTS ? t.start = e.start + (e.minEndPTS - e.start) : t.start = e.start + e.duration: t.start = Math.max(e.start - t.duration, 0)
						}
						function g(e, t, i, r, s, n) {
							r - i <= 0 && (A.logger.warn("Fragment should have a positive duration", t), r = i + t.duration, n = s + t.duration);
							var a = i,
							o = r,
							l = t.startPTS,
							c = t.endPTS,
							u = (Object(f.isFiniteNumber)(l) && (u = Math.abs(l - i), Object(f.isFiniteNumber)(t.deltaPTS) ? t.deltaPTS = Math.max(u, t.deltaPTS) : t.deltaPTS = u, a = Math.max(i, l), i = Math.min(i, l), s = Math.min(s, t.startDTS), o = Math.min(r, c), r = Math.max(r, c), n = Math.max(n, t.endDTS)), t.duration = r - i, i - t.start);
							t.appendedPTS = r,
							t.start = t.startPTS = i,
							t.maxStartPTS = a,
							t.startDTS = s,
							t.endPTS = r,
							t.minEndPTS = o,
							t.endDTS = n;
							var d, l = t.sn;
							if (!e || l < e.startSN || l > e.endSN) return 0;
							var c = l - e.startSN,
							h = e.fragments;
							for (h[c] = t, d = c; 0 < d; d--) p(h[d], h[d - 1]);
							for (d = c; d < h.length - 1; d++) p(h[d], h[d + 1]);
							return e.fragmentHint && p(h[h.length - 1], e.fragmentHint),
							e.PTSKnown = e.alignedSliding = !0,
							u
						}
						function a(e, i) {
							for (var r = null,
							t = e.fragments,
							s = t.length - 1; 0 <= s; s--) {
								var n = t[s].initSegment;
								if (n) {
									r = n;
									break
								}
							}
							e.fragmentHint && delete e.fragmentHint.endPTS;
							var a, o = 0;
							if (v(e, i,
							function(e, t) {
								e.relurl && (o = e.cc - t.cc),
								Object(f.isFiniteNumber)(e.startPTS) && Object(f.isFiniteNumber)(e.endPTS) && (t.start = t.startPTS = e.startPTS, t.startDTS = e.startDTS, t.appendedPTS = e.appendedPTS, t.maxStartPTS = e.maxStartPTS, t.endPTS = e.endPTS, t.endDTS = e.endDTS, t.minEndPTS = e.minEndPTS, t.duration = e.endPTS - e.startPTS, t.duration && (a = t), i.PTSKnown = i.alignedSliding = !0),
								t.elementaryStreams = e.elementaryStreams,
								t.loader = e.loader,
								t.stats = e.stats,
								t.urlId = e.urlId,
								e.initSegment && (t.initSegment = e.initSegment, r = e.initSegment)
							}), r && (i.fragmentHint ? i.fragments.concat(i.fragmentHint) : i.fragments).forEach(function(e) {
								var t;
								e.initSegment && e.initSegment.relurl !== (null == (t = r) ? void 0 : t.relurl) || (e.initSegment = r)
							}), i.skippedSegments && (i.deltaUpdateFailed = i.fragments.some(function(e) {
								return ! e
							}), i.deltaUpdateFailed)) {
								A.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
								for (var l = i.skippedSegments; l--;) i.fragments.shift();
								i.startSN = i.fragments[0].sn,
								i.startCC = i.fragments[0].cc
							}
							var c = i.fragments;
							if (o) {
								A.logger.warn("discontinuity sliding from playlist, take drift into account");
								for (var u = 0; u < c.length; u++) c[u].cc += o
							}
							i.skippedSegments && (i.startCC = i.fragments[0].cc),
							m(e.partList, i.partList,
							function(e, t) {
								t.elementaryStreams = e.elementaryStreams,
								t.stats = e.stats
							}),
							a ? g(i, a, a.startPTS, a.endPTS, a.startDTS, a.endDTS) : y(e, i),
							c.length && (i.totalduration = i.edge - c[0].start),
							i.driftStartTime = e.driftStartTime,
							i.driftStart = e.driftStart;
							var d, h = i.advancedDateTime;
							i.advanced && h ? (d = i.edge, i.driftStart || (i.driftStartTime = h, i.driftStart = d), i.driftEndTime = h, i.driftEnd = d) : (i.driftEndTime = e.driftEndTime, i.driftEnd = e.driftEnd, i.advancedDateTime = e.advancedDateTime)
						}
						function m(e, t, i) {
							if (e && t) for (var r = 0,
							s = 0,
							n = e.length; s <= n; s++) {
								var a = e[s],
								o = t[s + r];
								a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? i(a, o) : r--
							}
						}
						function v(e, t, i) {
							for (var r = t.skippedSegments,
							s = Math.max(e.startSN, t.startSN) - t.startSN, n = (e.fragmentHint ? 1 : 0) + (r ? t.endSN: Math.min(e.endSN, t.endSN)) - t.startSN, a = t.startSN - e.startSN, o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, l = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, c = s; c <= n; c++) {
								var u = l[a + c],
								d = o[c];
								r && !d && c < r && (d = t.fragments[c] = u),
								u && d && i(u, d)
							}
						}
						function y(e, t) {
							var i = t.startSN + t.skippedSegments - e.startSN,
							e = e.fragments;
							i < 0 || i >= e.length || o(t, e[i].start)
						}
						function o(e, t) {
							if (t) {
								for (var i = e.fragments,
								r = e.skippedSegments; r < i.length; r++) i[r].start += t;
								e.fragmentHint && (e.fragmentHint.start += t)
							}
						}
						function l(e, t) {
							var i, r = 1e3 * e.levelTargetDuration,
							s = r / 2,
							n = e.age,
							a = 0 < n && n < 3 * r,
							t = t.loading.end - t.loading.start,
							o = e.availabilityDelay;
							return ! 1 === e.updated ? a ? (i = 333 * e.misses, i = Math.max(Math.min(s, 2 * t), i), e.availabilityDelay = (e.availabilityDelay || 0) + i) : i = s: i = a ? (o = Math.min(o || r / 2, n), (e.availabilityDelay = o) + r - n) : r - t,
							Math.round(i)
						}
						function c(e, t, i) {
							if (!e || !e.details) return null;
							var r, e = e.details;
							return e.fragments[t - e.startSN] || ((r = e.fragmentHint) && r.sn === t ? r: t < e.startSN && i && i.sn === t ? i: null)
						}
						function u(e, t, i) {
							if (!e || !e.details) return null;
							var r = e.details.partList;
							if (r) for (var s = r.length; s--;) {
								var n = r[s];
								if (n.index === i && n.fragment.sn === t) return n
							}
							return null
						}
					},
					"./src/controller/stream-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return y
						});
						var A = i("./src/polyfills/number.ts"),
						p = i("./src/controller/base-stream-controller.ts"),
						n = i("./src/is-supported.ts"),
						g = i("./src/events.ts"),
						s = i("./src/utils/buffer-helper.ts"),
						a = i("./src/controller/fragment-tracker.ts"),
						d = i("./src/types/loader.ts"),
						m = i("./src/loader/fragment.ts"),
						h = i("./src/demux/transmuxer-interface.ts"),
						f = i("./src/types/transmuxer.ts"),
						r = i("./src/controller/gap-controller.ts"),
						o = i("./src/errors.ts"),
						l = i("./src/utils/logger.ts");
						function c(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function u(e, t) {
							return (u = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						v = p.
					default,
						t = v,
						(i = b).prototype = Object.create(t.prototype),
						u(i.prototype.constructor = i, t),
						(i = b.prototype)._registerListeners = function() {
							var e = this.hls;
							e.on(g.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.on(g.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.on(g.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.on(g.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.on(g.Events.LEVEL_LOADING, this.onLevelLoading, this),
							e.on(g.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.on(g.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
							e.on(g.Events.ERROR, this.onError, this),
							e.on(g.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
							e.on(g.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
							e.on(g.Events.BUFFER_CREATED, this.onBufferCreated, this),
							e.on(g.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
							e.on(g.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
							e.on(g.Events.FRAG_BUFFERED, this.onFragBuffered, this)
						},
						i._unregisterListeners = function() {
							var e = this.hls;
							e.off(g.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.off(g.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.off(g.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.off(g.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.off(g.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.off(g.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
							e.off(g.Events.ERROR, this.onError, this),
							e.off(g.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
							e.off(g.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
							e.off(g.Events.BUFFER_CREATED, this.onBufferCreated, this),
							e.off(g.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
							e.off(g.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
							e.off(g.Events.FRAG_BUFFERED, this.onFragBuffered, this)
						},
						i.onHandlerDestroying = function() {
							this._unregisterListeners(),
							this.onMediaDetaching()
						},
						i.startLoad = function(e) {
							var t, i, r;
							this.levels ? (t = this.lastCurrentTime, i = this.hls, this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, this.startFragRequested || ( - 1 === (r = i.startLevel) && (i.config.testBandwidth ? this.bitrateTest = !(r = 0) : r = i.nextAutoLevel), this.level = i.nextLoadLevel = r, this.loadedmetadata = !1), 0 < t && -1 === e && (this.log("Override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = p.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()) : (this._forceStartLoad = !0, this.state = p.State.STOPPED)
						},
						i.stopLoad = function() {
							this._forceStartLoad = !1,
							v.prototype.stopLoad.call(this)
						},
						i.doTick = function() {
							switch (this.state) {
							case p.State.IDLE:
								this.doTickIdle();
								break;
							case p.State.WAITING_LEVEL:
								var e = this.levels,
								t = this.level,
								t = null == e || null == (e = e[t]) ? void 0 : e.details;
								if (!t || t.live && this.levelLastLoaded !== this.level) break;
								if (this.waitForCdnTuneIn(t)) break;
								this.state = p.State.IDLE;
								break;
							case p.State.FRAG_LOADING_WAITING_RETRY:
								e = self.performance.now(),
								t = this.retryDate; (!t || t <= e || null != (t = this.media) && t.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = p.State.IDLE)
							}
							this.onTickEnd()
						},
						i.onTickEnd = function() {
							v.prototype.onTickEnd.call(this),
							this.checkBuffer(),
							this.checkFragmentChanged()
						},
						i.doTickIdle = function() {
							var e = this.hls,
							t = this.levelLastLoaded,
							i = this.levels,
							r = this.media,
							s = e.config,
							n = e.nextLoadLevel;
							if (null !== t && (r || !this.startFragRequested && s.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && i && i[n]) {
								t = i[n],
								s = (this.level = e.nextLoadLevel = n, t.details);
								if (!s || this.state === p.State.WAITING_LEVEL || s.live && this.levelLastLoaded !== n) this.state = p.State.WAITING_LEVEL;
								else {
									i = this.getFwdBufferInfo(this.mediaBuffer || r, d.PlaylistLevelType.MAIN);
									if (null !== i && !(i.len >= this.getMaxBufferLength(t.maxBitrate))) {
										if (this._streamEnded(i, s)) return e = {},
										this.altAudio && (e.type = "video"),
										this.hls.trigger(g.Events.BUFFER_EOS, e),
										void(this.state = p.State.ENDED);
										n = i.end,
										t = this.getNextFragment(n, s); ! this.couldBacktrack || this.fragPrevious || !t || "initSegment" === t.sn || 1 < (e = t.sn - s.startSN) && (t = s.fragments[e - 1], this.fragmentTracker.removeFragment(t)),
										t && this.fragmentTracker.getState(t) === a.FragmentState.OK && this.nextLoadPosition > n && (i = this.audioOnly && !this.altAudio ? m.ElementaryStreamTypes.AUDIO: m.ElementaryStreamTypes.VIDEO, this.afterBufferFlushed(r, i, d.PlaylistLevelType.MAIN), t = this.getNextFragment(this.nextLoadPosition, s)),
										t && ("identity" !== (null == (e = (t = !t.initSegment || t.initSegment.data || this.bitrateTest ? t: t.initSegment).decryptdata) ? void 0 : e.keyFormat) || null != (r = t.decryptdata) && r.key ? this.loadFragment(t, s, n) : this.loadKey(t, s))
									}
								}
							}
						},
						i.loadFragment = function(e, t, i) {
							var r = this.fragmentTracker.getState(e);
							if (this.fragCurrent = e, r === a.FragmentState.BACKTRACKED) {
								var s = this.fragmentTracker.getBacktrackData(e);
								if (s) return this._handleFragmentLoadProgress(s),
								void this._handleFragmentLoadComplete(s);
								r = a.FragmentState.NOT_LOADED
							}
							r === a.FragmentState.NOT_LOADED || r === a.FragmentState.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e) : this.bitrateTest ? (e.bitrateTest = !0, this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e)) : (this.startFragRequested = !0, v.prototype.loadFragment.call(this, e, t, i)) : r === a.FragmentState.APPENDING ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) : 0 === (null == (s = this.media) ? void 0 : s.buffered.length) && this.fragmentTracker.removeAllFragments()
						},
						i.getAppendedFrag = function(e) {
							e = this.fragmentTracker.getAppendedFrag(e, d.PlaylistLevelType.MAIN);
							return e && "fragment" in e ? e.fragment: e
						},
						i.getBufferedFrag = function(e) {
							return this.fragmentTracker.getBufferedFrag(e, d.PlaylistLevelType.MAIN)
						},
						i.followingBufferedFrag = function(e) {
							return e ? this.getBufferedFrag(e.end + .5) : null
						},
						i.immediateLevelSwitch = function() {
							this.abortCurrentFrag(),
							this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
						},
						i.nextLevelSwitch = function() {
							var e, t = this.levels,
							i = this.media;
							null != i && i.readyState && ((e = this.getAppendedFrag(i.currentTime)) && 1 < e.start && this.flushMainBuffer(0, e.start - 1), e = !i.paused && t ? (e = t[this.hls.nextLoadLevel], (t = this.fragLastKbps) && this.fragCurrent ? this.fragCurrent.duration * e.maxBitrate / (1e3 * t) + 1 : 0) : 0, (t = this.getBufferedFrag(i.currentTime + e)) && (i = this.followingBufferedFrag(t)) && (this.abortCurrentFrag(), e = i.maxStartPTS || i.start, i = i.duration, t = Math.max(t.end, e + Math.min(Math.max(i - this.config.maxFragLookUpTolerance, .5 * i), .75 * i)), this.flushMainBuffer(t, Number.POSITIVE_INFINITY)))
						},
						i.abortCurrentFrag = function() {
							var e = this.fragCurrent; (this.fragCurrent = null) != e && e.loader && e.loader.abort(),
							this.state === p.State.KEY_LOADING && (this.state = p.State.IDLE),
							this.nextLoadPosition = this.getLoadPosition()
						},
						i.flushMainBuffer = function(e, t) {
							v.prototype.flushMainBuffer.call(this, e, t, this.altAudio ? "video": null)
						},
						i.onMediaAttached = function(e, t) {
							v.prototype.onMediaAttached.call(this, e, t);
							e = t.media;
							this.onvplaying = this.onMediaPlaying.bind(this),
							this.onvseeked = this.onMediaSeeked.bind(this),
							e.addEventListener("playing", this.onvplaying),
							e.addEventListener("seeked", this.onvseeked),
							this.gapController = new r.
						default(this.config, e, this.fragmentTracker, this.hls)
						},
						i.onMediaDetaching = function() {
							var e = this.media;
							e && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null),
							this.fragPlaying = null,
							this.gapController && (this.gapController.destroy(), this.gapController = null),
							v.prototype.onMediaDetaching.call(this)
						},
						i.onMediaPlaying = function() {
							this.tick()
						},
						i.onMediaSeeked = function() {
							var e = this.media,
							e = e ? e.currentTime: null;
							Object(A.isFiniteNumber)(e) && this.log("Media seeked to " + e.toFixed(3)),
							this.tick()
						},
						i.onManifestLoading = function() {
							this.log("Trigger BUFFER_RESET"),
							this.hls.trigger(g.Events.BUFFER_RESET, void 0),
							this.fragmentTracker.removeAllFragments(),
							this.couldBacktrack = this.stalled = !1,
							this.startPosition = this.lastCurrentTime = 0,
							this.fragPlaying = null
						},
						i.onManifestParsed = function(e, t) {
							var i, r = !1,
							s = !1;
							t.levels.forEach(function(e) { (i = e.audioCodec) && ( - 1 !== i.indexOf("mp4a.40.2") && (r = !0), -1 !== i.indexOf("mp4a.40.5") && (s = !0))
							}),
							this.audioCodecSwitch = r && s && !Object(n.changeTypeSupported)(),
							this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
							this.levels = t.levels,
							this.startFragRequested = !1
						},
						i.onLevelLoading = function(e, t) {
							var i = this.levels;
							i && this.state === p.State.IDLE && (!(i = i[t.level]).details || i.details.live && this.levelLastLoaded !== t.level || this.waitForCdnTuneIn(i.details)) && (this.state = p.State.WAITING_LEVEL)
						},
						i.onLevelLoaded = function(e, t) {
							var i = this.levels,
							r = t.level,
							s = t.details,
							n = s.totalduration;
							if (i) {
								this.log("Level " + r + " loaded [" + s.startSN + "," + s.endSN + "], cc [" + s.startCC + ", " + s.endCC + "] duration:" + n);
								n = this.fragCurrent,
								t = (!n || this.state !== p.State.FRAG_LOADING && this.state !== p.State.FRAG_LOADING_WAITING_RETRY || n.level !== t.level && n.loader && (this.state = p.State.IDLE, n.loader.abort()), i[r]),
								n = 0;
								if (s.live || null != (i = t.details) && i.live) {
									if (s.fragments[0] || (s.deltaUpdateFailed = !0), s.deltaUpdateFailed) return;
									n = this.alignPlaylists(s, t.details)
								}
								if (t.details = s, this.levelLastLoaded = r, this.hls.trigger(g.Events.LEVEL_UPDATED, {
									details: s,
									level: r
								}), this.state === p.State.WAITING_LEVEL) {
									if (this.waitForCdnTuneIn(s)) return;
									this.state = p.State.IDLE
								}
								this.startFragRequested ? s.live && this.synchronizeToLiveEdge(s) : this.setStartPosition(s, n),
								this.tick()
							} else this.warn("Levels were reset while loading level " + r)
						},
						i._handleFragmentLoadProgress = function(e) {
							var t, i, r, s, n, a, o, l = e.frag,
							c = e.part,
							e = e.payload,
							u = this.levels;
							u ? (t = (u = u[l.level]).details) ? (i = u.videoCodec, r = t.PTSKnown || !t.live, s = null == (s = l.initSegment) ? void 0 : s.data, u = this._getAudioCodec(u), n = this.transmuxer = this.transmuxer || new h.
						default(this.hls, d.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), a = c ? c.index: -1, a = new f.ChunkMetadata(l.level, l.sn, l.stats.chunkCount, e.byteLength, a, -1 !== a), o = this.initPTS[l.cc], n.push(e, s, u, i, l, c, t.totalduration, r, a, o)) : this.warn("Dropping fragment " + l.sn + " of level " + l.level + " after level details were reset") : this.warn("Levels were reset while fragment load was in progress. Fragment " + l.sn + " of level " + l.level + " will not be buffered")
						},
						i.onAudioTrackSwitching = function(e, t) {
							var i = this.altAudio,
							r = !!t.url,
							t = t.id;
							r || (this.mediaBuffer !== this.media ? (this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media, null != (r = this.fragCurrent) && r.loader && (this.log("Switching to main audio track, cancel main fragment load"), r.loader.abort()), this.resetTransmuxer(), this.resetLoadingState()) : this.audioOnly && this.resetTransmuxer(), r = this.hls, i && r.trigger(g.Events.BUFFER_FLUSHING, {
								startOffset: 0,
								endOffset: Number.POSITIVE_INFINITY,
								type: "audio"
							}), r.trigger(g.Events.AUDIO_TRACK_SWITCHED, {
								id: t
							}))
						},
						i.onAudioTrackSwitched = function(e, t) {
							var i, t = t.id,
							t = !!this.hls.audioTracks[t].url;
							t && (i = this.videoBuffer) && this.mediaBuffer !== i && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i),
							this.altAudio = t,
							this.tick()
						},
						i.onBufferCreated = function(e, t) {
							var i, r = t.tracks,
							s = !1;
							for (i in r) {
								var n, a, o = r[i];
								"main" === o.id ? (a = o, "video" === (n = i) && (o = r[i]) && (this.videoBuffer = o.buffer)) : s = !0
							}
							s && a ? (this.log("Alternate track found, use " + n + ".buffered to schedule main fragment loading"), this.mediaBuffer = a.buffer) : this.mediaBuffer = this.media
						},
						i.onFragBuffered = function(e, t) {
							var i = t.frag,
							t = t.part;
							if (!i || i.type === d.PlaylistLevelType.MAIN) {
								if (this.fragContextChanged(i)) return this.warn("Fragment " + i.sn + (t ? " p: " + t.index: "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state),
								void(this.state === p.State.PARSED && (this.state = p.State.IDLE));
								var r = (t || i).stats;
								this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)),
								"initSegment" !== i.sn && (this.fragPrevious = i),
								this.fragBufferedComplete(i, t)
							}
						},
						i.onError = function(e, t) {
							switch (t.details) {
							case o.ErrorDetails.FRAG_LOAD_ERROR:
							case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
							case o.ErrorDetails.KEY_LOAD_ERROR:
							case o.ErrorDetails.KEY_LOAD_TIMEOUT:
								this.onFragmentOrKeyLoadError(d.PlaylistLevelType.MAIN, t);
								break;
							case o.ErrorDetails.LEVEL_LOAD_ERROR:
							case o.ErrorDetails.LEVEL_LOAD_TIMEOUT:
								this.state !== p.State.ERROR && (t.fatal ? (this.warn("" + t.details), this.state = p.State.ERROR) : t.levelRetry || this.state !== p.State.WAITING_LEVEL || (this.state = p.State.IDLE));
								break;
							case o.ErrorDetails.BUFFER_FULL_ERROR:
								var i, r;
								"main" !== t.parent || this.state !== p.State.PARSING && this.state !== p.State.PARSED || (i = !0, (i = (r = this.getFwdBufferInfo(this.media, d.PlaylistLevelType.MAIN)) && .5 < r.len ? !this.reduceMaxBufferLength(r.len) : i) && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState())
							}
						},
						i.checkBuffer = function() {
							var e, t = this.media,
							i = this.gapController;
							t && i && t.readyState && (e = s.BufferHelper.getBuffered(t), !this.loadedmetadata && e.length ? (this.loadedmetadata = !0, this.seekToStartPos()) : i.poll(this.lastCurrentTime), this.lastCurrentTime = t.currentTime)
						},
						i.onFragLoadEmergencyAborted = function() {
							this.state = p.State.IDLE,
							this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
							this.tickImmediate()
						},
						i.onBufferFlushed = function(e, t) {
							var i, t = t.type; (t !== m.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) && (i = (t === m.ElementaryStreamTypes.VIDEO ? this.videoBuffer: this.mediaBuffer) || this.media, this.afterBufferFlushed(i, t, d.PlaylistLevelType.MAIN))
						},
						i.onLevelsUpdated = function(e, t) {
							this.levels = t.levels
						},
						i.swapAudioCodec = function() {
							this.audioCodecSwap = !this.audioCodecSwap
						},
						i.seekToStartPos = function() {
							var e, t = this.media,
							i = t.currentTime,
							r = this.startPosition;
							0 <= r && i < r && (t.seeking ? l.logger.log("could not seek to " + r + ", already seeking at " + i) : (0 < (e = ((e = s.BufferHelper.getBuffered(t)).length ? e.start(0) : 0) - r) && (e < this.config.maxBufferHole || e < this.config.maxFragLookUpTolerance) && (l.logger.log("adjusting start position by " + e + " to match buffer start"), this.startPosition = r += e), this.log("seek to target start position " + r + " from current time " + i), t.currentTime = r))
						},
						i._getAudioCodec = function(e) {
							e = this.config.defaultAudioCodec || e.audioCodec;
							return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5"),
							e
						},
						i._loadBitrateTestFrag = function(r) {
							var s = this;
							this._doFragLoad(r).then(function(e) {
								var t, i = s.hls; ! e || i.nextLoadLevel || s.fragContextChanged(r) || (s.fragLoadError = 0, s.state = p.State.IDLE, s.startFragRequested = !1, s.bitrateTest = !1, (t = r.stats).parsing.start = t.parsing.end = t.buffering.start = t.buffering.end = self.performance.now(), i.trigger(g.Events.FRAG_LOADED, e))
							})
						},
						i._handleTransmuxComplete = function(e) {
							var t = "main",
							i = this.hls,
							r = e.remuxResult,
							e = e.chunkMeta,
							s = this.getCurrentContext(e);
							if (!s) return this.warn("The loading context changed while buffering fragment " + e.sn + " of level " + e.level + ". This chunk will not be buffered."),
							void this.resetLiveStartWhenNotLoaded(e.level);
							var n = s.frag,
							a = s.part,
							s = s.level,
							o = r.video,
							l = r.text,
							c = r.id3,
							u = r.initSegment,
							d = this.altAudio ? void 0 : r.audio;
							if (!this.fragContextChanged(n)) {
								if (this.state = p.State.PARSING, u && (u.tracks && (this._bufferInitSegment(s, u.tracks, n, e), i.trigger(g.Events.FRAG_PARSING_INIT_SEGMENT, {
									frag: n,
									id: t,
									tracks: u.tracks
								})), h = u.initPTS, u = u.timescale, Object(A.isFiniteNumber)(h) && (this.initPTS[n.cc] = h, i.trigger(g.Events.INIT_PTS_FOUND, {
									frag: n,
									id: t,
									initPTS: h,
									timescale: u
								}))), o && !1 !== r.independent) {
									if (s.details) {
										var h = o.startPTS,
										u = o.endPTS,
										s = o.startDTS,
										f = o.endDTS;
										if (a) a.elementaryStreams[o.type] = {
											startPTS: h,
											endPTS: u,
											startDTS: s,
											endDTS: f
										};
										else if (o.firstKeyFrame && o.independent && (this.couldBacktrack = !0), o.dropped && o.independent) {
											if (this.getLoadPosition() + this.config.maxBufferHole < h) return void this.backtrack(n);
											n.setElementaryStreamInfo(o.type, n.start, u, n.start, f, !0)
										}
										n.setElementaryStreamInfo(o.type, h, u, s, f),
										this.bufferFragmentData(o, n, a, e)
									}
								} else if (!1 === r.independent) return void this.backtrack(n);
								d && (h = d.startPTS, u = d.endPTS, s = d.startDTS, f = d.endDTS, a && (a.elementaryStreams[m.ElementaryStreamTypes.AUDIO] = {
									startPTS: h,
									endPTS: u,
									startDTS: s,
									endDTS: f
								}), n.setElementaryStreamInfo(m.ElementaryStreamTypes.AUDIO, h, u, s, f), this.bufferFragmentData(d, n, a, e)),
								null != c && null != (o = c.samples) && o.length && (r = {
									frag: n,
									id: t,
									samples: c.samples
								},
								i.trigger(g.Events.FRAG_PARSING_METADATA, r)),
								l && (h = {
									frag: n,
									id: t,
									samples: l.samples
								},
								i.trigger(g.Events.FRAG_PARSING_USERDATA, h))
							}
						},
						i._bufferInitSegment = function(e, i, r, s) {
							var t, n, a, o, l, c = this;
							this.state === p.State.PARSING && (this.audioOnly = !!i.audio && !i.video, this.altAudio && !this.audioOnly && delete i.audio, t = i.audio, n = i.video, a = i.audiovideo, t && (o = e.audioCodec, l = navigator.userAgent.toLowerCase(), this.audioCodecSwitch && (o = o && ( - 1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5"), 1 !== t.metadata.channelCount && -1 === l.indexOf("firefox") && (o = "mp4a.40.5")), -1 !== l.indexOf("android") && "audio/mpeg" !== t.container && this.log("Android: force audio codec to " + (o = "mp4a.40.2")), e.audioCodec && e.audioCodec !== o && this.log('Swapping manifest audio codec "' + e.audioCodec + '" for "' + o + '"'), t.levelCodec = o, t.id = "main", this.log("Init audio buffer, container:" + t.container + ", codecs[selected/level/parsed]=[" + (o || "") + "/" + (e.audioCodec || "") + "/" + t.codec + "]")), n && (n.levelCodec = e.videoCodec, n.id = "main", this.log("Init video buffer, container:" + n.container + ", codecs[level/parsed]=[" + (e.videoCodec || "") + "/" + n.codec + "]")), a && this.log("Init audiovideo buffer, container:" + a.container + ", codecs[level/parsed]=[" + (e.attrs.CODECS || "") + "/" + a.codec + "]"), this.hls.trigger(g.Events.BUFFER_CODECS, i), Object.keys(i).forEach(function(e) {
								var t = i[e].initSegment;
								null != t && t.byteLength && c.hls.trigger(g.Events.BUFFER_APPENDING, {
									type: e,
									data: t,
									frag: r,
									part: null,
									chunkMeta: s,
									parent: r.type
								})
							}), this.tick())
						},
						i.backtrack = function(e) {
							this.couldBacktrack = !0,
							this.resetTransmuxer(),
							this.flushBufferGap(e);
							var t = this.fragmentTracker.backtrack(e);
							this.fragPrevious = null,
							this.nextLoadPosition = e.start,
							t ? this.resetFragmentLoading(e) : this.state = p.State.BACKTRACKING
						},
						i.checkFragmentChanged = function() {
							var e, t = this.media,
							i = null;
							t && 1 < t.readyState && !1 === t.seeking && (e = t.currentTime, s.BufferHelper.isBuffered(t, e) ? i = this.getAppendedFrag(e) : s.BufferHelper.isBuffered(t, e + .1) && (i = this.getAppendedFrag(e + .1)), i && (t = this.fragPlaying, e = i.level, t && i.sn === t.sn && t.level === e && i.urlId === t.urlId || (this.hls.trigger(g.Events.FRAG_CHANGED, {
								frag: i
							}), t && t.level === e || this.hls.trigger(g.Events.LEVEL_SWITCHED, {
								level: e
							}), this.fragPlaying = i)))
						},
						c(b.prototype, [{
							key: "nextLevel",
							get: function() {
								var e = this.nextBufferedFrag;
								return e ? e.level: -1
							}
						},
						{
							key: "currentLevel",
							get: function() {
								var e = this.media;
								if (e) {
									e = this.getAppendedFrag(e.currentTime);
									if (e) return e.level
								}
								return - 1
							}
						},
						{
							key: "nextBufferedFrag",
							get: function() {
								var e = this.media;
								return e ? (e = this.getAppendedFrag(e.currentTime), this.followingBufferedFrag(e)) : null
							}
						},
						{
							key: "forceStartLoad",
							get: function() {
								return this._forceStartLoad
							}
						}]);
						var v, y = b;
						function b(e, t) {
							return (e = v.call(this, e, t, "[stream-controller]") || this).audioCodecSwap = !1,
							e.gapController = null,
							e.level = -1,
							e._forceStartLoad = !1,
							e.altAudio = !1,
							e.audioOnly = !1,
							e.fragPlaying = null,
							e.onvplaying = null,
							e.onvseeked = null,
							e.fragLastKbps = 0,
							e.stalled = !1,
							e.couldBacktrack = !1,
							e.audioCodecSwitch = !1,
							e.videoBuffer = null,
							e._registerListeners(),
							e
						}
					},
					"./src/controller/subtitle-stream-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "SubtitleStreamController",
						function() {
							return p
						});
						var n = i("./src/events.ts"),
						l = i("./src/utils/buffer-helper.ts"),
						c = i("./src/controller/fragment-finders.ts"),
						a = i("./src/utils/discontinuities.ts"),
						o = i("./src/controller/level-helper.ts"),
						u = i("./src/controller/fragment-tracker.ts"),
						d = i("./src/controller/base-stream-controller.ts"),
						h = i("./src/types/loader.ts"),
						r = i("./src/types/level.ts");
						function s(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function f(e, t) {
							return (f = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						A = d.
					default,
						t = A,
						(i = g).prototype = Object.create(t.prototype),
						f(i.prototype.constructor = i, t),
						(i = g.prototype).onHandlerDestroying = function() {
							this._unregisterListeners(),
							this.mainDetails = null
						},
						i._registerListeners = function() {
							var e = this.hls;
							e.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.on(n.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.on(n.Events.ERROR, this.onError, this),
							e.on(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
							e.on(n.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
							e.on(n.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
							e.on(n.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
							e.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
						},
						i._unregisterListeners = function() {
							var e = this.hls;
							e.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.off(n.Events.LEVEL_LOADED, this.onLevelLoaded, this),
							e.off(n.Events.ERROR, this.onError, this),
							e.off(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
							e.off(n.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
							e.off(n.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
							e.off(n.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
							e.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
						},
						i.startLoad = function() {
							this.stopLoad(),
							this.state = d.State.IDLE,
							this.setInterval(500),
							this.tick()
						},
						i.onManifestLoading = function() {
							this.mainDetails = null,
							this.fragmentTracker.removeAllFragments()
						},
						i.onLevelLoaded = function(e, t) {
							this.mainDetails = t.details
						},
						i.onSubtitleFragProcessed = function(e, t) {
							var i = t.frag,
							t = t.success;
							if (this.fragPrevious = i, this.state = d.State.IDLE, t) {
								var r = this.tracksBuffered[this.currentTrackId];
								if (r) {
									for (var s, n = i.start,
									a = 0; a < r.length; a++) if (n >= r[a].start && n <= r[a].end) {
										s = r[a];
										break
									}
									t = i.start + i.duration;
									s ? s.end = t: r.push(s = {
										start: n,
										end: t
									}),
									this.fragmentTracker.fragBuffered(i)
								}
							}
						},
						i.onBufferFlushing = function(e, t) {
							var i, r, s, n = t.startOffset,
							a = t.endOffset;
							0 === n && a !== Number.POSITIVE_INFINITY && (i = this.currentTrackId, (r = this.levels).length && r[i] && r[i].details && ((s = a - r[i].details.targetduration) <= 0 || (t.endOffsetSubtitles = Math.max(0, s), this.tracksBuffered.forEach(function(e) {
								for (var t = 0; t < e.length;) if (e[t].end <= s) e.shift();
								else {
									if (! (e[t].start < s)) break;
									e[t].start = s,
									t++
								}
							}), this.fragmentTracker.removeFragmentsInRange(n, s, h.PlaylistLevelType.SUBTITLE))))
						},
						i.onError = function(e, t) {
							var t = t.frag;
							t && t.type === h.PlaylistLevelType.SUBTITLE && (null != (t = this.fragCurrent) && t.loader && this.fragCurrent.loader.abort(), this.state = d.State.IDLE)
						},
						i.onSubtitleTracksUpdated = function(e, t) {
							var i = this,
							t = t.subtitleTracks;
							this.tracksBuffered = [],
							this.levels = t.map(function(e) {
								return new r.Level(e)
							}),
							this.fragmentTracker.removeAllFragments(),
							this.fragPrevious = null,
							this.levels.forEach(function(e) {
								i.tracksBuffered[e.id] = []
							}),
							this.mediaBuffer = null
						},
						i.onSubtitleTrackSwitch = function(e, t) {
							this.currentTrackId = t.id,
							this.levels.length && -1 !== this.currentTrackId ? (null != (t = this.levels[this.currentTrackId]) && t.details ? this.mediaBuffer = this.mediaBufferTimeRanges: this.mediaBuffer = null, t && this.setInterval(500)) : this.clearInterval()
						},
						i.onSubtitleTrackLoaded = function(e, t) {
							var i = t.details,
							t = t.id,
							r = this.currentTrackId,
							s = this.levels;
							if (s.length) {
								var n = s[r];
								if (! (t >= s.length || t !== r) && n) {
									if (this.mediaBuffer = this.mediaBufferTimeRanges, i.live || null != (s = n.details) && s.live) {
										r = this.mainDetails;
										if (i.deltaUpdateFailed || !r) return;
										s = r.fragments[0];
										n.details ? 0 === this.alignPlaylists(i, n.details) && s && Object(o.addSliding)(i, s.start) : i.hasProgramDateTime && r.hasProgramDateTime ? Object(a.alignMediaPlaylistByPDT)(i, r) : s && Object(o.addSliding)(i, s.start)
									}
									n.details = i,
									this.levelLastLoaded = t,
									this.tick(),
									!i.live || this.fragCurrent || !this.media || this.state !== d.State.IDLE || Object(c.findFragmentByPTS)(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), n.details = void 0)
								}
							}
						},
						i._handleFragmentLoadComplete = function(e) {
							var i, r = e.frag,
							e = e.payload,
							t = r.decryptdata,
							s = this.hls; ! this.fragContextChanged(r) && e && 0 < e.byteLength && t && t.key && t.iv && "AES-128" === t.method && (i = performance.now(), this.decrypter.webCryptoDecrypt(new Uint8Array(e), t.key.buffer, t.iv.buffer).then(function(e) {
								var t = performance.now();
								s.trigger(n.Events.FRAG_DECRYPTED, {
									frag: r,
									payload: e,
									stats: {
										tstart: i,
										tdecrypt: t
									}
								})
							}))
						},
						i.doTick = function() {
							var e, t, i, r, s, n, a, o;
							this.media ? this.state === d.State.IDLE && (n = this.currentTrackId, (e = this.levels).length && e[n] && e[n].details && (n = (e = e[n].details).targetduration, t = this.config, s = this.media, i = (s = l.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, s.currentTime - n, t.maxBufferHole)).end, s.len > this.getMaxBufferLength() + n || (console.assert(e, "Subtitle track details are defined on idle subtitle stream controller tick"), n = (s = e.fragments).length, o = e.edge, a = this.fragPrevious, i < o ? (o = t.maxFragLookUpTolerance, !(r = Object(c.findFragmentByPTS)(a, s, i, o)) && a && a.start < s[0].start && (r = s[0])) : r = s[n - 1], null != (t = r) && t.encrypted ? this.loadKey(r, e) : r && this.fragmentTracker.getState(r) === u.FragmentState.NOT_LOADED && this.loadFragment(r, e, i)))) : this.state = d.State.IDLE
						},
						i.loadFragment = function(e, t, i) {
							this.fragCurrent = e,
							A.prototype.loadFragment.call(this, e, t, i)
						},
						s(g.prototype, [{
							key: "mediaBufferTimeRanges",
							get: function() {
								return this.tracksBuffered[this.currentTrackId] || []
							}
						}]);
						var A, p = g;
						function g(e, t) {
							return (e = A.call(this, e, t, "[subtitle-stream-controller]") || this).levels = [],
							e.currentTrackId = -1,
							e.tracksBuffered = [],
							e.mainDetails = null,
							e._registerListeners(),
							e
						}
					},
					"./src/controller/subtitle-track-controller.ts": function(e, t, i) {
						i.r(t);
						var l = i("./src/events.ts"),
						r = i("./src/utils/texttrack-utils.ts"),
						s = i("./src/controller/base-playlist-controller.ts"),
						n = i("./src/types/loader.ts");
						function a(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function o(e, t) {
							return (o = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						c = s.
					default,
						i = c,
						(s = u).prototype = Object.create(i.prototype),
						o(s.prototype.constructor = s, i),
						(s = u.prototype).destroy = function() {
							this.unregisterListeners(),
							this.tracks.length = 0,
							this.tracksInGroup.length = 0,
							this.trackChangeListener = this.asyncPollTrackChange = null,
							c.prototype.destroy.call(this)
						},
						s.registerListeners = function() {
							var e = this.hls;
							e.on(l.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.on(l.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.on(l.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.on(l.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.on(l.Events.LEVEL_LOADING, this.onLevelLoading, this),
							e.on(l.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
							e.on(l.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
							e.on(l.Events.ERROR, this.onError, this)
						},
						s.unregisterListeners = function() {
							var e = this.hls;
							e.off(l.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
							e.off(l.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.off(l.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.off(l.Events.MANIFEST_PARSED, this.onManifestParsed, this),
							e.off(l.Events.LEVEL_LOADING, this.onLevelLoading, this),
							e.off(l.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
							e.off(l.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
							e.off(l.Events.ERROR, this.onError, this)
						},
						s.onMediaAttached = function(e, t) {
							this.media = t.media,
							this.media && ( - 1 < this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
						},
						s.pollTrackChange = function(e) {
							self.clearInterval(this.subtitlePollingInterval),
							this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, e)
						},
						s.onMediaDetaching = function() {
							this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), -1 < this.trackId && (this.queuedDefaultTrack = this.trackId), d(this.media.textTracks).forEach(function(e) {
								Object(r.clearCurrentCues)(e)
							}), this.subtitleTrack = -1, this.media = null)
						},
						s.onManifestLoading = function() {
							this.tracks = [],
							this.groupId = null,
							this.tracksInGroup = [],
							this.trackId = -1,
							this.selectDefaultTrack = !0
						},
						s.onManifestParsed = function(e, t) {
							this.tracks = t.subtitleTracks
						},
						s.onSubtitleTrackLoaded = function(e, t) {
							var i, r = t.id,
							s = t.details,
							n = this.trackId,
							n = this.tracksInGroup[n];
							n ? (i = n.details, n.details = t.details, this.log("subtitle track " + r + " loaded [" + s.startSN + "-" + s.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, t, i))) : this.warn("Invalid subtitle track id " + r)
						},
						s.onLevelLoading = function(e, t) {
							this.switchLevel(t.level)
						},
						s.onLevelSwitching = function(e, t) {
							this.switchLevel(t.level)
						},
						s.switchLevel = function(e) {
							var t, i, r, s, e = this.hls.levels[e];
							null != e && e.textGroupIds && (t = e.textGroupIds[e.urlId], this.groupId !== t && (e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0, i = this.tracks.filter(function(e) {
								return ! t || e.groupId === t
							}), this.tracksInGroup = i, r = this.findTrackId(null == e ? void 0 : e.name) || this.findTrackId(), this.groupId = t, s = {
								subtitleTracks: i
							},
							this.log("Updating subtitle tracks, " + i.length + ' track(s) found in "' + t + '" group-id'), this.hls.trigger(l.Events.SUBTITLE_TRACKS_UPDATED, s), -1 !== r && this.setSubtitleTrack(r, e)))
						},
						s.findTrackId = function(e) {
							for (var t = this.tracksInGroup,
							i = 0; i < t.length; i++) {
								var r = t[i];
								if ((!this.selectDefaultTrack || r.
							default) && (!e || e === r.name)) return r.id
							}
							return - 1
						},
						s.onError = function(e, t) {
							c.prototype.onError.call(this, e, t),
							!t.fatal && t.context && t.context.type === n.PlaylistContextType.SUBTITLE_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.retryLoadingOrFail(t)
						},
						s.loadPlaylist = function(e) {
							var t = this.tracksInGroup[this.trackId];
							if (this.shouldLoadTrack(t)) {
								var i = t.id,
								r = t.groupId,
								t = t.url;
								if (e) try {
									t = e.addDirectives(t)
								} catch(e) {
									this.warn("Could not construct new URL with HLS Delivery Directives: " + e)
								}
								this.log("Loading subtitle playlist for id " + i),
								this.hls.trigger(l.Events.SUBTITLE_TRACK_LOADING, {
									url: t,
									id: i,
									groupId: r,
									deliveryDirectives: e || null
								})
							}
						},
						s.toggleTrackModes = function(e) {
							var t, i = this,
							r = this.media,
							s = this.subtitleDisplay,
							n = this.trackId;
							r && (t = (r = d(r.textTracks)).filter(function(e) {
								return e.groupId === i.groupId
							}), -1 === e ? [].slice.call(r).forEach(function(e) {
								e.mode = "disabled"
							}) : (r = t[n]) && (r.mode = "disabled"), (n = t[e]) && (n.mode = s ? "showing": "hidden"))
						},
						s.setSubtitleTrack = function(e, t) {
							var i, r, s, n, a, o = this.tracksInGroup;
							this.media ? (this.trackId !== e && this.toggleTrackModes(e), this.trackId === e && ( - 1 === e || null != (i = o[e]) && i.details) || e < -1 || e >= o.length || (this.clearTimer(), i = o[e], this.log("Switching to subtitle track " + e), this.trackId = e, i ? (o = i.id, r = i.groupId, s = i.name, n = i.type, a = i.url, this.hls.trigger(l.Events.SUBTITLE_TRACK_SWITCH, {
								id: o,
								groupId: void 0 === r ? "": r,
								name: s,
								type: n,
								url: a
							}), o = this.switchParams(i.url, null == t ? void 0 : t.details), this.loadPlaylist(o)) : this.hls.trigger(l.Events.SUBTITLE_TRACK_SWITCH, {
								id: e
							}))) : this.queuedDefaultTrack = e
						},
						s.onTextTracksChanged = function() {
							if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
								for (var e = -1,
								t = d(this.media.textTracks), i = 0; i < t.length; i++) if ("hidden" === t[i].mode) e = i;
								else if ("showing" === t[i].mode) {
									e = i;
									break
								}
								this.subtitleTrack !== e && (this.subtitleTrack = e)
							}
						},
						a(u.prototype, [{
							key: "subtitleTracks",
							get: function() {
								return this.tracksInGroup
							}
						},
						{
							key: "subtitleTrack",
							get: function() {
								return this.trackId
							},
							set: function(e) {
								this.selectDefaultTrack = !1;
								var t = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
								this.setSubtitleTrack(e, t)
							}
						}]);
						var c, i = u;
						function u(e) {
							var t;
							return (t = c.call(this, e, "[subtitle-track-controller]") || this).media = null,
							t.tracks = [],
							t.groupId = null,
							t.tracksInGroup = [],
							t.trackId = -1,
							t.selectDefaultTrack = !0,
							t.queuedDefaultTrack = -1,
							t.trackChangeListener = function() {
								return t.onTextTracksChanged()
							},
							t.asyncPollTrackChange = function() {
								return t.pollTrackChange(0)
							},
							t.useTextTrackPolling = !1,
							t.subtitlePollingInterval = -1,
							t.subtitleDisplay = !0,
							t.registerListeners(),
							t
						}
						function d(e) {
							for (var t = [], i = 0; i < e.length; i++) {
								var r = e[i];
								"subtitles" === r.kind && r.label && t.push(e[i])
							}
							return t
						}
						t.
					default = i
					},
					"./src/controller/timeline-controller.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "TimelineController",
						function() {
							return r
						});
						var a = i("./src/polyfills/number.ts"),
						h = i("./src/events.ts"),
						n = i("./src/utils/cea-608-parser.ts"),
						o = i("./src/utils/output-filter.ts"),
						l = i("./src/utils/webvtt-parser.ts"),
						c = i("./src/utils/texttrack-utils.ts"),
						u = i("./src/utils/imsc1-ttml-parser.ts"),
						d = i("./src/types/loader.ts"),
						f = i("./src/utils/logger.ts"),
						r = ((t = s.prototype).destroy = function() {
							var e = this.hls;
							e.off(h.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
							e.off(h.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.off(h.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.off(h.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
							e.off(h.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
							e.off(h.Events.FRAG_LOADING, this.onFragLoading, this),
							e.off(h.Events.FRAG_LOADED, this.onFragLoaded, this),
							e.off(h.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
							e.off(h.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
							e.off(h.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
							e.off(h.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
							e.off(h.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
							this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
						},
						t.addCues = function(e, t, i, r, s) {
							for (var n, a, o, l = !1,
							c = s.length; c--;) {
								var u = s[c],
								d = (n = u[0], d = u[1], a = t, Math.min(d, i) - Math.max(n, a));
								if (0 <= d && (u[0] = Math.min(u[0], t), u[1] = Math.max(u[1], i), l = !0, .5 < d / (i - t))) return
							}
							l || s.push([t, i]),
							this.config.renderTextTracksNatively ? (o = this.captionsTracks[e], this.Cues.newCue(o, t, i, r)) : (o = this.Cues.newCue(null, t, i, r), this.hls.trigger(h.Events.CUES_PARSED, {
								type: "captions",
								cues: o,
								track: e
							}))
						},
						t.onInitPtsFound = function(e, t) {
							var i = this,
							r = t.frag,
							s = t.id,
							n = t.initPTS,
							t = t.timescale,
							a = this.unparsedVttFrags;
							"main" === s && (this.initPTS[r.cc] = n, this.timescale[r.cc] = t),
							a.length && (this.unparsedVttFrags = [], a.forEach(function(e) {
								i.onFragLoaded(h.Events.FRAG_LOADED, e)
							}))
						},
						t.getExistingTrack = function(e) {
							var t = this.media;
							if (t) for (var i = 0; i < t.textTracks.length; i++) {
								var r = t.textTracks[i];
								if (r[e]) return r
							}
							return null
						},
						t.createCaptionsTrack = function(e) {
							this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e)
						},
						t.createNativeTrack = function(e) {
							var t, i, r, s, n;
							this.captionsTracks[e] || (s = this.captionsProperties, t = this.captionsTracks, i = this.media, r = (s = s[e]).label, s = s.languageCode, (n = this.getExistingTrack(e)) ? (t[e] = n, Object(c.clearCurrentCues)(t[e]), Object(c.sendAddTrackEvent)(t[e], i)) : (n = this.createTextTrack("captions", r, s)) && (n[e] = !0, t[e] = n))
						},
						t.createNonNativeTrack = function(e) {
							var t;
							this.nonNativeCaptionsTracks[e] || (t = this.captionsProperties[e]) && (t = {
								_id: e,
								label: t.label,
								kind: "captions",
							default:
								!!t.media && !!t.media.
							default,
								closedCaptions: t.media
							},
							this.nonNativeCaptionsTracks[e] = t, this.hls.trigger(h.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
								tracks: [t]
							}))
						},
						t.createTextTrack = function(e, t, i) {
							var r = this.media;
							if (r) return r.addTextTrack(e, t, i)
						},
						t.onMediaAttaching = function(e, t) {
							this.media = t.media,
							this._cleanTracks()
						},
						t.onMediaDetaching = function() {
							var t = this.captionsTracks;
							Object.keys(t).forEach(function(e) {
								Object(c.clearCurrentCues)(t[e]),
								delete t[e]
							}),
							this.nonNativeCaptionsTracks = {}
						},
						t.onManifestLoading = function() {
							this.lastSn = -1,
							this.lastPartIndex = -1,
							this.prevCC = -1,
							this.vttCCs = {
								ccOffset: 0,
								presentationOffset: 0,
								0 : {
									start: 0,
									prevCC: -1,
									new: !1
								}
							},
							this._cleanTracks(),
							this.tracks = [],
							this.captionsTracks = {},
							this.nonNativeCaptionsTracks = {},
							this.textTracks = [],
							this.unparsedVttFrags = this.unparsedVttFrags || [],
							this.initPTS = [],
							this.timescale = [],
							this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
						},
						t._cleanTracks = function() {
							var e = this.media;
							if (e) {
								var t = e.textTracks;
								if (t) for (var i = 0; i < t.length; i++) Object(c.clearCurrentCues)(t[i])
							}
						},
						t.onSubtitleTracksUpdated = function(e, t) {
							var o, l = this,
							t = (this.textTracks = [], t.subtitleTracks || []),
							i = t.some(function(e) {
								return e.textCodec === u.IMSC1_CODEC
							}); (this.config.enableWebVTT || i && this.config.enableIMSC1) && (i = this.tracks && t && this.tracks.length === t.length, this.tracks = t || [], this.config.renderTextTracksNatively ? (o = this.media ? this.media.textTracks: [], this.tracks.forEach(function(e, t) {
								var i, r, s;
								if (t < o.length) {
									for (var n = null,
									a = 0; a < o.length; a++) if (r = o[a], s = e, r && r.label === s.name && !r.textTrack1 && !r.textTrack2) {
										n = o[a];
										break
									}
									n && (i = n)
								}
								i ? Object(c.clearCurrentCues)(i) : (i = l.createTextTrack("subtitles", e.name, e.lang)) && (i.mode = "disabled"),
								i && (i.groupId = e.groupId, l.textTracks.push(i))
							})) : !i && this.tracks && this.tracks.length && (t = this.tracks.map(function(e) {
								return {
									label: e.name,
									kind: e.type.toLowerCase(),
								default:
									e.
								default,
									subtitleTrack: e
								}
							}), this.hls.trigger(h.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
								tracks: t
							})))
						},
						t.onManifestLoaded = function(e, t) {
							var i = this;
							this.config.enableCEA708Captions && t.captions && t.captions.forEach(function(e) {
								var t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
								t && (t = "textTrack" + t[1], (t = i.captionsProperties[t]) && (t.label = e.name, e.lang && (t.languageCode = e.lang), t.media = e))
							})
						},
						t.onFragLoading = function(e, t) {
							var i, r = this.cea608Parser1,
							s = this.cea608Parser2,
							n = this.lastSn,
							a = this.lastPartIndex;
							this.enabled && r && s && t.frag.type === d.PlaylistLevelType.MAIN && (i = t.frag.sn, t = null != (t = null == t || null == (t = t.part) ? void 0 : t.index) ? t: -1, i === n + 1 || i === n && t === a + 1 || (r.reset(), s.reset()), this.lastSn = i, this.lastPartIndex = t)
						},
						t.onFragLoaded = function(e, t) {
							var i = t.frag,
							r = t.payload,
							s = this.initPTS,
							n = this.unparsedVttFrags;
							if (i.type === d.PlaylistLevelType.SUBTITLE) if (r.byteLength) {
								if (!Object(a.isFiniteNumber)(s[i.cc])) return n.push(t),
								void(s.length && this.hls.trigger(h.Events.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: i,
									error: new Error("Missing initial subtitle PTS")
								}));
								var n = i.decryptdata,
								s = "stats" in t;
								null != n && null != n.key && "AES-128" === n.method && !s || (t = this.tracks[i.level], (n = this.vttCCs)[i.cc] || (n[i.cc] = {
									start: i.start,
									prevCC: this.prevCC,
									new: !0
								},
								this.prevCC = i.cc), t && t.textCodec === u.IMSC1_CODEC ? this._parseIMSC1(i, r) : this._parseVTTs(i, r, n))
							} else this.hls.trigger(h.Events.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: i,
								error: new Error("Empty subtitle payload")
							})
						},
						t._parseIMSC1 = function(t, e) {
							var i = this,
							r = this.hls;
							Object(u.parseIMSC1)(e, this.initPTS[t.cc], this.timescale[t.cc],
							function(e) {
								i._appendCues(e, t.level),
								r.trigger(h.Events.SUBTITLE_FRAG_PROCESSED, {
									success: !0,
									frag: t
								})
							},
							function(e) {
								f.logger.log("Failed to parse IMSC1: " + e),
								r.trigger(h.Events.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: t,
									error: e
								})
							})
						},
						t._parseVTTs = function(t, i, e) {
							var r = this,
							s = this.hls;
							Object(l.parseWebVTT)(i, this.initPTS[t.cc], this.timescale[t.cc], e, t.cc, t.start,
							function(e) {
								r._appendCues(e, t.level),
								s.trigger(h.Events.SUBTITLE_FRAG_PROCESSED, {
									success: !0,
									frag: t
								})
							},
							function(e) {
								r._fallbackToIMSC1(t, i),
								f.logger.log("Failed to parse VTT cue: " + e),
								s.trigger(h.Events.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: t,
									error: e
								})
							})
						},
						t._fallbackToIMSC1 = function(e, t) {
							var i = this,
							r = this.tracks[e.level];
							r.textCodec || Object(u.parseIMSC1)(t, this.initPTS[e.cc], this.timescale[e.cc],
							function() {
								r.textCodec = u.IMSC1_CODEC,
								i._parseIMSC1(e, t)
							},
							function() {
								r.textCodec = "wvtt"
							})
						},
						t._appendCues = function(e, t) {
							var i, r = this.hls;
							this.config.renderTextTracksNatively ? "disabled" !== (i = this.textTracks[t]).mode && e.forEach(function(e) {
								return Object(c.addCueToTrack)(i, e)
							}) : (t = this.tracks[t].
						default ? "default": "subtitles" + t, r.trigger(h.Events.CUES_PARSED, {
								type: "subtitles",
								cues: e,
								track: t
							}))
						},
						t.onFragDecrypted = function(e, t) {
							var i = t.frag;
							i.type === d.PlaylistLevelType.SUBTITLE && (Object(a.isFiniteNumber)(this.initPTS[i.cc]) ? this.onFragLoaded(h.Events.FRAG_LOADED, t) : this.unparsedVttFrags.push(t))
						},
						t.onSubtitleTracksCleared = function() {
							this.tracks = [],
							this.captionsTracks = {}
						},
						t.onFragParsingUserdata = function(e, t) {
							var i = this.cea608Parser1,
							r = this.cea608Parser2;
							if (this.enabled && i && r) for (var s = 0; s < t.samples.length; s++) {
								var n = t.samples[s].bytes;
								n && (n = this.extractCea608Data(n), i.addData(t.samples[s].pts, n[0]), r.addData(t.samples[s].pts, n[1]))
							}
						},
						t.onBufferFlushing = function(e, t) {
							var i, r, s = t.startOffset,
							n = t.endOffset,
							a = t.endOffsetSubtitles,
							t = t.type,
							o = this.media; ! o || o.currentTime < n || (t && "video" !== t || (i = this.captionsTracks, Object.keys(i).forEach(function(e) {
								return Object(c.removeCuesInRange)(i[e], s, n)
							})), this.config.renderTextTracksNatively && 0 === s && void 0 !== a && (r = this.textTracks, Object.keys(r).forEach(function(e) {
								return Object(c.removeCuesInRange)(r[e], s, a)
							})))
						},
						t.extractCea608Data = function(e) {
							for (var t = 31 & e[0], i = 2, r = [[], []], s = 0; s < t; s++) {
								var n = e[i++],
								a = 127 & e[i++],
								o = 127 & e[i++],
								l = 3 & n;
								0 == a && 0 == o || 0 == (4 & n) || 0 != l && 1 != l || (r[l].push(a), r[l].push(o))
							}
							return r
						},
						s);
						function s(e) {
							var t, i, r, s;
							this.hls = void 0,
							this.media = null,
							this.config = void 0,
							this.enabled = !0,
							this.Cues = void 0,
							this.textTracks = [],
							this.tracks = [],
							this.initPTS = [],
							this.timescale = [],
							this.unparsedVttFrags = [],
							this.captionsTracks = {},
							this.nonNativeCaptionsTracks = {},
							this.cea608Parser1 = void 0,
							this.cea608Parser2 = void 0,
							this.lastSn = -1,
							this.lastPartIndex = -1,
							this.prevCC = -1,
							this.vttCCs = {
								ccOffset: 0,
								presentationOffset: 0,
								0 : {
									start: 0,
									prevCC: -1,
									new: !1
								}
							},
							this.captionsProperties = void 0,
							this.hls = e,
							this.config = e.config,
							this.Cues = e.config.cueHandler,
							this.captionsProperties = {
								textTrack1: {
									label: this.config.captionsTextTrack1Label,
									languageCode: this.config.captionsTextTrack1LanguageCode
								},
								textTrack2: {
									label: this.config.captionsTextTrack2Label,
									languageCode: this.config.captionsTextTrack2LanguageCode
								},
								textTrack3: {
									label: this.config.captionsTextTrack3Label,
									languageCode: this.config.captionsTextTrack3LanguageCode
								},
								textTrack4: {
									label: this.config.captionsTextTrack4Label,
									languageCode: this.config.captionsTextTrack4LanguageCode
								}
							},
							this.config.enableCEA708Captions && (t = new o.
						default(this, "textTrack1"), i = new o.
						default(this, "textTrack2"), r = new o.
						default(this, "textTrack3"), s = new o.
						default(this, "textTrack4"), this.cea608Parser1 = new n.
						default(1, t, i), this.cea608Parser2 = new n.
						default(3, r, s)),
							e.on(h.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
							e.on(h.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
							e.on(h.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.on(h.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
							e.on(h.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
							e.on(h.Events.FRAG_LOADING, this.onFragLoading, this),
							e.on(h.Events.FRAG_LOADED, this.onFragLoaded, this),
							e.on(h.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
							e.on(h.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
							e.on(h.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
							e.on(h.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
							e.on(h.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
						}
					},
					"./src/crypt/aes-crypto.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						});
						s.prototype.decrypt = function(e, t) {
							return this.subtle.decrypt({
								name: "AES-CBC",
								iv: this.aesIV
							},
							t, e)
						};
						var r = s;
						function s(e, t) {
							this.subtle = void 0,
							this.aesIV = void 0,
							this.subtle = e,
							this.aesIV = t
						}
					},
					"./src/crypt/aes-decryptor.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "removePadding",
						function() {
							return s
						}),
						i.d(t, "default",
						function() {
							return n
						});
						var r = i("./src/utils/typed-array.ts");
						function s(e) {
							var t = e.byteLength,
							i = t && new DataView(e.buffer).getUint8(t - 1);
							return i ? Object(r.sliceUint8)(e, 0, t - i) : e
						} (t = a.prototype).uint8ArrayToUint32Array_ = function(e) {
							for (var t = new DataView(e), i = new Uint32Array(4), r = 0; r < 4; r++) i[r] = t.getUint32(4 * r);
							return i
						},
						t.initTable = function() {
							for (var e = this.sBox,
							t = this.invSBox,
							i = this.subMix,
							r = i[0], s = i[1], n = i[2], a = i[3], i = this.invSubMix, o = i[0], l = i[1], c = i[2], u = i[3], d = new Uint32Array(256), h = 0, f = 0, A = 0, A = 0; A < 256; A++) d[A] = A < 128 ? A << 1 : A << 1 ^ 283;
							for (A = 0; A < 256; A++) {
								var p = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4,
								g = (e[h] = p = p >>> 8 ^ 255 & p ^ 99, d[t[p] = h]),
								m = d[g],
								v = d[m],
								y = 257 * d[p] ^ 16843008 * p;
								r[h] = y << 24 | y >>> 8,
								s[h] = y << 16 | y >>> 16,
								n[h] = y << 8 | y >>> 24,
								a[h] = y,
								o[p] = (y = 16843009 * v ^ 65537 * m ^ 257 * g ^ 16843008 * h) << 24 | y >>> 8,
								l[p] = y << 16 | y >>> 16,
								c[p] = y << 8 | y >>> 24,
								u[p] = y,
								h ? (h = g ^ d[d[d[v ^ g]]], f ^= d[d[f]]) : h = f = 1
							}
						},
						t.expandKey = function(e) {
							for (var t = this.uint8ArrayToUint32Array_(e), i = !0, r = 0; r < t.length && i;) i = t[r] === this.key[r],
							r++;
							if (!i) {
								this.key = t;
								var s = this.keySize = t.length;
								if (4 !== s && 6 !== s && 8 !== s) throw new Error("Invalid aes key size=" + s);
								for (var n, a, o, l = this.ksRows = 4 * (s + 6 + 1), c = this.keySchedule = new Uint32Array(l), u = this.invKeySchedule = new Uint32Array(l), d = this.sBox, h = this.rcon, e = this.invSubMix, f = e[0], A = e[1], p = e[2], g = e[3], m = 0; m < l; m++) m < s ? a = c[m] = t[m] : (o = a, m % s == 0 ? (o = d[(o = o << 8 | o >>> 24) >>> 24] << 24 | d[o >>> 16 & 255] << 16 | d[o >>> 8 & 255] << 8 | d[255 & o], o ^= h[m / s | 0] << 24) : 6 < s && m % s == 4 && (o = d[o >>> 24] << 24 | d[o >>> 16 & 255] << 16 | d[o >>> 8 & 255] << 8 | d[255 & o]), c[m] = a = (c[m - s] ^ o) >>> 0);
								for (n = 0; n < l; n++) m = l - n,
								o = 3 & n ? c[m] : c[m - 4],
								u[n] = n < 4 || m <= 4 ? o: f[d[o >>> 24]] ^ A[d[o >>> 16 & 255]] ^ p[d[o >>> 8 & 255]] ^ g[d[255 & o]],
								u[n] = u[n] >>> 0
							}
						},
						t.networkToHostOrderSwap = function(e) {
							return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
						},
						t.decrypt = function(e, t, i) {
							for (var r, s, n, a, o, l, c, u, d, h, f, A, p, g, m = this.keySize + 6,
							v = this.invKeySchedule,
							y = this.invSBox,
							b = this.invSubMix,
							E = b[0], S = b[1], T = b[2], w = b[3], b = this.uint8ArrayToUint32Array_(i), k = b[0], R = b[1], C = b[2], D = b[3], L = new Int32Array(e), I = new Int32Array(L.length), B = this.networkToHostOrderSwap; t < L.length;) {
								for (d = B(L[t]), h = B(L[t + 1]), f = B(L[t + 2]), A = B(L[t + 3]), o = d ^ v[0], l = A ^ v[1], c = f ^ v[2], u = h ^ v[3], p = 4, g = 1; g < m; g++) r = E[o >>> 24] ^ S[l >> 16 & 255] ^ T[c >> 8 & 255] ^ w[255 & u] ^ v[p],
								s = E[l >>> 24] ^ S[c >> 16 & 255] ^ T[u >> 8 & 255] ^ w[255 & o] ^ v[p + 1],
								n = E[c >>> 24] ^ S[u >> 16 & 255] ^ T[o >> 8 & 255] ^ w[255 & l] ^ v[p + 2],
								a = E[u >>> 24] ^ S[o >> 16 & 255] ^ T[l >> 8 & 255] ^ w[255 & c] ^ v[p + 3],
								o = r,
								l = s,
								c = n,
								u = a,
								p += 4;
								r = y[o >>> 24] << 24 ^ y[l >> 16 & 255] << 16 ^ y[c >> 8 & 255] << 8 ^ y[255 & u] ^ v[p],
								s = y[l >>> 24] << 24 ^ y[c >> 16 & 255] << 16 ^ y[u >> 8 & 255] << 8 ^ y[255 & o] ^ v[p + 1],
								n = y[c >>> 24] << 24 ^ y[u >> 16 & 255] << 16 ^ y[o >> 8 & 255] << 8 ^ y[255 & l] ^ v[p + 2],
								a = y[u >>> 24] << 24 ^ y[o >> 16 & 255] << 16 ^ y[l >> 8 & 255] << 8 ^ y[255 & c] ^ v[p + 3],
								I[t] = B(r ^ k),
								I[t + 1] = B(a ^ R),
								I[t + 2] = B(n ^ C),
								I[t + 3] = B(s ^ D),
								k = d,
								R = h,
								C = f,
								D = A,
								t += 4
							}
							return I.buffer
						};
						var n = a;
						function a() {
							this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
							this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
							this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
							this.sBox = new Uint32Array(256),
							this.invSBox = new Uint32Array(256),
							this.key = new Uint32Array(0),
							this.ksRows = 0,
							this.keySize = 0,
							this.keySchedule = void 0,
							this.invKeySchedule = void 0,
							this.initTable()
						}
					},
					"./src/crypt/decrypter.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						});
						var a = i("./src/crypt/aes-crypto.ts"),
						o = i("./src/crypt/fast-aes-key.ts"),
						l = i("./src/crypt/aes-decryptor.ts"),
						s = i("./src/utils/logger.ts"),
						c = i("./src/utils/mp4-tools.ts"),
						u = i("./src/utils/typed-array.ts"),
						r = ((t = n.prototype).destroy = function() {
							this.observer = null
						},
						t.isSync = function() {
							return this.config.enableSoftwareAES
						},
						t.flush = function() {
							var e = this.currentResult;
							if (e) return e = new Uint8Array(e),
							this.reset(),
							this.removePKCS7Padding ? Object(l.removePadding)(e) : e;
							this.reset()
						},
						t.reset = function() {
							this.currentResult = null,
							this.currentIV = null,
							this.remainderData = null,
							this.softwareDecrypter && (this.softwareDecrypter = null)
						},
						t.decrypt = function(e, t, i, r) {
							var s;
							this.config.enableSoftwareAES ? (this.softwareDecrypt(new Uint8Array(e), t, i), (s = this.flush()) && r(s.buffer)) : this.webCryptoDecrypt(new Uint8Array(e), t, i).then(r)
						},
						t.softwareDecrypt = function(e, t, i) {
							var r = this.currentIV,
							s = this.currentResult,
							n = this.remainderData,
							n = (this.logOnce("JS AES decrypt"), n && (e = Object(c.appendUint8Array)(n, e), this.remainderData = null), this.getValidChunk(e));
							if (!n.length) return null;
							r && (i = r);
							e = this.softwareDecrypter,
							(e = e || (this.softwareDecrypter = new l.
						default)).expandKey(t),
							r = s;
							return this.currentResult = e.decrypt(n.buffer, 0, i),
							this.currentIV = Object(u.sliceUint8)(n, -16).buffer,
							r || null
						},
						t.webCryptoDecrypt = function(t, i, r) {
							var s = this,
							n = this.subtle;
							return this.key === i && this.fastAesKey || (this.key = i, this.fastAesKey = new o.
						default(n, i)),
							this.fastAesKey.expandKey().then(function(e) {
								return n ? new a.
							default(n, r).decrypt(t.buffer, e) : Promise.reject(new Error("web crypto not initialized"))
							}).
							catch(function(e) {
								return s.onWebCryptoError(e, t, i, r)
							})
						},
						t.onWebCryptoError = function(e, t, i, r) {
							return s.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", e),
							this.config.enableSoftwareAES = !0,
							this.logEnabled = !0,
							this.softwareDecrypt(t, i, r)
						},
						t.getValidChunk = function(e) {
							var t = e,
							i = e.length - e.length % 16;
							return i !== e.length && (t = Object(u.sliceUint8)(e, 0, i), this.remainderData = Object(u.sliceUint8)(e, i)),
							t
						},
						t.logOnce = function(e) {
							this.logEnabled && (s.logger.log("[decrypter.ts]: " + e), this.logEnabled = !1)
						},
						n);
						function n(e, t, i) {
							i = (void 0 === i ? {}: i).removePKCS7Padding,
							i = void 0 === i || i;
							if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = e, this.config = t, this.removePKCS7Padding = i) try {
								var r = self.crypto;
								r && (this.subtle = r.subtle || r.webkitSubtle)
							} catch(e) {}
							null === this.subtle && (this.config.enableSoftwareAES = !0)
						}
					},
					"./src/crypt/fast-aes-key.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						});
						s.prototype.expandKey = function() {
							return this.subtle.importKey("raw", this.key, {
								name: "AES-CBC"
							},
							!1, ["encrypt", "decrypt"])
						};
						var r = s;
						function s(e, t) {
							this.subtle = void 0,
							this.key = void 0,
							this.subtle = e,
							this.key = t
						}
					},
					"./src/demux/aacdemuxer.ts": function(e, t, i) {
						i.r(t);
						var r = i("./src/demux/base-audio-demuxer.ts"),
						s = i("./src/demux/adts.ts"),
						n = i("./src/utils/logger.ts"),
						a = i("./src/demux/id3.ts");
						function o(e, t) {
							return (o = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						l = r.
					default,
						i = l,
						(r = c).prototype = Object.create(i.prototype),
						o(r.prototype.constructor = r, i),
						(r = c.prototype).resetInitSegment = function(e, t, i) {
							l.prototype.resetInitSegment.call(this, e, t, i),
							this._audioTrack = {
								container: "audio/adts",
								type: "audio",
								id: 2,
								pid: -1,
								sequenceNumber: 0,
								isAAC: !0,
								samples: [],
								manifestCodec: e,
								duration: i,
								inputTimeScale: 9e4,
								dropped: 0
							}
						},
						c.probe = function(e) {
							if (!e) return ! 1;
							for (var t = (a.getID3Data(e, 0) || []).length, i = e.length; t < i; t++) if (s.probe(e, t)) return n.logger.log("ADTS sync word found !"),
							!0;
							return ! 1
						},
						r.canParse = function(e, t) {
							return s.canParse(e, t)
						},
						r.appendFrame = function(e, t, i) {
							s.initTrackConfig(e, this.observer, t, i, e.manifestCodec);
							e = s.appendFrame(e, t, i, this.initPTS, this.frameIndex);
							if (e && 0 === e.missing) return e
						};
						var l, i = c;
						function c(e, t) {
							var i;
							return (i = l.call(this) || this).observer = void 0,
							i.config = void 0,
							i.observer = e,
							i.config = t,
							i
						}
						i.minProbeByteLength = 9,
						t.
					default = i
					},
					"./src/demux/adts.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "getAudioConfig",
						function() {
							return n
						}),
						i.d(t, "isHeaderPattern",
						function() {
							return r
						}),
						i.d(t, "getHeaderLength",
						function() {
							return a
						}),
						i.d(t, "getFullFrameLength",
						function() {
							return o
						}),
						i.d(t, "canGetFrameLength",
						function() {
							return s
						}),
						i.d(t, "isHeader",
						function() {
							return l
						}),
						i.d(t, "canParse",
						function() {
							return c
						}),
						i.d(t, "probe",
						function() {
							return u
						}),
						i.d(t, "initTrackConfig",
						function() {
							return A
						}),
						i.d(t, "getFrameDuration",
						function() {
							return p
						}),
						i.d(t, "parseFrameHeader",
						function() {
							return g
						}),
						i.d(t, "appendFrame",
						function() {
							return m
						});
						var d = i("./src/utils/logger.ts"),
						h = i("./src/errors.ts"),
						f = i("./src/events.ts");
						function n(e, t, i, r) {
							var s, n, a = navigator.userAgent.toLowerCase(),
							o = r,
							l = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
							c = 1 + ((192 & t[i + 2]) >>> 6),
							u = (60 & t[i + 2]) >>> 2;
							if (! (l.length - 1 < u)) return s = (1 & t[i + 2]) << 2,
							s |= (192 & t[i + 3]) >>> 6,
							d.logger.log("manifest codec:" + r + ", ADTS type:" + c + ", samplingIndex:" + u),
							t = /firefox/i.test(a) ? 6 <= u ? (c = 5, n = new Array(4), u - 3) : (c = 2, n = new Array(2), u) : -1 !== a.indexOf("android") ? (c = 2, n = new Array(2), u) : (c = 5, n = new Array(4), r && ( - 1 !== r.indexOf("mp4a.40.29") || -1 !== r.indexOf("mp4a.40.5")) || !r && 6 <= u ? u - 3 : ((r && -1 !== r.indexOf("mp4a.40.2") && (6 <= u && 1 == s || /vivaldi/i.test(a)) || !r && 1 == s) && (c = 2, n = new Array(2)), u)),
							n[0] = c << 3,
							n[0] |= (14 & u) >> 1,
							n[1] |= (1 & u) << 7,
							n[1] |= s << 3,
							5 === c && (n[1] |= (14 & t) >> 1, n[2] = (1 & t) << 7, n[2] |= 8, n[3] = 0),
							{
								config: n,
								samplerate: l[u],
								channelCount: s,
								codec: "mp4a.40." + c,
								manifestCodec: o
							};
							e.trigger(f.Events.ERROR, {
								type: h.ErrorTypes.MEDIA_ERROR,
								details: h.ErrorDetails.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "invalid ADTS sampling index:" + u
							})
						}
						function r(e, t) {
							return 255 === e[t] && 240 == (246 & e[t + 1])
						}
						function a(e, t) {
							return 1 & e[t + 1] ? 7 : 9
						}
						function o(e, t) {
							return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
						}
						function s(e, t) {
							return t + 5 < e.length
						}
						function l(e, t) {
							return t + 1 < e.length && r(e, t)
						}
						function c(e, t) {
							return s(e, t) && r(e, t) && o(e, t) <= e.length - t
						}
						function u(e, t) {
							if (l(e, t)) {
								var i = a(e, t);
								if (t + i >= e.length) return ! 1;
								var r = o(e, t);
								if (r <= i) return ! 1;
								i = t + r;
								return i === e.length || l(e, i)
							}
							return ! 1
						}
						function A(e, t, i, r, s) {
							e.samplerate || (t = n(t, i, r, s)) && (e.config = t.config, e.samplerate = t.samplerate, e.channelCount = t.channelCount, e.codec = t.codec, e.manifestCodec = t.manifestCodec, d.logger.log("parsed codec:" + e.codec + ", rate:" + t.samplerate + ", channels:" + t.channelCount))
						}
						function p(e) {
							return 9216e4 / e
						}
						function g(e, t, i, r, s) {
							var n = a(e, t),
							e = o(e, t);
							if (0 < (e -= n)) return {
								headerLength: n,
								frameLength: e,
								stamp: i + r * s
							}
						}
						function m(e, t, i, r, s) {
							var n, a, o, r = g(t, i, r, s, p(e.samplerate));
							if (r) return s = r.frameLength,
							a = r.headerLength,
							r = r.stamp,
							s = a + s,
							(o = Math.max(0, i + s - t.length)) ? (n = new Uint8Array(s - a)).set(t.subarray(i + a, t.length), 0) : n = t.subarray(i + a, i + s),
							t = {
								unit: n,
								pts: r
							},
							o || e.samples.push(t),
							{
								sample: t,
								length: s,
								missing: o
							}
						}
					},
					"./src/demux/base-audio-demuxer.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "initPTSFn",
						function() {
							return p
						});
						var r = i("./src/polyfills/number.ts"),
						d = i("./src/demux/id3.ts"),
						h = i("./src/demux/dummy-demuxed-track.ts"),
						f = i("./src/utils/mp4-tools.ts"),
						A = i("./src/utils/typed-array.ts"); (i = s.prototype).resetInitSegment = function(e, t, i) {
							this._id3Track = {
								type: "id3",
								id: 3,
								pid: -1,
								inputTimeScale: 9e4,
								sequenceNumber: 0,
								samples: [],
								dropped: 0
							}
						},
						i.resetTimeStamp = function() {},
						i.resetContiguity = function() {},
						i.canParse = function(e, t) {
							return ! 1
						},
						i.appendFrame = function(e, t, i) {},
						i.demux = function(e, t) {
							this.cachedData && (e = Object(f.appendUint8Array)(this.cachedData, e), this.cachedData = null);
							var i, r, s, n = d.getID3Data(e, 0),
							a = n ? n.length: 0,
							o = this._audioTrack,
							l = this._id3Track,
							c = n ? d.getTimeStamp(n) : void 0,
							u = e.length;
							for (0 !== this.frameIndex && null !== this.initPTS || (this.initPTS = p(c, t)), n && 0 < n.length && l.samples.push({
								pts: this.initPTS,
								dts: this.initPTS,
								data: n
							}), r = this.initPTS; a < u;) this.canParse(e, a) ? (s = this.appendFrame(o, e, a)) ? (this.frameIndex++, r = s.sample.pts, i = a += s.length) : a = u: d.canParse(e, a) ? (n = d.getID3Data(e, a), l.samples.push({
								pts: r,
								dts: r,
								data: n
							}), i = a += n.length) : a++,
							a === u && i !== u && (s = Object(A.sliceUint8)(e, i), this.cachedData ? this.cachedData = Object(f.appendUint8Array)(this.cachedData, s) : this.cachedData = s);
							return {
								audioTrack: o,
								avcTrack: Object(h.dummyTrack)(),
								id3Track: l,
								textTrack: Object(h.dummyTrack)()
							}
						},
						i.demuxSampleAes = function(e, t, i) {
							return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
						},
						i.flush = function(e) {
							var t = this.cachedData;
							return t && (this.cachedData = null, this.demux(t, 0)),
							this.frameIndex = 0,
							{
								audioTrack: this._audioTrack,
								avcTrack: Object(h.dummyTrack)(),
								id3Track: this._id3Track,
								textTrack: Object(h.dummyTrack)()
							}
						},
						i.destroy = function() {};
						var p = function(e, t) {
							return Object(r.isFiniteNumber)(e) ? 90 * e: 9e4 * t
						};
						function s() {
							this._audioTrack = void 0,
							this._id3Track = void 0,
							this.frameIndex = 0,
							this.cachedData = null,
							this.initPTS = null
						}
						t.
					default = s
					},
					"./src/demux/chunk-cache.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						}); (i = s.prototype).push = function(e) {
							this.chunks.push(e),
							this.dataLength += e.length
						},
						i.flush = function() {
							var e = this.chunks,
							n = this.dataLength;
							return e.length ? (e = 1 === e.length ? e[0] : function(e) {
								for (var t = new Uint8Array(n), i = 0, r = 0; r < e.length; r++) {
									var s = e[r];
									t.set(s, i),
									i += s.length
								}
								return t
							} (e), this.reset(), e) : new Uint8Array(0)
						},
						i.reset = function() {
							this.chunks.length = 0,
							this.dataLength = 0
						};
						var r = s;
						function s() {
							this.chunks = [],
							this.dataLength = 0
						}
					},
					"./src/demux/dummy-demuxed-track.ts": function(e, t, i) {
						function r() {
							return {
								type: "",
								id: -1,
								pid: -1,
								inputTimeScale: 9e4,
								sequenceNumber: -1,
								samples: [],
								dropped: 0
							}
						}
						i.r(t),
						i.d(t, "dummyTrack",
						function() {
							return r
						})
					},
					"./src/demux/exp-golomb.ts": function(e, t, i) {
						i.r(t);
						var r = i("./src/utils/logger.ts");
						function s(e) {
							this.data = void 0,
							this.bytesAvailable = void 0,
							this.word = void 0,
							this.bitsAvailable = void 0,
							this.data = e,
							this.bytesAvailable = e.byteLength,
							this.word = 0,
							this.bitsAvailable = 0
						} (i = s.prototype).loadWord = function() {
							var e = this.data,
							t = this.bytesAvailable,
							i = e.byteLength - t,
							r = new Uint8Array(4),
							t = Math.min(4, t);
							if (0 === t) throw new Error("no bytes available");
							r.set(e.subarray(i, i + t)),
							this.word = new DataView(r.buffer).getUint32(0),
							this.bitsAvailable = 8 * t,
							this.bytesAvailable -= t
						},
						i.skipBits = function(e) {
							var t;
							this.bitsAvailable > e || (e = (e -= this.bitsAvailable) - ((t = e >> 3) >> 3), this.bytesAvailable -= t, this.loadWord()),
							this.word <<= e,
							this.bitsAvailable -= e
						},
						i.readBits = function(e) {
							var t = Math.min(this.bitsAvailable, e),
							i = this.word >>> 32 - t;
							return 32 < e && r.logger.error("Cannot read more than 32 bits at a time"),
							this.bitsAvailable -= t,
							0 < this.bitsAvailable ? this.word <<= t: 0 < this.bytesAvailable && this.loadWord(),
							0 < (t = e - t) && this.bitsAvailable ? i << t | this.readBits(t) : i
						},
						i.skipLZ = function() {
							for (var e = 0; e < this.bitsAvailable; ++e) if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e,
							this.bitsAvailable -= e,
							e;
							return this.loadWord(),
							e + this.skipLZ()
						},
						i.skipUEG = function() {
							this.skipBits(1 + this.skipLZ())
						},
						i.skipEG = function() {
							this.skipBits(1 + this.skipLZ())
						},
						i.readUEG = function() {
							var e = this.skipLZ();
							return this.readBits(e + 1) - 1
						},
						i.readEG = function() {
							var e = this.readUEG();
							return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
						},
						i.readBoolean = function() {
							return 1 === this.readBits(1)
						},
						i.readUByte = function() {
							return this.readBits(8)
						},
						i.readUShort = function() {
							return this.readBits(16)
						},
						i.readUInt = function() {
							return this.readBits(32)
						},
						i.skipScalingList = function(e) {
							for (var t = 8,
							i = 8,
							r = 0; r < e; r++) t = 0 === (i = 0 !== i ? (t + this.readEG() + 256) % 256 : i) ? t: i
						},
						i.readSPS = function() {
							var e, t, i, r = 0,
							s = 0,
							n = 0,
							a = 0,
							o = this.readUByte.bind(this),
							l = this.readBits.bind(this),
							c = this.readUEG.bind(this),
							u = this.readBoolean.bind(this),
							d = this.skipBits.bind(this),
							h = this.skipEG.bind(this),
							f = this.skipUEG.bind(this),
							A = this.skipScalingList.bind(this),
							p = (o(), o());
							if (l(5), d(3), o(), f(), 100 === p || 110 === p || 122 === p || 244 === p || 44 === p || 83 === p || 86 === p || 118 === p || 128 === p) {
								p = c();
								if (3 === p && d(1), f(), f(), d(1), u()) for (t = 3 !== p ? 8 : 12, i = 0; i < t; i++) u() && A(i < 6 ? 16 : 64)
							}
							f();
							p = c();
							if (0 === p) c();
							else if (1 === p) for (d(1), h(), h(), e = c(), i = 0; i < e; i++) h();
							f(),
							d(1);
							var p = c(),
							f = c(),
							l = l(1),
							g = (0 === l && d(1), d(1), u() && (r = c(), s = c(), n = c(), a = c()), [1, 1]);
							if (u() && u()) switch (o()) {
							case 1:
								g = [1, 1];
								break;
							case 2:
								g = [12, 11];
								break;
							case 3:
								g = [10, 11];
								break;
							case 4:
								g = [16, 11];
								break;
							case 5:
								g = [40, 33];
								break;
							case 6:
								g = [24, 11];
								break;
							case 7:
								g = [20, 11];
								break;
							case 8:
								g = [32, 11];
								break;
							case 9:
								g = [80, 33];
								break;
							case 10:
								g = [18, 11];
								break;
							case 11:
								g = [15, 11];
								break;
							case 12:
								g = [64, 33];
								break;
							case 13:
								g = [160, 99];
								break;
							case 14:
								g = [4, 3];
								break;
							case 15:
								g = [3, 2];
								break;
							case 16:
								g = [2, 1];
								break;
							case 255:
								g = [o() << 8 | o(), o() << 8 | o()]
							}
							return {
								width: Math.ceil(16 * (p + 1) - 2 * r - 2 * s),
								height: (2 - l) * (f + 1) * 16 - (l ? 2 : 4) * (n + a),
								pixelRatio: g
							}
						},
						i.readSliceType = function() {
							return this.readUByte(),
							this.readUEG(),
							this.readUEG()
						},
						t.
					default = s
					},
					"./src/demux/id3.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "isHeader",
						function() {
							return o
						}),
						i.d(t, "isFooter",
						function() {
							return l
						}),
						i.d(t, "getID3Data",
						function() {
							return r
						}),
						i.d(t, "canParse",
						function() {
							return s
						}),
						i.d(t, "getTimeStamp",
						function() {
							return n
						}),
						i.d(t, "isTimeStampFrame",
						function() {
							return a
						}),
						i.d(t, "getID3Frames",
						function() {
							return h
						}),
						i.d(t, "decodeFrame",
						function() {
							return f
						}),
						i.d(t, "utf8ArrayToStr",
						function() {
							return v
						}),
						i.d(t, "testables",
						function() {
							return y
						});
						var u, o = function(e, t) {
							return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
						},
						l = function(e, t) {
							return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
						},
						r = function(e, t) {
							for (var i = t,
							r = 0; o(e, t);) r = (r += 10) + c(e, t + 6),
							l(e, t + 10) && (r += 10),
							t += r;
							if (0 < r) return e.subarray(i, i + r)
						},
						c = function(e, t) {
							var i = 0,
							i = (127 & e[t]) << 21;
							return (i = (i |= (127 & e[t + 1]) << 14) | (127 & e[t + 2]) << 7) | 127 & e[t + 3]
						},
						s = function(e, t) {
							return o(e, t) && c(e, t + 6) + 10 <= e.length - t
						},
						n = function(e) {
							for (var t = h(e), i = 0; i < t.length; i++) {
								var r = t[i];
								if (a(r)) return m(r)
							}
						},
						a = function(e) {
							return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
						},
						d = function(e) {
							var t = String.fromCharCode(e[0], e[1], e[2], e[3]),
							i = c(e, 4);
							return {
								type: t,
								size: i,
								data: e.subarray(10, 10 + i)
							}
						},
						h = function(e) {
							for (var t = 0,
							i = []; o(e, t);) {
								for (var r = c(e, t + 6), s = (t += 10) + r; t + 8 < s;) {
									var n = d(e.subarray(t)),
									a = f(n);
									a && i.push(a),
									t += n.size + 10
								}
								l(e, t) && (t += 10)
							}
							return i
						},
						f = function(e) {
							return ("PRIV" === e.type ? A: "W" === e.type[0] ? g: p)(e)
						},
						A = function(e) {
							var t, i;
							if (! (e.size < 2)) return t = v(e.data, !0),
							i = new Uint8Array(e.data.subarray(t.length + 1)),
							{
								key: e.type,
								info: t,
								data: i.buffer
							}
						},
						p = function(e) {
							if (! (e.size < 2)) {
								var t;
								if ("TXXX" === e.type) return t = 1,
								t += (i = v(e.data.subarray(1), !0)).length + 1,
								t = v(e.data.subarray(t)),
								{
									key: e.type,
									info: i,
									data: t
								};
								var i = v(e.data.subarray(1));
								return {
									key: e.type,
									data: i
								}
							}
						},
						g = function(e) {
							if ("WXXX" === e.type) {
								if (e.size < 2) return;
								var t = 1,
								i = v(e.data.subarray(1), !0),
								t = (t += i.length + 1, v(e.data.subarray(t)));
								return {
									key: e.type,
									info: i,
									data: t
								}
							}
							i = v(e.data);
							return {
								key: e.type,
								data: i
							}
						},
						m = function(e) {
							var t;
							if (8 === e.data.byteLength) return t = 1 & (e = new Uint8Array(e.data))[3],
							e = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7],
							e /= 45,
							t && (e += 47721858.84),
							Math.round(e)
						},
						v = function(e, t) {
							void 0 === t && (t = !1);
							var i, r;
							u = u || void 0 === self.TextDecoder ? u: new self.TextDecoder("utf-8");
							if (u) return i = u.decode(e),
							t ? -1 !== (r = i.indexOf("\0")) ? i.substring(0, r) : i: i.replace(/\0/g, "");
							for (var s, n, a, o = e.length,
							l = "",
							c = 0; c < o;) {
								if (0 === (s = e[c++]) && t) return l;
								if (0 !== s && 3 !== s) switch (s >> 4) {
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
								case 6:
								case 7:
									l += String.fromCharCode(s);
									break;
								case 12:
								case 13:
									n = e[c++],
									l += String.fromCharCode((31 & s) << 6 | 63 & n);
									break;
								case 14:
									n = e[c++],
									a = e[c++],
									l += String.fromCharCode((15 & s) << 12 | (63 & n) << 6 | (63 & a) << 0)
								}
							}
							return l
						},
						y = {
							decodeTextFrame: p
						}
					},
					"./src/demux/mp3demuxer.ts": function(e, t, i) {
						i.r(t);
						var r = i("./src/demux/base-audio-demuxer.ts"),
						s = i("./src/demux/id3.ts"),
						n = i("./src/utils/logger.ts"),
						a = i("./src/demux/mpegaudio.ts");
						function o(e, t) {
							return (o = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						l = r.
					default,
						i = l,
						(r = c).prototype = Object.create(i.prototype),
						o(r.prototype.constructor = r, i),
						(r = c.prototype).resetInitSegment = function(e, t, i) {
							l.prototype.resetInitSegment.call(this, e, t, i),
							this._audioTrack = {
								container: "audio/mpeg",
								type: "audio",
								id: 2,
								pid: -1,
								sequenceNumber: 0,
								isAAC: !1,
								samples: [],
								manifestCodec: e,
								duration: i,
								inputTimeScale: 9e4,
								dropped: 0
							}
						},
						c.probe = function(e) {
							if (!e) return ! 1;
							for (var t = (s.getID3Data(e, 0) || []).length, i = e.length; t < i; t++) if (a.probe(e, t)) return n.logger.log("MPEG Audio sync word found !"),
							!0;
							return ! 1
						},
						r.canParse = function(e, t) {
							return a.canParse(e, t)
						},
						r.appendFrame = function(e, t, i) {
							if (null !== this.initPTS) return a.appendFrame(e, t, i, this.initPTS, this.frameIndex)
						};
						var l, i = c;
						function c() {
							return l.apply(this, arguments) || this
						}
						i.minProbeByteLength = 4,
						t.
					default = i
					},
					"./src/demux/mp4demuxer.ts": function(e, t, i) {
						i.r(t);
						var r = i("./src/utils/mp4-tools.ts"),
						s = i("./src/demux/dummy-demuxed-track.ts"),
						i = ((i = n.prototype).resetTimeStamp = function() {},
						i.resetInitSegment = function() {},
						i.resetContiguity = function() {},
						n.probe = function(e) {
							return 0 < Object(r.findBox)({
								data: e,
								start: 0,
								end: Math.min(e.length, 16384)
							},
							["moof"]).length
						},
						i.demux = function(e) {
							var t = e,
							i = Object(s.dummyTrack)();
							return this.config.progressive ? (this.remainderData && (t = Object(r.appendUint8Array)(this.remainderData, e)), e = Object(r.segmentValidRange)(t), this.remainderData = e.remainder, i.samples = e.valid || new Uint8Array) : i.samples = t,
							{
								audioTrack: Object(s.dummyTrack)(),
								avcTrack: i,
								id3Track: Object(s.dummyTrack)(),
								textTrack: Object(s.dummyTrack)()
							}
						},
						i.flush = function() {
							var e = Object(s.dummyTrack)();
							return e.samples = this.remainderData || new Uint8Array,
							this.remainderData = null,
							{
								audioTrack: Object(s.dummyTrack)(),
								avcTrack: e,
								id3Track: Object(s.dummyTrack)(),
								textTrack: Object(s.dummyTrack)()
							}
						},
						i.demuxSampleAes = function(e, t, i) {
							return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
						},
						i.destroy = function() {},
						n);
						function n(e, t) {
							this.remainderData = null,
							this.config = void 0,
							this.config = t
						}
						i.minProbeByteLength = 1024,
						t.
					default = i
					},
					"./src/demux/mpegaudio.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "appendFrame",
						function() {
							return r
						}),
						i.d(t, "parseHeader",
						function() {
							return a
						}),
						i.d(t, "isHeaderPattern",
						function() {
							return s
						}),
						i.d(t, "isHeader",
						function() {
							return n
						}),
						i.d(t, "canParse",
						function() {
							return o
						}),
						i.d(t, "probe",
						function() {
							return l
						});
						var d = null,
						h = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
						f = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
						A = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
						p = [0, 1, 1, 4];
						function r(e, t, i, r, s) {
							if (! (i + 24 > t.length)) {
								var n = a(t, i);
								if (n && i + n.frameLength <= t.length) return r = r + s * (9e4 * n.samplesPerFrame / n.sampleRate),
								s = {
									unit: t.subarray(i, i + n.frameLength),
									pts: r,
									dts: r
								},
								e.config = [],
								e.channelCount = n.channelCount,
								e.samplerate = n.sampleRate,
								e.samples.push(s),
								{
									sample: s,
									length: n.frameLength,
									missing: 0
								}
							}
						}
						function a(e, t) {
							var i, r, s, n, a, o = e[t + 1] >> 3 & 3,
							l = e[t + 1] >> 1 & 3,
							c = e[t + 2] >> 4 & 15,
							u = e[t + 2] >> 2 & 3;
							if (1 != o && 0 != c && 15 != c && 3 != u) return a = e[t + 2] >> 1 & 1,
							i = e[t + 3] >> 6,
							c = 1e3 * h[14 * (3 == o ? 3 - l: 3 == l ? 3 : 4) + c - 1],
							u = f[3 * (3 == o ? 0 : 2 == o ? 1 : 2) + u],
							r = 3 == i ? 1 : 2,
							n = 8 * (o = A[o][l]) * (s = p[l]),
							o = Math.floor(o * c / u + a) * s,
							null === d && (a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i), d = a ? parseInt(a[1]) : 0),
							d && d <= 87 && 2 == l && 224e3 <= c && 0 == i && (e[t + 3] = 128 | e[t + 3]),
							{
								sampleRate: u,
								channelCount: r,
								frameLength: o,
								samplesPerFrame: n
							}
						}
						function s(e, t) {
							return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
						}
						function n(e, t) {
							return t + 1 < e.length && s(e, t)
						}
						function o(e, t) {
							return s(e, t) && 4 <= e.length - t
						}
						function l(e, t) {
							var i;
							return !! (t + 1 < e.length && s(e, t)) && (i = 4, (t = t + (i = null != (t = a(e, t)) && t.frameLength ? t.frameLength: i)) === e.length || n(e, t))
						}
					},
					"./src/demux/sample-aes.ts": function(e, t, i) {
						i.r(t);
						var r = i("./src/crypt/decrypter.ts"),
						c = i("./src/demux/tsdemuxer.ts");
						function s(e, t, i) {
							this.keyData = void 0,
							this.decrypter = void 0,
							this.keyData = i,
							this.decrypter = new r.
						default(e, t, {
								removePKCS7Padding: !1
							})
						} (i = s.prototype).decryptBuffer = function(e, t) {
							this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, t)
						},
						i.decryptAacSample = function(t, i, r, s) {
							var n = t[i].unit,
							e = n.subarray(16, n.length - n.length % 16),
							e = e.buffer.slice(e.byteOffset, e.byteOffset + e.length),
							a = this;
							this.decryptBuffer(e,
							function(e) {
								e = new Uint8Array(e);
								n.set(e, 16),
								s || a.decryptAacSamples(t, i + 1, r)
							})
						},
						i.decryptAacSamples = function(e, t, i) {
							for (;; t++) {
								if (t >= e.length) return void i();
								if (! (e[t].unit.length < 32)) {
									var r = this.decrypter.isSync();
									if (this.decryptAacSample(e, t, i, r), !r) return
								}
							}
						},
						i.getAvcEncryptedData = function(e) {
							for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, i = new Int8Array(t), r = 0, s = 32; s < e.length - 16; s += 160, r += 16) i.set(e.subarray(s, s + 16), r);
							return i
						},
						i.getAvcDecryptedUnit = function(e, t) {
							for (var i = new Uint8Array(t), r = 0, s = 32; s < e.length - 16; s += 160, r += 16) e.set(i.subarray(r, r + 16), s);
							return e
						},
						i.decryptAvcSample = function(t, i, r, s, n, a) {
							var o = Object(c.discardEPB)(n.data),
							e = this.getAvcEncryptedData(o),
							l = this;
							this.decryptBuffer(e.buffer,
							function(e) {
								n.data = l.getAvcDecryptedUnit(o, e),
								a || l.decryptAvcSamples(t, i, r + 1, s)
							})
						},
						i.decryptAvcSamples = function(e, t, i, r) {
							if (e instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
							for (;; t++, i = 0) {
								if (t >= e.length) return void r();
								for (var s = e[t].units; ! (i >= s.length); i++) {
									var n = s[i];
									if (! (n.data.length <= 48 || 1 !== n.type && 5 !== n.type)) {
										var a = this.decrypter.isSync();
										if (this.decryptAvcSample(e, t, i, r, n, a), !a) return
									}
								}
							}
						},
						t.
					default = s
					},
					"./src/demux/transmuxer-interface.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						});
						var l = i("./node_modules/webworkify-webpack/index.js"),
						c = i("./src/events.ts"),
						S = i("./src/demux/transmuxer.ts"),
						T = i("./src/utils/logger.ts"),
						u = i("./src/errors.ts"),
						t = i("./src/utils/mediasource-helper.ts"),
						d = i("./node_modules/eventemitter3/index.js"),
						h = Object(t.getMediaSource)() || {
							isTypeSupported: function() {
								return ! 1
							}
						},
						r = ((i = s.prototype).destroy = function() {
							var e = this.worker,
							e = (e ? (e.removeEventListener("message", this.onwmsg), e.terminate(), this.worker = null) : (e = this.transmuxer) && (e.destroy(), this.transmuxer = null), this.observer);
							e && e.removeAllListeners(),
							this.observer = null
						},
						i.push = function(e, t, i, r, s, n, a, o, l, c) {
							var u = this,
							d = (l.transmuxing.start = self.performance.now(), this.transmuxer),
							h = this.worker,
							f = (n || s).start,
							A = s.decryptdata,
							p = this.frag,
							g = !(p && s.cc === p.cc),
							m = !(p && l.level === p.level),
							v = p ? l.sn - p.sn: -1,
							y = this.part ? l.part - this.part.index: 1,
							b = !m && (1 == v || 0 == v && 1 == y),
							E = self.performance.now(),
							E = ((m || v || 0 === s.stats.parsing.start) && (s.stats.parsing.start = E), !n || !y && b || (n.stats.parsing.start = E), !(p && (null == (v = s.initSegment) ? void 0 : v.url) === (null == (y = p.initSegment) ? void 0 : y.url))),
							v = new S.TransmuxState(g, b, o, m, f, E);
							b && !g && !E || (T.logger.log("[transmuxer-interface, " + s.type + "]: Starting new transmux session for sn: " + l.sn + " p: " + l.part + " level: " + l.level + " id: " + l.id + "\n        discontinuity: " + g + "\n        trackSwitch: " + m + "\n        contiguous: " + b + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + f + "\n        initSegmentChange: " + E), p = new S.TransmuxConfig(i, r, t, a, c), this.configureTransmuxer(p)),
							this.frag = s,
							this.part = n,
							h ? h.postMessage({
								cmd: "demux",
								data: e,
								decryptdata: A,
								chunkMeta: l,
								state: v
							},
							e instanceof ArrayBuffer ? [e] : []) : d && (y = d.push(e, A, l, v), Object(S.isPromise)(y) ? y.then(function(e) {
								u.handleTransmuxComplete(e)
							}) : this.handleTransmuxComplete(y))
						},
						i.flush = function(t) {
							var i = this,
							e = (t.transmuxing.start = self.performance.now(), this.transmuxer),
							r = this.worker;
							r ? r.postMessage({
								cmd: "flush",
								chunkMeta: t
							}) : e && (r = e.flush(t), Object(S.isPromise)(r) ? r.then(function(e) {
								i.handleFlushResult(e, t)
							}) : this.handleFlushResult(r, t))
						},
						i.handleFlushResult = function(e, t) {
							var i = this;
							e.forEach(function(e) {
								i.handleTransmuxComplete(e)
							}),
							this.onFlush(t)
						},
						i.onWorkerMessage = function(e) {
							var t = e.data,
							i = this.hls;
							switch (t.event) {
							case "init":
								self.URL.revokeObjectURL(this.worker.objectURL);
								break;
							case "transmuxComplete":
								this.handleTransmuxComplete(t.data);
								break;
							case "flush":
								this.onFlush(t.data);
								break;
							default:
								t.data = t.data || {},
								t.data.frag = this.frag,
								t.data.id = this.id,
								i.trigger(t.event, t.data)
							}
						},
						i.configureTransmuxer = function(e) {
							var t = this.worker,
							i = this.transmuxer;
							t ? t.postMessage({
								cmd: "configure",
								config: e
							}) : i && i.configure(e)
						},
						i.handleTransmuxComplete = function(e) {
							e.chunkMeta.transmuxing.end = self.performance.now(),
							this.onTransmuxComplete(e)
						},
						s);
						function s(i, e, t, r) {
							function s(e, t) { (t = t || {}).frag = a.frag,
								t.id = a.id,
								i.trigger(e, t)
							}
							var n, a = this,
							t = (this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = i, this.id = e, this.onTransmuxComplete = t, this.onFlush = r, i.config),
							r = (this.observer = new d.EventEmitter, this.observer.on(c.Events.FRAG_DECRYPTED, s), this.observer.on(c.Events.ERROR, s), {
								mp4: h.isTypeSupported("video/mp4"),
								mpeg: h.isTypeSupported("audio/mpeg"),
								mp3: h.isTypeSupported('audio/mp4; codecs="mp3"')
							}),
							o = navigator.vendor;
							if (t.enableWorker && "undefined" != typeof Worker) {
								T.logger.log("demuxing in webworker");
								try {
									n = this.worker = l("./src/demux/transmuxer-worker.ts"),
									this.onwmsg = this.onWorkerMessage.bind(this),
									n.addEventListener("message", this.onwmsg),
									n.onerror = function(e) {
										i.trigger(c.Events.ERROR, {
											type: u.ErrorTypes.OTHER_ERROR,
											details: u.ErrorDetails.INTERNAL_EXCEPTION,
											fatal: !0,
											event: "demuxerWorker",
											error: new Error(e.message + "  (" + e.filename + ":" + e.lineno + ")")
										})
									},
									n.postMessage({
										cmd: "init",
										typeSupported: r,
										vendor: o,
										id: e,
										config: JSON.stringify(t)
									})
								} catch(i) {
									T.logger.warn("Error in worker:", i),
									T.logger.error("Error while initializing DemuxerWorker, fallback to inline"),
									n && self.URL.revokeObjectURL(n.objectURL),
									this.transmuxer = new S.
								default(this.observer, r, t, o, e),
									this.worker = null
								}
							} else this.transmuxer = new S.
						default(this.observer, r, t, o, e)
						}
					},
					"./src/demux/transmuxer-worker.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return s
						});
						var o = i("./src/demux/transmuxer.ts"),
						r = i("./src/events.ts"),
						l = i("./src/utils/logger.ts"),
						c = i("./node_modules/eventemitter3/index.js");
						function s(s) {
							function n(e, t) {
								s.postMessage({
									event: e,
									data: t
								})
							}
							var a = new c.EventEmitter;
							a.on(r.Events.FRAG_DECRYPTED, n),
							a.on(r.Events.ERROR, n),
							s.addEventListener("message",
							function(e) {
								var t = e.data;
								switch (t.cmd) {
								case "init":
									var i = JSON.parse(t.config);
									s.transmuxer = new o.
								default(a, t.typeSupported, i, t.vendor, t.id),
									Object(l.enableLogs)(i.debug),
									n("init", null);
									break;
								case "configure":
									s.transmuxer.configure(t.config);
									break;
								case "demux":
									i = s.transmuxer.push(t.data, t.decryptdata, t.chunkMeta, t.state);
									Object(o.isPromise)(i) ? i.then(function(e) {
										u(s, e)
									}) : u(s, i);
									break;
								case "flush":
									var r = t.chunkMeta,
									i = s.transmuxer.flush(r);
									Object(o.isPromise)(i) ? i.then(function(e) {
										d(s, e, r)
									}) : d(s, i, r)
								}
							})
						}
						function u(e, t) {
							var i, r, s; ((i = t.remuxResult).audio || i.video || i.text || i.id3 || i.initSegment) && (i = [], r = (s = t.remuxResult).audio, s = s.video, r && n(i, r), s && n(i, s), e.postMessage({
								event: "transmuxComplete",
								data: t
							},
							i))
						}
						function n(e, t) {
							t.data1 && e.push(t.data1.buffer),
							t.data2 && e.push(t.data2.buffer)
						}
						function d(t, e, i) {
							e.forEach(function(e) {
								u(t, e)
							}),
							t.postMessage({
								event: "flush",
								data: i
							})
						}
					},
					"./src/demux/transmuxer.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return d
						}),
						i.d(t, "isPromise",
						function() {
							return f
						}),
						i.d(t, "TransmuxConfig",
						function() {
							return A
						}),
						i.d(t, "TransmuxState",
						function() {
							return p
						});
						var v, l = i("./src/events.ts"),
						c = i("./src/errors.ts"),
						r = i("./src/crypt/decrypter.ts"),
						t = i("./src/demux/aacdemuxer.ts"),
						m = i("./src/demux/mp4demuxer.ts"),
						s = i("./src/demux/tsdemuxer.ts"),
						n = i("./src/demux/mp3demuxer.ts"),
						a = i("./src/remux/mp4-remuxer.ts"),
						y = i("./src/remux/passthrough-remuxer.ts"),
						o = i("./src/demux/chunk-cache.ts"),
						b = i("./src/utils/mp4-tools.ts"),
						E = i("./src/utils/logger.ts");
						try {
							v = self.performance.now.bind(self.performance)
						} catch(e) {
							E.logger.debug("Unable to use Performance API on this environment"),
							v = self.Date.now
						}
						var S = [{
							demux: s.
						default,
							remux: a.
						default
						},
						{
							demux: m.
						default,
							remux: y.
						default
						},
						{
							demux: t.
						default,
							remux: a.
						default
						},
						{
							demux: n.
						default,
							remux: a.
						default
						}],
						u = 1024,
						d = (S.forEach(function(e) {
							e = e.demux;
							u = Math.max(u, e.minProbeByteLength)
						}), (i = h.prototype).configure = function(e) {
							this.transmuxConfig = e,
							this.decrypter && this.decrypter.reset()
						},
						i.push = function(e, t, i, r) {
							var s = this,
							n = i.transmuxing,
							e = (n.executeStart = v(), new Uint8Array(e)),
							a = this.cache,
							o = this.config,
							l = this.currentTransmuxState,
							c = this.transmuxConfig,
							t = (r && (this.currentTransmuxState = r), u = null, u = 0 < e.byteLength && null != t && null != t.key && null !== t.iv && null != t.method ? t: u);
							if (t && "AES-128" === t.method) {
								var u = this.getDecrypter();
								if (!o.enableSoftwareAES) return this.decryptionPromise = u.webCryptoDecrypt(e, t.key.buffer, t.iv.buffer).then(function(e) {
									e = s.push(e, null, i);
									return s.decryptionPromise = null,
									e
								}),
								this.decryptionPromise;
								o = u.softwareDecrypt(e, t.key.buffer, t.iv.buffer);
								if (!o) return n.executeEnd = v(),
								T(i);
								e = new Uint8Array(o)
							}
							var u = r || l,
							o = u.contiguous,
							r = u.discontinuity,
							l = u.trackSwitch,
							d = u.accurateTimeOffset,
							h = u.timeOffset,
							u = u.initSegmentChange,
							f = c.audioCodec,
							A = c.videoCodec,
							p = c.defaultInitPts,
							g = c.duration,
							m = c.initSegmentData,
							f = ((r || l || u) && this.resetInitSegment(m, f, A, g), (r || u) && this.resetInitialTimestamp(p), o || this.resetContiguity(), this.needsProbing(e, r, l) && (a.dataLength && (m = a.flush(), e = Object(b.appendUint8Array)(m, e)), this.configureTransmuxer(e, c)), this.transmux(e, t, h, d, i)),
							A = this.currentTransmuxState;
							return A.contiguous = !0,
							A.discontinuity = !1,
							A.trackSwitch = !1,
							n.executeEnd = v(),
							f
						},
						i.flush = function(t) {
							var i = this,
							e = t.transmuxing,
							r = (e.executeStart = v(), this.decrypter),
							s = this.cache,
							n = this.currentTransmuxState,
							a = this.decryptionPromise;
							if (a) return a.then(function() {
								return i.flush(t)
							});
							var o = [],
							a = n.timeOffset,
							r = (!r || (n = r.flush()) && o.push(this.push(n, null, t)), s.dataLength),
							n = (s.reset(), this.demuxer),
							s = this.remuxer;
							if (!n || !s) return u <= r && this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
								type: c.ErrorTypes.MEDIA_ERROR,
								details: c.ErrorDetails.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "no demux matching with content found"
							}),
							e.executeEnd = v(),
							[T(t)];
							s = n.flush(a);
							return f(s) ? s.then(function(e) {
								return i.flushRemux(o, e, t),
								o
							}) : (this.flushRemux(o, s, t), o)
						},
						i.flushRemux = function(e, t, i) {
							var r = t.audioTrack,
							s = t.avcTrack,
							n = t.id3Track,
							t = t.textTrack,
							a = this.currentTransmuxState,
							o = a.accurateTimeOffset,
							a = a.timeOffset,
							r = (E.logger.log("[transmuxer.ts]: Flushed fragment " + i.sn + ( - 1 < i.part ? " p: " + i.part: "") + " of level " + i.level), this.remuxer.remux(r, s, n, t, a, o, !0, this.id));
							e.push({
								remuxResult: r,
								chunkMeta: i
							}),
							i.transmuxing.executeEnd = v()
						},
						i.resetInitialTimestamp = function(e) {
							var t = this.demuxer,
							i = this.remuxer;
							t && i && (t.resetTimeStamp(e), i.resetTimeStamp(e))
						},
						i.resetContiguity = function() {
							var e = this.demuxer,
							t = this.remuxer;
							e && t && (e.resetContiguity(), t.resetNextTimestamp())
						},
						i.resetInitSegment = function(e, t, i, r) {
							var s = this.demuxer,
							n = this.remuxer;
							s && n && (s.resetInitSegment(t, i, r), n.resetInitSegment(e, t, i))
						},
						i.destroy = function() {
							this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0),
							this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
						},
						i.transmux = function(e, t, i, r, s) {
							return t && "SAMPLE-AES" === t.method ? this.transmuxSampleAes(e, t, i, r, s) : this.transmuxUnencrypted(e, i, r, s)
						},
						i.transmuxUnencrypted = function(e, t, i, r) {
							var e = this.demuxer.demux(e, t, !1, !this.config.progressive),
							s = e.audioTrack,
							n = e.avcTrack,
							a = e.id3Track,
							e = e.textTrack;
							return {
								remuxResult: this.remuxer.remux(s, n, a, e, t, i, !1, this.id),
								chunkMeta: r
							}
						},
						i.transmuxSampleAes = function(e, t, i, r, s) {
							var n = this;
							return this.demuxer.demuxSampleAes(e, t, i).then(function(e) {
								return {
									remuxResult: n.remuxer.remux(e.audioTrack, e.avcTrack, e.id3Track, e.textTrack, i, r, !1, n.id),
									chunkMeta: s
								}
							})
						},
						i.configureTransmuxer = function(e, t) {
							for (var i, r = this.config,
							s = this.observer,
							n = this.typeSupported,
							a = this.vendor,
							o = t.audioCodec,
							l = t.defaultInitPts,
							c = t.duration,
							u = t.initSegmentData,
							t = t.videoCodec,
							d = 0,
							h = S.length; d < h; d++) if (S[d].demux.probe(e)) {
								i = S[d];
								break
							}
							i || (E.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), i = {
								demux: m.
							default,
								remux: y.
							default
							});
							var f = this.demuxer,
							A = this.remuxer,
							p = i.remux,
							g = i.demux;
							A && A instanceof p || (this.remuxer = new p(s, r, n, a)),
							f && f instanceof g || (this.demuxer = new g(s, r, n), this.probe = g.probe),
							this.resetInitSegment(u, o, t, c),
							this.resetInitialTimestamp(l)
						},
						i.needsProbing = function(e, t, i) {
							return ! this.demuxer || !this.remuxer || t || i
						},
						i.getDecrypter = function() {
							return this.decrypter || (this.decrypter = new r.
						default(this.observer, this.config))
						},
						h),
						T = function(e) {
							return {
								remuxResult: {},
								chunkMeta: e
							}
						};
						function h(e, t, i, r, s) {
							this.observer = void 0,
							this.typeSupported = void 0,
							this.config = void 0,
							this.vendor = void 0,
							this.id = void 0,
							this.demuxer = void 0,
							this.remuxer = void 0,
							this.decrypter = void 0,
							this.probe = void 0,
							this.decryptionPromise = null,
							this.transmuxConfig = void 0,
							this.currentTransmuxState = void 0,
							this.cache = new o.
						default,
							this.observer = e,
							this.typeSupported = t,
							this.config = i,
							this.vendor = r,
							this.id = s
						}
						function f(e) {
							return "then" in e && e.then instanceof Function
						}
						var A = function(e, t, i, r, s) {
							this.audioCodec = void 0,
							this.videoCodec = void 0,
							this.initSegmentData = void 0,
							this.duration = void 0,
							this.defaultInitPts = void 0,
							this.audioCodec = e,
							this.videoCodec = t,
							this.initSegmentData = i,
							this.duration = r,
							this.defaultInitPts = s
						},
						p = function(e, t, i, r, s, n) {
							this.discontinuity = void 0,
							this.contiguous = void 0,
							this.accurateTimeOffset = void 0,
							this.trackSwitch = void 0,
							this.timeOffset = void 0,
							this.initSegmentChange = void 0,
							this.discontinuity = e,
							this.contiguous = t,
							this.accurateTimeOffset = i,
							this.trackSwitch = r,
							this.timeOffset = s,
							this.initSegmentChange = n
						}
					},
					"./src/demux/tsdemuxer.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "discardEPB",
						function() {
							return N
						});
						var f = i("./src/demux/adts.ts"),
						o = i("./src/demux/mpegaudio.ts"),
						C = i("./src/demux/exp-golomb.ts"),
						D = i("./src/demux/id3.ts"),
						r = i("./src/demux/sample-aes.ts"),
						L = i("./src/events.ts"),
						I = i("./src/utils/mp4-tools.ts"),
						B = i("./src/utils/logger.ts"),
						x = i("./src/errors.ts"),
						s = {
							video: 1,
							audio: 2,
							id3: 3,
							text: 4
						},
						i = (O.probe = function(e) {
							e = O.syncOffset(e);
							return ! (e < 0 || (e && B.logger.warn("MPEG2-TS detected but first sync word found @ offset " + e + ", junk ahead ?"), 0))
						},
						O.syncOffset = function(e) {
							for (var t = Math.min(1e3, e.length - 564), i = 0; i < t;) {
								if (71 === e[i] && 71 === e[i + 188] && 71 === e[i + 376]) return i;
								i++
							}
							return - 1
						},
						O.createTrack = function(e, t) {
							return {
								container: "video" === e || "audio" === e ? "video/mp2t": void 0,
								type: e,
								id: s[e],
								pid: -1,
								inputTimeScale: 9e4,
								sequenceNumber: 0,
								samples: [],
								dropped: 0,
								duration: "audio" === e ? t: void 0
							}
						},
						(i = O.prototype).resetInitSegment = function(e, t, i) {
							this.pmtParsed = !1,
							this._pmtId = -1,
							this._avcTrack = O.createTrack("video", i),
							this._audioTrack = O.createTrack("audio", i),
							this._id3Track = O.createTrack("id3", i),
							this._txtTrack = O.createTrack("text", i),
							this._audioTrack.isAAC = !0,
							this.aacOverFlow = null,
							this.aacLastPTS = null,
							this.avcSample = null,
							this.audioCodec = e,
							this.videoCodec = t,
							this._duration = i
						},
						i.resetTimeStamp = function() {},
						i.resetContiguity = function() {
							var e = this._audioTrack,
							t = this._avcTrack,
							i = this._id3Track;
							e && (e.pesData = null),
							t && (t.pesData = null),
							i && (i.pesData = null),
							this.aacOverFlow = null,
							this.aacLastPTS = null
						},
						i.demux = function(e, t, i, r) {
							void 0 === r && (r = !1),
							(i = void 0 === i ? !1 : i) || (this.sampleAes = null);
							var s, n = this._avcTrack,
							a = this._audioTrack,
							o = this._id3Track,
							l = n.pid,
							c = n.pesData,
							u = a.pid,
							d = o.pid,
							h = a.pesData,
							f = o.pesData,
							A = !1,
							p = this.pmtParsed,
							g = this._pmtId,
							m = e.length;
							if (this.remainderData && (m = (e = Object(I.appendUint8Array)(this.remainderData, e)).length, this.remainderData = null), m < 188 && !r) return this.remainderData = e,
							{
								audioTrack: a,
								avcTrack: n,
								id3Track: o,
								textTrack: this._txtTrack
							};
							var v = Math.max(0, O.syncOffset(e)); (m -= (m + v) % 188) < e.byteLength && !r && (this.remainderData = new Uint8Array(e.buffer, m, e.buffer.byteLength - m));
							for (var y, b = 0,
							E = v; E < m; E += 188) if (71 === e[E]) {
								var S = !!(64 & e[E + 1]),
								T = ((31 & e[E + 1]) << 8) + e[E + 2],
								w = void 0;
								if (1 < (48 & e[E + 3]) >> 4) {
									if ((w = E + 5 + e[E + 4]) === E + 188) continue
								} else w = E + 4;
								switch (T) {
								case l:
									S && (c && (s = P(c)) && this.parseAVCPES(s, !1), c = {
										data: [],
										size: 0
									}),
									c && (c.data.push(e.subarray(w, E + 188)), c.size += E + 188 - w);
									break;
								case u:
									S && (h && (s = P(h)) && (a.isAAC ? this.parseAACPES(s) : this.parseMPEGPES(s)), h = {
										data: [],
										size: 0
									}),
									h && (h.data.push(e.subarray(w, E + 188)), h.size += E + 188 - w);
									break;
								case d:
									S && (f && (s = P(f)) && this.parseID3PES(s), f = {
										data: [],
										size: 0
									}),
									f && (f.data.push(e.subarray(w, E + 188)), f.size += E + 188 - w);
									break;
								case 0:
									S && (w += e[w] + 1),
									g = this._pmtId = (31 & (k = e)[(y = w) + 10]) << 8 | k[y + 11];
									break;
								case g:
									S && (w += e[w] + 1);
									var k = function(e, t, i, r) {
										var s = {
											audio: -1,
											avc: -1,
											id3: -1,
											isAAC: !0
										},
										n = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4;
										for (t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < n;) {
											var a = (31 & e[t + 1]) << 8 | e[t + 2];
											switch (e[t]) {
											case 207:
												if (!r) {
													B.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
													break
												}
											case 15:
												-1 === s.audio && (s.audio = a);
												break;
											case 21:
												-1 === s.id3 && (s.id3 = a);
												break;
											case 219:
												if (!r) {
													B.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
													break
												}
											case 27:
												-1 === s.avc && (s.avc = a);
												break;
											case 3:
											case 4:
												i ? -1 === s.audio && (s.audio = a, s.isAAC = !1) : B.logger.log("MPEG audio found, not supported in this browser");
												break;
											case 36:
												B.logger.warn("Unsupported HEVC stream type found")
											}
											t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
										}
										return s
									} (e, w, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, i);
									0 < (l = k.avc) && (n.pid = l),
									0 < (u = k.audio) && (a.pid = u, a.isAAC = k.isAAC),
									0 < (d = k.id3) && (o.pid = d),
									A && !p && (B.logger.log("reparse from beginning"), A = !1, E = v - 188),
									p = this.pmtParsed = !0;
									break;
								case 17:
								case 8191:
									break;
								default:
									A = !0
								}
							} else b++;
							0 < b && this.observer.emit(L.Events.ERROR, L.Events.ERROR, {
								type: x.ErrorTypes.MEDIA_ERROR,
								details: x.ErrorDetails.FRAG_PARSING_ERROR,
								fatal: !1,
								reason: "Found " + b + " TS packet/s that do not start with 0x47"
							}),
							n.pesData = c,
							a.pesData = h,
							o.pesData = f;
							var R = {
								audioTrack: a,
								avcTrack: n,
								id3Track: o,
								textTrack: this._txtTrack
							};
							return r && this.extractRemainingSamples(R),
							R
						},
						i.flush = function() {
							var e = this.remainderData;
							return this.remainderData = null,
							e = e ? this.demux(e, -1, !1, !0) : {
								audioTrack: this._audioTrack,
								avcTrack: this._avcTrack,
								textTrack: this._txtTrack,
								id3Track: this._id3Track
							},
							this.extractRemainingSamples(e),
							this.sampleAes ? this.decrypt(e, this.sampleAes) : e
						},
						i.extractRemainingSamples = function(e) {
							var t, i = e.audioTrack,
							r = e.avcTrack,
							e = e.id3Track,
							s = r.pesData,
							n = i.pesData,
							a = e.pesData;
							s && (t = P(s)) ? (this.parseAVCPES(t, !0), r.pesData = null) : r.pesData = s,
							n && (t = P(n)) ? (i.isAAC ? this.parseAACPES(t) : this.parseMPEGPES(t), i.pesData = null) : (null != n && n.size && B.logger.log("last AAC PES packet truncated,might overlap between fragments"), i.pesData = n),
							a && (t = P(a)) ? (this.parseID3PES(t), e.pesData = null) : e.pesData = a
						},
						i.demuxSampleAes = function(e, t, i) {
							e = this.demux(e, i, !0, !this.config.progressive),
							i = this.sampleAes = new r.
						default(this.observer, this.config, t);
							return this.decrypt(e, i)
						},
						i.decrypt = function(r, s) {
							return new Promise(function(e) {
								var t = r.audioTrack,
								i = r.avcTrack;
								t.samples && t.isAAC ? s.decryptAacSamples(t.samples, 0,
								function() {
									i.samples ? s.decryptAvcSamples(i.samples, 0, 0,
									function() {
										e(r)
									}) : e(r)
								}) : i.samples && s.decryptAvcSamples(i.samples, 0, 0,
								function() {
									e(r)
								})
							})
						},
						i.destroy = function() {
							this._initPTS = this._initDTS = null,
							this._duration = 0
						},
						i.parseAVCPES = function(E, e) {
							var S, T = this,
							w = this._avcTrack,
							t = this.parseAVCNALu(E.data),
							k = this.avcSample,
							R = !1;
							E.data = null,
							k && t.length && !w.audFound && (M(k, w), k = this.avcSample = F(!1, E.pts, E.dts, "")),
							t.forEach(function(e) {
								switch (e.type) {
								case 1:
									S = !0,
									(k = k || (T.avcSample = F(!0, E.pts, E.dts, ""))).frame = !0;
									var t = e.data;
									R && 4 < t.length && (2 !== (t = new C.
								default(t).readSliceType()) && 4 !== t && 7 !== t && 9 !== t || (k.key = !0));
									break;
								case 5:
									S = !0,
									(k = k || (T.avcSample = F(!0, E.pts, E.dts, ""))).key = !0,
									k.frame = !0;
									break;
								case 6:
									S = !0;
									var i = new C.
								default(N(e.data));
									i.readUByte();
									for (var r = 0,
									s = 0,
									n = !1,
									a = 0; ! n && 1 < i.bytesAvailable;) {
										for (r = 0; r += a = i.readUByte(), 255 === a;);
										for (s = 0; s += a = i.readUByte(), 255 === a;);
										if (4 === r && 0 !== i.bytesAvailable) {
											if (n = !0, 181 === i.readUByte() && 49 === i.readUShort() && 1195456820 === i.readUInt() && 3 === i.readUByte()) {
												for (var o = i.readUByte(), l = 31 & o, c = [o, i.readUByte()], u = 0; u < l; u++) c.push(i.readUByte()),
												c.push(i.readUByte()),
												c.push(i.readUByte());
												U(T._txtTrack.samples, {
													type: 3,
													pts: E.pts,
													bytes: c
												})
											}
										} else if (5 === r && 0 !== i.bytesAvailable) {
											if (n = !0, 16 < s) {
												for (var d = [], h = 0; h < 16; h++) d.push(i.readUByte().toString(16)),
												3 !== h && 5 !== h && 7 !== h && 9 !== h || d.push("-");
												for (var f = s - 16,
												A = new Uint8Array(f), p = 0; p < f; p++) A[p] = i.readUByte();
												U(T._txtTrack.samples, {
													pts: E.pts,
													payloadType: r,
													uuid: d.join(""),
													userData: Object(D.utf8ArrayToStr)(A),
													userDataBytes: A
												})
											}
										} else if (s < i.bytesAvailable) for (var g = 0; g < s; g++) i.readUByte()
									}
									break;
								case 7:
									if (R = S = !0, !w.sps) {
										t = new C.
									default(e.data).readSPS();
										w.width = t.width,
										w.height = t.height,
										w.pixelRatio = t.pixelRatio,
										w.sps = [e.data],
										w.duration = T._duration;
										for (var m = e.data.subarray(1, 4), v = "avc1.", y = 0; y < 3; y++) {
											var b = m[y].toString(16);
											v += b = b.length < 2 ? "0" + b: b
										}
										w.codec = v
									}
									break;
								case 8:
									S = !0,
									w.pps || (w.pps = [e.data]);
									break;
								case 9:
									S = !1,
									w.audFound = !0,
									k && M(k, w),
									k = T.avcSample = F(!1, E.pts, E.dts, "");
									break;
								case 12:
									S = !1;
									break;
								default:
									S = !1,
									k && (k.debug += "unknown NAL " + e.type + " ")
								}
								k && S && k.units.push(e)
							}),
							e && k && (M(k, w), this.avcSample = null)
						},
						i.getLastNalUnit = function() {
							var e, t, i = this.avcSample;
							return t = null != (e = i = i && 0 !== i.units.length ? i: (e = this._avcTrack.samples)[e.length - 1]) && e.units ? (e = i.units)[e.length - 1] : t
						},
						i.parseAVCNALu = function(e) {
							var t, i, r, s, n, a, o = e.byteLength,
							l = this._avcTrack,
							c = l.naluState || 0,
							u = c,
							d = [],
							h = 0,
							f = -1,
							A = 0;
							for ( - 1 === c && (A = 31 & e[f = 0], c = 0, h = 1); h < o;) t = e[h++],
							c = c ? 1 !== c ? t ? 1 === t ? (0 <= f ? (r = {
								data: e.subarray(f, h - c - 1),
								type: A
							},
							d.push(r)) : (r = this.getLastNalUnit()) && (u && h <= 4 - u && r.state && (r.data = r.data.subarray(0, r.data.byteLength - u)), 0 < (i = h - c - 1)) && ((s = new Uint8Array(r.data.byteLength + i)).set(r.data, 0), s.set(e.subarray(0, i), r.data.byteLength), r.data = s, r.state = 0), h < o ? (A = 31 & e[f = h], 0) : -1) : 0 : 3 : t ? 0 : 2 : t ? 0 : 1;
							return 0 <= f && 0 <= c && (n = {
								data: e.subarray(f, o),
								type: A,
								state: c
							},
							d.push(n)),
							0 === d.length && (n = this.getLastNalUnit()) && ((a = new Uint8Array(n.data.byteLength + e.byteLength)).set(n.data, 0), a.set(e, n.data.byteLength), n.data = a),
							l.naluState = c,
							d
						},
						i.parseAACPES = function(e) {
							var t, i, r, s, n = 0,
							a = this._audioTrack,
							o = this.aacOverFlow,
							l = e.data;
							for (o && (this.aacOverFlow = null, c = (s = o.sample.unit.byteLength) - (s = Math.min(o.missing, s)), o.sample.unit.set(l.subarray(0, s), c), a.samples.push(o.sample), n = o.missing), t = n, i = l.length; t < i - 1 && !f.isHeader(l, t); t++);
							if (t === n || (s = t < i - 1 ? (r = "AAC PES did not start with ADTS header,offset:" + t, !1) : (r = "no ADTS header found in AAC PES", !0), B.logger.warn("parsing error:" + r), this.observer.emit(L.Events.ERROR, L.Events.ERROR, {
								type: x.ErrorTypes.MEDIA_ERROR,
								details: x.ErrorDetails.FRAG_PARSING_ERROR,
								fatal: s,
								reason: r
							}), !s)) {
								if (f.initTrackConfig(a, this.observer, l, t, this.audioCodec), void 0 !== e.pts) u = e.pts;
								else {
									if (!o) return void B.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
									var c = f.getFrameDuration(a.samplerate),
									u = o.sample.pts + c
								}
								for (var d = 0; t < i;) {
									if (f.isHeader(l, t)) {
										if (t + 5 < i) {
											var h = f.appendFrame(a, l, t, u, d);
											if (h) {
												if (!h.missing) {
													t += h.length,
													d++;
													continue
												}
												this.aacOverFlow = h
											}
										}
										break
									}
									t++
								}
							}
						},
						i.parseMPEGPES = function(e) {
							var t = e.data,
							i = t.length,
							r = 0,
							s = 0,
							n = e.pts;
							if (void 0 !== n) for (; s < i;) if (o.isHeader(t, s)) {
								var a = o.appendFrame(this._audioTrack, t, s, n, r);
								if (!a) break;
								s += a.length,
								r++
							} else s++;
							else B.logger.warn("[tsdemuxer]: MPEG PES unknown PTS")
						},
						i.parseID3PES = function(e) {
							void 0 !== e.pts ? this._id3Track.samples.push(e) : B.logger.warn("[tsdemuxer]: ID3 PES unknown PTS")
						},
						O);
						function O(e, t, i) {
							this.observer = void 0,
							this.config = void 0,
							this.typeSupported = void 0,
							this.sampleAes = null,
							this.pmtParsed = !1,
							this.audioCodec = void 0,
							this.videoCodec = void 0,
							this._duration = 0,
							this.aacLastPTS = null,
							this._initPTS = null,
							this._initDTS = null,
							this._pmtId = -1,
							this._avcTrack = void 0,
							this._audioTrack = void 0,
							this._id3Track = void 0,
							this._txtTrack = void 0,
							this.aacOverFlow = null,
							this.avcSample = null,
							this.remainderData = null,
							this.observer = e,
							this.config = t,
							this.typeSupported = i
						}
						function F(e, t, i, r) {
							return {
								key: e,
								frame: !1,
								pts: t,
								dts: i,
								units: [],
								debug: r,
								length: 0
							}
						}
						function P(e) {
							var t, i, r, s, n = 0,
							a = e.data;
							if (!e || 0 === e.size) return null;
							for (; a[0].length < 19 && 1 < a.length;) {
								var o = new Uint8Array(a[0].length + a[1].length);
								o.set(a[0]),
								o.set(a[1], a[0].length),
								a[0] = o,
								a.splice(1, 1)
							}
							if (1 !== ((t = a[0])[0] << 16) + (t[1] << 8) + t[2]) return null;
							if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
							var l = t[7],
							c = (192 & l && (r = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, 64 & l ? 54e5 < r - (s = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) && (B.logger.warn(Math.round((r - s) / 9e4) + "s delta between PTS and DTS, align them"), r = s) : s = r), (l = t[8]) + 9);
							if (e.size <= c) return null;
							e.size -= c;
							for (var u = new Uint8Array(e.size), d = 0, h = a.length; d < h; d++) {
								var f = (t = a[d]).byteLength;
								if (c) {
									if (f < c) {
										c -= f;
										continue
									}
									t = t.subarray(c),
									f -= c,
									c = 0
								}
								u.set(t, n),
								n += f
							}
							return i && (i -= l + 3),
							{
								data: u,
								pts: r,
								dts: s,
								len: i
							}
						}
						function M(e, t) {
							if (e.units.length && e.frame) {
								if (void 0 === e.pts) {
									var i = t.samples,
									r = i.length;
									if (!r) return t.dropped++;
									i = i[r - 1];
									e.pts = i.pts,
									e.dts = i.dts
								}
								t.samples.push(e)
							}
							e.debug.length && B.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
						}
						function U(e, t) {
							var i = e.length;
							if (0 < i) {
								if (t.pts >= e[i - 1].pts) e.push(t);
								else for (var r = i - 1; 0 <= r; r--) if (t.pts < e[r].pts) {
									e.splice(r, 0, t);
									break
								}
							} else e.push(t)
						}
						function N(e) {
							for (var t = e.byteLength,
							i = [], r = 1; r < t - 2;) 0 === e[r] && 0 === e[r + 1] && 3 === e[r + 2] ? (i.push(r + 2), r += 2) : r++;
							if (0 === i.length) return e;
							for (var s = t - i.length,
							n = new Uint8Array(s), a = 0, r = 0; r < s; a++, r++) a === i[0] && (a++, i.shift()),
							n[r] = e[a];
							return n
						}
						i.minProbeByteLength = 188,
						t.
					default = i
					},
					"./src/errors.ts": function(e, t, i) {
						var r, s;
						i.r(t),
						i.d(t, "ErrorTypes",
						function() {
							return r
						}),
						i.d(t, "ErrorDetails",
						function() {
							return s
						}),
						(i = r = r || {}).NETWORK_ERROR = "networkError",
						i.MEDIA_ERROR = "mediaError",
						i.KEY_SYSTEM_ERROR = "keySystemError",
						i.MUX_ERROR = "muxError",
						i.OTHER_ERROR = "otherError",
						(t = s = s || {}).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
						t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
						t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
						t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
						t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData",
						t.MANIFEST_LOAD_ERROR = "manifestLoadError",
						t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
						t.MANIFEST_PARSING_ERROR = "manifestParsingError",
						t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
						t.LEVEL_EMPTY_ERROR = "levelEmptyError",
						t.LEVEL_LOAD_ERROR = "levelLoadError",
						t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
						t.LEVEL_SWITCH_ERROR = "levelSwitchError",
						t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
						t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
						t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError",
						t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut",
						t.FRAG_LOAD_ERROR = "fragLoadError",
						t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
						t.FRAG_DECRYPT_ERROR = "fragDecryptError",
						t.FRAG_PARSING_ERROR = "fragParsingError",
						t.REMUX_ALLOC_ERROR = "remuxAllocError",
						t.KEY_LOAD_ERROR = "keyLoadError",
						t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
						t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
						t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError",
						t.BUFFER_APPEND_ERROR = "bufferAppendError",
						t.BUFFER_APPENDING_ERROR = "bufferAppendingError",
						t.BUFFER_STALLED_ERROR = "bufferStalledError",
						t.BUFFER_FULL_ERROR = "bufferFullError",
						t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
						t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
						t.INTERNAL_EXCEPTION = "internalException",
						t.INTERNAL_ABORTED = "aborted",
						t.UNKNOWN = "unknown"
					},
					"./src/events.ts": function(e, t, i) {
						var r;
						i.r(t),
						i.d(t, "Events",
						function() {
							return r
						}),
						(i = r = r || {}).MEDIA_ATTACHING = "hlsMediaAttaching",
						i.MEDIA_ATTACHED = "hlsMediaAttached",
						i.MEDIA_DETACHING = "hlsMediaDetaching",
						i.MEDIA_DETACHED = "hlsMediaDetached",
						i.BUFFER_RESET = "hlsBufferReset",
						i.BUFFER_CODECS = "hlsBufferCodecs",
						i.BUFFER_CREATED = "hlsBufferCreated",
						i.BUFFER_APPENDING = "hlsBufferAppending",
						i.BUFFER_APPENDED = "hlsBufferAppended",
						i.BUFFER_EOS = "hlsBufferEos",
						i.BUFFER_FLUSHING = "hlsBufferFlushing",
						i.BUFFER_FLUSHED = "hlsBufferFlushed",
						i.MANIFEST_LOADING = "hlsManifestLoading",
						i.MANIFEST_LOADED = "hlsManifestLoaded",
						i.MANIFEST_PARSED = "hlsManifestParsed",
						i.LEVEL_SWITCHING = "hlsLevelSwitching",
						i.LEVEL_SWITCHED = "hlsLevelSwitched",
						i.LEVEL_LOADING = "hlsLevelLoading",
						i.LEVEL_LOADED = "hlsLevelLoaded",
						i.LEVEL_UPDATED = "hlsLevelUpdated",
						i.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated",
						i.LEVELS_UPDATED = "hlsLevelsUpdated",
						i.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated",
						i.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching",
						i.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched",
						i.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading",
						i.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded",
						i.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated",
						i.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared",
						i.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch",
						i.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading",
						i.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded",
						i.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed",
						i.CUES_PARSED = "hlsCuesParsed",
						i.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound",
						i.INIT_PTS_FOUND = "hlsInitPtsFound",
						i.FRAG_LOADING = "hlsFragLoading",
						i.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted",
						i.FRAG_LOADED = "hlsFragLoaded",
						i.FRAG_DECRYPTED = "hlsFragDecrypted",
						i.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment",
						i.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata",
						i.FRAG_PARSING_METADATA = "hlsFragParsingMetadata",
						i.FRAG_PARSED = "hlsFragParsed",
						i.FRAG_BUFFERED = "hlsFragBuffered",
						i.FRAG_CHANGED = "hlsFragChanged",
						i.FPS_DROP = "hlsFpsDrop",
						i.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping",
						i.ERROR = "hlsError",
						i.DESTROYING = "hlsDestroying",
						i.KEY_LOADING = "hlsKeyLoading",
						i.KEY_LOADED = "hlsKeyLoaded",
						i.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached",
						i.BACK_BUFFER_REACHED = "hlsBackBufferReached"
					},
					"./src/hls.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return l
						});
						var s = i("./node_modules/url-toolkit/src/url-toolkit.js"),
						d = i("./src/loader/playlist-loader.ts"),
						h = i("./src/loader/key-loader.ts"),
						f = i("./src/controller/id3-track-controller.ts"),
						A = i("./src/controller/latency-controller.ts"),
						p = i("./src/controller/level-controller.ts"),
						g = i("./src/controller/fragment-tracker.ts"),
						m = i("./src/controller/stream-controller.ts"),
						r = i("./src/is-supported.ts"),
						v = i("./src/utils/logger.ts"),
						y = i("./src/config.ts"),
						b = i("./node_modules/eventemitter3/index.js"),
						n = i("./src/events.ts"),
						a = i("./src/errors.ts");
						function o(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						E.isSupported = function() {
							return Object(r.isSupported)()
						},
						(t = E.prototype).createController = function(e, t, i) {
							return e ? (t = t ? new e(this, t) : new e(this), i && i.push(t), t) : null
						},
						t.on = function(e, t, i) {
							this._emitter.on(e, t, i = void 0 === i ? this: i)
						},
						t.once = function(e, t, i) {
							this._emitter.once(e, t, i = void 0 === i ? this: i)
						},
						t.removeAllListeners = function(e) {
							this._emitter.removeAllListeners(e)
						},
						t.off = function(e, t, i, r) {
							this._emitter.off(e, t, i = void 0 === i ? this: i, r)
						},
						t.listeners = function(e) {
							return this._emitter.listeners(e)
						},
						t.emit = function(e, t, i) {
							return this._emitter.emit(e, t, i)
						},
						t.trigger = function(e, t) {
							if (this.config.debug) return this.emit(e, e, t);
							try {
								return this.emit(e, e, t)
							} catch(t) {
								v.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t),
								this.trigger(n.Events.ERROR, {
									type: a.ErrorTypes.OTHER_ERROR,
									details: a.ErrorDetails.INTERNAL_EXCEPTION,
									fatal: !1,
									event: e,
									error: t
								})
							}
							return ! 1
						},
						t.listenerCount = function(e) {
							return this._emitter.listenerCount(e)
						},
						t.destroy = function() {
							v.logger.log("destroy"),
							this.trigger(n.Events.DESTROYING, void 0),
							this.detachMedia(),
							this.removeAllListeners(),
							this._autoLevelCapping = -1,
							this.url = null,
							this.networkControllers.forEach(function(e) {
								return e.destroy()
							}),
							this.networkControllers.length = 0,
							this.coreComponents.forEach(function(e) {
								return e.destroy()
							}),
							this.coreComponents.length = 0
						},
						t.attachMedia = function(e) {
							v.logger.log("attachMedia"),
							this._media = e,
							this.trigger(n.Events.MEDIA_ATTACHING, {
								media: e
							})
						},
						t.detachMedia = function() {
							v.logger.log("detachMedia"),
							this.trigger(n.Events.MEDIA_DETACHING, void 0),
							this._media = null
						},
						t.loadSource = function(e) {
							this.stopLoad();
							var t = this.media,
							i = this.url,
							r = this.url = s.buildAbsoluteURL(self.location.href, e, {
								alwaysNormalize: !0
							});
							v.logger.log("loadSource:" + r),
							t && i && i !== r && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(t)),
							this.trigger(n.Events.MANIFEST_LOADING, {
								url: e
							})
						},
						t.startLoad = function(t) {
							void 0 === t && (t = -1),
							v.logger.log("startLoad(" + t + ")"),
							this.networkControllers.forEach(function(e) {
								e.startLoad(t)
							})
						},
						t.stopLoad = function() {
							v.logger.log("stopLoad"),
							this.networkControllers.forEach(function(e) {
								e.stopLoad()
							})
						},
						t.swapAudioCodec = function() {
							v.logger.log("swapAudioCodec"),
							this.streamController.swapAudioCodec()
						},
						t.recoverMediaError = function() {
							v.logger.log("recoverMediaError");
							var e = this._media;
							this.detachMedia(),
							e && this.attachMedia(e)
						},
						t.removeLevel = function(e, t) {
							this.levelController.removeLevel(e, t = void 0 === t ? 0 : t)
						},
						t = [{
							key: "version",
							get: function() {
								return "1.1.5"
							}
						},
						{
							key: "Events",
							get: function() {
								return n.Events
							}
						},
						{
							key: "ErrorTypes",
							get: function() {
								return a.ErrorTypes
							}
						},
						{
							key: "ErrorDetails",
							get: function() {
								return a.ErrorDetails
							}
						},
						{
							key: "DefaultConfig",
							get: function() {
								return E.defaultConfig || y.hlsDefaultConfig
							},
							set: function(e) {
								E.defaultConfig = e
							}
						}],
						o((i = E).prototype, [{
							key: "levels",
							get: function() {
								return this.levelController.levels || []
							}
						},
						{
							key: "currentLevel",
							get: function() {
								return this.streamController.currentLevel
							},
							set: function(e) {
								v.logger.log("set currentLevel:" + e),
								this.loadLevel = e,
								this.abrController.clearTimer(),
								this.streamController.immediateLevelSwitch()
							}
						},
						{
							key: "nextLevel",
							get: function() {
								return this.streamController.nextLevel
							},
							set: function(e) {
								v.logger.log("set nextLevel:" + e),
								this.levelController.manualLevel = e,
								this.streamController.nextLevelSwitch()
							}
						},
						{
							key: "loadLevel",
							get: function() {
								return this.levelController.level
							},
							set: function(e) {
								v.logger.log("set loadLevel:" + e),
								this.levelController.manualLevel = e
							}
						},
						{
							key: "nextLoadLevel",
							get: function() {
								return this.levelController.nextLoadLevel
							},
							set: function(e) {
								this.levelController.nextLoadLevel = e
							}
						},
						{
							key: "firstLevel",
							get: function() {
								return Math.max(this.levelController.firstLevel, this.minAutoLevel)
							},
							set: function(e) {
								v.logger.log("set firstLevel:" + e),
								this.levelController.firstLevel = e
							}
						},
						{
							key: "startLevel",
							get: function() {
								return this.levelController.startLevel
							},
							set: function(e) {
								v.logger.log("set startLevel:" + e),
								-1 !== e && (e = Math.max(e, this.minAutoLevel)),
								this.levelController.startLevel = e
							}
						},
						{
							key: "capLevelToPlayerSize",
							get: function() {
								return this.config.capLevelToPlayerSize
							},
							set: function(e) {
								e = !!e;
								e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
							}
						},
						{
							key: "autoLevelCapping",
							get: function() {
								return this._autoLevelCapping
							},
							set: function(e) {
								this._autoLevelCapping !== e && (v.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e)
							}
						},
						{
							key: "bandwidthEstimate",
							get: function() {
								var e = this.abrController.bwEstimator;
								return e ? e.getEstimate() : NaN
							}
						},
						{
							key: "autoLevelEnabled",
							get: function() {
								return - 1 === this.levelController.manualLevel
							}
						},
						{
							key: "manualLevel",
							get: function() {
								return this.levelController.manualLevel
							}
						},
						{
							key: "minAutoLevel",
							get: function() {
								var e = this.levels,
								t = this.config.minAutoBitrate;
								if (!e) return 0;
								for (var i = e.length,
								r = 0; r < i; r++) if (e[r].maxBitrate > t) return r;
								return 0
							}
						},
						{
							key: "maxAutoLevel",
							get: function() {
								var e = this.levels,
								t = this.autoLevelCapping;
								return - 1 === t && e && e.length ? e.length - 1 : t
							}
						},
						{
							key: "nextAutoLevel",
							get: function() {
								return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
							},
							set: function(e) {
								this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
							}
						},
						{
							key: "audioTracks",
							get: function() {
								var e = this.audioTrackController;
								return e ? e.audioTracks: []
							}
						},
						{
							key: "audioTrack",
							get: function() {
								var e = this.audioTrackController;
								return e ? e.audioTrack: -1
							},
							set: function(e) {
								var t = this.audioTrackController;
								t && (t.audioTrack = e)
							}
						},
						{
							key: "subtitleTracks",
							get: function() {
								var e = this.subtitleTrackController;
								return e ? e.subtitleTracks: []
							}
						},
						{
							key: "subtitleTrack",
							get: function() {
								var e = this.subtitleTrackController;
								return e ? e.subtitleTrack: -1
							},
							set: function(e) {
								var t = this.subtitleTrackController;
								t && (t.subtitleTrack = e)
							}
						},
						{
							key: "media",
							get: function() {
								return this._media
							}
						},
						{
							key: "subtitleDisplay",
							get: function() {
								var e = this.subtitleTrackController;
								return !! e && e.subtitleDisplay
							},
							set: function(e) {
								var t = this.subtitleTrackController;
								t && (t.subtitleDisplay = e)
							}
						},
						{
							key: "lowLatencyMode",
							get: function() {
								return this.config.lowLatencyMode
							},
							set: function(e) {
								this.config.lowLatencyMode = e
							}
						},
						{
							key: "liveSyncPosition",
							get: function() {
								return this.latencyController.liveSyncPosition
							}
						},
						{
							key: "latency",
							get: function() {
								return this.latencyController.latency
							}
						},
						{
							key: "maxLatency",
							get: function() {
								return this.latencyController.maxLatency
							}
						},
						{
							key: "targetLatency",
							get: function() {
								return this.latencyController.targetLatency
							}
						},
						{
							key: "drift",
							get: function() {
								return this.latencyController.drift
							}
						},
						{
							key: "forceStartLoad",
							get: function() {
								return this.streamController.forceStartLoad
							}
						}]),
						o(i, t);
						var l = E;
						function E(e) {
							void 0 === e && (e = {}),
							this.config = void 0,
							this.userConfig = void 0,
							this.coreComponents = void 0,
							this.networkControllers = void 0,
							this._emitter = new b.EventEmitter,
							this._autoLevelCapping = void 0,
							this.abrController = void 0,
							this.bufferController = void 0,
							this.capLevelController = void 0,
							this.latencyController = void 0,
							this.levelController = void 0,
							this.streamController = void 0,
							this.audioTrackController = void 0,
							this.subtitleTrackController = void 0,
							this.emeController = void 0,
							this.cmcdController = void 0,
							this._media = null,
							this.url = null;
							var t = this.config = Object(y.mergeConfig)(E.DefaultConfig, e),
							e = (this.userConfig = e, Object(v.enableLogs)(t.debug), this._autoLevelCapping = -1, t.progressive && Object(y.enableStreamingMode)(t), t.abrController),
							i = t.bufferController,
							r = t.capLevelController,
							s = t.fpsController,
							e = this.abrController = new e(this),
							i = this.bufferController = new i(this),
							r = this.capLevelController = new r(this),
							s = new s(this),
							n = new d.
						default(this),
							a = new h.
						default(this),
							o = new f.
						default(this),
							l = this.levelController = new p.
						default(this),
							c = new g.FragmentTracker(this),
							u = this.streamController = new m.
						default(this, c),
							l = (r.setStreamController(u), s.setStreamController(u), [l, u]),
							u = (this.networkControllers = l, [n, a, e, i, r, s, o, c]);
							this.audioTrackController = this.createController(t.audioTrackController, null, l),
							this.createController(t.audioStreamController, c, l),
							this.subtitleTrackController = this.createController(t.subtitleTrackController, null, l),
							this.createController(t.subtitleStreamController, c, l),
							this.createController(t.timelineController, null, u),
							this.emeController = this.createController(t.emeController, null, u),
							this.cmcdController = this.createController(t.cmcdController, null, u),
							this.latencyController = this.createController(A.
						default, null, u),
							this.coreComponents = u
						}
						l.defaultConfig = void 0
					},
					"./src/is-supported.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "isSupported",
						function() {
							return n
						}),
						i.d(t, "changeTypeSupported",
						function() {
							return a
						});
						var r = i("./src/utils/mediasource-helper.ts");
						function s() {
							return self.SourceBuffer || self.WebKitSourceBuffer
						}
						function n() {
							var e = Object(r.getMediaSource)();
							if (!e) return ! 1;
							var t = s(),
							e = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
							t = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
							return !! e && !!t
						}
						function a() {
							var e = s();
							return "function" == typeof(null == e || null == (e = e.prototype) ? void 0 : e.changeType)
						}
					},
					"./src/loader/fragment-loader.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return l
						}),
						i.d(t, "LoadError",
						function() {
							return p
						});
						var r = i("./src/polyfills/number.ts"),
						h = i("./src/errors.ts");
						function s(e) {
							var i = "function" == typeof Map ? new Map: void 0;
							return (s = function(e) {
								if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
								if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
								if (void 0 !== i) {
									if (i.has(e)) return i.get(e);
									i.set(e, t)
								}
								function t() {
									return n(e, arguments, o(this).constructor)
								}
								return t.prototype = Object.create(e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}),
								a(t, e)
							})(e)
						}
						function n(e, t, i) {
							return (n = function() {
								if ("undefined" == typeof Reflect || !Reflect.construct) return;
								if (Reflect.construct.sham) return;
								if ("function" == typeof Proxy) return 1;
								try {
									return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
									function() {})),
									1
								} catch(e) {
									return
								}
							} () ? Reflect.construct: function(e, t, i) {
								var r = [null],
								t = (r.push.apply(r, t), new(Function.bind.apply(e, r)));
								return i && a(t, i.prototype),
								t
							}).apply(null, arguments)
						}
						function a(e, t) {
							return (a = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						function o(e) {
							return (o = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
								return e.__proto__ || Object.getPrototypeOf(e)
							})(e)
						}
						var f = Math.pow(2, 17),
						l = ((t = c.prototype).destroy = function() {
							this.loader && (this.loader.destroy(), this.loader = null)
						},
						t.abort = function() {
							this.loader && this.loader.abort()
						},
						t.load = function(a, o) {
							var l = this,
							e = a.url;
							if (!e) return Promise.reject(new p({
								type: h.ErrorTypes.NETWORK_ERROR,
								details: h.ErrorDetails.FRAG_LOAD_ERROR,
								fatal: !1,
								frag: a,
								networkDetails: null
							},
							"Fragment does not have a " + (e ? "part list": "url")));
							this.abort();
							var i = this.config,
							c = i.fLoader,
							u = i.loader;
							return new Promise(function(s, r) {
								l.loader && l.loader.destroy();
								var n = l.loader = a.loader = new(c || u)(i),
								e = A(a),
								t = {
									timeout: i.fragLoadingTimeOut,
									maxRetry: 0,
									retryDelay: 0,
									maxRetryDelay: i.fragLoadingMaxRetryTimeout,
									highWaterMark: f
								};
								a.stats = n.stats,
								n.load(e, t, {
									onSuccess: function(e, t, i, r) {
										l.resetLoader(a, n),
										s({
											frag: a,
											part: null,
											payload: e.data,
											networkDetails: r
										})
									},
									onError: function(e, t, i) {
										l.resetLoader(a, n),
										r(new p({
											type: h.ErrorTypes.NETWORK_ERROR,
											details: h.ErrorDetails.FRAG_LOAD_ERROR,
											fatal: !1,
											frag: a,
											response: e,
											networkDetails: i
										}))
									},
									onAbort: function(e, t, i) {
										l.resetLoader(a, n),
										r(new p({
											type: h.ErrorTypes.NETWORK_ERROR,
											details: h.ErrorDetails.INTERNAL_ABORTED,
											fatal: !1,
											frag: a,
											networkDetails: i
										}))
									},
									onTimeout: function(e, t, i) {
										l.resetLoader(a, n),
										r(new p({
											type: h.ErrorTypes.NETWORK_ERROR,
											details: h.ErrorDetails.FRAG_LOAD_TIMEOUT,
											fatal: !1,
											frag: a,
											networkDetails: i
										}))
									},
									onProgress: function(e, t, i, r) {
										o && o({
											frag: a,
											part: null,
											payload: i,
											networkDetails: r
										})
									}
								})
							})
						},
						t.loadPart = function(a, o, l) {
							var c = this,
							i = (this.abort(), this.config),
							u = i.fLoader,
							d = i.loader;
							return new Promise(function(s, r) {
								c.loader && c.loader.destroy();
								var n = c.loader = a.loader = new(u || d)(i),
								e = A(a, o),
								t = {
									timeout: i.fragLoadingTimeOut,
									maxRetry: 0,
									retryDelay: 0,
									maxRetryDelay: i.fragLoadingMaxRetryTimeout,
									highWaterMark: f
								};
								o.stats = n.stats,
								n.load(e, t, {
									onSuccess: function(e, t, i, r) {
										c.resetLoader(a, n),
										c.updateStatsFromPart(a, o);
										e = {
											frag: a,
											part: o,
											payload: e.data,
											networkDetails: r
										};
										l(e),
										s(e)
									},
									onError: function(e, t, i) {
										c.resetLoader(a, n),
										r(new p({
											type: h.ErrorTypes.NETWORK_ERROR,
											details: h.ErrorDetails.FRAG_LOAD_ERROR,
											fatal: !1,
											frag: a,
											part: o,
											response: e,
											networkDetails: i
										}))
									},
									onAbort: function(e, t, i) {
										a.stats.aborted = o.stats.aborted,
										c.resetLoader(a, n),
										r(new p({
											type: h.ErrorTypes.NETWORK_ERROR,
											details: h.ErrorDetails.INTERNAL_ABORTED,
											fatal: !1,
											frag: a,
											part: o,
											networkDetails: i
										}))
									},
									onTimeout: function(e, t, i) {
										c.resetLoader(a, n),
										r(new p({
											type: h.ErrorTypes.NETWORK_ERROR,
											details: h.ErrorDetails.FRAG_LOAD_TIMEOUT,
											fatal: !1,
											frag: a,
											part: o,
											networkDetails: i
										}))
									}
								})
							})
						},
						t.updateStatsFromPart = function(e, t) {
							var i = e.stats,
							r = t.stats,
							s = r.total,
							e = (i.loaded += r.loaded, s ? (s = ((e = Math.round(e.duration / t.duration)) - (t = Math.min(Math.round(i.loaded / s), e))) * Math.round(i.loaded / t), i.total = i.loaded + s) : i.total = Math.max(i.loaded, i.total), i.loading),
							t = r.loading;
							e.start ? e.first += t.first - t.start: (e.start = t.start, e.first = t.first),
							e.end = t.end
						},
						t.resetLoader = function(e, t) {
							e.loader = null,
							this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null),
							t.destroy()
						},
						c);
						function c(e) {
							this.config = void 0,
							this.loader = null,
							this.partLoadTimeout = -1,
							this.config = e
						}
						function A(e, t) {
							var i = (t = void 0 === t ? null: t) || e,
							e = {
								frag: e,
								part: t,
								responseType: "arraybuffer",
								url: i.url,
								headers: {},
								rangeStart: 0,
								rangeEnd: 0
							},
							t = i.byteRangeStartOffset,
							i = i.byteRangeEndOffset;
							return Object(r.isFiniteNumber)(t) && Object(r.isFiniteNumber)(i) && (e.rangeStart = t, e.rangeEnd = i),
							e
						}
						u = s(Error),
						i = u,
						(t = d).prototype = Object.create(i.prototype),
						a(t.prototype.constructor = t, i);
						var u, p = d;
						function d(e) {
							for (var t, i = arguments.length,
							r = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) r[s - 1] = arguments[s];
							return (t = u.call.apply(u, [this].concat(r)) || this).data = void 0,
							t.data = e,
							t
						}
					},
					"./src/loader/fragment.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "ElementaryStreamTypes",
						function() {
							return r
						}),
						i.d(t, "BaseSegment",
						function() {
							return p
						}),
						i.d(t, "Fragment",
						function() {
							return g
						}),
						i.d(t, "Part",
						function() {
							return m
						});
						var r, s = i("./src/polyfills/number.ts"),
						n = i("./node_modules/url-toolkit/src/url-toolkit.js"),
						a = i("./src/utils/logger.ts"),
						o = i("./src/loader/level-key.ts"),
						l = i("./src/loader/load-stats.ts");
						function c(e, t) {
							e.prototype = Object.create(t.prototype),
							u(e.prototype.constructor = e, t)
						}
						function u(e, t) {
							return (u = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						function d(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						function h(e, t, i) {
							t && d(e.prototype, t),
							i && d(e, i)
						} (t = r = r || {}).AUDIO = "audio",
						t.VIDEO = "video",
						t.AUDIOVIDEO = "audiovideo";
						b.prototype.setByteRange = function(e, t) {
							var e = e.split("@", 2),
							i = [];
							1 === e.length ? i[0] = t ? t.byteRangeEndOffset: 0 : i[0] = parseInt(e[1]),
							i[1] = parseInt(e[0]) + i[0],
							this._byteRange = i
						},
						h(b, [{
							key: "byteRange",
							get: function() {
								return this._byteRange || []
							}
						},
						{
							key: "byteRangeStartOffset",
							get: function() {
								return this.byteRange[0]
							}
						},
						{
							key: "byteRangeEndOffset",
							get: function() {
								return this.byteRange[1]
							}
						},
						{
							key: "url",
							get: function() {
								return ! this._url && this.baseurl && this.relurl && (this._url = Object(n.buildAbsoluteURL)(this.baseurl, this.relurl, {
									alwaysNormalize: !0
								})),
								this._url || ""
							},
							set: function(e) {
								this._url = e
							}
						}]);
						var f, A, p = b,
						g = (c(y, A = p), (i = y.prototype).createInitializationVector = function(e) {
							for (var t = new Uint8Array(16), i = 12; i < 16; i++) t[i] = e >> 8 * (15 - i) & 255;
							return t
						},
						i.setDecryptDataFromLevelKey = function(e, t) {
							var i = e;
							return "AES-128" === (null == e ? void 0 : e.method) && e.uri && !e.iv && ((i = o.LevelKey.fromURI(e.uri)).method = e.method, i.iv = this.createInitializationVector(t), i.keyFormat = "identity"),
							i
						},
						i.setElementaryStreamInfo = function(e, t, i, r, s, n) {
							void 0 === n && (n = !1);
							var a = this.elementaryStreams,
							o = a[e];
							o ? (o.startPTS = Math.min(o.startPTS, t), o.endPTS = Math.max(o.endPTS, i), o.startDTS = Math.min(o.startDTS, r), o.endDTS = Math.max(o.endDTS, s)) : a[e] = {
								startPTS: t,
								endPTS: i,
								startDTS: r,
								endDTS: s,
								partial: n
							}
						},
						i.clearElementaryStreamInfo = function() {
							var e = this.elementaryStreams;
							e[r.AUDIO] = null,
							e[r.VIDEO] = null,
							e[r.AUDIOVIDEO] = null
						},
						h(y, [{
							key: "decryptdata",
							get: function() {
								return this.levelkey || this._decryptdata ? (!this._decryptdata && this.levelkey && ("number" != typeof(e = this.sn) && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && a.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)), this._decryptdata) : null;
								var e
							}
						}, {
							key: "end",
							get: function() {
								return this.start + this.duration
							}
						},
						{
							key: "endProgramDateTime",
							get: function() {
								if (null === this.programDateTime) return null;
								if (!Object(s.isFiniteNumber)(this.programDateTime)) return null;
								var e = Object(s.isFiniteNumber)(this.duration) ? this.duration: 0;
								return this.programDateTime + 1e3 * e
							}
						},
						{
							key: "encrypted",
							get: function() {
								var e;
								return ! (null == (e = this.decryptdata) || !e.keyFormat || !this.decryptdata.uri)
							}
						}]), y),
						m = (c(v, f = p), h(v, [{
							key: "start",
							get: function() {
								return this.fragment.start + this.fragOffset
							}
						},
						{
							key: "end",
							get: function() {
								return this.start + this.duration
							}
						},
						{
							key: "loaded",
							get: function() {
								var e = this.elementaryStreams;
								return !! (e.audio || e.video || e.audiovideo)
							}
						}]), v);
						function v(e, t, i, r, s) { (i = f.call(this, i) || this).fragOffset = 0,
							i.duration = 0,
							i.gap = !1,
							i.independent = !1,
							i.relurl = void 0,
							i.fragment = void 0,
							i.index = void 0,
							i.stats = new l.LoadStats,
							i.duration = e.decimalFloatingPoint("DURATION"),
							i.gap = e.bool("GAP"),
							i.independent = e.bool("INDEPENDENT"),
							i.relurl = e.enumeratedString("URI"),
							i.fragment = t,
							i.index = r;
							t = e.enumeratedString("BYTERANGE");
							return t && i.setByteRange(t, s),
							s && (i.fragOffset = s.fragOffset + s.duration),
							i
						}
						function y(e, t) {
							return (t = A.call(this, t) || this)._decryptdata = null,
							t.rawProgramDateTime = null,
							t.programDateTime = null,
							t.tagList = [],
							t.duration = 0,
							t.sn = 0,
							t.levelkey = void 0,
							t.type = void 0,
							t.loader = null,
							t.level = -1,
							t.cc = 0,
							t.startPTS = void 0,
							t.endPTS = void 0,
							t.appendedPTS = void 0,
							t.startDTS = void 0,
							t.endDTS = void 0,
							t.start = 0,
							t.deltaPTS = void 0,
							t.maxStartPTS = void 0,
							t.minEndPTS = void 0,
							t.stats = new l.LoadStats,
							t.urlId = 0,
							t.data = void 0,
							t.bitrateTest = !1,
							t.title = null,
							t.initSegment = null,
							t.type = e,
							t
						}
						function b(e) {
							var t;
							this._byteRange = null,
							this._url = null,
							this.baseurl = void 0,
							this.relurl = void 0,
							this.elementaryStreams = ((t = {})[r.AUDIO] = null, t[r.VIDEO] = null, t[r.AUDIOVIDEO] = null, t),
							this.baseurl = e
						}
					},
					"./src/loader/key-loader.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return s
						});
						var a = i("./src/events.ts"),
						r = i("./src/errors.ts"),
						o = i("./src/utils/logger.ts"),
						s = ((t = n.prototype)._registerListeners = function() {
							this.hls.on(a.Events.KEY_LOADING, this.onKeyLoading, this)
						},
						t._unregisterListeners = function() {
							this.hls.off(a.Events.KEY_LOADING, this.onKeyLoading)
						},
						t.destroy = function() {
							for (var e in this._unregisterListeners(), this.loaders) {
								e = this.loaders[e];
								e && e.destroy()
							}
							this.loaders = {}
						},
						t.onKeyLoading = function(e, t) {
							var i, r, t = t.frag,
							s = t.type,
							n = this.loaders[s];
							t.decryptdata ? (i = t.decryptdata.uri) !== this.decrypturl || null === this.decryptkey ? (r = this.hls.config, n && (o.logger.warn("abort previous key loader for type:" + s), n.abort()), i ? (n = r.loader, s = t.loader = this.loaders[s] = new n(r), this.decrypturl = i, this.decryptkey = null, n = {
								url: i,
								frag: t,
								responseType: "arraybuffer"
							},
							i = {
								timeout: r.fragLoadingTimeOut,
								maxRetry: 0,
								retryDelay: r.fragLoadingRetryDelay,
								maxRetryDelay: r.fragLoadingMaxRetryTimeout,
								highWaterMark: 0
							},
							r = {
								onSuccess: this.loadsuccess.bind(this),
								onError: this.loaderror.bind(this),
								onTimeout: this.loadtimeout.bind(this)
							},
							s.load(n, i, r)) : o.logger.warn("key uri is falsy")) : this.decryptkey && (t.decryptdata.key = this.decryptkey, this.hls.trigger(a.Events.KEY_LOADED, {
								frag: t
							})) : o.logger.warn("Missing decryption data on fragment in onKeyLoading")
						},
						t.loadsuccess = function(e, t, i) {
							i = i.frag;
							i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = null, delete this.loaders[i.type], this.hls.trigger(a.Events.KEY_LOADED, {
								frag: i
							})) : o.logger.error("after key load, decryptdata unset")
						},
						t.loaderror = function(e, t) {
							var t = t.frag,
							i = t.loader;
							i && i.abort(),
							delete this.loaders[t.type],
							this.hls.trigger(a.Events.ERROR, {
								type: r.ErrorTypes.NETWORK_ERROR,
								details: r.ErrorDetails.KEY_LOAD_ERROR,
								fatal: !1,
								frag: t,
								response: e
							})
						},
						t.loadtimeout = function(e, t) {
							var t = t.frag,
							i = t.loader;
							i && i.abort(),
							delete this.loaders[t.type],
							this.hls.trigger(a.Events.ERROR, {
								type: r.ErrorTypes.NETWORK_ERROR,
								details: r.ErrorDetails.KEY_LOAD_TIMEOUT,
								fatal: !1,
								frag: t
							})
						},
						n);
						function n(e) {
							this.hls = void 0,
							this.loaders = {},
							this.decryptkey = null,
							this.decrypturl = null,
							this.hls = e,
							this._registerListeners()
						}
					},
					"./src/loader/level-details.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "LevelDetails",
						function() {
							return n
						});
						var r = i("./src/polyfills/number.ts");
						function s(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						a.prototype.reloaded = function(e) {
							if (!e) return this.advanced = !0,
							void(this.updated = !0);
							var t = this.lastPartSn - e.lastPartSn,
							i = this.lastPartIndex - e.lastPartIndex;
							this.updated = this.endSN !== e.endSN || !!i || !!t,
							this.advanced = this.endSN > e.endSN || 0 < t || 0 == t && 0 < i,
							this.updated || this.advanced ? this.misses = Math.floor(.6 * e.misses) : this.misses = e.misses + 1,
							this.availabilityDelay = e.availabilityDelay
						},
						s(a.prototype, [{
							key: "hasProgramDateTime",
							get: function() {
								return !! this.fragments.length && Object(r.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime)
							}
						},
						{
							key: "levelTargetDuration",
							get: function() {
								return this.averagetargetduration || this.targetduration || 10
							}
						},
						{
							key: "drift",
							get: function() {
								var e = this.driftEndTime - this.driftStartTime;
								return 0 < e ? 1e3 * (this.driftEnd - this.driftStart) / e: 1
							}
						},
						{
							key: "edge",
							get: function() {
								return this.partEnd || this.fragmentEnd
							}
						},
						{
							key: "partEnd",
							get: function() {
								var e;
								return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].end: this.fragmentEnd
							}
						},
						{
							key: "fragmentEnd",
							get: function() {
								var e;
								return null != (e = this.fragments) && e.length ? this.fragments[this.fragments.length - 1].end: 0
							}
						},
						{
							key: "age",
							get: function() {
								return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3: 0
							}
						},
						{
							key: "lastPartIndex",
							get: function() {
								var e;
								return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].index: -1
							}
						},
						{
							key: "lastPartSn",
							get: function() {
								var e;
								return null != (e = this.partList) && e.length ? this.partList[this.partList.length - 1].fragment.sn: this.endSN
							}
						}]);
						var n = a;
						function a(e) {
							this.PTSKnown = !1,
							this.alignedSliding = !1,
							this.averagetargetduration = void 0,
							this.endCC = 0,
							this.endSN = 0,
							this.fragments = void 0,
							this.fragmentHint = void 0,
							this.partList = null,
							this.live = !0,
							this.ageHeader = 0,
							this.advancedDateTime = void 0,
							this.updated = !0,
							this.advanced = !0,
							this.availabilityDelay = void 0,
							this.misses = 0,
							this.needSidxRanges = !1,
							this.startCC = 0,
							this.startSN = 0,
							this.startTimeOffset = null,
							this.targetduration = 0,
							this.totalduration = 0,
							this.type = null,
							this.url = void 0,
							this.m3u8 = "",
							this.version = null,
							this.canBlockReload = !1,
							this.canSkipUntil = 0,
							this.canSkipDateRanges = !1,
							this.skippedSegments = 0,
							this.recentlyRemovedDateranges = void 0,
							this.partHoldBack = 0,
							this.holdBack = 0,
							this.partTarget = 0,
							this.preloadHint = void 0,
							this.renditionReports = void 0,
							this.tuneInGoal = 0,
							this.deltaUpdateFailed = void 0,
							this.driftStartTime = 0,
							this.driftEndTime = 0,
							this.driftStart = 0,
							this.driftEnd = 0,
							this.fragments = [],
							this.url = e
						}
					},
					"./src/loader/level-key.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "LevelKey",
						function() {
							return n
						});
						var r = i("./node_modules/url-toolkit/src/url-toolkit.js");
						function s(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						a.fromURL = function(e, t) {
							return new a(e, t)
						},
						a.fromURI = function(e) {
							return new a(e)
						},
						s(a.prototype, [{
							key: "uri",
							get: function() {
								return this._uri
							}
						}]);
						var n = a;
						function a(e, t) {
							this._uri = null,
							this.method = null,
							this.keyFormat = null,
							this.keyFormatVersions = null,
							this.keyID = null,
							this.key = null,
							this.iv = null,
							this._uri = t ? Object(r.buildAbsoluteURL)(e, t, {
								alwaysNormalize: !0
							}) : e
						}
					},
					"./src/loader/load-stats.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "LoadStats",
						function() {
							return r
						});
						var r = function() {
							this.aborted = !1,
							this.loaded = 0,
							this.retry = 0,
							this.total = 0,
							this.chunkCount = 0,
							this.bwEstimate = 0,
							this.loading = {
								start: 0,
								first: 0,
								end: 0
							},
							this.parsing = {
								start: 0,
								end: 0
							},
							this.buffering = {
								start: 0,
								first: 0,
								end: 0
							}
						}
					},
					"./src/loader/m3u8-parser.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						});
						var U = i("./src/polyfills/number.ts"),
						N = i("./node_modules/url-toolkit/src/url-toolkit.js"),
						j = i("./src/loader/fragment.ts"),
						_ = i("./src/loader/level-details.ts"),
						V = i("./src/loader/level-key.ts"),
						H = i("./src/utils/attr-list.ts"),
						K = i("./src/utils/logger.ts"),
						c = i("./src/utils/codecs.ts"),
						u = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
						l = /#EXT-X-MEDIA:(.*)/g,
						G = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
						W = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
						q = /\.(mp4|m4s|m4v|m4a)$/i,
						r = (d.findGroup = function(e, t) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								if (r.id === t) return r
							}
						},
						d.convertAVC1ToAVCOTI = function(e) {
							var t, i = e.split(".");
							return 2 < i.length ? (t = i.shift() + ".", (t += parseInt(i.shift()).toString(16)) + ("000" + parseInt(i.shift()).toString(16)).substr( - 4)) : e
						},
						d.resolve = function(e, t) {
							return N.buildAbsoluteURL(t, e, {
								alwaysNormalize: !0
							})
						},
						d.parseMasterPlaylist = function(e, t) {
							var i, r, s, n, a = [],
							o = {},
							l = !1;
							for (u.lastIndex = 0; null != (i = u.exec(e));) i[1] ? (s = {
								attrs: r = new H.AttrList(i[1]),
								bitrate: r.decimalInteger("AVERAGE-BANDWIDTH") || r.decimalInteger("BANDWIDTH"),
								name: r.NAME,
								url: d.resolve(i[2], t)
							},
							(n = r.decimalResolution("RESOLUTION")) && (s.width = n.width, s.height = n.height),
							function(r, s) { ["video", "audio", "text"].forEach(function(t) {
									var e, i = r.filter(function(e) {
										return Object(c.isCodecType)(e, t)
									});
									i.length && (e = i.filter(function(e) {
										return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
									}), s[t + "Codec"] = (0 < e.length ? e: i)[0], r = r.filter(function(e) {
										return - 1 === i.indexOf(e)
									}))
								}),
								s.unknownCodecs = r
							} ((r.CODECS || "").split(/[ ,]+/).filter(function(e) {
								return e
							}), s), s.videoCodec && -1 !== s.videoCodec.indexOf("avc1") && (s.videoCodec = d.convertAVC1ToAVCOTI(s.videoCodec)), a.push(s)) : i[3] && (n = new H.AttrList(i[3]))["DATA-ID"] && (l = !0, o[n["DATA-ID"]] = n);
							return {
								levels: a,
								sessionData: l ? o: null
							}
						},
						d.parseMasterPlaylistMedia = function(e, t, i, r) {
							void 0 === r && (r = []);
							var s = [],
							n = 0;
							for (l.lastIndex = 0; null !== (o = l.exec(e));) {
								var a, o = new H.AttrList(o[1]);
								o.TYPE === i && (o = {
									attrs: o,
									bitrate: 0,
									id: n++,
									groupId: o["GROUP-ID"],
									instreamId: o["INSTREAM-ID"],
									name: o.NAME || o.LANGUAGE || "",
									type: i,
								default:
									o.bool("DEFAULT"),
									autoselect: o.bool("AUTOSELECT"),
									forced: o.bool("FORCED"),
									lang: o.LANGUAGE,
									url: o.URI ? d.resolve(o.URI, t) : ""
								},
								r.length && (h(o, a = d.findGroup(r, o.groupId) || r[0], "audioCodec"), h(o, a, "textCodec")), s.push(o))
							}
							return s
						},
						d.parseLevelPlaylist = function(e, t, i, r, s) {
							var n, a, o, l = new _.LevelDetails(t),
							c = l.fragments,
							u = null,
							d = 0,
							h = 0,
							f = 0,
							A = 0,
							p = null,
							g = new j.Fragment(r, t),
							m = -1,
							v = !1;
							for (G.lastIndex = 0, l.m3u8 = e; null !== (n = G.exec(e));) {
								v && (v = !1, (g = new j.Fragment(r, t)).start = f, g.sn = d, g.cc = A, g.level = i, u && (g.initSegment = u, g.rawProgramDateTime = u.rawProgramDateTime));
								var y = n[1];
								if (y) {
									g.duration = parseFloat(y);
									var b = (" " + n[2]).slice(1);
									g.title = b || null,
									g.tagList.push(b ? ["INF", y, b] : ["INF", y])
								} else if (n[3]) Object(U.isFiniteNumber)(g.duration) && (g.start = f, o && (g.levelkey = o), g.sn = d, g.level = i, g.cc = A, g.urlId = s, c.push(g), g.relurl = (" " + n[3]).slice(1), Q(g, p), f += (p = g).duration, d++, v = !(h = 0));
								else if (n[4]) {
									b = (" " + n[4]).slice(1);
									p ? g.setByteRange(b, p) : g.setByteRange(b)
								} else if (n[5]) g.rawProgramDateTime = (" " + n[5]).slice(1),
								g.tagList.push(["PROGRAM-DATE-TIME", g.rawProgramDateTime]),
								-1 === m && (m = c.length);
								else if (n = n[0].match(W)) {
									for (a = 1; a < n.length && void 0 === n[a]; a++);
									var E = (" " + n[a]).slice(1),
									S = (" " + n[a + 1]).slice(1),
									T = n[a + 2] ? (" " + n[a + 2]).slice(1) : "";
									switch (E) {
									case "PLAYLIST-TYPE":
										l.type = S.toUpperCase();
										break;
									case "MEDIA-SEQUENCE":
										d = l.startSN = parseInt(S);
										break;
									case "SKIP":
										var w = new H.AttrList(S),
										k = w.decimalInteger("SKIPPED-SEGMENTS");
										if (Object(U.isFiniteNumber)(k)) {
											for (var M = l.skippedSegments = k; M--;) c.unshift(null);
											d += k
										}
										k = w.enumeratedString("RECENTLY-REMOVED-DATERANGES");
										k && (l.recentlyRemovedDateranges = k.split("\t"));
										break;
									case "TARGETDURATION":
										l.targetduration = parseFloat(S);
										break;
									case "VERSION":
										l.version = parseInt(S);
										break;
									case "EXTM3U":
										break;
									case "ENDLIST":
										l.live = !1;
										break;
									case "#":
										(S || T) && g.tagList.push(T ? [S, T] : [S]);
										break;
									case "DIS":
										A++;
									case "GAP":
										g.tagList.push([E]);
										break;
									case "BITRATE":
										g.tagList.push([E, S]);
										break;
									case "DISCONTINUITY-SEQ":
										A = parseInt(S);
										break;
									case "KEY":
										var w = new H.AttrList(S),
										k = w.enumeratedString("METHOD"),
										R = w.URI,
										C = w.hexadecimalInteger("IV"),
										D = w.enumeratedString("KEYFORMATVERSIONS"),
										L = w.enumeratedString("KEYID"),
										I = null != (I = w.enumeratedString("KEYFORMAT")) ? I: "identity";
										if ( - 1 < ["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(I)) {
											K.logger.warn("Keyformat " + I + " is not supported from the manifest");
											continue
										}
										if ("identity" !== I) continue;
										k && (o = V.LevelKey.fromURL(t, R), R && 0 <= ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(k) && (o.method = k, o.keyFormat = I, L && (o.keyID = L), D && (o.keyFormatVersions = D), o.iv = C));
										break;
									case "START":
										R = new H.AttrList(S).decimalFloatingPoint("TIME-OFFSET");
										Object(U.isFiniteNumber)(R) && (l.startTimeOffset = R);
										break;
									case "MAP":
										I = new H.AttrList(S);
										g.relurl = I.URI,
										I.BYTERANGE && g.setByteRange(I.BYTERANGE),
										g.level = i,
										g.sn = "initSegment",
										o && (g.levelkey = o),
										g.initSegment = null,
										u = g,
										v = !0;
										break;
									case "SERVER-CONTROL":
										L = new H.AttrList(S);
										l.canBlockReload = L.bool("CAN-BLOCK-RELOAD"),
										l.canSkipUntil = L.optionalFloat("CAN-SKIP-UNTIL", 0),
										l.canSkipDateRanges = 0 < l.canSkipUntil && L.bool("CAN-SKIP-DATERANGES"),
										l.partHoldBack = L.optionalFloat("PART-HOLD-BACK", 0),
										l.holdBack = L.optionalFloat("HOLD-BACK", 0);
										break;
									case "PART-INF":
										D = new H.AttrList(S);
										l.partTarget = D.decimalFloatingPoint("PART-TARGET");
										break;
									case "PART":
										var C = (C = l.partList) || (l.partList = []),
										B = 0 < h ? C[C.length - 1] : void 0,
										x = h++,
										x = new j.Part(new H.AttrList(S), g, t, x, B);
										C.push(x),
										g.duration += x.duration;
										break;
									case "PRELOAD-HINT":
										B = new H.AttrList(S);
										l.preloadHint = B;
										break;
									case "RENDITION-REPORT":
										x = new H.AttrList(S);
										l.renditionReports = l.renditionReports || [],
										l.renditionReports.push(x);
										break;
									default:
										K.logger.warn("line parsed but not handled: " + n)
									}
								} else K.logger.warn("No matches on slow regex match for level playlist!")
							}
							p && !p.relurl ? (c.pop(), f -= p.duration, l.partList && (l.fragmentHint = p)) : l.partList && (Q(g, p), g.cc = A, l.fragmentHint = g);
							var O = c.length,
							F = c[0],
							P = c[O - 1];
							return 0 < (f += l.skippedSegments * l.targetduration) && O && P ? (l.averagetargetduration = f / O, O = P.sn, l.endSN = "initSegment" !== O ? O: 0, F && (l.startCC = F.cc, F.initSegment || l.fragments.every(function(e) {
								return e.relurl && (e = e.relurl, q.test(null != (e = null == (e = N.parseURL(e)) ? void 0 : e.path) ? e: ""))
							}) && (K.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (g = new j.Fragment(r, t)).relurl = P.relurl, g.level = i, g.sn = "initSegment", F.initSegment = g, l.needSidxRanges = !0))) : (l.endSN = 0, l.startCC = 0),
							l.fragmentHint && (f += l.fragmentHint.duration),
							l.totalduration = f,
							l.endCC = A,
							0 < m &&
							function(e, t) {
								for (var i = e[t], r = t; r--;) {
									var s = e[r];
									if (!s) return;
									s.programDateTime = i.programDateTime - 1e3 * s.duration,
									i = s
								}
							} (c, m),
							l
						},
						d);
						function d() {}
						function h(e, t, i) {
							t = t[i];
							t && (e[i] = t)
						}
						function Q(e, t) {
							e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime),
							Object(U.isFiniteNumber)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
						}
					},
					"./src/loader/playlist-loader.ts": function(e, t, i) {
						i.r(t);
						var h = i("./src/polyfills/number.ts"),
						f = i("./src/events.ts"),
						A = i("./src/errors.ts"),
						d = i("./src/utils/logger.ts"),
						s = i("./src/utils/mp4-tools.ts"),
						p = i("./src/loader/m3u8-parser.ts"),
						g = i("./src/types/loader.ts"),
						m = i("./src/utils/attr-list.ts");
						function v(e, t) {
							e = e.url;
							return e = void 0 !== e && 0 !== e.indexOf("data:") ? e: t.url
						}
						function r(e) {
							this.hls = void 0,
							this.loaders = Object.create(null),
							this.hls = e,
							this.registerListeners()
						} (i = r.prototype).registerListeners = function() {
							var e = this.hls;
							e.on(f.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.on(f.Events.LEVEL_LOADING, this.onLevelLoading, this),
							e.on(f.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
							e.on(f.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
						},
						i.unregisterListeners = function() {
							var e = this.hls;
							e.off(f.Events.MANIFEST_LOADING, this.onManifestLoading, this),
							e.off(f.Events.LEVEL_LOADING, this.onLevelLoading, this),
							e.off(f.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
							e.off(f.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
						},
						i.createInternalLoader = function(e) {
							var t = this.hls.config,
							i = t.pLoader,
							r = t.loader,
							i = new(i || r)(t);
							return e.loader = i,
							this.loaders[e.type] = i
						},
						i.getInternalLoader = function(e) {
							return this.loaders[e.type]
						},
						i.resetInternalLoader = function(e) {
							this.loaders[e] && delete this.loaders[e]
						},
						i.destroyInternalLoaders = function() {
							for (var e in this.loaders) {
								var t = this.loaders[e];
								t && t.destroy(),
								this.resetInternalLoader(e)
							}
						},
						i.destroy = function() {
							this.unregisterListeners(),
							this.destroyInternalLoaders()
						},
						i.onManifestLoading = function(e, t) {
							t = t.url;
							this.load({
								id: null,
								groupId: null,
								level: 0,
								responseType: "text",
								type: g.PlaylistContextType.MANIFEST,
								url: t,
								deliveryDirectives: null
							})
						},
						i.onLevelLoading = function(e, t) {
							var i = t.id,
							r = t.level,
							s = t.url,
							t = t.deliveryDirectives;
							this.load({
								id: i,
								groupId: null,
								level: r,
								responseType: "text",
								type: g.PlaylistContextType.LEVEL,
								url: s,
								deliveryDirectives: t
							})
						},
						i.onAudioTrackLoading = function(e, t) {
							var i = t.id,
							r = t.groupId,
							s = t.url,
							t = t.deliveryDirectives;
							this.load({
								id: i,
								groupId: r,
								level: null,
								responseType: "text",
								type: g.PlaylistContextType.AUDIO_TRACK,
								url: s,
								deliveryDirectives: t
							})
						},
						i.onSubtitleTrackLoading = function(e, t) {
							var i = t.id,
							r = t.groupId,
							s = t.url,
							t = t.deliveryDirectives;
							this.load({
								id: i,
								groupId: r,
								level: null,
								responseType: "text",
								type: g.PlaylistContextType.SUBTITLE_TRACK,
								url: s,
								deliveryDirectives: t
							})
						},
						i.load = function(e) {
							var t, i, r, s, n = this.hls.config;
							if (o = this.getInternalLoader(e)) {
								var a = o.context;
								if (a && a.url === e.url) return void d.logger.trace("[playlist-loader]: playlist request ongoing");
								d.logger.log("[playlist-loader]: aborting previous loader for type: " + e.type),
								o.abort()
							}
							switch (e.type) {
							case g.PlaylistContextType.MANIFEST:
								t = n.manifestLoadingMaxRetry,
								i = n.manifestLoadingTimeOut,
								r = n.manifestLoadingRetryDelay,
								s = n.manifestLoadingMaxRetryTimeout;
								break;
							case g.PlaylistContextType.LEVEL:
							case g.PlaylistContextType.AUDIO_TRACK:
							case g.PlaylistContextType.SUBTITLE_TRACK:
								t = 0,
								i = n.levelLoadingTimeOut;
								break;
							default:
								t = n.levelLoadingMaxRetry,
								i = n.levelLoadingTimeOut,
								r = n.levelLoadingRetryDelay,
								s = n.levelLoadingMaxRetryTimeout
							}
							var o = this.createInternalLoader(e),
							a = (null != (a = e.deliveryDirectives) && a.part && (e.type === g.PlaylistContextType.LEVEL && null !== e.level ? l = this.hls.levels[e.level].details: e.type === g.PlaylistContextType.AUDIO_TRACK && null !== e.id ? l = this.hls.audioTracks[e.id].details: e.type === g.PlaylistContextType.SUBTITLE_TRACK && null !== e.id && (l = this.hls.subtitleTracks[e.id].details), l) && (a = l.partTarget, l = l.targetduration, a && l && (i = Math.min(1e3 * Math.max(3 * a, .8 * l), i))), {
								timeout: i,
								maxRetry: t,
								retryDelay: r,
								maxRetryDelay: s,
								highWaterMark: 0
							}),
							l = {
								onSuccess: this.loadsuccess.bind(this),
								onError: this.loaderror.bind(this),
								onTimeout: this.loadtimeout.bind(this)
							};
							o.load(e, a, l)
						},
						i.loadsuccess = function(e, t, i, r) {
							if (void 0 === r && (r = null), i.isSidxRequest) return this.handleSidxRequest(e, i),
							void this.handlePlaylistLoaded(e, t, i, r);
							this.resetInternalLoader(i.type);
							var s = e.data;
							0 === s.indexOf("#EXTM3U") ? (t.parsing.start = performance.now(), 0 < s.indexOf("#EXTINF:") || 0 < s.indexOf("#EXT-X-TARGETDURATION:") ? this.handleTrackOrLevelPlaylist(e, t, i, r) : this.handleMasterPlaylist(e, t, i, r)) : this.handleManifestParsingError(e, i, "no EXTM3U delimiter", r)
						},
						i.loaderror = function(e, t, i) {
							this.handleNetworkError(t, i = void 0 === i ? null: i, !1, e)
						},
						i.loadtimeout = function(e, t, i) {
							this.handleNetworkError(t, i = void 0 === i ? null: i, !0)
						},
						i.handleMasterPlaylist = function(e, t, i, r) {
							var s, n, a = this.hls,
							o = e.data,
							l = v(e, i),
							c = p.
						default.parseMasterPlaylist(o, l),
							u = c.levels,
							c = c.sessionData;
							u.length ? (s = u.map(function(e) {
								return {
									id: e.attrs.AUDIO,
									audioCodec: e.audioCodec
								}
							}), n = u.map(function(e) {
								return {
									id: e.attrs.SUBTITLES,
									textCodec: e.textCodec
								}
							}), s = p.
						default.parseMasterPlaylistMedia(o, l, "AUDIO", s), n = p.
						default.parseMasterPlaylistMedia(o, l, "SUBTITLES", n), o = p.
						default.parseMasterPlaylistMedia(o, l, "CLOSED-CAPTIONS"), s.length && !s.some(function(e) {
								return ! e.url
							}) && u[0].audioCodec && !u[0].attrs.AUDIO && (d.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), s.unshift({
								type: "main",
								name: "main",
							default:
								!1,
								autoselect: !1,
								forced: !1,
								id: -1,
								attrs: new m.AttrList({}),
								bitrate: 0,
								url: ""
							})), a.trigger(f.Events.MANIFEST_LOADED, {
								levels: u,
								audioTracks: s,
								subtitles: n,
								captions: o,
								url: l,
								stats: t,
								networkDetails: r,
								sessionData: c
							})) : this.handleManifestParsingError(e, i, "no level found in manifest", r)
						},
						i.handleTrackOrLevelPlaylist = function(e, t, i, r) {
							var s = this.hls,
							n = i.id,
							a = i.level,
							o = i.type,
							l = v(e, i),
							c = Object(h.isFiniteNumber)(n) ? n: 0,
							u = Object(h.isFiniteNumber)(a) ? a: c,
							d = function() {
								switch (i.type) {
								case g.PlaylistContextType.AUDIO_TRACK:
									return g.PlaylistLevelType.AUDIO;
								case g.PlaylistContextType.SUBTITLE_TRACK:
									return g.PlaylistLevelType.SUBTITLE;
								default:
									return g.PlaylistLevelType.MAIN
								}
							} (),
							u = p.
						default.parseLevelPlaylist(e.data, l, u, d, c);
							u.fragments.length ? (o === g.PlaylistContextType.MANIFEST && (d = {
								attrs: new m.AttrList({}),
								bitrate: 0,
								details: u,
								name: "",
								url: l
							},
							s.trigger(f.Events.MANIFEST_LOADED, {
								levels: [d],
								audioTracks: [],
								url: l,
								stats: t,
								networkDetails: r,
								sessionData: null
							})), t.parsing.end = performance.now(), u.needSidxRanges ? (d = null == (c = u.fragments[0].initSegment) ? void 0 : c.url, this.load({
								url: d,
								isSidxRequest: !0,
								type: o,
								level: a,
								levelDetails: u,
								id: n,
								groupId: null,
								rangeStart: 0,
								rangeEnd: 2048,
								responseType: "arraybuffer",
								deliveryDirectives: null
							})) : (i.levelDetails = u, this.handlePlaylistLoaded(e, t, i, r))) : s.trigger(f.Events.ERROR, {
								type: A.ErrorTypes.NETWORK_ERROR,
								details: A.ErrorDetails.LEVEL_EMPTY_ERROR,
								fatal: !1,
								url: l,
								reason: "no fragments found in level",
								level: "number" == typeof i.level ? i.level: void 0
							})
						},
						i.handleSidxRequest = function(e, t) {
							var i, r = Object(s.parseSegmentIndex)(new Uint8Array(e.data));
							r && (e = r.references, i = t.levelDetails, e.forEach(function(e, t) {
								e = e.info,
								t = i.fragments[t];
								0 === t.byteRange.length && t.setByteRange(String(1 + e.end - e.start) + "@" + String(e.start)),
								t.initSegment && t.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
							}))
						},
						i.handleManifestParsingError = function(e, t, i, r) {
							this.hls.trigger(f.Events.ERROR, {
								type: A.ErrorTypes.NETWORK_ERROR,
								details: A.ErrorDetails.MANIFEST_PARSING_ERROR,
								fatal: t.type === g.PlaylistContextType.MANIFEST,
								url: e.url,
								reason: i,
								response: e,
								context: t,
								networkDetails: r
							})
						},
						i.handleNetworkError = function(e, t, i, r) {
							d.logger.warn("[playlist-loader]: A network " + ((i = void 0 === i ? !1 : i) ? "timeout": "error") + " occurred while loading " + e.type + " level: " + e.level + " id: " + e.id + ' group-id: "' + e.groupId + '"');
							var s = A.ErrorDetails.UNKNOWN,
							n = !1,
							a = this.getInternalLoader(e);
							switch (e.type) {
							case g.PlaylistContextType.MANIFEST:
								s = i ? A.ErrorDetails.MANIFEST_LOAD_TIMEOUT: A.ErrorDetails.MANIFEST_LOAD_ERROR,
								n = !0;
								break;
							case g.PlaylistContextType.LEVEL:
								s = i ? A.ErrorDetails.LEVEL_LOAD_TIMEOUT: A.ErrorDetails.LEVEL_LOAD_ERROR,
								n = !1;
								break;
							case g.PlaylistContextType.AUDIO_TRACK:
								s = i ? A.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT: A.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
								n = !1;
								break;
							case g.PlaylistContextType.SUBTITLE_TRACK:
								s = i ? A.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT: A.ErrorDetails.SUBTITLE_LOAD_ERROR,
								n = !1
							}
							a && this.resetInternalLoader(e.type);
							a = {
								type: A.ErrorTypes.NETWORK_ERROR,
								details: s,
								fatal: n,
								url: e.url,
								loader: a,
								context: e,
								networkDetails: t
							};
							r && (a.response = r),
							this.hls.trigger(f.Events.ERROR, a)
						},
						i.handlePlaylistLoaded = function(e, t, i, r) {
							var s = i.type,
							n = i.level,
							a = i.id,
							o = i.groupId,
							l = i.loader,
							c = i.levelDetails,
							u = i.deliveryDirectives;
							if (null != c && c.targetduration) {
								if (l) switch (c.live && (l.getCacheAge && (c.ageHeader = l.getCacheAge() || 0), l.getCacheAge && !isNaN(c.ageHeader) || (c.ageHeader = 0)), s) {
								case g.PlaylistContextType.MANIFEST:
								case g.PlaylistContextType.LEVEL:
									this.hls.trigger(f.Events.LEVEL_LOADED, {
										details: c,
										level: n || 0,
										id: a || 0,
										stats: t,
										networkDetails: r,
										deliveryDirectives: u
									});
									break;
								case g.PlaylistContextType.AUDIO_TRACK:
									this.hls.trigger(f.Events.AUDIO_TRACK_LOADED, {
										details: c,
										id: a || 0,
										groupId: o || "",
										stats: t,
										networkDetails: r,
										deliveryDirectives: u
									});
									break;
								case g.PlaylistContextType.SUBTITLE_TRACK:
									this.hls.trigger(f.Events.SUBTITLE_TRACK_LOADED, {
										details: c,
										id: a || 0,
										groupId: o || "",
										stats: t,
										networkDetails: r,
										deliveryDirectives: u
									})
								}
							} else this.handleManifestParsingError(e, i, "invalid target duration", r)
						},
						t.
					default = r
					},
					"./src/polyfills/number.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "isFiniteNumber",
						function() {
							return r
						}),
						i.d(t, "MAX_SAFE_INTEGER",
						function() {
							return s
						});
						var r = Number.isFinite ||
						function(e) {
							return "number" == typeof e && isFinite(e)
						},
						s = Number.MAX_SAFE_INTEGER || 9007199254740991
					},
					"./src/remux/aac-helper.ts": function(e, t, i) {
						function r() {}
						i.r(t),
						r.getSilentFrame = function(e, t) {
							return "mp4a.40.2" === e ? 1 === t ? new Uint8Array([0, 200, 0, 128, 35, 128]) : 2 === t ? new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]) : 3 === t ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]) : 4 === t ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]) : 5 === t ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]) : 6 === t ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) : void 0 : 1 === t ? new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]) : 2 === t || 3 === t ? new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]) : void 0
						},
						t.
					default = r
					},
					"./src/remux/mp4-generator.ts": function(e, t, i) {
						i.r(t);
						var n = Math.pow(2, 32) - 1,
						i = (d.init = function() {
							for (var e in d.types = {
								avc1: [],
								avcC: [],
								btrt: [],
								dinf: [],
								dref: [],
								esds: [],
								ftyp: [],
								hdlr: [],
								mdat: [],
								mdhd: [],
								mdia: [],
								mfhd: [],
								minf: [],
								moof: [],
								moov: [],
								mp4a: [],
								".mp3": [],
								mvex: [],
								mvhd: [],
								pasp: [],
								sdtp: [],
								stbl: [],
								stco: [],
								stsc: [],
								stsd: [],
								stsz: [],
								stts: [],
								tfdt: [],
								tfhd: [],
								traf: [],
								trak: [],
								trun: [],
								trex: [],
								tkhd: [],
								vmhd: [],
								smhd: []
							}) d.types.hasOwnProperty(e) && (d.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
							var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
							i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
							t = (d.HDLR_TYPES = {
								video: t,
								audio: i
							},
							new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])),
							i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
							i = (d.STTS = d.STSC = d.STCO = i, d.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), d.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), d.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), d.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), new Uint8Array([105, 115, 111, 109])),
							r = new Uint8Array([97, 118, 99, 49]),
							s = new Uint8Array([0, 0, 0, 1]);
							d.FTYP = d.box(d.types.ftyp, i, s, i, r),
							d.DINF = d.box(d.types.dinf, d.box(d.types.dref, t))
						},
						d.box = function(e) {
							for (var t = 8,
							i = arguments.length,
							r = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) r[s - 1] = arguments[s];
							for (var n = r.length,
							a = n; n--;) t += r[n].byteLength;
							var o = new Uint8Array(t);
							for (o[0] = t >> 24 & 255, o[1] = t >> 16 & 255, o[2] = t >> 8 & 255, o[3] = 255 & t, o.set(e, 4), n = 0, t = 8; n < a; n++) o.set(r[n], t),
							t += r[n].byteLength;
							return o
						},
						d.hdlr = function(e) {
							return d.box(d.types.hdlr, d.HDLR_TYPES[e])
						},
						d.mdat = function(e) {
							return d.box(d.types.mdat, e)
						},
						d.mdhd = function(e, t) {
							t *= e;
							var i = Math.floor(t / (1 + n)),
							t = Math.floor(t % (1 + n));
							return d.box(d.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 85, 196, 0, 0]))
						},
						d.mdia = function(e) {
							return d.box(d.types.mdia, d.mdhd(e.timescale, e.duration), d.hdlr(e.type), d.minf(e))
						},
						d.mfhd = function(e) {
							return d.box(d.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
						},
						d.minf = function(e) {
							return "audio" === e.type ? d.box(d.types.minf, d.box(d.types.smhd, d.SMHD), d.DINF, d.stbl(e)) : d.box(d.types.minf, d.box(d.types.vmhd, d.VMHD), d.DINF, d.stbl(e))
						},
						d.moof = function(e, t, i) {
							return d.box(d.types.moof, d.mfhd(e), d.traf(i, t))
						},
						d.moov = function(e) {
							for (var t = e.length,
							i = []; t--;) i[t] = d.trak(e[t]);
							return d.box.apply(null, [d.types.moov, d.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(d.mvex(e)))
						},
						d.mvex = function(e) {
							for (var t = e.length,
							i = []; t--;) i[t] = d.trex(e[t]);
							return d.box.apply(null, [d.types.mvex].concat(i))
						},
						d.mvhd = function(e, t) {
							t *= e;
							var i = Math.floor(t / (1 + n)),
							t = Math.floor(t % (1 + n)),
							e = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
							return d.box(d.types.mvhd, e)
						},
						d.sdtp = function(e) {
							for (var t, i = e.samples || [], r = new Uint8Array(4 + i.length), s = 0; s < i.length; s++) t = i[s].flags,
							r[s + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
							return d.box(d.types.sdtp, r)
						},
						d.stbl = function(e) {
							return d.box(d.types.stbl, d.stsd(e), d.box(d.types.stts, d.STTS), d.box(d.types.stsc, d.STSC), d.box(d.types.stsz, d.STSZ), d.box(d.types.stco, d.STCO))
						},
						d.avc1 = function(e) {
							for (var t, i, r = [], s = [], n = 0; n < e.sps.length; n++) i = (t = e.sps[n]).byteLength,
							r.push(i >>> 8 & 255),
							r.push(255 & i),
							r = r.concat(Array.prototype.slice.call(t));
							for (n = 0; n < e.pps.length; n++) i = (t = e.pps[n]).byteLength,
							s.push(i >>> 8 & 255),
							s.push(255 & i),
							s = s.concat(Array.prototype.slice.call(t));
							var a = d.box(d.types.avcC, new Uint8Array([1, r[3], r[4], r[5], 255, 224 | e.sps.length].concat(r).concat([e.pps.length]).concat(s))),
							o = e.width,
							l = e.height,
							c = e.pixelRatio[0],
							u = e.pixelRatio[1];
							return d.box(d.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, o >> 8 & 255, 255 & o, l >> 8 & 255, 255 & l, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, d.box(d.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), d.box(d.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u])))
						},
						d.esds = function(e) {
							var t = e.config.length;
							return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
						},
						d.mp4a = function(e) {
							var t = e.samplerate;
							return d.box(d.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]), d.box(d.types.esds, d.esds(e)))
						},
						d.mp3 = function(e) {
							var t = e.samplerate;
							return d.box(d.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]))
						},
						d.stsd = function(e) {
							return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? d.box(d.types.stsd, d.STSD, d.mp4a(e)) : d.box(d.types.stsd, d.STSD, d.mp3(e)) : d.box(d.types.stsd, d.STSD, d.avc1(e))
						},
						d.tkhd = function(e) {
							var t = e.id,
							i = e.duration * e.timescale,
							r = e.width,
							e = e.height,
							s = Math.floor(i / (1 + n)),
							i = Math.floor(i % (1 + n));
							return d.box(d.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0, e >> 8 & 255, 255 & e, 0, 0]))
						},
						d.traf = function(e, t) {
							var i = d.sdtp(e),
							r = e.id,
							s = Math.floor(t / (1 + n)),
							t = Math.floor(t % (1 + n));
							return d.box(d.types.traf, d.box(d.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), d.box(d.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t])), d.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
						},
						d.trak = function(e) {
							return e.duration = e.duration || 4294967295,
							d.box(d.types.trak, d.tkhd(e), d.mdia(e))
						},
						d.trex = function(e) {
							e = e.id;
							return d.box(d.types.trex, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
						},
						d.trun = function(e, t) {
							var i, r, s, n, a, o = e.samples || [],
							l = o.length,
							e = 12 + 16 * l,
							c = new Uint8Array(e);
							for (c.set([0, 0, 15, 1, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, (t += 8 + e) >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0), i = 0; i < l; i++) r = (a = o[i]).duration,
							s = a.size,
							n = a.flags,
							a = a.cts,
							c.set([r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, n.isLeading << 2 | n.dependsOn, n.isDependedOn << 6 | n.hasRedundancy << 4 | n.paddingValue << 1 | n.isNonSync, 61440 & n.degradPrio, 15 & n.degradPrio, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a], 12 + 16 * i);
							return d.box(d.types.trun, c)
						},
						d.initSegment = function(e) {
							d.types || d.init();
							var e = d.moov(e),
							t = new Uint8Array(d.FTYP.byteLength + e.byteLength);
							return t.set(d.FTYP),
							t.set(e, d.FTYP.byteLength),
							t
						},
						d);
						function d() {}
						i.types = void 0,
						i.HDLR_TYPES = void 0,
						i.STTS = void 0,
						i.STSC = void 0,
						i.STCO = void 0,
						i.STSZ = void 0,
						i.VMHD = void 0,
						i.SMHD = void 0,
						i.STSD = void 0,
						i.FTYP = void 0,
						i.DINF = void 0,
						t.
					default = i
					},
					"./src/remux/mp4-remuxer.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						}),
						i.d(t, "normalizePts",
						function() {
							return Z
						});
						var h = i("./src/polyfills/number.ts"),
						U = i("./src/remux/aac-helper.ts"),
						G = i("./src/remux/mp4-generator.ts"),
						W = i("./src/events.ts"),
						q = i("./src/errors.ts"),
						Q = i("./src/utils/logger.ts"),
						S = i("./src/types/loader.ts"),
						z = i("./src/utils/timescale-conversion.ts");
						function J() {
							return (J = Object.assign ||
							function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var i, r = arguments[t];
									for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
								}
								return e
							}).apply(this, arguments)
						}
						var X = null,
						s = null,
						Y = !1,
						r = ((t = n.prototype).destroy = function() {},
						t.resetTimeStamp = function(e) {
							Q.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),
							this._initPTS = this._initDTS = e
						},
						t.resetNextTimestamp = function() {
							Q.logger.log("[mp4-remuxer]: reset next timestamp"),
							this.isVideoContiguous = !1,
							this.isAudioContiguous = !1
						},
						t.resetInitSegment = function() {
							Q.logger.log("[mp4-remuxer]: ISGenerated flag reset"),
							this.ISGenerated = !1
						},
						t.getVideoStartPts = function(e) {
							var r = !1,
							e = e.reduce(function(e, t) {
								var i = t.pts - e;
								return i < -4294967296 ? (r = !0, Z(e, t.pts)) : 0 < i ? e: t.pts
							},
							e[0].pts);
							return r && Q.logger.debug("PTS rollover detected"),
							e
						},
						t.remux = function(e, t, i, r, s, n, a, o) {
							var l, c, u, d, h, f, A, p = s,
							g = s,
							m = -1 < e.pid,
							v = -1 < t.pid,
							y = t.samples.length,
							b = 0 < e.samples.length,
							E = 1 < y;
							return (m && !b || v && !E) && !this.ISGenerated && !a || (this.ISGenerated || (u = this.generateIS(e, t, s)), m = this.isVideoContiguous, a = -1, E && (a = function(e) {
								for (var t = 0; t < e.length; t++) if (e[t].key) return t;
								return - 1
							} (t.samples), !m && this.config.forceKeyFrameOnDiscontinuity) && (f = !0, 0 < a ? (Q.logger.warn("[mp4-remuxer]: Dropped " + a + " out of " + y + " video samples due to a missing keyframe"), A = this.getVideoStartPts(t.samples), t.samples = t.samples.slice(a), t.dropped += a, g += (t.samples[0].pts - A) / (t.timescale || 9e4)) : -1 === a && (Q.logger.warn("[mp4-remuxer]: No keyframe found out of " + y + " video samples"), f = !1)), this.ISGenerated && (b && E && (A = this.getVideoStartPts(t.samples), y = (Z(e.samples[0].pts, A) - A) / t.inputTimeScale, p += Math.max(0, y), g += Math.max(0, -y)), b ? (e.samplerate || (Q.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), u = this.generateIS(e, t, s)), c = this.remuxAudio(e, p, this.isAudioContiguous, n, v || E || o === S.PlaylistLevelType.AUDIO ? g: void 0), E && (A = c ? c.endPTS - c.startPTS: 0, t.inputTimeScale || (Q.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), u = this.generateIS(e, t, s)), l = this.remuxVideo(t, g, m, A))) : E && (l = this.remuxVideo(t, g, m, 0)), l && (l.firstKeyFrame = a, l.independent = -1 !== a))),
							this.ISGenerated && (i.samples.length && (h = this.remuxID3(i, s)), r.samples.length && (d = this.remuxText(r, s))),
							{
								audio: c,
								video: l,
								initSegment: u,
								independent: f,
								text: d,
								id3: h
							}
						},
						t.generateIS = function(e, t, i) {
							var r, s, n, a = e.samples,
							o = t.samples,
							l = this.typeSupported,
							c = {},
							u = !Object(h.isFiniteNumber)(this._initPTS),
							d = "audio/mp4";
							if (u && (n = s = 1 / 0), e.config && a.length && (e.timescale = e.samplerate, e.isAAC || (l.mpeg ? (d = "audio/mpeg", e.codec = "") : l.mp3 && (e.codec = "mp3")), c.audio = {
								id: "audio",
								container: d,
								codec: e.codec,
								initSegment: !e.isAAC && l.mpeg ? new Uint8Array(0) : G.
							default.initSegment([e]),
								metadata: {
									channelCount: e.channelCount
								}
							},
							u && (r = e.inputTimeScale, n = s = a[0].pts - Math.round(r * i))), t.sps && t.pps && o.length && (t.timescale = t.inputTimeScale, c.video = {
								id: "main",
								container: "video/mp4",
								codec: t.codec,
								initSegment: G.
							default.initSegment([t]),
								metadata: {
									width: t.width,
									height: t.height
								}
							},
							u) && (r = t.inputTimeScale, d = this.getVideoStartPts(o), l = Math.round(r * i), s = Math.min(s, Z(o[0].dts, d) - l), n = Math.min(n, d - l)), Object.keys(c).length) return this.ISGenerated = !0,
							u && (this._initPTS = n, this._initDTS = s),
							{
								tracks: c,
								initPTS: n,
								timescale: r
							}
						},
						t.remuxVideo = function(e, t, i, r) {
							var s, n = e.inputTimeScale,
							a = e.samples,
							o = [],
							l = a.length,
							c = this._initPTS,
							u = this.nextAvcDts,
							d = 8,
							h = Number.POSITIVE_INFINITY,
							f = Number.NEGATIVE_INFINITY,
							A = 0,
							p = !1;
							i && null !== u || (u = t * n - (a[0].pts - Z(a[0].dts, a[0].pts)));
							for (var g = 0; g < l; g++) {
								var m = a[g];
								m.pts = Z(m.pts - c, u),
								m.dts = Z(m.dts - c, u),
								m.dts > m.pts && (A = Math.max(Math.min(A, m.pts - m.dts), -18e3)),
								m.dts < a[0 < g ? g - 1 : g].dts && (p = !0)
							}
							p && a.sort(function(e, t) {
								var i = e.dts - t.dts,
								e = e.pts - t.pts;
								return i || e
							}),
							v = a[0].dts;
							var v, t = a[a.length - 1].dts,
							y = Math.round((t - v) / (l - 1));
							if (A < 0) {
								if (A < -2 * y) {
									Q.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(z.toMsFromMpegTsClock)( - y, !0) + " ms");
									for (var b = A,
									E = 0; E < l; E++) a[E].dts = b = Math.max(b, a[E].pts - y),
									a[E].pts = Math.max(b, a[E].pts)
								} else {
									Q.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(z.toMsFromMpegTsClock)(A, !0) + " ms to overcome this issue");
									for (var S = 0; S < l; S++) a[S].dts = a[S].dts + A
								}
								v = a[0].dts
							}
							i && ((L = y < (i = v - u)) || i < -1) && (L ? Q.logger.warn("AVC: " + Object(z.toMsFromMpegTsClock)(i, !0) + " ms (" + i + "dts) hole between fragments detected, filling it") : Q.logger.warn("AVC: " + Object(z.toMsFromMpegTsClock)( - i, !0) + " ms (" + i + "dts) overlapping between fragments detected"), v = u, L = a[0].pts - i, a[0].dts = v, a[0].pts = L, Q.logger.log("Video: First PTS/DTS adjusted: " + Object(z.toMsFromMpegTsClock)(L, !0) + "/" + Object(z.toMsFromMpegTsClock)(v, !0) + ", delta: " + Object(z.toMsFromMpegTsClock)(i, !0) + " ms")),
							Y && (v = Math.max(0, v));
							for (var T = 0,
							M = 0,
							w = 0; w < l; w++) {
								for (var k = a[w], U = k.units, N = U.length, R = 0, C = 0; C < N; C++) R += U[C].data.length;
								M += R,
								T += N,
								k.length = R,
								k.dts = Math.max(k.dts, v),
								k.pts = Math.max(k.pts, k.dts, 0),
								h = Math.min(k.pts, h),
								f = Math.max(k.pts, f)
							}
							t = a[l - 1].dts;
							var D, L = M + 4 * T + 8;
							try {
								D = new Uint8Array(L)
							} catch(e) {
								return void this.observer.emit(W.Events.ERROR, W.Events.ERROR, {
									type: q.ErrorTypes.MUX_ERROR,
									details: q.ErrorDetails.REMUX_ALLOC_ERROR,
									fatal: !1,
									bytes: L,
									reason: "fail allocating video mdat " + L
								})
							}
							var j = new DataView(D.buffer);
							j.setUint32(0, L),
							D.set(G.
						default.types.mdat, 4);
							for (var I = 0; I < l; I++) {
								for (var B, x = a[I], _ = x.units, V = 0, O = 0, H = _.length; O < H; O++) {
									var F = _[O],
									K = F.data,
									F = F.data.byteLength;
									j.setUint32(d, F),
									d += 4,
									D.set(K, d),
									d += F,
									V += 4 + F
								}
								I < l - 1 ? s = a[I + 1].dts - x.dts: (P = this.config, B = x.dts - a[0 < I ? I - 1 : I].dts, P.stretchShortVideoTrack && null !== this.nextAudioPts && Math.floor(P.maxBufferHole * n) < (P = (r ? h + r * n: this.nextAudioPts) - x.pts) ? ((s = P - B) < 0 && (s = B), Q.logger.log("[mp4-remuxer]: It is approximately " + P / 90 + " ms to the next segment; using duration " + s / 90 + " ms for the last video frame.")) : s = B);
								var P = Math.round(x.pts - x.dts);
								o.push(new $(x.key, s, V, P))
							}
							o.length && X && X < 70 && ((i = o[0].flags).dependsOn = 2, i.isNonSync = 0),
							console.assert(void 0 !== s, "mp4SampleDuration must be computed"),
							this.nextAvcDts = u = t + s,
							this.isVideoContiguous = !0;
							L = {
								data1: G.
							default.moof(e.sequenceNumber++, v, J({},
								e, {
									samples: o
								})),
								data2: D,
								startPTS: h / n,
								endPTS: (f + s) / n,
								startDTS: v / n,
								endDTS: u / n,
								type: "video",
								hasAudio: !1,
								hasVideo: !0,
								nb: o.length,
								dropped: e.dropped
							};
							return e.samples = [],
							e.dropped = 0,
							console.assert(D.length, "MDAT length must not be zero"),
							L
						},
						t.remuxAudio = function(e, t, i, r, s) {
							var n = e.inputTimeScale,
							a = n / (e.samplerate || n),
							o = e.isAAC ? 1024 : 1152,
							l = o * a,
							c = this._initPTS,
							u = !e.isAAC && this.typeSupported.mpeg,
							d = [],
							h = e.samples,
							f = u ? 0 : 8,
							A = this.nextAudioPts || -1,
							p = t * n;
							if (this.isAudioContiguous = i = i || h.length && 0 < A && (r && Math.abs(p - A) < 9e3 || Math.abs(Z(h[0].pts - c, p) - A) < 20 * l), h.forEach(function(e) {
								e.pts = Z(e.pts - c, p)
							}), !i || A < 0) {
								if (! (h = h.filter(function(e) {
									return 0 <= e.pts
								})).length) return;
								A = 0 === s ? 0 : r ? Math.max(0, p) : h[0].pts
							}
							if (e.isAAC) for (var g = void 0 !== s,
							m = this.config.maxAudioFramesDrift,
							v = 0,
							y = A; v < h.length; v++) {
								var b = h[v],
								E = b.pts,
								S = E - y,
								T = Math.abs(1e3 * S / n);
								if (S <= -m * l && g) 0 === v && (Q.logger.warn("Audio frame @ " + (E / n).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * S / n) + " ms."), this.nextAudioPts = A = y = E);
								else if (m * l <= S && T < 1e4 && g) {
									var w = Math.round(S / l); (y = E - w * l) < 0 && (w--, y += l),
									0 === v && (this.nextAudioPts = A = y),
									Q.logger.warn("[mp4-remuxer]: Injecting " + w + " audio frame @ " + (y / n).toFixed(3) + "s due to " + Math.round(1e3 * S / n) + " ms gap.");
									for (var k = 0; k < w; k++) {
										var R = Math.max(y, 0),
										C = U.
									default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
										C || (Q.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), C = b.unit.subarray()),
										h.splice(v, 0, {
											unit: C,
											pts: R
										}),
										y += l,
										v++
									}
								}
								b.pts = y,
								y += l
							}
							for (var D, L = null,
							I = null,
							B = 0,
							x = h.length; x--;) B += h[x].unit.byteLength;
							for (var O = 0,
							M = h.length; O < M; O++) {
								var F = h[O],
								P = F.unit,
								F = F.pts;
								if (null !== I) d[O - 1].duration = Math.round((F - I) / a);
								else {
									if (L = F = i && e.isAAC ? A: F, !(0 < B)) return;
									B += f;
									try {
										D = new Uint8Array(B)
									} catch(e) {
										return void this.observer.emit(W.Events.ERROR, W.Events.ERROR, {
											type: q.ErrorTypes.MUX_ERROR,
											details: q.ErrorDetails.REMUX_ALLOC_ERROR,
											fatal: !1,
											bytes: B,
											reason: "fail allocating audio mdat " + B
										})
									}
									u || (new DataView(D.buffer).setUint32(0, B), D.set(G.
								default.types.mdat, 4))
								}
								D.set(P, f);
								P = P.byteLength;
								f += P,
								d.push(new $(!0, o, P, 0)),
								I = F
							}
							t = d.length;
							if (t) return r = d[d.length - 1],
							this.nextAudioPts = A = I + a * r.duration,
							s = {
								data1: u ? new Uint8Array(0) : G.
							default.moof(e.sequenceNumber++, L / a, J({},
								e, {
									samples: d
								})),
								data2: D,
								startPTS: s = L / n,
								endPTS: r = A / n,
								startDTS: s,
								endDTS: r,
								type: "audio",
								hasAudio: !0,
								hasVideo: !(e.samples = []),
								nb: t
							},
							this.isAudioContiguous = !0,
							console.assert(D.length, "MDAT length must not be zero"),
							s
						},
						t.remuxEmptyAudio = function(e, t, i, r) {
							var s = e.inputTimeScale,
							n = s / (e.samplerate || s),
							a = this.nextAudioPts,
							o = (null !== a ? a: r.startDTS * s) + this._initDTS,
							a = r.endDTS * s + this._initDTS,
							l = 1024 * n,
							c = Math.ceil((a - o) / l),
							u = U.
						default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
							if (Q.logger.warn("[mp4-remuxer]: remux empty Audio"), u) {
								for (var d = [], h = 0; h < c; h++) {
									var f = o + h * l;
									d.push({
										unit: u,
										pts: f,
										dts: f
									})
								}
								return e.samples = d,
								this.remuxAudio(e, t, i, !1)
							}
							Q.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
						},
						t.remuxID3 = function(e, t) {
							var i = e.samples.length;
							if (i) {
								for (var r = e.inputTimeScale,
								s = this._initPTS,
								n = this._initDTS,
								a = 0; a < i; a++) {
									var o = e.samples[a];
									o.pts = Z(o.pts - s, t * r) / r,
									o.dts = Z(o.dts - n, t * r) / r
								}
								var l = e.samples;
								return e.samples = [],
								{
									samples: l
								}
							}
						},
						t.remuxText = function(e, t) {
							var i = e.samples.length;
							if (i) {
								for (var r = e.inputTimeScale,
								s = this._initPTS,
								n = 0; n < i; n++) {
									var a = e.samples[n];
									a.pts = Z(a.pts - s, t * r) / r
								}
								e.samples.sort(function(e, t) {
									return e.pts - t.pts
								});
								var o = e.samples;
								return e.samples = [],
								{
									samples: o
								}
							}
						},
						n);
						function n(e, t, i, r) {
							this.observer = void 0,
							this.config = void 0,
							this.typeSupported = void 0,
							this.ISGenerated = !1,
							this._initPTS = void 0,
							this._initDTS = void 0,
							this.nextAvcDts = null,
							this.nextAudioPts = null,
							this.isAudioContiguous = !1,
							this.isVideoContiguous = !1,
							this.observer = e,
							this.config = t,
							this.typeSupported = i,
							this.ISGenerated = !1,
							null === X && (e = (navigator.userAgent || "").match(/Chrome\/(\d+)/i), X = e ? parseInt(e[1]) : 0),
							null === s && (t = navigator.userAgent.match(/Safari\/(\d+)/i), s = t ? parseInt(t[1]) : 0),
							Y = !!X && X < 75 || !!s && s < 600
						}
						function Z(e, t) {
							var i;
							if (null === t) return e;
							for (i = t < e ? -8589934592 : 8589934592; 4294967296 < Math.abs(e - t);) e += i;
							return e
						}
						var $ = function(e, t, i, r) {
							this.size = void 0,
							this.duration = void 0,
							this.cts = void 0,
							this.flags = void 0,
							this.duration = t,
							this.size = i,
							this.cts = r,
							this.flags = new a(e)
						},
						a = function(e) {
							this.isLeading = 0,
							this.isDependedOn = 0,
							this.hasRedundancy = 0,
							this.degradPrio = 0,
							this.dependsOn = 1,
							this.isNonSync = 1,
							this.dependsOn = e ? 2 : 1,
							this.isNonSync = e ? 0 : 1
						}
					},
					"./src/remux/passthrough-remuxer.ts": function(e, t, i) {
						i.r(t);
						var d = i("./src/polyfills/number.ts"),
						h = i("./src/utils/mp4-tools.ts"),
						n = i("./src/loader/fragment.ts"),
						f = i("./src/utils/logger.ts"); (i = r.prototype).destroy = function() {},
						i.resetTimeStamp = function(e) {
							this.initPTS = e,
							this.lastEndDTS = null
						},
						i.resetNextTimestamp = function() {
							this.lastEndDTS = null
						},
						i.resetInitSegment = function(e, t, i) {
							this.audioCodec = t,
							this.videoCodec = i,
							this.generateInitSegment(e),
							this.emitInitSegment = !0
						},
						i.generateInitSegment = function(e) {
							var t = this.audioCodec,
							i = this.videoCodec;
							if (!e || !e.byteLength) return this.initTracks = void 0,
							void(this.initData = void 0);
							var r = this.initData = Object(h.parseInitSegment)(e),
							t = t || a(r.audio, n.ElementaryStreamTypes.AUDIO),
							i = i || a(r.video, n.ElementaryStreamTypes.VIDEO),
							s = {};
							r.audio && r.video ? s.audiovideo = {
								container: "video/mp4",
								codec: t + "," + i,
								initSegment: e,
								id: "main"
							}: r.audio ? s.audio = {
								container: "audio/mp4",
								codec: t,
								initSegment: e,
								id: "audio"
							}: r.video ? s.video = {
								container: "video/mp4",
								codec: i,
								initSegment: e,
								id: "main"
							}: f.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),
							this.initTracks = s
						},
						i.remux = function(e, t, i, r, s) {
							var n = this.initPTS,
							a = this.lastEndDTS,
							o = {
								audio: void 0,
								video: void 0,
								text: r,
								id3: i,
								initSegment: void 0
							},
							s = (Object(d.isFiniteNumber)(a) || (a = this.lastEndDTS = s || 0), t.samples);
							if (!s || !s.length) return o;
							var t = {
								initPTS: void 0,
								timescale: 1
							},
							l = this.initData;
							if (l && l.length || (this.generateInitSegment(s), l = this.initData), !l || !l.length) return f.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),
							o;
							this.emitInitSegment && (t.tracks = this.initTracks, this.emitInitSegment = !1),
							Object(d.isFiniteNumber)(n) || (this.initPTS = t.initPTS = n = A(l, s, a));
							var c = Object(h.getDuration)(s, l),
							u = c + a,
							n = (Object(h.offsetStartDTS)(l, s, n), 0 < c ? this.lastEndDTS = u: (f.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp()), !!l.audio),
							c = !!l.video,
							l = "",
							s = (n && (l += "audio"), c && (l += "video"), {
								data1: s,
								startPTS: a,
								startDTS: a,
								endPTS: u,
								endDTS: u,
								type: l,
								hasAudio: n,
								hasVideo: c,
								nb: 1,
								dropped: 0
							});
							return o.audio = "audio" === s.type ? s: void 0,
							o.video = "audio" !== s.type ? s: void 0,
							o.text = r,
							o.id3 = i,
							o.initSegment = t,
							o
						};
						var A = function(e, t, i) {
							return Object(h.getStartDTS)(e, t) - i
						};
						function r() {
							this.emitInitSegment = !1,
							this.audioCodec = void 0,
							this.videoCodec = void 0,
							this.initData = void 0,
							this.initPTS = void 0,
							this.initTracks = void 0,
							this.lastEndDTS = null
						}
						function a(e, t) {
							e = null == e ? void 0 : e.codec;
							return e && 4 < e.length ? e: "hvc1" === e ? "hvc1.1.c.L120.90": "av01" === e ? "av01.0.04M.08": "avc1" === e || t === n.ElementaryStreamTypes.VIDEO ? "avc1.42e01e": "mp4a.40.5"
						}
						t.
					default = r
					},
					"./src/task-loop.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						}); (i = s.prototype).destroy = function() {
							this.onHandlerDestroying(),
							this.onHandlerDestroyed()
						},
						i.onHandlerDestroying = function() {
							this.clearNextTick(),
							this.clearInterval()
						},
						i.onHandlerDestroyed = function() {},
						i.hasInterval = function() {
							return !! this._tickInterval
						},
						i.hasNextTick = function() {
							return !! this._tickTimer
						},
						i.setInterval = function(e) {
							return ! this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0)
						},
						i.clearInterval = function() {
							return !! this._tickInterval && (self.clearInterval(this._tickInterval), !(this._tickInterval = null))
						},
						i.clearNextTick = function() {
							return !! this._tickTimer && (self.clearTimeout(this._tickTimer), !(this._tickTimer = null))
						},
						i.tick = function() {
							this._tickCallCount++,
							1 === this._tickCallCount && (this.doTick(), 1 < this._tickCallCount && this.tickImmediate(), this._tickCallCount = 0)
						},
						i.tickImmediate = function() {
							this.clearNextTick(),
							this._tickTimer = self.setTimeout(this._boundTick, 0)
						},
						i.doTick = function() {};
						var r = s;
						function s() {
							this._boundTick = void 0,
							this._tickTimer = null,
							this._tickInterval = null,
							this._tickCallCount = 0,
							this._boundTick = this.tick.bind(this)
						}
					},
					"./src/types/cmcd.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "CMCDVersion",
						function() {
							return a
						}),
						i.d(t, "CMCDObjectType",
						function() {
							return r
						}),
						i.d(t, "CMCDStreamingFormat",
						function() {
							return s
						}),
						i.d(t, "CMCDStreamType",
						function() {
							return n
						});
						var r, s, n, a = 1; (i = r = r || {}).MANIFEST = "m",
						i.AUDIO = "a",
						i.VIDEO = "v",
						i.MUXED = "av",
						i.INIT = "i",
						i.CAPTION = "c",
						i.TIMED_TEXT = "tt",
						i.KEY = "k",
						i.OTHER = "o",
						(t = s = s || {}).DASH = "d",
						t.HLS = "h",
						t.SMOOTH = "s",
						t.OTHER = "o",
						(i = n = n || {}).VOD = "v",
						i.LIVE = "l"
					},
					"./src/types/level.ts": function(e, t, i) {
						function r(e, t) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								r.enumerable = r.enumerable || !1,
								r.configurable = !0,
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r)
							}
						}
						var s;
						function n(e, t) {
							var i = e.canSkipUntil,
							r = e.canSkipDateRanges,
							e = e.endSN;
							return i && (void 0 !== t ? t - e: 0) < i ? r ? s.v2: s.Yes: s.No
						}
						i.r(t),
						i.d(t, "HlsSkip",
						function() {
							return s
						}),
						i.d(t, "getSkipValue",
						function() {
							return n
						}),
						i.d(t, "HlsUrlParameters",
						function() {
							return a
						}),
						i.d(t, "Level",
						function() {
							return o
						}),
						(i = s = s || {}).No = "",
						i.Yes = "YES",
						i.v2 = "v2";
						c.prototype.addDirectives = function(e) {
							e = new self.URL(e);
							return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()),
							void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()),
							this.skip && e.searchParams.set("_HLS_skip", this.skip),
							e.toString()
						};
						var a = c,
						o = (r(l.prototype, [{
							key: "maxBitrate",
							get: function() {
								return Math.max(this.realBitrate, this.bitrate)
							}
						},
						{
							key: "uri",
							get: function() {
								return this.url[this._urlId] || ""
							}
						},
						{
							key: "urlId",
							get: function() {
								return this._urlId
							},
							set: function(e) {
								e %= this.url.length;
								this._urlId !== e && (this.details = void 0, this._urlId = e)
							}
						}]), l);
						function l(e) {
							this.attrs = void 0,
							this.audioCodec = void 0,
							this.bitrate = void 0,
							this.codecSet = void 0,
							this.height = void 0,
							this.id = void 0,
							this.name = void 0,
							this.videoCodec = void 0,
							this.width = void 0,
							this.unknownCodecs = void 0,
							this.audioGroupIds = void 0,
							this.details = void 0,
							this.fragmentError = 0,
							this.loadError = 0,
							this.loaded = void 0,
							this.realBitrate = 0,
							this.textGroupIds = void 0,
							this.url = void 0,
							this._urlId = 0,
							this.url = [e.url],
							this.attrs = e.attrs,
							this.bitrate = e.bitrate,
							e.details && (this.details = e.details),
							this.id = e.id || 0,
							this.name = e.name,
							this.width = e.width || 0,
							this.height = e.height || 0,
							this.audioCodec = e.audioCodec,
							this.videoCodec = e.videoCodec,
							this.unknownCodecs = e.unknownCodecs,
							this.codecSet = [e.videoCodec, e.audioCodec].filter(function(e) {
								return e
							}).join(",").replace(/\.[^.,]+/g, "")
						}
						function c(e, t, i) {
							this.msn = void 0,
							this.part = void 0,
							this.skip = void 0,
							this.msn = e,
							this.part = t,
							this.skip = i
						}
					},
					"./src/types/loader.ts": function(e, t, i) {
						var r, s;
						i.r(t),
						i.d(t, "PlaylistContextType",
						function() {
							return r
						}),
						i.d(t, "PlaylistLevelType",
						function() {
							return s
						}),
						(i = r = r || {}).MANIFEST = "manifest",
						i.LEVEL = "level",
						i.AUDIO_TRACK = "audioTrack",
						i.SUBTITLE_TRACK = "subtitleTrack",
						(t = s = s || {}).MAIN = "main",
						t.AUDIO = "audio",
						t.SUBTITLE = "subtitle"
					},
					"./src/types/transmuxer.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "ChunkMetadata",
						function() {
							return r
						});
						var r = function(e, t, i, r, s, n) {
							void 0 === r && (r = 0),
							void 0 === s && (s = -1),
							void 0 === n && (n = !1),
							this.level = void 0,
							this.sn = void 0,
							this.part = void 0,
							this.id = void 0,
							this.size = void 0,
							this.partial = void 0,
							this.transmuxing = {
								start: 0,
								executeStart: 0,
								executeEnd: 0,
								end: 0
							},
							this.buffering = {
								audio: {
									start: 0,
									executeStart: 0,
									executeEnd: 0,
									end: 0
								},
								video: {
									start: 0,
									executeStart: 0,
									executeEnd: 0,
									end: 0
								},
								audiovideo: {
									start: 0,
									executeStart: 0,
									executeEnd: 0,
									end: 0
								}
							},
							this.level = e,
							this.sn = t,
							this.id = i,
							this.size = r,
							this.part = s,
							this.partial = n
						}
					},
					"./src/utils/attr-list.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "AttrList",
						function() {
							return n
						});
						var r = /^(\d+)x(\d+)$/,
						s = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
						n = ((i = a.prototype).decimalInteger = function(e) {
							e = parseInt(this[e], 10);
							return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
						},
						i.hexadecimalInteger = function(e) {
							if (this[e]) {
								for (var t = (1 & (t = (this[e] || "0x").slice(2)).length ? "0": "") + t, i = new Uint8Array(t.length / 2), r = 0; r < t.length / 2; r++) i[r] = parseInt(t.slice(2 * r, 2 * r + 2), 16);
								return i
							}
							return null
						},
						i.hexadecimalIntegerAsNumber = function(e) {
							e = parseInt(this[e], 16);
							return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
						},
						i.decimalFloatingPoint = function(e) {
							return parseFloat(this[e])
						},
						i.optionalFloat = function(e, t) {
							e = this[e];
							return e ? parseFloat(e) : t
						},
						i.enumeratedString = function(e) {
							return this[e]
						},
						i.bool = function(e) {
							return "YES" === this[e]
						},
						i.decimalResolution = function(e) {
							e = r.exec(this[e]);
							if (null !== e) return {
								width: parseInt(e[1], 10),
								height: parseInt(e[2], 10)
							}
						},
						a.parseAttrList = function(e) {
							var t, i = {};
							for (s.lastIndex = 0; null !== (t = s.exec(e));) {
								var r = t[2];
								0 === r.indexOf('"') && r.lastIndexOf('"') === r.length - 1 && (r = r.slice(1, -1)),
								i[t[1]] = r
							}
							return i
						},
						a);
						function a(e) {
							for (var t in e = "string" == typeof e ? a.parseAttrList(e) : e) e.hasOwnProperty(t) && (this[t] = e[t])
						}
					},
					"./src/utils/binary-search.ts": function(e, t, i) {
						i.r(t),
						t.
					default = {
							search: function(e, t) {
								for (var i, r, s = 0,
								n = e.length - 1; s <= n;) {
									var a = t(r = e[i = (s + n) / 2 | 0]);
									if (0 < a) s = 1 + i;
									else {
										if (! (a < 0)) return r;
										n = i - 1
									}
								}
								return null
							}
						}
					},
					"./src/utils/buffer-helper.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "BufferHelper",
						function() {
							return n
						});
						var r = i("./src/utils/logger.ts"),
						s = {
							length: 0,
							start: function() {
								return 0
							},
							end: function() {
								return 0
							}
						},
						n = (a.isBuffered = function(e, t) {
							try {
								if (e) for (var i = a.getBuffered(e), r = 0; r < i.length; r++) if (t >= i.start(r) && t <= i.end(r)) return ! 0
							} catch(e) {}
							return ! 1
						},
						a.bufferInfo = function(e, t, i) {
							try {
								if (e) {
									for (var r = a.getBuffered(e), s = [], n = 0; n < r.length; n++) s.push({
										start: r.start(n),
										end: r.end(n)
									});
									return this.bufferedInfo(s, t, i)
								}
							} catch(e) {}
							return {
								len: 0,
								start: t,
								end: t,
								nextStart: void 0
							}
						},
						a.bufferedInfo = function(e, t, i) {
							t = Math.max(0, t),
							e.sort(function(e, t) {
								return e.start - t.start || t.end - e.end
							});
							var r = [];
							if (i) for (var s = 0; s < e.length; s++) {
								var n, a = r.length;
								a ? (n = r[a - 1].end, e[s].start - n < i ? e[s].end > n && (r[a - 1].end = e[s].end) : r.push(e[s])) : r.push(e[s])
							} else r = e;
							for (var o, l = 0,
							c = t,
							u = t,
							d = 0; d < r.length; d++) {
								var h = r[d].start,
								f = r[d].end;
								if (h <= t + i && t < f) c = h,
								l = (u = f) - t;
								else if (t + i < h) {
									o = h;
									break
								}
							}
							return {
								len: l,
								start: c || 0,
								end: u || 0,
								nextStart: o
							}
						},
						a.getBuffered = function(e) {
							try {
								return e.buffered
							} catch(e) {
								return r.logger.log("failed to get media.buffered", e),
								s
							}
						},
						a);
						function a() {}
					},
					"./src/utils/cea-608-parser.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "Row",
						function() {
							return v
						}),
						i.d(t, "CaptionScreen",
						function() {
							return y
						});
						function n(e) {
							var t = e;
							return s.hasOwnProperty(e) && (t = s[e]),
							String.fromCharCode(t)
						}
						function l(e) {
							for (var t = [], i = 0; i < e.length; i++) t.push(e[i].toString(16));
							return t
						}
						var c, r = i("./src/utils/logger.ts"),
						s = {
							42 : 225,
							92 : 233,
							94 : 237,
							95 : 243,
							96 : 250,
							123 : 231,
							124 : 247,
							125 : 209,
							126 : 241,
							127 : 9608,
							128 : 174,
							129 : 176,
							130 : 189,
							131 : 191,
							132 : 8482,
							133 : 162,
							134 : 163,
							135 : 9834,
							136 : 224,
							137 : 32,
							138 : 232,
							139 : 226,
							140 : 234,
							141 : 238,
							142 : 244,
							143 : 251,
							144 : 193,
							145 : 201,
							146 : 211,
							147 : 218,
							148 : 220,
							149 : 252,
							150 : 8216,
							151 : 161,
							152 : 42,
							153 : 8217,
							154 : 9473,
							155 : 169,
							156 : 8480,
							157 : 8226,
							158 : 8220,
							159 : 8221,
							160 : 192,
							161 : 194,
							162 : 199,
							163 : 200,
							164 : 202,
							165 : 203,
							166 : 235,
							167 : 206,
							168 : 207,
							169 : 239,
							170 : 212,
							171 : 217,
							172 : 249,
							173 : 219,
							174 : 171,
							175 : 187,
							176 : 195,
							177 : 227,
							178 : 205,
							179 : 204,
							180 : 236,
							181 : 210,
							182 : 242,
							183 : 213,
							184 : 245,
							185 : 123,
							186 : 125,
							187 : 92,
							188 : 94,
							189 : 95,
							190 : 124,
							191 : 8764,
							192 : 196,
							193 : 228,
							194 : 214,
							195 : 246,
							196 : 223,
							197 : 165,
							198 : 164,
							199 : 9475,
							200 : 197,
							201 : 229,
							202 : 216,
							203 : 248,
							204 : 9487,
							205 : 9491,
							206 : 9495,
							207 : 9499
						},
						u = 15,
						a = 100,
						o = {
							17 : 1,
							18 : 3,
							21 : 5,
							22 : 7,
							23 : 9,
							16 : 11,
							19 : 12,
							20 : 14
						},
						d = {
							17 : 2,
							18 : 4,
							21 : 6,
							22 : 8,
							23 : 10,
							19 : 13,
							20 : 15
						},
						h = {
							25 : 1,
							26 : 3,
							29 : 5,
							30 : 7,
							31 : 9,
							24 : 11,
							27 : 12,
							28 : 14
						},
						f = {
							25 : 2,
							26 : 4,
							29 : 6,
							30 : 8,
							31 : 10,
							27 : 13,
							28 : 15
						},
						A = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
						p = ((i = c = c || {})[i.ERROR = 0] = "ERROR", i[i.TEXT = 1] = "TEXT", i[i.WARNING = 2] = "WARNING", i[i.INFO = 2] = "INFO", i[i.DEBUG = 3] = "DEBUG", i[i.DATA = 3] = "DATA", C.prototype.log = function(e, t) {
							this.verboseLevel >= e && r.logger.log(this.time + " [" + e + "] " + t)
						},
						C),
						g = ((i = R.prototype).reset = function() {
							this.foreground = "white",
							this.underline = !1,
							this.italics = !1,
							this.background = "black",
							this.flash = !1
						},
						i.setStyles = function(e) {
							for (var t = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < t.length; i++) {
								var r = t[i];
								e.hasOwnProperty(r) && (this[r] = e[r])
							}
						},
						i.isDefault = function() {
							return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
						},
						i.equals = function(e) {
							return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
						},
						i.copy = function(e) {
							this.foreground = e.foreground,
							this.underline = e.underline,
							this.italics = e.italics,
							this.background = e.background,
							this.flash = e.flash
						},
						i.toString = function() {
							return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
						},
						R),
						m = ((i = k.prototype).reset = function() {
							this.uchar = " ",
							this.penState.reset()
						},
						i.setChar = function(e, t) {
							this.uchar = e,
							this.penState.copy(t)
						},
						i.setPenState = function(e) {
							this.penState.copy(e)
						},
						i.equals = function(e) {
							return this.uchar === e.uchar && this.penState.equals(e.penState)
						},
						i.copy = function(e) {
							this.uchar = e.uchar,
							this.penState.copy(e.penState)
						},
						i.isEmpty = function() {
							return " " === this.uchar && this.penState.isDefault()
						},
						k),
						v = ((i = w.prototype).equals = function(e) {
							for (var t = !0,
							i = 0; i < a; i++) if (!this.chars[i].equals(e.chars[i])) {
								t = !1;
								break
							}
							return t
						},
						i.copy = function(e) {
							for (var t = 0; t < a; t++) this.chars[t].copy(e.chars[t])
						},
						i.isEmpty = function() {
							for (var e = !0,
							t = 0; t < a; t++) if (!this.chars[t].isEmpty()) {
								e = !1;
								break
							}
							return e
						},
						i.setCursor = function(e) {
							this.pos !== e && (this.pos = e),
							this.pos < 0 ? (this.logger.log(c.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > a && (this.logger.log(c.DEBUG, "Too large cursor position " + this.pos), this.pos = a)
						},
						i.moveCursor = function(e) {
							var t = this.pos + e;
							if (1 < e) for (var i = this.pos + 1; i < t + 1; i++) this.chars[i].setPenState(this.currPenState);
							this.setCursor(t)
						},
						i.backSpace = function() {
							this.moveCursor( - 1),
							this.chars[this.pos].setChar(" ", this.currPenState)
						},
						i.insertChar = function(e) {
							144 <= e && this.backSpace();
							var t = n(e);
							this.pos >= a ? this.logger.log(c.ERROR, "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
						},
						i.clearFromPos = function(e) {
							for (var t = e; t < a; t++) this.chars[t].reset()
						},
						i.clear = function() {
							this.clearFromPos(0),
							this.pos = 0,
							this.currPenState.reset()
						},
						i.clearToEndOfRow = function() {
							this.clearFromPos(this.pos)
						},
						i.getTextString = function() {
							for (var e = [], t = !0, i = 0; i < a; i++) {
								var r = this.chars[i].uchar;
								" " !== r && (t = !1),
								e.push(r)
							}
							return t ? "": e.join("")
						},
						i.setPenStyles = function(e) {
							this.currPenState.setStyles(e),
							this.chars[this.pos].setPenState(this.currPenState)
						},
						w),
						y = ((i = T.prototype).reset = function() {
							for (var e = 0; e < u; e++) this.rows[e].clear();
							this.currRow = 14
						},
						i.equals = function(e) {
							for (var t = !0,
							i = 0; i < u; i++) if (!this.rows[i].equals(e.rows[i])) {
								t = !1;
								break
							}
							return t
						},
						i.copy = function(e) {
							for (var t = 0; t < u; t++) this.rows[t].copy(e.rows[t])
						},
						i.isEmpty = function() {
							for (var e = !0,
							t = 0; t < u; t++) if (!this.rows[t].isEmpty()) {
								e = !1;
								break
							}
							return e
						},
						i.backSpace = function() {
							this.rows[this.currRow].backSpace()
						},
						i.clearToEndOfRow = function() {
							this.rows[this.currRow].clearToEndOfRow()
						},
						i.insertChar = function(e) {
							this.rows[this.currRow].insertChar(e)
						},
						i.setPen = function(e) {
							this.rows[this.currRow].setPenStyles(e)
						},
						i.moveCursor = function(e) {
							this.rows[this.currRow].moveCursor(e)
						},
						i.setCursor = function(e) {
							this.logger.log(c.INFO, "setCursor: " + e),
							this.rows[this.currRow].setCursor(e)
						},
						i.setPAC = function(e) {
							this.logger.log(c.INFO, "pacData = " + JSON.stringify(e));
							var t = e.row - 1;
							if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
								for (var i = 0; i < u; i++) this.rows[i].clear();
								var r = this.currRow + 1 - this.nrRollUpRows,
								s = this.lastOutputScreen;
								if (s) {
									var n = s.rows[r].cueStartTime,
									a = this.logger.time;
									if (n && null !== a && n < a) for (var o = 0; o < this.nrRollUpRows; o++) this.rows[t - this.nrRollUpRows + o + 1].copy(s.rows[r + o])
								}
							}
							this.currRow = t;
							n = this.rows[this.currRow],
							null !== e.indent && (a = e.indent, a = Math.max(a - 1, 0), n.setCursor(e.indent), e.color = n.chars[a].penState.foreground),
							n = {
								foreground: e.color,
								underline: e.underline,
								italics: e.italics,
								background: "black",
								flash: !1
							};
							this.setPen(n)
						},
						i.setBkgData = function(e) {
							this.logger.log(c.INFO, "bkgData = " + JSON.stringify(e)),
							this.backSpace(),
							this.setPen(e),
							this.insertChar(32)
						},
						i.setRollUpRows = function(e) {
							this.nrRollUpRows = e
						},
						i.rollUp = function() {
							var e;
							null !== this.nrRollUpRows ? (this.logger.log(c.TEXT, this.getDisplayText()), e = this.currRow + 1 - this.nrRollUpRows, (e = this.rows.splice(e, 1)[0]).clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(c.INFO, "Rolling up")) : this.logger.log(c.DEBUG, "roll_up but nrRollUpRows not set yet")
						},
						i.getDisplayText = function(e) {
							e = e || !1;
							for (var t = [], i = "", r = 0; r < u; r++) {
								var s = this.rows[r].getTextString();
								s && (e ? t.push("Row " + (r + 1) + ": '" + s + "'") : t.push(s.trim()))
							}
							return i = 0 < t.length ? e ? "[" + t.join(" | ") + "]": t.join("\n") : i
						},
						i.getTextAndFormat = function() {
							return this.rows
						},
						T),
						b = ((i = S.prototype).reset = function() {
							this.mode = null,
							this.displayedMemory.reset(),
							this.nonDisplayedMemory.reset(),
							this.lastOutputScreen.reset(),
							this.outputFilter.reset(),
							this.currRollUpRow = this.displayedMemory.rows[14],
							this.writeScreen = this.displayedMemory,
							this.mode = null,
							this.cueStartTime = null
						},
						i.getHandler = function() {
							return this.outputFilter
						},
						i.setHandler = function(e) {
							this.outputFilter = e
						},
						i.setPAC = function(e) {
							this.writeScreen.setPAC(e)
						},
						i.setBkgData = function(e) {
							this.writeScreen.setBkgData(e)
						},
						i.setMode = function(e) {
							e !== this.mode && (this.mode = e, this.logger.log(c.INFO, "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory: (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
						},
						i.insertChars = function(e) {
							for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
							var i = this.writeScreen === this.displayedMemory ? "DISP": "NON_DISP";
							this.logger.log(c.INFO, i + ": " + this.writeScreen.getDisplayText(!0)),
							"MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(c.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
						},
						i.ccRCL = function() {
							this.logger.log(c.INFO, "RCL - Resume Caption Loading"),
							this.setMode("MODE_POP-ON")
						},
						i.ccBS = function() {
							this.logger.log(c.INFO, "BS - BackSpace"),
							"MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
						},
						i.ccAOF = function() {},
						i.ccAON = function() {},
						i.ccDER = function() {
							this.logger.log(c.INFO, "DER- Delete to End of Row"),
							this.writeScreen.clearToEndOfRow(),
							this.outputDataUpdate()
						},
						i.ccRU = function(e) {
							this.logger.log(c.INFO, "RU(" + e + ") - Roll Up"),
							this.writeScreen = this.displayedMemory,
							this.setMode("MODE_ROLL-UP"),
							this.writeScreen.setRollUpRows(e)
						},
						i.ccFON = function() {
							this.logger.log(c.INFO, "FON - Flash On"),
							this.writeScreen.setPen({
								flash: !0
							})
						},
						i.ccRDC = function() {
							this.logger.log(c.INFO, "RDC - Resume Direct Captioning"),
							this.setMode("MODE_PAINT-ON")
						},
						i.ccTR = function() {
							this.logger.log(c.INFO, "TR"),
							this.setMode("MODE_TEXT")
						},
						i.ccRTD = function() {
							this.logger.log(c.INFO, "RTD"),
							this.setMode("MODE_TEXT")
						},
						i.ccEDM = function() {
							this.logger.log(c.INFO, "EDM - Erase Displayed Memory"),
							this.displayedMemory.reset(),
							this.outputDataUpdate(!0)
						},
						i.ccCR = function() {
							this.logger.log(c.INFO, "CR - Carriage Return"),
							this.writeScreen.rollUp(),
							this.outputDataUpdate(!0)
						},
						i.ccENM = function() {
							this.logger.log(c.INFO, "ENM - Erase Non-displayed Memory"),
							this.nonDisplayedMemory.reset()
						},
						i.ccEOC = function() {
							var e;
							this.logger.log(c.INFO, "EOC - End Of Caption"),
							"MODE_POP-ON" === this.mode && (e = this.displayedMemory, this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(c.TEXT, "DISP: " + this.displayedMemory.getDisplayText())),
							this.outputDataUpdate(!0)
						},
						i.ccTO = function(e) {
							this.logger.log(c.INFO, "TO(" + e + ") - Tab Offset"),
							this.writeScreen.moveCursor(e)
						},
						i.ccMIDROW = function(e) {
							var t = {
								flash: !1
							};
							t.underline = e % 2 == 1,
							t.italics = 46 <= e,
							t.italics ? t.foreground = "white": (e = Math.floor(e / 2) - 16, t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][e]),
							this.logger.log(c.INFO, "MIDROW: " + JSON.stringify(t)),
							this.writeScreen.setPen(t)
						},
						i.outputDataUpdate = function(e) {
							void 0 === e && (e = !1);
							var t = this.logger.time;
							null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null: t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
						},
						i.cueSplitAtTime = function(e) { ! this.outputFilter || this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)
						},
						S);
						function E(e, t, i) {
							this.channels = void 0,
							this.currentChannel = 0,
							this.cmdHistory = void 0,
							this.logger = void 0;
							var r = new p;
							this.channels = [null, new b(e, t, r), new b(e + 1, i, r)],
							this.cmdHistory = {
								a: null,
								b: null
							},
							this.logger = r
						}
						function S(e, t, i) {
							this.chNr = void 0,
							this.outputFilter = void 0,
							this.mode = void 0,
							this.verbose = void 0,
							this.displayedMemory = void 0,
							this.nonDisplayedMemory = void 0,
							this.lastOutputScreen = void 0,
							this.currRollUpRow = void 0,
							this.writeScreen = void 0,
							this.cueStartTime = void 0,
							this.logger = void 0,
							this.chNr = e,
							this.outputFilter = t,
							this.mode = null,
							this.verbose = 0,
							this.displayedMemory = new y(i),
							this.nonDisplayedMemory = new y(i),
							this.lastOutputScreen = new y(i),
							this.currRollUpRow = this.displayedMemory.rows[14],
							this.writeScreen = this.displayedMemory,
							this.mode = null,
							this.cueStartTime = null,
							this.logger = i
						}
						function T(e) {
							this.rows = void 0,
							this.currRow = void 0,
							this.nrRollUpRows = void 0,
							this.lastOutputScreen = void 0,
							this.logger = void 0,
							this.rows = [];
							for (var t = 0; t < u; t++) this.rows.push(new v(e));
							this.logger = e,
							this.currRow = 14,
							this.nrRollUpRows = null,
							this.lastOutputScreen = null,
							this.reset()
						}
						function w(e) {
							this.chars = void 0,
							this.pos = void 0,
							this.currPenState = void 0,
							this.cueStartTime = void 0,
							this.logger = void 0,
							this.chars = [];
							for (var t = 0; t < a; t++) this.chars.push(new m);
							this.logger = e,
							this.pos = 0,
							this.currPenState = new g
						}
						function k(e, t, i, r, s, n) {
							this.uchar = void 0,
							this.penState = void 0,
							this.uchar = e || " ",
							this.penState = new g(t, i, r, s, n)
						}
						function R(e, t, i, r, s) {
							this.foreground = void 0,
							this.underline = void 0,
							this.italics = void 0,
							this.background = void 0,
							this.flash = void 0,
							this.foreground = e || "white",
							this.underline = t || !1,
							this.italics = i || !1,
							this.background = r || "black",
							this.flash = s || !1
						}
						function C() {
							this.time = null,
							this.verboseLevel = c.ERROR
						}
						function D(e, t, i) {
							i.a = e,
							i.b = t
						}
						function L(e, t, i) {
							return i.a === e && i.b === t
						} (i = E.prototype).getHandler = function(e) {
							return this.channels[e].getHandler()
						},
						i.setHandler = function(e, t) {
							this.channels[e].setHandler(t)
						},
						i.addData = function(e, t) {
							var i, r = !1;
							this.logger.time = e;
							for (var s = 0; s < t.length; s += 2) {
								var n, a = 127 & t[s],
								o = 127 & t[s + 1];
								0 == a && 0 == o || (this.logger.log(c.DATA, "[" + l([t[s], t[s + 1]]) + "] -> (" + l([a, o]) + ")"), !(i = (i = (i = (i = this.parseCmd(a, o)) ? i: this.parseMidrow(a, o)) || this.parsePAC(a, o)) || this.parseBackgroundAttributes(a, o)) && (r = this.parseChars(a, o)) && ((n = this.currentChannel) && 0 < n ? this.channels[n].insertChars(r) : this.logger.log(c.WARNING, "No channel found yet. TEXT-MODE?")), i || r || this.logger.log(c.WARNING, "Couldn't parse cleaned data " + l([a, o]) + " orig: " + l([t[s], t[s + 1]])))
							}
						},
						i.parseCmd = function(e, t) {
							var i = this.cmdHistory;
							if (! ((20 === e || 28 === e || 21 === e || 29 === e) && 32 <= t && t <= 47 || (23 === e || 31 === e) && 33 <= t && t <= 35)) return ! 1;
							if (L(e, t, i)) return D(null, null, i),
							this.logger.log(c.DEBUG, "Repeated command (" + l([e, t]) + ") is dropped"),
							!0;
							var r = 20 === e || 21 === e || 23 === e ? 1 : 2,
							s = this.channels[r];
							return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? s.ccRCL() : 33 === t ? s.ccBS() : 34 === t ? s.ccAOF() : 35 === t ? s.ccAON() : 36 === t ? s.ccDER() : 37 === t ? s.ccRU(2) : 38 === t ? s.ccRU(3) : 39 === t ? s.ccRU(4) : 40 === t ? s.ccFON() : 41 === t ? s.ccRDC() : 42 === t ? s.ccTR() : 43 === t ? s.ccRTD() : 44 === t ? s.ccEDM() : 45 === t ? s.ccCR() : 46 === t ? s.ccENM() : 47 === t && s.ccEOC() : s.ccTO(t - 32),
							D(e, t, i),
							this.currentChannel = r,
							!0
						},
						i.parseMidrow = function(e, t) {
							if ((17 === e || 25 === e) && 32 <= t && t <= 47) {
								if ((i = 17 === e ? 1 : 2) !== this.currentChannel) return this.logger.log(c.ERROR, "Mismatch channel in midrow parsing"),
								!1;
								var i = this.channels[i];
								return !! i && (i.ccMIDROW(t), this.logger.log(c.DEBUG, "MIDROW (" + l([e, t]) + ")"), !0)
							}
							return ! 1
						},
						i.parsePAC = function(e, t) {
							var i = this.cmdHistory;
							if (! ((17 <= e && e <= 23 || 25 <= e && e <= 31) && 64 <= t && t <= 127 || (16 === e || 24 === e) && 64 <= t && t <= 95)) return ! 1;
							if (L(e, t, i)) return D(null, null, i),
							!0;
							var r = e <= 23 ? 1 : 2,
							s = this.channels[r];
							return !! s && (s.setPAC(this.interpretPAC((64 <= t && t <= 95 ? 1 == r ? o: h: 1 == r ? d: f)[e], t)), D(e, t, i), this.currentChannel = r, !0)
						},
						i.interpretPAC = function(e, t) {
							e = {
								color: null,
								italics: !1,
								indent: null,
								underline: !1,
								row: e
							},
							t = 95 < t ? t - 96 : t - 64;
							return e.underline = 1 == (1 & t),
							t <= 13 ? e.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(t / 2)] : t <= 15 ? (e.italics = !0, e.color = "white") : e.indent = 4 * Math.floor((t - 16) / 2),
							e
						},
						i.parseChars = function(e, t) {
							var i, r = null,
							s = null;
							return 17 <= (s = 25 <= e ? (i = 2, e - 8) : (i = 1, e)) && s <= 19 ? (this.logger.log(c.INFO, "Special char '" + n(s = 17 === s ? t + 80 : 18 === s ? t + 112 : t + 144) + "' in channel " + i), r = [s]) : 32 <= e && e <= 127 && (r = 0 === t ? [e] : [e, t]),
							r && (i = l(r), this.logger.log(c.DEBUG, "Char codes =  " + i.join(",")), D(e, t, this.cmdHistory)),
							r
						},
						i.parseBackgroundAttributes = function(e, t) {
							var i;
							if (! ((16 === e || 24 === e) && 32 <= t && t <= 47 || (23 === e || 31 === e) && 45 <= t && t <= 47)) return ! 1;
							var r = {};
							return 16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), r.background = A[i], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent": (r.foreground = "black", 47 === t && (r.underline = !0)),
							this.channels[e <= 23 ? 1 : 2].setBkgData(r),
							D(e, t, this.cmdHistory),
							!0
						},
						i.reset = function() {
							for (var e = 0; e < Object.keys(this.channels).length; e++) {
								var t = this.channels[e];
								t && t.reset()
							}
							this.cmdHistory = {
								a: null,
								b: null
							}
						},
						i.cueSplitAtTime = function(e) {
							for (var t = 0; t < this.channels.length; t++) {
								var i = this.channels[t];
								i && i.cueSplitAtTime(e)
							}
						},
						t.
					default = E
					},
					"./src/utils/codecs.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "isCodecType",
						function() {
							return s
						}),
						i.d(t, "isCodecSupportedInMp4",
						function() {
							return n
						});
						var r = {
							audio: {
								a3ds: !0,
								"ac-3": !0,
								"ac-4": !0,
								alac: !0,
								alaw: !0,
								dra1: !0,
								"dts+": !0,
								"dts-": !0,
								dtsc: !0,
								dtse: !0,
								dtsh: !0,
								"ec-3": !0,
								enca: !0,
								g719: !0,
								g726: !0,
								m4ae: !0,
								mha1: !0,
								mha2: !0,
								mhm1: !0,
								mhm2: !0,
								mlpa: !0,
								mp4a: !0,
								"raw ": !0,
								Opus: !0,
								samr: !0,
								sawb: !0,
								sawp: !0,
								sevc: !0,
								sqcp: !0,
								ssmv: !0,
								twos: !0,
								ulaw: !0
							},
							video: {
								avc1: !0,
								avc2: !0,
								avc3: !0,
								avc4: !0,
								avcp: !0,
								av01: !0,
								drac: !0,
								dvav: !0,
								dvhe: !0,
								encv: !0,
								hev1: !0,
								hvc1: !0,
								mjp2: !0,
								mp4v: !0,
								mvc1: !0,
								mvc2: !0,
								mvc3: !0,
								mvc4: !0,
								resv: !0,
								rv60: !0,
								s263: !0,
								svc1: !0,
								svc2: !0,
								"vc-1": !0,
								vp08: !0,
								vp09: !0
							},
							text: {
								stpp: !0,
								wvtt: !0
							}
						};
						function s(e, t) {
							t = r[t];
							return !! t && !0 === t[e.slice(0, 4)]
						}
						function n(e, t) {
							return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
						}
					},
					"./src/utils/cues.ts": function(e, t, i) {
						i.r(t);
						var A = i("./src/utils/vttparser.ts"),
						p = i("./src/utils/webvtt-parser.ts"),
						g = i("./src/utils/texttrack-utils.ts"),
						m = /\s/;
						t.
					default = {
							newCue: function(t, e, i, r) {
								for (var s, n, a, o, l = [], c = self.VTTCue || self.TextTrackCue, u = 0; u < r.rows.length; u++) if (n = !0, a = 0, o = "", !(s = r.rows[u]).isEmpty()) {
									for (var d = 0; d < s.chars.length; d++) m.test(s.chars[d].uchar) && n ? a++:(o += s.chars[d].uchar, n = !1); (s.cueStartTime = e) === i && (i += 1e-4),
									16 <= a ? a--:a++;
									var h = Object(A.fixLineBreaks)(o.trim()),
									f = Object(p.generateCueId)(e, i, h);
									t && t.cues && t.cues.getCueById(f) || ((h = new c(e, i, h)).id = f, h.line = u + 1, h.align = "left", h.position = 10 + Math.min(80, 10 * Math.floor(8 * a / 32)), l.push(h))
								}
								return t && l.length && (l.sort(function(e, t) {
									return "auto" === e.line || "auto" === t.line ? 0 : 8 < e.line && 8 < t.line ? t.line - e.line: e.line - t.line
								}), l.forEach(function(e) {
									return Object(g.addCueToTrack)(t, e)
								})),
								l
							}
						}
					},
					"./src/utils/discontinuities.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "findFirstFragWithCC",
						function() {
							return r
						}),
						i.d(t, "shouldAlignOnDiscontinuities",
						function() {
							return o
						}),
						i.d(t, "findDiscontinuousReferenceFrag",
						function() {
							return l
						}),
						i.d(t, "adjustSlidingStart",
						function() {
							return u
						}),
						i.d(t, "alignStream",
						function() {
							return d
						}),
						i.d(t, "alignPDT",
						function() {
							return h
						}),
						i.d(t, "alignFragmentByPDTDelta",
						function() {
							return f
						}),
						i.d(t, "alignMediaPlaylistByPDT",
						function() {
							return A
						});
						var s = i("./src/polyfills/number.ts"),
						n = i("./src/utils/logger.ts"),
						a = i("./src/controller/level-helper.ts");
						function r(e, t) {
							for (var i = null,
							r = 0,
							s = e.length; r < s; r++) {
								var n = e[r];
								if (n && n.cc === t) {
									i = n;
									break
								}
							}
							return i
						}
						function o(e, t, i) {
							return ! (!t.details || !(i.endCC > i.startCC || e && e.cc < i.startCC))
						}
						function l(e, t) {
							e = e.fragments,
							t = t.fragments;
							if (t.length && e.length) {
								e = r(e, t[0].cc);
								if (e && (!e || e.startPTS)) return e;
								n.logger.log("No frag in previous level to align on")
							} else n.logger.log("No fragments to align")
						}
						function c(e, t) {
							e && (t = e.start + t, e.start = e.startPTS = t, e.endPTS = t + e.duration)
						}
						function u(e, t) {
							for (var i = t.fragments,
							r = 0,
							s = i.length; r < s; r++) c(i[r], e);
							t.fragmentHint && c(t.fragmentHint, e),
							t.alignedSliding = !0
						}
						function d(e, t, i) {
							var r;
							t && (o(e, t, e = i) && (r = l(t.details, e)) && Object(s.isFiniteNumber)(r.start) && (n.logger.log("Adjusting PTS using last level due to CC increase within current level " + e.url), u(r.start, e)), !i.alignedSliding && t.details && h(i, t.details), i.alignedSliding || !t.details || i.skippedSegments || Object(a.adjustSliding)(t.details, i))
						}
						function h(e, t) {
							var i, r;
							t.fragments.length && e.hasProgramDateTime && t.hasProgramDateTime && (i = t.fragments[0].programDateTime, (t = ((r = e.fragments[0].programDateTime) - i) / 1e3 + t.fragments[0].start) && Object(s.isFiniteNumber)(t) && (n.logger.log("Adjusting PTS using programDateTime delta " + (r - i) + "ms, sliding:" + t.toFixed(3) + " " + e.url + " "), u(t, e)))
						}
						function f(e, t) {
							var i = e.programDateTime;
							i && (e.start = e.startPTS = i = (i - t) / 1e3, e.endPTS = i + e.duration)
						}
						function A(e, t) {
							var i;
							t.fragments.length && e.hasProgramDateTime && t.hasProgramDateTime && (i = t.fragments[0].programDateTime - 1e3 * t.fragments[0].start, e.fragments.forEach(function(e) {
								f(e, i)
							}), e.fragmentHint && f(e.fragmentHint, i), e.alignedSliding = !0)
						}
					},
					"./src/utils/ewma-bandwidth-estimator.ts": function(e, t, i) {
						i.r(t);
						var s = i("./src/utils/ewma.ts");
						function r(e, t, i) {
							this.defaultEstimate_ = void 0,
							this.minWeight_ = void 0,
							this.minDelayMs_ = void 0,
							this.slow_ = void 0,
							this.fast_ = void 0,
							this.defaultEstimate_ = i,
							this.minWeight_ = .001,
							this.minDelayMs_ = 50,
							this.slow_ = new s.
						default(e),
							this.fast_ = new s.
						default(t)
						} (i = r.prototype).update = function(e, t) {
							var i = this.slow_,
							r = this.fast_;
							this.slow_.halfLife !== e && (this.slow_ = new s.
						default(e, i.getEstimate(), i.getTotalWeight())),
							this.fast_.halfLife !== t && (this.fast_ = new s.
						default(t, r.getEstimate(), r.getTotalWeight()))
						},
						i.sample = function(e, t) {
							e = (e = Math.max(e, this.minDelayMs_)) / 1e3,
							t = 8 * t / e;
							this.fast_.sample(e, t),
							this.slow_.sample(e, t)
						},
						i.canEstimate = function() {
							var e = this.fast_;
							return e && e.getTotalWeight() >= this.minWeight_
						},
						i.getEstimate = function() {
							return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
						},
						i.destroy = function() {},
						t.
					default = r
					},
					"./src/utils/ewma.ts": function(e, t, i) {
						function r(e, t, i) {
							void 0 === t && (t = 0),
							void 0 === i && (i = 0),
							this.halfLife = void 0,
							this.alpha_ = void 0,
							this.estimate_ = void 0,
							this.totalWeight_ = void 0,
							this.halfLife = e,
							this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0,
							this.estimate_ = t,
							this.totalWeight_ = i
						}
						i.r(t),
						(i = r.prototype).sample = function(e, t) {
							var i = Math.pow(this.alpha_, e);
							this.estimate_ = t * (1 - i) + i * this.estimate_,
							this.totalWeight_ += e
						},
						i.getTotalWeight = function() {
							return this.totalWeight_
						},
						i.getEstimate = function() {
							if (this.alpha_) {
								var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
								if (e) return this.estimate_ / e
							}
							return this.estimate_
						},
						t.
					default = r
					},
					"./src/utils/fetch-loader.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "fetchSupported",
						function() {
							return l
						});
						var d = i("./src/polyfills/number.ts"),
						r = i("./src/loader/load-stats.ts"),
						c = i("./src/demux/chunk-cache.ts");
						function s(e) {
							var i = "function" == typeof Map ? new Map: void 0;
							return (s = function(e) {
								if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
								if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
								if (void 0 !== i) {
									if (i.has(e)) return i.get(e);
									i.set(e, t)
								}
								function t() {
									return n(e, arguments, o(this).constructor)
								}
								return t.prototype = Object.create(e.prototype, {
									constructor: {
										value: t,
										enumerable: !1,
										writable: !0,
										configurable: !0
									}
								}),
								a(t, e)
							})(e)
						}
						function n(e, t, i) {
							return (n = function() {
								if ("undefined" == typeof Reflect || !Reflect.construct) return;
								if (Reflect.construct.sham) return;
								if ("function" == typeof Proxy) return 1;
								try {
									return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
									function() {})),
									1
								} catch(e) {
									return
								}
							} () ? Reflect.construct: function(e, t, i) {
								var r = [null],
								t = (r.push.apply(r, t), new(Function.bind.apply(e, r)));
								return i && a(t, i.prototype),
								t
							}).apply(null, arguments)
						}
						function a(e, t) {
							return (a = Object.setPrototypeOf ||
							function(e, t) {
								return e.__proto__ = t,
								e
							})(e, t)
						}
						function o(e) {
							return (o = Object.setPrototypeOf ? Object.getPrototypeOf: function(e) {
								return e.__proto__ || Object.getPrototypeOf(e)
							})(e)
						}
						function h() {
							return (h = Object.assign ||
							function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var i, r = arguments[t];
									for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
								}
								return e
							}).apply(this, arguments)
						}
						function l() {
							if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
								return new self.ReadableStream({}),
								!0
							} catch(e) {}
							return ! 1
						} (i = u.prototype).destroy = function() {
							this.loader = this.callbacks = null,
							this.abortInternal()
						},
						i.abortInternal = function() {
							var e = this.response;
							e && e.ok || (this.stats.aborted = !0, this.controller.abort())
						},
						i.abort = function() {
							var e;
							this.abortInternal(),
							null != (e = this.callbacks) && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
						},
						i.load = function(r, s, n) {
							var a = this,
							o = this.stats;
							if (o.loading.start) throw new Error("Loader can only be used once.");
							o.loading.start = self.performance.now();
							var e = function(e, t) {
								t = {
									method: "GET",
									mode: "cors",
									credentials: "same-origin",
									signal: t,
									headers: new self.Headers(h({},
									e.headers))
								};
								return e.rangeEnd && t.headers.set("Range", "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1)),
								t
							} (r, this.controller.signal),
							l = n.onProgress,
							c = "arraybuffer" === r.responseType,
							u = c ? "byteLength": "length";
							this.context = r,
							this.config = s,
							this.callbacks = n,
							this.request = this.fetchSetup(r, e),
							self.clearTimeout(this.requestTimeout),
							this.requestTimeout = self.setTimeout(function() {
								a.abortInternal(),
								n.onTimeout(o, r, a.response)
							},
							s.timeout),
							self.fetch(this.request).then(function(e) {
								var t, i;
								if ((a.response = a.loader = e).ok) return o.loading.first = Math.max(self.performance.now(), o.loading.start),
								o.total = parseInt(e.headers.get("Content-Length") || "0"),
								l && Object(d.isFiniteNumber)(s.highWaterMark) ? a.loadProgressively(e, o, r, s.highWaterMark, l) : c ? e.arrayBuffer() : e.text();
								throw t = e.status,
								i = e.statusText,
								new m(i || "fetch, bad network response", t, e)
							}).then(function(e) {
								var t = a.response,
								i = (self.clearTimeout(a.requestTimeout), o.loading.end = Math.max(self.performance.now(), o.loading.first), o.loaded = o.total = e[u], {
									url: t.url,
									data: e
								});
								l && !Object(d.isFiniteNumber)(s.highWaterMark) && l(o, r, e, t),
								n.onSuccess(i, o, r, t)
							}).
							catch(function(e) {
								var t;
								self.clearTimeout(a.requestTimeout),
								o.aborted || (t = e.code || 0, n.onError({
									code: t,
									text: e.message
								},
								r, e.details))
							})
						},
						i.getCacheAge = function() {
							var e, t = null;
							return t = this.response ? (e = this.response.headers.get("age")) ? parseFloat(e) : null: t
						},
						i.loadProgressively = function(r, s, n, a, o) {
							void 0 === a && (a = 0);
							var l = new c.
						default,
							e = r.body.getReader();
							return function i() {
								return e.read().then(function(e) {
									if (e.done) return l.dataLength && o(s, n, l.flush(), r),
									Promise.resolve(new ArrayBuffer(0));
									var e = e.value,
									t = e.length;
									return s.loaded += t,
									t < a || l.dataLength ? (l.push(e), l.dataLength >= a && o(s, n, l.flush(), r)) : o(s, n, e, r),
									i()
								}).
								catch(function() {
									return Promise.reject()
								})
							} ()
						};
						i = u;
						function u(e) {
							this.fetchSetup = void 0,
							this.requestTimeout = void 0,
							this.request = void 0,
							this.response = void 0,
							this.controller = void 0,
							this.context = void 0,
							this.config = null,
							this.callbacks = null,
							this.stats = void 0,
							this.loader = null,
							this.fetchSetup = e.fetchSetup || f,
							this.controller = new self.AbortController,
							this.stats = new r.LoadStats
						}
						function f(e, t) {
							return new self.Request(e.url, t)
						}
						A = s(Error),
						g = A,
						(p = v).prototype = Object.create(g.prototype),
						a(p.prototype.constructor = p, g);
						var A, p, g, m = v;
						function v(e, t, i) {
							return (e = A.call(this, e) || this).code = void 0,
							e.details = void 0,
							e.code = t,
							e.details = i,
							e
						}
						t.
					default = i
					},
					"./src/utils/imsc1-ttml-parser.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "IMSC1_CODEC",
						function() {
							return r
						}),
						i.d(t, "parseIMSC1",
						function() {
							return s
						});
						var a = i("./src/utils/mp4-tools.ts"),
						o = i("./src/utils/vttparser.ts"),
						f = i("./src/utils/vttcue.ts"),
						l = i("./src/demux/id3.ts"),
						c = i("./src/utils/timescale-conversion.ts"),
						A = i("./src/utils/webvtt-parser.ts");
						function p() {
							return (p = Object.assign ||
							function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var i, r = arguments[t];
									for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
								}
								return e
							}).apply(this, arguments)
						}
						var r = "stpp.ttml.im1t",
						u = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
						d = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
						g = {
							left: "start",
							center: "center",
							right: "end",
							start: "start",
							end: "end"
						};
						function s(e, t, i, r, s) {
							var n = Object(a.findBox)(new Uint8Array(e), ["mdat"]);
							if (0 !== n.length) {
								n = n[0],
								n = Object(l.utf8ArrayToStr)(new Uint8Array(e, n.start, n.end - n.start)),
								t = Object(c.toTimescaleFromScale)(t, 1, i);
								try {
									r(function(e, l) {
										var i = (new DOMParser).parseFromString(e, "text/xml").getElementsByTagName("tt")[0];
										if (!i) throw new Error("Invalid ttml");
										var r = {
											frameRate: 30,
											subFrameRate: 1,
											frameRateMultiplier: 0,
											tickRate: 0
										},
										c = Object.keys(r).reduce(function(e, t) {
											return e[t] = i.getAttribute("ttp:" + t) || r[t],
											e
										},
										{}),
										u = "preserve" !== i.getAttribute("xml:space"),
										d = v(m(i, "styling", "style")),
										h = v(m(i, "layout", "region")),
										e = m(i, "body", "[begin]");
										return [].map.call(e,
										function(e) {
											var t = function r(e, s) {
												return [].slice.call(e.childNodes).reduce(function(e, t, i) {
													return "br" === t.nodeName && i ? e + "\n": null != (i = t.childNodes) && i.length ? r(t, s) : s ? e + t.textContent.trim().replace(/\s+/g, " ") : e + t.textContent
												},
												"")
											} (e, u);
											if (!t || !e.hasAttribute("begin")) return null;
											var i = E(e.getAttribute("begin"), c),
											r = E(e.getAttribute("dur"), c),
											s = E(e.getAttribute("end"), c);
											if (null === i) throw b(e);
											if (null === s) {
												if (null === r) throw b(e);
												s = i + r
											}
											var n, a, o, r = new f.
										default(i - l, s - l, t),
											i = (r.id = Object(A.generateCueId)(r.startTime, r.endTime, r.text), h[e.getAttribute("region")]),
											s = d[e.getAttribute("style")],
											t = (r.position = 10, r.size = 80, n = i, a = s, o = "http://www.w3.org/ns/ttml#styling", ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce(function(e, t) {
												var i = y(a, o, t) || y(n, o, t);
												return i && (e[t] = i),
												e
											},
											{})),
											e = t.textAlign;
											return e && ((i = g[e]) && (r.lineAlign = i), r.align = e),
											p(r, t),
											r
										}).filter(function(e) {
											return null !== e
										})
									} (n, t))
								} catch(e) {
									s(e)
								}
							} else s(new Error("Could not parse IMSC1 mdat"))
						}
						function m(e, t, i) {
							e = e.getElementsByTagName(t)[0];
							return e ? [].slice.call(e.querySelectorAll(i)) : []
						}
						function v(e) {
							return e.reduce(function(e, t) {
								var i = t.getAttribute("xml:id");
								return i && (e[i] = t),
								e
							},
							{})
						}
						function y(e, t, i) {
							return e.hasAttributeNS(t, i) ? e.getAttributeNS(t, i) : null
						}
						function b(e) {
							return new Error("Could not parse ttml timestamp " + e)
						}
						function E(r, e) {
							if (!r) return null;
							var t, i, s, n = Object(o.parseTimeStamp)(r);
							return null === n && (u.test(r) ? (t = e, i = u.exec(r), s = (0 | i[4]) + (0 | i[5]) / t.subFrameRate, n = 3600 * (0 | i[1]) + 60 * (0 | i[2]) + (0 | i[3]) + s / t.frameRate) : d.test(r) && (n = function(e) {
								var t = d.exec(r),
								i = Number(t[1]);
								switch (t[2]) {
								case "h":
									return 3600 * i;
								case "m":
									return 60 * i;
								case "ms":
									return 1e3 * i;
								case "f":
									return i / e.frameRate;
								case "t":
									return i / e.tickRate
								}
								return i
							} (e))),
							n
						}
					},
					"./src/utils/logger.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "enableLogs",
						function() {
							return a
						}),
						i.d(t, "logger",
						function() {
							return o
						});
						function s() {}
						var r = {
							trace: s,
							debug: s,
							log: s,
							warn: s,
							info: s,
							error: s
						},
						n = r;
						function a(e) {
							if (self.console && !0 === e || "object" == typeof e) { !
								function(i) {
									for (var e = arguments.length,
									t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
									t.forEach(function(e) {
										var t;
										n[e] = i[e] ? i[e].bind(i) : (e = e, (t = self.console[e]) ? t.bind(self.console, "[" + e + "] >") : s)
									})
								} (e, "debug", "log", "info", "warn", "error");
								try {
									n.log()
								} catch(e) {
									n = r
								}
							} else n = r
						}
						var o = r
					},
					"./src/utils/mediakeys-helper.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "KeySystems",
						function() {
							return r
						}),
						i.d(t, "requestMediaKeySystemAccess",
						function() {
							return s
						}),
						(i = r = r || {}).WIDEVINE = "com.widevine.alpha",
						i.PLAYREADY = "com.microsoft.playready";
						var r, s = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null
					},
					"./src/utils/mediasource-helper.ts": function(e, t, i) {
						function r() {
							return self.MediaSource || self.WebKitMediaSource
						}
						i.r(t),
						i.d(t, "getMediaSource",
						function() {
							return r
						})
					},
					"./src/utils/mp4-tools.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "bin2str",
						function() {
							return u
						}),
						i.d(t, "readUint16",
						function() {
							return h
						}),
						i.d(t, "readUint32",
						function() {
							return m
						}),
						i.d(t, "writeUint32",
						function() {
							return a
						}),
						i.d(t, "findBox",
						function() {
							return v
						}),
						i.d(t, "parseSegmentIndex",
						function() {
							return y
						}),
						i.d(t, "parseInitSegment",
						function() {
							return s
						}),
						i.d(t, "getStartDTS",
						function() {
							return o
						}),
						i.d(t, "getDuration",
						function() {
							return l
						}),
						i.d(t, "computeRawDurationFromSamples",
						function() {
							return b
						}),
						i.d(t, "offsetStartDTS",
						function() {
							return d
						}),
						i.d(t, "segmentValidRange",
						function() {
							return f
						}),
						i.d(t, "appendUint8Array",
						function() {
							return A
						});
						var r = i("./src/utils/typed-array.ts"),
						g = i("./src/loader/fragment.ts"),
						n = Math.pow(2, 32) - 1,
						c = [].push;
						function u(e) {
							return String.fromCharCode.apply(null, e)
						}
						function h(e, t) {
							"data" in e && (t += e.start, e = e.data);
							e = e[t] << 8 | e[t + 1];
							return e < 0 ? 65536 + e: e
						}
						function m(e, t) {
							"data" in e && (t += e.start, e = e.data);
							e = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
							return e < 0 ? 4294967296 + e: e
						}
						function a(e, t, i) {
							"data" in e && (t += e.start, e = e.data),
							e[t] = i >> 24,
							e[t + 1] = i >> 16 & 255,
							e[t + 2] = i >> 8 & 255,
							e[t + 3] = 255 & i
						}
						function v(e, t) {
							var i, r, s = [];
							if (!t.length) return s;
							for (var n = ("data" in e ? (i = e.data, r = e.start, e.end) : (r = 0, (i = e).byteLength)), a = r; a < n;) {
								var o, l = m(i, a),
								l = 1 < l ? a + l: n;
								u(i.subarray(a + 4, a + 8)) === t[0] && (1 === t.length ? s.push({
									data: i,
									start: a + 8,
									end: l
								}) : (o = v({
									data: i,
									start: a + 8,
									end: l
								},
								t.slice(1))).length && c.apply(s, o)),
								a = l
							}
							return s
						}
						function y(e) {
							var t = v(e, ["moov"])[0],
							t = t ? t.end: null,
							e = v(e, ["sidx"]);
							if (!e || !e[0]) return null;
							var i = [],
							r = e[0],
							e = r.data[0],
							s = 0 === e ? 8 : 16,
							n = m(r, s),
							a = r.end + 0,
							o = h(r, s = (s += 4) + (0 === e ? 8 : 16) + 2);
							s += 2;
							for (var l = 0; l < o; l++) {
								var c = s,
								u = m(r, c),
								d = (c += 4, 2147483647 & u);
								if (1 == (2147483648 & u) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"),
								null;
								u = m(r, c);
								c += 4,
								i.push({
									referenceSize: d,
									subsegmentDuration: u,
									info: {
										duration: u / n,
										start: a,
										end: a + d - 1
									}
								}),
								a += d,
								s = c += 4
							}
							return {
								earliestPresentationTime: 0,
								timescale: n,
								version: e,
								referencesCount: o,
								references: i,
								moovEndOffset: t
							}
						}
						function s(e) {
							for (var i = [], t = v(e, ["moov", "trak"]), r = 0; r < t.length; r++) {
								var s, n, a, o = t[r],
								l = v(o, ["tkhd"])[0];
								l && (l = m(l, 0 === l.data[l.start] ? 12 : 20), (s = v(o, ["mdia", "mdhd"])[0]) && (s = m(s, 0 === s.data[s.start] ? 12 : 20), (n = v(o, ["mdia", "hdlr"])[0]) && (n = u(n.data.subarray(n.start + 8, n.start + 12)), (n = {
									soun: g.ElementaryStreamTypes.AUDIO,
									vide: g.ElementaryStreamTypes.VIDEO
								} [n]) && (a = void 0, (o = v(o, ["mdia", "minf", "stbl", "stsd"])[0]) && (a = u(o.data.subarray(o.start + 12, o.start + 16))), i[l] = {
									timescale: s,
									type: n
								},
								i[n] = {
									timescale: s,
									id: l,
									codec: a
								}))))
							}
							return v(e, ["moov", "mvex", "trex"]).forEach(function(e) {
								var t = m(e, 4),
								t = i[t];
								t && (t.
							default = {
									duration: m(e, 12),
									flags: m(e, 20)
								})
							}),
							i
						}
						function o(n, e) {
							return v(e, ["moof", "traf"]).reduce(function(e, t) {
								var r = v(t, ["tfdt"])[0],
								s = r.data[r.start],
								t = v(t, ["tfhd"]).reduce(function(e, t) {
									t = m(t, 4),
									t = n[t];
									if (t) {
										var i = m(r, 4),
										i = (i = 1 === s ? (i *= Math.pow(2, 32)) + m(r, 8) : i) / (t.timescale || 9e4);
										if (isFinite(i) && (null === e || i < e)) return i
									}
									return e
								},
								null);
								return null !== t && isFinite(t) && (null === e || t < e) ? t: e
							},
							null) || 0
						}
						function l(e, t) {
							for (var i = 0,
							r = 0,
							s = 0,
							n = v(e, ["moof", "traf"]), a = 0; a < n.length; a++) {
								var o = n[a],
								l = v(o, ["tfhd"])[0],
								c = t[m(l, 4)];
								if (c) {
									var u = c.
								default,
									d = m(l, 0) | (null == u ? void 0 : u.flags),
									h = null == u ? void 0 : u.duration;
									8 & d && (h = m(l, 2 & d ? 12 : 8));
									for (var f = c.timescale || 9e4,
									A = v(o, ["trun"]), p = 0; p < A.length; p++) ! (i = b(A[p])) && h && (i = h * m(A[p], 4)),
									c.type === g.ElementaryStreamTypes.VIDEO ? r += i / f: c.type === g.ElementaryStreamTypes.AUDIO && (s += i / f)
								}
							}
							if (0 === r && 0 === s) {
								e = y(e);
								if (null != e && e.references) return e.references.reduce(function(e, t) {
									return e + t.info.duration || 0
								},
								0)
							}
							return r || s
						}
						function b(e) {
							var t = m(e, 0),
							i = 8;
							1 & t && (i += 4),
							4 & t && (i += 4);
							for (var r = 0,
							s = m(e, 4), n = 0; n < s; n++) 256 & t && (r += m(e, i), i += 4),
							512 & t && (i += 4),
							1024 & t && (i += 4),
							2048 & t && (i += 4);
							return r
						}
						function d(i, e, s) {
							v(e, ["moof", "traf"]).forEach(function(t) {
								v(t, ["tfhd"]).forEach(function(e) {
									var r, e = m(e, 4),
									e = i[e];
									e && (r = e.timescale || 9e4, v(t, ["tfdt"]).forEach(function(e) {
										var t = e.data[e.start],
										i = m(e, 4);
										0 === t ? a(e, 4, i - s * r) : (i = (i = (i *= Math.pow(2, 32)) + m(e, 8)) - s * r, i = Math.max(i, 0), t = Math.floor(i / (n + 1)), i = Math.floor(i % (n + 1)), a(e, 4, t), a(e, 8, i))
									}))
								})
							})
						}
						function f(e) {
							var t = {
								valid: null,
								remainder: null
							},
							i = v(e, ["moof"]);
							if (!i) return t;
							if (i.length < 2) return t.remainder = e,
							t;
							i = i[i.length - 1];
							return t.valid = Object(r.sliceUint8)(e, 0, i.start - 8),
							t.remainder = Object(r.sliceUint8)(e, i.start - 8),
							t
						}
						function A(e, t) {
							var i = new Uint8Array(e.length + t.length);
							return i.set(e),
							i.set(t, e.length),
							i
						}
					},
					"./src/utils/output-filter.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "default",
						function() {
							return r
						}); (i = s.prototype).dispatchCue = function() {
							null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
						},
						i.newCue = function(e, t, i) { (null === this.startTime || this.startTime > e) && (this.startTime = e),
							this.endTime = t,
							this.screen = i,
							this.timelineController.createCaptionsTrack(this.trackName)
						},
						i.reset = function() {
							this.cueRanges = [],
							this.startTime = null
						};
						var r = s;
						function s(e, t) {
							this.timelineController = void 0,
							this.cueRanges = [],
							this.trackName = void 0,
							this.startTime = null,
							this.endTime = null,
							this.screen = null,
							this.timelineController = e,
							this.trackName = t
						}
					},
					"./src/utils/texttrack-utils.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "sendAddTrackEvent",
						function() {
							return r
						}),
						i.d(t, "addCueToTrack",
						function() {
							return n
						}),
						i.d(t, "clearCurrentCues",
						function() {
							return a
						}),
						i.d(t, "removeCuesInRange",
						function() {
							return o
						}),
						i.d(t, "getCuesInRange",
						function() {
							return l
						});
						var s = i("./src/utils/logger.ts");
						function r(e, t) {
							var i;
							try {
								i = new Event("addtrack")
							} catch(e) { (i = document.createEvent("Event")).initEvent("addtrack", !1, !1)
							}
							i.track = e,
							t.dispatchEvent(i)
						}
						function n(e, t) {
							var i = e.mode;
							if ("disabled" === i && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)) try {
								if (e.addCue(t), !e.cues.getCueById(t.id)) throw new Error("addCue is failed for: " + t)
							} catch(i) {
								s.logger.debug("[texttrack-utils]: " + i);
								var r = new self.TextTrackCue(t.startTime, t.endTime, t.text);
								r.id = t.id,
								e.addCue(r)
							}
							"disabled" === i && (e.mode = i)
						}
						function a(e) {
							var t = e.mode;
							if ("disabled" === t && (e.mode = "hidden"), e.cues) for (var i = e.cues.length; i--;) e.removeCue(e.cues[i]);
							"disabled" === t && (e.mode = t)
						}
						function o(e, t, i) {
							var r = e.mode;
							if ("disabled" === r && (e.mode = "hidden"), e.cues && 0 < e.cues.length) for (var s = l(e.cues, t, i), n = 0; n < s.length; n++) e.removeCue(s[n]);
							"disabled" === r && (e.mode = r)
						}
						function l(e, t, i) {
							var r = [],
							s = function(e, t) {
								if (t < e[0].startTime) return 0;
								var i = e.length - 1;
								if (t > e[i].endTime) return - 1;
								for (var r = 0,
								s = i; r <= s;) {
									var n = Math.floor((s + r) / 2);
									if (t < e[n].startTime) s = n - 1;
									else {
										if (! (t > e[n].startTime && r < i)) return n;
										r = n + 1
									}
								}
								return e[r].startTime - t < t - e[s].startTime ? r: s
							} (e, t);
							if ( - 1 < s) for (var n = s,
							a = e.length; n < a; n++) {
								var o = e[n];
								if (o.startTime >= t && o.endTime <= i) r.push(o);
								else if (o.startTime > i) return r
							}
							return r
						}
					},
					"./src/utils/time-ranges.ts": function(e, t, i) {
						i.r(t),
						t.
					default = {
							toString: function(e) {
								for (var t = "",
								i = e.length,
								r = 0; r < i; r++) t += "[" + e.start(r).toFixed(3) + "," + e.end(r).toFixed(3) + "]";
								return t
							}
						}
					},
					"./src/utils/timescale-conversion.ts": function(e, t, i) {
						function s(e, t, i, r) {
							e = e * t * (i = void 0 === i ? 1 : i);
							return (r = void 0 === r ? !1 : r) ? Math.round(e) : e
						}
						function r(e, t, i, r) {
							return s(e, t, 1 / (i = void 0 === i ? 1 : i), r = void 0 === r ? !1 : r)
						}
						function n(e, t) {
							return s(e, 1e3, 1 / 9e4, t = void 0 === t ? !1 : t)
						}
						function a(e, t) {
							return s(e, 9e4, 1 / (t = void 0 === t ? 1 : t))
						}
						i.r(t),
						i.d(t, "toTimescaleFromBase",
						function() {
							return s
						}),
						i.d(t, "toTimescaleFromScale",
						function() {
							return r
						}),
						i.d(t, "toMsFromMpegTsClock",
						function() {
							return n
						}),
						i.d(t, "toMpegTsClockFromTimescale",
						function() {
							return a
						})
					},
					"./src/utils/typed-array.ts": function(e, t, i) {
						function r(e, t, i) {
							return Uint8Array.prototype.slice ? e.slice(t, i) : new Uint8Array(Array.prototype.slice.call(e, t, i))
						}
						i.r(t),
						i.d(t, "sliceUint8",
						function() {
							return r
						})
					},
					"./src/utils/vttcue.ts": function(e, t, i) {
						i.r(t),
						t.
					default = function() {
							if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
							var y = ["", "lr", "rl"],
							t = ["start", "middle", "end", "left", "right"];
							function b(e, t) {
								if ("string" != typeof t) return ! 1;
								if (!Array.isArray(e)) return ! 1;
								t = t.toLowerCase();
								return !! ~e.indexOf(t) && t
							}
							function E(e) {
								return b(t, e)
							}
							function S(e) {
								for (var t = arguments.length,
								i = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
								for (var s = 1; s < arguments.length; s++) {
									var n, a = arguments[s];
									for (n in a) e[n] = a[n]
								}
								return e
							}
							function e(e, t, i) {
								var r = this,
								s = {
									enumerable: !0
								},
								n = (r.hasBeenReset = !1, ""),
								a = !1,
								o = e,
								l = t,
								c = i,
								u = null,
								d = "",
								h = !0,
								f = "auto",
								A = "start",
								p = 50,
								g = "middle",
								m = 50,
								v = "middle";
								Object.defineProperty(r, "id", S({},
								s, {
									get: function() {
										return n
									},
									set: function(e) {
										n = "" + e
									}
								})),
								Object.defineProperty(r, "pauseOnExit", S({},
								s, {
									get: function() {
										return a
									},
									set: function(e) {
										a = !!e
									}
								})),
								Object.defineProperty(r, "startTime", S({},
								s, {
									get: function() {
										return o
									},
									set: function(e) {
										if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
										o = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "endTime", S({},
								s, {
									get: function() {
										return l
									},
									set: function(e) {
										if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
										l = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "text", S({},
								s, {
									get: function() {
										return c
									},
									set: function(e) {
										c = "" + e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "region", S({},
								s, {
									get: function() {
										return u
									},
									set: function(e) {
										u = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "vertical", S({},
								s, {
									get: function() {
										return d
									},
									set: function(e) {
										e = b(y, e);
										if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
										d = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "snapToLines", S({},
								s, {
									get: function() {
										return h
									},
									set: function(e) {
										h = !!e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "line", S({},
								s, {
									get: function() {
										return f
									},
									set: function(e) {
										if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
										f = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "lineAlign", S({},
								s, {
									get: function() {
										return A
									},
									set: function(e) {
										e = E(e);
										if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
										A = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "position", S({},
								s, {
									get: function() {
										return p
									},
									set: function(e) {
										if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
										p = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "positionAlign", S({},
								s, {
									get: function() {
										return g
									},
									set: function(e) {
										e = E(e);
										if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
										g = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "size", S({},
								s, {
									get: function() {
										return m
									},
									set: function(e) {
										if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
										m = e,
										this.hasBeenReset = !0
									}
								})),
								Object.defineProperty(r, "align", S({},
								s, {
									get: function() {
										return v
									},
									set: function(e) {
										e = E(e);
										if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
										v = e,
										this.hasBeenReset = !0
									}
								})),
								r.displayState = void 0
							}
							return e.prototype.getCueAsHTML = function() {
								return self.WebVTT.convertCueToDOMTree(self, this.text)
							},
							e
						} ()
					},
					"./src/utils/vttparser.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "parseTimeStamp",
						function() {
							return l
						}),
						i.d(t, "fixLineBreaks",
						function() {
							return f
						}),
						i.d(t, "VTTParser",
						function() {
							return a
						});
						var o = i("./src/utils/vttcue.ts"),
						r = (s.prototype.decode = function(e, t) {
							if (!e) return "";
							if ("string" != typeof e) throw new Error("Error - expected string data.");
							return decodeURIComponent(encodeURIComponent(e))
						},
						s);
						function s() {}
						function l(e) {
							function t(e, t, i, r) {
								return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + parseFloat(r || 0)
							}
							e = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
							return e ? 59 < parseFloat(e[2]) ? t(e[2], e[3], 0, e[4]) : t(e[1], e[2], e[3], e[4]) : null
						} (t = n.prototype).set = function(e, t) {
							this.get(e) || "" === t || (this.values[e] = t)
						},
						t.get = function(e, t, i) {
							return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
						},
						t.has = function(e) {
							return e in this.values
						},
						t.alt = function(e, t, i) {
							for (var r = 0; r < i.length; ++r) if (t === i[r]) {
								this.set(e, t);
								break
							}
						},
						t.integer = function(e, t) { / ^-?\d + $ / .test(t) && this.set(e, parseInt(t, 10))
						},
						t.percent = function(e, t) {
							if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
								t = parseFloat(t);
								if (0 <= t && t <= 100) return this.set(e, t),
								!0
							}
							return ! 1
						};
						var c = n;
						function n() {
							this.values = Object.create(null)
						}
						function u(e, t, i, r) {
							var s, n, a = r ? e.split(r) : [e];
							for (s in a)"string" != typeof a[s] || 2 === (n = a[s].split(i)).length && t(n[0], n[1])
						}
						var d = new o.
					default(0, 0, ""),
						h = "middle" === d.align ? "middle": "center";
						function f(e) {
							return e.replace(/<br(?: \/)?>/gi, "\n")
						} (i = A.prototype).parse = function(e) {
							var r = this;
							function t() {
								for (var e = 0,
								t = f(t = r.buffer); e < t.length && "\r" !== t[e] && "\n" !== t[e];)++e;
								var i = t.substr(0, e);
								return "\r" === t[e] && ++e,
								"\n" === t[e] && ++e,
								r.buffer = t.substr(e),
								i
							}
							e && (r.buffer += r.decoder.decode(e, {
								stream: !0
							}));
							try {
								var i = "";
								if ("INITIAL" === r.state) {
									if (!/\r\n|\n/.test(r.buffer)) return this;
									var s = (i = t()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
									if (!s || !s[0]) throw new Error("Malformed WebVTT signature.");
									r.state = "HEADER"
								}
								for (var n = !1; r.buffer;) {
									if (!/\r\n|\n/.test(r.buffer)) return this;
									switch (n ? n = !1 : i = t(), r.state) {
									case "HEADER":
										/:/.test(i) ? u(i,
										function(e, t) {},
										/:/) : i || (r.state = "ID");
										continue;
									case "NOTE":
										i || (r.state = "ID");
										continue;
									case "ID":
										if (/^NOTE($|[ \t])/.test(i)) {
											r.state = "NOTE";
											break
										}
										if (!i) continue;
										if (r.cue = new o.
									default(0, 0, ""), r.state = "CUE", -1 === i.indexOf("--\x3e")) {
											r.cue.id = i;
											continue
										}
									case "CUE":
										if (!r.cue) {
											r.state = "BADCUE";
											continue
										}
										try { !
											function(t, e, s) {
												var i, n, r = t;
												function a() {
													var e = l(t);
													if (null === e) throw new Error("Malformed timestamp: " + r);
													return t = t.replace(/^[^\sa-zA-Z-]+/, ""),
													e
												}
												function o() {
													t = t.replace(/^\s+/, "")
												}
												if (o(), e.startTime = a(), o(), "--\x3e" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
												t = t.substr(3),
												o(),
												e.endTime = a(),
												o(),
												i = t,
												e = e,
												n = new c,
												u(i,
												function(e, t) {
													var i;
													switch (e) {
													case "region":
														for (var r = s.length - 1; 0 <= r; r--) if (s[r].id === t) {
															n.set(e, s[r].region);
															break
														}
														break;
													case "vertical":
														n.alt(e, t, ["rl", "lr"]);
														break;
													case "line":
														i = t.split(","),
														n.integer(e, i[0]),
														n.percent(e, i[0]) && n.set("snapToLines", !1),
														n.alt(e, i[0], ["auto"]),
														2 === i.length && n.alt("lineAlign", i[1], ["start", h, "end"]);
														break;
													case "position":
														i = t.split(","),
														n.percent(e, i[0]),
														2 === i.length && n.alt("positionAlign", i[1], ["start", h, "end", "line-left", "line-right", "auto"]);
														break;
													case "size":
														n.percent(e, t);
														break;
													case "align":
														n.alt(e, t, ["start", h, "end", "left", "right"])
													}
												},
												/:/, /\s/),
												e.region = n.get("region", null),
												e.vertical = n.get("vertical", ""),
												"auto" === (i = n.get("line", "auto")) && -1 === d.line && (i = -1),
												e.line = i,
												e.lineAlign = n.get("lineAlign", "start"),
												e.snapToLines = n.get("snapToLines", !0),
												e.size = n.get("size", 100),
												e.align = n.get("align", h),
												"auto" === (i = n.get("position", "auto")) && 50 === d.position && (i = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50),
												e.position = i
											} (i, r.cue, r.regionList)
										} catch(e) {
											r.cue = null,
											r.state = "BADCUE";
											continue
										}
										r.state = "CUETEXT";
										continue;
									case "CUETEXT":
										var a = -1 !== i.indexOf("--\x3e");
										if (!i || a && (n = !0)) {
											r.oncue && r.cue && r.oncue(r.cue),
											r.cue = null,
											r.state = "ID";
											continue
										}
										if (null === r.cue) continue;
										r.cue.text && (r.cue.text += "\n"),
										r.cue.text += i;
										continue;
									case "BADCUE":
										i || (r.state = "ID")
									}
								}
							} catch(e) {
								"CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue),
								r.cue = null,
								r.state = "INITIAL" === r.state ? "BADWEBVTT": "BADCUE"
							}
							return this
						},
						i.flush = function() {
							var t = this;
							try {
								if (!t.cue && "HEADER" !== t.state || (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state || "BADWEBVTT" === t.state) throw new Error("Malformed WebVTT signature.")
							} catch(e) {
								t.onparsingerror && t.onparsingerror(e)
							}
							return t.onflush && t.onflush(),
							this
						};
						var a = A;
						function A() {
							this.state = "INITIAL",
							this.buffer = "",
							this.decoder = new r,
							this.regionList = [],
							this.cue = null,
							this.oncue = void 0,
							this.onparsingerror = void 0,
							this.onflush = void 0
						}
					},
					"./src/utils/webvtt-parser.ts": function(e, t, i) {
						i.r(t),
						i.d(t, "generateCueId",
						function() {
							return w
						}),
						i.d(t, "parseWebVTT",
						function() {
							return s
						});
						var m = i("./src/polyfills/number.ts"),
						v = i("./src/utils/vttparser.ts"),
						y = i("./src/demux/id3.ts"),
						b = i("./src/utils/timescale-conversion.ts"),
						E = i("./src/remux/mp4-remuxer.ts"),
						S = /\r\n|\n\r|\n|\r/g,
						T = function(e, t, i) {
							return e.substr(i = void 0 === i ? 0 : i, t.length) === t
						},
						r = function(e) {
							for (var t = 5381,
							i = e.length; i;) t = 33 * t ^ e.charCodeAt(--i);
							return (t >>> 0).toString()
						};
						function w(e, t, i) {
							return r(e.toString()) + r(t.toString()) + r(i)
						}
						function s(e, t, i, s, n, a, r, o) {
							var l, c = new v.VTTParser,
							e = Object(y.utf8ArrayToStr)(new Uint8Array(e)).trim().replace(S, "\n").split("\n"),
							u = [],
							d = Object(b.toMpegTsClockFromTimescale)(t, i),
							h = "00:00.000",
							f = 0,
							A = 0,
							p = !0,
							g = !1;
							c.oncue = function(e) {
								var t = s[n],
								i = s.ccOffset,
								r = (f - d) / 9e4,
								i = (null != t && t.new && (void 0 !== A ? i = s.ccOffset = t.start: function(e, t) {
									var i, r = e[n],
									s = e[r.prevCC];
									if (!s || !s.new && r.new) return e.ccOffset = e.presentationOffset = r.start,
									r.new = !1;
									for (; null != (i = s) && i.new;) e.ccOffset += r.start - s.start,
									r.new = !1,
									s = e[(r = s).prevCC];
									e.presentationOffset = t
								} (s, r)), r && (i = r - s.presentationOffset), g && (t = e.endTime - e.startTime, r = Object(E.normalizePts)(9e4 * (e.startTime + i - A), 9e4 * a) / 9e4, e.startTime = r, e.endTime = r + t), e.text.trim());
								e.text = decodeURIComponent(encodeURIComponent(i)),
								e.id || (e.id = w(e.startTime, e.endTime, i)),
								0 < e.endTime && u.push(e)
							},
							c.onparsingerror = function(e) {
								l = e
							},
							c.onflush = function() {
								l ? o(l) : r(u)
							},
							e.forEach(function(e) {
								if (p) {
									if (T(e, "X-TIMESTAMP-MAP=")) {
										g = !(p = !1),
										e.substr(16).split(",").forEach(function(e) {
											T(e, "LOCAL:") ? h = e.substr(6) : T(e, "MPEGTS:") && (f = parseInt(e.substr(7)))
										});
										try {
											A = function(e) {
												var t = parseInt(e.substr( - 3)),
												i = parseInt(e.substr( - 6, 2)),
												r = parseInt(e.substr( - 9, 2)),
												s = 9 < e.length ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
												if (Object(m.isFiniteNumber)(t) && Object(m.isFiniteNumber)(i) && Object(m.isFiniteNumber)(r) && Object(m.isFiniteNumber)(s)) return t + 1e3 * i + 6e4 * r + 36e5 * s;
												throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e)
											} (h) / 1e3
										} catch(e) {
											g = !1,
											l = e
										}
										return
									}
									"" === e && (p = !1)
								}
								c.parse(e + "\n")
							}),
							c.flush()
						}
					},
					"./src/utils/xhr-loader.ts": function(e, t, i) {
						i.r(t);
						var o = i("./src/utils/logger.ts"),
						r = i("./src/loader/load-stats.ts"),
						s = /^age:\s*[\d.]+\s*$/m;
						function n(e) {
							this.xhrSetup = void 0,
							this.requestTimeout = void 0,
							this.retryTimeout = void 0,
							this.retryDelay = void 0,
							this.config = null,
							this.callbacks = null,
							this.context = void 0,
							this.loader = null,
							this.stats = void 0,
							this.xhrSetup = e ? e.xhrSetup: null,
							this.stats = new r.LoadStats,
							this.retryDelay = 0
						} (i = n.prototype).destroy = function() {
							this.callbacks = null,
							this.abortInternal(),
							this.loader = null,
							this.config = null
						},
						i.abortInternal = function() {
							var e = this.loader;
							self.clearTimeout(this.requestTimeout),
							self.clearTimeout(this.retryTimeout),
							e && (e.onreadystatechange = null, e.onprogress = null, 4 !== e.readyState && (this.stats.aborted = !0, e.abort()))
						},
						i.abort = function() {
							var e;
							this.abortInternal(),
							null != (e = this.callbacks) && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
						},
						i.load = function(e, t, i) {
							if (this.stats.loading.start) throw new Error("Loader can only be used once.");
							this.stats.loading.start = self.performance.now(),
							this.context = e,
							this.config = t,
							this.callbacks = i,
							this.retryDelay = t.retryDelay,
							this.loadInternal()
						},
						i.loadInternal = function() {
							var e = this.config,
							t = this.context;
							if (e) {
								var i = this.loader = new self.XMLHttpRequest,
								r = this.stats,
								r = (r.loading.first = 0, r.loaded = 0, this.xhrSetup);
								try {
									if (r) try {
										r(i, t.url)
									} catch(e) {
										i.open("GET", t.url, !0),
										r(i, t.url)
									}
									i.readyState || i.open("GET", t.url, !0);
									var s = this.context.headers;
									if (s) for (var n in s) i.setRequestHeader(n, s[n])
								} catch(e) {
									return void this.callbacks.onError({
										code: i.status,
										text: e.message
									},
									t, i)
								}
								t.rangeEnd && i.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
								i.onreadystatechange = this.readystatechange.bind(this),
								i.onprogress = this.loadprogress.bind(this),
								i.responseType = t.responseType,
								self.clearTimeout(this.requestTimeout),
								this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), e.timeout),
								i.send()
							}
						},
						i.readystatechange = function() {
							var e, t, i, r, s = this.context,
							n = this.loader,
							a = this.stats;
							s && n && (t = n.readyState, e = this.config, !a.aborted && 2 <= t && (self.clearTimeout(this.requestTimeout), 0 === a.loading.first && (a.loading.first = Math.max(self.performance.now(), a.loading.start)), 4 === t ? (n.onreadystatechange = null, n.onprogress = null, 200 <= (t = n.status) && t < 300 ? (a.loading.end = Math.max(self.performance.now(), a.loading.first), r = "arraybuffer" === s.responseType ? (i = n.response).byteLength: (i = n.responseText).length, a.loaded = a.total = r, this.callbacks && ((r = this.callbacks.onProgress) && r(a, s, i, n), this.callbacks && (r = {
								url: n.responseURL,
								data: i
							},
							this.callbacks.onSuccess(r, a, s, n)))) : a.retry >= e.maxRetry || 400 <= t && t < 499 ? (o.logger.error(t + " while loading " + s.url), this.callbacks.onError({
								code: t,
								text: n.statusText
							},
							s, n)) : (o.logger.warn(t + " while loading " + s.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, e.maxRetryDelay), a.retry++)) : (self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), e.timeout))))
						},
						i.loadtimeout = function() {
							o.logger.warn("timeout while loading " + this.context.url);
							var e = this.callbacks;
							e && (this.abortInternal(), e.onTimeout(this.stats, this.context, this.loader))
						},
						i.loadprogress = function(e) {
							var t = this.stats;
							t.loaded = e.loaded,
							e.lengthComputable && (t.total = e.total)
						},
						i.getCacheAge = function() {
							var e, t = null;
							return t = this.loader && s.test(this.loader.getAllResponseHeaders()) ? (e = this.loader.getResponseHeader("age")) ? parseFloat(e) : null: t
						},
						t.
					default = n
					}
				},
				r = {},
				s.m = i,
				s.c = r,
				s.d = function(e, t, i) {
					s.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: i
					})
				},
				s.r = function(e) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				},
				s.t = function(t, e) {
					if (1 & e && (t = s(t)), 8 & e) return t;
					if (4 & e && "object" == typeof t && t && t.__esModule) return t;
					var i = Object.create(null);
					if (s.r(i), Object.defineProperty(i, "default", {
						enumerable: !0,
						value: t
					}), 2 & e && "string" != typeof t) for (var r in t) s.d(i, r,
					function(e) {
						return t[e]
					}.bind(null, r));
					return i
				},
				s.n = function(e) {
					var t = e && e.__esModule ?
					function() {
						return e.
					default
					}:
					function() {
						return e
					};
					return s.d(t, "a", t),
					t
				},
				s.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				},
				s.p = "/dist/",
				s(s.s = "./src/hls.ts").
			default;
				function s(e) {
					if (r[e]) return r[e].exports;
					var t = r[e] = {
						i: e,
						l: !1,
						exports: {}
					};
					return i[e].call(t.exports, t, t.exports, s),
					t.l = !0,
					t.exports
				}
				var i, r
			} ())
		})) && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.
	default:
		e;
		class yt extends n {
			constructor(e) {
				super(),
				(this.player = e)._opt,
				this.hls = new P({}),
				this._initHls(),
				this._bindEvents(),
				this.player.debug.log("HlsDecoder", "init")
			}
			destroy() {
				this.hls.destroy(),
				this.hls = null,
				this.player.debug.log("HlsDecoder", "destroy")
			}
			_initHls() {
				this.hls.attachMedia(this.player.video.$videoElement)
			}
			_bindEvents() {
				const t = this.player,
				e = this.player.events["proxy"],
				i = this.hls,
				r = t.video.$videoElement;
				this.hls.on(P.Events.ERROR, (e, t) = >{
					if (t.fatal) switch (t.type) {
					case P.ErrorTypes.NETWORK_ERROR:
						this.player.debug.error("HlsDecoder", "fatal network error encountered, try to recover"),
						this.hls.startLoad();
						break;
					case P.ErrorTypes.MEDIA_ERROR:
						this.player.debug.error("HlsDecoder", "fatal media error encountered, try to recover"),
						this.hls.recoverMediaError()
					}
				}),
				e(r, "timeupdate", e = >{
					this.hls && (e = parseInt(e.timeStamp, 10), t.handleRender(), this.player.debug.log("HlsDecoder", "liveSyncPosition", i.liveSyncPosition), t.updateStats({
						ts: e
					}), t.emit(v.kBps, (i.bandwidthEstimate / 8 / 1024).toFixed(2)))
				}),
				this.hls.on(P.Events.MEDIA_ATTACHING, () = >{
					this.player.debug.log("HlsDecoder", "MEDIA_ATTACHING")
				}),
				this.hls.on(P.Events.MEDIA_ATTACHED, () = >{
					this.player.debug.log("HlsDecoder", "MEDIA_ATTACHED")
				}),
				this.hls.on(P.Events.MEDIA_DETACHING, () = >{
					this.player.debug.log("HlsDecoder", "MEDIA_DETACHING")
				}),
				this.hls.on(P.Events.MEDIA_DETACHED, () = >{
					this.player.debug.log("HlsDecoder", "MEDIA_DETACHED")
				}),
				this.hls.on(P.Events.BUFFER_RESET, () = >{
					this.player.debug.log("HlsDecoder", "BUFFER_RESET")
				}),
				this.hls.on(P.Events.BUFFER_CODECS, () = >{
					this.player.debug.log("HlsDecoder", "BUFFER_CODECS")
				}),
				this.hls.on(P.Events.BUFFER_CREATED, () = >{
					this.player.debug.log("HlsDecoder", "BUFFER_CREATED")
				}),
				this.hls.on(P.Events.BUFFER_APPENDING, () = >{
					this.player.debug.log("HlsDecoder", "BUFFER_APPENDING")
				}),
				this.hls.on(P.Events.BUFFER_APPENDED, () = >{
					this.player.debug.log("HlsDecoder", "BUFFER_APPENDED")
				}),
				this.hls.on(P.Events.BUFFER_EOS, () = >{
					this.player.debug.log("HlsDecoder", "fired when the stream is finished and we want to notify the media buffer that there will be no more data")
				}),
				this.hls.on(P.Events.BUFFER_FLUSHING, () = >{
					this.player.debug.log("HlsDecoder", "fired when the media buffer should be flushed")
				}),
				this.hls.on(P.Events.BUFFER_FLUSHED, () = >{
					this.player.debug.log("HlsDecoder", "fired when the media buffer has been flushed")
				}),
				this.hls.on(P.Events.MANIFEST_LOADING, () = >{
					this.player.debug.log("HlsDecoder", "MANIFEST_LOADING 开始加载playlist m3u8资源")
				}),
				this.hls.on(P.Events.MANIFEST_LOADED, (e, t) = >{
					this.player.debug.log("HlsDecoder", "MANIFEST_LOADED playlist m3u8文件加载完成", t)
				}),
				this.hls.on(P.Events.MANIFEST_PARSED, () = >{
					this.player.debug.log("HlsDecoder", "MANIFEST_PARSED playlist m3u8解析完成"),
					t._times.demuxStart || (t._times.demuxStart = g())
				}),
				this.hls.on(P.Events.LEVEL_LOADING, () = >{
					this.player.debug.log("HlsDecoder", "LEVEL_LOADING 加载特定码率的m3u8文件")
				}),
				this.hls.on(P.Events.LEVEL_LOADED, (e, t) = >{
					this.player.debug.log("HlsDecoder", "LEVEL_LOADED 特定码率的m3u8文件解析完成，拿到该码率对应的ts列表")
				}),
				this.hls.on(P.Events.FRAG_LOADING, () = >{
					this.player.debug.log("HlsDecoder", "FRAG_LOADING 开始加载某个ts分片文件，开始根据ts片下载时间预估带宽")
				}),
				this.hls.on(P.Events.FRAG_LOADED, () = >{
					this.player.debug.log("HlsDecoder", "FRAG_LOADED ts分片文件加载成功，开始转码"),
					t._times.decodeStart || (t._times.decodeStart = g())
				}),
				this.hls.on(P.Events.BUFFER_APPENDING, () = >{
					this.player.debug.log("HlsDecoder", "BUFFER_APPENDING 视频流赋给video标签"),
					t._times.videoStart || (t._times.videoStart = g(), t.handlePlayToRenderTimes())
				}),
				this.hls.on(P.Events.FRAG_LOADED, () = >{
					this.player.debug.log("HlsDecoder", "FRAG_LOADED")
				}),
				this.hls.on(P.Events.FRAG_DECRYPTED, () = >{
					this.player.debug.log("HlsDecoder", "FRAG_DECRYPTED fired when a fragment decryption is completed")
				}),
				this.hls.on(P.Events.KEY_LOADING, () = >{
					this.player.debug.log("HlsDecoder", "KEY_LOADING fired when a decryption key loading starts")
				}),
				this.hls.on(P.Events.KEY_LOADING, () = >{
					this.player.debug.log("HlsDecoder", "KEY_LOADING fired when a fragment decryption is completed")
				}),
				this.hls.on(P.Events.FPS_DROP, e = >{
					this.player.debug.log("HlsDecoder", "FPS_DROP", e)
				}),
				this.hls.on(P.Events.FPS_DROP_LEVEL_CAPPING, e = >{
					this.player.debug.log("HlsDecoder", "FPS_DROP_LEVEL_CAPPING", e)
				})
			}
			loadSource(i) {
				return new Promise((e, t) = >{
					this.hls.on(P.Events.MEDIA_ATTACHED, () = >{
						this.hls.loadSource(i),
						e()
					})
				})
			}
		}
		class bt extends n {
			constructor(e) {
				super(),
				this.player = e,
				this.rtcPeerConnection = null,
				this.videoStream = null,
				this._initRtcPeerConnection(),
				this.player.debug.log("WebrtcDecoder", "init")
			}
			destroy() {
				this.rtcPeerConnection && (this.rtcPeerConnection.close(), this.rtcPeerConnection = null),
				this.videoStream = null,
				this.player.video.$videoElement.srcObject = null,
				this.player.debug.log("WebrtcDecoder", "destroy")
			}
			_initRtcPeerConnection() {
				const t = new RTCPeerConnection,
				i = this.player;
				t.addTransceiver("video", {
					direction: "recvonly"
				}),
				t.addTransceiver("audio", {
					direction: "recvonly"
				}),
				t.onsignalingstatechange = e = >{
					console.log("onsignalingstatechange", e)
				},
				t.oniceconnectionstatechange = e = >{
					console.log("oniceconnectionstatechange", t.iceConnectionState)
				},
				t.onicecandidate = e = >{
					console.log("onicecandidate", e)
				},
				t.ontrack = e = >{
					const t = i.video.$videoElement;
					console.log("ontrack", e),
					"video" === e.track.kind && (e = e.streams[0], t.srcObject = e, this.videoStream = e)
				},
				t.onconnectionstatechange = e = >{
					i.debug.log("webrtcLoader", "sdp connect status " + t.connectionState),
					t.connectionState
				},
				this.rtcPeerConnection = t
			}
			loadSource(s) {
				return new Promise((t, i) = >{
					const r = this.rtcPeerConnection;
					r.createOffer().then(e = >{
						r.setLocalDescription(e),
						this.player.debug.log("webrtcLoader", "getWebRtcRemoteSdp loadSource"),
						e = e.sdp,
						fetch(s, {
							method: "POST",
							mode: "cors",
							cache: "no-cache",
							credentials: "include",
							redirect: "follow",
							referrerPolicy: "no-referrer",
							headers: {
								"Content-Type": "application/sdp"
							},
							body: e
						}).then(e = >{
							e.text().then(e = >{
								this.player.debug.log("webrtcLoader", "getWebRtcRemoteSdp response"),
								r.setRemoteDescription(new RTCSessionDescription({
									type: "answer",
									sdp: e
								})),
								t()
							}).
							catch(e = >{
								console.error(e),
								i()
							})
						}).
						catch(e = >{
							console.error(e),
							i(e)
						})
					}).
					catch(e = >{
						console.error(e),
						i(e)
					})
				})
			}
		}
		class Et extends n {
			constructor(e, t) {
				super(),
				this.player = e,
				this._showPrecision = null,
				this._startTime = null,
				this._playStartTime = null,
				this._playingTimestamp = null,
				this._fps = parseInt(t.fps, 10) || e._opt.playbackFps,
				this._rate = 1,
				this._audioTimestamp = 0,
				this._videoTimestamp = 0,
				this._listen(),
				this.playbackList = [],
				this._totalDuration = 0,
				this.initPlaybackList(t.playList),
				e.debug.log("Playback", "init")
			}
			_listen() {
				this.player.on(v.stats, e = >{
					e = e.ts,
					this._playStartTime || (this._playStartTime = e),
					e -= this._playStartTime;
					this.setPlayingTimestamp(e)
				})
			}
			destroy() {
				this._startTime = null,
				this._showPrecision = null,
				this._playStartTime = null,
				this._playingTimestamp = null,
				this._totalDuration = 0,
				this._audioTimestamp = 0,
				this._videoTimestamp = 0,
				this._fps = null,
				this._rate = 1,
				this.playbackList = [],
				this.off(),
				this.player.debug.log("Playback", "destroy")
			}
			initPlaybackList(e) {
				this.playbackList = e || [];
				let i = 0;
				this.playbackList.forEach((e, t) = >{
					10 === de(e.start) && (e.startTimestamp = 1e3 * e.start, e.startTime = ce(e.startTimestamp)),
					10 === de(e.end) && (e.endTimestamp = 1e3 * e.end, e.endTime = ce(e.endTimestamp)),
					e.duration = e.end - e.start,
					i += e.duration
				}),
				this._totalDuration = i,
				this.player.debug.log("Playback", this.playbackList),
				0 < this.playbackList.length && this.setStartTime(this.playbackList[0].startTimestamp),
				this.setShowPrecision(h)
			}
			get startTime() {
				return this._startTime || 0
			}
			setStartTime(e) {
				this._startTime = e,
				this._playStartTime = null
			}
			setRate(e) {
				this._rate = e
			}
			get fps() {
				return this._fps
			}
			get rate() {
				return this._rate
			}
			get showPrecision() {
				return this._showPrecision
			}
			get is60Min() {
				return this.showPrecision === h
			}
			get is30Min() {
				return this.showPrecision === $
			}
			get is10Min() {
				return "tenMin" === this.showPrecision
			}
			get is5Min() {
				return this.showPrecision === f
			}
			get is1Min() {
				return this.showPrecision === f
			}
			setShowPrecision(e) {
				this._showPrecision && this._showPrecision === e || (this._showPrecision = e, this.player.emit(v.playbackPrecision, this._showPrecision, this.playbackList))
			}
			setPlayingTimestamp(e) {
				e = this.startTime + e;
				this._playingTimestamp = e,
				this.player.emit(v.playbackTime, e);
				const t = new Date(e);
				this.player.emit(v.playbackTimestamp, {
					ts: e,
					hour: t.getHours(),
					min: t.getMinutes(),
					second: t.getSeconds()
				})
			}
			get playingTimestamp() {
				return this._playingTimestamp
			}
			narrowPrecision() {
				var e = i.indexOf(this.showPrecision) - 1;
				0 <= e && (e = i[e], this.setShowPrecision(e))
			}
			expandPrecision() {
				var e = i.indexOf(this.showPrecision) + 1;
				e <= i.length - 1 && (e = i[e], this.setShowPrecision(e))
			}
			seek(t) {
				if (console.log(t), "true" === t.hasRecord) {
					let e = t.time;
					"min" === t.type && (e = 60 * t.time),
					this.player.emit(v.playbackSeek,
					function(e) {
						let t = {};
						return t = -1 < e ? {
							hour: Math.floor(e / 60 / 60) % 60,
							min: Math.floor(e / 60) % 60,
							second: e % 60
						}: t
					} (e))
				}
			}
		}
		class St extends n {
			constructor(e, t) {
				super(),
				this.$container = e,
				this._opt = Object.assign({},
				j, t),
				this.debug = new te(this),
				this._opt.isHls || this._opt.isWebrtc || (this._opt.useWCS && (this._opt.useWCS = "VideoEncoder" in window, this._opt.useWCS && this._opt.wcsUseVideoRender && (this._opt.wcsUseVideoRender = window.MediaStreamTrackGenerator && "function" == typeof window.MediaStreamTrackGenerator)), this._opt.useMSE && (this._opt.useMSE = window.MediaSource && window.MediaSource.isTypeSupported(Y))),
				this._opt.useMSE ? (this._opt.useWCS && this.debug.log("Player", "useWCS set true->false"), this._opt.forceNoOffscreen || this.debug.log("Player", "forceNoOffscreen set false->true"), this._opt.useWCS = !1, this._opt.forceNoOffscreen = !0) : this._opt.useWCS,
				this._opt.useSIMD && (this._opt.useSIMD = WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), this._opt.useSIMD && -1 === this._opt.decoder.indexOf("-simd") && (this._opt.decoder = this._opt.decoder.replace("decoder-pro", "decoder-pro-simd"))),
				this._opt.forceNoOffscreen || ("undefined" == typeof OffscreenCanvas ? (this._opt.forceNoOffscreen = !0, this._opt.useOffscreen = !1) : this._opt.useOffscreen = !0),
				this._opt.hasAudio || (this._opt.operateBtns.audio = !1),
				this._opt.hasVideo || (this._opt.operateBtns.fullscreen = !1, this._opt.operateBtns.screenshot = !1, this._opt.operateBtns.record = !1, this._opt.operateBtns.ptz = !1, this._opt.operateBtns.quality = !1),
				this._opt.hasControl = this._hasControl(),
				this._loading = !1,
				this._playing = !1,
				this._hasLoaded = !1,
				this._checkHeartTimeout = null,
				this._checkLoadingTimeout = null,
				this._checkStatsInterval = null,
				this._startBpsTime = null,
				this._isPlayingBeforePageHidden = !1,
				this._stats = {
					buf: 0,
					fps: 0,
					dfps: 0,
					abps: 0,
					vbps: 0,
					ts: 0
				},
				this._times = {
					playInitStart: "",
					playStart: "",
					streamStart: "",
					streamResponse: "",
					demuxStart: "",
					decodeStart: "",
					videoStart: "",
					playTimestamp: "",
					streamTimestamp: "",
					streamResponseTimestamp: "",
					demuxTimestamp: "",
					decodeTimestamp: "",
					videoTimestamp: "",
					allTimestamp: ""
				},
				this._videoTimestamp = 0,
				this._audioTimestamp = 0,
				this._streamQuality = "",
				this._visibility = !0,
				this._lastestVisibilityChangeTimestamp = null,
				this._isPlayback() && (this._opt.useMSE = !1, this._opt.useWCS = !1),
				!1 !== this._opt.useMSE || !1 !== this._opt.useWCS || this._opt.isWebrtc || (this._opt.useWasm = !0),
				(this._opt.isHls || this._opt.isWebrtc) && (this._opt.hasVideo = !0, this._opt.hasAudio = !0),
				this._opt.hasVideo || (this._opt.useMSE = !1, this._opt.useWCS = !1),
				i = this,
				Object.defineProperty(i, "rect", {
					get: () = >{
						const e = i.$container.getBoundingClientRect();
						return e.width = Math.max(e.width, i.$container.clientWidth),
						e.height = Math.max(e.height, i.$container.clientHeight),
						e
					}
				}),
				["bottom", "height", "left", "right", "top", "width"].forEach(e = >{
					Object.defineProperty(i, e, {
						get: () = >i.rect[e]
					})
				}),
				this.events = new ie(this),
				this._opt.hasVideo && (this.video = new be(this), this.recorder = new We(this)),
				this._opt.hasAudio && (this.audio = new Pe(this)),
				this._opt.isHls ? (this.hls = new yt(this), this.loaded = !0) : this._opt.isWebrtc ? (this.webrtc = new bt(this), this.loaded = !0) : this._onlyMseOrWcsVideo() ? this.loaded = !0 : this.decoderWorker = new qe(this),
				this.stream = null,
				this.demux = null,
				this._lastVolume = null,
				this._isInZoom = !1,
				this._opt.useWCS && (this.webcodecsDecoder = new ot(this), this.loaded = !0),
				this._opt.useMSE && (this.mseDecoder = new pt(this), this.loaded = !0),
				this.control = new ft(this),
				this._isPlayback() && (this.playback = new Et(this, this._opt.playbackConfig), this.$container.classList.add("jessibuca-container-playback")),
				E() && (this.keepScreenOn = new vt(this));
				var i, r = this;
				try {
					const n = e = >{
						e.target === r.$container && (r.emit(u.fullscreen, r.fullscreen), r.fullscreen && !r._opt.useMSE || r.resize())
					};
					p.on("change", n),
					r.events.destroys.push(() = >{
						p.off("change", n)
					})
				} catch(r) {}
				if (r.on(v.decoderWorkerInit, () = >{
					r.debug.log("player", "has loaded"),
					r.loaded = !0
				}), r.on(v.play, () = >{
					r.loading = !1
				}), r.on(v.fullscreen, e = >{
					if (e) try {
						p.request(r.$container).then(() = >{}).
						catch(e = >{
							r.webFullscreen = !0
						})
					} catch(e) {
						r.webFullscreen = !0
					} else try {
						p.exit().then(() = >{}).
						catch(() = >{
							r.webFullscreen = !1
						})
					} catch(e) {
						r.webFullscreen = !1
					}
				}), r.on(v.webFullscreen, e = >{
					e ? r.$container.classList.add("jessibuca-fullscreen-web") : r.$container.classList.remove("jessibuca-fullscreen-web"),
					r.emit(u.fullscreen, r.fullscreen)
				}), r.on(v.resize, () = >{
					r.video.resize()
				}), r._opt.debug) {
					const a = [v.timeUpdate];
					Object.keys(v).forEach(t = >{
						r.on(v[t], e = >{
							a.includes(t) || r.debug.log("player events", v[t], e)
						})
					}),
					Object.keys(d).forEach(t = >{
						r.on(d[t], e = >{
							r.debug.log("player event error", d[t], e)
						})
					})
				} {
					var s = this;
					const {
						_opt: o,
						debug: l,
						events: {
							proxy: c
						}
					} = s;
					o.supportDblclickFullscreen && c(s.$container, "dblclick", e = >{
						e = he(e).nodeName.toLowerCase();
						"canvas" !== e && "video" !== e || (s.fullscreen = !s.fullscreen)
					}),
					c(document, "visibilitychange", () = >{
						s.visibility = "visible" === document.visibilityState,
						l.log("visibilitychange", document.visibilityState),
						o.hiddenAutoPause && (l.log("visibilitychange", "hiddenAutoPause is true ", document.visibilityState, s._isPlayingBeforePageHidden), "visible" === document.visibilityState ? s._isPlayingBeforePageHidden && s.play() : (s._isPlayingBeforePageHidden = s.playing, s.playing && s.pause()))
					}),
					c(window, "fullscreenchange", () = >{
						null !== s.keepScreenOn && "visible" === document.visibilityState && s.enableWakeLock()
					})
				}
				if (! (e = this._opt.watermarkConfig) || 0 !== Object.keys(e).length) {
					const e = Object.assign(this._opt.watermarkConfig, {
						container: this.$container
					});
					this._removeWatermarkFn = function() {
						var i = ue(e);
						const r = i.container;
						if (r) {
							let e = null;
							const a = document.createElement("div");
							a.setAttribute("style", "pointer-events: none !important; display: block !important"),
							e = "function" == typeof a.attachShadow ? a.attachShadow({
								mode: "open"
							}) : a.shadowRoot || a;
							var s = r.children,
							n = Math.floor(Math.random() * (s.length - 1));
							s[n] ? r.insertBefore(a, s[n]) : r.appendChild(a);
							const o = document.createElement("div");
							let t = null;
							return i.image && i.image.src ? ((t = document.createElement("img")).style.height = "100%", t.style.width = "100%", t.style.objectFit = "contain", t.src = i.image.src) : i.text && i.text.content && (t = document.createTextNode(i.text.content)),
							t ? (o.appendChild(t), o.style.visibility = "", o.style.position = "absolute", o.style.display = "block", o.style["-ms-user-select"] = "none", S(i.left) && (o.style.left = i.left + "px"), S(i.right) && (o.style.right = i.right + "px"), S(i.top) && (o.style.top = i.top + "px"), S(i.bottom) && (o.style.bottom = i.bottom + "px"), o.style.overflow = "hidden", o.style.zIndex = "9999999", i.image && i.image.src ? (o.style.width = i.image.width + "px", o.style.height = i.image.height + "px") : i.text && i.text.content && (o.style.fontSize = i.text.fontSize + "px", o.style.color = i.text.color), e.appendChild(o), () = >{
								r.removeChild(a)
							}) : void 0
						}
					} ()
				}
				this._opt.useWasm && (this._opt.useSIMD ? this.debug.log("Player", "use simd wasm") : this.debug.log("Player", "use wasm")),
				this._opt.useWCS && this.debug.log("Player", "use WCS"),
				this._opt.useMSE && this.debug.log("Player", "use MSE"),
				this._opt.useOffscreen && this.debug.log("Player", "use offscreen"),
				this._opt.isHls && this.debug.log("Player", "use hls"),
				this._opt.isWebrtc && this.debug.log("Player", "use webrtc"),
				this._isPlayback() && this.debug.log("Player", "use playback"),
				this.debug.log("Player options", this._opt)
			}
			destroy() {
				this._loading = !1,
				this._playing = !1,
				this._hasLoaded = !1,
				this._lastVolume = null,
				this._times = {
					playInitStart: "",
					playStart: "",
					streamStart: "",
					streamResponse: "",
					demuxStart: "",
					decodeStart: "",
					videoStart: "",
					playTimestamp: "",
					streamTimestamp: "",
					streamResponseTimestamp: "",
					demuxTimestamp: "",
					decodeTimestamp: "",
					videoTimestamp: "",
					allTimestamp: ""
				},
				this.decoderWorker && (this.decoderWorker.destroy(), this.decoderWorker = null),
				this.video && (this.video.destroy(), this.video = null),
				this.audio && (this.audio.destroy(), this.audio = null),
				this.stream && (this.stream.destroy(), this.stream = null),
				this.recorder && (this.recorder.destroy(), this.recorder = null),
				this.control && (this.control.destroy(), this.control = null),
				this.webcodecsDecoder && (this.webcodecsDecoder.destroy(), this.webcodecsDecoder = null),
				this.mseDecoder && (this.mseDecoder.destroy(), this.mseDecoder = null),
				this.demux && (this.demux.destroy(), this.demux = null),
				this.hls && (this.hls.destroy(), this.hls = null),
				this.events && (this.events.destroy(), this.events = null),
				this.playback && (this.playback.destroy(), this.playback = null),
				this.clearCheckHeartTimeout(),
				this.clearCheckLoadingTimeout(),
				this.clearStatsInterval(),
				this.releaseWakeLock(),
				this.keepScreenOn = null,
				this.resetStats(),
				this._audioTimestamp = 0,
				this._videoTimestamp = 0,
				this._streamQuality = "",
				this._visibility = !0,
				this._isInZoom = !1,
				this._lastestVisibilityChangeTimestamp = null,
				this._removeWatermarkFn && (this._removeWatermarkFn(), this._removeWatermarkFn = null),
				this.emit("destroy"),
				this.off(),
				this.debug.log("play", "destroy end")
			}
			set fullscreen(e) {
				E() ? (this.emit(v.webFullscreen, e), setTimeout(() = >{
					this.updateOption({
						rotate: e ? 270 : 0
					}),
					this.resize()
				},
				10)) : this.emit(v.fullscreen, e)
			}
			get fullscreen() {
				return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen || this.webFullscreen
			}
			set webFullscreen(e) {
				this.emit(v.webFullscreen, e)
			}
			get webFullscreen() {
				return this.$container.classList.contains("jessibuca-fullscreen-web")
			}
			set loaded(e) {
				this._hasLoaded = e
			}
			get loaded() {
				return this._hasLoaded || this._opt.isHls || this._opt.isWebrtc || this._opt.useMSE || this._opt.useWCS
			}
			set playing(e) {
				e && (this.loading = !1),
				this.playing !== e && (this._playing = e, this.emit(v.playing, e), this.emit(v.volumechange, this.volume), e ? this.emit(v.play) : this.emit(v.pause))
			}
			get playing() {
				return this._playing
			}
			get volume() {
				return this.audio && this.audio.volume || 0
			}
			set volume(e) {
				e !== this.volume && (this.audio && this.audio.setVolume(e), this._lastVolume = e)
			}
			get lastVolume() {
				return this._lastVolume
			}
			set loading(e) {
				this.loading !== e && (this._loading = e, this.emit(v.loading, this._loading))
			}
			get loading() {
				return this._loading
			}
			set recording(e) {
				e ? this.playing && this.recorder && this.recorder.startRecord() : this.recorder && this.recorder.stopRecordAndSave()
			}
			get recording() {
				return !! this.recorder && this.recorder.recording
			}
			set audioTimestamp(e) {
				null !== e && (this._audioTimestamp = e)
			}
			get audioTimestamp() {
				return this._audioTimestamp
			}
			set videoTimestamp(e) {
				null !== e && (this._videoTimestamp = e, this._opt.useWCS || this._opt.useMSE || this.audioTimestamp && this.videoTimestamp && this.audio && this.audio.emit(v.videoSyncAudio, {
					audioTimestamp: this.audioTimestamp,
					videoTimestamp: this.videoTimestamp,
					diff: this.audioTimestamp - this.videoTimestamp
				}))
			}
			set streamQuality(e) {
				this.streamQuality !== e && (this._streamQuality = e, this.emit(v.streamQualityChange, e))
			}
			get streamQuality() {
				return this._streamQuality
			}
			get videoTimestamp() {
				return this._videoTimestamp
			}
			get isDebug() {
				return ! 0 === this._opt.debug
			}
			set visibility(e) {
				this._visibility !== e && (this._visibility = e, this.emit(v.visibilityChange, e), this._lastestVisibilityChangeTimestamp = g())
			}
			get visibility() {
				return this._visibility
			}
			updateOption(e) {
				this._opt = Object.assign({},
				this._opt, e)
			}
			init() {
				return new Promise((e, t) = >{
					this.video || this._opt.hasVideo && (this.video = new be(this)),
					this.audio || this._opt.hasAudio && (this.audio = new Pe(this)),
					this.stream || (this.stream = new He(this)),
					this._opt.isHls ? (this.hls || (this.hls = new yt(this), this.loaded = !0), e()) : this._opt.isWebrtc ? (this.webrtc || (this.webrtc = new bt(this), this.loaded = !0), e()) : (this.demux || (this.demux = new rt(this)), this._opt.useWCS && !this.webcodecsDecoder && (this.webcodecsDecoder = new ot(this)), this._opt.useMSE && !this.mseDecoder && (this.mseDecoder = new pt(this)), this.decoderWorker || this._onlyMseOrWcsVideo() ? e() : (this.decoderWorker = new qe(this), this.once(v.decoderWorkerInit, () = >{
						e()
					})))
				})
			}
			play(i, r) {
				return new Promise((e, t) = >{
					if (!i && !this._opt.url) return t();
					this.loading = !0,
					this.playing = !1,
					this._times.playInitStart = g(),
					i = i || this._opt.url,
					this._opt.url = i,
					this.clearCheckHeartTimeout(),
					this.init().then(() = >{
						this._times.playStart = g(),
						this._opt.isNotMute && this.mute(!1),
						this.webcodecsDecoder && this.webcodecsDecoder.once(d.webcodecsH265NotSupport, () = >{
							this.emit(d.webcodecsH265NotSupport),
							this._opt.autoWasm || this.emit(v.error, d.webcodecsH265NotSupport)
						}),
						this.mseDecoder && (this.mseDecoder.once(d.mediaSourceH265NotSupport, () = >{
							this.emit(d.mediaSourceH265NotSupport),
							this._opt.autoWasm || this.emit(v.error, d.mediaSourceH265NotSupport)
						}), this.mseDecoder.once(d.mediaSourceFull, () = >{
							this.emit(d.mediaSourceFull)
						}), this.mseDecoder.once(d.mediaSourceAppendBufferError, () = >{
							this.emit(d.mediaSourceAppendBufferError)
						}), this.mseDecoder.once(d.mediaSourceBufferListLarge, () = >{
							this.emit(d.mediaSourceBufferListLarge)
						}), this.mseDecoder.once(d.mediaSourceAppendBufferEndTimeout, () = >{
							this.emit(d.mediaSourceAppendBufferEndTimeout)
						})),
						this.enableWakeLock(),
						this.checkLoadingTimeout(),
						this.stream.once(d.fetchError, e = >{
							t(e)
						}),
						this.stream.once(d.websocketError, e = >{
							t(e)
						}),
						this.stream.once(v.streamEnd, () = >{
							t()
						}),
						this.stream.once(d.hlsError, e = >{
							t(e)
						}),
						this.stream.once(v.streamSuccess, () = >{
							e(),
							this._times.streamResponse = g(),
							this.video && this.video.play(),
							this.checkStatsInterval(),
							setTimeout(() = >{
								this.destroy(),
								console.error("jessibuca pro 体验结束,请刷新页面再次体验"),
								alert("jessibuca pro 体验结束,请刷新页面再次体验"),
								window.location.reload()
							},
							36e5)
						}),
						this.stream.fetchStream(i, r)
					}).
					catch(e = >{
						t(e)
					})
				})
			}
			close() {
				return new Promise((e, t) = >{
					this._close().then(() = >{
						this.video && this.video.clearView(),
						e()
					})
				})
			}
			resumeAudioAfterPause() {
				this.lastVolume && (this.volume = this.lastVolume)
			}
			_close() {
				return new Promise((e, t) = >{
					this.stream && (this.stream.destroy(), this.stream = null),
					this.demux && (this.demux.destroy(), this.demux = null),
					this.decoderWorker && (this.decoderWorker.destroy(), this.decoderWorker = null),
					this.webcodecsDecoder && (this.webcodecsDecoder.destroy(), this.webcodecsDecoder = null),
					this.mseDecoder && (this.mseDecoder.destroy(), this.mseDecoder = null),
					this.hls && (this.hls.destroy(), this.hls = null),
					this.webrtc && (this.webrtc.destroy(), this.webrtc = null),
					this.audio && (this.audio.destroy(), this.audio = null),
					this.clearCheckHeartTimeout(),
					this.clearCheckLoadingTimeout(),
					this.clearStatsInterval(),
					this.playing = !1,
					this.loading = !1,
					this.recording = !1,
					this.video && (this.video.resetInit(), this.video.pause(!0)),
					this.releaseWakeLock(),
					this.resetStats(),
					this._audioTimestamp = 0,
					this._videoTimestamp = 0,
					this._times = {
						playInitStart: "",
						playStart: "",
						streamStart: "",
						streamResponse: "",
						demuxStart: "",
						decodeStart: "",
						videoStart: "",
						playTimestamp: "",
						streamTimestamp: "",
						streamResponseTimestamp: "",
						demuxTimestamp: "",
						decodeTimestamp: "",
						videoTimestamp: "",
						allTimestamp: ""
					},
					setTimeout(() = >{
						e()
					},
					0)
				})
			}
			pause() {
				return 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? this.close() : this._close()
			}
			mute(e) {
				this.audio && this.audio.mute(e)
			}
			resize() {
				this.video && this.video.resize()
			}
			startRecord(e, t) {
				this.recording || (this.recorder.setFileName(e, t), this.recording = !0)
			}
			stopRecordAndSave() {
				this.recording && (this.recording = !1)
			}
			_hasControl() {
				let e = !1,
				t = !1;
				return Object.keys(this._opt.operateBtns).forEach(e = >{
					this._opt.operateBtns[e] && (t = !0)
				}),
				(this._opt.showBandwidth || this._opt.text || t) && (e = !0),
				e = this._isPlayback() ? !0 : e
			}
			_isPlayback() {
				return this._opt.playType === m
			}
			_onlyMseOrWcsVideo() {
				return ! 1 === this._opt.hasAudio && (this._opt.useMSE || this._opt.useWCS && !this._opt.useOffscreen)
			}
			useWasmDecode() {
				return ! 1 === this._opt.useMSE && !1 === this._opt.useWCS
			}
			canVideoTrackWritter() {
				var e = this._opt;
				return ! e.isHls && !e.isWebrtc && (e.useWCS && !e.useOffscreen && e.wcsUseVideoRender || this.useWasmDecode())
			}
			checkHeart() {
				this.clearCheckHeartTimeout(),
				this.checkHeartTimeout()
			}
			checkHeartTimeout() {
				this._checkHeartTimeout = setTimeout(() = >{
					this.pause(!1).then(() = >{
						this.emit(v.timeout, v.delayTimeout),
						this.emit(v.delayTimeout)
					})
				},
				1e3 * this._opt.heartTimeout)
			}
			checkStatsInterval() {
				this._checkStatsInterval = setInterval(() = >{
					this.updateStats()
				},
				1e3)
			}
			clearCheckHeartTimeout() {
				this._checkHeartTimeout && (clearTimeout(this._checkHeartTimeout), this._checkHeartTimeout = null)
			}
			checkLoadingTimeout() {
				this._checkLoadingTimeout = setTimeout(() = >{
					this.pause(!1).then(() = >{
						this.emit(v.timeout, v.loadingTimeout),
						this.emit(v.loadingTimeout)
					})
				},
				1e3 * this._opt.loadingTimeout)
			}
			clearCheckLoadingTimeout() {
				this._checkLoadingTimeout && (clearTimeout(this._checkLoadingTimeout), this._checkLoadingTimeout = null)
			}
			clearStatsInterval() {
				this._checkStatsInterval && (clearInterval(this._checkStatsInterval), this._checkStatsInterval = null)
			}
			handleRender() {
				this.loading && (this.emit(v.start), this.loading = !1, this.clearCheckLoadingTimeout()),
				this.playing || (this.playing = !0),
				this.checkHeart()
			}
			updateStats(e) {
				e = e || {},
				this._startBpsTime || (this._startBpsTime = g()),
				s(e.ts) && (this._stats.ts = e.ts),
				s(e.buf) && (this._stats.buf = e.buf),
				e.fps && (this._stats.fps += 1),
				e.dfps && (this._stats.dfps += 1),
				e.abps && (this._stats.abps += e.abps),
				e.vbps && (this._stats.vbps += e.vbps);
				e = g();
				e - this._startBpsTime < 1e3 || (this.emit(v.stats, this._stats), this.emit(v.performance,
				function(e) {
					let t = 0;
					return 24 <= e ? t = 2 : 15 <= e && (t = 1),
					t
				} (this._stats.fps)), this._stats.fps = 0, this._stats.dfps = 0, this._stats.abps = 0, this._stats.vbps = 0, this._startBpsTime = e)
			}
			resetStats() {
				this._startBpsTime = null,
				this._stats = {
					buf: 0,
					fps: 0,
					dfps: 0,
					abps: 0,
					vbps: 0,
					ts: 0
				}
			}
			enableWakeLock() {
				this._opt.keepScreenOn && this.keepScreenOn && this.keepScreenOn.enable()
			}
			releaseWakeLock() {
				this._opt.keepScreenOn && this.keepScreenOn && this.keepScreenOn.disable()
			}
			handlePlayToRenderTimes() {
				const e = this._times;
				e.playTimestamp = e.playStart - e.playInitStart,
				e.streamTimestamp = e.streamStart - e.playStart,
				e.streamResponseTimestamp = e.streamResponse - e.streamStart,
				e.demuxTimestamp = e.demuxStart - e.streamResponse,
				e.decodeTimestamp = e.decodeStart - e.demuxStart,
				e.videoTimestamp = e.videoStart - e.decodeStart,
				e.allTimestamp = e.videoStart - e.playInitStart,
				this.emit(v.playToRenderTimes, e)
			}
			getOption() {
				return this._opt
			}
		}
		class Tt extends n {
			constructor(e) {
				super();
				let t = e,
				i = e.container;
				if (! (i = "string" == typeof e.container ? document.querySelector(e.container) : i)) throw new Error("Jessibuca need container option");
				if ("CANVAS" === i.nodeName || "VIDEO" === i.nodeName) throw new Error(`Jessibuca container type can not be $ {
					i.nodeName
				}
				type`);
				i.classList.add("jessibuca-container"),
				delete t.container,
				s(t.videoBuffer) && (t.videoBuffer = 1e3 * Number(t.videoBuffer)),
				s(t.timeout) && (c(t.loadingTimeout) && (t.loadingTimeout = t.timeout), c(t.heartTimeout) && (t.heartTimeout = t.timeout)),
				this._opt = t,
				this.$container = i,
				this._loadingTimeoutReplayTimes = 0,
				this._heartTimeoutReplayTimes = 0,
				this.events = new ie(this),
				this.debug = new te(this),
				this._initPlayer(i, t)
			}
			destroy() {
				this.events && (this.events.destroy(), this.events = null),
				this.player && (this.player.destroy(), this.player = null),
				this.$container = null,
				this._resetOpt(),
				this._loadingTimeoutReplayTimes = 0,
				this._heartTimeoutReplayTimes = 0,
				this.off()
			}
			_resetOpt() {
				this._opt = N
			}
			_initPlayer(e, t) {
				this.player = new St(e, t),
				this.debug.log("jessibuca", "_initPlayer", this.player.getOption()),
				this._bindEvents()
			}
			_resetPlayer() {
				var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
				this.player && (this.player.destroy(), this.player = null),
				this._opt = Object.assign(this._opt, e),
				this._opt.url = "",
				this._initPlayer(this.$container, this._opt)
			}
			_bindEvents() {
				Object.keys(u).forEach(t = >{
					this.player.on(u[t], e = >{
						this.emit(t, e)
					})
				})
			}
			getOption() {
				return this.player ? this.player.getOption() : {}
			}
			setDebug(e) {
				this.player.updateOption({
					debug: !!e
				})
			}
			mute() {
				this.player.mute(!0)
			}
			cancelMute() {
				this.player.mute(!1)
			}
			setVolume(e) {
				this.player.volume = e
			}
			audioResume() {
				this.player.audio && this.player.audio.audioEnabled(!0)
			}
			setTimeout(e) {
				e = Number(e),
				this.player.updateOption({
					timeout: e,
					loadingTimeout: e,
					heartTimeout: e
				})
			}
			setScaleMode(e) {
				let t = {
					isFullResize: !1,
					isResize: !1
				};
				switch (e = Number(e)) {
				case 0:
					t.isFullResize = !1,
					t.isResize = !1;
					break;
				case 1:
					t.isFullResize = !1,
					t.isResize = !0;
					break;
				case 2:
					t.isFullResize = !0,
					t.isResize = !0
				}
				this.player.updateOption(t),
				this.resize()
			}
			pause() {
				return this.player.pause()
			}
			close() {
				return this._resetOpt(),
				this.player.close()
			}
			clearView() {
				this.player.video && this.player.video.clearView()
			}
			play(i) {
				let r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				return new Promise((e, t) = >{
					if (!i && !this._opt.url) return this.emit(v.error, d.playError),
					void t();
					if (!this.player) return i ? this._play(i) : this._play(this._opt.url);
					if (i) {
						if (!this._opt.url) return this._play(i, r);
						i === this._opt.url ? this.player.playing ? e() : (this.clearView(), this.player.play(this._opt.url, this._opt.playOptions).then(() = >{
							e(),
							this.player.resumeAudioAfterPause()
						}).
						catch(() = >{
							this.player.pause().then(() = >{
								t()
							})
						})) : this.player.pause().then(() = >(this.clearView(), this._play(i, r))).
						catch(() = >{
							t()
						})
					} else this.player.play(this._opt.url, this._opt.playOptions).then(() = >{
						e(),
						this.player.resumeAudioAfterPause()
					}).
					catch(() = >{
						this.player.pause().then(() = >{
							t()
						})
					})
				})
			}
			playback(e, t) {
				return this._resetPlayer({
					videoBuffer: 0,
					playbackConfig: t,
					playType: m,
					useMSE: !1,
					useWCS: !1
				}),
				this.play(e)
			}
			forward(i) {
				return new Promise((e, t) = >{
					this.player.playing ? (i = y(Number(i), .1, 8), this.player.playback.setRate(i), this.player.video && this.player.video.setRate(i), this.player.audio && this.player.audio.setRate(i), this.player.decoderWorker && this.player.decoderWorker.updateWorkConfig({
						key: "playbackRate",
						value: i
					}), e()) : t()
				})
			}
			normal() {
				return new Promise((e, t) = >{
					this.player.playing ? (this.player.playback.setRate(1), this.player.video && this.player.video.setRate(1), this.player.audio && this.player.audio.setRate(1), this.player.decoderWorker && this.player.decoderWorker.updateWorkConfig({
						key: "playbackRate",
						value: 1
					}), e()) : t()
				})
			}
			updatePlaybackForwardMaxRateDecodeIFrame(e) {
				e = y(Number(e), 1, 8),
				this.player ? this.player.updateOption({
					playbackForwardMaxRateDecodeIFrame: e
				}) : this._opt.playbackForwardMaxRateDecodeIFrame = e
			}
			setStreamQuality(e) {
				this.player && this.player._opt.operateBtns.quality && (this.player._opt.qualityConfig || []).includes(e) && (this.player.streamQuality = e)
			}
			setPlaybackStartTime(e) {
				var t = de(e);
				t < 10 || this.player.playing && (10 === t && (e *= 1e3), this.player.video && this.player.video.clear(), this.player.audio && this.player.audio.clear(), this.player.playback.setStartTime(e), this.player.decoderWorker.clearWorkBuffer())
			}
			_play(l) {
				let c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				return new Promise((e, t) = >{
					var i = 0 === (this._opt.url = l).indexOf("http"),
					r = 0 === l.indexOf("webrtc"),
					s = 0 === l.indexOf("wt"),
					n = !r && -1 !== l.indexOf(".m3u8"),
					a = !r && -1 !== l.indexOf(".flv"),
					o = i ? n ? 3 : 2 : s ? 5 : r ? 4 : 1,
					i = i && !n || a || this._opt.isFlv ? M: n ? "hls": r ? "webrtc": s ? U: "m7s";
					if (a && !this._opt.isFlv && (this._opt.isFlv = !0), !o || !i) return t(`play protocol is $ {
						o
					},
					demuxType is` + i);
					n || r ? this._resetPlayer({
						protocol: o,
						demuxType: i,
						isHls: n,
						isWebrtc: r
					}) : this.player.updateOption({
						protocol: o,
						demuxType: i,
						isFlv: a
					}),
					this.player.once(d.webglAlignmentError, () = >{
						this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "webglAlignmentError"),
							this._resetPlayer({
								openWebglAlignment: !0
							}),
							this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "webglAlignmentError and play success")
							}).
							catch(() = >{
								this.player.debug.log("Jessibuca", "webglAlignmentError and play error")
							})
						})
					}),
					this.player.once(d.mediaSourceH265NotSupport, () = >{
						this.pause().then(() = >{
							this.player._opt.autoWasm && (this.player.debug.log("Jessibuca", "auto wasm [mse-> wasm] reset player and play"), this._resetPlayer({
								useMSE: !1
							}), this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "auto wasm [mse-> wasm] reset player and play success")
							}).
							catch(() = >{
								this.player.debug.log("Jessibuca", "auto wasm [mse-> wasm] reset player and play error")
							}))
						})
					}),
					this.player.once(d.mediaSourceFull, () = >{
						this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "media source full"),
							this._resetPlayer(),
							this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "media source full and reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "media source full and reset player and play error")
							})
						})
					}),
					this.player.once(d.mediaSourceAppendBufferError, () = >{
						this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "media source append buffer error"),
							this._resetPlayer(),
							this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "media source append buffer error and reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "media source append buffer error and reset player and play error")
							})
						})
					}),
					this.player.once(d.mediaSourceBufferListLarge, () = >{
						this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "media source buffer list large"),
							this._resetPlayer(),
							this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "media source buffer list large and reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "media source buffer list large and reset player and play error")
							})
						})
					}),
					this.player.once(d.mediaSourceAppendBufferEndTimeout, () = >{
						this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "media source append buffer end timeout"),
							this._resetPlayer(),
							this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "media source append buffer end timeout and reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "media source append buffer end timeout and reset player and play error")
							})
						})
					}),
					this.player.once(d.mseSourceBufferError, () = >{
						this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "mseSourceBufferError close success")
						})
					}),
					this.player.once(d.webcodecsH265NotSupport, () = >{
						this.pause().then(() = >{
							this.player._opt.autoWasm && (this.player.debug.log("Jessibuca", "auto wasm [wcs-> wasm] reset player and play"), this._resetPlayer({
								useWCS: !1
							}), this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "auto wasm [wcs-> wasm] reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "auto wasm [wcs-> wasm] reset player and play error")
							}))
						})
					}),
					this.player.once(d.webcodecsWidthOrHeightChange, () = >{
						this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "webcodecs Width Or Height Change reset player and play"),
							this._resetPlayer({
								useWCS: !0
							}),
							this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "webcodecs Width Or Height Change reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "webcodecs Width Or Height Change reset player and play error")
							})
						})
					}),
					this.player.once(d.webcodecsDecodeError, () = >{
						this.pause().then(() = >{
							this.player._opt.autoWasm && (this.player.debug.log("Jessibuca", "webcodecs decode error reset player and play"), this._resetPlayer({
								useWCS: !1
							}), this.play(l).then(() = >{
								this.player.debug.log("Jessibuca", "webcodecs decode error  reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "webcodecs decode error reset player and play error")
							}))
						})
					}),
					this.player.once(d.wasmDecodeError, () = >{
						this.player._opt.wasmDecodeErrorReplay && this.pause().then(() = >{
							this.player.debug.log("Jessibuca", "wasm decode error and reset player and play"),
							this._resetPlayer({
								useWCS: !1
							}),
							this.play(l, c).then(() = >{
								this.player.debug.log("Jessibuca", "wasm decode error and reset player and play success")
							}).
							catch(() = >{
								this.player.debug.warn("Jessibuca", "wasm decode error and reset player and play error")
							})
						})
					}),
					this.player.on(v.delayTimeout, () = >{
						this.player._opt.heartTimeoutReplay && (this._heartTimeoutReplayTimes < this.player._opt.heartTimeoutReplayTimes || -1 === this.player._opt.heartTimeoutReplayTimes) && (this.player.debug.log("Jessibuca", "delay timeout replay time is " + this._heartTimeoutReplayTimes), this._heartTimeoutReplayTimes += 1, this.play(l, c).then(() = >{
							this._heartTimeoutReplayTimes = 0
						}).
						catch(() = >{}))
					}),
					this.player.on(v.loadingTimeout, () = >{
						this.player._opt.loadingTimeoutReplay && (this._loadingTimeoutReplayTimes < this.player._opt.loadingTimeoutReplayTimes || -1 === this.player._opt.loadingTimeoutReplayTimes) && (this.player.debug.log("Jessibuca", "loading timeout replay time is " + this._loadingTimeoutReplayTimes), this._loadingTimeoutReplayTimes += 1, this.play(l, c).then(() = >{
							this._loadingTimeoutReplayTimes = 0
						}).
						catch(() = >{}))
					}),
					this.hasLoaded() ? this.player.play(l, c).then(() = >{
						e()
					}).
					catch(() = >{
						this.player.pause().then(() = >{
							t()
						})
					}) : this.player.once(v.decoderWorkerInit, () = >{
						this.player.play(l, c).then(() = >{
							e()
						}).
						catch(() = >{
							this.player.pause().then(() = >{
								t()
							})
						})
					})
				})
			}
			resize() {
				this.player.resize()
			}
			setBufferTime(e) {
				e = Number(e),
				this.player.updateOption({
					videoBuffer: 1e3 * e
				}),
				this.player.decoderWorker && this.player.decoderWorker.updateWorkConfig({
					key: "videoBuffer",
					value: 1e3 * e
				})
			}
			setRotate(e) {
				e = parseInt(e, 10),
				this._opt.rotate !== e && -1 !== [0, 90, 180, 270].indexOf(e) && (this.player.updateOption({
					rotate: e
				}), this.resize())
			}
			hasLoaded() {
				return this.player && this.player.loaded || !1
			}
			setKeepScreenOn() {
				this.player.updateOption({
					keepScreenOn: !0
				})
			}
			setFullscreen(e) {
				e = !!e;
				this.player.fullscreen !== e && (this.player.fullscreen = e)
			}
			screenshot(e, t, i, r) {
				return this.player.video ? this.player.video.screenshot(e, t, i, r) : null
			}
			screenshotWatermark(e) {
				return this.player.video ? this.player.video.screenshotWatermark(e) : null
			}
			startRecord(i, r) {
				return new Promise((e, t) = >{
					this.player.playing ? (this.player.startRecord(i, r), e()) : t()
				})
			}
			stopRecordAndSave() {
				this.player.recording && this.player.stopRecordAndSave()
			}
			isPlaying() {
				return !! this.player && this.player.playing
			}
			isMute() {
				return ! this.player.audio || this.player.audio.isMute
			}
			isRecording() {
				return this.player.recorder && this.player.recorder.recording || !1
			}
			getDecodeType() {
				let e = "";
				var t;
				return this.player && ((t = this.player.getOption()).useMSE && (e += "mse "), t.useWCS && (e += "wcs "), t.useWasm && (e += "wasm "), t.useSIMD && (e += "simd "), t.useOffscreen && (e += "offscreen ")),
				e
			}
		}
		return window.JessibucaPro = Tt
	});