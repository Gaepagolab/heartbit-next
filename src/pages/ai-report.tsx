import { useState, useEffect, useCallback, ChangeEvent } from "react";
import dynamic from "next/dynamic";

import { fetchCsv } from "shared/utils/csv";
import { Grid } from "../shared/components";

const MainChart = dynamic(() => import("shared/components/MainChart"), {
  ssr: false,
});

interface Row {
  date: Date;
  datetime: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface Criterion {
  current_end: Date;
  current_start: Date;
  find_end: Date;
  find_start: Date;
}

const criterion_map = {
  0: "최고",
  1: "중간",
  2: "낮음",
};

export default function AIReport() {
  const [rows, setRows] = useState<Row[]>([]);
  const [criterions, setCriterions] = useState<Criterion[]>([]);
  const [currentCriterionIndex, setCurrentCriterionIndex] = useState<number>(0);

  const handleCurrentCriterian = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setCurrentCriterionIndex(Number(e.target.value));
    },
    []
  );

  useEffect(() => {
    fetch("/BTC_1d.json")
      .then((res) => res.json())
      .then(
        ({
          criterion1,
          criterion2,
          criterion3,
        }: {
          criterion1: Criterion;
          criterion2: Criterion;
          criterion3: Criterion;
        }) => setCriterions([criterion1, criterion2, criterion3])
      );
    fetchCsv("/BTC_1d.csv").then((res) => {
      const [_, ...data] = res as any;
      const rows = data.map(
        (d) =>
          ({
            date: new Date(d[0]),
            datetime: d[0],
            open: Number(d[1]),
            high: Number(d[2]),
            low: Number(d[3]),
            close: Number(d[4]),
            volume: Number(d[5]),
          } as Row)
      );
      setRows(rows);
    });
  }, []);
  return (
    <div style={{ padding: 40 }}>
      <div style={{ float: "right", marginBottom: 40 }}>
        <select onChange={handleCurrentCriterian}>
          {criterions.map((_, index) => (
            <option index={index} value={index}>
              {criterion_map[index]}
            </option>
          ))}
        </select>
      </div>
      <Grid gap={24}>
        <MainChart
          rows={rows}
          end={criterions[currentCriterionIndex]?.current_end}
          start={criterions[currentCriterionIndex]?.current_start}
        />

        <MainChart
          rows={rows}
          end={criterions[currentCriterionIndex]?.find_end}
          start={criterions[currentCriterionIndex]?.find_start}
        />
      </Grid>
    </div>
  );
}
