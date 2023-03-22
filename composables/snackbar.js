export const useSnackbar = () => {
    const isSnackbarOpen = useSnackbarOpen()
    const snackbarText = useSnackbarText()

    const showSnackbar = async (text) => {
        isSnackbarOpen.value = true;
        snackbarText.value = text
    }
    return { showSnackbar }
}
