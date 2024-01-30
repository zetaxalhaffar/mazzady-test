<template>
  <div class="navbar bg-white">
    <div class=" container mx-auto w-full">
      <div class="flex py-4 items-center justify-between">
        <!-- logo & links part -->
        <div id="logo-links grow">
          <div class="flex items-center ">
            <div>
              <Menu class="mx-2 cursor-pointer block sm:hidden" @click="showMenu = true" />
              <Transition>
                <div v-if="showMenu" ref="target"
                  class="absolute z-10 bg-white start-3 container  dropdown  rounded-lg ring-1 ring-gray-700/10 shadow-2xl mt-2 max-w-40">
                  <ul class="divide-y overflow-hidden overflow-y-auto max-h-64 p-2">
                    <li :class="$route.fullPath == item.to ? 'text-primary font-bold' : 'text-gray-500'"
                      class="p-1 hover:bg-gray-300/50 hover:first:rounded-t-lg transition-all cursor-pointer"
                      v-for="item in links">
                      <NuxtLink :to="item.to" @click="showMenu = false">
                        {{ item.title }}
                      </NuxtLink>
                    </li>
                    <li class="font-bold p-1 hover:bg-gray-300/50 hover:rounded-b-lg cursor-pointer text-gray-500">
                      EN
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
            <NuxtLink to="/">
              <img src="../assets/logo.svg" class="cover ml-0 mr-2 sm:mx-2" />
            </NuxtLink>
            <div class="mx-1 hidden md:block">
              <div class="flex">
                <template v-for="link in links">


                  <div v-if="link.pc"
                    class="relative grow w-12 text-center hover:text-primary transition-all transition-600 cursor-pointer mx-2 last:mr-0"
                    :class="$route.fullPath == link.to ? 'text-primary font-bold' : 'text-gray-500'">
                    <NuxtLink :to="link.to">
                      {{ link.title }}
                    </NuxtLink>
                    <span v-if="$route.fullPath == link.to"
                      class="absolute bottom-[-26px] w-12 h-1.5 rounded-t-2xl block bg-primary"></span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="actions flex">
          <div class="flex items-center">
            <div class="flex items-center">
              <img src="../assets/icons/bell.svg" class="mx-3 cursor-pointer" /> <span class="text-gray-500">|</span>
              <img src="../assets/icons/magnify.svg" class="mx-3 cursor-pointer" /> <span class="text-gray-500">|</span>
              <img src="../assets/images/avatar.svg" class="mx-3 cursor-pointer rounded-full max-w-10" />
            </div>
            <NuxtLink to="/AddProduct">
              <MazzadyButton text="Add New Product" :icon="add" class="mx-3 hidden md:flex" />
            </NuxtLink>
            <div class="flex hidden md:flex">
              <div class="mx-3 cursor-pointer">
                <Web />
              </div>
              <span class="text-gray-500">|</span>
              <div class="font-bold mx-3 cursor-pointer">
                EN
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import add from "@/assets/icons/addReview.vue"
import Web from "@/assets/icons/web.vue"
import Menu from "@/assets/icons/menu.vue"
import { onClickOutside } from '@vueuse/core'

const target = ref(null)
onClickOutside(target, event => showMenu.value = false)

const showMenu = ref(false)

const links = ref([
  {
    title: "Home",
    to: '/',
    pc: true
  },
  {
    title: "Blog",
    pc: true
  },
  {
    title: "Gift",
    pc: true
  },
  {
    title: "Add New Product",
    to: "/AddProduct",
    pc: false
  }
])
</script>