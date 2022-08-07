import React, { useRef } from 'react'
import { useState } from 'react'
import useFetch from '../../hooks/useRef'
import './episode.css'

function Episode() {
    const {fetch} = useFetch(6,'mountain','snow')
    const [sourse,setSourse]=useState('')
    const [first, setfirst] = useState('')
    const videoRef = useRef('')

    const episodeSection = fetch.map((item,index)=>{
        return(
            <video 
            ref={videoRef}
            className='episode' 
            src={`${item.videos.medium.url}`}
            onClick ={()=>setSourse(item.videos.medium.url)}
            onLoad ={()=>setSourse(item.videos.medium.url)}
            style={{cursor:'pointer'}}
            >
            </video>
        )
        // console.log(sourse)
    })
  return (
    <section className='episode_container'>
        <div className="focusing_episode_container">
            <video src={sourse} className="focusing_epiosde" controls></video>
            {/* <video src={first} className="focusing_epiosde" controls></video> */}
        </div>
        <div className="episode_info">
            <h4 className="episode_title">Title</h4>
            <p className="episode_discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui, dolorum quibusdam corporis asperiores at excepturi facere veritatis deleniti saepe recusandae voluptatem quasi. Porro, laborum veniam. Soluta mollitia provident at.</p>
        </div>
        <div className="episodes_carousel">
            <h3 className="episodes_carousel_header">Episodes</h3>
            <div className="episodes_list_container">
               {episodeSection}
            </div>
        </div>

    </section>
  )
}

export default Episode