<template>
  <div class="NavigationComponent">
    <button
      class="NavigationComponent__button_action_secondary"
      @click="onClickButtonSecondary()"
      :disabled="buttons[0].disabled"
      v-show="buttons[0].visible"
    >
      {{ buttons[0].label }}
    </button>
    <button
      class="NavigationComponent__button_action_primary"
      @click="onClickButtonPrimary()"
      :disabled="buttons[1].disabled"
      v-show="buttons[1].visible"
    >
      {{ buttons[1].label }}
    </button>
  </div>
</template>

<script>
export default {
  /**
   * @module NavigationComponent
   * @property {object} buttons label & actionType & properties for buttons
   */
  name: "NavigationComponent",
  props: ["buttons"],
  methods: {
    /** Handle actions
     * @param {object} button label & actionType & properties
     */
    actionHandler(button) {
      switch (button.actionScript) {
        case "router.push":
          this.$router.push(button.props[0]);
          break;
        case "router.go":
          this.$router.go(button.props[0]);
          break;

        default:
          // TODO: Add redirect to error page
          break;
      }
    },
    /** Do action in actionHandler() before click on secondary button*/
    onClickButtonSecondary() {
      this.actionHandler(this.buttons[0]);
      this.$emit("onClickButtonSecondary");
    },
    /** Do action in actionHandler() before click on primary button */
    onClickButtonPrimary() {
      this.actionHandler(this.buttons[1]);
      this.$emit("on-click-button-primary");
    },
  },
};
</script>

<style lang="scss">
.NavigationComponent {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  &__button_action {
    &_secondary {
      flex-grow: 0.5;
      height: 100%;
    }
    &_primary {
      flex-grow: 1;
      height: 100%;
    }
  }
}
</style>
