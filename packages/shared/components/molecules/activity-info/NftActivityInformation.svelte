<script lang="ts">
    import { selectedAccountIndex } from '@core/account'
    import { localize } from '@core/i18n'
    import { getNftByIdFromAllAccountNfts } from '@core/nfts'
    import { IKeyValueBoxList } from '@core/utils'
    import {
        ADDRESS_TYPE_ALIAS,
        ADDRESS_TYPE_ED25519,
        ADDRESS_TYPE_NFT,
        getBech32AddressFromAddressTypes,
        getHexAddressFromAddressTypes,
        NftActivity,
    } from '@core/wallet'
    import { KeyValueBox } from 'shared/components'

    export let activity: NftActivity

    $: nft = getNftByIdFromAllAccountNfts($selectedAccountIndex, activity?.nftId)
    $: issuerAddress = getBech32AddressFromAddressTypes(nft?.issuer)
    $: collectionId = getHexAddressFromAddressTypes(nft?.issuer)

    let detailsList: IKeyValueBoxList
    $: detailsList = {
        nftId: { data: activity?.nftId, isCopyable: true },
        ...(nft?.issuer?.type === ADDRESS_TYPE_ED25519 && {
            issuerAddress: { data: issuerAddress, isCopyable: true },
        }),
        ...((nft?.issuer?.type === ADDRESS_TYPE_NFT || nft?.issuer?.type === ADDRESS_TYPE_ALIAS) && {
            collectionId: { data: collectionId, isCopyable: true },
        }),
    }
</script>

{#each Object.entries(detailsList) as [key, value]}
    {#if value}
        <KeyValueBox keyText={localize(`general.${key}`)} valueText={value.data} isCopyable={value?.isCopyable} />
    {/if}
{/each}
