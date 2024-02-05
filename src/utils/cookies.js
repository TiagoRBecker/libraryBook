'use server'
 import {randomUUID } from "crypto"
import { cookies } from 'next/headers'
 
export const  createCookies = async(name,) =>{

  cookies().set({
    name: "token",
    value: "ddddddddddddddddddddddddd",
    httpOnly: true,
    path: '/',
    maxAge:10000
  })
}