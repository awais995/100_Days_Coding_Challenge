// Day 14 Challenge Question 40
// Declare a function 
function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = { artist, title }; // variable Intialize
    /*
    This condition checks if the tracks parameter was provided. 
    If it's not undefined, it means a value was provided for tracks, 
    so we assign that value to the tracks property of the album object.
    */
    if (tracks !== undefined) { 
        album.tracks = tracks;
    }
    return album;
}

// Making three dictionaries representing different albums
const album1 = make_album("Nusrat Fateh Ali Khan", "Must Must");
const album2 = make_album("Atif Aslam", "Raabta");
const album3 = make_album("Ali Zafar", "Jhoom", 12);

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);