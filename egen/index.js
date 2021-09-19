
const axios = require('axios').default;
const yMusic = require('node-youtube-music').default;

const song = yMusic.searchMusics('Max Carlquist');

song.then(resultat => {
    // console.log('resultat', resultat);
}).catch(err => {
    console.log(err);
});


axios.get('https://jsonplaceholder.typicode.com/todos')
.then(res => {
    console.log('from api', res.data);
}).catch(err => {
    console.log(err);
});
