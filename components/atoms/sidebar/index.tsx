import { FC } from "react";
import styled from "styled-components";
import { NextRouter, useRouter } from "next/dist/client/router";

import {
  Color,
  sidebarWidth,
  font,
  mixin,
  zIndexValues,
  foldedSidebarWidth,
} from "utils/styles";

type Path = {
  as: string;
  pathname: string;
};

type SidebarProps = {
  sidebarOpen: boolean;
  toggleSidebar: VoidFunction;
};

const Sidebar: FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const router = useRouter();

  return (
    <Root open={sidebarOpen}>
      <Inner>
        <Logo>Heartbit</Logo>
        <button onClick={toggleSidebar}>hide</button>
        <LinkList>
          {renderMenuItem(router, "Analysis", "analysis", {
            pathname: "/",
            as: "/",
          })}
          {renderMenuItem(router, "Defi / Cefi", "defi-cefi", {
            pathname: "/defi-cefi",
            as: "/defi-cefi",
          })}
          {renderMenuItem(router, "AI Report", "ai-report", {
            pathname: "ai-report",
            as: "/ai-report",
          })}
        </LinkList>
      </Inner>
    </Root>
  );
};

const renderMenuItem = (
  router: NextRouter,
  text: string,
  iconType: any,
  path: Path
) => {
  const { pathname, as } = path;
  const active = router.pathname.includes(path.pathname);

  const onClick = () => {
    router.push({ pathname }, as, { shallow: true });
  };

  return (
    <LinkItem onClick={onClick} active={active}>
      <LinkText>{text}</LinkText>
    </LinkItem>
  );
};

const Root = styled.nav<{ open: boolean }>`
  position: fixed;
  width: ${sidebarWidth}px;
  height: 100vh;
  background: linear-gradient(180deg, #313557, #1e1e2f);
  border-right: 1px solid ${Color.borderDark};
  box-sizing: initial;
  z-index: ${zIndexValues.sidbar};
  transition: 0.3s ease-in-out;
  overflow: hidden auto;
  ${(props) => !props.open && `width: ${foldedSidebarWidth}px;`}
`;

const Inner = styled.div`
  position: relative;
  min-width: ${sidebarWidth}px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Logo = styled.div`
  padding: 24px 40px;
  display: flex;
  justify-content: center;
  color: ${Color.textLight};
  ${font.size(20)}
  ${mixin.clickable};
`;

const LinkList = styled.div`
  margin-top: 64px;
`;

const LinkItem = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px 8px 40px;
  border-radius: 3px;
  margin-bottom: 24px;
  color: ${Color.textLight};
  ${mixin.clickable}
`;

export const LinkText = styled.div`
  padding-top: 4px;
  margin-left: 24px;
  ${font.size(18)};
`;

export default Sidebar;
