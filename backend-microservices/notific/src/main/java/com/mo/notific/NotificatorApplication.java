package com.mo.notific;

import com.mo.notific.models.Notification;
import com.mo.notific.models.NotificationRequest;
import com.mo.notific.repository.NotificationRepository;
import jdk.jfr.Event;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class NotificatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotificatorApplication.class, args);
	}



}
