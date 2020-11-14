import React from 'react';
import './Nav.css';
import {useEffect, useState} from 'react'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }
            else {
                handleShow(false)
            }
        })
        return ()=> window.removeEventListener('scroll')
        
    }, [])
    return (
        <div className={`nav ${show&&"nav_black"}`}>
            <img src='images/is.jpg' alt="Netflix" className="netflix"></img>
            <img src='images/is.jpg' alt="Netflix" className="avatar"></img>
            
        </div>
    )
}

export default Nav
