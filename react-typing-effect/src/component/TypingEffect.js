import React from 'react'
import Typical from 'react-typical'
import HeroImg from '../assets/img.jpeg'

const TypingEffect = () => {
  return (
    <div className='bg-gray-900 h-screen flex justify-between items-center p-16'>
        <h1 className='text-6xl text-white w-1/2'>
            <Typical
                steps={[
                    'Unlock the Future of Digital Artistry', 2000,
                    'Unlock the Future of Digital Collectibles', 2000,
                    'Unlock the Future of Digital Assets', 2000,
                ]}
                loop={1}
                wrapper='span'
            />
        </h1>
        <img src={HeroImg} className='w-1/3 rounded-lg'/>


    </div>
  )
}

export default TypingEffect