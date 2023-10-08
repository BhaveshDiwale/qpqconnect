import { Nunito } from 'next/font/google'

import './globals.css'

export const metadata = {
  title: 'QPQ Connect',
  description: 'QPQ Connect',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({ children }) {
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
