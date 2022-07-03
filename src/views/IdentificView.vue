<template>
  <div class="IdentificView">
    <image-component />
    <div class="IdentificView__content">
      <text-component title="title" subtitle="subtitle" />
    </div>
    <navigation-component />
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import TextComponent from "@/components/TextComponent.vue";

export default {
  name: "IdentificView",
  components: {
    NavigationComponent,
    ImageComponent,
    TextComponent,
  },
};
</script>

<style lang="scss">
.IdentificView {
  &__content {
    padding: 12px 24px;
  }
}
</style>
