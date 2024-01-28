package com.mo.notific.services;
import com.mo.notific.models.Notification;
import com.mo.notific.models.NotificationRequest;
import com.mo.notific.publisher.RabbitMQProducer;
import com.mo.notific.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class NotificationServer {
    private final NotificationRepository notificationRepository;
    private final RabbitMQProducer producer;
    @Autowired
    public NotificationServer(NotificationRepository notificationRepository, RabbitMQProducer producer) {

        this.notificationRepository = notificationRepository;
        this.producer = producer;
    }

    public void saveNotification(NotificationRequest notificationRequest) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
        Notification notification = new Notification();
        notification.setEmail(notificationRequest.getEmail());
        notification.setSetOrderNumber(notificationRequest.getOrderNumber());
        notification.setSentAt(LocalDateTime.parse(formattedDateTime, formatter));

        notificationRepository.save(notification);
        producer.publishMessage(
                notification);

    }
    public void getNotification(Long id) {
       notificationRepository.findById(id);

    }

    public void deleteNotifications(Long id) {
        notificationRepository.deleteById(id);
    }
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }


}
