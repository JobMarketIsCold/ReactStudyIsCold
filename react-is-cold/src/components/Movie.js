import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movie, id, coverImg, title, summary, genres }) {
	return (
		<div>
			<Link to={`/movie/${id}`}>
				<img src={coverImg} alt={title} />
				<h2>{title}</h2>
			</Link>
			<p>{summary}</p>
			<ul>
				{movie.hasOwnProperty("genres")
					? genres.map((g) => <li key={g}>{g}</li>)
					: null}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
