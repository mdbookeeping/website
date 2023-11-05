import { Link } from 'react-router-dom'

import './Footer.css'
import xero from './assets/xero.png'


export default function Footer() {
    return (
        <div id='footer_holder'>
            <div id='footer_links'>
                <div className='footer_link'><Link to="/">Home</Link></div>
                <div className='footer_link'><Link to="/">Contact Us</Link></div>
            </div>
            <img id='footer_xero' src={xero} alt="xero certification"/>
        </div>
    )
}