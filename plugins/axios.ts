import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { pull } = useStorage();
  var token = pull("token");
  let api = axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
      Authorization: token,
      common: {},
    },
  });
  nuxtApp.provide("api", {
    api: api,
  });
});
