
<template>
  <div class="portfolio-wrapper">
  <ul class="portfolio-carousel" >
    <li class="project-wrapper" :key="project.id" v-for="project in projects"
  @click="navigateItem(project.id)">

        <img :src="project.images.sm"/>

      <div class="project-name">
        <h4>{{project.name}}</h4>
      </div>
    </li>
  </ul> 
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