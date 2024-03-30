import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@material-tailwind/react';
import FBioGasForm from '../functions/FBioGasForm';

const BioGasForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FBioGasForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewbiogas');
  };

  return (
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <h1 className="text-center mb-4 text-3xl font-bold">Add Biogas Plant...</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4 flex flex-col">
            <label htmlFor="biogasId" className="form-label font-bold">Biogas ID:</label>
            <Input
              type="text"
              name="biogasId"
              value={formData.biogasId}
              onChange={handleInputChange}
              size="md"
              placeholder="Biogas ID"
              error={errors.biogasId}
              variant="standard"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="biogasName" className="form-label font-bold">Biogas Name:</label>
            <Input
              type="text"
              name="biogasName"
              value={formData.biogasName}
              onChange={handleInputChange}
              size="md"
              placeholder="Biogas Name"
              error={errors.biogasName}
              variant="standard"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="biogasAddress" className="form-label font-bold">Biogas Address:</label>
            <Input
              type="text"
              name="biogasAddress"
              value={formData.biogasAddress}
              onChange={handleInputChange}
              size="md"
              placeholder="Biogas Address"
              error={errors.biogasAddress}
              variant="standard"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="biogasMobileNo" className="form-label font-bold">Biogas Mobile No:</label>
            <Input
              type="text"
              name="biogasMobileNo"
              value={formData.biogasMobileNo}
              onChange={handleInputChange}
              size="md"
              placeholder="Biogas Mobile No"
              error={errors.biogasMobileNo}
              variant="standard"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="biogasEmail" className="form-label font-bold">Biogas Email:</label>
            <Input
              type="email"
              name="biogasEmail"
              value={formData.biogasEmail}
              onChange={handleInputChange}
              size="md"
              placeholder="Biogas Email"
              error={errors.biogasEmail}
              variant="standard"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="biogasSlurryLimit" className="form-label font-bold">Biogas Slurry Limit:</label>
            <Input
              type="text"
              name="biogasSlurryLimit"
              value={formData.biogasSlurryLimit}
              onChange={handleInputChange}
              size="md"
              placeholder="Biogas Slurry Limit"
              error={errors.biogasSlurryLimit}
              variant="standard"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <Button type="submit" color="green" size="md" className="me-2">
            Create Biogas
          </Button>
          <Button type="button" color="blue" size="md" onClick={handleBack}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BioGasForm;
