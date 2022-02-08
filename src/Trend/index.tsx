import { Grid, Panel } from "shared/components";

import * as S from "./Styles";
import HeaderPrices from "./HeaderPrices";
import Volatilty from "./Volatilty";

const Trend = () => {
  return (
    <S.Root>
      <S.FirstSection>
        <Panel>
          <S.AdWrapper>광고</S.AdWrapper>
        </Panel>
        <Panel>
          <HeaderPrices />
        </Panel>
      </S.FirstSection>
      <S.SecondSection>
        <S.Volatilties>
          <Panel>
            <Volatilty type="up" />
          </Panel>
          <Panel>
            <Volatilty type="down" />
          </Panel>
        </S.Volatilties>
        <Panel>
          <S.Iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_627c9&symbol=UPBIT%3ABTCKRW&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=RSI%40tv-basicstudies%1F&theme=dark&style=1&timezone=Asia%2FSeoul&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=kr&utm_source=sigbtc.pro&utm_medium=widget&utm_campaign=chart&utm_term=UPBIT%3ABTCKRW" />
        </Panel>
        <Panel>{/* <WhaleTradings /> */}</Panel>
      </S.SecondSection>
    </S.Root>
  );
};

export default Trend;
