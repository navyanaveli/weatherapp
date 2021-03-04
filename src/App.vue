<template>
  <div id="app" style="background-image: linear-gradient(to bottom right, gray, papayawhip);">
    <div id="nav">
      <router-link to="/">Search</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

}

#nav {
  padding: 10px;
}
#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: black;
  text-shadow: 2px 2px gray;
  text-decoration: #2c3e50;
  font-size: 30px;
}

</style>
