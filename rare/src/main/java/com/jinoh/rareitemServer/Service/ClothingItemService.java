package com.jinoh.rareitemServer.Service;

import com.jinoh.rareitemServer.domain.ClothingItem;
import com.jinoh.rareitemServer.repository.ClothingItemRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClothingItemService implements ItemService<ClothingItem>{

    private final ClothingItemRepository repository;

    @Override
    public List<ClothingItem> getAllItems() {
        return repository.findAll();
    }

    @Override
    public ClothingItem createItem(ClothingItem item) {
        return repository.save(item);
    }

    @Override
    public ClothingItem getItem(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 의류아이템을 찾지 못함 ID:" + id));
    }

    @Override
    @Transactional
    public ClothingItem voteItem(Long id) {
        ClothingItem item = repository.findById(id).orElseThrow();
        item.setRarityPercent(item.getRarityPercent() + 1); // 희소성 +1
        return item;
    }

    public ClothingItem deleteItem(Long id) {
        ClothingItem item = getItem(id);
        repository.delete(item);
        return item;
    }
}