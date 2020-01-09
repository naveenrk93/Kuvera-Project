export default (state={}, action) => {
    switch(action.type){
        case "SEARCH_FIELD":
            return action.payload;
        default:
            return state;
    }
}

