'use strict';

const repository = require('../repositories/UserDonator-repository');

exports.get = async(req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({message: 'Falha ao buscar os usuarios', data: e});
    }
};

exports.getById = async(req, res) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send({data});
    } catch (e) {
        res.status(400).send({message: 'Falha ao buscar usuario', data: e});
    }
};


exports.post = async(req, res) => {
    try {
        await repository.post(req.body);
        res.status(201).send({message: 'Usuario criado com sucesso!'});
    } catch (e) {
        res.status(400).send({message: 'Falha ao criar usuario', data: e});
    }
};

exports.put = async(req, res) => {
    try {
        await repository.put(req.params.id, req);
        res.status(200).send({message: "Usuario atualizado com sucesso!"});
    } catch (e) {
        res.status(400).send({message: 'Falha ao atualizar usuario', data: e});
    }
};

exports.delete = async(req, res) => {
    try {
        await repository.delete(req.body.id);
        res.status(200).send({message: "Usuario removido com sucesso!"});
    } catch (e) {
        res.status(400).send({message: 'Falha ao remover usuario', data: e});
    }
};
