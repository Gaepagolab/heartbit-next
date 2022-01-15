import { FC, useState, useEffect } from "react";
import { QuoationService } from "node-upbit"; // 1. node-upbit 패키지 import
import { socketClient } from "shared/utils/client";
import { ButtonsTab, Panel, Table, THead, TBody } from "shared/components";
import * as S from "./Styles";
import { upbit_transaction_three } from "../../shared/api/upbit";
import { useUpbit } from "../../shared/hooks/useUpbit";

export interface VolatiltyProps {
  type: "top" | "down";
}

type Volatilty = { ko: string; price: number };

const VoltalityType = {
  top: "상승",
  down: "하락",
};

const TERM_MAP = {
  THREE: "three_min_transaction",
  FIVE: "five_min_transaction",
};

const tabItems = [
  { id: TERM_MAP.THREE, name: "3min" },
  { id: TERM_MAP.FIVE, name: "5min" },
];

const Volatilty: FC<VolatiltyProps> = ({ type }) => {
  const [topVolatilities, setTopVolatilities] = useState<Volatilty[]>([]);
  const [term, setTerm] = useState(TERM_MAP.THREE);
  const upbit = useUpbit();

  // useEffect(() => {
  //   socketClient(term).on("message", (data: string) => {
  //     const obj = JSON.parse(data);
  //     setTopVolatilities(obj[type]);
  //   });
  // }, [term, type]);

  // useEffect(() => {
  //   upbit_transaction_three().then((res) => {
  //     // console.log(res);
  //   });
  // });

  return (
    <Panel
      title={`가격 변동성 ${VoltalityType[type]} TOP5`}
      description={`(업비트 기준)`}
      renderSelector={() => (
        <ButtonsTab
          width="116px"
          height="24px"
          items={tabItems}
          onClick={(targetId: string) => setTerm(targetId)}
        />
      )}
    >
      <Table>
        <THead>
          <tr>
            <th>코인명</th>
            <th>상승률</th>
          </tr>
        </THead>
        <TBody>
          {(sortByPrice(topVolatilities) || []).map((v) => (
            <tr key={v.ko}>
              <td>{v.ko}</td>
              <td>
                <S.Percentage type={type}>{v.price}%</S.Percentage>
              </td>
            </tr>
          ))}
        </TBody>
      </Table>
    </Panel>
  );
};

const sortByPrice = <T extends { price: number }>(arr: T[]) =>
  arr.sort((a1, a2) => a1.price - a2.price);

export default Volatilty;
