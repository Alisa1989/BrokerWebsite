import React from 'react';
import './Footer.css';
import {faPinterest, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer>
            <div className="footer-content">
            <p>
            4120 Douglas Blvd. #306-275 <br/>
Granite Bay, CA 95746
            </p>
            <div className='footer-icons'>
                <a href="https://www.facebook.com/JonHesseBroker">
                <FontAwesomeIcon icon={faFacebookSquare} color="white"/>
                </a>
                <a href="http://www.pinterest.com/jonhessebroker/">
                <FontAwesomeIcon icon={faPinterest} color="white"/>
                </a>
            </div>
            </div>
        </footer>
    )
}

export default Footer;