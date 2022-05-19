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
      <h4>I am a {{' '}}<span id="word-list"></span></h4>
      </div>
      <MenuButtons />
      <div class="component-view">
      <router-view></router-view>
      </div>
    </div>
    <div class="right-gutter">
      <div class="tech-links" v-if="this.$route.params.project_id == 1">
      Built With
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3"></i>
        <i class="fa-brands fa-js-square"></i>
      </div>
      <div class="tech-links" v-if="this.$route.params.project_id == 2">
      Built With
        <i class="fa-brands fa-react fa-spin"></i>
        <i class="fa-brands fa-css3"></i>
        <img src="https://res.cloudinary.com/silverbeard/image/upload/v1652931914/Portfolio/Logomark_RGB_Forest-Green_um86un.png" alt="MongoDb" id="mongodb"/>
      </div>
      <div class="tech-links" v-if="this.$route.params.project_id == 3">
      Built With
        <i class="fa-brands fa-react fa-spin"></i>
        <i class="fa-brands fa-css3"></i>
        <img src="https://res.cloudinary.com/silverbeard/image/upload/v1652931906/Portfolio/116px-PostgreSQL_Logo.1_Color_Black_n5r32u.png" alt="PostgreSQL" id="postgres"/>
      </div>
      <div class="tech-links" v-if="this.$route.params.project_id == 4">
      Built With
        <i class="fa-brands fa-react fa-spin"></i>
        <i class="fa-brands fa-css3"></i>
        <img src="https://res.cloudinary.com/silverbeard/image/upload/v1652931906/Portfolio/116px-PostgreSQL_Logo.1_Color_Black_n5r32u.png" alt="PostgreSQL" id="postgres"/>
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
  },
  mounted: function(){
    document.title= "Frank Marras Portfolio"

  }
}

</script>

<!-- <i class="fa-brands fa-vuejs"></i> -->