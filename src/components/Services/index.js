import React from 'react';
import Icon1 from '../../images/Lebensart_Dupont_brände.jpg';
import Icon2 from '../../images/essig_oel2.jpg';
import Icon3 from '../../images/Lebensart_Dupont_feinkost.jpg';
import Icon4 from '../../images/deko2.jpeg';
import Icon5 from '../../images/schmuck.jpeg';
import Icon6 from '../../images/Lebensart_Dupont_Verpackung.jpg';
import Icon7 from '../../images/gutschein.jpeg';
import Icon8 from '../../images/pralinen2.jpeg';
import Icon9 from '../../images/Lebensart_Dupont_Tischdeko.jpg';
import Icon10 from '../../images/Lebensart_Dupont_Dips.jpg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Sortiment</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Spirituosen, Brände, Liköre</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Feinkost</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Essig & Öl</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon10}/>
                    <ServicesH2>Dips | Gewürzmischungen</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon8}/>
                    <ServicesH2>Pralinen | Schokoladen</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Deko</ServicesH2>
                    <ServicesP>Für Innen und Außen</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon9}/>
                    <ServicesH2>Tischdeko</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Trendschmuck</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon7}/>
                    <ServicesH2>Gutscheine</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Verpackungsservice</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
