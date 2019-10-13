<template>
  <header id="intro" class="intro-card">
    <div class="row intro-card-welcome">
      <div class="col">
        <img src="../assets/Logo.png" class="intro-card-logo" alt="Intro Page Portfolio Logo">
      </div>
      <div class="row ds-col intro-card-margin-top">
        <div class="col text-center"><h1>Ryan Garrett</h1></div>
      </div>
      <div class="row ds-col intro-card-margin-top">
        <div class="col text-center">Welcome to my Portfolio, scroll down to explore!</div>
      </div>
    </div>
    <div class="row intro-card-margin-top">
      <div class="col">
        <a href="#" class="btn btn-primary default-button">Download CV</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .intro-card {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &-margin-top {
      margin-top: 20px;
    }

    &-logo {
      height: 130px;
      -webkit-filter: drop-shadow(0 0 3mm $house-colour);
      filter: drop-shadow(0 0 3mm $house-colour);
    }

    &-welcome {
      flex-direction: column;
    }

    &-description {
      text-align: center
    }
  }
  @media screen and (min-width: $desktop) {
    .intro-card {
      // padding: 10% 10%;

      &-margin-top {
        margin-top: 20px;
      }

      &-logo {
        height: 200px;
      }
    }
  }
</style>