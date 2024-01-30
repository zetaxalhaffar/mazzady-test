<template>
  <div class="card profile-card bg-white">
    <div>
      <div class="card-image">
        <img src='@/assets/images/avatar.svg' />
      </div>
      <div class="card-body">
        <div class="card-title mt-4 text-title">
          Hala Ahmed
        </div>
        <div class="card-description text-description">
          I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="item in cardDetails">
            <div class="flex items-center py-2 p-1 rounded-2xl bg-light-bg">
              <div class="mx-0.5 sm:mx-1 max-w-5 sm:max-w-full">
                <component :is="item.icon" class="w-full" />
              </div>
              <div>
                <div class="text-[#363333] font-bold text-sm">{{ item.number }} <span v-if="item.rate_count" class="text-xs text-gray-400 font-normal">
                ({{ item.rate_count }})</span></div>
                <div class="text-secondary text-xs">{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <div class="cursor-pointer mazzady-grad p-3 rounded-2xl text-center text-white font-bold">
            Follow
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import followers from "../assets/icons/followers.vue"
import following from "../assets/icons/following.vue"
import rate from "../assets/icons/rate.vue"
const cardDetails = ref([
  {
    text: "Following",
    number: 5,
    icon: shallowRef(following)
  },
  {
    text: "Followers",
    number: 20,
    icon: shallowRef(followers)
  },
  {
    text: "rate",
    number: 4.2,
    icon: shallowRef(rate),
    rate_count: 15
  },
])

</script>