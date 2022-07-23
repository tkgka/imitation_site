<template>
  <div class="home">
    <div class="card card-side shadow-xl" v-show="!MadePath">
      <div class="card-body">
        <h2 class="card-title">Upload File to Imitate response</h2>
        <DragNDrop @MadePath="change" />

        <div class="card-actions justify-end card-right-down">
          <p class="badge badge-outline"> <a href="https://www.github.com/tkgka">made by TKGKA</a></p>
        </div>
      </div>
    </div>


    <div class="card card-side shadow-xl" v-show="MadePath">
      <div class="card-body">
        <h2 class="card-title">Upload File to Imitate response</h2>

        <div>
          <input type="text" dir="ltr" readonly="" aria-readonly="true" :value=ImitationURL
            class="input input-bordered input-primary w-full max-w-xl dark:text-white" />
          <button class="btn btn-wide m-3.5" @click="doCopy">{{ CopyText }}</button>
        </div>

        <div>
          <button class="btn btn-wide m-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z" />
            </svg>
            <p class="mx-2.5">share</p>
          </button>
          <button class="btn btn-wide m-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm0-2h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8 8h-1v-2h1v1h2v1h-1v1h-1v-1zm2 12v-1h-1v1h1zm-1-15v-1h-2v1h1v1h1v-1zm8-1v6h-1v-1h-4v-5h5zm-1 4v-3h-3v3h3zm-14 2h-1v1h2v-1h-1zm0 3h1v1h1v-3h-1v1h-2v2h1v-1zm5 1v2h1v-2h-1zm4-10h-1v3h1v-3zm0 5v-1h-1v1h1zm3-2h1v-1h-1v1zm-10-1h-1v1h1v-1zm2-2v5h-5v-5h5zm-1 1h-3v3h3v-3zm9 5v1h-1v-1h-2v1h-1v-1h-3v-1h-1v1h-1v1h1v2h1v-1h1v2h1v-2h3v1h-2v1h2v1h1v-3h1v1h1v2h1v-1h1v-1h-1v-1h-1v-1h1v-1h-2zm-11 8h1v-1h-1v1zm-2-3h5v5h-5v-5zm1 4h3v-3h-3v3zm12-3v-1h-1v1h1zm0 1h-1v1h-1v-1h-1v-1h1v-1h-2v-1h-1v2h-1v1h-1v3h1v-1h1v-1h2v2h1v-1h1v1h2v-1h1v-1h-2v-1zm-9-3h1v-1h-1v1zm10 2v1h1v1h1v-3h-1v1h-1zm2 4v-1h-1v1h1zm0-8v-1h-1v1h1z" />
            </svg>
            <p class="mx-2.5">QR code</p>
          </button>
        </div>

        <div class="horizontal">
          <p>Expires in 24 hours</p>
          <button class="btn btn-active btn-link" v-on:click="DeleteImitation">Delete</button>
        </div>




        <div class="card-actions justify-end card-right-down">
          <p class="badge badge-outline"> <a href="https://www.github.com/tkgka">made by TKGKA</a></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import DragNDrop from "@/views/DragNDrop.vue"; // @ is an alias to /src
import http from "../fileUpload"
export default {
  components: {
    DragNDrop,
  },
  data() {
    return {
      array: "",
      MadePath: false,
      ImitationURL: "",
      CopyPath: "",
      CopyText: "Copy Link",
    }
  },
  methods: {
    change(Pathval, ImitationURL) {
      this.MadePath = Pathval;
      this.ImitationURL = `${process.env.VUE_APP_SERVER_NAME}graphql/hex/${ImitationURL}`;
      this.CopyPath = ImitationURL
    },
    doCopy() {
      this.CopyText = "Copied";
      this.$copyText(this.ImitationURL);
    },
    DeleteImitation: function () {
      //axios get ${process.env.VUE_APP_SERVER_NAME}/graphql/del/path
      http
        .get(
          `${process.env.VUE_APP_SERVER_NAME}graphql/del/${this.CopyPath}`
        )
        .then((res) => {

          if (res.data == true) {
            this.$router.go();
          }
        });
    },
  },
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

/* horizontal div */
.horizontal {
  display: flex;
  align-items: center;
}
</style>