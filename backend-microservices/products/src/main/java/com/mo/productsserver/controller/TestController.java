package com.mo.productsserver.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/products/test")
public class TestController {

  @GetMapping("/anon")
  public String anonEndPoint() {
      return "everyone can see this";
  }

  @GetMapping("/product")
  @PreAuthorize("hasRole('USER')")
  public String usersEndPoint() {
    return "ONLY users can see this products";
  }

  @GetMapping("/admins")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminsEndPoint() {
    return "ONLY admins can see this";
  }
}
