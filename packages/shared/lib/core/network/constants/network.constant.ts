import { BASE_TOKEN } from '../constants'
import { NetworkProtocol, NetworkType } from '../enums'
import { INetwork } from '../interfaces'

export const NETWORK: Readonly<{ [key in NetworkProtocol]?: { [key in NetworkType]?: INetwork } }> = {
    [NetworkProtocol.IOTA]: {
        [NetworkType.Mainnet]: {
            id: 'chrysalis-mainnet',
            name: 'Chrysalis Mainnet',
            protocol: NetworkProtocol.IOTA,
            type: NetworkType.Mainnet,
            bech32Hrp: 'iota',
            baseToken: BASE_TOKEN[NetworkProtocol.IOTA],
        },
        [NetworkType.Devnet]: {
            id: 'chrysalis-devnet',
            name: 'Chrysalis Devnet',
            protocol: NetworkProtocol.IOTA,
            type: NetworkType.Devnet,
            bech32Hrp: 'atoi',
            baseToken: BASE_TOKEN[NetworkProtocol.IOTA],
        },
        [NetworkType.PrivateNet]: <INetwork>{
            name: 'Private Net',
            protocol: NetworkProtocol.IOTA,
            type: NetworkType.PrivateNet,
        },
    },
    [NetworkProtocol.Shimmer]: {
        [NetworkType.Mainnet]: {
            id: 'shimmer-mainnet',
            name: 'Shimmer Mainnet',
            protocol: NetworkProtocol.Shimmer,
            type: NetworkType.Mainnet,
            bech32Hrp: 'smr',
            baseToken: BASE_TOKEN[NetworkProtocol.Shimmer],
        },
        [NetworkType.Devnet]: {
            id: 'shimmer-devnet',
            name: 'Shimmer Devnet',
            protocol: NetworkProtocol.Shimmer,
            type: NetworkType.Devnet,
            bech32Hrp: 'rms',
            baseToken: BASE_TOKEN[NetworkProtocol.Shimmer],
        },
        [NetworkType.PrivateNet]: <INetwork>{
            name: 'Private Net',
            protocol: NetworkProtocol.Shimmer,
            type: NetworkType.PrivateNet,
        },
    },
}
