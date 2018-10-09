<template>
  <article class="pt-8 pl-8">
    <h2 class="mb-16">Contact me:</h2>
    <div class="lists-container">
      <ul class="list-reset list-icon text-right">
        <li class="item"><icon-email class="icon icon-email mr-3"/></li>
        <li class="item"><icon-linkedin class="icon icon-linkedin mr-3"/></li>
        <li class="item"><icon-github class="icon icon-github mr-3"/></li>
      </ul>
      <ul class="list-reset">
        <li class="item"><a href="mailto:vasilyator@gmail.com">vasilyator@gmail.com</a></li>
        <li class="item"><a href="https://linkedin.com/in/styazhkinv">linkedin.com/in/styazhkinv</a></li>
        <li class="item"><a href="https://github.com/vasyan">github.com/vasyan</a></li>
      </ul>
    </div>
  </article>
</template>

<script>
import IconEmail from '@/icons/Email'
import IconLinkedin from '@/icons/Linkedin'
import IconGithub from '@/icons/Github'

export default {
  components: {
    IconEmail,
    IconLinkedin,
    IconGithub
  }
}
</script>
<style scoped>
.lists-container {
  display: flex;
  align-items: center;
  justify-content: start;
}
.item {
  margin-bottom: 2em;
  height: 18px;
}
</style>
