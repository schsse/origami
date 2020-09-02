import React from 'react';
import styles from './index.module.css';

//components
import Header from '../header/Header';
import Aside from '../aside/Aside';
import Footer from '../footer/Footer';

function PageLayout(props) {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <main className={styles.main}>
          {props.children} 
        </main>
        {/* this one displays the <Main /> meaning showing anything wrapped in between its opening
        and closing tag!! */}
      </div>
      <Footer />
    </div>
  );
}
export default PageLayout