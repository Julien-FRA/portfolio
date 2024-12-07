import styles from "./List.module.scss";

const List = () => {
  return (
    <section className={styles.list}>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
        <div className={styles.rightContent}>
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="#">
                <div className={styles.item}>
                  <h3>Envify</h3>
                  <p>Développement Web</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.item}>
                  <h3>Envify</h3>
                  <p>Développement Web</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.item}>
                  <h3>Envify</h3>
                  <p>Développement Web</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default List;
