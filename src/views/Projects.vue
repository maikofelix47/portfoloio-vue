<template>
  <div class="container" id="projects-content">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <h2>Projects i have worked on</h2>
        <hr class="intro-hr" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-6 col-lg-6 col-sm-6 col-xs-6"
        v-for="project in projects"
        :key="project.id"
      >
        <div class="card project-card">
          <img
            :src="`/img/${project.folder}/${project.featuredImageLink}`"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <router-link
              class="btn btn-primary view-btn"
              :to="`projects/${project.id}`"
              >View More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { projects } from "../data/projects";
export default {
  data() {
    return {
      projects: projects,
    };
  },
};
</script>
<style scoped>
#projects-content {
  text-align: center;
}
.project-card {
  background: transparent;
}
.project-card img {
  height: 400px;
  width: auto;
}
.view-btn {
  background: transparent;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.view-btn:hover {
  background: #03c8fc;
}
</style>
