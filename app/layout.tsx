import { Nunito } from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/navbar"

export const metadata = {
  title: 'AirBnb',
  description: 'My Airbnb Clone',
}

const font = Nunito ({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
