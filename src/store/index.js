import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: [
      {
        name: "date",
        entry: "",
        value: "",
        variants: ["Сегодня", "Выбрать другую дату"],
      },
      {
        name: "place",
        entry: "",
        value: "",
        variants: ["Сервинсый центр", "Поля"],
      },
      {
        name: "time",
        entry: "",
        value: "",
        variants: ["12 часов", "8 часов", "4 часа"],
      },
      {
        name: "position",
        entry: "",
        value: "",
        variants: ["Техник", "Инженер", "Маляр", "Слесарь", "Тестировщик"],
      },
      {
        name: "username",
        entry: "",
        value: "",
        variants: ["Никита", "Влад", "Рома"],
      },
      {
        name: "role",
        entry: "",
        value: "",
        variants: [
          "Обслуживание самокатов",
          "Обслуживание электронных модулей",
          "Слесарная работа",
        ],
      },
      {
        name: "typeOfWork",
        entry: "",
        value: "",
        variants: ["ТО", "Ремонт", "Сборка"],
      },
      {
        name: "bikeModel",
        entry: "",
        value: "",
        variants: ["G30", "AKAI", "MAX PLUS"],
      },
      {
        name: "bikeCount",
        entry: "",
        value: "",
        variants: [],
      },
    ],
    groupOfForm: [],
  },
  getters: {
    // Validation data, filter empty value
    getValidData: (state) => {
      let noValid = state.formData.filter((value) => {
        return value == "";
      });
      if (noValid.length > 0) {
        return false;
      }
      return state.formData;
    },
  },
  mutations: {
    // Set group of form, temporary storage
    setGroupOfForm(state, GroupOfForm) {
      state.GroupOfForm = GroupOfForm;
    },

    // Save temp data to store, temporary storage
    setFormData(state, data) {
      let index = state.formData.findIndex(
        (item) => item.name == data.propName
      );
      state.formData[index].value = data.value;
    },
  },
  actions: {
    // Request to API  TODO
    sendDataToSheets: () => {
      axios
        .get("https://yandex.ru")
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  modules: {},
});
