<template>
  <div class="container">
    <form @submit.prevent="formSubmit" method="post">
      <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div class="md:flex">
          <div class="w-full p-3">
            <div
              class="h-96 rounded-lg border-dashed border-2 flex justify-center items-center max-w-3xl"
            >
              <div class="absolute">
                <div class="flex flex-col items-center">
                  <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                  <span class="block text-gray-400 font-normal">{{
                    fileInputComment
                  }}</span>
                </div>
              </div>
              <input
                ref="fileInput"
                type="file"
                class="h-full w-full opacity-0"
                @change="onFileChange"
              />
            </div>
          </div>
        </div>

        <button
          v-on:click="submit"
          :disabled="isUploading"
          class="btn btn-primary btn-wide m-3.5"
        >
          Go
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import http from "../fileUpload.ts";
export default {
  data() {
    return {
      isUploading: false,
      selectFile: null,
      fileInputComment: "Attach you files here",
    };
  },
  methods: {
    // 파일 업로드 이벤트
    onFileChange() {
      //get file from id FileInput
      const file = this.$refs.fileInput.files[0];
      this.selectFile = file;
      this.fileInputComment = String(file.name);
    },
    submit: function () {
      if (this.selectFile != null) {
        this.isUploading = true;
        let form = new FormData();
        form.append("file", this.selectFile); // api file upload
        form.append("toDB", "1"); // api file toDB$el
        http
          .post("/graphql/upload/", form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .catch(() => {
            this.isUploading = false;
          })
          .then((res) => {
            this.isUploading = false;
            this.$emit("MadePath", true, res.data);
          });
      }
    },
  },
};
</script>
