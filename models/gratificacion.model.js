const mongoose = require('mongoose');

const GratificacionSchema = new mongoose.Schema(
    {
        monto: {
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

module.exports = mongoose.model('gratificacion', GratificacionSchema);