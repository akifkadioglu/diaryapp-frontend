export const useStorage = () => {

    const push = async (key, value) => {
        localStorage.setItem(key, value)
    }
    const pull = async (key) => {
        localStorage.getItem(key, value)

    }
    const remove = async () => {
        localStorage.clear()
    }
    return { push, pull, remove }
}
