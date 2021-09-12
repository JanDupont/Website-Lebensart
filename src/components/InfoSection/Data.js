export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Herzlich Willkommen',
    headline: 'Bei uns finden Sie für jeden Anlass das passende Geschenk.',
    description: ['Spirituosen, Liköre, Wein, Essige, Öle, Feinkost, Dips, Gewürzmischungen, Pasta, Pesto, Fruchtaufstriche, Tee, Pralinen, Schokoladen, Deko, individuelle Präsentkörbe und vieles mehr...',
        <br />,
        <br />,
        'Am 1.7.2008 haben wir, Silvia und Martin Dupont, das 1. Feinkost-Deko-Geschenke-Geschäft in Hermeskeil, Rosenweg 12, eröffnet.'],
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/undraw_Gift_box_re_vau4.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Vor Ort',
    headline: 'DHL-Paketshop',
    description: ['-Pakete, Päckchen, Retouren abgeben.',
        <br />,
        '-Briefmarken, Paketmarken kaufen.',
        <br />,
        '-Paket/ Retouren label drucken',
        <br />,
        <br />,
        '-Pakete zu uns senden lassen:',
        <br />,
        '1) auf ', <a href="https://www.dhl.de/de/privatkunden.html" target="_blank" rel="noopener noreferrer">www.dhl.de/de/privatkunden</a>, ' registrieren',
        <br />,
        '2) Straßen Name: 422 LebensArt Hermeskeil'
    ],
    buttonLabel: 'Lern More',
    imgStart: true,
    //img: require('../../images/undraw_deliveries_131a.svg').default,
    img: require('../../images/dhl_paketshop.jpeg').default,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjNews = {
    id: 'news',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'News',
    headline: 'Neues',
    description: [
        '❗Ab', <strong style={{color: '#CC1010'}}> Dienstag, </strong>, 'den 14.09.2021, wieder', <strong style={{color: '#CC1010'}}> geöffnet❗</strong>, <br/>,<br/>,
    ],
    imgStart: true,
    mobileImgStart: true,
    img: require('../../images/LebensArt-Hermeskeil_Herbst_2.jpg').default,
    alt: 'Bild über Neuigkeiten',
    dark: true,
    primary: false,
    darkText: false
};