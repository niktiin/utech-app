<template>
  <div class="SubInfoView">
    <image-component />
    <div class="SubInfoView__content">
      <text-component
        title="О смене"
        subtitle="Выберете рабочее время и место работы"
      />
      <div class="SubInfoView__group">
        <h3 class="SubInfoView__subtitle">Выберете дату отчета</h3>
        <div class="SubInfoView__radioButtonIndexes">
          <radio-button-component
            v-for="(label, index) in getLabelsForRadioButton('date')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'date')"
            @select="setRadioButtonSelectIndex(index, 'date')"
            :label="label"
          />
        </div>
      </div>
      <div class="SubInfoView__group">
        <h3 class="SubInfoView__subtitle">Выберете продолжительность смены</h3>
        <div class="SubInfoView__radioButtonIndexes">
          <radio-button-component
            v-for="(label, index) in getLabelsForRadioButton('time')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'time')"
            @select="setRadioButtonSelectIndex(index, 'time')"
            :label="label"
          />
        </div>
      </div>
      <div class="SubInfoView__group">
        <h3 class="SubInfoView__subtitle">Выберете место работы</h3>
        <div class="SubInfoView__radioButtonIndexes">
          <radio-button-component
            v-for="(label, index) in getLabelsForRadioButton('place')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'place')"
            @select="setRadioButtonSelectIndex(index, 'place')"
            :label="label"
          />
        </div>
      </div>
    </div>
    <Navigation-component
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
  name: "SubInfoView",
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
          disabled: false,
          visible: true,
        },
        {
          label: "next",
          actionScript: "router.push",
          props: ["result"],
          disabled: true,
          visible: true,
        },
      ],
      radioButtonIndexes: {
        dateIndex: -1,
        timeIndex: -1,
        placeIndex: -1,
      },
    };
  },
  methods: {
    /** getRadioButtonSelectIndexEqual
     * @property {number} selfIndex — element index
     * @property {string} group — group name
     * @return {bool} — Return result equal select index and self index
     */
    getRadioButtonSelectIndexEqual(selfIndex, group) {
      return this.radioButtonIndexes[group + "Index"] == selfIndex;
    },
    /** setRadioButtonSelectIndex — before click on button, set select index
     * @property {number} selfIndex — Element index
     * @property {string} group — Group name
     * @property {number} formIndex — Form index
     */
    setRadioButtonSelectIndex(selfIndex, group) {
      this.radioButtonIndexes[group + "Index"] = selfIndex;
    },
    /**
     * getLabelsForRadioButton — Return labels
     * @property {string} formDataGroupName — Group name
     * @return {object} — Return property group
     */
    getLabelsForRadioButton(group) {
      let obj = this.$store.state.formData.find((item) => item.name == group);
      return obj.variants;
    },
    /** getNavigationComponentButtons — handle navigation
     * property,set 'next' button active if every radio button is select
     * @return {object} — return properties group for NavigationComponent
     */
    getNavigationComponentButtons() {
      let nav = this.navigationComponentButtons;
      let rbi = this.radioButtonIndexes;
      if (rbi.dateIndex > -1 && rbi.timeIndex > -1 && rbi.placeIndex > -1) {
        nav[1].disabled = false;
      }
      return nav;
    },

    /** setStoreProperties
     * @function commit — parse property index to label and commit value
     */
    setStoreProperties() {
      let commit = (groupName) => {
        let labels = this.getLabelsForRadioButton(groupName);
        let value = labels[this.radioButtonIndexes[groupName + "Index"]];
        this.$store.commit("setFormData", {
          propName: groupName,
          value: value,
        });
      };
      commit("date");
      commit("time");
      commit("place");
    },
  },
};
</script>

<style lang="scss">
.SubInfoView {
  &__content {
    padding: 12px 24px;
    margin-bottom: 56px;
  }
}
</style>
