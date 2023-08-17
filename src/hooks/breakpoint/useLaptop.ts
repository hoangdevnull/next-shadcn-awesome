import { useMediaQuery } from '@mantine/hooks';

const useLaptop = () => {
  return useMediaQuery('(max-width: 90em)');
};

export default useLaptop;
