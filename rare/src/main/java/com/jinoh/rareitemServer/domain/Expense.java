package com.jinoh.rareitemServer.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Expense {

    @OneToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "schedule_id", nullable = true, unique = true)
    @JsonBackReference("schedule-expense")
    private Schedule schedule;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String category;    // 식비, 교통, 숙박 등

    @Column(nullable = false)
    private int amount;



}


