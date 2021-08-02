import { mount, shallowMount } from "@vue/test-utils";
import App from "./App.vue";
import router from "./router";
// import Hello from "./Hello.vue";

test("uses mounts", () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  });
  expect(wrapper.html()).toContain("Home");
  expect(wrapper.html()).not.toContain("Hello world");
});

test("uses shallowMount", () => {
  const wrapper = shallowMount(App, {
    global: {
      plugins: [router]
    }
  });
  expect(wrapper.html()).toContain("Home");
  expect(wrapper.html()).not.toContain("Hello world");

  /*
  // TODO: Improve types for `findComponent`
  await wrapper.findComponent(Hello).vm.$emit("greet");
  expect(wrapper.html()).toContain("Count: 1");
  */
});
