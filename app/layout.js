import NavBar from '@/components/NavBar'
import './globals.css'
import Footer from '@/components/Footer'



export const metadata = {
  title: 'JSM Course platform clone',
  description: 'JS MASTERY CLONE BY MOHAMED YOUNES ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className=' overflow-x-hidden bg-black-100 min-h-screen dark:text-white '>
        <NavBar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
