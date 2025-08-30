import React from 'react';
import './Music.css';
import songCover1 from '../images/style-by-taylor-swift.png'; // Hotel California by The Eagles
import songCover2 from '../images/espresso-by-sabrina-carpenter.png'; // Back in Black by AC/DC
import songCover3 from '../images/brooklyn-baby-by-lanadelray.jpg'; // Appetite for Destruction by Guns N' Roses
import songCover4 from '../images/agora-hills-by-doja-cat.png'; // Appetite for Destruction by Guns N' Roses

const favoriteGenres = ["Lana Del Ray", "Dua Lipa", "Sabrina Carpenter", "Lady Gaga"];
const favoriteSongs = [
  { title: "Style", artist: "Taylor Swift", imgSrc: songCover1 },
  { title: "Espresso", artist: "Sabrina Carpenter", imgSrc: songCover2 },
  { title: "Brooklyn Baby", artist: "Lana Del Ray", imgSrc: songCover3 },
  { title: "Agora Hills", artist: "Doja Cat", imgSrc: songCover4 },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“White girl music doesn’t play — it speaks directly to the soul.” 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Favourite Artists in this Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>         
      </div>

      <div className="songs-section">
        <h3>Favorite Songs</h3>
        <div className="songs">
          {favoriteSongs.map((song, index) => (
            <div key={index} className="song-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={song.imgSrc} alt={song.title} className="song-image" />
              <div className="song-details">
                <h4>{song.title}</h4>
                <p>by {song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
