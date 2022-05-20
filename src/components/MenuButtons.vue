<template>
  <div class="menu-buttons">
    <button class="about-button menu-button" @click="navigateItem('')">About Me</button>
    <button class="portfolio-button menu-button" @click="navigateItem('portfolio')">Projects</button>
    <button class="resume-button menu-button" @click="navigateItem('resume')">Resume</button>
  </div>
</template>

<script>
export default {
  name: 'MenuButtons',
  methods: {
    navigateItem(dest){
      this.$router.push(`/${dest}`)
    }
  }
}
</script>

