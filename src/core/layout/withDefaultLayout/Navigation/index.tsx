import { FC } from "react";
import styled, { css } from "styled-components";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

import { font, size, mixin, color } from "shared/utils/styles";
import { Icon, IconType } from "shared/components";

const Navigation: FC = () => {
  const router = useRouter();

  return (
    <Root>
      <Header>
        <Logo>Heartbit</Logo>
      </Header>
      <Body>
        {renderMenuItem(router, "트랜드", "BTC", "/")}
        {renderMenuItem(router, "Indicator", "BTC", "/indicator")}
        {renderMenuItem(router, "Defi/Cefi", "BTC", "/defi-cefi")}
        {renderMenuItem(router, "AI 리포트", "BTC", "/ai-report")}
      </Body>
    </Root>
  );
};

const renderMenuItem = (
  router: NextRouter,
  text: string,
  icon: IconType,
  href?: string
) => {
  const active = router.pathname.includes(href);

  return (
    <Link href={href}>
      <a>
        <LinkItem active={active}>
          <Icon name={icon} />
          <LinkText>{text}</LinkText>
        </LinkItem>
      </a>
    </Link>
  );
};

const Root = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${size.navigationWidth}px;
`;

const Header = styled.div`
  ${mixin.flexSet()}
  height: 64px;
`;
const Body = styled.div``;

const Logo = styled.div`
  ${font.bold}
  ${font.size(22)}
`;

const LinkItem = styled.div<{ active: boolean }>`
  height: 112px;
  color: ${color.textDark};
  ${mixin.flexSet()}
  flex-direction: column;

  ${(props) =>
    props.active &&
    css`
      color: ${color.textWhite};
      ${font.bold}
    `}
`;
const LinkText = styled.div`
  ${font.size(15)}
  line-height: 18px;
  margin-top: 10px;
`;

export default Navigation;
