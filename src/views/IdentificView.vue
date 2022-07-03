<template>
  <div class="IdentificView">
    <h1>This is an about page</h1>
    <navigation-component />
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";

export default {
  name: "IdentificView",
  components: {
    NavigationComponent,
  },
};
</script>
