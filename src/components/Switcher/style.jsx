import styles from 'styled-components';

export default styles.div` 
  &.sort-by-block button.checked {
    color: #EE5766;
  }
  &.sort-by-block {
    display: flex;
    margin-left: auto;
    align-items: center;
  }
  
  &.sort-by-block .label {
    color: black;
    font-weight: bold;
    font-size: 14px;
  }
  
  &.sort-by-block button {
    background: none !important;
    outline: none;
    margin-left: 15px;
    border: none;
  }
  
  &.sort-by-block button.checked {
    color: #EE5766;
  }
  
  &.search-by-block {
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  &.search-by-block .label {
    font-size: 14px;
  }

  &.search-by-block .search-by button{
    outline: none;
    color: #ffffff;
    margin-left: 15px;
    padding: 3px 15px;
    border: none;
    text-transform: uppercase;
    background: #3A3A3A;
  }
  &.search-by-block .search-by button.checked {
    background: #EE5766 !important;
  }
`;
