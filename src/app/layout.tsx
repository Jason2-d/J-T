// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/guest-components/landingpage/navbar';
// import Footer from '../components/landingpage/footer'
// import Navbar from '../components/landingpage/navbar'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vefristay',
  description:
    'Discover the perfect accommodations for your next trip with our hospitality platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="">
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  );
}
