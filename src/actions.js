export const setDetails = (movie_obj) => {
    return {
        type: "SET_DETAILS",
        payload: movie_obj
    }
}
export const setDetails_another = (movie_obj) => {
    return {
        type: "SET_DETAILS_ANOTHER",
        payload: movie_obj
    }
}

