import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface Props extends Omit<ImageProps, 'alt' | 'src'> {}

const Logo = (props: Props) => {
  return <Image width={32} height={32} {...props} priority alt="logo" src="/images/logo.svg" />;
};

export default Logo;
