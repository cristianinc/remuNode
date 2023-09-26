const mongoose = require('mongoose');

const TopesImponiblesSchema = new mongoose.Schema(
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

module.exports = mongoose.model('topesimponible', TopesImponiblesSchema);