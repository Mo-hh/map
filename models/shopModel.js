const mongoose =require('mongoose');

const shopSchema = new mongoose.Schema ({

name:{type:String,required:true},
cheapesDish:{type:Number,required:true,min:0},
location:{type:mongoose.Mixed,required:true,index:'2dsphere'}  //mixed of datatype and  that  meeans is object //


},{versionKey:false})

const shopModel =mongoose.model('shops',shopSchema);

module.exports=shopModel;
