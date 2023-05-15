import { useSelector } from "react-redux";
import css from "./FavoritesPage.module.css";
import { MovieListCard } from "../../components/MovieListCard/MovieListCard";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  console.log(favorites);

  if (!favorites?.length) return <div className={css.empty}>You do not have any favorite movie yet.</div>;

  return (
    <ul className={css.container}>
      {favorites.map((item) => (
        <MovieListCard movie={item} />
      ))}
    </ul>
  );
};

export { FavoritesPage };
