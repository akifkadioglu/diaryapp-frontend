import store from "./store"

export const snackbar = {
    show(text) {
        store.state.isSnackbarOpen = true
        store.state.snackbarText = text
    }
}