import type { IPaging } from '@/types';

export const env = {
  isProduction: process.env.NODE_ENV === 'production',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? 'https://fanchain-api-dev.var-meta.com/graphql',
  GOOGLE_CLIENT_ID:
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID! ??
    '874390421795-dmc0h34vr2l846hmbklk43jf2f9o16rs.apps.googleusercontent.com',
};

export const useTestnet = process.env.NEXT_PUBLIC_USE_TESTNET! ? process.env.NEXT_PUBLIC_USE_TESTNET === 'true' : true;

export const WALLET_CONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID! ?? '760583d37921c81df64cef612e0d5532';

export const COLLECTION_CONTROLLER_BSC_ADDRESS =
  process.env.NEXT_PUBLIC_COLLECTION_CONTROLLER_BSC_ADDRESS! ?? '0xe851f4ffD96Bd92428Ed8605dc8DF256b5018034';
export const COLLECTION_CONTROLLER_ETH_ADDRESS =
  process.env.NEXT_PUBLIC_COLLECTION_CONTROLLER_ETH_ADDRESS! ?? '0x6fFe50ad98d734579dC03968374a18074d715bF3';
export const COLLECTION_CONTROLLER_POLYGON_ADDRESS =
  process.env.NEXT_PUBLIC_COLLECTION_CONTROLLER_POLYGON_ADDRESS! ?? '0x4c8248f84C998926c5a0f4EeBbAC6810EA2EFA98';

export const FILE_FORMAT = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg'];

export const allPaging: IPaging = {
  limit: 1000,
  page: 1,
};

export const BLOCK_CONFIRMATION = {
  evm: 10,
  cardano: 20,
};
