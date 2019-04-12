let Library = function(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlist = [];

}

Library.prototype.addPlaylist = function(playlistName){
  this.playlist.push(playlistName);
}


let Playlist = function (name){
  this.name = name;
  this.tracks = [];

}

Playlist.prototype.addTrack = function(track){
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function(){
  let avgRating = 0
  this.tracks.forEach(function (track){
    avgRating += track.rating
  });
  return avgRating/this.tracks.length
}

Playlist.prototype.totalDuration = function (){
  let totalSeconds = 0
  this.tracks.forEach(function (track){
    totalSeconds += track.length
  });
  return totalSeconds;
}

let Track = function (title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

let nicksLibrary = new Library('nicksLibrary', 'Nick')
let nicksPlaylist = new Playlist('chill jams')
let track1 = new Track('1999', 5, 180)
let track2 = new Track('little lion man', 4, 167)
let track3 = new Track('Girls like you', 3, 156)
let track4 = new Track('PartyRock', 1, 120)

nicksPlaylist.addTrack(track1);
nicksPlaylist.addTrack(track2);
nicksPlaylist.addTrack(track3);
nicksPlaylist.addTrack(track4);
nicksLibrary.addPlaylist(nicksPlaylist);


console.log(nicksPlaylist.overallRating());
console.log(nicksPlaylist.totalDuration());
// console.log('%j', nicksLibrary);



