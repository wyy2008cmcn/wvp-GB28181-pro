package com.genersoft.iot.vmp.utils;

import com.github.pagehelper.PageInfo;
import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

import java.util.List;

/**
 * @author hanxing date 2018/9/20.
 */
public class OrikaBeanUtils {

    private static final MapperFactory MAPPER_FACTORY = new DefaultMapperFactory.Builder().build();

    /**
     * 单个类转换
     */
    public static <S, D> D copyBean(Class<S> sourceClass, Class<D> targetClass, Object sourceBean){
        MAPPER_FACTORY.classMap(sourceClass, targetClass);
        MapperFacade mapper = MAPPER_FACTORY.getMapperFacade();
        return mapper.map(sourceBean, targetClass);
    }

    /**
     * pageInfo转换
     */
    public static PageInfo convertPageInfo(PageInfo source, Class<?> targetClass){
        List pageList = source.getList();
        PageInfo pageInfo = OrikaBeanUtils.copyBean(PageInfo.class, PageInfo.class, source);
        List list = OrikaBeanUtils.copyArray(pageList, targetClass);
        pageInfo.setList(list);

        return pageInfo;
    }

    /**
     * list转换
     */
    public static <S,D> List<D> copyArray(List<S> sourceClass, Class<D> targetClass){
        return MAPPER_FACTORY.getMapperFacade().mapAsList(sourceClass, targetClass);
    }

    /**
     * 单个类转换
     */
    public static <D> D copyBean(Object sourceBean, Class<D> targetClass){
        if(sourceBean == null){
            return null;
        }
        MAPPER_FACTORY.classMap(sourceBean.getClass(), targetClass);
        MapperFacade mapper = MAPPER_FACTORY.getMapperFacade();
        return mapper.map(sourceBean, targetClass);
    }
}
