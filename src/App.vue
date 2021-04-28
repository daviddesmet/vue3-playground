<template>
  <div class="justify-center flex-1">
    <div class="container pt-8 mx-auto">
      <img alt="Vue logo" src="./assets/logo.png" />
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <header-layout />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLayout from "@/components/HeaderLayout.vue";

/* Vue Composition API */
export default defineComponent({
  name: "App",
  components: {
    HeaderLayout
  }
});
</script>
