require('dotenv').config();
const express= require('express');
const cors= require('cors');
const morgan= require('morgan');

//Database connection
const {connectDB}= require('./configs/db.js');
connectDB();

const {connectCloudinary}= require('./configs/cloudinary.js');
connectCloudinary();

//Initialize express
const app= express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));

const { clerkMiddleware } = require('@clerk/express');  
app.use(clerkMiddleware());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Controllers
const {clerkWebhooks}= require('./controllers/webhooks.js');

//Routers import
const {educatorRouter}= require('./routes/educatorRoutes.js');

//Routes
app.get('/', (req,res)=>{
    return res.status(200).json({message:"API is running successfully"});
})
app.use('/clerk', clerkWebhooks);
app.use('/api/educator', educatorRouter);

//Port
const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});