import * as React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { sidebarWidth, media, Color, mixin } from "../../../utils/styles";

export interface PageProps {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  margin-left: ${sidebarWidth}px;
  padding: 48px 24px 48px 24px;
  background-color: ${Color.backgroundDark};

  ${media.custom(1600)} {
    padding-left: 16px;
    padding-right: 16px;
  }

  ${mixin.backgroundImage("/assets/images/main_bg.png")}
`;

export default Page;
