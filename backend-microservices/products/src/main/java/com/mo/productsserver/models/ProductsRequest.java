package com.mo.productsserver.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class ProductsRequest {
    private String name;
    private String image;
    private String brand;
    private String category;
    private Integer countInStock;
    private String description;
    private Integer price;
}
