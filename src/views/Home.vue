<template>
  <div class="home">
    <carousel/>
    <lorem/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Lorem from '@/components/Lorem.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    Lorem
  }
}
</script>
