<template>
  <section id="about" class="about-me dark">
    <div class="row">
      <div class="col">
        <h1>About Me</h1>
      </div>
    </div>
    <div class="row about-me-profile-img-container">
      <div class="col">
        <img src="../assets/me.png" class="about-me-profile-img" alt="Profile Photo">
      </div>
    </div>
    <div class="row about-me-name-container">
      <div class="col">
        <h2>Ryan Garrett</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Frontend Developer</h3>
      </div>
    </div>
    <div class="row about-me-description-container">
      <div class="col">
        <p class="about-me-description">
          I've spent the last 5 years work for Accenture as a frontend developer working with small innovation projects to one of the UK's leading universitys. I'm known for my attention to detail and focus to delivering professional 
          standard products with execptional coding standards. I'm currently based in Newcastle where I'm focusing my career on frontend development and keen on picking up UX/UI skills.
        </p>
      </div>
    </div>
    <!-- Career title -->
    <div class="row">
      <p class="about-me-subtitle">Career:</p>
    </div>
    <div class="row">
      <!-- First career icon -->
      <div class="col about-me-icon-group">
        <div class="row">
          <font-awesome-icon icon="user-graduate" class="about-me-icon" />
        </div>
        <div class="row about-me-icon-description-container">
          <p class="about-me-icon-description">Achieved a First in Digital Technology Solutions &amp; Software Engineering</p>
        </div>
      </div>
      <!-- Second career icon -->
      <div class="col about-me-icon-group">
        <div class="row">
          <font-awesome-icon :icon="['fab', 'html5']" class="about-me-icon" />
        </div>
        <div class="row about-me-icon-description-container">
          <p class="about-me-icon-description">5 years of industry frontend experience</p>
        </div>
      </div>
      <!-- Third career icon -->
      <div class="col about-me-icon-group">
        <div class="row">
          <font-awesome-icon icon="university" class="about-me-icon" />
        </div>
        <div class="row about-me-icon-description-container">
          <p class="about-me-icon-description">Built the frontend for one of the UK's leading universitys</p>
        </div>
      </div>
    </div>
    <!-- Hobby title -->
    <div class="row">
      <p class="about-me-subtitle">Hobbies:</p>
    </div>
    <div class="row">
      <!-- First hobby icon -->
      <div class="col about-me-icon-group">
        <div class="row">
          <font-awesome-icon icon="pencil-alt" class="about-me-icon" />
        </div>
        <div class="row about-me-icon-description-container">
          <p class="about-me-icon-description">Love drawing and video editing</p>
        </div>
      </div>
      <!-- Second career icon -->
      <div class="col about-me-icon-group">
        <div class="row">
          <font-awesome-icon icon="ticket-alt" class="about-me-icon" />
        </div>
        <div class="row about-me-icon-description-container">
          <p class="about-me-icon-description">Watching Movies/TV Shows</p>
        </div>
      </div>
      <!-- Third career icon -->
      <div class="col about-me-icon-group">
        <div class="row">
          <font-awesome-icon icon="futbol" class="about-me-icon" />
        </div>
        <div class="row about-me-icon-description-container">
          <p class="about-me-icon-description">Unfortunatly a Newcastle United fan</p>
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
  .about-me {

    &-name-container {
      margin-top: 10px;
    }
    &-subtitle {
      font-size: 1.2rem;
      font-weight: bolder;
    }
    &-profile-img {
      height: 150px;
      border-radius: 200px;

      &-container {
        margin-top: 20px;
      }
    }
    &-description {
      text-align: center;

      &-container {
        margin-top: 40px;
      }
    }
    &-icon-group {
      display: flex;
      flex-direction: column;
      min-width: 260px;
      margin-top: 15px;
    }
    &-icon {
      height: 70px;
      width: 100%;
      color: $house-colour;

      &-description {
        text-align: center;
        font-weight: bold;
        height: 60px;

        &-container {
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }
      }
    }
  }
  @media screen and (min-width: $desktop) {
    .about-me {

      &-profile-img {
        height: 180px;

      }
      &-icon {
        height: 90px;
      }
    }
  }
</style>