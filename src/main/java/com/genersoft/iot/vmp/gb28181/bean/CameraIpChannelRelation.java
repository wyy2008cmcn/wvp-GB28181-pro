package com.genersoft.iot.vmp.gb28181.bean;

import lombok.Data;

/**
 * @author hanxing
 * @date 2022/9/8 22:36
 */
@Data
public class CameraIpChannelRelation {

    private Long id;

    private String cameraName;

    private String cameraIp;

    private String cameraChannelId;

    private String cameraDeviceId;

    private String createdTime;

    private String updateTime;
}
