import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Icons } from '@/components/icons';
import { ROUTE } from '@/types';

interface WithAuthProps {}

export default function withAuth<T extends WithAuthProps = WithAuthProps>(Component: React.ComponentType<T>) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();
    const token = {
      accessToken: '',
      refreshToken: '',
      tokenExpired: '',
    };

    useEffect(() => {
      if (token.accessToken && token.refreshToken && token.tokenExpired) return;
      router.replace(ROUTE.LOGIN);
      toast.error('You have to login to perform this action!');
    }, [router, token.accessToken, token.refreshToken, token.tokenExpired]);

    if (!token) {
      return (
        <div className="bg-background fixed inset-0 flex min-h-screen flex-col items-center justify-center gap-2">
          <Icons.spinner size="1.5rem" className={'-ml-4 animate-spin'} />
          <p className="text-lg">LOADING...</p>
        </div>
      );
    }

    return <Component {...(props as T)} />;
  };

  return ComponentWithAuth;
}
