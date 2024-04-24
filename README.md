# ayat quran
```
const verse = await getRandomVerse();
      message.channel.send(verse);
```
# souar quran info
```
args +
const surahInfo = await getSurahInfo(surahNumber);
      message.channel.send(`Surah ${surahInfo.englishName}: ${surahInfo.name} (${surahInfo.numberOfAyahs} ayahs)`);
```
# to unistall
npm i --save kingquran