<template>
  <div v-if="project" class="project-detail-wrapper">
    
      <img :src="project.images.lg" :alt="project.name" class="project-detail-image"/>
    
    <div class='project-detail-info'>
    <div class="project-detail-name">
      <a :href="project.link">{{ project.name }}</a>
      <a :href="project.gitLink"><i class="fa-brands fa-github project"></i></a>
    </div>
    <div class="project-detail-description">
      <p>{{project.description}}</p>
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