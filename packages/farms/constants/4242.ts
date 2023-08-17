import { nexiTokens } from '@pancakeswap/tokens'
import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
import { SerializedFarmConfig } from '..'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    token0: nexiTokens.orbitex,
    token1: nexiTokens.wnexi,
    lpAddress: '0x133B3D95bAD5405d14d53473671200e9342896BF',
    feeAmount: FeeAmount.MEDIUM,
  },
])

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 104,
    lpSymbol: 'NBT-USDT LP',
    lpAddress: '0x133B3D95bAD5405d14d53473671200e9342896BF',
    token: nexiTokens.orbitex,
    quoteToken: nexiTokens.wnexi,
    isCommunity: true,
  },
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms
