<template>
  <h1>{{ msg }}</h1>

  <button
    class="flex items-center justify-center px-6 py-1 my-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-2 md:text-lg md:px-8"
    @click="increment"
    >count is: {{ count }}</button
  >
  <p>
    Edit
    <code>components/HelloWorldDecorator.vue</code> to test hot module replacement.
  </p>
  <div>Vuex Store count: {{ countStore }}</div>
  <div>App Version: v{{ appVersion }}</div>
</template>

<script lang="ts">
/* vue-decorator with vue-class-component */
// https://github.com/calebeaires/vue-decorator
import { computed } from "vue";
import { Vue, Options, Prop } from "vue-decorator";
import { useStore, Mutation } from "@/store/index";
const store = useStore();

@Options({})
export default class HelloWorldDecorator extends Vue {
  @Prop({ default: "" }) readonly msg!: string;
  count = 0;
  countStore = computed(() => store.state.count);

  get appVersion(): string {
    return store.state.version;
  }

  increment(): void {
    this.count++;
    store.commit(Mutation.INCREMENT, 1);
  }
}
</script>

<style lang="scss" scoped>
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
