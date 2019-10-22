<script>
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons
  } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";
  let clicked = 0;
</script>

<style>
  :global(.mdc-card) {
    margin: 1em;
    padding: 2px;
    border-width: 2px;
    border-style: dashed;
    border-color: #4c575231;
  }
  :global(.card-media-16x9) {
    background-image: url(assets/hexedRealms_16x9.png);
  }
</style>

<Card>
  <PrimaryAction on:click={() => clicked++}>
    <Media class="card-media-16x9" aspectRatio="16x9" />
    <Content class="mdc-typography--body2">
      <h2 class="mdc-typography--headline6" style="margin: 0;">Hexed realms</h2>
      <h3
        class="mdc-typography--subtitle2"
        style="margin: 0 0 10px; color: #888;">
        Web based hex map maker
      </h3>
      One of my first projects with Typescript and pixi.js. I learned a lot
      about Typescript and got a refresher on some maths for calculating map
      coordinates, hex neighbours etc.
    </Content>
  </PrimaryAction>
  <Actions>
    <ActionButtons>
      <Button on:click={() => clicked++}>
        <Label>Web</Label>
      </Button>
      <Button on:click={() => clicked++}>
        <Label>Code</Label>
      </Button>
    </ActionButtons>
    <ActionIcons>
      <IconButton
        class="material-icons"
        on:click={() => clicked++}
        title="Share">
        share
      </IconButton>
    </ActionIcons>
  </Actions>
</Card>
