import React from 'react'
import { useCatImage } from '../Hooks/useCatImage'
export const Otro = () => {
  const {imageUrl} = useCatImage({fact: 'cat'})
    return (
    <>
    {imageUrl && <img  className='w-[400px] mx-auto h-[600px] object-cover' src={imageUrl}></img>}
    </>
  )
}
