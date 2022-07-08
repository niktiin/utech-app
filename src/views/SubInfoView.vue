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
        <div class="SubInfoView__radioButtongroup">
          <radio-button-component
            v-for="(label, index) in getLablesForRadioButton('date')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'date')"
            @select="setRadioButtonSelectIndex(index, 'date')"
            :label="label"
          />
        </div>
      </div>
      <div class="SubInfoView__group">
        <h3 class="SubInfoView__subtitle">Выберете продолжительность смены</h3>
        <div class="SubInfoView__radioButtongroup">
          <radio-button-component
            v-for="(label, index) in getLablesForRadioButton('time')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'time')"
            @select="setRadioButtonSelectIndex(index, 'time')"
            :label="label"
          />
        </div>
      </div>
      <div class="SubInfoView__group">
        <h3 class="SubInfoView__subtitle">Выберете место работы</h3>
        <div class="SubInfoView__radioButtongroup">
          <radio-button-component
            v-for="(label, index) in getLablesForRadioButton('place')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'place')"
            @select="setRadioButtonSelectIndex(index, 'place')"
            :label="label"
          />
        </div>
      </div>
    </div>
    <Navigation-component :buttons="getNavigationComponentButtons()" />
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
        },
        {
          label: "next",
          actionScript: "router.push",
          props: ["result"],
        },
      ],
      radioButtonGroup: {
        date: {
          selectIndex: 0,
        },
        time: {
          selectIndex: 0,
        },
        place: {
          selectIndex: 0,
        },
      },
    };
  },
  methods: {
    getRadioButtonSelectIndexEqual(selfIndex, group) {
      return this.radioButtonGroup[group].selectIndex == selfIndex;
    },
    setRadioButtonSelectIndex(selfIndex, group) {
      this.radioButtonGroup[group].selectIndex = selfIndex;
    },
    getLablesForRadioButton(group) {
      let obj = this.$store.state.formData.find((item) => item.name == group);
      return obj.variants;
    },
    getNavigationComponentButtons() {
      let dateValue =
        this.getLablesForRadioButton("date")[
          this.radioButtonGroup.date.selectIndex
        ];
      this.$store.commit("setFormData", { propName: "date", value: dateValue });
      let timeValue =
        this.getLablesForRadioButton("time")[
          this.radioButtonGroup.date.selectIndex
        ];
      this.$store.commit("setFormData", { propName: "time", value: timeValue });
      let placeValue =
        this.getLablesForRadioButton("place")[
          this.radioButtonGroup.date.selectIndex
        ];
      this.$store.commit("setFormData", {
        propName: "place",
        value: placeValue,
      });

      return this.navigationComponentButtons;
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
