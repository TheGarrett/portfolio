<template>
  <section id="portfolio" class="portfolio light">
    <div class="row">
      <div class="col">
        <h1>Design Vault</h1>
      </div>
    </div>
    <div class="row">
      <div class="col description-container">
        Welcome to the Design Vault, here you'll find a mixture of past clients and projects I have done for fun!
      </div>
    </div>
    <div class="row">
      <!-- Bladed Brows -->
      <div class="col card-container">
        <div class="card" style="width: 18rem;">
          <img src="../assets/project.png" class="card-img-top" alt="Project Logo">
          <div class="card-body">
            <h5 class="card-title">Bladed Brows</h5>
            <p class="card-text">Coming soon</p>
            <a href="#" class="btn btn-primary card-button">View</a>
          </div>
        </div>
      </div>
      <!-- Continue projects here -->
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

  .description-container {
    margin-top: 20px;
    text-align: center;
  }

  .card {
    &-container {
      margin-top: 40px;
    }

    &-img-top {
      height: 200px;
      width: 200px;
      margin: 0 auto;
    }
    &-button {
      width: 100%;
      color: $dark-grey;
      background-color: $house-colour;
      border-color: $house-colour;
    }
  }

</style>