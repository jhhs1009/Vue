<template>
  <div>
    <nav>
      <div class="box">
        <div class="left">
          <router-link to="/">모든</router-link><br />
          <router-link to="/today">오늘</router-link><br />
          <router-link to="/important">중요</router-link>
        </div>
        <div class="right">
          <SideBar></SideBar>
          <router-view />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

</script>

<style>

</style>
