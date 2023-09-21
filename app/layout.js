import NavBar from '@/components/NavBar'
import './globals.css'
import Footer from '@/components/Footer'



export const metadata = {
  title: 'JSM Course platform clone',
  description: 'JS MASTERY CLONE BY MOHAMED YOUNES ',
    other: {
      'theme-color': '#0d1117',
      "color-scheme": "dark only",
      "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
      "twitter:card": "summary_large_image",
      "og:url": "jsmastery.pro",
      "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
      "og:type": "website",
    }
  
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
