const app = Vue.createApp({
    data(){
        return{

            newTodo: '',

            arrTodo: [
                {
                    text: 'fare la spesa',
                    done: true,
                },
                {
                    text: 'accompagnare nonna dal dentista',
                    done: false,
                },
                {
                    text: 'andare alle poste',
                    done: false,
                },
            ],

        };
    },

    methods: { 
        addTodo(){
            this.arrTodo.push({text: this.newTodo,
                done: false,})
            console.log(this.arrTodo)
        }
    },
});

app.mount('#app')