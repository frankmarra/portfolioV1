import { createWebHistory, createRouter } from 'vue-router'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Project from './components/Project'

const routes = [
  { path: '/resume', component: Resume, name: 'Resume' },
  { path: '/about', component: AboutMe, name: 'AboutMe' },
  { path: '/portfolio', component: Portfolio, name: 'Portfolio' },
  { path: '/portfolio/:project_id', component: Project, name: 'Project' },
  { path: '/', redirect: '/about' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
