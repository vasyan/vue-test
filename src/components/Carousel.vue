<template>
  <article>
    <h2 class="mb-3 text-center  ">Demo</h2>
    <div
      class="carousel-wrapper text-center wrapper lg:w-5/6 m-auto"
      :class="{ mobile: mobileMode }"
      >
      <loader class="mt-16 loader text-center" v-show="!firstImageLoaded"/>
      <transition name="fade">
        <carousel
          v-show="firstImageLoaded"
          class="inline-block carousel"
          :per-page="mobileMode ? 1 : 3"
          :loop="true"
          >
          <slide v-for="slide in slides" :key="slide.id">
            <img :src="slide.url" :alt="slide.alt" @load="handleImageOnLoad($event, slide.id)"/>
          </slide>
        </carousel>
      </transition>
    </div>
  </article>
</template>

<script>
import Loader from '@/components/Loader.vue'
import { Carousel, Slide } from 'vue-carousel'
import screenService from '@/services/screen'

export default {
  data() {
    return {
      loadFirstImagePromiseResolve: null,
      loadFirstImagePromise: null,
      firstImageLoaded: false,
      containerHeight: 0,
      mobileMode: true,
      slides: [
        {
          id: 0,
          url: 'slide_0.jpg',
          alt: 'abstarck painting'
        },
        {
          id: 1,
          url: 'slide_1.jpg',
          alt: 'ledtv'
        },
        {
          id: 2,
          url: 'slide_2.jpg',
          alt: 'temple'
        },
        {
          id: 3,
          url: 'slide_3.jpg',
          alt: 'bread'
        },
        {
          id: 4,
          url: 'slide_4.jpg',
          alt: 'karate'
        },
        {
          id: 5,
          url: 'slide_5.jpg',
          alt: 'dog'
        }
      ]
    }
  },
  components: {
    Loader,
    Carousel,
    Slide
  },
  mounted() {
    this.loadFirstImagePromise = new Promise(resolve => {
      this.loadFirstImagePromiseResolve = resolve
    }).then(() => {
      setTimeout(() => {
        this.firstImageLoaded = true
      }, 300)
    })
    screenService.onResize(this.handleResize.bind(this), true)
  },
  methods: {
    handleImageOnLoad(event, id) {
      if (id === 0) {
        this.loadFirstImagePromiseResolve()
      }
    },
    handleResize(windowWidth, { small, xsmall }) {
      this.mobileMode = small || xsmall
      this.containerHeight = windowWidth * 0.7
      this.wrapperStyles = {
        height: window.innerWidth * 0.5 + 110 + 'px'
      }
    }
  }
}
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  padding-top: calc(18.5% + 10px);
}

.carousel,
.loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.loader {
  margin: auto;
}

@media (max-width: 992px) {
  .carousel-wrapper {
    padding-top: calc(18.5% + 50px);
  }
}

@media (max-width: 767px) {
  .carousel-wrapper {
    padding-top: calc(50% + 60px);
  }
}

img {
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
