const mongoose = require('mongoose');

const ImpuestoSegundaCategoriaSchema = new mongoose.Schema(
    {
        indicador: {
            type: String
        },
        valorDesde: {
            type: Number
        },
        valorHasta: {
            type: Number
        },        
        factor: {
            type: Number
        },                
        cantidadRebajar: {
            type: Number
        },
        impuestoEfectivo: {
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

module.exports = mongoose.model('impuestosegundacategoria', ImpuestoSegundaCategoriaSchema);