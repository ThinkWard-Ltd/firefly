<script lang="ts">
    import { Button } from '@ui'

    import { localize } from '@core/i18n'
    import { ExpirationTime } from '@core/utils'
    import { newTransactionDetails, updateNewTransactionDetails } from '@core/wallet'

    import { closeDrawer, DrawerId } from '@/auxiliary/drawer'

    const DATE_NOW = Date.now()

    const dateIn1Hour = new Date(DATE_NOW)
    dateIn1Hour.setTime(dateIn1Hour.getTime() + 1 * 60 * 60 * 1000)

    const dateIn1Day = new Date(DATE_NOW)
    dateIn1Day.setDate(dateIn1Day.getDate() + 1)

    const dateIn1Week = new Date(DATE_NOW)
    dateIn1Week.setDate(dateIn1Week.getDate() + 7)

    function onChooseExpirationTimeClick(_expiration: ExpirationTime): void {
        let expirationDate: Date
        switch (_expiration) {
            case ExpirationTime.OneHour:
                expirationDate = dateIn1Hour
                break
            case ExpirationTime.OneDay:
                expirationDate = dateIn1Day
                break
            case ExpirationTime.OneWeek:
                expirationDate = dateIn1Week
                break
            case ExpirationTime.None:
                expirationDate = null
                break
            case ExpirationTime.Custom:
            default:
                break
        }
        updateNewTransactionDetails({ type: $newTransactionDetails.type, expirationDate })
        closeDrawer(DrawerId.Expiration)
    }
</script>

<div class="w-full flex flex-col space-y-2">
    <Button outline onClick={() => onChooseExpirationTimeClick(ExpirationTime.None)} classes="w-full">
        {localize('menus.expirationTimePicker.none')}
    </Button>
    <Button outline onClick={() => onChooseExpirationTimeClick(ExpirationTime.OneHour)} classes="w-full">
        {localize('menus.expirationTimePicker.1hour')}
    </Button>
    <Button outline onClick={() => onChooseExpirationTimeClick(ExpirationTime.OneDay)} classes="w-full">
        {localize('menus.expirationTimePicker.1day')}
    </Button>
    <Button outline onClick={() => onChooseExpirationTimeClick(ExpirationTime.OneWeek)} classes="w-full">
        {localize('menus.expirationTimePicker.1week')}
    </Button>
</div>
