<script>
import Drawer, {
  Content, Header, Title, Subtitle,
} from '@smui/drawer';
import List, {
  Item, Text, Separator, Subheader,
} from '@smui/list';
import H6 from '@smui/common/H6.svelte';

let current = 'main';
let drawer;
let drawerOpen = true;

function go(key) {
  current = key;
  drawerOpen = true;
}
</script>

<Drawer variant="dismissible" bind:this={drawer} bind:open={drawerOpen}>
  <Header>
    <Title>App Title</Title>
    <Subtitle>App Subtitle</Subtitle>
  </Header>
  <Content>
    <List>
      <Item href="javascript:void(0)" on:click={() => go('main')} activated={current === 'main'}>
        <Text>Main</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('other')} activated={current === 'other'}>
        <Text>Other</Text>
      </Item>

      <Separator nav />
      <Subheader component={H6}>Starred</Subheader>
    </List>
  </Content>
</Drawer>