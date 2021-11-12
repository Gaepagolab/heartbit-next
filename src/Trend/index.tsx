import { Grid, Panel } from "shared/components";

import HeaderPrices from "./HeaderPrices";
import { Root, AdWrapper, FirstGrid } from "./Styles";

const Trend = () => {
  return (
    <Root>
      <FirstGrid>
        <Panel>
          <AdWrapper>광고</AdWrapper>
        </Panel>
        <Panel>
          <HeaderPrices />
        </Panel>
      </FirstGrid>
    </Root>
  );
};

export default Trend;
