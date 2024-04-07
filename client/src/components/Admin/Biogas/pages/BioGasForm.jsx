import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Typography } from '@material-tailwind/react';
import FBioGasForm from '../functions/FBioGasForm';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';

const BioGasForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = FBioGasForm();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adminviewbiogas');
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Add Biogas Plant</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="form-label font-bold">Biogas ID:</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Name:</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Address:</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Mobile No:</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Email:</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Slurry Limit:</td>
                <td>
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
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <Button type="submit" color="green" size="md" className="me-2">
              Create Biogas
            </Button>
            <Button type="button" color="light-blue" size="md" onClick={handleBack}>
              Back
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BioGasForm;
