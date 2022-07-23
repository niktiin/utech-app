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
        entry: "entry.1418403925",
        value: "",
        variants: ["ТО", "Ремонт", "Сборка"],
      },
      {
        name: "bikeModel",
        entry: "entry.1225917858",
        value: "",
        variants: ["G30", "AKAI", "MAX PLUS"],
      },
      {
        name: "bikeCount",
        entry: "entry.1989046808",
        value: "",
        variants: [],
      },
    ],
    forms: [],
  },
  getters: {
    getNavigationComponentLabel: (state) => {
      return state.navigationComponentData.label;
    },
  },
  mutations: {
    AddForm(state, form) {
      console.log(state.forms);
      state.forms.push(form);
    },
    setFormData(state, data) {
      console.log(data);
      let index = state.formData.findIndex(
        (item) => item.name == data.propName
      );
      state.formData[index].value = data.value;
    },
  },
  actions: {},
  modules: {},
});
