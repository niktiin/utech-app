<template>
  <div class="MainView">
    <image-component />
    <div class="MainView__content">
      <text-component
        title="Обслуживание самокатов"
        subtitle="Составте отчет о проделанной
        работе"
      />
      <div class="form">
        <h3 class="form__subtitle">Вид работ</h3>
        <div class="form__radioButtonGroup">
          <radio-button-component
            v-for="(label, index) in getLablesForRadioButton('typeOfWork')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'typeOfWork')"
            @select="setRadioButtonSelectIndex(index, 'typeOfWork')"
            :label="label"
          />
        </div>
        <h3 class="form__subtitle">Модель самоката</h3>
        <div class="form__radioButtonGroup">
          <radio-button-component
            v-for="(label, index) in getLablesForRadioButton('bikeModel')"
            :key="index"
            :isSelect="getRadioButtonSelectIndexEqual(index, 'bikeModel')"
            @select="setRadioButtonSelectIndex(index, 'bikeModel')"
            :label="label"
          />
        </div>
      </div>
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
  name: "MainView",
  components: {
    NavigationComponent,
    ImageComponent,
    TextComponent,
    RadioButtonComponent,
  },
  data: function () {
    return {
      radioButtonGroup: {
        typeOfWork: {
          selectIndex: 0,
        },
        bikeModel: {
          selectIndex: 0,
        },
      },
      bikeCounter: 0,
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
  },
};
</script>

<style lang="scss">
.MainView {
  &__content {
    padding: 12px 24px;
  }
}
</style>
