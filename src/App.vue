<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="./assets/logo.png" alt="Vue" />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link to="/" active-class="bg-gray-900 text-white" class="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
              <router-link to="/about" active-class="bg-gray-900 text-white" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <bell-icon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="./assets/img/avatar.png" alt="profile pic" />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in profile" :key="item" v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <menu-icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <x-icon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" active-class="bg-gray-900 text-white" class="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</router-link>
        <router-link to="/about" active-class="bg-gray-900 text-white" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="./assets/img/avatar.png" alt="profile pic" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">John Doe</div>
            <div class="text-sm font-medium leading-none text-gray-400">john@example.com</div>
          </div>
          <button
            class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <bell-icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a v-for="item in profile" :key="item" href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">{{ item }}</a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <header v-if="$route.meta.title" class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">{{ $route.meta.title }}</h1>
    </div>
  </header>
  <top-banner />

  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import TopBanner from "@/components/TopBanner.vue";

const profile = ["Your Profile", "Settings", "Sign out"];

/* Vue Composition API */
export default defineComponent({
  name: "App",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    TopBanner
  },
  setup() {
    const open = ref(false);

    return {
      profile,
      open
    };
  }
});
</script>
