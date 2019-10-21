<script>
  import Ripple from "@smui/ripple";
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import Icon from "@smui/textfield/icon/index";
  import HelperText from "@smui/textfield/helper-text/index";
  import CharacterCounter from "@smui/textfield/character-counter/index";
  import { Icon as CommonIcon } from "@smui/common";
  import FloatingLabel from "@smui/floating-label";
  import LineRipple from "@smui/line-ripple";
  import NotchedOutline from "@smui/notched-outline";
  import Button, { Group, GroupItem, Label } from "@smui/button";

  let chatText = "";
  let chatEmail = "";
  let showChat = false;

  function toggleChat() {
    showChat ? (showChat = false) : (showChat = true);
  }
  function inputHandler(e) {
    const field = event.target;

    //Resize textfield
    field.style.height = "inherit";
    const computed = window.getComputedStyle(field);
    const height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    field.style.height = height + "px";
  }

  //Hide chat container on Esc
  window.addEventListener("keydown", e => {
    if (e.keyCode == 27 && showChat) {
      showChat = false;
    }
  });

  //Hide Chat container if clicked outside of it
  let chatContainerDiv;
  window.addEventListener("pointerdown", e => {
    if (!chatContainerDiv.contains(e.target)) {
      showChat = false;
    }
  });

  let valueClickable = "";
  let dirtyClickable = false;
  let invalidClickable = false;
</script>

<style>
  .chat-button {
    width: 6em;
    height: 6em;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #02ff92;
    border-radius: 3em;
  }
  .chat-container {
    position: fixed;
    bottom: 1vh;
    right: 1vw;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
  .chat-bubble {
    background-color: black;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    align-content: space-between;
    justify-content: space-between;
    align-items: baseline;
  }

  .chat-send-row {
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
  }

  div.chat-bubble :global(.mdc-text-field__input) {
    font-size: 1.4em;
  }
</style>

<div class="chat-container" bind:this={chatContainerDiv}>
  {#if showChat}
    <div class="chat-bubble">
      <div style="width: 100%;">
        <Textfield
          fullwidth
          textarea
          on:input={inputHandler}
          bind:value={chatText}
          label="Send me a message"
          input$aria-controls="helper-text-textarea"
          input$aria-describedby="helper-text-textarea" />
        <HelperText id="helper-text-textarea" />
        <div class="chat-send-row">
          <div>
            <Textfield
              type="email"
              withTrailingIcon={valueClickable !== ''}
              bind:dirty={dirtyClickable}
              bind:invalid={invalidClickable}
              updateInvalid
              bind:value={valueClickable}
              label="your e-mail address"
              input$autocomplete="email" />
            <HelperText validationMsg>
              That's not a valid email address.
            </HelperText>
          </div>
          <Button on:click={console.log} variant="outlined">
            <Icon class="material-icons" style="padding-left: 8px;">send</Icon>
            <Label style="padding: 10px;">Send</Label>
          </Button>
        </div>
      </div>
    </div>
  {/if}
  <div
    class="chat-button"
    use:Ripple={[true, { unbounded: true, color: 'surface' }]}
    on:click={toggleChat}>
    <Icon class="material-icons" style="font-size:4em;">chat</Icon>
  </div>
</div>
