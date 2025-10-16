const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    query: { type: String },
    dispute: { type: String },
    freetime: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);
