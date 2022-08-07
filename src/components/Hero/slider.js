import React from 'react'
import '../Hero/Hero_style.css'

function Slider(props) {
    const n=props.item.id
  
  return (
      <div 
      className={`slide slide${n}`}
      key={props.item.key}
      style={props.bgStyle}>
        <img className="hero_pic" 
        src={props.item.image} alt="" 
     s   />
    <div className="hero_detail">
            <div className="detail">
                <h2 className="product_title">
                    {props.item.title}
                </h2>
                <p className="product_disc">
                    {props.item.discription}
                </p>
                <div className="hero_detail_buttons">
                    <button className='Join' 
                    style={{backgroundColor:`${props.item.buttonClr}`,
                    color:`${props.item.background}`}}>
                        Join
                    </button>
                    <button className='Details' 
                    style={{border:`${props.item.borderClr}`}}>
                        Details'
                    </button>
                </div>
            </div>
        </div>
     </div>    
  )
}

export default Slider