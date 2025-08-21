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
.home{
  padding: 2rem;
  text-align: center;
}

.home-logo{
  max-width: 50%;
  height: auto;
}

.logo img {
  height: 50rem; 
  width: 50rem;
}

.hero{
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
}

.hero-video {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 0;
}


</style>