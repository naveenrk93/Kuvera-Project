export default (state={}, action) => {
    switch(action.type){
        case "SEARCH":
            return action.payload;
        case "SEARCH_FIELD":
            return ""
        default:
            return state;
    }
}

