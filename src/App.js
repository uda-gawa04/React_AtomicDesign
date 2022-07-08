import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/Serchinput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

const user = {
  name: "hayashi",
  image: "https://source.unsplash.com/gKXKBY-C-Dk",
  email: "seafoerf.com",
  phone: "000-123-555",
  company: {
    name: "test"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>sub-test</SecondaryButton>
      <br />
      <SerchInput />
      <UserCard user={user} />
    </div>
  );
}
