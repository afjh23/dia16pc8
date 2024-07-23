import React from 'react'
import { useState,useEffect } from 'react'
export function useCatImage({ fact }){
    console.log(fact)
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
      if(!fact) return
      const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)
  
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
        .then(res => res.json())
        .then(response => {
          console.log(response)  
          const { _id } = response
            setImageUrl(`https://cataas.com/cat/${_id}/says/${threeFirstWords}?font=Impact&fontSize=30&fontColor=%23000&fontBackground=none&position=center
             `)
          })
  
    }, [fact])
    console.log(imageUrl)
    return {imageUrl}
  }//{imageUrl:'https://.../}
  