const mongoose = require('mongoose');

const RegistroHuellasSchema = new mongoose.Schema(
    {
        rut: {
            type: String
        },
        email: {
            type: String
        },        
        huella_1: {
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

module.exports = mongoose.model('registroHuellas', RegistroHuellasSchema);