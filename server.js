const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/imageUploads", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Define a schema for image uploads
const ImageSchema = new mongoose.Schema({
    filename: String,
    category: String,
    uploadDate: { type: Date, default: Date.now }
});

const Image = mongoose.model("Image", ImageSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Ensure the 'uploads' folder exists
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    try {
        const newImage = new Image({
            filename: req.file.filename,
            category: req.body.category
        });

        await newImage.save();

        res.json({ message: "Upload successful", file: req.file.filename });
    } catch (error) {
        res.status(500).json({ message: "Database error", error });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
