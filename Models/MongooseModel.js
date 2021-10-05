'use strict';

const mongoose=require('mongoose');

const watchSchema=mongoose.Schema({
    watchName:{
        type:String,
        lowercase:true,
        unique:true,
        trim:true
    
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true,
        trim:true
    },
    description:String,
    price:String,
    image:String,


})

const watchMongooseModel=mongoose.model('watches',watchSchema)
    
module.exports={watchMongooseModel}