package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.Entities.SubscriptionData;

public interface SubscriptionRepository extends JpaRepository<SubscriptionData, Integer> {

}
