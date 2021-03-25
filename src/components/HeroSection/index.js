import React, { useState } from 'react';
import Bild from '../../images/header.jpeg';
import { 
    HeroContainer,
    HeroBg,
    ImgBg,
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
                <HeroP style={{background: "rgba(219, 124, 116, 0.6)", padding: "15px", borderRadius: "10px"}}>
                    <strong>Ostern geöffnet!</strong><br/>
                    Mo 29.3 - Do 1.4<br/>
                    10:00 - 11:30 Uhr &<br/>
                    15:00 - 19:00 Uhr<br/><br/>
                    Sa 3.4.21<br/>
                    10:00 - 13:00 Uhr<br/>
                </HeroP>
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
