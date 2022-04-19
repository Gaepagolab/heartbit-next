import { useEffect, useState } from "react";
import styled from "styled-components";

import FinanceInfoItem from './financeInfoItem'



const FinanceInfoList = ({financeInfoList}) => {

    return (
        <Root>
        {
          financeInfoList.map((financeInfo, index) => {
              return (
              <FinanceInfoItem
                  financeInfo={financeInfo}
                  key={index}/>
              )
          })
        }
       </Root>
    )
}

const Root = styled.div`
display: flex;
flex-wrap:wrap;
`;
export default FinanceInfoList;