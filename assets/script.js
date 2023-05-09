const app = Vue.createApp({
    data(){
        return{
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
            ]

        };
    },

    methods: { 

    },
});

app.mount('#app')