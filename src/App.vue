<template>
  <div id="app" class="wrap">
    <Gnb/>
    <Footer/>
  </div>
</template>
<script>
import Gnb from '@/components/Gnb.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'main',
  components: {
    Gnb,
    Footer
  }
}
</script>

<style lang="scss">
</style>
