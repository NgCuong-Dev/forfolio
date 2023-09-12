'use client'
import React from 'react'
import data from './DataProject'
import { Card } from 'antd';
const { Meta } = Card;
const Project = () => {

  return (
    <div className='text-center'>
        <h1 className='text-3xl mt-10 font-monog hover:text-[#5DACD5] cursor-pointer'>
            My Project
        </h1>
        <div className='mx-auto rounded-md mt-10 grid grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((item,index)=>{
            return <Card key={index}
            hoverable
            cover={<img style={{objectFit:"cover"}}  alt="example" src={item.image}/>}
          >
            <h1 className='font-medium text-3xl pb-3'>{item.title}</h1>
            <Meta className='font-medium text-xl'  description={item.mieuta} />
            <p className='font-medium text-xl pt-2'>Số Lượng: {item.quantity}</p>
            <p className='font-bold text-xl'>Link Gitlab: <a href={item.link}>{item.link}</a></p>
            <p className='font-medium text-xl'>Vị Trí:{item.position}</p>
          </Card>
        })}
        </div>
       
    </div>
  )
}

export default Project