package com.genersoft.iot.vmp.vmanager.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author hanxing
 * @date 2022/8/19 22:03
 */
@Data
public class TrackInfoDTO implements Serializable {

    private List<TrackInfoDetail> tracklog;

    private String mobile;

    private String name;

    private String billCode;
}
