const db  = require('../models');
const Product = db.products;

// create main Model 



const addProduct =  async (req , res) =>{
  console.log('add-Product');
  console.log(req.body);
  let info = {
    title : req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }
  try{
    console.log(info);
    let product = await Product.create(info);
    
      res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({message : error.message});
  }
}
const getAllProduct = async (req , res) =>{
  console.log('get Products');
  try{
    let products = await Product.findAll({});
    res.status(200).json(products);
  }
  catch(error){
    res.status(500).json({message : error.message})
  }
  
} 

const getOneProduct  = async (req , res) =>{

  const { id }= req.params;
try{
  let product = await Product.findOne(
    {
      where :{
        id : id
      }
    }
    );
  res.status(200).json(product)  
}
catch(error){
  res.status.json({ 
    message:error.message
   });
}
 

}

const updateProduct  = async (req , res) =>{

  const { id }= req.params;
try{
  let product = await Product.
  update(
    req.body ,
    {
      where :{
        id : id
      }
    }
    );
  res.status(200).json(product)  
}
catch(error){
  res.status.json({ 
    message:error.message
   });
}
 

}

const deleteProduct = async (req , res) =>{

  const { id }= req.params;
try{
  let product = await Product.
  destroy(
    {
      where :{
        id : id
      }
    }
    );
  res.status(200).json(product)  
}
catch(error){
  res.status.json({ 
    message:error.message
   });
}
 

}
const getPublishedProduct = async(req,res) =>{

  try{
    const products = await Product.findAll({
      where : {
        published : true
      }
    });
    res.status(200).json(products);
  }
  catch(msg){
    res.status(500).json({message  : msg })
  }
}
module.exports = {
  addProduct , getAllProduct , getOneProduct , updateProduct , deleteProduct , getPublishedProduct
};