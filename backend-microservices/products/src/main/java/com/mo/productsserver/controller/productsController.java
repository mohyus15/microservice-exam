package com.mo.productsserver.controller;
import com.mo.productsserver.models.ProductsRequest;
import com.mo.productsserver.models.Products;
import com.mo.productsserver.services.ProductsServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/products")
public class productsController {
    private  final ProductsServices productsServices;

    public productsController( ProductsServices productsServices) {
        this.productsServices = productsServices;
    }
    @PostMapping
    public void RegisterCustomer(@RequestBody ProductsRequest productsRequest) {
        log.info("---------------new products is register now {} and send to rabbitmq-----------------------", productsRequest);
        productsServices.createProducts(productsRequest);

    }
    @GetMapping
    public List<Products> getProducts(){
        log.info("all products are here");
        return productsServices.getProducts();
    }

    @RequestMapping(path = "{customerId}")
    Products getProducts(@PathVariable("customerId") Integer id) {
       return productsServices.getProducts().stream().filter(products -> products.getId().equals(id)).findFirst()
                .orElseThrow(()-> new IllegalArgumentException("products not found"));

    }
    @DeleteMapping(path = "{customerId}")
    void deleteProduct(@PathVariable("customerId") Integer id){
        log.info("deleted was successful");
        productsServices.deleteProducts(id);

    }
}
