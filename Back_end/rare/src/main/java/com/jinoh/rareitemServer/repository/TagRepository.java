package com.jinoh.rareitemServer.repository;

import com.jinoh.rareitemServer.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {

    // 이름으로 태그 찾기
    Optional<Tag> findByName(String name);

}
