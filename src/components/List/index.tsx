import styles from "./List.module.scss";

type ListProps = {
  title: string;
  items: {
    subtitle: string;
    caption: string;
    content: string;
    href: string;
  }[];
};

const List = ({ title, items }: ListProps) => {
  return (
    <section className={styles.list} id="projects">
      <div className={styles.wrapper}>
        <h2 className={styles.ListTitle}>{title}</h2>
        <ul>
          {items.map((item, key) => (
            <li className={styles.item} key={key}>
              <input type="checkbox" name="accordion" id={`acc` + key} />
              <label className={styles.label} htmlFor={`acc` + key}>
                <div className={styles.container}>
                  <h3>{item.subtitle}</h3>
                  <p>{item.caption}</p>
                </div>
                <span />
              </label>
              <div className={styles.content}>
                <p className="small">{item.content}</p>
                <a href={item.href}>Learn more</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default List;
