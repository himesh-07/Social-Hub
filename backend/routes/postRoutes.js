import express from "express";
import Post from "../models/Post.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
const router = express.Router();


router.post("/", upload.single("image"), async (req, res) => {
  try {
     console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const post = await Post.create({
      text: req.body.text,
      image: req.file ? req.file.filename : null,
    });

    res.status(201).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
     console.log(req.body);
   
    const posts = await Post.find()
      .populate("user", "name email") 
      .sort({ createdAt: -1 }); 

    res.status(200).json(posts);

  } catch (err) {
   
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;