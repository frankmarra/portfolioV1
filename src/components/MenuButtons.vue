<template>
  <div class="menu-buttons">
      <div class="menu-button-wrapper" @click="navigateItem('portfolio')">
          <button class="portfolio-button menu-button">Portfolio</button>
      </div>
      <div class="menu-button-wrapper" @click="navigateItem('about')">
          <button class="about-button menu-button">About Me</button>
      </div>
      <div class="menu-button-wrapper" @click="navigateItem('resume')">
          <button class="resume-button menu-button" name="Resume" >Resume</button>
      </div>
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

