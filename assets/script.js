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
        addTodo: function(){
            arrTodo.push('value')
            console.log(arrTodo)
        }
    },
});

app.mount('#app')