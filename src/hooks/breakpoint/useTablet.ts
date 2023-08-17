import { useMediaQuery } from '@mantine/hooks';

const useTablet = () => {
  return useMediaQuery('(max-width: 62rem)');
};

export default useTablet;
