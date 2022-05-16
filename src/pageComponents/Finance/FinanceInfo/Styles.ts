import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    flex-wrap:wrap;
`;


export const Info = styled.div`
display: flex;

width: 400px;
height: 216px;
background: #161E28;
border-radius: 12px;

flex-direction:row;
align-content:center;
justify-content: space-around;
margin-left:2%;
margin-top:2%;
`;

export const Sidebar = styled.div`
width: 5px;
height: 152px;
background: #11FFC6;
border-radius: 100px;

align-self: center;
`;

export const LogoImg = styled.img`
width: 68px;
height: 68px;
align-self: flex-start;
margin-top: 9%;
`

export const ContentsWrapper = styled.div`
width: 250px;
height: 152px;

flex-direction:column;
align-self: center;
`

export const TitleStyled =`
width: 159px;
height: 35px;

font-weight: 500;
font-size: 24px;
line-height: 35px;
/* identical to box height */
color: #FFFFFF;

`;

export const Description = styled.p`
width: 246px;
height: 49px;

margin-top:1%;

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 350;
font-size: 12px;
line-height: 15px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;
`



export const SNSWrapper = styled.div`
display: flex;
width: 30%;
height: 28px;
margin-top:5%;
`;


export const SNSButtonStyled = `
width: 27px;
height: 22px;
background: rgba(72, 81, 108, 0.5);
border-radius: 4px;
text-align: center;
display: inline-block;
border: none;
margin-left: 2%;
`;
export const SNSIcon = styled.img`
width: 14;
height: 15.1px;
`

export const Setting = styled.div`
display:flex;
width: 25px;
height: 24px;
margin-top: 3%;
flex-direction:column;
justify-content: space-around;
`

export const Ellipse1 = styled.div`
width: 6px;
height: 6px;
background: #48516C;
border-radius: 12px;
`
export const Ellipse2 = styled.div`
width: 6px;
height: 6px;
background: #48516C;
border-radius: 12px;
`
export const Ellipse3 = styled.div`
width: 6px;
height: 6px;
background: #48516C;
border-radius: 12px;
`