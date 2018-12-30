import fishImg from './images/hero1.jpg';
import hero2Img from './images/hero2.jpg';
import hero3Img from './images/hero3.jpg'
import hero4Img from './images/hero4.jpg'
import hero5Img from './images/hero5.jpg'
import hero6Img from './images/hero6.jpg'
import hero7Img from './images/hero7.jpg'
import hero8Img from './images/hero8.jpg'
import hero9Img from './images/hero9.jpg'
import hero10Img from './images/hero10.jpg'
import hero11Img from './images/hero11.jpg'
import hero12Img from './images/hero12.jpg'
import hero13Img from './images/hero13.jpg'
import hero14Img from './images/hero14.jpg'
import hero15Img from './images/hero15.jpg'
import hero16Img from './images/hero16.jpg'
import hero17Img from './images/hero17.jpg'

const color1 = "#004C7F";
const color2 = '#50B9FF';
const color3 = '#0098FF';
const color4 = '#004C7F';
const color5 = '#007ACC';

export const styling = theme => ({
    root : {
        flexGrow : 1,
    },
    navBar : {
        background : 'black',
        color :'white',
    },
    button : {
        background: `${color5}`,
        color : 'white',
        border: 'solid 1px #007ACC',
        '&:hover': {
            background: "white",
            color: `${color5}`,
            border : 'solid 1px #007ACC',
        },
    },
    parallaxItem : {
        width : '80px',
    },
    parallax: {
        backgroundImage: `url(${hero13Img})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '860px',
        maxHeight: '860px',
        maxWidth: '100vw !immportant',
    },
    logo : {
        width : '50px',
        height : '50px',
        margin : '5px',
        display: 'flex',
        alignSelf : 'center',
    },
    hero: {
        color : 'white',
        alignSelf : 'center',
        position: 'absolute',
        maxWidth: '1200px',
        maxHeight: '350px',
        height: '350px',
        top: "12%",
        left: 0,
        right: 0,
        margin: 'auto',
    },
    wow : {
        color : 'yellow',
        fontSize : '55px',
    },
    headerShadow : {
        textShadow : '2px 2px 2px black',
        fontFamily: 'Roboto',
        fontSize : '65px',
        letterSpacing : '2px',
        fontWeight: `bold`,
        textTransform: `uppercase`,
    },
    subHeader : {
        textShadow: '2px 2px 2px black',
        fontFamily: 'Roboto',
        fontSize: '36px',

    },
    heroDescription : {
        fontWeight : '100',
        lineHeight : '1.5',
        fontSize : '22px',
        textShadow: '2px 2px 2px black',
        fontFamily: 'Roboto',
        letterSpacing : '2px',
    },
    navLogo : {
        display: 'flex',
        fontWeight : '100',
        alignSelf: 'center',

    },
    navItem : {
        float : 'right',
        display : 'flex',
        alignSelf : 'center',
        flexDirection : 'row-reverse',
    },
    topNavButton : {
        height : '36px',
        paddingLeft : '15px',
    },
    homepageButton : {
        color : 'white',
    },
    startContainer : {
        position : 'relative',
        textAlign : 'center',
        minHeight : '660px',
    },
    parallaxOuter : {
        position: 'relative',
        zIndex: '2',
        left : 0,
        right : 0,
        top : 0,
    },
    aboutImg : {
        width : '400px',
    },
    about : {
        fontSize : '18px',
        alignSelf : 'center',
        lineHeight : '1.2',
        fontStyle : 'italic',
    },
    featuredItems : {
        textAlign : 'center',
    },
    featuredSpecs : {
        margin : 'auto',
        fontSize : '22px',
    },
    featuredContainer : {
        minHeight: '600px',
        maxHeight: '600px',
        display: 'grid',
        alignSelf: 'center',
    },
    featureItemContainer : {

        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        minHeight : '400px',
        verticalAlign : 'center',
    },
    allProductsContainer : {
        color : 'white',
        backgroundImage: `url(${hero15Img})`,
        backgroundSize: 'cover',
        backgroundPosition : 'center',
        textAlign: 'center',
        minHeight : '400px',
        display: 'flex',
        alignItems : 'center',
    },
    ratingHeader: {
        display: 'grid',
        textAlign : 'left',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    reviewHeader : {
        display : 'grid',
        alignSelf : 'center',
        textAlign : 'center',
        fontSize : '25px',
    },
    ratingHeaderText : {
        fontSize : '30px',
        fontWeight : 'bold',
    },
    ratingContent : {
        display: 'grid',
        textAlign: 'center',
    },
    ratingLabel: {
        display: 'block',
        minHeight: '40px',
        marginTop: '20px',
        marginBottom: '20px',
        overflow: 'hidden',
        width: '100%',
    },
    starIcon : {
        color: `${color5}`,
    },
    ratingContainer : {
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        minHeight: '400px',
        verticalAlign: 'middle',
        margin: 'auto',
        display : 'flex',
        alignItems : 'center',
    },

    listContainer : {
        listStyle : 'none',
    },
    listDescription : {
        padding : '5px 0 5px 0',
    },
    serviceHeader : {
        fontSize : '36px',
        color: `#566d7e`,
        lineHeight : '1.5',
    },
    serviceContainer : {
        background: `#dbf3fa`,
        textAlign : 'center',
    },
    serviceItemContainer : {
        padding : '0 25px 25px 25px',

    },
    servicePaper : {
        minHeight : '200px',
        background: `#dbf3fa`,
        color : `#566d7e`,
        '&:hover': {
            color: `#5e767e`,
            background: `#78CBE2`,
        },
    },
    serviceItemHeader : {
        lineHeight: '2.5',
        fontSize: '25px',
        textDecoration : 'underline',
    },
    serviceItem : {
        lineHeight : '1.5',
        fontSize : '22px',
        padding : '0 10px 0 10px',
    },
    footerContainer : {
        borderTop: '1px solid black',
        background: 'black',
        color : 'white',
    },
    footerList : {
        listStyle : 'none',
    },
    footerLabel : {
        verticalAlign : 'middle',
    },
    footerIcon : {
        verticalAlign : 'middle',
        color : 'white',
    },
    productDetailsButton : {
        display : 'flex',
        float : 'right',
    },
    productPrimaryImage : {
        height : '450px !important',
        width : 'auto',
    },
    productSecondaryImages : {
        height : '80px',
        width : 'auto',
    },
    socialIcon : {
        height : '45px',
        width : '45px',
        border : '2px solid transparent',
        margin : '5px',
        '&:hover': {
            border: 'solid 2px #007ACC',
            cursor : 'pointer',
        },
    },
    productReviewContainer : {
        minHeight : '350px',
        display : 'flex',
        alignItems : 'center',
    }
});