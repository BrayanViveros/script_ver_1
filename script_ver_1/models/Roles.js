import {Schema,model} from 'mongoose'


const Roles= new  Schema({
   rol:{
    type:String
   }
   },
   {
      versionKey:false
   }
   );


  
export default model('Roles', Roles);
