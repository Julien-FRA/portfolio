import styles from './Text.module.scss';

type TextProps = {
    title : string,
    items: {
        subtitle: string;
        content: string;
    }[],
}

const Text = ({title, items}: TextProps) => {
    return (
        <section className={styles.text}>
            <div className={styles.wrapper}>
                <h2 className={styles.bigTitle}>{title}</h2>
                {items.map((item, key) => (
                    <div key={key} className={styles.paragraph}>
                        <h3>{item.subtitle}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Text;