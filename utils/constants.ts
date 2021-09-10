export const CoinType = {
  BTC: 'BTC',
  ETH: 'ETH',
  XRP: 'XRP',
  EOS: 'EOS',
};

export const CoinUSDT = {
  [CoinType.BTC]: 'btcusdt',
  [CoinType.ETH]: 'ethusdt',
  [CoinType.XRP]: 'xrpusdt',
  [CoinType.EOS]: 'eosusdt',
};

export const API_SERVER_ENDPOINT = process.env.API_SERVER_ENDPOINT || 'http://localhost:3030';
export const SOCKET_SERVER_ENDPOINT =
  process.env.SOCKET_SERVER_ENDPOINT || 'http://115.145.12.190:5000';
