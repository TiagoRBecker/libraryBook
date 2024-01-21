"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import CartProvider from '../Context/index'
import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })
import {SessionProvider } from "next-auth/react"


export default function RootLayout({ children }) {
  return (
  
  
    <html lang="en">
      <SessionProvider>
      <CartProvider>
    
      <body className={inter.className}>
      <Providers>{children}</Providers>
        
        </body>
      </CartProvider>
      </SessionProvider>
    </html>
    
   
  )
}
