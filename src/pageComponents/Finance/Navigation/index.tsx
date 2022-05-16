import * as S from "./Styles";
import { FinanceButton } from "../../../shared/components"
import useNavigationBar from "../../../shared/hooks/useNavigationBar";


const Navigation = ({getFinanceInfoList}) => {
    const [navigationBar, onChangeNavigationBar] = useNavigationBar("ALL");

    const onClickNavigationBar = (value) => {
        onChangeNavigationBar(value);

        if(value === "Defi") {
            getFinanceInfoList('D');
        } else if (value === "Cefi") {
            getFinanceInfoList('C');
        } else {
           getFinanceInfoList('');
        }
    }

    return (
     <S.Selector>
        <FinanceButton className={navigationBar === 'ALL' ? 'selectedNavBar' : ''} customStyle={S.ButtonStyled} onClick={() => onClickNavigationBar("ALL")}>
            ALL
        </FinanceButton>
         <FinanceButton className={navigationBar === 'Defi' ? 'selectedNavBar' : ''} customStyle={S.ButtonStyled} onClick={() => onClickNavigationBar("Defi")}>
            Defi
        </FinanceButton>
         <FinanceButton className={navigationBar === 'Cefi' ? 'selectedNavBar' : ''} customStyle={S.ButtonStyled} onClick={() => onClickNavigationBar("Cefi")}>
            Cefi
        </FinanceButton>
     </S.Selector>
    )
}

export default Navigation;