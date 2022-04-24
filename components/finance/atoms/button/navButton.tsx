import {ReactNode} from "react";
import styled from "styled-components";

import {
  ButtonProps as StrapButtonProps,
} from "reactstrap";
// interface ButtonProps  {
//     children: ReactNode
// }

export type ButtonProps = {
    children: ReactNode;
} & StrapButtonProps;
const Button = ({children}:ButtonProps) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
}

const StyledButton = styled.button`
    display: flex;
    background-color:transparent;
    border: none;
  
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */
    align-items: center;
    text-transform: none;
    
    color: #333D55;
`
export default Button;