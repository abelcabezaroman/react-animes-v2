import { Link } from "react-router-dom";
import "./Gallery.scss";

export default function Gallery({
  list,
  itemClassName = "mb-3 col-12 col-md-4 col-lg-2"
}) {
  return (
    <div className="c-gallery">
      <div className="row">
        {list.map((anime) => (
          <Link
            className={itemClassName}
            to={`/animes/${anime.id}`}
            key={anime.id}
          >
            <figure className="c-gallery__item">
              <img
                src={anime.attributes.posterImage.medium}
                alt={anime.attributes.canonicalTitle}
              />
              <figcaption className="c-gallery__title">
                {anime.attributes.canonicalTitle}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}
