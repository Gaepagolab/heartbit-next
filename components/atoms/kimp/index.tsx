import * as React from "react";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { Color, font, fontWeightHeader } from "utils/styles";
import { socketClient } from "utils/client";

export interface KimpProps {
  kimp: string;
}

const Kimp: FC<KimpProps> = () => {
  const [kimp, setKimp] = useState<number>();
  useEffect(() => {
    socketClient("kimp").on("message", (data) => {
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
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 96px;
`;

const Title = styled.div`
  ${font.size(14)}
  font-weight: ${fontWeightHeader};
  color: ${Color.primary};
`;

const Percentage = styled.span`
  margin-top: 4px;
  ${font.size(14)}
  color: ${Color.primary};
`;

export default Kimp;
