import { useMediaQuery } from '@mantine/hooks';

const useTablet = () => {
  return useMediaQuery('(max-width: 90rem)');
};

export default useTablet;
