const mongoose = require ('mongoose');

const taskShema = new mongoose.Schema(
{
   id: {type:Number},
   title:{type:String,required:true},
   description:{type:String,required:true},
   created_at:{type:Date,required:true},
   updated_at:{type:Date},
}
)

module.exports= mongoose.model('task',taskShema)