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
    <navigation-component />
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import RadioButtonComponent from "@/components/RadioButtonComponent.vue";

export default {
  name: "IdentificView",
  components: {
    NavigationComponent,
    ImageComponent,
    TextComponent,
    RadioButtonComponent,
  },
  data: function () {
    return {
      radioButtonSelectIndex: 0,
      radioButtonLabels: ["Nikita", "Vlad", "Roma"],
    };
  },
  methods: {
    getRadioButtonSelectIndexEqual(selfIndex) {
      return this.radioButtonSelectIndex == selfIndex;
    },
    setRadioButtonSelectIndex(selfIndex) {
      this.radioButtonSelectIndex = selfIndex;
    }
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
