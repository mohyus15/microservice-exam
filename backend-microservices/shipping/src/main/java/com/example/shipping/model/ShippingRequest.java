package com.example.shipping.model;

import lombok.Data;

@Data
public class ShippingRequest {
    private String email;
    private String address;
    private String city;
    private Integer postcode;
    private String country;
}
