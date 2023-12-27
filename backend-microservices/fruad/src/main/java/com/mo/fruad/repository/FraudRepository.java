package com.mo.fruad.repository;

import com.mo.fruad.model.FraudCheckHistory;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@FeignClient("fraud")
@Repository
public interface FraudRepository extends JpaRepository<FraudCheckHistory, Integer> {
}
