package com.mo.productsserver.services;
import com.mo.productsserver.models.Products;
import com.mo.productsserver.publisher.RabbitMQProducer;
import com.mo.productsserver.models.ProductsRequest;
import com.mo.productsserver.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsServices {
    private final RabbitMQProducer producer;
    private final ProductRepository productRepository;

    public ProductsServices(RabbitMQProducer producer, ProductRepository productRepository) {
        this.producer = producer;
        this.productRepository = productRepository;
    }

    public void createProducts(ProductsRequest productsRequest) {
        Products products1 = getProducts1();
        Products products2 = getProducts2();
        Products products3 = getProducts3();
        System.out.println(products1);
        productRepository.save(products1);
        productRepository.save(products2);
        productRepository.save(products3);

        Products products = new Products();
         products.setName(productsRequest.getName());
         products.setBrand(productsRequest.getBrand());
         products.setImage(productsRequest.getImage());
         products.setCategory(productsRequest.getCategory());
         products.setDescription(productsRequest.getDescription());
         products.setPrice(productsRequest.getPrice());
        productRepository.save(products);
        producer.publishMessage(
                products);
    }

    private static Products getProducts1() {
        Products products1 = new Products();
        products1.setName("iphone");
        products1.setImage("https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8fDA%3D");
        products1.setBrand("2023");
        products1.setCountInStock(102);
        products1.setCategory("el");
        products1.setDescription("best phone");
        products1.setPrice(12);
        return products1;
    }

    private static Products getProducts2() {
        Products products2 = new Products();
        products2.setName("Samsung Galaxy");
        products2.setImage("https://images.unsplash.com/photo-1620288650879-20db0eb38c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        products2.setBrand("Samsung");
        products2.setCountInStock(80);
        products2.setCategory("Electronics");
        products2.setDescription("A popular Android smartphone.");
        products2.setPrice(1000);
        return products2;
    }
    private static Products getProducts3() {
        Products products3 = new Products();
        products3.setName("Macbook Pro");
        products3.setImage("https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFjYm9vayUyMFByb3xlbnwwfHwwfHx8MA%3D%3D");
        products3.setBrand("Apple");
        products3.setCountInStock(50);
        products3.setCategory("Electronics");
        products3.setDescription("Powerful laptop for professionals.");
        products3.setPrice(2000);
        return products3;
    }

    public List<Products> getProducts() {
        return productRepository.findAll();
    }


    public void deleteProducts(Integer id) {
        productRepository.deleteById(id);
    }


}




