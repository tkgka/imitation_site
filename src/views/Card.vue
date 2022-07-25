<template>
  <div class="card card-side shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Share Imitate response</h2>

      <div>
        <input
          type="text"
          dir="ltr"
          readonly=""
          aria-readonly="true"
          :value="ImitationURL"
          class="input input-bordered input-primary w-full max-w-xl dark:text-white"
        />
        <button class="btn btn-wide m-3.5" @click="doCopy">
          {{ CopyText }}
        </button>
      </div>

      <div>
        <ShareNetwork
          network="email"
          title="Shareing Imitation Site"
          :url="ImitationURL"
          description="We're shareing Imiation Site Link"
        >
          <button class="btn btn-wide m-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"
              />
            </svg>
            <p class="mx-2.5">Send by Email</p>
          </button>
        </ShareNetwork>
        <label for="my-modal-3" class="btn modal-button btn-wide m-3.5"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm0-2h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8 8h-1v-2h1v1h2v1h-1v1h-1v-1zm2 12v-1h-1v1h1zm-1-15v-1h-2v1h1v1h1v-1zm8-1v6h-1v-1h-4v-5h5zm-1 4v-3h-3v3h3zm-14 2h-1v1h2v-1h-1zm0 3h1v1h1v-3h-1v1h-2v2h1v-1zm5 1v2h1v-2h-1zm4-10h-1v3h1v-3zm0 5v-1h-1v1h1zm3-2h1v-1h-1v1zm-10-1h-1v1h1v-1zm2-2v5h-5v-5h5zm-1 1h-3v3h3v-3zm9 5v1h-1v-1h-2v1h-1v-1h-3v-1h-1v1h-1v1h1v2h1v-1h1v2h1v-2h3v1h-2v1h2v1h1v-3h1v1h1v2h1v-1h1v-1h-1v-1h-1v-1h1v-1h-2zm-11 8h1v-1h-1v1zm-2-3h5v5h-5v-5zm1 4h3v-3h-3v3zm12-3v-1h-1v1h1zm0 1h-1v1h-1v-1h-1v-1h1v-1h-2v-1h-1v2h-1v1h-1v3h1v-1h1v-1h2v2h1v-1h1v1h2v-1h1v-1h-2v-1zm-9-3h1v-1h-1v1zm10 2v1h1v1h1v-3h-1v1h-1zm2 4v-1h-1v1h1zm0-8v-1h-1v1h1z"
            />
          </svg>
          <p class="mx-2.5">QR code</p>
        </label>

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕</label
            >
            <vue-qr
              :text="ImitationURL"
              qid="ImitationURL"
              :size="400"
            ></vue-qr>
          </div>
        </div>
      </div>

      <div class="horizontal">
        <p>Expires in 24 hours</p>
        <button class="btn btn-active btn-link" v-on:click="DeleteImitation">
          Delete
        </button>
      </div>

      <div class="card-actions justify-end card-right-down">
        <p class="badge badge-outline">
          <a href="https://www.github.com/tkgka">made by TKGKA</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueQr from "vue-qr";
import http from "../fileUpload";
export default {
  props: ["ImitationURL", "CopyPath"],
  components: {
    VueQr,
  },
  data() {
    return {
      CopyText: "Copy Link",
    };
  },
  methods: {
    doCopy() {
      this.CopyText = "Copied";
      this.$copyText(this.ImitationURL);
    },
    DeleteImitation: function () {
      //axios get ${process.env.VUE_APP_SERVER_NAME}/graphql/del/path
      http
        .get(`${process.env.VUE_APP_SERVER_NAME}/graphql/del/${this.CopyPath}`)
        .then((res) => {
          if (res.data == true) {
            this.$router.go();
          }
        });
    },
  },
};
</script>
