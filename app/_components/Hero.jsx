import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center flex-col justify-center pt-14 pb-7'>
        <h2 className='font-bold text-[26px] text-center capitalize'>Trusted <span className='text-primary'>professionals</span> for every<br></br>Home need.</h2>
        <h2 className='text-sm text-gray-400 capitalize'>Get started with your service search.</h2>
        <div className='mt-4 flex gap-4 items-center'>
            <Input placeholder='Search' className="rounded-full md:w-[350px]"/>
            <Button className="rounded-full h-[45px]">
                <Search className='h-4 w-4'/>
            </Button>
        </div>
    </div>
  )
}

export default Hero
