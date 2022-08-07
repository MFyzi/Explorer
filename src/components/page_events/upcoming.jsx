
import React, { useState } from 'react'
import './upcoming_event.css'
import useFetch from '../../hooks/useRef'

function Upcoming() {

    const{fetch} =useFetch(4,'ocean','life')
    
    const [hoverValue,setHoverValue]=useState('')
    const eventSection = fetch.map(item =>
        {
           return(
            <div  className="upcoming_event_video" >
                 <video 
                 hover = {hoverValue}
                        onMouseEnter={e=>{
                            e.target.play()
                            setHoverValue(`${item.id}`)
                        }}
                        onMouseLeave={e=>{
                            e.target.pause()
                            setHoverValue('')
                        }} 
                        src={`${item.videos.medium.url}`}
                        className={`event_video event_video_${item.id}`} loop muted>        
                </video>
                {hoverValue===`${item.id}` ? <i className="event_video_mention">{`From Pixabay, by ${item.user} `}</i> :""}
            </div>
           )
        }
    )
    
    return (
        <section className='upcoming_events'>
            {eventSection}
        </section>
  )
}

export default Upcoming