const mongoose =require('mongoose');

const shopSchema = new mongoose.Schema ({

name:{type:String,requierd:true},
cheapesDish:{type:Number,requierd:true,min:0},
location:{type:mongoose.Mixed,requierd:true,index:'2dsphere'}  //mixed of datatype and  that  meeans is object //


},{versionKey:false})

const shopModel =mongoose.model('shops',shopSchema);

module.exports=shopModel;
