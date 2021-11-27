import { FC } from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

import { Icon, IconType, Modal } from "shared/components";
import {
  Header,
  Body,
  Logo,
  Root,
  Footer,
  UserArea,
  LinkItem,
  LinkText,
} from "./Styles";
import { useAuthModalAction } from "shared/hooks/useAuthModalAction";
import useToggle from "shared/hooks/useToggle";

const Navigation: FC = () => {
  const router = useRouter();
  const [toggle, setToggle] = useToggle(false);

  return (
    <Root>
      <Header>
        <Logo>Heartbit</Logo>
      </Header>
      <Body>
        {renderMenuItem(router, "트랜드", "BTC", "/")}
        {renderMenuItem(router, "Indicator", "trends", "/indicator")}
        {renderMenuItem(router, "Defi/Cefi", "bank", "/defi-cefi")}
        {renderMenuItem(router, "AI 리포트", "report", "/ai-report")}
      </Body>
      <Footer>
        <UserArea onClick={setToggle}>
          <Icon name="profile" />
          로그인
        </UserArea>
        <Modal
          isOpen={toggle}
          onClose={setToggle}
          renderContent={() => <div>hi</div>}
          renderLink={(modal) => (
            <div onClick={modal.open}>
              <div>dfdafafad</div>
            </div>
          )}
        />
      </Footer>
    </Root>
  );
};

const renderMenuItem = (
  router: NextRouter,
  text: string,
  icon: IconType,
  href?: string
) => {
  const active = router.pathname === href;

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

export default Navigation;
