<script>
import IconButton from '@smui/icon-button';

export let open = false;

</script>

<div 
    class="mdc-snackbar"
    class:mdc-snackbar--open="{open}"
    style="cursor: pointer;"
    on:click
>
    <div class="mdc-snackbar__surface">
        <span class="mdc-snackbar__label" role="status" aria-live="polite">Skip animation</span>
        <div class="mdc-snackbar__actions">
            <IconButton class="material-icons jdev-snackbar-dismiss" title="Dismiss">cancel</IconButton>
        </div>
    </div>
</div>