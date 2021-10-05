'use strict';

class ApiModel{
    constructor(obj){
this.watchName=obj.title,
this.description=obj.description,
this.price=obj.toUSD,
this.image=obj.image_url
    }
}


module.exports={ApiModel}