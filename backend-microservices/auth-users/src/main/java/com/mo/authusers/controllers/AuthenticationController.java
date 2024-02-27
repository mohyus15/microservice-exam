package com.mo.authusers.controllers;
import com.mo.authusers.dto.JwtAuthenticationResponse;
import com.mo.authusers.models.User;
import com.mo.authusers.services.AuthenticationService;
import com.mo.authusers.dto.SignInRequest;
import com.mo.authusers.dto.SignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AuthenticationController {


    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public JwtAuthenticationResponse signup(@RequestBody SignUpRequest request) {
        return authenticationService.signup(request);
    }

    @PostMapping("/signin")
    public JwtAuthenticationResponse signin(@RequestBody SignInRequest request) {
        return authenticationService.signin(request);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return authenticationService.getAllUsers();
    }
}