import { Link } from "react-router-dom";

import { GenreBadge } from "../GenreBadge/GenreBadge";
import { StarsRating } from "../StarsRating/StarsRating";
import { urls } from "../../configs";

import css from "./MovieListCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

import { addToFavorite, removeFromFavorites } from "../../redux/slices/favoriteSlice";

const MovieListCard = ({ styleCard, styleGenre, styleTitle, movie, genres }) => {
  const dispatch = useDispatch();
  const { id, title, vote_average, poster_path, genre_ids } = movie;
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = useMemo(() => favorites.some((favorite) => favorite?.id === id), [favorites, id]);

  const img = `${urls.imgBase}w500/${poster_path}`;

  return (
    <div className={css.container}>
      {poster_path && (
        <li>
          <span
            className={css.favorite}
            onClick={(event) => {
              isFavorite ? dispatch(removeFromFavorites(movie)) : dispatch(addToFavorite(movie));
            }}
          >
            {isFavorite ? "FULL HEART" : "EMPTY HEART"}
          </span>
          <Link className={`${css.card} ${styleCard}`} to={`/movie/${id}`} style={{ backgroundImage: `url(${img})` }}>
            <div className={css.card__wrapper}>
              <GenreBadge styleGenre={styleGenre} genreIds={genre_ids} genres={genres} />
              <StarsRating value={vote_average} />
              <h3 className={`${css.title} ${`${styleTitle}` || css.card__title}`}>{title}</h3>
            </div>
          </Link>
        </li>
      )}
    </div>
  );
};

export { MovieListCard };
