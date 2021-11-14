import styled from "styled-components";

import { VolatiltyProps } from ".";
import { color } from "shared/utils/styles";

export const Percentage = styled.div<VolatiltyProps>`
  ${(props) => props.type === "top" && `color: ${color.green500};`}
  ${(props) => props.type === "down" && `color: ${color.red500};`}
`;
