<template>
  <div>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import NavBar from './admin/NavBar';
  import SideBar from './admin/SideBar';
  export default {
    name: 'App',
    components: {
      NavBar,
      SideBar
    }
  }
  </script>