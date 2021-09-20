import { FC } from "react";
import styled from "styled-components";

import {
  navbarHeight,
  Color,
  fontWeightHeader,
  zIndexValues,
} from "utils/styles";
import { useAuthModalAction } from "../../../hooks/useAuthModalAction";

const Header: FC = () => {
  const { openModal } = useAuthModalAction();
  return (
    <Root>
      <NavContainer>
        <Logo>Heartbit</Logo>
        <UserArea onClick={openModal}>Login</UserArea>
      </NavContainer>
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${navbarHeight}px;
  background: ${Color.backgroundMedium};
  border-bottom: 1px solid ${Color.black};
  z-index: ${zIndexValues.header};
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 24px;
  font-weight: ${fontWeightHeader};
  color: ${Color.textLight};
  margin-left: 40px;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${Color.textLight};
  margin-right: 40px;
  cursor: pointer;
`;

export default Header;
