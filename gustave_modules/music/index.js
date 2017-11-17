const PlayMusic = require('playmusic');
const pm = new PlayMusic();

const playFavorite = () => {
    pm.init({email: "boehm_e@etna-alternance.net", password: "lost4815162342"}, function(err) {
	if(err) console.error("ERROR  : ", err);
	pm.getFavorites(function(err, data) {
	    for (let i=0; i< data.track.length; i++) {
		let id = data.track[i].storeId;
		pm.getStreamUrl(id, function(err, url) {
		    global.gustave.system.speaker.play(url);
		});
	    }
	});

    })
}

const start = (label, phrase) => {
    switch (label) {
    case "listen":
	console.log("LISTEN");
	break;
    case "favorite":
	return playFavorite();
	break;
    }
}


exports.start = start


