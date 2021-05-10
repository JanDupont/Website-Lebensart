import React, { useState } from 'react';
import Bild from '../../images/header.jpeg';
import Bild_Ostern from '../../images/Lebensart_Hero_Ostern.jpg'
import { 
    HeroContainer,
    HeroBg,
    ImgBg,
    ImgHeroKlein,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src={Bild} />
            </HeroBg>
            <HeroContent>
                {//<HeroP style={{background: "rgba(219, 124, 116, 0.6)", padding: "15px", borderRadius: "10px"}}>
                 //</HeroP>
                }
                <br/>
                <HeroH1>LebensArt</HeroH1>
                <HeroP>
                    Feinkost, Deko & Geschenke
                    <br/>
                    geschmackvoll schenken & genießen
                    <br/>
                    <br/>
                    Mittwoch, 12.5.2021 <br/>
                    geöffnet<br/>
                    10:00-11:30 & 15:00-19:00 Uhr
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
