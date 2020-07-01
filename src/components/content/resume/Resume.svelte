<script>
import { formatDate } from 'utils/imports/core';
</script>

<style lang="scss">
.mdc-typography--headline6 {
  text-align: center;
  border-bottom: 1px solid #000;
}
</style>

<div class="mdc-layout-grid mdc-typography--body1">
    <h2 class="mdc-typography--headline6">Education</h2>
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">{$formatDate(new Date(1993, 8, 1))} - {$formatDate(new Date(2001, 12, 31))}</div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-9-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">Besuch des Ricarda-Huch-Gymnasiums in Gelsenkirchen mit Abschluss der Fach-hochschulreife nach 11 (schulischer Teil)</div>
    </div>
</div>