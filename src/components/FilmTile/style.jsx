import styles from 'styled-components';

export default styles.div`
  margin: 0 10px;
  cursor: default;
  text-decoration: none;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "img img"
  "name year"
  "genre genre";
    
  img {
    width: 200px;
    grid-area: img;
    cursor: pointer;
    margin-bottom: 15px;
  }
  
  .film-name {
    text-decoration: none;
    grid-area: name;
    text-transform: uppercase;
    font-weight: bold;
    float: left;
  }
  
  .film-year {
    grid-area: year;
    float: right;
    font-size: 12px;
    font-weight: bold;
    border: solid 1px;
    border-radius: 3px;
    align-self: center;
    justify-self: center;
    padding: 0 5px;
  }
  
  .film-genre {
    grid-area: genre;
    text-transform: capitalize;
    color: #8c8c8c;
    font-size: 12px;
  }
`;
