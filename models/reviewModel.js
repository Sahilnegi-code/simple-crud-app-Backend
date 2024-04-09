// const { sequelize } = require("./model");

module.exports = (sequelize , DataTypes) =>{
    // the Review that is define inside the sequelize , it must be singular  
    const Review = sequelize.define("review",{
      
        
        rating : {
            type:DataTypes.INTEGER
        },
        description:{
            type: DataTypes.TEXT
        },
        
    });



   return Review
}