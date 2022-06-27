<template>
  <div class="page-wrapper">
    <aside class="gutter">
      <ul class="social-links">
      <li><a href="https://github.com/frankmarra" target="_blank"><i class="fa-brands fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/frankrmarra/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
      <li><a href="mailto:frankrmarra@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a></li>
      </ul>
    </aside>
    <div class="content">
      <header class="greeting">
        <h1 class="heading">Hello, I'm Frank.</h1>
        <p class="subheading" aria-label="I am a software engineer, musician, and creator">I am a </p>
      </header>
      <MenuButtons />
      <main class="component-view">
      <router-view></router-view>
      </main>
    </div>
    <aside class="gutter">
      <ul class="tech-used" v-if="this.$route.params.project_id == 1">
      Built With
        <li><i class="fa-brands fa-html5"></i></li>
        <li><i class="fa-brands fa-css3"></i></li>
        <li><i class="fa-brands fa-js-square"></i></li>
      </ul>
      <ul class="tech-used" v-if="this.$route.params.project_id == 2">
      Built With
        <li><i class="fa-brands fa-react fa-spin"></i></li>
        <li><i class="fa-brands fa-css3"></i></li>
        <li><img src="https://res.cloudinary.com/silverbeard/image/upload/v1652931914/Portfolio/Logomark_RGB_Forest-Green_um86un.png" alt="MongoDb" id="mongodb"/></li>
      </ul>
      <ul class="tech-used" v-if="this.$route.params.project_id == 3">
      Built With
        <li><i class="fa-brands fa-react fa-spin"></i></li>
        <li><i class="fa-brands fa-css3"></i></li>
        <li><img src="https://res.cloudinary.com/silverbeard/image/upload/v1652931906/Portfolio/116px-PostgreSQL_Logo.1_Color_Black_n5r32u.png" alt="PostgreSQL" id="postgres" /></li>
      </ul>
      <ul class="tech-used" v-if="this.$route.params.project_id == 4">
      Built With
        <li><i class="fa-brands fa-react fa-spin"></i></li>
        <li><i class="fa-brands fa-css3"></i></li>
        <li><img src="https://res.cloudinary.com/silverbeard/image/upload/v1652931906/Portfolio/116px-PostgreSQL_Logo.1_Color_Black_n5r32u.png" alt="PostgreSQL" id="postgres"/></li>
      </ul>
    </aside>
  </div>
</template>

<script>

import MenuButtons from '../components/MenuButtons.vue'

export default {
  name: 'HomePage',
  components: {
    MenuButtons
  },
  mounted: function(){
    document.title= "Frank Marras Portfolio"

  }
}

</script>

<!-- <i class="fa-brands fa-vuejs"></i> -->