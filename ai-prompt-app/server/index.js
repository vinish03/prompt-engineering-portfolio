const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// Main API
app.post("/generate", (req, res) => {
  const { input, useCase } = req.body;

  // ❌ Normal output
  const normal = input;

  // ✅ Improved output based on use case
  let improved = "";

  if (useCase === "email") {
    improved = `
• Professional Email:
Dear Hiring Manager,
I am writing to express my interest in the position. My skills align with your requirements and I am eager to contribute to your organization.

Thank you for your time and consideration.

Best regards,
Candidate
`;
  } 
  else if (useCase === "resume") {
    improved = `
• Resume Bullet Points:
- Strong problem-solving and analytical skills
- Experience in MERN stack development
- Knowledge of AI and prompt engineering
- Ability to improve AI outputs using structured prompts
`;
  } 
  else if (useCase === "summary") {
    improved = `
• Summary:
- Extracted key idea from input
- Simplified and structured content
- Clear and concise explanation
`;
  } 
  else {
    improved = `
• General Improved Output:
- Structured response
- Professional tone
- Better clarity
`;
  }

  res.json({
    normal,
    improved,
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});