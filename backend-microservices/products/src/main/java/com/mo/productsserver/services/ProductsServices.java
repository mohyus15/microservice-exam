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
        Products products = Products.builder()
                .name(productsRequest.getName())
                .brand(productsRequest.getBrand())
                .image(productsRequest.getImage())
                .category(productsRequest.getCategory())
                .countInStock(productsRequest.getCountInStock())
                .description(productsRequest.getDescription())
                .price(productsRequest.getPrice()).build();
        productRepository.save(products);

        producer.publishMessage(
                "new products are send to rabbitmq",
                products);


    }
    public List<Products> getProducts() {
        return productRepository.findAll();
    }


    public void deleteProducts(Integer id) {
        productRepository.deleteById(id);
    }


}
