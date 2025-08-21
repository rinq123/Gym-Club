
<template>
  <div class ="hamburger-container">
    <button class ="hamburger" @click="menuOpen = !menuOpen">
      &#9776; <!-- Unicode Hamburger Icon-->
    </button>
  </div>
  <transition name="sidebar-slide">
  <nav v-if="menuOpen" class="side-nav">
    <div class="sidebar-logo">
      <img src="/eclipsegym.png" alt="Eclipse Gymnastics Club Logo" />
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/coaches">Coaches</router-link>
    <router-link to="/classes">Classes</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  </transition>
  <router-view />
</template>

<script setup>

import {ref} from 'vue'
const menuOpen =ref(false)
</script>

<style scoped>


nav {
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  background: #f5f5f5;
  justify-content: center ;
}

router-link {
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}

router-link.active {
  text-decoration: underline;
}

.hamburger-container {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1000; /* Ensure it appears above other content */
}

.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}

.side-nav{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15rem;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 1rem;
  z-index: 999;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Enables vertical scrolling */
}

.side-nav a{
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  font-weight: 500;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 4rem;
  margin: 0.1rem 0;
  margin-bottom: 2rem;
  transition: background 0.2, color 0.2s;

}

.side-nav a:hover {
  background: #1a0129;
  color: #ffffff;
}

.side-nav .router-link-active {
  background: #480f7e;
  color: #fff;
  font-weight: 600;
}

.sidebar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 2rem 0;
}

.sidebar-logo img {
  width: 80%;
  max-width: 120px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.sidebar-slide-enter-active, .sidebar-slide-leave-active {
  transition: transform 0.3s cubic-bezier(.55,0,.1,1), opacity 0.3s;
}

.sidebar-slide-enter-from, .sidebar-slide-leave-to {
  transform: translateX(-20rem);
  opacity: 0;
}

.sidebar-slide-enter-to, .sidebar-slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

@media (max-width: 600px) {
  .side-nav {
    width: 80vw;
    min-width: 140px;
    max-width: 320px;
    padding-top: 0.5rem;
    height: 100vh;
    overflow-y: auto;
    box-shadow: 2px 0 8px rgba(0,0,0,0.1);
  }
  .sidebar-logo img {
    max-width: 60px;
    width: 70%;
  }
  .hamburger {
    font-size: 2.2rem;
    top: 0.5rem;
    left: 0.5rem;
  }
  .side-nav a {
    font-size: 0.95rem;
    padding: 0.5rem 0.5rem;
    margin-bottom: 1rem;
  }
}

</style>
