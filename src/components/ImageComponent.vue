<template>
  <div class="ImageComponent">
    <img src="image.svg" alt="" class="imageComponent__img" />
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
};
</script>

<style lang="scss">
.imageComponent {
  &__img {
    width: 100%;
  }
}
</style>
