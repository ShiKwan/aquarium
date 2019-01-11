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
import goal1Img from './images/goal1.jpg'
import goal2Img from './images/goal2.jpg';
import goal3Img from './images/goal3.jpg'
import goal4Img from './images/goal4.jpg'
import goal5Img from './images/goal5.jpg'
import { relative } from 'path';

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
        background: `rgba(0, 0, 0, 0.75)`,
        zIndex :'10',
        color :'white',
        position : 'fixed',
        left : 0,
        top : 0,
        width : '100%',
        [theme.breakpoints.down('sm')]: {
            position: 'initial',
        },
    },
    avatar : {
        background: `${color5}`,
        [theme.breakpoints.down('sm')]: {
            marginRight : '10px',
        },
    },
    hypHome : {
        textDecoration : 'none',
        color : 'white',
        opacity : `1 !important`,
    },
    heroButton : {
        fontSize : '22px',
        background: `white`,
        marginTop: '190px',
        color: '#272727',
        border: 'solid 1px #272727',
        '&:hover': {
            background: "#272727",
            color: `white`,
            border: 'solid 1px #272727',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '120px',
        },
    },
    button : {
        background: `#272727`,
        color : 'white',
        border: 'solid 1px #272727',
        '&:hover': {
            background: "gray",
            color: `#272727`,
            border : 'solid 1px #272727',
        },
    },
    serviceButton: {
        float : 'right',
        background: `#272727`,
        color: 'white',
        border: 'solid 1px #272727',
        '&:hover': {
            background: "darkgrey",
            color: `#272727`,
            border: 'solid 1px #272727',
        },
        [theme.breakpoints.down('sm')]: {
            float : 'initial',
            marginBottom : '30px',
        },
    },
    parallaxItem : {
        width : '80px',
    },
    parallax: {
        backgroundImage: `url(${hero13Img})`,
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '1000px',
        maxHeight: '1000px',
        maxWidth: '100vw !immportant',

        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${hero13Img})`,
            minHeight: '800px',
            backgroundColor: 'black',
            backgroundAttachment: 'initial',
            backgroundSize : 'contain',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${hero13Img})`,
            backgroundColor: 'black',
        },
    },
    parallaxGoal : {
        backgroundImage: `url(${goal2Img})`,
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '550px',
        maxHeight: '550px',
        display: 'flex',
        maxWidth: '100vw !immportant',
        [theme.breakpoints.down('sm')]: {
            backgroundColor : 'black',
            backgroundImage: `url(${goal2Img})`,
            backgroundAttachment: 'initial',
            backgroundSize: '100%',
        },
    },
    logo : {
        width : '50px',
        height : '50px',
        margin : '5px',
        display: 'block',
        alignSelf : 'center',
    },
    hero: {
        color : 'white',
        alignSelf : 'center',
        position: 'absolute',
        maxWidth: '1200px',
        maxHeight: '450px',
        height: '450px',
        top: "23%",
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            top: "13%",
        },
    },
    wow : {
        color : 'yellow',
        fontSize : '55px',
    },
    headerShadow : {
        textShadow : '2px 2px 2px black',
        fontFamily: 'Montserrat, San-Serif',
        fontSize : '65px',
        letterSpacing : '2px',
        fontWeight: `bold`,
        textTransform: `uppercase`,
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
            letterSpacing: '1px',
        },
    },
    subHeader : {
        textShadow: '2px 2px 2px black',
        fontFamily: 'Montserrat, San-Serif',
        fontSize: '36px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            letterSpacing: '1px',
            display: 'block',

        },

    },
    heroDescription : {
        fontWeight : '100',
        lineHeight : '1.5',
        fontSize : '22px',
        textShadow: '2px 2px 2px black',
        fontFamily: 'Montserrat, San-Serif',
        letterSpacing : '2px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            letterSpacing: '1px',
        },
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
        [theme.breakpoints.down('sm')]: {
            display : 'none',
        },
    },
    navItemPhone: {
        float: 'right',
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            display : 'none',
        },
    },
    topNavButton : {
        height : '36px',
        paddingLeft : '15px',
    },
    homepageButton : {
        color : 'white',
    },
    goalContainer : {
        textAlign: 'center',
        minHeight: '550px',
        color: 'white',
        alignSelf: 'center',
        zIndex: '5',
        position: 'absolute',
        display : 'contents',
        maxHeight: '350px',
        left: 0,
        right: 0,
        margin: 'auto',

    },
    startContainer : {
        textAlign : 'center',
        minHeight : '360px',
        color: 'white',
        alignSelf: 'center',
        zIndex : '5',
        position: 'initial',
        maxWidth: '1200px',
        maxHeight: '360px',
        height: '360px',
        left: 0,
        right: 0,
        margin: 'auto',
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
        [theme.breakpoints.down('sm')]: {
            width: '330px',
        },
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
        minHeight: '650px',
        display: 'grid',
        alignSelf: 'center',
        background : 'lightgrey',
    },
    featureItemContainer : {

        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        minHeight : '400px',
        verticalAlign : 'middle',
        textAlign : 'center',
    },
    allProductsContainer : {
        color : 'white',
        background: 'linear-gradient(lightgrey 2%, black 32%)',
        textAlign: 'center',
        minHeight : '400px',
        display: 'flex',
        alignItems : 'center',
    },
    rootProductTab : {
        flexGrow: 1,
        width: '100%',
    },
    ratingHeader: {
        display: 'grid',
        textAlign : 'left',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    ratingItemContainer : {
        display: 'unset',
        alignSelf: 'center',
    },
    reviewHeader : {
        display : 'block',
        alignSelf : 'center',
        textAlign : 'center',
        fontSize : '25px',
    },
    ratingHeaderText : {
        fontSize : '30px',
        fontWeight : 'bold',
    },
    ratingContent : {
        display: 'block',
        textAlign: 'center',
    },
    ratingLabel: {
        display: 'contents',
        alignItems : 'center',
        minHeight: '40px',
        marginTop: '20px',
        marginBottom: '20px',
        overflow: 'hidden',
        fontSize : '25px',
        fontWeight : 'bold',
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
        display : '-webkit-box',
        alignItems : 'center',
    },
    ratingStarsContainer : {
        textAlign : 'center',
    },
    listContainer : {
        listStyle : 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize : '18px',
        },
    },
    listDescription : {
        padding : '5px 0 5px 0',
    },
    serviceHeader : {
        fontSize : '36px',
        color: `#272727`,
        lineHeight : '1.5',
    },
    serviceContainer : {
        background: `lightgrey`,
        textAlign : 'center',
    },
    serviceItemContainer : {
        padding : '0 25px 25px 25px',

    },
    servicePaper : {
        minHeight : '400px',
        background: `darkgrey`,
        color: `#272727`,
        [theme.breakpoints.down('sm')]: {
            minHeight: '330px',
        },
    },
    subServiceItem : {
        padding : '0 20px 20px 20px',
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
        [theme.breakpoints.down('md')]: {
            fontSize : '16px',
        },
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
    webMobileCopyright : {

        [theme.breakpoints.down('sm')]: {
            display : 'none',
        },
    },
    footerMobileCopyright : {
        display : 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'initial',
        },
    },
    baseContainer : {
        margin : '20px 20px',
    },
    socialContainer : {
        display: 'block',
        margin : '20px 0 20px',
    },
    productDetailBaseContainer : {
        marginTop : '120px',
        marginBottom : '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '150px',
            marginLeft : '10px',
        },
    },
    specList : {
        listStyle : 'none',
    },
    productDetailsButton : {
        display : 'flex',
        float : 'right',
        background: `#272727`,
        color: 'white',
        border: 'solid 1px #272727',
        '&:hover': {
            background: "white",
            color: `#272727`,
            border: 'solid 1px #272727',
        },
    },
    allProductsButton : {
        display: '-webkit-inline-box',
        fontSize : '22px',
        alignItems: 'center',
        background: `${color5}`,
        color: `white`,
        border: 'solid 1px darkgray',
        '&:hover': {
            background: `gray`,
            color: `black`,
            border: `solid 1px darkgray`,
        },
    },
    productSpecsContainer : {
        fontSize : '20px',
        lineHeight : '1.5',
        listStyle : 'none',
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
            lineHeight: '1.2',
            fontSize: '18px',
        },
    },
    productPrimaryImage : {
        height : '450px !important',
        width : 'auto',
        [theme.breakpoints.down('sm')]: {
            height: '330px !important',
        },
    },
    productSecondaryImages : {
        height : '80px',
        width : 'auto',
    },
    dimensionPaper : {
        display : 'grid',
        minHeight : '80px',
        alignItems : 'center',
        textAlign : 'center',
        background : `darkgrey`,
        color : 'white',
    },
    dimensionContainer : {
        justifyContent : 'center',
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
    comesWithContainer : {
        padding : '50px',
        lineHeight: '1.2',
        fontSize: '22px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
            lineHeight: '1.2',
            fontSize: '18px',
        },
    },
    productSubImage : {
        display : 'grid',
        alignItems: 'center',
        textAlign : '-webkit-center',
        [theme.breakpoints.down('sm')]: {
            display : 'none',
        },

    },
    productDescription : {
        fontSize : '20px',
        padding : '20px 0',

    },
    productSubDescription : {
        padding : '50px',
        lineHeight : '1.5',
        fontSize : '26px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
            lineHeight: '1.2',
            fontSize: '20px',
        },
    },
    productReviewContainerEven : {
        minHeight : '350px',
        display : 'flex',
        alignItems : 'center',
        background: 'rgba(0, 0, 0, 0.24)',
        padding: '0 30px 0 30px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 30px 10px 30px',
        },
    },
    productReviewContainerOdd : {
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.14)',
        padding: '0 30px 0 30px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 30px 10px 30px',
        },
    },
    faqContainerEven : {
        display : 'flex',
        alignItems : 'center',
        padding : '20px',
        margin : '2px 0 2px 0',
        background: 'rgba(0, 0, 0, 0.24)',
    },
    faqContainerOdd: {
        display: 'flex',
        background: 'rgba(0, 0, 0, 0.14)',
        alignItems: 'center',
        margin: '2px 0 2px 0',
        padding: '20px',
    },
    question : {
        fontWeight : 'bold',
    },
    answer : {
        margin : '20px 0 20px 0',
    },
    shippingContainer : {
        fontSize : '24px',
        lineHeight : '1.5',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            lineHeight: '1.2',
        },
    },
    shippingImg : {
        width : '100%',
    },
    productCatContainer : {
        margin :'100px 20px 0 20px',
        height: '100vh',
        display: 'flex',
        alignContent: 'baseline',
        [theme.breakpoints.down('sm')]: {
            margin: '0px 20px 0 20px',
        },
    },
    productCatImg : {
        width : '100%',
        height : 'auto',
    },
    catContainer : {
        textAlign : 'center',
        minHeight: '300px',
        '&:hover': {
            border: 'solid 2px #007ACC',
        },
        [theme.breakpoints.down('sm')]: {
            minHeight : '100px',
        },

    },
    catImgContainer : {
        minHeight : '250px',
        display : 'flex',
        alignItems : 'center',
        [theme.breakpoints.down('sm')]: {
            minHeight: '150px',
        },
    },
    catLink : {
        textDecoration : 'none',
        '&:visited': {
            color: `initial`,
            textDecoration: 'none',
        },
        '&:hover': {
            color: `initial`,
            textDecoration: 'none',
        },
    },
});