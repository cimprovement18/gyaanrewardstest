const express = require("express");
const app = express();

// Use the port provided by Railway
const PORT = process.env.PORT;

if (!PORT) {
  console.error("❌ Error: process.env.PORT is not defined!");
  process.exit(1);
}

// Simple root route
app.get("/", (req, res) => {
  res.send("✅ GyaanRewards server is running!");
});

// Optional admin route
app.get("/admin", (req, res) => {
  res.send("🔑 Admin panel - placeholder");
});

// Start server on 0.0.0.0 for external access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 GyaanRewards server running on port ${PORT}`);
});
