<template>
  <div id="app">
    <partial-menu/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import PartialMenu from './Pages/partials/PartialMenu.vue'
import '@/css/reset.css'
import '@/css/style.css'
export default {
  name: 'App',
  components: {PartialMenu}
}
</script>