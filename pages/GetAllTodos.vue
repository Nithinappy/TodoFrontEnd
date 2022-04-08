<template>
  <div class="text-center">
    <UserHeader />
    <h4 class="mt-3">AllTodos :</h4>
    <div class="row mt-5">
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <div
        class="card mb-5 ml-5"
        style="width: 18rem"
        v-for="(todo, index) in $store.state.AllTodods"
        :key="index"
      >
        <div class="card-header bg-info">
          {{ todo.todo_title }}
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ todo.todo_title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";
export default {
  components: {
    UserHeader,
  },
  data() {
    return {
      errorMsg: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("GetAllTodos");
    return;
  },

  // methods: {
  //   myTodos() {
  //     this.$store.dispatch("GetMyTodos");
  //   },
  // },
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

<style>
</style>