import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";

import {
  navbarHeight,
  Color,
  sidebarWidth,
  font,
  mixin,
  zIndexValues,
} from "utils/styles";

const Sidebar: FC = () => {
  return (
    <Root>
      <LinkList>
        {/* {renderLinkItem(match, 'Analysis', 'analysis', 'analysis')}
        {renderLinkItem(match, 'Defi / Cefi', 'defi-cefi', 'defi-cefi')}
        {renderLinkItem(match, 'AI Report', 'ai-report', 'ai-report')} */}
      </LinkList>
    </Root>
  );
};

const icons = {
  analysis: FaChartBar,
  "defi-cefi": FaChartPie,
  "ai-report": FaChartLine,
};

const Root = styled.div`
  position: fixed;
  padding-top: ${navbarHeight}px;
  width: ${sidebarWidth}px;
  height: calc(100vh - ${navbarHeight}px);
  /* background: ${Color.backgroundMedium}; */
  background-color: ${Color.primary};
  background-image: linear-gradient(
    315deg,
    ${Color.backgroundMedium} 0%,
    ${Color.primary} 74%
  );

  border-right: 1px solid ${Color.borderDark};
  box-sizing: initial;
  transition: 0.5s;
  z-index: ${zIndexValues.sidbar};
`;

const LinkList = styled.div`
  margin-top: 64px;
`;

const LinkItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px 8px 40px;
  border-radius: 3px;
  margin-bottom: 24px;

  ${mixin.clickable}
  ${mixin.link(Color.white)}
`;

export const LinkText = styled.div`
  padding-top: 4px;
  margin-left: 24px;
  ${font.size(18)};
`;

export default Sidebar;
