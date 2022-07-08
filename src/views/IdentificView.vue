<template>
  <div class="IdentificView">
    <image-component />
    <div class="IdentificView__content">
      <text-component title="title" subtitle="subtitle" />
      <radio-button-component
        v-for="(label, index) in radioButtonLabels"
        :key="index"
        :isSelect="getRadioButtonSelectIndexEqual(index)"
        @select="setRadioButtonSelectIndex(index)"
        :label="label"
      />
    </div>
    <navigation-component :buttons="navigationComponentButtons" />
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import RadioButtonComponent from "@/components/RadioButtonComponent.vue";
import RadioButtonWrapperMixins from "@/components/mixins/RadioButtonWrapperMixins.js";
export default {
  name: "IdentificView",
  mixins: [RadioButtonWrapperMixins],
  components: {
    NavigationComponent,
    ImageComponent,
    TextComponent,
    RadioButtonComponent,
  },
  data: function () {
    return {
      navigationComponentButtons: [
        {
          label: "back",
          actionScript: "router.go",
          props: [-1],
        },
        {
          label: "next",
          actionScript: "router.push",
          props: ["main"],
        },
      ],
      radioButtonLabels: ["Nikita", "Vlad", "Roma"],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.IdentificView {
  &__content {
    padding: 12px 24px;
    margin-bottom: 24px;
  }
}
</style>
