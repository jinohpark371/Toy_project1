package com.jinoh.rareitemServer.Controller;

import com.jinoh.rareitemServer.Service.ClothingItemService;
import com.jinoh.rareitemServer.domain.ClothingItem;
import com.jinoh.rareitemServer.repository.ClothingItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@RequiredArgsConstructor
public class ClothingItemController {

    private final ClothingItemService clothingItemService;

    @GetMapping
    public List<ClothingItem> getAllItems() {
        return clothingItemService.getAllItems();
    }

    @PostMapping
    public ClothingItem createItem(@RequestBody ClothingItem item) {
        return clothingItemService.createItem(item);
    }

    @GetMapping("/{id}")
    public ClothingItem getItem(@PathVariable Long id) {
        return clothingItemService.getItem(id);
    }

    @PostMapping("/{id}/vote")
    public ClothingItem voteItem(@PathVariable Long id) {
        ClothingItem item = clothingItemService.voteItem(id);// 희소성 +1
        return item;
    }
}