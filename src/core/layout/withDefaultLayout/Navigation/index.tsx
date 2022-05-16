import React, { FC, memo } from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

import * as S from "./Styles";
import AuthModal from "./AuthModal";
import { Icon, IconType } from "shared/components";

import useAuthModal from "shared/hooks/useAuthModal";
import useCurrentUser from "shared/hooks/useCurrentUser";

import { logout } from "shared/api/authenticate";

const Navigation: FC = () => {
  const router = useRouter();
  const { openModal } = useAuthModal();
  const [currentUser, setCurrentUser] = useCurrentUser();

  const isLoggingIn = !!currentUser;

  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <S.Root>
      <S.Header>
        <S.Logo>Heartbit</S.Logo>
      </S.Header>
      <S.Body>
        {renderMenuItem(router, "트랜드", "BTC", "/")}
        {renderMenuItem(router, "Indicator", "trends", "/indicator")}
        {/*{renderMenuItem(router, "Defi/Cefi", "bank", "/defi-cefi")}*/}
        {renderMenuItem(router, "Defi/Cefi", "bank", "/finance")}
        {renderMenuItem(router, "AI 리포트", "report", "/ai-report")}
      </S.Body>
      <S.Footer>
        <S.UserArea>
          {!isLoggingIn ? (
            <S.Login onClick={openModal}>
              <Icon name="profile" />
              로그인
            </S.Login>
          ) : (
            <S.Login onClick={handleLogout} active>
              <Icon name="profile" />
              <S.Username>{currentUser?.name}</S.Username>
            </S.Login>
          )}
        </S.UserArea>
      </S.Footer>
      <AuthModal />
    </S.Root>
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
        <S.LinkItem active={active}>
          <Icon name={icon} />
          <S.LinkText>{text}</S.LinkText>
        </S.LinkItem>
      </a>
    </Link>
  );
};

export default memo(Navigation);
