<template>
  <!-- main cats -->
  <div class="my-6 relative">
    <!-- main input -->
    <div class="relative">
      <slot name="title" />
      <input :required="required" v-model="search" type="text" :placeholder="placeholder"
        class="w-full focus:outline-none focus:ring-1 focus:border-blue-500 rounded-lg" @focus="showDropdown = true"
        @blur="showDropdown = false" />
      <span @click="showDropdown = !showDropdown" class="absolute top-[55%] right-0 flex items-center pr-3">
        <ChevronUp v-if="showDropdown" class="h-5 w-5 text-gray-500" />
        <ChevronDown v-else class="h-5 w-5 text-gray-500" />
      </span>
    </div>
    <!-- custom input -->
    <div>
      <input @input="setCustomValue" v-if="search == 'غير ذلك'" type="text" placeholder="غير ذلك"
        class="mt-4 w-full focus:outline-none focus:ring-1 focus:border-blue-500 rounded-lg" />
    </div>
    <Transition>
      <div v-if="showDropdown"
        class="absolute z-10 bg-white top-14 w-full dropdown ring rounded-lg ring-gray-400 ring-1 shadow-xl mt-2">
        <ul v-if="filterResults.length > 0" class="divide-y overflow-hidden overflow-y-auto max-h-64">
          <li v-for="(item, index) in filterResults" @click="setMainCat(item, index)"
            class="p-1 hover:bg-gray-300/50 hover:first:rounded-t-lg transition-all cursor-pointer">
            {{ item.name }}
          </li>
        </ul>
        <div v-else class="p-2 text-gray-500">
          Not Found
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import ChevronUp from "@/assets/icons/chevronUp.vue"
import ChevronDown from "@/assets/icons/chevronDown.vue"

const search = ref('')
const showDropdown = ref(false)



const props = defineProps({
  data: {
    type: Array
  },
  child: {
    type: Array
  },
  placeholder: {
    type: String,
    default: () => 'ابدا البحث'
  },
  required: {
    type: Boolean,
    default: () => false
  }
})

const emit = defineEmits(['onSubCatChange', 'setCustomValue'])


const setMainCat = (item, index) => {
  search.value = item.name
  emit('onSubCatChange', item)

}

const setCustomValue = (value) => {
  emit('setCustomValue', value.target.value)
}

const filterResults = computed(() => {
  if (search.value.length == 0) {
    return props.data
  } else {

    const array = props.data.filter(item => {
      return item.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
    })
    if (array.length > 0) {
      return array
    } else {
      return []
    }
  }
})
</script>