import {Fragment, useState} from "react";

import styled from "styled-components";
import { Container } from "reactstrap";

import {Header} from "components/finance/atoms";
import {Navigation, FinanceInfoList} from "components/finance/organisms";


const dummyFinanceInfoList = [
    {logoImg:"PancakeSwapLogo", title:"PancakeSwap", description:"바이낸스 스마트 체인(BSC)기반 유동성을 제공하는 플랫폼입니다.", twitterUrl: "https://twitter.com/pancakeswap", gitHubUrl:"https://github.com/pancakeswap",discordUrl:"https://discord.com/invite/pancakeswap",type:'D'}
    , {logoImg:"AAVELogo", title:"AAVE", description:"예금에 대한 이자를 벌고 자산을 빌리기 위한 오픈 소스이자 비보관 프로토콜입니다.", twitterUrl: "https://twitter.com/aaveaave", gitHubUrl:"https://github.com/aave",discordUrl:"https://discord.com/invite/aave",type:'D'}
    , {logoImg:"UniswapLogo", title:"Uniswap", description:"이더리움(ETH)과 ERC-20 토큰 간의 자동 교환 거래를 용이하게 하도록 설계된 프로토콜입니다.", twitterUrl: "https://twitter.com/uniswap", gitHubUrl:"https://github.com/Uniswap",discordUrl:"https://discord.com/invite/FCfyBSbCU5",type:'D'}
    , {logoImg:"KlayswapLogo", title:"Klayswap", description:"클레이튼(Klaytn)기반 유동성을 제공하는 플랫폼입니다.", twitterUrl: "https://twitter.com/klayswap", gitHubUrl:"https://github.com/KlaySwap",discordUrl:"https://discord.com/invite/hNcrS4BQrm",type:'D'}
    , {logoImg:"AutofarmLogo", title:"Autofarm", description:"사용자가 스테이 킹을 통해 고수익 양식 채굴 풀에서 높은 수익을 얻을 수있는 교차 체인 플랫폼입니다.", twitterUrl: "https://twitter.com/autofarmnetwork", gitHubUrl:"https://github.com/autofarmnetwork",discordUrl:"https://discord.com/invite/bJ9ZsypQzv",type:'D'}
    , {logoImg:"BlockFiLogo", title:"BlockFi", description:" 비트코인(BTC),이더리움(ETH),라이트코인(LTC) 세 가지 암호화폐에 대한 담보대출 서비스를 제공하는 플랫폼입니다.", twitterUrl: "https://twitter.com/blockfi", gitHubUrl:"https://github.com/blockfi",type:'C'}
    , {logoImg:"CelsiusLogo", title:"Celsius", description:"웹 및 모바일 앱을 통해 사용할 수 있는 지불, 송금, 복리 수익률 서비스 및 즉각적인 저비용 대출 등의 서비스를 제공하는 블록체인 기반 무료 플랫폼입니다.", twitterUrl: "https://twitter.com/celsiusnetwork", gitHubUrl:"https://github.com/CelsiusNetwork",type:'C'}
    , {logoImg:"CoinbaseLogo", title:"Coinbase", description:"비트코인, 이더리움, 라이트코인 등 주요 가상화폐를 거래할 수 있는 입출금 플랫폼으로 미국 최대 가상화폐 거래소입니다.", twitterUrl: "https://twitter.com/coinbase", gitHubUrl:"https://github.com/coinbase",discordUrl:"https://discord.com/invite/RjwxANY",type:'C'}
]

const finance = () => {
    const [financeInfoList, setFinanceInfoList] = useState(dummyFinanceInfoList);

    return (
        <Fragment>
            <Root>
                <Header customStyle={FinanceHeader}>Defi & Cefi</Header>
                <Navigation dummyFinanceInfoList={dummyFinanceInfoList} setFinanceInfoList={setFinanceInfoList}/>
                <FinanceInfoList financeInfoList={financeInfoList}/>
            </Root>
        </Fragment>
    );
};


const Root = styled.div`
    display: flex;
    flex-direction:column;
`;

const FinanceHeader = `                                                                                       
    color: #161E28;
    margin-left:2%;
    font-weight: 900;
    font-size: 60px;
    line-height: 87px;
`;

export default finance;