import { NextPage } from "next";
import Head from "next/head";

import { Header } from "../../shared/components";
import Navigation from "./Navigation";
import FinanceInfo from "./FinanceInfo";

import * as S from "./Styles";
import {useEffect, useState} from "react";
import axios from 'axios';


const Finance: NextPage = () => {
    const [financeInfoList, setFinanceInfoList] = useState([]);

    useEffect(() => {
        getFinanceInfoList('');
    },[]);

    const getFinanceInfoList =  (type) => {

          let url = "https://api-staging.heartbit.co.kr/finances";
          if(type !== '') {
              url += `?type=${type}`;
          }

          axios.get(url).then((response) => {
              setFinanceInfoList(response.data);
          });

    }


    return (
        <S.Root>
            <Head>
                <title>Heartbit - Finanace</title>
            </Head>
            <Header customStyle={S.FinanceHeader}>Defi & Cefi</Header>
            <Navigation getFinanceInfoList={getFinanceInfoList}/>
            <FinanceInfo financeInfoList={financeInfoList}/>
        </S.Root>
    )
}

export default  Finance;