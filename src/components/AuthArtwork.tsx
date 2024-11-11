import { ArtworkProptype } from '@/types';
import Image from 'next/image';
import React from 'react'

const AuthArtwork: React.FC<ArtworkProptype> = ({
    mainImage,
    title,
    subtitle,
    mainImageAlt,
  }) => {
  return (
        <div className="md:flex w-full flex-1 md:w-[60%] relative bg-gradient-to-br from-blue-400 to-blue-700 h-full items-end justify-end rounded-tl-[30rem]">
          <div className="md:w-[29rem] w-[20rem] absolute -left-[2rem] top-[1rem]">
            <Image src={mainImage} alt={mainImageAlt} className="img-contain" />
          </div>
          <div className="text-white w-2/3 text-center mb-[4rem] hidden md:block">
            <h2 className="text-[3rem] font-bold mb-2">{title}</h2>
            <p className="text-2xl text-pretty leading-8">{subtitle}</p>
          </div>
        </div>
  )
}

export default AuthArtwork