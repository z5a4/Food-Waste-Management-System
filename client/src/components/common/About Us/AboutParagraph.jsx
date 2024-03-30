import {Button, Typography } from "@material-tailwind/react";
 
export function AboutParagraph() {
  return (
    <>
    <Typography variant="h1" className="mt-12 font-bold text-5xl text-amber-500">OUR VISION</Typography>
    
    <Typography variant="lead" className="mt-6 ml-16 mr-16 mb-12 pl-15 pr-15 item-center"  style={{ textAlign: 'justify-center' }}>
      Our vision is to spread this initiative in state and then country. We want to collect 
      food waste from all over the country and after converting it to slurry, provide it to
      the farmers. Our main goal is to help our farmers by providing free slurry to them. 
    </Typography>
    </>
  );
}
 
export function AboutParagraph2() {
  return (
    <>
    <Typography variant="h1" className="mt-12 font-bold text-4xl text-amber-500">About Food Waste Management System </Typography>
    
    <Typography variant="lead" className="mt-6 ml-16 mr-16 mb-12 pl-15 pr-15 item-center"  style={{ textAlign: 'justify-center' }}>
    The Food Waste Management System is an innovative project aimed at addressing the critical issue of food waste in a sustainable and 
    environmentally friendly manner. <br></br>
    This system focuses on creating a comprehensive solution that involves the collaboration of hotels, bio gas plants, and farmers.<br></br> 
    By leveraging technology and efficient processes, the project aims to collect leftover food which will be provided by certain hotels, 
    various events, weddings and then after collection of food, the food waste will be sent to the bio plant and then the bio plant will 
    convert the food waste into valuable resource known as slurry which is useful for agriculture use, and after we got slurry as a byproduct
    of food waste conversion it will be provided to farmers for free and a single farmer can get slurry on request within certain days limit.
 
    </Typography>
    </>
  );
}


export function AboutParagraph3() {
    return (
      <>
      <Typography variant="h1" className="mt-12 font-bold text-4xl text-amber-500">About DVT (Divyang Vikas Trust) </Typography>
      
      <Typography variant="lead" className="mt-6 ml-16 mr-16 mb-12 pl-15 pr-15 item-center"  style={{ textAlign: 'justify-center' }}>
       DVT is an NGO based organization, founded by <strong>MR. NILESH MEHTA</strong> and established in 2017 which engaged in empowering
       handicaps and other disabled persons. They provide training, various camps, marriage 
       bureau service for handicap and disabled person etc. for the society.
      </Typography>
      </>
    );
  }