import styled from "styled-components";
import { BaseButton } from "./BaseButton";

// どんな言葉でもボタンとして生成できるようにする
export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #ccc;
  color: #fff;
`;
