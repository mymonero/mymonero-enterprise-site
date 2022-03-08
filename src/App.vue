<template>

  <div class="fixed inset-x-0 z-40">
    <Nav />
  </div>

      <div class="h-screen pt-5 ">
        <router-view />
      </div>
  
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  components: {
    Nav,
  },
};
</script>
