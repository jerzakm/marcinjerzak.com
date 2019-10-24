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
        <IconButton
          toggle
          aria-label="Add to favorites"
          title="Add to favorites">
          <Icon class="material-icons" on>favorite</Icon>
          <Icon class="material-icons">favorite_border</Icon>
        </IconButton>
        <IconButton class="material-icons" title="Share">share</IconButton>
        <IconButton class="material-icons" title="More options">
          more_vert
        </IconButton>
      </ActionIcons>
    </Actions>

  </Card>
{/each}

<!-- <Item
        on:SMUI:action={() => (selectionTwoLine = item.name)}
        disabled={item.disabled}>
        <Graphic style="background-image: url(assets/hexedRealms_16x9.png);" />
        <Text>
          <PrimaryText>Lorem ipsum dolor sit amet consectetur.</PrimaryText>
          <SecondaryText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque
            modi quod reiciendis fugit hic, voluptate nostrum inventore mollitia
            officia?
          </SecondaryText>
        </Text>
        <Meta class="material-icons">info</Meta>
      </Item> -->
