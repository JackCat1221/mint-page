import { defineChain } from "viem";
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  celo,
  classic,
  confluxESpace,
  coreDao,
  cronos,
  eos,
  fantom,
  filecoin,
  gnosis,
  iotex,
  klaytn,
  linea,
  mainnet,
  mantle,
  meter,
  neonMainnet,
  okc,
  opBNB,
  optimism,
  polygon,
  sepolia,
  zkSync,
  bscTestnet
} from "viem/chains";

const BEVM = defineChain({
  id: 1501,
  name: 'BEVM',
  nativeCurrency: {
    name: "BTC",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-1.bevm.io'],
      webSocket: undefined
    }
  }
})

export const chains = {
  eth: mainnet,
  arbitrum,
  avalanche,
  base,
  bsc,
  celo,
  classic,
  confluxESpace,
  coreDao,
  cronos,
  eos,
  fantom,
  filecoin,
  gnosis,
  iotex,
  klaytn,
  linea,
  mainnet,
  mantle,
  meter,
  neonMainnet,
  okc,
  opBNB,
  optimism,
  polygon,
  sepolia,
  zkSync,
  bscTestnet,
  BEVM
}

export type ChainKey = keyof typeof chains
