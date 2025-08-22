package com.jinoh.rareitemServer.Service;

import com.jinoh.rareitemServer.domain.ClothingItem;

import java.util.List;

public interface ItemService<T> {
    List<T> getAllItems();
    T createItem(T item);
    T getItem(Long id);
    T voteItem(Long id);
}