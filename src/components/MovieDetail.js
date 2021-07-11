import React from 'react';
import "./MovieDetail.css"

class MovieDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state){
            return (
                <div className="movie_detail">
                    <img src={location.state.image} alt={location.state.title} title={location.state.title} />
                    <h3 className="movie_detail__title">{location.state.title} ({location.state.year})</h3>
                    <ul className="movie_detail__genres">
                        {location.state.genres.map((genre, index) => {
                            return <li key={index} className="genres__genre">{genre}</li>
                        })}
                    </ul>
                    <p className="movie_detail__summary">{location.state.summary.slice(0, 130)}...</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

// MovieDetail.propTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default MovieDetail;
