<template>
  <div v-if="project" class="project-detail-wrapper">
    
    <div class="project-detail-name">
      <ul>
      <li><a :href="project.link" target="_blank">Visit {{ project.name }}</a></li>
      <li><a :href="project.gitLink" target="_blank"><i class="fa-brands fa-github project"></i></a></li>
      </ul>
    </div>
    
      <img :src="project.images.lg" :alt="project.name" class="project-detail-image" @click="showModal = !showModal"/>
      <vue-final-modal v-model="showModal" classes="modal-container">
      <img :src="project.images.lg" :alt="project.name" class="modal-content" />
      </vue-final-modal>

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
import { VueFinalModal } from 'vue-final-modal'
export default {
  name: 'MyProject',
  components: {
    VueFinalModal
  },
  data: () => ({
    project: null,
    showModal: false
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

::v-deep .modal-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

  }

::v-deep .modal-content {
  width: auto;
  height: 70vh;
  border-radius: 10px;
  box-shadow: 0 0 6px 2px rgba(217, 203, 196, 0.4);

}

</style>