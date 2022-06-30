const {createApp} = Vue
createApp({
    data() {
        return {
            rate: '1',
            ratingNumbers:['1', '2', '3', '4', '5'],
            activated: false
        }
    },
    methods: {
        changeBackgroud(number){
           this.li.backgroundColor = 'hsl(25, 97%, 53%);';
        }
    }
}).mount('#app');