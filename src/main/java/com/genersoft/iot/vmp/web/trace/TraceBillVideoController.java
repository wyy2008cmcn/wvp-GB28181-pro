package com.genersoft.iot.vmp.web.trace;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.genersoft.iot.vmp.common.GengYeResult;
import com.genersoft.iot.vmp.common.StreamInfo;
import com.genersoft.iot.vmp.gb28181.bean.CameraIpChannelRelation;
import com.genersoft.iot.vmp.gb28181.bean.Device;
import com.genersoft.iot.vmp.gb28181.transmit.callback.DeferredResultHolder;
import com.genersoft.iot.vmp.gb28181.transmit.cmd.impl.SIPCommander;
import com.genersoft.iot.vmp.service.CameraIpChannelRelationService;
import com.genersoft.iot.vmp.service.IMediaServerService;
import com.genersoft.iot.vmp.service.IPlayService;
import com.genersoft.iot.vmp.service.bean.GengYeTraceBillInfo;
import com.genersoft.iot.vmp.storager.IRedisCatchStorage;
import com.genersoft.iot.vmp.storager.IVideoManagerStorage;
import com.genersoft.iot.vmp.utils.CollectionUtil;
import com.genersoft.iot.vmp.utils.HttpClientUtils;
import com.genersoft.iot.vmp.utils.OrikaBeanUtils;
import com.genersoft.iot.vmp.vmanager.bean.BillCodeInfos;
import com.genersoft.iot.vmp.vmanager.bean.TrackResult;
import com.genersoft.iot.vmp.vmanager.bean.WVPResult;
import com.genersoft.iot.vmp.web.trace.vo.GengYeTraceBillInfoResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.time.DateUtils;
import org.assertj.core.util.Lists;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.DeferredResult;

import java.io.IOException;
import java.util.*;

//import com.genersoft.iot.vmp.media.zlm.ZLMRESTfulUtils;

@Api(tags = "追件系统")
@CrossOrigin
@RestController
@RequestMapping("/api/trace-bill-video")
public class TraceBillVideoController {

    private final static Logger logger = LoggerFactory.getLogger(TraceBillVideoController.class);

    @Value("${trace.billVideoUrl}")
    private String billVideoUrl;

    @Autowired
    private CameraIpChannelRelationService cameraIpChannelRelationService;

    @ApiOperation("根据单号获取快件掉入的格口信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "billCode", value = "单号", dataTypeClass = String.class),
    })
    @GetMapping("/byBillCode/{billCode}")
    public ResponseEntity<String> getVideoUrlByBillCode(@PathVariable String billCode) {
        //根据单号查询外部接口

        String body;
        try {
            Map<String, String> param = new HashMap<>();
            param.put("itemNumber", billCode);
            body = HttpClientUtils.sendHttpGet(billVideoUrl, 2000, 2000, 2000, null, param);
            GengYeResult gengYeResult = JSON.parseObject(body, GengYeResult.class);
            logger.info("getVideoUrlByBillCode 请求参数-->{}, 返回结果-->{}", billCode, body);
            if(StringUtils.isEmpty(body) || !gengYeResult.getSuccess()) {
                return new ResponseEntity<>(JSON.toJSONString(Lists.emptyList()), HttpStatus.OK);
            }
        } catch (IOException e) {
            logger.error("getVideoUrlByBillCode error, billCode-->{}, error-->", billCode, e);
            return new ResponseEntity<>(JSON.toJSONString(Lists.emptyList()), HttpStatus.OK);
        }
        List<GengYeTraceBillInfo> gengYeTraceBillInfos = JSON.parseArray(JSON.parseObject(body, GengYeResult.class).getObj().toString(), GengYeTraceBillInfo.class);

        List<GengYeTraceBillInfoResponse> gengYeTraceBillInfoResponses = OrikaBeanUtils.copyArray(gengYeTraceBillInfos, GengYeTraceBillInfoResponse.class);

        //查询摄像头映射
        gengYeTraceBillInfoResponses.forEach(info -> {
                    info.setTypeDesc(GengYeTraceBillInfo.GengYeTraceBillInfoTypeEnum.getDescByType(info.getType()));
                    CameraIpChannelRelation cameraChannelByIp = cameraIpChannelRelationService.getCameraChannelByIp(info.getIp());
                    Optional.ofNullable(cameraChannelByIp).ifPresent(camera -> {
                        info.setCameraName(camera.getCameraName());
                        info.setChannelId(camera.getCameraChannelId());
                        info.setDeviceId(camera.getCameraDeviceId());
                    });
                }

        );
        if (CollectionUtils.isEmpty(gengYeTraceBillInfoResponses)) {
            return new ResponseEntity<>(JSON.toJSONString(gengYeTraceBillInfoResponses), HttpStatus.OK);
        }

        return new ResponseEntity<>(JSON.toJSONString(gengYeTraceBillInfoResponses), HttpStatus.OK);
    }

}
