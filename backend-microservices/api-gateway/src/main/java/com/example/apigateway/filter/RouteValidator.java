package com.example.apigateway.filter;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import java.util.function.Predicate;


import java.util.List;

@Component
public class RouteValidator {

    public static final List<String> openApiEndpoints = List.of(
            "/api/products",
            "/api/customers",
            "/api/orders",
            "/api/customers/register",
            "/api/customers/login",
            "/api/customers/all",
            "/api/notifications",
            "/api/shipping",
            "/api/notification/allNotification"

    );

    public Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().contains(uri));



}