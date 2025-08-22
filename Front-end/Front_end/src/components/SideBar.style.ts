import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  padding: 20px;
  border-right: 1px solid #ddd;
  font-size: 14px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  background: #6b4eff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #5536d1;
  }
`;
