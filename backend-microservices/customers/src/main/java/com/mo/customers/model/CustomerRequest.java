package com.mo.customers.model;
import com.mo.customers.common.UserConstant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerRequest {
    private String username;
    public String email;
    public String password;
    private String role = UserConstant.USER;

    public String username() {
        return username;
    }

    public String email() {
        return email;
    }
    public  String password(){
        return password;
    }
    public  String role(){
        return role;
    }
}
