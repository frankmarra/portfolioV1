<template>
  <div class="page-wrapper">
    <div class="left-gutter"></div>
    <div class="content">
      <div class="greeting">
      <h1>Hello, I'm Frank.</h1>
      </div>
      <!-- <AboutMe /> -->
      <MenuButtons />
    </div>
    <div class="right-gutter"></div>
  </div>
</template>

<script>
// import AboutMe from '../components/AboutMe.vue'
import MenuButtons from '../components/MenuButtons.vue'
export default {
  name: 'HomePage',
  components: {
    // AboutMe,
    MenuButtons
  }
}

</script>

