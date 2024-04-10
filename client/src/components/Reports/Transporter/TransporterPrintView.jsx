import React from 'react';
import { Button, Typography } from '@material-tailwind/react';

const TransporterPrintView = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Typography variant="h5" className="text-center mb-4">Transporter Details</Typography>
        <div className="mb-4">
          <Typography className="font-bold">ID:</Typography>
          <Typography>{data.transporterId}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Driver Name:</Typography>
          <Typography>{data.driverName}</Typography>
        </div>
        <div className="mb-4">
          <Typography className="font-bold">Vehicle No:</Typography>
          <Typography>{data.vehicleNo}</Typography>
        </div>
        {/* Add more details here */}
        <div className="flex justify-center">
          <Button color="green" onClick={window.print}>Print</Button>
          <Button color="red" className="ml-2" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default TransporterPrintView;
