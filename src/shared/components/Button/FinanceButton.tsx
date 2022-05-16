import {ReactNode} from "react";
import styled from "styled-components";
import * as S from "./Styles";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    customStyle?: string;
    className?: string;
}

const Button = ({children,onClick, customStyle = '',className=''}:ButtonProps) => {

    const StyledButton = styled(S.commonStyledButton)`
        ${customStyle}
    `;

    return (
        <StyledButton className={className} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button;