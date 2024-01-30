<template>
  <!-- Overlay -->
  <div v-if="showModal" class="fixed z-10 inset-0 bg-black opacity-80 backdrop-blur-xl"></div>

  <!-- Dialog Container -->
  <div v-if="showModal" class="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md w-full max-w-xl">
    <div class="text-xl flex justify-between my-2">
      <div>Selected Data</div>
      <div>
        <Close class="w-6 h-6 cursor-pointer" @click="$emit('closeModal')" />
      </div>
    </div>
    <div class="overflow-x-scroll shadow w-full">
      <table class="min-w-full " v-if="modalData">
        <thead>
          <tr>
            <!-- in the normal way i will replace the slug with the real name but cuz this is test project i left it like this -->
            <th v-for="item in modalData" class="py-2 px-4 bg-gray-200">{{ item.type }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 text-center" v-for="item in modalData">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- <div class="modal flex justify-center absolute top-0 w-full h-screen bg-black/80 z-10 " >

  </div> -->
</template>


<script setup>
import Close from "@/assets/icons/close.vue"

defineProps({
  modalData: {
    type: Array
  },
  showModal: {
    type: Boolean
  }
})
</script>