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
