package com.jinoh.rareitemServer.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private LocalDate startDate; // "2025-09-01" 형태

    private LocalDate endDate;

    private int totalBudget;

    // 일정(1:N)
    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference // 순환참조 방지 (아래 Schedule의 @JsonBackReference와 세트)
    private List<Schedule> schedules = new ArrayList<>();



}
