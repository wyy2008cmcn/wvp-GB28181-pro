package com.genersoft.iot.vmp.service.impl;

import com.alibaba.fastjson.JSON;
import com.genersoft.iot.vmp.utils.HttpClientUtils;
import com.genersoft.iot.vmp.vmanager.bean.TrackInfoDTO;
import com.genersoft.iot.vmp.vmanager.bean.TrackResult;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author hanxing
 * @date 2022/8/19 21:36
 */

@SpringBootTest
@RunWith(SpringRunner.class)
public class HttpTest {


    @Value("${bill.url}")
    private String billUrl;

    @Test
    public void test() {
        String trackInfo = HttpClientUtils.getDataToJson(billUrl, 1000, 1000, 1000, null, "{\"bills\":\"78606612569555;75840584705812\"}");
        TrackResult trackInfoDTO = JSON.parseObject(trackInfo, TrackResult.class);

        System.out.println(JSON.toJSONString(trackInfo));
    }

}
