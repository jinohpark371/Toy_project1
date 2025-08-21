package com.jinoh.rareitemServer.Service;

import com.jinoh.rareitemServer.domain.ClothingItem;
import com.jinoh.rareitemServer.domain.Tag;
import com.jinoh.rareitemServer.repository.TagRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;

    @Transactional
    public Optional<Tag> findByName(String name) {
        return tagRepository.findByName(normalize(name));
    }

    @Transactional
    public Tag getOrCreate(String rawName) {
        String name = normalize(rawName);
        return tagRepository.findByName(name)
                .orElseGet(() -> tagRepository.save(new Tag(name)));
    }

    private String normalize(String s) {
        return s == null ? null : s.trim();
        // 필요시 toLowerCase(Locale.ROOT) 도입
    }
}
