import { useRouter } from 'next/router';

import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer>
        <Separator />
        <div className="py-6 text-sm">
          <p className="text-center text-sm">Copyright © 2023 - FanChain. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
