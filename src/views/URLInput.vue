<template>
  <div class="home">
    <div class="card card-side shadow-xl" v-if="ImitationURL.length <= 0">
      <div class="card-body">
        <h2 class="card-title mb-20">Enter URL to Imitate response</h2>
        <div>
          <input
            v-model="URL"
            type="text"
            placeholder="path"
            class="input input-bordered input-primary w-full max-w-xl dark:text-white"
          />
          <div class="inline-block relative w-full max-w-xl mt-3.5">
            <select
              v-model="reqMethod"
              class="select select-primary w-full max-w-xl dark:text-white"
            >
              >
              <option>Get</option>
              <option>Post</option>
              <option>Put</option>
              <option>Patch</option>
              <option>Delete</option>
              <option>Copy</option>
              <option>Options</option>
              <option>Link</option>
              <option>Unlink</option>
              <option>Purge</option>
            </select>
          </div>
        </div>

        <div>
          <button
            v-on:click="submit"
            :disabled="isUploading"
            class="btn btn-primary btn-wide m-3.5"
          >
            Go
          </button>
        </div>

        <div class="card-actions justify-end card-right-down">
          <p class="badge badge-outline">
            <a href="https://www.github.com/tkgka">made by TKGKA</a>
          </p>
        </div>
      </div>
    </div>
    <ImitationLinkCard
      v-if="ImitationURL.length > 0"
      :ImitationURL="ImitationURL"
      :CopyPath="CopyPath"
    />
  </div>
</template>

<script>
import AppendByURL from "../graphql/AppendByURL";
import ImitationLinkCard from "./Card.vue";
export default {
  props: [],
  components: {
    ImitationLinkCard,
  },
  data() {
    return {
      URL: "",
      reqMethod: "Get",
      isUploading: false,
      ImitationURL: "",
      CopyPath: "",
    };
  },
  methods: {
    submit() {
      this.isUploading = true;
      AppendByURL([], this.reqMethod, this.URL).then((val) => {
        this.CopyPath = val;
        this.ImitationURL = `${process.env.VUE_APP_SERVER_NAME}/graphql/hex/${val}`;
        this.isUploading = false;
      });
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
  max-width: 700px;
  height: 100%;
  min-height: 500px;
}

/* horizontal div */
.horizontal {
  display: flex;
  align-items: center;
}
</style>
