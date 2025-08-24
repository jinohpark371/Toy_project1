export interface Expense {
  id: string;
  category: string;   // 식비, 교통, 숙박 등
  amount: number;
  time: string;       // ISO string
}

export interface Schedule {
  id: string;
  time: string;       // ISO string (예: 2025-09-01T09:00)
  description: string;
  category: string;
  expectedCost: number;
  actualCost?: number;
}

export interface Trip {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  totalBudget: number;
  schedules: Schedule[];
  expenses: Expense[];
}
