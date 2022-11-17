<template>
  <div class="container-fluid">
    <div class="row about-row">
      <div class="col-md-12 col-lg-12 col-sm-12">
        <h1>
          Hi!
          <span class="animate__animated animate__fadeInLeftBig"
            >I'm Felix Maiko.
          </span>
        </h1>
        <h4>
          I'm a Fullstack web developer with over {{ experience }} yrs
          experience building diverse web application systems
        </h4>
        <div class="action-buttons">
          <router-link class="nav-next" to="/skills">View Skills!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      experience: new Date().getFullYear() - 2016,
    };
  },
  methods: {},
};
</script>
<style scoped>
.about-row {
  text-align: left;
  color: #fff;
  margin-top: 20%;
  padding-left: 25%;
}
.animate__animated.animate__fadeInLeftBig {
  --animate-duration: 4s;
}
.about-divider {
  width: 33%;
}
.action-buttons {
  margin-top: 20px;
}
.action-buttons .nav-next {
  display: inline;
  margin-right: 10px;
  padding-top: 5px;
}
</style>
