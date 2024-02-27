package com.mo.orders.controllers;

import com.mo.orders.models.Order;
import com.mo.orders.models.OrderRequest;
import com.mo.orders.services.OrdersServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrdersServices ordersServices;

    public OrderController(OrdersServices ordersServices) {
        this.ordersServices = ordersServices;
    }

    @PostMapping
    public void createOrders(@RequestBody OrderRequest orderRequest) {
        log.info("new orders is added {} ", orderRequest);
       ordersServices.createOrder(orderRequest);

    }

    @GetMapping
    public List<Order> getOrders(){
        log.info("new orders is added");
        return ordersServices.getOrders();
    }



    @RequestMapping(path = "{customerId}")
  Order getOrder(@PathVariable("customerId") Integer id) {
        return ordersServices.getOrders().stream().filter(order -> order.getId().equals(id)).findFirst()
                .orElseThrow(()-> new IllegalArgumentException("products not found"));

    }
    @DeleteMapping(path = "{customerId}")
    void deleteProduct(@PathVariable("customerId")  Integer id){
        log.info("deleted was successful");
        ordersServices.deleteOrders(id);

    }
    @GetMapping(path = "{id}")
    public void Customer (@PathVariable("id") Integer id) {
        ordersServices.getOrderById(id);
    }
}
