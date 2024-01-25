package com.example.shipping.services;

import com.example.shipping.model.Shipping;
import com.example.shipping.model.ShippingRequest;
import com.example.shipping.repository.ShippingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShippingServer {
    private final ShippingRepository shippingRepository;

    public ShippingServer(ShippingRepository shippingRepository) {
        this.shippingRepository = shippingRepository;
    }

    public void addToAddress(ShippingRequest shippingRequest){
        Shipping result = new Shipping();
        result.setEmail(shippingRequest.getEmail());
        result.setAddress(shippingRequest.getAddress());
        result.setCity(shippingRequest.getCity());
        result.setPostcode(shippingRequest.getPostcode());
        result.setCountry(shippingRequest.getCountry());
        shippingRepository.save(result);



    }

    public List<Shipping> gallAddress() {
        return shippingRepository.findAll();
    }
}
