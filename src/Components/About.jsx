import React from 'react'
import '../Styles/About.css'
import {motion,useScroll,useTransform} from 'framer-motion';
import { useRef } from 'react';
const Cards = [
    {
        Id : 1,
        Title : 'Chatbots',
        Content : 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
    },
    {
        Id : 2,
        Title : 'Knowledgebase',
        Content : 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    },
    {
        Id : 3,
        Title : 'Education',
        Content : 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    },
]
export default function About() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        { 
        target : ref,
        offset : ["0 1", "1.1 1"]
        // offset : ["0 1", Laptop ? "1.5 1" : "0.8 1"]
        }); 
  return (
    <>
    <motion.div 
    ref={ref}
    style={{
        opacity : scrollYProgress
    }}
    transition={{duration : 3}}
    className="about-container">
        <div className="top-about" id='About'>
            <span className='top-line'>What is GPT-3</span>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>

        <div className="bottom-about">
        <span className='gradient-1'>The possibilities are beyond</span>
        <span className='gradient-1'>your imagination</span>
        <div className="bottom-card">
        {Cards.map((ele) => {
            return(
                <>
                <div className="card" id={ele.Id}>
                    <span className='top-line'>{ele.Title}</span>
                    <p>{ele.Content}</p>
                </div>
                </>
            )
        })}
        </div>
        </div>
    </motion.div>
    </>
  )
}
