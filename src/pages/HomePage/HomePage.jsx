import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={css["home-page"]}>
      <h1 className={css.phone}>
        Phone<span className={css.book}>/book</span>
      </h1>
    </main>
  );
};

export default HomePage;
