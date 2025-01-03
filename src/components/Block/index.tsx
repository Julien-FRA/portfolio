import Link from "next/link";
import styles from "./Block.module.scss";
import Image, { StaticImageData } from "next/image";

type BlockProps = {
  title: string;
  items: {
    src: StaticImageData;
    alt: string;
    subtitle: string;
    caption: string;
    href: string;
  }[];
};

const Block = ({ title, items }: BlockProps) => {
  return (
    <section className={styles.block} id="experiences">
      <div className={styles.wrapper}>
        <h2 className={styles.blockTitle}>{title}</h2>
        <div className={styles.wrapperItems}>
          {items.map((item, key) => (
            <div key={key} className={styles.item}>
              <figure>
                <Image src={item.src} alt={item.alt} />
              </figure>
              <h3>{item.subtitle}</h3>
              <p>{item.caption}</p>
              <Link href={item.href}>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block;
