import { HeaderContainer, Headerh1 } from "./HeaderElement";

const Header = ({ section }) => {
  return (
    <HeaderContainer>
      <Headerh1>Quiz {section}</Headerh1>
    </HeaderContainer>
  );
};

export default Header;
