import { ChainId, WPLINGA, ERC20Token } from '@pancakeswap/sdk'
import { USDT_PLINGA, KITKAT_MAINNET } from './common'

export const plingaTokens = {
  wplinga: WPLINGA[ChainId.PLINGA],
  plinga: new ERC20Token(
    ChainId.PLINGA,
    '0x6b1b66cD25B14E005172cD0b63E60076EA8EccA4',
    18,
    'PLINGA',
    'PLINGA',
    'https://www.plinga.technology/',
  ),
  usdt: USDT_PLINGA,
  kitkat: KITKAT_MAINNET,
  power: new ERC20Token(
    ChainId.NEXI,
    '0x47fbc1D04511bfB1C3d64DA950c88815D02114F4',
    18,
    'POWER',
    'Power Pay',
    'https://www.plinga.technology/',
  ),
}
