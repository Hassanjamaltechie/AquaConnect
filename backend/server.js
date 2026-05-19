import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5175" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AquaConnect backend is running");
});

app.post("/api/sponsors", async (req, res) => {
  try {
    const { companyName, contactPerson, email, campaignType, message } = req.body;

    if (!companyName || !contactPerson || !email || !campaignType) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const sql = `
      INSERT INTO sponsor_requests
      (company_name, contact_person, email, campaign_type, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
      companyName,
      contactPerson,
      email,
      campaignType,
      message || null,
    ]);

    res.status(201).json({
      success: true,
      message: "Sponsor request saved successfully.",
    });
  } catch (error) {
    console.error("Error saving sponsor request:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Could not save sponsor request.",
    });
  }
});

app.get("/api/sponsors", async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM sponsor_requests ORDER BY created_at DESC"
    );

    res.json(rows);
  } catch (error) {
    console.error("Error fetching sponsor requests:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Could not fetch sponsor requests.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`AquaConnect backend running on port ${PORT}`);
});
