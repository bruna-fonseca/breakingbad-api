const { StatusCodes } = require('http-status-codes');
const getEpisodes = require('../helpers/api');

const { getAllService,
  addCharacterService, 
  updateCharacterNameService,
  deleteCharacterService,
} = require('../services/characterService');

const getAll = async (_req, res) => {
  try {
    const getAllChars = await getAllService();
    res.status(StatusCodes.OK).json(getAllChars);
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json(error.message);
  }
};

const addCharacter = async (req, res) => {
  try {
    const { name } = req.body;
    const episodes = await getEpisodes(name);
    await addCharacterService(name, episodes);
    res.status(StatusCodes.CREATED).json(`Personagem cadastrado!`);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json(error.message);
  }
};

const updateCharacterName = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateName = updateCharacterNameService(name, id);
    res.status(StatusCodes.OK).json('Nome do personagem editado com sucesso!');
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error.message);
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCharacterService(id);
    res.status(StatusCodes.NO_CONTENT).json('Personagem deletado com sucesso!');
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error.message);
  }
};

module.exports = { 
  getAll,
  addCharacter,
  updateCharacterName,
  deleteCharacter
};