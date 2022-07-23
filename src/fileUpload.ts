import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.VUE_APP_SERVER_NAME}/`,
  headers: { "content-type": "application/json" },
});

http.defaults.headers.post["Content-Type"] = "multipart/form-data";

export default http;
