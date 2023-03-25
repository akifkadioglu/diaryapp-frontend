export const useStorage = () => {

    const push = (key, value) => {
        const cookie = useCookie(key)
        cookie.value = value
    }

    const pull = (key) => {
        const cookie = useCookie(key)
        return cookie.value
    }
    const remove = (key) => {
        const cookie = useCookie(key)
        cookie.value = undefined
    }

    return { push, pull, remove }
}
