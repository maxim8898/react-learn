import styles from 'styled-components';

export default styles.div`
  background: rgba(0, 0, 0, .60) url(/src/images/header.jpg);
  background-blend-mode: darken;
  background-size: 100%;
  height: 400px;
  padding: 30px 10%;
  color: white;
  flex-wrap: wrap;
  
  img {
    height: 300px;
    float: left;
    margin-right: 50px;
  }
  
  .film-title {
    font-size: 20px;
    font-weight: bold;
    color: #EE5766;
    display: flex;
    align-items: center;
  }
  
  .film-rating {
    border: solid 2px #EE5766;
    border-radius: 50%;
    margin-left: 10px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .film-tagline {
    margin-bottom: 15px;
    color: #d2d2d2;
  }
  
  .film-year {
    display: flex;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .film-runtime {
    margin-left: 35px;
  }
  
  .film-description {
    color: #d2d2d2;
  }
`;
