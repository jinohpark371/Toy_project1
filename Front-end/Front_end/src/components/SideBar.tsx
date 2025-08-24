// components/Sidebar/Sidebar.tsx
import { useState } from "react";
import styled from "styled-components";
import type { FilterOptions, SortOptions } from "../types/sidebar";

type SidebarProps = {
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sort: SortOptions) => void;
  summary: {
    totalTrips: number;
    totalBudget: number;
    totalSpent: number;
    avgSpent: number;
    avgSchedules: number;
  };
};

export default function Sidebar({ onFilterChange, onSortChange, summary }: SidebarProps) {
  const [filters, setFilters] = useState<FilterOptions>({});

  const handleFilter = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Aside>
      <h3>필터링</h3>
      <Section>
        <Label>여행 기간</Label>
        <button onClick={() => handleFilter("period", "upcoming")}>다가올 여행</button>
        <button onClick={() => handleFilter("period", "past")}>지난 여행</button>
      </Section>

      <Section>
        <Label>예산</Label>
        <button onClick={() => handleFilter("budget", "under50")}>50만원 이하</button>
        <button onClick={() => handleFilter("budget", "over100")}>100만원 이상</button>
      </Section>

      <Section>
        <Label>카테고리</Label>
        {["식비", "교통", "숙박", "관광"].map((c) => (
          <button key={c} onClick={() => handleFilter("category", c as any)}>{c}</button>
        ))}
      </Section>

      <Section>
        <Label>참여자</Label>
        {["혼자", "가족", "친구", "회사"].map((p) => (
          <button key={p} onClick={() => handleFilter("participants", p as any)}>{p}</button>
        ))}
      </Section>

      <h3>정렬</h3>
      <Section>
        <button onClick={() => onSortChange("budget-desc")}>예산 높은 순</button>
        <button onClick={() => onSortChange("budget-asc")}>예산 낮은 순</button>
        <button onClick={() => onSortChange("spent-desc")}>사용 금액 많은 순</button>
        <button onClick={() => onSortChange("spent-asc")}>사용 금액 적은 순</button>
        <button onClick={() => onSortChange("date-near")}>가까운 여행</button>
        <button onClick={() => onSortChange("date-far")}>먼 여행</button>
        <button onClick={() => onSortChange("title")}>제목 가나다순</button>
      </Section>

      <h3>통계 요약</h3>
      <SummaryBox>
        <p>여행 총 {summary.totalTrips}건</p>
        <p>총 예산: ₩{summary.totalBudget.toLocaleString()}</p>
        <p>총 지출: ₩{summary.totalSpent.toLocaleString()}</p>
        <p>평균 지출: ₩{summary.avgSpent.toLocaleString()}</p>
        <p>평균 일정 수: {summary.avgSchedules}</p>
      </SummaryBox>
    </Aside>
  );
}

const Aside = styled.aside`
  background: #fafafa;
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 12px;
`;

const Section = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  button {
    font-size: 12px;
    padding: 4px 8px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #f3f4f6;
    }
  }
`;

const Label = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 4px;
  width: 100%;
`;

const SummaryBox = styled.div`
  font-size: 13px;
  color: #374151;
  line-height: 1.6;
`;
