require('dotenv').config();
const express= require('express');
const cors= require('cors');
const morgan= require('morgan');

//Initialize express app
const app= express();

const PORT= process.env.PORT || 5000;

// Database Connection
const {connectDB}= require('./config/db');
connectDB();
const {cloudinaryConnect}= require('./config/cloudinary');
cloudinaryConnect();

//Middlewares
app.use(cors());
app.use(morgan('dev'));

// IMPORTANT: Webhook route BEFORE express.json() middleware
// This preserves the raw body for Svix verification
const {clerkWebhooks}= require('./controllers/webhooks');
app.post('/clerk', express.raw({type: 'application/json'}), clerkWebhooks);

//Routes
app.get('/', (req,res)=>{
    res.status(200).json({success: true, message: "Welcome to LSM Server" });
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
