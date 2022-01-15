import { useState, useEffect, useRef } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import encoding from "text-encoding";

import { CoinUSDT, CoinType } from "shared/utils/constants";
import { getMarkets } from "../api/upbit";

type CurrentType = {
  price: number;
  up: boolean;
};

const defaultPrice = {
  price: 0.0,
  up: true,
};

export const useUpbit = function () {
  const $ws = useRef<WebSocket | null>(null);
  const [current, setCurrent] = useState<CurrentType>();

  const markets = async () => {
    const a = await getMarkets();
    return a;
  };

  useEffect(() => {
    markets().then((a) => {
      createConnectSocketThunk(a);
    });
  }, []);

  return current;
};

// 웹소켓 연결용 Thunk
const createConnectSocketThunk = (codes) => {
  const client = new W3CWebSocket("wss://api.upbit.com/websocket/v1");
  client.binaryType = "arraybuffer";

  client.onopen = () => {
    client.send(
      JSON.stringify([
        { ticket: "downbit-clone" },
        { type: "ticker", codes: ["KRW-BTC"] },
      ])
    );
  };

  client.onmessage = (evt) => {
    const enc = new encoding.TextDecoder("utf-8");
    const arr = new Uint8Array(evt.data);
    const data = JSON.parse(enc.decode(arr));
    console.log(data);
  };

  client.onerror = (e) => {
    console.log(e);
  };
};

const socketEndPoint = () => `wss://api.upbit.com/websocket/v1`;
