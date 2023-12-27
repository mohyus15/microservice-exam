package com.mo.notific.Cnsumer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Obj {
    private Long id;
    private String orderNumber;
    private String email;
    private LocalDateTime sentAt;
}
