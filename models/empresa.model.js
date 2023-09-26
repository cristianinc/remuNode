const mongoose = require('mongoose');

const EmpresaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        rut: {
            type: String
        },
        representanteLegal: {
            type: String
        },                
        telefono: {
            type: String
        },
        direccion: {
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

module.exports = mongoose.model('empresa', EmpresaSchema);