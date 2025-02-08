import { groq } from "next-sanity";


export const allProducts = groq `*[type== product ]`
export const four = groq `*[type== product ][0..3]`
