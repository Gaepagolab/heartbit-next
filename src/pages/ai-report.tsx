import Head from "next/head";
import { Fragment } from "react";

import AIReport from "pageComponents/AIReport";

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
