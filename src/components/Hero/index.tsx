import styles from "./Hero.module.scss";

type HeroProps = {
  location?: string;
  title: string;
  subtitle?: { normal: string; bold: string }[];
};

const Hero = ({ location, title, subtitle }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        {location ? <p className={styles.heroLocation}>{location}</p> : null}
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle
          ? subtitle.map(
              (item: { normal: string; bold: string }, key: number) => (
                <div key={key} className={styles.heroSubtitle}>
                  <p className={styles.heroSubtitleNormal}>{item.normal}</p>
                  <span>→</span>
                  <p className={`${styles.heroSubtitleBold} bold`}>
                    {item.bold}
                  </p>
                </div>
              )
            )
          : null}
      </div>
    </section>
  );
};

export default Hero;
