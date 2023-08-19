import { Percent } from '@pancakeswap/swap-sdk-core'
import { ERC20Token } from './entities/token'

export enum ChainId {
  BSC = 56,
  NEXI = 4242,
}

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

export const FACTORY_ADDRESS_NEXI = '0x7F07627F1c9222b5FC441Ae3e779bf18E782e028'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.NEXI]: FACTORY_ADDRESS_NEXI,
}
export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

export const INIT_CODE_HASH_NEXI = '0x6bd0199d31e4f6b30ec806eac2cc68fe3027d8f958cf89039f04382a58bbef05'

export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.NEXI]: INIT_CODE_HASH_NEXI,
}

export const WNWXI = {
  [ChainId.NEXI]: new ERC20Token(
    ChainId.NEXI,
    '0xEC3ceC066E5b2331fCD0Eb7eE5A9B17F617A6efb',
    18,
    'NEXI',
    'Wrapped NEXI',
    'https://nexi.technology'
  ),
}

export const WBNB = {
  [ChainId.BSC]: new ERC20Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.NEXI]: WNWXI[ChainId.NEXI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.NEXI]: {
    name: 'NEXI Chain Native Token',
    symbol: 'NEXI',
    decimals: 18,
  },
}
