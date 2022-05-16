import * as S from "./Styles";
import { Header, FinanceButton } from "../../../shared/components"


interface itemProps {
    financeInfo: {
        logoImageUrl: string;
        title: string;
        content: string;
        twitterUrl: string;
        githubUrl: string;
        discordUrl: string;
    }
}


const FinanceInfoItem = ({financeInfo}:itemProps) => {
    const {
        logoImageUrl
        , title
        , content
        , twitterUrl
        , githubUrl
        , discordUrl
    } = financeInfo;

    const onClickSNS = (url) => {
        window.open(url);
    }
    return (
         <S.Info>
            <S.Sidebar/>
            <S.LogoImg src={`/assets/images/${logoImageUrl}.png`}/>
            <S.ContentsWrapper>
                <Header customStyle={S.TitleStyled}>{title}</Header>
                <S.Description>{content}</S.Description>
                <S.SNSWrapper>
                    <FinanceButton customStyle={S.SNSButtonStyled} onClick={() => onClickSNS(twitterUrl)}>
                        <S.SNSIcon src="/assets/images/twitterIcon.png"/>
                    </FinanceButton>
                    <FinanceButton customStyle={S.SNSButtonStyled} onClick={() => onClickSNS(githubUrl)}>
                        <S.SNSIcon src="/assets/images/GitHubIcon.png"/>
                    </FinanceButton>
                    { discordUrl &&
                        <FinanceButton customStyle={S.SNSButtonStyled} onClick={() => onClickSNS(discordUrl)}>
                            <S.SNSIcon src="/assets/images/DiscordIcon.png"/>
                        </FinanceButton>
                    }
                </S.SNSWrapper>
            </S.ContentsWrapper>
            {/*<Setting>*/}
            {/*    <Ellipse1/>*/}
            {/*    <Ellipse2/>*/}
            {/*    <Ellipse3/>*/}
            {/*</Setting>*/}
        </S.Info>
    )
}


export default FinanceInfoItem;