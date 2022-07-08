import styled from "styled-components";

export const UserIconwithName = (props) => {
  const { image, name, isAdmin } = props;

  return (
    <SContainer>
      <SImg height={160} width={205} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
