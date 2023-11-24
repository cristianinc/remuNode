const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");


const AsignacionFamiliarSchema = new mongoose.Schema(
    {
        mes: { type: Number },
        anio: { type: Number },
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
AsignacionFamiliarSchema.plugin(mongoosePaginate);
AsignacionFamiliarSchema.plugin(mongoosePaginateAggregate);

module.exports = mongoose.model('asignacionfamiliar', AsignacionFamiliarSchema);