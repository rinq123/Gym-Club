<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <p>Check out our gymnastics gallery!</p>
    <div class = "images">
        <img src="/eclipse1.jpg" alt="Eclipse Gymnastics Club" />
        <img src="/eclipse2.jpg" alt="Eclipse Gymnastics Club" />   
        <img src="/eclipse3.jpg" alt="Eclipse Gymnastics Club" /> 
    </div>
  </div>
</template> 
<script setup>
//Logic
</script>

<style>
.gallery {
  padding: 2rem;
  text-align: center;
}

.images{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.images img{
    max-width: 300px;
    border-radius: 8px;
}
</style>
