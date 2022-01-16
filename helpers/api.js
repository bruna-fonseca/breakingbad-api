const axios = require('axios');

const getEpisodes = async (character) => {
    try {
      const { data } = await axios.get('https://www.breakingbadapi.com/api/episodes');
      const episodes = [];
      data.map((req) => {
        const found = req.characters.some(char => char.toLowerCase() === character.toLowerCase())
        if (found) episodes.push({ episode: req.episode, title: req.title })
      })
      return episodes;
    } catch (error) {
      console.log(error.message);
    }
};

module.exports = getEpisodes;