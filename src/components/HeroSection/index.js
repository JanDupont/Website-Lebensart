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
                <ImgHeroKlein src={Bild_Ostern} />
                {//<HeroP style={{background: "rgba(219, 124, 116, 0.6)", padding: "15px", borderRadius: "10px"}}>
                 //</HeroP>
                }
                <br/>
                <HeroH1>LebensArt</HeroH1>
                <HeroP>
                    Feinkost, Deko & Geschenke
                    <br/>
                    geschmackvoll schenken & genießen
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
