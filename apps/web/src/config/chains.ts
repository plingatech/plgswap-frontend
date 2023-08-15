import { ChainId } from '@pancakeswap/sdk'
import memoize from 'lodash/memoize'
import {
  bsc as bsc_,
  bscTestnet,
  goerli,
  mainnet,
  plinga as plinga_,
  nexi as nexi_,
  zkSync,
  zkSyncTestnet,
  polygonZkEvmTestnet as polygonZkEvmTestnet_,
  polygonZkEvm as polygonZkEvm_,
  lineaTestnet as lineaTestnet_,
  arbitrum,
  arbitrumGoerli,
  Chain,
} from 'wagmi/chains'

export const CHAIN_QUERY_NAME = {
  [ChainId.ETHEREUM]: 'eth',
  [ChainId.GOERLI]: 'goerli',
  [ChainId.BSC]: 'bsc',
  [ChainId.PLINGA]: 'plinga',
  [ChainId.NEXI]: 'nexi',
  [ChainId.BSC_TESTNET]: 'bscTestnet',
  [ChainId.ARBITRUM_ONE]: 'arb',
  [ChainId.ARBITRUM_GOERLI]: 'arbGoerli',
  [ChainId.POLYGON_ZKEVM]: 'polygonZkEVM',
  [ChainId.POLYGON_ZKEVM_TESTNET]: 'polygonZkEVMTestnet',
  [ChainId.ZKSYNC]: 'zkSync',
  [ChainId.ZKSYNC_TESTNET]: 'zkSyncTestnet',
  [ChainId.LINEA_TESTNET]: 'lineaTestnet',
} as const satisfies Record<ChainId, string>

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined
})

const bsc = {
  ...bsc_,
  rpcUrls: {
    ...bsc_.rpcUrls,
    public: {
      ...bsc_.rpcUrls.public,
      http: ['https://bsc-dataseed.binance.org/'],
    },
    default: {
      ...bsc_.rpcUrls.default,
      http: ['https://bsc-dataseed.binance.org/'],
    },
  },
} satisfies Chain

const polygonZkEvm = {
  ...polygonZkEvm_,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 57746,
    },
  },
} as const satisfies Chain

const plinga = {
  ...plinga_,
  rpcUrls: {
    ...plinga_.rpcUrls,
    public: {
      ...plinga_.rpcUrls.public,
      http: ['https://rpcurl.mainnet.plgchain.com'],
    },
    default: {
      ...plinga_.rpcUrls.default,
      http: ['https://rpcurl.mainnet.plgchain.com'],
    },
  },
  contracts: {
    multicall3: {
      address: '0x0989576160f2e7092908BB9479631b901060b6e4',
      blockCreated: 204489,
    },
  },
} satisfies Chain

const nexi = {
  ...nexi_,
  rpcUrls: {
    ...nexi_.rpcUrls,
    public: {
      ...nexi_.rpcUrls.public,
      http: ['https://rpc.chain.nexi.technology'],
    },
    default: {
      ...nexi_.rpcUrls.default,
      http: ['https://rpc.chain.nexi.technology'],
    },
  },
  contracts: {
    multicall3: {
      address: '0xc45ccc2313f74902ee6c6eC774930ADb209e00E4',
      blockCreated: 785215,
    },
  },
} satisfies Chain

const polygonZkEvmTestnet = {
  ...polygonZkEvmTestnet_,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 525686,
    },
  },
} as const satisfies Chain

const lineaTestnet = {
  ...lineaTestnet_,
  blockExplorers: {
    etherscan: {
      name: 'LineaScan',
      url: 'https://goerli.lineascan.build',
    },
    default: {
      name: 'LineaScan',
      url: 'https://goerli.lineascan.build',
    },
  },
} as const satisfies Chain

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS: ChainId[] = [
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.POLYGON_ZKEVM,
  ChainId.POLYGON_ZKEVM_TESTNET,
  ChainId.ZKSYNC,
  ChainId.ZKSYNC_TESTNET,
  ChainId.LINEA_TESTNET,
]

export const CHAINS = [
  bsc,
  mainnet,
  bscTestnet,
  goerli,
  nexi,
  plinga,
  zkSync,
  zkSyncTestnet,
  polygonZkEvm,
  polygonZkEvmTestnet,
  lineaTestnet,
  arbitrumGoerli,
  arbitrum,
]
