import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";

import Trend from "Trend";

const TrendPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Heartbit - Trend</title>
      </Head>
      <Trend />
    </Fragment>
  );
};

export default TrendPage;
