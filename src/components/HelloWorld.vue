<template>
  <h1>{{ msg }}</h1>

  <button
    class="flex items-center justify-center px-6 py-1 my-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-2 md:text-lg md:px-8"
    @click="increment"
    >count is: {{ count }}</button
  >
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div>Vuex Store count: {{ countStore }}</div>
  <div>App Version: v{{ appVersion }}</div>
</template>

<script lang="ts">
/* script setup (experimental proposal)
// https://github.com/vuejs/rfcs/pull/227
import { computed, defineProps } from "vue";
import { useStore, Mutation } from "@/store/index";

const store = useStore();
const appVersion = store.state.version; // not reactive!
const count = computed(() => store.state.count);
const props = defineProps<{
  msg: string;
}>();

function increment() {
  store.commit(Mutation.INCREMENT, 1);
}
*/

/* Vue Composition API */
import { computed, ref, defineComponent } from "vue";
import { useStore, Mutation } from "@/store/index";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore();
    const appVersion = store.state.version; // not reactive!

    const count = ref(0);
    const countStore = computed(() => store.state.count);

    const increment = () => {
      count.value++;
      store.commit(Mutation.INCREMENT, 1);
    };

    return { appVersion, count, countStore, increment };
  }
});
</script>

<style lang="scss" scoped>
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
