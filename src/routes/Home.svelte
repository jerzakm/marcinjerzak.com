<script>
  import Button from "@smui/button";
  import Fab from "@smui/fab";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import { Label, Icon } from "@smui/common";
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons
  } from "@smui/card";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";

  let clicked = 0;

  let superText = "";
</script>

<Card
  style="width: 800px; color:white; border-color: white; border-width: 2px;
  border-style: solid;">
  <Content>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium
      velit eius soluta deserunt optio necessitatibus temporibus! Omnis
      assumenda, provident at odio, iure minima quo magni possimus
      reprehenderit, exercitationem eum saepe tempore animi veniam? In incidunt
      harum, quae dicta provident quo odio non totam placeat blanditiis quas cum
      ad exercitationem consequatur voluptatibus praesentium perferendis iste
      nam dolorem ex assumenda laborum veniam! Alias eius tempore aut cum
      temporibus impedit odio itaque! Eos, explicabo neque? Debitis tempore
      laboriosam sapiente excepturi distinctio.
    </p>
  </Content>
  <Actions>
    <ActionButtons>
      <Button on:click={() => clicked++}>
        <Label>Action</Label>
      </Button>
      <Button on:click={() => clicked++}>
        <Label>Another</Label>
      </Button>
    </ActionButtons>
    <ActionIcons>
      <IconButton
        on:click={() => clicked++}
        toggle
        aria-label="Add to favorites"
        title="Add to favorites">
        <Icon class="material-icons" on>favorite</Icon>
        <Icon class="material-icons">favorite_border</Icon>
      </IconButton>
      <IconButton
        class="material-icons"
        on:click={() => clicked++}
        title="Share">
        share
      </IconButton>
      <IconButton
        class="material-icons"
        on:click={() => clicked++}
        title="More options">
        more_vert
      </IconButton>
    </ActionIcons>
  </Actions>
</Card>

<Button on:click={() => alert('Clicked!')}>Just a Button</Button>
<Button variant="raised">
  <Label>Raised Button, Using a Label</Label>
</Button>
<Button some-arbitrary-prop="placed on the actual button">Button</Button>

<Fab on:click={() => alert('Clicked!')} extended>
  <Icon class="material-icons" style="margin-right: 12px;">favorite</Icon>
  <Label>Extended FAB</Label>
</Fab>

<Textfield
  bind:value={superText}
  label="Super Text"
  input$aria-controls="super-helper"
  input$aria-describedby="super-helper" />
<HelperText id="super-helper">
  What you put in this box will become super!
</HelperText>
