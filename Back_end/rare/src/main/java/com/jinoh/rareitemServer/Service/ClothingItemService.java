package com.jinoh.rareitemServer.Service;

import com.jinoh.rareitemServer.domain.ClothingItem;
import com.jinoh.rareitemServer.domain.Tag;
import com.jinoh.rareitemServer.repository.ClothingItemRepository;
import java.util.LinkedHashSet;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClothingItemService implements ItemService<ClothingItem>{

    private final ClothingItemRepository clothingItemRepository;
    private final TagService tagService;

    @Override
    public List<ClothingItem> getAllItems() {
        return clothingItemRepository.findAll();
    }

    @Override
    @Transactional
    public ClothingItem createItem(ClothingItem item) {
        // 들어온 엔티티의 tags를 DB의 기존 태그로 교체(없으면 생성)
        Set<Tag> processed = item.getTags().stream()
                .map(t -> tagService.getOrCreate(t.getName()))
                .collect(Collectors.toCollection(LinkedHashSet::new));
        item.setTags(processed);
        return clothingItemRepository.save(item);
    }
    @Override
    public ClothingItem getItem(Long id) {
        return clothingItemRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 의류아이템을 찾지 못함 ID:" + id));
    }

    @Override
    @Transactional
    public ClothingItem voteItem(Long id) {
        ClothingItem item = clothingItemRepository.findById(id).orElseThrow();
        item.setRarityPercent(item.getRarityPercent() + 1); // 희소성 +1
        return item;
    }

    public ClothingItem deleteItem(Long id) {
        ClothingItem item = getItem(id);
        clothingItemRepository.delete(item);
        return item;
    }
}