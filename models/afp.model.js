const mongoose = require('mongoose');

const AfpSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        tasa_dependientes: {
            type: Number
        },
        sis: {
            type: Number
        },                
        tasa_independientes: {
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

module.exports = mongoose.model('afp', AfpSchema);