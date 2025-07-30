import styles from './Postcard.module.css';

export default function Postcard() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Post Card</h1>
      <div className={styles.card}>
        <img
          src="/images/postcard.jpg"
          alt="Kyoto Postcard"
          className={styles.image}
        />
        <div className={styles.textContent}>
          <h3 className={styles.title}>A Postcard from Kyoto</h3>
          <p className={styles.description}>
            “The scent of incense floats through the ancient streets, where
            tradition and tranquility meet. Kyoto’s spirit is timeless — a
            gentle reminder of beauty in stillness.”
          </p>
        </div>
      </div>
    </section>
  );
}

