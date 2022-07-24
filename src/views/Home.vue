<template>
  <div class="home">
    <div class="card card-side shadow-xl" v-show="!MadePath">
      <div class="card-body">
        <h2 class="card-title">Upload File to Imitate response</h2>
        <DragNDrop @MadePath="change" />

        <div class="card-actions justify-end card-right-down">
          <p class="badge badge-outline">
            <a href="https://www.github.com/tkgka">made by TKGKA</a>
          </p>
        </div>
      </div>
    </div>

    <ImitationLinkCard v-show="MadePath" :ImitationURL="ImitationURL" :CopyPath="CopyPath" />


  </div>
</template>

<script>
import DragNDrop from "@/views/DragNDrop.vue"; // @ is an alias to /src
import ImitationLinkCard from "./Card.vue"
export default {
  components: {
    ImitationLinkCard,
    DragNDrop,
  },
  data() {
    return {
      array: "",
      MadePath: false,
      ImitationURL: "",
      CopyPath: "",
      CopyText: "Copy Link",
    };
  },
  methods: {
    change(Pathval, ImitationURL) {
      this.MadePath = Pathval;
      this.ImitationURL = `${process.env.VUE_APP_SERVER_NAME}graphql/hex/${ImitationURL}`;
      this.CopyPath = ImitationURL;
    },
  },
};
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
}

/* horizontal div */
.horizontal {
  display: flex;
  align-items: center;
}
</style>
