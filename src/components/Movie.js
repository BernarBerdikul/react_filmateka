import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({id, year, title, summary, image, genres}) {
    return (
    <div className="movie">
        <img src={image} alt={title} title={title} />
        <div className="movie__column">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) => {
                    return <li key={index} className="genres__genre">{genre}</li>
                })}
            </ul>
            <p className="movie__summary">{summary.slice(0, 130)}...</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
