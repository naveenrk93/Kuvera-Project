export default (state={}, action) => {
    switch(action.type){
        case "FETCH_FUND":
            return action.payload;
        default:
            return state;
    }
}