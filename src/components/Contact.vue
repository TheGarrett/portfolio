<template>
  <section id="contact" class="contact dark">
    <div class="row">
      <div class="col">
        <h1>Contact</h1>
      </div>
    </div>
    <div class="row contact-margin contact-border">
      <div class="col">
        <p>Feel free to contact me with any questions you may have</p>
      </div>
    </div>
    <div class="row contact-margin contact-border">
      <div class="col">
        <p class="subtitle">thegarrettUK@gmail.com</p>
      </div>
    </div>
    <div class="row contact-margin">
      <div class="col">
        <a href="https://www.linkedin.com/in/ryan-garrett-a18a7996/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" class="contact-icon" /></a>
      </div>
      <div class="col">
        <a href="https://www.instagram.com/rgarrett_1996/?hl=en" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="contact-icon" /></a>
      </div>
      <div class="col">
        <a href="https://twitter.com/Garrett_UK" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="contact-icon" /></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:active {
    text-decoration: underline;
  }
  .contact {
    &-margin {
      margin-top: 20px;
    }

    &-icon {
      height: 70px;
      width: 100%;
      color: $house-colour;
    }

    &-email {
      align-items: center;
    }

    &-border {
      border-bottom: 1px $secondary-colour solid;
    }
  }
</style>