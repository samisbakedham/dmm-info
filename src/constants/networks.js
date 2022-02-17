import Mainnet from '../assets/networks/mainnet-network.svg'
import Polygon from '../assets/networks/polygon-network.png'
import BSC from '../assets/networks/bsc-network.png'
import AVAX from '../assets/networks/avax-network.png'
import Fantom from '../assets/networks/fantom-network.png'
import Cronos from '../assets/networks/cronos-network.png'
import { ChainId } from '.'

export const NETWORK_ICON = {
  [ChainId.MAINNET]: Mainnet,
  [ChainId.ROPSTEN]: Mainnet,
  [ChainId.MATIC]: Polygon,
  [ChainId.MUMBAI]: Polygon,
  [ChainId.BSCMAINNET]: BSC,
  [ChainId.BSCTESTNET]: BSC,
  [ChainId.AVAXMAINNET]: AVAX,
  [ChainId.AVAXTESTNET]: AVAX,
  [ChainId.FANTOM]: Fantom,
  [ChainId.CRONOS]: Cronos,
  [ChainId.CRONOSTESTNET]: Cronos,
}

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.MATIC]: 'Polygon',
  [ChainId.MUMBAI]: 'Mumbai',
  [ChainId.BSCMAINNET]: 'BSC',
  [ChainId.BSCMAINNET]: 'BSC Testnet',
  [ChainId.AVAXMAINNET]: 'Avalanche',
  [ChainId.AVAXTESTNET]: 'Avax Testnet',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.CRONOS]: 'Cronos',
  [ChainId.CRONOSTESTNET]: 'Cronos Testnet',
}
