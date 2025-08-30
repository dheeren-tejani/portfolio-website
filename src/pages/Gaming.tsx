// Games.tsx

import React from 'react';
import './Gaming.css';
import eldenRing from '../images/eldenring.avif';
import sekiro from '../images/sekiro.jpg';
import uncharted4 from '../images/uncharted4.jpg';
import subnautica from '../images/subnautica-below-zero.avif';

const games = [
  {
    title: "Sekiro, Shadows Die Twice",
    studio: "FromSoftware",
    imgSrc: sekiro,
    description: "A critically acclaimed action-adventure title by FromSoftware, emphasizing precision combat, stealth mechanics, and narrative depth within a historical Japanese setting.",
  },
  {
    title: "Elden Ring",
    studio: "FromSoftware",
    imgSrc: eldenRing,
    description: "An expansive open-world action RPG blending FromSoftware’s signature gameplay with George R.R. Martin’s world-building, offering nonlinear exploration and strategic combat.",
  },
  {
    title: "Uncharted 4, A Thief's End",
    studio: "The Naughty Dog",
    imgSrc: uncharted4,
    description: "A narrative-driven action-adventure developed by Naughty Dog, combining cinematic storytelling, platforming, and exploration in a globally acclaimed franchise.",
  },
  {
    title: "Subnautica, Below Zero",
    studio: " Unknown Worlds Entertainment",
    imgSrc: subnautica,
    description: "A survival adventure set in a dynamic underwater environment, integrating resource management, exploration, and mystery-driven storytelling.",
  },
];

const Gaming: React.FC = () => {
  return (
    <div className="gaming-container">
      <h2 className="gaming-title">🎮 Games That Shaped My Journey</h2>
      <p className="gaming-intro">These Games have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {games.map((game, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={game.imgSrc} alt={game.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{game.title}</h3>
              <h4 className="book-author">{game.studio}</h4>
              <p className="book-description">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;