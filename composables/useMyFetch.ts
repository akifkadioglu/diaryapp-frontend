import { UseFetchOptions } from "#app";
import { NitroFetchRequest } from "nitropack";
import { KeyOfRes } from "nuxt/dist/app/composables/asyncData";

export function useAppFetch<T>(
  method: String,
  request: NitroFetchRequest,
  body: Object,
  opts?:
    | UseFetchOptions<
        T extends void ? unknown : T,
        (res: T extends void ? unknown : T) => T extends void ? unknown : T,
        KeyOfRes<
          (res: T extends void ? unknown : T) => T extends void ? unknown : T
        >
      >
    | undefined
) {
  const config = useRuntimeConfig();

  return useFetch<T>(request, {
    baseURL: config.public.API_BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: method,
  });
}
