/*


Task 1: Complete the below code to create a music player that will run through a playlist of songs and output to the console as described in the comments.

Task 2: Add some extra logic to handle these 2 scenarios:
- Trying to call myMusicPlayer.play() if there are no songs in the playlist
- Trying to call myMusicPlayer.skip() when there are no songs left to play



Optional 1: Your music player stops once you have reached the end of the playlist.
Can you implement the 'repeat' functionality so that it starts again from the beginning instead of stopping?


Optional 2: Can you implement the shuffle functionality for your music player?
This means the order the songs are played in will be random, but each song will only play once.

 */

class MusicPlayer {
  constructor() {
    this.songList = [];
    this.songIndex = 0;
  }
  add(newSong, newSinger) {
    const newItem = { song: newSong, singer: newSinger };
    this.songList.push(newItem);
  }
  play() {
    if (this.songList[this.songIndex]) {
      console.log(
        `Currently playing: ${this.songList[this.songIndex]["song"]} by ${
          this.songList[this.songIndex]["singer"]
        }`
      );
    } else {
      console.log("sorry, no songs to play");
    }
  }
  skip() {
    this.songIndex++;
    if (this.songList[this.songIndex]) {
      this.play();
    } else {
      this.songIndex = 0;
      this.play();
    }
  }
  previous() {
    this.songIndex--;
    if (this.songList[this.songIndex]) {
      this.play();
    } else {
      this.songIndex = this.songList.length - 1;
      this.play();
    }
  }

  shuffle() {
    this.songIndex = Math.floor(Math.random() * this.songList.length);
    this.play();
  }
}
let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody", "Queen");
myMusicPlayer.add("Yesterday", "The Beatles");
myMusicPlayer.add("Vogue", "Madonna");

myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.previous(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.skip(); // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.shuffle();
