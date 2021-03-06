const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

mongoose.connect(
  "mongodb://localhost:27017/express-authentication-lab-2",
  { useNewUrlParser: true }
);
// mongoose.connection.dropCollection("users"); // uncomment this to remove all users from db

app.listen(PORT, function() {
  console.log(`application started on port ${PORT}...`);
});
