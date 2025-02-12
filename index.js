import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from './routes/user.route.js';
import courseRoute from './routes/course.route.js';
import purchaseRoute from "./routes/purchaseCourse.route.js"
import mediaRoute from "./routes/media.route.js"
import progressRoute from "./routes/courseProgress.route.js"
import cookieParser from 'cookie-parser'
import cors from 'cors';

dotenv.config({});

// Call function for DB Connection
connectDB();

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
}));


app.use('/api/v1/media', mediaRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/course', courseRoute)
app.use('/api/v1/purchase', purchaseRoute)
app.use('/api/v1/progress', progressRoute)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})