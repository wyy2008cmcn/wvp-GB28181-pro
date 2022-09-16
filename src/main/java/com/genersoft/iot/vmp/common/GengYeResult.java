package com.genersoft.iot.vmp.common;

import lombok.Data;

import java.util.List;

/**
 * 艮业接口
 * @author hanxing
 * @date 2022/9/8 23:01
 */
@Data
public class GengYeResult<T> {

    private Boolean success;

    private String msg;

    private T obj;

}
