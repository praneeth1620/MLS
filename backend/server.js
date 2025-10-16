const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Form = require("./models/Form"); 

const app = express();
app.use(cors());
app.use(express.json());

const mongoURL = "mongodb+srv://praneethkollipara7_db_user:Hellomls@testing.lx7a0yw.mongodb.net/MLS?retryWrites=true&w=majority";

mongoose.connect(mongoURL)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("DB connection error:", err));


app.post("/form", async (request, response) => {
    try {
        const { name, phone, email, query, dispute, freetime } = request.body;
        const time=new Date();

        const newForm = new Form({
            name,
            phone,
            email,
            query,
            dispute,
            freetime,
            time
        });

        const savedForm = await newForm.save();
        console.log("new form: ",savedForm);
        response.status(201).json({ message: "Form submitted successfully", data: savedForm });
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: "Server error", error: err.message });
    }
});

app.listen(5000, () => console.log(`Server is running on port 5000`));
