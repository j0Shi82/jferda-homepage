<style lang="scss">
@use 'src/assets/style/_smui-theme.scss';

.lds-ring {
  display: inline-block;
  position: relative;
  width: 56px;
  height: 56px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  margin: 4px;
  border: 4px solid smui-theme.$primary;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: smui-theme.$primary transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
