export default defineNuxtPlugin((nuxtApp) => {
  const { session } = useUserSession();

  const api = $fetch.create({
    baseURL: 'https://qa-gateway.tms.uz/api',
    onRequest({ options }) {
      const token = session.value?.token;
      if (token) {
        const headers = (options.headers ||= {});
        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${token}`]);
        } else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${token}`);
        } else {
          headers.Authorization = `Bearer ${token}`;
        }
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'));
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
