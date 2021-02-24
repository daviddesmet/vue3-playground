declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module "*.vue" {
//   import { Component } from "vue";
//   const _default: Component;
//   export default _default;
// }

declare const _APP_VERSION: string;
