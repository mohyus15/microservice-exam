package com.mo.fruad.services;

import com.mo.fruad.model.FraudCheckHistory;
import com.mo.fruad.repository.FraudRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
@Slf4j
@Service
public class FraudServices {
    private final FraudRepository fraudRepository;

    public FraudServices(FraudRepository fraudRepository) {
        this.fraudRepository = fraudRepository;
    }

    public boolean isFraudsterUser(Integer customerId) {
        log.info("Fraud check request for customer {}", customerId);
        FraudCheckHistory fraudCheckHistory = new FraudCheckHistory();
        fraudCheckHistory.setCustomerId(customerId);
        fraudCheckHistory.setCreatedAt(LocalDateTime.now());
        fraudCheckHistory.setIsFraudster(false);
        fraudRepository.save(fraudCheckHistory);
        return false;
    }

}
