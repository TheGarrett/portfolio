<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <!-- Mobile toggle button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a id="mobile-icon" class="navbar-brand" href="#">
      <img src="../assets/Logo.png" class="navbar-logo">
    </a>
    <!-- Nav bar content -->
    <div class="navbar-bar collapse navbar-collapse" id="myNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#portfolio">Design Vault</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About Me</a>
        </li>
        <li id="desktop-icon" class="nav-item">
          <a class="navbar-brand" href="#intro">
            <img src="../assets/Logo.png" class="navbar-logo">
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">Experience</a>
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
  #mobile-icon {
    display: flex;
  }
  #desktop-icon {
    display: none;
  }
  .navbar {
    background-color: $secondary-colour;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;

    &-bar {
      justify-content: center;
    }

    &-nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    
    &-logo {
      height: 45px;
      width: 45px;
    }

    &-brand {
      margin: 0 auto;
      padding-right: 50px;
    }
  }

  .nav {
    &-link {
      color: $white;
      font-weight: bolder;
    }
    &-item {
      display: flex;
      align-items: center;
    }
  }

  @media screen and (min-width: $desktop) {
    #mobile-icon {
      display: none;
    }
    #desktop-icon {
      display: flex;
    }
    .navbar {
      &-logo {
        height: 70px;
        width: 70px;
      }
    }
  }
</style>