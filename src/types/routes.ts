export const ROUTE = {
  HOME: '/',
  MY_COLLECTION: '/my-collection',
  COLLECTION_DETAIL: '/collection/detail',
  STUDIO: '/studio',
  COLLECTION: '/collection',
  PRICING: '/pricing',
  LOGIN: '/login',
} as const;

export type ROUTE_KEY = keyof typeof ROUTE;

export type STUDIO_TAB = 'collection' | 'preview' | 'verify' | 'deploy';

export const MAPPING_ROUTE_TITLE: Record<ROUTE_KEY, string> = {
  HOME: 'Home',
  MY_COLLECTION: 'My Collection',
  COLLECTION_DETAIL: 'Collection Detail',
  COLLECTION: '',
  PRICING: '',
  STUDIO: '',
  LOGIN: 'Login',
};
