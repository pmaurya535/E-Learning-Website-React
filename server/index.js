import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";
import adminRoute from "./routes/admin.route.js";
import enrollmentRoutes from "./routes/enrollment.route.js";

dotenv.config({});

// Call database connection
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allowed Origins (Multiple Frontend URLs)
const allowedOrigins = [
    "http://localhost:5173", 
    "http://localhost:5174"
];

// ✅ CORS Middleware (Dynamically handle origins)
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

// ✅ Default middleware
app.use(express.json());
app.use(cookieParser());

// ✅ APIs
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);
// add this inside app.use APIs section:
app.use("/api/v1/admin", adminRoute);






app.use("/api/v1/enrollments", enrollmentRoutes);

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server listening at port ${PORT}`);
});
