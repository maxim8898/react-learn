import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmBlock from './FilmBlock';

const data = {
  id: 1,
  title: 'Django Unchained',
  tagline: 'string',
  vote_average: 4.1,
  vote_count: 25,
  release_date: '2012',
  poster_path: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg',
  overview: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
  budget: 0,
  revenue: 1000,
  runtime: 154,
  genres: [
    'dramas',
  ],
};

storiesOf('FilmBlock', module).add('Header', () => <FilmBlock data={data} fetchFilm={() => (true)} />);
