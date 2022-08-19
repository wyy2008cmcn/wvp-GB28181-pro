package com.genersoft.iot.vmp.utils;

import com.alibaba.fastjson.JSON;
import com.genersoft.iot.vmp.vmanager.bean.BillCodeInfos;
import com.genersoft.iot.vmp.vmanager.bean.TrackInfoDTO;
import com.genersoft.iot.vmp.vmanager.bean.TrackResult;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.springframework.util.CollectionUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
public class HttpClientUtils {

    private static final CloseableHttpClient httpClient;

    private static final String UTF8 = "UTF-8";

    private static final String DEFULT_CONTENT_TYPE = "application/x-www-form-urlencoded";


    static {
        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();
        httpClient = httpClientBuilder.build();
    }


    /**
     * @param connectTime              建立连接的超时时间
     * @param socketConnectTime        从服务器读取数据响应的超时时间
     * @param connectionRequestTimeout 从连接池获取连接的超时时间
     */
    private static RequestConfig getRequestConfig(int connectTime, int socketConnectTime, int connectionRequestTimeout) {
        return RequestConfig.custom().setSocketTimeout(socketConnectTime).setConnectTimeout(connectTime).setConnectionRequestTimeout(connectionRequestTimeout).build();
    }

    public static String sendHttpGet(String url, int connectTime, int socketConnectTime, int connectionRequestTimeout, Map<String, String> header, Map<String, String> params) throws IOException {
        String body = null;
        RequestConfig requestConfig = getRequestConfig(connectTime, socketConnectTime, connectionRequestTimeout);
        url = urlParamJoint(url, params);
        HttpGet httpGet = new HttpGet(url);
        httpGet.setConfig(requestConfig);
        httpGet.setHeader("Content-type", DEFULT_CONTENT_TYPE);
        if (header != null) {
            for (Map.Entry<String, String> entry : header.entrySet()) {
                httpGet.setHeader(entry.getKey(), entry.getValue());
            }
        }
        CloseableHttpResponse response = httpClient.execute(httpGet);
        HttpEntity entity = response.getEntity();
        if (entity != null) {
            body = EntityUtils.toString(entity, UTF8);
        }
        EntityUtils.consume(entity);
        response.close();
        return body;
    }

    public static String getDataToJson(String url, int connectTime, int socketConnectTime, int connectionRequestTimeout, Map<String, String> header,  String jsonText) {
        String body = null;
        try {
            HttpPut httpGetWithEntity = new HttpPut(url);
            RequestConfig requestConfig = getRequestConfig(connectTime, socketConnectTime, connectionRequestTimeout);
            HttpEntity httpEntity = new StringEntity(jsonText, ContentType.APPLICATION_JSON);
            httpGetWithEntity.setEntity(httpEntity);
            httpGetWithEntity.setConfig(requestConfig);
            CloseableHttpResponse response = httpClient.execute(httpGetWithEntity);
            HttpEntity entity = response.getEntity();
            if (entity != null) {
                body = EntityUtils.toString(entity, UTF8);
            }
            EntityUtils.consume(entity);
            response.close();
            return body;
        } catch (Exception e) {
            log.error("调用get请求Error:json-->{}, error-->", jsonText, e);
        }
        return body;
    }


    public static void main(String[] args) throws IOException {

        String billCode = "78606612569555,78289043146846";

        String[] billCodeSplit = billCode.split(",");

        StringBuilder billCodes = new StringBuilder();

        for (String value : billCodeSplit) {
            billCodes.append(value);
            billCodes.append(";");
        }

        BillCodeInfos billCodeInfos = BillCodeInfos.builder().bills(billCodes.toString()).build();

        String trackInfo = HttpClientUtils.getDataToJson("http://81.68.72.215:8080/express/api/queryOrderInfo", 1000, 1000, 1000, null, JSON.toJSONString(billCodeInfos));

        System.out.println(trackInfo);
        TrackResult trackInfoDTO = JSON.parseObject(trackInfo, TrackResult.class);

        System.out.println(JSON.toJSONString(trackInfoDTO));

        trackInfoDTO.getResultJson().forEach(info -> {
            if(!CollectionUtils.isEmpty(info.getTracklog())) {
                info.getTracklog().removeIf(log -> Optional.ofNullable(log.getInfo()).map(s -> {
                    if(s.contains("揽收")|| s.contains("到达")||s.contains("派件")||s.contains("嘉兴")) {
                        return false;
                    }
                    return true;
                }).orElse(true));
            }
        });

        System.out.println(JSON.toJSONString(trackInfoDTO));

    }



    private static String urlParamJoint(String url, Map<String, String> params) throws IOException {
        if (params != null && !params.isEmpty()) {
            List<NameValuePair> pairs = new ArrayList<>(
                    params.size());
            for (Map.Entry<String, String> entry : params.entrySet()) {
                String value = entry.getValue();
                if (value != null) {
                    pairs.add(new BasicNameValuePair(entry.getKey(), value));
                }
            }
            url += "?" + EntityUtils.toString(new UrlEncodedFormEntity(pairs, UTF8));
        }
        return url;


    }

}
