import type { Placement } from '@floating-ui/react-dom';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { useDisclosure } from '@mantine/hooks';

interface Props {
  placement?: Placement;
}

const usePopover = (props?: Props) => {
  const [isOpen, { open, close, toggle }] = useDisclosure(false);

  const { refs, floatingStyles } = useFloating({
    placement: props?.placement ?? 'bottom-start',
    open: isOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  return [isOpen, floatingStyles, refs, { open, close, toggle }] as const;
};

export default usePopover;
