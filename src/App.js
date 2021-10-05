import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}/>
      <div className={styles.main}>
        <div className={styles.home}>
          <div className={`${styles.burger_ingredients} pt-10`}>
            <div className={`${styles.title} mb-5`}/>
            <div className={`${styles.tabs} mb-10`}/>
            <div className={styles.group_list}>
            <ul className={styles.inner_content}>
              <li>
                <div className={styles.content}/>
              </li>
              <li>
                <div className={styles.content}/>
              </li>
              <li>
                <div className={styles.content}/>
              </li>
            </ul>
            </div>
          </div>
          <div className={styles.burger_constructor}/>
        </div>
      </div>  
    </div>
  );
}

export default App;
