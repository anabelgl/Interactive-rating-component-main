const { createApp } = Vue;
createApp({
  data() {
    return {
      rate: '',
      ratingNumbers: [
        { number: "1", isActive: false },
        { number: "2", isActive: false },
        { number: "3", isActive: false },
        { number: "4", isActive: false },
        { number: "5", isActive: false },
      ],
      activeStyle: {
        backgroundColor: "hsl(25, 97%, 53%)",
        color: "hsl(0, 0%, 100%)",
      },
    };
  },
  methods: {
    changeBackgroud(ratingNumbers, ratingNumber, event) {
      ratingNumber.isActive = ratingNumber.isActive == true ? false : true;

      for (let i = 0; i < ratingNumbers.length; i++) {
        if (
          ratingNumbers[i].isActive == true &&
          ratingNumbers[i].number != ratingNumber.number
        ) {
          ratingNumbers[i].isActive = false;
        }
      }
      console.log(rate);
    },
    changeRate(){
        rate = ratingNumber.number;
    }
  },
}).mount("#app");
