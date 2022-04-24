import styled from "styled-components";
import {Header, Button} from "components/finance/atoms";


interface itemProps {
    financeInfo: {
        logoImg: string;
        title: string;
        description: string;
        twitterUrl: string;
        gitHubUrl: string;
        discordUrl: string;
    }
}


const FinanceInfoItem = ({financeInfo}:itemProps) => {
    const {
        logoImg
        , title
        , description
        , twitterUrl
        , gitHubUrl
        , discordUrl
    } = financeInfo;

    const onClickSNS = (url) => {
        window.open(url);
    }
    return (
         <Info>
            <Sidebar/>
            <LogoImg src={`/assets/images/${logoImg}.png`}/>
            <ContentsWrapper>
                <Header customStyle={TitleStyled}>{title}</Header>
                <Description>{description}</Description>
                <SNSWrapper>
                    <Button customStyle={SNSButtonStyled} onClick={() => onClickSNS(twitterUrl)}>
                        <SNSIcon src="/assets/images/twitterIcon.png"/>
                    </Button>
                    <Button customStyle={SNSButtonStyled} onClick={() => onClickSNS(gitHubUrl)}>
                        <SNSIcon src="/assets/images/GitHubIcon.png"/>
                    </Button>
                    { discordUrl &&
                        <Button customStyle={SNSButtonStyled} onClick={() => onClickSNS(discordUrl)}>
                            <SNSIcon src="/assets/images/DiscordIcon.png"/>
                        </Button>
                    }
                </SNSWrapper>
            </ContentsWrapper>
            {/*<Setting>*/}
            {/*    <Ellipse1/>*/}
            {/*    <Ellipse2/>*/}
            {/*    <Ellipse3/>*/}
            {/*</Setting>*/}
        </Info>
    )
}

const Info = styled.div`
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

const Sidebar = styled.div`
width: 5px;
height: 152px;
background: #11FFC6;
border-radius: 100px;

align-self: center;
`;

const LogoImg = styled.img`
width: 68px;
height: 68px;
align-self: flex-start;
margin-top: 9%;
`

const ContentsWrapper = styled.div`
width: 250px;
height: 152px;

flex-direction:column;
align-self: center;
`

const TitleStyled =`
width: 159px;
height: 35px;

font-weight: 500;
font-size: 24px;
line-height: 35px;
/* identical to box height */
color: #FFFFFF;

`;

const Description = styled.p`
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



const SNSWrapper = styled.div`
display: flex;
width: 30%;
height: 28px;
margin-top:5%;
`;


const SNSButtonStyled = `
width: 27px;
height: 22px;
background: rgba(72, 81, 108, 0.5);
border-radius: 4px;
text-align: center;
display: inline-block;
border: none;
margin-left: 2%;
`;
const SNSIcon = styled.img`
width: 14;
height: 15.1px;
`

const Setting = styled.div`
display:flex;
width: 25px;
height: 24px;
margin-top: 3%;
flex-direction:column;
justify-content: space-around;
`

const Ellipse1 = styled.div`
width: 6px;
height: 6px;
background: #48516C;
border-radius: 12px;
`
const Ellipse2 = styled.div`
width: 6px;
height: 6px;
background: #48516C;
border-radius: 12px;
`
const Ellipse3 = styled.div`
width: 6px;
height: 6px;
background: #48516C;
border-radius: 12px;
`


export default FinanceInfoItem;