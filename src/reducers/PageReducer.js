export default (state={}, action) => {
    switch(action.type){
        case "FETCH_FUNDS":
            return 1;
        case "CHANGE_PAGE":
            return action.payload;
        case "SEARCH":
            return 1;
        default:
            return state;
    }
}

