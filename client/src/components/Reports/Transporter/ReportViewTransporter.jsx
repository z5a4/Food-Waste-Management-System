import React, { useState } from 'react';
import { Button, Typography, Input } from '@material-tailwind/react';
import Footer from '../../Footer/Footer';
import ReportFViewTransporter from './ReportFViewTransporter';
import TransporterPrintView from './TransporterPrintView';

function ReportViewTransporter() {
  const { transporters, error } = ReportFViewTransporter();
  const [searchName, setSearchName] = useState('');
  const [printViewData, setPrintViewData] = useState(null);

  const filteredTransporters = transporters.filter(transporter => {
    return transporter.driverName.toLowerCase().includes(searchName.toLowerCase());
  });

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleViewPrint = (data) => {
    setPrintViewData(data);
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <Typography variant='h3' className="text-center mb-3">Transporter</Typography>
        <div className="flex justify-center mb-3">
          <Input 
            type="text" 
            placeholder="Search by driver name" 
            value={searchName} 
            onChange={handleSearchChange} 
            className="form-control mr-2"
          />
          <Button color="light-blue" size="lg" className='mb-2 me-2' onClick={() => window.history.back()}>Back</Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto border-collapse border border-black">
          <thead className="bg-gray-700 text-white text-center">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Driver Name</th>
              <th className="px-4 py-2">Vehicle No</th>
              <th className="px-4 py-2">Vehicle Type</th>
              <th className="px-4 py-2">License No</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Rent Rate</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransporters.map(transporter => (
              <tr key={transporter._id} className="text-center">
                <td className="border px-4 py-2">{transporter.transporterId}</td>
                <td className="border px-4 py-2">{transporter.driverName}</td>
                <td className="border px-4 py-2">{transporter.vehicleNo}</td>
                <td className="border px-4 py-2">{transporter.vehicleType}</td>
                <td className="border px-4 py-2">{transporter.licenseNo}</td>
                <td className="border px-4 py-2">{transporter.mobileNo}</td>
                <td className="border px-4 py-2">{transporter.email}</td>
                <td className="border px-4 py-2">{transporter.rentRate}</td>
                <td className="border px-4 py-2">
                  <div className="flex">
                    <Button color="green" className="me-2" onClick={() => handleViewPrint(transporter)}>View Print</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
      {printViewData && <TransporterPrintView data={printViewData} onClose={() => setPrintViewData(null)} />}
    </>
  );
}

export default ReportViewTransporter;
