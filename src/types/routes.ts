export const ROUTE = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  ME: '/me',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PROFILE: '/profile',
  SUPPORT: '/support',
  SUPPORT_NEW: '/support_new',
} as const;

export type ROUTE_KEY = keyof typeof ROUTE;

export const MAPPING_ROUTE_TITLE = {
  [ROUTE.DASHBOARD]: 'Course',
  [ROUTE.SUPPORT]: 'Support',
  [ROUTE.PROFILE]: 'Profile',
} as unknown as Record<ROUTE_KEY, string>;
