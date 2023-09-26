const mongoose = require('mongoose');

const AsignacionFamiliarSchema = new mongoose.Schema(
    {
        tramo: {
            type: String
        },
        monto: {
            type: Number
        },
        renta: {
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

module.exports = mongoose.model('asignacionfamiliar', AsignacionFamiliarSchema);