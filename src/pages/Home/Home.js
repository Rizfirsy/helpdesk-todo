import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Hi there, helpdesk</h1>
          <p>
            To celebrate Surface’s Original by design campaign, we want you to
            show us how you make something original, something different, by any
            means you know how.
          </p>
        </div>
      </section>
      <section className={styles.team}>
        <h1>MEET OUR TEAM</h1>
        <main>
          <div></div>
        </main>
      </section>
    </div>
  );
};

export default Home;
