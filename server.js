const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/db');
const registrationRoutes = require('./routes/registrationRoutes');
const loginRoutes=require('./routes/apiRoutes');
const sourceTableRoutes = require('./routes/sourceTableRoutes'); // Add this line
const memberRoutes=require('./routes/memberRoutes');
const volunteerRoutes=require('./routes/volunteerRoutes');
const transporterRoutes=require('./routes/transporterRoutes');
const bioWasteRoutes=require('./routes/bioWasteRoutes');
const farmersRoutes=require('./routes/farmersRoutes');
const donationRoutes = require('./routes/donationRoutes');
const foodWasteRequestRoutes=require('./routes/foodWasteRequestRoutes');
const RegularFWRequestRoutes=require('./routes/RegularFWRequestRoutes');
const OccasionalFWRequestRoutes=require('./routes/OccasionalFWRequestRoutes');
const ScheduleRoutes=require('./routes/ScheduleRoutes');
const routeRoutes=require('./routes/routeRoutes');
const CurrentScheduleRoutes = require('./routes/CurrentScheduleRoutes');
const CreateAdmin=require('./routes/adminRoutes'); // Add this line
const CreateClerk=require('./routes/clerkRoutes');
const app = express();
const PORT = process.env.PORT || 5000;



// Session middleware setup
app.use(session({
  secret: 'mongodbfwms1', // Replace with your actual secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true if using HTTPS
}));

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());
connectDB();

app.use('/',CreateAdmin);
app.use('/',CreateClerk);
app.use('/', registrationRoutes);
app.use('/',loginRoutes);
app.use('/', sourceTableRoutes);
app.use('/', transporterRoutes);
app.use('/',memberRoutes);
app.use('/',volunteerRoutes);
app.use('/', bioWasteRoutes);
app.use('/',farmersRoutes);
app.use('/',donationRoutes);
app.use('/',foodWasteRequestRoutes);
app.use('/',RegularFWRequestRoutes);
app.use('/',OccasionalFWRequestRoutes);
app.use('/',ScheduleRoutes);
app.use('/',routeRoutes);
app.use('/', CurrentScheduleRoutes); // Add this line


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
