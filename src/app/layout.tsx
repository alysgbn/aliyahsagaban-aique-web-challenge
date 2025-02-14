import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

//Import a local font file
const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sagaban AIQUE Web Challenge',
  description: 'Build and Launch Reliable and Market-Ready Products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/avatar-like.png" />
      </head>
      <body className={`${inter.variable} `}>{children}</body>
    </html>
  );
}
