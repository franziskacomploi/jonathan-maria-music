import Image from 'next/image'
import React from 'react'
import profileNiki from '../public/assets/profile-niki.JPG'
import hero from '../content/hero.json'

const Hero = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <Image
        width={300}
        height={300}
        src={profileNiki}
        alt="niki-profile-image"
        className="rounded-full"
      />
      <h1 className="text-2xl font-light mt-4">{hero.headline}</h1>
      <h2 className="font-light my-2">{hero.subheadline}</h2>
    </div>
  )
}

export default Hero
