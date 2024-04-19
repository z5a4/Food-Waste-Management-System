import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { Button, Input } from '@material-tailwind/react';

const FoodWasteSlurryForm = () => {
    const navigate = useNavigate(); // Get navigate function
    const [formData, setFormData] = useState({
        quantity: '',
    });

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];

        try {
            const response = await axios.post(`http://localhost:5000/api/${type}`, { quantity: formData.quantity, date: currentDate });

            if (response.data.message === `${type} data updated successfully`) {
                alert(`${type === 'foodWaste' ? 'Food waste' : 'Slurry'} data updated successfully!`);
            } else {
                alert(`${type === 'foodWaste' ? 'Food waste' : 'Slurry'} data added successfully!`);
            }

            setFormData({ quantity: '' }); // Clear input after submission
        } catch (error) {
            console.error('Error adding data:', error);
            alert(`Failed to add ${type === 'foodWaste' ? 'food waste' : 'slurry'} data. Please try again.`);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Add Food Waste</h2>
                    <form onSubmit={(e) => handleSubmit(e, 'foodWaste')} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-bold">Type:</label>
                            <input type="text" className="input w-full border mt-1" value="Food Waste" readOnly />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Quantity:</label>
                            <input type="number" className="input w-full border mt-1" value={formData.quantity} onChange={(e) => setFormData({ quantity: e.target.value })} />
                        </div>
                        <Button type="submit" color="blue" ripple="light" className="w-full mt-4">Submit Food Waste</Button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Add Slurry</h2>
                    <form onSubmit={(e) => handleSubmit(e, 'slurry')} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="font-bold">Type:</label>
                            <input type="text" className="input w-full border mt-1" value="Slurry" readOnly />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Quantity:</label>
                            <input type="number" className="input w-full border mt-1" value={formData.quantity} onChange={(e) => setFormData({ quantity: e.target.value })} />
                        </div>
                        <Button type="submit" color="blue" ripple="light" className="w-full mt-4">Submit Slurry</Button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-6">
                <Link to="/adminviewstock">
                    <Button color="black" className="mt-3">Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default FoodWasteSlurryForm;
