export const useSnackbarText = () => useState<String>("snackbarText", () => "");
export const useSnackbarOpen = () =>
  useState<Boolean>("snackbarOpen", () => false);
