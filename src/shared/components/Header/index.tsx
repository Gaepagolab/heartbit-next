import {ReactNode} from "react";
import styled from "styled-components";
import * as S from "./Styles";

export interface headerProps {
     children: ReactNode;
     customStyle: string;
}

const Header = ({children,customStyle}:headerProps) => {

    const StyledHeader = styled(S.commonStyledHeader)`
        ${customStyle}
    `;

    return (
        <StyledHeader>{children}</StyledHeader>
    )
}

export default Header;
