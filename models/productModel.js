// const { sequelize } = require("./model");

module.exports = (sequelize , DataTypes) =>{
    // the product that is define inside the sequelize , it must be singular  
    const Product = sequelize.define("product",{
        title :{
            type : DataTypes.STRING,
            allowNull : false ,
        }
        ,
        price : {
            type:DataTypes.INTEGER
        },
        description:{
            type: DataTypes.TEXT
        },
        published:{
            type : DataTypes.BOOLEAN
        }
    });


   return Product 
}