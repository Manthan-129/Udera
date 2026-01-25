require('dotenv').config();
const express= require('express');
const cors= require('cors');
const morgan= require('morgan');

const { clerkWebhooks }= require('./controllers/webhooks.js');

//Initialize express
const app= express();

//connect to data base
const {connectDB}= require('./configs/db.js');
connectDB();

//Middlewares
app.use(cors());
app.use(morgan('dev'));


//Routes
app.get('/', (req, res)=>{
    res.status(200).json({success: true, message: 'Welcome to the LSM Server'});
})
app.post('/clerk', express.json(), clerkWebhooks);


const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
