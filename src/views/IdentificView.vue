<template>
  <div class="IdentificView">
    <image-component />
    <div class="IdentificView__content">
      <text-component title="title" subtitle="subtitle" />
      <div class="IdentificView__filter">
        <input type="text" v-model="filterModel" />
        <button @click="filterModel = ''" class="material-symbols-outlined">
          close
        </button>
      </div>
      <radio-button-component
        v-for="(label, index) in getLabelsBeforeFilter('username')"
        :key="index"
        :isSelect="getRadioButtonSelectIndexEqual(index)"
        @select="setRadioButtonSelectIndex(index)"
        :label="label"
        :isVisibleInfo="false"
      />
    </div>
    <navigation-component
      :buttons="getNavigationComponentButtons()"
      @on-click-button-primary="setStoreProperties()"
    />
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import TextComponent from "@/components/TextComponent.vue";
import RadioButtonComponent from "@/components/RadioButtonComponent.vue";
export default {
  /**
   * @module IdentificView
   * @type {number} radioButtonSelectIndex
   * @type {array} navigationComponentButtons — NavigationComponent
   * labels & actions & props in array
   */
  name: "IdentificView",
  components: {
    NavigationComponent,
    ImageComponent,
    TextComponent,
    RadioButtonComponent,
  },
  data: function () {
    return {
      filterModel: "",
      radioButtonSelectIndex: -1,
      navigationComponentButtons: [
        {
          label: "back",
          actionScript: "router.go",
          props: [-1],
          disabled: true,
          visible: false,
        },
        {
          label: "next",
          actionScript: "router.push",
          props: ["main"],
          disabled: true,
          visible: true,
        },
      ],
    };
  },
  methods: {
    /**
     * getLabelsForRadioButton
     * @property {string} formDataGroupName — Group name
     * @return {object} — Return property group
     */
    getLabelsForRadioButton(formDataGroupName) {
      let obj = this.$store.state.formData.find(
        (item) => item.name == formDataGroupName
      );
      return obj.variants;
    },
    getLabelsBeforeFilter(formDataGroupName) {
      let labels = this.getLabelsForRadioButton(formDataGroupName);
      if (this.filterModel) {
        return labels.filter((item) => {
          return this.filterModel
            .toLowerCase()
            .split(" ")
            .every((v) => item.toLowerCase().includes(v));
        });
      }
      return labels;
    },
    /** getRadioButtonSelectIndexEqual
     * @return {bool} — Return result equal select index and self index
     */
    getRadioButtonSelectIndexEqual(selfIndex) {
      return this.radioButtonSelectIndex == selfIndex;
    },

    /** setRadioButtonSelectIndex — before click on button, set select index
     * @property {number} selfIndex — Element index
     */
    setRadioButtonSelectIndex(selfIndex) {
      this.radioButtonSelectIndex = selfIndex;
    },

    /** getNavigationComponentButtons — handle navigation
     * property,set 'next' button active if radio button is select
     * @return {object} — return properties group for NavigationComponent
     */
    getNavigationComponentButtons() {
      let nav = this.navigationComponentButtons;
      if (this.radioButtonSelectIndex > -1) {
        nav[1].disabled = false;
      }
      return nav;
    },

    /** setStoreProperties
     * @type {string} value — username value
     */
    setStoreProperties() {
      let labels = this.getLabelsForRadioButton("username");
      let value = labels[this.radioButtonSelectIndex];
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
  &__filter {
    display: flex;
    width: 100%;
    margin-bottom: 24px;
    input {
      width: 100%;
    }
  }
}
</style>
