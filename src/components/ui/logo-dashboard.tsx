import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface Props extends Omit<ImageProps, 'alt' | 'src'> {}

const Logo = (props: Props) => {
  return <Image width={46} height={46} {...props} priority alt="logo" src="/android-chrome-192x192.png" />;
};

export default Logo;
