import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    let api = axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
      common: {},
    },
  });
  nuxtApp.provide("api", {
    api: api,
  });
});
