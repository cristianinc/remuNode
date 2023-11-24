const mongoose = require('mongoose');

const IndicadoresEconomicosSchema = new mongoose.Schema(
    {
        mes: { type: Number },
        anio: { type: Number },
        indicador: {
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

module.exports = mongoose.model('indicadoreseconomico', IndicadoresEconomicosSchema);