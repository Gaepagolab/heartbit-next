import { FC } from "react";
import styled from "styled-components";

import { CurrentPrice } from "components/atoms";
import { useCurrentPrice } from "hooks/useCurrentPrice";
import { media } from "utils/styles";

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
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  column-gap: 24px;

  height: inherit;

  ${media.small} {
    grid-template-columns: 1fr 1fr;
  }
`;

export default HeaderPrices;
