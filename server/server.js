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


//Controllers
const {clerkWebhooks}= require('./controllers/webhooks');

//Routes
app.get('/', (req,res)=>{
    res.status(200).json({success: true, message: "Welcome to LSM Server" });
})

app.post('/clerk',express.json(), clerkWebhooks);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
