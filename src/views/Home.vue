<template>
  <div class="home">
    <div class="card card-side shadow-xl">
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <DragNDrop />
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Go</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DragNDrop from "@/views/DragNDrop.vue"; // @ is an alias to /src

@Component({
  components: {
    DragNDrop,
  },
})
export default class Home extends Vue {
  data() {
    return {
      array: ""
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
}

.card {
  background-color: #000;
  opacity: 0.8;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1100px;
  height: 100%;
  min-height: 500px;
  margin-bottom: 30px;
}
</style>