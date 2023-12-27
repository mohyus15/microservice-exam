package com.mo.productsserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class  ProductsServerApplication {
	public static void main(String[] args) {
		System.out.println("-------------------------------");
		SpringApplication.run(ProductsServerApplication.class, args);
	}

}
