<template>
  <div class="SubInfoView">
    <h1>This is an SubInfoView page</h1>
    <Navigation-component />
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";

export default {
  name: "SubInfoView",
  components: {
    NavigationComponent,
  },
};
</script>
