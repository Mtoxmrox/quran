// index.js

const axios = require('axios');

async function getRandomVerse() {
  try {
    const response = await axios.get('https://api.alquran.cloud/v1/random/ayah');
    const verse = response.data.data.ayah.text;
    const verseNumber = response.data.data.numberInSurah;
    const surah = response.data.data.surah.name;

    return `${verse}\n[${surah} - ${verseNumber}]`;
  } catch (error) {
    console.error('Error fetching random verse:', error);
    return 'Unable to fetch random verse at the moment.';
  }
}

async function getSurahInfo(surahNumber) {
  try {
    const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
    const surahInfo = response.data.data;

    return surahInfo;
  } catch (error) {
    console.error('Error fetching surah info:', error);
    return 'Unable to fetch surah info at the moment.';
  }
}

module.exports = {
  getRandomVerse,
  getSurahInfo
};
