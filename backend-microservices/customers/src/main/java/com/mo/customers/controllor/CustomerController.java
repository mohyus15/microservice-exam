package com.mo.customers.controllor;
import com.mo.customers.model.CustomerRequest;

import com.mo.customers.model.Login;
import com.mo.customers.security.JwtService;
import com.mo.customers.services.CustomerServices;
import com.mo.customers.model.Customer;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final JwtService jwt;
    private final CustomerServices customerServices;
    private final AuthenticationManager authenticationManager;

    public CustomerController(JwtService jwt, CustomerServices customerServices, AuthenticationManager authenticationManager) {
        this.jwt = jwt;
        this.customerServices = customerServices;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public void RegisterCustomer(@RequestBody CustomerRequest customerRequest) throws IllegalAccessException {
        log.info("new customer is register now {}", customerRequest);
        customerServices.CustomerRegister(customerRequest);

    }


    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Customer> getCustomers(){
        return customerServices.getCostumers();
    }

    @GetMapping(path = "/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public void Customer (@PathVariable("id") Integer id) {
        customerServices.getProductsById(id);
    }


    @DeleteMapping(path = "/{customerId}")
    @PreAuthorize("hasAuthority('USER')")

    void deleteCustomer(@PathVariable("customerId") Integer id){
        log.info("Deleting customer with ID: {}", id);
        customerServices.deleteProducts(id);
    }


    @PostMapping("/login")
    public String authenticateAndGetToken(@RequestBody Login login) {
      Authentication authentication =  authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword()));
      if (authentication.isAuthenticated()){
          return jwt.generateToken(login.getUsername());
      }else {
          throw new UsernameNotFoundException("invalid user request");

        }


    }

}
