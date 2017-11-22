<template>
  <div>
    <h1 class="title">Products Demo</h1>
    <div class="container">
      <nav>
        <router-link to="/products">Products</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style>
  h1.title {
    text-align: center;
  }

  nav {
    margin: 5px 0 25px 0
  }
</style>
