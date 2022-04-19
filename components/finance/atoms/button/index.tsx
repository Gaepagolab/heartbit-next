import {ReactNode, useCallback} from "react";
import styled from "styled-components";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    customStyle?: string;
    className?: string;
}

const Button = ({children,onClick, customStyle = '',className=''}:ButtonProps) => {

    const StyledButton = styled(commonStyledButton)`
        ${customStyle}
    `;

    return (
        <StyledButton className={className} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

const commonStyledButton = styled.button`
    border: none;
    font-family: 'Noto Sans KR';
    font-style: normal;
  
    /* identical to box height */
    align-items: center;
    text-transform: none;
    
   
`;

export default Button;