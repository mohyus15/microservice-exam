package com.mo.productsserver.models;

import jakarta.persistence.*;
import lombok.*;

@Table
@Entity
@Builder
@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Products {
    @Id
    @SequenceGenerator(name = "products_id_sequence",
            sequenceName = "products_id_sequence"
    )
    @GeneratedValue(strategy = GenerationType.AUTO,
            generator = "products_id_sequence")
    private Integer id;
    private String name;
    private String image;
    private String brand;
    private String category;
    private Integer countInStock;
    private String description;
    private Integer price;



}
