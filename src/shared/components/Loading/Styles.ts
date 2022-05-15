import styled from "styled-components";

import { mixin } from "shared/utils/styles";

export const Root = styled.div`
  ${mixin.flexSet()}
  width: 100%;
  height: 100%;
`;
