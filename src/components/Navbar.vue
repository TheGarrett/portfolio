<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <!-- Mobile toggle button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a id="mobile-icon" class="navbar-brand" href="#">
      <img src="../assets/Logo.png" class="navbar-logo" alt="Portfolio Logo">
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
            <img src="../assets/Logo.png" class="navbar-logo" alt="Portfolio Logo">
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  #mobile-icon {
    display: flex;
  }
  #desktop-icon {
    display: none;
  }
  .navbar {
    background-color: $secondary-colour;

    &-bar {
      justify-content: center;
    }

    &-nav {
      width: 100%;
      display: flex;
      align-items: center;
    }
    
    &-logo {
      height: 45px;
      width: 45px;
      -webkit-filter: drop-shadow(0 0 2mm $house-colour);
      filter: drop-shadow(0 0 2mm $house-colour);
    }

    &-brand {
      margin: 0 auto;
      padding-right: 55px;
    }
  }

  .nav {
    &-link {
      color: $white;
      letter-spacing: 3px;
    }
    &-item {
      display: flex;
      align-items: center;
      padding: 5px;
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
        -webkit-filter: drop-shadow(0 0 3mm $house-colour);
        filter: drop-shadow(0 0 3mm $house-colour);
      }
      &-nav {
        justify-content: space-around;
      }
      &-brand {
        margin: 0 auto;
        padding-right: 90px;
      }
    }
      .nav {
        &-item {
          padding: 0;
        }
      }
  }
</style>