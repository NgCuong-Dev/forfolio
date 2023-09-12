import React from 'react'
import Image from 'next/image'
const Carousel = () => {
  return (
    <div className='mx-auto mt-10'>
        <div className='carousel grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full '>
            <Image className='picture object-cover rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' height={200} width={300} src="/img/carousel.jpg"/>
            <Image className='picture object-cover rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' height={200} width={300} src="/img/carousel_2.jpg" />
            <Image className='picture object-cover rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' height={200}width={300} src="/img/carousel_3.jpg" />
            <Image className='picture object-cover rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' height={200}width={300} src="/img/carousel_4.jpg"/>
        </div>
        <div></div>
    </div>
  )
}

export default Carousel