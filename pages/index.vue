
<template>
  <div class="container-index my-6">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-4">
      <div class="col-span-2 lg:col-span-1">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <ProfileCard />
        <QRCode  />
        </div>
      </div>
      <div class="col-span-2">
        <Products />
      </div>
    </div>
  </div>
</template>