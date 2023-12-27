package com.mo.notific.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationRequest {
    private Long id;
    private String orderNumber;
    private String email;
    private LocalDateTime sentAt;
}
