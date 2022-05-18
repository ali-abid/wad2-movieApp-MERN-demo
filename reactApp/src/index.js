import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import UpComingMoviesPage from "./pages/movieUpComing"; // NEW
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import WatchListPage from "./pages/watchListPage"; // NEW
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; // NEW
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage"; // NEW
import CelebritiesHomePage from "./pages/celebritiesHomePage"; // NEW
import CelebrityDetailsPage from "./pages/celebrityDetailsPage"; // NEW
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./privateRoute/privateRoute";
import AuthContext from "./contexts/authContext";
import AuthHeader from "./components/headerAuth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      
        <MoviesContextProvider>
          <Suspense fallback={<h1>Loading page</h1>}>
            <AuthContext>
              <SiteHeader/>
              <AuthHeader />
              <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route path="/actors/home" component={CelebritiesHomePage} />
                <Route path="/actors/:id" component={CelebrityDetailsPage} />
                <PrivateRoute exact path="/movies/now-playing" component={NowPlayingMoviesPage} />
                <PrivateRoute exact path="/movies/top-rated" component={TopRatedMoviesPage} />
                <PrivateRoute exact path="/movies/watchList" component={WatchListPage} />
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <PrivateRoute exact path="/movies/upcoming" component={UpComingMoviesPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <PrivateRoute exact path="/movies/favourites" component={FavouriteMoviesPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <PrivateRoute exact path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </AuthContext>
          </Suspense>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));