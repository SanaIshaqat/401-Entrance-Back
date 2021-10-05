'use strict';

const { watchMongooseModel } = require('../Models/MongooseModel');


//creat post
// app.post('/create-fav',)
//get get
// app.get('/get-fav',)
//delete 
// app.delete('/delete-fav',)
//update put 
// app.put('/update-fav',)

const createFavController = async (req, res) => {

    const {
        watchName,
        description,
        price,
        image,
    } = req.body;

    const slug = watchName.toLowerCase().split(' ').join('-');

    await watchMongooseModel.find({ slug: slug }, (error, data) => {
        if (data.length > 0) {
            res.send('Data Already Exists')
        } else {
            const newWatchMongooseModel = new watchMongooseModel({
                watchName: watchName,
                slug: slug,
                description: description,
                price: price,
                image: image,
            });
            newWatchMongooseModel.save();
            res.send('Added to Fav')
        }
    })
}

const getFavController=async(req,res)=>{
    await watchMongooseModel.find({},(error,data)=>{
        res.send(data);
    })
}

const deleteFavController=async(req,res)=>{
const slug=req.params.slug;
await watchMongooseModel.remove({ slug: slug }, (error, data) => {
if (error){
    res.send(error)
}else{
    res.send(data)
}
})
}

 const updateFavController=async(req,res)=>{
     const{watchName}=req.body;
     const slug=req.params.slug;
     await watchMongooseModel.find({slug:slug},(error,data)=>{
         if (error){
             res.send(error)
         }else{
             data[0].watchName=watchName;
            //  data[2].description=description;
            //  data[3].price=price;
             data[0].save();
            //  data[2].save();
            //  data[3].save();
             watchMongooseModel.find({},(error,data)=>{
                 res.send(data)
             })
         }
     })

 }





module.exports={createFavController,getFavController,deleteFavController,updateFavController}