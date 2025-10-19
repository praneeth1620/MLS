const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  query: { type: String, required: true },
  dispute: { type: String }, // e.g., civil, criminal, corporate, etc.
  freetime: { type: String }, // Flexible hours
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Form", formSchema);
