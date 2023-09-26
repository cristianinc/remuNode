const mongoose = require('mongoose');

const RentasImponiblesSchema = new mongoose.Schema(
    {
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