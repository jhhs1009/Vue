<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/lotto/6">Lotto</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
