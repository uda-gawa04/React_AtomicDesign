import styled from "styled-components";

// 共通する要素をまとめることで、使いまわせるし、修正も楽
export const BaseButton = styled.button`
  color: #000;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
