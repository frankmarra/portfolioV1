<template>
  <div v-if="project" class="project-detail-wrapper">
    
    <div class="project-detail-name">
      <ul>
      <li><a :href="project.link" target="_blank">{{ project.name }}</a></li>
      <li><a :href="project.gitLink" target="_blank"><i class="fa-brands fa-github project"></i></a></li>
      </ul>
    </div>
      <img :src="project.images.lg" :alt="project.name" class="project-detail-image"/>
    
    <div class='project-detail-info'>
    <div class="project-detail-description">
      <p>{{project.description}}</p>
      <div v-html="project.caseStudy"></div>
    </div>
  </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import projects from '../data.json'
export default {
  name: 'MyProject',
  data: () => ({
    project: null
  }),
  mounted: function(){
    this.project = projects.find(project => project.id === parseInt(this.$route.params.project_id)
    )
  }
}
</script>

<style scoped>
  .fa-github {
    margin: 0;
    font-size: inherit;
    color: inherit;
    transition: none;
  }

  .fa-github:hover {
    color: inherit;
    transform: inherit;
  }
</style>