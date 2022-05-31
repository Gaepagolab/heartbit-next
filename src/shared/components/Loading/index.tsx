import ReactLoading, { LoadingProps } from "react-loading";
import { color } from "../../utils/styles";

import * as S from "./Styles";

function Loading(props: LoadingProps) {
  return (
    <S.Root>
      <ReactLoading {...props} />
    </S.Root>
  );
}

Loading.defaultProps = {
  type: "spin",
  width: 40,
  height: 40,
  color: color.primary,
};

export default Loading;
