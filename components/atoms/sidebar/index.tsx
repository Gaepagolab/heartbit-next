import { FC } from "react";
import styled from "styled-components";
import { NextRouter, useRouter } from "next/dist/client/router";
import {
  AiFillFileText,
  AiOutlineBank,
  AiOutlineAreaChart,
  AiOutlineMail,
  AiFillCopyrightCircle,
  AiOutlineLeft,
} from "react-icons/ai";

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
        <ToggleDiv open={sidebarOpen}>
          <ToggleButton onClick={toggleSidebar}>
            <AiOutlineLeft />
          </ToggleButton>
        </ToggleDiv>
        <LinkList>
          {renderMenuItem(router, "Analysis", "analysis", {
            pathname: "/",
            as: "/",
          })}
          {renderMenuItem(router, "Defi / Cefi", "defi-cefi", {
            pathname: "/finance",
            as: "/finance"
          })}
          {renderMenuItem(router, "AI Report", "ai-report")}
        </LinkList>

        <Footer>
          <FooterItem>
            <AiOutlineMail />
            <a href="mailto:gaepago@gmail.com">gaepago@gmail.com</a>
          </FooterItem>
          <FooterItem>
            <AiFillCopyrightCircle />
            Gaepago Lab
          </FooterItem>
        </Footer>
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
  const $Icon = iconMap[iconType];

  const onClick = () => router.push({ pathname }, as, { shallow: true });

  return (
    <LinkItem onClick={onClick} active={active} isImplemented={isImplemented}>
      <LinkText>
        <$Icon />
        {text}
      </LinkText>
      {!isImplemented && <NotImplemented>준비중 입니다...</NotImplemented>}
    </LinkItem>
  );
};

const iconMap = {
  analysis: AiOutlineAreaChart,
  "defi-cefi": AiOutlineBank,
  "ai-report": AiFillFileText,
};

const Root = styled.nav<{ open: boolean }>`
  position: fixed;
  width: ${sidebarWidth}px;
  height: 100vh;
  background: linear-gradient(
    180deg,
    ${Color.backgroundMedium},
    ${Color.backgroundDark}
  );
  border-right: 1px solid ${Color.borderDark};
  box-sizing: initial;
  z-index: ${zIndexValues.sidbar};
  transition: 0.3s ease-in-out;
  white-space: nowrap;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  ${(props) => !props.open && `width: ${foldedSidebarWidth}px;`}
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
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
  margin-top: 32px;
`;

const LinkItem = styled.div<{ active: boolean; isImplemented: boolean }>`
  position: relative;
  ${mixin.flexSet()}
  border-radius: 3px;
  margin-bottom: 24px;
  color: ${Color.textLight};
  ${mixin.clickable}
  ${(props) =>
    !props.isImplemented
      ? `cursor: not-allowed;`
      : `&:hover { 
        color: ${Color.primary};
        background: ${Color.backgroundMedium}
      }`}
`;

const LinkText = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 24px;
  ${mixin.flexSet("flex-start")}
  ${font.size(18)};

  > svg {
    margin-bottom: 4px;
    margin-right: 12px;
  }
`;

const NotImplemented = styled.div`
  position: absolute;
  display: inline-block;
  width: ${sidebarWidth}px;
  height: 100%;
  padding: 8px 24px;
  border-radius: 3px;
  background: ${Color.backgroundMedium};
  text-transform: uppercase;
  opacity: 0;
  ${LinkItem}:hover & {
    opacity: 1;
  }
`;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  padding: 24px;
`;

const FooterItem = styled.div`
  color: ${Color.textMedium};
  margin-bottom: 8px;

  svg {
    margin-right: 12px;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 24px;
  right: -8px;
  z-index: 2;
  border: 1px solid #ffffff;
  background-color: ${Color.backgroundMedium};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${mixin.flexSet()}
  color: #ffffff;
  ${font.size(20)}

  &:hover {
    color: ${Color.textDarkest};
    background-color: ${Color.white};
  }
`;

const ToggleDiv = styled.div<{ open: boolean }>`
  position: fixed;
  left: ${sidebarWidth}px;
  height: 100vh;
  width: 2px;
  transition: 0.3s ease-in-out;
  ${(props) => !props.open && `left: ${foldedSidebarWidth}px;`}

  opacity: 0;
  ${Root}:hover & {
    opacity: 1;
  }

  svg {
    ${(props) => !props.open && `transform: rotate(180deg);`}
  }
`;

export default Sidebar;
