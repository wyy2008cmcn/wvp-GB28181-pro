<template>
  <div class="page">
    <div class="page-filter">
      <el-form ref="form" :model="params" inline>
        <el-form-item label="单号" prop="billCode">
          <el-input v-model="params.billCode" placeholder="单号" />
        </el-form-item>
        <el-form-item label="提前时间(秒)" prop="before">
          <el-input-number v-model="params.before" :min="0" :step="1" :precision="0" />
        </el-form-item>
        <el-form-item label="查看时间(秒)" prop="time">
          <el-input-number v-model="params.after" :min="0" :step="1" :precision="0" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-result">
      <el-card header="视频数据" shadow="never">
        <div class="list">
          <el-scrollbar class="scrollbar">
            <el-button 
              v-for="(item, index) in list"
              :key="index"
              :type="activeIndex === index ? 'primary' : 'default'"
              @click="handleItemClick(item, index)"
            >
              {{ item.typeDesc }}<br />{{ item.dateTime }}
            </el-button>
          </el-scrollbar>
        </div>
      </el-card>
    </div>
    <div class="page-content">
      <jessibucaPlayer
        ref="jessibuca"
        :videoUrl="videoUrl"
        :hasAudio="hasAudio"
        fluent
        autoplay
        live
      ></jessibucaPlayer>
    </div>
  </div>
</template>

<script>

import dayjs from 'dayjs'
import jessibucaPlayer from './common/jessibuca.vue'
var customParseFormat = require('dayjs/plugin/customParseFormat')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

const tz = dayjs.tz.guess()

export default {
  components: {
    jessibucaPlayer
},
  data() {
    return {
      loading: false,
      activeIndex: -1,
      player: {
        jessibuca: ["ws_flv", "wss_flv"],
        webRTC: ["rtc", "rtc"],
      },
      params: {
        billCode: '',
        after: 600,
        before: 5
      },
      list: [],
      videoUrl: '',
      hasAudio: false,
      streamInfo: null,
      isLoging: false,
      ssrc: false,
      streamId: '',
      app: '',
      mediaServerId: '',
      convertKey: '',
      deviceId: '',
      channelId: '',
    }
  },
  methods: {
    search() {

      if (!this.params.billCode.length || /^\s+$/.test(this.params.billCode)) {
        this.$message.warning('请先填写单号')
        return
      }
      this.stopPlayRecord()

      const that = this
      console.log(this.params)
      that.loading = true;
      this.$axios({
        method: 'get',
        url: '/api/trace-bill-video/byBillCode/' + this.params.billCode
      }).then(function (res) {
        console.log(res)
        if (res.status === 200) {
          // 处理时间信息
          that.list = res.data;

          that.list.forEach((val, idx, array) => {
            // cst 时区：https://datetime360.com/cn/Beijing-cst-cuba-time/
            val.dateTime = dayjs(val.dateTime).subtract(14, 'hour').format('YYYY-MM-DD HH:mm:ss')
          });

        } else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: "error",
          });
        }

      }).catch(function (e) {
        console.log(e.message);
      }).finally(() => {
        that.loading = false;
      });
    },
    stopPlayRecord: function (callback) {
      this.$refs.jessibuca.pause();
      this.videoUrl = '';
      // this.$axios({
      //   method: 'get',
      //   url: '/api/playback/stop/' + this.deviceId + "/" + this.channelId + "/" + this.streamId
      // }).then(function (res) {
      //   if (callback) callback()
      // });
    },
    handleItemClick(row, index) {
      this.activeIndex = index
      let that = this;
      let startTime = dayjs(row.dateTime).subtract(this.params.before, 's')
      this.recordStartTime = row.dateTime
      this.showTimeText = row.dateTime.split(" ")[1]
      let endTime = dayjs(row.dateTime).add(this.params.after, 's')
      this.sliderTime = 0;
      this.seekTime = new Date(endTime).getTime() - new Date(startTime).getTime();

      this.$axios({
        method: 'get',
        url: '/api/playback/start/' + row.deviceId + '/' + row.channelId + '?startTime=' +  dayjs(startTime).format('YYYY-MM-DD HH:mm:ss') + '&endTime=' +
          dayjs(endTime).format('YYYY-MM-DD HH:mm:ss')
      }).then(function (res) {
        that.streamInfo = res.data;
        that.app = that.streamInfo.app;
        that.streamId = that.streamInfo.stream;
        that.mediaServerId = that.streamInfo.mediaServerId;
        that.ssrc = that.streamInfo.ssrc;
        that.videoUrl = that.getUrlByStreamInfo();
        that.recordPlay = true;
      });
    },
    play(streamInfo, hasAudio) {
      this.streamInfo = streamInfo;
      this.hasAudio = hasAudio;
      this.isLoging = false;
      this.videoUrl = this.getUrlByStreamInfo();
      this.streamId = streamInfo.stream;
      this.mediaServerId = streamInfo.mediaServerId;
      this.playFromStreamInfo(false, streamInfo)
    },
    getUrlByStreamInfo() {
      if (location.protocol === "https:") {
        this.videoUrl = this.streamInfo[this.player.jessibuca[1]]
      } else {
        this.videoUrl = this.streamInfo[this.player.jessibuca[0]]
      }
      return this.videoUrl;
    },
    playFromStreamInfo (realHasAudio, streamInfo) {
      this.hasAudio = realHasAudio && this.hasAudio;
      this.$refs.jessibuca.play(this.getUrlByStreamInfo(streamInfo))
    }
  }
}
</script>

<style>
.page{
  width: 100%;
  text-align: left;
  height: calc(100vh - 80px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.page-filter{
  background-color: #FFFFFF;
  padding: 16px 16px 0 16px;
  text-align: left;
}

.page-result{}

.page-result .list,
.page-result .list .scrollbar{
  width: 100%;
  white-space: nowrap;
}

.page-content{
  flex: 1;
}

.page-content .jessibuca-container{
  width: 100%!important;
  height: 100%!important;
}
</style>
