import React from 'react'
import '../Styles/Blog.css'
import Item1 from '../Assets/blog01.png'
import Item2 from '../Assets/blog02.png'
import Item3 from '../Assets/blog03.png'
import Item4 from '../Assets/blog04.png'
import {motion} from 'framer-motion'
const Items = [
    {
        Id :1,
        Img : Item1,
        Date : 'Sep 26, 2021',
        Content : 'GPT-3 and Open  AI is the future. Let us exlore how it is?'

    },
    {
        Id :2,
        Img : Item2,
        Date : 'Sep 26, 2021',
        Content : 'GPT-3 and Open  AI is the future. Let us exlore how it is?'

    },
    {
        Id :3,
        Img : Item3,
        Date : 'Sep 26, 2021',
        Content : 'GPT-3 and Open  AI is the future. Let us exlore how it is?'

    },
    {
        Id :4,
        Img : Item4,
        Date : 'Sep 26, 2021',
        Content : 'GPT-3 and Open  AI is the future. Let us exlore how it is?'

    },
]
export default function Blog() {
  return (
    <>
    <div className="blog-cont">
        <p className='gradient-1 blog-heading' id='Blog'>A lot is happening,</p>
        <p className='gradient-1 blog-heading'>We are blogging about it.</p>
        <div className="blogs">
            {Items.map((ele)=>{
                return(
                    <>
                    <motion.div 
                    whileHover={{scale : 0.9}}
                    transition={{
                        // scale : 1.5
                        scale : {
                            duration : 0.25
                        }
                    }}
                    className="blog-card" key={ele.Id}>
                        <div className="blog-img">
                            <img src={ele.Img} alt="" height="100%" width="100%"/>
                        </div>
                        <div className="content">
                            <span>{ele.Date}</span>
                            <p>{ele.Content}</p>
                            <p>Read More</p>
                        </div>
                    </motion.div>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}
