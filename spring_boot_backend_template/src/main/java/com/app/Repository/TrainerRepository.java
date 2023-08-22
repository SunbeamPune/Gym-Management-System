package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.Entities.Trainer;

public interface TrainerRepository extends JpaRepository<Trainer, Integer> {

}
