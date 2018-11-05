'use strict';
const tw = require('./twitter');
const axios = require('axios');

module.exports.papaSchrute = async (event, context) => {
  try {
    const getJoke = await axios({
      url: 'https://icanhazdadjoke.com/',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Papa Schrute (https://twitter.com/PapaSchrute)'
      }
    });

    await tw.post('statuses/update', {
      status: getJoke.data.joke
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};