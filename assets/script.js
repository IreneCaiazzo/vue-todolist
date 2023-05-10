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

        toggleTask(objTodo){

            objTodo.done = !objTodo.done

        },

       removeTodo(index){

           this.arrTodo.splice(index,1)
           
       },

        addTodo(){

            this.arrTodo.push({
                text: this.newTodo,
                done: false,
            });
            this.newTodo="";

        },
    },
});

app.mount('#app')