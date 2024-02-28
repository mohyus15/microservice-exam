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
        System.out.println(products1);
        productRepository.save(products1);

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

    public List<Products> getProducts() {
        return productRepository.findAll();
    }


    public void deleteProducts(Integer id) {
        productRepository.deleteById(id);
    }


}




