<template>
  <div>
    <AppHeader />
    <br />
    <Sidebar />
  </div>
</template>

<script>
import AppHeader from "../components/inc/AppHeader.vue";
import Sidebar from "../components/slider.vue";
export default {
  name: "IndexPage",
  components: {
    AppHeader,
    Sidebar,
  },
  head() {
    return {
      title: "Todo App",
      meta: [
        {
          name: "description",
          content: "Get all  Latest Tods By Register",
        },
      ],
    };
  },
};
</script>
