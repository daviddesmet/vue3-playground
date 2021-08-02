import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("increments count", async () => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: "skip testing" }
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("count: 1");
  });
});
