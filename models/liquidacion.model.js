const mongoose = require('mongoose');

const LiquidacionSchema = new mongoose.Schema(
    {
        empresa: {
            nombre: { type: String },
            rut: { type: String },
            direccion: { type: String },
        },
        fecha_liquidacion: {
            mes: { type: Number },
            anio: { type: Number },
        }, 
        trabajador: {
            nombre: { type: String },
            rut: { type: String },
            fecha_ingreso: { type: Date },
        }, 
        descuentos_imponibles: {
            sueldo_base: { type: Number },
            bono_responsabilidad: { type: Number },
            bono_asistencia: { type: Number },
            horas_extras: { type: Number },
            gratificacion: { type: Number },
        },
        total_descuentos_imponibles: {
            type: Number
        },
        descuentos_no_imponibles: {
            asignacion_familiar: { type: Number },
            colacion: { type: Number },
            movilizacion: { type: Number },
            aguinaldo: { type: Number },
        }, 
        total_descuetos_no_imponibles: {
            type: Number
        },
        descuentos_legales: {
            afp: { type: Number },
            salud: { type: Number },
            seguro_cesantia: { type: Number },
            impuesto_renta: { type: Number },
            caja_compensacion: { type: Number },
            sindicato: { type: Number },
        }, 
        total_descuentos_legales: {
            type: Number
        },
        saldo_liquido: {
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

module.exports = mongoose.model('liquidacion', LiquidacionSchema);