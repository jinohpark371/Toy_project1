package com.jinoh.rareitemServer.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime time;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private int expectedCost;

    @Column(nullable = true)
    private Integer actualCost;


    // 소유 측 (FK: trip_id)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "trip_id", nullable = false)
    @JsonBackReference // 순환참조 방지: Trip 쪽 @JsonManagedReference와 매칭
    private Trip trip;

    @Column(nullable = false)
    @OneToOne(mappedBy = "schedule", cascade = CascadeType.ALL,
            orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference("schedule-expense")
    private Expense expense;

    public void setExpense(Expense e) {
        if (this.expense != null) this.expense.setSchedule(null);
        this.expense = e;
        if (e != null) e.setSchedule(this);
    }

}
