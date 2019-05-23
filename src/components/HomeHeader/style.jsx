import styles from 'styled-components';

export default styles.div`
  font-family: 'Kodchasan', sans-serif;
  .search-container {
    background: rgba(0, 0, 0, .60) url(https://xage.ru/media/uploads/2019/03/netflix.jpg);
    background-blend-mode: darken;
    background-size: 100%;
    height: 300px;
    padding: 15%;
    padding-bottom: 0;
  }

  .highlighted {
    padding: 0 15%;
    background: #F5F5F5;
    height: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
`;
