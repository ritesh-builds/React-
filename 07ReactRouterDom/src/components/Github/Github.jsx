import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ritesh-builds')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 text-white p-4 bg-black text-3xl rounded-xl'>
      <div className=''>Github followers: {data.followers}</div>
      <img src={data.avatar_url} alt="Git Picture" className='rounded-3xl m-4' width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ritesh-builds')
    return response.json()
}