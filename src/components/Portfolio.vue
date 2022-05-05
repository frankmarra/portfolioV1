
<template>
  <div class="portfolio-wrapper">
  <div class="portfolio-carousel" >
    <div class="project-wrapper" :key="project.id" v-for="project in projects"
  @click="navigateItem(project.id)">
      <div class="project-image-wrapper">
        <img :src="project.images.sm"/>
      </div>
      <div class="project-name">
        <h4>{{project.name}}</h4>
      </div>
    </div>
  </div> 
  </div>
</template>

<script>
import projects from '../data.json'
export default {
  name: 'MyPortfolio',
  data: () => ({
    projects
  }),
  methods: {
    navigateItem(id){
      this.$router.push(`/portfolio/${id}`)
    }
  }
}
</script>