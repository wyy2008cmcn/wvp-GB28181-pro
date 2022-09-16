package com.genersoft.iot.vmp.service;

import com.genersoft.iot.vmp.gb28181.bean.CameraIpChannelRelation;

/**
 * @author hanxing
 * @date 2022/9/8 22:53
 */
public interface CameraIpChannelRelationService {


    /**
     * 通过摄像头ip获取摄像头映射信息
     */
    CameraIpChannelRelation getCameraChannelByIp(String cameraIp);

}
