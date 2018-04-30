const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=guatemala&api_key=4508bddb3ba3b7f43dd9948fcd923a83&format=json';

function getArtists(){
    return fetch(URL)
        .then(response=>response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => ({
                name: artist.name,
                image: artist.image[3]['#text'],
                likes: 200,
                comments: 144
            })
        ));
};

export {getArtists};