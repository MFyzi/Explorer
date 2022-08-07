
import Slider from './slider'
import React from 'react'
import './Hero_style.css'
import productData from '../../data/sliderData'
import { useState } from 'react'

function Hero() {

  const middle=Math.floor(productData.length/2+1)
  const totalSlide =productData.length
  const array = []

  for (let i=0;i<productData.length;i++){
     array[i]=i+1
  }

  const [arraySlideNo,setArraySlideNo] =useState(array)
  
  const slide = productData.map(item=>
  {
    let n=arraySlideNo[item.id-1]
    
    let z=0
      if(n<middle){
          z=middle-n
      }
      else if(n>middle){
          z=n-middle
      }
      else z=0

    console.log(n,z)
    return(
      <Slider 
      key ={item.id}
      item={item}
      bgStyle={
        {
        zIndex :n === middle ? n : n-2 ,
        transform:`${n<middle ? `translate(${-z*50}%,0) rotateX(30deg)`: n>middle ? `translate(${z*50}%,0) rotateX(-30deg)` : 'translate(0,0)'}`,
        opacity:n === middle ? "1" : `${1-z*.8}` ,
        transition: n===arraySlideNo[0] + n===arraySlideNo[totalSlide-1] ? "": "all 1s ease-in-out",
        }
      }
      />)
  })

  let tempArray =[]
  console.log(tempArray)

  const changeRight = () => {
    console.log(arraySlideNo)
    for(let j=0;j<totalSlide;j++){
       tempArray[j] = j === totalSlide-1 ? arraySlideNo[0] : arraySlideNo[j+1]
    }
    setArraySlideNo(tempArray)
  }
    
  const changeleft = () => {
    console.log(arraySlideNo)
    for(let j=0;j<totalSlide;j++){
       tempArray[j] = j === 0 ? arraySlideNo[totalSlide-1] : arraySlideNo[j-1]
    }
    setArraySlideNo(tempArray)
  }


  return (
        <div className="containers">
          {slide}
          <button className='arrow_btn fa-solid fa-angles-right' style={{zIndex:"10"}}onClick={changeRight}></button>
          <button className='arrow_btn fa-solid fa-angles-left' onClick={changeleft} style={{zIndex:"10"}}></button>
        </div>    
  )
}

export default Hero