<template>
  <Transition>
    <Modal :showModal="showModal" :modalData="selectedTable" @closeModal="showModal = false" />
  </Transition>
  <div class="category container mx-auto px-4 sm:px-6 md:px-8">
    <div class="card bg-white my-4 overflow-visible min-h-96">
      <form ref="formRef" @submit.prevent="submitForm">
        <!-- Main Cat -->
        <InputWithDropdown :required="true" :data="data.categories" @onSubCatChange="onSubCatChange">
          <template #title>
            الفئات الرئيسية
          </template>
        </InputWithDropdown>
        <!-- Sub Cat -->
        <InputWithDropdown :required="true" :data="subCatData" @onSubCatChange="getCatProps">
          <template #title>
            الفئات الفرعية
          </template>
        </InputWithDropdown>
        <template v-for="item in results">
          <InputWithDropdown :data="item.options" :placeholder="item.name" @onSubCatChange="getOptionsChild($event, item)"
            @setCustomValue="setCustomValue($event, item)">
            <template #title>
              {{ item.name }}
            </template>
          </InputWithDropdown>
          <div v-if="resultOptions">
            <template v-for="parentOption in item.options">
              <template v-for="option in resultOptions">
                <InputWithDropdown v-if="parentOption.id == option.parent" :data="option.options"
                  :placeholder="option.name" @onSubCatChange="setOptionValue($event, item)">
                  <template #title>
                    {{ option.name }}
                  </template>
                </InputWithDropdown>
              </template>
            </template>
          </div>
        </template>
        <button class="flex items-center mazzady-grad p-2 px-4 rounded-xl text-white cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const formRef = ref(null)
const showModal = ref(false)
const selectedTable = ref([])
const { data } = await useFetch(() => '/api/GetAllCats')
const subCatData = ref([])
const results = ref([])
const resultOptions = ref([])
const getCatProps = async (item) => {

  const { data } = await useFetch(() => `/api/GetCatProps?id=${item.id}`)

  data.value.data.forEach((item) => {
    item.options.push({
      "name": "غير ذلك",
      "slug": "other",
      "child": false
    })
  })
  results.value = data.value.data
  if (selectedTable.value.length > 0) {
    const result = selectedTable.value.filter((item) => {
      return item.type != 'sub_cat'
    })
    selectedTable.value = result
    selectedTable.value.push({
      type: "sub_cat",
      value: item.name
    })
  } else {
    selectedTable.value.push({
      type: "sub_cat",
      value: item.name
    })
  }
}
const getOptionChild = async (item) => {
  const { data } = await useFetch(() => `/api/GetOptionChild?id=${item.id}`)
  resultOptions.value = data.value.data
}

const onSubCatChange = (item) => {
  if (item.children && item.children.length > 0) {
    if (selectedTable.value.length > 0) {
      const result = selectedTable.value.filter((item) => {
        return item.type != 'main_cat'
      })
      selectedTable.value = result
      selectedTable.value.push({
        type: "main_cat",
        value: item.name
      })
    } else {
      selectedTable.value.push({
        type: "main_cat",
        value: item.name
      })
    }
  }
  subCatData.value = item.children
}


const getOptionsChild = (item, parent) => {
  if (item.child) {
    getOptionChild(item)
    if (item.slug != 'other') {
      if (selectedTable.value.length > 0) {
        const result = selectedTable.value.filter((item) => {
          return item.type != parent.slug
        })
        selectedTable.value = result
        selectedTable.value.push({
          type: parent.slug,
          value: item.name
        })
      } else {
        selectedTable.value.push({
          type: parent.slug,
          value: item.name
        })
      }
    }
  } else {
    if (item.slug != 'other') {
      if (selectedTable.value.length > 0) {
        const result = selectedTable.value.filter((item) => {
          return item.type != parent.slug
        })
        selectedTable.value = result
        selectedTable.value.push({
          type: parent.slug,
          value: item.name
        })
      } else {
        selectedTable.value.push({
          type: parent.slug,
          value: item.name
        })
      }
    }
  }
}

const setOptionValue = (item, parent) => {
  if (selectedTable.value.length > 0) {
    const result = selectedTable.value.filter((item) => {
      return item.type != parent.slug
    })
    selectedTable.value = result
    selectedTable.value.push({
      type: parent.slug,
      value: item.name
    })
  } else {
    selectedTable.value.push({
      type: parent.slug,
      value: item.name
    })
  }
}

const setCustomValue = (item, parent) => {
  if (selectedTable.value.length > 0) {
    const result = selectedTable.value.filter((item) => {
      return item.type != parent.slug
    })
    selectedTable.value = result
    selectedTable.value.push({
      type: parent.slug,
      value: item
    })
  } else {
    selectedTable.value.push({
      type: parent.slug,
      value: item
    })
  }
}


const submitForm = () => {
  showModal.value = true
}

</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>