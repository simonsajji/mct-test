

const initiaState = {
    i:'',
    tit:'',
    yr:'',
    synopsis:'',
    genre:[],
    rating:0,
    Poster:'',
    another_tit:'',
};

const reducer = (currentState = initiaState, action) => {
    const newState = { ...currentState };

    switch(action.type) {
        case "SET_DETAILS":
            newState.tit=action.payload.title;
            newState.yr=action.payload.released;
            newState.i=action.payload.imageurl[0];
            newState.synopsis=action.payload.synopsis;
            newState.genre=action.payload.genre;
            newState.rating=action.payload.imdbrating;
           
            break;

        case "SET_DETAILS_ANOTHER":

        newState.tit=action.payload.Title;
        newState.i=action.payload.Poster;
        newState.yr=action.payload.Year;

            break;

        
         
            
    }

    return newState;
}

export default reducer;