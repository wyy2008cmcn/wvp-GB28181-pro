<template>
  <div class="monitor-page">
  <el-row :gutter="10">
    <el-col :span="12">
    <div class="page-left">
      <div class="page-filter">
          <el-form ref="submitForm" :model="submitParams" inline>
            <el-form-item label="录像机" prop="deviceId" :rules="[
              { required: true, message: '请选择', trigger: 'blur' },
            ]">
              <el-select v-model="submitParams.deviceId" @change="handelChangeDeviceId" filterable placeholder="请选择">
                <el-option
                  v-for="item in deviceList"
                  :key="item.deviceId"
                  :label="item.name"
                  :value="item.deviceId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="摄像头" prop="channelId" :rules="[
              { required: true, message: '请选择', trigger: 'blur' },
            ]">
              <el-select v-model="submitParams.channelId" filterable placeholder="请先选择录像机">
                <el-option
                  v-for="item in deviceChannelList"
                  :key="item.channelId"
                  :label="item.name"
                  :value="item.channelId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="单号" prop="billCode" :rules="[
              { required: true, message: '请填写', trigger: 'blur' },
            ]">
              <el-input v-model="submitParams.billCode" placeholder="单号" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :loading="submitLoading" @click="onSubmit">确认</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="billcode-collapse">
          <el-collapse accordion>
            <el-collapse-item v-for="data in billCodeListData" :key="data.billCode" :title="data.billCode" :name="data.billCode">
            <el-form ref="playerform" :model="billCodePlayerParams" size="mini" inline>
              <el-form-item label="提前时间(秒)" prop="before">
                <el-input-number v-model="billCodePlayerParams.before" :min="0" :step="1" :precision="0" />
              </el-form-item>
              <el-form-item label="查看时间(秒)" prop="time">
                <el-input-number v-model="billCodePlayerParams.after" :min="0" :step="1" :precision="0" />
              </el-form-item>
            </el-form>
            <div v-for="(tracklog, index) in data.tracklog" :key="'button' + index" style="margin-bottom: 10px; text-align: left">
              <el-button type="primary" size="mini" @click="byBillCodePlay(tracklog)">
                {{ tracklog.info }}： {{ tracklog.scanTime }}
              </el-button>
            </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="dateRange">
          <el-date-picker
            @change="playByDateRange"
            v-model="dateRangeValue.date"
            type="date"
            :picker-options="datePickerOptions"
            placeholder="选择日期">
          </el-date-picker>
          <el-time-picker
            is-range
            @change="playByDateRange"
            v-model="dateRangeValue.time"
            range-separator="To"
            start-placeholder="开始时间"
            end-placeholder="结束时间">
          </el-time-picker>
        </div>

<!--        <el-carousel :interval="5000" arrow="always">-->
<!--          <el-carousel-item v-for="item in 4" :key="item">-->
<!--            <h3>{{ item }}</h3>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
      </div>
    </el-col>

    <el-col :span="12" style="margin-right: 0;">
    <div class="page-right">
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
    </el-col>
  </el-row>
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
      datePickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      dateRangeValue: {},
      deviceList: [],
      deviceChannelList: [],
      billCodeListData: [],
      submitLoading: false,
      loading: false,
      activeIndex: -1,
      player: {
        jessibuca: ["ws_flv", "wss_flv"],
        webRTC: ["rtc", "rtc"],
      },
      billCodePlayerParams: {
        after: 600,
        before: 5
      },
      submitParams: {
        deviceId: '',
        channelId: '',
        billCode: ''
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
  mounted() {
    this.getDeviceList()
  },
  methods: {
    getDeviceList: function () {
      let that = this;
      this.$axios({
        method: 'get',
        url: `/api/device/query/devices`,
        params: {
          page: 1,
          count: 200
        }
      }).then(function (res) {
        that.deviceList = res.data.list;
        if(!that.submitParams.deviceId) {
          that.submitParams.deviceId = res.data.list[0].deviceId
          that.getDeviceChannelList()
        }
      }).catch(function (error) {
        console.error(error);
      });
    },
    getDeviceChannelList: function () {
      let that = this;
      if (!this.submitParams.deviceId) return;
      this.$axios({
        method: 'get',
        url: `/api/device/query/devices/${this.submitParams.deviceId}/channels`,
        params: {
          page: 1,
          count: 200,
        }
      }).then(function (res) {
        that.deviceChannelList = res.data.list;
        if(!that.submitParams.channelId) {
          that.submitParams.channelId = res.data.list[0].channelId
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    handelChangeDeviceId: function() {
      this.submitParams.channelId = ''
      this.getDeviceChannelList()
    },
    onSubmit: function () {
      this.$refs.submitForm.validate((valid) => {
        if(valid) {
          this.stopPlayRecord()
          this.submitLoading = true
          this.$axios({
            method: 'get',
            url: '/api/playback/byBillCode/' + this.submitParams.billCode + '/' + this.submitParams.deviceId + "/" + this.submitParams.channelId
          }).then((res) => {
            // console.log('byBillCode', res)
            this.submitLoading = false
            this.billCodeListData = res.data||[];
          }, (err) => {
            console.log('------err', err)
            this.submitLoading = false
            this.$message.error(err.msg || err.message || '单号有误，请检查单号是否正确')
          });
        } else {

        }
      })
      return
      if (!this.submitParams.billCode.length || /^\s+$/.test(this.submitParams.billCode)) {
        this.$message.warning('请先填写单号')
        return
      }
      // console.log("device palyer onSubmit");
      // console.log(this.billCode);
      // console.log(this.deviceId)
      // console.log(this.channelId)
      

    },
    search() {
      if (!this.params.billCode.length || /^\s+$/.test(this.params.billCode)) {
        this.$message.warning('请先填写单号')
        return
      }
      this.stopPlayRecord()

      const that = this
      // console.log(this.params)
      that.loading = true;
      this.$axios({
        method: 'get',
        url: '/api/trace-bill-video/byBillCode/' + this.params.billCode
      }).then(function (res) {
        // console.log(res)
        if (res.status === 200) {
          // 处理时间信息
          that.list = res.data;

          that.list.forEach((val, idx, array) => {
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
    playByDateRange: function() {
      if(this.dateRangeValue && this.dateRangeValue.date && this.dateRangeValue.time) {
        const date = dayjs(this.dateRangeValue.date).format('YYYY-MM-DD')

        this.playRecord({
          ...this.submitParams,
          startTime: date + ' ' + dayjs(this.dateRangeValue.time[0]).format('HH:mm:ss'),
          endTime: date + ' ' + dayjs(this.dateRangeValue.time[1]).format('HH:mm:ss'),
        })
      }

    },
    byBillCodePlay: function (item) {
      var row = {
        ...this.submitParams,
        startTime: dayjs(dayjs(item.scanTime).subtract(this.billCodePlayerParams.before, 's')).format('YYYY-MM-DD HH:mm:ss'),
        endTime: dayjs(dayjs(item.scanTime).add(this.billCodePlayerParams.after, 's')).format('YYYY-MM-DD HH:mm:ss'),

      }
      this.playRecord(row);
    },
    playRecord(row) {
      let that = this;
      let startTime = row.startTime
      this.recordStartTime = row.startTime
      this.showTimeText = row.startTime.split(" ")[1]
      let endtime = row.endTime
      this.sliderTime = 0;
      this.seekTime = new Date(endtime).getTime() - new Date(startTime).getTime();
      if (that.streamId != "") {
        that.stopPlayRecord(row, function () {
          that.streamId = "";
          that.playRecord(row);
        })
      } else {
        this.$axios({
          method: 'get',
          url: '/api/playback/start/' + row.deviceId + '/' + row.channelId + '?startTime=' + row.startTime + '&endTime=' +
            row.endTime
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
    stopPlayRecord: function (row, callback) {
      this.$refs.jessibuca.pause();
      this.videoUrl = '';
      this.activeIndex = ''

      if(this.streamId && row && row.deviceId && row.channelId) {
        this.$axios({
          method: 'get',
          url: '/api/playback/stop/' + row.deviceId + "/" + row.channelId + "/" + this.streamId
        }).then(function (res) {
          if (callback) callback()
        });
      }
    },
    handleItemClick(row, index) {
      this.activeIndex = index

      // let that = this;
      // let startTime = dayjs(row.dateTime).subtract(this.params.before, 's')
      // this.recordStartTime = row.dateTime
      // this.showTimeText = row.dateTime.split(" ")[1]
      // let endTime = dayjs(row.dateTime).add(this.params.after, 's')
      // this.sliderTime = 0;
      // this.seekTime = new Date(endTime).getTime() - new Date(startTime).getTime();

      this.playRecord({
        deviceId: row.deviceId,
        channelId: row.channelId,
        startTime: dayjs(dayjs(row.dateTime).subtract(this.params.before, 's')).format('YYYY-MM-DD HH:mm:ss'),
        endTime: dayjs(dayjs(row.dateTime).add(this.params.after, 's')).format('YYYY-MM-DD HH:mm:ss')
      });

      // this.$axios({
      //   method: 'get',
      //   url: '/api/playback/start/' + row.deviceId + '/' + row.channelId + '?startTime=' +  dayjs(startTime).format('YYYY-MM-DD HH:mm:ss') + '&endTime=' +
      //     dayjs(endTime).format('YYYY-MM-DD HH:mm:ss')
      // }).then(function (res) {
      //   that.streamInfo = res.data;
      //   that.app = that.streamInfo.app;
      //   that.streamId = that.streamInfo.stream;
      //   that.mediaServerId = that.streamInfo.mediaServerId;
      //   that.ssrc = that.streamInfo.ssrc;
      //   that.videoUrl = that.getUrlByStreamInfo();
      //   that.recordPlay = true;
      // });
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
.monitor-page{
  width: 100%;
  text-align: left;
  // height: calc(100vh - 80px);
  // overflow: hidden;
  display: flex;
  justify-content: space-between;
}

.page-left {
  width: 100%;
}

.page-right {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}

.dateRange {
  margin-top: 20px;
  margin-bottom: 20px;
}

.page-filter{
  background-color: #FFFFFF;
  padding: 16px 16px 0 16px;
  text-align: left;
}

.el-collapse-item__content {
  overflow-x: scroll;
}

.page-result{}

.page-result .list,
.page-result .list .scrollbar{
  width: 100%;
  white-space: nowrap;
}

.page-content{
  flex: 1;
  min-height: 350px;
}

.page-content .jessibuca-container{
  width: 100%!important;
  height: 100%!important;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
