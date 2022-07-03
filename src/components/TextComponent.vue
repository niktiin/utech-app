<template>
  <div class="TextComponent">
    <h1 class="TextComponent__title">{{ title }}</h1>
    <h2 class="TextComponent__subtitle">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: "TextComponent",
  props: ["title", "subtitle"],
};
</script>

<style lang="scss">
.TextComponent {
  font-weight: 400;
  &__title,
  &__subtitle {
    font-weight: inherit;
  }
  &__title {
    font-size: 24px;
  }
  &__subtitle {
    font-size: 16px;
    color: var(--wb-1);
  }
}
</style>
