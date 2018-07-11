var Ficha = require('../model/ficha')
var Localidade = require('../model/localidade')
var Paciente = require('../model/paciente')

module.exports = {
    getAll: async (req, res) => {
        const fichas = await Ficha.find().populate('paciente').populate('localidade') ;
        res.status(200).json(fichas);
    },

    getById: async (req, res) => {
        const ficha = await Ficha.findById(req.params.id);
        res.status(200).json(ficha);
    },

    update: async (req, res) => {
        const newFicha = req.body;
        await Ficha.findByIdAndUpdate(req.params.id, newFicha);
        res.status(200).send('The ficha has been updated!');
    },

    delete: async (req, res) => {
        await Localidade.findByIdAndRemove(req.params.id);
        res.status(200).send('The car has been deleted!');
    },

    postNewFichaPaciente: async (req, res) => {
        const newFicha = new Ficha(req.body);
        const paciente = await Paciente.findById(req.params.id);

        newFicha.paciente = paciente;
        await newFicha.save();

        paciente.ficha = newFicha
        await paciente.save();

        res.status(201).json(newFicha);
    }    
}




