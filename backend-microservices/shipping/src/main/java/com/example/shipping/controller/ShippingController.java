package com.example.shipping.controller;

import com.example.shipping.model.Shipping;
import com.example.shipping.model.ShippingRequest;
import com.example.shipping.services.ShippingServer;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/shipping")
public class ShippingController {
    private final ShippingServer shippingServer;

    public ShippingController(ShippingServer shippingServer) {
        this.shippingServer = shippingServer;
    }

    @PostMapping()
    public void shippingAddress(@RequestBody ShippingRequest shippingRequest) {
        System.out.println("new shipping address is added");
        shippingServer.addToAddress(shippingRequest);

    }
    @GetMapping("/all")
    //@PreAuthorize("hasAuthority('ADMIN')")
    public List<Shipping> shippingAddresses(){
       return shippingServer.gallAddress();

    }
}
