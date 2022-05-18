export const signup = (email, password, firstName, lastName) => {
    return fetch('/api/accounts', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName })
    }).then(res => res.json())
};

export const login = (email, password) => {
    return fetch('/api/accounts/security/token', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password })
    }).then(res => res.json())
};

// Security and Authentication: Check Valid Security token from local storage
export const getMovies = async () => {
    const res = await fetch(
        '/api/movies', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    return res.json();
};

export const getUpComingMovies = async () => {
    const res = await fetch(
        '/api/movies/upcoming', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    return res.json();
};


export const getMovie = async (args) => {
    console.log("getMovie invoked from movie-api")
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const res = await fetch(
        `/api/movies/${id}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    return res.json();
};

export const getMovieReviews = async (id) => {
    console.log("getMovie/{id} Reviews invoked from movie-api")
    const res = await fetch(
        `/api/movies/${id}/reviews`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    return res.json();
};


export const getSimilarMovies = async (id) => {
    console.log("get similar movies invoked from movie-api")
    const res = await fetch(
        `/api/movies/${id}/similar`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    return res.json();
};

export const getTopRatedMovies = async () => {
    const res = await fetch(
        '/api/movies/top_rated', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    return res.json();
};


export const getNowPlayingMovies = async () => {
    console.log("get now playing movies invoked from movie-api")
    const res = await fetch(
        '/api/movies/now_playing', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    )
    return res.json();
};

// export const getFavourites = (id) => {
//     console.log("Get favorites from user account")
//     return fetch(
//         `/api/account/${id}/favourites`, {
//         headers: {
//             'Authorization': window.localStorage.getItem('token')
//         }
//     }
//     ).then(res => res.json());
// };


export const addFavourite = (movieId, email) => {
    console.log("movie id: ", movieId)
    return fetch(`/api/accounts/${email}/favouritesByEmail`, {
        headers: {
           // 'Content-Type': 'application/json',
            //'Authorization': window.localStorage.getItem('token')
        },
        method: 'post',
        body: JSON.stringify({ movieId: movieId, email : email })
    }).then(res => res.json())
};
