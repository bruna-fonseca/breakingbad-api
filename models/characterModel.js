const { ObjectId } = require('mongodb');
const connect = require('../config/connect');

const getAllModel = async () => 
  connect().then((db) => db.collection('characters').find().sort({ name: 1}).toArray())
    .catch((error) => error.message);

const findCharacterModel = async (name) => 
  connect().then((db) => db.collection('characters').findOne({ name }))
    .catch((error) => error.message);

const addCharacterModel = async (name) => {
  connect().then((db) => db.collection('characters').insertOne({ name }))
    .then((response) => response.ops[0])
    .catch((error) => error.message);
};

const updateCharacterNameModel = async (name, id) =>
  connect().then((db) => db.collection('characters').updateOne(
    { _id: ObjectId(id) },
    { $set: { name } },
    ))
      .catch((error) => error.message);

const deleteCharacterModel = async (id) => 
    connect().then((db) => db.collection('characters').deleteOne({ _id: ObjectId(id) }))
      .catch((error) => error.message);

module.exports = {
  getAllModel,
  addCharacterModel,
  findCharacterModel,
  updateCharacterNameModel,
  deleteCharacterModel
};