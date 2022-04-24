import {ReactNode} from "react";
import styled from "styled-components";

export interface headerProps {
     children: ReactNode;
     customStyle: string;
}

const Header = ({children,customStyle}:headerProps) => {

    const StyledHeader = styled(commonStyledHeader)`
        ${customStyle}
    `;

    return (
        <StyledHeader>{children}</StyledHeader>
    )
}

 const commonStyledHeader = styled.header`
        font-family: 'Noto Sans KR';
        font-style: normal;
        align-items: center;
        text-transform: capitalize;
`;

export default Header;