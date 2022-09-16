package com.genersoft.iot.vmp.web.trace.vo;

import com.genersoft.iot.vmp.service.bean.GengYeTraceBillInfo;
import lombok.Data;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;

/**
 * @author hanxing
 * @date 2022/9/12 23:03
 */
@Data
public class GengYeTraceBillInfoResponse implements Serializable {

    private Integer type;

    private String typeDesc;

    private String waybillNo;

    private String weight;

    private String entranceId;

    private String exportId;

    private String carId;

    private String dateTime;

    private String dvrTime;

    private String dvrType;

    private String setDvrTime;

    private String msg;

    private String layer;

    private String virtualEntryNumber;

    private String direction;

    private String ip;

    private String channelNumber;

    private String cameraName;

    private String channelId;

    private String deviceId;


}
