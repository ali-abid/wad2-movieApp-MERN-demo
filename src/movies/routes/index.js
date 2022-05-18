import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);

    // verify all routes
    router.route('/*')
        .all(accountsController.verifyToken); //ADD THIS: require token for all routes

    // api/movies/
    router.route('/')
        .get(accountsController.verifyToken, moviesController.find);


    //api/movies/top_rated
    router.route('/top_rated')
        .get(accountsController.verifyToken, moviesController.getTopRatedMovies);

    //api/movies/now-playing
    router.route('/now_playing')
        .get(accountsController.verifyToken, moviesController.getNowPlayingMovies);

    //api/movies/upcoming
    router.route('/upcoming')
        .get(accountsController.verifyToken, moviesController.getUpcomingMovies);


    // api/movies/{moive-id}
    router.route('/:id')
        .get(accountsController.verifyToken, moviesController.getMovie);
        

    // api/movies/{movie-id}/reviews
    router.route('/:id/reviews')
        .get(accountsController.verifyToken,moviesController.getMovieReviews);


    // api/movies/{movie-id}/similar
    router.route('/:id/similar')
        .get(accountsController.verifyToken, moviesController.getMovieSimilar);

    

    
    router.route('/:id')
        .post(moviesController.updateAccount);

   
    


    return router;
};
export default createMoviesRouter;