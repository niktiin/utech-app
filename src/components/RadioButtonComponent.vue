<template>
  <button class="RadioButtonComponent" @click="emitEvent()">
    <span
      v-if="isSelect"
      class="RadioButtonComponent__icon material-symbols-outlined"
      >radio_button_checked</span
    >
    <span v-else class="RadioButtonComponent__icon material-symbols-outlined"
      >radio_button_unchecked</span
    >
    <span class="RadioButtonComponent__label">{{ label }}</span>
    <span class="RadioButtonComponent__subButton material-symbols-outlined"
      >info</span
    >
  </button>
</template>

<script>
export default {
  name: "RadioButtonComponent",
  props: ["isSelect", "label"],
  methods: {
    emitEvent() {
      this.$emit("select");
    },
  },
};
</script>

<style lang="scss">
.RadioButtonComponent {
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  &__label {
    margin: 0 24px 0 12px;
    text-align: left;
    flex-grow: 1;
  }
}
</style>
