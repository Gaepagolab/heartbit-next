import { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { font, mixin } from "shared/utils/styles";
import { socketClient } from "shared/utils/client";

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
`;

const Percentage = styled.span`
  margin-top: 4px;
  ${font.size(22)}
`;

export default Kimp;
