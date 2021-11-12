import styled from "styled-components";

import { Grid } from "shared/components";

export const Root = styled.div`
  padding: 40px 24px;
  height: 100vh;
  overflow-y: auto;
`;

export const FirstGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 5fr;
  gap: 16px;
`;

export const AdWrapper = styled.div`
  height: 140px;
`;
