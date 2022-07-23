<template>
  <div class="MainView">
    <image-component />
    <div class="MainView__content">
      <text-component
        title="Обслуживание самокатов"
        subtitle="Составте отчет о проделанной
        работе"
      />

      <div class="form__group">
        <div class="form" v-for="(form, formIndex) in forms" :key="formIndex">
          <div class="form__controlWrapper">
            <h3 class="form__subtitle">Вид работ</h3>
            <button
              class="form__clearButton"
              @click="removeFormInforms(formIndex)"
            >
              x
            </button>
          </div>
          <div class="form__radioButtonGroup">
            <radio-button-component
              v-for="(label, radioButtonIndex) in getLabelsForRadioButton(
                'typeOfWork'
              )"
              :key="radioButtonIndex"
              :isSelect="
                getRadioButtonSelectIndexEqual(
                  radioButtonIndex,
                  'typeOfWork',
                  formIndex
                )
              "
              @select="
                setRadioButtonSelectIndex(
                  radioButtonIndex,
                  'typeOfWork',
                  formIndex
                )
              "
              :label="label"
            />
          </div>
          <h3 class="form__subtitle">Модель самоката</h3>
          <div class="form__radioButtonGroup">
            <radio-button-component
              v-for="(label, radioButtonIndex) in getLabelsForRadioButton(
                'bikeModel'
              )"
              :key="radioButtonIndex"
              :isSelect="
                getRadioButtonSelectIndexEqual(
                  radioButtonIndex,
                  'bikeModel',
                  formIndex
                )
              "
              @select="
                setRadioButtonSelectIndex(
                  radioButtonIndex,
                  'bikeModel',
                  formIndex
                )
              "
              :label="label"
            />
          </div>
          <div class="form__counter">
            <h3 class="form__subtitle">Количество</h3>
            <button class="form__counterButton" @click="form.bikeCount--">
              -
            </button>
            <input
              type="number"
              v-model="form.bikeCount"
              class="form__counterInput"
            />
            <button class="form__counterButton" @click="form.bikeCount++">
              +
            </button>
          </div>
        </div>
        <button class="MainView__addFormButton" @click="pushFormToforms()">
          add form
        </button>
      </div>
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
  name: "MainView",
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
          props: ["subinfo"],
          disabled: true,
          visible: true,
        },
      ],
      forms: [
        {
          typeOfWorkIndex: 0,
          bikeModelIndex: 0,
          bikeCount: 0,
        },
      ],
    };
  },
  methods: {
    /** getRadioButtonSelectIndexEqual
     * @property {number} selfIndex — element index
     * @property {string} group — group name
     * @property {number} formIndex — form index in array
     * @return {bool} — Return result equal select index and self index
     */
    getRadioButtonSelectIndexEqual(selfIndex, group, formIndex) {
      return this.forms[formIndex][group + "Index"] == selfIndex;
    },
    /** setRadioButtonSelectIndex — before click on button, set select index
     * @property {number} selfIndex — Element index
     * @property {string} group — Group name
     * @property {number} formIndex — Form index
     */
    setRadioButtonSelectIndex(selfIndex, group, formIndex) {
      this.forms[formIndex][group + "Index"] = selfIndex;
    },
    /** getNavigationComponentButtons — handle navigation
     * property,set 'next' button active if every radio button in every form is select
     * @return {object} — return properties group for NavigationComponent
     */
    getNavigationComponentButtons() {
      let nav = this.navigationComponentButtons;
      let result = this.forms.every((item) => {
        return (
          item.bikeCount > 0 &&
          item.typeOfWorkIndex > -1 &&
          item.bikeModelIndex > -1
        );
      });
      if (result) {
        nav[1].disabled = false;
      }
      return nav;
    },
    /** removeFormInforms — Remove element in array
     * @property {number} index — Element index
     */
    removeFormInforms(index) {
      this.forms.splice(index, 1);
    },
    /** pushFormToforms — Add new form in array */
    pushFormToforms() {
      this.forms.push({
        typeOfWorkIndex: -1,
        bikeModelIndex: -1,
        bikeCount: 0,
      });
    },
    /**
     * getLabelsForRadioButton — Return labels
     * @property {string} formDataGroupName — Group name
     * @return {object} — Return property group
     */
    getLabelsForRadioButton(formDataGroupName) {
      let obj = this.$store.state.formData.find(
        (item) => item.name == formDataGroupName
      );
      return obj.variants;
    },

    /** setStoreProperties — Set properties in store
     * @type {string} value — form properties before parse
     */
    setStoreProperties() {
      this.forms.forEach((item) => {
        let value = {
          bikeCount: item.bikeCount,
          typeOfWork:
            this.getLabelsForRadioButton("typeOfWork")[item.typeOfWorkIndex],
          bikeModel:
            this.getLabelsForRadioButton("bikeModel")[item.bikeModelIndex],
        };
        this.$store.commit("AddForm", value);
      });
    },
  },
};
</script>

<style lang="scss">
.MainView {
  &__content {
    padding: 12px 24px;
    margin-bottom: 64px;
  }
  &__addFormButton {
    width: 100%;
    height: 56px;
  }
}

.form {
  background: #dadada;
  padding: 8px;
  &__group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__clearButton {
    min-width: 56px;
  }
  &__controlWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }
  &__counter {
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    .form__subtitle {
      flex-grow: 1;
    }
    &Input {
      max-width: 56px;
      text-align: center;
    }
    &Button {
      min-width: 56px;
    }
  }
}
</style>
