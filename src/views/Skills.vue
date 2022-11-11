<template>
  <div class="container" id="skills-content">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <h2>Skills</h2>
        <hr class="intro-hr" />
      </div>
    </div>
    <div class="row justify-content-md-center" id="filter-row">
      <div
        class="col-md-offset-3 col-lg-offset-3 col-md-4 col-lg-4 col-xs-12 col-sm-4"
      >
        <form @submit.stop>
          <select class="form-control skill-select" v-model="skillType">
            <option value="">Select Skill Type</option>
            <option value="frontend">Front-end</option>
            <option value="backend">Backend</option>
            <option value="framework">Frameworks</option>
            <option value="library">Libraries</option>
            <option value="testing">Testing</option>
            <option value="language">Languages</option>
            <option value="versioncontrol">Version Control</option>
            <option value="cloud">Cloud</option>
          </select>
        </form>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-3 col-lg-3 col-xs-3 animate__animated animate__fadeInLeft"
        v-for="skill in selectedSkills"
        v-bind:key="skill.id"
      >
        <div class="card skill-card">
          <img class="card-img-top" :src="skill.icon" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ skill.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { skills } from "../data/skills";
export default {
  data() {
    return {
      skills: skills,
      skillType: "",
    };
  },
  computed: {
    selectedSkills() {
      return this.skills.filter((skill) => {
        return skill[this.skillType] || this.skillType.length === 0;
      });
    },
  },
};
</script>

<style scoped>
.intro-hr {
  width: 33%;
  text-align: center;
  margin-left: 33%;
  margin-bottom: 10px;
}

#skills-content {
  text-align: center;
}
.skill-card {
  background: transparent;
  width: 150px;
  height: 150px;
  border-style: none;
  text-align: center;
  margin-bottom: 100px;
}
#filter-row {
  text-align: center;
  background: transparent;
  margin-bottom: 50px;
}
.skill-select {
  background: transparent;
  color: #fff;
}
.animate__animated.animate__fadeInLeft {
  --animate-duration: 2s;
}
</style>
