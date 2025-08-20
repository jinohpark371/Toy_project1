package com.jinoh.rareitemServer.repository;

import com.jinoh.rareitemServer.domain.ClothingItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothingItemRepository extends JpaRepository<ClothingItem, Long> {

}
