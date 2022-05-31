import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";

import DefiCefi from "pageComponents/DefiCefi";

const DefiCefiPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Heartbit - Defi-Cefi</title>
      </Head>
      <DefiCefi />
    </Fragment>
  );
};

export default DefiCefiPage;
