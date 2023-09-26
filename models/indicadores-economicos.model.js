const mongoose = require('mongoose');

const IndicadoresEconomicosSchema = new mongoose.Schema(
    {
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