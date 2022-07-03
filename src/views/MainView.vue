<template>
  <div class="MainView">
    <h1>This is an MainView page</h1>
    <Navigation-component />
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";

export default {
  name: "MainView",
  components: {
    NavigationComponent,
  },
};
</script>
