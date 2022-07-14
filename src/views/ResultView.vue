<template>
  <div class="ResultView">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("sendDataToSheets");
  },
};
</script>

<style></style>
