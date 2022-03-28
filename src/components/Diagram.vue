<template>

<div class="relative pt-16 pb-18 px-4 sm:px-6 lg:pt-15 lg:pb-15 lg:px-8 bg-white">
  <div class="absolute inset-0">
    <div class="h-1/3 sm:h-2/3 bg-white"></div>
  </div>
  <div class="relative max-w-7xl mx-auto ">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Integrating<img class="diagram-logo" src="src/assets/images/monero-logo-diagram.svg" alt="">has never been easier</h2>
    </div>

  <div class="diagram-img invisible sm:visible">{{Diagram}}</div>
 
  <img class="snap-center visible sm:hidden " src="src/assets/images/diagram-m.svg" alt="">
    
  </div>
</div>

</template>

<script>
import Diagram from 'public/diagram'

function Avatar() {
  return <Diagram src="/diagram.svg" alt="me" width="64" height="64" />
}

export default Avatar

</script>