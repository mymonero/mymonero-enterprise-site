<template>
<div class="bg-black-full">
<div class="relative pt-16 pb-18 px-4 sm:px-6 lg:pt-15 lg:pb-15 lg:px-8 lg:pb-max banner bg-black bg-black-full">
  <div class="relative max-w-7xl mx-auto ">
    <div class="mt-12 max-w-lg mx-auto grid lg:grid-cols-1 lg:max-w-none">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <div class="text-center">

              <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center text-green">Success!</h2>
              <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 text-green"> Thank you for your submission.<br>You're Awesome.</p><br><br>

              <router-link to="/#getintouch"><button class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 button-main">Back to form</button></router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



</template>

<script>
  export default {
    name: "success"
  }
</script> 