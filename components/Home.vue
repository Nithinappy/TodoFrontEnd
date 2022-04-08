<template>
  <div class="text-center">
    <h4 class="mt-3">MyTodos :</h4>
    <div class="row mt-5">
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <div
        class="card mb-5"
        style="width: 18rem"
        v-for="(todo, index) in $store.state.MyTodos"
        :key="index"
      >
        <div class="card-header bg-info">
          {{ todo.todo_title }}
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ todo.todo_description }}
          </p>
        </div>
        <div class="row">
          <div class="col-sm-12 text-center">
            <button
              id="btnSearch"
              class="btn btn-info btn-md center-block"
              Style="width: 100px;"
            >
              <nuxt-link
                :to="{ name: 'UpdateTodo', params: { id: todo.todo_id } }"
                >Update</nuxt-link
              >
            </button>
            <button
              id="btnClear"
              class="btn btn-danger btn-md center-block"
              Style="width: 100px;"
              @click="deleteTodo(todo.todo_id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";
import AppHeader from "../components/UserHeader.vue";
export default {
  components: {
    UserHeader,
    AppHeader,
  },
  data() {
    return {
      errorMsg: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("GetMyTodos");
    return;
  },

  methods: {
    deleteTodo(id) {
      console.log(id);
      this.$store.dispatch("DeleteTodo", id);
      this.$store.dispatch("GetMyTodos");
      this.$store.dispatch("GetAllTodos");
    },
  },
  head() {
    return {
      title: "User Home",
      meta: [
        {
          hid: "UserHome",
          name: "UserHeader",
          content: "User Home Page",
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background-color: cadetblue;
}
</style>



