<template>
  <!-- Main page -->
  <div id="app">
    <!-- Page layout -->
    <IntroCard />
    <Navbar />
    <Portfolio />
    <AboutMe />
    <Skills />
  </div>
</template>

<script>
  // Import components
  import IntroCard from './components/IntroCard.vue';
  import Navbar from './components/Navbar.vue';
  import Portfolio from './components/Portfolio.vue';
  import AboutMe from './components/AboutMe.vue';
  import Skills from './components/Skills.vue';

  export default {
    name: 'app',
    components: {
      Navbar,
      IntroCard,
      Portfolio,
      AboutMe,
      Skills
    }
  }
</script>