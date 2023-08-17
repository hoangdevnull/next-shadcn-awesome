import { Plus_Jakarta_Sans as FontSans, Urbanist as FontSerif } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontSerif = FontSerif({
  subsets: ['latin'],
  variable: '--font-serif',
});
