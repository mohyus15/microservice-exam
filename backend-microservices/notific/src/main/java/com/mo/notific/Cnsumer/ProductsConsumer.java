package com.mo.notific.Cnsumer;

import com.mo.notific.models.Notification;
import com.mo.notific.models.NotificationRequest;
import com.mo.notific.repository.NotificationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ProductsConsumer {
    private final NotificationRepository notificationRepository;
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductsConsumer.class);

    public ProductsConsumer(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @RabbitListener(queues = "${spring.rabbitmq.listener.simple.default-receive-queue}")
    public void consume(NotificationRequest notificationRequest) {
        LOGGER.info("Received notification request: {}", notificationRequest);

        // Print specific fields if needed
        LOGGER.info("Order Number: {}", notificationRequest.getOrderNumber());
        LOGGER.info("Email: {}", notificationRequest.getEmail());

        // Save to database
        Notification notification = new Notification();
        notification.setSetOrderNumber(notificationRequest.getOrderNumber());
        notification.setEmail(notificationRequest.getEmail());
        notification.setSentAt(LocalDateTime.now());
        notificationRepository.save(notification);
        LOGGER.info("Notification saved to the database: {} + ", notification);
    }
}
