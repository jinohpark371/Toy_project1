package com.jinoh.rareitemServer.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.time.LocalDateTime;

public record ScheduleCreateRequest(
        @NotNull
        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
        LocalDateTime time,

        @NotBlank
        String description,

        @NotBlank
        String category,

        @PositiveOrZero
        int expectedCost
) {}

