const mongoose = require('mongoose');

const TipoContratoSchema = new mongoose.Schema(
    {
        nombre: {
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

module.exports = mongoose.model('tipocontrato', TipoContratoSchema);