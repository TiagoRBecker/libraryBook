"use client"
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import CartProvider from '../Context/index'
const inter = Inter({ subsets: ['latin'] })
import {SessionProvider } from "next-auth/react"
import Script from 'next/script'


export default function RootLayout({ children }) {
  return (
  
  
    <html lang="pt-br">
      <SessionProvider>
      <CartProvider>
    
      <body >
        
      <Providers>{children}</Providers>
              
  
      <Script strategy="beforeInteractive" src="/js/libs/jquery.min.js" />
<Script strategy="beforeInteractive" src="/js/libs/html2canvas.min.js" />
<Script strategy="beforeInteractive" src="/js/libs/three.min.js" />
<Script strategy="beforeInteractive" src="/js/libs/pdf.min.js" />
<Script strategy="beforeInteractive" src="/js/pdf.worker.js" />
<Script strategy="beforeInteractive" src="/js/dist/3dflipbook.js" />
        </body>
      </CartProvider>
      </SessionProvider>
   
    </html>
    
   
  )
}
