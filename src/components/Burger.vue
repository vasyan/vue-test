<template>
  <i>
    <icon-burger v-if="!opened" />
    <icon-burger-opened v-if="opened" />
  </i>
</template>

<script>
import IconBurger from '@/icons/Burger'
import IconBurgerOpened from '@/icons/BurgerOpened'

export default {
  props: ['opened'],
  components: {
    IconBurger,
    IconBurgerOpened
  }
}
</script>
