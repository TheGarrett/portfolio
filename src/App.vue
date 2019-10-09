<template>
  <!-- Main page -->
  <div id="app">
    <!-- Page layout -->
    <IntroCard />
    <div>
      <Navbar />
      <!-- Page Content -->
      <div class="page-body">
        <Portfolio />
        <AboutMe />
        <Skills />
        <Experience />
        <div class="row">
          <div class="col">
            Icon
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // Import components
  import IntroCard from './components/IntroCard.vue';
  import Navbar from './components/Navbar.vue';
  import Portfolio from './components/Portfolio.vue';
  import AboutMe from './components/AboutMe.vue';
  import Skills from './components/Skills.vue';
  import Experience from './components/Experience.vue';

  export default {
    name: 'app',
    components: {
      Navbar,
      IntroCard,
      Portfolio,
      AboutMe,
      Skills,
      Experience
    }
  }
</script>