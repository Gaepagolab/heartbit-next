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
import useOnKeyDown from "hooks/useOnKeyDown";

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

  useOnKeyDown("[", toggleSidebar);

  return (
    <Root open={sidebarOpen}>
      <Inner>
        <Logo>Heartbit</Logo>
        {/* <button onClick={toggleSidebar}>hide</button> */}
        <LinkList>
          {renderMenuItem(router, "Analysis", "analysis", {
            pathname: "/",
            as: "/",
          })}
          {renderMenuItem(router, "Defi / Cefi", "defi-cefi")}
          {renderMenuItem(router, "AI Report", "ai-report")}
        </LinkList>
      </Inner>
    </Root>
  );
};

const renderMenuItem = (
  router: NextRouter,
  text: string,
  iconType: any,
  path?: Path
) => {
  const { pathname, as } = path || {};
  const isImplemented = !!path;
  const active = router.pathname.includes(path?.pathname);

  const onClick = () => {
    router.push({ pathname }, as, { shallow: true });
  };

  return (
    <LinkItem onClick={onClick} active={active} isImplemented={isImplemented}>
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>준비 중입니다...</NotImplemented>}
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

const LinkItem = styled.div<{ active: boolean; isImplemented: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 24px;
  color: ${Color.textLight};
  ${mixin.clickable}
  ${(props) =>
    !props.isImplemented
      ? `cursor: not-allowed;`
      : `&:hover { background: ${Color.backgroundLight}; }`}
`;

const LinkText = styled.div`
  padding: 8px 12px 8px 24px;
  ${font.size(18)};
`;

const NotImplemented = styled.div`
  position: absolute;
  display: inline-block;
  width: ${sidebarWidth}px;
  padding: 8px 12px 8px 24px;
  border-radius: 3px;
  background: ${Color.backgroundMedium};
  text-transform: uppercase;
  opacity: 0;
  ${LinkItem}:hover & {
    opacity: 1;
  }
`;

export default Sidebar;
