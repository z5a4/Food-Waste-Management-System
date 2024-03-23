import { CommonNavbar } from "../commonNavbar";
import { AboutParagraph , AboutParagraph2, AboutParagraph3} from "./AboutParagraph";
import { AboutImage, AboutImage2 } from "./AboutImage";
import { AboutGallery } from "./AboutGallery";
import { CommonFooter } from "../CommonFooter";
import Footer from "../../Footer/Footer";
import { Typography } from "@material-tailwind/react";


function About() {

    return(
        <>
        <CommonNavbar/>
        <div className='space'><br></br></div>
        <AboutParagraph/>
        <div className="space"></div>
        <AboutImage/>
        <div className="space"></div>
        <AboutParagraph2/>
        <div className="space"></div>
        <AboutImage2/>
        <div className="space"></div>
        <AboutParagraph3/>
        <div className="space"></div>
        <Typography variant="h1" className="mt-12 font-bold text-4xl text-amber-500">DVT GALLERY</Typography>
        <div className="space mt-6"></div>
        <AboutGallery/>
        <div className="space"></div>
        <CommonFooter/>
        <Footer/>
        
        
        </>
    );
};

export default About;