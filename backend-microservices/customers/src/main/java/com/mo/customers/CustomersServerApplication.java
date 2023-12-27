package com.mo.customers;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CustomersServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(CustomersServerApplication.class);

	}

}
