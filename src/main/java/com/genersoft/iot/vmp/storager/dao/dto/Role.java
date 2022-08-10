package com.genersoft.iot.vmp.storager.dao.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.assertj.core.util.Lists;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Role {

    private int id;
    private String name;
    private String authority;
    private String createTime;
    private String updateTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    @Getter
    @AllArgsConstructor
    public enum AuthorityEnum {

        ADMIN("0", "管理员,全部权限"),
        LEADER("1", "经理,部分权限"),
        STAFF("2", "员工,最低权限"),

        ;

        private String authority;

        private String desc;


        public static List<String> listAuthorityByAuthority(String authority) {

            if(LEADER.getAuthority().equals(authority)) {
                return Arrays.asList(LEADER.getAuthority(), STAFF.getAuthority());
            } else if(STAFF.getAuthority().equals(authority)) {
                return Collections.singletonList(STAFF.getAuthority());
            }
            return Lists.emptyList();

        }





    }
}
