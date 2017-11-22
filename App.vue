<template>
    <router-view></router-view>
</template>

<script >
  export default {

  }
</script>

<style>
    @import './node_modules/bootstrap/dist/css/bootstrap.css';

    body {
        padding-top: 5rem;
        font-family: "century gothic", verdana;
    }

    .btn-link {
        cursor: pointer;
    }

    .table tr td {
      vertical-align: middle !important;
    }

    .errors {
        color: red;
        margin: 0 0 15px 0
    }
</style>
