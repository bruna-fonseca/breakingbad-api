const { getAllModel,
  addCharacterModel,
  findCharacterModel, 
  updateCharacterNameModel, 
  deleteCharacterModel,
} = require('../models/characterModel');

const getAllService = async () => {
  const chars = await getAllModel();

  return chars;
};

const addCharacterService = async (name, episodes) => {
  if (!name || name === '') throw new Error('precisa ser um nome válido');

  const findChar = await findCharacterModel(name);
  if (findChar) throw new Error('personagem já cadastrado! Tente adicionar um novo.');

  const createChar = await addCharacterModel(name, episodes);
  return createChar;
};

const updateCharacterNameService = async (name, id) => {
  const updateName = await updateCharacterNameModel(name, id);
  return updateName;
};

const deleteCharacterService = async (id) => {
  const deleteChar = await deleteCharacterModel(id);

  return deleteChar;
};

module.exports = {
  getAllService,
  addCharacterService,
  updateCharacterNameService,
  deleteCharacterService
};