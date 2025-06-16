const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

const SECRET = process.env.SIGNING_SECRET || "default-secret";

app.post('/sign', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).send("Missing message");

  const hmac = crypto.createHmac('sha256', SECRET);
  hmac.update(message);
  const signature = hmac.digest('hex');

  res.json({ signature });
});

app.listen(3000, () => {
  console.log("Confidential API running on port 3000");
});
