'use strict';

const express=require('express');
 const app=express();
 app.use(express.json());

 const cors=require('cors');
 app.use(cors());

 require('dotenv').config();

 const port=process.env.PORT;

 //Require Files
 const {getData}=require('./Controllers/ApiController');
 const {createFavController,getFavController,
    deleteFavController,updateFavController}=require('./Controllers/CrudController')

const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/watches',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//proof of life
app.get('/',(req,res)=>{
    res.send('Server is Working')
})

//Api
app.get('/get-data',getData)

//crud

//creat post
app.post('/create-fav',createFavController)
//get get
app.get('/get-fav',getFavController)
//delete 
app.delete('/delete-fav/:slug',deleteFavController)
//update put 
app.put('/update-fav/:slug',updateFavController)





 app.listen(port,()=>{
     console.log(`App Listening on ${port}`)
 })