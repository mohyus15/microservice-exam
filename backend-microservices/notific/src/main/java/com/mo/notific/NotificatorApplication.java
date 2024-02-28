package com.mo.notific;

import com.mo.notific.models.Notification;
import com.mo.notific.models.NotificationRequest;
import com.mo.notific.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class NotificatorApplication {

	@Autowired
	private NotificationRepository notificationRepository;

	public static void main(String[] args) {
		SpringApplication.run(NotificatorApplication.class, args);
	}

	@Bean
	public CommandLineRunner processNotifications() {
		return args -> {
			// Logic to process notifications
			NotificationRequest notificationRequest = new NotificationRequest();
			notificationRequest.setEmail("mo@example.com");
			notificationRequest.setOrderNumber("hrhueewewweee");
			notificationRequest.setSentAt(LocalDateTime.parse("2024-02-27T23:11:01.40748"));

			Notification notification = new Notification();
			notification.setEmail(notificationRequest.getEmail());
			notification.setSetOrderNumber(notificationRequest.getOrderNumber());
			notification.setSentAt(notificationRequest.getSentAt());

			// Save notification to repository
			notificationRepository.save(notification);

			// Additional processing logic can be added here
			System.out.println("Notification processed successfully.");
		};
	}
}
