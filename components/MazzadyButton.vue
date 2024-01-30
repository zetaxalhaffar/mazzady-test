<template>
  <div :class="center ? 'justify-center' : ''" class="flex items-center mazzady-grad p-2 px-4 rounded-xl text-white cursor-pointer">
    <div class="mr-2">
      <component :is="icon" />
    </div>
    <div class="text-sm">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
defineProps(['icon', 'text','center'])
</script>