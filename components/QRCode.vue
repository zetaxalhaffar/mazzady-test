
<template>
  <div class="card profile-card bg-white">
    <div>
      <div class="card-title">
        <div class="flex justify-between items-center">
          <div>QR Code</div>
          <div class="flex items-center">
            <span class="mx-3 last:mr-0 first:ml-0 cursor-pointer" v-for="item in qrCodeOptions">
              <component :is="item.icon" />
            </span>
            <span @click="isOpen = !isOpen" :class="isOpen ? 'bg-light-bg' : ''"
              class="block cursor-pointer p-1 sm:hidden hover:bg-gray-600/10 transition-all rounded-full">
              <ChevronUp v-if="isOpen" class="h-5 w-5" />
              <ChevronDown v-else class="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
      <TransitionGroup name="slidedown">
        <div v-if="width >= 400">
          <div class="card-text my-4">
            <div class="alert flex bg-light-bg p-4 text-sm items-center rounded-2xl">
              <div class="mr-2">
                <download color="#FF951D" />
              </div>
              <div>
                Download the QR code or share it with your friends.
              </div>
            </div>
          </div>
          <div class="qr-card">
            <div class="mazzady-grad p-5 rounded-2xl">
              <div class="bg-white rounded-2xl p-3 text-center">
                <div class="logo flex justify-center">
                  <img src="@/assets/logo.svg" />
                </div>
                <div class="title my-1 font-bold text-[#363333] text-xl">
                  Hala Ahmed
                </div>
                <div class="flex justify-center">
                  <img src="@/assets/images/qrcode.svg" />
                </div>
                <div class="font-light">
                  Follow Us on Mazaady
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="isOpen">
          <div class="card-text my-4">
            <div class="alert flex bg-light-bg p-4 text-sm items-center rounded-2xl">
              <div class="mr-2">
                <download color="#FF951D" />
              </div>
              <div>
                Download the QR code or share it with your friends.
              </div>
            </div>
          </div>
          <div class="qr-card">
            <div class="mazzady-grad p-5 rounded-2xl">
              <div class="bg-white rounded-2xl p-3 text-center">
                <div class="logo flex justify-center">
                  <img src="@/assets/logo.svg" />
                </div>
                <div class="title my-1 font-bold text-[#363333] text-xl">
                  Hala Ahmed
                </div>
                <div class="flex justify-center">
                  <img src="@/assets/images/qrcode.svg" />
                </div>
                <div class="font-light">
                  Follow Us on Mazaady
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import eye from "@/assets/icons/eye.vue"
import share from "@/assets/icons/share.vue"
import download from "@/assets/icons/download.vue"
import ChevronUp from "@/assets/icons/chevronUp.vue"
import ChevronDown from "@/assets/icons/chevronDown.vue"
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

const isOpen = ref(false)



const qrCodeOptions = ref([
  {
    title: "preview",
    icon: eye
  },
  {
    title: "share",
    icon: share
  },
  {
    title: "download",
    icon: download
  },
])
</script>

<style>
.slidedown-enter-active,
.slidedown-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 1000px;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
