<template>
  <div>
    <UserHeader v-if="$store.state.Token != ''" />
    <AppHeader v-else />
    <Home v-if="$store.state.Token != ''" />
    <div v-else class="text-center mt-5">
      <h1 class="bg-danger p-3">Invalid Login Details</h1>
    </div>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";
import AppHeader from "../components/inc/AppHeader.vue";
import Home from "../components/Home.vue";
export default {
  components: {
    UserHeader,
    AppHeader,
    Home,
  },
};
</script>

<style>
</style>
