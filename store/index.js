

export const state = () => ({
	MyTodos: [],
    AllTodods: [],
    Token: '',

})

export const getters = {
    MyTodos(state) {
        return state.MyTodos;
    }

}
export const actions = {
    async UserLogin({commit},Data){
        const response = await this.$axios.post("http://localhost:5015/api/userlogin",{email:Data.email,passcode:Data.passcode}).then((res) => {
            console.log(res.data);
            commit('setToken',res.data);
    })
    },
    async GetMyTodos({commit}){
        const response = await this.$axios.get('http://localhost:5015/api/todos/mytodos',{headers:{'Authorization':'Bearer '+this.state.Token}}).then((res) => {
        commit('getMyTodos', res.data)
    })
    },
    async GetAllTodos({commit}){
        const response = await this.$axios.get('http://localhost:5015/api/todos',{headers:{'Authorization':'Bearer '+this.state.Token}}).then((res) => {
        commit('getAllTodos', res.data)
    })
    },
    async CreateTodo({commit},Data){
        await this.$axios.post('http://localhost:5015/api/todos/create',{todo_title: Data.title, todo_description: Data.description},{headers:{'Authorization':'Bearer '+this.state.Token}}).then((res) => {
        commit('createTodo', res.data)
    })
    },
    async DeleteTodo({commit},id){
        await this.$axios.delete('http://localhost:5015/api/todos/'+id,{headers:{'Authorization':'Bearer '+this.state.Token}}).then((res) => {
        commit('deleteTodo', res)
    })
    },
    async UpdateTodo({commit},Data){
        await this.$axios.put('http://localhost:5015/api/todos/'+Data.id,{todo_title: Data.title, todo_description: Data.description},{headers:{'Authorization':'Bearer '+this.state.Token}}).then((res) => {
        commit('updateTodo', res)
    })
    },




// this.$route.params
// UpdateTodo
// http://localhost:5015/api/todos/1

// DeleteTodo
// http://localhost:5015/api/todos/7

}
export const mutations = {
    setToken(state, payload){
        state.Token = payload;
        console.log(state.Token);
    },
    getMyTodos(state, payload){
        state.MyTodos = payload;
        // state.UserId = payload.user_id
        console.log(state.MyTodos);

    },
    getAllTodos(state, payload){
        state.AllTodods = payload;
        console.log(state.AllTodods);
    },
    createTodo(state, payload){
        console.log(payload.res.data);
    },
    deleteTodo(state, payload){
        // state.MyTodos = payload;
    },
    updateTodo(state, payload){
        // state.MyTodos = payload;
    }


}


// MyTodos
//     http://localhost:5015/api/todos/mytodos
// GetAllTodos
// http://localhost:5015/api/todos
// createTodo
// http://localhost:5015/api/todos
