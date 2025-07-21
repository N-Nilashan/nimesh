// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Nimesh Portfolio',
  description: 'Fast, animated websites that convert.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
