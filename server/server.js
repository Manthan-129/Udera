require('dotenv').config();

const express= require('express')
const cors= require('cors');
const morgan=  require('morgan');
const {connectDB}= require('./configs/db.js');
const {connectCloudinary}= require('./configs/cloudinary.js');
const loginRouter= require('./routes/loginRoutes.js');
const educatorRouter= require('./routes/educatorRoutes.js');
const courseRouter = require('./routes/courseRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const PORT= process.env.PORT || 5000;

// API initializer
const app= express();

// Connect to Database
connectDB();

// Connect to Cloudinary
connectCloudinary();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//API initialzer
app.get('/',(req, res)=>{
    res.status(200).json({message: "Welcome to LSM API"});
})
app.use('/api', loginRouter);
app.use('/api/educator', educatorRouter);
app.use('/api/course', courseRouter);
app.use('/api/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})