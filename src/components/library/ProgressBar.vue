<template>
  <!-- Progress bar -->
  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  /* The progress container (grey background) */
  .progress-container {
    width: 100%;
    height: 8px;
    background: #ccc;
  }

  /* The progress bar (scroll indicator) */
  .progress-bar {
    height: 8px;
    background: $house-colour;
    width: 0%;
  }
</style>