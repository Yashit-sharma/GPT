import React from 'react'
import '../Styles/Hero.css'
import Music from '../Assets/possibility.png'
import {motion} from 'framer-motion'
let text = 'beyond your imagination'.split(' ');
export default function Hero_2() {
  return (
    <>
    <div className="hero-container">
        <div className="wrapper reverse">
        <div className="hero-left">
            <p className='gradient-1'>The possibilities are</p>
            <p className='gradient-1'>beyond your imagination</p>
            <p className='blue'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <div className="hero-right hero_2-right">
            <img src={Music} alt="" />
        </div>
        </div>
        <div className="banner">
      <p>Register today & start exploring the endless possiblities.</p>
      <button className='black'>Get Started</button>
    </div>
    </div>

    </>
  )
}
