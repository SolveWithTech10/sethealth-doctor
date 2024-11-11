import { Loader } from 'lucide-react'
import React from 'react'

const ButtonLoader = ({loadingText}:{loadingText?:string}) => {
  return (
    <>
    <Loader className='h-5 w-5 animate-spin mr-1'/>
    <p>{loadingText || "Loading"}...</p>
    </>
  )
}

export default ButtonLoader