import * as React from "react";
import { FC } from "react";
import styled from "styled-components";

import { CurrentPrice, Kimp } from "components/atoms";
import { useCurrentPrice } from "hooks/useCurrentPrice";

const HeaderPrices: FC = () => {
  const btc = useCurrentPrice("BTC");
  const eth = useCurrentPrice("ETH");
  const xrp = useCurrentPrice("XRP");
  const eos = useCurrentPrice("EOS");

  return (
    <Root>
      <CurrentPrice coinName="BTC" price={btc.price} up={btc.up} />
      <CurrentPrice coinName="ETH" price={eth.price} up={eth.up} />
      <CurrentPrice coinName="XRP" price={xrp.price} up={xrp.up} />
      <CurrentPrice coinName="EOS" price={eos.price} up={eos.up} />
      <Kimp kimp="+3.23" />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
`;

export default HeaderPrices;
