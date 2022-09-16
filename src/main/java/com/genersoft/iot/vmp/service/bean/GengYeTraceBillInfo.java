package com.genersoft.iot.vmp.service.bean;

import io.swagger.models.auth.In;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;

/**
 * @author hanxing
 * @date 2022/9/8 23:04
 */
@Data
public class GengYeTraceBillInfo implements Serializable {

    private Integer type;

    private String waybillNo;

    private Double weight;

    private String entranceId;

    private String exportId;

    private String carId;

    private Date dateTime;

    private Date dvrTime;

    private String dvrType;

    private Date setDvrTime;

    private String msg;

    private String layer;

    private String virtualEntryNumber;

    private String direction;

    private String ip;

    private String channelNumber;

    private String cameraName;

    private String cameraChannel;


    @Getter
    @AllArgsConstructor
    public enum GengYeTraceBillInfoTypeEnum {

        BILL_SCAN(0,"扫描"),
        UP_EXPRESS(1, "上件"),
        DOWN_EXPRESS(2, "下件"),
        BAG_INFO(10,"包牌信息"),
        PROCESS_INFO(100, "过程信息")

        ;


        private Integer type;

        private String desc;

        public static String getDescByType(Integer type) {
            return Arrays.stream(GengYeTraceBillInfoTypeEnum.values())
                    .filter(info -> info.getType().equals(type))
                    .map(GengYeTraceBillInfoTypeEnum::getDesc)
                    .findFirst()
                    .orElse(null);
        }
    }



    /**
     * id					主键，自动生成
     * car_id				小车id
     * date_time			分拣传入记录时间
     * dvr_time				相机开始添加水印时间
     * dvr_type				0存库失败 1存库成功 2未找到入口或出口相机配置
     * entrance_number		入口编号
     * export_id				出口编号
     * log_msg				日志信息
     * set_dvr_time			存入相机消耗时间
     * type					类型 0：扫描 1：上件 2：正常下件 10：包牌信息  100：过程信息
     * item_number			订单号
     * weight				重量
     * layer				第几层
     * direction				方向
     * virtual_entry_number	虚拟入口编号
     * ip					摄像头IP
     * cameraChannel        正确的摄像头通道号
     */

}
