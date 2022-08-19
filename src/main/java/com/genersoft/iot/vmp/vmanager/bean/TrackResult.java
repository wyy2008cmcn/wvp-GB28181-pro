package com.genersoft.iot.vmp.vmanager.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author hanxing
 * @date 2022/8/19 22:56
 */
@Data
public class TrackResult implements Serializable {

    private List<TrackInfoDTO> resultJson;

    private String message;

    private String status;

}
