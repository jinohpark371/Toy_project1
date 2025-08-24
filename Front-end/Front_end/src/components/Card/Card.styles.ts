import styled from "styled-components";

export const CardBox = styled.article`
  background: var(--panel);
  overflow: hidden;
  transition: transform .08s ease;
  &:hover { transform: translateY(-2px); }
  height: fit-content;
  border-radius: 50px;
 background: #f5f5f5;
 position: relative;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;

  &:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  &:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

export const Thumb = styled.div`
  position: relative; aspect-ratio: 3 / 2; overflow:hidden;
  img { width:120%; height:120%; object-fit:cover; display:block; }

`;
export const Badge = styled.span`
  position: absolute; top: 10px; left: 10px;
  background: #ef4444; color: white; font-size: 12px;
  padding: 4px 8px; border-radius: 999px;
`;

export const Meta = styled.div` padding:12px; `;
export const Brand = styled.div` font-size:12px; color:var(--muted); `;
export const Title = styled.h3` margin:6px 0 8px; font-size:16px; `;
export const Price = styled.div` font-weight:700; margin-bottom:8px; `;
export const Row = styled.div` display:flex; justify-content:space-between; align-items:center; `;
export const MiniSwatches = styled.div` display:flex; gap:6px; `;
export const Mini = styled.span<{color:string}>`
  width:12px; height:12px; border-radius:50%; border:1px solid #1f2230; background:${p=>p.color};
`;
export const Rating = styled.span` font-size:12px; color:#fde68a; `;
export const TagLine = styled.div` margin-top:10px; display:flex; gap:6px; flex-wrap:wrap; `;
export const Chip = styled.span` font-size:11px; background: #e0f2ff; padding:4px 8px; border-radius:10px; color: #0369a1;`;
export const RarityWrapper = styled.div`
  margin-top: 10px;
`;

export const RarityLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 4px;
  color: #4b5563; /* 중간 톤 회색 */
`;

export const RarityBar = styled.div`
  position: relative;
  height: 8px;
  background: #e5e7eb; /* 연한 회색 */
  border-radius: 6px;
  overflow: hidden;
`;

export const RarityFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #a855f7); /* 보라+블루 그라데이션 */
  transition: width 0.3s ease;
`;

export const RarityValue = styled.span`
  margin-left: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6d28d9; /* 진한 보라 */
`;