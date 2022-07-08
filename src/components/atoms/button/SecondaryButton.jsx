import styled from "styled-components";
import { BaseButton } from "./BaseButton";

// どんな言葉でもボタンとして生成できるようにする
export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #191970;
  color: #fff;
`;
