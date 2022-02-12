import styled from "styled-components";

import { color, font, mixin } from "shared/utils/styles";

export const Root = styled.div`
  position: relative;
  width: 100%;
  ${mixin.flexSet()}
  flex-direction: column;
`;

export const BackgroundText = styled.span`
  position: absolute;
  top: -148px;
  right: -48px;
  background: linear-gradient(
    153.68deg,
    ${color.red500} 5.8%,
    rgba(235, 83, 88, 0.541667) 19.19%,
    rgba(235, 83, 88, 0) 67.01%
  );
  ${font.size(280)}
  ${font.black}
  transform: rotateZ(333.68deg);
  opacity: 0.6;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = styled.div`
  ${font.size(18)}
  ${font.bold}
  color: ${color.textWhite};
  line-height: 26px;
`;
export const Percentage = styled.div`
  ${font.size(36)}
  line-height: 44px;
  color: ${color.red500};

  > small {
    ${font.size(16)}
  }
`;
