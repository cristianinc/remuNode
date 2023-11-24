const mongoose = require('mongoose');

const SeguroCesantiaSchema = new mongoose.Schema(
    {
        mes: { type: Number },
        anio: { type: Number },
        tipoContrato: {
            type: String
        },
        empleador: {
            type: Number
        },
        trabajador: {
            type: Number
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

module.exports = mongoose.model('segurocesantia', SeguroCesantiaSchema);