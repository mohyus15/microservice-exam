package com.mo.fruad.controller;
import com.mo.fruad.model.FraudCheckResponse;
import com.mo.fruad.services.FraudServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
@Slf4j
@RestController
@RequestMapping("api/fraud")
public class FraudController {
    private final FraudServices fraudServices;
    public FraudController(FraudServices fraudServices) {
        this.fraudServices = fraudServices;
    }
    @GetMapping("{customerId}")
    public FraudCheckResponse isFraudster(@PathVariable("customerId") Integer customerId){
     Boolean resultFromChecking = fraudServices.isThisFraudster(customerId);
     log.info("fraud check request for customers {} ", customerId);
     return new FraudCheckResponse(resultFromChecking);

    }
}

