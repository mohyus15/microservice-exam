package com.mo.customers.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@Component
public class UserConstant {
   public  static final String USER = "USER";
    public  static final String ADMIN = "ADMIN";
}
