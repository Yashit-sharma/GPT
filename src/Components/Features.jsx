import React from 'react'
import '../Styles/Features.css'
import {motion,useScroll} from 'framer-motion'
import { useRef } from 'react'
const Items = [
    {
        Id : 1,
        Label : 'Improving end distrusts instantly ',
        Content : 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    },
    {
        Id : 2,
        Label : 'Become the tended active',
        Content : 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
    },
    {
        Id : 3,
        Label : 'Message or am nothing',
        Content : 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
        Id : 4,
        Label : 'Really boy law county',
        Content : 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
    },
]
export default function Features() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        { 
        target : ref,
        offset : ["0 1", "1.1 1"]
        }); 
  return (
    <>
    <div className="feature-cont">
        <div className="left-feat" id='Features'>
            <p className='gradient-1 feature-text'>The Future is Now and </p>
            <p className='gradient-1 feature-text'>You Just Need To Realize It.</p> 
            <p className='gradient-1 feature-text'>Step into Future Today </p>
            <p className='gradient-1 feature-text'>& Make it Happen.</p>
        </div>
        <div className="right-feat">
            {Items.map((ele,i)=>{
                return(
                    <>
                    <motion.div 
                    whileInView={{opacity : [0,1]}}
                    transition={{duration:1,delay : i/4}}
                    viewport={{once : true}}
                    ref={ref}
                    className="feat-row" id={ele.Id}>
                        <span className='top-line'>{ele.Label}</span>
                        <p>{ele.Content}</p>
                    </motion.div>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}
