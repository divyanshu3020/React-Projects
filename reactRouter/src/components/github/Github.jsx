// import React, { useEffect, useState } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data =useLoaderData()

    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Divyanshusingh")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])

  return (
    <>
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github followers : {data.followers}</div>
    <img src={data.avatar_url} alt="Git picture" />
    </>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const res = await fetch('https://api.github.com/users/Divyanshusingh')
  return res.json()
}