import { shallowMount } from "@vue/test-utils";
import HelloWorldDecorator from "./HelloWorldDecorator.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorldDecorator, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("increments count", async () => {
    const wrapper = shallowMount(HelloWorldDecorator, {
      props: { msg: "skip testing" }
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("count: 1");
  });
});
