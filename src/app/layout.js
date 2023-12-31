
import '../styles/globals.css'


export const metadata = {
  title: 'Products',
  description: 'Products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-center flex-col items-center'>{children}</body>
    </html>
  )
}
