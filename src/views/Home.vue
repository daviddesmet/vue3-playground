<template>
  <hello-world msg="Hello Vue 3 + TypeScript + Vite + Tailwind CSS" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  }
});
</script>
