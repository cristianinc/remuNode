const mongoose = require('mongoose');

const RentasImponiblesSchema = new mongoose.Schema(
    {
        mes: { type: Number },
        anio: { type: Number },
        nombre: {
            type: String
        },
        valor: {
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

module.exports = mongoose.model('rentaimponible', RentasImponiblesSchema);