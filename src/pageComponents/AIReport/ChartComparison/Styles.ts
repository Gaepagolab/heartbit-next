import styled from "styled-components";

import { font } from "shared/utils/styles";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 56px;
`;

export const ChartWrapper = styled.div``;

export const ChartType = styled.h3`
  ${font.size(20)}
  ${font.bold}
  line-height: 29px;
  margin-bottom: 54px;
  padding-left: 16px;
`;
