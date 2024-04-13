import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Volunteerimg from "../common/Images/volunteer.png";
  import transporterimg from "../common/Images/transporter.png";
  import waste1 from "../common/Images/waste1.png";
  import waste2 from "../common/Images/Waste2.png";

   
  export function AdminReportCard() {
    return (
      <Card className="w-96">
        <CardHeader color="cyan" floated={false} className="h-full">
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
        <CardHeader color="cyan" floated={false} className="h-full">
          <img src={transporterimg} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Our Transporters
          </Typography>
          <a href="/reporttransporter" className="inline-block">
            <Button color="green" className="flex items-center gap-2">
            View
            </Button>
            </a>
        </CardBody>
      </Card>
    );
  }

  export function AdminReportCard2() {
    return (
      <Card className="w-96">
        <CardHeader color="cyan" floated={false} className="h-full">
          <img src={waste1} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Regular Food Waste
          </Typography>
          <a href="/reportregularfoodwaste" className="inline-block">
            <Button color="green" className="flex items-center gap-2">
            View
            </Button>
            </a>
        </CardBody>
      </Card>
    );
  }

  export function AdminReportCard3() {
    return (
      <Card className="w-96">
        <CardHeader color="cyan" floated={false} className="h-full">
          <img src={waste2} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Occasional Food Waste
          </Typography>
          <a href="/reportoccasionalfoodwaste" className="inline-block">
            <Button color="green" className="flex items-center gap-2">
            View
            </Button>
            </a>
        </CardBody>
      </Card>
    );
  }