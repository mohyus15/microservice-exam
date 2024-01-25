package com.example.shipping.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Shipping {
@Id
    @SequenceGenerator(name = "shipping_id_sequence",
            sequenceName = "shipping_id_sequence"
    )
    @GeneratedValue(strategy = GenerationType.AUTO,
            generator = "shipping_id_sequence")
    private Long id;
    private String email;
    private String address;
    private String city;
    private Integer postcode;
    private String country;



}
