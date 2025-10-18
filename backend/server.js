// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");

// // Models
// const Form = require("./models/Form"); 
// const Application = require("./models/Application"); 

// // Multer for file uploads
// const multer = require("multer");

// // Express app
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Serve uploaded CVs
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// /* ----------------- MONGODB CONNECTIONS ----------------- */

// // Cluster 1: Existing form database
// const cluster1URL = "mongodb+srv://praneethkollipara7:Issues@clientissues.fr33uzy.mongodb.net/myDatabase?retryWrites=true&w=majority" ;
// const cluster1Connection = mongoose.createConnection(cluster1URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// cluster1Connection.once("open", () => console.log("Connected to Cluster 1 (Form DB)"));
// cluster1Connection.on("error", (err) => console.log("Cluster 1 error:", err));

// // Cluster 2: Dummy second cluster for Applications
// const cluster2URL = "mongodb+srv://praneethkollipara7:Interns@internsapplied.uuokqhr.mongodb.net/myDatabase?retryWrites=true&w=majority";
// const cluster2Connection = mongoose.createConnection(cluster2URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// cluster2Connection.once("open", () => console.log("Connected to Cluster 2 (Applications DB)"));
// cluster2Connection.on("error", (err) => console.log("Cluster 2 error:", err));

// /* ----------------- EXISTING /form API ----------------- */
// const FormModel = cluster1Connection.model("Form", Form.schema);

// app.post("/form", async (request, response) => {
//     try {
//         const { name, phone, email, query, dispute, freetime } = request.body;
//         const time = new Date();

//         const newForm = new FormModel({
//             name,
//             phone,
//             email,
//             query,
//             dispute,
//             freetime,
//             time
//         });

//         const savedForm = await newForm.save();
//         console.log("new form: ", savedForm);
//         response.status(201).json({ message: "Form submitted successfully", data: savedForm });
//     } catch (err) {
//         console.error(err);
//         response.status(500).json({ message: "Server error", error: err.message });
//     }
// });

// /* ----------------- NEW /career API ----------------- */
// const ApplicationModel = cluster2Connection.model("Application", Application.schema);

// // Configure multer to store uploaded CVs
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "uploads/");
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, uniqueSuffix + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage });

// app.post("/career", upload.single("cv"), async (req, res) => {
//     try {
//         const { fullName, email, phoneNumber, residentialAddress, college, course, yearOfStudy, coverLetter } = req.body;
//         const time = new Date();

//         if (!req.file) {
//             return res.status(400).json({ message: "CV file is required" });
//         }

//         const newApplication = new ApplicationModel({
//             fullName,
//             email,
//             phoneNumber,
//             residentialAddress,
//             college,
//             course,
//             yearOfStudy,
//             coverLetter,
//             cvUrl: `/uploads/${req.file.filename}`,
//             time,
//         });

//         const savedApplication = await newApplication.save();
//         res.status(201).json({ message: "Application submitted successfully", data: savedApplication });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error submitting application", error: error.message });
//     }
// });

// /* ----------------- START SERVER ----------------- */
// app.listen(5000, () => console.log("Server is running on port 5000"));























const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// Models
const Form = require("./models/Form");
const Application = require("./models/Application");

// Multer for file uploads
const multer = require("multer");

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

// Express app
const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded CVs
app.use("/uploads", express.static(uploadsDir));

/* ----------------- MONGODB CONNECTIONS ----------------- */

// Cluster 1: Form DB
const cluster1URL = "mongodb+srv://praneethkollipara7:Issues@clientissues.fr33uzy.mongodb.net/myDatabase?retryWrites=true&w=majority";
const cluster1Connection = mongoose.createConnection(cluster1URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
cluster1Connection.once("open", () => console.log("Connected to Cluster 1 (Form DB)"));
cluster1Connection.on("error", (err) => console.log("Cluster 1 error:", err));

// Cluster 2: Applications DB
const cluster2URL = "mongodb+srv://praneethkollipara7:Interns@internsapplied.uuokqhr.mongodb.net/myDatabase?retryWrites=true&w=majority";
const cluster2Connection = mongoose.createConnection(cluster2URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
cluster2Connection.once("open", () => console.log("Connected to Cluster 2 (Applications DB)"));
cluster2Connection.on("error", (err) => console.log("Cluster 2 error:", err));

/* ----------------- /form API ----------------- */
const FormModel = cluster1Connection.model("Form", Form.schema);

app.post("/form", async (req, res) => {
  try {
    const { name, phone, email, query, dispute, freetime } = req.body;
    const newForm = new FormModel({ name, phone, email, query, dispute, freetime, time: new Date() });
    const savedForm = await newForm.save();
    res.status(201).json({ message: "Form submitted successfully", data: savedForm });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/* ----------------- /career API ----------------- */
const ApplicationModel = cluster2Connection.model("Application", Application.schema);

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

app.post("/career", upload.single("cv"), async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    if (!req.file) return res.status(400).json({ message: "CV file is required" });

    const newApplication = new ApplicationModel({
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      residentialAddress: req.body.residentialAddress,
      college: req.body.college,
      course: req.body.course,
      yearOfStudy: req.body.yearOfStudy,
      coverLetter: req.body.coverLetter,
      cvUrl: `/uploads/${req.file.filename}`,
      time: new Date()
    });

    const savedApplication = await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully", data: savedApplication });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting application", error: error.message });
  }
});

/* ----------------- START SERVER ----------------- */
app.listen(5000, () => console.log("Server running on port 5000"));
