
<template>
  <div class="products card bg-white">
    <div class="relative tabs flex justify-between items-center relative">
      <div class="flex grow sm:grow-0">
        <div v-for="tab in tabs" class="grow first:ml-0 last:mr-0 mx-2">
          <div class="text-sm text-center sm:w-20 p-1 cursor-pointer rounded-2xl  ring-1"
            :class="tab.active ? 'bg-light-bg text-secondary font-bold ring-secondary' : 'text-[#828282] ring-[#828282] hover:bg-[#828282]/10'">
            {{ tab.title }}
          </div>
        </div>
        <div></div>
      </div>
      <div class="absolute md:relative top-10 right-0 sm:top-0 sm:right-0 ">
        <MazzadyButton :icon="add" text="Add Review" />
      </div>
    </div>

    <div class="products-list mt-4">
      <div>
        <div class="font-bold text-3xl">
          Products <span class="text-xs text-gray-400 font-normal">(12)</span>
        </div>
        <div class="list my-6">
          <div v-for="(product, index) in products" class="my-8">
            <div class="flex justify-between">
              <div class="pro-img relative">
                <img :src="product.img" class="max-w-[100px] sm:max-w-full" />
                <Badge :slug="product.slug">
                  {{ product.slug_title.length > 15 ? product.slug_title.slice(0, 15) + '...' : product.slug_title }}
                </Badge>
                <div class="absolute top-0 left-2 w-6 h-6 cursor-pointer sm:hidden"
                  @click="product.selected = !product.selected">
                  <heart class="max-w-6" :color="product.selected ? '#D20653' : '#292D32'"
                    :fill="product.selected ? '#D20653' : 'none'" />
                </div>
              </div>
              <div class="details text-lg grow ms-4">
                <div class="flex flex-col justify-between h-full">
                  <div class="text-xs sm:text-lg">
                    {{ product.description }}
                  </div>
                  <div class="text-xs sm:text-lg text-[#828282]">
                    Starting Price <span class="text-xl text-black font-bold">{{ product.price }} EGP</span>
                  </div>
                  <div class="text-xs sm:text-lg text-[#828282]">
                    <div class="flex flex-wrap sm:flex-nowrap items-center">
                      <div class="mr-2 grow sm:grow-0">
                        Lot Starts In
                      </div>
                      <div class="flex grow sm:grow-0">
                        <div v-for="value, key in product.date"
                          class="bg-light-bg py-1 sm:px-3 text-[10px] sm:text-sm rounded-2xl text-secondary grow text-center py-0.5 mx-2 first:ml-0 last:mr-0">
                          <span class="text-secondary text-xs sm:text-xl font-bold">{{ value }}</span> {{ key }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cursor-pointer hidden sm:block" @click="product.selected = !product.selected">
                <heart :color="product.selected ? '#D20653' : '#292D32'" :fill="product.selected ? '#D20653' : 'none'" />
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
import heart from "@/assets/icons/heart.vue"
import product1 from "@/assets/products/1.png"
import product2 from "@/assets/products/2.png"
import product3 from "@/assets/products/3.png"
import product4 from "@/assets/products/4.png"
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()


const tabs = ref([
  {
    title: "Products",
    active: true
  },
  {
    title: "Articles",
    active: false
  },
  {
    title: "Reviews",
    active: false
  },
])


const products = ref([
  {
    img: product1,
    slug: "live_auction",
    slug_title: "Live Auction",
    description: "Six-piece clothing set (blouse - pants - hat and ...)",
    price: 1000,
    date: {
      Days: 2,
      Hours: 10,
      Minutes: 50
    }
  },
  {
    img: product2,
    slug: "live_auction",
    slug_title: "Live Auction",
    description: "Six-piece clothing set (blouse - pants - hat and ...)",
    price: 1000,
    date: {
      Days: 2,
      Hours: 10,
      Minutes: 50
    }
  },
  {
    img: product3,
    slug: "hot_sale",
    slug_title: "Hot Sale",
    description: "Jeep Car, new, used for only one time",
    price: 1000,
    date: {
      Days: 2,
      Hours: 10,
      Minutes: 50
    },
    selected: true
  },
  {
    img: product4,
    slug: "live_auction",
    slug_title: "Live Auction",
    description: "Six-piece clothing set (blouse - pants - hat and ...)",
    price: 1000,
    date: {
      Days: 2,
      Hours: 10,
      Minutes: 50
    }
  },
])

</script>