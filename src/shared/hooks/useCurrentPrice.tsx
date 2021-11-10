import { useState, useEffect, useRef } from "react";

import { CoinUSDT, CoinType } from "shared/utils/constants";

type CurrentType = {
  price: number;
  up: boolean;
};

const defaultPrice = {
  price: 0.0,
  up: true,
};

export const useCurrentPrice = function (coinName: keyof typeof CoinType) {
  const $ws = useRef<WebSocket | null>(null);
  const [current, setCurrent] = useState<CurrentType>(defaultPrice);

  useEffect(() => {
    $ws.current = new WebSocket(socketEndPoint(CoinUSDT[coinName]));
    $ws.current.onmessage = (event) => {
      const { p: price, m: up } = JSON.parse(event.data);
      setCurrent((prev) => ({ ...prev, price: parseFloat(price), up: !up }));
    };
    return () => {
      if ($ws.current) $ws.current.close();
    };
  }, [coinName]);

  return current;
};

const socketEndPoint = (coinName: keyof typeof CoinUSDT) =>
  `wss://stream.binance.com:9443/ws/${coinName}@trade`;
