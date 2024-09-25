const user = require ('../models/SongModules');

const main ={
    index: (req, res) =>{
        res.render('index');
    },
    genre: (req, res) =>{
        res.render('all_genre');
    },
    songs: (req, res) =>{
        res.render('all_songs');
    },
    artist: (req, res) =>{
        res.render('all_artists');
    },
    playlists: (req, res) =>{
        res.render('all_playlists');
    },
    add_song: (req, res) =>{
        res.render('add_song');
    }
};

module.exports = main;