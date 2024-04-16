import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaFacebook, FaMailBulk } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer" style={{backgroundColor:"#282c34"}}>
            <div className="footer-container">
                <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                    <div>
                        <p>Porto</p>
                    </div>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                    <div>
                        <p>araujo.henrique311@gmail.com</p>
                    </div>
                </div>
                </div>
                <div className="right">
                <div className="social">
                    <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
