const mongoose = require("mongoose");

try {
mongoose.connect("mongodb://localhost:27017/FebApp", { useNewUrlParser: true,  useUnifiedTopology: true  });
   console.log("Database connection OK")
} catch (error) {
    console.log("Error connecting to the database")
}
