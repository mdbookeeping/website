import './Footer.css'
import xero from './assets/xero.png'
import logo from './assets/logo.jpeg'


export default function Footer() {
    return (
        <div id='footer_holder'>
            <div id='footer_logoHolder'>
                <img src={logo} alt="MD Bookkeeping Logo" id='footer_logo'/>
            </div>
            <img id='footer_xero' src={xero} alt="xero certification"/>
        </div>
    )
}