const mongoose = require('mongoose');

const SaludSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        tasa: {
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

module.exports = mongoose.model('salud', SaludSchema);