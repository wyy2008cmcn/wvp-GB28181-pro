package com.genersoft.iot.vmp.vmanager.bean;

import lombok.Data;

import java.io.Serializable;

/**
 * @author hanxing
 * @date 2022/8/19 22:05
 */
@Data
public class TrackInfoDetail implements Serializable {

    private String scanTime;

    private String num;

    private String shift;

    private String weight;

    private String volumeWeight;

    private String uploadTime;

    private String info;

}
