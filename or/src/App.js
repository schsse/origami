import React from 'react';
import styles from './app.module.css';

//components
import Header from './components/header/index.js';

function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
