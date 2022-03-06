import Head from "next/head";
import { Fragment } from "react";

import AIReport from "pageComponents/AIReport";

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

export default function AIReportPage() {
  return (
    <Fragment>
      <Head>
        <title>Heartbit - AI Report</title>
      </Head>
      <AIReport />
    </Fragment>
  );
}
