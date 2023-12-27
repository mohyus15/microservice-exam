package com.mo.customers.services;

import com.mo.customers.configs.CustomerUserDetail;
import com.mo.customers.model.Customer;
import com.mo.customers.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;
@Component
public class CustomerDetailServices implements UserDetailsService {


    @Autowired
    private  CustomerRepository customerRepository;;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Customer> customerDetails = customerRepository.findByUsername(username);
        return customerDetails.map(CustomerUserDetail::new).orElseThrow(()->
                new UsernameNotFoundException("user not found with this username:" + username));
    }
}

