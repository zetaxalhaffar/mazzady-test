<template>
  <div class="text-[8px] sm:text-xs text-white badge absolute bottom-3 sm:bottom-0 right-0 px-4 py-1.5 rounded-tl-2xl rounded-br-2xl" :class="slug == 'live_auction' ? 'bg-[#D20653]' : 'bg-secondary'">
    <slot />
  </div>
</template>


<script setup>
const props = defineProps({
  slug: {
    type: String
  },
})

</script>