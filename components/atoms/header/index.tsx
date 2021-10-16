import { FC } from "react";
import styled from "styled-components";

import { navbarHeight, Color, zIndexValues, mixin } from "utils/styles";
import { useAuthModalAction } from "hooks/useAuthModalAction";
import useScrollPosition from "hooks/useScrollPosition";

const Header: FC = () => {
  const { openModal } = useAuthModalAction();
  const { y } = useScrollPosition();
  const isAtTop = y <= navbarHeight;

  console.log(y);

  return (
    <Root isAtTop={isAtTop}>
      <UserArea onClick={openModal}>Login</UserArea>
    </Root>
  );
};

const Root = styled.div<{ isAtTop: boolean }>`
  position: fixed;
  ${mixin.flexSet("flex-end")};
  width: 100%;
  height: ${navbarHeight}px;
  z-index: ${zIndexValues.header};
  background-color: ${(props) =>
    !props.isAtTop ? "transparent" : Color.backgroundDark};
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${Color.textLight};
  ${mixin.clickable};
`;

export default Header;
