export const useUserSession = () => {
  const session = ref({
    token: '',
  });

  return {
    session,
  };
};
