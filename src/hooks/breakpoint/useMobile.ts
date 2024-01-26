import { useMediaQuery } from '@mantine/hooks';

const useMobile = () => {
  return useMediaQuery('(max-width: 64rem)');
};

export default useMobile;
