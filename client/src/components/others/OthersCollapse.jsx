import React, { useState, useEffect, useRef } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import RegularFWRequest from "./RegularFWRequest/pages/RegularFWRequest";
import FarmerRequest from "./FarmerRequest";
import OMember from "./Member/pages/OMember";;

export function OthersCollapse() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    if (open) {
      // Scroll to the top of the component when it's opened
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  const handleClickInside = (e) => {
    e.preventDefault();
    e.target.focus({ preventScroll: true });
  };

  return (
    <>
      <Button color="green" onClick={toggleOpen}>Food Waste Request</Button>
      <Collapse open={open}>
        <div ref={contentRef}>
          <Card className="my-4 mx-auto w-auto">
            <CardBody onClick={handleClickInside}>
              <Typography>
                <RegularFWRequest />
              </Typography>
            </CardBody>
          </Card>
        </div>
      </Collapse>
    </>
  );
}

export function OthersCollapse1() {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleOpen = () => setOpen((cur) => !cur);
  
    useEffect(() => {
      if (open) {
        // Scroll to the top position of the collapse content
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, [open]);
  
    return (
      <>
        <Button color="green" onClick={toggleOpen}>Slurry Request</Button>
        <Collapse open={open}>
          <div ref={contentRef} style={{ overflow: 'hidden' }}>
            <Card className="my-4 mx-auto w-auto">
              <CardBody>
                <Typography>
                  <FarmerRequest />
                </Typography>
              </CardBody>
            </Card>
          </div>
        </Collapse>
      </>
    );
  }

  export function OthersCollapse2() {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleOpen = () => setOpen((cur) => !cur);
  
    useEffect(() => {
      if (open) {
        // Scroll to the top of the component when it's opened
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [open]);
  
    const handleClickInside = (e) => {
      e.preventDefault();
      e.target.focus({ preventScroll: true });
    };
  
    return (
      <>
        <Button color="green" onClick={toggleOpen}>Become member</Button>
        <Collapse open={open}>
          <div ref={contentRef}>
            <Card className="my-4 mx-auto w-auto">
              <CardBody onClick={handleClickInside}>
                <Typography>
                  <OMember />
                </Typography>
              </CardBody>
            </Card>
          </div>
        </Collapse>
      </>
    );
  }
  