import React from 'react'
import '../Styles/Hero.css'
import AI from '../Assets/ai.png'
import google from '../Assets/google.png'
import slack from '../Assets/slack.png'
import atlassian from '../Assets/atlassian.png'
import dropbox from '../Assets/dropbox.png'
import {motion} from 'framer-motion'
const bool = window.innerWidth > 600;
const Icons = [
    {
        Id : 1,
        src : google
    },
    {
        Id : 2,
        src : slack
    },
    {
        Id : 3,
        src : atlassian
    },
    {
        Id : 4,
        src : dropbox
    },
]
export default function Hero() {
  return (
    <>
    <div className="hero-container">
        <div className="wrapper" id='Home'>
        <div className="hero-left">
            <p className='gradient-1'>Let's Build Something</p>
            <p className='gradient-1'>amazing with GPT-3</p>
            <p className='gradient-1'>OpenAI</p>
            <p className='blue'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <motion.div 
        whileInView={{
            y:bool ? ['-40px','40px','-40px'] : [],
            rotateY : [0,360]
        }}
        transition={{
            y : {
                duration:10,repeat:Infinity,ease: "linear"
            },
            rotateY : {
                duration : 36,repeat:Infinity,ease:'linear'
            }
        }}
        className="hero-right">
            <img src={AI} alt="" />
        </motion.div>
        </div>

        <div className="hero-icons">
            {Icons.map((ele) =>{
                return(
                    <>
                    <img className='icon-img' src={ele.src} alt=""/>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}
