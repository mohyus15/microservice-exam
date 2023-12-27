package com.mo.fruad.services;

import com.mo.fruad.model.FraudCheckHistory;
import com.mo.fruad.repository.FraudRepository;

import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class FraudServices {
    private final FraudRepository fraudRepository;

    public FraudServices(FraudRepository fraudRepository) {
        this.fraudRepository = fraudRepository;
    }

    public Boolean isThisFraudster(Integer customerId) {
        FraudCheckHistory result =   FraudCheckHistory.builder().
                customerId(customerId).
                isFraudster(false).
                createdAt(LocalDateTime.now()).
                build();
        fraudRepository.save(result);
        return false;
    }
}
