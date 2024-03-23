import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   
  export function CommonProfileCard() {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-40">
          <img src="https://wallpapercave.com/wp/wp10400986.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="amber" className="mb-2">
            Help Us...
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            To collect more food waste...
          </Typography>
        </CardBody>
      </Card>
    );
  }


  export function CommonProfileCard1() {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-40">
          <img src="https://wallpapercave.com/wp/wp2024213.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="amber" className="mb-2">
            Help Farmers...
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            To get slurry for free...
          </Typography>
        </CardBody>
      </Card>
    );
  }