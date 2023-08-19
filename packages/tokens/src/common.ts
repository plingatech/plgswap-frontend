import { ChainId, ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDT_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0x69F6c3e18028012Fbad46A9e940889daF6b4241D',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const CASHUSD_NEXI = new ERC20Token(
  ChainId.NEXI,
  '0x69F6c3e18028012Fbad46A9e940889daF6b4241D',
  18,
  'CASHUSD',
  'CashUSD',
  'https://cashusd.online/',
)

export const ORBITEX_MAINNET = new ERC20Token(
  ChainId.NEXI,
  '0x613d19fd91A62513e16Ecc1c0A4bFb16480bd2Bb',
  18,
  'ORBITEX',
  'Orbitex Token',
  'https://www.orbitex.online/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.NEXI]: BUSD_BSC,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.NEXI]: USDT_NEXI,
}
