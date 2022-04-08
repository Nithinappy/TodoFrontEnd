<template>
  <div>
    <UserHeader />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card p-4 mt-5">
          <div class="card-header text-center bg-success mb-3">
            <h3>Create Todo</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="CreateTodo">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="formData.title"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="formData.description"
                />
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-warning">
                  createTodo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";
export default {
  component: {
    UserHeader,
  },
  data() {
    return {
      title: "",
      description: "",
      formData: {
        title: this.title,
        description: this.description,
      },
    };
  },
  methods: {
    CreateTodo() {
      this.$store.dispatch("CreateTodo", this.formData);
      this.$router.push("/UserHome");
    },
  },
  head() {
    return {
      title: "Create Todo Page",
    };
  },
};
</script>

<style>
</style>