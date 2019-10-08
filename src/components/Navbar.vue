<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <!-- Mobile toggle button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Nav bar content -->
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Me</a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src="../assets/Logo.png" class="navbar-logo">
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Experience</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  // Import components

  export default {
    name: 'Navbar',
    components: {
      
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
.navbar {

  &-logo {
    height: 70px;
    width: 70px;
  }
}
</style>