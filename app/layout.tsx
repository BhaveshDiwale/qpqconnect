import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/ClientOnly';
import Footer from './components/Footer';

export const metadata = {
  title: 'QPQ Connect',
  description: 'QPQ Connect',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
        {/* <ToasterProvider /> */}
        {/* <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal /> */}
        {/* <Navbar
          // currentUser={currentUser}
          /> */}
        {/* </ClientOnly> */}
        <div className="">
          {children}
        </div>
      </body>
    </html>
  )
}
