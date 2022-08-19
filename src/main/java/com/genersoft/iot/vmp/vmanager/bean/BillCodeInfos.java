package com.genersoft.iot.vmp.vmanager.bean;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

/**
 * @author hanxing
 * @date 2022/8/19 23:12
 */
@Data
@Builder
public class BillCodeInfos implements Serializable {

    private String bills;
}
