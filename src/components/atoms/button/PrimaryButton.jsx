import styled from "styled-components";
import { BaseButton } from "./BaseButton";

// どんな言葉でもボタンとして生成できるようにする
export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// 既存のcssを上書きすることでアレンジして使用する
const SButton = styled(BaseButton)`
  background-color: #29da8a;
`;
