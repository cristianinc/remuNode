const mongoose = require('mongoose');

const AsistenciaSchema = new mongoose.Schema(
    {
        rut: {
            type: String
        },
        fechaHora: {
            type: Date,
            default: Date.now
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

module.exports = mongoose.model('asistencia', AsistenciaSchema);