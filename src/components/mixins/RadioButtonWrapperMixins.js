export default {
  data: function () {
    return {
      radioButtonSelectIndex: 0,
    };
  },
  methods: {
    getRadioButtonSelectIndexEqual(selfIndex) {
      return this.radioButtonSelectIndex == selfIndex;
    },
    setRadioButtonSelectIndex(selfIndex) {
      this.radioButtonSelectIndex = selfIndex;
    },
  },
};
