import styles from 'styled-components';

export default styles.div`
  padding: 20px 10%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 220px);
  min-height: calc(100vh - 80px);
  
  &.no-films {
    display: block;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
`;
