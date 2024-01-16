package com.mo.customers.services;

import com.mo.customers.FraudCheckResponse;
import com.mo.customers.model.Customer;
import com.mo.customers.model.CustomerRequest;
import com.mo.customers.publisher.RabbitMQProducer;
import com.mo.customers.repository.CustomerRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
@Service

public class CustomerServices {
    private  final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;
    private final RestTemplate restTemplate;
    private final RabbitMQProducer producer;

    public CustomerServices(CustomerRepository customerRepository,
                            PasswordEncoder passwordEncoder, RestTemplate restTemplate,
                            RabbitMQProducer producer) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
        this.restTemplate = restTemplate;
        this.producer = producer;
    }


    public void CustomerRegister(CustomerRequest request) throws IllegalAccessException {
        var res = getProducts1();
        customerRepository.save(res);
        Customer customer = Customer.builder()
                .username(request.username())
                .email(request.email())
                .password(request.password())
                .role(request.role())
                .build();

        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        customerRepository.save(customer);
        FraudCheckResponse response = restTemplate.getForObject("http://postgres:8084/api/fraud/{customerId}",
                FraudCheckResponse.class, customer.getId());
        assert response != null;
        if (response.isFraudster()) {
            throw new IllegalAccessException("this is a fraudster");
        }


        producer.publishMessage(
                "message coming from customer server",
                customer);

    }

    private static Customer getProducts1() {
        Customer customer = new Customer();
        customer.setUsername("mo");
        customer.setEmail("mo@hotmail.com");
        customer.setPassword("12345");
        customer.setRole("ADMIN");
        return customer;
    }






    public List<Customer> getCostumers() {
        return customerRepository.findAll();
    }


    public void deleteProducts(Integer id) {
        customerRepository.deleteById(id);
    }


    public void getProductsById(Integer id) {
        customerRepository.findById(id);

    }


}
