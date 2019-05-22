import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmTile from './FilmTile';

const data = {
  title: 'Django Unchained',
  release_date: '2012',
  poster_path: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg',
  genres: [
    'dramas',
  ],
};

storiesOf('FilmTile', module)
  .addDecorator(storyFn => <div style={{ width: '20px' }}>{storyFn()}</div>)
  .add('Tile', () => (<FilmTile
    genre={data.genres.join(', ')}
    img={data.poster_path}
    name={data.title}
    year={data.release_date}
  />));
