package com.mo.orders.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter

public class OrderRequest {
    private  String OrderNumber;
    private String email;
    private List<OrderListItemsDto> orderListItemsDto;

}
