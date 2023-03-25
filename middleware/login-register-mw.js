export default defineNuxtRouteMiddleware(() => {
  const { pull } = useStorage();
  var token = pull("token")
  if (token !== undefined) {
    return '/'
  }
})
