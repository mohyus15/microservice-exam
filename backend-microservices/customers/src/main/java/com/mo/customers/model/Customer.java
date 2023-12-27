package com.mo.customers.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.SequenceGenerator;
import lombok.*;
import jakarta.persistence.*;


@Entity
@Data
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    @Id
    @SequenceGenerator(name = "customer_id_sequence",
            sequenceName = "customer_id_sequence"
    )
    @GeneratedValue(strategy = GenerationType.IDENTITY,
            generator = "customer_id_sequence")
    private Integer id;
    private String username;
    private String email;
    private String password;
    private String role;


}