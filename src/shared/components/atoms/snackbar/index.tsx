import { FC } from "react";
import styled, { css } from "styled-components";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineExclamation,
} from "react-icons/ai";

import { mixin } from "shared/utils/styles";

type SnackbarProps = {
  width: number | string;
  text: string;
  type: "success" | "error" | "warning";
};

const iconMap = {
  success: AiOutlineCheck,
  warning: AiOutlineExclamation,
  error: AiOutlineClose,
};

const Snackbar: FC<SnackbarProps> = ({ width, text, type }) => {
  const $Icon = iconMap[type];

  return (
    <Root type={type} style={{ width }}>
      <$Icon />
      <Text>{text}</Text>
    </Root>
  );
};

const Root = styled.div<{ type: SnackbarProps["type"] }>`
  position: relative;
  height: 48px;
  & > svg {
    left: 16px;
    position: absolute;
  }

  ${mixin.flexSet()}
  ${(props) => snackbarTypeSet[props.type]}
`;

const Text = styled.div`
  margin-left: 24px;
`;

const snackbarTypeSet = {
  success: css``,
};

export default Snackbar;
