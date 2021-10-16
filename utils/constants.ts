export const CoinType = {
  BTC: "BTC",
  ETH: "ETH",
  XRP: "XRP",
  EOS: "EOS",
};

export const CoinUSDT = {
  [CoinType.BTC]: "btcusdt",
  [CoinType.ETH]: "ethusdt",
  [CoinType.XRP]: "xrpusdt",
  [CoinType.EOS]: "eosusdt",
};

export const KeyCodes = {
  BACK_SPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  "[": 219,
};

export const API_SERVER_ENDPOINT =
  process.env.API_SERVER_ENDPOINT || "http://localhost:3000";
export const SOCKET_SERVER_ENDPOINT = "http://115.145.12.190:5000";
