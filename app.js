import express from "express";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

await connectDB();

app.listen(process.env.PORT || 3000, () => {
    console.log(
        `Server running on port ${process.env.PORT || 3000}`
);
});