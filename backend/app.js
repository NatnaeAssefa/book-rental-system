// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const sequelize = require('./config/database');
// const bookRoutes = require('./routes/bookRoutes');
// const ownerRoutes = require('./routes/ownerRoutes');
// const userRoutes = require('./routes/userRoutes');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/books', bookRoutes);
// app.use('/api/owners', ownerRoutes);
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;

// sequelize.authenticate().then(() => {
//   console.log('Database connected...');
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }).catch(err => console.log('Error: ' + err));


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBThIoPvGEik_kbqDKC8xQgZkbhrnVCATU",
  authDomain: "nat-firebase-27.firebaseapp.com",
  projectId: "nat-firebase-27",
  storageBucket: "nat-firebase-27.appspot.com",
  messagingSenderId: "527772295331",
  appId: "1:527772295331:web:a68dc6cd198c83a35f1f16",
  measurementId: "G-CWNM5HC4J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);