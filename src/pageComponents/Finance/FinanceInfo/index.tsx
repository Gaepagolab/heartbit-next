import * as S from "./Styles";

import FinanceInfoItem from './financeInfoItem'

const FinanceInfoList = ({financeInfoList}) => {

    return (
        <S.Root>
        {
          financeInfoList.map((financeInfo, index) => {
              return (
              <FinanceInfoItem
                  financeInfo={financeInfo}
                  key={index}/>
              )
          })
        }
       </S.Root>
    )
}

export default FinanceInfoList;