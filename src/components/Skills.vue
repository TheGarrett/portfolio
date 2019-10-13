<template>
  <section id="skills" class="skills light">
    <div class="row">
      <div class="col">
        <h1>Skills</h1>
      </div>
    </div>
    <div class="row skills-container">
      <!-- Skill 1 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/html.png" class="skills-icon" alt="HTML Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">HTML</p>
        </div>
      </div>
      <!-- Skill 2 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/css.png" class="skills-icon" alt="CSS Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">CSS</p>
        </div>
      </div>
      <!-- Skill 3 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/js.png" class="skills-icon" alt="Javascript Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">JS</p>
        </div>
      </div>
      <!-- Skill 4 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/sass.svg" class="skills-icon" alt="SASS Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">SASS</p>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Skill 5 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/vue.png" class="skills-icon" alt="Vue.js Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">Vue.js</p>
        </div>
      </div>
      <!-- Skill 6 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/Vegas_Pro.png" class="skills-icon" alt="Vegas Pro Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">Vegas Pro</p>
        </div>
      </div>
      <!-- Skill 7 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/xd.svg" class="skills-icon" alt="XD Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">XD</p>
        </div>
      </div>
      <!-- Skill 8 -->
      <div class="col skills-icon-group">
        <div class="row skills-icon-container">
          <img src="../assets/Atlassian.png" class="skills-icon" alt="Atlassian Logo">
        </div>
        <div class="row skills-icon-description-container">
          <p class="skills-icon-description">Atlassian</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .skills {

    &-container {
      margin-top: 40px;
    }
    &-icon-group {
      display: flex;
      flex-direction: column;
      min-width: 260px;
    }
    &-icon {
      height: 120px;

      &-container {
        display: flex;
        justify-content: center;
      }

      &-description {
        text-align: center;
        font-weight: bolder;
        height: 60px;

        &-container {
          display: flex;
          justify-content: center;
          padding-top: 5px;
          height: 50px;
        }
      }
    }
  }
</style>