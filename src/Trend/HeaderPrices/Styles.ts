import styled from "styled-components";

import { media, color } from "shared/utils/styles";

export const Root = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;

  height: 100%;
  padding: 20px 0;

  & > div:not(:last-of-type) {
    border-right: 1px solid ${color.backgroundDarkest};
  }

  ${media.medium} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.small} {
    grid-template-columns: 1fr;
  }
`;
