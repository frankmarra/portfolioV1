<template>
  <div class="page-wrapper">
    <div class="left-gutter">
      <div class="social-links">
      <a href="https://github.com/frankmarra" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="www.linkedin.com/in/frankrmarra" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="mailto:frankrmarra@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
    <div class="content">
      <div class="greeting">
      <h1>Hello, I'm Frank.</h1>
      </div>
      <MenuButtons />
      <div class="component-view">
      <router-view></router-view>
      </div>
    </div>
    <div class="right-gutter">
      <div class="tech-links">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3"></i>
        <i class="fa-brands fa-js-square"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-vuejs"></i>
      </div>
    </div>
  </div>
</template>

<script>

import MenuButtons from '../components/MenuButtons.vue'

export default {
  name: 'HomePage',
  components: {

    MenuButtons

  }
}

</script>

