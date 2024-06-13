'use client'
import BusinessList from '@/app/_components/BusinessList'
import Api from '@/app/_services/Api'
import React, { useEffect, useState } from 'react'

const ServicesCategory = ({params}) => {

  const [businessList, setBusinessList] = useState([])

  useEffect(()=>{
    console.log(params)
    params&&getBusinessList()
  },[params])


  const getBusinessList = () => {
    Api.getBusinessByCategory(params.category)
    .then(resp=>{
      setBusinessList(resp?.businessLists)
    })
  }

  return (
    <div className='ml-10'>
      <BusinessList title={params.category} businessList={businessList}/>
    </div>
  )
}

export default ServicesCategory
