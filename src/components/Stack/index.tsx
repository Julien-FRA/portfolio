import styles from "./Stack.module.scss";
import Image, { StaticImageData } from "next/image";

type StackProps = {
  title: string;
  items: {
    src: StaticImageData;
    alt: string;
    techno: string;
  }[];
};

const Stack = ({ title, items }: StackProps) => {
  return (
    <section className={styles.stack}>
      <div className={styles.wrapper}>
        <h2 className={styles.stackTitle}>{title}</h2>
        <div className={styles.items}>
          {items.map((item, key) => (
            <div className={styles.item} key={key}>
              <figure>
                <Image src={item.src} alt={item.alt} />
              </figure>
              <p>{item.techno}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
