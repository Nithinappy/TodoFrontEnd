<template>
  <div>
    <AppHeader />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card p-4 mt-5">
          <div class="card-header text-center bg-success mb-3">
            <h3>User Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="formData.email"
                />
              </div>
              <div class="form-group">
                <label for="passcode">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passcode"
                  v-model="formData.passcode"
                />
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-warning">Login</button>
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
import AppHeader from "../components/inc/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      email: "",
      passcode: "",
      formData: {
        email: this.email,
        passcode: this.passcode,
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("UserLogin", this.formData);
      this.$router.push("/UserHome");
    },
    // async login() {
    //   try {
    //     console.log("hai");
    //     console.log(this.formData.email);
    //     console.log(this.formData.passcode);
    //     const response = await axios
    //       .post("http://localhost:5015/api/userlogin", this.formData)
    //       .then((res) => {
    //         console.log("hai1");
    //         console.log(res.data);
    //         if (res.data.success) {
    //           this.$router.push("/UserHome");
    //         }
    //       });
    //   } catch (error) {
    //     console.log(error);
    //     this.errorMsg = error;
    //   }
    // },
  },
  head() {
    return {
      title: "User Login Page",
      meta: [
        {
          hid: "LoginPage",
          name: "LoginPage",
          content: "User Can Login Here",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>