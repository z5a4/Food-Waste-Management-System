import React from "react";
import { FaHome, FaCircleNotch } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export function CommonNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
    as="li"
    variant="h6"
    color="blue-gray"
    className="flex items-center gap-x-2 p-2 font-h6"
    >
    <FaHome size={18} color="Black" /> 
    <a href="/" className="flex items-center">
       Home
    </a>
      </Typography>
      <Typography
    as="li"
    variant="h6"
    color="blue-gray"
    className="flex items-center gap-x-2 p-2 font-h6"
    >
    <BsPersonLinesFill size={18} color="Black" /> 
    <a href="/aboutUs" className="flex items-center">
       About Us
    </a>
      </Typography>
      <Typography
    as="li"
    variant="h6"
    color="blue-gray"
    className="flex items-center gap-x-2 p-2 font-h6"
    >
    <FaCircleNotch size={18} color="Black" /> 
    <a href="#" className="flex items-center">
       Services
    </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          variant="h5"
          href="#"
          className="mr-4 cursor-pointer py-.5 font-bold"
          color='brown'
        >
          Food Waste Management System
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Sign-In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            color="light-green"
          >
            <span >Donate Us</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Sign-In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="" color="light-green">
              <span>Donate Us</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}