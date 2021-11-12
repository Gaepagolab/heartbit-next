import { FC } from "react";

import { StyledPanel } from "./Styles";

export interface PanelProps {}

const Panel: FC<PanelProps> = ({ children }) => (
  <StyledPanel>{children}</StyledPanel>
);

export default Panel;
