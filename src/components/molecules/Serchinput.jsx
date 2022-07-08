import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SerchInput = () => {
  return (
    <SContainer>
      <Input placeholder="word" />
      <SButtonWrappar>
        <PrimaryButton>Serch</PrimaryButton>
      </SButtonWrappar>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: frex;
  align-items: center;
`;

const SButtonWrappar = styled.div`
  padding-left: 8px;
`;
