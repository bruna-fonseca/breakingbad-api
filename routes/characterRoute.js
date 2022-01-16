const express = require('express');
const { getAll, addCharacter,
  updateCharacterName,
  deleteCharacter } = require('../controllers/characterController');

const router = express.Router();

router.route('/')
  .get(getAll)
  .post(addCharacter)

router.route('/:id')
  .put(updateCharacterName)
  .delete(deleteCharacter);


module.exports = router;