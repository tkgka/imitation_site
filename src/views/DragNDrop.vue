<template>
    <div class="container">

        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <div class="md:flex">
                <div class="w-full p-3">
                    <div class=" h-96 rounded-lg border-dashed border-2 flex justify-center items-center  max-w-3xl">

                        <div class="absolute">
                            <div class="flex flex-col items-center">
                                <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                                <span class="block text-gray-400 font-normal">{{ fileInputComment }}</span>
                            </div>
                        </div>
                        <input ref="fileInput" type="file" class="h-full w-full opacity-0" v-on="test"
                            @change="onFileChange">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script lang="ts">
export default {
    data() {
        return {
            test: null,
            fileInputComment: "Attach you files here",
        };
    },
    methods: {
        // 파일 업로드 이벤트
        onFileChange() {
            //get file from id FileInput
            const file = this.$refs.fileInput.files[0];
            this.fileInputComment = String(file.name)
        }
    },
}
</script>
