import * as S from "./SideBar.style";

type FilterProps = {
  onFilterChange: (filters: {
    search: string;
    minPrice: number;
    maxPrice: number;
    category: string;
  }) => void;
  onSortChange: (sort: string) => void;
};

export default function Sidebar({ onFilterChange, onSortChange }: FilterProps) {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>검색</S.Label>
        <S.Input type="text" placeholder="상품명 검색" />
      </S.Section>

      <S.Section>
        <S.Label>정렬</S.Label>
        <S.Select onChange={(e) => onSortChange(e.target.value)}>
          <option value="priceAsc">가격 낮은순</option>
          <option value="priceDesc">가격 높은순</option>
          <option value="rarityDesc">희소성 높은순</option>
          <option value="ratingDesc">평점 높은순</option>
        </S.Select>
      </S.Section>

      <S.Section>
        <S.Label>가격 범위</S.Label>
        <S.Flex>
          <S.Input type="number" placeholder="최소" />
          <span> ~ </span>
          <S.Input type="number" placeholder="최대" />
        </S.Flex>
      </S.Section>

      <S.Section>
        <S.Label>카테고리</S.Label>
        <S.Select>
          <option value="">전체</option>
          <option value="outer">아우터</option>
          <option value="shirt">셔츠</option>
          <option value="pants">팬츠</option>
        </S.Select>
      </S.Section>

      <S.Button
        onClick={() =>
          onFilterChange({ search: "", minPrice: 0, maxPrice: 200000, category: "" })
        }
      >
        적용하기
      </S.Button>
    </S.Wrapper>
  );
}
