import { FC } from "react";

import { Root, Title, Percentage, BackgroundText } from "./Styles";

interface KimpProps {}

const Kimp: FC<KimpProps> = () => {
  return (
    <Root>
      <BackgroundText>H</BackgroundText>
      <Title>비트코인 김프</Title>
      <Percentage>
        1.0443<small>%</small>
      </Percentage>
    </Root>
  );
};

export default Kimp;
