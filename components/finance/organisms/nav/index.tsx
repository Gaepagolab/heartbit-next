import styled from "styled-components";
import { Button } from "components/finance/atoms";

import useNavigationBar from "../../hooks/useNavigationBar";


const Navigation = ({setFinanceInfoList,dummyFinanceInfoList}) => {
    const [navigationBar, onChangeNavigationBar] = useNavigationBar("ALL");

    const onClickNavigationBar = (value) => {
        onChangeNavigationBar(value);

        const tempFinanceInfoList = JSON.parse(JSON.stringify(dummyFinanceInfoList));
        if(value === "Defi") {
            setFinanceInfoList(tempFinanceInfoList.filter((financeInfo) => financeInfo.type === 'D'));
        } else if (value === "Cefi") {
            setFinanceInfoList(tempFinanceInfoList.filter((financeInfo) => financeInfo.type === 'C'));
        } else {
            setFinanceInfoList(tempFinanceInfoList);
        }
    }

    return (
     <Selector>
        <Button className={navigationBar === 'ALL' ? 'selectedNavBar' : ''} customStyle={ButtonStyled} onClick={() => onClickNavigationBar("ALL")}>
            ALL
        </Button>
         <Button className={navigationBar === 'Defi' ? 'selectedNavBar' : ''} customStyle={ButtonStyled} onClick={() => onClickNavigationBar("Defi")}>
            Defi
        </Button>
         <Button className={navigationBar === 'Cefi' ? 'selectedNavBar' : ''} customStyle={ButtonStyled} onClick={() => onClickNavigationBar("Cefi")}>
            Cefi
        </Button>
     </Selector>
    )
}
const Selector = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 2%
`;

const ButtonStyled = `

    &.selectedNavBar {
     color: #FFFFFF;
    }
    
    &:hover,
        :focus {
           color: #FFFFFF;
    }
    
    display: flex;
    background-color:transparent;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #333D55;

  
`
export default Navigation;