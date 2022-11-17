<template>
  <nav class="navbar fixed-top navbar-expand-lg" id="main-navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">MF</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/skills">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://blog.felixmaiko.com">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
<style scoped>
#main-navbar {
  background: transparent;
  margin-bottom: 150px;
}
.navbar-brand {
  color: #fff;
}
.nav-link {
  color: #fff;
}
.nav-link:hover {
  border-bottom-style: solid;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  cursor: pointer;
}
a{
text-decoration: none;
color: #FFF;
font-size: 18px;
}
</style>
