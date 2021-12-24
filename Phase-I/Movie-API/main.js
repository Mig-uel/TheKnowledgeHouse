import dotenv from 'dotenv';
dotenv.config();

import { search } from "./api";
import { appendMovies, clearMovies, setMessage } from './ui';

(() => {
  const handleSearchButtonClick = () => {
    const searchTerm = document.getElementById('search-pane-input').value;

    clearMovies();
    setMessage('Searching...');

    search(searchTerm)
      .then((response) => {
        if (response.Response === 'True') {
          appendMovies(response.Search);
          setMessage();
        }
        else
          setMessage('No results found.');
      })
      .catch((error) => {
        setMessage("Unexpected error occured." + error);
      })
  }

  window.addEventListener('load', () => {
    document.getElementById('search-pane-button')
      .addEventListener('click', handleSearchButtonClick)
  });
})();