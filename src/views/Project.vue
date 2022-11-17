<template>
  <div class="container" id="projects-container">
    <div class="row" id="project-title-row">
      <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12">
        <h1 class="project-title">{{ specificProject.title }} Project</h1>
      </div>
    </div>
    <div class="row" id="project-carousel-row">
      <div class="col-md-12 col-lg-12 col-sm-12 col-sm-12">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              :data-bs-slide-to="index"
              :class="index === 0 ? 'active' : ''"
              aria-current="true"
              :aria-label="`Slide ${index}`"
              :click="selectActiveSlide(index)"
              v-for="(screenshot, index) in screenShots"
              :key="screenshot"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              :class="
                activeSlide === index ? 'carousel-item active' : 'carousel-item'
              "
              v-for="(screenshot, index) in screenShots"
              :key="screenshot"
            >
              <img
                :src="`/img/${specificProject?.folder}/${screenshot}`"
                class="carousel-image"
                :alt="specificProject.title"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
        class="col-md-12 col-lg-12 col-sm-12 col-sm-12"
        id="project-description"
      >
        <p>{{ specificProject.description }}</p>
      </div>
      <div class="col-md-12 col-lg-12 col-sm-12 col-sm-12" id="project-tech">
        <h3>Tech used</h3>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            class="btn btn-outline-warning"
            v-for="(tech, index) in techs"
            :key="index"
          >
            {{ tech }}
          </button>
        </div>
      </div>
      <div
        class="col-md-12 col-lg-12 col-sm-12 col-sm-12"
        id="project-link-col"
      >
        <h3>
          <a :href="specificProject.repositoryLink" class="project-link"
            >View Project on Github</a
          >
        </h3>
      </div>
      <div
        class="col-md-12 col-lg-12 col-sm-12 col-sm-12"
        id="project-back-col"
      >
        <router-link class="btn btn-primary back-btn" :to="`/projects`"
          >Back to Projects</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { projects } from "../data/projects";
export default {
  data() {
    return {
      projectId: this.$route.params.projectId,
      activeSlide: 0,
    };
  },
  methods: {
    selectActiveSlide(index) {
      this.activeSlide = index;
    },
  },
  computed: {
    specificProject() {
      const project = projects.filter((project) => {
        // console.log("project", project, this.projectId);
        return project.id === parseInt(this.projectId);
      });

      return project[0] || [];
    },
    screenShots() {
      const ss = this.specificProject?.screenshots || [];
      console.log("ss", ss);
      return ss;
    },
    techs() {
      const t = this.specificProject?.technology || [];
      console.log("t", t);
      return t;
    },
  },
};
</script>
<style scoped>
#project-title-row {
  text-align: center;
  margin-bottom: 15px;
}
#project-carousel-row {
  margin-top: 30px;
}
.carousel-image {
  width: 80%;
}
.carousel-item {
  text-align: center;
}
#project-description {
  padding-top: 30px;
  text-align: center;
}
#project-tech,
#project-link-col,
#project-back-col {
  text-align: center;
  padding-top: 20px;
}
.project-link {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

#project-back-col {
  margin-bottom: 40px;
}
.back-btn {
  background: transparent;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.back-btn:hover {
  background: #03c8fc;
}
</style>
