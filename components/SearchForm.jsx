"use client"

import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchForm = () => {
  const [search , setSearch ]  =  useState('')
  const router = useRouter()
  
  const params =  useSearchParams()
  useEffect(() => {
    console.log(params.toString())
    setSearch("")
  
    
  }, [params.get("categorie")])
  
  useEffect(() => {
    
    const bounce = setTimeout(() => {
      const newurl = new URLSearchParams(params)

      newurl.set("search",search)
      if( search.length > 0 ) router.push(`?${newurl.toString()}`)
      

    },900)
return ()=> clearTimeout(bounce)
}, [search])



  return (
    <form className=' -translate-y-3 w-full max-w-[700px] flex items-center justify-center'>
            <label htmlFor="" className='max-md:w-[80%] bg-black-400 rounded-lg px-4 w-full flex'> 

                <Image src={`/magnifying-glass.svg`} height={40} width={40 } alt='search logo'/>
                <Input placeholder="search...." value={search} onChange={e=>setSearch(e.target.value)} className=" base-regular bg-black-400 border-0 py-10 max-sm:py-6   !ring-0  !ring-offset-0" />
            </label>

    </form>
  )
}

export default SearchForm