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
        <div
          class="form"
          v-for="(form, formIndex) in GroupOfForm"
          :key="formIndex"
        >
          <div class="form__controlWrapper">
            <h3 class="form__subtitle">Вид работ</h3>
            <button
              class="form__clearButton"
              @click="removeFormInGroupOfForm(formIndex)"
            >
              x
            </button>
          </div>
          <div class="form__radioButtonGroup">
            <radio-button-component
              v-for="(label, radioButtonIndex) in getLablesForRadioButton(
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
              v-for="(label, radioButtonIndex) in getLablesForRadioButton(
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
            <button class="form__counterButton" @click="form.bikeCounter--">
              -
            </button>
            <input
              type="number"
              v-model="form.bikeCounter"
              class="form__counterInput"
            />
            <button class="form__counterButton" @click="form.bikeCounter++">
              +
            </button>
          </div>
        </div>
        <button
          class="MainView__addFormButton"
          @click="pushFormToGroupOfForm()"
        >
          add form
        </button>
      </div>
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
        },
        {
          label: "next",
          actionScript: "router.push",
          props: ["subinfo"],
        },
      ],
      GroupOfForm: [
        {
          radioButtonGroup: {
            typeOfWork: {
              selectIndex: 0,
            },
            bikeModel: {
              selectIndex: 0,
            },
          },
          bikeCounter: 0,
        },
      ],
    };
  },
  methods: {
    // Get data to navigation component
    getNavigationComponentButtons() {
      return this.navigationComponentButtons;
    },
    // If form data full, set data in store
    setStoreData() {
      this.$store.commit("setGroupOfForm", this.GroupOfForm);
    },
    // Remove form
    removeFormInGroupOfForm(index) {
      this.GroupOfForm.splice(index, 1);
    },
    // Add form
    pushFormToGroupOfForm() {
      this.GroupOfForm.push({
        radioButtonGroup: {
          typeOfWork: {
            selectIndex: 0,
          },
          bikeModel: {
            selectIndex: 0,
          },
        },
        bikeCounter: 0,
      });
    },
    // Return bool value true, if selection button index equal index in data
    getRadioButtonSelectIndexEqual(selfIndex, group, formIndex) {
      return (
        this.GroupOfForm[formIndex].radioButtonGroup[group].selectIndex ==
        selfIndex
      );
    },
    // If select, set index in data
    setRadioButtonSelectIndex(selfIndex, group, formIndex) {
      this.GroupOfForm[formIndex].radioButtonGroup[group].selectIndex =
        selfIndex;
    },
    //  Get labels in store
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
    margin-bottom: 96px;
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
