import { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { Color, font, fontWeightHeader, mixin } from "utils/styles";
import { socketClient } from "utils/client";

const Kimp: FC = () => {
  const [kimp, setKimp] = useState<number>();
  useEffect(() => {
    socketClient("kimp").on("message", (data: string) => {
      const obj = JSON.parse(data);
      setKimp(obj.kimp);
    });
  }, []);

  return (
    <Root>
      <Title>비트코인 김프</Title>
      <Percentage>{kimp}%</Percentage>
    </Root>
  );
};

const Root = styled.div`
  ${mixin.flexSet()}
  flex-direction: column;
  height: inherit;
`;

const Title = styled.div`
  ${font.size(24)}
  font-weight: ${fontWeightHeader};
  color: ${Color.primary};
`;

const Percentage = styled.span`
  margin-top: 4px;
  ${font.size(22)}
  color: ${Color.primary};
`;

export default Kimp;
