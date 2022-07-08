import styled from "styled-components";
import { SerchInput } from "../molecules/SerchInput";
import { UserCard } from "../organism/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hayashi-${val}`,
    image: "https://source.unsplash.com/gKXKBY-C-Dk",
    email: "seafoerf.com",
    phone: "000-123-555",
    company: {
      name: "test"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ALL Users</h2>
      <SerchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
