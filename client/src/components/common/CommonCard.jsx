import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CommonCard() {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="amber" className="mb-2">
            How do you want to help us today ?
          </Typography>
          <Typography className="flex justify-center">
          Your smallest contribution makes a 
          big difference to help someone. 
          We count on the generosity of people 
          like you to be able to create
          real change for agriculture sector!
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button color="light-green">Donate Us</Button>
        </CardFooter>
      </Card>
    );
  }