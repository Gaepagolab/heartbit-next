import React, { FC } from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

import * as S from "./Styles";
import { Button, Icon, IconType, Modal } from "shared/components";
import useToggle from "shared/hooks/useToggle";
import AuthForm from "./AuthForm";

const Navigation: FC = () => {
  const router = useRouter();
  const [modalOpen, toggleModal] = useToggle(false);

  return (
    <S.Root>
      <S.Header>
        <S.Logo>Heartbit</S.Logo>
      </S.Header>
      <S.Body>
        {renderMenuItem(router, "트랜드", "BTC", "/")}
        {renderMenuItem(router, "Indicator", "trends", "/indicator")}
        {renderMenuItem(router, "Defi/Cefi", "bank", "/defi-cefi")}
        {renderMenuItem(router, "AI 리포트", "report", "/ai-report")}
      </S.Body>
      <S.Footer>
        <S.UserArea onClick={toggleModal}>
          <Icon name="profile" />
          로그인
        </S.UserArea>
        <Modal
          title="로그인"
          isOpen={modalOpen}
          onClose={toggleModal}
          renderContent={({ close }) => (
            <React.Fragment>
              <S.ModalHeader>
                <S.ModalTitle>Login</S.ModalTitle>
                <Button onClick={close} variant="text">
                  <Icon name="close" />
                </Button>
              </S.ModalHeader>
              <AuthForm />
              <S.ModalFooter>
                <S.Logo>Heartbit</S.Logo>
              </S.ModalFooter>
            </React.Fragment>
          )}
        />
      </S.Footer>
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

export default Navigation;
