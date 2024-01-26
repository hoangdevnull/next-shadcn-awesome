/**
 * * Override useSession to have more clean code
 * @returns session with isLoggedIn to check auth
 */
export const useAuth = () => {
  return {
    isLoggedIn: false,
    user: {},
  };
};
