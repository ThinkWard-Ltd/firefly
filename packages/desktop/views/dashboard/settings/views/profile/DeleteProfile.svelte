<script lang="ts">
    import { Button, Text, ButtonVariant, ButtonSize } from 'shared/components'
    import { localize } from '@core/i18n'
    import { openPopup, PopupId } from '@auxiliary/popup'
    import { deleteProfile } from '@contexts/settings'

    function onDeleteClick(): void {
        openPopup({
            id: PopupId.Confirmation,
            props: {
                title: localize('popups.deleteProfile.title'),
                hint: localize('popups.deleteProfile.confirmation'),
                warning: true,
                confirmText: localize('actions.delete'),
                onConfirm: deleteProfile,
            },
        })
    }
</script>

<Text type="h4" classes="mb-3">{localize('views.settings.deleteProfile.title')}</Text>
<Text type="p" secondary classes="mb-5">{localize('views.settings.deleteProfile.description')}</Text>
<Button
    size={ButtonSize.Medium}
    inlineStyle="min-width: 156px;"
    variant={ButtonVariant.Warning}
    onClick={onDeleteClick}
>
    {localize('views.settings.deleteProfile.title')}
</Button>
