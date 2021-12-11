import styled from "styled-components";

import { font, color, mixin } from "shared/utils/styles";

export const Root = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(22, 30, 40, 0.6);
  border-radius: 12px;
`;

export const Header = styled.div`
  position: relative;
  padding: 16px 24px;
  ${mixin.flexSet("space-between")}
`;

export const Left = styled.div``;

export const Title = styled.h3`
  ${font.bold}
  ${font.size(16)}
  color:${color.textWhite};
`;

export const Description = styled.small`
  color: ${color.textMedium};
  ${font.size(13)}
`;

export const Selectors = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
