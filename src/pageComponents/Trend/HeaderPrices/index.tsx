import { FC } from "react";

import CurrentPrice from "./Currentprice";
import { useCurrentPrice } from "shared/hooks/useCurrentPrice";
import { Root } from "./Styles";
import Kimp from "./Kimp";

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
      <Kimp />
    </Root>
  );
};

export default HeaderPrices;
