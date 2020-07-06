<script>
import { currentRouteName } from 'utils/imports/store';

let projectIdent;
$: {
  [, projectIdent] = $currentRouteName.split('_');
}
</script>

{projectIdent}