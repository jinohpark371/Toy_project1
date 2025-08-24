// mock/trips.ts
import type { Trip } from "../types/trip";

export const TRIPS: Trip[] = [
  {
    id: "t001",
    title: "다낭 친구 여행",
    startDate: "2025-09-01",
    endDate: "2025-09-05",
    totalBudget: 500000, // 50만원
    schedules: [
      {
        id: "s001",
        time: "2025-09-01T09:00",
        description: "공항 도착 및 체크인",
        category: "교통",
        expectedCost: 15000,
        actualCost: 14000,
      },
      {
        id: "s002",
        time: "2025-09-01T12:30",
        description: "현지 식당 점심",
        category: "식비",
        expectedCost: 20000,
        actualCost: 22000,
      },
    ],
    expenses: [
      {
        id: "e001",
        category: "식비",
        amount: 22000,
        time: "2025-09-01T12:30",
      },
      {
        id: "e002",
        category: "교통",
        amount: 14000,
        time: "2025-09-01T09:00",
      },
    ],
  },
  {
    id: "t002",
    title: "부산 가족 여행",
    startDate: "2025-10-10",
    endDate: "2025-10-12",
    totalBudget: 300000,
    schedules: [
      {
        id: "s003",
        time: "2025-10-10T11:00",
        description: "해운대 해수욕장 방문",
        category: "관광",
        expectedCost: 0,
      },
      {
        id: "s004",
        time: "2025-10-10T19:00",
        description: "회식 저녁",
        category: "식비",
        expectedCost: 40000,
      },
    ],
    expenses: [],
  },
];
