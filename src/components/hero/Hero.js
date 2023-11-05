import hero from "./assets/hero.jpg"
import "./Hero.css"

export default function Hero() {
    return (
        <div id="hero_holder">
            <div id="hero_imageHolder">
                <img id="hero_image" src={hero} alt="hero" />
            </div>
            <div id="hero_textHolder">
            <div id="hero_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit lectus non hendrerit bibendum.
                Nulla molestie aliquam erat eget tempor. Donec sed facilisis turpis. Mauris gravida congue arcu, at tincidunt justo ultricies eu.
                Nunc at leo et felis congue condimentum. Maecenas interdum erat ac gravida ultrices. Quisque vel egestas sapien.
                Aliquam mollis lacinia erat, ac volutpat risus posuere non. Etiam a urna nisi. Donec sit amet hendrerit massa.S
                Nunc mattis, metus egestas ultricies hendrerit, purus nunc aliquet justo, at vestibulum nibh neque at diam.</div>
            </div>
        </div>
    )
}