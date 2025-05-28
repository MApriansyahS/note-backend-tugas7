import express from "express";
import cors from "cors";
import route from "./routes/route.js"; 
import dotenv from "dotenv";
import "./model/index.js"; 
import cookieParser from "cookie-parser";

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;


const corsOptions = {
  origin: [
    "http://localhost:3000", 
  ],
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions)); 

app.options("*", cors(corsOptions)); 

app.use(express.json());
app.use(cookieParser());

app.use(route);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
