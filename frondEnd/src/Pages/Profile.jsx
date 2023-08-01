import React from 'react'

const Profile = () => {
  return (
    <div className='w-full h-full bg-white flex items-center justify-center'>
        <div className="container mx-auto">
            <div className='border p-10 rounded w-full h-1/3 flex gap-10'>
                <div className='flex flex-col items-center'>
                <h1>Profile</h1>
                  <img src={require('../Assets/Propic.png')} alt="" className='cursor-pointer w-52 h-52 object-cover' />
                </div>
                <div className='flex flex-col items-start justify-start'>
                <h1>Details</h1>
                <span>Name : <span>Manu M</span></span> 
                <span>Place : <span>Neyyattinkara</span></span> 
                <span>Name : <span>Manu M</span></span> 
                <input type="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile