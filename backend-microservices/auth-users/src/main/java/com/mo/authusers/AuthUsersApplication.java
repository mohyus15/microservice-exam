package com.mo.authusers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(
		basePackages = "com.mo.fruad"
)

public class AuthUsersApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthUsersApplication.class, args);
	}

}
