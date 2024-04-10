import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Volunteerimg from "../common/Images/volunteer.png";
  import transporterimg from "../common/Images/transporter.png";

   
  export function AdminReportCard() {
    return (
      <Card className="w-96">
        <CardHeader color="blue" floated={false} className="h-full">
          <img src={Volunteerimg} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Our Volunteers
          </Typography>
          <a href="/reportvolunteer" className="inline-block">
            <Button color="green" className="flex items-center gap-2">
            View
            </Button>
            </a>
        </CardBody>
      </Card>
    );
  }


  export function AdminReportCard1() {
    return (
      <Card className="w-96">
        <CardHeader color="green" floated={false} className="h-full">
          <img src={transporterimg} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Our Transporters
          </Typography>
          <a href="/reporttransporter" className="inline-block">
            <Button color="light-blue" className="flex items-center gap-2">
            View
            </Button>
            </a>
        </CardBody>
      </Card>
    );
  }