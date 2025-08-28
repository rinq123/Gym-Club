<template>
  <video autoplay loop muted playsinline disablePictureinPicture class="hero-video">
    <source src="/eclipseplaceholder.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
  <div class="home">
    <div class="logo">  
      <img src="/eclipsegym.png" alt="Eclipse Gymnastics Club Logo" />
    </div>
    <h1>About Us </h1>
    <p>Inspiring gymnasts of all ages. Explore our classes, meet our coaches and join our community!</p>
  </div>
</template>   
<script setup>
//Logic
</script>
<style>
.home {
  padding: 2rem;
  text-align: center;
}

.logo img {
  width: 80vw;
  max-width: 350px;
  height: auto;
  margin: 0 auto;
  display: block;
}

.hero-video {
  width: 100vw;
  max-width: 100%;
  height: 40vh;
  min-height: 200px;
  object-fit: cover;
  border-radius: 0;
  display: block;
  margin: 0 auto;
}

.home h1 {
  font-size: 2rem;
  margin-top: 1.5rem;
}

.home p {
  font-size: 1.1rem;
  margin-top: 1rem;
}

@media (max-width: 600px) {
  .home {
    padding: 1rem;
  }
  .logo img {
    max-width: 180px;
    width: 90vw;
  }
  .hero-video {
    height: 25vh;
    min-height: 120px;
  }
  .home h1 {
    font-size: 1.3rem;
  }
  .home p {
    font-size: 1rem;
  }
}
</style>