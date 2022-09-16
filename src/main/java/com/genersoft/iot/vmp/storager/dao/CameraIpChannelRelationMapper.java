package com.genersoft.iot.vmp.storager.dao;

import com.genersoft.iot.vmp.gb28181.bean.CameraIpChannelRelation;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

/**
 * 摄像头与ip与通道号关系表
 * @author hanxing
 * @date 2022/9/8 22:48
 */
@Mapper
@Repository
public interface CameraIpChannelRelationMapper {

    @Select("SELECT id, camera_name AS cameraName, camera_ip AS cameraIp, camera_channel_id AS cameraChannelId, camera_device_id AS cameraDeviceId  FROM camera_ip_channel_relation WHERE camera_ip=#{cameraIp} limit 1")
    CameraIpChannelRelation getCameraChannelByIp(String cameraIp);

}
