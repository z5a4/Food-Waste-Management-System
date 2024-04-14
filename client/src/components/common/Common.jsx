import { useState, useEffect } from 'react';
import { CommonNavbar } from "./commonNavbar"; 
import { CommonCarousel } from "./CommonCarousel";
import { CommonFooter } from "./CommonFooter";
import { CommonCard } from "./CommonCard";
import { CommonProfileCard, CommonProfileCard1 } from "./CommonProfileCard";
import { CommonParagraph } from "./CommonParagraph";
import { CommonBlurImg } from "./CommonBlurImg";
import { CommonService, CommonService1, CommonService2 } from "./CommonService";
import Skeleton from '../../Skeleton';

import Footer from "../Footer/Footer";

function Common() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Display skeleton for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton /> // Render the skeleton while loading
      ) : (
        <div>
          <CommonNavbar/>
          <div className='space'><br></br></div>   
          <CommonCarousel/>
          <div className="space"><br></br></div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Add your content here */}
          </div>
          <div className="space"><br></br></div>
          <CommonParagraph/>
          <div className="space"><br></br></div>
          <CommonBlurImg/>
          <div className="space"><br></br></div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center" id="commonService">
            <CommonService/>
            <CommonService1/>
            <CommonService2/>
          </div>
          <div className='space'><br></br></div>
          <CommonFooter/>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default Common;
