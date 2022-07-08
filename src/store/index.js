import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: [
      {
        name: "date",
        entry: "",
        value: "",
        variants: [],
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
    formGroup: [],
  },
  getters: {
    getNavigationComponentLabel: (state) => {
      return state.navigationComponentData.label;
    },
  },
  mutations: {
    setFormGroup(state, formGroup) {
      state.formGroup = formGroup;
    },
  },
  actions: {},
  modules: {},
});
