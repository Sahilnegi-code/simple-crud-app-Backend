const express = require("express");
const app = express();
const mongoose = require('mongoose');
const product = require('./models/product.model');
const Product = require("./models/product.model");
const { typography } = require("@chakra-ui/react");
// const uri =
app.use(express.json());
app.use(express.urlencoded({extended:false}))

mongoose.connect(
"mongodb+srv://sahilnegipang:6uguQjLO8tGqTtzH@backenddb.ugqqlvr.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
  console.log("Connected");
})
.catch((err)=>{
  console.log(err);
})



const productRoutes = require('./routes/product.route')


app.use("/api/products" , productRoutes);



app.get("/", (req, res) => {
     res.send("Hello , JI ");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
