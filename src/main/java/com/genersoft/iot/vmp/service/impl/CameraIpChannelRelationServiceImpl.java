package com.genersoft.iot.vmp.service.impl;

import com.genersoft.iot.vmp.gb28181.bean.CameraIpChannelRelation;
import com.genersoft.iot.vmp.service.CameraIpChannelRelationService;
import com.genersoft.iot.vmp.storager.dao.CameraIpChannelRelationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author hanxing
 * @date 2022/9/8 22:53
 */
@Service
public class CameraIpChannelRelationServiceImpl implements CameraIpChannelRelationService {


    @Autowired
    private CameraIpChannelRelationMapper cameraIpChannelRelationMapper;

    /**
     * 通过摄像头ip获取摄像头映射信息
     *
     * @param cameraIp
     */
    @Override
    public CameraIpChannelRelation getCameraChannelByIp(String cameraIp) {
        return  Optional.ofNullable(cameraIp)
                .map(ip -> cameraIpChannelRelationMapper.getCameraChannelByIp(cameraIp))
                .orElse(null);
    }
}
