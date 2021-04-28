<template>
  <hello-world-decorator msg="Hello Vue 3 + TypeScript + Vite + Tailwind CSS" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorldDecorator from "@/components/HelloWorldDecorator.vue";

/* Vue Composition API */
export default defineComponent({
  name: "About",
  components: {
    HelloWorldDecorator
  }
});
</script>
