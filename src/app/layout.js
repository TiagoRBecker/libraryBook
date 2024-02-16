"use client"
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import CartProvider from '../Context/index'
const inter = Inter({ subsets: ['latin'] })
import {SessionProvider } from "next-auth/react"


export default function RootLayout({ children }) {
  return (
  
  
    <html lang="pt-br">
      <SessionProvider>
      <CartProvider>
    
      <body >
      <Providers>{children}</Providers>
        
        </body>
      </CartProvider>
      </SessionProvider>
    </html>
    
   
  )
}
