package com.example.shipping.controller;

import com.example.shipping.model.Shipping;
import com.example.shipping.model.ShippingRequest;
import com.example.shipping.services.ShippingServer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@RequestMapping("api/shipping")
public class ShippingController {
    private final ShippingServer shippingServer;

    public ShippingController(ShippingServer shippingServer) {
        this.shippingServer = shippingServer;
    }

    @PostMapping()
    public void shippingAddress(@RequestBody ShippingRequest shippingRequest) {
        log.info("new shipping address is added {} ", shippingRequest);
        shippingServer.addToAddress(shippingRequest);

    }
    @GetMapping()
    public List<Shipping> shippingAddresses(){
        log.info("all shipping addresses are here");
        return shippingServer.gallAddress();
    }

}
