import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FViewBiogas from '../functions/FViewBiogas';
import { Button } from '@material-tailwind/react'; // Import Material Tailwind Button
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const ViewBiogas = () => {
  const [biogases, setBiogas] = useState([]);
  const [error, setError] = useState(null);
  const { fetchBiogas, handleUpdate, handleDelete } = FViewBiogas();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBiogas();
        setBiogas(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchBiogas]);

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center text-3xl font-bold mb-3">Bio-Gas Plant</h1>
      <div className="flex justify-center mb-3">
        <Link to="/adminbiogasform">
          <Button color="green" size="lg" className="me-2">
            Add New
          </Button>
        </Link>
        <Link to="/admin">
          <Button color="blue" size="lg">
            Back
          </Button>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <table className="table-auto w-full border rounded">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Mobile No</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Slurry Limit</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {biogases.map((biogas) => (
            <tr key={biogas._id}>
              <td className="border px-4 py-2">{biogas.biogasId}</td>
              <td className="border px-4 py-2">{biogas.biogasName}</td>
              <td className="border px-4 py-2">{biogas.biogasEmail}</td>
              <td className="border px-4 py-2">{biogas.biogasMobileNo}</td>
              <td className="border px-4 py-2">{biogas.biogasAddress}</td>
              <td className="border px-4 py-2">{biogas.biogasSlurryLimit}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="btn me-2"
                    color='green'
                    onClick={() => handleUpdate(biogas)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn"
                    color='blue'
                    onClick={() => handleDelete(biogas)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBiogas;
