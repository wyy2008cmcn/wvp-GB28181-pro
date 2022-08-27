<template>
  <div class="page">
    <div class="page-filter">
      <el-form ref="form" :model="params" inline>
        <el-form-item label="单号" prop="orderNo">
          <el-input v-model="params.orderNo" placeholder="单号" />
        </el-form-item>
        <el-form-item label="提前时间" prop="before">
          <el-input-number v-model="params.before" :min="0" :step="1" :precision="0" />
        </el-form-item>
        <el-form-item label="查看时间" prop="time">
          <el-input-number v-model="params.time" :min="0" :step="1" :precision="0" />
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
              {{ item.name }}<br />{{item.startTime}}
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
import jessibucaPlayer from './common/jessibuca.vue'
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
        orderNo: '',
        time: undefined,
        before: undefined
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
      deviceId: '34020000001160000001',
      channelId: '34020000001310000010',
    }
  },
  methods: {
    search() {
      const that = this
      const startTime = "2022-08-27 00:00:00";
      const endTime = "2022-08-27 23:59:59";
      that.loading = true;
      this.$axios({
        method: 'get',
        url: '/api/gb_record/query/' + this.deviceId + '/' + this.channelId + '?startTime=' + startTime + '&endTime=' + endTime
      }).then(function (res) {
        console.log(res)
        if (res.data.code === 0) {
          // 处理时间信息
          that.list = res.data.data.recordList;
          console.log('-----list', that.list)
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
    handleItemClick(row, index) {
      this.activeIndex = index
      let that = this;

      let startTime = row.startTime
      this.recordStartTime = row.startTime
      this.showTimeText = row.startTime.split(" ")[1]
      let endtime = row.endTime
      this.sliderTime = 0;
      this.seekTime = new Date(endtime).getTime() - new Date(startTime).getTime();
      console.log(this.seekTime)
      if (that.streamId != "") {
        that.stopPlayRecord(function () {
          that.streamId = "";
          that.playRecord(row);
        })
      } else {
        const param = {
          startTime: row.startTime,
          endTime: row.endTime
        }
        this.$axios({
          method: 'get',
          url: `/api/playback/start/${this.deviceId}/${this.channelId}`,
          params: param
        }).then(function (res) {
          that.streamInfo = res.data;
          that.app = that.streamInfo.app;
          that.streamId = that.streamInfo.stream;
          that.mediaServerId = that.streamInfo.mediaServerId;
          that.ssrc = that.streamInfo.ssrc;
          that.videoUrl = that.getUrlByStreamInfo();
          that.recordPlay = true;
        });
      }
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
