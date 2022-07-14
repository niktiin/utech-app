<template>
  <div class="NavigationComponent">
    <button
      class="NavigationComponent__button_action_secondary"
      @click="onActionSecondary()"
    >
      {{ buttons[0].label }}
    </button>
    <button
      class="NavigationComponent__button_action_primary"
      @click="onActionPrimary()"
    >
      {{ buttons[1].label }}
    </button>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: ["buttons"],
  methods: {
    // Select action
    onActionScript(button) {
      switch (button.actionScript) {
        case "router.push":
          this.$router.push(button.props[0]);
          break;
        case "router.go":
          this.$router.go(button.props[0]);
          break;

        default:
          break;
      }
    },
    // Emit action on button click
    onActionSecondary() {
      this.onActionScript(this.buttons[0]);
    },
    // Emit action on button click
    onActionPrimary() {
      this.$emit("clickNextButton");
      this.onActionScript(this.buttons[1]);
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
