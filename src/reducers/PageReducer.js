export default (state={}, action) => {
    switch(action.type){
        case "FETCH_FUNDS":
            return 1;
        case "CHANGE_PAGE":
            return action.payload;
        default:
            return state;
    }
}

