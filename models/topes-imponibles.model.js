const mongoose = require('mongoose');

const TopesImponiblesSchema = new mongoose.Schema(
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

module.exports = mongoose.model('topesimponible', TopesImponiblesSchema);