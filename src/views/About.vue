<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <hello-world-decorator msg="Hello Vue 3 + TypeScript + Vite + Tailwind CSS" />
      </div>
    </div>
  </main>
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
