import Head from "next/head";
import Finance from "../pageComponents/Finance";

const finance = () => {

    return (
        <>
            <Head>
                <title>Heartbit - Finance</title>
            </Head>
          <Finance />
        </>
    );
};


export default finance;