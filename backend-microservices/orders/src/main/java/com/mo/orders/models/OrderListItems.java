package com.mo.orders.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table
public class OrderListItems {
    @Id
    @SequenceGenerator(name = "order_id_sequence",
            sequenceName = "order_id_sequence"
    )
    @GeneratedValue(strategy = GenerationType.AUTO,
            generator = "order_id_sequence")
    private Integer id;
    private String name;
    private String image;
    private Integer brand;
    private String category;
    private Integer countInStock;
    private String description;
    private Integer price;

}
