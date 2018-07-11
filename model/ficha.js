var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ficha = new Schema({
    
    sintomas : String,
    doença : String,
    hipertenso : Boolean,
    alergico : Boolean,
    diabetes : Boolean,
    prescricao : String,
    observacoes : Boolean,
    localidade: { type: Schema.Types.ObjectId , ref: 'localidade'},
    paciente: { type: Schema.Types.ObjectId , ref: 'paciente'}
    
})

var Ficha = mongoose.model('ficha', ficha);

module.exports = Ficha;
