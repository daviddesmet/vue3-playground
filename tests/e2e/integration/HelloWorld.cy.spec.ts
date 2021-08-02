import { mount } from "@cypress/vue";
import HelloWorld from "@/components/HelloWorld.vue";

const msg = "Hello Cypress!";

describe("<HelloWorld />", () => {
  it("should mount the component with message", () => {
    mount(HelloWorld, {
      props: {
        msg
      }
    });

    cy.get("h1").contains(msg);
  });

  it("should increment counter on button click", () => {
    mount(HelloWorld, {
      props: {
        msg
      }
    })
      .get("button")
      .click()
      .vue()
      .then((wrapper) => {
        expect(wrapper.componentVM.count).to.equal(1);
      });

    cy.contains("button", "count is: 1");
  });
});
