
const app = require("./app");
const mongoose = require("mongoose");

// db connection

try {

    mongoose.connect("mongodb://localhost:27017/meal-management");
    console.log("Database connection established...");
    
} catch (error) {
    console.log(error.message);
}

app.listen(5050, ()=>{
    console.log("App listening on...");
})

