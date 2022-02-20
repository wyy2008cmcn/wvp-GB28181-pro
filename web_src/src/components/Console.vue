<template>
<div id="app">
    <el-container>
        <el-header>
            <uiHeader></uiHeader>
        </el-header>
        <el-main>
            <div style="background-color: #FFFFFF; margin-bottom: 1rem; position: relative; padding: 0.5rem; text-align: left;">
                <span style="font-size: 1rem; font-weight: bold;">控制台</span>
                <div style="position: absolute; right: 17rem; top: 0.3rem;">

                </div>
            </div>

            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="control-table" id="cpuInfo">cpuTable</div>
                </el-col>
                <el-col :span="12">
                    <div class="control-table" id="memInfo">memTable</div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="control-table" id="loadInfo">table3</div>
              </el-col>
              <el-col :span="12">
                <div class="control-table" id="netInfo">table4</div>
              </el-col>
            </el-row>
        </el-main>
    </el-container>

</div>
</template>

<script>
import uiHeader from './UiHeader.vue'

import echarts from 'echarts';
export default {
    name: 'app',
    components: {
        echarts,
        uiHeader
    },
    data() {
        return {
            cpuTable: {
              chart: null,
              option: {
                title: {
                  text: 'CPU信息'
                },
                legend: {
                  type: 'scroll'
                },
                dataZoom: {
                  show: false,
                  start: 0,
                  end: 100
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: true,
                  nameLocation: 'end',
                  data: [], // x轴数据
                  name: '时间', // x轴名称
                },
                yAxis: {},
                label: {},
                tooltip: {},
                series: []
              },
            },
            memTableOption: {
                // legend: {},
                xAxis: {},
                yAxis: {},
                label: {},
                tooltip: {},
                series: []
            },
        };
    },
    mounted() {


    },
    destroyed() {

    },
    methods: {
        initTable: function () {
            let that = this;
            this.initCpuTable()
        },
        initCpuTable: function (){
          this.cpuTable.chart = echarts.init(document.getElementById('cpuInfo'));
          this.cpuTable.chart.setOption(this.cpuTable.option)
        }


    }
};
</script>

<style>
#app {
    height: 100%;
}

.control-table {
    background-color: #ffffff;
    height: 25rem;
}

.table-c {
    border-right: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
}

.table-c td {
    border-left: 1px solid #dcdcdc;
    border-top: 1px solid #dcdcdc;
    padding: 0.2rem;
}

.el-table {
    width: 99.9% !important;
}
</style>
