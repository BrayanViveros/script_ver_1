import { Schema } from "mongoose";



const ClaseSchema = new Schema ({
   nombre_usuario: {
    type: "string",
    required: true,
   },
   nombre_docente: {
    type: "string",
    required: true,
   },
   fecha: {
    
   }

})