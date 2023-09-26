const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");

const TrabajadorSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        rut: {
            type: String
        },
        fechaNacimiento: {
            type: String
        },   
        telefono: {
            type: Number
        },   
        fechaIngreso: {
            type: Date
        },
        cargo: {
            type: String
        },                                      
        tipoContrato: {
            type: String
        },   
        sueldoBase: {
            type: Number
        },
        afp: {
            type: String
        },  
        salud: {
            type: String
        },                                     
        deleted: {
            type: Boolean
        }       
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

TrabajadorSchema.plugin(mongoosePaginate);
TrabajadorSchema.plugin(mongoosePaginateAggregate);
module.exports = mongoose.model('trabajador', TrabajadorSchema);