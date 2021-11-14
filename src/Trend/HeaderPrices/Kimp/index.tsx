import { FC, useEffect, useState } from "react";

import * as S from "./Styles";
import { socketClient } from "shared/utils/client";

interface KimpProps {}

const Kimp: FC<KimpProps> = () => {
  const [kimp, setKimp] = useState<number>();
  useEffect(() => {
    socketClient("kimp").on("message", (data: string) => {
      const obj = JSON.parse(data);
      setKimp(obj.kimp);
    });
  }, []);

  return (
    <S.Root>
      <S.BackgroundText>H</S.BackgroundText>
      <S.Title>비트코인 김프</S.Title>
      <S.Percentage>
        {kimp}
        <small>%</small>
      </S.Percentage>
    </S.Root>
  );
};

export default Kimp;
