import styled from "styled-components";

import { color, font, media, mixin } from "shared/utils/styles";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 56px;

  ${media.medium} {
    grid-template-columns: 1fr;
    gap: 120px;
  }
`;

export const ChartWrapper = styled.div``;

export const ChartType = styled.h3`
  ${font.size(20)}
  ${font.bold}
  line-height: 29px;
  margin-bottom: 54px;
  padding-left: 16px;
`;

export const Error = styled.div`
  ${font.size(14)}
  color: ${color.red500};
`;
