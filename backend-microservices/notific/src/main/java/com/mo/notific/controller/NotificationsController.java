package com.mo.notific.controller;
import com.mo.notific.models.Notification;
import com.mo.notific.models.NotificationRequest;
import com.mo.notific.services.NotificationServer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@RequestMapping("api/notifications")
public class NotificationsController {
  private final NotificationServer notificationServer;
    public NotificationsController(NotificationServer notificationServer) {
        this.notificationServer = notificationServer;
    }


    @PostMapping
        public void createNotification(@RequestBody NotificationRequest notificationRequest) {
            log.info("new order is created.......................... ");
           notificationServer.saveNotification(notificationRequest);

        }

    @GetMapping(path = "{id}")
    public void getNotificationById(@PathVariable("id") Long id) {
        notificationServer.getNotification(id);
    }

    @GetMapping
    public List<Notification> getNotifications(){
        return notificationServer.getAllNotifications();
    }

}
