<template>
  <div id="app">
    <div class="navbar">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">
          <img alt="Main logo" src="../assets/logo.png" class="navbar_icon" />
          <span class="text-2xl font-black dark:text-white"> {{ msg }} </span>
        </a>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:text-white"
        >
          <li><a href="/">Main</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Navigator extends Vue {
  @Prop() public msg!: string;
}
</script>

<style scoped>
#app {
}
.navbar_icon {
  width: 45px;
  height: 45px;
  margin-right: 5px;
}
.navbar {
  margin-top: 1%;
}
</style>
