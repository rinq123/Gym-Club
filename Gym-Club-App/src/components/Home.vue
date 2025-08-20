<script setup>
// You can import assets or components as needed
</script>

<template>
  <div class="homepage">
    <header class="header">
      <img src="./assets/eclipsegym.png" alt="Eclipse Gym Logo" class="logo" />
      <h1>Eclipse Gymnastics Club</h1>
      <p class="subtitle">Welcome to our club! Inspiring gymnasts of all ages.</p>
    </header>
    <nav class="nav">
      <a href="#about">About Us</a>
      <a href="#classes">Classes</a>
      <a href="#contact">Contact</a>
    </nav>
    <section class="hero">
      <h2>Join Our Community</h2>
      <p>Discover fun, fitness, and friendship at Eclipse Gymnastics Club. Sign up for a class today!</p>
      <button class="cta">Get Started</button>
    </section>
    <section class="highlights">
      <h3>Upcoming Events</h3>
      <ul>
        <li>Summer Camp - June 10</li>
        <li>Open House - July 5</li>
        <li>Competition - August 20</li>
      </ul>
    </section>
    <footer class="footer">
      <p>&copy; 2025 Eclipse Gymnastics Club. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.homepage {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Arial, sans-serif;
}
.header {
  margin-bottom: 2rem;
}
.logo {
  height: 100px;
  margin-bottom: 1rem;
}
.subtitle {
  color: #888;
  font-size: 1.2em;
}
.nav {
  margin-bottom: 2rem;
}
.nav a {
  margin: 0 1em;
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
}
.nav a:hover {
  text-decoration: underline;
}
.hero {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}
.cta {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.8em 2em;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1em;
}
.cta:hover {
  background: #2c8c6b;
}
.highlights {
  margin-bottom: 2rem;
}
.footer {
  color: #aaa;
  font-size: 0.9em;
}
</style>
