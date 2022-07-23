<template>
  <div id="app">
    <Navigator msg="Imitation_site" />
    <div>
      <router-view />
    </div>
    <particles-bg type="circle" :bg="true" />

  </div>
</template>


<script lang="ts">
import { ParticlesBg } from "particles-bg-vue";
import Navigator from "./views/Navigator.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    Navigator,
    ParticlesBg,
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>



