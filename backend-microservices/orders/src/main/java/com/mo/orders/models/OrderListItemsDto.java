package com.mo.orders.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
public class OrderListItemsDto {
    private String name;
    private String image;
    private Integer brand;
    private String category;
    private Integer countInStock;
    private String description;
    private Integer price;

}
