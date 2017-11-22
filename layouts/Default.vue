<template>
  <div>
    <h1 class="title">Products Demo</h1>
    <div class="container">
      <router-link to="/products">Products</router-link>
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
</style>
