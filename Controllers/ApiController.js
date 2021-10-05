const superagent=require('superagent');
const {ApiModel}=require('../Models/ApiModel')


const getData =async(req,res)=>{
const url='https://watches-world.herokuapp.com/watches-list/';
superagent.get(url).then(response=>{
    const responseData=response.body.map(watch=>{
        return new ApiModel(watch);  
    })
    res.send(responseData)
})
}
module.exports={getData}