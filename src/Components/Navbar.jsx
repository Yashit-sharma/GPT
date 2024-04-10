import React from 'react'
import '../Styles/Navbar.css'
export default function Navbar() {
  const scrollToSection = (sectionId, duration) => {
    console.log("Working")
    const targetSection = document.getElementById(sectionId);
    console.log(targetSection)
    if (!targetSection) return;
    const targetPosition = targetSection.offsetTop-70;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };
  return (
    <>
    <div className="nav-container">
    <div className="left-nav">
      <strong style={{fontSize:"18px"}}>GPT</strong>
            <ul className='nav-list'>
                <li onClick={()=>{scrollToSection('Home',800)}}>Home</li>
                <li onClick={()=>{scrollToSection('About',800)}}>What is GPT?</li>
                <li onClick={()=>{scrollToSection('Features',800)}}>Open AI</li>
                <li onClick={()=>{scrollToSection('Blog',800)}}>Case Studies</li>
            </ul>
        </div>
        <div className="right-nav">
            <button className='btn'>Sign In</button>
            <button className='btn-color'>Sign up</button>
        </div>
    </div>
    </>
  )
}
