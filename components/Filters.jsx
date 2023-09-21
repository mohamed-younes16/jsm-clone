"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Filters = () => {
    const router = useRouter()
    const serchParams = useSearchParams()
    const filterslist = ["All","Next 13","Frontend","Backend","Fullstack",]
  return (
    <div className={` mt-10  flex gap-6  
    max-w-[600px]  items-center w-full overflow-x-auto`}>
        {filterslist.map(e=>(
            <button key={e} onClick={()=>{
                router.push(`?categorie=${e}`)
            }}
            className={`${e == serchParams.get("categorie") ? "gradient_blue-purple": "" }
             text-xl whitespace-nowrap  p-3 rounded-xl hover hovertext-blue-600 transition`}>{e} </button>
        ))}
    </div>
  )
}

export default Filters