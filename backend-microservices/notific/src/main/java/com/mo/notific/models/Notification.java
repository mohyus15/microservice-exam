package com.mo.notific.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Table
@Entity
@Builder
@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification {


    @Id
    @SequenceGenerator(name = "products_id_sequence",
            sequenceName = "products_id_sequence"
    )
    @GeneratedValue(strategy = GenerationType.AUTO,
            generator = "products_id_sequence")
    private Long id;
    private String setOrderNumber;
    private String email;
    private LocalDateTime sentAt;

}
