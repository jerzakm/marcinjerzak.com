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
  import IconButton, { Icon } from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";
  import Chip, { Set } from "@smui/chips";
  let clickedSimple = "nothing yet";
  let clickedDense = "nothing yet";
  let recentArticles = [
    {
      title: "1Lorem ipsum dolor sit amet consectetur.",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque
            modi quod reiciendis fugit hic, voluptate nostrum inventore mollitia
            officia?`,
      tags: ["typescript", "pixi.js", "javascript", "webgl", "aws"]
    },
    {
      title: "2Lorem ipsum dolor sit amet consectetur.",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque
            modi quod reiciendis fugit hic, voluptate nostrum inventore mollitia
            officia?`,
      tags: ["typescript", "pixi.js", "javascript", "webgl", "aws"]
    },
    {
      title: "3Lorem ipsum dolor sit amet consectetur.",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque
            modi quod reiciendis fugit hic, voluptate nostrum inventore mollitia
            officia?`,
      tags: ["typescript", "pixi.js", "javascript", "webgl", "aws"]
    },
    {
      title: "4Lorem ipsum dolor sit amet consectetur.",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque
            modi quod reiciendis fugit hic, voluptate nostrum inventore mollitia
            officia?`,
      tags: ["typescript", "pixi.js", "javascript", "webgl", "aws"]
    }
  ];
  let selectionTwoLine = "Stephen Hawking";
  // This value is updated when the component is initialized, based on the
  // selected Item's `selected` prop.
  let selectionIndex = null;
  let clickedGroup = "nothing yet";
  let selectedRadio = "Tom Hanks";
  let selectedCheckbox = ["Tom Hanks"];
</script>

{#each recentArticles as article}
  <Card>
    <Content>
      <h2>{article.title}</h2>
      {article.description}
    </Content>
    <Set chips={article.tags} let:chip>
      <Chip shouldRemoveOnTrailingIconClick={false}>
        {#if chip === 'four'}
          <Icon class="material-icons" leading>book</Icon>
        {/if}
        <Text>{chip}</Text>
        {#if chip === 'five'}
          <Icon class="material-icons" trailing>commute</Icon>
        {/if}
      </Chip>
    </Set>
    <Actions>
      <ActionButtons>
        <Button disabled>
          <Label>10 min read</Label>
        </Button>
      </ActionButtons>
      <ActionIcons>
        <Button disabled>
          <Label>02.09.2019</Label>
        </Button>
        <IconButton class="material-icons" title="Share">share</IconButton>
      </ActionIcons>
    </Actions>

  </Card>
{/each}
