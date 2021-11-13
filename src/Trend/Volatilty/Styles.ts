import styled from "styled-components";
import { mixin, font, color } from "../../shared/utils/styles";

export const Root = styled.div`
  height: 100%;
`;
export const Header = styled.div`
  padding: 16px 24px;
  ${mixin.flexSet("space-between")};
`;
export const Title = styled.h3`
  ${font.bold}
  ${font.size(16)}
  color:${color.textWhite};

  & > small {
    color: ${color.textMedum};
    ${font.size(13)}
  }
`;

export const Content = styled.div``;
