const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/playlists', main.playlists);
router.get('/genre', main.genre);
router.get('/songs', main.songs);
router.get('/artist', main.artist);
router.get('/add_song', main.add_song);

// router.get('/list', main.list);
// router.post('/save', main.save );
// router.get('/delete/:id', main.delete );
// router.get('/edit/:id', main.edit );
// router.post('/edit/:id', main.update );

module.exports = router;