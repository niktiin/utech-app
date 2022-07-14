<template>
  <div class="IdentificView">
    <image-component />
    <div class="IdentificView__content">
      <text-component title="title" subtitle="subtitle" />
      <radio-button-component
        v-for="(label, index) in getLablesForRadioButton('username')"
        :key="index"
        :isSelect="getRadioButtonSelectIndexEqual(index)"
        @select="setRadioButtonSelectIndex(index)"
        :label="label"
      />
    </div>
    <navigation-component
      @clickNextButton="setStoreData()"
      :buttons="getNavigationComponentButtons()"
    />
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
    };
  },
  methods: {
    //  Get labels in store
    getLablesForRadioButton(group) {
      let obj = this.$store.state.formData.find((item) => item.name == group);
      return obj.variants;
    },
    // Get data to navigation component
    getNavigationComponentButtons() {
      return this.navigationComponentButtons;
    },
    // If form data full, set data in store
    setStoreData() {
      let value =
        this.getLablesForRadioButton("username")[this.radioButtonSelectIndex];
      this.$store.commit("setFormData", { propName: "username", value: value });
    },
  },
};
</script>

<style lang="scss">
.IdentificView {
  &__content {
    padding: 12px 24px;
    margin-bottom: 56px;
  }
}
</style>
