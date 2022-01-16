const getEpisodes = require('../helpers/api');

const { getAllService,
  addCharacterService, 
  updateCharacterNameService,
  deleteCharacterService,
} = require('../services/characterService');

const getAll = async (req, res) => {
  try {
    const getAllChars = await getAllService();
    res.status(200).json(getAllChars);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addCharacter = async (req, res) => {
  try {
    const { name } = req.body;
    const episodes = await getEpisodes(name);
    await addCharacterService(name, episodes);
    res.status(201).json(`Personagem cadastrado!`);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCharacterName = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateName = updateCharacterNameService(name, id);
    res.status(200).json(updateName);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacter = deleteCharacterService(id);
    res.status(200).json('Personagem deletado com sucesso!');
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { 
  getAll,
  addCharacter,
  updateCharacterName,
  deleteCharacter
};