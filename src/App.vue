<template>
  <!-- Main page -->
  <div id="app">
    <!-- Page layout -->
    <IntroCard />
    <div>
      <!-- Navbar and progression bar -->
      <div class="nav-group">
        <Navbar />
        <ProgressBar />
      </div>
      <!-- Page Content -->
      <div>
        <Portfolio />
        <AboutMe />
        <Skills />
        <Experience />
      </div>
    </div>
  </div>
</template>

<script>
  // Import components
  import IntroCard from './components/IntroCard.vue';
  import Navbar from './components/Navbar.vue';
  import ProgressBar from './components/library/ProgressBar.vue';
  import Portfolio from './components/Portfolio.vue';
  import AboutMe from './components/AboutMe.vue';
  import Skills from './components/Skills.vue';
  import Experience from './components/Experience.vue';

  export default {
    name: 'app',
    components: {
      Navbar,
      ProgressBar,
      IntroCard,
      Portfolio,
      AboutMe,
      Skills,
      Experience
    }
  }

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  } 
</script>