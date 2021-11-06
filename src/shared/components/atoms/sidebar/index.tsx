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

import { font, mixin, zIndexValues } from "shared/utils/styles";
import useOnKeyDown from "shared/hooks/useOnKeyDown";
import { useAuthModalAction } from "shared/hooks/useAuthModalAction";
import { Button } from "shared/components/atoms";
import useCurrentUser from "shared/hooks/useCurrentUser";
import { logout } from "shared/api/authenticate";

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
  const [currentUser, setCurrentUser] = useCurrentUser();
  const { openModal } = useAuthModalAction();

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
          {renderMenuItem(router, "트랜드", "analysis", {
            pathname: "/",
            as: "/",
          })}
          {renderMenuItem(router, "Defi / Cefi", "defi-cefi")}
          {renderMenuItem(router, "AI 리포트", "ai-report")}
        </LinkList>

        <Footer>
          <FooterItem>
            {currentUser ? (
              <div>
                {currentUser.name}
                <Button
                  width="100%"
                  size="lg"
                  onClick={async () => {
                    await logout();
                    setCurrentUser(null);
                  }}
                >
                  로그아웃
                </Button>
              </div>
            ) : (
              <Button width="100%" size="lg" onClick={openModal}>
                로그인
              </Button>
            )}
          </FooterItem>
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
  iconType: keyof typeof iconMap,
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
  height: 100vh;
  box-sizing: initial;
  transition: 0.3s ease-in-out;
  white-space: nowrap;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Logo = styled.div`
  padding: 24px 40px;
  display: flex;
  justify-content: center;
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
  ${mixin.clickable}
  ${(props) => (!props.isImplemented ? `cursor: not-allowed;` : `&:hover {}`)}
`;

const LinkText = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 24px;
  ${mixin.flexSet("flex-start")}
  ${font.size(18)};

  > svg {
    margin-right: 12px;
  }
`;

const NotImplemented = styled.div`
  position: absolute;
  display: inline-block;
  height: 100%;
  padding: 8px 24px;
  border-radius: 3px;
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
  width: 100%;
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${mixin.flexSet()}
  color: #ffffff;
  ${font.size(20)}
`;

const ToggleDiv = styled.div<{ open: boolean }>`
  position: fixed;
  width: 2px;
  transition: 0.3s ease-in-out;

  opacity: 0;
  ${Root}:hover & {
    opacity: 1;
  }

  svg {
    ${(props) => !props.open && `transform: rotate(180deg);`}
  }
`;

export default Sidebar;
