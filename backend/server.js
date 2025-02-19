js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/scan", async (req, res) => {
  const { url } = req.body;
  try {
    const zapResponse = await axios.get(`https://api.wappalyzer.com/lookup/v1/?url=${url}`);
    res.json({ success: true, data: zapResponse.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));