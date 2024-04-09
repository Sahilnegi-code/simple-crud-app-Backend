const express = require("express");
const app = express();
const cors = require('cors');


// middleware
const corOption = {
  origin : 'https:localhost:8081'
}

// Router
const router = require('./routes/productRouter.js')

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors(corOption));

app.use('/api/products', router);

const PORT =  8080;

// const productRoutes = require('./routes/product.route')


// app.use("/api/products" , productRoutes);



app.get("/", (req, res) => {
     res.send("Hello , JI ");
  });

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
