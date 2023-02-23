package com.gsilverio.barber.repositories;

import com.gsilverio.barber.entities.KindOfService;
import jdk.jshell.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KindOfServiceRepository extends JpaRepository<KindOfService, Long> {
}
