import {Schema, model} from 'mongoose';


const docenteSchemas = new Schema({
        hoja_vida: {
          type: String,
        },
      },
      {
        versionKey: false,
        timestamps: false,
      }
)

export default model('docente', docenteSchemas);