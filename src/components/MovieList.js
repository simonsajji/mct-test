import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDetails_another } from '../actions';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	const dispatch=useDispatch();

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3' key={index} onClick={()=>{dispatch(setDetails_another(movie));props.execFn()}}>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
