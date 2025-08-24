import type { Trip } from "../../types/trip";
import * as S from "./Card.styles";

export default function Card({ item }: { item: Trip }) {
  // 지출 합계 & 소진 퍼센트 계산
  const totalSpent = (item.expenses ?? []).reduce((sum, e) => sum + e.amount, 0);
  const spentPercent =
    item.totalBudget > 0
      ? Math.min(Math.round((totalSpent / item.totalBudget) * 100), 100)
      : 0;

  return (
    <S.CardBox>
      {/* 썸네일 자리에 간단한 여행 정보 배경 (이미지가 없으니 비워둬도 OK) */}
      <S.Thumb />

      <S.Meta>
        {/* 제목 */}
        <S.Title>{item.title}</S.Title>

        {/* 기간 */}
        <S.Row style={{ marginTop: 6 }}>
          <S.Chip>
            {item.startDate} ~ {item.endDate}
          </S.Chip>
          <S.Chip>일정 {item.schedules?.length ?? 0}개</S.Chip>
          <S.Chip>지출 {item.expenses?.length ?? 0}건</S.Chip>
        </S.Row>

        {/* 총 예산 & 사용 금액 */}
        <S.Row style={{ marginTop: 12 }}>
          {/* Price 스타일을 재활용해 큰 숫자 표기 */}
          <S.Price>총 예산 ₩{item.totalBudget.toLocaleString()}</S.Price>
        </S.Row>

        {/* 예산 소진 바 (예전 Rarity 컴포넌트 재활용) */}
        <div style={{ marginTop: 8 }}>
          <S.RarityWrapper>
            <S.RarityLabel>사용 금액</S.RarityLabel>
            <S.RarityBar>
              <S.RarityFill style={{ width: `${spentPercent}%` }} />
            </S.RarityBar>
            <S.RarityValue>
              ₩{totalSpent.toLocaleString()} ({spentPercent}%)
            </S.RarityValue>
          </S.RarityWrapper>
        </div>
      </S.Meta>
    </S.CardBox>
  );
}
