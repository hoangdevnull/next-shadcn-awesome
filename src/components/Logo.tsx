import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface Props extends Omit<ImageProps, 'alt' | 'src'> {}

const Logo = (props: Props) => {
  return <Image {...props} alt="logo" src="/images/logo.svg" width={150} height={150} />;
};

export default Logo;
