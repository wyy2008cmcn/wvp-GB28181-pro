<template>
  <div ref="container" class="container" :class="isAmd ? '' : 'isamd'" @dblclick="fullscreenSwich" style="width:100%;height:100%;background-color: #000000;margin:0 auto;">
    <!-- <div class="buttons-box" id="buttonsBox">
      <div class="buttons-box-left">
        <i v-if="!playing" class="iconfont icon-play jessibuca-btn" @click="playBtnClick"></i>
        <i v-if="playing" class="iconfont icon-pause jessibuca-btn" @click="pause"></i>
        <i class="iconfont icon-stop jessibuca-btn" @click="destroy"></i>
        <i v-if="isNotMute" class="iconfont icon-audio-high jessibuca-btn" @click="mute()"></i>
        <i v-if="!isNotMute" class="iconfont icon-audio-mute jessibuca-btn" @click="cancelMute()"></i>
      </div>
      <div class="buttons-box-right">
        <span class="jessibuca-btn">{{ kBps }} kb/s</span>
        <i class="iconfont icon-camera1196054easyiconnet jessibuca-btn" @click="screenshot"
           style="font-size: 1rem !important"></i>
        <i class="iconfont icon-shuaxin11 jessibuca-btn" @click="playBtnClick"></i>
        <i v-if="!fullscreen" class="iconfont icon-weibiaoti10 jessibuca-btn" @click="fullscreenSwich"></i>
        <i v-if="fullscreen" class="iconfont icon-weibiaoti11 jessibuca-btn" @click="fullscreenSwich"></i>
      </div>
    </div> -->
  </div>
</template>

<script>
let jessibucaPlayer = window.jessibucaPlayer = {};
export default {
  name: 'jessibuca',
  data() {
    return {
      playing: false,
      isNotMute: false,
      quieting: false,
      fullscreen: false,
      loaded: false, // mute
      speed: 0,
      performance: "", // 工作情况
      kBps: 0,
      btnDom: null,
      videoInfo: null,
      volume: 1,
      rotate: 0,
      vod: true, // 点播
      forceNoOffscreen: false,
      flvPlayer: null
    };
  },
  props: ['videoUrl', 'error', 'hasAudio', 'height'],
  mounted() {
    window.onerror = (msg) => {
      // console.error(msg)
    };
    console.log(this._uid)
    let paramUrl = decodeURIComponent(this.$route.params.url)
    this.$nextTick(() => {
      this.updatePlayerDomSize()
      window.onresize = () => {
        this.updatePlayerDomSize()
      }
      if (typeof (this.videoUrl) == "undefined") {
        this.videoUrl = paramUrl;
      }
      this.btnDom = document.getElementById("buttonsBox");
      console.log("初始化时的地址为: " + this.videoUrl)
      this.play(this.videoUrl)
    })
  },
  watch: {
    videoUrl(newData, oldData) {
      this.play(newData)
    },
    immediate: true
  },
  computed: {
    isAmd() {
      var canvas = document.createElement('canvas'),
      gl = canvas.getContext('experimental-webgl'),
      debugInfo = gl.getExtension('WEBGL_debug_renderer_info'),
      gpuInfo = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      return /Vulkan/.test(gpuInfo)
    }
  },
  methods: {
    screenshot() {
      if (jessibucaPlayer[this._uid]) jessibucaPlayer[this._uid].screenshot('截图','png',0.5)
    },
    updatePlayerDomSize() {
      let dom = this.$refs.container;
      let width = dom.parentNode.clientWidth
      let height = (9 / 16) * width

      const clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      if (height > clientHeight) {
        height = clientHeight
        width = (16 / 9) * height
      }

      dom.style.width = width + 'px';
      dom.style.height = height + "px";
      // canvas.style.transform = `${canvas.style.transform}`
    },
    create() {
      const showOperateBtns = true
      const forceNoOffscreen = true; //
      let options = {
        isResize: true,
        text: "",
        loadingText: "加载中",
        debug: true,
        showBandwidth: showOperateBtns, // 显示网速
        operateBtns: {
            fullscreen: showOperateBtns,
            screenshot: showOperateBtns,
            play: showOperateBtns,
            audio: showOperateBtns,
            ptz: showOperateBtns,
            quality: showOperateBtns,
        },
        qualityConfig: ['普清', '高清', '超清', '4K', '8K'],
        forceNoOffscreen: forceNoOffscreen,
        wasmUseVideoRender: true,
        isNotMute: false,
        heartTimeout: 10,
      };
      console.log("hasAudio  " + this.hasAudio)

      jessibucaPlayer[this._uid] = new window.JessibucaPro(Object.assign(
        {
          container: this.$refs.container,
          videoBuffer: 0.2, // 最大缓冲时长，单位秒
          decoder: "static/js/jessibuca-pro/decoder-pro-simd.js",
          // isResize: false,
          // showBandwidth: true,
          // // isFlv: true,
          // // useMSE:false,
          // // text: "WVP-PRO",
          // // background: "static/images/zlm-logo.png",
          // loadingText: "加载中",
          // hasAudio: typeof (this.hasAudio) == "undefined" ? true : this.hasAudio,
          // debug: false,
          // supportDblclickFullscreen: false, // 是否支持屏幕的双击事件，触发全屏，取消全屏事件。
          // operateBtns: {
          //   fullscreen: true,
          //   screenshot: true,
          //   play: true,
          //   audio: true,
          //   recorder: true,
          // },
          // record: "record",
          // vod: this.vod,
          // forceNoOffscreen: this.forceNoOffscreen,
          // wasmUseVideoRender: true,
          // isNotMute: this.isNotMute,
          // rotate: this.isAmd ? "1,0,0,180deg" : '' // 改写了源码，rotate接收 rotate3d属性参数
        },
        options
      ));
      let jessibuca = jessibucaPlayer[this._uid];
      let _this = this;
      // jessibuca.on("load", function () {
      //   console.log("on load init");
      // });

      // jessibuca.on("log", function (msg) {
      //   console.log("on log", msg);
      // });
      // jessibuca.on("record", function (msg) {
      //   console.log("on record:", msg);
      // });
      jessibuca.on("pause", function () {
        _this.playing = false;
      });
      jessibuca.on("play", function () {
        _this.playing = true;
        const canvas = _this.$refs.container.querySelector('canvas')
        
        console.log('------canvas', canvas && canvas.style && canvas.style.transform)
      });
      jessibuca.on("fullscreen", function (msg) {
        console.log("on fullscreen", msg);
        _this.fullscreen = msg
      });

      jessibuca.on("mute", function (msg) {
        console.log("on mute", msg);
        _this.isNotMute = !msg;
      });
      // jessibuca.on("audioInfo", function (msg) {
      //   // console.log("audioInfo", msg);
      // });

      jessibuca.on("videoInfo", function (msg) {
        // this.videoInfo = msg;
        console.log("videoInfo", msg);

      });

      // jessibuca.on("bps", function (bps) {
      //   // console.log('bps', bps);

      // });
      let _ts = 0;
      // jessibuca.on("timeUpdate", function (ts) {
      //   // console.log('timeUpdate,old,new,timestamp', _ts, ts, ts - _ts);
      //   _ts = ts;
      // });
      jessibuca.on("error", function (error) {
        console.log("error", error);
        _this.destroy()
      });

      jessibuca.on("timeout", function () {
        console.log("timeout");
        _this.destroy()
      });

      // jessibuca.on('start', function () {
      //   console.log('start');
      // })

      jessibuca.on("performance", function (performance) {
        let show = "卡顿";
        if (performance === 2) {
          show = "非常流畅";
        } else if (performance === 1) {
          show = "流畅";
        }
        _this.performance = show;
        console.log('------performance', show)
      });
      // jessibuca.on('buffer', function (buffer) {
      //   // console.log('buffer', buffer);
      // })

      jessibuca.on('stats', function (stats) {
        console.log('stats is', stats);
      })

      // jessibuca.on('kBps', function (kBps) {
      //   _this.kBps = Math.round(kBps);
      //   console.log('网速 kBps', kBps)
      // });

      // // 显示时间戳 PTS
      // jessibuca.on('videoFrame', function () {

      // })

      // //
      // jessibuca.on('metadata', function () {

      // });
    },
    playBtnClick: function (event) {
      this.play(this.videoUrl)
    },
    play: function (url) {
      console.log(url)
      url = url.replace("192.168.6.248", "36.26.10.190");
      console.log("replace"+url)
      if (jessibucaPlayer[this._uid]) {
        this.destroy();
      }
      this.create();
      jessibucaPlayer[this._uid].on("play", () => {
        this.playing = true;
        this.loaded = true;
        this.quieting = jessibucaPlayer[this._uid].quieting;
      });
      if (jessibucaPlayer[this._uid].hasLoaded()) {
        jessibucaPlayer[this._uid].play(url);
      } else {
        jessibucaPlayer[this._uid].on("load", () => {
          console.log("load 播放")
          jessibucaPlayer[this._uid].play(url);
        });
      }
    },
    pause: function () {
      if (jessibucaPlayer[this._uid]) {
        jessibucaPlayer[this._uid].pause && jessibucaPlayer[this._uid].pause();
      }
      this.playing = false;
      this.err = "";
      this.performance = "";
    },
    mute: function () {
      if (jessibucaPlayer[this._uid]) {
        jessibucaPlayer[this._uid].mute();
      }
    },
    cancelMute: function () {
      if (jessibucaPlayer[this._uid]) {
        jessibucaPlayer[this._uid].cancelMute();
      }
    },
    destroy: function () {
      if (jessibucaPlayer[this._uid]) {
        jessibucaPlayer[this._uid].destroy();
      }
      // if (document.getElementById("buttonsBox") == null) {
      //   this.$refs.container.appendChild(this.btnDom)
      // }
      jessibucaPlayer[this._uid] = null;
      this.playing = false;
      this.err = "";
      this.performance = "";

    },
    eventcallbacK: function (type, message) {
      // console.log("player 事件回调")
      // console.log(type)
      // console.log(message)
    },
    fullscreenSwich: function () {
      let isFull = this.isFullscreen()
      jessibucaPlayer[this._uid].setFullscreen(!isFull)
      this.fullscreen = !isFull;
    },
    isFullscreen: function () {
      return document.fullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement || false;
    }
  },
  destroyed() {
    if (jessibucaPlayer[this._uid]) {
      jessibucaPlayer[this._uid].destroy();
      jessibucaPlayer[this._uid] = null
    }
    this.playing = false;
    this.loaded = false;
    this.performance = "";
  },
}
</script>

<style>
/* .buttons-box {
  width: 100%;
  height: 28px;
  background-color: rgba(43, 51, 63, 0.7);
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  left: 0;
  bottom: 0;
  user-select: none;
  z-index: 10;
}

.jessibuca-btn {
  width: 20px;
  color: rgb(255, 255, 255);
  line-height: 27px;
  margin: 0px 10px;
  padding: 0px 2px;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem !important;
}

.buttons-box-right {
  position: absolute;
  right: 0;
} */

/* .container.isamd .video-box{
  transform: rotateX(180deg);
} */
</style>
